/** Chunk was on web.js **/
/** chunk id: 294734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk356264 = require("./356264.js"),
  Chunk628238 = require("./628238.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk438075 = require("./438075.jsx"),
  Chunk284928 = require("./284928.js"),
  Chunk695346 = require("./695346.js"),
  Chunk592125 = require("./592125.js"),
  Chunk906467 = require("./906467.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk100604 = require("./100604.js"),
  Chunk694784 = require("./694784.js"),
  Chunk39154 = require("./39154.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk154706 = require("./154706.js");

function R() {
  return (0, r.jsxs)("div", {
    className: P.headerContainer,
    children: [(0, r.jsx)(A.Z, {
      size: "xs",
      className: P.headerIcon,
      color: l.Z.colors.TEXT_MUTED
    }), (0, r.jsx)(a.xvT, {
      className: P.headerText,
      variant: "text-sm/semibold",
      color: "text-muted",
      children: N.intl.string(N.t.ToyvLk)
    })]
  })
}

function w(e) {
  let {
    message: t,
    snapshot: n,
    index: u
  } = e, f = i.useMemo(() => new I.r(t, n, u), [t, n, u]), p = (0, o.e7)([E.Z, S.default, v.Z, O.Z, y.Z, d.Z], () => f.getForwardInfo(E.Z, S.default, v.Z, O.Z, y.Z, d.Z).footerInfo, [f], s.Z), _ = (0, o.e7)([E.Z], () => {
    var e;
    return E.Z.getChannel(null == (e = t.messageReference) ? true : e.channel_id)
  }), m = i.useCallback(() => {
    (0, T.Z)(t)
  }, [t]);
  return null == p ? null : (0, r.jsxs)(c.P3F, {
    className: P.footerContainer,
    onClick: m,
    "aria-label": p.accessibilityLabel,
    children: [null != p.originIconUrl ? (0, r.jsx)("img", {
      className: P.originIcon,
      src: p.originIconUrl,
      alt: ""
    }) : null, null == p.originIconUrl && (null == _ ? true : _.isThread()) ? (0, r.jsx)(D, {
      channel: _
    }) : null, (0, r.jsx)(a.xvT, {
      className: P.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(p.originLabel, "  •  ").concat(p.timestampLabel)
    }), (0, r.jsx)(c.Fbu, {
      size: "xxs",
      color: l.Z.colors.TEXT_MUTED
    })]
  })
}

function D(e) {
  let {
    channel: t
  } = e, n = (0, h.KN)({
    location: "ForwardFooter"
  }), a = i.useMemo(() => (0, u.KS)(t), [t]);
  return n.enabled && null != a ? (0, r.jsx)(a, {
    className: P.originIcon,
    size: "xs",
    color: "currentColor"
  }) : null
}

function x(e) {
  var t;
  let {
    message: n,
    snapshot: a,
    index: s
  } = e, l = i.useMemo(() => (0, C.Z)(n, a), [n, a]), c = g.RS.useSetting(), u = g.NA.useSetting(), d = c && u, h = (0, o.e7)([b.Z], () => b.Z.isDeveloper), y = (0, f.A)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()), {
    content: O,
    hasSpoilerEmbeds: v,
    hasBailedAst: S
  } = (0, _.Z)(l, {
    hideSimpleEmbedContent: d,
    isInteracting: false,
    formatInline: false,
    allowList: y,
    allowHeading: y,
    allowLinks: true,
    allowDevLinks: h,
    previewLinkTarget: true
  }), I = (0, o.e7)([E.Z], () => E.Z.getChannel(n.channel_id)), T = g.jU.useSetting();
  return null == I ? null : (0, r.jsxs)("div", {
    className: P.container,
    children: [(0, r.jsx)("div", {
      className: P.quote
    }), (0, r.jsxs)("div", {
      className: P.content,
      children: [(0, r.jsx)(R, {}), (0, r.jsx)(p.ZP, {
        message: l,
        content: O,
        compact: T
      }), (0, m.Z)({
        channelMessageProps: {
          message: l,
          channel: I,
          compact: T
        },
        hasSpoilerEmbeds: v,
        hasBailedAst: S,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false
      }), (0, r.jsx)(w, {
        message: n,
        snapshot: a,
        index: s
      })]
    })]
  }, s)
}

function L(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(x, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}