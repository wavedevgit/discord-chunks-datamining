/** Chunk was on web.js **/
/** chunk id: 673221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => S
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk61247 = require("./61247.js"),
  Chunk753187 = require("./753187.jsx"),
  Chunk993517 = require("./993517.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk35916 = require("./35916.jsx"),
  Chunk199823 = require("./199823.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk626921 = require("./626921.jsx"),
  Chunk483753 = require("./483753.js"),
  Chunk490340 = require("./490340.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680765 = require("./680765.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S(e) {
  var {
    hideLabel: t,
    description: n,
    helperText: i,
    errorMessage: a,
    successMessage: o
  } = e, l = I(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage"]);
  let {
    id: c,
    required: u,
    label: d
  } = l;
  return (0, r.jsx)(s.N, {
    id: c,
    required: u,
    label: d,
    hideLabel: t,
    description: n,
    helperText: i,
    errorMessage: a,
    successMessage: o,
    "data-mana-component": "select",
    children: (0, r.jsx)(A, y({}, l))
  })
}

function A(e) {
  let {
    selectionMode: t,
    id: n,
    required: s,
    disabled: b,
    readOnly: O,
    loading: I,
    autoFocus: T,
    clearable: S,
    fullWidth: A,
    closeOnSelect: N = true,
    shouldFocusWrap: R,
    placeholder: P = g.intl.string(m.default["A+pfVV"]),
    label: w,
    name: D,
    form: L,
    autoComplete: x,
    maxOptionsVisible: M = 5,
    options: j,
    renderOption: k,
    onSelectionChange: U,
    value: G,
    defaultValue: B
  } = e, Z = true !== G, {
    isOpen: F,
    setIsOpen: V,
    refs: H,
    floatingStyles: Y,
    getReferenceProps: W,
    getFloatingProps: K
  } = (0, u.ON0)({
    placement: "bottom",
    matchReferenceWidth: true,
    setHeight: e => (e.height - 2) * M + 4
  }), z = i.useId(), [q, X] = i.useState({
    isInitialized: false,
    activeDescendantIndex: null,
    listItems: [],
    filteredItems: [],
    selectedItems: [],
    longestLabelCharCount: 5,
    width: "200px",
    dropDownHeight: "auto"
  }), Q = i.useContext(l.U), J = i.useRef(null), $ = i.useRef(null), ee = null != N ? N : "multiple" !== t, et = q.selectedItems.length > 0, en = q.listItems.length > M, er = !q.isInitialized || b || O || I, ei = i.useCallback(() => {
    er || V(!F)
  }, [er, V, F]), ea = i.useCallback(() => {
    var e;
    V(false), null == (e = J.current) || e.focus()
  }, [V]), eo = i.useCallback(() => {
    var e;
    X(e => v(y({}, e), {
      selectedItems: []
    })), U(null), null == (e = J.current) || e.focus()
  }, [U]), es = i.useCallback(e => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), V(true);
        break;
      case "Escape":
        et && S && (e.preventDefault(), e.stopPropagation(), eo())
    }
  }, [eo, et, S, V]), el = i.useCallback(e => null != k ? k(e) : e, [k]);
  i.useLayoutEffect(() => {
    let e = [],
      t = 6,
      n = j.map(n => {
        let r = el(n);
        return t = Math.max(t, r.label.length), !q.isInitialized && (null != G || null != B) && (0, h._s)(r.value, null != G ? G : B) && e.push(r), r
      });
    X(r => v(y({}, r), {
      listItems: n,
      isInitialized: true,
      longestLabelCharCount: t,
      selectedItems: r.isInitialized ? r.selectedItems : e
    }))
  }, [j, el]), i.useEffect(() => {
    !er && Z && (null == G ? X(e => v(y({}, e), {
      selectedItems: []
    })) : X(e => v(y({}, e), {
      selectedItems: e.listItems.filter(e => (0, h._s)(e.value, G))
    })))
  }, [G, er, Z]), i.useLayoutEffect(() => {
    if (null == $.current) return;

    function e() {
      var e, n, r, i;
      let a = "",
        o = "auto";
      if (A) a = "".concat(null != (n = null == (e = $.current) ? true : e.getBoundingClientRect().width) ? n : 0, "px");
      else {
        let e = "multiple" === t ? 1.5 : 1;
        a = "calc((".concat(q.longestLabelCharCount, "ch + 20px + 24px + 36px) * ").concat(e, ")")
      }
      en && (o = (null != (i = null == (r = $.current) ? true : r.getBoundingClientRect().height) ? i : 40) * M), X(e => v(y({}, e), {
        width: a,
        dropDownHeight: o
      }))
    }
    let n = new ResizeObserver((0, a.throttle)(() => {
      e()
    }, 500));
    return n.observe($.current), e(), () => n.disconnect()
  }, [A, t, M, en, q.longestLabelCharCount]);
  let ec = i.useCallback(e => {
      if (er) return;
      let n = Array.from(e);
      if ("multiple" === t && n.length < 1) U(null);
      else if ("multiple" === t) U(n.map(e => e.value));
      else {
        var r, i;
        U(null != (i = null == (r = n[0]) ? true : r.value) ? i : null)
      }
      ee && F && ea(), X(t => v(y({}, t), {
        selectedItems: e
      }))
    }, [er, t, U, ee, ea, F]),
    eu = (0, o.Z)($, H.setReference);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(p.q, v(y({
      ref: eu,
      disabled: b,
      readOnly: O,
      loading: I,
      clearable: S,
      fullWidth: A,
      isOpen: F,
      isInert: er,
      hasValue: et,
      width: q.width,
      handleToggle: ei,
      handleClear: eo
    }, W()), {
      children: (0, r.jsx)(u.tEY, {
        ringTarget: $,
        children: (0, r.jsxs)("button", {
          id: n,
          ref: J,
          autoFocus: T,
          className: E.selectButton,
          onClick: ei,
          onKeyDown: es,
          disabled: b || O,
          "aria-expanded": F,
          "aria-busy": I,
          "aria-haspopup": "listbox",
          "aria-controls": z,
          "aria-describedby": "".concat(null == Q ? true : Q.describedById),
          "aria-errormessage": null == Q ? true : Q.errorMessageId,
          "aria-invalid": (null == Q ? true : Q.errorMessageId) != null,
          children: [(0, r.jsxs)(c.n, {
            children: [w, ", "]
          }), (0, r.jsx)(C, {
            placeholder: P,
            selectedItems: q.selectedItems
          })]
        })
      })
    })), (0, r.jsx)(f.M, {
      name: D,
      form: L,
      disabled: er,
      autoComplete: x,
      selectionMode: t,
      selectedItems: q.selectedItems,
      onSelectionChange: ec,
      listItems: q.listItems
    }), !er && F && (0, r.jsx)(u.VqE, {
      children: (0, r.jsx)(u.w0Z, v(y({
        ref: H.setFloating,
        className: E.selectDropdown,
        style: Y
      }, K()), {
        children: (0, r.jsx)(d.w, {
          id: z,
          required: s,
          items: q.listItems,
          selectionMode: t,
          selectedItems: q.selectedItems,
          onSelectionChange: ec,
          shouldFocusWrap: R,
          renderListItem: e => (0, r.jsx)(_.W, y({}, e))
        })
      }))
    })]
  })
}

function C(e) {
  let {
    placeholder: t,
    selectedItems: n
  } = e;
  return null == n || 0 === n.length ? (0, r.jsx)("div", {
    className: E.placeholder,
    children: (0, r.jsx)(u.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: t
    })
  }) : n.length > 1 ? (0, r.jsx)("div", {
    className: E.multipleValues,
    children: (0, r.jsx)(u.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: n.map(e => e.label).join(", ")
    })
  }) : (0, r.jsx)(_.W, y({}, n[0]))
}