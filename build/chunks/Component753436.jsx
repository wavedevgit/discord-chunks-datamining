/** Chunk was on 3091 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
    widgetType: n,
    game: a,
    children: o
  } = e, c = i.useRef(null), {
    isDragging: u,
    dragSourcePosition: d
  } = (0, s.g)({
    dragRef: c,
    dropRef: c,
    index: t,
    widgetType: n,
    game: a
  }), f = null != d, g = f && t < d, p = f && t > d;
  return (0, r.jsx)("div", {
    ref: c,
    className: l()(h.container, {
      [h.isDragging]: u,
      [h.dropIndicatorBefore]: g,
      [h.dropIndicatorAfter]: p
    }),
    "aria-label": m.intl.formatToPlainString(m.t["0dR3g4"], {
      positionNumber: t + 1
    }),
    children: o
  })
}

function v(e) {
  let {
    game: t,
    userId: n,
    widgetType: i,
    guildId: a,
    channelId: s,
    disableInteraction: m = false,
    index: v
  } = e, j = (0, p.Z)(t.applicationId).length > 0, O = c.default.getCurrentUser(), x = (null == O ? true : O.id) === n, _ = !m && x, P = (0, u.kO)(t.applicationId), {
    isDragging: I
  } = (0, o.f)(e => ({
    isDragging: e.isDragging()
  })), w = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: m,
      className: l()(j ? h.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || m ? true : b.hoverActiveEffect),
      hideTooltip: I
    }), _ && (0, r.jsx)(f.Z, {
      game: t,
      widgetType: i,
      className: h.removeGameButton,
      iconSize: "xs"
    }), !m && (0, r.jsx)(g.Z, {
      className: h.socialProof,
      applicationId: t.applicationId,
      guildId: a,
      channelId: s,
      visuallyHideLabel: true
    })]
  });
  return P ? (0, r.jsx)("div", {
    className: b.loadingCover
  }) : _ ? (0, r.jsx)(y, {
    widgetType: i,
    index: null != v ? v : 0,
    game: t,
    children: w()
  }) : (0, r.jsx)("div", {
    className: h.container,
    children: w()
  })
}