/** Chunk was on 50642 **/
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
    children: y
  } = e, C = (0, r.e7)([c.Z], () => c.Z.isBlocked(b.getRecipientId()));
  (0, o.Z)(b.id);
  let v = (0, s.Z)(b.id),
    _ = b.isSystemDM(),
    x = C && !_ && !b.isMultiUserDM(),
    O = {};
  if (_) {
    let e = v ? m.intl.string(m.t["+KSnWX"]) : m.intl.string(m.t.hvVgAZ);
    O.message = m.intl.string(m.t.Bt2N7D), O.subtitle = m.intl.string(m.t["n/Vzkw"]), O.buttonText = e, O.buttonIcon = v ? l.rgF : true, O.onButtonClick = () => {
      if (v) {
        open(f.D2), u.default.track(h.rMx.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: f.D2
        });
        return
      }
      open(d.Z.getArticleURL(h.BhN.SYSTEM_DMS))
    }, O.imageSrc = n(780961)
  } else x && (O.message = m.intl.string(m.t["9T6N5/"]), O.buttonText = m.intl.string(m.t.XyHpKH), O.onButtonClick = () => {
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
  }({}, O), g = g = {
    children: y
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