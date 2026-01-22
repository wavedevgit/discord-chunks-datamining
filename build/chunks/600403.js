/** Chunk was on 21738 **/
/** chunk id: 600403, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./457529.js"), require("./142703.js");
var Chunk954571 = require("./954571.js"),
  Chunk636401 = require("./636401.js"),
  Chunk722306 = require("./722306.js"),
  Chunk105130 = require("./105130.js"),
  Chunk652215 = require("./652215.js");
let o = {
  [Chunk652215.e$_.SUBSCRIBE]: {
    async handler(e) {
      let {
        server: t,
        socket: n,
        evt: o,
        args: c
      } = e, u = t.events[o];
      if (null == u) throw new i.A({
        errorCode: s.Lw6.INVALID_EVENT
      }, "Invalid event: ".concat(o));
      if (!(0, l.A)(n.authorization.scopes, u.scope)) throw new i.A({
        errorCode: s.Lw6.INVALID_PERMISSIONS
      }, "Not authenticated or invalid scope");
      if (r.default.track(s.HAw.RPC_SUBSCRIPTION_REQUESTED, {
          event: o,
          scope: "object" == typeof u.scope ? JSON.stringify(u.scope) : u.scope,
          application_id: n.application.id,
          socket_scope: n.authorization.scopes.toString()
        }), null != u.validation) {
        let e = await t.getJoi();
        if (null != e.validate(c, u.validation(e), {
            convert: false
          }).error) throw new i.A({
          errorCode: s.Lw6.INVALID_PAYLOAD
        }, "Invalid subscription parameters provided")
      }
      let d = u.handler({
          args: c,
          socket: n
        }),
        p = (0, a.M)(n, o, c);
      return new Promise(e => {
        setImmediate(() => {
          t.addSubscription(n, o, c, d), null != p && t.dispatchToSubscriptions(o, e => e.socket.id === n.id, p)
        }), e({
          evt: o
        })
      })
    }
  },
  [Chunk652215.e$_.UNSUBSCRIBE]: {
    handler(e) {
      let {
        server: t,
        socket: n,
        evt: r,
        args: l
      } = e;
      if (null == t.events[r]) throw new i.A({
        errorCode: s.Lw6.INVALID_EVENT
      }, "Invalid event: ".concat(r));
      return t.removeSubscription(n, r, l), {
        evt: r
      }
    }
  }
}