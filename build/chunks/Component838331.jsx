/** Chunk was on web.js **/
/** chunk id: 838331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A7: () => T,
  hQ: () => N,
  lo: () => P,
  yn: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk742746 = require("./742746.js"),
  Chunk326452 = require("./326452.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792323 = require("./792323.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = y(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let O = "data-listbox-item-id",
  v = 40,
  I = Object.freeze({
    STANDARD: Chunk792323.selected,
    BRAND: Chunk792323.selectedBrand
  });

function T(e) {
  let [t, n] = i.useState(() => new Set(e));
  return [t, i.useCallback(e => {
    n(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, [])]
}

function S(e) {
  let [t, n] = i.useState(() => new Set(null != e ? [e] : true));
  return [t, i.useCallback(e => {
    n(new Set([e]))
  }, [])]
}

function A(e) {
  return String(e)
}
let C = Chunk647438.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: A
});

function N(e) {
  let {
    placeholder: t,
    children: n,
    value: a,
    onChange: d,
    className: h,
    listClassName: g,
    "aria-label": y,
    multiSelect: I = false,
    autoFocus: T = false,
    maxVisibleItems: S = 5,
    itemToString: N = A,
    emptyStateText: R,
    emptyStateHeader: P,
    onQueryChange: w
  } = e, [D, x] = i.useState(""), L = i.useCallback(e => {
    x(e), null == w || w(e)
  }, [w]), [j] = i.useState(true), [M, k] = i.useState(null), U = i.useId(), G = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(O, '="').concat(M, '"]')),
      t = G.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [M]);
  let B = n(D),
    Z = 0 === B.length,
    F = null != P ? P : _.intl.string(_.t["4o4z3d"]),
    V = i.useId(),
    H = i.useCallback(() => new Promise(e => {
      let t = G.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    Y = i.useCallback(() => new Promise(e => {
      let t = G.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    W = i.useCallback((e, t) => {
      k(t);
      let n = document.querySelector(e),
        r = G.current;
      null != r && null != n && r.scrollIntoViewNode({
        node: n
      })
    }, []),
    K = (0, s.ZP)({
      id: V,
      isEnabled: true,
      useVirtualFocus: true,
      scrollToStart: H,
      scrollToEnd: Y,
      setFocus: W
    });
  return (0, r.jsx)(l.bG, {
    navigator: K,
    children: (0, r.jsx)(l.SJ, {
      children: e => {
        var {
          ref: n,
          onKeyDown: i
        } = e, s = b(e, ["ref", "onKeyDown"]);
        return (0, r.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": y,
          "aria-expanded": j,
          "aria-controls": j ? U : true,
          "aria-owns": U,
          "aria-haspopup": "listbox",
          className: o()(p.combobox, h),
          children: [(0, r.jsx)("div", {
            className: p.header,
            children: (0, r.jsx)(u.E, {
              size: "sm",
              autoFocus: T,
              placeholder: t,
              query: D,
              onChange: L,
              onKeyDown: i,
              onBlur: () => k(null),
              onClear: () => L(""),
              inputProps: {
                "aria-multiline": false,
                "aria-activedescendant": null != M ? M : true
              }
            })
          }), (0, r.jsx)("div", {
            children: j && (Z ? (0, r.jsxs)("div", {
              className: p.empty,
              children: [(0, r.jsx)(f.X6q, {
                variant: "heading-md/semibold",
                children: F
              }), (0, r.jsx)(f.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: null != R ? R : _.intl.string(_.t.QwSXv7)
              })]
            }) : (0, r.jsx)(C.Provider, {
              value: {
                activeDescendant: M,
                selected: a,
                setSelected: d,
                itemToString: N
              },
              children: (0, r.jsx)(c.Tv, E(m({}, s), {
                style: {
                  maxHeight: S * (v + 6)
                },
                "aria-multiselectable": I,
                id: U,
                ref: G,
                className: o()(p.list, p.scroller, g),
                sections: [B.length],
                sectionHeight: 0,
                rowHeight: v,
                renderRow: e => {
                  let {
                    row: t
                  } = e;
                  return B[t]
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
let R = Chunk647438.createContext(null);

function P(e) {
  var t, {
      value: n,
      children: a,
      disabled: s = false,
      selectedColor: c = I.STANDARD
    } = e,
    u = b(e, ["value", "children", "disabled", "selectedColor"]);
  let {
    activeDescendant: d,
    selected: _,
    setSelected: h,
    itemToString: g
  } = i.useContext(C), y = g(n), v = d === y, T = null != (t = null == u ? true : u.selected) ? t : _.has(n), S = (0, l.JA)(y);
  return (0, r.jsx)(f.P3F, E(m({
    tag: "li",
    id: y,
    onClick: () => s ? null : h(n),
    [O]: n,
    className: o()(p.item, {
      [p.focused]: v,
      [c]: T,
      [p.disabled]: s
    })
  }, S), {
    role: "option",
    "aria-selected": T,
    "aria-disabled": s,
    children: (0, r.jsx)(R.Provider, {
      value: n,
      children: a
    })
  }))
}
P.Colors = I, P.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: p.itemLabel,
    children: t
  })
}, P.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: p.itemCheckbox,
    children: t
  })
}, P.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = i.useContext(C), a = i.useContext(R);
  return (0, r.jsx)("span", {
    className: p.itemCheckbox,
    children: (0, r.jsx)(d.$q, {
      displayOnly: true,
      value: null != t ? t : null != a && n.has(a),
      type: d.M0.INVERTED,
      size: 20
    })
  })
}, P.Checkmark = function() {
  let {
    selected: e
  } = Chunk647438.useContext(C), t = Chunk647438.useContext(R);
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