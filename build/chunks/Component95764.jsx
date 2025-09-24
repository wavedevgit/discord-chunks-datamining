/** Chunk was on 88806 **/
/** chunk id: 95764, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    channelId: t,
    onClick: n
  } = e, b = (0, o.bp)(), y = (0, m.qY)(t), C = (0, l.e7)([d.Z], () => d.Z.getChannel(t), [t]), {
    canManageGuildEvent: _
  } = (0, s.XJ)(C), v = _(y), x = i.useRef(null);
  if (null == y) return null;
  let O = () => {
      if (null != C && (0, f.Z)(C)) return void(0, p.lC)(C, b);
      n()
    },
    j = () => {
      h.Z.endEvent(y.id, y.guild_id)
    };
  return v ? (0, r.jsx)(a.yRy, {
    targetElementRef: x,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(c.Z, {
        children: (0, r.jsx)(a.v2r, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": g.intl.string(g.t["K6/mk5"]),
          onClose: t,
          children: (0, r.jsx)(a.sNh, {
            id: "end-voice-event",
            color: "danger",
            action: j,
            label: g.intl.string(g.t.qaYzPD),
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
        label: g.intl.string(g.t["6vrfgo"]),
        onClick: O,
        onPopoutClick: t
      })
    }
  }) : (0, r.jsx)(u.Z, {
    label: g.intl.string(g.t["6vrfgo"]),
    onClick: n
  })
}