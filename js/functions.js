var arr = []

localStorage.setItem("data",JSON.stringify(arr))
// localStorage.setItem("data",JSON.stringify(arr))

function MakeUser(name , ps ){
    var obj={}
    obj.name=name
    obj.ps = ps
    obj.amount=0
    obj.withdraw=$("#withdraw").click(withdraw($("#n").val()))
    obj.deposit=$("#deposit").click(deposit($("#n").val()))
    obj.transfer=$('#transfer').click(transfer($("#n").val(),$("#ps").val()))
    arr.push(obj)
    var arr2=JSON.parse(localStorage.getItem("data"))
    arr2.push(obj)
    localStorage.setItem("data",JSON.stringify(arr2))
    return obj
}

function withdraw(n){
    this.amount-=n
}

function deposit(n,ps){
    if(ps===this.ps){
        this.amount+=n 
        console.log(this.amount)
    }
    alert('worng password')
}

function transfer(n,ps){
    if(checkPs(ps) === true){
        checkUser(n,$('#user').text())
        this.amount-=n
    }
}

function checkUser(n,user){
    for(var i = 0 ; i<arr.length ; i++){
        var users = arr[i]
        for(var j in users){
            if(user === users.name){
                user.amount+=n
            }
        }
    }
}

function checkPs(ps){
    for(var i = 0 ; i<arr.length ; i++){
        var users = arr[i]
        for(var j in users){
            if(ps === users.ps){
                return true
            }
        }
    }
}
 
$('#signinB').click(function(){
    for(var i = 0 ; i<arr.length ; i++){
        var users = arr[i]
        for(var j in users){
            if($('#name').val()=== this.name || $('#password').val()===this.ps){
                window.location.href("profile.html")
            }
        }
    }
})

$('')