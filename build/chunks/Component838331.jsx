/** Chunk was on web.js **/
/** chunk id: 838331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A7: () => I,
  hQ: () => C,
  lo: () => R,
  yn: () => T
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk326452 = require("./326452.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk792323 = require("./792323.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = "data-listbox-item-id",
  O = 40,
  v = Object.freeze({
    STANDARD: Chunk792323.selected,
    BRAND: Chunk792323.selectedBrand
  });

function I(e) {
  let [t, n] = i.useState(() => new Set(e));
  return [t, i.useCallback(e => {
    n(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, [])]
}

function T(e) {
  let [t, n] = i.useState(() => new Set(null != e ? [e] : true));
  return [t, i.useCallback(e => {
    n(new Set([e]))
  }, [])]
}

function S(e) {
  return String(e)
}
let A = Chunk647438.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: S
});

function C(e) {
  let {
    placeholder: t,
    children: n,
    value: a,
    onChange: u,
    className: p,
    listClassName: m,
    "aria-label": b,
    multiSelect: v = false,
    autoFocus: I = false,
    maxVisibleItems: T = 5,
    itemToString: C = S,
    emptyStateText: N,
    emptyStateHeader: R,
    onQueryChange: P
  } = e, [w, D] = i.useState(""), L = i.useCallback(e => {
    D(e), null == P || P(e)
  }, [P]), [x] = i.useState(true), [j, M] = i.useState(null), k = i.useId(), U = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(y, '="').concat(j, '"]')),
      t = U.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [j]);
  let G = n(w),
    B = 0 === G.length,
    Z = null != R ? R : f.intl.string(f.t["4o4z3d"]),
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
      M(t);
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
        } = e, s = E(e, ["ref", "onKeyDown"]);
        return (0, r.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": b,
          "aria-expanded": x,
          "aria-controls": x ? k : true,
          "aria-owns": k,
          "aria-haspopup": "listbox",
          className: o()(_.combobox, p),
          children: [(0, r.jsx)("div", {
            className: _.header,
            children: (0, r.jsx)(c.E, {
              size: "sm",
              autoFocus: I,
              placeholder: t,
              query: w,
              onChange: L,
              onKeyDown: i,
              onBlur: () => M(null),
              onClear: () => L(""),
              inputProps: {
                "aria-multiline": false,
                "aria-activedescendant": null != j ? j : true
              }
            })
          }), (0, r.jsx)("div", {
            children: x && (B ? (0, r.jsxs)("div", {
              className: _.empty,
              children: [(0, r.jsx)(d.X6q, {
                variant: "heading-md/semibold",
                children: Z
              }), (0, r.jsx)(d.Text, {
                color: "text-muted",
                variant: "text-md/normal",
                children: null != N ? N : f.intl.string(f.t.QwSXv7)
              })]
            }) : (0, r.jsx)(A.Provider, {
              value: {
                activeDescendant: j,
                selected: a,
                setSelected: u,
                itemToString: C
              },
              children: (0, r.jsx)(d.Tvr, g(h({}, s), {
                style: {
                  maxHeight: T * (O + 6)
                },
                "aria-multiselectable": v,
                id: k,
                ref: U,
                className: o()(_.list, _.scroller, m),
                sections: [G.length],
                sectionHeight: 0,
                rowHeight: O,
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
let N = Chunk647438.createContext(null);

function R(e) {
  var t, {
      value: n,
      children: a,
      disabled: s = false,
      selectedColor: c = v.STANDARD
    } = e,
    u = E(e, ["value", "children", "disabled", "selectedColor"]);
  let {
    activeDescendant: f,
    selected: p,
    setSelected: m,
    itemToString: b
  } = i.useContext(A), O = b(n), I = f === O, T = null != (t = null == u ? true : u.selected) ? t : p.has(n), S = (0, l.JA)(O);
  return (0, r.jsx)(d.P3F, g(h({
    tag: "li",
    id: O,
    onClick: () => s ? null : m(n),
    [y]: n,
    className: o()(_.item, {
      [_.focused]: I,
      [c]: T,
      [_.disabled]: s
    })
  }, S), {
    role: "option",
    "aria-selected": T,
    "aria-disabled": s,
    children: (0, r.jsx)(N.Provider, {
      value: n,
      children: a
    })
  }))
}
R.Colors = v, R.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: _.itemLabel,
    children: t
  })
}, R.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: _.itemCheckbox,
    children: t
  })
}, R.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = i.useContext(A), a = i.useContext(N);
  return (0, r.jsx)("span", {
    className: _.itemCheckbox,
    children: (0, r.jsx)(u.$q, {
      displayOnly: true,
      value: null != t ? t : null != a && n.has(a),
      type: u.M0.INVERTED,
      size: 20
    })
  })
}, R.Checkmark = function() {
  let {
    selected: e
  } = Chunk647438.useContext(A), t = Chunk647438.useContext(N);
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