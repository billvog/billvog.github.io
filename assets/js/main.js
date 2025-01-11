document.addEventListener("DOMContentLoaded", function () {
  const copyrightYear = document.getElementById("copyright-year");
  const currentYear = new Date().getFullYear();
  copyrightYear.innerHTML = currentYear;
});
