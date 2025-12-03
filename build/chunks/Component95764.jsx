/** Chunk was on 34740 **/
/** chunk id: 95764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk357156 = require("./357156.js"),
  Chunk390322 = require("./390322.js"),
  Chunk88479 = require("./88479.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk15274 = require("./15274.jsx"),
  Chunk482241 = require("./482241.js"),
  Chunk389303 = require("./389303.js"),
  Chunk554747 = require("./554747.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    channelId: t,
    onClick: n
  } = e, b = (0, o.bp)(), C = (0, m.qY)(t), y = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]), {
    canManageGuildEvent: v
  } = (0, s.XJ)(y), _ = v(C), O = r.useRef(null);
  if (null == C) return null;
  let x = () => {
      if (null != y && (0, f.Z)(y)) return void(0, p.lC)(y, b);
      n()
    },
    E = () => {
      h.Z.endEvent(C.id, C.guild_id)
    };
  return _ ? (0, i.jsx)(a.yRy, {
    targetElementRef: O,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(c.Z, {
        children: (0, i.jsx)(a.v2r, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": g.intl.string(g.t["K6/mk3"]),
          onClose: t,
          children: (0, i.jsx)(a.sNh, {
            id: "end-voice-event",
            color: "danger",
            action: E,
            label: g.intl.string(g.t.qaYzPA),
            icon: a.k$p
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: a.yRy.Animation.FADE,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, i.jsx)(u.Z, {
        buttonRef: O,
        label: g.intl.string(g.t["6vrfgt"]),
        onClick: x,
        onPopoutClick: t
      })
    }
  }) : (0, i.jsx)(u.Z, {
    label: g.intl.string(g.t["6vrfgt"]),
    onClick: n
  })
}