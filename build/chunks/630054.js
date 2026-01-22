/** Chunk was on web.js **/
/** chunk id: 630054, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./321073.js");
var Chunk296489 = require("./296489.js"),
  i = require.n(Chunk296489),
  Chunk73153 = require("./73153.js"),
  Chunk250953 = require("./250953.js"),
  Chunk33524 = require("./33524.js"),
  Chunk241943 = require("./241943.js"),
  Chunk830126 = require("./830126.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = {
  push(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : i()("modal"),
      r = arguments.length > 3 ? arguments[3] : true,
      s = arguments.length > 4 && true !== arguments[4] ? arguments[4] : u.BRT.APP;
    return (0, o.GR)(f({
      key: n,
      modal: (0, c.A)(e, {}, t, n)
    }, r)), a.h.dispatch({
      type: "MODAL_PUSH",
      modal: e,
      props: t,
      key: n,
      appContext: s
    }), n
  },
  pushLazy(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : i()("modal"),
      r = arguments.length > 3 ? arguments[3] : true,
      a = (0, s.Y)();
    return null != a && a.isReady() ? (e instanceof Promise ? e.then(e => {
      let {
        default: t
      } = e;
      return t
    }) : e()).then(e => this.push(e, t, n, r)) : new Promise(i => l.A.enqueue(() => i(this.pushLazy(e, t, n, r))))
  },
  updateAnimation(e, t) {
    a.h.dispatch({
      type: "MODAL_UPDATE",
      key: e,
      props: {},
      partial: true,
      animation: t
    })
  },
  pop() {
    (0, o.tu)(), a.h.dispatch({
      type: "MODAL_POP"
    })
  },
  popWithKey(e, t) {
    (0, o.tu)(e, t), a.h.dispatch({
      type: "MODAL_POP",
      key: e,
      onExited: t
    })
  },
  popAboveKey: e => (0, o.WR)(e),
  popAll() {
    (0, o.f3)(), a.h.dispatch({
      type: "MODAL_POP_ALL"
    }), a.h.dispatch({
      type: "EMAIL_VERIFICATION_MODAL_CLOSE"
    }), a.h.dispatch({
      type: "GUILD_SETTINGS_CLOSE"
    }), a.h.dispatch({
      type: "HIDE_ACTION_SHEET"
    }), a.h.dispatch({
      type: "DISPLAYED_INVITE_CLEAR"
    }), a.h.dispatch({
      type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
    }), a.h.dispatch({
      type: "QUICKSWITCHER_HIDE"
    }), a.h.dispatch({
      type: "USER_SETTINGS_MODAL_CLOSE"
    }), a.h.dispatch({
      type: "CONNECTIONS_GRID_MODAL_HIDE"
    }), a.h.dispatch({
      type: "USER_PROFILE_MODAL_CLOSE"
    })
  }
}