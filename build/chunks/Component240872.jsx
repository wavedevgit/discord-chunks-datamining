/** Chunk was on web.js **/
/** chunk id: 240872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let u = {
  show(e) {
    let {
      title: t,
      body: o,
      confirmText: l,
      confirmVariant: u = "primary",
      cancelText: d,
      onConfirm: f,
      onCancel: p,
      onCloseCallback: _,
      contextKey: h
    } = e;
    (0, i.ZDy)(async () => {
      let {
        Modal: e
      } = await Promise.resolve().then(n.bind(n, 775086));
      return n => {
        let i = [];
        return null != d && "" !== d && i.push({
          text: d,
          onClick: async () => {
            null == p || p(), await n.onClose()
          },
          variant: "secondary"
        }), i.push({
          text: null != l ? l : a.intl.string(a.t.BddRzS),
          onClick: async () => {
            null == f || f(), await n.onClose()
          },
          variant: u
        }), (0, r.jsx)(e, c(s({}, n), {
          size: "sm",
          title: t,
          subtitle: o,
          actions: i
        }))
      }
    }, {
      onCloseCallback: _,
      contextKey: h
    })
  },
  close() {},
  confirm(e) {
    return new Promise(t => {
      this.show(s({
        onConfirm() {
          t(true)
        },
        cancelText: a.intl.string(a.t["ETE/oC"]),
        onCancel() {
          t(false)
        }
      }, e))
    })
  }
}