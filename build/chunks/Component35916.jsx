/** Chunk was on web.js **/
/** chunk id: 35916, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk987150 = require("./987150.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
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

function h(e, t) {
  if (null == e) return {};
  var n, r, i = m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function m(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function g(e) {
  let {
    id: t,
    required: n = false,
    disabled: a = false,
    selectionMode: o = "single",
    items: d,
    defaultSelectedItems: _,
    selectedItems: m,
    onSelectionChange: g,
    shouldFocusWrap: b = false,
    renderListItem: y,
    renderEmptyState: O
  } = e, v = i.useId();
  t = null != t ? t : v;
  let [I, T] = i.useState(null != _ ? _ : new Set), S = null != m, A = S ? m : I, C = (0, s.ZP)({
    id: t,
    async scrollToEnd() {},
    async scrollToStart() {},
    isEnabled: !a,
    wrap: b,
    preserveFocusPosition: true
  }), N = i.useCallback(e => {
    if (n && 1 === A.size && A.has(e)) return;
    let t = new Set(A);
    A.has(e) ? t.delete(e) : "multiple" === o ? t.add(e) : t = new Set([e]), S || T(t), null == g || g(t)
  }, [n, A, g, S, o]), R = i.useCallback(e => (0, r.jsx)(c.xvT, {
    variant: "text-md/medium",
    color: "currentColor",
    className: u.listBoxItemLabel,
    children: e.label
  }), []), P = i.useMemo(() => d.map(e => {
    var t, n;
    return (0, r.jsx)(E, p(f({}, e), {
      selectionMode: o,
      selected: null != (t = null == A ? true : A.has(e)) && t,
      disabled: a || e.disabled,
      onClick: () => {
        a || e.disabled || N(e)
      },
      children: null != (n = null == y ? true : y(e)) ? n : R(e)
    }), e.id)
  }), [d, o, A, y, R, a, N]);
  return (0, r.jsx)(l.bG, {
    navigator: C,
    children: (0, r.jsx)(l.SJ, {
      children: e => {
        var {
          ref: t
        } = e, n = h(e, ["ref"]);
        return (0, r.jsx)("div", p(f({
          ref: t
        }, n), {
          role: "listbox",
          "aria-multiselectable": "multiple" === o,
          className: u.listBox,
          children: (0, r.jsx)(c.w0Z, {
            className: u.scroller,
            children: (0, r.jsxs)("div", {
              className: u.listBoxInner,
              children: [P, 0 === P.length && (null == O ? true : O())]
            })
          })
        }))
      }
    })
  })
}

function E(e) {
  let {
    children: t,
    id: n,
    selected: i,
    disabled: a,
    selectionMode: s,
    onClick: d
  } = e, _ = (0, l.JA)(n);

  function h() {
    return "multiple" === s ? (0, r.jsx)(c.XZJ, {
      checked: i,
      displayOnly: true
    }) : (0, r.jsx)(c.kSu, {
      color: "currentColor",
      size: "refresh_sm",
      className: o()({
        [u.hiddenCheckIcon]: !i
      })
    })
  }
  return (0, r.jsxs)("div", p(f({}, _), {
    id: n,
    className: u.listBoxItem,
    role: "option",
    tabIndex: _.tabIndex,
    onClick: d,
    "aria-disabled": a,
    "aria-selected": i,
    children: [(0, r.jsx)("div", {
      className: u.listBoxItemContent,
      children: t
    }), (0, r.jsx)("div", {
      className: u.selectedIcon,
      "aria-hidden": true,
      children: h()
    })]
  }))
}