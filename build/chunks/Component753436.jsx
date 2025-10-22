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
  Chunk594174 = require("./594174.js"),
  Chunk86419 = require("./86419.js"),
  Chunk747101 = require("./747101.js"),
  Chunk780899 = require("./780899.jsx"),
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
    children: l
  } = e, {
    registerDragHandleRef: o,
    manageFocusOnReorder: s
  } = (0, f.C)(), u = i.useRef(null), g = {
    imageSrc: a.imageSrc,
    gameName: a.gameName
  };
  return (0, r.jsx)(d.yW, {
    index: t,
    itemId: a.applicationId,
    listType: n,
    itemType: "GAME_COVER",
    itemPreviewProps: g,
    "aria-label": h.intl.formatToPlainString(h.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, c.Eq)(n, e, t),
    onEnd: () => s(a.applicationId),
    className: y.container,
    dropBeforeClassName: y.dropIndicatorBefore,
    dropAfterClassName: y.dropIndicatorAfter,
    draggingClassName: y.isDragging,
    children: (0, r.jsxs)("div", {
      ref: u,
      className: y.dragHandleContainer,
      children: [l, (0, r.jsx)(d.e_, {
        buttonRef: o(a.applicationId),
        className: y.dragHandle,
        focusProps: {
          ringTarget: u
        }
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
    disableInteraction: d = false,
    index: f,
    onRemoveGame: h,
    coverRef: O
  } = e, x = (0, b.Z)(t.applicationId).length > 0, _ = s.default.getCurrentUser(), I = (null == _ ? true : _.id) === n, P = !d && I, w = (0, u.kO)(t.applicationId), {
    isDragging: S
  } = (0, o.f)(e => ({
    isDragging: e.isDragging()
  })), E = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.Z, {
      imageSrc: t.imageSrc,
      gameName: t.gameName,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: d,
      className: l()(x ? y.socialProofBackdrop : true, (null == t ? true : t.imageSrc) == null || d ? true : v.hoverActiveEffect),
      hideTooltip: S,
      coverRef: O
    }), P && (0, r.jsx)(p.Z, {
      game: t,
      widgetType: i,
      className: y.removeGameButton,
      iconSize: "xs",
      onRemove: () => null == h ? true : h(t.applicationId)
    }), !d && (0, r.jsx)(m.Z, {
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