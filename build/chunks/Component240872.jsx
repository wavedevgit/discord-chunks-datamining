/** Chunk was on web.js **/
/** chunk id: 240872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./539854.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk273352 = require("./273352.jsx"),
  Chunk952265 = require("./952265.js"),
  Chunk755721 = require("./755721.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let _ = {
  show(e) {
    let {
      title: t,
      body: n,
      confirmColor: c,
      confirmText: d,
      confirmVariant: _ = "primary",
      cancelText: p,
      onConfirm: h,
      onCancel: m,
      onCloseCallback: g,
      secondaryConfirmText: E,
      onConfirmSecondary: b,
      className: y,
      titleClassName: O,
      contextKey: v
    } = e;
    (0, o.h7)(e => {
      if (null == E) {
        let a = [];
        return null != p && "" !== p && a.push({
          text: p,
          onClick: () => {
            null == m || m(), e.onClose()
          },
          variant: "secondary"
        }), a.push({
          text: null != d ? d : l.intl.string(l.t.BddRzS),
          onClick: () => {
            null == h || h(), e.onClose()
          },
          variant: _
        }), (0, r.jsx)(i.Modal, f(u({}, e), {
          size: "sm",
          title: t,
          subtitle: n,
          actions: a
        }))
      }
      return (0, r.jsx)(a.default, f(u({}, e), {
        title: t,
        body: n,
        confirmColor: "critical-primary" === _ ? s.Tt.RED : s.Tt.BRAND,
        confirmText: d,
        cancelText: p,
        onConfirm: h,
        onCancel: m,
        secondaryConfirmText: E,
        onConfirmSecondary: b,
        className: y,
        titleClassName: O
      }))
    }, {
      onCloseCallback: g
    }, v)
  },
  close() {},
  confirm(e) {
    return new Promise(t => {
      this.show(u({
        onConfirm() {
          t(true)
        },
        cancelText: l.intl.string(l.t["ETE/oC"]),
        onCancel() {
          t(false)
        }
      }, e))
    })
  }
}