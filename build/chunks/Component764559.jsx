/** Chunk was on 84018 **/
/** chunk id: 764559, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g,
  B: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk684748 = require("./684748.js"),
  Chunk160761 = require("./160761.js"),
  Chunk994322 = require("./994322.js"),
  Chunk672396 = require("./672396.js"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk199563 = require("./199563.js");

function f() {
  let e = (0, c.A)({
      location: "Overlay",
      options: {
        autoTrackExposure: false
      }
    }),
    [t, n] = (0, a.DP)(e ? [r.M.OVERLAY_KEYBIND_NOTIFICATION] : []);
  return {
    showKeybindIndicators: null != t && e,
    dismissKeybindNotification: n
  }
}

function g(e) {
  let {
    markAsDismissed: t
  } = e, {
    trackView: n,
    trackClick: r
  } = (0, o.Y)(d.KS.KeybindIndicatorsNotification, {
    notif_type: d.KS.KeybindIndicatorsNotification
  });
  return {
    icon: null,
    body: (0, i.jsxs)("div", {
      className: h.A,
      children: [(0, i.jsx)("div", {
        className: h.z,
        children: (0, i.jsx)(s.cNw, {
          size: "custom",
          color: "currentColor",
          height: 28,
          width: 28
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: p.intl.string(p.t.EFRNtK)
      })]
    }),
    onDismissClick: (e, n) => {
      r("dismiss"), t(u.i.DISMISS), l.A.updateNotificationStatus(n)
    },
    onNotificationShow: () => {
      t(u.i.AUTO_DISMISS), n()
    }
  }
}