/** Chunk was on 65414 **/
/** chunk id: 750312, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
  Chunk938111 = require("./938111.js"),
  Chunk982072 = require("./982072.js"),
  Chunk780899 = require("./780899.jsx"),
  Chunk104287 = require("./104287.js"),
  Chunk939974 = require("./939974.jsx"),
  Chunk840367 = require("./840367.jsx"),
  Chunk34335 = require("./34335.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk391122 = require("./391122.js");

function x(e) {
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
  let p = i.useMemo(() => {
      var e;
      return null != (e = n.id) ? e : (0, s.hQ)()
    }, [n.id]),
    {
      isDragging: b,
      dragSourcePosition: j
    } = (0, m.Y9)({
      dragRef: c,
      dropRef: u,
      index: t,
      listType: "WIDGETS",
      itemType: "WIDGET",
      itemId: p,
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
    className: a()(v.dragAndDropTarget, {
      [v.dropIndicatorBefore]: P,
      [v.dropIndicatorAfter]: I,
      [v.isDragging]: b
    }),
    "aria-label": O.intl.formatToPlainString(O.t.YLczh4, {
      positionNumber: t + 1
    }),
    children: [(0, r.jsx)(y.Z, {
      buttonRef: c,
      widget: n,
      className: v.dragHandleButton,
      additionalMenuItems: l
    }), o]
  })
}

function P(e) {
  let {
    userId: t,
    widget: n,
    children: i,
    disableInteraction: l,
    className: f,
    index: m,
    trailingContent: y,
    headerTitle: h,
    headerSubtitle: O,
    headerActionButtons: P,
    headerClassName: I,
    additionalManageWidgetMenuItems: w
  } = e, S = (0, s.Dt)(), E = (0, c.e7)([u.default], () => u.default.getId() === t), T = (0, b.b)(), {
    trackUserProfileAction: _
  } = (0, d.KZ)(), C = (0, p.Z)({
    widget: n,
    onAction: _
  }), N = T === n.type;
  (0, g.Z)(C, N);
  let Z = E && null != m && !l,
    A = () => (0, r.jsxs)("div", {
      className: a()(v.container, f),
      children: [(0, r.jsx)(j.Z, {
        userId: t,
        headingId: S,
        title: h,
        subtitle: O,
        actionButtons: P,
        widget: n,
        disableInteraction: l,
        className: I
      }), (0, r.jsxs)(o.y5t, {
        children: [i, y]
      })]
    });
  return (0, r.jsx)("section", {
    ref: C,
    "aria-labelledby": S,
    children: Z ? (0, r.jsx)(x, {
      index: null != m ? m : 0,
      widget: n,
      additionalManageWidgetMenuItems: w,
      children: A()
    }) : A()
  })
}