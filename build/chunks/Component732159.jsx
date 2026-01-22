/** Chunk was on web.js **/
/** chunk id: 732159, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ConfirmModal: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk189213 = require("./189213.jsx"),
  Chunk696208 = require("./696208.jsx");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = d(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function d(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function f(e) {
  let {
    confirmText: t,
    cancelText: n,
    checkboxProps: l,
    onConfirm: d,
    onCancel: f,
    onCloseCallback: p,
    variant: _ = "critical"
  } = e, h = u(e, ["confirmText", "cancelText", "checkboxProps", "onConfirm", "onCancel", "onCloseCallback", "variant"]), {
    i18n: m
  } = (0, a.G9)(), g = m.CANCEL, E = m.INLINE_NOTICE_GENERIC_ERROR, [b, y] = i.useState(false), O = i.useRef(p);
  i.useLayoutEffect(() => {
    O.current = p
  }), i.useLayoutEffect(() => () => {
    var e;
    null == (e = O.current) || e.call(O)
  }, []);
  let [A, v] = i.useState(true), S = e => {
    v(e)
  };
  return (0, r.jsx)(s.Modal, c({
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
        v(true), y(true);
        try {
          await (null == d ? true : d(S)), h.onClose()
        } catch (e) {
          throw y(false), v(e => null != e ? e : E), e
        }
      },
      disabled: b,
      loading: b
    }],
    actionBarInput: null != l ? (0, r.jsx)(o.e, c({}, l)) : true,
    role: "alertdialog",
    notice: null != A ? {
      message: A,
      type: "critical"
    } : true
  }, h))
}