/** Chunk was on web.js **/
/** chunk id: 673221, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => S
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk753187 = require("./753187.jsx"),
  Chunk993517 = require("./993517.js"),
  Chunk635041 = require("./635041.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk816529 = require("./816529.jsx"),
  Chunk35916 = require("./35916.jsx"),
  Chunk199823 = require("./199823.jsx"),
  Chunk626921 = require("./626921.jsx"),
  Chunk483753 = require("./483753.js"),
  Chunk614177 = require("./614177.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk484050 = require("./484050.js"),
  Chunk261076 = require("./261076.js");

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
    successMessage: s
  } = e, l = I(e, ["hideLabel", "description", "helperText", "errorMessage", "successMessage"]);
  let {
    id: c,
    required: u,
    label: d
  } = l;
  return (0, r.jsx)(o.N, {
    id: c,
    required: u,
    label: d,
    hideLabel: t,
    description: n,
    helperText: i,
    errorMessage: a,
    successMessage: s,
    children: (0, r.jsx)(A, y({}, l))
  })
}

function A(e) {
  let {
    selectionMode: t,
    id: n,
    required: o,
    disabled: E,
    readOnly: b,
    loading: O,
    autoFocus: I,
    clearable: T,
    fullWidth: S,
    closeOnSelect: A = true,
    shouldFocusWrap: R,
    placeholder: P = m.intl.string(h.default["A+pfVV"]),
    label: w,
    name: D,
    form: L,
    autoComplete: x,
    maxOptionsVisible: j = 5,
    options: M,
    renderOption: k,
    onSelectionChange: U,
    value: G,
    defaultValue: B
  } = e, Z = true !== G, F = i.useId(), [V, H] = i.useState({
    isInitialized: false,
    isOpen: false,
    activeDescendantIndex: null,
    listItems: [],
    filteredItems: [],
    selectedItems: new Set,
    longestLabelCharCount: 5,
    width: "200px",
    dropDownHeight: "auto"
  }), Y = i.useContext(s.U), W = i.useRef(null), K = i.useRef(null), z = null != A ? A : "multiple" !== t, q = V.selectedItems.size > 0, X = V.listItems.length > j, Q = !V.isInitialized || E || b || O, J = i.useCallback(() => {
    Q || H(e => v(y({}, e), {
      isOpen: !e.isOpen
    }))
  }, [Q]), $ = i.useCallback(() => {
    var e;
    H(e => v(y({}, e), {
      isOpen: false
    })), null == (e = W.current) || e.focus()
  }, []), ee = i.useCallback(() => {
    var e;
    H(e => v(y({}, e), {
      selectedItems: new Set
    })), U(null), null == (e = W.current) || e.focus()
  }, [U]), et = i.useCallback(e => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), H(e => v(y({}, e), {
          isOpen: true
        }));
        break;
      case "Escape":
        q && T && (e.preventDefault(), e.stopPropagation(), ee())
    }
  }, [ee, q, T]), en = i.useCallback(e => null != k ? k(e) : e, [k]);
  i.useLayoutEffect(() => {
    let e = new Set,
      t = 6,
      n = M.map(n => {
        let r = en(n);
        return t = Math.max(t, r.label.length), !V.isInitialized && (null != G || null != B) && (0, p.tw)(r.value, null != G ? G : B) && e.add(r), r
      });
    H(r => v(y({}, r), {
      listItems: n,
      isInitialized: true,
      longestLabelCharCount: t,
      selectedItems: r.isInitialized ? r.selectedItems : e
    }))
  }, [M, en]), i.useEffect(() => {
    !Q && Z && (null == G ? H(e => v(y({}, e), {
      selectedItems: new Set
    })) : H(e => v(y({}, e), {
      selectedItems: new Set(e.listItems.filter(e => (0, p.tw)(e.value, G)))
    })))
  }, [G, Q, Z]), i.useLayoutEffect(() => {
    if (null == K.current) return;
    let e = new ResizeObserver((0, a.throttle)(() => {
      var e, n, r, i;
      let a = "",
        o = "auto";
      if (S) a = "".concat(null != (n = null == (e = K.current) ? true : e.getBoundingClientRect().width) ? n : 0, "px");
      else {
        let e = "multiple" === t ? 1.5 : 1;
        a = "calc((".concat(V.longestLabelCharCount, "ch + 20px + 24px + 36px) * ").concat(e, ")")
      }
      X && (o = (null != (i = null == (r = K.current) ? true : r.getBoundingClientRect().height) ? i : 40) * j), H(e => v(y({}, e), {
        width: a,
        dropDownHeight: o
      }))
    }, 500));
    return e.observe(K.current), () => e.disconnect()
  }, [S, t, j, X, V.longestLabelCharCount]);
  let er = i.useCallback(e => {
    if (Q) return;
    let n = Array.from(e);
    if ("multiple" === t && n.length < 1) U(null);
    else if ("multiple" === t) U(new Set(n.map(e => e.value)));
    else {
      var r, i;
      U(null != (i = null == (r = n[0]) ? true : r.value) ? i : null)
    }
    z && V.isOpen && $(), H(t => v(y({}, t), {
      selectedItems: e
    }))
  }, [Q, t, U, z, $, V.isOpen]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(_.q, {
      ref: K,
      disabled: E,
      readOnly: b,
      loading: O,
      clearable: T,
      fullWidth: S,
      isOpen: V.isOpen,
      isInert: Q,
      hasValue: q,
      width: V.width,
      handleToggle: J,
      handleClear: ee,
      children: (0, r.jsx)(c.tEY, {
        ringTarget: K,
        children: (0, r.jsxs)("button", {
          id: n,
          ref: W,
          autoFocus: I,
          className: g.selectButton,
          onClick: J,
          onKeyDown: et,
          disabled: E || b,
          "aria-expanded": V.isOpen,
          "aria-busy": O,
          "aria-haspopup": "listbox",
          "aria-controls": F,
          "aria-describedby": "".concat(null == Y ? true : Y.describedById),
          "aria-errormessage": null == Y ? true : Y.errorMessageId,
          "aria-invalid": (null == Y ? true : Y.errorMessageId) != null,
          children: [(0, r.jsxs)(l.n, {
            children: [w, ", "]
          }), (0, r.jsx)(C, {
            placeholder: P,
            selectedItems: V.selectedItems
          })]
        })
      })
    }), (0, r.jsx)(f.M, {
      name: D,
      form: L,
      disabled: Q,
      autoComplete: x,
      selectionMode: t,
      selectedItems: V.selectedItems,
      onSelectionChange: er,
      listItems: V.listItems
    }), !Q && (0, r.jsx)(u.L, {
      targetElementRef: W,
      isOpen: V.isOpen,
      onRequestClose: $,
      width: V.width,
      height: V.dropDownHeight,
      children: (0, r.jsx)(d.w, {
        id: F,
        required: o,
        items: V.listItems,
        selectionMode: t,
        selectedItems: V.selectedItems,
        onSelectionChange: er,
        shouldFocusWrap: R,
        renderListItem: e => (0, r.jsx)(N, {
          item: e
        })
      })
    })]
  })
}

function C(e) {
  let {
    placeholder: t,
    selectedItems: n
  } = e;
  if (null == n || 0 === n.size) return (0, r.jsx)("div", {
    className: g.placeholder,
    children: (0, r.jsx)(c.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: t
    })
  });
  let i = Array.from(n);
  return i.length > 1 ? (0, r.jsx)("div", {
    className: g.multipleValues,
    children: (0, r.jsx)(c.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      children: i.map(e => e.label).join(", ")
    })
  }) : (0, r.jsx)(N, {
    item: i[0]
  })
}

function N(e) {
  let {
    item: t
  } = e;
  return (0, r.jsx)("div", {
    className: E.listBoxItemContent,
    children: (0, r.jsx)(c.xvT, {
      variant: "text-md/medium",
      color: "currentColor",
      children: t.label
    })
  })
}