/** Chunk was on web.js **/
/** chunk id: 614118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
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

function I(e) {
  var t, n, I, T, S, A, C, N;
  let {
    guildId: R,
    skuId: P,
    channel: D
  } = e, w = (0, o.e7)([f.Z], () => f.Z.isFetchingForSKU(P)), x = (0, o.e7)([d.Z], () => d.Z.get(P)), L = null == x ? true : x.applicationId;
  (0, c.p2)();
  let M = (0, o.e7)([u.default], () => D.isDM() && null != D.recipients && 0 !== D.recipients.length ? u.default.getUser(D.recipients[0]) : null),
    {
      primaryIconAsset: k,
      primaryIconLabel: j
    } = i.useMemo(() => (0, p.FE)(x, L), [x, L]);
  i.useEffect(() => {
    null == R || null == P || f.Z.isFetchingForSKU(P) || (0, h.y)(R, P)
  }, [R, P]);
  let U = i.useCallback(e => {
      e.stopPropagation(), (null == x ? true : x.applicationId) != null && null != R && (0, m.g)({
        skuId: P,
        applicationId: x.applicationId,
        guildId: R,
        isStorefront: false
      })
    }, [P, null == x ? true : x.applicationId, R]),
    G = i.useCallback(() => {
      null != x && (0, g.P)(x, {
        isGift: false
      }, {
        analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON]
      })
    }, [x]),
    B = i.useCallback(() => {
      null != x && (0, g.P)(x, {
        isGift: true,
        giftRecipient: null != M ? M : true
      }, {
        analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
      })
    }, [x, M]);
  return w && null == x ? (0, r.jsx)("div", {
    className: v.container,
    children: (0, r.jsx)(s.$jN, {
      className: v.spinner
    })
  }) : null == x ? null : (0, r.jsxs)("div", {
    className: v.container,
    children: [(0, r.jsx)(b.C, {
      className: v.card,
      applicationId: x.applicationId,
      skuId: P,
      variant: b.Z.EMBEDDED,
      onClick: U
    }), (0, r.jsxs)("div", {
      className: v.details,
      children: [(0, r.jsxs)("div", {
        className: v.detailsTitleDescription,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/bold",
          lineClamp: 1,
          children: x.name
        }), (0, r.jsxs)("div", {
          className: v.detailsDescription,
          children: [null != k && (0, r.jsx)("img", {
            src: k.toString(),
            alt: j,
            className: v.iconAsset
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/semibold",
            lineClamp: 1,
            children: (0, _.T4)(null != (S = null == (t = x.price) ? true : t.amount) ? S : 0, null != (A = null == (n = x.price) ? true : n.currency) ? A : y.pK.USD)
          })]
        })]
      }), (0, r.jsxs)(a.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(a.zxk, {
          variant: "secondary",
          onClick: U,
          text: O.intl.string(O.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          onClick: G,
          text: O.intl.format(O.t.Xp5WTn, {
            price: (0, _.T4)(null != (C = null == (I = x.price) ? true : I.amount) ? C : 0, null != (N = null == (T = x.price) ? true : T.currency) ? N : y.pK.USD)
          }),
          fullWidth: true
        }), (0, r.jsx)(E.Z, {
          onGift: B
        })]
      })]
    })]
  })
}