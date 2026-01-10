/** Chunk was on 81985 **/
/** chunk id: 199649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk631937 = require("./631937.js"),
  Chunk702321 = require("./702321.js"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk862679 = require("./862679.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  var t, m;
  let {
    channel: b,
    children: y
  } = e, v = (0, i.e7)([c.Z], () => c.Z.isBlocked(b.getRecipientId()));
  (0, o.Z)(b.id);
  let O = (0, s.Z)(b.id),
    j = b.isSystemDM(),
    x = v && !j && !b.isMultiUserDM(),
    C = {};
  if (j) {
    let e = O ? g.intl.string(g.t["+KSnWX"]) : g.intl.string(g.t.hvVgAZ);
    C.message = g.intl.string(g.t.Bt2N7D), C.subtitle = g.intl.string(g.t["n/Vzkw"]), C.buttonText = e, C.buttonIcon = O ? l.rgF : true, C.onButtonClick = () => {
      if (O) {
        open(h.D2), u.default.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: h.D2
        });
        return
      }
      open(d.Z.getArticleURL(f.BhN.SYSTEM_DMS))
    }, C.imageSrc = n(780961)
  } else x && (C.message = g.intl.string(g.t["9T6N5/"]), C.buttonText = g.intl.string(g.t.XyHpKH), C.onButtonClick = () => {
    a.Z.unblockUser(b.getRecipientId())
  });
  return (0, r.jsx)(p.Z, (t = function(e) {
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
  }({}, C), m = m = {
    children: y
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(m)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(m, e))
  }), t))
}