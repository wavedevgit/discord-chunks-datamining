/** Chunk was on web.js **/
/** chunk id: 294734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk356264 = require("./356264.js"),
  Chunk628238 = require("./628238.js"),
  Chunk930282 = require("./930282.jsx"),
  Chunk25015 = require("./25015.jsx"),
  Chunk438075 = require("./438075.jsx"),
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
  Chunk823914 = require("./823914.js");

function N() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk823914.headerContainer,
    children: [(0, Chunk54381.jsx)(Chunk245216.Z, {
      size: "xs",
      className: Chunk823914.headerIcon,
      color: Chunk692547.Z.colors.TEXT_LOW_CONTRAST
    }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
      className: Chunk823914.headerText,
      variant: "text-sm/semibold",
      color: "text-low-contrast",
      children: Chunk388032.intl.string(Chunk388032.t.ToyvLk)
    })]
  })
}

function R(e) {
  let {
    message: t,
    snapshot: n,
    index: d
  } = e, f = i.useMemo(() => new v.r(t, n, d), [t, n, d]), _ = (0, o.e7)([m.Z, O.default, y.Z, b.Z, E.Z, u.Z], () => f.getForwardInfo(m.Z, O.default, y.Z, b.Z, E.Z, u.Z).footerInfo, [f], s.Z), p = i.useCallback(() => {
    (0, I.Z)(t)
  }, [t]);
  return null == _ ? null : (0, r.jsxs)(c.P3F, {
    className: C.footerContainer,
    onClick: p,
    "aria-label": _.accessibilityLabel,
    children: [null != _.originIconUrl ? (0, r.jsx)("img", {
      className: C.originIcon,
      src: _.originIconUrl,
      alt: ""
    }) : null, (0, r.jsx)(a.xvT, {
      className: C.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(_.originLabel, "  •  ").concat(_.timestampLabel)
    }), (0, r.jsx)(c.Fbu, {
      size: "xxs",
      color: l.Z.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function P(e) {
  var t;
  let {
    message: n,
    snapshot: a,
    index: s
  } = e, l = i.useMemo(() => (0, T.Z)(n, a), [n, a]), c = h.RS.useSetting(), u = h.NA.useSetting(), E = c && u, b = (0, o.e7)([g.Z], () => g.Z.isDeveloper), y = (0, d.A)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()), {
    content: O,
    hasSpoilerEmbeds: v
  } = (0, _.Z)(l, {
    hideSimpleEmbedContent: E,
    isInteracting: false,
    formatInline: false,
    allowList: y,
    allowHeading: y,
    allowLinks: true,
    allowDevLinks: b,
    previewLinkTarget: true
  }), I = (0, o.e7)([m.Z], () => m.Z.getChannel(n.channel_id)), S = h.jU.useSetting();
  return null == I ? null : (0, r.jsxs)("div", {
    className: C.container,
    children: [(0, r.jsx)("div", {
      className: C.quote
    }), (0, r.jsxs)("div", {
      className: C.content,
      children: [(0, r.jsx)(N, {}), (0, r.jsx)(f.ZP, {
        message: l,
        content: O,
        compact: S
      }), (0, p.Z)({
        channelMessageProps: {
          message: l,
          channel: I,
          compact: S
        },
        hasSpoilerEmbeds: v,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false
      }), (0, r.jsx)(R, {
        message: n,
        snapshot: a,
        index: s
      })]
    })]
  }, s)
}

function D(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(P, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}