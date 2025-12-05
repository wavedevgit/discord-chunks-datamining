/** Chunk was on 77443 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk415734 = require("./415734.js");

function O(e) {
  let {
    index: t,
    widget: n,
    additionalManageWidgetMenuItems: l,
    children: o
  } = e, c = i.useRef(null), u = i.useRef(null), {
    registerManageWidgetButtonRef: d,
    manageFocusOnReorder: g
  } = (0, h.j)();
  i.useLayoutEffect(() => {
    let e = d(n.type);
    return e(c.current), () => e(null)
  }, [d, n.type]);
  let b = i.useMemo(() => {
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
      itemId: b,
      itemPreviewProps: {
        widget: n
      },
      onReorder: f.IM,
      onEnd: () => g(n.type)
    }),
    x = null != j,
    _ = x && t < j,
    P = x && t > j;
  return (0, r.jsxs)("div", {
    ref: u,
    className: a()(v.dragAndDropTarget, {
      [v.dropIndicatorBefore]: _,
      [v.dropIndicatorAfter]: P,
      [v.isDragging]: O
    }),
    "aria-label": y.intl.formatToPlainString(y.t.YLczh4, {
      positionNumber: t + 1
    }),
    children: [(0, r.jsx)(m.Z, {
      buttonRef: c,
      widget: n,
      className: v.dragHandleButton,
      additionalMenuItems: l
    }), o]
  })
}

function j(e) {
  let {
    userId: t,
    widget: n,
    children: i,
    disableInteraction: l,
    className: f,
    index: p,
    trailingContent: m,
    headerTitle: h,
    headerSubtitle: y,
    headerActionButtons: j,
    headerClassName: x,
    additionalManageWidgetMenuItems: _
  } = e, P = (0, s.Dt)(), I = (0, c.e7)([u.default], () => u.default.getId() === t), {
    trackUserProfileAction: w
  } = (0, d.KZ)(), S = (0, g.Z)({
    widget: n,
    onAction: w
  }), E = I && null != p && !l, T = () => (0, r.jsxs)("div", {
    className: a()(v.container, f),
    children: [(0, r.jsx)(b.Z, {
      userId: t,
      headingId: P,
      title: h,
      subtitle: y,
      actionButtons: j,
      widget: n,
      disableInteraction: l,
      className: x
    }), (0, r.jsxs)(o.y5t, {
      children: [i, m]
    })]
  });
  return (0, r.jsx)("section", {
    ref: S,
    "aria-labelledby": P,
    children: E ? (0, r.jsx)(O, {
      index: null != p ? p : 0,
      widget: n,
      additionalManageWidgetMenuItems: _,
      children: T()
    }) : T()
  })
}