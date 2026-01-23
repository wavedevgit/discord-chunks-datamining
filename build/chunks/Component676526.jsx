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
    children: o
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
    "aria-label": b.intl.formatToPlainString(b.t["0dR3gw"], {
      positionNumber: t + 1
    }),
    onReorder: (e, t) => (0, s.Un)(n, e, t),
    onEnd: () => d(l.applicationId),
    className: O.kL,
    dropBeforeClassName: O.A,
    dropAfterClassName: O.Ze,
    draggingClassName: O.Id,
    children: (0, r.jsx)("div", {
      className: O.An,
      children: o
    })
  })
}

function x(e) {
  let {
    game: t,
    userId: n,
    widgetType: l,
    guildId: s,
    channelId: b,
    disableInteraction: x = false,
    index: h,
    onRemoveGame: v,
    coverRef: _
  } = e, {
    coverImageUrl: A,
    gameName: I,
    isLoading: w
  } = (0, g.A)(t.applicationId), {
    registerDragHandleRef: P
  } = (0, u.r)(), E = (0, m.A)(t.applicationId).length > 0, S = o.default.getCurrentUser(), T = (null == S ? true : S.id) === n, N = !x && T, {
    isDragging: C
  } = (0, a.V)(e => ({
    isDragging: e.isDragging()
  })), D = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(d.A, {
      imageSrc: A,
      gameName: I,
      applicationId: t.applicationId,
      userId: n,
      disableInteraction: x,
      className: i()(E ? O.kO : true, null == A || x ? true : y.iL),
      hideTooltip: C,
      coverRef: _
    }), N && (0, r.jsx)(c.jV, {
      buttonRef: P(t.applicationId),
      className: O.BU
    }), !x && (0, r.jsx)(p.d, {
      userId: n,
      applicationId: t.applicationId,
      guildId: s,
      channelId: b,
      className: O.Ez
    }), N && (0, r.jsx)(f.A, {
      game: t,
      widgetType: l,
      className: O.vS,
      iconSize: "xs",
      onRemove: () => null == v ? true : v(t.applicationId)
    })]
  });
  return w ? (0, r.jsx)("div", {
    className: y.mD
  }) : N ? (0, r.jsx)(j, {
    widgetType: l,
    index: null != h ? h : 0,
    game: t,
    coverImageUrl: A,
    gameName: I,
    children: D()
  }) : (0, r.jsx)("div", {
    className: O.kL,
    children: D()
  })
}