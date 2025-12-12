/** Chunk was on web.js **/
/** chunk id: 295722, original params: e,t,n (module,exports,re quire) **/
var Chunk62584 = require("./62584.js"),
  Chunk710158 = require("./710158.js");

function o(e, t) {
  var n;

  function a(n, i, o, s) {
    try {
      var l = e[n](i),
        c = l.value;
      return c instanceof r ? t.resolve(c.v).then(function(e) {
        a("next", e, o, s)
      }, function(e) {
        a("throw", e, o, s)
      }) : t.resolve(c).then(function(e) {
        l.value = e, o(l)
      }, function(e) {
        return a("throw", e, o, s)
      })
    } catch (e) {
      s(e)
    }
  }
  this.next || (i(o.prototype), i(o.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
    return this
  })), i(this, "_invoke", function(e, r, i) {
    function o() {
      return new t(function(t, n) {
        a(e, i, t, n)
      })
    }
    return n = n ? n.then(o, o) : o()
  }, true)
}
module.exports = o, module.exports.__esModule = true, module.exports.default = module.exports