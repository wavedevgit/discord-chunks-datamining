/** Chunk was on 78528 **/
/** chunk id: 984624, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    channelId: t,
    onClick: n
  } = e, b = (0, a.Us)(), A = (0, g.Qs)(t), y = (0, i.bG)([d.A], () => d.A.getChannel(t), [t]), {
    canManageGuildEvent: _
  } = (0, o.nr)(y), O = _(A), j = l.useRef(null);
  if (null == A) return null;
  let v = () => {
      null != y && (0, f.A)(y) ? (0, p.Py)(y, b) : n()
    },
    x = () => {
      h.A.endEvent(A.id, A.guild_id)
    };
  return O ? (0, r.jsx)(s.YNO, {
    targetElementRef: j,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(c.A, {
        children: (0, r.jsx)(s.W1t, {
          "data-menu-migrated": true,
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": m.intl.string(m.t["K6/mk3"]),
          onClose: t,
          children: (0, r.jsx)(s.Drp, {
            id: "end-voice-event",
            color: "danger",
            action: x,
            label: m.intl.string(m.t.qaYzPA),
            leadingAccessory: {
              type: "icon",
              icon: s.aXh
            },
            icon: s.aXh
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: s.YNO.Animation.FADE,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(u.A, {
        buttonRef: j,
        label: m.intl.string(m.t["6vrfgt"]),
        onClick: v,
        onPopoutClick: t
      })
    }
  }) : (0, r.jsx)(u.A, {
    label: m.intl.string(m.t["6vrfgt"]),
    onClick: n
  })
}