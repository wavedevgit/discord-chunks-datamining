/** Chunk was on 90882 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk505805 = require("./505805.js"),
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
  Chunk713603 = require("./713603.js"),
  Chunk507683 = require("./507683.js");

function j(e) {
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
  return (0, r.jsx)(s.yW, {
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
    onReorder: (e, t) => (0, c.Eq)(n, e, t),
    onEnd: () => d(i.applicationId),
    className: h.container,
    dropBeforeClassName: h.dropIndicatorBefore,
    dropAfterClassName: h.dropIndicatorAfter,
    draggingClassName: h.isDragging,
    children: (0, r.jsx)("div", {
      className: h.dragHandleContainer,
      children: o
    })
  })
}

function O(e) {
  let {
    game: t,
    userId: n,
    widgetType: i,
    guildId: c,
    channelId: b,
    disableInteraction: O = false,
    index: x,
    onRemoveGame: v,
    coverRef: P
  } = e, {
    coverImageUrl: I,
    gameName: w,
    isLoading: E
  } = (0, p.Z)(t.applicationId), {
    registerDragHandleRef: S
  } = (0, u.C)(), T = (0, m.Z)(t.applicationId).length > 0, _ = o.default.getCurrentUser(), C = (null == _ ? true : _.id) === n, N = !O && C, {
    isDragging: Z
  } = (0, a.f)(e => ({
    isDragging: e.isDragging()
  })), A = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.Z, {
      imageSrc: I,
      gameName: w,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: O,
      className: l()(T ? h.socialProofBackdrop : true, null == I || O ? true : y.hoverActiveEffect),
      hideTooltip: Z,
      coverRef: P
    }), N && (0, r.jsx)(s.e_, {
      buttonRef: S(t.applicationId),
      className: h.dragHandle
    }), !O && (0, r.jsx)(g.L, {
      userId: n,
      applicationId: t.applicationId,
      guildId: c,
      channelId: b,
      className: h.socialProof
    }), N && (0, r.jsx)(f.Z, {
      game: t,
      widgetType: i,
      className: h.removeGameButton,
      iconSize: "xs",
      onRemove: () => null == v ? true : v(t.applicationId)
    })]
  });
  return E ? (0, r.jsx)("div", {
    className: y.loadingCover
  }) : N ? (0, r.jsx)(j, {
    widgetType: i,
    index: null != x ? x : 0,
    game: t,
    coverImageUrl: I,
    gameName: w,
    children: A()
  }) : (0, r.jsx)("div", {
    className: h.container,
    children: A()
  })
}