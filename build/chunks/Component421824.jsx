/** Chunk was on 50751 **/
/** chunk id: 421824, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => g,
  y: () => m
}), require("./35282.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk341569 = require("./341569.js"),
  Chunk522474 = require("./522474.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk44359 = require("./44359.jsx"),
  Chunk624864 = require("./624864.js"),
  Chunk620954 = require("./620954.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m() {
  if (Chunk624864.Z.isNotificationDisabled(Chunk987650.n0.ClipsReminderNotification) || Chunk522474.Z.getWindowOpen(Chunk981631.KJ3.ACTIVITY_POPOUT)) return null;
  let {
    trackView: e,
    trackClick: t
  } = (0, Chunk620954.Rg)(Chunk987650.n0.ClipsReminderNotification, {
    notif_type: Chunk987650.n0.ClipsReminderNotification
  }), n = Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP), m = (0, Chunk341569.LI)();
  if (null == require || !m) return null;
  let g = Chunk13140.BB(require.shortcut, true);
  return {
    title: Chunk388032.intl.format(Chunk388032.t.S5uhCN, {
      keybind: g,
      keybindHook: (e, t) => (0, i.jsx)(c.t, {
        keybind: g.split("+")
      }, t)
    }),
    icon: (0, Chunk54381.jsx)(Chunk481060.AlX, {
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

function g(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, d.Rg)(f.n0.ClipsNotification, {
    notif_type: f.n0.ClipsNotification
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