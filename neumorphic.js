window.addEventListener('load', function () {

	/*  slider */
	const container = document.querySelector('#slider1__box');
	const btn = document.querySelector('#slider1__btn');
	const color = document.querySelector('#slider1__color');
	const tooltip = document.querySelector('#slider1__tooltip');

	dragElement = (target, btn) => {
  		target.addEventListener('mousedown', (e) => {
     		onMouseMove(e);
     		window.addEventListener('mousemove', onMouseMove);
      		window.addEventListener('mouseup', onMouseUp);
 	 	});

  		onMouseMove = (e) => {
			e.preventDefault();
    		let targetRect = target.getBoundingClientRect();
    		let btnRect = btn.getBoundingClientRect();
    		
    		let btnHalfWidth = (btnRect.right - btnRect.left) / 2;

    		let x = e.pageX - targetRect.left - btnHalfWidth;
    		if (x > targetRect.width - btnHalfWidth) { x = targetRect.width - btnHalfWidth};
    		if (x < -btnHalfWidth){ x = -btnHalfWidth};

    		btn.x = x - 0;
   	 		btn.style.left = btn.x + 'px';

    		// get the position of the button inside the container (%)
    		let percentPosition = (btn.x + btnHalfWidth) / targetRect.width * 100;
      
    		// color width = position of button (%)
    		color.style.width = percentPosition + "%";

			let tooltipRect = tooltip.getBoundingClientRect();

    		// move the tooltip when button moves, and show the tooltip
    		tooltip.style.left = btn.x + ((btnRect.right - btnRect.left) / 2) - ((tooltipRect.right - tooltipRect.left) / 2)+ 'px';
    		tooltip.style.opacity = 1;

    		// show the percentage in the tooltip
    		tooltip.textContent = "apathy: " + Math.round(percentPosition) + '%';
  		};

		onMouseUp  = (e) => {
			window.removeEventListener('mousemove', onMouseMove);
      		tooltip.style.opacity = 0;

      		btn.addEventListener('mouseover', function() {
        		tooltip.style.opacity = 1;
      		});
      
      		btn.addEventListener('mouseout', function() {
        		tooltip.style.opacity = 0;
      		});
  		};
	};

	dragElement(container, btn);



	/*  slider */
	const range20 = document.querySelector('#range20');
	const rangevalue20 = document.querySelector('#rangevalue20');
	
	
});