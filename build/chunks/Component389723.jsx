/** Chunk was on web.js **/
/** chunk id: 389723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X2: () => k,
  a3: () => M,
  iS: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk896170 = require("./896170.js"),
  Chunk612324 = require("./612324.js"),
  Chunk452027 = require("./452027.jsx"),
  Chunk15626 = require("./15626.js"),
  Chunk540637 = require("./540637.jsx"),
  Chunk992251 = require("./992251.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk292666 = require("./292666.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk296898 = require("./296898.jsx"),
  Chunk332661 = require("./332661.jsx"),
  Chunk154385 = require("./154385.js"),
  Chunk430858 = require("./430858.jsx"),
  Chunk376811 = require("./376811.js"),
  Chunk641487 = require("./641487.js"),
  Chunk763600 = require("./763600.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk526008 = require("./526008.js"),
  Chunk100624 = require("./100624.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      C(e, t, n[t])
    })
  }
  return e
}

function w(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = D(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let L = {
  keys: ["label"]
};

function x(e) {
  let {
    children: t,
    isCollapsible: n = false,
    maxOptionsVisible: a = 5,
    isOpen: o,
    setIsOpen: l,
    options: c
  } = e, u = P(e, ["children", "isCollapsible", "maxOptionsVisible", "isOpen", "setIsOpen", "options"]), {
    selectionMode: d,
    disabled: f,
    readOnly: p,
    closeOnSelect: _,
    formatOption: h,
    onSelectionChange: m,
    value: g,
    customMatchSorter: E,
    matchSorterOptions: b,
    required: v
  } = u, A = i.useId(), I = i.useRef(null), [S, T] = i.useState(null), [C, w] = i.useState(false), [R, D] = i.useState(""), [x, M] = i.useState(""), {
    options: j,
    loading: k,
    onQueryChange: U
  } = (0, O.K)({
    active: null == o || o,
    options: c,
    renderOption: h
  }), G = i.useCallback((e, t) => {
    M(e), D(null != t ? t : e)
  }, []);
  i.useEffect(() => {
    U(R)
  }, [U, R]);
  let F = i.useMemo(() => "" === R ? j : null != E ? E(j, R) : (0, s.Ht)(j, R, null != b ? b : L), [j, R, E, b]),
    V = i.useRef(true),
    B = i.useMemo(() => ("single" === d ? V.current = j.find(e => e.value === g) : V.current = true, null == g || Array.isArray(g) && 0 === g.length) ? [] : (Array.isArray(g) ? g : [g]).map(e => j.find(t => t.value === e)).filter(e => null != e), [g, j, d]);
  i.useEffect(() => {
    if (!C && "single" === d) {
      var e, t;
      G(null != (e = null == (t = V.current) ? true : t.label) ? e : "", "")
    }
  }, [G, B, d, C]), i.useEffect(() => {
    if (o && null != V.current) {
      let e = F.findIndex(e => {
        var t;
        return e.value === (null == (t = V.current) ? true : t.value)
      });
      T(false !== e ? e : null)
    }
  }, [o, T, F]);
  let H = f || p,
    Y = i.useCallback(e => {
      if (H || v && 0 === e.length) return;
      let t = Array.from(e);
      if ("multiple" === d && t.length < 1) m([]);
      else if ("multiple" === d) m(t.map(e => e.value));
      else {
        var n;
        m(null == (n = t[0]) ? true : n.value)
      }
      _ && o && (null == l || l(false)), w(false)
    }, [H, d, m, _, o, l, v]),
    W = B.length > 0;
  return (0, r.jsx)(y.C.Provider, {
    value: N({
      activeDescendantIndex: S,
      setActiveDescendantIndex: T,
      listBoxId: A,
      inputFieldRef: I,
      isInert: H,
      isCollapsible: n,
      hasValue: W,
      value: g,
      options: j,
      filteredOptions: F,
      selectedOptions: B,
      maxOptionsVisible: a,
      query: x,
      setQuery: G,
      loading: k,
      handleSelectionChange: Y,
      isOpen: o,
      setIsOpen: l,
      isEditing: C,
      setIsEditing: w
    }, u),
    children: t
  })
}

function M(e) {
  let {
    ref: t
  } = e, n = P(e, ["ref"]), {
    fieldProps: a,
    props: o
  } = (0, c.n)(n), s = (0, m.rdh)(_.A.modules.select.MAX_WIDTH), l = i.useMemo(() => ({
    horizontalControlColumnWidth: "minmax(".concat(s, "px, auto)")
  }), [s]);
  return (0, r.jsx)(c.D, R(N({}, a), {
    "data-mana-component": "combobox",
    layoutConfig: l,
    children: (0, r.jsx)(j, R(N({}, o), {
      ref: t
    }))
  }))
}

function j(e) {
  let {
    id: t,
    autoFocus: n,
    placeholder: a = I.intl.string(A.default["A+pfVR"]),
    hideTags: s,
    name: c,
    form: d,
    showChevronButton: f = false,
    onQueryChange: _,
    onFocus: m,
    onBlur: O,
    onKeyDown: C,
    wrapTags: w,
    ref: P
  } = e, D = i.useRef(null), L = i.useRef(null), x = i.useRef(null), M = i.useContext(u._), {
    activeDescendantIndex: j,
    setActiveDescendantIndex: k,
    selectionMode: U,
    disabled: G,
    readOnly: F,
    loading: V,
    clearable: B,
    required: H,
    listBoxId: Y,
    inputFieldRef: W,
    shouldFocusWrap: K,
    isInert: z,
    isCollapsible: q,
    hasValue: Z,
    handleSelectionChange: Q,
    onSelectionChange: X,
    isOpen: J,
    setIsOpen: $,
    options: ee,
    selectedOptions: et,
    filteredOptions: en,
    query: er,
    setQuery: ei,
    isEditing: ea,
    setIsEditing: eo
  } = (0, y.h)(), es = "multiple" === U && Z, el = null != j ? (0, v.ZN)(Y, j) : true, ec = i.useCallback(() => {
    z || null == $ || $(!J)
  }, [z, J, $]), eu = i.useCallback(() => {
    var e;
    true === B && ("multiple" === U ? X([]) : X(null), ei(""), null == (e = L.current) || e.focus())
  }, [X, U, B, ei]), ed = i.useCallback(e => {
    var t, n, r;
    eo(true), null == m || m(e), null == (r = L.current) || r.setSelectionRange(null != (t = null == er ? true : er.length) ? t : 0, null != (n = null == er ? true : er.length) ? n : 0)
  }, [m, eo, er]), ef = i.useCallback(() => {
    z || null == $ || $(true)
  }, [$, z]), ep = i.useCallback(e => {
    var t;
    (null == (t = e.relatedTarget) ? true : t.closest('[data-list-id="'.concat(Y, '"]'))) == null && (eo(false), null == $ || $(false), null == O || O(e))
  }, [O, $, Y, eo]);
  i.useEffect(() => {
    es && !w && (x.current = setTimeout(() => {
      var e;
      null == (e = L.current) || e.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      })
    }, 10))
  }, [et, es, w]);
  let e_ = i.useCallback(() => {
      var e;
      z || (null == $ || $(true), null == (e = L.current) || e.focus())
    }, [$, z]),
    eh = i.useCallback(() => {
      var e;
      null == (e = L.current) || e.select()
    }, []),
    em = i.useCallback(e => {
      if (z) return;
      let t = Array.from(e)[0];
      Q(et.filter(e => e.id !== t))
    }, [Q, et, z]),
    eg = i.useCallback(e => {
      let t = en.length,
        n = 1;
      switch (null == C || C(e), e.key) {
        case "ArrowDown":
        case "PageDown":
          if (n = "PageDown" === e.key ? 10 : 1, 0 === t || (e.preventDefault(), null == $ || $(true), e.altKey || !J)) return;
          k(e => {
            if (null === e) return 0;
            let r = e + n;
            return r >= t && K ? 0 : Math.min(r, t - 1)
          });
          break;
        case "ArrowUp":
        case "PageUp":
          if (n = "PageUp" === e.key ? 10 : 1, 0 === t) return;
          e.preventDefault(), k(e => {
            if (null === e) return 0;
            let r = e - n;
            return r < 0 && K ? t - 1 : Math.max(r, 0)
          }), null == $ || $(true);
          break;
        case "Enter":
          if (e.preventDefault(), e.stopPropagation(), !J || null == j || t - 1 < j) return;
          let r = en[j];
          if (null == r || true === r.disabled) return;
          if (H && 1 === et.length && et.includes(r)) return void Q(et);
          Q("single" === U ? [r] : (0, v.qH)(U, et, r));
          break;
        case "Backspace":
          if ("multiple" === U && "" === er && et.length > 0 && null != D.current) {
            var i;
            e.preventDefault(), e.stopPropagation(), null == (i = D.current.lastChild) || i.focus()
          }
          break;
        case "Escape":
          Z && B && (e.preventDefault(), e.stopPropagation(), eu());
          break;
        case "Home":
          if (e.preventDefault(), 0 === t) return;
          k(0);
          break;
        case "End":
          if (e.preventDefault(), 0 === t) return;
          k(t - 1)
      }
    }, [U, H, B, Z, K, J, C, eu, Q, et, er, $, en, j, k]),
    eE = i.useCallback(e => {
      eo(true), ei(e.target.value), null == $ || $(true), null == _ || _(e), k(null)
    }, [_, eo, ei, $, k]),
    ey = i.useMemo(() => {
      if (0 === et.length) return null;
      if ("single" === U) {
        if (ea) return null;
        let e = Array.from(et)[0];
        return (0, r.jsx)("div", {
          className: S.OS,
          children: (0, r.jsx)(E.c, R(N({}, e), {
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
          accessibilityHint: I.intl.string(A.default["/Y7vRd"])
        }
      });
      return (0, r.jsx)(p.CR_, {
        listRef: D,
        label: I.intl.string(A.default.VMNfsY),
        items: e,
        layout: "inline",
        onRemove: em
      })
    }, [U, G, eh, em, ea, et, s]),
    eb = (0, l.A)(W, P);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(b.p, {
      ref: eb,
      disabled: G,
      readOnly: F,
      loading: V,
      clearable: B,
      fullWidth: true,
      showChevronButton: f,
      isOpen: !!J,
      isInert: z,
      hasValue: Z,
      hasError: (null == M ? true : M.errorMessageId) != null,
      handleToggle: ec,
      handleClear: eu,
      children: (0, r.jsx)("div", {
        className: o()(S._U, {
          [S.kS]: es,
          [S.kj]: es && w
        }),
        onClick: e_,
        children: (0, r.jsxs)("div", {
          className: S.P$,
          children: [ey, (0, r.jsx)(p.vN3, {
            ringTarget: W,
            children: (0, r.jsx)(h.p, {
              ref: L,
              id: t,
              className: o()(T.input, S.kk, {
                [S.kK]: "single" === U && Z && !ea
              }),
              autoFocus: n,
              placeholder: a,
              role: "combobox",
              disabled: G,
              readOnly: F,
              "aria-haspopup": "listbox",
              "aria-autocomplete": "list",
              "aria-busy": V,
              "aria-controls": Y,
              "aria-expanded": !q || J,
              "aria-activedescendant": el,
              "aria-labelledby": "".concat(null == M ? true : M.labelId),
              "aria-describedby": "".concat(null == M ? true : M.describedById),
              "aria-errormessage": null == M ? true : M.errorMessageId,
              "aria-invalid": (null == M ? true : M.errorMessageId) != null,
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
    }), (0, r.jsx)(g.H, {
      name: c,
      form: d,
      disabled: z,
      selectionMode: U,
      selectedItems: et,
      onSelectionChange: Q,
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
    listBoxId: _,
    required: h,
    disabled: m,
    handleSelectionChange: g,
    query: E,
    loading: b
  } = (0, y.h)(), {
    i18n: O
  } = i.useContext(p.VOr);
  return (0, r.jsx)(d.q, {
    id: _,
    required: h,
    disabled: m,
    items: null != o ? o : l,
    tabIndex: false,
    selectionMode: u,
    selectedItems: s,
    onSelectionChange: g,
    activeDescendantIndex: c,
    renderListItem: t,
    renderEmptyState: null != n ? n : () => (0, r.jsx)(f.o, {
      message: null == E || "" === E ? O.LISTBOX_EMPTY_STATE : O.LISTBOX_EMPTY_STATE_WITH_QUERY(E)
    }),
    maxVisibleItems: a,
    loading: b
  })
}