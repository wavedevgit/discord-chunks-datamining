/** Chunk was on web.js **/
/** chunk id: 838331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A7: () => A,
  hQ: () => P,
  lo: () => D,
  yn: () => N
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk924826 = require("./924826.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk178940 = require("./178940.jsx"),
  Chunk1561 = require("./1561.jsx"),
  Chunk742746 = require("./742746.js"),
  Chunk326452 = require("./326452.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk291228 = require("./291228.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = "data-listbox-item-id",
  T = 40,
  S = Object.freeze({
    STANDARD: Chunk291228.selected,
    BRAND: Chunk291228.selectedBrand
  });

function A(e) {
  let [t, n] = i.useState(() => new Set(e));
  return [t, i.useCallback(e => {
    n(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, [])]
}

function N(e) {
  let [t, n] = i.useState(() => new Set(null != e ? [e] : true));
  return [t, i.useCallback(e => {
    n(new Set([e]))
  }, [])]
}

function C(e) {
  return String(e)
}
let R = Chunk73800.createContext({
  activeDescendant: null,
  selected: new Set,
  setSelected: () => null,
  itemToString: C
});

function P(e) {
  let {
    placeholder: t,
    children: n,
    value: o,
    onChange: c,
    className: u,
    listClassName: g,
    "aria-label": b,
    multiSelect: v = false,
    autoFocus: S = false,
    maxVisibleItems: A = 5,
    itemToString: N = C,
    showScrollbar: P = false
  } = e, [w, D] = i.useState(""), [L] = i.useState(true), [x, M] = i.useState(null), k = i.useId(), j = i.useRef(null);
  i.useLayoutEffect(() => {
    let e = document.querySelector("[".concat(I, '="').concat(x, '"]')),
      t = j.current;
    null != t && null != e && t.scrollIntoViewNode({
      node: e,
      padding: 12
    })
  }, [x]);
  let U = n(w),
    G = 0 === U.length,
    B = i.useId(),
    Z = i.useCallback(() => new Promise(e => {
      let t = j.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    F = i.useCallback(() => new Promise(e => {
      let t = j.current;
      if (null == t) return e();
      t.scrollToTop({
        callback: () => requestAnimationFrame(() => e())
      })
    }), []),
    V = i.useCallback((e, t) => {
      M(t);
      let n = document.querySelector(e),
        r = j.current;
      null != r && null != n && r.scrollIntoViewNode({
        node: n
      })
    }, []),
    H = (0, s.ZP)({
      id: B,
      isEnabled: true,
      useVirtualFocus: true,
      scrollToStart: Z,
      scrollToEnd: F,
      setFocus: V
    }),
    Y = P ? d.Tv : d.lW;
  return (0, r.jsx)(l.bG, {
    navigator: H,
    children: (0, r.jsx)(l.SJ, {
      children: e => {
        var {
          ref: n,
          onKeyDown: i
        } = e, s = O(e, ["ref", "onKeyDown"]);
        return (0, r.jsxs)("div", {
          ref: n,
          role: "combobox",
          "aria-label": b,
          "aria-expanded": L,
          "aria-controls": L ? k : true,
          "aria-owns": k,
          "aria-haspopup": "listbox",
          className: a()(m.combobox, u),
          children: [(0, r.jsx)(f.E, {
            autoFocus: S,
            placeholder: t,
            query: w,
            onChange: D,
            onKeyDown: i,
            onBlur: () => M(null),
            onClear: () => D(""),
            className: a()({
              [m.searchWithScrollbar]: P
            }),
            inputProps: {
              "aria-multiline": false,
              "aria-activedescendant": null != x ? x : true
            }
          }), (0, r.jsx)("div", {
            children: L && (G ? (0, r.jsxs)("div", {
              className: m.empty,
              children: [(0, r.jsx)(p.X6q, {
                variant: "heading-md/semibold",
                children: h.intl.string(h.t["4o4z3d"])
              }), (0, r.jsx)(_.x, {
                color: "text-muted",
                variant: "text-md/normal",
                children: h.intl.string(h.t.QwSXv7)
              })]
            }) : (0, r.jsx)(R.Provider, {
              value: {
                activeDescendant: x,
                selected: o,
                setSelected: c,
                itemToString: N
              },
              children: (0, r.jsx)(Y, y(E({}, s), {
                style: {
                  maxHeight: A * (T + 6)
                },
                "aria-multiselectable": v,
                id: k,
                ref: j,
                className: a()(m.list, g, {
                  [m.scroller]: P
                }),
                sections: [U.length],
                sectionHeight: 0,
                rowHeight: T,
                renderRow: e => {
                  let {
                    row: t
                  } = e;
                  return U[t]
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
let w = Chunk73800.createContext(null);

function D(e) {
  var t, {
      value: n,
      children: o,
      disabled: s = false,
      selectedColor: c = S.STANDARD
    } = e,
    d = O(e, ["value", "children", "disabled", "selectedColor"]);
  let {
    activeDescendant: f,
    selected: _,
    setSelected: p,
    itemToString: h
  } = i.useContext(R), g = h(n), b = f === g, v = null != (t = null == d ? true : d.selected) ? t : _.has(n), T = (0, l.JA)(g);
  return (0, r.jsx)(u.P, y(E({
    tag: "li",
    id: g,
    onClick: () => s ? null : p(n),
    [I]: n,
    className: a()(m.item, {
      [m.focused]: b,
      [c]: v,
      [m.disabled]: s
    })
  }, T), {
    role: "option",
    "aria-selected": v,
    "aria-disabled": s,
    children: (0, r.jsx)(w.Provider, {
      value: n,
      children: o
    })
  }))
}
D.Colors = S, D.Label = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: m.itemLabel,
    children: t
  })
}, D.Icon = function(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("span", {
    className: m.itemCheckbox,
    children: t
  })
}, D.Checkbox = function(e) {
  let {
    checked: t
  } = e, {
    selected: n
  } = i.useContext(R), o = i.useContext(w);
  return (0, r.jsx)("span", {
    className: m.itemCheckbox,
    children: (0, r.jsx)(c.X, {
      displayOnly: true,
      value: null != t ? t : null != o && n.has(o),
      type: c.X.Types.INVERTED,
      size: 20
    })
  })
}, D.Checkmark = function() {
  let {
    selected: e
  } = Chunk73800.useContext(R), t = Chunk73800.useContext(w);
  return module.has(exports) ? (0, Chunk255367.jsx)("span", {
    className: Chunk291228.itemCheckbox,
    children: (0, Chunk255367.jsx)(Chunk481060.owK, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    })
  }) : null
}