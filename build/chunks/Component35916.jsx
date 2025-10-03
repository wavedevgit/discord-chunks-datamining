/** Chunk was on web.js **/
/** chunk id: 35916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk483753 = require("./483753.js"),
  Chunk987150 = require("./987150.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function m(e) {
  let {
    id: t,
    required: n = false,
    disabled: u = false,
    selectionMode: f = "single",
    items: h,
    defaultSelectedItems: m,
    selectedItems: E,
    onSelectionChange: b,
    activeDescendantIndex: y,
    shouldFocusWrap: O = false,
    renderListItem: v,
    renderEmptyState: I
  } = e, T = i.useId(), S = null != t ? t : T, [A, C] = i.useState(null != m ? m : []), N = null != E, R = N ? E : A, P = (0, a.ZP)({
    id: S,
    async scrollToEnd() {},
    async scrollToStart() {},
    isEnabled: !u,
    wrap: O,
    preserveFocusPosition: true
  }), w = i.useCallback(e => {
    if (true === n && 1 === R.length && R.includes(e)) return;
    let t = (0, l.cq)(f, R, e);
    N || C(t), null == b || b(t)
  }, [n, R, b, N, f]), D = i.useCallback(e => (0, r.jsx)("div", {
    className: c.listBoxItemContent,
    children: (0, r.jsx)(s.xvT, {
      variant: "text-md/medium",
      color: "currentColor",
      className: c.listBoxItemLabel,
      children: e.label
    })
  }), []), L = i.useMemo(() => h.map((e, t) => {
    var n, i;
    let a = (0, l.cA)(S, t);
    return (0, r.jsx)(g, _(d({}, e), {
      id: a,
      selectionMode: f,
      selected: null != (n = null == R ? true : R.includes(e)) && n,
      disabled: u || e.disabled,
      focused: t === y,
      onClick: () => {
        u || e.disabled || w(e)
      },
      children: null != (i = null == v ? true : v(e)) ? i : D(e)
    }), e.id)
  }), [S, h, f, R, v, D, u, w, y]);
  return (0, r.jsx)(o.bG, {
    navigator: P,
    children: (0, r.jsx)(o.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = p(e, ["ref"]);
        return (0, r.jsx)("div", _(d({
          ref: t
        }, n), {
          role: "listbox",
          "aria-multiselectable": "multiple" === f,
          className: c.listBox,
          children: (0, r.jsxs)("div", {
            className: c.listBoxInner,
            children: [L, 0 === L.length && (null == I ? true : I())]
          })
        }))
      }
    })
  })
}

function g(e) {
  let {
    children: t,
    id: n,
    selected: i,
    disabled: a,
    focused: l,
    selectionMode: u,
    onClick: f
  } = e, p = (0, o.JA)(n);

  function h() {
    return "multiple" === u ? (0, r.jsx)(s.XZJ, {
      checked: i,
      displayOnly: true
    }) : i ? (0, r.jsx)(s.kSu, {
      color: "currentColor",
      size: "refresh_sm"
    }) : null
  }
  return (0, r.jsxs)("div", _(d({}, p), {
    id: n,
    className: c.listBoxItem,
    role: "option",
    tabIndex: p.tabIndex,
    onClick: f,
    "aria-disabled": a,
    "aria-selected": i,
    "data-focus-visible": l,
    children: [t, (0, r.jsx)("div", {
      className: c.selectedIcon,
      "aria-hidden": true,
      children: h()
    })]
  }))
}