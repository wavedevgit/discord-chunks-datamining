/** Chunk was on 1272 **/
/** chunk id: 853678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./997841.js");
var Chunk45792 = require("./45792.js"),
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
  Chunk630388 = require("./630388.js"),
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
  T = new Set(["p-ty8do4dje6.exmggames.com", "fortnitetrial.fortnite.com", "fn.gg", "geforcenow.com", "www.fortnite.com", "www.nvidia.com", "www.geforcenow.com"]),
  N = new Map([
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
    }],
    [Chunk674563.Zs, {
      trustedHosts: T,
      trustedUntilEpochMs: new Date("2026-01-01T00:00:00").valueOf()
    }]
  ]),
  j = {
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
        let r = a.ZP.getCurrentEmbeddedActivity();
        try {
          var o, d;
          let e = new URL(n),
            a = e.toString();
          if (g.isPlatformEmbedded) {
            let e = (0, l.R)() ? I.KJ3.ACTIVITY_POPOUT : null;
            f.Z.focus(e, true)
          }
          let m = u.Z.getApplication(null == (o = t.application) ? true : o.id),
            _ = (0, c.p)(null == r ? true : r.location),
            b = (null == m ? true : m.id) !== true ? N.get(m.id) : true;
          if (true !== b && b.trustedUntilEpochMs >= Date.now() && b.trustedHosts.has(e.host)) return (0, i.Z)(a), p.default.track(I.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
            application_id: null == (d = t.application) ? true : d.id,
            url: a,
            opened: true
          }), Promise.resolve({
            opened: true
          });
          return new Promise(e => (0, h.q)({
            href: a,
            shouldConfirm: true,
            onConfirm: () => {
              var n;
              (0, i.Z)(a), p.default.track(I.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                application_id: null == (n = t.application) ? true : n.id,
                url: a,
                opened: true
              }), e({
                opened: true
              })
            },
            onCancel: () => {
              var n;
              p.default.track(I.rMx.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                application_id: null == (n = t.application) ? true : n.id,
                url: a,
                opened: false
              }), e({
                opened: false
              })
            }
          }, true, true, (0, s.z)({
            application: m,
            channelId: _
          })))
        } catch (e) {
          throw new _.Z({
            errorCode: I.lTL.INVALID_COMMAND
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
          errorCode: I.lTL.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        {
          let {
            openUserSettings: e
          } = n(518596);
          e(d.n.CONNECTIONS_PANEL, {
            section: I.oAB.CONNECTIONS
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
            custom_id: r,
            message: i,
            link_id: l
          }
        } = e;
        (0, b.bu)(n.transport);
        let a = (0, b._f)(n.application);
        if (null == a) throw new _.Z({
          errorCode: I.lTL.INVALID_COMMAND
        }, "No application.");
        if (!(0, m.yE)(null != (t = n.application.flags) ? t : 0, I.udG.EMBEDDED)) throw new _.Z({
          errorCode: I.lTL.INVALID_COMMAND
        }, "This application cannot access this API");
        return new Promise(e => {
          (0, o._)({
            applicationId: a,
            customId: r,
            linkId: l,
            message: i,
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