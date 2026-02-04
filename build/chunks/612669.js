/** Chunk was on 83782 **/
/** chunk id: 612669, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  O9: () => I,
  PA: () => g,
  bf: () => S,
  o1: () => h
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
let h = e => {
    let t, i, {
        sender: n,
        channel: a,
        isSender: o,
        inviteState: c
      } = e,
      d = (0, m.DP)();
    if (o) {
      let e = ((e, t) => {
        var i;
        if (null == t) return null;
        let n = null == (i = t.recipients) ? true : i.find(t => t !== e.id),
          r = s.default.getUser(n);
        return null == r ? null : (0, u.$3)(r)
      })(n, a);
      if (null == e) return null;
      let o = _.intl.format(f.default.MkcFjx, {
        receiverName: e,
        premiumGroupProductName: d
      });
      switch (c) {
        case m.xI.ACCEPTED:
          t = _.intl.formatToPlainString(f.default["5uwv8J"], {
            premiumGroupProductName: d
          }), i = _.intl.formatToPlainString(f.default["W7e/z1"], {
            receiverName: e
          });
          break;
        case m.xI.REMOVED:
        case m.xI.NOT_FOUND:
        case m.xI.ERROR:
          t = _.intl.formatToPlainString(f.default.YLvraS, {
            premiumGroupProductName: d
          }), i = _.intl.format(f.default.BHxlIR, {
            premiumGroupProductName: d,
            onClick: () => {
              (0, l.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL, {
                section: p.nc_.SUBSCRIPTIONS
              })
            }
          });
          break;
        case m.xI.PENDING:
        default:
          t = _.intl.formatToPlainString(f.default["5uwv8J"], {
            premiumGroupProductName: d
          }), i = _.intl.formatToPlainString(f.default["AmE0B/"], {
            receiverName: e
          })
      }
      return {
        message: o,
        header: t,
        body: i
      }
    } {
      let e = (0, u.$3)(n),
        r = _.intl.format(f.default["51Kv/4"], {
          senderName: e,
          premiumGroupProductName: d,
          helpCenterLink: m.TE
        });
      switch (c) {
        case m.xI.ACCEPTED:
          t = _.intl.string(f.default.ssge1y), i = _.intl.formatToPlainString(f.default.fTAcw3, {
            senderName: e
          });
          break;
        case m.xI.REMOVED:
        case m.xI.NOT_FOUND:
        case m.xI.ERROR:
          t = _.intl.formatToPlainString(f.default["AmLUw+"], {
            premiumGroupProductName: d
          }), i = _.intl.formatToPlainString(f.default["7XAuyg"], {
            premiumGroupProductName: d
          });
          break;
        case m.xI.PENDING:
        default:
          t = _.intl.string(f.default.ssge1y), i = _.intl.formatToPlainString(f.default.MkcdX8, {
            senderName: e,
            premiumGroupProductName: d
          })
      }
      return {
        message: r,
        header: t,
        body: i
      }
    }
  },
  g = () => {
    var e;
    let t = (0, c.A)({
        location: "PremiumGroupPurchase"
      }),
      i = (0, n.bG)([a.A], () => a.A.getPremiumSubscription()),
      r = (0, n.bG)([s.default], () => s.default.getCurrentUser());
    return (null == r || !r.isPremiumWithFractionalPremiumOnly()) && !!t && (null == i || d.BL.has(null != (e = i.premiumPlanIdFromItems) ? e : "") && !i.isPurchasedExternally)
  },
  I = () => {
    let e = (0, c.A)({
        location: "PremiumGroupPurchase"
      }),
      t = g(),
      i = (0, n.bG)([s.default], () => s.default.getCurrentUser());
    return !!e && !!t && (null == i || !i.isPremiumWithPremiumGroup())
  },
  S = () => {
    let e = I(),
      t = (0, n.bG)([s.default], () => s.default.getCurrentUser());
    return e && ((0, o.TW)(t) || !(0, o.mv)(t))
  }