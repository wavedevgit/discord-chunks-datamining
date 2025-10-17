/** Chunk was on 22325 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk79116 = require("./79116.js"),
  Chunk793030 = require("./793030.js"),
  Chunk594174 = require("./594174.js"),
  Chunk947790 = require("./947790.js"),
  Chunk747101 = require("./747101.js"),
  Chunk817053 = require("./817053.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk133458 = require("./133458.js");

function y(e) {
  let {
    index: t,
    widgetType: n,
    game: a,
    children: o
  } = e, c = i.useRef(null), d = i.useRef(null), {
    isDragging: f,
    dragSourcePosition: g
  } = (0, u.g)({
    dragRef: c,
    dropRef: d,
    index: t,
    widgetType: n,
    game: a
  }), p = null != g, m = p && t < g, h = p && t > g;
  return (0, r.jsx)("div", {
    ref: d,
    className: l()(v.container, {
      [v.isDragging]: f,
      [v.dropIndicatorBefore]: m,
      [v.dropIndicatorAfter]: h
    }),
    "aria-label": b.intl.formatToPlainString(b.t["0dR3g4"], {
      positionNumber: t + 1
    }),
    children: (0, r.jsxs)("div", {
      ref: c,
      className: v.dragTarget,
      children: [o, (0, r.jsx)(s.P3F, {
        "aria-label": b.intl.string(b.t.Zc1neH),
        className: v.dragHandle,
        focusProps: {
          ringTarget: c
        },
        children: (0, r.jsx)(s.Vni, {
          size: "sm",
          color: "currentColor"
        })
      })]
    })
  })
}

function j(e) {
  let {
    game: t,
    userId: n,
    widgetType: i,
    guildId: a,
    channelId: s,
    disableInteraction: u = false,
    index: b
  } = e, j = (0, m.Z)(t.applicationId).length > 0, O = c.default.getCurrentUser(), x = (null == O ? true : O.id) === n, _ = !u && x, P = (0, d.kO)(t.applicationId), {
    isDragging: I
  } = (0, o.f)(e => ({
    isDragging: e.isDragging()
  })), w = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: u,
      className: l()(j ? v.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || u ? true : h.hoverActiveEffect),
      hideTooltip: I
    }), _ && (0, r.jsx)(g.Z, {
      game: t,
      widgetType: i,
      className: v.removeGameButton,
      iconSize: "xs"
    }), !u && (0, r.jsx)(p.Z, {
      className: v.socialProof,
      applicationId: t.applicationId,
      guildId: a,
      channelId: s,
      visuallyHideLabel: true
    })]
  });
  return P ? (0, r.jsx)("div", {
    className: h.loadingCover
  }) : _ ? (0, r.jsx)(y, {
    widgetType: i,
    index: null != b ? b : 0,
    game: t,
    children: w()
  }) : (0, r.jsx)("div", {
    className: v.container,
    children: w()
  })
}