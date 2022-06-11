const btn = document.getElementById('btn')
btn.onclick = function taha() {
    swal("Are you sure you want to do this?", {
        buttons: ["Oh noez!", true],
    });

    window.alert("hello")
}