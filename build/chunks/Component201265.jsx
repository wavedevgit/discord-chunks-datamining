/** Chunk was on web.js **/
/** chunk id: 201265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ConfirmModal: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk775086 = require("./775086.jsx"),
  Chunk144771 = require("./144771.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = d(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function f(e) {
  var {
    confirmText: t,
    cancelText: n,
    checkboxProps: l,
    onConfirm: d,
    onCancel: f,
    onCloseCallback: p,
    variant: _ = "critical"
  } = e, h = u(e, ["confirmText", "cancelText", "checkboxProps", "onConfirm", "onCancel", "onCloseCallback", "variant"]);
  let {
    i18n: m
  } = (0, a.ZF)(), g = m.CANCEL, E = m.INLINE_NOTICE_GENERIC_ERROR, [b, y] = i.useState(false), O = i.useRef(p);
  i.useLayoutEffect(() => {
    O.current = p
  }), i.useLayoutEffect(() => () => {
    var e;
    null == (e = O.current) || e.call(O)
  }, []);
  let [v, S] = i.useState(true), I = e => {
    S(e)
  };
  return (0, r.jsx)(o.Modal, c({
    actions: [{
      text: null != n ? n : g,
      variant: "secondary",
      onClick: () => {
        null == f || f(), h.onClose()
      }
    }, {
      text: t,
      variant: "critical" === _ ? "critical-primary" : _,
      onClick: async () => {
        S(true), y(true);
        try {
          await (null == d ? true : d(I)), h.onClose()
        } catch (e) {
          throw y(false), S(e => null != e ? e : E), e
        }
      },
      disabled: b,
      loading: b
    }],
    actionBarInput: null != l ? (0, r.jsx)(s.B, c({}, l)) : true,
    role: "alertdialog",
    notice: null != v ? {
      message: v,
      type: "critical"
    } : true
  }, h))
}