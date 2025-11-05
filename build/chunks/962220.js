/** Chunk was on 13532 **/
/** chunk id: 962220, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var n, o, Chunk39612 = require("./39612.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk625128 = require("./625128.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk751189 = require("./751189.js"),
  Chunk981631 = require("./981631.js");
let O = "template",
  E = (n = function(e) {
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
  }({}, Chunk751189.Z), o = o = {
    openNativeAppModal(e) {
      u.Z.openNativeAppModal(e, s.Etm.GUILD_TEMPLATE_BROWSER)
    },
    openMobileApp(e, t) {
      if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > false) return;
      let r = null != e ? (0, l.Oh)(e) : (0, l.Gk)(),
        n = (0, c.WS)(),
        o = (0, c.ZP)(r, {
          utmSource: O,
          fingerprint: t,
          attemptId: n
        });
      a.default.track(s.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, i.K)(t),
        attempt_id: n,
        source: O,
        guild_template_code: e
      }), p.Z.launch(o, () => {})
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