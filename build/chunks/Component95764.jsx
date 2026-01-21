/** Chunk was on 82124 **/
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
  } = e, b = (0, o.bp)(), y = (0, g.qY)(t), v = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]), {
    canManageGuildEvent: O
  } = (0, s.XJ)(v), j = O(y), x = i.useRef(null);
  if (null == y) return null;
  let C = () => {
      if (null != v && (0, h.Z)(v)) return void(0, p.lC)(v, b);
      n()
    },
    E = () => {
      f.Z.endEvent(y.id, y.guild_id)
    };
  return j ? (0, r.jsx)(a.yRy, {
    targetElementRef: x,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(a.v2r, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": m.intl.string(m.t["K6/mk3"]),
          onClose: t,
          children: (0, r.jsx)(a.sNh, {
            id: "end-voice-event",
            color: "danger",
            action: E,
            label: m.intl.string(m.t.qaYzPA),
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
      return (0, r.jsx)(u.Z, {
        buttonRef: x,
        label: m.intl.string(m.t["6vrfgt"]),
        onClick: C,
        onPopoutClick: t
      })
    }
  }) : (0, r.jsx)(u.Z, {
    label: m.intl.string(m.t["6vrfgt"]),
    onClick: n
  })
}