/** Chunk was on 88647 **/
/** chunk id: 199649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function g(e) {
  var t, g;
  let {
    channel: b,
    children: _
  } = e, y = (0, i.e7)([c.Z], () => c.Z.isBlocked(b.getRecipientId()));
  (0, o.Z)(b.id);
  let C = (0, s.Z)(b.id),
    v = b.isSystemDM(),
    O = y && !v && !b.isMultiUserDM(),
    x = {};
  if (v) {
    let e = C ? m.intl.string(m.t["+KSnWX"]) : m.intl.string(m.t.hvVgAZ);
    x.message = m.intl.string(m.t.Bt2N7D), x.subtitle = m.intl.string(m.t["n/Vzkw"]), x.buttonText = e, x.buttonIcon = C ? l.rgF : true, x.onButtonClick = () => {
      if (C) {
        open(h.D2), u.default.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: h.D2
        });
        return
      }
      open(d.Z.getArticleURL(f.BhN.SYSTEM_DMS))
    }, x.imageSrc = n(780961)
  } else O && (x.message = m.intl.string(m.t["9T6N5/"]), x.buttonText = m.intl.string(m.t.XyHpKH), x.onButtonClick = () => {
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
  }({}, x), g = g = {
    children: _
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(g)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(g, e))
  }), t))
}