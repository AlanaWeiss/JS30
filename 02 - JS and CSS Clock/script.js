
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const hand = document.querySelector('.hand');

    function setDate() {
      const now = new Date();
      const seconds = now.getSeconds();
      console.log(seconds);
      const secondsDeg = ((seconds / 60) * 360) + 90; // as we offset the hands to 90deg to become top to bottom, we need to sum the degrees here
      
      if (seconds === 0 ) {
        hand.classList.add('removeTransition');
        secondHand.classList.add('removeTransition');
        minuteHand.classList.add('removeTransition');
        hourHand.classList.add('removeTransition');
      } else if (seconds === 1) {
        hand.classList.remove('removeTransition');
        secondHand.classList.remove('removeTransition');
        minuteHand.classList.remove('removeTransition');
        hourHand.classList.remove('removeTransition');
      }

      secondHand.style.transform = `rotate(${secondsDeg}deg)`;

      const minutes = now.getMinutes();
      const minutesDeg = ((minutes / 60) * 360) + 90;
      minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

      const hour = now.getHours();
      const hourDeg = ((hour / 12) * 360) + 90;
      hourHand.style.transform = `rotate(${hourDeg}deg)`;

      if (seconds === 0 ) {
        hand.classList.add('.transitionGlitch');
      } else if (seconds === 1) {
        hand.classList.remove('.transitionGlitch');
      }
      

    }

    setInterval(setDate, 1000);

    setDate();

