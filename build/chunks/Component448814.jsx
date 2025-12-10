/** Chunk was on web.js **/
/** chunk id: 448814, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  w: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk924826 = require("./924826.js"),
  Chunk260866 = require("./260866.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk692547 = require("./692547.js"),
  Chunk571155 = require("./571155.jsx"),
  Chunk652728 = require("./652728.jsx"),
  Chunk715644 = require("./715644.js"),
  Chunk131573 = require("./131573.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk194255 = require("./194255.jsx"),
  Chunk199197 = require("./199197.js"),
  Chunk95632 = require("./95632.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = I(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let T = Chunk692547.Z.modules.select.OPTION_HEIGHT.resolve();

function C(e) {
  let t, {
      id: n,
      required: a = false,
      disabled: u = false,
      selectionMode: d = "single",
      items: f,
      defaultSelectedItems: b,
      selectedItems: O,
      onSelectionChange: I,
      activeDescendantIndex: C,
      shouldFocusWrap: P = false,
      renderListItem: R,
      renderEmptyState: D,
      maxVisibleItems: w = 5,
      loading: x = false,
      onBlur: L,
      onFocus: j,
      typeahead: M = false
    } = e,
    k = i.useId(),
    U = null != n ? n : k,
    G = i.useMemo(() => f.map((e, t) => v(y({}, e), {
      index: t
    })), [f]),
    [Z, B] = i.useState(null != b ? b : []),
    F = null != O,
    V = F ? O : Z,
    H = (0, s.ZP)({
      id: U,
      async scrollToEnd() {},
      async scrollToStart() {},
      isEnabled: !u,
      wrap: P,
      preserveFocusPosition: true
    }),
    {
      activeIndex: Y,
      handleKeyDown: W
    } = N(M, G);
  i.useEffect(() => {
    if (null != Y && M) {
      let e = (0, l.jb)(U, (0, g.cA)(U, Y)),
        t = document.querySelector((0, l.P1)(e));
      null == t || t.focus()
    }
  }, [Y, G, M, U]);
  let K = i.useCallback(e => {
      if (true === a && 1 === V.length && V.includes(e)) return;
      let t = (0, g.cq)(d, V, e);
      F || B(t), null == I || I(t)
    }, [a, V, I, F, d]),
    z = i.useCallback(e => (0, r.jsx)("div", {
      className: E.listBoxItemContent,
      children: (0, r.jsx)(m.x, {
        variant: "text-md/medium",
        color: "currentColor",
        className: E.listBoxItemLabel,
        children: e.label
      })
    }), []);
  if (x) t = (0, r.jsx)("div", {
    className: E.loadingSpinnerWrapper,
    "aria-busy": true,
    children: (0, r.jsx)(_.$, {
      type: _.R.PULSING_ELLIPSIS,
      className: E.loadingSpinner,
      itemClassName: E.loadingSpinnerInner
    })
  });
  else if (G.length > 0) t = (0, r.jsx)(p._2, {
    style: {
      height: null != w ? "".concat(Math.min(G.length, w) * T, "px") : "100%"
    },
    role: true,
    rowHeight: T,
    sections: [G.length],
    sectionHeight: 0,
    renderSection: () => null,
    renderRow: e => {
      var t;
      let {
        row: n
      } = e, i = G[n], a = (0, g.cA)(U, n), o = 0 !== V.length && null != V.find(e => e.id === i.id);
      return (0, r.jsx)(A, v(y({}, i), {
        id: a,
        selectionMode: d,
        selected: o,
        disabled: u || i.disabled,
        focused: n === C,
        onClick: () => {
          u || i.disabled || K(i)
        },
        children: null != (t = null == R ? true : R(i)) ? t : z(i)
      }), i.index)
    }
  });
  else {
    var q;
    t = null != (q = null == D ? true : D()) ? q : (0, r.jsx)(h.z, {})
  }
  return (0, r.jsx)(c.bG, {
    navigator: H,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n,
          onKeyDown: i
        } = e, a = S(e, ["ref", "onKeyDown"]);
        return (0, r.jsx)("div", v(y({
          onBlur: L,
          onFocus: j,
          "aria-busy": x,
          ref: n,
          onKeyDown: e => {
            null == i || i(e), W(e)
          }
        }, a), {
          role: "listbox",
          "aria-multiselectable": "multiple" === d,
          className: o()(E.listBox, {
            [E.scrollable]: G.length > w
          }),
          "data-mana-component": "listbox",
          children: t
        }))
      }
    })
  })
}

function A(e) {
  let {
    children: t,
    id: n,
    selected: i,
    disabled: a,
    focused: o,
    selectionMode: s,
    onClick: l
  } = e, u = (0, c.JA)(n);

  function p() {
    return "multiple" === s ? (0, r.jsx)(d.F, {
      checked: i
    }) : i ? (0, r.jsx)(f.k, {
      color: "currentColor",
      size: "refresh_sm"
    }) : null
  }
  return (0, r.jsxs)("div", v(y({}, u), {
    id: n,
    className: E.listBoxItem,
    role: "option",
    tabIndex: u.tabIndex,
    onClick: l,
    "aria-disabled": a,
    "aria-selected": i,
    "data-focus-visible": o,
    children: [t, (0, r.jsx)("div", {
      className: E.selectedIcon,
      "aria-hidden": true,
      children: p()
    })]
  }))
}

function N(e, t) {
  let [n, r] = i.useState(""), a = i.useMemo(() => e ? t.map(e => null != e.label && "function" == typeof e.label.toLowerCase ? e.label.toLowerCase() : "") : [], [t, e]), o = i.useCallback(e => {
    e.metaKey || e.ctrlKey || e.altKey || e.shiftKey || e.key.length > 1 || r(t => t + e.key)
  }, []), s = i.useRef(null);
  return i.useEffect(() => (s.current = setTimeout(() => {
    r("")
  }, 750), () => {
    clearTimeout(s.current)
  }), [n]), {
    activeIndex: i.useMemo(() => {
      if ("" === n || !e) return null;
      let t = a.findIndex(e => e.startsWith(n.toLowerCase()));
      return t >= 0 ? t : null
    }, [a, n, e]),
    handleKeyDown: o
  }
}