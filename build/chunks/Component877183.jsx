/** Chunk was on 63141 **/
/** chunk id: 877183, original params: e,t,n (module,exports,require) **/
"use strict";
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
let f = e => (0, l.QR)(e, (0, u.P)(), h.t["z8/sgJ"]);

function g(e) {
  let {
    isFirstTimeNux: t
  } = e, {
    icon: l,
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
        title: h.intl.string(h.t.xxADho),
        body: h.intl.string(h.t.GtUrGD)
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
    title: h.intl.string(h.t.r0ObgV),
    body: h.intl.string(h.t.hc6XF7),
    hint: f,
    notifType: p.n0.OopWelcomeNudge
  }, e), {
    trackView: b,
    trackClick: v
  } = (0, u.R)(y, {
    notif_type: y
  });
  return {
    icon: l,
    title: g,
    body: m,
    hint: _,
    renderFooter: () => (0, i.jsx)("div", {
      style: {
        textAlign: "center",
        padding: 2
      },
      children: h.intl.string(h.t["9MyuT0"])
    }),
    confirmText: t ? h.intl.string(h.t.TxyTbk) : true,
    onConfirmClick: t ? () => {
      v("unlock"), o.Z.setInputLocked(false, (0, d.getPID)())
    } : true,
    onNotificationShow: () => {
      b(), t && (0, s.Q3)(r.z.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX)
    },
    onNotificationClick: (e, t) => {
      v("unlock"), a.default.isOverlayOOPEnabledForPid((0, d.getPID)()) ? o.Z.setInputLocked(false, (0, d.getPID)()) : c.default.isInstanceLocked() && o.Z.setInstanceLocked(false)
    },
    onDismissClick: () => {
      v("dismiss")
    }
  }
}