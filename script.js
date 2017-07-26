console.log('helloooo');

$('#left-arrow').on('click', function () {

  let containerElem = $(this).closest('#container')
  let currentSlide = containerElem.attr('class')

  if(currentSlide === 'slide3') {
    containerElem.removeClass('slide3')
    containerElem.addClass('slide2')
  } else if (currentSlide === 'slide2') {
    containerElem.removeClass('slide2')
    containerElem.addClass('slide1')
  }

})

$('#right-arrow').on('click', function () {

  let containerElem = $(this).closest('#container')
  let currentSlide = containerElem.attr('class')

  if(currentSlide === 'slide1') {
    containerElem.removeClass('slide1')
    containerElem.addClass('slide2')
  } else if (currentSlide === 'slide2') {
    containerElem.removeClass('slide2')
    containerElem.addClass('slide3')
  }

})
