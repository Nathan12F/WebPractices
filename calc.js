let calculation = localStorage.getItem('calculation') || '';
localStorage.setItem('calculation',calculation)          
        function appendToCalculation(value) {
            calculation += value;
            document.getElementById('calculationScreen').value = calculation;
        }

        function calculate() {
            try{
                calculation = eval(calculation);
                document.getElementById('calculationScreen').value = calculation;
            }
            catch(error)
            {
                calculation = "Error"
            }
        }
        function clearCalc(){
            calculation = "";
            document.getElementById('calculationScreen').value = "";
        }
      