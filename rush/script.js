async function quickLogin(selectedUser) {
    // กำหนดด้าน (Side) อัตโนมัติจากชื่อ เพื่อแสดง Error ให้ถูกฝั่ง
    const side = (selectedUser === 'tathanad') ? 'left' : 'right';
    const errorElement = document.getElementById(`error-${side}`);
    
    // กำหนดไฟล์ปลายทาง
    const redirectUrl = `resume_${selectedUser}.html`;

    try {
        // 1. อ่านไฟล์ auteur เพื่อตรวจสอบความถูกต้องตามกฎ
        const response = await fetch('auteur');
        if (!response.ok) throw new Error("Cannot read auteur file");
        
        const text = await response.text();
        const validUsers = text.split('\n').map(u => u.trim());

        // 2. ตรวจสอบว่าชื่อที่กด มีอยู่ในไฟล์ auteur หรือไม่
        if (validUsers.includes(selectedUser)) {
            // ถ้ามีชื่อถูกต้อง -> บันทึก Cookie และไปหน้าถัดไป
            setCookie("username", selectedUser, 1);
            
            // เอฟเฟกต์เล็กน้อยก่อนเปลี่ยนหน้า (Optional)
            errorElement.style.color = "#2ecc71"; // สีเขียว
            errorElement.innerText = "Verifying...";
            
            setTimeout(() => {
                window.location.href = redirectUrl; 
            }, 500); // หน่วงเวลา 0.5 วินาทีให้เห็นสถานะ
            
        } else {
            // ถ้าชื่อไม่มีในไฟล์ auteur
            errorElement.style.color = "red";
            errorElement.innerText = "Error: User not found in auteur file!";
        }

    } catch (error) {
        console.error(error);
        errorElement.innerText = "System Error";
    }
}

// ฟังก์ชัน Cookie คงเดิม
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}