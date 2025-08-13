/** Chunk was on 1272 **/
/** chunk id: 853678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./997841.js");
var Chunk45792 = require("./45792.js"),
  Chunk230711 = require("./230711.js"),
  Chunk782568 = require("./782568.js"),
  Chunk636449 = require("./636449.js"),
  Chunk317381 = require("./317381.js"),
  Chunk611577 = require("./611577.js"),
  Chunk840074 = require("./840074.jsx"),
  Chunk16609 = require("./16609.js"),
  Chunk812206 = require("./812206.js"),
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
let I = new Set([Chunk701488.Fu, Chunk701488.JT]),
  C = new Set(["www.nytimes.com", "apps.apple.com", "play.google.com"]),
  S = new Map([
    [Chunk674563.Vt, {
      trustedHosts: C,
      trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf()
    }],
    [Chunk674563.fd, {
      trustedHosts: C,
      trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf()
    }],
    [Chunk674563.He, {
      trustedHosts: C,
      trustedUntilEpochMs: new Date("2027-01-15T00:00:00").valueOf()
    }]
  ]),
  N = {
    [Chunk981631.Etm.OPEN_EXTERNAL_LINK]: {
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.b_]
      },
      validation: e => (0, _.Z)(e).required().keys({
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
        let r = o.ZP.getCurrentEmbeddedActivity();
        try {
          var i;
          let e = new URL(n),
            o = e.toString();
          if (g.isPlatformEmbedded) {
            let e = (0, a.R)() ? E.KJ3.ACTIVITY_POPOUT : null;
            p.Z.focus(e, true)
          }
          let c = d.Z.getApplication(null == (i = t.application) ? true : i.id),
            f = (0, u.p)(null == r ? true : r.location),
            m = (null == c ? true : c.id) !== true ? S.get(c.id) : true;
          if (true !== m && m.trustedUntilEpochMs >= Date.now() && m.trustedHosts.has(e.host)) return (0, l.Z)(o), Promise.resolve({
            opened: true
          });
          return new Promise(e => (0, h.q)({
            href: o,
            shouldConfirm: true,
            onConfirm: () => {
              (0, l.Z)(o), e({
                opened: true
              })
            },
            onCancel: () => {
              e({
                opened: false
              })
            }
          }, true, true, (0, s.z)({
            application: c,
            channelId: f
          })))
        } catch (e) {
          throw new m.Z({
            errorCode: E.lTL.INVALID_COMMAND
          }, "Invalid URL: ".concat(n))
        }
      }
    },
    [Chunk981631.Etm.NAVIGATE_TO_CONNECTIONS]: {
      validation: e => (0, _.Z)(e),
      scope: {
        [Chunk186901.Gp.ANY]: [Chunk186901.wE]
      },
      handler(e) {
        let {
          socket: t
        } = e;
        (0, b.bu)(t.transport);
        let n = (0, b._f)(t.application);
        if (!I.has(n)) throw new m.Z({
          errorCode: E.lTL.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        i.Z.open(E.oAB.CONNECTIONS)
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
        if (null == a) throw new m.Z({
          errorCode: E.lTL.INVALID_COMMAND
        }, "No application.");
        if (!(0, f.yE)(null != (t = n.application.flags) ? t : 0, E.udG.EMBEDDED)) throw new m.Z({
          errorCode: E.lTL.INVALID_COMMAND
        }, "This application cannot access this API");
        return new Promise(e => {
          (0, c._)({
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