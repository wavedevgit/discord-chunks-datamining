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
  Chunk179047 = require("./179047.js");

function I(e) {
  var t, n, I, T, C, A, N, P;
  let {
    guildId: R,
    skuId: w,
    channel: D
  } = e, x = (0, o.e7)([p.Z], () => p.Z.isFetchingForSKU(w)), L = (0, o.e7)([f.Z], () => f.Z.get(w)), j = null == L ? true : L.applicationId, {
    analyticsLocations: M
  } = (0, c.ZP)(l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
  (0, u.p2)();
  let k = (0, o.e7)([d.default], () => D.isDM() && null != D.recipients && 0 !== D.recipients.length ? d.default.getUser(D.recipients[0]) : null),
    {
      primaryIconAsset: U,
      primaryIconLabel: G
    } = i.useMemo(() => (0, m.FE)(L, j), [L, j]);
  i.useEffect(() => {
    null == R || null == w || p.Z.isFetchingForSKU(w) || (0, h.y)(R, w)
  }, [R, w]);
  let Z = i.useCallback(e => {
      e.stopPropagation(), (null == L ? true : L.applicationId) != null && null != R && (0, g.g)({
        skuId: w,
        applicationId: L.applicationId,
        guildId: R,
        isStorefront: false,
        analyticsLocations: M
      })
    }, [w, null == L ? true : L.applicationId, R, M]),
    F = i.useCallback(() => {
      null != L && (0, E.P)(L, {
        isGift: false
      }, {
        analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON]
      })
    }, [L]),
    B = i.useCallback(() => {
      null != L && (0, E.P)(L, {
        isGift: true,
        giftRecipient: null != k ? k : true
      }, {
        analyticsLocations: [l.Z.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
      })
    }, [L, k]);
  return x && null == L ? (0, r.jsx)("div", {
    className: S.container,
    children: (0, r.jsx)(s.$jN, {
      className: S.spinner
    })
  }) : null == L ? null : (0, r.jsxs)("div", {
    className: S.container,
    children: [(0, r.jsx)(y.ZP, {
      className: S.card,
      applicationId: L.applicationId,
      skuId: w,
      variant: y.Zp.EMBEDDED,
      onClick: Z,
      analyticsLocations: M
    }), (0, r.jsxs)("div", {
      className: S.details,
      children: [(0, r.jsxs)("div", {
        className: S.detailsTitleDescription,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          children: L.name
        }), (0, r.jsxs)("div", {
          className: S.detailsDescription,
          children: [null != U && (0, r.jsx)("img", {
            src: U.toString(),
            alt: G,
            className: S.iconAsset
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/bold",
            lineClamp: 1,
            children: (0, _.T4)(null != (C = null == (t = L.price) ? true : t.amount) ? C : 0, null != (A = null == (n = L.price) ? true : n.currency) ? A : O.pK.USD)
          })]
        })]
      }), (0, r.jsxs)(a.hE2, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(a.zxk, {
          variant: "secondary",
          onClick: Z,
          text: v.intl.string(v.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(a.zxk, {
          variant: "primary",
          onClick: F,
          text: v.intl.format(v.t.Xp5WTn, {
            price: (0, _.T4)(null != (N = null == (I = L.price) ? true : I.amount) ? N : 0, null != (P = null == (T = L.price) ? true : T.currency) ? P : O.pK.USD)
          }),
          fullWidth: true
        }), (0, r.jsx)(b.Z, {
          onGift: B
        })]
      })]
    })]
  })
}