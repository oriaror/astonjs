const obj = { item: "some value" };

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.apply(obj);
logger.call(obj);
const logger1 = logger.bind(obj);
logger1();

function bind(fn, thisObj) {
  return function () {
    return fn.apply(thisObj, arguments);
  };
}

const obj1 = bind(logger, obj);

obj1();