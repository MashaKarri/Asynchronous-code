setTimeout(e=>{console.log("Test setTimeout",e),console.log(e)},500,"argument"),console.log(2),console.log(5),setTimeout(()=>{console.log("Другий setTimeout")},2500);let e=0,o=setInterval(()=>{e+=1,console.log(`\u{41F}\u{440}\u{43E}\u{439}\u{448}\u{43B}\u{43E}: ${e}`),5===e&&clearInterval(o)},1e3);
//# sourceMappingURL=Asynchronous-code.eaa5aec0.js.map
