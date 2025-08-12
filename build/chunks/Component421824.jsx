/** Chunk was on 9646 **/
/** chunk id: 421824, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => h,
  y: () => f
}), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk522474 = require("./522474.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk44359 = require("./44359.jsx"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
  if (Chunk522474.Z.getWindowOpen(Chunk981631.KJ3.ACTIVITY_POPOUT)) return null;
  let {
    trackView: e,
    trackClick: t
  } = (0, Chunk620954.R)(Chunk987650.n0.ClipsReminderNotification, {
    notif_type: Chunk987650.n0.ClipsReminderNotification
  }), n = Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP);
  if (null == require) return null;
  let f = Chunk13140.BB(require.shortcut, true);
  return {
    title: Chunk388032.intl.format(Chunk388032.t.S5uhCA, {
      keybind: f,
      keybindHook: (e, t) => (0, i.jsx)(s.Z, {
        keybind: f.split("+")
      }, t)
    }),
    icon: (0, Chunk255367.jsx)(Chunk481060.AlX, {
      size: "lg",
      color: "currentColor"
    }),
    onNotificationShow: () => {
      module()
    },
    onDismissClick: () => {
      exports("dismiss")
    }
  }
}

function h(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, c.R)(u.n0.ClipsNotification, {
    notif_type: u.n0.ClipsNotification
  });
  return {
    title: e,
    icon: (0, i.jsx)(r.AlX, {
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