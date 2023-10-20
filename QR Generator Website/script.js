let show_qr = document.getElementById("showQR");
let qr = document.getElementById("qr");
let u_qr_txt = document.getElementById("u_txt");
function GenerateQR() {

    if (u_qr_txt.value.length > 0) {
        qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${u_qr_txt.value}`;
        show_qr.classList.add("show-qr");

    }
    else {
        alert('Please Enter Text or URL');
    }
}