/** Chunk was on 71447 **/
/** chunk id: 714642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => g,
  t: () => m
}), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk572164 = require("./572164.js"),
  Chunk87001 = require("./87001.js"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk22802 = require("./22802.jsx"),
  Chunk592598 = require("./592598.js"),
  Chunk581730 = require("./581730.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m() {
  if (u.A.isNotificationDisabled(p.KS.ClipsReminderNotification) || a.A.getWindowOpen(h.MLl.ACTIVITY_POPOUT)) return null;
  let {
    trackView: e,
    trackClick: t
  } = (0, d.Y9)(p.KS.ClipsReminderNotification, {
    notif_type: p.KS.ClipsReminderNotification
  }), n = o.Ay.getKeybindForAction(h.hCu.SAVE_CLIP), m = (0, l.TD)();
  if (null == n || !m) return null;
  let g = s.dI(n.shortcut, true);
  return {
    title: f.intl.format(f.t.S5uhCN, {
      keybind: g,
      keybindHook: (e, t) => (0, i.jsx)(c.b, {
        keybind: g.split("+")
      }, t)
    }),
    icon: (0, i.jsx)(r.xgA, {
      size: "lg",
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

function g(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, d.Y9)(p.KS.ClipsNotification, {
    notif_type: p.KS.ClipsNotification
  });
  return {
    title: e,
    icon: (0, i.jsx)(r.xgA, {
      size: "lg",
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