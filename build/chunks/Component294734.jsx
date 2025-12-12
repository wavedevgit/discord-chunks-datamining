/** Chunk was on web.js **/
/** chunk id: 294734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => w
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
      color: Chunk692547.Z.colors.TEXT_MUTED
    }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
      className: Chunk823914.headerText,
      variant: "text-sm/semibold",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t.ToyvLk)
    })]
  })
}

function P(e) {
  let {
    message: t,
    snapshot: n,
    index: d
  } = e, f = i.useMemo(() => new v.r(t, n, d), [t, n, d]), p = (0, a.e7)([h.Z, O.default, y.Z, b.Z, E.Z, u.Z], () => f.getForwardInfo(h.Z, O.default, y.Z, b.Z, E.Z, u.Z).footerInfo, [f], s.Z), _ = i.useCallback(() => {
    (0, S.Z)(t)
  }, [t]);
  return null == p ? null : (0, r.jsxs)(c.P3F, {
    className: A.footerContainer,
    onClick: _,
    "aria-label": p.accessibilityLabel,
    children: [null != p.originIconUrl ? (0, r.jsx)("img", {
      className: A.originIcon,
      src: p.originIconUrl,
      alt: ""
    }) : null, (0, r.jsx)(o.xvT, {
      className: A.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(p.originLabel, "  •  ").concat(p.timestampLabel)
    }), (0, r.jsx)(c.Fbu, {
      size: "xxs",
      color: l.Z.colors.TEXT_MUTED
    })]
  })
}

function R(e) {
  var t;
  let {
    message: n,
    snapshot: o,
    index: s
  } = e, l = i.useMemo(() => (0, I.Z)(n, o), [n, o]), c = m.RS.useSetting(), u = m.NA.useSetting(), E = c && u, b = (0, a.e7)([g.Z], () => g.Z.isDeveloper), y = (0, d.A)((null != (t = l.editedTimestamp) ? t : l.timestamp).valueOf()), {
    content: O,
    hasSpoilerEmbeds: v,
    hasBailedAst: S
  } = (0, p.Z)(l, {
    hideSimpleEmbedContent: E,
    isInteracting: false,
    formatInline: false,
    allowList: y,
    allowHeading: y,
    allowLinks: true,
    allowDevLinks: b,
    previewLinkTarget: true
  }), T = (0, a.e7)([h.Z], () => h.Z.getChannel(n.channel_id)), C = m.jU.useSetting();
  return null == T ? null : (0, r.jsxs)("div", {
    className: A.container,
    children: [(0, r.jsx)("div", {
      className: A.quote
    }), (0, r.jsxs)("div", {
      className: A.content,
      children: [(0, r.jsx)(N, {}), (0, r.jsx)(f.ZP, {
        message: l,
        content: O,
        compact: C
      }), (0, _.Z)({
        channelMessageProps: {
          message: l,
          channel: T,
          compact: C
        },
        hasSpoilerEmbeds: v,
        hasBailedAst: S,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false
      }), (0, r.jsx)(P, {
        message: n,
        snapshot: o,
        index: s
      })]
    })]
  }, s)
}

function w(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(R, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}