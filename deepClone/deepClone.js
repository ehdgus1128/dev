function deepClone(source){
  if ( !(source instanceof Object) || source instanceof Date || source instanceof String) {
    throw 'Only Objects or Arrays are supported.'
  }
  
  var target = source instanceof Array ? [] : {};
  
  for (let prop in source){
    if ( source instanceof Object && !(source instanceof Array) && !(source.hasOwnProperty(prop)) ) {
      continue;
    }
    
    if ( source[prop] instanceof Object && !(source[prop] instanceof Date) && !(source[prop] instanceof String) )  {
      target[prop] = deepClone(source[prop])
    } else {
      target[prop] = source[prop]
    }
  }

  return target;
}