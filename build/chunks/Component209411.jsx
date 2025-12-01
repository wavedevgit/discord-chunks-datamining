/** Chunk was on 27978 **/
/** chunk id: 209411, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./35282.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js"),
  Chunk442837 = require("./442837.js"),
  Chunk893776 = require("./893776.js"),
  Chunk899742 = require("./899742.js"),
  Chunk493773 = require("./493773.js"),
  Chunk743142 = require("./743142.js"),
  Chunk893607 = require("./893607.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk781428 = require("./781428.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");

function x(e) {
  var t, n;
  let x = i.useCallback(t => {
      if (function(e) {
          var t;
          let n = (0, l.LX)(e, {
            path: f.Z5c.CHANNEL(h.Hw.guildId(), h.Hw.channelId())
          });
          return (null == n || null == (t = n.params) ? true : t.channelId) === _.oC.ROLE_SUBSCRIPTIONS
        }(t)) g.dL(t);
      else {
        var n;
        (null != (n = e.transitionTo) ? n : g.uL)(t)
      }
    }, [e.transitionTo]),
    {
      isAuthenticated: E,
      loginStatus: v
    } = (0, a.cj)([m.default], () => ({
      isAuthenticated: m.default.isAuthenticated(),
      loginStatus: m.default.getLoginStatus()
    })),
    {
      location: j,
      redirectTo: b
    } = e,
    [I, y] = i.useState(E);

  function S(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    } = e;
    (0, c.Yz)({
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    }), y(false)
  }
  return ((0, u.ZP)(() => {
    if (null != j) {
      let {
        handoff_key: e,
        handoff_token: t
      } = (0, s.parse)(j.search);
      if (null != e && null != t) {
        let n = null != b ? (0, d.L)(b) : true;
        I ? o.Z.logout("handoff", null).finally(() => {
          S({
            handoffKey: e,
            handoffToken: t,
            handoffSource: n
          })
        }) : S({
          handoffKey: e,
          handoffToken: t,
          handoffSource: n
        })
      }
    }
  }), I || v === f.u34.LOGGING_IN) ? (0, r.jsx)(p.q, {}) : (0, r.jsx)(p.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({}, e), n = n = {
    transitionTo: x
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}