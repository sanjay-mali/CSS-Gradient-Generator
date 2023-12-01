
        const inputs = document.querySelectorAll('.container input')

        inputs.forEach(input => input.addEventListener('change', update))

        inputs.forEach(input => input.addEventListener('mousemove', update))

        function update(){

            const start_color = document.getElementById('color1').value

            const end_color = document.getElementById('color2').value

            const angle = document.getElementById('rangeInput').value
            
            const box = document.querySelector('.box')

            box.style.background = `linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)`;

            box.style.background = `-webkit-linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)`          

            document.querySelector('.bg').innerHTML = `background:  #474bff`
            
            document.querySelector('.bglg').innerHTML = `background = linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)`;

            document.querySelector('.bgwlg').innerHTML = `background = -webkit-linear-gradient(${angle}deg, ${start_color} 0%, ${end_color} 100%)` 


            
        }


        const rangeValue = document.getElementById('rangeValue');
        const rangeInput = document.getElementById('rangeInput');

        rangeInput.addEventListener('input', function () {

            rangeValue.textContent = rangeInput.value + "°";
            
        });
