/** Chunk was on 63141 **/
/** chunk id: 877183, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
let f = () => ({
    icon: require("./639525.js"),
    title: Chunk388032.intl.string(Chunk388032.t.r0ObgY),
    body: Chunk388032.intl.string(Chunk388032.t.hc6XFx),
    hint: g,
    notifType: Chunk987650.n0.OopWelcomeNudge
  }),
  g = e => (0, s.QR)(e, (0, u.P)(), p.t["z8/sgI"]);

function m(e) {
  let {
    isFirstTimeNux: t
  } = e, {
    icon: n,
    title: s,
    body: h,
    hint: g,
    notifType: m
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
        body: p.intl.string(p.t.GtUrGB)
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
  }(f(), e), {
    trackView: y,
    trackClick: O
  } = (0, u.R)(m, {
    notif_type: m
  });
  return {
    icon: n,
    title: s,
    body: h,
    hint: g,
    renderFooter: () => (0, i.jsx)("div", {
      style: {
        textAlign: "center",
        padding: 2
      },
      children: p.intl.string(p.t["9MyuT0"])
    }),
    confirmText: t ? p.intl.string(p.t.TxyTbm) : true,
    onConfirmClick: t ? () => {
      O("unlock"), o.Z.setInputLocked(false, (0, d.getPID)())
    } : true,
    onNotificationShow: () => {
      y(), t && (0, l.Q3)(r.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX)
    },
    onNotificationClick: (e, t) => {
      O("unlock"), a.default.isOverlayOOPEnabledForPid((0, d.getPID)()) ? o.Z.setInputLocked(false, (0, d.getPID)()) : c.default.isInstanceLocked() && o.Z.setInstanceLocked(false)
    },
    onDismissClick: () => {
      O("dismiss")
    }
  }
}