
    document.addEventListener("DOMContentLoaded", function () {
    new Splide("#stories", {
      type   : 'loop',
      perPage: 3,
      pagination:true,
      arrows: false,
      focus  : 'start',
      autoplay: false,
      rewind     : true,
      rewindSpeed: 300,
      breakpoints: {
        1500 : { perPage: 3 },
        1300 : { perPage: 3,  },
        1200 : { perPage: 2,},
        800  :{perPage: 2,},
        400  :{perPage: 1,}
      },
    }).mount();
  })

  
  document.addEventListener("DOMContentLoaded", function () {
    new Splide("#testimonial", {
      type   : 'loop',
      perPage: 4,
      pagination:true,
      focus  : 'start',
      autoplay: false,
      rewind     : true,
      rewindSpeed: 300,
      breakpoints: {
        1500 : { perPage: 3,},
        1300 : { perPage: 3,},
        1200 : { perPage: 2,},
        700  :{perPage: 1, padding:"0px 10px"}
      },
    }).mount();
  })


  document.addEventListener("DOMContentLoaded", function () {
    new Splide("#course", {
      type   : 'loop',
      perPage: 3,
      gap: "3rem",
      pagination:0,
      perMove: 2,
      breakpoints: {
        1500 : { perPage: 3 },
        1300 : { perPage: 3,},
        1200 : { perPage: 2,},
        800  :{perPage: 2,},
        400  :{perPage: 1,}
      },
    }).mount();
  })

  const tabs = document.querySelectorAll('#nav-tabs button');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove('text-black', 'rounded-lg', 'bg-[#FFF]'));
      // Add active class to clicked tab
      tab.classList.add('rounded-lg', 'text-black', 'bg-[#FFF]');

      // Hide all content and show the selected tab's content
      contents.forEach((content) => content.classList.add('hidden'));
      document.getElementById(tab.dataset.tab).classList.remove('hidden');
    });
  });

  // Set default active tab
  tabs[0].classList.add('text-black-1000',);


  

  // Get modal elements
  const modalToggleButtons = document.querySelectorAll('[data-modal-toggle]');
  const modals = document.querySelectorAll('[id^="crud-modal"]');
  const closeModalButtons = document.querySelectorAll('[id^="close-modal"]');
  const modalVideos = document.querySelectorAll('[id^="modal-video"]');
  
  // Show modal and play video when opened
  modalToggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const modal = modals[index];
      const modalVideo = modalVideos[index];
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');
      modalVideo.play();
    });
  });
  
  // Close modal and pause video when closed
  closeModalButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const modal = modals[index];
      const modalVideo = modalVideos[index];
      modal.classList.add('hidden');
      modal.setAttribute('aria-hidden', 'true');
      modalVideo.pause();
      modalVideo.currentTime = 0;
    });
  });
  
  // Close modal if clicking outside modal content
  window.addEventListener('click', (event) => {
    modals.forEach((modal, index) => {
      if (event.target === modal) {
        const modalVideo = modalVideos[index];
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        modalVideo.pause();
        modalVideo.currentTime = 0;
      }
    });
  });



