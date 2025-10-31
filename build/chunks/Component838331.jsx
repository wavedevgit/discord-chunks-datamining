/** Chunk was on web.js **/
/** chunk id: 838331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  hQ: () => S,
  lo: () => C,
  yn: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk326452 = require("./326452.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792323 = require("./792323.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
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
    STANDARD: Chunk792323.selected,
    BRAND: Chunk792323.selectedBrand
  });

function v(e) {
  let [t, n] = i.useState(() => new Set(null != e ? [e] : true));
  return [t, i.useCallback(e => {
    n(new Set([e]))
  }, [])]
}

function I(e) {
  return String(e)
}
let T = Chunk647438.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: I
});

function S(e) {
  let {
    placeholder: t,
    children: n,
    value: a,
    onChange: _,
    className: h,
    listClassName: E,
    "aria-label": O,
    multiSelect: v = false,
    autoFocus: S = false,
    maxVisibleItems: A = 5,
    itemToString: C = I,
    emptyStateText: N,
    emptyStateHeader: R,
    onQueryChange: P
  } = e, [w, D] = i.useState(""), x = i.useCallback(e => {
    D(e), null == P || P(e)
  }, [P]), [L] = i.useState(true), [M, k] = i.useState(null), j = i.useId(), U = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(b, '="').concat(M, '"]')),
      t = U.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [M]);
  let G = n(w),
    B = 0 === G.length,
    Z = null != R ? R : d.intl.string(d.t["4o4z3e"]),
    F = i.useId(),
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
      k(t);
      let n = document.querySelector(e),
        r = U.current;
      null != r && null != n && r.scrollIntoViewNode({
        node: n
      })
    }, []),
    W = (0, s.ZP)({
      id: F,
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
          "aria-controls": L ? j : true,
          "aria-owns": j,
          "aria-haspopup": "listbox",
          className: o()(f.combobox, h),
          children: [(0, r.jsx)("div", {
            className: f.header,
            children: (0, r.jsx)(c.E, {
              size: "sm",
              autoFocus: S,
              placeholder: t,
              query: w,
              onChange: x,
              onKeyDown: i,
              onBlur: () => k(null),
              onClear: () => x(""),
              inputProps: {
                "aria-multiline": false,
                "aria-activedescendant": null != M ? M : true
              }
            })
          }), (0, r.jsx)("div", {
            children: L && (B ? (0, r.jsxs)("div", {
              className: f.empty,
              children: [(0, r.jsx)(u.Heading, {
                variant: "heading-md/semibold",
                children: Z
              }), (0, r.jsx)(u.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: null != N ? N : d.intl.string(d.t.QwSXv8)
              })]
            }) : (0, r.jsx)(T.Provider, {
              value: {
                activeDescendant: M,
                selected: a,
                setSelected: _,
                itemToString: C
              },
              children: (0, r.jsx)(u.Tvr, m(p({}, s), {
                style: {
                  maxHeight: A * (y + 6)
                },
                "aria-multiselectable": v,
                id: j,
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
let A = Chunk647438.createContext(null);

function C(e) {
  var t, {
      value: n,
      children: a,
      disabled: s = false,
      selectedColor: c = O.STANDARD
    } = e,
    d = g(e, ["value", "children", "disabled", "selectedColor"]);
  let {
    activeDescendant: _,
    selected: h,
    setSelected: E,
    itemToString: y
  } = i.useContext(T), v = y(n), I = _ === v, S = null != (t = null == d ? true : d.selected) ? t : h.has(n), C = (0, l.JA)(v);
  return (0, r.jsx)(u.P3F, m(p({
    tag: "li",
    id: v,
    onClick: () => s ? null : E(n),
    [b]: n,
    className: o()(f.item, {
      [f.focused]: I,
      [c]: S,
      [f.disabled]: s
    })
  }, C), {
    role: "option",
    "aria-selected": S,
    "aria-disabled": s,
    children: (0, r.jsx)(A.Provider, {
      value: n,
      children: a
    })
  }))
}
C.Colors = O, C.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: f.itemLabel,
    children: t
  })
}, C.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: f.itemCheckbox,
    children: t
  })
}, C.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = i.useContext(T), a = i.useContext(A);
  return (0, r.jsx)("span", {
    className: f.itemCheckbox,
    children: (0, r.jsx)(u.FZ5, {
      checked: null != t ? t : null != a && n.has(a)
    })
  })
}, C.Checkmark = function() {
  let {
    selected: e
  } = Chunk647438.useContext(T), t = Chunk647438.useContext(A);
  return module.has(exports) ? (0, Chunk951288.jsx)("span", {
    className: Chunk792323.itemCheckbox,
    children: (0, Chunk951288.jsx)(Chunk481060.owK, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}