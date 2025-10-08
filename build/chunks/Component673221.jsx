/** Chunk was on web.js **/
/** chunk id: 673221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => P
}), require("./953529.js");
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
  Chunk415540 = require("./415540.js"),
  Chunk483753 = require("./483753.js"),
  Chunk490340 = require("./490340.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680765 = require("./680765.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = 24,
  R = 36;

function P(e) {
  var {
    hideLabel: t,
    description: n,
    helperText: i,
    errorMessage: a,
    successMessage: o
  } = e, s = A(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage"]);
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
    children: (0, r.jsx)(w, I({}, s))
  })
}

function w(e) {
  let {
    selectionMode: t,
    id: n,
    required: a,
    disabled: l,
    readOnly: _,
    autoFocus: v,
    clearable: T,
    fullWidth: A,
    closeOnSelect: C = true,
    shouldFocusWrap: P,
    placeholder: w = y.intl.string(b.default["A+pfVV"]),
    label: x,
    name: M,
    form: j,
    autoComplete: k,
    maxOptionsVisible: U = 5,
    options: G,
    renderOption: B,
    onSelectionChange: Z,
    value: F,
    wrapTags: V = false
  } = e, H = i.useRef(null), {
    isOpen: Y,
    setIsOpen: W,
    refs: K,
    floatingStyles: z,
    getReferenceProps: q,
    getFloatingProps: X
  } = (0, f.ON0)({
    placement: "bottom",
    matchReferenceWidth: true
  }), Q = i.useId(), {
    options: J,
    loading: $
  } = (0, g.U)({
    active: Y,
    options: G,
    renderOption: B
  }), ee = i.useContext(c.z), et = i.useRef(null), en = i.useRef(null), er = null != C ? C : "multiple" !== t, ei = Array.isArray(F) ? F.length > 0 : null != F, ea = l || _, {
    measuredWidth: eo,
    itemsForMeasurement: es
  } = D(J, t), el = i.useCallback(() => {
    ea || W(!Y)
  }, [ea, W, Y]), ec = i.useCallback(() => {
    var e;
    W(false), null == (e = et.current) || e.focus()
  }, [W]), eu = i.useCallback(() => {
    var e;
    Z(null), null == (e = et.current) || e.focus()
  }, [Z]);
  i.useEffect(() => {
    if (v) {
      var e;
      null == (e = et.current) || e.focus()
    }
  }, [v]);
  let ed = i.useCallback(e => {
      var t, n, r, i, a, o;
      if (!ea) switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), W(true);
          break;
        case "ArrowLeft":
          e.preventDefault(), null == (n = H.current) || null == (t = n.firstChild) || t.focus();
          break;
        case "ArrowRight":
          e.preventDefault(), null == (i = H.current) || null == (r = i.lastChild) || r.focus();
          break;
        case "Backspace":
          ei && (e.preventDefault(), null == (o = H.current) || null == (a = o.lastChild) || a.focus());
          break;
        case "Escape":
          ei && T && (e.preventDefault(), e.stopPropagation(), eu())
      }
    }, [eu, ei, T, W, ea]),
    ef = i.useMemo(() => {
      let e = Array.isArray(F) ? F : [F];
      return J.filter(t => (0, E._s)(t.value, e))
    }, [F, J]),
    e_ = i.useMemo(() => {
      if (!A) return "".concat(Math.max(null != eo ? eo : 200, 200) * ("multiple" === t ? 1.5 : 1) + !!T * N + R + 8, "px")
    }, [A, eo, t, T]),
    ep = i.useCallback(e => {
      if (ea) return;
      let n = Array.from(e);
      if ("multiple" === t && n.length < 1) Z(null);
      else if ("multiple" === t) Z(n.map(e => e.value));
      else {
        var r, i;
        Z(null != (i = null == (r = n[0]) ? true : r.value) ? i : null)
      }
      er && Y && ec()
    }, [ea, t, Z, er, ec, Y]),
    eh = "multiple" === t && ef.length > 0,
    em = i.useRef(null);
  i.useEffect(() => {
    clearTimeout(em.current), eh && !V && (em.current = setTimeout(() => {
      var e, t;
      null == (t = H.current) || null == (e = t.lastElementChild) || e.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "end"
      })
    }, 10))
  }, [ef, eh, V]);
  let eg = (0, s.Z)(en, K.setReference),
    eE = i.useCallback(e => {
      if (ea) return;
      let t = Array.from(e)[0],
        n = ef.filter(e => e.id !== t);
      if (ep(n), 0 === n.length) {
        var r;
        null == (r = et.current) || r.focus()
      }
    }, [ep, ef, ea]),
    eb = i.useRef(null);
  return i.useEffect(() => (!$ && Y && (eb.current = setTimeout(() => {
    var e;
    return null == (e = document.getElementById((0, E.cA)(Q, 0))) ? true : e.focus()
  }, 10)), () => {
    null != eb.current && clearTimeout(eb.current)
  }), [$, Q, Y]), (0, r.jsxs)("div", {
    children: [(0, r.jsx)(m.q, S(I({
      ref: eg,
      disabled: l,
      readOnly: _,
      loading: $,
      clearable: T,
      fullWidth: A,
      isOpen: Y,
      isInert: ea,
      hasValue: ei,
      width: e_,
      handleToggle: el,
      handleClear: eu
    }, q()), {
      children: (0, r.jsxs)(f.kL8, {
        "aria-label": x,
        buttonRef: et,
        buttonProps: S(I({}, null != n ? {
          id: n
        } : {}), {
          style: {
            marginLeft: false
          }
        }),
        focusProps: {
          ringTarget: en
        },
        className: o()(O.selectButton, {
          [O.wrapTags]: V
        }),
        onClick: el,
        onKeyDown: ed,
        "aria-expanded": Y,
        "aria-busy": $,
        "aria-haspopup": "listbox",
        "aria-controls": Q,
        "aria-describedby": null == ee ? true : ee.describedById,
        "aria-errormessage": null == ee ? true : ee.errorMessageId,
        "aria-invalid": (null == ee ? true : ee.errorMessageId) != null,
        children: [(0, r.jsxs)(u.n, {
          children: [x, ", "]
        }), (0, r.jsx)(L, {
          tagGroupRef: H,
          placeholder: w,
          selectionMode: t,
          selectedItems: ef,
          onRemove: eE
        })]
      })
    })), (0, r.jsx)(p.M, {
      name: M,
      form: j,
      disabled: ea,
      autoComplete: k,
      selectionMode: t,
      selectedItems: ef,
      onSelectionChange: ep,
      listItems: J
    }), !A && es, !ea && Y && (0, r.jsx)("div", S(I({
      ref: K.setFloating,
      className: O.selectDropdown
    }, X()), {
      style: z,
      children: (0, r.jsx)(f.VqE, {
        children: (0, r.jsx)(d.w, {
          id: Q,
          required: a,
          items: J,
          selectionMode: t,
          selectedItems: ef,
          onSelectionChange: ep,
          shouldFocusWrap: P,
          renderListItem: e => (0, r.jsx)(h.W, I({}, e)),
          maxVisibleItems: U,
          loading: $
        })
      })
    }))]
  })
}

function D(e, t) {
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
        renderListItem: e => (0, r.jsx)(h.W, I({}, e))
      })
    }), [e, t, o, n])
  }
}

function L(e) {
  let {
    placeholder: t,
    selectionMode: n,
    selectedItems: i,
    onRemove: a,
    tagGroupRef: o
  } = e;
  return null == i || 0 === i.length ? (0, r.jsx)("div", {
    className: O.placeholder,
    children: (0, r.jsx)(f.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: t
    })
  }) : "multiple" === n ? (0, r.jsx)(f.QSK, {
    listRef: o,
    label: y.intl.string(b.default.VMNfsb),
    items: i,
    layout: "inline",
    onRemove: a
  }) : (0, r.jsx)(h.W, S(I({}, i[0]), {
    inInput: true
  }))
}