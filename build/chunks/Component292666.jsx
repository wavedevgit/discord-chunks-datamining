/** Chunk was on web.js **/
/** chunk id: 292666, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => S,
  p: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk504345 = require("./504345.jsx"),
  Chunk435371 = require("./435371.js"),
  Chunk823607 = require("./823607.jsx"),
  Chunk511274 = require("./511274.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk100624 = require("./100624.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = y(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function y(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function O(e, t) {
  let n = i.useContext(c.cK);
  return i.useEffect(() => {
    var r, i;
    null == (r = n.setHasValue) || r.call(n, null != t && "" !== t || null != e && "" !== e), null == (i = n.setIsFocused) || i.call(n, false)
  }, []), i.useEffect(() => {
    if (null != e && "" !== e) {
      var t;
      null == (t = n.setHasValue) || t.call(n, true)
    }
  }, [n, e]), n
}

function A(e) {
  let {
    accessory: t,
    inputSize: n,
    disabled: i
  } = e;
  if ("string" == typeof t) return (0, r.jsx)(o.EYj, {
    variant: "text-md/normal",
    color: "input-placeholder-text-default",
    className: _.leadingText,
    children: t
  });
  if ("icon" in t) {
    let {
      tooltip: e
    } = t, a = b(t, ["tooltip"]), s = "md" === n ? "sm" : "xs", l = (0, r.jsx)(o.TVs, E(m({}, a), {
      size: s,
      variant: "input-accessory"
    }));
    return null != e ? (0, r.jsx)(u.m_, {
      asContainer: true,
      text: e,
      shouldShow: !i,
      children: l
    }) : l
  }
  if ("button" in t) return (0, r.jsx)("div", {
    className: _.icon,
    children: t.button
  });
  if ("type" in t && "tags" === t.type) {
    let {
      type: e
    } = t, n = b(t, ["type"]);
    return (0, r.jsx)(o.CR_, E(m({}, n), {
      layout: "inline"
    }))
  }
  if ("type" in t && "image" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: _.image
  });
  let a = t,
    s = "md" === n ? "xs" : "xxs";
  return (0, r.jsx)("div", {
    className: _.icon,
    children: (0, r.jsx)(a, {
      size: s,
      color: l.A.colors.ICON_STRONG
    })
  })
}

function v(e) {
  let {
    inputSize: t,
    onClick: n
  } = e, i = "md" === t ? "xs" : "xxs";
  return (0, r.jsx)(o.DUT, {
    className: _.clearButton,
    onClick: n,
    "aria-label": p.intl.string(p.t.VkKicb),
    children: (0, r.jsx)(o.aXh, {
      size: i,
      color: "currentColor"
    })
  })
}

function S(e) {
  var t;
  let {
    disabled: n = false,
    editable: a,
    inputRef: l,
    focusProps: c,
    name: u = "",
    type: p = "text",
    placeholder: h = "",
    maxLength: g,
    value: y,
    defaultValue: S,
    minLength: T,
    error: C,
    defaultDirty: N = false,
    leading: R,
    trailing: w,
    validateOn: P = "change",
    size: D = "md",
    fullWidth: x = false,
    clearable: L = false,
    showCharacterCount: j = false
  } = e, M = b(e, ["disabled", "editable", "inputRef", "focusProps", "name", "type", "placeholder", "maxLength", "value", "defaultValue", "minLength", "error", "defaultDirty", "leading", "trailing", "validateOn", "size", "fullWidth", "clearable", "showCharacterCount"]), {
    fieldProps: k
  } = (0, o.ndh)(M), U = (0, f.Y)({
    validateOn: P,
    error: C,
    value: y,
    minLength: T,
    maxLength: g,
    defaultDirty: N
  }), {
    setShouldValidate: G
  } = U, V = O(y, S), F = "object" == typeof R && "type" in R && "tags" === R.type, B = e => {
    var t, n;
    let r = e.currentTarget.value;
    null == (t = M.onChange) || t.call(M, r, u), G(true), null == (n = V.setHasValue) || n.call(V, "" !== r)
  }, H = e => {
    var t, n;
    null == (t = M.onFocus) || t.call(M, e), null == (n = V.setIsFocused) || n.call(V, true)
  }, Y = e => {
    var t, n;
    null == (t = M.onBlur) || t.call(M, e), null == (n = V.setIsFocused) || n.call(V, false)
  }, W = e => {
    if (null != M.onClear) M.onClear(e);
    else {
      var t;
      null == (t = M.onChange) || t.call(M, "", u)
    }
  }, K = i.useRef(null), z = M.readOnly;
  null == z && false === a && (z = true);
  let q = null;
  ("boolean" == typeof L ? L && null != y && "" !== y && !z : L.show) ? q = (0, r.jsx)(v, {
    inputSize: D,
    onClick: W
  }): null != w && (q = (0, r.jsx)(A, {
    accessory: w,
    inputSize: D
  }));
  let X = null;
  null != R && (X = (0, r.jsx)(A, {
    accessory: R,
    inputSize: D
  }));
  let Z = j ? (0, r.jsx)(d.n, {
    value: y,
    maxLength: g
  }) : null;
  return (0, r.jsx)(o.D0$, E(m({}, k), {
    errorMessage: U.hasError && null != (t = U.errorMessage) ? t : true,
    trailingAuxiliaryContent: Z,
    children: (0, r.jsxs)(o.FON, {
      ref: K,
      disabled: n,
      validation: U,
      fullWidth: x,
      readOnly: z,
      className: s()(_.container, _[D], {
        [_.hasLeading]: null != X,
        [_.hasTrailing]: null != q,
        [_.hasTags]: F
      }),
      children: [X, (0, r.jsx)(o.vN3, E(m({
        ringTarget: K
      }, c), {
        children: (0, r.jsx)(I, E(m({
          name: u,
          className: _.input,
          disabled: n,
          readOnly: z,
          "aria-required": k.required,
          type: p,
          placeholder: h,
          maxLength: g,
          minLength: T,
          value: y,
          defaultValue: S,
          "data-mana-component": "text-input"
        }, M), {
          onChange: B,
          onBlur: Y,
          onFocus: H,
          ref: l
        }))
      })), q]
    })
  }))
}

function I(e) {
  let {
    value: t,
    defaultValue: n,
    "aria-labelledby": a
  } = e, s = b(e, ["value", "defaultValue", "aria-labelledby"]), l = O(t, n), c = i.useContext(o._zY);
  return (0, r.jsx)("input", E(m({}, s), {
    value: t,
    defaultValue: n,
    id: null == c ? true : c.controlId,
    "aria-labelledby": null != a ? a : l.titleId,
    "aria-describedby": null == c ? true : c.describedById,
    "aria-errormessage": null == c ? true : c.errorMessageId,
    "aria-invalid": (null == c ? true : c.errorMessageId) != null
  }))
}