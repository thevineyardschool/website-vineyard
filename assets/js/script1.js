function changeReadMore() {
    const rmcontent =
        document.getElementById('rmboxid');
    const rmbutton =
        document.getElementById('readMore');
    const span1 = document.getElementById("span1")

    if (rmcontent.style.display === 'none'
        || rmcontent.style.display === '') {
            rmcontent.style.display = 'block';
        span1.style.display = "none";
        rmbutton.textContent = 'Read Less';
    } else {
        rmcontent.style.display = 'none';
        rmbutton.textContent = 'Read More';        
    }
}