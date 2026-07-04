# دعوة فرح #2 — Jonathan & Juliana

> اللينك المرجعي: https://invitation-template-4.netlify.app/

## 💍 الدعوة بتتكلم عن إيه؟
قالب دعوة فرح إنجليزي بطابع كلاسيكي/فاخر للعروسين **Jonathan & Juliana**،
يوم **Monday, May 23, 2026** الساعة **10:00 PM**.
الهوية البصرية لون كحلي غامق (`#0F1A17`) + ذهبي (`#D4AF37`) + عاجي،
وخطوط Great Vibes للأسماء والعناوين الزخرفية + Montserrat للنصوص.

## 📂 محتوى الفولدر
```
2/
├── index.html        ← افتحه عبر سيرفر محلي
├── styles.css
├── script.js
├── assets/           ← صور المعرض + الورود + خاتم الزفاف + الفاصل الزخرفي
└── _original/        ← مخرجات الـ scraper (HTML/CSS/screenshots) للمرجعية فقط
```

## ✨ الأقسام (نفس ترتيب الموقع الأصلي)
1. **Hero** — "Save the Date" + الأسماء (Great Vibes) + إطار ذهبي + ٤ زخارف فلورال في الكورنرز.
2. **Intro quote** — جملة افتتاحية بأنيميشن stagger حرف-حرف عند الـ scroll.
3. **Countdown** — عدّاد تنازلي شغّال لـ `2026-05-23 22:00`.
4. **Date strip** — `MONDAY — 23 — MAY · AT 10:00 PM`.
5. **Schedule** — ٣ كروت: The Ceremony / The Reception / The Party بأيقونات SVG.
6. **Rings** — صورة خاتم الزفاف بدوران بطيء + تأثير light-sweep.
7. **Love Story** — Timeline عمودي بـ ٥ محطات (2019 → 2026) بأيقونة قلب.
8. **Gallery** — ٣ صور بـ hover zoom.
9. **Dress Code** — "Black Tie Optional" + ٤ swatches للألوان.
10. **Location** — العنوان + Google Maps embed + زرار View Location.
11. **Footer** — الأسماء + التاريخ مختصرين.

## 🛠 التكنولوجيا
- **HTML5 / CSS3 / Vanilla JS** — بدون أي build step.
- **Google Fonts**: Great Vibes + Montserrat.
- **IntersectionObserver** للأنيميشن عند الـ scroll (fade + slide-up).
- **CSS Keyframes**: `spin-slow` للخاتم، `light-sweep` للبريق.
- **Responsive**: mobile-first مع breakpoints على 640/768px.

## ▶️ التشغيل
الملفات Static بالكامل — يكفي فتح سيرفر محلي بسيط في فولدر `2/`:

```bash
# من جذر المشروع
npx serve 2 -l 8080
# أو
python -m http.server 8080 --directory 2
```
وبعدين افتح: <http://localhost:8080/>

> ملاحظة: لو فتحت `index.html` بدبل-كليك مباشرة، خط Google Fonts والـ Maps embed
> هيشتغلوا تمام، بس بعض المتصفحات بتقفل بعض المزايا على `file://` — يفضّل السيرفر المحلي.

## 🎨 ألوان الـ Design Tokens
| الاسم | القيمة |
|---|---|
| Background | `#0F1A17` (كحلي مخضر غامق) |
| Foreground | `#F5F5F5` (عاجي) |
| Primary (Gold) | `#D4AF37` |
| Muted | `#635636` |

## ⚠️ ملاحظة استخدام
كل المحتوى (الأسماء، التواريخ، النصوص، الصور) منقول من القالب الأصلي
بغرض التطابق البصري. لو هتستخدم النسخة دي لفرح حقيقي، عدّل:
- الأسماء والتاريخ في `index.html` + الـ target في `script.js`.
- صور `assets/gallery-*` بصور العروسين.
- لينك Google Maps في قسم `LOCATION`.
