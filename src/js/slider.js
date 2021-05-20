// Масив с данныьи reviews индексы:
//  0 - имя,
//  1 - путь к фото
//  2 - путь к фото@2
//  3 - оценка
//  4 - статья
const reviews = [
  [
    'John',
    '../images/desktop/photo-john-desktop.jpg',
    '../images/desktop/photo-john-desktop@2.jpg',
    4,
    'Review collection is not rocket science. After all, all we do is help you collect video, photo & text reviews from your customers. We then display these reviews on Your Site, on Google and on your Social By displaying genuine reviews most of our clients see an uplift in conversion within a few weeks. ',
  ],
  [
    'Will',
    '../images/desktop/photo-will-desktop.jpg',
    '../images/desktop/photo-will-desktop@2x.jpg',
    5,
    'Last time I have visited a cooking course by Eva I was impressed with the way she explained everything to people. You can be sure you will manage to cook a delicious dish even if it is your first time in the kitchen! Thank you so much for the masterclass! Looking forward to the next one and highly recommend it to everyone!',
  ],
  [
    'Elisabeth',
    '../images/desktop/photo-elisabeth-desktop.jpg',
    '../images/desktop/photo-elisabeth-desktop@2.jpg',
    5,
    'By displaying genuine reviews most of our clients see an uplift in conversion within a few weeks. Review collection is not rocket science. After all, all we do is help you collect video, photo & text reviews from your customers.',
  ],
  [
    'Amanda',
    '/photo-elisabeth-desktop@2x.c6dcf501.jpg',
    '',
    3,
    "Last year we launched four new features including, SMS collection, video reviews, social proof & influencer. By displaying genuine reviews most of our clients see an uplift in conversion within Well, it's completely different from the innerspring mattress in the guest room at Grandma's, I'll tell you that much. It's a new concept",
  ],
  [
    'Michael',
    '../images/photo/photo5',
    '',
    5,
    'For today’s customers, trust is king. That’s why we go further to help you collect genuine reviews. Driving down CPC, while boosting click-through response.By displaying genuine reviews most of our clients see an uplift in conversion within  ',
  ],
  [
    'Emma',
    '../images/photo/photo6',
    '',
    1,
    'Trustpilot is free and open to every company and consumer everywhere. Sharing your experiences helps others make better choices and companies up their game. By displaying genuine reviews most of our clients see an uplift in conversion within',
  ],
  [
    'Charlotte',
    '../images/photo/photo7',
    '',
    5,
    'From the company that gave you Hyper-Elastic Polymer and the original Purple bed comes the big-and-sturdy Purple Hybrid mattresses. In fact, Purple offers three different hybrid beds, appropriately named the Purple Hybrid',
  ],
  [
    'Olivia',
    '../images/photo/photo8',
    '',
    3,
    "Well, it's completely different from the innerspring mattress in the guest room at Grandma's, I'll tell you that much. Its a new concept for a bed that I think ended up working in the company's favor. By displaying genuine reviews most of our clients see an uplift in conversion within",
  ],
  [
    'Mason',
    '../images/photo/photo9',
    '',
    0,
    "The details in the cover give it a premium look, and you can tell it's a bit more heavy-duty than the flagship Purple mattress. The main thing people want to know about this mattress is what does the Purple feel like",
  ],
  [
    'Edwin',
    '../images/photo/photo10',
    '',
    4,
    "Well, it's completely different from the innerspring mattress in the guest room at Grandma's, I'll tell you that much. It's a new concept for a bed that I think ended up working in the company's favor. By displaying genuine reviews most of our clients see an uplift in conversion within",
  ],
  [
    'Abigail',
    '../images/photo/photo11',
    '',
    5,
    "It's not super noticeable when you're laying down, it just feels buoyant like you're floating on your back or laying on a hammock. Though, it's also really supportive because of the thick layer of pocketed coils, which I'll explain more below.  ",
  ],
  [
    'Sophia',
    '../images/photo/photo12',
    '',
    4,
    "If you're curious about the Purple Hybrid but you aren't willing to explore unconventional ways of bedding, you might want to look elsewhere. Well, it's completely different from the innerspring mattress in the guest room at Grandma's, I'll tell you that much. It's a new concept",
  ],
  [
    'Ava',
    '../images/photo/photo13',
    '',
    4,
    "On top is the Purple's cover, and just like the name implies, it's extra-stretchy. I think it feels more breathable than your typical mattress cover and compare the feel more to an athletic antisweat undergarment than a soft cotton top.",
  ],
  [
    'Roxie',
    '../images/photo/photo14',
    '',
    3,
    "Motion isolation isn't usually an innerspring bed's forte, but with the pocketed coils and special material you find in the Purple Hybrid, it's a different story. Well, it's completely different from the innerspring mattress in the guest room at Grandma's, I'll tell you that much. It's a new concept",
  ],
  [
    'Lora',
    '../images/photo/photo15',
    '',
    3,
    "The other benefit of the Purple Grid besides bouncy comfort would have to be its temperature-regulating abilities. It's not designed with any fancy cooling material, but instead On top is the Purple's cover, and just like the name implies, it's extra-stretchy",
  ],
];

let slideIndex = 2;
let slidePrev = slideIndex - 1;
let slideNext = slideIndex + 1;

const quantityReviews = reviews.length;
showSlides(slideIndex, slidePrev, slideNext);

const refs = {
  showPreviousBtn: document.querySelector('.prev-slide'),
  showPreviousFrame: document.querySelector('.prev-slide-frame'),
  showNextBtn: document.querySelector('.next-slide'),
  showNextFrame: document.querySelector('.next-slide-frame'),
};

refs.showPreviousBtn.addEventListener('click', minusSlide);
refs.showPreviousFrame.addEventListener('click', minusSlide);
refs.showNextBtn.addEventListener('click', plusSlide);
refs.showNextFrame.addEventListener('click', plusSlide);

function aroundReviews(n) {
  if (slideIndex >= 1) {
    if (slideIndex <= quantityReviews) {
      return n;
    }
    slideIndex = 1;
    return 1;
  }
  slideIndex = quantityReviews;
  return quantityReviews;
}

function aroundReviewsPrev(n) {
  if (slidePrev >= 1) {
    if (slidePrev <= quantityReviews) {
      return n;
    }
    slidePrev = 1;
    return 1;
  }
  slidePrev = quantityReviews;
  return quantityReviews;
}

function aroundReviewsNext(n) {
  if (slideNext >= 1) {
    if (slideNext <= quantityReviews) {
      return n;
    }
    slideNext = 1;
    return 1;
  }
  slideNext = quantityReviews;
  return quantityReviews;
}

function minusSlide() {
  const n = aroundReviews((slideIndex -= 1));
  const prev = aroundReviewsPrev((slidePrev -= 1));
  const next = aroundReviewsNext((slideNext -= 1));

  showSlides(n, prev, next);
}

function plusSlide() {
  const n = aroundReviews((slideIndex += 1));
  const prev = aroundReviewsPrev((slidePrev += 1));
  const next = aroundReviewsNext((slideNext += 1));
  showSlides(n, prev, next);
}

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

function showSlides(n, prev, next) {
  const ind = n - 1;
  const nPrev = prev - 1;
  const nNext = next - 1;
  
  document.getElementById('view_count').innerHTML = slideIndex + ' / ' + quantityReviews;
  document.getElementById('reviews_article').innerHTML = reviews[ind][4];
  document.getElementById('name_curr').innerHTML = reviews[ind][0];

  document.getElementById('name_prev').innerHTML = reviews[nPrev][0];
  document.getElementById('name_next').innerHTML = reviews[nNext][0];

  let slidesPrev = document.getElementsByClassName('frame-prev');
  let slidesCurr = document.getElementsByClassName('frame-current');
  let slidesNext = document.getElementsByClassName('frame-next');

  let ratePrev = document.getElementsByClassName('rate-previous');
  let rateCurr = document.getElementsByClassName('rate-current');
  let rateNext = document.getElementsByClassName('rate-next');

  for (i = 0; i < ratePrev.length; i++) {
    if (i > reviews[nPrev][3]-1) {
      ratePrev[i].style.fill = 'none';
    } else {
      ratePrev[i].style.fill = '#ab816c';
    }
  }

  for (i = 0; i < rateCurr.length; i++) {
    if (i > reviews[ind][3]-1) {
      rateCurr[i].style.fill = 'none';
    } else {
      rateCurr[i].style.fill = '#ab816c';
    }
  }

  for (i = 0; i < rateNext.length; i++) {
    if (i > reviews[nNext][3]-1) {
      rateNext[i].style.fill = 'none';
    } else {
      rateNext[i].style.fill = '#ab816c';
    }
  }

  for (i = 0; i < slidesPrev.length; i++) {
    slidesPrev[i].style.display = 'none';
  }
  slidesPrev[nPrev].style.display = 'block';

  for (i = 0; i < slidesCurr.length; i++) {
    slidesCurr[i].style.display = 'none';
  }
  slidesCurr[ind].style.display = 'inline-block';

  for (i = 0; i < slidesNext.length; i++) {
    slidesNext[i].style.display = 'none';
  }
  slidesNext[nNext].style.display = 'block';
}
