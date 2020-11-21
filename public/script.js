$(document).ready(function(){

    $("#signupsubmit").click(function(){
        var first_name = $("#first_name").val();
        var last_name = $("#last_name").val();
        var number = $("#number").val();
        var address = $("#address").val();
        var username = $("#username").val();
        var password = $("#password").val();
        var re_password = $("#re_password").val();
        // Returns successful data submission message when the entered information is stored in database.
        var user = 'first_name1='+ first_name + '&last_name1='+ last_name +  '&number1='+ number +  '&address1='+ address + '&username1='+ username + '&password1='+ password + '&re_password1='+ re_password ;
        if(first_name==''||last_name==''||number==''||address==''||username==''||password==''||re_password=='')
        {
        alert("Please Fill All Fields");
        }
        else
        {
        // AJAX Code To Submit Form.
        $.ajax({
        type: "POST",
        url: "http://localhost:3333/signup",
        data: user,
        cache: false,
        success: function(result){
        alert(result);
        }
        });
        }
        return false;
        });
    
    $("#contactussubmit").click(function(){
    var name = $("#name").val();
    var number = $("#number").val();
    var email = $("#email").val();
    var message = $("#message").val();
    // Returns successful data submission message when the entered information is stored in database.
    var user = 'name1='+ name + '&number1='+ number + '&email1='+ email + '&message1='+ message;
    if(name==''||number==''||email==''||message=='')
    {
    alert("Please Fill All Fields");
    }
    else
    {
    // AJAX Code To Submit Form.
    $.ajax({
    type: "POST",
    url: "http://localhost:3333/contact",
    data: user,
    cache: false,
    success: function(result){
    alert(result);
    }
    });
    }
    return false;
    });

     $("#contactussubmit").click(function(){
    var name = $("#name").val();
    var number = $("#number").val();
    var email = $("#email").val();
    var message = $("#message").val();
    // Returns successful data submission message when the entered information is stored in database.
    var user = 'name1='+ name + '&number1='+ number + '&email1='+ email + '&message1='+ message;
    if(name==''||number==''||email==''||message=='')
    {
    alert("Please Fill All Fields");
    }
    else
    {
    // AJAX Code To Submit Form.
    $.ajax({
    type: "POST",
    url: "http://localhost:3333/contact",
    data: user,
    cache: false,
    success: function(result){
    alert(result);
    }
    });
    }
    return false;
    });

    $("#feedbacksubmit").click(function(){
        var service = $("#service").val();
        var food = $("#food").val();
        var clean = $("#clean").val();
        var comments = $("#comments").val();
        var name = $("#name").val();
        var email = $("#email").val();
       
        // Returns successful data submission message when the entered information is stored in database.
        var user = 'service1='+ service + '&food1='+ food + '&clean1='+ clean + '&comments1='+ comments+ '&name1='+ name + '&email1='+ email;
        if(service==''||food==''||clean==''||comments==''||name==''||email=='')
        {
        alert("Please Fill All Fields");
        }
        else
        {
        // AJAX Code To Submit Form.
        $.ajax({
        type: "POST",
        url: "http://localhost:3333/feedback",
        data: user,
        cache: false,
        success: function(result){
        alert(result);
        }
        });
        }
        return false;
        });

        $("#reservationsubmit").click(function(){
            
            var name = $("#name").val();
            var email = $("#email").val();
            var people = $("#people").val();
            var number = $("#number").val();
            var date = $("#date").val();
            var jazz_perfomance = $("#jazz_perfomance").val();
           
            // Returns successful data submission message when the entered information is stored in database.
            var user = 'name1='+ name + '&email1='+ email + '&people1='+ people + '&number1='+ number+ '&date1='+ date + '&jazz_perfomance1='+ jazz_perfomance;
            if(name==''||email==''||people==''||number==''||date==''||jazz_perfomance=='')
            {
            alert("Please Fill All Fields");
            }
            else
            {
            // AJAX Code To Submit Form.
            $.ajax({
            type: "POST",
            url: "http://localhost:3333/reservation",
            data: user,
            cache: false,
            success: function(result){
            alert(result);
            }
            });
            }
            return false;
            });

            $("#paymentsubmit").click(function(){
                var cardname = $("#cardname").val();
                var cardnumber = $("#cardnumber").val();
                var month = $("#month").val();
                var year = $("#year").val();
                var cvv = $("#cvv").val();
                             
                // Returns successful data submission message when the entered information is stored in database.
                var user = 'cardname1='+ cardname + '&cardnumber1='+ cardnumber + '&month1='+ month + '&year1='+ year+ '&cvv1='+ cvv ;
                if(cardname==''||cardnumber==''||month==''||year==''||cvv=='')
                {
                alert("Please Fill All Fields");
                }
                else
                {
                // AJAX Code To Submit Form.
                $.ajax({
                type: "POST",
                url: "http://localhost:3333/payment",
                data: user,
                cache: false,
                success: function(result){
                alert(result);
                }
                });
                }
                return false;
                });

                $("#menusubmit").click(function(){
                    var drinks = $("#drinks").val();
                    var dqty = $("#dqty").val();
                    var snacks = $("#snacks").val();
                    var sqty = $("#sqty").val();
                    var vegstr = $("#vegstr").val();
                    var vqty = $("#vqty").val();
                    var nvegstr = $("#nvegstr").val();
                    var nvqty = $("#nvqty").val();

                                 
                    // Returns successful data submission message when the entered information is stored in database.
                    var user = 'drinks1='+ drinks + '&dqty1='+ dqty + '&snacks1='+ snacks + '&sqty1='+ sqty+ '&vegstr1='+ vegstr+ '&vqty1='+ vqty + '&nvegstr1='+ nvegstr+ '&nvqty1='+ nvqty ;
                    if(drinks==''||dqty==''||snacks==''||sqty==''||vegstr==''||vqty==''||nvegstr==''||nvqty=='')
                    {
                    alert("Please Fill All Fields");
                    }
                    else
                    {
                    // AJAX Code To Submit Form.
                    $.ajax({
                    type: "POST",
                    url: "http://localhost:3333/menu",
                    data: user,
                    cache: false,
                    success: function(result){
                    alert(result);
                    }
                    });
                    }
                    return false;
                    });
            



    });