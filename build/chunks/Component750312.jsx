/** Chunk was on 85032 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314897 = require("./314897.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk86419 = require("./86419.js"),
  Chunk982072 = require("./982072.js"),
  Chunk780899 = require("./780899.jsx"),
  Chunk939974 = require("./939974.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk34335 = require("./34335.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391122 = require("./391122.js");

function O(e) {
  let {
    index: t,
    widget: n,
    additionalManageWidgetMenuItems: a,
    children: o
  } = e, c = i.useRef(null), u = i.useRef(null), {
    registerManageWidgetButtonRef: d,
    manageFocusOnReorder: g
  } = (0, h.j)();
  i.useLayoutEffect(() => {
    let e = d(n.type);
    return e(c.current), () => e(null)
  }, [d, n.type]);
  let m = i.useMemo(() => {
      var e;
      return null != (e = n.id) ? e : (0, s.hQ)()
    }, [n.id]),
    {
      isDragging: O,
      dragSourcePosition: j
    } = (0, p.Y9)({
      dragRef: c,
      dropRef: u,
      index: t,
      listType: "WIDGETS",
      itemType: "WIDGET",
      itemId: m,
      itemPreviewProps: {
        widget: n
      },
      onReorder: f.IM,
      onEnd: () => g(n.type)
    }),
    x = null != j,
    P = x && t < j,
    I = x && t > j;
  return (0, r.jsxs)("div", {
    ref: u,
    className: l()(v.dragAndDropTarget, {
      [v.dropIndicatorBefore]: P,
      [v.dropIndicatorAfter]: I,
      [v.isDragging]: O
    }),
    "aria-label": y.intl.formatToPlainString(y.t.YLczh4, {
      positionNumber: t + 1
    }),
    children: [(0, r.jsx)(b.Z, {
      buttonRef: c,
      widget: n,
      className: v.dragHandleButton,
      additionalMenuItems: a
    }), o]
  })
}

function j(e) {
  let {
    userId: t,
    widget: n,
    children: i,
    disableInteraction: a,
    className: f,
    index: p,
    trailingContent: b,
    headerTitle: h,
    headerSubtitle: y,
    headerActionButtons: j,
    headerClassName: x,
    additionalManageWidgetMenuItems: P
  } = e, I = (0, s.Dt)(), w = (0, c.e7)([u.default], () => u.default.getId() === t), {
    trackUserProfileAction: S
  } = (0, d.KZ)(), E = (0, g.Z)({
    widget: n,
    onAction: S
  }), _ = w && null != p && !a, T = () => (0, r.jsxs)("div", {
    className: l()(v.container, f),
    children: [(0, r.jsx)(m.Z, {
      userId: t,
      headingId: I,
      title: h,
      subtitle: y,
      actionButtons: j,
      widget: n,
      disableInteraction: a,
      className: x
    }), (0, r.jsxs)(o.y5t, {
      children: [i, b]
    })]
  });
  return (0, r.jsx)("section", {
    ref: E,
    "aria-labelledby": I,
    children: _ ? (0, r.jsx)(O, {
      index: null != p ? p : 0,
      widget: n,
      additionalManageWidgetMenuItems: P,
      children: T()
    }) : T()
  })
}