/** Chunk was on web.js **/
/** chunk id: 592873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk508382 = require("./508382.jsx"),
  Chunk502939 = require("./502939.js"),
  Chunk563014 = require("./563014.js"),
  Chunk397927 = require("./397927.js"),
  Chunk962125 = require("./962125.jsx"),
  Chunk885621 = require("./885621.js"),
  Chunk658122 = require("./658122.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = g(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function E(e) {
  let {
    parentItem: t,
    isFocused: n,
    menuSubmenuProps: f,
    rows: _,
    rowHeight: g,
    onScroll: E,
    listClassName: y
  } = e, b = i.useRef(null), O = i.useRef(null), v = i.useRef(null), A = i.useRef(null), {
    isUsingKeyboardNavigation: I,
    focusIndex: S
  } = f, T = m(f, ["isUsingKeyboardNavigation", "focusIndex"]);
  i.useLayoutEffect(() => {
    var e;
    n && ((0, o.Y)(b), null == (e = v.current) || e.focus())
  }, [n]), i.useEffect(() => {
    if (n && S >= 0 && I) {
      var e;
      null == (e = A.current) || e.scrollRowIntoView(S)
    }
  }, [n, I, S]);
  let C = i.useCallback(e => _[e], [_]),
    N = (0, s.D)("MenuSubmenuListItem"),
    R = () => _.length > 0 && (0, r.jsx)("div", {
      className: d.submenuPaddingContainer,
      children: (0, r.jsx)("div", h(p({
        className: d.submenu
      }, T), {
        ref: v,
        children: (0, r.jsx)(c.A, {
          ref: A,
          className: y,
          listPadding: [6, 0, 6, 8],
          onScroll: E,
          renderRow: C,
          rowCount: _.length,
          rowHeight: g
        })
      }))
    });
  if (N) return (0, r.jsx)(a.Ow, {
    spacing: 4,
    placement: "right-start",
    autoFlip: true,
    portal: false,
    viewportPadding: u.FD,
    maxHeight: u.H0,
    renderLayer: R,
    children: e => {
      let {
        ref: n,
        props: i
      } = e;
      return (0, r.jsx)("div", h(p({
        ref: n
      }, i), {
        children: t
      }))
    }
  });
  let w = (0, r.jsx)(l.QCO, {
    targetRef: O,
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    fixed: true,
    spacing: 4,
    position: "right",
    align: "top",
    children: R
  });
  return (0, r.jsxs)("div", {
    ref: b,
    children: [(0, r.jsx)("div", {
      ref: O
    }), t, n ? w : null]
  })
}