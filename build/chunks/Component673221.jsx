/** Chunk was on web.js **/
/** chunk id: 673221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => D
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk61247 = require("./61247.js"),
  Chunk483566 = require("./483566.jsx"),
  Chunk635041 = require("./635041.jsx"),
  Chunk448814 = require("./448814.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk199823 = require("./199823.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk626921 = require("./626921.jsx"),
  Chunk415540 = require("./415540.js"),
  Chunk345729 = require("./345729.js"),
  Chunk483753 = require("./483753.js"),
  Chunk271860 = require("./271860.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk685424 = require("./685424.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let w = 24,
  R = 36;

function D(e) {
  var {
    selectionMode: t,
    readOnly: n,
    autoFocus: a,
    clearable: _,
    fullWidth: I,
    closeOnSelect: C = true,
    shouldFocusWrap: P,
    placeholder: D = v.intl.string(O.default["A+pfVR"]),
    name: j,
    form: M,
    autoComplete: k,
    maxOptionsVisible: U = 5,
    options: G,
    formatOption: Z,
    onSelectionChange: F,
    value: B,
    wrapTags: V = false
  } = e, H = N(e, ["selectionMode", "readOnly", "autoFocus", "clearable", "fullWidth", "closeOnSelect", "shouldFocusWrap", "placeholder", "name", "form", "autoComplete", "maxOptionsVisible", "options", "formatOption", "onSelectionChange", "value", "wrapTags"]);
  let Y = i.useRef(null),
    {
      fieldProps: W
    } = (0, l.X)(H),
    {
      id: K,
      required: z,
      label: q,
      disabled: Q
    } = W,
    {
      isOpen: X,
      setIsOpen: J,
      refs: $,
      floatingStyles: ee,
      getReferenceProps: et,
      getFloatingProps: en,
      transitionStyles: er
    } = (0, b.C)(),
    ei = i.useId(),
    {
      options: ea,
      loading: eo
    } = (0, E.U)({
      active: X,
      options: G,
      renderOption: Z
    }),
    es = i.useRef(null),
    el = i.useRef(null),
    ec = null != C ? C : "multiple" !== t,
    eu = Array.isArray(B) ? B.length > 0 : null != B,
    ed = Q || n,
    {
      measuredWidth: ef,
      itemsForMeasurement: ep
    } = x(ea, t),
    e_ = i.useCallback(() => {
      ed || J(!X)
    }, [ed, J, X]),
    eh = i.useCallback(() => {
      var e;
      J(false), null == (e = es.current) || e.focus()
    }, [J]),
    em = i.useCallback(() => {
      var e;
      false !== _ && ("multiple" === t ? F([]) : F(null), null == (e = es.current) || e.focus())
    }, [F, t, _]);
  i.useEffect(() => {
    if (a) {
      var e;
      null == (e = es.current) || e.focus()
    }
  }, [a]);
  let eg = i.useCallback(e => {
      var t, n, r, i, a, o;
      if (!ed) switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), J(true);
          break;
        case "ArrowLeft":
          e.preventDefault(), null == (n = Y.current) || null == (t = n.firstChild) || t.focus();
          break;
        case "ArrowRight":
          e.preventDefault(), null == (i = Y.current) || null == (r = i.lastChild) || r.focus();
          break;
        case "Backspace":
          eu && (e.preventDefault(), null == (o = Y.current) || null == (a = o.lastChild) || a.focus());
          break;
        case "Escape":
          eu && _ && (e.preventDefault(), e.stopPropagation(), em())
      }
    }, [em, eu, _, J, ed]),
    eE = i.useMemo(() => {
      let e = Array.isArray(B) ? B : [B];
      return ea.filter(t => (0, y._s)(t.value, e))
    }, [B, ea]),
    eb = i.useMemo(() => {
      if (!I) return "".concat(Math.max(null != ef ? ef : 200, 200) * ("multiple" === t ? 1.5 : 1) + !!_ * w + R + 12, "px")
    }, [I, ef, t, _]),
    ey = i.useCallback(e => {
      if (ed) return;
      let n = Array.from(e);
      if ("multiple" === t && n.length < 1) F([]);
      else if ("multiple" === t) F(n.map(e => e.value));
      else {
        var r;
        F(null == (r = n[0]) ? true : r.value)
      }
      ec && X && eh()
    }, [ed, t, F, ec, eh, X]),
    eO = "multiple" === t && eE.length > 0,
    ev = i.useRef(null);
  i.useEffect(() => {
    clearTimeout(ev.current), eO && !V && (ev.current = setTimeout(() => {
      var e, t;
      null == (t = Y.current) || null == (e = t.lastElementChild) || e.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "end"
      })
    }, 10))
  }, [eE, eO, V]);
  let eS = (0, s.Z)(el, $.setReference),
    eI = i.useCallback(e => {
      if (ed) return;
      let t = Array.from(e)[0],
        n = eE.filter(e => e.id !== t);
      if (ey(n), 0 === n.length) {
        var r;
        null == (r = es.current) || r.focus()
      }
    }, [ey, eE, ed]),
    eT = Math.max(ea.findIndex(e => {
      var t;
      return e.id === (null == (t = eE[eE.length - 1]) ? true : t.id)
    }), 0),
    eC = i.useRef(null);
  i.useEffect(() => (!eo && X && (eC.current = setTimeout(() => {
    var e;
    return null == (e = document.getElementById((0, y.cA)(ei, eT))) ? true : e.focus()
  }, 10)), () => {
    null != eC.current && clearTimeout(eC.current)
  }), [eo, ei, X, eT]);
  let eA = (0, p.dQu)(f.Z.modules.select.MAX_WIDTH),
    eN = i.useMemo(() => ({
      horizontalControlColumnWidth: "min(".concat(eA, "px, auto)")
    }), [eA]);

  function eP(e) {
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(g.q, A(T({
        ref: eS,
        disabled: Q,
        readOnly: n,
        loading: eo,
        clearable: _,
        fullWidth: I,
        isOpen: X,
        isInert: ed,
        hasValue: eu,
        hasError: (null == e ? true : e.errorMessageId) != null,
        handleToggle: e_,
        handleClear: em
      }, et()), {
        children: (0, r.jsxs)(d.kL8, {
          "aria-label": q,
          buttonRef: es,
          buttonProps: A(T({}, null != K ? {
            id: K
          } : {}), {
            style: {
              marginLeft: false
            }
          }),
          focusProps: {
            ringTarget: el
          },
          className: o()(S.selectButton, {
            [S.wrapTags]: V,
            [S.multiSelect]: "multiple" === t
          }),
          onClick: e_,
          onKeyDown: eg,
          "aria-expanded": X,
          "aria-busy": eo,
          "aria-haspopup": "listbox",
          "aria-controls": ei,
          "aria-describedby": null == e ? true : e.describedById,
          "aria-errormessage": null == e ? true : e.errorMessageId,
          "aria-invalid": (null == e ? true : e.errorMessageId) != null,
          children: [(0, r.jsxs)(c.n, {
            children: [q, ", "]
          }), (0, r.jsx)(L, {
            tagGroupRef: Y,
            placeholder: D,
            selectionMode: t,
            selectedItems: eE,
            onRemove: eI
          })]
        })
      })), (0, r.jsx)(h.M, {
        name: j,
        form: M,
        disabled: ed,
        autoComplete: k,
        selectionMode: t,
        selectedItems: eE,
        onSelectionChange: ey,
        listItems: ea
      }), !I && ep, !ed && X && (0, r.jsx)("div", A(T({
        ref: $.setFloating,
        className: S.selectDropdown
      }, en()), {
        style: T({}, ee, er),
        children: (0, r.jsx)(d.VqE, {
          children: (0, r.jsx)(u.w, {
            id: ei,
            required: z,
            items: ea,
            selectionMode: t,
            selectedItems: eE,
            onSelectionChange: ey,
            shouldFocusWrap: P,
            renderListItem: e => (0, r.jsx)(m.W, T({}, e)),
            maxVisibleItems: U,
            loading: eo,
            typeahead: true
          })
        })
      }))]
    })
  }
  return (0, r.jsx)(l.g, A(T({}, W), {
    "data-mana-component": "select",
    layoutConfig: eN,
    children: e => (0, r.jsx)("div", {
      style: {
        width: I ? "100%" : "minmax(".concat(eb, "px, 100%)")
      },
      children: eP(e)
    })
  }))
}

function x(e, t) {
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
      children: (0, r.jsx)(u.w, {
        id: "measurement-".concat(o),
        required: false,
        items: e,
        selectionMode: t,
        selectedItems: [],
        onSelectionChange: () => {},
        shouldFocusWrap: false,
        renderListItem: e => (0, r.jsx)(m.W, T({}, e))
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
    className: S.placeholder,
    children: (0, r.jsx)(d.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: t
    })
  }) : "multiple" === n ? (0, r.jsx)(d.QSK, {
    listRef: o,
    label: v.intl.string(O.default.VMNfsY),
    items: i,
    layout: "inline",
    onRemove: a
  }) : (0, r.jsx)(m.W, A(T({}, i[0]), {
    inInput: true
  }))
}