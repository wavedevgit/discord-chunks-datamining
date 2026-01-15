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
  Chunk695860 = require("./695860.js");

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
      tabIndex: a = 0,
      required: u = false,
      disabled: d = false,
      selectionMode: f = "single",
      items: b,
      defaultSelectedItems: O,
      selectedItems: I,
      onSelectionChange: C,
      activeDescendantIndex: P,
      shouldFocusWrap: w = false,
      renderListItem: R,
      renderEmptyState: D,
      maxVisibleItems: x = 5,
      loading: L = false,
      onBlur: j,
      onFocus: M,
      typeahead: k = false
    } = e,
    U = i.useId(),
    G = null != n ? n : U,
    Z = i.useRef(null),
    F = i.useMemo(() => b.map((e, t) => v(y({}, e), {
      index: t
    })), [b]),
    [B, V] = i.useState(null != O ? O : []),
    H = null != I,
    Y = H ? I : B,
    W = (0, s.ZP)({
      id: G,
      defaultFocused: null != P ? (0, g.cA)(G, P) : true,
      async scrollToEnd() {},
      async scrollToStart() {},
      isEnabled: !d,
      wrap: w,
      preserveFocusPosition: false
    });
  i.useEffect(() => {
    requestAnimationFrame(() => {
      if (null != P) {
        var e;
        null == (e = Z.current) || e.scrollToIndex({
          section: 0,
          row: P
        })
      }
    })
  }, [G, P]);
  let {
    activeIndex: K,
    handleKeyDown: z
  } = N(k, F);
  i.useEffect(() => {
    if (null != K && k) {
      let e = (0, l.jb)(G, (0, g.cA)(G, K)),
        t = document.querySelector((0, l.P1)(e));
      null == t || t.focus()
    }
  }, [K, F, k, G]);
  let q = i.useCallback(e => {
      if (true === u && 1 === Y.length && Y.includes(e)) return;
      let t = (0, g.cq)(f, Y, e);
      H || V(t), null == C || C(t)
    }, [u, Y, C, H, f]),
    Q = i.useCallback(e => (0, r.jsx)("div", {
      className: E.listBoxItemContent,
      children: (0, r.jsx)(h.x, {
        variant: "text-md/medium",
        color: "currentColor",
        className: E.listBoxItemLabel,
        children: e.label
      })
    }), []);
  if (L) t = (0, r.jsx)("div", {
    className: E.loadingSpinnerWrapper,
    "aria-busy": true,
    children: (0, r.jsx)(_.$, {
      type: _.R.PULSING_ELLIPSIS,
      className: E.loadingSpinner,
      itemClassName: E.loadingSpinnerInner
    })
  });
  else if (F.length > 0) t = (0, r.jsx)(p._2, {
    ref: Z,
    style: {
      height: null != x ? "".concat(Math.min(F.length, x) * T, "px") : "100%"
    },
    role: true,
    tabIndex: a,
    rowHeight: T,
    sections: [F.length],
    sectionHeight: 0,
    renderSection: () => null,
    renderRow: e => {
      var t;
      let {
        row: n
      } = e, i = F[n], o = (0, g.cA)(G, n), s = 0 !== Y.length && null != Y.find(e => e.id === i.id);
      return (0, r.jsx)(A, v(y({}, i), {
        id: o,
        tabIndex: a,
        selectionMode: f,
        selected: s,
        disabled: d || i.disabled,
        focused: n === P,
        onClick: () => {
          d || i.disabled || q(i)
        },
        children: null != (t = null == R ? true : R(i)) ? t : Q(i)
      }), i.index)
    }
  });
  else {
    var X;
    t = null != (X = null == D ? true : D()) ? X : (0, r.jsx)(m.z, {})
  }
  return (0, r.jsx)(c.bG, {
    navigator: W,
    children: (0, r.jsx)(c.SJ, {
      children: e => {
        var {
          ref: n,
          onKeyDown: i
        } = e, s = S(e, ["ref", "onKeyDown"]);
        return (0, r.jsx)("div", v(y({
          onBlur: j,
          onFocus: M,
          "aria-busy": L,
          ref: n,
          onKeyDown: e => {
            null == i || i(e), z(e)
          }
        }, s), {
          role: "listbox",
          tabIndex: a,
          "aria-multiselectable": "multiple" === f,
          className: o()(E.listBox, {
            [E.scrollable]: F.length > x
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
    tabIndex: i,
    selected: a,
    disabled: o,
    focused: s,
    selectionMode: l,
    onClick: u
  } = e, p = (0, c.JA)(n);

  function _() {
    return "multiple" === l ? (0, r.jsx)(d.F, {
      checked: a
    }) : a ? (0, r.jsx)(f.k, {
      color: "currentColor",
      size: "refresh_sm"
    }) : null
  }
  return (0, r.jsxs)("div", v(y({}, p), {
    id: n,
    className: E.listBoxItem,
    role: "option",
    tabIndex: false === i ? false : p.tabIndex,
    onClick: u,
    "aria-disabled": o,
    "aria-selected": a,
    "data-focus-visible": s,
    children: [t, (0, r.jsx)("div", {
      className: E.selectedIcon,
      "aria-hidden": true,
      children: _()
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