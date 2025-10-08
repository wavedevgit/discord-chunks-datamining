/** Chunk was on web.js **/
/** chunk id: 673221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => R
}), require("./953529.js"), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk61247 = require("./61247.js"),
  Chunk483566 = require("./483566.jsx"),
  Chunk590154 = require("./590154.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk448814 = require("./448814.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk393238 = require("./393238.js"),
  Chunk199823 = require("./199823.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk626921 = require("./626921.jsx"),
  Chunk483753 = require("./483753.js"),
  Chunk614177 = require("./614177.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484050 = require("./484050.js");

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
let C = 24,
  N = 36;

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
  return (0, r.jsx)(l.g, {
    id: c,
    required: u,
    label: d,
    hideLabel: t,
    description: n,
    helperText: i,
    errorMessage: a,
    successMessage: o,
    "data-mana-component": "select",
    children: (0, r.jsx)(P, v({}, s))
  })
}

function P(e) {
  let {
    selectionMode: t,
    id: n,
    required: a,
    disabled: l,
    readOnly: _,
    loading: O,
    autoFocus: I,
    clearable: S,
    fullWidth: A,
    closeOnSelect: R = true,
    shouldFocusWrap: P,
    placeholder: L = b.intl.string(E.default["A+pfVV"]),
    label: x,
    name: M,
    form: j,
    autoComplete: k,
    maxOptionsVisible: U = 5,
    options: G,
    renderOption: B,
    onSelectionChange: Z,
    value: F,
    wrapTags: V = false,
    defaultValue: H
  } = e, Y = true !== F, W = i.useRef(null), {
    isOpen: K,
    setIsOpen: z,
    refs: q,
    floatingStyles: X,
    getReferenceProps: Q,
    getFloatingProps: J
  } = (0, f.ON0)({
    placement: "bottom",
    matchReferenceWidth: true
  }), $ = i.useId(), [ee, et] = i.useState({
    isInitialized: false,
    activeDescendantIndex: null,
    listItems: [],
    filteredItems: [],
    selectedItems: [],
    longestLabelCharCount: 5,
    width: "200px"
  }), en = i.useContext(c.z), er = i.useRef(null), ei = i.useRef(null), ea = null != R ? R : "multiple" !== t, eo = ee.selectedItems.length > 0, es = !ee.isInitialized || l || _ || O, {
    measuredWidth: el,
    itemsForMeasurement: ec
  } = w(ee.listItems, t), eu = i.useCallback(() => {
    es || z(!K)
  }, [es, z, K]), ed = i.useCallback(() => {
    var e;
    z(false), null == (e = er.current) || e.focus()
  }, [z]), ef = i.useCallback(() => {
    var e;
    et(e => T(v({}, e), {
      selectedItems: []
    })), Z(null), null == (e = er.current) || e.focus()
  }, [Z]);
  i.useEffect(() => {
    if (I) {
      var e;
      null == (e = er.current) || e.focus()
    }
  }, [I]);
  let e_ = i.useCallback(e => {
      var t, n, r, i, a, o;
      if (!es) switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), z(true);
          break;
        case "ArrowLeft":
          e.preventDefault(), null == (n = W.current) || null == (t = n.firstChild) || t.focus();
          break;
        case "ArrowRight":
          e.preventDefault(), null == (i = W.current) || null == (r = i.lastChild) || r.focus();
          break;
        case "Backspace":
          eo && (e.preventDefault(), null == (o = W.current) || null == (a = o.lastChild) || a.focus());
          break;
        case "Escape":
          eo && S && (e.preventDefault(), e.stopPropagation(), ef())
      }
    }, [ef, eo, S, z, es]),
    ep = i.useCallback(e => null != B ? B(e) : e, [B]);
  i.useLayoutEffect(() => {
    let e = [],
      t = 6,
      n = G.map(n => {
        let r = ep(n);
        return t = Math.max(t, r.label.length), !ee.isInitialized && (null != F || null != H) && (0, g._s)(r.value, null != F ? F : H) && e.push(r), r
      });
    et(r => T(v({}, r), {
      listItems: n,
      isInitialized: true,
      longestLabelCharCount: t,
      selectedItems: r.isInitialized ? r.selectedItems : e
    }))
  }, [G, ep]), i.useEffect(() => {
    !es && Y && (null == F ? et(e => T(v({}, e), {
      selectedItems: []
    })) : et(e => T(v({}, e), {
      selectedItems: e.listItems.filter(e => (0, g._s)(e.value, F))
    })))
  }, [F, es, Y]);
  let eh = i.useMemo(() => {
      if (!A) return "".concat((null != el ? el : 200) * ("multiple" === t ? 1.5 : 1) + !!S * C + N + 8, "px")
    }, [A, el, t, S]),
    em = i.useCallback(e => {
      if (es) return;
      let n = Array.from(e);
      if ("multiple" === t && n.length < 1) Z(null);
      else if ("multiple" === t) Z(n.map(e => e.value));
      else {
        var r, i;
        Z(null != (i = null == (r = n[0]) ? true : r.value) ? i : null)
      }
      ea && K && ed(), et(t => T(v({}, t), {
        selectedItems: e
      }))
    }, [es, t, Z, ea, ed, K]),
    eg = "multiple" === t && ee.selectedItems.length > 0,
    eE = i.useRef(null);
  i.useEffect(() => {
    clearTimeout(eE.current), eg && !V && (eE.current = setTimeout(() => {
      var e, t;
      null == (t = W.current) || null == (e = t.lastElementChild) || e.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "end"
      })
    }, 10))
  }, [ee.selectedItems, eg, V]);
  let eb = (0, s.Z)(ei, q.setReference),
    ey = i.useCallback(e => {
      if (es) return;
      let t = Array.from(e)[0],
        n = ee.selectedItems.filter(e => e.id !== t);
      if (em(n), 0 === n.length) {
        var r;
        null == (r = er.current) || r.focus()
      }
    }, [em, ee.selectedItems, es]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(m.q, T(v({
      ref: eb,
      disabled: l,
      readOnly: _,
      loading: O,
      clearable: S,
      fullWidth: A,
      isOpen: K,
      isInert: es,
      hasValue: eo,
      width: eh,
      handleToggle: eu,
      handleClear: ef
    }, Q()), {
      children: (0, r.jsxs)(f.kL8, {
        "aria-label": x,
        buttonRef: er,
        buttonProps: T(v({}, null != n ? {
          id: n
        } : {}), {
          style: {
            marginLeft: false
          }
        }),
        focusProps: {
          ringTarget: ei
        },
        className: o()(y.selectButton, {
          [y.wrapTags]: V
        }),
        onClick: eu,
        onKeyDown: e_,
        "aria-expanded": K,
        "aria-busy": O,
        "aria-haspopup": "listbox",
        "aria-controls": $,
        "aria-describedby": null == en ? true : en.describedById,
        "aria-errormessage": null == en ? true : en.errorMessageId,
        "aria-invalid": (null == en ? true : en.errorMessageId) != null,
        children: [(0, r.jsxs)(u.n, {
          children: [x, ", "]
        }), (0, r.jsx)(D, {
          tagGroupRef: W,
          placeholder: L,
          selectionMode: t,
          selectedItems: ee.selectedItems,
          onRemove: ey
        })]
      })
    })), (0, r.jsx)(p.M, {
      name: M,
      form: j,
      disabled: es,
      autoComplete: k,
      selectionMode: t,
      selectedItems: ee.selectedItems,
      onSelectionChange: em,
      listItems: ee.listItems
    }), !A && ec, !es && K && (0, r.jsx)("div", T(v({
      ref: q.setFloating,
      className: y.selectDropdown
    }, J()), {
      style: X,
      children: (0, r.jsx)(f.VqE, {
        children: (0, r.jsx)(d.w, {
          id: $,
          required: a,
          items: ee.listItems,
          selectionMode: t,
          selectedItems: ee.selectedItems,
          onSelectionChange: em,
          shouldFocusWrap: P,
          renderListItem: e => (0, r.jsx)(h.W, v({}, e)),
          maxVisibleItems: U
        })
      })
    }))]
  })
}

function w(e, t) {
  let {
    ref: n,
    width: a
  } = (0, _.ZP)(), o = i.useId();
  return {
    measuredWidth: a,
    itemsForMeasurement: i.useMemo(() => (0, r.jsx)("div", {
      ref: n,
      style: {
        position: "absolute",
        visibility: "hidden",
        pointerEvents: "none",
        width: "max-content"
      },
      "aria-hidden": "true",
      children: (0, r.jsx)(d.w, {
        id: "measurement-".concat(o),
        required: false,
        items: e,
        selectionMode: t,
        selectedItems: [],
        onSelectionChange: () => {},
        shouldFocusWrap: false,
        renderListItem: e => (0, r.jsx)(h.W, v({}, e))
      })
    }), [e, t, o, n])
  }
}

function D(e) {
  let {
    placeholder: t,
    selectionMode: n,
    selectedItems: i,
    onRemove: a,
    tagGroupRef: o
  } = e;
  return null == i || 0 === i.length ? (0, r.jsx)("div", {
    className: y.placeholder,
    children: (0, r.jsx)(f.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: t
    })
  }) : "multiple" === n ? (0, r.jsx)(f.QSK, {
    listRef: o,
    label: b.intl.string(E.default.VMNfsb),
    items: i,
    layout: "inline",
    onRemove: a
  }) : (0, r.jsx)(h.W, T(v({}, i[0]), {
    inInput: true
  }))
}