/** Chunk was on 36073 **/
/** chunk id: 753436, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  S: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk79116 = require("./79116.js"),
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
    widgetType: r,
    game: a,
    children: l
  } = e, c = i.useRef(null), {
    isDragging: u,
    dragSourcePosition: d
  } = (0, s.g)({
    dragRef: c,
    dropRef: c,
    index: t,
    widgetType: r,
    game: a
  }), g = null != d, f = g && t < d, p = g && t > d;
  return (0, n.jsx)("div", {
    ref: c,
    className: o()(O.container, {
      [O.isDragging]: u,
      [O.dropIndicatorBefore]: f,
      [O.dropIndicatorAfter]: p
    }),
    "aria-label": b.intl.formatToPlainString(b.t["0dR3g4"], {
      positionNumber: t + 1
    }),
    children: l
  })
}

function j(e) {
  let {
    game: t,
    userId: r,
    widgetType: i,
    guildId: a,
    channelId: s,
    disableInteraction: b = false,
    index: j
  } = e, x = (0, p.Z)(t.applicationId).length > 0, v = c.default.getCurrentUser(), h = (null == v ? true : v.id) === r, _ = !b && h, w = (0, u.kO)(t.applicationId), {
    isDragging: P
  } = (0, l.f)(e => ({
    isDragging: e.isDragging()
  })), I = () => (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: r,
      disableInteraction: b,
      className: o()(x ? O.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || b ? true : m.hoverActiveEffect),
      hideTooltip: P
    }), _ && (0, n.jsx)(g.Z, {
      game: t,
      widgetType: i,
      className: O.removeGameButton,
      iconSize: "xs"
    }), !b && (0, n.jsx)(f.Z, {
      className: O.socialProof,
      applicationId: t.applicationId,
      guildId: a,
      channelId: s,
      visuallyHideLabel: true
    })]
  });
  return w ? (0, n.jsx)("div", {
    className: m.loadingCover
  }) : _ ? (0, n.jsx)(y, {
    widgetType: i,
    index: null != j ? j : 0,
    game: t,
    children: I()
  }) : (0, n.jsx)("div", {
    className: O.container,
    children: I()
  })
}