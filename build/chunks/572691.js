/** Chunk was on web.js **/
/** chunk id: 572691, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./539854.js");
var Chunk97613 = require("./97613.js"),
  i = require.n(Chunk97613),
  Chunk570140 = require("./570140.js"),
  Chunk777639 = require("./777639.js"),
  Chunk272423 = require("./272423.js"),
  Chunk808663 = require("./808663.js"),
  Chunk178535 = require("./178535.js"),
  Chunk981631 = require("./981631.js");

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
      o = arguments.length > 4 && true !== arguments[4] ? arguments[4] : u.IlC.APP;
    return (0, s.Ll)(f({
      key: n,
      modal: (0, c.Z)(e, {}, t, n)
    }, r)), a.Z.dispatch({
      type: "MODAL_PUSH",
      modal: e,
      props: t,
      key: n,
      appContext: o
    }), n
  },
  pushLazy(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : i()("modal"),
      r = arguments.length > 3 ? arguments[3] : true,
      a = (0, o.D)();
    return null != a && a.isReady() ? (e instanceof Promise ? e.then(e => {
      let {
        default: t
      } = e;
      return t
    }) : e()).then(e => this.push(e, t, n, r)) : new Promise(i => l.Z.enqueue(() => i(this.pushLazy(e, t, n, r))))
  },
  updateAnimation(e, t) {
    a.Z.dispatch({
      type: "MODAL_UPDATE",
      key: e,
      props: {},
      partial: true,
      animation: t
    })
  },
  pop() {
    (0, Chunk272423.GZ)(), Chunk570140.Z.dispatch({
      type: "MODAL_POP"
    })
  },
  popWithKey(e, t) {
    (0, s.GZ)(e, t), a.Z.dispatch({
      type: "MODAL_POP",
      key: e,
      onExited: t
    })
  },
  popAboveKey: e => (0, s.om)(e),
  popAll() {
    (0, Chunk272423.lE)(), Chunk570140.Z.dispatch({
      type: "MODAL_POP_ALL"
    }), Chunk570140.Z.dispatch({
      type: "EMAIL_VERIFICATION_MODAL_CLOSE"
    }), Chunk570140.Z.dispatch({
      type: "GUILD_SETTINGS_CLOSE"
    }), Chunk570140.Z.dispatch({
      type: "HIDE_ACTION_SHEET"
    }), Chunk570140.Z.dispatch({
      type: "DISPLAYED_INVITE_CLEAR"
    }), Chunk570140.Z.dispatch({
      type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
    }), Chunk570140.Z.dispatch({
      type: "QUICKSWITCHER_HIDE"
    }), Chunk570140.Z.dispatch({
      type: "USER_SETTINGS_MODAL_CLOSE"
    }), Chunk570140.Z.dispatch({
      type: "CONNECTIONS_GRID_MODAL_HIDE"
    }), Chunk570140.Z.dispatch({
      type: "USER_PROFILE_MODAL_CLOSE"
    })
  }
}