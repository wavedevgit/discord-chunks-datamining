/** Chunk was on 86142 **/
/** chunk id: 459893, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./747238.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk311907 = require("./311907.js"),
  Chunk830215 = require("./830215.js"),
  Chunk6981 = require("./6981.js"),
  Chunk964486 = require("./964486.js"),
  Chunk351671 = require("./351671.js"),
  Chunk463347 = require("./463347.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk129851 = require("./129851.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");

function A(e) {
  var t, n;
  let A = i.useCallback(t => {
      var n, r;
      let i; + ((null == (i = (0, l.B6)(t, {
        path: f.BVt.CHANNEL(h.pv.guildId(), h.pv.channelId())
      })) || null == (n = i.params) ? true : n.channelId) !== _.VV.ROLE_SUBSCRIPTIONS) ? (null != (r = e.transitionTo) ? r : p.pX)(t) : p.bG(t)
    }, [e.transitionTo]),
    {
      isAuthenticated: x,
      loginStatus: E
    } = (0, a.cf)([g.default], () => ({
      isAuthenticated: g.default.isAuthenticated(),
      loginStatus: g.default.getLoginStatus()
    })),
    {
      location: v,
      redirectTo: j
    } = e,
    [y, b] = i.useState(x);

  function S(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    } = e;
    (0, c.Qh)({
      handoffKey: t,
      handoffToken: n,
      handoffSource: r
    }), b(false)
  }
  return ((0, u.Ay)(() => {
    if (null != v) {
      let {
        handoff_key: e,
        handoff_token: t
      } = (0, s.parse)(v.search);
      if (null != e && null != t) {
        let n = null != j ? (0, d.Q)(j) : true;
        y ? o.A.logout("handoff", null).finally(() => {
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
  }), y || E === f.aUe.LOGGING_IN) ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(m.A, (t = function(e) {
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
    transitionTo: A
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