/** Chunk was on web.js **/
/** chunk id: 498405, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./35282.js");
var Chunk473749 = require("./473749.js"),
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

function p(e, t) {
  return null != t ? "".concat((0, a.qR)(e, t.join(d))) : e
}

function _(e, t) {
  return e.getElementById(t)
}

function m(e) {
  return e.tabIndex >= 0
}

function h(e) {
  let {
    navId: t,
    items: n,
    initialFocusPath: s,
    onSelect: c,
    enabled: h = true,
    closeMenu: g,
    defaultIsUsingKeyboardNavigation: E = false
  } = e, b = r.useRef(h);
  r.useLayoutEffect(() => {
    b.current = h
  }, [h]);
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
    focusPath: S
  } = y, [I, T] = r.useState(false), [C, A] = r.useState(E), [{
    onItemFocusMemoizer: N,
    onItemMouseEnterMemoizer: P
  }] = r.useState(() => ({
    onItemFocusMemoizer: new a.$o(e => () => {
      T(true), O({
        type: i.B.SET_FOCUS_PATH,
        path: e.split(d)
      })
    }),
    onItemMouseEnterMemoizer: new a.$o(e => () => {
      A(false), O({
        type: i.B.SET_FOCUS_PATH,
        path: e.split(d)
      })
    })
  })), R = r.useCallback(e => {
    if (!b.current) return;
    e.key === o.R8.ESCAPE && null != g && (e.stopPropagation(), e.preventDefault(), g());
    let n = f(e);
    switch (n) {
      case o.Us.NAVIGATE_UP:
      case o.Us.NAVIGATE_DOWN:
      case o.Us.NAVIGATE_IN:
      case o.Us.NAVIGATE_OUT:
        e.preventDefault(), e.stopPropagation(), A(true), v({
          type: n
        });
        return;
      case o.Us.SELECT_FOCUSED_ITEM:
        var r;
        if (e.repeat || m(e.target)) return;
        if (e.preventDefault(), e.stopPropagation(), A(false), v({
            type: n
          }), null != c) return void c(S);
        let i = _(null != (r = e.target.ownerDocument) ? r : document, p(t, S));
        null == i || i.click()
    }
  }, [v, t, S, c, g]), w = r.useCallback(() => {
    I || T(true)
  }, [I]), D = r.useCallback(e => {
    e.target !== e.currentTarget && !e.currentTarget.contains(e.relatedTarget) && I && T(false)
  }, [I]), x = r.useCallback(() => {
    O({
      type: i.B.SET_FOCUS_PATH,
      path: []
    }), T(false)
  }, []), L = r.useCallback(e => e.every((e, t) => S[t] === e), [S]), j = r.useCallback(() => ({
    role: "menu",
    id: t,
    tabIndex: false,
    onKeyDown: R,
    onFocus: w,
    onBlur: D,
    onMouseLeave: x,
    "aria-activedescendant": S.length > 0 ? (0, a.qR)(t, S.join(d)) : true
  }), [t, R, w, D, x, S]), M = r.useCallback(e => {
    let {
      path: n
    } = e;
    return {
      role: "menu",
      tabIndex: false,
      "aria-activedescendant": L(n) ? (0, a.qR)(t, S.join(d)) : true,
      focusIndex: y.focusIndex,
      isUsingKeyboardNavigation: C
    }
  }, [t, S, L, y.focusIndex, C]), k = r.useCallback(e => {
    let {
      path: n,
      hasSubmenu: r = false,
      navigable: i = true,
      role: o = "menuitem"
    } = e, s = n.join(d);
    return u(l({}, r ? {
      "aria-expanded": L(n),
      "aria-haspopup": true
    } : {}), {
      role: o,
      id: (0, a.qR)(t, s),
      tabIndex: false,
      onFocus: i ? N.get(s) : () => {},
      onMouseEnter: i ? P.get(s) : () => {}
    })
  }, [t, L, N, P]);
  return r.useMemo(() => ({
    dispatch: v,
    getContainerProps: j,
    getSubmenuProps: M,
    getItemProps: k,
    isFocused: L,
    isUsingKeyboardNavigation: C
  }), [v, j, M, k, L, C])
}