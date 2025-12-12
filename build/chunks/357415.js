/** Chunk was on web.js **/
/** chunk id: 357415, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n) {
  var r = e;
  if (n === r.count()) t.forEach(function(e) {
    r = r.push(e)
  });
  else if (0 === n) t.reverse().forEach(function(e) {
    r = r.unshift(e)
  });
  else {
    var i = r.slice(0, n),
      o = r.slice(n);
    r = i.concat(t, o).toList()
  }
  return r
}