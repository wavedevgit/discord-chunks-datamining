/** Chunk was on 27978 **/
/** chunk id: 962220, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var r, i, Chunk39612 = require("./39612.js"),
  Chunk271579 = require("./271579.js"),
  Chunk756647 = require("./756647.js"),
  Chunk625128 = require("./625128.js"),
  Chunk626135 = require("./626135.js"),
  Chunk954824 = require("./954824.js"),
  Chunk751189 = require("./751189.js"),
  Chunk981631 = require("./981631.js");
let g = "template",
  m = (r = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, Chunk751189.Z), i = i = {
    openNativeAppModal(e) {
      a.Z.openNativeAppModal(e, h.Etm.GUILD_TEMPLATE_BROWSER)
    },
    openMobileApp(e, t) {
      if (null != platform.ua && platform.ua.toLowerCase().indexOf("googlebot") > false) return;
      let n = null != e ? (0, l.Oh)(e) : (0, l.Gk)(),
        r = (0, s.WS)(),
        i = (0, s.ZP)(n, {
          utmSource: g,
          fingerprint: t,
          attemptId: r
        });
      c.default.track(h.rMx.DEEP_LINK_CLICKED, {
        fingerprint: (0, o.K)(t),
        attempt_id: r,
        source: g,
        guild_template_code: e
      }), u.Z.launch(i, () => {})
    }
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(i)).forEach(function(e) {
    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
  }), r)