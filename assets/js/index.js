/* Sé que no se tiene en cuenta javascript, es pot que me da mucho toc tener svgs hardcodeados en el html y por prácticar */
const svg_tick =
  `<svg
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    class="tick-icon-svg"
    fill="#ffffff"
    viewBox="0 0 24 24"
  >
    <path
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m16.398-2.38a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308z"
    ></path>
  </svg>`;
const tick_dom_element = document.getElementsByClassName("tick-icon");
for (let i = 0; i < tick_dom_element.length; i++) {
  console.log(tick_dom_element[i]);
  tick_dom_element[i].innerHTML = svg_tick;
}

/* Añado el efecto hover por javascript, porque en grid, tal como estaba en css, era muy dificil (en un "table" seria mas fácil) */
const planItems = document.querySelectorAll('.plans-table .plan-item');
for (let i = 3; i < planItems.length; i += 3) {
  const row = [planItems[i], planItems[i + 1], planItems[i + 2]];
  row.forEach(item => {
    item.addEventListener('mouseenter', () => {
      row.forEach(cell => cell.classList.add('plan-row-hover'));
    });
    item.addEventListener('mouseleave', () => {
      row.forEach(cell => cell.classList.remove('plan-row-hover'));
    });
  });
}
/* accordeon */
document.querySelectorAll('.accordion-title').forEach(title => {
  title.addEventListener('click', function (element) {
    const content = this.nextElementSibling;
    element.target.classList.toggle('active');
    if (content && content.classList.contains('accordion-content')) {
      content.classList.toggle('active');
    }
  });
});