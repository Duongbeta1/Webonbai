// Sticky navbar
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Navbar toggle
const header = document.getElementById("header");
const toggle = document.getElementById("toggle");
const navbar = document.getElementById("primary-navbar");

document.onclick = function (e) {
    if (
        e.target.id !== "header" &&
        e.target.id !== "toggle" &&
        e.target.id !== "primary-navbar" &&
        !e.target.closest(".language-dropdown") // Loại trừ menu ngôn ngữ
    ) {
        toggle.classList.remove("active");
        navbar.classList.remove("active");

        // Đóng menu ngôn ngữ nếu đang mở
        if (langMenu && langMenu.classList.contains("open")) {
            langMenu.style.maxHeight = "0";
            setTimeout(() => {
                langMenu.classList.remove("open");
            }, 300);
        }
    }
};

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navbar.classList.toggle("active");
});

// FAQ accordion
const acc = document.getElementsByClassName("accordian_item");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
    });
}

// Scroll fade-in effect
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");
    const fadeIn2Elements = document.querySelectorAll(".fade-in2");

    const handleScroll = () => {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const triggerHeight = window.innerHeight * 4 / 5;
            if (rect.top < triggerHeight) {
                el.classList.add("visible");
            }
        });

        fadeIn2Elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const triggerHeight = window.innerHeight * 4 / 5;
            if (rect.top < triggerHeight) {
                el.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

// Preloader
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        const loadingTime = 2000;
        setTimeout(() => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 3000);
            document.body.classList.remove("hidden-content");
            document.body.classList.add("loaded-content");
        }, loadingTime);
    });

    document.body.classList.add("hidden-content");
});


// Đối tượng chứa các ngôn ngữ và nội dung
const languages = {
    en: {
        home: "Home",
        features: "Benefit",
        about: "About",
        contact: "Contact",
        get_courses: "Join group",
        training_title: "Train in<span> learning skills </span>for self-development",
        banner_text: "Start learn now for self-development :D",
        start_course_btn: "Start a lesson",
        expert_title1: "DuongApi",
        live_class_title: "Save more time",
        chat_class_title: "Easy to remember",
        feature_video_title: "🤔What is this website for? and is it effective?",
        feature_video_text: "🤓Of course every website will have its own purpose and this website is created to save time in finding review questions.<br> And all the benefits of this website will include 👇",
        learn_from_experts: "Personal rights",
        learn_from_experts_text: "We always listen to user feedback to improve the website.",
        lifetime_support: "Save time",
        lifetime_support_text: "We created this website to save time in reviewing lessons.",
        professional_certificates: "High efficiency",
        professional_certificates_text: "We always select and shorten answers to make them easy to remember...",
        why_choose_us: "Why<br />Choose<br />Us",
        //card1 card2
        card1_title: "Lao lesson",
        card2_title: "Biology lesson",
        card1_status: "50+ Questions",
        card2_status: "80+ Questions",
        card1_duration: "Will update soon",
        card2_duration: "Will update soon",
        learn_more: "Start learn",
        view_all: "Start learn",
        //info
        popular_courses_title: "Exam Preparation Questions",
        courses_heading: "Lesson",
        backmain: "Return to home page",
        //more info
        more_about_us: "More About Us",
        about_description: "Webook is an online course website that prioritizes practice over theory, with thousands of certified mentors and tens of thousands of students we can produce thousands of graduates who are immediately ready for a professional career.",
        about: "About",
        students: "Questions + Answers",
        experts: "Members",
        courses: "Lessons",
        countries: "Languages",
        //contact
        expert_title: "These are our team group",
        contact_title: "Contact",
        name_label: "Name",
        email_label: "Email",
        message_label: "Message",
        send_button: "Send",
        get_in_touch: "Get In Touch",
        details_description: "If this web have some bug, Misspelling or misinformation. Please contact us",
        footer_description: "Get industry accredited certification and advance through our high-quality online courses.",
        faqlao: "Lao questions are from lessons 1 to 12",
        faq: "FAQ❓",
        faqsinh: "Biology questions from Lesson 1 to Lesson 13",
        //question
        q1:"Is all the information on this website 100% accurate 🤔?",
        ans1: "The information on this website may not be 100% accurate, if you see anything wrong you can post the details in the group or contact us!",
        q2:"How to remember lessons quickly 🤔?",
        ans2:"Remember by yourself =)) 🤓",
        q3:"What if I pay to access this website but fail the exam?",
        ans3:"Because u are not the main character =))"
    },
    vi: {
        home: "Trang chủ",
        features: "Lợi ích",
        about: "Giới thiệu",
        contact: "Liên hệ",
        get_courses: "Vào nhóm",
        training_title: "Huấn luyện <span>kỹ năng trong học tập</span> để phát triển bản thân",
        banner_text: "Hãy bắt đầu ngay bây giờ để phát triển bản thân :D",
        start_course_btn: "Bắt đầu bài học",
        expert_title1: "DuongApi",
        live_class_title: "Tiết kiệm thời gian",
        chat_class_title: "Dễ hiểu dễ nhớ",
        feature_video_title: "🤔Trang web này tạo ra để nhằm mục đích gì và nó có hiệu quả không?",
        feature_video_text: "🤓Tất nhiên mọi trang web sẽ đều có mục đích riêng và trang web này được tạo ra nhằm tiết kiệm thời gian trong việc tìm câu hỏi ôn bài.<br> Và tất cả các lợi ích của web này sẽ có bao gồm 👇",
        learn_from_experts: "Quyền lợi cá nhân",
        learn_from_experts_text: "Chúng tôi luôn lắng nghe ý kiến từ người dùng để cải thiện web",
        lifetime_support: "Tiết kiệm thời gian",
        lifetime_support_text: "Chúng tôi tạo trang web này nhằm để tiết kiệm thời gian trong việc ôn bài",
        professional_certificates: "Hiệu quả cao",
        professional_certificates_text: "Chúng tôi luôn chọn lọc và rút ngắn câu trả lời để dễ dàng nhớ...",
        why_choose_us: "Tại sao<br />chọn<br />chúng tôi",
        //card1
        card1_title: "Môn tiếng lào",
        card1_status: "50+ câu hỏi",
        card1_duration: "Sẽ cập nhật thêm sắp tới",
        //card2
        card2_title: "Môn Sinh học",
        card2_status: "80+ câu hỏi",
        card2_duration: "Sẽ cập nhật thêm sắp tới",
        learn_more: "Bắt đầu học",
        view_all: "Bắt đầu học",
        //info
        popular_courses_title: "📝Câu hỏi ôn thi",
        courses_heading: "Môn học",
        backmain: "Quay lại trang chủ",
        //more info
        more_about_us: "Thông tin thêm về chúng tôi",
        about_description: "Webook là một trang web khóa học trực tuyến ưu tiên thực hành hơn lý thuyết, với hàng nghìn huấn luyện viên chứng nhận và hàng chục nghìn học viên, chúng tôi có thể tạo ra hàng nghìn sinh viên tốt nghiệp sẵn sàng cho sự nghiệp chuyên nghiệp.",
        about: "Thông tin",
        students: "Câu hỏi + Câu trả lời",
        experts: "Nhà phát triển",
        courses: "Môn học",
        countries: "Ngôn ngữ",
        //contact
        expert_title: "Đây là thành viên của chúng tôi💻",
        contact_title: "Liên hệ",
        name_label: "Tên",
        email_label: "Email",
        message_label: "Tin nhắn",
        send_button: "Gửi",
        get_in_touch: "Kết nối với chúng tôi",
        faq: "Câu hỏi thường gặp❓",
        details_description: "Nếu trang web có lỗi, sai chính tả hoặc thông tin. Vui lòng liên hệ với chúng tôi",
        footer_description: "Nhận chứng chỉ được công nhận và nâng cao qua các khóa học trực tuyến chất lượng cao của chúng tôi.",
        faqlao: "Câu hỏi môn tiếng lào có từ bài 1 đến 12",
        faqsinh: "Câu hỏi môn sinh học có từ bài 1 đến 13",
        //question
        q1:"Tất cả thông tin trên trang này có chính xác 100% không 🤔?",
        ans1: "Thông tin trên trang này có thể không chính xác 100%, nếu thấy sai sót bạn có thể đăng thông tin chi tiết trong nhóm hoặc liên hệ với chúng tôi!",
        q2:"Làm sao để có thể nhớ bài nhanh 🤔?",
        ans2:"Tự nhớ =)) 🤓",
        q3:"Nếu như tôi mất tiền vô trang mà thi không được thì sao 😟?",
        ans3:"Do bạn chưa chơi đồ đấy bạn ạ xD"
        
    },
    la: {
        home: "ໜ້າຫຼັກ",
        features: "ຄຸນປະໂຫຍດ",
        about: "ກ່ຽວກັບພວກເຮົາ",
        contact: "ຕິດຕໍ່",
        get_courses: "ເຂົ້າກຸ່ມ",
        training_title: "ຝຶກຝົນ <span>ທັກສະໃນການຮຽນ</span> ເພື່ອພັດທະນາຕົວເອງ",
        banner_text: "ເລີ່ມຕອນນີ້ເລີຍເພື່ອພັດທະນາຕົວເອງ :D",
        start_course_btn: "ເລີ່ມຕົ້ນຮຽນ",
        expert_title1: "DuongApi",
        live_class_title: "ປະຫຍັດເວລາ",
        chat_class_title: "ເຂົ້າໃຈງ່າຍ-ຈົດຈຳງ່າຍ",
        feature_video_title: "🤔ເວບໄຊຮນີ້ສ້າງຂຶ້ນເພຶ່ອຈຸດປະສົງຫຍັງແລະມີປະໂຫຍດຫຍັງແນ່?",
        feature_video_text: "🤓ໂດຍສະເພາະທຸກໆເວບໄຊຮຈະມີຈຸດປະສົງສະເພາະຂອງມັນແລະເວບໄຊຮນີ້ແມ່ນສ້າງຂຶ້ນເພື່ອປະຢັດເວລາໃນການຊອກຄຳຖາມ.<br> ເວບໄຊຮນີ້ປະກອບມີເງື່ອນໄຂດັ່ງລຸ່ມນີ້ 👇",
        learn_from_experts: "ສິດທິສ່ວນບຸກຄົນ",
        learn_from_experts_text: "ພວກເຮົາພ້ອມທີ່ຈະຮັບຟັງທຸກຄວາມຄິດເຫັນຂອງຜູ້ຊົມໃຊ້ເພື່ອຈະປັບປຸງໃຫ້ດີຂຶ້ນ",
        lifetime_support: "ປະຫຍັດເວລາ",
        lifetime_support_text: "ພວກເຮົາສ້າງເວບນີ້ຂຶ້ນເພື່ອປະຫຍັດເວລາໃນການຮຽນ",
        professional_certificates: "ປະສິດຕິພາບສູງ",
        professional_certificates_text: "ພວກເຮົາຈະຄັດຈ້ອນແລະຫຍໍ້ເອົາຄຳຕອບທີ່ຖືກຕ້ອງ,ຄຳຕອບສັ້ນເພື່ອຈື່ຈຳງ່າຍ.",
        why_choose_us: "Why<br/>Choose<br/>Us?",
        //card1
        card1_title: "ວິຊາພາສາລາວ",
        card1_status: "50+ ຄຳຖາມ",
        card1_duration: "ຈະອັບເດດຕື່ມໃນອານາຄົດ",
        //card2
        card2_title: "ວິຊາຊີວະ",
        card2_status: "80+ ຄຳຖາມ",
        card2_duration: "ຈະອັບເດດຕື່ມໃນອານາຄົດ",
        learn_more: "ເລີ່ມຮຽນ",
        view_all: "ເລີ່ມຮຽນ",
        //info
        popular_courses_title: "ຄຳຖາມທວນເສັງ",
        courses_heading: "ວິຊາຮຽນ",
        backmain: "ກັບຄືນໜ້າຫຼັກ",
        //more info 
        more_about_us: "ພາຍໃນກ່ຽວກັບພວກເຮົາ",
        about_description: "Webook ເປັນເວັບໄຊທີ່ມີຫຼັກສູດອອນລາຍທີ່ສົນໃຈກັບການຝຶກຫຼາຍກວ່າທິທີ, ມີຫຼາຍອາຈານທີ່ມີການຮັບຮອງ ແລະ ນັກຮຽນຫຼາຍຮອບຮອງການສົບຜົນທຸກການຮຽນຮູ້",
        about: "About",
        students: "ຄຳຖາມ",
        experts: "ຄົນ",
        courses: "ວິຊາ",
        countries: "ພາສາ",
        //contact
        expert_title: "ເຫຼົ່ານີ້ແມ່ນສະມາຊິກຂອງພວກເຮົາ💻",
        contact_title: "ຕິດຕໍ່",
        name_label: "ຊື່",
        email_label: "ອີເມວ",
        message_label: "ຂໍ້ຄວາມ",
        send_button: "ສົ່ງ",
        get_in_touch: "ຕິດຕໍ່ຫາພວກເຮົາ",
        details_description: "ຖ້າວ່າເວບມີຂໍ້ຜິດພາດໃດໜື່ງ, ກະລຸນາທັກຫາພວກຂ້ອຍ",
        footer_description: "ໄດ້ຮັບໃບຮັບຮອງທີ່ເປັນທີ່ຢອມຮັບ ແລະພັດທະນາຜ່ານຄອສຮຽນອອນລາຍທີ່ມີຄຸນນະພາບສູງ.",
        faq: "ຄຳຖາມທີ່ພົບເຫັນໄດ້ບ່ອຍ❓",
        faqlao: "ຄໍາຖາມທວນວິຊາພາສາລາວມີເເຕ່ບົດທີ 1 ຫາ 12",
        faqsinh: "ຄຳຖາມທວນຄືນວິຊາຊີວະເເຕ່ບົດທີ1 ຫາ 13",
        //question
        q1:"ທຸກໆຂໍ້ມູນຢູ່ໃນເວບໄຊນີ້ມັນຖືກຕ້ອງ 100% ບໍ່ 🤔?",
        ans1: "ຂໍ້ມູນຢູ່ໃນເວບໄຊນີ້ມັນອາດຈະບໍ່ຖືກຕ້ອງ 100%, ຖ້າວ່າເຫັນຜິດຢູ່ບ່ອນໃດເຈົ້າສາມາດລົງລາຍລະອຽດຢູ່ໃນກຸ່ມຫຼືທັກຫາພວກຂ້ອຍ!",
        q2:"ເຮັດຈັ່ງໃດເພື່ອສາມາດຈື່ຈຳບົດຮຽນໄວ 🤔?",
        ans2:"ຈື່ເອງ =)) 🤓",
        q3:"ຖ້າວ່າຂ້ອຍເສຍເງິນເພື່ອເຂົ້າເວັບໄຊນີ້ແຕ່ເສັງບໍ່ໄດ້ຈະເປັນຈັ່ງໃດ 😟?",
        ans3:"ຍ້ອນເຈົ້າບໍ່ໄດ້ດຸໝັ່ນຮໍ່າຮຽນ🤓"
    },
};

// Hàm thay đổi ngôn ngữ
function applyLanguage(lang) {
    console.log(`Chuyển sang ngôn ngữ: ${lang}`);

    // Lấy tất cả các phần tử cần thay đổi
    const elements = document.querySelectorAll("[data-i18n]");

    // Thay thế văn bản của các phần tử dựa trên ngôn ngữ đã chọn
    elements.forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (languages[lang] && languages[lang][key]) {
            // Chỉ thay đổi nội dung văn bản, không thay đổi thẻ HTML hoặc thuộc tính CSS
            el.innerHTML = languages[lang][key];
        }
    });

    // Cập nhật ngôn ngữ hiện tại vào phần tử
    const currentLang = document.getElementById("current-language");
    if (currentLang) {
        currentLang.textContent = languages[lang]["home"]; // Hoặc thay bằng tên ngôn ngữ
    }
}

// Lưu ngôn ngữ vào localStorage
function setLanguage(lang) {
    localStorage.setItem("language", lang);
    applyLanguage(lang);
}

// Khi trang tải lại, áp dụng ngôn ngữ đã lưu
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "vi"; // Mặc định là tiếng Việt
    applyLanguage(savedLang);

    const langToggle = document.getElementById("lang-selector-toggle");
    const langMenu = document.getElementById("lang-options-menu");
    const preloader = document.getElementById("preloader");

    if (langToggle && langMenu && preloader) {
        // Toggle language menu
        langToggle.addEventListener("click", () => {
            if (langMenu.classList.contains("open")) {
                langMenu.style.maxHeight = "0";
                setTimeout(() => {
                    langMenu.classList.remove("open");
                }, 300);
            } else {
                langMenu.classList.add("open");
                langMenu.style.maxHeight = langMenu.scrollHeight + "px";
            }
        });

        // Select language from menu
        langMenu.addEventListener("click", (e) => {
            if (e.target.tagName === "LI") {
                const selectedLang = e.target.dataset.lang;

                // Hiển thị preloader
                preloader.classList.add("active");

                // Set language to localStorage and apply it
                setLanguage(selectedLang);

                // Đợi 1 giây và ẩn preloader
                setTimeout(() => {
                    preloader.classList.remove("active");
                }, 1000); // 1000 ms = 1 giây

                // Đóng menu sau khi chọn ngôn ngữ
                langMenu.style.maxHeight = "0";
                setTimeout(() => {
                    langMenu.classList.remove("open");
                }, 300);
            }
        });
    }
});
