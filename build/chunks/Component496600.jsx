/** Chunk was on web.js **/
/** chunk id: 496600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ct: () => R,
  px: () => w,
  uz: () => N
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk423802 = require("./423802.js"),
  Chunk753187 = require("./753187.jsx"),
  Chunk993517 = require("./993517.js"),
  Chunk793030 = require("./793030.js"),
  Chunk463208 = require("./463208.jsx"),
  Chunk35916 = require("./35916.jsx"),
  Chunk199823 = require("./199823.jsx"),
  Chunk747344 = require("./747344.js"),
  Chunk626921 = require("./626921.jsx"),
  Chunk483753 = require("./483753.js"),
  Chunk490340 = require("./490340.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680765 = require("./680765.js"),
  Chunk430490 = require("./430490.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = {
  keys: ["label"]
};

function N(e) {
  var {
    children: t
  } = e, n = S(e, ["children"]);
  let {
    selectionMode: a,
    disabled: o,
    readOnly: s,
    loading: l,
    closeOnSelect: c,
    options: u,
    renderOption: d,
    onSelectionChange: f,
    value: _,
    defaultValue: h
  } = n, g = true !== _, E = i.useId(), [b, y] = i.useState({
    isInitialized: false,
    isOpen: true,
    activeDescendantIndex: null,
    listItems: [],
    filteredItems: [],
    selectedItems: new Set,
    longestLabelCharCount: 5,
    width: "0px"
  }), O = b.selectedItems.size > 0, I = !b.isInitialized || true === o || true === s || true === l, A = i.useCallback(e => null != d ? d(e) : e, [d]);
  i.useLayoutEffect(() => {
    let e = new Set,
      t = 6,
      n = u.map(n => {
        let r = A(n);
        return t = Math.max(t, r.label.length), !b.isInitialized && (null != _ || null != h) && (0, m.tw)(r.value, null != _ ? _ : h) && e.add(r), r
      });
    y(r => T(v({}, r), {
      listItems: n,
      filteredItems: n,
      isInitialized: true,
      longestLabelCharCount: t,
      selectedItems: r.isInitialized ? r.selectedItems : e
    }))
  }, [u, A]), i.useEffect(() => {
    !I && g && (null == _ ? y(e => T(v({}, e), {
      selectedItems: new Set
    })) : y(e => T(v({}, e), {
      selectedItems: new Set(e.listItems.filter(e => (0, m.tw)(e.value, _)))
    })))
  }, [_, I, g]);
  let C = i.useCallback(e => {
    if (I) return;
    let t = Array.from(e);
    if ("multiple" === a && t.length < 1) f(null);
    else if ("multiple" === a) f(new Set(t.map(e => e.value)));
    else {
      var n, r;
      f(null != (r = null == (n = t[0]) ? true : n.value) ? r : null)
    }
    if (c) return void y(t => T(v({}, t), {
      selectedItems: e,
      filteredItems: t.listItems,
      query: "",
      isOpen: false,
      activeDescendantIndex: null
    }));
    y(t => T(v({}, t), {
      selectedItems: e
    }))
  }, [I, a, f, y, c]);
  return (0, r.jsx)(p.Z.Provider, {
    value: v({
      state: b,
      setState: y,
      listBoxId: E,
      isInert: I,
      hasValue: O,
      handleSelectionChange: C
    }, n),
    children: t
  })
}

function R(e) {
  var {
    hideLabel: t,
    description: n,
    helperText: i,
    errorMessage: a,
    successMessage: o
  } = e, s = S(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage"]);
  let {
    id: c,
    required: u,
    label: d
  } = s;
  return (0, r.jsx)(l.N, {
    id: c,
    required: u,
    label: d,
    hideLabel: t,
    description: n,
    helperText: i,
    errorMessage: a,
    successMessage: o,
    children: (0, r.jsx)(P, v({}, s))
  })
}

function P(e) {
  var t;
  let {
    id: n,
    autoFocus: a,
    placeholder: l = E.intl.string(g.default["A+pfVV"]),
    name: f,
    form: O,
    showChevronButton: I = false,
    onChange: S,
    onFocus: A,
    onBlur: N,
    onKeyDown: R
  } = e, P = i.useRef(null), w = i.useRef(null), D = i.useContext(c.U), {
    state: L,
    setState: x,
    selectionMode: j,
    disabled: M,
    readOnly: k,
    loading: U,
    clearable: G,
    required: B,
    listBoxId: Z,
    shouldFocusWrap: F,
    matchSorterOptions: V,
    customMatchSorter: H,
    isInert: Y,
    hasValue: W,
    handleSelectionChange: K,
    onSelectionChange: z
  } = (0, p.T)(), q = i.useCallback(() => {
    Y || x(e => T(v({}, e), {
      isOpen: !e.isOpen
    }))
  }, [Y, x]), X = i.useCallback(() => {
    var e;
    x(e => T(v({}, e), {
      selectedItems: new Set
    })), z(null), null == (e = P.current) || e.focus()
  }, [z, x]), Q = i.useCallback(e => {
    x(e => T(v({}, e), {
      isOpen: true
    })), null == A || A(e)
  }, [A, x]), J = i.useCallback(e => {
    x(e => T(v({}, e), {
      isOpen: false
    })), null == N || N(e)
  }, [N, x]), $ = i.useCallback(e => {
    let t = L.filteredItems.length;
    switch (e.key) {
      case "ArrowDown":
        if (0 === t) return;
        e.preventDefault(), x(e => {
          let n = 0;
          return null !== e.activeDescendantIndex && (n = e.activeDescendantIndex + 1) >= t && (n = F ? 0 : e.activeDescendantIndex), T(v({}, e), {
            isOpen: true,
            activeDescendantIndex: n
          })
        });
        break;
      case "ArrowUp":
        if (0 === t) return;
        e.preventDefault(), x(e => {
          let n = 0;
          return null !== e.activeDescendantIndex && (n = e.activeDescendantIndex - 1) < 0 && (n = F ? t - 1 : 0), T(v({}, e), {
            isOpen: true,
            activeDescendantIndex: n
          })
        });
        break;
      case "Enter":
        if (e.preventDefault(), e.stopPropagation(), null === L.activeDescendantIndex || 0 === t) return;
        let n = L.filteredItems[L.activeDescendantIndex];
        if (true === B && 1 === L.selectedItems.size && L.selectedItems.has(n)) return;
        K((0, m.xj)(j, L.selectedItems, n));
        break;
      case "Escape":
        W && G && (e.preventDefault(), e.stopPropagation(), X())
    }
    null == R || R(e)
  }, [x, j, B, G, W, F, R, X, K, L.activeDescendantIndex, L.selectedItems, L.filteredItems]), ee = i.useCallback(e => {
    let t = e.target.value;
    x(e => {
      let n = e.listItems;
      return "" !== t && (n = null != H ? H(n, t) : (0, s.Lu)(n, t, null != V ? V : C)), T(v({}, e), {
        query: t,
        isOpen: true,
        activeDescendantIndex: null,
        filteredItems: n
      })
    }), null == S || S(e)
  }, [S, x, H, V]), et = null != L.activeDescendantIndex ? (0, m.cA)(Z, L.activeDescendantIndex) : true;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.q, {
      ref: w,
      disabled: M,
      readOnly: k,
      loading: U,
      clearable: G,
      fullWidth: true,
      showChevronButton: I,
      isOpen: L.isOpen,
      isInert: Y,
      hasValue: W,
      width: L.width,
      handleToggle: q,
      handleClear: X,
      children: (0, r.jsx)(u.tEY, {
        ringTarget: w,
        children: (0, r.jsx)(d.I, {
          ref: P,
          id: n,
          className: o()(y.input, b.comboBoxInput),
          autoFocus: a,
          placeholder: l,
          role: "combobox",
          disabled: M,
          readOnly: k,
          "aria-haspopup": "listbox",
          "aria-autocomplete": "list",
          "aria-busy": U,
          "aria-controls": Z,
          "aria-expanded": L.isOpen,
          "aria-activedescendant": et,
          "aria-labelledby": null == D ? true : D.labelId,
          "aria-describedby": null == D ? true : D.describedById,
          "aria-errormessage": null == D ? true : D.errorMessageId,
          "aria-invalid": (null == D ? true : D.errorMessageId) != null,
          value: null != (t = L.query) ? t : "",
          onChange: ee,
          onFocus: Q,
          onBlur: J,
          onKeyDown: $
        })
      })
    }), (0, r.jsx)(_.M, {
      name: f,
      form: O,
      disabled: Y,
      selectionMode: j,
      selectedItems: L.selectedItems,
      onSelectionChange: K,
      listItems: L.listItems
    })]
  })
}

function w(e) {
  var t;
  let {
    renderListItem: n,
    renderEmptyState: i
  } = e, {
    state: a,
    selectionMode: o,
    listBoxId: s,
    required: l,
    disabled: c,
    handleSelectionChange: u
  } = (0, p.T)();
  return (0, r.jsx)(f.w, {
    id: s,
    required: l,
    disabled: c,
    items: null != (t = a.filteredItems) ? t : a.listItems,
    selectionMode: o,
    selectedItems: a.selectedItems,
    onSelectionChange: u,
    activeDescendantIndex: a.activeDescendantIndex,
    renderListItem: n,
    renderEmptyState: i
  })
}