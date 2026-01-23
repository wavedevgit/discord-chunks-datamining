/** Chunk was on web.js **/
/** chunk id: 103552, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G3: () => I,
  x4: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk884362 = require("./884362.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk892547 = require("./892547.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk414834 = require("./414834.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let y = "data-listbox-item-id",
  b = 40,
  O = Object.freeze({
    STANDARD: Chunk414834.wH,
    BRAND: Chunk414834.hE
  });

function v(e) {
  return String(e)
}
let A = Chunk64700.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: v
});

function I(e) {
  let {
    placeholder: t,
    children: n,
    value: a,
    onChange: p,
    className: h,
    listClassName: E,
    "aria-label": O,
    multiSelect: I = false,
    autoFocus: S = false,
    maxVisibleItems: T = 5,
    itemToString: C = v,
    emptyStateText: N,
    emptyStateHeader: R,
    onQueryChange: w
  } = e, [P, D] = i.useState(""), x = i.useCallback(e => {
    D(e), null == w || w(e)
  }, [w]), [L] = i.useState(true), [j, M] = i.useState(null), k = i.useId(), U = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(y, '="').concat(j, '"]')),
      t = U.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [j]);
  let G = n(P),
    V = 0 === G.length,
    F = null != R ? R : d.intl.string(d.t["4o4z3e"]),
    B = i.useId(),
    H = i.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    Y = i.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    W = i.useCallback((e, t) => {
      M(t);
      let n = document.querySelector(e),
        r = U.current;
      null != r && null != n && r.scrollIntoViewNode({
        node: n
      })
    }, []),
    K = (0, o.Ay)({
      id: B,
      isEnabled: true,
      useVirtualFocus: true,
      scrollToStart: H,
      scrollToEnd: Y,
      setFocus: W
    });
  return (0, r.jsx)(l.hD, {
    navigator: K,
    children: (0, r.jsx)(l.PR, {
      children: e => {
        let {
          ref: n,
          onKeyDown: i
        } = e, o = g(e, ["ref", "onKeyDown"]);
        return (0, r.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": O,
          "aria-expanded": L,
          "aria-controls": L ? k : true,
          "aria-owns": k,
          "aria-haspopup": "listbox",
          className: s()(f.EA, h),
          children: [(0, r.jsx)("div", {
            className: f.wx,
            children: (0, r.jsx)(c.I, {
              size: "sm",
              autoFocus: S,
              placeholder: t,
              query: P,
              onChange: x,
              onKeyDown: i,
              onBlur: () => M(null),
              onClear: () => x(""),
              inputProps: {
                "aria-multiline": false,
                "aria-activedescendant": null != j ? j : true
              }
            })
          }), (0, r.jsx)("div", {
            children: L && (V ? (0, r.jsxs)("div", {
              className: f.Ie,
              children: [(0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: F
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: null != N ? N : d.intl.string(d.t.QwSXv8)
              })]
            }) : (0, r.jsx)(A.Provider, {
              value: {
                activeDescendant: j,
                selected: a,
                setSelected: p,
                itemToString: C
              },
              children: (0, r.jsx)(u.OZj, m(_({}, o), {
                style: {
                  maxHeight: T * (b + 6)
                },
                "aria-multiselectable": I,
                id: k,
                ref: U,
                className: s()(f.p_, f.XG, E),
                sections: [G.length],
                sectionHeight: 0,
                rowHeight: b,
                renderRow: e => {
                  let {
                    row: t
                  } = e;
                  return G[t]
                },
                renderSection: () => null
              }))
            }))
          })]
        })
      }
    })
  })
}
let S = Chunk64700.createContext(null);

function T(e) {
  var t;
  let {
    value: n,
    children: a,
    disabled: o = false,
    selectedColor: c = O.STANDARD
  } = e, d = g(e, ["value", "children", "disabled", "selectedColor"]), {
    activeDescendant: p,
    selected: h,
    setSelected: E,
    itemToString: b
  } = i.useContext(A), v = b(n), I = p === v, T = null != (t = null == d ? true : d.selected) ? t : h.has(n), C = (0, l.rm)(v);
  return (0, r.jsx)(u.DUT, m(_({
    tag: "li",
    id: v,
    onClick: () => o ? null : E(n),
    [y]: n,
    className: s()(f.AS, {
      [f.in]: I,
      [c]: T,
      [f.r9]: o
    })
  }, C), {
    role: "option",
    "aria-selected": T,
    "aria-disabled": o,
    children: (0, r.jsx)(S.Provider, {
      value: n,
      children: a
    })
  }))
}
T.Colors = O, T.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: f.IR,
    children: t
  })
}, T.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: f.pp,
    children: t
  })
}, T.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = i.useContext(A), a = i.useContext(S);
  return (0, r.jsx)("span", {
    className: f.pp,
    children: (0, r.jsx)(u.P7L, {
      checked: null != t ? t : null != a && n.has(a)
    })
  })
}, T.Checkmark = function() {
  let {
    selected: e
  } = i.useContext(A), t = i.useContext(S);
  return e.has(t) ? (0, r.jsx)("span", {
    className: f.pp,
    children: (0, r.jsx)(u.yr3, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}