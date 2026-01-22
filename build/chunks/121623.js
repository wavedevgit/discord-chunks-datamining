/** Chunk was on 94531 **/
/** chunk id: 121623, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var n, o, Chunk400253 = require("./400253.js"),
  Chunk49485 = require("./49485.js"),
  Chunk80703 = require("./80703.js"),
  Chunk197111 = require("./197111.js"),
  Chunk954571 = require("./954571.js"),
  Chunk877062 = require("./877062.js"),
  Chunk292572 = require("./292572.js"),
  Chunk652215 = require("./652215.js");
let O = "template",
  b = (n = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        n = Object.keys(r);
      "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
        return Object.getOwnPropertyDescriptor(r, e).enumerable
      }))), n.forEach(function(t) {
        var n;
        n = r[t], t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      })
    }
    return e
  }({}, Chunk292572.A), o = o = {
    openNativeAppModal(e) {
      i.A.openNativeAppModal(e, s.e$_.GUILD_TEMPLATE_BROWSER)
    },
    openMobileApp(e, t) {
      if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > false) return;
      let r = null != e ? (0, l.FH)(e) : (0, l.BH)(),
        n = (0, c.I_)(),
        o = (0, c.Ay)(r, {
          utmSource: O,
          fingerprint: t,
          attemptId: n
        });
      a.default.track(s.HAw.DEEP_LINK_CLICKED, {
        fingerprint: (0, u.v)(t),
        attempt_id: n,
        source: O,
        guild_template_code: e
      }), p.A.launch(o, () => {})
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(o)).forEach(function(e) {
    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
  }), n)