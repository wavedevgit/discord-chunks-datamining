/** Chunk was on 73755 **/
/** chunk id: 199649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  var t, g;
  let {
    channel: b,
    children: C
  } = e, y = (0, r.e7)([c.Z], () => c.Z.isBlocked(b.getRecipientId()));
  (0, o.Z)(b.id);
  let _ = (0, s.Z)(b.id),
    v = b.isSystemDM(),
    O = y && !v && !b.isMultiUserDM(),
    x = {};
  if (v) {
    let e = _ ? m.intl.string(m.t["+KSnWX"]) : m.intl.string(m.t.hvVgAZ);
    x.message = m.intl.string(m.t.Bt2N7D), x.subtitle = m.intl.string(m.t["n/Vzkw"]), x.buttonText = e, x.buttonIcon = _ ? l.rgF : true, x.onButtonClick = () => {
      if (_) {
        open(f.D2), u.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: f.D2
        });
        return
      }
      open(d.Z.getArticleURL(h.BhN.SYSTEM_DMS))
    }, x.imageSrc = n(780961)
  } else O && (x.message = m.intl.string(m.t["9T6N5/"]), x.buttonText = m.intl.string(m.t.XyHpKH), x.onButtonClick = () => {
    a.Z.unblockUser(b.getRecipientId())
  });
  return (0, i.jsx)(p.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), i.forEach(function(t) {
        var i;
        i = n[t], t in e ? Object.defineProperty(e, t, {
          value: i,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = i
      })
    }
    return e
  }({}, x), g = g = {
    children: C
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(g)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(g, e))
  }), t))
}