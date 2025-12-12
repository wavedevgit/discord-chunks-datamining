/** Chunk was on web.js **/
/** chunk id: 496600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ct: () => M,
  px: () => U,
  uz: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk423802 = require("./423802.js"),
  Chunk61247 = require("./61247.js"),
  Chunk483566 = require("./483566.jsx"),
  Chunk590154 = require("./590154.js"),
  Chunk448814 = require("./448814.jsx"),
  Chunk194255 = require("./194255.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk463208 = require("./463208.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk199823 = require("./199823.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk747344 = require("./747344.js"),
  Chunk626921 = require("./626921.jsx"),
  Chunk415540 = require("./415540.js"),
  Chunk483753 = require("./483753.js"),
  Chunk347583 = require("./347583.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680765 = require("./680765.js"),
  Chunk430490 = require("./430490.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = x(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function x(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let L = {
  keys: ["label"]
};

function j(e) {
  var {
    children: t,
    isCollapsible: n = false,
    maxOptionsVisible: o = 5,
    isOpen: a,
    setIsOpen: l,
    options: c
  } = e, u = D(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]);
  let {
    selectionMode: d,
    disabled: f,
    readOnly: p,
    closeOnSelect: _,
    formatOption: m,
    onSelectionChange: h,
    value: g,
    customMatchSorter: E,
    matchSorterOptions: b,
    required: O
  } = u, S = i.useId(), I = i.useRef(null), [T, C] = i.useState(null), [A, N] = i.useState(false), [R, w] = i.useState(""), [x, j] = i.useState(""), {
    options: M,
    loading: k,
    onQueryChange: U
  } = (0, v.U)({
    active: null == a || a,
    options: c,
    renderOption: m
  }), G = i.useCallback((e, t) => {
    j(e), w(null != t ? t : e)
  }, []);
  i.useEffect(() => {
    U(R)
  }, [U, R]), i.useEffect(() => {
    a || C(null)
  }, [a, C]);
  let Z = i.useMemo(() => "" === R ? M : null != E ? E(M, R) : (0, s.Lu)(M, R, null != b ? b : L), [M, R, E, b]),
    F = i.useRef(true),
    B = i.useMemo(() => ("single" === d && (F.current = M.find(e => e.value === g)), null == g || Array.isArray(g) && 0 === g.length) ? [] : (Array.isArray(g) ? g : [g]).map(e => M.find(t => t.value === e)).filter(e => null != e), [g, M, d]);
  i.useEffect(() => {
    if (a) {
      var e, t;
      G(null != (t = null == (e = F.current) ? true : e.label) ? t : "", "")
    }
  }, [a, G]);
  let V = f || p,
    H = i.useCallback(e => {
      var t, n, r, i;
      if (V || O && 0 === e.length) return;
      let o = Array.from(e);
      "multiple" === d && o.length < 1 ? h([]) : "multiple" === d ? h(o.map(e => e.value)) : h(null != (n = null == (t = o[0]) ? true : t.value) ? n : null), _ && a && (null == l || l(false)), "single" === d && G(null != (i = null == (r = o[0]) ? true : r.label) ? i : "", ""), N(false)
    }, [V, d, h, _, a, l, O, G]),
    Y = B.length > 0;
  return (0, r.jsx)(y.Z.Provider, {
    value: P({
      activeDescendantIndex: T,
      setActiveDescendantIndex: C,
      listBoxId: S,
      inputFieldRef: I,
      isInert: V,
      isCollapsible: n,
      hasValue: Y,
      value: g,
      options: M,
      filteredOptions: Z,
      selectedOptions: B,
      maxOptionsVisible: o,
      query: x,
      setQuery: G,
      loading: k,
      handleSelectionChange: H,
      isOpen: a,
      setIsOpen: l,
      isEditing: A,
      setIsEditing: N
    }, u),
    children: t
  })
}

function M(e) {
  var {
    ref: t
  } = e, n = D(e, ["ref"]);
  let {
    fieldProps: o,
    props: a
  } = (0, c.X)(n), s = (0, h.dQu)(_.Z.modules.select.MAX_WIDTH), l = i.useMemo(() => ({
    horizontalControlColumnWidth: "minmax(".concat(s, ", auto)")
  }), [s]);
  return (0, r.jsx)(c.g, w(P({}, o), {
    "data-mana-component": "combobox",
    layoutConfig: l,
    children: (0, r.jsx)(k, w(P({}, a), {
      ref: t
    }))
  }))
}

function k(e) {
  let {
    id: t,
    autoFocus: n,
    placeholder: o = T.intl.string(I.default["A+pfVR"]),
    hideTags: s,
    name: c,
    form: d,
    showChevronButton: f = false,
    onQueryChange: _,
    onFocus: h,
    onBlur: g,
    onKeyDown: v,
    wrapTags: N,
    ref: R
  } = e, D = i.useRef(null), x = i.useRef(null), L = i.useRef(null), j = i.useContext(u.z), {
    activeDescendantIndex: M,
    setActiveDescendantIndex: k,
    selectionMode: U,
    disabled: G,
    readOnly: Z,
    loading: F,
    clearable: B,
    required: V,
    listBoxId: H,
    inputFieldRef: Y,
    shouldFocusWrap: W,
    isInert: K,
    isCollapsible: z,
    hasValue: q,
    handleSelectionChange: Q,
    onSelectionChange: X,
    isOpen: J,
    setIsOpen: $,
    options: ee,
    selectedOptions: et,
    filteredOptions: en,
    query: er,
    setQuery: ei,
    isEditing: eo,
    setIsEditing: ea
  } = (0, y.T)(), es = "multiple" === U && q, el = null != M ? (0, S.cA)(H, M) : true;
  i.useEffect(() => {
    var e;
    null != el && (null == (e = document.getElementById(el)) || e.scrollIntoView({
      behavior: "instant",
      block: "nearest"
    }))
  }, [el]);
  let ec = i.useCallback(() => {
      K || null == $ || $(!J)
    }, [K, J, $]),
    eu = i.useCallback(() => {
      var e;
      "multiple" === U ? X([]) : X(null), ei(""), null == (e = x.current) || e.focus()
    }, [X, U, ei]),
    ed = i.useCallback(e => {
      var t, n, r;
      ea(true), null == h || h(e), null == (t = x.current) || t.setSelectionRange(null != (n = null == er ? true : er.length) ? n : 0, null != (r = null == er ? true : er.length) ? r : 0)
    }, [h, ea, er]),
    ef = i.useCallback(() => {
      K || null == $ || $(true)
    }, [$, K]),
    ep = i.useCallback(e => {
      var t;
      (null == (t = e.relatedTarget) ? true : t.closest('[data-list-id="'.concat(H, '"]'))) == null && (ea(false), null == $ || $(false), null == g || g(e))
    }, [g, $, H, ea]);
  i.useEffect(() => {
    es && !N && (L.current = setTimeout(() => {
      var e;
      null == (e = x.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }, 10))
  }, [et, es, N]);
  let e_ = i.useCallback(() => {
      var e;
      K || (null == $ || $(true), null == (e = x.current) || e.focus())
    }, [$, K]),
    em = i.useCallback(() => {
      var e;
      null == (e = x.current) || e.select()
    }, []),
    eh = i.useCallback(e => {
      if (K) return;
      let t = Array.from(e)[0];
      Q(et.filter(e => e.id !== t))
    }, [Q, et, K]),
    eg = i.useCallback(e => {
      let t = en.length,
        n = 1;
      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          if (n = "PageDown" === e.key ? 10 : 1, 0 === t || (e.preventDefault(), null == $ || $(true), e.altKey)) return;
          k(e => {
            if (null === e) return 0;
            let r = e + n;
            return r >= t && W ? 0 : Math.min(r, t - 1)
          });
          break;
        case "ArrowUp":
        case "PageUp":
          if (n = "PageUp" === e.key ? 10 : 1, 0 === t) return;
          e.preventDefault(), k(e => {
            if (null === e) return 0;
            let r = e - n;
            return r < 0 && W ? t - 1 : Math.max(r, 0)
          }), null == $ || $(true);
          break;
        case "Enter":
          if (e.preventDefault(), e.stopPropagation(), null == M || 0 === t) return;
          let r = en[M];
          if (true === r.disabled || V && 1 === et.length && et.includes(r)) return;
          Q("single" === U ? [r] : (0, S.cq)(U, et, r));
          break;
        case "Backspace":
          if ("multiple" === U && "" === er && et.length > 0 && null != D.current) {
            var i;
            e.preventDefault(), e.stopPropagation(), null == (i = D.current.lastChild) || i.focus()
          }
          break;
        case "Escape":
          q && B && (e.preventDefault(), e.stopPropagation(), eu());
          break;
        case "Home":
          if (e.preventDefault(), 0 === t) return;
          k(0);
          break;
        case "End":
          if (e.preventDefault(), 0 === t) return;
          k(t - 1)
      }
      null == v || v(e)
    }, [U, V, B, q, W, v, eu, Q, et, er, $, en, M, k]),
    eE = i.useCallback(e => {
      ea(true), ei(e.target.value), null == $ || $(true), null == _ || _(e), k(null)
    }, [_, ea, ei, $, k]),
    eb = i.useMemo(() => {
      if (0 === et.length) return null;
      if ("single" === U) {
        if (eo) return null;
        let e = Array.from(et)[0];
        return (0, r.jsx)("div", {
          className: C.singleSelectOption,
          children: (0, r.jsx)(b.W, w(P({}, e), {
            onClick: em,
            "aria-hidden": true,
            inInput: true
          }))
        })
      }
      if (s) return null;
      let e = Array.from(et).map(e => {
        let t;
        return null != e.leading && (t = e.leading), {
          id: e.id,
          label: e.label,
          icon: t,
          isDisabled: G || e.disabled,
          accessibilityHint: T.intl.string(I.default["/Y7vRd"])
        }
      });
      return (0, r.jsx)(p.QSK, {
        listRef: D,
        label: T.intl.string(I.default.VMNfsY),
        items: e,
        layout: "inline",
        onRemove: eh
      })
    }, [U, G, em, eh, eo, et, s]),
    ey = (0, l.Z)(Y, R);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(O.q, {
      ref: ey,
      disabled: G,
      readOnly: Z,
      loading: F,
      clearable: B,
      fullWidth: true,
      showChevronButton: f,
      isOpen: !!J,
      isInert: K,
      hasValue: q,
      hasError: (null == j ? true : j.errorMessageId) != null,
      handleToggle: ec,
      handleClear: eu,
      children: (0, r.jsx)("div", {
        className: a()(C.comboBoxInputScroller, {
          [C.hasTags]: es,
          [C.wrapTags]: es && N
        }),
        onClick: e_,
        children: (0, r.jsxs)("div", {
          className: C.comboBoxInputContainer,
          children: [eb, (0, r.jsx)(p.tEY, {
            ringTarget: Y,
            children: (0, r.jsx)(m.I, {
              ref: x,
              id: t,
              className: a()(A.input, C.comboBoxInput, {
                [C.hiddenVisually]: "single" === U && q && !eo
              }),
              autoFocus: n,
              placeholder: o,
              role: "combobox",
              disabled: G,
              readOnly: Z,
              "aria-haspopup": "listbox",
              "aria-autocomplete": "list",
              "aria-busy": F,
              "aria-controls": H,
              "aria-expanded": !z || J,
              "aria-activedescendant": el,
              "aria-labelledby": "".concat(null == j ? true : j.labelId),
              "aria-describedby": "".concat(null == j ? true : j.describedById),
              "aria-errormessage": null == j ? true : j.errorMessageId,
              "aria-invalid": (null == j ? true : j.errorMessageId) != null,
              value: null != er ? er : "",
              onChange: eE,
              onFocus: ed,
              onBlur: ep,
              onKeyDown: eg,
              onClick: ef
            })
          })]
        })
      })
    }), (0, r.jsx)(E.M, {
      name: c,
      form: d,
      disabled: K,
      selectionMode: U,
      selectedItems: et,
      onSelectionChange: Q,
      listItems: ee
    })]
  })
}

function U(e) {
  let {
    renderListItem: t,
    renderEmptyState: n,
    maxVisibleItems: o = 5
  } = e, {
    filteredOptions: a,
    selectedOptions: s,
    options: l,
    activeDescendantIndex: c,
    selectionMode: u,
    listBoxId: _,
    required: m,
    disabled: h,
    handleSelectionChange: E,
    setIsOpen: b,
    query: O,
    loading: v
  } = (0, y.T)(), {
    i18n: S
  } = i.useContext(p.KJG);
  return (0, r.jsx)(d.w, {
    id: _,
    required: m,
    disabled: h,
    items: null != a ? a : l,
    selectionMode: u,
    selectedItems: s,
    onSelectionChange: E,
    activeDescendantIndex: c,
    renderListItem: t,
    renderEmptyState: null != n ? n : () => (0, r.jsx)(f.z, {
      message: null == O || "" === O ? S.LISTBOX_EMPTY_STATE : S.LISTBOX_EMPTY_STATE_WITH_QUERY(O)
    }),
    maxVisibleItems: o,
    loading: v,
    onFocus: () => {
      g.Z.keyboardModeEnabled && (null == b || b(false))
    }
  })
}