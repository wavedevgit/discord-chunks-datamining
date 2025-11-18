/** Chunk was on web.js **/
/** chunk id: 832820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk962293 = require("./962293.jsx"),
  Chunk328908 = require("./328908.js"),
  Chunk992970 = require("./992970.js"),
  Chunk317951 = require("./317951.js"),
  Chunk135793 = require("./135793.jsx"),
  Chunk883998 = require("./883998.jsx"),
  Chunk576645 = require("./576645.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk508124 = require("./508124.js");

function E(e) {
  let {
    emojiConfetti: t
  } = e, n = i.useMemo(() => null == t ? null : null == t.id ? t.optionallyDiverseSequence : t.name, [t]);
  return null == t ? (0, r.jsx)(o.EO4, {
    size: "sm",
    color: "currentColor"
  }) : (0, r.jsx)(s.Z, {
    animated: false,
    emojiId: t.id,
    emojiName: n
  })
}
let b = function(e) {
  let {
    channel: t
  } = e, n = (0, c.z8)(t.id), s = (0, c.OG)(t.id), {
    entitlement: b,
    numPotions: y
  } = (0, p.t6)(d.D1), O = i.useCallback(e => {
    (0, c.Hi)(e, t.id)
  }, [t.id]), v = i.useCallback(() => {
    (0, c.GA)(t.id)
  }, [t.id]), I = i.useMemo(() => null != n ? n.name.replace(/_/g, " ") : "", [n]), T = i.useCallback(() => {
    (0, c.Hb)(t.id)
  }, [t.id]), S = i.useMemo(() => null != y && y > 0 ? (null == b ? true : b.type) === h.qc2.DEVELOPER_GIFT ? m.intl.format(m.t["b+P6ra"], {
    numPotions: y
  }) : m.intl.format(m.t.RiQ4ci, {
    numPotions: y
  }) : m.intl.string(m.t.hvVgAZ), [y, b]), [A, C] = i.useState(false === s);
  i.useEffect(() => {
    false === s && v()
  }, [s, v]);
  let N = i.useCallback(() => {
      C(false)
    }, []),
    R = i.useCallback(e => {
      O(e), C(false)
    }, [O]),
    P = i.useCallback(() => {
      (0, f.s)({
        channelId: t.id,
        onRedeem: () => {},
        buttonUseState: "apply",
        source: u.YD.MessageConfettiBar
      })
    }, [t.id]),
    D = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: g.bar,
    children: [(0, r.jsx)(_.Z, {
      channel: t,
      shouldShow: A,
      onRequestClose: N,
      setEmojiConfetti: R,
      positionRef: D,
      position: "top",
      align: "left",
      children: () => (0, r.jsxs)(o.P3F, {
        innerRef: D,
        onClick: () => C(!A),
        className: g.emojiSelectContainer,
        children: [(0, r.jsx)("div", {
          className: g.emojiIconContainer,
          children: (0, r.jsx)(E, {
            emojiConfetti: null != n ? n : true
          })
        }), (0, r.jsx)(a.xvT, {
          variant: "text-sm/medium",
          children: null == n ? m.intl.string(m.t.mzfiGW) : m.intl.format(m.t.Hcd9OU, {
            emojiName: I
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: g.end,
      children: [(0, r.jsx)(o.Button, {
        onClick: P,
        text: S,
        variant: "primary"
      }), (0, r.jsx)("div", {
        className: g.separator,
        "aria-hidden": true
      }), (0, r.jsx)(l.B, {
        onClick: T
      })]
    })]
  })
}