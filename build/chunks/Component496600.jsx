/** Chunk was on web.js **/
/** chunk id: 496600, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ct: () => x,
  px: () => k,
  uz: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk423802 = require("./423802.js"),
  Chunk61247 = require("./61247.js"),
  Chunk483566 = require("./483566.jsx"),
  Chunk590154 = require("./590154.js"),
  Chunk448814 = require("./448814.jsx"),
  Chunk194255 = require("./194255.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk463208 = require("./463208.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk199823 = require("./199823.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk747344 = require("./747344.js"),
  Chunk626921 = require("./626921.jsx"),
  Chunk415540 = require("./415540.js"),
  Chunk483753 = require("./483753.js"),
  Chunk982519 = require("./982519.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680765 = require("./680765.js"),
  Chunk430490 = require("./430490.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let w = {
  keys: ["label"]
};

function L(e) {
  var {
    children: t,
    isCollapsible: n = false,
    maxOptionsVisible: a = 5,
    isOpen: o,
    setIsOpen: l,
    options: c
  } = e, u = P(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]);
  let {
    selectionMode: d,
    disabled: f,
    readOnly: _,
    closeOnSelect: p,
    formatOption: h,
    onSelectionChange: m,
    value: g,
    matchSorterOptions: b,
    required: O
  } = u, v = i.useId(), I = i.useRef(null), [T, S] = i.useState(null), [A, N] = i.useState(false), [R, D] = i.useState(""), [L, x] = i.useState(""), {
    options: M,
    loading: k,
    onQueryChange: j
  } = (0, y.U)({
    active: null == o || o,
    options: c,
    renderOption: h
  }), U = i.useCallback((e, t) => {
    x(e), D(null != t ? t : e)
  }, []);
  i.useEffect(() => {
    j(R)
  }, [j, R]), i.useEffect(() => {
    o || S(null)
  }, [o, S]);
  let G = i.useMemo(() => "" === R ? M : (0, s.Lu)(M, R, null != b ? b : w), [M, R, b]),
    B = i.useRef(true),
    Z = i.useMemo(() => ("single" === d && (B.current = M.find(e => e.value === g)), null == g || Array.isArray(g) && 0 === g.length) ? [] : (Array.isArray(g) ? g : [g]).map(e => M.find(t => t.value === e)).filter(e => null != e), [g, M, d]);
  i.useEffect(() => {
    if (o) {
      var e, t;
      U(null != (t = null == (e = B.current) ? true : e.label) ? t : "", "")
    }
  }, [o, U]);
  let F = f || _,
    V = i.useCallback(e => {
      var t, n, r, i;
      if (F || O && 0 === e.length) return;
      let a = Array.from(e);
      "multiple" === d && a.length < 1 ? m([]) : "multiple" === d ? m(a.map(e => e.value)) : m(null != (n = null == (t = a[0]) ? true : t.value) ? n : null), p && o && (null == l || l(false)), "single" === d && U(null != (i = null == (r = a[0]) ? true : r.label) ? i : "", ""), N(false)
    }, [F, d, m, p, o, l, O, U]),
    H = Z.length > 0;
  return (0, r.jsx)(E.Z.Provider, {
    value: C({
      activeDescendantIndex: T,
      setActiveDescendantIndex: S,
      listBoxId: v,
      inputFieldRef: I,
      isInert: F,
      isCollapsible: n,
      hasValue: H,
      value: g,
      options: M,
      filteredOptions: G,
      selectedOptions: Z,
      maxOptionsVisible: a,
      query: L,
      setQuery: U,
      loading: k,
      handleSelectionChange: V,
      isOpen: o,
      setIsOpen: l,
      isEditing: A,
      setIsEditing: N
    }, u),
    children: t
  })
}

function x(e) {
  var {
    ref: t
  } = e, n = P(e, ["ref"]);
  let {
    fieldProps: i,
    props: a
  } = (0, c.X)(n);
  return (0, r.jsx)(c.g, R(C({}, i), {
    "data-mana-component": "combobox",
    children: (0, r.jsx)(M, R(C({}, a), {
      ref: t
    }))
  }))
}

function M(e) {
  let {
    id: t,
    autoFocus: n,
    placeholder: a = I.intl.string(v.default["A+pfVR"]),
    hideTags: s,
    name: c,
    form: d,
    showChevronButton: f = false,
    onQueryChange: h,
    onFocus: y,
    onBlur: A,
    onKeyDown: N,
    wrapTags: P,
    ref: D
  } = e, w = i.useRef(null), L = i.useRef(null), x = i.useRef(null), M = i.useContext(u.z), {
    activeDescendantIndex: k,
    setActiveDescendantIndex: j,
    selectionMode: U,
    disabled: G,
    readOnly: B,
    loading: Z,
    clearable: F,
    required: V,
    listBoxId: H,
    inputFieldRef: Y,
    shouldFocusWrap: W,
    isInert: K,
    isCollapsible: z,
    hasValue: q,
    handleSelectionChange: X,
    onSelectionChange: Q,
    isOpen: J,
    setIsOpen: $,
    options: ee,
    selectedOptions: et,
    filteredOptions: en,
    query: er,
    setQuery: ei,
    isEditing: ea,
    setIsEditing: eo
  } = (0, E.T)(), es = "multiple" === U && q, el = null != k ? (0, O.cA)(H, k) : true;
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
      "multiple" === U ? Q([]) : Q(null), ei(""), null == (e = L.current) || e.focus()
    }, [Q, U, ei]),
    ed = i.useCallback(e => {
      var t, n, r;
      eo(true), null == y || y(e), null == (t = L.current) || t.setSelectionRange(null != (n = null == er ? true : er.length) ? n : 0, null != (r = null == er ? true : er.length) ? r : 0)
    }, [y, eo, er]),
    ef = i.useCallback(() => {
      K || null == $ || $(true)
    }, [$, K]),
    e_ = i.useCallback(e => {
      var t;
      (null == (t = e.relatedTarget) ? true : t.closest('[data-list-id="'.concat(H, '"]'))) == null && (eo(false), null == $ || $(false), null == A || A(e))
    }, [A, $, H, eo]);
  i.useEffect(() => {
    es && !P && (x.current = setTimeout(() => {
      var e;
      null == (e = L.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }, 10))
  }, [et, es, P]);
  let ep = i.useCallback(() => {
      var e;
      K || (null == $ || $(true), null == (e = L.current) || e.focus())
    }, [$, K]),
    eh = i.useCallback(() => {
      var e;
      null == (e = L.current) || e.select()
    }, []),
    em = i.useCallback(e => {
      if (K) return;
      let t = Array.from(e)[0];
      X(et.filter(e => e.id !== t))
    }, [X, et, K]),
    eg = i.useCallback(e => {
      let t = en.length,
        n = 1;
      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          if (n = "PageDown" === e.key ? 10 : 1, 0 === t || (e.preventDefault(), null == $ || $(true), e.altKey)) return;
          j(e => {
            if (null === e) return 0;
            let r = e + n;
            return r >= t && W ? 0 : Math.min(r, t - 1)
          });
          break;
        case "ArrowUp":
        case "PageUp":
          if (n = "PageUp" === e.key ? 10 : 1, 0 === t) return;
          e.preventDefault(), j(e => {
            if (null === e) return 0;
            let r = e - n;
            return r < 0 && W ? t - 1 : Math.max(r, 0)
          }), null == $ || $(true);
          break;
        case "Enter":
          if (e.preventDefault(), e.stopPropagation(), null == k || 0 === t) return;
          let r = en[k];
          if (true === r.disabled || V && 1 === et.length && et.includes(r)) return;
          X("single" === U ? [r] : (0, O.cq)(U, et, r));
          break;
        case "Backspace":
          if ("multiple" === U && "" === er && et.length > 0 && null != w.current) {
            var i;
            e.preventDefault(), e.stopPropagation(), null == (i = w.current.lastChild) || i.focus()
          }
          break;
        case "Escape":
          q && F && (e.preventDefault(), e.stopPropagation(), eu());
          break;
        case "Home":
          if (e.preventDefault(), 0 === t) return;
          j(0);
          break;
        case "End":
          if (e.preventDefault(), 0 === t) return;
          j(t - 1)
      }
      null == N || N(e)
    }, [U, V, F, q, W, N, eu, X, et, er, $, en, k, j]),
    eE = i.useCallback(e => {
      eo(true), ei(e.target.value), null == $ || $(true), null == h || h(e), j(null)
    }, [h, eo, ei, $, j]),
    eb = i.useMemo(() => {
      if (0 === et.length) return null;
      if ("single" === U) {
        if (ea) return null;
        let e = Array.from(et)[0];
        return (0, r.jsx)("div", {
          className: T.singleSelectOption,
          children: (0, r.jsx)(g.W, R(C({}, e), {
            onClick: eh,
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
          accessibilityHint: I.intl.string(v.default["/Y7vRd"])
        }
      });
      return (0, r.jsx)(_.QSK, {
        listRef: w,
        label: I.intl.string(v.default.VMNfsY),
        items: e,
        layout: "inline",
        onRemove: em
      })
    }, [U, G, eh, em, ea, et, s]),
    ey = (0, l.Z)(Y, D);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.q, {
      ref: ey,
      disabled: G,
      readOnly: B,
      loading: Z,
      clearable: F,
      fullWidth: true,
      showChevronButton: f,
      isOpen: !!J,
      isInert: K,
      hasValue: q,
      hasError: (null == M ? true : M.errorMessageId) != null,
      handleToggle: ec,
      handleClear: eu,
      children: (0, r.jsx)("div", {
        className: o()(T.comboBoxInputScroller, {
          [T.hasTags]: es,
          [T.wrapTags]: es && P
        }),
        onClick: ep,
        children: (0, r.jsxs)("div", {
          className: T.comboBoxInputContainer,
          children: [eb, (0, r.jsx)(_.tEY, {
            ringTarget: Y,
            children: (0, r.jsx)(p.I, {
              ref: L,
              id: t,
              className: o()(S.input, T.comboBoxInput, {
                [T.hiddenVisually]: "single" === U && q && !ea
              }),
              autoFocus: n,
              placeholder: a,
              role: "combobox",
              disabled: G,
              readOnly: B,
              "aria-haspopup": "listbox",
              "aria-autocomplete": "list",
              "aria-busy": Z,
              "aria-controls": H,
              "aria-expanded": !z || J,
              "aria-activedescendant": el,
              "aria-labelledby": "".concat(null == M ? true : M.labelId),
              "aria-describedby": "".concat(null == M ? true : M.describedById),
              "aria-errormessage": null == M ? true : M.errorMessageId,
              "aria-invalid": (null == M ? true : M.errorMessageId) != null,
              value: null != er ? er : "",
              onChange: eE,
              onFocus: ed,
              onBlur: e_,
              onKeyDown: eg,
              onClick: ef
            })
          })]
        })
      })
    }), (0, r.jsx)(m.M, {
      name: c,
      form: d,
      disabled: K,
      selectionMode: U,
      selectedItems: et,
      onSelectionChange: X,
      listItems: ee
    })]
  })
}

function k(e) {
  let {
    renderListItem: t,
    renderEmptyState: n,
    maxVisibleItems: a = 5
  } = e, {
    filteredOptions: o,
    selectedOptions: s,
    options: l,
    activeDescendantIndex: c,
    selectionMode: u,
    listBoxId: p,
    required: m,
    disabled: g,
    handleSelectionChange: b,
    setIsOpen: y,
    query: O,
    loading: v
  } = (0, E.T)(), {
    i18n: I
  } = i.useContext(_.KJG);
  return (0, r.jsx)(d.w, {
    id: p,
    required: m,
    disabled: g,
    items: null != o ? o : l,
    selectionMode: u,
    selectedItems: s,
    onSelectionChange: b,
    activeDescendantIndex: c,
    renderListItem: t,
    renderEmptyState: null != n ? n : () => (0, r.jsx)(f.z, {
      message: null == O || "" === O ? I.LISTBOX_EMPTY_STATE : I.LISTBOX_EMPTY_STATE_WITH_QUERY(O)
    }),
    maxVisibleItems: a,
    loading: v,
    onFocus: () => {
      h.Z.keyboardModeEnabled && (null == y || y(false))
    }
  })
}