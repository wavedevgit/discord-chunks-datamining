/** Chunk was on 63141 **/
/** chunk id: 668761, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => p,
  y: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  } = (0, Chunk312839.R)(Chunk987650.n0.ClipsReminderNotification, {
    notif_type: Chunk987650.n0.ClipsReminderNotification
  }), n = Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP), h = (0, Chunk341569.LI)();
  if (null == require || !h) return null;
  let p = Chunk13140.BB(require.shortcut, true);
  return {
    title: Chunk388032.intl.format(Chunk388032.t.S5uhCN, {
      keybind: p,
      keybindHook: () => (0, Chunk951288.jsx)("span", {
        style: {
          display: "inline-block"
        },
        children: (0, Chunk951288.jsx)(Chunk481060.M2$, {
          shortcut: p
        })
      })
    }),
    icon: (0, Chunk951288.jsx)(Chunk481060.AlX, {
      size: "xs",
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

function p(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, o.R)(d.n0.ClipsNotification, {
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