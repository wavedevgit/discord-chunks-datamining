/** Chunk was on 52557 **/
/** chunk id: 753436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk79116 = require("./79116.js"),
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

function O(e) {
  let {
    index: t,
    widgetType: n,
    game: a,
    coverImageUrl: l,
    gameName: o,
    children: c
  } = e, {
    registerDragHandleRef: g,
    manageFocusOnReorder: f
  } = (0, d.C)(), p = i.useRef(null);
  return (0, r.jsx)(u.yW, {
    index: t,
    itemId: a.applicationId,
    listType: n,
    itemType: "GAME_COVER",
    itemPreviewProps: {
      imageSrc: l,
      gameName: o
    },
    "aria-label": h.intl.formatToPlainString(h.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, s.Eq)(n, e, t),
    onEnd: () => f(a.applicationId),
    className: v.container,
    dropBeforeClassName: v.dropIndicatorBefore,
    dropAfterClassName: v.dropIndicatorAfter,
    draggingClassName: v.isDragging,
    children: (0, r.jsxs)("div", {
      ref: p,
      className: v.dragHandleContainer,
      children: [c, (0, r.jsx)(u.e_, {
        buttonRef: g(a.applicationId),
        className: v.dragHandle,
        focusProps: {
          ringTarget: p
        }
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
    index: d,
    onRemoveGame: h,
    coverRef: j
  } = e, {
    coverImageUrl: x,
    gameName: _,
    isLoading: P
  } = (0, m.Z)(t.applicationId), I = (0, b.Z)(t.applicationId).length > 0, w = c.default.getCurrentUser(), S = (null == w ? true : w.id) === n, E = !u && S, {
    isDragging: T
  } = (0, o.f)(e => ({
    isDragging: e.isDragging()
  })), C = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.Z, {
      imageSrc: x,
      gameName: _,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: u,
      className: l()(I ? v.socialProofBackdrop : true, null == x || u ? true : y.hoverActiveEffect),
      hideTooltip: T,
      coverRef: j
    }), E && (0, r.jsx)(f.Z, {
      game: t,
      widgetType: i,
      className: v.removeGameButton,
      iconSize: "xs",
      onRemove: () => null == h ? true : h(t.applicationId)
    }), !u && (0, r.jsx)(p.Z, {
      className: v.socialProof,
      applicationId: t.applicationId,
      guildId: a,
      channelId: s,
      visuallyHideLabel: true
    })]
  });
  return P ? (0, r.jsx)("div", {
    className: y.loadingCover
  }) : E ? (0, r.jsx)(O, {
    widgetType: i,
    index: null != d ? d : 0,
    game: t,
    coverImageUrl: x,
    gameName: _,
    children: C()
  }) : (0, r.jsx)("div", {
    className: v.container,
    children: C()
  })
}