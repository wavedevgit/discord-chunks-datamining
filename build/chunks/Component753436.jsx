/** Chunk was on 22325 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => y
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

function v(e) {
  let {
    index: t,
    widgetType: n,
    game: a,
    children: o
  } = e, s = i.useRef(null), {
    isDragging: u,
    dragSourcePosition: d
  } = (0, c.g)({
    dragRef: s,
    dropRef: s,
    index: t,
    widgetType: n,
    game: a
  }), f = null != d, g = f && t < d, p = f && t > d;
  return (0, r.jsx)("div", {
    ref: s,
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

function y(e) {
  let {
    game: t,
    userId: n,
    widgetType: i,
    guildId: a,
    channelId: c,
    disableInteraction: m = false,
    index: y
  } = e, j = (0, p.Z)(t.applicationId).length > 0, O = s.default.getCurrentUser(), x = (null == O ? true : O.id) === n, _ = !m && x, I = (0, u.kO)(t.applicationId), {
    isDragging: P
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
      hideTooltip: P
    }), _ && (0, r.jsx)(f.Z, {
      game: t,
      widgetType: i,
      className: h.removeGameButton,
      iconSize: "xs"
    }), !m && (0, r.jsx)(g.Z, {
      className: h.socialProof,
      applicationId: t.applicationId,
      guildId: a,
      channelId: c,
      visuallyHideLabel: true
    })]
  });
  return I ? (0, r.jsx)("div", {
    className: b.loadingCover
  }) : _ ? (0, r.jsx)(v, {
    widgetType: i,
    index: null != y ? y : 0,
    game: t,
    children: w()
  }) : (0, r.jsx)("div", {
    className: h.container,
    children: w()
  })
}