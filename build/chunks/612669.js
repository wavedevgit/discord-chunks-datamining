/** Chunk was on web.js **/
/** chunk id: 612669, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O9: () => y,
  PA: () => E,
  bf: () => b,
  o1: () => g
});
var Chunk311907 = require("./311907.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk927578 = require("./927578.js"),
  Chunk427262 = require("./427262.js"),
  Chunk593032 = require("./593032.js"),
  Chunk788868 = require("./788868.js"),
  Chunk88001 = require("./88001.js"),
  Chunk652215 = require("./652215.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx");
let m = (e, t) => {
    var n;
    if (null == t) return null;
    let r = null == (n = t.recipients) ? true : n.find(t => t !== e.id),
      i = s.default.getUser(r);
    return null == i ? null : (0, c.$3)(i)
  },
  g = e => {
    let t, n, {
        sender: r,
        channel: s,
        isSender: o,
        inviteState: l
      } = e,
      u = (0, f.DP)();
    if (o) {
      let e = m(r, s);
      if (null == e) return null;
      let o = h.intl.format(_.default.MkcFjx, {
        receiverName: e,
        premiumGroupProductName: u
      });
      switch (l) {
        case f.xI.ACCEPTED:
          t = h.intl.formatToPlainString(_.default["5uwv8J"], {
            premiumGroupProductName: u
          }), n = h.intl.formatToPlainString(_.default["W7e/z1"], {
            receiverName: e
          });
          break;
        case f.xI.REMOVED:
        case f.xI.NOT_FOUND:
        case f.xI.ERROR:
          t = h.intl.formatToPlainString(_.default.YLvraS, {
            premiumGroupProductName: u
          }), n = h.intl.format(_.default.BHxlIR, {
            premiumGroupProductName: u,
            onClick: () => {
              (0, a.openUserSettings)(i.X.SUBSCRIPTIONS_PANEL, {
                section: p.nc_.SUBSCRIPTIONS
              })
            }
          });
          break;
        case f.xI.PENDING:
        default:
          t = h.intl.formatToPlainString(_.default["5uwv8J"], {
            premiumGroupProductName: u
          }), n = h.intl.formatToPlainString(_.default["AmE0B/"], {
            receiverName: e
          })
      }
      return {
        message: o,
        header: t,
        body: n
      }
    } {
      let e = (0, c.$3)(r),
        i = h.intl.format(_.default["51Kv/4"], {
          senderName: e,
          premiumGroupProductName: u,
          helpCenterLink: f.TE
        });
      switch (l) {
        case f.xI.ACCEPTED:
          t = h.intl.string(_.default.ssge1y), n = h.intl.formatToPlainString(_.default.fTAcw3, {
            senderName: e
          });
          break;
        case f.xI.REMOVED:
        case f.xI.NOT_FOUND:
        case f.xI.ERROR:
          t = h.intl.formatToPlainString(_.default["AmLUw+"], {
            premiumGroupProductName: u
          }), n = h.intl.formatToPlainString(_.default["7XAuyg"], {
            premiumGroupProductName: u
          });
          break;
        case f.xI.PENDING:
        default:
          t = h.intl.string(_.default.ssge1y), n = h.intl.formatToPlainString(_.default.MkcdX8, {
            senderName: e,
            premiumGroupProductName: u
          })
      }
      return {
        message: i,
        header: t,
        body: n
      }
    }
  },
  E = () => {
    var e;
    let t = (0, u.A)({
        location: "PremiumGroupPurchase"
      }),
      n = (0, r.bG)([o.A], () => o.A.getPremiumSubscription()),
      i = (0, r.bG)([s.default], () => s.default.getCurrentUser());
    return (null == i || !i.isPremiumWithFractionalPremiumOnly()) && !!t && (null == n || d.BL.has(null != (e = n.premiumPlanIdFromItems) ? e : "") && !n.isPurchasedExternally)
  },
  y = () => {
    let e = (0, u.A)({
        location: "PremiumGroupPurchase"
      }),
      t = E(),
      n = (0, r.bG)([s.default], () => s.default.getCurrentUser());
    return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup())
  },
  b = () => {
    let e = y(),
      t = (0, r.bG)([s.default], () => s.default.getCurrentUser());
    return e && ((0, l.TW)(t) || !(0, l.mv)(t))
  }