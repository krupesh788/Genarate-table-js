function tel()
{

    
    let num = parseInt(document.getElementById("num").value)
    let tablecontent = '';
    
    for(let i = 1; i <= 10; i++)
    {
        
        let result = i * num;
        tablecontent += num + "*" + i + "=" + result + "<br>";

       
    }
    
    document.getElementById("p1").innerHTML = tablecontent; 

}