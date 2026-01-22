/** Chunk was on web.js **/
/** chunk id: 138880, original params: e (module,exports,re quire) **/
module.exports = function(e) {
  var t = Object(e),
    n = [];
  for (var r in t) n.unshift(r);
  return function e() {
    for (; n.length;)
      if ((r = n.pop()) in t) return e.value = r, e.done = false, e;
    return e.done = true, e
  }
}, module.exports.__esModule = true, module.exports.default = module.exports