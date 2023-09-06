const onClickOpenInNewTabHandler = (event, url)=>{
    event.preventDefault();
    let urlToOpen = "";
    if(url){
      if(url === "github"){
        urlToOpen = "https://github.com/anas-aji-muhammed";
      }
      else if(url === "linkedin"){
        urlToOpen = "https://www.linkedin.com/in/anas-aji-muhammed-89a75852/";
      }
      else if(url === "stackoverflow"){
        urlToOpen = "https://stackoverflow.com/users/9937087/anas-aji-muhammed";
      }
      else if(url === "medium"){
        urlToOpen = "https://medium.com/@anas.ajeeb2";
      }
      else if(url === "hackerrank"){
        urlToOpen = "https://www.hackerrank.com/anas_ajeeb2";
      }
      else{
        urlToOpen = url;
      }
    }
      window.open(urlToOpen, '_blank');


};

export  {onClickOpenInNewTabHandler};

