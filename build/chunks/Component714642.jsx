/** Chunk was on 71447 **/
/** chunk id: 714642, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => m,
  t: () => g
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

function g() {
  if (c.A.isNotificationDisabled(h.KS.ClipsReminderNotification) || a.A.getWindowOpen(p.MLl.ACTIVITY_POPOUT)) return null;
  let {
    trackView: e,
    trackClick: t
  } = (0, d.Y9)(h.KS.ClipsReminderNotification, {
    notif_type: h.KS.ClipsReminderNotification
  }), n = o.Ay.getKeybindForAction(p.hCu.SAVE_CLIP), g = (0, l.TD)();
  if (null == n || !g) return null;
  let m = s.dI(n.shortcut, true);
  return {
    title: f.intl.format(f.t.S5uhCN, {
      keybind: m,
      keybindHook: (e, t) => (0, i.jsx)(u.b, {
        keybind: m.split("+")
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

function m(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, d.Y9)(h.KS.ClipsNotification, {
    notif_type: h.KS.ClipsNotification
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