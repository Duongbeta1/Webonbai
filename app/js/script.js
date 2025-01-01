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
        get_courses: "Start lesson",
        training_title: "Train in<span> learning skills </span>for self-development",
        banner_text: "Start learn now for self-development :D",
        start_course_btn: "Start a lesson",
        expert_title: "DuongApi",
        live_class_title: "Save more time",
        chat_class_title: "Easy to remember",
        feature_video_title: "High-quality video, audio, and live classes.",
        feature_video_text: "High-quality videos surpass industry standards...",
        learn_from_experts: "Learn from Experts",
        learn_from_experts_text: "We collaborate with industry leaders...",
        lifetime_support: "Lifetime Support",
        lifetime_support_text: "We ensure lifetime support...",
        professional_certificates: "Professional Certificates",
        professional_certificates_text: "Receive globally recognized certificates...",
        why_choose_us: "Why<br />Choose<br />Us",
        //card1 card2
        card1_title: "Lao lesson",
        card2_title: "Biology lesson",
        card1_status: "50+ Questions",
        card2_status: "30+ Questions",
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
        faq: "FAQ"
    },
    vi: {
        home: "Trang chủ",
        features: "Lợi ích",
        about: "Giới thiệu",
        contact: "Liên hệ",
        get_courses: "Bắt đầu bài học",
        training_title: "Huấn luyện <span>kỹ năng trong học tập</span> để phát triển bản thân",
        banner_text: "Hãy bắt đầu ngay bây giờ để phát triển bản thân :D",
        start_course_btn: "Bắt đầu bài học",
        expert_title: "DuongApi",
        live_class_title: "Tiết kiệm thời gian",
        chat_class_title: "Dễ hiểu dễ nhớ",
        feature_video_title: "Video, âm thanh, lớp học trực tiếp và khóa học chất lượng cao.",
        feature_video_text: "Video chất lượng cao là video có độ phân giải...",
        learn_from_experts: "Học từ các chuyên gia",
        learn_from_experts_text: "Chúng tôi hợp tác với các nhà lãnh đạo...",
        lifetime_support: "Hỗ trợ trọn đời",
        lifetime_support_text: "Chúng tôi đảm bảo hỗ trợ trọn đời...",
        professional_certificates: "Chứng chỉ chuyên nghiệp",
        professional_certificates_text: "Sau khi hoàn thành lớp học...",
        why_choose_us: "Tại sao<br />chọn<br />chúng tôi",
        //card1
        card1_title: "Môn tiếng lào",
        card1_status: "50+ câu hỏi",
        card1_duration: "Sẽ cập nhật thêm sắp tới",
        //card2
        card2_title: "Môn Sinh học",
        card2_status: "30+ câu hỏi",
        card2_duration: "Sẽ cập nhật thêm sắp tới",
        learn_more: "Bắt đầu học",
        view_all: "Bắt đầu học",
        //info
        popular_courses_title: "Câu hỏi ôn thi",
        courses_heading: "Môn học",
        backmain: "Quay lại trang chủ",
        //more info
        more_about_us: "Thông tin thêm về chúng tôi",
        about_description: "Webook là một trang web khóa học trực tuyến ưu tiên thực hành hơn lý thuyết, với hàng nghìn huấn luyện viên chứng nhận và hàng chục nghìn học viên, chúng tôi có thể tạo ra hàng nghìn sinh viên tốt nghiệp sẵn sàng cho sự nghiệp chuyên nghiệp.",
        about: "About",
        students: "Câu hỏi + Câu trả lời",
        experts: "Nhà phát triển",
        courses: "Môn học",
        countries: "Ngôn ngữ",
        //contact
        expert_title: "Đây là thành viên của chúng tôi",
        contact_title: "Liên hệ",
        name_label: "Tên",
        email_label: "Email",
        message_label: "Tin nhắn",
        send_button: "Gửi",
        get_in_touch: "Kết nối với chúng tôi",
        faq: "Câu hỏi thường gặp",
        details_description: "Nếu trang web có lỗi, sai chính tả hoặc thông tin. Vui lòng liên hệ với chúng tôi",
        footer_description: "Nhận chứng chỉ được công nhận và nâng cao qua các khóa học trực tuyến chất lượng cao của chúng tôi.",
        faqlao: "Câu hỏi môn tiếng lào có từ bài 1 đến 12"
        
    },
    la: {
        home: "ໜ້າຫຼັກ",
        features: "ຄຸນປະໂຫຍດ",
        about: "ກ່ຽວກັບພວກເຮົາ",
        contact: "ຕິດຕໍ່",
        get_courses: "ເລີ່ມຕົ້ນຮຽນ",
        training_title: "ຝຶກຝົນ <span>ທັກສະໃນການຮຽນ</span> ເພື່ອພັດທະນາຕົວເອງ",
        banner_text: "ເລີ່ມຕອນນີ້ເລີຍເພື່ອພັດທະນາຕົວເອງ :D",
        start_course_btn: "ເລີ່ມຕົ້ນຮຽນ",
        expert_title: "DuongApi",
        live_class_title: "ປະຫຍັດເວລາ",
        chat_class_title: "ເຂົ້າໃຈງ່າຍ-ຈົດຈຳງ່າຍ",
        feature_video_title: "ວິດີໂອຄຸນນະພາບສູງ...",
        learn_from_experts: "ຮຽນຈາກຜູ້ເຊື່ອຊານ",
        learn_from_experts_text: "ພວກເຮົາຮ່ວມມືກັບຜູ້ນໍາ...",
        lifetime_support: "ສະໜອງຄວາມຊ່ວຍເຫຼືອຕະຫຼອດຊີວິດ",
        lifetime_support_text: "ພວກເຮົາປ່ອນສະໜອງ...",
        professional_certificates: "ໃບຮັບຮອງມືອາຊີບ",
        professional_certificates_text: "ໄດ້ຮັບໃບຮັບຮອງທີ່ເຂົ້າໃຈ...",
        why_choose_us: "ເປັນເຫດທີ່<br />ເລືອກ<br />ພວກເຮົາ",
        //card1
        card1_title: "ວິຊາພາສາລາວ",
        card1_status: "50+ ຄຳຖາມ",
        card1_duration: "ຈະອັບເດດຕື່ມໃນອານາຄົດ",
        //card2
        card2_title: "ວິຊາຊີວະ",
        card2_status: "30+ ຄຳຖາມ",
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
        experts: "ຜູ້ຊົມຊົນ",
        courses: "ວິຊາ",
        countries: "ພາສາ",
        //contact
        expert_title: "ເຫຼົ່ານີ້ແມ່ນສະມາຊິກຂອງພວກເຮົາ",
        contact_title: "ຕິດຕໍ່",
        name_label: "ຊື່",
        email_label: "ອີເມວ",
        message_label: "ຂໍ້ຄວາມ",
        send_button: "ສົ່ງ",
        get_in_touch: "ຕິດຕໍ່ຫາພວກເຮົາ",
        details_description: "ຖ້າວ່າເວບມີຂໍ້ຜິດພາດໃດໜື່ງ, ກະລຸນາທັກຫາພວກຂ້ອຍ",
        footer_description: "ໄດ້ຮັບໃບຮັບຮອງທີ່ເປັນທີ່ຢອມຮັບ ແລະພັດທະນາຜ່ານຄອສຮຽນອອນລາຍທີ່ມີຄຸນນະພາບສູງ.",
        faq: "ຄຳຖາມທີ່ພົບເຫັນໄດ້ບ່ອຍ",
        faqlao: "ຄໍາຖາມທວນວິຊາພາສາລາວມີເເຕ່ບົດທີ 1 ຫາ 12"
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
