document.getElementById("commit").addEventListener("click", () => {
    const text = document.getElementById("text").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const color = document.getElementById("color").value;

    if(document.getElementById("append_area")==null){
        const append_area = document.createElement("div");
        append_area.innerText = text;
        append_area.style.width = width+"px";
        append_area.style.height = height+"px";
        append_area.style.color = color;
        append_area.style.backgroundColor = "aqua"; //영역 크기 확인하려고 한거
        append_area.style.display="flex";
        append_area.setAttribute("id","append_area")
    
        document.children[0].children[1].append(append_area);
        
        for(let i=0; i<3; i++){
            if(document.querySelectorAll("[name=align]")[0].checked){
                append_area.style.justifyContent="normal";
            }
            else if(document.querySelectorAll("[name=align]")[1].checked){
                append_area.style.justifyContent="center";
            }
            else{
                append_area.style.justifyContent="flex-end";
            }
        }
    }
    else{
        const exist_append_area = document.getElementById("append_area");
        exist_append_area.innerText = text;
        exist_append_area.style.width = width+"px";
        exist_append_area.style.height = height+"px";
        exist_append_area.style.color = color;
        exist_append_area.style.backgroundColor = "aqua";//영역 크기 확인하려고 한거
        exist_append_area.style.display="flex";

        for(let i=0; i<3; i++){
            if(document.querySelectorAll("[name=align]")[0].checked){
                append_area.style.justifyContent="normal";
            }
            else if(document.querySelectorAll("[name=align]")[1].checked){
                append_area.style.justifyContent="center";
            }
            else{
                append_area.style.justifyContent="flex-end";
            }
        }
    }
});