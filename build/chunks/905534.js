/** Chunk was on 1272 **/
/** chunk id: 905534, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./49124.js"), require("./358797.js");
var Chunk626135 = require("./626135.js"),
  Chunk996106 = require("./996106.js"),
  Chunk34954 = require("./34954.js"),
  Chunk986768 = require("./986768.js"),
  Chunk981631 = require("./981631.js");
let s = {
  [Chunk981631.Etm.SUBSCRIBE]: {
    async handler(e) {
      let {
        server: t,
        socket: n,
        evt: s,
        args: c
      } = e, u = t.events[s];
      if (null == u) throw new i.Z({
        errorCode: o.lTL.INVALID_EVENT
      }, "Invalid event: ".concat(s));
      if (!(0, l.Z)(n.authorization.scopes, u.scope)) throw new i.Z({
        errorCode: o.lTL.INVALID_PERMISSIONS
      }, "Not authenticated or invalid scope");
      if (r.default.track(o.rMx.RPC_SUBSCRIPTION_REQUESTED, {
          event: s,
          scope: "object" == typeof u.scope ? JSON.stringify(u.scope) : u.scope,
          application_id: n.application.id,
          socket_scope: n.authorization.scopes.toString()
        }), null != u.validation) {
        let e = await t.getJoi();
        if (null != e.validate(c, u.validation(e), {
            convert: false
          }).error) throw new i.Z({
          errorCode: o.lTL.INVALID_PAYLOAD
        }, "Invalid subscription parameters provided")
      }
      let d = u.handler({
          args: c,
          socket: n
        }),
        p = (0, a.V)(n, s, c);
      return new Promise(e => {
        setImmediate(() => {
          t.addSubscription(n, s, c, d), null != p && t.dispatchToSubscriptions(s, e => e.socket.id === n.id, p)
        }), e({
          evt: s
        })
      })
    }
  },
  [Chunk981631.Etm.UNSUBSCRIBE]: {
    handler(e) {
      let {
        server: t,
        socket: n,
        evt: r,
        args: l
      } = e;
      if (null == t.events[r]) throw new i.Z({
        errorCode: o.lTL.INVALID_EVENT
      }, "Invalid event: ".concat(r));
      return t.removeSubscription(n, r, l), {
        evt: r
      }
    }
  }
}