/** Chunk was on 38663 **/
/** chunk id: 676526, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk688807 = require("./688807.js"),
  Chunk287809 = require("./287809.js"),
  Chunk735321 = require("./735321.js"),
  Chunk451395 = require("./451395.jsx"),
  Chunk823016 = require("./823016.jsx"),
  Chunk788593 = require("./788593.jsx"),
  Chunk858808 = require("./858808.jsx"),
  Chunk685049 = require("./685049.jsx"),
  Chunk973397 = require("./973397.js"),
  Chunk617086 = require("./617086.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461349 = require("./461349.js"),
  Chunk616060 = require("./616060.js");

function j(e) {
  let {
    index: t,
    widgetType: n,
    game: l,
    coverImageUrl: i,
    gameName: a,
    children: s
  } = e, {
    manageFocusOnReorder: d
  } = (0, u.r)();
  return (0, r.jsx)(c.mG, {
    index: t,
    itemId: l.applicationId,
    listType: n,
    itemType: "GAME_COVER",
    itemPreviewProps: {
      imageSrc: i,
      gameName: a
    },
    "aria-label": m.intl.formatToPlainString(m.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, o.Un)(n, e, t),
    onEnd: () => d(l.applicationId),
    className: O.kL,
    dropBeforeClassName: O.A,
    dropAfterClassName: O.Ze,
    draggingClassName: O.Id,
    children: (0, r.jsx)("div", {
      className: O.An,
      children: s
    })
  })
}

function x(e) {
  let {
    game: t,
    userId: n,
    widgetType: l,
    guildId: o,
    channelId: m,
    disableInteraction: x = false,
    index: h,
    onRemoveGame: v,
    coverRef: A
  } = e, {
    coverImageUrl: w,
    gameName: I,
    isLoading: P
  } = (0, b.A)(t.applicationId), {
    registerDragHandleRef: E
  } = (0, u.r)(), S = (0, g.A)(t.applicationId).length > 0, T = s.default.getCurrentUser(), _ = (null == T ? true : T.id) === n, N = !x && _, {
    isDragging: D
  } = (0, a.V)(e => ({
    isDragging: e.isDragging()
  })), R = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.A, {
      imageSrc: w,
      gameName: I,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: x,
      className: i()(S ? O.kO : true, null == w || x ? true : y.iL),
      hideTooltip: D,
      coverRef: A
    }), N && (0, r.jsx)(c.jV, {
      buttonRef: E(t.applicationId),
      className: O.BU
    }), !x && (0, r.jsx)(p.d, {
      userId: n,
      applicationId: t.applicationId,
      guildId: o,
      channelId: m,
      className: O.Ez
    }), N && (0, r.jsx)(f.A, {
      game: t,
      widgetType: l,
      className: O.vS,
      iconSize: "xs",
      onRemove: () => null == v ? true : v(t.applicationId)
    })]
  });
  return P ? (0, r.jsx)("div", {
    className: y.mD
  }) : N ? (0, r.jsx)(j, {
    widgetType: l,
    index: null != h ? h : 0,
    game: t,
    coverImageUrl: w,
    gameName: I,
    children: R()
  }) : (0, r.jsx)("div", {
    className: O.kL,
    children: R()
  })
}