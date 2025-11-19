/** Chunk was on web.js **/
/** chunk id: 673221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => P
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
  Chunk393238 = require("./393238.js"),
  Chunk199823 = require("./199823.jsx"),
  Chunk713072 = require("./713072.jsx"),
  Chunk626921 = require("./626921.jsx"),
  Chunk415540 = require("./415540.js"),
  Chunk345729 = require("./345729.js"),
  Chunk483753 = require("./483753.js"),
  Chunk298200 = require("./298200.js"),
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
    selectionMode: t,
    readOnly: n,
    autoFocus: a,
    clearable: f,
    fullWidth: v,
    closeOnSelect: T = true,
    shouldFocusWrap: C,
    placeholder: P = y.intl.string(b.default["A+pfVR"]),
    name: L,
    form: x,
    autoComplete: M,
    maxOptionsVisible: j = 5,
    options: k,
    formatOption: U,
    onSelectionChange: G,
    value: B,
    wrapTags: Z = false
  } = e, F = A(e, ["selectionMode", "readOnly", "autoFocus", "clearable", "fullWidth", "closeOnSelect", "shouldFocusWrap", "placeholder", "name", "form", "autoComplete", "maxOptionsVisible", "options", "formatOption", "onSelectionChange", "value", "wrapTags"]);
  let V = i.useRef(null),
    {
      fieldProps: H
    } = (0, l.X)(F),
    {
      id: Y,
      required: W,
      label: K,
      disabled: z
    } = H,
    {
      isOpen: q,
      setIsOpen: X,
      refs: Q,
      floatingStyles: J,
      getReferenceProps: $,
      getFloatingProps: ee,
      transitionStyles: et
    } = (0, g.C)(),
    en = i.useId(),
    {
      options: er,
      loading: ei
    } = (0, m.U)({
      active: q,
      options: k,
      renderOption: U
    }),
    ea = i.useRef(null),
    eo = i.useRef(null),
    es = null != T ? T : "multiple" !== t,
    el = Array.isArray(B) ? B.length > 0 : null != B,
    ec = z || n,
    {
      measuredWidth: eu,
      itemsForMeasurement: ed
    } = D(er, t),
    ef = i.useCallback(() => {
      ec || X(!q)
    }, [ec, X, q]),
    e_ = i.useCallback(() => {
      var e;
      X(false), null == (e = ea.current) || e.focus()
    }, [X]),
    ep = i.useCallback(() => {
      var e;
      "multiple" === t ? G([]) : G(null), null == (e = ea.current) || e.focus()
    }, [G, t]);
  i.useEffect(() => {
    if (a) {
      var e;
      null == (e = ea.current) || e.focus()
    }
  }, [a]);
  let eh = i.useCallback(e => {
      var t, n, r, i, a, o;
      if (!ec) switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), X(true);
          break;
        case "ArrowLeft":
          e.preventDefault(), null == (n = V.current) || null == (t = n.firstChild) || t.focus();
          break;
        case "ArrowRight":
          e.preventDefault(), null == (i = V.current) || null == (r = i.lastChild) || r.focus();
          break;
        case "Backspace":
          el && (e.preventDefault(), null == (o = V.current) || null == (a = o.lastChild) || a.focus());
          break;
        case "Escape":
          el && f && (e.preventDefault(), e.stopPropagation(), ep())
      }
    }, [ep, el, f, X, ec]),
    em = i.useMemo(() => {
      let e = Array.isArray(B) ? B : [B];
      return er.filter(t => (0, E._s)(t.value, e))
    }, [B, er]),
    eg = i.useMemo(() => {
      if (!v) return "".concat(Math.max(null != eu ? eu : 200, 200) * ("multiple" === t ? 1.5 : 1) + !!f * N + R + 12, "px")
    }, [v, eu, t, f]),
    eE = i.useCallback(e => {
      if (ec) return;
      let n = Array.from(e);
      if ("multiple" === t && n.length < 1) G([]);
      else if ("multiple" === t) G(n.map(e => e.value));
      else {
        var r, i;
        G(null != (i = null == (r = n[0]) ? true : r.value) ? i : null)
      }
      es && q && e_()
    }, [ec, t, G, es, e_, q]),
    eb = "multiple" === t && em.length > 0,
    ey = i.useRef(null);
  i.useEffect(() => {
    clearTimeout(ey.current), eb && !Z && (ey.current = setTimeout(() => {
      var e, t;
      null == (t = V.current) || null == (e = t.lastElementChild) || e.scrollIntoView({
        behavior: "smooth",
        inline: "end",
        block: "end"
      })
    }, 10))
  }, [em, eb, Z]);
  let eO = (0, s.Z)(eo, Q.setReference),
    ev = i.useCallback(e => {
      if (ec) return;
      let t = Array.from(e)[0],
        n = em.filter(e => e.id !== t);
      if (eE(n), 0 === n.length) {
        var r;
        null == (r = ea.current) || r.focus()
      }
    }, [eE, em, ec]),
    eI = i.useRef(null);
  return i.useEffect(() => (!ei && q && (eI.current = setTimeout(() => {
    var e;
    return null == (e = document.getElementById((0, E.cA)(en, 0))) ? true : e.focus()
  }, 10)), () => {
    null != eI.current && clearTimeout(eI.current)
  }), [ei, en, q]), (0, r.jsx)(l.g, S(I({}, H), {
    "data-mana-component": "select",
    layoutConfig: {
      horizontalControlColumnWidth: "min(".concat(eg, ", 50%)")
    },
    children: e => (0, r.jsxs)("div", {
      style: {
        width: v ? "100%" : "min(".concat(eg, ", 100%)")
      },
      children: [(0, r.jsx)(h.q, S(I({
        ref: eO,
        disabled: z,
        readOnly: n,
        loading: ei,
        clearable: f,
        fullWidth: v,
        isOpen: q,
        isInert: ec,
        hasValue: el,
        hasError: (null == e ? true : e.errorMessageId) != null,
        handleToggle: ef,
        handleClear: ep
      }, $()), {
        children: (0, r.jsxs)(d.kL8, {
          "aria-label": K,
          buttonRef: ea,
          buttonProps: S(I({}, null != Y ? {
            id: Y
          } : {}), {
            style: {
              marginLeft: false
            }
          }),
          focusProps: {
            ringTarget: eo
          },
          className: o()(O.selectButton, {
            [O.wrapTags]: Z,
            [O.multiSelect]: "multiple" === t
          }),
          onClick: ef,
          onKeyDown: eh,
          "aria-expanded": q,
          "aria-busy": ei,
          "aria-haspopup": "listbox",
          "aria-controls": en,
          "aria-describedby": null == e ? true : e.describedById,
          "aria-errormessage": null == e ? true : e.errorMessageId,
          "aria-invalid": (null == e ? true : e.errorMessageId) != null,
          children: [(0, r.jsxs)(c.n, {
            children: [K, ", "]
          }), (0, r.jsx)(w, {
            tagGroupRef: V,
            placeholder: P,
            selectionMode: t,
            selectedItems: em,
            onRemove: ev
          })]
        })
      })), (0, r.jsx)(_.M, {
        name: L,
        form: x,
        disabled: ec,
        autoComplete: M,
        selectionMode: t,
        selectedItems: em,
        onSelectionChange: eE,
        listItems: er
      }), !v && ed, !ec && q && (0, r.jsx)("div", S(I({
        ref: Q.setFloating,
        className: O.selectDropdown
      }, ee()), {
        style: I({}, J, et),
        children: (0, r.jsx)(d.VqE, {
          children: (0, r.jsx)(u.w, {
            id: en,
            required: W,
            items: er,
            selectionMode: t,
            selectedItems: em,
            onSelectionChange: eE,
            shouldFocusWrap: C,
            renderListItem: e => (0, r.jsx)(p.W, I({}, e)),
            maxVisibleItems: j,
            loading: ei,
            typeahead: true
          })
        })
      }))]
    })
  }))
}

function D(e, t) {
  let {
    ref: n,
    width: a
  } = (0, f.ZP)(), o = i.useId();
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
        renderListItem: e => (0, r.jsx)(p.W, I({}, e))
      })
    }), [e, t, o, n])
  }
}

function w(e) {
  let {
    placeholder: t,
    selectionMode: n,
    selectedItems: i,
    onRemove: a,
    tagGroupRef: o
  } = e;
  return null == i || 0 === i.length ? (0, r.jsx)("div", {
    className: O.placeholder,
    children: (0, r.jsx)(d.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: t
    })
  }) : "multiple" === n ? (0, r.jsx)(d.QSK, {
    listRef: o,
    label: y.intl.string(b.default.VMNfsY),
    items: i,
    layout: "inline",
    onRemove: a
  }) : (0, r.jsx)(p.W, S(I({}, i[0]), {
    inInput: true
  }))
}