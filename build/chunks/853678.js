/** Chunk was on 1272 **/
/** chunk id: 853678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk45792 = require("./45792.js"),
  Chunk782568 = require("./782568.js"),
  Chunk636449 = require("./636449.js"),
  Chunk317381 = require("./317381.js"),
  Chunk611577 = require("./611577.js"),
  Chunk840074 = require("./840074.jsx"),
  Chunk16609 = require("./16609.js"),
  Chunk812206 = require("./812206.js"),
  Chunk313789 = require("./313789.js"),
  Chunk626135 = require("./626135.js"),
  Chunk12647 = require("./12647.js"),
  Chunk49012 = require("./49012.js"),
  Chunk358085 = require("./358085.js"),
  Chunk996106 = require("./996106.js"),
  Chunk914946 = require("./914946.js"),
  Chunk452426 = require("./452426.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  Chunk701488 = require("./701488.js"),
  Chunk674563 = require("./674563.js");
let C = new Set([Chunk701488.Fu, Chunk701488.JT]),
  S = new Set(["www.nytimes.com", "apps.apple.com", "play.google.com"]),
  T = new Map([
    [Chunk674563.Vt, {
      trustedHosts: S,
      trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf()
    }],
    [Chunk674563.fd, {
      trustedHosts: S,
      trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf()
    }],
    [Chunk674563.He, {
      trustedHosts: S,
      trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf()
    }]
  ]),
  N = {
    [Chunk981631.Etm.OPEN_EXTERNAL_LINK]: {
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.b_]
      },
      validation: e => (0, E.Z)(e).required().keys({
        url: e.string().required()
      }),
      handler(e) {
        let {
          socket: t,
          args: {
            url: n
          }
        } = e;
        (0, b.bu)(t.transport);
        let r = s.ZP.getCurrentEmbeddedActivity();
        try {
          var i, c;
          let e = new URL(n),
            s = e.toString();
          if (m.isPlatformEmbedded) {
            let e = (0, a.R)() ? v.KJ3.ACTIVITY_POPOUT : null;
            g.Z.focus(e, true)
          }
          let p = d.Z.getApplication(null == (i = t.application) ? true : i.id),
            _ = (0, u.p)(null == r ? true : r.location),
            b = (null == p ? true : p.id) !== true ? T.get(p.id) : true;
          if (true !== b && b.trustedUntilEpochMs >= Date.now() && b.trustedHosts.has(e.host)) return (0, l.Z)(s), f.default.track(v.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
            application_id: null == (c = t.application) ? true : c.id,
            url: s,
            opened: true
          }), Promise.resolve({
            opened: true
          });
          return new Promise(e => (0, h.q)({
            href: s,
            shouldConfirm: true,
            onConfirm: () => {
              var n;
              (0, l.Z)(s), f.default.track(v.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                application_id: null == (n = t.application) ? true : n.id,
                url: s,
                opened: true
              }), e({
                opened: true
              })
            },
            onCancel: () => {
              var n;
              f.default.track(v.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                application_id: null == (n = t.application) ? true : n.id,
                url: s,
                opened: false
              }), e({
                opened: false
              })
            }
          }, true, true, (0, o.z)({
            application: p,
            channelId: _
          })))
        } catch (e) {
          throw new _.Z({
            errorCode: v.lTL.INVALID_COMMAND
          }, "Invalid URL: ".concat(n))
        }
      }
    },
    [Chunk981631.Etm.NAVIGATE_TO_CONNECTIONS]: {
      validation: e => (0, E.Z)(e),
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk186901.wE]
      },
      handler(e) {
        let {
          socket: t
        } = e;
        (0, b.bu)(t.transport);
        let r = (0, b._f)(t.application);
        if (!C.has(r)) throw new _.Z({
          errorCode: v.lTL.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        {
          let {
            openUserSettings: e
          } = n(518596);
          e(p.n.CONNECTIONS_PANEL, {
            section: v.oAB.CONNECTIONS
          })
        }
      }
    },
    [Chunk981631.Etm.SHARE_LINK]: (0, Chunk45792.S)(Chunk981631.Etm.SHARE_LINK, {
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk186901.wE]
      },
      handler(e) {
        var t;
        let {
          socket: n,
          args: {
            custom_id: i,
            message: l,
            link_id: a
          }
        } = e;
        (0, b.bu)(n.transport);
        let s = (0, b._f)(n.application);
        if (null == s) throw new _.Z({
          errorCode: v.lTL.INVALID_COMMAND
        }, "No application.");
        if (!(0, r.yE)(null != (t = n.application.flags) ? t : 0, v.udG.EMBEDDED)) throw new _.Z({
          errorCode: v.lTL.INVALID_COMMAND
        }, "This application cannot access this API");
        return new Promise(e => {
          (0, c._)({
            applicationId: s,
            customId: i,
            linkId: a,
            message: l,
            onShare: (t, n) => {
              e({
                success: n || t,
                didCopyLink: n,
                didSendMessage: t
              })
            }
          })
        })
      }
    })
  }