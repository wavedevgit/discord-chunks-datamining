/** Chunk was on 71447 **/
/** chunk id: 1404, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  D: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk193663 = require("./193663.jsx"),
  Chunk576420 = require("./576420.js"),
  Chunk783346 = require("./783346.js");

function d(e) {
  var t, n;
  let {
    listItemId: l,
    isVisuallyOffline: d = false,
    recentlyAddedTimestampMs: h = null,
    outerRef: p,
    leftIndicator: f,
    avatar: g,
    primaryText: m,
    secondaryText: y,
    rightActions: A,
    onClick: v,
    onContextMenu: b,
    onMouseEnter: E,
    onMouseLeave: O,
    className: x,
    rowInnerClassName: _
  } = e, S = (0, s.rm)(l), [I, j] = r.useState(false), T = r.useRef(null), [C, N] = r.useState(false);
  return r.useEffect(() => {
    if (null == h || T.current === h) return;
    T.current = h;
    let e = Date.now();
    h > e || e - h > u.WS || N(true)
  }, [h]), (0, i.jsxs)("div", {
    ref: p,
    className: a()(c.nM, x, {
      [c.SS]: d
    }),
    onAnimationEnd: e => {
      "friendsWidgetRowRecentlyAdded" === e.animationName && N(false)
    },
    children: [null != f ? (0, i.jsx)("div", {
      className: c.oT,
      children: f
    }) : null, (0, i.jsx)(o.A, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      innerClassName: a()(c.bL, _),
      className: C ? c.fc : true,
      onClick: v,
      onContextMenu: b,
      onMouseEnter: e => {
        j(true), null == E || E(e)
      },
      onMouseLeave: e => {
        j(false), null == O || O(e)
      },
      avatar: g,
      name: m,
      subText: y,
      hovered: I
    }, S), n = n = {
      children: null != A ? (0, i.jsx)("div", {
        className: c.cm,
        children: A(I)
      }) : null
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))]
  })
}