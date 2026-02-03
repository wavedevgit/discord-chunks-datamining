/** Chunk was on 21738 **/
/** chunk id: 549794, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk420970 = require("./420970.js"),
  Chunk975807 = require("./975807.js"),
  Chunk646865 = require("./646865.js"),
  Chunk933958 = require("./933958.js"),
  Chunk51520 = require("./51520.js"),
  Chunk700475 = require("./700475.jsx"),
  Chunk969151 = require("./969151.js"),
  Chunk93151 = require("./93151.js"),
  Chunk587895 = require("./587895.js"),
  Chunk780964 = require("./780964.js"),
  Chunk954571 = require("./954571.js"),
  Chunk353835 = require("./353835.js"),
  Chunk307600 = require("./307600.js"),
  Chunk723702 = require("./723702.js"),
  Chunk636401 = require("./636401.js"),
  Chunk90924 = require("./90924.js"),
  Chunk629471 = require("./629471.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk360469 = require("./360469.js");
let v = new Set([Chunk360469.AM, Chunk360469.eK]),
  S = {
    [Chunk652215.e$_.OPEN_EXTERNAL_LINK]: {
      scope: {
        [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.W_]
      },
      validation: e => (0, E.A)(e).required().keys({
        url: e.string().required()
      }),
      async handler(e) {
        let {
          socket: t,
          args: {
            url: n
          }
        } = e;
        (0, b.lG)(t.transport);
        let r = s.Ay.getCurrentEmbeddedActivity();
        try {
          var i, c;
          let e = new URL(n).toString();
          if (A.isPlatformEmbedded) {
            let e = (0, a.f)() ? y.MLl.ACTIVITY_POPOUT : null;
            m.A.focus(e, true)
          }
          let s = p.A.getApplication(null == (i = t.application) ? true : i.id),
            h = (0, u.H)(null == r ? true : r.location);
          if (await (0, d.u)(null == s ? true : s.id, e)) return (0, l.A)(e), g.default.track(y.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
            application_id: null == (c = t.application) ? true : c.id,
            url: e,
            opened: true
          }), Promise.resolve({
            opened: true
          });
          return new Promise(n => (0, f.h)({
            href: e,
            shouldConfirm: true,
            onConfirm: () => {
              var r;
              (0, l.A)(e), g.default.track(y.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                application_id: null == (r = t.application) ? true : r.id,
                url: e,
                opened: true
              }), n({
                opened: true
              })
            },
            onCancel: () => {
              var r;
              g.default.track(y.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                application_id: null == (r = t.application) ? true : r.id,
                url: e,
                opened: false
              }), n({
                opened: false
              })
            }
          }, true, true, (0, o.j)({
            application: s,
            channelId: h
          })))
        } catch (e) {
          throw new _.A({
            errorCode: y.Lw6.INVALID_COMMAND
          }, "Invalid URL: ".concat(n))
        }
      }
    },
    [Chunk652215.e$_.NAVIGATE_TO_CONNECTIONS]: {
      validation: e => (0, E.A)(e),
      scope: {
        [Chunk613057.sm.ANY]: [Chunk613057.VH]
      },
      handler(e) {
        let {
          socket: t
        } = e;
        (0, b.lG)(t.transport);
        let r = (0, b.D2)(t.application);
        if (!v.has(r)) throw new _.A({
          errorCode: y.Lw6.UNAUTHORIZED_FOR_APPLICATION
        }, "Command not available for this application");
        {
          let {
            openUserSettings: e
          } = n(840065);
          e(h.X.CONNECTIONS_PANEL, {
            section: y.nc_.CONNECTIONS
          })
        }
      }
    },
    [Chunk652215.e$_.SHARE_LINK]: (0, Chunk420970.T)(Chunk652215.e$_.SHARE_LINK, {
      scope: {
        [Chunk613057.sm.ANY]: [Chunk613057.VH]
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
        (0, b.lG)(n.transport);
        let s = (0, b.D2)(n.application);
        if (null == s) throw new _.A({
          errorCode: y.Lw6.INVALID_COMMAND
        }, "No application.");
        if (!(0, r.Lt)(null != (t = n.application.flags) ? t : 0, y.gfo.EMBEDDED)) throw new _.A({
          errorCode: y.Lw6.INVALID_COMMAND
        }, "This application cannot access this API");
        return new Promise(e => {
          (0, c.a)({
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