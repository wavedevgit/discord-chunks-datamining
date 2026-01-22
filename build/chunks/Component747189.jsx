/** Chunk was on 84018 **/
/** chunk id: 747189, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => p,
  t: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk684748 = require("./684748.js"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk572164 = require("./572164.js"),
  Chunk652215 = require("./652215.js"),
  Chunk672396 = require("./672396.js"),
  Chunk985018 = require("./985018.jsx");

function h() {
  let {
    trackView: e,
    trackClick: t
  } = (0, s.Y)(d.KS.ClipsReminderNotification, {
    notif_type: d.KS.ClipsReminderNotification
  }), n = l.Ay.getKeybindForAction(c.hCu.SAVE_CLIP), h = (0, a.TD)();
  if (null == n || !h) return null;
  let p = o.dI(n.shortcut, true);
  return {
    title: u.intl.format(u.t.S5uhCN, {
      keybind: p,
      keybindHook: () => (0, i.jsx)("span", {
        style: {
          display: "inline-block"
        },
        children: (0, i.jsx)(r.e7I, {
          shortcut: p
        })
      })
    }),
    icon: (0, i.jsx)(r.xgA, {
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

function p(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, s.Y)(d.KS.ClipsNotification, {
    notif_type: d.KS.ClipsNotification
  });
  return {
    title: e,
    icon: (0, i.jsx)(r.xgA, {
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