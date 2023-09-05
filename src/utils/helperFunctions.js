const onClickOpenInNewTabHandler = (event, url)=>{
    event.preventDefault();
    if (url) {
        window.open(url, '_blank');
      }

};

export  {onClickOpenInNewTabHandler};

