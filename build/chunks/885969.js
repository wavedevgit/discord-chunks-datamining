/** Chunk was on 21738 **/
/** chunk id: 885969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./65821.js"), require("./896048.js"), require("./457529.js");
var Chunk86980 = require("./86980.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk580960 = require("./580960.jsx"),
  Chunk636401 = require("./636401.js"),
  Chunk629471 = require("./629471.js"),
  Chunk569475 = require("./569475.js"),
  Chunk994717 = require("./994717.js"),
  Chunk546983 = require("./546983.js"),
  Chunk613057 = require("./613057.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js");
let g = [Chunk793574.A.RPC];

function m(e, t) {
  let n = {
    subscriptionTier: h.pe.TIER_2,
    analyticsLocations: g,
    analyticsObject: t
  };
  switch (e) {
    case p.BRT.APP:
      return l.A.openPremiumPaymentModalInApp(n);
    case p.BRT.OVERLAY:
      return l.A.openPremiumPaymentModalInOverlay(n);
    default:
      throw Error("Unexpected app context: ".concat(e))
  }
}
let f = {
  [Chunk652215.e$_.START_PURCHASE]: {
    [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.hj],
    validation: e => (0, s.A)(e).required().keys({
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
      (0, c.C)(t.transport);
      let l = t.application.id;
      if (null == l) throw new a.A({
        errorCode: p.Lw6.INVALID_COMMAND
      }, "No application.");
      let {
        lock: s,
        context: h
      } = (0, u.d5)(t.transport !== d.z4.POST_MESSAGE ? i : null);
      if (null == (0, o.A)()) throw new a.A({
        errorCode: p.Lw6.INVALID_CHANNEL
      }, "Invalid channel");
      let f = {
        page: p.liQ.IN_APP
      };
      return (async () => {
        try {
          let e = await (0, r.j)({
            applicationId: l,
            skuId: n,
            openPremiumPaymentModal: () => m(h, f),
            analyticsLocations: g,
            analyticsLocationObject: f,
            context: h
          });
          return s(), e
        } catch (e) {
          if (s(), null != e) {
            let t = "";
            throw t = "object" == typeof e && "message" in e && "string" == typeof e.message ? e.message : "string" == typeof e ? e : JSON.stringify(e), new a.A({
              errorCode: p.Lw6.PURCHASE_ERROR
            }, t)
          }
          throw new a.A({
            errorCode: p.Lw6.PURCHASE_CANCELED
          }, "Purchase was canceled by the user.")
        }
      })()
    }
  },
  [Chunk652215.e$_.START_PREMIUM_PURCHASE]: {
    [Chunk613057.sm.ANY]: [Chunk613057.VH, Chunk613057.hj],
    validation: e => (0, s.A)(e).keys({
      pid: e.number().min(0)
    }),
    handler(e) {
      let {
        socket: t,
        args: {
          pid: n
        }
      } = e;
      if ((0, c.C)(t.transport), null == t.application.id) throw new a.A({
        errorCode: p.Lw6.INVALID_COMMAND
      }, "No application.");
      let {
        lock: r,
        context: i
      } = (0, u.d5)(t.transport !== d.z4.POST_MESSAGE ? n : null);
      return m(i, {
        page: p.liQ.IN_APP
      }).then(() => {
        r()
      }, e => {
        if (r(), null != e) throw new a.A({
          errorCode: p.Lw6.PURCHASE_ERROR
        }, e);
        throw new a.A({
          errorCode: p.Lw6.PURCHASE_CANCELED
        }, "Purchase was canceled by the user.")
      })
    }
  }
}