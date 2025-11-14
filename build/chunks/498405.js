/** Chunk was on web.js **/
/** chunk id: 498405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./35282.js");
var Chunk647438 = require("./647438.js"),
  Chunk808629 = require("./808629.js"),
  Chunk536895 = require("./536895.js"),
  Chunk260866 = require("./260866.js");

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
    case a.R8.ENTER:
    case a.R8.SPACE:
      return a.Us.SELECT_FOCUSED_ITEM;
    case a.R8.UP:
      return a.Us.NAVIGATE_UP;
    case a.R8.DOWN:
      return a.Us.NAVIGATE_DOWN;
    case a.R8.RIGHT:
      return a.Us.NAVIGATE_IN;
    case a.R8.LEFT:
      return a.Us.NAVIGATE_OUT
  }
}

function _(e, t) {
  return null != t ? "".concat((0, o.qR)(e, t.join(d))) : e
}

function p(e, t) {
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
  } = e, b = r.useRef(m);
  r.useLayoutEffect(() => {
    b.current = m
  }, [m]);
  let [y, O] = r.useReducer(i.Z, {
    items: n,
    focusPath: s,
    focusIndex: false
  }), v = r.useMemo(() => (0, o.P2)(O, 30), [O]);
  r.useEffect(() => {
    O({
      type: i.B.UPDATE_ITEMS,
      items: n
    })
  }, [n]);
  let {
    focusPath: I
  } = y, [T, S] = r.useState(false), [A, C] = r.useState(E), [{
    onItemFocusMemoizer: N,
    onItemMouseEnterMemoizer: R
  }] = r.useState(() => ({
    onItemFocusMemoizer: new o.$o(e => () => {
      S(true), O({
        type: i.B.SET_FOCUS_PATH,
        path: e.split(d)
      })
    }),
    onItemMouseEnterMemoizer: new o.$o(e => () => {
      C(false), O({
        type: i.B.SET_FOCUS_PATH,
        path: e.split(d)
      })
    })
  })), P = r.useCallback(e => {
    if (!b.current) return;
    e.key === a.R8.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
    let n = f(e);
    switch (n) {
      case a.Us.NAVIGATE_UP:
      case a.Us.NAVIGATE_DOWN:
      case a.Us.NAVIGATE_IN:
      case a.Us.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), C(true), v({
          type: n
        });
        return;
      case a.Us.SELECT_FOCUSED_ITEM:
        var r;
        if (e.repeat || h(e.target)) return;
        if (e.preventDefault(), e.stopPropagation(), C(false), v({
            type: n
          }), null != c) return void c(I);
        let i = p(null != (r = e.target.ownerDocument) ? r : document, _(t, I));
        null == i || i.click()
    }
  }, [v, t, I, c, g]), D = r.useCallback(() => {
    T || S(true)
  }, [T]), w = r.useCallback(e => {
    e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && T && S(false)
  }, [T]), x = r.useCallback(() => {
    O({
      type: i.B.SET_FOCUS_PATH,
      path: []
    }), S(false)
  }, []), L = r.useCallback(e => e.every((e, t) => I[t] === e), [I]), M = r.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: false,
    onKeyDown: P,
    onFocus: D,
    onBlur: w,
    onMouseLeave: x,
    "aria-activedescendant": I.length > 0 ? (0, o.qR)(t, I.join(d)) : true
  }), [t, P, D, w, x, I]), k = r.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: false,
      "aria-activedescendant": L(n) ? (0, o.qR)(t, I.join(d)) : true,
      focusIndex: y.focusIndex,
      isUsingKeyboardNavigation: A
    }
  }, [t, I, L, y.focusIndex, A]), j = r.useCallback(e => {
    let {
      path: n,
      hasSubmenu: r = false,
      navigable: i = true,
      role: a = "menuitem"
    } = e, s = n.join(d);
    return u(l({}, r ? {
      "aria-expanded": L(n),
      "aria-haspopup": true
    } : {}), {
      role: a,
      id: (0, o.qR)(t, s),
      tabIndex: false,
      onFocus: i ? N.get(s) : () => {},
      onMouseEnter: i ? R.get(s) : () => {}
    })
  }, [t, L, N, R]);
  return r.useMemo(() => ({
    dispatch: v,
    getContainerProps: M,
    getSubmenuProps: k,
    getItemProps: j,
    isFocused: L,
    isUsingKeyboardNavigation: A
  }), [v, M, k, j, L, A])
}