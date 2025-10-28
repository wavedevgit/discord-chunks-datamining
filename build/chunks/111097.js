/** Chunk was on 1272 **/
/** chunk id: 111097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./415506.js"), require("./388685.js"), require("./49124.js");
var Chunk72924 = require("./72924.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk367207 = require("./367207.jsx"),
  Chunk996106 = require("./996106.js"),
  Chunk452426 = require("./452426.js"),
  Chunk561205 = require("./561205.js"),
  Chunk334288 = require("./334288.js"),
  Chunk852926 = require("./852926.js"),
  Chunk186901 = require("./186901.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js");
let m = [Chunk100527.Z.RPC];

function h(e, t) {
  let n = {
    subscriptionTier: f.Si.TIER_2,
    analyticsLocations: m,
    analyticsObject: t
  };
  switch (e) {
    case p.IlC.APP:
      return l.Z.openPremiumPaymentModalInApp(n);
    case p.IlC.OVERLAY:
      return l.Z.openPremiumPaymentModalInOverlay(n);
    default:
      throw Error("Unexpected app context: ".concat(e))
  }
}
let g = {
  [Chunk981631.Etm.START_PURCHASE]: {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH],
    validation: e => (0, s.Z)(e).required().keys({
      sku_id: e.string().required(),
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          sku_id: n,
          pid: i
        }
      } = e;
      (0, c.f)(t.transport);
      let l = t.application.id;
      if (null == l) throw new a.Z({
        errorCode: p.lTL.INVALID_COMMAND
      }, "No application.");
      let {
        lock: s,
        context: f
      } = (0, u.jU)(t.transport !== d.He.POST_MESSAGE ? i : null);
      if (null == (0, o.Z)()) throw new a.Z({
        errorCode: p.lTL.INVALID_CHANNEL
      }, "Invalid channel");
      let g = {
        page: p.ZY5.IN_APP
      };
      return (async () => {
        try {
          let e = await (0, r.S)({
            applicationId: l,
            skuId: n,
            openPremiumPaymentModal: () => h(f, g),
            analyticsLocations: m,
            analyticsLocationObject: g,
            context: f
          });
          return s(), e
        } catch (e) {
          if (s(), null != e) {
            let t = "";
            throw t = "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e), new a.Z({
              errorCode: p.lTL.PURCHASE_ERROR
            }, t)
          }
          throw new a.Z({
            errorCode: p.lTL.PURCHASE_CANCELED
          }, "Purchase was canceled by the user.")
        }
      })()
    }
  },
  [Chunk981631.Etm.START_PREMIUM_PURCHASE]: {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH],
    validation: e => (0, s.Z)(e).keys({
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          pid: n
        }
      } = e;
      if ((0, c.f)(t.transport), null == t.application.id) throw new a.Z({
        errorCode: p.lTL.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r,
        context: i
      } = (0, u.jU)(t.transport !== d.He.POST_MESSAGE ? n : null);
      return h(i, {
        page: p.ZY5.IN_APP
      }).then(() => {
        r()
      }, e => {
        if (r(), null != e) throw new a.Z({
          errorCode: p.lTL.PURCHASE_ERROR
        }, e);
        throw new a.Z({
          errorCode: p.lTL.PURCHASE_CANCELED
        }, "Purchase was canceled by the user.")
      })
    }
  }
}