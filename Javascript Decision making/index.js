//In Javascript, sometimes you want to render different code for the different input To make it so, We have conditional Statements.

    //if Conditional Statement;
        //There are threee variants to this statement.
        //1st) if Statement :
            //syntax if(condition){}

            /*
        let promp = prompt('Pick a number!');
        // console.log(promp);
        if(promp > 50){
            console.log('Conditional Successful')
        };

        //2nd) if else Statement
        //Else means if no condition is true then what should code do!
        if(promp > 50){
            console.log('Condition Successful')
        } else {
            console.log('Condition not successful');
        }

        //3rd) else if ladder;
        if(promp > 70){
            console.log('1st Condition Successful')
        } else if(promp > 40){
            console.log('2nd Condition successful')
        } else {
            console.log('No Condition is successful!')
        }
        //You can put as many else ifs you want */

    //Switch Case
    //Swtich case has limitations you can 't pass ranges of values in it You have to pass the onlt value.

    let number = +prompt('Pick a number between 1 and 5');
    switch(number){
        case 1:
            console.log('Swtich 1st');
            break;
        case 2:
            console.log('Swtich second');
            break;
        case 3:
            console.log('Swtich third');
            break;
        default:
        console.log('No swtich');
    }