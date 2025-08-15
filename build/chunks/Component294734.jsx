/** Chunk was on 66866 **/
/** chunk id: 294734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function T() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk823914.headerContainer,
    children: [(0, Chunk255367.jsx)(Chunk245216.Z, {
      size: "xs",
      className: Chunk823914.headerIcon,
      color: Chunk692547.Z.colors.TEXT_LOW_CONTRAST
    }), (0, Chunk255367.jsx)(Chunk793030.xv, {
      className: Chunk823914.headerText,
      variant: "text-sm/semibold",
      color: "text-low-contrast",
      children: Chunk388032.intl.string(Chunk388032.t.ToyvLi)
    })]
  })
}

function P(e) {
  let {
    message: t,
    snapshot: n,
    index: d
  } = e, p = i.useMemo(() => new O.r(t, n, d), [t, n, d]), m = (0, a.e7)([g.Z, v.default, C.Z, E.Z, b.Z, u.Z], () => p.getForwardInfo(g.Z, v.default, C.Z, E.Z, b.Z, u.Z).footerInfo, [p], o.Z), f = i.useCallback(() => {
    (0, y.Z)(t)
  }, [t]);
  return null == m ? null : (0, r.jsxs)(c.P3F, {
    className: S.footerContainer,
    onClick: f,
    children: [null != m.originIconUrl ? (0, r.jsx)("img", {
      className: S.originIcon,
      src: m.originIconUrl,
      alt: ""
    }) : null, (0, r.jsx)(l.xv, {
      className: S.footerText,
      variant: "text-sm/medium",
      color: "none",
      children: "".concat(m.originLabel, "  •  ").concat(m.timestampLabel)
    }), (0, r.jsx)(c.Fbu, {
      size: "xxs",
      color: s.Z.colors.TEXT_LOW_CONTRAST
    })]
  })
}

function N(e) {
  var t;
  let {
    message: n,
    snapshot: l,
    index: o
  } = e, s = i.useMemo(() => (0, x.Z)(n, l), [n, l]), c = _.RS.useSetting(), u = _.NA.useSetting(), b = (0, a.e7)([h.Z], () => h.Z.isDeveloper), E = (0, d.A)((null != (t = s.editedTimestamp) ? t : s.timestamp).valueOf()), {
    content: C,
    hasSpoilerEmbeds: v
  } = (0, m.Z)(s, {
    hideSimpleEmbedContent: c && u,
    isInteracting: false,
    formatInline: false,
    allowList: E,
    allowHeading: E,
    allowLinks: true,
    allowDevLinks: b,
    previewLinkTarget: true
  }), O = (0, a.e7)([g.Z], () => g.Z.getChannel(n.channel_id)), y = _.jU.useSetting();
  return null == O ? null : (0, r.jsxs)("div", {
    className: S.container,
    children: [(0, r.jsx)("div", {
      className: S.quote
    }), (0, r.jsxs)("div", {
      className: S.content,
      children: [(0, r.jsx)(T, {}), (0, r.jsx)(p.ZP, {
        message: s,
        content: C,
        compact: y
      }), (0, f.Z)({
        channelMessageProps: {
          message: s,
          channel: O,
          compact: y
        },
        hasSpoilerEmbeds: v,
        isInteracting: false,
        isMessageSnapshot: true,
        renderThreadAccessory: false
      }), (0, r.jsx)(P, {
        message: n,
        snapshot: l,
        index: o
      })]
    })]
  }, o)
}

function A(e) {
  let {
    message: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.messageSnapshots.map((e, n) => (0, r.jsx)(N, {
      message: t,
      snapshot: e,
      index: n
    }, n))
  })
}