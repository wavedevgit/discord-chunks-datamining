/** Chunk was on 49941 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk85707 = require("./85707.js"),
  Chunk594174 = require("./594174.js"),
  Chunk86419 = require("./86419.js"),
  Chunk780899 = require("./780899.jsx"),
  Chunk733231 = require("./733231.jsx"),
  Chunk817053 = require("./817053.jsx"),
  Chunk533815 = require("./533815.jsx"),
  Chunk919498 = require("./919498.jsx"),
  Chunk394606 = require("./394606.js"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk932366 = require("./932366.js"),
  Chunk133458 = require("./133458.js");

function v(e) {
  let {
    index: t,
    widgetType: n,
    game: i,
    coverImageUrl: l,
    gameName: a,
    children: o
  } = e, {
    manageFocusOnReorder: d
  } = (0, u.C)();
  return (0, r.jsx)(c.yW, {
    index: t,
    itemId: i.applicationId,
    listType: n,
    itemType: "GAME_COVER",
    itemPreviewProps: {
      imageSrc: l,
      gameName: a
    },
    "aria-label": b.intl.formatToPlainString(b.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, s.Eq)(n, e, t),
    onEnd: () => d(i.applicationId),
    className: y.container,
    dropBeforeClassName: y.dropIndicatorBefore,
    dropAfterClassName: y.dropIndicatorAfter,
    draggingClassName: y.isDragging,
    children: (0, r.jsx)("div", {
      className: y.dragHandleContainer,
      children: o
    })
  })
}

function O(e) {
  let {
    game: t,
    userId: n,
    widgetType: i,
    guildId: s,
    channelId: b,
    disableInteraction: O = false,
    index: j,
    onRemoveGame: x,
    coverRef: P
  } = e, {
    coverImageUrl: _,
    gameName: I,
    isLoading: w
  } = (0, p.Z)(t.applicationId), {
    registerDragHandleRef: S
  } = (0, u.C)(), E = (0, m.Z)(t.applicationId).length > 0, T = o.default.getCurrentUser(), C = (null == T ? true : T.id) === n, D = !O && C, {
    isDragging: k
  } = (0, a.f)(e => ({
    isDragging: e.isDragging()
  })), N = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      imageSrc: _,
      gameName: I,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: O,
      className: l()(E ? y.socialProofBackdrop : true, null == _ || O ? true : h.hoverActiveEffect),
      hideTooltip: k,
      coverRef: P
    }), D && (0, r.jsx)(c.e_, {
      buttonRef: S(t.applicationId),
      className: y.dragHandle
    }), !O && (0, r.jsx)(g.L, {
      userId: n,
      applicationId: t.applicationId,
      guildId: s,
      channelId: b,
      className: y.socialProof
    }), D && (0, r.jsx)(f.Z, {
      game: t,
      widgetType: i,
      className: y.removeGameButton,
      iconSize: "xs",
      onRemove: () => null == x ? true : x(t.applicationId)
    })]
  });
  return w ? (0, r.jsx)("div", {
    className: h.loadingCover
  }) : D ? (0, r.jsx)(v, {
    widgetType: i,
    index: null != j ? j : 0,
    game: t,
    coverImageUrl: _,
    gameName: I,
    children: N()
  }) : (0, r.jsx)("div", {
    className: y.container,
    children: N()
  })
}