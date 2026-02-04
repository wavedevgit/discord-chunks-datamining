/** Chunk was on 21738 **/
/** chunk id: 428539, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk73153 = require("./73153.js"),
  Chunk77468 = require("./77468.js"),
  Chunk573648 = require("./573648.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk962173 = require("./962173.js"),
  Chunk203982 = require("./203982.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js"),
  Chunk818348 = require("./818348.js");
let m = new Set([Chunk360469.AM, Chunk360469.eK]),
  A = {
    [Chunk818348.e$.GET_PROVIDER_ACCESS_TOKEN]: {
      scope: {
        [Chunk613057.sm.ANY]: [Chunk613057.VH]
      },
      validation: e => (0, d.A)(e).required().keys({
        provider: e.string().required(),
        connection_redirect: e.string()
      }),
      handler: e => {
        let {
          socket: t,
          args: {
            provider: n,
            connection_redirect: d
          }
        } = e;
        (0, u.lG)(t.transport);
        let p = (0, u.D2)(t.application),
          f = l.A.get(n);
        if (null == f) throw new c.A({
          errorCode: g.Lw.INVALID_PROVIDER
        }, 'Platform not found for provider "'.concat(n, '"'));
        if (n === h.fg2.AMAZON_MUSIC) {
          if (!m.has(p)) throw new c.A({
            errorCode: g.Lw.UNAUTHORIZED_FOR_APPLICATION
          }, "Command not available for this application")
        } else throw new c.A({
          errorCode: g.Lw.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        return new Promise(async (e, t) => {
          let l = s.A.getAccount(null, n);
          if (null == l) {
            function u(t) {
              var n;
              if (null == f) return;
              let r = (null != (n = t.accounts) ? n : []).find(e => e.type === f.type);
              null != r && (e({
                access_token: r.access_token
              }), m())
            }

            function p() {
              t(new c.A({
                errorCode: g.Lw.OAUTH2_ERROR
              }, 'OAuth2 setup for "'.concat(n, '" failed'))), m()
            }

            function m() {
              r.h.unsubscribe("USER_CONNECTIONS_UPDATE", u), o._.unsubscribe(h.jej.CONNECTIONS_CALLBACK_ERROR, p)
            }
            r.h.subscribe("USER_CONNECTIONS_UPDATE", u), o._.subscribe(h.jej.CONNECTIONS_CALLBACK_ERROR, p), (0, a.A)({
              platformType: f.type,
              location: h.ThZ.ACTIVITY_RPC,
              successRedirect: d
            })
          } else try {
            let t = await i.A.refreshAccessToken(f.type, l.id);
            if (null == t) throw new c.A({
              errorCode: g.Lw.OAUTH2_ERROR
            }, "Refreshing access token did not return a new access token");
            e({
              access_token: t
            })
          } catch (e) {
            t(e)
          }
        })
      }
    },
    [Chunk818348.e$.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
      scope: {
        [Chunk613057.sm.ANY]: [Chunk613057.VH]
      },
      validation: e => (0, d.A)(e).required().keys({
        provider: e.string().required()
      }),
      handler: async e => {
        let {
          socket: t,
          args: {
            provider: n
          }
        } = e;
        (0, u.lG)(t.transport);
        let r = (0, u.D2)(t.application),
          a = l.A.get(n);
        if (null == a) throw new c.A({
          errorCode: g.Lw.INVALID_PROVIDER
        }, 'Platform not found for provider "'.concat(n, '"'));
        if (n === h.fg2.AMAZON_MUSIC) {
          if (!m.has(r)) throw new c.A({
            errorCode: g.Lw.UNAUTHORIZED_FOR_APPLICATION
          }, "Command not available for this application")
        } else throw new c.A({
          errorCode: g.Lw.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        let o = s.A.getAccount(null, n);
        if (null == o) throw new c.A({
          errorCode: g.Lw.NO_CONNECTION_FOUND
        }, "No connection found");
        let d = await i.A.refreshAccessToken(a.type, o.id);
        if (null == d) throw new c.A({
          errorCode: g.Lw.OAUTH2_ERROR
        }, "Refreshing access token did not return a new access token");
        return {
          access_token: d
        }
      }
    }
  }