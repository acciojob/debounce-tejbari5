function debounce(callback, delay, immediate = false) {
    let timeoutId;
    let lastArgs;
    let lastThis;
    let result;
  
    const executeCallback = () => {
      result = callback.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
    };
  
    const debounced = function (...args) {
      lastArgs = args;
      lastThis = this;
      if (immediate && !timeoutId) {
        executeCallback();
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(executeCallback, delay);
      return result;
    };
  
    debounced.cancel = () => {
      clearTimeout(timeoutId);
      lastArgs = null;
      lastThis = null;
    };
  
    return debounced;
  }
  
  module.exports = debounce;