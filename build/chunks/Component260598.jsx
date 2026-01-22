/** Chunk was on web.js **/
/** chunk id: 260598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk504345 = require("./504345.jsx"),
  Chunk823607 = require("./823607.jsx"),
  Chunk511274 = require("./511274.jsx"),
  Chunk189812 = require("./189812.jsx"),
  Chunk688564 = require("./688564.js"),
  Chunk829681 = require("./829681.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = b(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let y = 10,
  O = 7.23;

function A(e) {
  var t;
  let {
    value: n,
    placeholder: a = "",
    autoFocus: l = false,
    autosize: d = false,
    minLength: _,
    maxLength: m,
    error: b,
    defaultDirty: A,
    showCharacterCount: S,
    showRemainingCharacterCount: I = true,
    rows: T = 3,
    inputRef: C
  } = e, N = E(e, ["value", "placeholder", "autoFocus", "autosize", "minLength", "maxLength", "error", "defaultDirty", "showCharacterCount", "showRemainingCharacterCount", "rows", "inputRef"]), {
    fieldProps: R,
    props: w
  } = (0, o.ndh)(N), {
    disabled: P
  } = R, D = (0, u.Y)({
    validateOn: "change",
    error: b,
    value: n,
    minLength: _,
    maxLength: m,
    defaultDirty: A
  }), x = i.useMemo(() => {
    if (null == m) return y;
    let e = "".concat(m).length;
    return O * (e += "".concat(m, " / ").length) + y
  }, [m]), L = e => {
    let {
      onChange: t
    } = w;
    null == t || t(e.currentTarget.value), D.setShouldValidate(true)
  }, j = S ? (0, r.jsx)(c.n, {
    value: n,
    maxLength: I && null != m ? m : true
  }) : null;
  return (0, r.jsx)(o.D0$, g(h({}, R), {
    trailingAuxiliaryContent: j,
    errorMessage: D.hasError && null != (t = D.errorMessage) ? t : true,
    children: (0, r.jsx)(o.FON, {
      validation: D,
      disabled: P,
      children: (0, r.jsx)(o.vN3, {
        children: (0, r.jsx)(v, g(h({
          autosize: d,
          className: s()(f.Tg, p.qD),
          style: {
            paddingRight: x
          },
          placeholder: a,
          value: n,
          autoFocus: l,
          minLength: _,
          maxLength: m,
          rows: T,
          disabled: P,
          "data-mana-component": "text-area"
        }, w), {
          onChange: L,
          ref: C
        }))
      })
    })
  }))
}

function v(e) {
  let {
    "aria-labelledby": t,
    autosize: n
  } = e, a = E(e, ["aria-labelledby", "autosize"]), s = (0, l.xW)(), c = i.useContext(o._zY), u = n ? d.d : "textarea";
  return (0, r.jsx)(u, g(h({}, a), {
    id: null == c ? true : c.controlId,
    "aria-labelledby": null != t ? t : s.titleId,
    "aria-describedby": null == c ? true : c.describedById,
    "aria-errormessage": null == c ? true : c.errorMessageId,
    "aria-invalid": (null == c ? true : c.errorMessageId) != null
  }))
}