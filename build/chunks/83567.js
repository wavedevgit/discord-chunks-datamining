/** Chunk was on 1272 **/
/** chunk id: 83567, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk570140 = require("./570140.js"),
  Chunk457330 = require("./457330.js"),
  Chunk726542 = require("./726542.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk585483 = require("./585483.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk231338 = require("./231338.js");
let h = new Set([Chunk701488.Fu, Chunk701488.JT]),
  b = {
    [Chunk231338.Et.GET_PROVIDER_ACCESS_TOKEN]: {
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk186901.wE]
      },
      validation: e => (0, d.Z)(e).required().keys({
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
        (0, u.bu)(t.transport);
        let p = (0, u._f)(t.application),
          g = l.Z.get(n);
        if (null == g) throw new c.Z({
          errorCode: m.lT.INVALID_PROVIDER
        }, 'Platform not found for provider "'.concat(n, '"'));
        if (n === f.ABu.AMAZON_MUSIC) {
          if (!h.has(p)) throw new c.Z({
            errorCode: m.lT.UNAUTHORIZED_FOR_APPLICATION
          }, "Command not available for this application")
        } else throw new c.Z({
          errorCode: m.lT.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        return new Promise(async (e, t) => {
          let l = o.Z.getAccount(null, n);
          if (null == l) {
            function u(t) {
              var n;
              if (null == g) return;
              let r = (null != (n = t.accounts) ? n : []).find(e => e.type === g.type);
              null != r && (e({
                access_token: r.access_token
              }), h())
            }

            function p() {
              t(new c.Z({
                errorCode: m.lT.OAUTH2_ERROR
              }, 'OAuth2 setup for "'.concat(n, '" failed'))), h()
            }

            function h() {
              r.Z.unsubscribe("USER_CONNECTIONS_UPDATE", u), s.S.unsubscribe(f.CkL.CONNECTIONS_CALLBACK_ERROR, p)
            }
            r.Z.subscribe("USER_CONNECTIONS_UPDATE", u), s.S.subscribe(f.CkL.CONNECTIONS_CALLBACK_ERROR, p), (0, a.Z)({
              platformType: g.type,
              location: f.Sbl.ACTIVITY_RPC,
              successRedirect: d
            })
          } else try {
            let t = await i.Z.refreshAccessToken(g.type, l.id);
            if (null == t) throw new c.Z({
              errorCode: m.lT.OAUTH2_ERROR
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
    [Chunk231338.Et.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk186901.wE]
      },
      validation: e => (0, d.Z)(e).required().keys({
        provider: e.string().required()
      }),
      handler: async e => {
        let {
          socket: t,
          args: {
            provider: n
          }
        } = e;
        (0, u.bu)(t.transport);
        let r = (0, u._f)(t.application),
          a = l.Z.get(n);
        if (null == a) throw new c.Z({
          errorCode: m.lT.INVALID_PROVIDER
        }, 'Platform not found for provider "'.concat(n, '"'));
        if (n === f.ABu.AMAZON_MUSIC) {
          if (!h.has(r)) throw new c.Z({
            errorCode: m.lT.UNAUTHORIZED_FOR_APPLICATION
          }, "Command not available for this application")
        } else throw new c.Z({
          errorCode: m.lT.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        let s = o.Z.getAccount(null, n);
        if (null == s) throw new c.Z({
          errorCode: m.lT.NO_CONNECTION_FOUND
        }, "No connection found");
        let d = await i.Z.refreshAccessToken(a.type, s.id);
        if (null == d) throw new c.Z({
          errorCode: m.lT.OAUTH2_ERROR
        }, "Refreshing access token did not return a new access token");
        return {
          access_token: d
        }
      }
    }
  }