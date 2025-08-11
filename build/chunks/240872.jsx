/** Chunk was on web.js **/
/** chunk id: 240872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk952265 = require("./952265.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk468026 = require("./468026.js"),
  Chunk724723 = require("./724723.js"),
  Chunk388032 = require("./388032.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = {
  show(e) {
    let {
      title: t,
      body: n,
      confirmColor: u,
      confirmText: f,
      confirmVariant: p = "primary",
      cancelText: h,
      onConfirm: m,
      onCancel: g,
      onCloseCallback: E,
      secondaryConfirmText: b,
      onConfirmSecondary: y,
      className: O,
      titleClassName: v,
      contextKey: I
    } = e, T = l.Z.getCurrentConfig({
      location: "AlertActionCreators"
    }, {
      autoTrackExposure: true
    }).enabled;
    (0, i.h7)(e => {
      if (null == b && T) {
        let i = [];
        return null != h && "" !== h && i.push({
          text: h,
          onClick: () => {
            null == g || g(), e.onClose()
          },
          variant: "secondary"
        }), i.push({
          text: null != f ? f : c.intl.string(c.t.BddRzc),
          onClick: () => {
            null == m || m(), e.onClose()
          },
          variant: p
        }), <o.Modal{..._(d({}, e), {
          size: "sm",
          title: t,
          subtitle: n,
          actions: i
        })} />
      }
      return <s.default{..._(d({}, e), {
        title: t,
        body: n,
        confirmColor: "critical-primary" === p ? a.Tt.RED : a.Tt.BRAND,
        confirmText: f,
        cancelText: h,
        onConfirm: m,
        onCancel: g,
        secondaryConfirmText: b,
        onConfirmSecondary: y,
        className: O,
        titleClassName: v
      })} />
    }, {
      onCloseCallback: E
    }, I)
  },
  close() {},
  confirm(e) {
    return new Promise(t => {
      this.show(d({
        onConfirm() {
          t(true)
        },
        cancelText: c.intl.string(c.t["ETE/oK"]),
        onCancel() {
          t(false)
        }
      }, e))
    })
  }
}