export function delayLoad(promise : any) {
    return new Promise(resolve => {
      setTimeout(resolve, 1500);
    }).then(() => promise);
  }



 