let a =Number(prompt("Nhập một số"))
let b =Number(prompt("Nhập một số"))
if(a == 0) {
            if(b == 0){
                document.write("Phương trình vô định")
            }
            else{
                document.write("Phương trình vô nghiệm")
            }
        }
        else{
            document.write(`x = ` + (-b/a) )
}