/** Chunk was on 1272 **/
/** chunk id: 111097, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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
let h = [Chunk100527.Z.RPC];

function g(e, t) {
  let n = {
    subscriptionTier: f.Si.TIER_2,
    analyticsLocations: h,
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
let m = {
  [Chunk981631.Etm.START_PURCHASE]: {
    [Chunk186901.Gp.ANY]: [Chunk186901.wE, Chunk186901.lH],
    validation: e => (0, o.Z)(e).required().keys({
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
        lock: o,
        context: f
      } = (0, u.jU)(t.transport !== d.He.POST_MESSAGE ? i : null);
      if (null == (0, s.Z)()) throw new a.Z({
        errorCode: p.lTL.INVALID_CHANNEL
      }, "Invalid channel");
      let m = {
        page: p.ZY5.IN_APP
      };
      return (async () => {
        try {
          let e = await (0, r.S)({
            applicationId: l,
            skuId: n,
            openPremiumPaymentModal: () => g(f, m),
            analyticsLocations: h,
            analyticsLocationObject: m,
            context: f
          });
          return o(), e
        } catch (e) {
          if (o(), null != e) {
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
    validation: e => (0, o.Z)(e).keys({
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
      return g(i, {
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