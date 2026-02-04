/** Chunk was on 7685 **/
/** chunk id: 1404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk193663 = require("./193663.jsx"),
  Chunk576420 = require("./576420.js"),
  Chunk783346 = require("./783346.js");

function d(e) {
  var t, n;
  let {
    listItemId: i,
    isVisuallyOffline: d = false,
    recentlyAddedTimestampMs: h = null,
    outerRef: g,
    leftIndicator: f,
    avatar: p,
    primaryText: I,
    secondaryText: m,
    rightActions: E,
    onClick: A,
    onContextMenu: y,
    onMouseEnter: S,
    onMouseLeave: v,
    className: O,
    rowInnerClassName: b
  } = e, N = (0, a.rm)(i), [T, _] = r.useState(false), C = r.useRef(null), [x, D] = r.useState(false);
  return r.useEffect(() => {
    if (null == h || C.current === h) return;
    C.current = h;
    let e = Date.now();
    h > e || e - h > u.WS || D(true)
  }, [h]), (0, l.jsxs)("div", {
    ref: g,
    className: s()(c.nM, O, {
      [c.SS]: d
    }),
    onAnimationEnd: e => {
      "friendsWidgetRowRecentlyAdded" === e.animationName && D(false)
    },
    children: [null != f ? (0, l.jsx)("div", {
      className: c.oT,
      children: f
    }) : null, (0, l.jsx)(o.A, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      innerClassName: s()(c.bL, b),
      className: x ? c.fc : true,
      onClick: A,
      onContextMenu: y,
      onMouseEnter: e => {
        _(true), null == S || S(e)
      },
      onMouseLeave: e => {
        _(false), null == v || v(e)
      },
      avatar: p,
      name: I,
      subText: m,
      hovered: T
    }, N), n = n = {
      children: null != E ? (0, l.jsx)("div", {
        className: c.cm,
        children: E(T)
      }) : null
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}