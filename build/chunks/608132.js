/** Chunk was on web.js **/
/** chunk id: 608132, original params: e,t,n (module,exports,re quire) **/
var Chunk658261 = require("./658261.js"),
  Chunk436167 = require("./436167.js");

function a(e, t) {
  var n;

  function s(n, i, a, o) {
    try {
      var l = e[n](i),
        c = l.value;
      return c instanceof r ? t.resolve(c.v).then(function(e) {
        s("next", e, a, o)
      }, function(e) {
        s("throw", e, a, o)
      }) : t.resolve(c).then(function(e) {
        l.value = e, a(l)
      }, function(e) {
        return s("throw", e, a, o)
      })
    } catch (e) {
      o(e)
    }
  }
  this.next || (i(a.prototype), i(a.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
    return this
  })), i(this, "_invoke", function(e, r, i) {
    function a() {
      return new t(function(t, n) {
        s(e, i, t, n)
      })
    }
    return n = n ? n.then(a, a) : a()
  }, true)
}
module.exports = a, module.exports.__esModule = true, module.exports.default = module.exports