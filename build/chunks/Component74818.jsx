/** Chunk was on web.js **/
/** chunk id: 74818, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  l: () => D
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk612324 = require("./612324.js"),
  Chunk452027 = require("./452027.jsx"),
  Chunk140735 = require("./140735.jsx"),
  Chunk540637 = require("./540637.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk765671 = require("./765671.js"),
  Chunk296898 = require("./296898.jsx"),
  Chunk332661 = require("./332661.jsx"),
  Chunk430858 = require("./430858.jsx"),
  Chunk376811 = require("./376811.js"),
  Chunk700713 = require("./700713.js"),
  Chunk641487 = require("./641487.js"),
  Chunk763600 = require("./763600.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk526008 = require("./526008.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
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

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = w(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let R = 24,
  P = 36;

function D(e) {
  let {
    selectionMode: t,
    readOnly: n,
    autoFocus: a,
    clearable: _,
    fullWidth: I,
    closeOnSelect: T = true,
    shouldFocusWrap: w,
    placeholder: D = v.intl.string(O.default["A+pfVR"]),
    name: j,
    form: M,
    autoComplete: k,
    maxOptionsVisible: U = 5,
    options: G,
    formatOption: V,
    onSelectionChange: F,
    value: B,
    wrapTags: H = false
  } = e, Y = N(e, ["selectionMode", "readOnly", "autoFocus", "clearable", "fullWidth", "closeOnSelect", "shouldFocusWrap", "placeholder", "name", "form", "autoComplete", "maxOptionsVisible", "options", "formatOption", "onSelectionChange", "value", "wrapTags"]), W = i.useRef(null), {
    fieldProps: K
  } = (0, l.n)(Y), {
    id: z,
    required: q,
    label: Z,
    disabled: X
  } = K, {
    isOpen: Q,
    setIsOpen: J,
    refs: $,
    floatingStyles: ee,
    getReferenceProps: et,
    getFloatingProps: en,
    transitionStyles: er
  } = (0, y.G)(), ei = i.useId(), {
    options: ea,
    loading: es
  } = (0, E.K)({
    active: Q,
    options: G,
    renderOption: V
  }), eo = i.useRef(null), el = i.useRef(null), ec = null != T ? T : "multiple" !== t, eu = Array.isArray(B) ? B.length > 0 : null != B, ed = X || n, {
    measuredWidth: ef,
    itemsForMeasurement: ep
  } = x(ea, t), e_ = i.useCallback(() => {
    ed || J(!Q)
  }, [ed, J, Q]), eh = i.useCallback(() => {
    var e;
    J(false), null == (e = eo.current) || e.focus()
  }, [J]), em = i.useCallback(() => {
    var e;
    false !== _ && ("multiple" === t ? F([]) : F(null), null == (e = eo.current) || e.focus())
  }, [F, t, _]);
  i.useEffect(() => {
    if (a) {
      var e;
      null == (e = eo.current) || e.focus()
    }
  }, [a]);
  let eg = i.useCallback(e => {
      var t, n, r, i, a, s;
      if (!ed) switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), J(true);
          break;
        case "ArrowLeft":
          e.preventDefault(), null == (n = W.current) || null == (t = n.firstChild) || t.focus();
          break;
        case "ArrowRight":
          e.preventDefault(), null == (i = W.current) || null == (r = i.lastChild) || r.focus();
          break;
        case "Backspace":
          eu && (e.preventDefault(), null == (s = W.current) || null == (a = s.lastChild) || a.focus());
          break;
        case "Escape":
          eu && _ && (e.preventDefault(), e.stopPropagation(), em())
      }
    }, [em, eu, _, J, ed]),
    eE = i.useMemo(() => {
      let e = Array.isArray(B) ? B : [B];
      return ea.filter(t => (0, b.fI)(t.value, e))
    }, [B, ea]),
    ey = i.useMemo(() => {
      if (!I) return "".concat(Math.max(null != ef ? ef : 200, 200) * ("multiple" === t ? 1.5 : 1) + !!_ * R + P + 12, "px")
    }, [I, ef, t, _]),
    eb = i.useCallback(e => {
      if (ed) return;
      let n = Array.from(e);
      if ("multiple" === t && n.length < 1) F([]);
      else if ("multiple" === t) F(n.map(e => e.value));
      else {
        var r;
        F(null == (r = n[0]) ? true : r.value)
      }
      ec && Q && eh()
    }, [ed, t, F, ec, eh, Q]),
    eO = "multiple" === t && eE.length > 0,
    ev = i.useRef(null);
  i.useEffect(() => {
    clearTimeout(ev.current), eO && !H && (ev.current = setTimeout(() => {
      var e, t;
      null == (t = W.current) || null == (e = t.lastElementChild) || e.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "end"
      })
    }, 10))
  }, [eE, eO, H]);
  let eA = (0, o.A)(el, $.setReference),
    eI = i.useCallback(e => {
      if (ed) return;
      let t = Array.from(e)[0],
        n = eE.filter(e => e.id !== t);
      if (eb(n), 0 === n.length) {
        var r;
        null == (r = eo.current) || r.focus()
      }
    }, [eb, eE, ed]),
    eS = Math.max(ea.findIndex(e => {
      var t;
      return e.id === (null == (t = eE[eE.length - 1]) ? true : t.id)
    }), 0),
    eT = i.useRef(null);
  i.useEffect(() => (!es && Q && (eT.current = setTimeout(() => {
    var e;
    return null == (e = document.getElementById((0, b.ZN)(ei, eS))) ? true : e.focus()
  }, 10)), () => {
    null != eT.current && clearTimeout(eT.current)
  }), [es, ei, Q, eS]);
  let eC = (0, p.rdh)(f.A.modules.select.MAX_WIDTH),
    eN = i.useMemo(() => ({
      horizontalControlColumnWidth: "min(".concat(eC, "px, auto)")
    }), [eC]);

  function ew(e) {
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.p, C(S({
        ref: eA,
        disabled: X,
        readOnly: n,
        loading: es,
        clearable: _,
        fullWidth: I,
        isOpen: Q,
        isInert: ed,
        hasValue: eu,
        hasError: (null == e ? true : e.errorMessageId) != null,
        handleToggle: e_,
        handleClear: em
      }, et()), {
        children: (0, r.jsxs)(d.sqX, {
          "aria-label": Z,
          buttonRef: eo,
          buttonProps: C(S({}, null != z ? {
            id: z
          } : {}), {
            style: {
              marginLeft: false
            }
          }),
          focusProps: {
            ringTarget: el
          },
          className: s()(A.L5, {
            [A.kj]: H,
            [A.M8]: "multiple" === t
          }),
          onClick: e_,
          onKeyDown: eg,
          "aria-expanded": Q,
          "aria-busy": es,
          "aria-haspopup": "listbox",
          "aria-controls": ei,
          "aria-describedby": null == e ? true : e.describedById,
          "aria-errormessage": null == e ? true : e.errorMessageId,
          "aria-invalid": (null == e ? true : e.errorMessageId) != null,
          children: [(0, r.jsxs)(c.A, {
            children: [Z, ", "]
          }), (0, r.jsx)(L, {
            tagGroupRef: W,
            placeholder: D,
            selectionMode: t,
            selectedItems: eE,
            onRemove: eI
          })]
        })
      })), (0, r.jsx)(h.H, {
        name: j,
        form: M,
        disabled: ed,
        autoComplete: k,
        selectionMode: t,
        selectedItems: eE,
        onSelectionChange: eb,
        listItems: ea
      }), !I && ep, !ed && Q && (0, r.jsx)("div", C(S({
        ref: $.setFloating,
        className: A.S_
      }, en()), {
        style: S({}, ee, er),
        children: (0, r.jsx)(d.lGe, {
          children: (0, r.jsx)(u.q, {
            id: ei,
            required: q,
            items: ea,
            selectionMode: t,
            selectedItems: eE,
            onSelectionChange: eb,
            shouldFocusWrap: w,
            renderListItem: e => (0, r.jsx)(m.c, S({}, e)),
            maxVisibleItems: U,
            loading: es,
            typeahead: true
          })
        })
      }))]
    })
  }
  return (0, r.jsx)(l.D, C(S({}, K), {
    "data-mana-component": "select",
    layoutConfig: eN,
    children: e => (0, r.jsx)("div", {
      style: {
        width: I ? "100%" : "minmax(".concat(ey, "px, 100%)")
      },
      children: ew(e)
    })
  }))
}

function x(e, t) {
  let {
    ref: n,
    width: a
  } = (0, _.Ay)(), s = i.useId();
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
      children: (0, r.jsx)(u.q, {
        id: "measurement-".concat(s),
        required: false,
        items: e,
        selectionMode: t,
        selectedItems: [],
        onSelectionChange: () => {},
        shouldFocusWrap: false,
        renderListItem: e => (0, r.jsx)(m.c, S({}, e))
      })
    }), [e, t, s, n])
  }
}

function L(e) {
  let {
    placeholder: t,
    selectionMode: n,
    selectedItems: i,
    onRemove: a,
    tagGroupRef: s
  } = e;
  return null == i || 0 === i.length ? (0, r.jsx)("div", {
    className: A.qf,
    children: (0, r.jsx)(d.EYj, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: t
    })
  }) : "multiple" === n ? (0, r.jsx)(d.CR_, {
    listRef: s,
    label: v.intl.string(O.default.VMNfsY),
    items: i,
    layout: "inline",
    onRemove: a
  }) : (0, r.jsx)(m.c, C(S({}, i[0]), {
    inInput: true
  }))
}