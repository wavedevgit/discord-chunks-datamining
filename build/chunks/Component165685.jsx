/** Chunk was on web.js **/
/** chunk id: 165685, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk439372 = require("./439372.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk536194 = require("./536194.js"),
  Chunk715314 = require("./715314.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = "LOGIN_REQUIRED_ACTIONS_MODAL_KEY";
class E extends Chunk439372.A {
  handleConnectionOpen() {
    let e = o.default.getCurrentUser();
    if (null == e || c.P.isDisallowPopupsSet()) return;
    let t = u.A.requiredActionsIncludes(e.id, [d.Kby.UPDATE_PASSWORD]);
    u.A.wasLoginAttemptedInSession(e.id) && t ? (0, i.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 739693));
      return function(t) {
        let n = async () => {
          await t.onClose(), a.A.logout("login_required_account_manager", d.BVt.LOGIN)
        }, i = () => {
          l.default.track(d.HAw.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose()
        };
        return (0, r.jsx)(e, m(_({}, t), {
          onSuccess: i,
          onClose: n,
          requirementsUpdated: true
        }))
      }
    }, {
      modalKey: g,
      onCloseRequest: f.FX,
      instant: true
    }) : t && a.A.logout("login_required_account_manager", d.BVt.LOGIN)
  }
  constructor(...e) {
    super(...e), p(this, "actions", {
      POST_CONNECTION_OPEN: this.handleConnectionOpen
    })
  }
}
let y = new E