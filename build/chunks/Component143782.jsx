/** Chunk was on 65045 **/
/** chunk id: 143782, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk153867 = require("./153867.js"),
  Chunk493773 = require("./493773.js"),
  Chunk933557 = require("./933557.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = t => {
  let {
    onConfirm: n,
    channel: e,
    onClose: h,
    transitionState: p
  } = t, C = (0, r.ZP)(e), [g, k] = a.useState(false);
  return ((0, c.ZP)(() => {
    o.default.track(d.rMx.OPEN_MODAL, {
      type: "Voice channel change confirmation",
      channel_id: e.id
    })
  }), null == C) ? null : (0, i.jsx)(l.Modal, {
    title: u.intl.string(u.t["0LZN5F"]),
    subtitle: u.intl.format(u.t["vA+uEs"], {
      channel: C
    }),
    transitionState: p,
    size: "md",
    onClose: h,
    actionBarInput: (0, i.jsx)(l.XZJ, {
      checked: g,
      onChange: t => {
        s.ZP.updatedUnsyncedSettings({
          disableVoiceChannelChangeAlert: t
        }), k(t)
      },
      label: u.intl.string(u.t["JdIQ/Y"])
    }),
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: h
    }, {
      variant: "primary",
      text: u.intl.string(u.t["cY+Oob"]),
      onClick: n
    }]
  })
}