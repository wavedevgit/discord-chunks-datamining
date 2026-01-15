/** Chunk was on web.js **/
/** chunk id: 858386, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk147913 = require("./147913.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk374023 = require("./374023.js"),
  Chunk344532 = require("./344532.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js");

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
class E extends Chunk147913.Z {
  handleConnectionOpen() {
    let e = s.default.getCurrentUser();
    if (null == e || c.s.isDisallowPopupsSet()) return;
    let t = u.Z.requiredActionsIncludes(e.id, [d.ane.UPDATE_PASSWORD]);
    u.Z.wasLoginAttemptedInSession(e.id) && t ? (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 194530));
      return function(t) {
        let n = async () => {
          await t.onClose(), a.Z.logout("login_required_account_manager", d.Z5c.LOGIN)
        }, i = () => {
          l.default.track(d.rMx.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose()
        };
        return (0, r.jsx)(e, m(_({}, t), {
          onSuccess: i,
          onClose: n,
          requirementsUpdated: true
        }))
      }
    }, {
      modalKey: g,
      onCloseRequest: f.Vq,
      instant: true
    }) : t && a.Z.logout("login_required_account_manager", d.Z5c.LOGIN)
  }
  constructor(...e) {
    super(...e), p(this, "actions", {
      POST_CONNECTION_OPEN: this.handleConnectionOpen
    })
  }
}
let b = new E