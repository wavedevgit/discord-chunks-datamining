/** Chunk was on 59569 **/
/** chunk id: 466853, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
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
    children: o
  } = e, s = l.useRef(null), u = l.useRef(null), {
    registerManageWidgetButtonRef: d,
    manageFocusOnReorder: p
  } = (0, j.r)();
  l.useLayoutEffect(() => {
    let e = d(n.type);
    return e(s.current), () => e(null)
  }, [d, n.type]);
  let g = l.useMemo(() => {
      var e;
      return null != (e = n.id) ? e : (0, c.Ld)()
    }, [n.id]),
    {
      isDragging: b,
      dragSourcePosition: O
    } = (0, m.gY)({
      dragRef: s,
      dropRef: u,
      index: t,
      listType: "WIDGETS",
      itemType: "WIDGET",
      itemId: g,
      itemPreviewProps: {
        widget: n
      },
      onReorder: f.R_,
      onEnd: () => p(n.type)
    }),
    v = null != O,
    _ = v && t < O,
    I = v && t > O;
  return (0, r.jsxs)("div", {
    ref: u,
    className: a()(x.wX, {
      [x.A]: _,
      [x.Ze]: I,
      [x.Id]: b
    }),
    "aria-label": h.intl.formatToPlainString(h.t.YLczh4, {
      positionNumber: t + 1
    }),
    children: [(0, r.jsx)(y.A, {
      buttonRef: s,
      widget: n,
      className: x.vn,
      additionalMenuItems: i
    }), o]
  })
}

function _(e) {
  let {
    userId: t,
    widget: n,
    children: l,
    disableInteraction: i,
    className: f,
    index: m,
    trailingContent: y,
    headerTitle: j,
    headerSubtitle: h,
    headerActionButtons: _,
    headerClassName: I,
    additionalManageWidgetMenuItems: w
  } = e, A = (0, c.GV)(), P = (0, s.bG)([u.default], () => u.default.getId() === t), E = (0, b.g)(), {
    trackUserProfileAction: S
  } = (0, d.NJ)(), T = (0, g.A)({
    widget: n,
    onAction: S
  }), N = E === n.type;
  (0, p.A)(T, N);
  let C = P && null != m && !i,
    R = () => (0, r.jsxs)("div", {
      className: a()(x.kL, f),
      children: [(0, r.jsx)(O.A, {
        userId: t,
        headingId: A,
        title: j,
        subtitle: h,
        actionButtons: _,
        widget: n,
        disableInteraction: i,
        className: I
      }), (0, r.jsxs)(o.Fmo, {
        children: [l, y]
      })]
    });
  return (0, r.jsx)("section", {
    ref: T,
    "aria-labelledby": A,
    children: C ? (0, r.jsx)(v, {
      index: null != m ? m : 0,
      widget: n,
      additionalManageWidgetMenuItems: w,
      children: R()
    }) : R()
  })
}