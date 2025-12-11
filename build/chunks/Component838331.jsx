/** Chunk was on web.js **/
/** chunk id: 838331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hQ: () => T,
  lo: () => A,
  yn: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk326452 = require("./326452.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405100 = require("./405100.js");

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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = "data-listbox-item-id",
  y = 40,
  O = Object.freeze({
    STANDARD: Chunk405100.selected,
    BRAND: Chunk405100.selectedBrand
  });

function v(e) {
  let [t, n] = i.useState(() => new Set(null != e ? [e] : true));
  return [t, i.useCallback(e => {
    n(new Set([e]))
  }, [])]
}

function S(e) {
  return String(e)
}
let I = Chunk473749.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: S
});

function T(e) {
  let {
    placeholder: t,
    children: n,
    value: a,
    onChange: p,
    className: m,
    listClassName: E,
    "aria-label": O,
    multiSelect: v = false,
    autoFocus: T = false,
    maxVisibleItems: C = 5,
    itemToString: A = S,
    emptyStateText: N,
    emptyStateHeader: P,
    onQueryChange: R
  } = e, [w, D] = i.useState(""), x = i.useCallback(e => {
    D(e), null == R || R(e)
  }, [R]), [L] = i.useState(true), [j, M] = i.useState(null), k = i.useId(), U = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(b, '="').concat(j, '"]')),
      t = U.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [j]);
  let G = n(w),
    Z = 0 === G.length,
    F = null != P ? P : d.intl.string(d.t["4o4z3e"]),
    B = i.useId(),
    V = i.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    H = i.useCallback(() => new Promise(e => {
      let t = U.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    Y = i.useCallback((e, t) => {
      M(t);
      let n = document.querySelector(e),
        r = U.current;
      null != r && null != n && r.scrollIntoViewNode({
        node: n
      })
    }, []),
    W = (0, s.ZP)({
      id: B,
      isEnabled: true,
      useVirtualFocus: true,
      scrollToStart: V,
      scrollToEnd: H,
      setFocus: Y
    });
  return (0, r.jsx)(l.bG, {
    navigator: W,
    children: (0, r.jsx)(l.SJ, {
      children: e => {
        var {
          ref: n,
          onKeyDown: i
        } = e, s = g(e, ["ref", "onKeyDown"]);
        return (0, r.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": O,
          "aria-expanded": L,
          "aria-controls": L ? k : true,
          "aria-owns": k,
          "aria-haspopup": "listbox",
          className: o()(f.combobox, m),
          children: [(0, r.jsx)("div", {
            className: f.header,
            children: (0, r.jsx)(c.E, {
              size: "sm",
              autoFocus: T,
              placeholder: t,
              query: w,
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
            children: L && (Z ? (0, r.jsxs)("div", {
              className: f.empty,
              children: [(0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: F
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: null != N ? N : d.intl.string(d.t.QwSXv8)
              })]
            }) : (0, r.jsx)(I.Provider, {
              value: {
                activeDescendant: j,
                selected: a,
                setSelected: p,
                itemToString: A
              },
              children: (0, r.jsx)(u.Tvr, h(_({}, s), {
                style: {
                  maxHeight: C * (y + 6)
                },
                "aria-multiselectable": v,
                id: k,
                ref: U,
                className: o()(f.list, f.scroller, E),
                sections: [G.length],
                sectionHeight: 0,
                rowHeight: y,
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
let C = Chunk473749.createContext(null);

function A(e) {
  var t, {
      value: n,
      children: a,
      disabled: s = false,
      selectedColor: c = O.STANDARD
    } = e,
    d = g(e, ["value", "children", "disabled", "selectedColor"]);
  let {
    activeDescendant: p,
    selected: m,
    setSelected: E,
    itemToString: y
  } = i.useContext(I), v = y(n), S = p === v, T = null != (t = null == d ? true : d.selected) ? t : m.has(n), A = (0, l.JA)(v);
  return (0, r.jsx)(u.P3F, h(_({
    tag: "li",
    id: v,
    onClick: () => s ? null : E(n),
    [b]: n,
    className: o()(f.item, {
      [f.focused]: S,
      [c]: T,
      [f.disabled]: s
    })
  }, A), {
    role: "option",
    "aria-selected": T,
    "aria-disabled": s,
    children: (0, r.jsx)(C.Provider, {
      value: n,
      children: a
    })
  }))
}
A.Colors = O, A.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: f.itemLabel,
    children: t
  })
}, A.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: f.itemCheckbox,
    children: t
  })
}, A.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = i.useContext(I), a = i.useContext(C);
  return (0, r.jsx)("span", {
    className: f.itemCheckbox,
    children: (0, r.jsx)(u.FZ5, {
      checked: null != t ? t : null != a && n.has(a)
    })
  })
}, A.Checkmark = function() {
  let {
    selected: e
  } = Chunk473749.useContext(I), t = Chunk473749.useContext(C);
  return module.has(exports) ? (0, Chunk54381.jsx)("span", {
    className: Chunk405100.itemCheckbox,
    children: (0, Chunk54381.jsx)(Chunk481060.owK, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}