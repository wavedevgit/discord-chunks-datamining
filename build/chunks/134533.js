/** Chunk was on web.js **/
/** chunk id: 134533, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk461648 = require("./461648.js"),
  i = function() {
    return !!Chunk461648
  };
i.hasArrayLengthDefineBug = function() {
  if (!Chunk461648) return null;
  try {
    return 1 !== Chunk461648([], "length", {
      value: 1
    }).length
  } catch (e) {
    returntrue
  }
}, module.exports = i