/** Chunk was on web.js **/
"use strict";
var r = n(147018),
  i = n(992051),
  o = n(955903),
  a = n(936940),
  s = n(545576),
  l = n(354848),
  c = n(344135),
  u = n(457110),
  d = n(859209),
  f = o && o.prototype;
if (r({
    target: "Promise",
    proto: !0,
    real: !0,
    forced: !!o && a(function() {
      f.finally.call({
        then: function() {}
      }, function() {})
    })
  }, {
    finally: function(e) {
      var t = c(this, s("Promise")),
        n = l(e);
      return this.then(n ? function(n) {
        return u(t, e()).then(function() {
          return n
        })
      } : e, n ? function(n) {
        return u(t, e()).then(function() {
          throw n
        })
      } : e)
    }
  }), !i && l(o)) {
  var _ = s("Promise").prototype.finally;
  f.finally !== _ && d(f, "finally", _, {
    unsafe: !0
  })
}