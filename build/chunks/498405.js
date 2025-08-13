/** Chunk was on web.js **/
/** chunk id: 498405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => m
}), require("./388685.js"), require("./35282.js");
var Chunk73800 = require("./73800.js"),
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
    case o.R8.ENTER:
    case o.R8.SPACE:
      return o.Us.SELECT_FOCUSED_ITEM;
    case o.R8.UP:
      return o.Us.NAVIGATE_UP;
    case o.R8.DOWN:
      return o.Us.NAVIGATE_DOWN;
    case o.R8.RIGHT:
      return o.Us.NAVIGATE_IN;
    case o.R8.LEFT:
      return o.Us.NAVIGATE_OUT
  }
}

function _(e, t) {
  return null != t ? "".concat((0, a.qR)(e, t.join(d))) : e
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
  }), v = r.useMemo(() => (0, a.P2)(O, 30), [O]);
  r.useEffect(() => {
    O({
      type: i.B.UPDATE_ITEMS,
      items: n
    })
  }, [n]);
  let {
    focusPath: I
  } = y, [T, S] = r.useState(false), [A, N] = r.useState(E), [{
    onItemFocusMemoizer: C,
    onItemMouseEnterMemoizer: R
  }] = r.useState(() => ({
    onItemFocusMemoizer: new a.$o(e => () => {
      S(true), O({
        type: i.B.SET_FOCUS_PATH,
        path: e.split(d)
      })
    }),
    onItemMouseEnterMemoizer: new a.$o(e => () => {
      N(false), O({
        type: i.B.SET_FOCUS_PATH,
        path: e.split(d)
      })
    })
  })), P = r.useCallback(e => {
    if (!b.current) return;
    e.key === o.R8.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
    let n = f(e);
    switch (n) {
      case o.Us.NAVIGATE_UP:
      case o.Us.NAVIGATE_DOWN:
      case o.Us.NAVIGATE_IN:
      case o.Us.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), N(true), v({
          type: n
        });
        return;
      case o.Us.SELECT_FOCUSED_ITEM:
        var r;
        if (e.repeat || h(e.target)) return;
        if (e.preventDefault(), e.stopPropagation(), N(false), v({
            type: n
          }), null != c) return void c(I);
        let i = p(null != (r = e.target.ownerDocument) ? r : document, _(t, I));
        null == i || i.click()
    }
  }, [v, t, I, c, g]), w = r.useCallback(() => {
    T || S(true)
  }, [T]), D = r.useCallback(e => {
    e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && T && S(false)
  }, [T]), L = r.useCallback(() => {
    O({
      type: i.B.SET_FOCUS_PATH,
      path: []
    }), S(false)
  }, []), x = r.useCallback(e => e.every((e, t) => I[t] === e), [I]), M = r.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: false,
    onKeyDown: P,
    onFocus: w,
    onBlur: D,
    onMouseLeave: L,
    "aria-activedescendant": I.length > 0 ? (0, a.qR)(t, I.join(d)) : true
  }), [t, P, w, D, L, I]), j = r.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: false,
      "aria-activedescendant": x(n) ? (0, a.qR)(t, I.join(d)) : true,
      focusIndex: y.focusIndex,
      isUsingKeyboardNavigation: A
    }
  }, [t, I, x, y.focusIndex, A]), k = r.useCallback(e => {
    let {
      path: n,
      hasSubmenu: r = false,
      navigable: i = true,
      role: o = "menuitem"
    } = e, s = n.join(d);
    return u(l({}, r ? {
      "aria-expanded": x(n),
      "aria-haspopup": true
    } : {}), {
      role: o,
      id: (0, a.qR)(t, s),
      tabIndex: false,
      onFocus: i ? C.get(s) : () => {},
      onMouseEnter: i ? R.get(s) : () => {}
    })
  }, [t, x, C, R]);
  return r.useMemo(() => ({
    dispatch: v,
    getContainerProps: M,
    getSubmenuProps: j,
    getItemProps: k,
    isFocused: x,
    isUsingKeyboardNavigation: A
  }), [v, M, j, k, x, A])
}