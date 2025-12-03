/** Chunk was on web.js **/
/** chunk id: 201265, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ConfirmModal: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk775086 = require("./775086.jsx");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e) {
  var {
    confirmText: t,
    cancelText: n,
    onConfirm: s,
    onCancel: u,
    onCloseCallback: d,
    variant: f = "critical"
  } = e, p = c(e, ["confirmText", "cancelText", "onConfirm", "onCancel", "onCloseCallback", "variant"]);
  let {
    i18n: _
  } = (0, a.ZF)(), m = _.CANCEL, [h, g] = i.useState(false), E = i.useRef(d);
  return i.useLayoutEffect(() => {
    E.current = d
  }), i.useLayoutEffect(() => () => {
    var e;
    null == (e = E.current) || e.call(E)
  }, []), (0, r.jsx)(o.Modal, l({
    actions: [{
      text: null != n ? n : m,
      variant: "secondary",
      onClick: () => {
        null == u || u(), p.onClose()
      }
    }, {
      text: t,
      variant: "primary" === f ? "primary" : "critical-primary",
      onClick: async () => {
        g(true);
        try {
          await (null == s ? true : s()), p.onClose()
        } catch (e) {
          throw g(false), e
        }
      },
      disabled: h,
      loading: h
    }],
    role: "alertdialog"
  }, p))
}