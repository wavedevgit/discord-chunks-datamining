/** Chunk was on web.js **/
/** chunk id: 832820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./704826.js"), require("./35282.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk521338 = require("./521338.js");

function b(e) {
  let {
    emojiConfetti: t
  } = e, n = i.useMemo(() => null == t ? null : null == t.id ? t.optionallyDiverseSequence : t.name, [t]);
  return null == t ? (0, r.jsx)(s.EO4, {
    size: "sm",
    color: "currentColor"
  }) : (0, r.jsx)(l.Z, {
    animated: false,
    emojiId: t.id,
    emojiName: n
  })
}
let y = function(e) {
  let {
    channel: t
  } = e, n = (0, u.z8)(t.id), l = (0, u.OG)(t.id), {
    entitlement: y,
    numPotions: O
  } = (0, h.t6)(f.D1), v = i.useCallback(e => {
    (0, u.Hi)(e, t.id)
  }, [t.id]), I = i.useCallback(() => {
    (0, u.GA)(t.id)
  }, [t.id]), T = i.useMemo(() => null != n ? n.name.replace(/_/g, " ") : "", [n]), S = i.useCallback(() => {
    (0, u.Hb)(t.id)
  }, [t.id]), A = i.useMemo(() => null != O && O > 0 ? (null == y ? true : y.type) === m.qc2.DEVELOPER_GIFT ? g.intl.format(g.t["b+P6ra"], {
    numPotions: O
  }) : g.intl.format(g.t.RiQ4cn, {
    numPotions: O
  }) : g.intl.string(g.t.hvVgAQ), [O, y]), [N, C] = i.useState(false === l);
  i.useEffect(() => {
    false === l && I()
  }, [l, I]);
  let R = i.useCallback(() => {
      C(false)
    }, []),
    P = i.useCallback(e => {
      v(e), C(false)
    }, [v]),
    w = i.useCallback(() => {
      (0, _.s)({
        channelId: t.id,
        onRedeem: () => {},
        buttonUseState: "apply",
        source: d.YD.MessageConfettiBar
      })
    }, [t.id]),
    D = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: E.bar,
    children: [(0, r.jsx)(p.Z, {
      channel: t,
      shouldShow: N,
      onRequestClose: R,
      setEmojiConfetti: P,
      positionRef: D,
      position: "top",
      align: "left",
      children: () => (0, r.jsxs)(s.P3F, {
        innerRef: D,
        onClick: () => C(!N),
        className: E.emojiSelectContainer,
        children: [(0, r.jsx)("div", {
          className: E.emojiIconContainer,
          children: (0, r.jsx)(b, {
            emojiConfetti: null != n ? n : true
          })
        }), (0, r.jsx)(o.xv, {
          variant: "text-sm/medium",
          children: null == n ? g.intl.string(g.t.mzfiGR) : g.intl.format(g.t.Hcd9OT, {
            emojiName: T
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: E.end,
      children: [(0, r.jsx)(a.zx, {
        look: a.zx.Looks.LINK,
        size: a.zx.Sizes.SMALL,
        onClick: w,
        color: a.zx.Colors.TRANSPARENT,
        className: E.learnMoreButton,
        children: (0, r.jsx)(o.xv, {
          variant: "text-sm/medium",
          children: A
        })
      }), (0, r.jsx)("div", {
        className: E.separator,
        "aria-hidden": true
      }), (0, r.jsx)(c.B, {
        onClick: S
      })]
    })]
  })
}