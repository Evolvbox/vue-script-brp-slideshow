new Vue({
      el: '#app',
      data: {
        slides: [
          // Product Development
          {name: 'PD-P3', url: 'https://datastudio.google.com/embed/reporting/1oDxCt2UdNffjnXcwKPtA1_ovjQMgQbjj/page/gFej', time: 8},
          {name: 'PD-DR', url: 'https://datastudio.google.com/embed/reporting/1oDxCt2UdNffjnXcwKPtA1_ovjQMgQbjj/page/xcej', time: 8},
          {name: 'PD-ECR/ECN', url: 'https://datastudio.google.com/embed/reporting/1oDxCt2UdNffjnXcwKPtA1_ovjQMgQbjj/page/Loej', time: 8}, 

          // Manufacturing
          {name: 'MANU-H&S', url: 'https://datastudio.google.com/embed/reporting/1ZUxXbaTiHLXjuMstMjehFIY72CTQsPXH/page/gFej', time: 8}, 
          {name: 'MANU-CPHU', url: 'https://datastudio.google.com/embed/reporting/1ZUxXbaTiHLXjuMstMjehFIY72CTQsPXH/page/xcej', time: 8}, 
          // {name: 'MANU-CPHU-Bonus', url: '', time: 7}, 
          {name: 'MANU-WSA', url: 'https://datastudio.google.com/embed/reporting/1ZUxXbaTiHLXjuMstMjehFIY72CTQsPXH/page/Loej', time: 8}, 
          {name: 'MANU-RMD', url: 'https://datastudio.google.com/embed/reporting/1ZUxXbaTiHLXjuMstMjehFIY72CTQsPXH/page/NSkj', time: 8}, 

          // Logistic
          {name: 'LOGI-FGI', url: 'https://datastudio.google.com/embed/reporting/19ELpjAdz3F2z8GnclDQ6M5edw0KTlFoJ/page/gFej', time: 8}, 
          {name: 'LOGI-OF', url: 'https://datastudio.google.com/embed/reporting/19ELpjAdz3F2z8GnclDQ6M5edw0KTlFoJ/page/xcej', time: 8},

          // Quality
          {name: 'QUAL-CVI', url: 'https://datastudio.google.com/embed/reporting/11YE1XWM02IsZNcar4mK4__cheNAtA5uH/page/gFej', time: 8},
          {name: 'QUAL-OBQ1', url: 'https://datastudio.google.com/embed/reporting/11YE1XWM02IsZNcar4mK4__cheNAtA5uH/page/xcej', time: 8},
          {name: 'QUAL-OBQ2', url: 'https://datastudio.google.com/embed/reporting/11YE1XWM02IsZNcar4mK4__cheNAtA5uH/page/od2j', time: 8},
          {name: 'QUAL-PPM', url: 'https://datastudio.google.com/embed/reporting/11YE1XWM02IsZNcar4mK4__cheNAtA5uH/page/Loej', time: 8},

          // HR
          {name: 'HR-TTF', url: 'https://datastudio.google.com/embed/reporting/1lVgJUIQEkqLvXqJhS_LrGm7BXTHCJVMg/page/gFej', time: 8},
          {name: 'HR-PMP', url: 'https://datastudio.google.com/embed/reporting/1lVgJUIQEkqLvXqJhS_LrGm7BXTHCJVMg/page/xcej', time: 8},
        ],
        currentSlideIndex: -1,        
      },
      watch: {
        currentSlideIndex: function () {
          if (this.currentSlideIndex >= this.slides.length) {
            this.runSlideShow(true);
          } else {
            this.runSlideShow();
          }
        }
      },        
      mounted: function () {
        this.runSlideShow(true);
      },
      methods: {
        runSlideShow: function (resetSlide = false) {
          if (resetSlide) {
            this.currentSlideIndex = 0;
          } else {
            window.setTimeout(() => {
              this.currentSlideIndex++;
            }, this.slides[this.currentSlideIndex].time * 1000);
          }
        }
      }      
    });
