const interval = async (arr) => {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(i);
  }
};

interval([1, 2, 3, 4]);

//1)
// 1 - синхронная;
// 3 - тело промиса синхронно, поэтому он выполнится следующим;
// 6 - синхронная;
// 4 - промис ждет пока выполнятся все синхронные операции, затем заходим сначала в очередь макротасок и выполняе его;
// 2 - выполнится раньше тк, задержка 1 === 0  || отсутсвтие задержки
// 5 - последний сеттаймаут
//
//

// 2)
// 1 - синхронно
// 3 - синхронно
// 2 - сеттаймаут выполнится последний, тк единтсвенный попадет в очередь макротасок и будешь ждать выполнения всех операций

// 3)
// a
// b
// c
// finally !!!!!! - пропускается, тк finally пропускает результат или ошибку дальше по цепочке, и не предназначен для обработки результата
// catch d - не будет, тк ошибки нет

//4)
//1 123
//2 123
//3 321
//4 undefined - тк Promise reject возвращает промис с указанной причиной, следовательно дальнейшая передача по цепочке невозможна, и внутри этого then в аргументе будет лежать undefined

//5)
// 1 - синхронно
// 3 - промис попадет в микротаск и всегда выполнится раньше setTimeOut
// 4 - второй consol.log внутри промиса идет сразу после первого
// 2 - setTimeOut дождется пока не выполнится промис, после чего отработает
