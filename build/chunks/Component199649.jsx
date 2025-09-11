/** Chunk was on 70127 **/
/** chunk id: 199649, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk631937 = require("./631937.js"),
  Chunk702321 = require("./702321.js"),
  Chunk377171 = require("./377171.js"),
  Chunk699516 = require("./699516.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk862679 = require("./862679.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk596401 = require("./596401.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  var t, b;
  let {
    channel: y,
    children: _
  } = e, C = (0, i.e7)([u.Z], () => u.Z.isBlocked(y.getRecipientId()));
  (0, o.Z)(y.id);
  let v = (0, s.Z)(y.id),
    x = y.isSystemDM(),
    O = C && !x && !y.isMultiUserDM(),
    j = {};
  if (x) {
    let e = v ? (0, r.jsxs)(r.Fragment, {
      children: [g.intl.string(g.t["+KSnWV"]), (0, r.jsx)(l.rgF, {
        size: "xs",
        color: c.Z.HEADER_PRIMARY
      })]
    }) : g.intl.string(g.t.hvVgAQ);
    j.message = g.intl.string(g.t.Bt2N7O), j.subtitle = g.intl.string(g.t["n/Vzk5"]), j.buttonText = e, j.onButtonClick = () => {
      if (v) {
        open(m.D2), d.default.track(f.rMx.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: m.D2
        });
        return
      }
      open(p.Z.getArticleURL(f.BhN.SYSTEM_DMS))
    }, j.imageSrc = n(780961)
  } else O && (j.message = g.intl.string(g.t["9T6N5+"]), j.buttonText = g.intl.string(g.t.XyHpKC), j.onButtonClick = () => {
    a.Z.unblockUser(y.getRecipientId())
  });
  return (0, r.jsx)(h.Z, (t = function(e) {
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
  }({}, j), b = b = {
    children: _
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(b)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(b)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(b, e))
  }), t))
}