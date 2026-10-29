import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, serviceType, preferredContact, message, privacyAgreed } = body;

    // Strict Server-side Validation
    if (!fullName || !email || !phone || !message || !privacyAgreed) {
      return NextResponse.json(
        { error: "جميع الحقول المطلوبة يجب تعبئتها مع الموافقة على الخصوصية." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "صيغة البريد الإلكتروني المدخلة غير صحيحة." },
        { status: 400 }
      );
    }

    // Check for configured external mailer environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const smtpHost = process.env.SMTP_HOST;

    if (resendApiKey) {
      // Live integration via Resend
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.EMAIL_FROM || "onboarding@resend.dev",
            to: process.env.EMAIL_TO || "b.a.alj3fr@hotmail.com",
            subject: `طلب استفسار جديد من: ${fullName}`,
            html: `
              <h2>استفسار جديد عبر موقع مكتب بيان</h2>
              <p><strong>الاسم:</strong> ${fullName}</p>
              <p><strong>البريد الإلكتروني:</strong> ${email}</p>
              <p><strong>رقم الهاتف:</strong> ${phone}</p>
              <p><strong>نوع الخدمة:</strong> ${serviceType || "غير محدد"}</p>
              <p><strong>طريقة التواصل المفضلة:</strong> ${preferredContact}</p>
              <p><strong>نص الطلب:</strong></p>
              <p>${message}</p>
            `,
          }),
        });

        if (response.ok) {
          return NextResponse.json({
            mode: "live",
            message: "تم إرسال استفسارك بنجاح إلى البريد الرسمي لمكتب بيان.",
          });
        }
      } catch (err) {
        console.error("Failed to send via Resend:", err);
      }
    }

    // If external mail keys are not configured, return transparent advisory response
    return NextResponse.json({
      mode: "demo",
      message:
        "تم التحقق من صحة واكتمال بيانات الاستفسار بنجاح. لتفعيل الإرسال البريدي الآلي المباشر عبر السيرفر إلى b.a.alj3fr@hotmail.com، يُرجى إضافة RESEND_API_KEY أو بيانات SMTP في ملف .env.local. في هذه الأثناء، تم تجهيز الرابط المباشر لإرسال البيانات فوريًا إلى واتساب أو تطبيق البريد.",
      data: {
        fullName,
        email,
        phone,
        serviceType,
        preferredContact,
      },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "حدث خطأ غير متوقع أثناء معالجة البيانات." },
      { status: 500 }
    );
  }
}
