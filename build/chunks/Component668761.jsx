/** Chunk was on 63141 **/
/** chunk id: 668761, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  f: () => f,
  y: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk312839 = require("./312839.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk341569 = require("./341569.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function h() {
  let {
    trackView: e,
    trackClick: t
  } = (0, s.R)(d.n0.ClipsReminderNotification, {
    notif_type: d.n0.ClipsReminderNotification
  }), n = o.ZP.getKeybindForAction(c.kg4.SAVE_CLIP), h = (0, l.LI)();
  if (null == n || !h) return null;
  let f = a.BB(n.shortcut, true);
  return {
    title: u.intl.format(u.t.S5uhCN, {
      keybind: f,
      keybindHook: () => (0, i.jsx)("span", {
        style: {
          display: "inline-block"
        },
        children: (0, i.jsx)(r.M2$, {
          shortcut: f
        })
      })
    }),
    icon: (0, i.jsx)(r.AlX, {
      size: "xs",
      color: "currentColor"
    }),
    onNotificationShow: () => {
      e()
    },
    onDismissClick: () => {
      t("dismiss")
    }
  }
}

function f(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, s.R)(d.n0.ClipsNotification, {
    notif_type: d.n0.ClipsNotification
  });
  return {
    title: e,
    icon: (0, i.jsx)(r.AlX, {
      size: "xs",
      color: "currentColor"
    }),
    onNotificationShow: () => {
      t()
    },
    onDismissClick: () => {
      n("dismiss")
    }
  }
}