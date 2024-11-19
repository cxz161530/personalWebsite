new Vue({
  el: '#app',
  data() {
    return {
      images: [
        "./picture/JUICY1.jpg",
        "./picture/JUICY2.jpg",
        "./picture/BUBU1.PNG",
        "./picture/BUBU2.jpg"
      ],
      currentIndex: 0,
      hover: false,
      isNextButton: true, // Added a property to track button state
      yearsApart: 3, // Default value, you can set it to any default value you want
      yearsApartCorrect: null,


    };
  },
  computed: {
    pictureStatic() {
      return this.images[this.currentIndex];
    },
    pictureGif() {
      const nextIndex = (this.currentIndex + 1) % this.images.length;
      return this.images[nextIndex];
    },
    pictureHover() {
      return this.hover ? this.pictureGif : this.pictureStatic;
    },
  },
  methods: {
    toggleButton() {
      // Toggle between "Next" and "Back" buttons
      this.isNextButton = !this.isNextButton;
    },
    loadNextImages() {
      if (this.isNextButton) {
        // Increment currentIndex for "Next" button
        this.currentIndex = (this.currentIndex + 2) % this.images.length;
      } else {
        // Decrement currentIndex for "Back" button
        this.currentIndex = (this.currentIndex - 2 + this.images.length) % this.images.length;
      }
      // Toggle the button after each click
      this.toggleButton();
      this.yearsApartCorrect = null;
    },
    checkYearsApart() {
      const expectedIndex = (this.currentIndex + this.yearsApart) % this.images.length;
      this.yearsApartCorrect = expectedIndex === this.currentIndex;
    },
  },
});
