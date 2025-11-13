const all_buttons = document.querySelectorAll(".filet-btn");
const all_images = document.querySelectorAll(".image");

//karna setiap button harus bisa di click,dan menjalankan fungsi yg sama
//maka kita harus gunakan perulangan

all_buttons.forEach((buttons_each) => {
    buttons_each.addEventListener("click", () => {
       
        all_buttons.forEach((btn) => btn.classList.remove("active"));
        buttons_each.classList.add("active");

        const filter = buttons_each.getAttribute("data-filter");
        
        //menampilakan atau sembunyikan semua gambar
        all_images.forEach((image_each) => {
            if(filter === "All" || image_each.classList.contains
                (filter)) {

                image_each.style.display = "block";
            } else {
                image_each.style.display = "none";
            }
        })


    });
});
