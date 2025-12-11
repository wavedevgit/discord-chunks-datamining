/** Chunk was on 63141 **/
/** chunk id: 358446, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  K: () => p,
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk312839 = require("./312839.js"),
  Chunk706140 = require("./706140.js"),
  Chunk809357 = require("./809357.js"),
  Chunk987650 = require("./987650.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk849356 = require("./849356.js");

function p() {
  let e = (0, Chunk809357.Z)({
      location: "Overlay",
      options: {
        autoTrackExposure: false
      }
    }),
    [t, n] = (0, Chunk706140.cv)(module ? [Chunk704215.z.OVERLAY_KEYBIND_NOTIFICATION] : []);
  return {
    showKeybindIndicators: null != exports && module,
    dismissKeybindNotification: require
  }
}

function g(e) {
  let {
    markAsDismissed: t
  } = e, {
    trackView: n,
    trackClick: r
  } = (0, o.R)(d.n0.KeybindIndicatorsNotification, {
    notif_type: d.n0.KeybindIndicatorsNotification
  });
  return {
    icon: null,
    body: (0, i.jsxs)("div", {
      className: h.notificationBody,
      children: [(0, i.jsx)("div", {
        className: h.iconContainer,
        children: (0, i.jsx)(a.S6n, {
          size: "custom",
          color: "currentColor",
          height: 28,
          width: 28
        })
      }), (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        children: f.intl.string(f.t.EFRNtK)
      })]
    }),
    onDismissClick: (e, n) => {
      r("dismiss"), t(u.L.DISMISS), s.Z.updateNotificationStatus(n)
    },
    onNotificationShow: () => {
      t(u.L.AUTO_DISMISS), n()
    }
  }
}