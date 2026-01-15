/** Chunk was on web.js **/
/** chunk id: 260720, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QL: () => E,
  x9: () => g,
  xf: () => m
});
var Chunk442837 = require("./442837.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk51144 = require("./51144.js"),
  Chunk241986 = require("./241986.js"),
  Chunk474936 = require("./474936.js"),
  Chunk282793 = require("./282793.js"),
  Chunk981631 = require("./981631.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx");
let h = (e, t) => {
    var n;
    if (null == t) return null;
    let r = null == (n = t.recipients) ? true : n.find(t => t !== e.id),
      i = o.default.getUser(r);
    return null == i ? null : (0, l.XM)(i)
  },
  m = e => {
    let t, n, {
        sender: r,
        channel: o,
        isSender: s,
        inviteState: c
      } = e,
      u = (0, d.sO)();
    if (s) {
      let e = h(r, o);
      if (null == e) return null;
      let s = _.intl.format(p.default.MkcFjx, {
        receiverName: e,
        premiumGroupProductName: u
      });
      switch (c) {
        case d.bZ.ACCEPTED:
          t = _.intl.formatToPlainString(p.default["5uwv8J"], {
            premiumGroupProductName: u
          }), n = _.intl.formatToPlainString(p.default["W7e/z1"], {
            receiverName: e
          });
          break;
        case d.bZ.REMOVED:
        case d.bZ.NOT_FOUND:
        case d.bZ.ERROR:
          t = _.intl.formatToPlainString(p.default.YLvraS, {
            premiumGroupProductName: u
          }), n = _.intl.format(p.default.BHxlIR, {
            premiumGroupProductName: u,
            onClick: () => {
              (0, a.openUserSettings)(i.n.SUBSCRIPTIONS_PANEL, {
                section: f.oAB.SUBSCRIPTIONS
              })
            }
          });
          break;
        case d.bZ.PENDING:
        default:
          t = _.intl.formatToPlainString(p.default["5uwv8J"], {
            premiumGroupProductName: u
          }), n = _.intl.formatToPlainString(p.default["AmE0B/"], {
            receiverName: e
          })
      }
      return {
        message: s,
        header: t,
        body: n
      }
    } else {
      let e = (0, l.XM)(r),
        i = _.intl.format(p.default["51Kv/4"], {
          senderName: e,
          premiumGroupProductName: u,
          helpCenterLink: d.j3
        });
      switch (c) {
        case d.bZ.ACCEPTED:
          t = _.intl.string(p.default.ssge1y), n = _.intl.formatToPlainString(p.default.fTAcw3, {
            senderName: e
          });
          break;
        case d.bZ.REMOVED:
        case d.bZ.NOT_FOUND:
        case d.bZ.ERROR:
          t = _.intl.formatToPlainString(p.default["AmLUw+"], {
            premiumGroupProductName: u
          }), n = _.intl.formatToPlainString(p.default["7XAuyg"], {
            premiumGroupProductName: u
          });
          break;
        case d.bZ.PENDING:
        default:
          t = _.intl.string(p.default.ssge1y), n = _.intl.formatToPlainString(p.default.MkcdX8, {
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
  g = () => {
    var e;
    let t = (0, c.Z)({
        location: "PremiumGroupPurchase"
      }),
      n = (0, r.e7)([s.Z], () => s.Z.getPremiumSubscription()),
      i = (0, r.e7)([o.default], () => o.default.getCurrentUser());
    return (null == i || !i.isPremiumWithFractionalPremiumOnly()) && !!t && (null == n || u.No.has(null != (e = n.premiumPlanIdFromItems) ? e : "") && !n.isPurchasedExternally)
  },
  E = () => {
    let e = (0, c.Z)({
        location: "PremiumGroupPurchase"
      }),
      t = g(),
      n = (0, r.e7)([o.default], () => o.default.getCurrentUser());
    return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup())
  }