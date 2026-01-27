/** Chunk was on web.js **/
/** chunk id: 970622, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./747238.js");
var Chunk64700 = require("./64700.js"),
  Chunk669170 = require("./669170.js"),
  Chunk741918 = require("./741918.js"),
  Chunk602034 = require("./602034.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = "--";

function f(e) {
  switch (e.key) {
    case a.D$.ENTER:
    case a.D$.SPACE:
      return a.X2.SELECT_FOCUSED_ITEM;
    case a.D$.UP:
      return a.X2.NAVIGATE_UP;
    case a.D$.DOWN:
      return a.X2.NAVIGATE_DOWN;
    case a.D$.RIGHT:
      return a.X2.NAVIGATE_IN;
    case a.D$.LEFT:
      return a.X2.NAVIGATE_OUT
  }
}

function p(e, t) {
  return null != t ? "".concat((0, o.M4)(e, t.join(d))) : e
}

function _(e, t) {
  return e.getElementById(t)
}

function h(e) {
  return e.tabIndex >= 0
}

function m(e) {
  let {
    navId: t,
    items: n,
    initialFocusPath: s,
    onSelect: c,
    enabled: m = true,
    closeMenu: g,
    defaultIsUsingKeyboardNavigation: E = false
  } = e, y = r.useRef(m);
  r.useLayoutEffect(() => {
    y.current = m
  }, [m]);
  let [b, O] = r.useReducer(i.A, {
    items: n,
    focusPath: s,
    focusIndex: false
  }), v = r.useMemo(() => (0, o.nF)(O, 30), [O]);
  r.useEffect(() => {
    O({
      type: i.g.UPDATE_ITEMS,
      items: n
    })
  }, [n]);
  let {
    focusPath: A
  } = b, [I, S] = r.useState(false), [T, C] = r.useState(E), [{
    onItemFocusMemoizer: N,
    onItemMouseEnterMemoizer: w
  }] = r.useState(() => ({
    onItemFocusMemoizer: new o.Lp(e => () => {
      S(true), O({
        type: i.g.SET_FOCUS_PATH,
        path: e.split(d)
      })
    }),
    onItemMouseEnterMemoizer: new o.Lp(e => () => {
      C(false), O({
        type: i.g.SET_FOCUS_PATH,
        path: e.split(d)
      })
    })
  })), R = r.useCallback(e => {
    if (!y.current) return;
    e.key === a.D$.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
    let n = f(e);
    switch (n) {
      case a.X2.NAVIGATE_UP:
      case a.X2.NAVIGATE_DOWN:
      case a.X2.NAVIGATE_IN:
      case a.X2.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), C(true), v({
          type: n
        });
        return;
      case a.X2.SELECT_FOCUSED_ITEM:
        var r;
        if (e.repeat || h(e.target)) return;
        if (e.preventDefault(), e.stopPropagation(), C(false), v({
            type: n
          }), null != c) return void c(A);
        let i = _(null != (r = e.target.ownerDocument) ? r : document, p(t, A));
        null == i || i.click()
    }
  }, [v, t, A, c, g]), P = r.useCallback(() => {
    I || S(true)
  }, [I]), D = r.useCallback(e => {
    e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && I && S(false)
  }, [I]), L = r.useCallback(() => {
    O({
      type: i.g.SET_FOCUS_PATH,
      path: []
    }), S(false)
  }, []), x = r.useCallback(e => e.every((e, t) => A[t] === e), [A]), M = r.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: false,
    onKeyDown: R,
    onFocus: P,
    onBlur: D,
    onMouseLeave: L,
    "aria-activedescendant": A.length > 0 ? (0, o.M4)(t, A.join(d)) : true
  }), [t, R, P, D, L, A]), j = r.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: false,
      "aria-activedescendant": x(n) ? (0, o.M4)(t, A.join(d)) : true,
      focusIndex: b.focusIndex,
      isUsingKeyboardNavigation: T
    }
  }, [t, A, x, b.focusIndex, T]), k = r.useCallback(e => {
    let {
      path: n,
      hasSubmenu: r = false,
      navigable: i = true,
      role: a = "menuitem"
    } = e, s = n.join(d);
    return u(l({}, r ? {
      "aria-expanded": x(n),
      "aria-haspopup": true
    } : {}), {
      role: a,
      id: (0, o.M4)(t, s),
      tabIndex: false,
      onFocus: i ? N.get(s) : () => {},
      onMouseEnter: i ? w.get(s) : () => {}
    })
  }, [t, x, N, w]);
  return r.useMemo(() => ({
    dispatch: v,
    getContainerProps: M,
    getSubmenuProps: j,
    getItemProps: k,
    isFocused: x,
    isUsingKeyboardNavigation: T
  }), [v, M, j, k, x, T])
}