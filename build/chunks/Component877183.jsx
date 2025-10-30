/** Chunk was on 63141 **/
/** chunk id: 877183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk704215 = require("./704215.js"),
  Chunk13245 = require("./13245.js"),
  Chunk266454 = require("./266454.js"),
  Chunk593481 = require("./593481.jsx"),
  Chunk371651 = require("./371651.js"),
  Chunk237997 = require("./237997.js"),
  Chunk145597 = require("./145597.js"),
  Chunk312839 = require("./312839.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");
let f = e => (0, a.QR)(e, (0, u.P)(), p.t["z8/sgJ"]);

function g(e) {
  let {
    isFirstTimeNux: t
  } = e, {
    icon: a,
    title: g,
    body: m,
    hint: _,
    notifType: y
  } = function(e, t) {
    if (t.isFirstTimeNux) {
      var n, i;
      return n = function(e) {
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
      }({}, e), i = i = {
        title: p.intl.string(p.t.xxADho),
        body: p.intl.string(p.t.GtUrGD)
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n
    }
    return e
  }({
    icon: n(639525),
    title: p.intl.string(p.t.r0ObgV),
    body: p.intl.string(p.t.hc6XF7),
    hint: f,
    notifType: h.n0.OopWelcomeNudge
  }, e), {
    trackView: O,
    trackClick: v
  } = (0, u.R)(y, {
    notif_type: y
  });
  return {
    icon: a,
    title: g,
    body: m,
    hint: _,
    renderFooter: () => (0, i.jsx)("div", {
      style: {
        textAlign: "center",
        padding: 2
      },
      children: p.intl.string(p.t["9MyuT0"])
    }),
    confirmText: t ? p.intl.string(p.t.TxyTbk) : true,
    onConfirmClick: t ? () => {
      v("unlock"), o.Z.setInputLocked(false, (0, d.getPID)())
    } : true,
    onNotificationShow: () => {
      O(), t && (0, l.Q3)(r.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX)
    },
    onNotificationClick: (e, t) => {
      v("unlock"), s.default.isOverlayOOPEnabledForPid((0, d.getPID)()) ? o.Z.setInputLocked(false, (0, d.getPID)()) : c.default.isInstanceLocked() && o.Z.setInstanceLocked(false)
    },
    onDismissClick: () => {
      v("dismiss")
    }
  }
}