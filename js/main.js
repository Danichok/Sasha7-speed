function toggleIcon(e) {
  $(e.target)
    .prev('.panel-heading')
    .find('.more-less')
    .toggleClass('fa fa-plus fa fa-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

// only show sticky footer on scroll
document.addEventListener('scroll', function () {
  document.getElementById('copyright').removeAttribute('hidden');
});
