/** Chunk was on 63141 **/
/** chunk id: 668761, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => h,
  y: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk312839 = require("./312839.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk987650 = require("./987650.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  let {
    trackView: e,
    trackClick: t
  } = (0, Chunk312839.R)(Chunk987650.n0.ClipsReminderNotification, {
    notif_type: Chunk987650.n0.ClipsReminderNotification
  }), n = Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP);
  if (null == require) return null;
  let u = Chunk13140.BB(require.shortcut, true);
  return {
    title: Chunk388032.intl.format(Chunk388032.t.S5uhCA, {
      keybind: u,
      keybindHook: () => <span style={{
          display: "inline-block"
        }}><Chunk481060.M2$ shortcut={u} /></span>
    }),
    icon: <Chunk481060.AlX size={"xs"} color={"currentColor"} />,
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
  } = (0, o.R)(c.n0.ClipsNotification, {
    notif_type: c.n0.ClipsNotification
  });
  return {
    title: e,
    icon: <r.AlX size={"xs"} color={"currentColor"} />,
    onNotificationShow: () => {
      t()
    },
    onDismissClick: () => {
      n("dismiss")
    }
  }
}