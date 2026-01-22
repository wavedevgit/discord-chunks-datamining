/** Chunk was on 38663 **/
/** chunk id: 466853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk915089 = require("./915089.js"),
  Chunk961350 = require("./961350.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk735321 = require("./735321.js"),
  Chunk94343 = require("./94343.js"),
  Chunk789290 = require("./789290.js"),
  Chunk451395 = require("./451395.jsx"),
  Chunk716804 = require("./716804.js"),
  Chunk19333 = require("./19333.jsx"),
  Chunk557137 = require("./557137.jsx"),
  Chunk192 = require("./192.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk856969 = require("./856969.js");

function v(e) {
  let {
    index: t,
    widget: n,
    additionalManageWidgetMenuItems: i,
    children: s
  } = e, o = l.useRef(null), u = l.useRef(null), {
    registerManageWidgetButtonRef: d,
    manageFocusOnReorder: p
  } = (0, j.r)();
  l.useLayoutEffect(() => {
    let e = d(n.type);
    return e(o.current), () => e(null)
  }, [d, n.type]);
  let b = l.useMemo(() => {
      var e;
      return null != (e = n.id) ? e : (0, c.Ld)()
    }, [n.id]),
    {
      isDragging: m,
      dragSourcePosition: O
    } = (0, g.gY)({
      dragRef: o,
      dropRef: u,
      index: t,
      listType: "WIDGETS",
      itemType: "WIDGET",
      itemId: b,
      itemPreviewProps: {
        widget: n
      },
      onReorder: f.R_,
      onEnd: () => p(n.type)
    }),
    v = null != O,
    A = v && t < O,
    w = v && t > O;
  return (0, r.jsxs)("div", {
    ref: u,
    className: a()(h.wX, {
      [h.A]: A,
      [h.Ze]: w,
      [h.Id]: m
    }),
    "aria-label": x.intl.formatToPlainString(x.t.YLczh4, {
      positionNumber: t + 1
    }),
    children: [(0, r.jsx)(y.A, {
      buttonRef: o,
      widget: n,
      className: h.vn,
      additionalMenuItems: i
    }), s]
  })
}

function A(e) {
  let {
    userId: t,
    widget: n,
    children: l,
    disableInteraction: i,
    className: f,
    index: g,
    trailingContent: y,
    headerTitle: j,
    headerSubtitle: x,
    headerActionButtons: A,
    headerClassName: w,
    additionalManageWidgetMenuItems: I
  } = e, P = (0, c.GV)(), E = (0, o.bG)([u.default], () => u.default.getId() === t), S = (0, m.g)(), {
    trackUserProfileAction: T
  } = (0, d.NJ)(), _ = (0, b.A)({
    widget: n,
    onAction: T
  }), N = S === n.type;
  (0, p.A)(_, N);
  let D = E && null != g && !i,
    R = () => (0, r.jsxs)("div", {
      className: a()(h.kL, f),
      children: [(0, r.jsx)(O.A, {
        userId: t,
        headingId: P,
        title: j,
        subtitle: x,
        actionButtons: A,
        widget: n,
        disableInteraction: i,
        className: w
      }), (0, r.jsxs)(s.Fmo, {
        children: [l, y]
      })]
    });
  return (0, r.jsx)("section", {
    ref: _,
    "aria-labelledby": P,
    children: D ? (0, r.jsx)(v, {
      index: null != g ? g : 0,
      widget: n,
      additionalManageWidgetMenuItems: I,
      children: R()
    }) : R()
  })
}