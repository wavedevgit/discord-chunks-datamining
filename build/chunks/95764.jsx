/** Chunk was on web.js **/
/** chunk id: 95764, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk390322 = require("./390322.js"),
  Chunk88479 = require("./88479.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk482241 = require("./482241.js"),
  Chunk389303 = require("./389303.js"),
  Chunk554747 = require("./554747.js"),
  Chunk388032 = require("./388032.js");

function g(e) {
  let {
    channelId: t,
    onClick: n
  } = e, g = (0, s.bp)(), E = (0, h.qY)(t), b = (0, o.e7)([d.Z], () => d.Z.getChannel(t), [t]), {
    canManageGuildEvent: y
  } = (0, l.XJ)(b), O = y(E), v = i.useRef(null);
  if (null == E) return null;
  let I = () => {
      if (null != b && (0, p.Z)(b)) return void(0, f.lC)(b, g);
      n()
    },
    T = () => {
      _.Z.endEvent(E.id, E.guild_id)
    };
  return O ? <a.yRy targetElementRef={v} renderPopout={e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(a.v2r, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": m.intl.string(m.t["K6/mk5"]),
          onClose: t,
          children: (0, r.jsx)(a.sNh, {
            id: "end-voice-event",
            color: "danger",
            action: T,
            label: m.intl.string(m.t.qaYzPD),
            icon: a.k$p
          })
        })
      })
    }} align={"center"} position={"top"} animation={a.yRy.Animation.FADE}>{e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(u.Z, {
        buttonRef: v,
        label: m.intl.string(m.t["6vrfgo"]),
        onClick: I,
        onPopoutClick: t
      })
    }}</a.yRy> : <u.Z label={m.intl.string(m.t["6vrfgo"])} onClick={n} />
}