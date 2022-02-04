
let   card = prompt(`Введите номер вашей карты (16 цифр без использования пробелов и прочих символов) `);

let   arrPaySystem = ('MasterCard','Maestro','Visa');

            let arrFirstFour = card.slice(0,4);

            console.log(`arrFirstFour`, arrFirstFour);

            let arrCard = card.split('');
            
            console.log(`arrcard`,arrCard);

                            let arrCardReverse = arrCard.reverse().map(i => +i);
                            console.log(`arrCardReverse`, arrCardReverse);
                            console.log(`arrcard`,arrCard);

                    let sum = 0 ;

                    for(let i = 0; i < arrCardReverse.length; i++){
      
                        if(i % 2 == 0){
                            sum = sum + arrCardReverse[i];  
                        } else {
                            let double = arrCardReverse[i] * 2;
                            sum = sum + (double > 9 ? double - 9 : double); 
                        } 
                    } 

                    console.log(sum);

                    let isCorrect = sum % 10 == 0;

                    console.log(`Is Correct:`, isCorrect);

                            if(card.length >= 13  && card.length <= 16 
                                
                                && arrFirstFour[0] == 4    
                                
                                &&  isCorrect == true  ){
                                    
                                alert(` ${card} - система VISA`);
                                    
                                console.log(`${card} -система VISA`);
                                    
                            } 

                else 
                if(card.length == 16  && FirstFour[0,1] >=  51 
                    
                    && FirstFour[0,1] <= 55 
                    
                    && isCorrect == true) {
                        
                    alert(` ${card} - система MasterCard`);
                    
                    console.log(`${card} - система MasterCard`);
                } 

                            else 
                            if(card.length >= 16 && card.length <= 18 
                                
                                && arrFirstFour[0] == 3,6 
                                
                                && isCorrect == true){
                                    
                                alert(`${card} - система Maestro`);
                                
                                console.log(`${card} - система Maestro`);
                            } 

                else {
                    alert('Неправильные данные карты или не относиться у этим платежный системам');
                }

