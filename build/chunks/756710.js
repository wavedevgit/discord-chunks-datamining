/** Chunk was on web.js **/
"use strict";
n.d(t, {
  o: () => h
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(1561),
  l = n(743236),
  c = n(939350),
  u = n(748497);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
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

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let {
    children: t,
    color: n = "default",
    isFocused: o = !1,
    disabled: d = !1,
    keepItemStyles: _ = !1,
    menuItemProps: h,
    action: g,
    dontCloseOnActionIfHoldingShiftKey: m,
    dontCloseOnAction: E,
    onClose: v
  } = e, b = i.useRef(null);
  i.useEffect(() => {
    o && (0, l.F)(b)
  }, [o]);
  let y = i.useCallback(e => {
      if (null == g) return !1;
      e.shiftKey && m || E || v(), e.persist(), requestAnimationFrame(() => g(e))
    }, [g, v, m, E]),
    O = _ ? a()(u.item, c._[n], {
      [u.focused]: o
    }) : u.customItem;
  return (0, r.jsx)(s.P, p(f({
    innerRef: b,
    className: O,
    onClick: d ? void 0 : y,
    "aria-disabled": d
  }, h), {
    children: t({
      color: n,
      disabled: d,
      isFocused: o
    })
  }))
}