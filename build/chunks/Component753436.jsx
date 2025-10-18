/** Chunk was on 22325 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => O
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
  Chunk733231 = require("./733231.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk133458 = require("./133458.js");

function j(e) {
  let {
    index: t,
    widgetType: n,
    game: a,
    children: o
  } = e, s = i.useRef(null), d = i.useRef(null), {
    registerDragHandleRef: g,
    manageFocusOnReorder: p
  } = (0, f.C)(), {
    isDragging: m,
    dragSourcePosition: b
  } = (0, u.g)({
    dragRef: s,
    dropRef: d,
    index: t,
    widgetType: n,
    game: a,
    onReorder: () => p(a.applicationId)
  }), v = null != b, j = v && t < b, O = v && t > b;
  return (0, r.jsx)("div", {
    ref: d,
    className: l()(y.container, {
      [y.isDragging]: m,
      [y.dropIndicatorBefore]: j,
      [y.dropIndicatorAfter]: O
    }),
    "aria-label": h.intl.formatToPlainString(h.t["0dR3g4"], {
      positionNumber: t + 1
    }),
    children: (0, r.jsxs)("div", {
      ref: s,
      className: y.dragTarget,
      children: [o, (0, r.jsx)(c.P3F, {
        innerRef: g(a.applicationId),
        "aria-label": h.intl.string(h.t.Zc1neH),
        className: y.dragHandle,
        focusProps: {
          ringTarget: s
        },
        children: (0, r.jsx)(c.Vni, {
          size: "sm",
          color: "currentColor"
        })
      })]
    })
  })
}

function O(e) {
  let {
    game: t,
    userId: n,
    widgetType: i,
    guildId: a,
    channelId: c,
    disableInteraction: u = false,
    index: f,
    onRemoveGame: h,
    coverRef: O
  } = e, x = (0, b.Z)(t.applicationId).length > 0, _ = s.default.getCurrentUser(), I = (null == _ ? true : _.id) === n, P = !u && I, w = (0, d.kO)(t.applicationId), {
    isDragging: S
  } = (0, o.f)(e => ({
    isDragging: e.isDragging()
  })), E = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: u,
      className: l()(x ? y.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || u ? true : v.hoverActiveEffect),
      hideTooltip: S,
      coverRef: O
    }), P && (0, r.jsx)(p.Z, {
      game: t,
      widgetType: i,
      className: y.removeGameButton,
      iconSize: "xs",
      onRemove: () => null == h ? true : h(t.applicationId)
    }), !u && (0, r.jsx)(m.Z, {
      className: y.socialProof,
      applicationId: t.applicationId,
      guildId: a,
      channelId: c,
      visuallyHideLabel: true
    })]
  });
  return w ? (0, r.jsx)("div", {
    className: v.loadingCover
  }) : P ? (0, r.jsx)(j, {
    widgetType: i,
    index: null != f ? f : 0,
    game: t,
    children: E()
  }) : (0, r.jsx)("div", {
    className: y.container,
    children: E()
  })
}