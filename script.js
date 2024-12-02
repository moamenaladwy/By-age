// الحصول على العنصر الذي سيتم إضافة السنوات فيه
var yearList = document.getElementById("yearList");

// حلقة for للطباعة من 2024 إلى 1919
for (var year = 2024; year >= 1919; year--) {
    if (year === 1948) {
        continue; // تخطي سنة 1948
    }
    
    // إنشاء عنصر <li> لتمثيل السنة
    var listItem = document.createElement("li");
    listItem.textContent = year;
    
    // إضافة العنصر إلى القائمة في الـ HTML
    yearList.appendChild(listItem);
}
