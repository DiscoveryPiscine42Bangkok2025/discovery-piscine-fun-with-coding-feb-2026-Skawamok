function toggleProfileInfo() {
    var panel = document.getElementById("profile-panel");
    panel.classList.toggle("active");
}

const works = {
    1: {
        title: "แข่งขันหุ่นยนต์ระดับสูง ระดับชาติ",
        desc: "การเขียนโค้ดและสร้างหุ่นยนต์ เพื่อบังคับหุ่นยนต์ ให้สามารถทำตามภารกิจในระยะเวลาที่กำหนด",
        img: "img/robot_1.png"
    },
    2: {
        title: "แข่งขันหุ่นยนต์ระดับสูง ระดับเขตพื้นที่",
        desc: "สร้างหุ่นยนต์และเขียนโค้ดเพื่อควบคุมหุ่นยนต์ ทำตามภารกิจที่ได้รับมอบหมายโดยใช้เวลาที่น้อยที่สุด ",
        img: "img/rob_3.png"
    },
    3: {
        title: "Mini Project",
        desc: "เป็นการจำลองตัวรถเข็นนำมาติดกับที่คีบเพื่อหยิบของใส่ตะกร้าได้ เคลื่อนที่ตามเส้นทางที่ทำไว้ที่พื้นไปยังชั้นวางต่างๆ",
        img: "img/rob5.png"
    }
};

function openModal(id) {
    const modal = document.getElementById('simpleModal');
    const data = works[id];

    if(data) {
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalDesc').innerText = data.desc;
        document.getElementById('modalImg').src = data.img;
        
        modal.style.display = "flex";
        document.body.style.overflow = "hidden"; 
    }
}

function closeModal(event) {
    const modal = document.getElementById('simpleModal');
    if (event.target === modal || event.target.classList.contains('modal-close-btn')) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}