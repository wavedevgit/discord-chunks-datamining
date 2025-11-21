/** Chunk was on web.js **/
/** chunk id: 614118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk602733 = require("./602733.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk937615 = require("./937615.js"),
  Chunk164670 = require("./164670.js"),
  Chunk411935 = require("./411935.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk594914 = require("./594914.jsx"),
  Chunk433386 = require("./433386.jsx"),
  Chunk840724 = require("./840724.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54602 = require("./54602.js");

function T(e) {
  var t, n, T, S, A, C, N, R;
  let {
    guildId: P,
    skuId: D,
    channel: w
  } = e, L = (0, o.e7)([_.Z], () => _.Z.isFetchingForSKU(D)), x = (0, o.e7)([f.Z], () => f.Z.get(D)), M = null == x ? true : x.applicationId, {
    analyticsLocations: k
  } = (0, c.ZP)(l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
  (0, u.p2)();
  let j = (0, o.e7)([d.default], () => w.isDM() && null != w.recipients && 0 !== w.recipients.length ? d.default.getUser(w.recipients[0]) : null),
    {
      primaryIconAsset: U,
      primaryIconLabel: G
    } = i.useMemo(() => (0, h.FE)(x, M), [x, M]);
  i.useEffect(() => {
    null == P || null == D || _.Z.isFetchingForSKU(D) || (0, m.y)(P, D)
  }, [P, D]);
  let B = i.useCallback(e => {
      e.stopPropagation(), (null == x ? true : x.applicationId) != null && null != P && (0, g.g)({
        skuId: D,
        applicationId: x.applicationId,
        guildId: P,
        isStorefront: false,
        analyticsLocations: k
      })
    }, [D, null == x ? true : x.applicationId, P, k]),
    Z = i.useCallback(() => {
      null != x && (0, E.P)(x, {
        isGift: false
      }, {
        analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON]
      })
    }, [x]),
    F = i.useCallback(() => {
      null != x && (0, E.P)(x, {
        isGift: true,
        giftRecipient: null != j ? j : true
      }, {
        analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
      })
    }, [x, j]);
  return L && null == x ? (0, r.jsx)("div", {
    className: I.container,
    children: (0, r.jsx)(s.$jN, {
      className: I.spinner
    })
  }) : null == x ? null : (0, r.jsxs)("div", {
    className: I.container,
    children: [(0, r.jsx)(y.C, {
      className: I.card,
      applicationId: x.applicationId,
      skuId: D,
      variant: y.Z.EMBEDDED,
      onClick: B,
      analyticsLocations: k
    }), (0, r.jsxs)("div", {
      className: I.details,
      children: [(0, r.jsxs)("div", {
        className: I.detailsTitleDescription,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          children: x.name
        }), (0, r.jsxs)("div", {
          className: I.detailsDescription,
          children: [null != U && (0, r.jsx)("img", {
            src: U.toString(),
            alt: G,
            className: I.iconAsset
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/bold",
            lineClamp: 1,
            children: (0, p.T4)(null != (A = null == (t = x.price) ? true : t.amount) ? A : 0, null != (C = null == (n = x.price) ? true : n.currency) ? C : O.pK.USD)
          })]
        })]
      }), (0, r.jsxs)(a.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(a.zxk, {
          variant: "secondary",
          onClick: B,
          text: v.intl.string(v.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          onClick: Z,
          text: v.intl.format(v.t.Xp5WTn, {
            price: (0, p.T4)(null != (N = null == (T = x.price) ? true : T.amount) ? N : 0, null != (R = null == (S = x.price) ? true : S.currency) ? R : O.pK.USD)
          }),
          fullWidth: true
        }), (0, r.jsx)(b.Z, {
          onGift: F
        })]
      })]
    })]
  })
}