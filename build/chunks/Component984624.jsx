/** Chunk was on 97492 **/
/** chunk id: 984624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk931991 = require("./931991.js"),
  Chunk246356 = require("./246356.js"),
  Chunk404355 = require("./404355.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk707592 = require("./707592.jsx"),
  Chunk496092 = require("./496092.js"),
  Chunk132860 = require("./132860.js"),
  Chunk508654 = require("./508654.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    channelId: t,
    onClick: n
  } = e, m = (0, s.Us)(), A = (0, b.Qs)(t), y = (0, i.bG)([d.A], () => d.A.getChannel(t), [t]), {
    canManageGuildEvent: O
  } = (0, o.nr)(y), j = O(A), v = l.useRef(null);
  if (null == A) return null;
  let x = () => {
      null != y && (0, h.A)(y) ? (0, f.Py)(y, m) : n()
    },
    E = () => {
      p.A.endEvent(A.id, A.guild_id)
    };
  return j ? (0, r.jsx)(a.YNO, {
    targetElementRef: v,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(c.A, {
        children: (0, r.jsx)(a.W1t, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": g.intl.string(g.t["K6/mk3"]),
          onClose: t,
          children: (0, r.jsx)(a.Drp, {
            id: "end-voice-event",
            color: "danger",
            action: E,
            label: g.intl.string(g.t.qaYzPA),
            icon: a.aXh
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: a.YNO.Animation.FADE,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(u.A, {
        buttonRef: v,
        label: g.intl.string(g.t["6vrfgt"]),
        onClick: x,
        onPopoutClick: t
      })
    }
  }) : (0, r.jsx)(u.A, {
    label: g.intl.string(g.t["6vrfgt"]),
    onClick: n
  })
}