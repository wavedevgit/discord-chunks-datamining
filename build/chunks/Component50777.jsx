/** Chunk was on 92917 **/
/** chunk id: 50777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk594832 = require("./594832.js"),
  Chunk287809 = require("./287809.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk580630 = require("./580630.js"),
  Chunk871123 = require("./871123.js"),
  Chunk733391 = require("./733391.js"),
  Chunk832163 = require("./832163.js"),
  Chunk317560 = require("./317560.jsx"),
  Chunk533406 = require("./533406.jsx"),
  Chunk300182 = require("./300182.jsx"),
  Chunk183802 = require("./183802.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928625 = require("./928625.js");

function j(e) {
  var t, n, j, C, I, S, T, N;
  let {
    guildId: P,
    skuId: w,
    channel: R
  } = e, D = (0, a.bG)([m.A], () => m.A.isFetchingForSKU(w)), L = (0, a.bG)([p.A], () => p.A.get(w)), M = null == L ? true : L.applicationId, {
    analyticsLocations: k
  } = (0, c.Ay)(o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
  (0, u.pE)();
  let U = (0, a.bG)([d.default], () => R.isDM() && null != R.recipients && 0 !== R.recipients.length ? d.default.getUser(R.recipients[0]) : null),
    G = (0, a.bG)([_.A], () => null != w ? _.A.getNormalizedSKUEligibility(w) : true, [w]),
    {
      primaryIconAsset: B,
      primaryIconLabel: F
    } = i.useMemo(() => (0, g.Cv)(L, M), [L, M]);
  i.useEffect(() => {
    null == P || null == w || m.A.isFetchingForSKU(w) || (0, h.qf)(P, w)
  }, [P, w]);
  let H = i.useCallback(e => {
      e.stopPropagation(), (null == L ? true : L.applicationId) != null && null != P && (0, b.R)({
        skuId: w,
        applicationId: L.applicationId,
        guildId: P,
        isStorefront: false,
        analyticsLocations: k
      })
    }, [w, null == L ? true : L.applicationId, P, k]),
    V = i.useCallback(() => {
      null != L && (0, A.a)(L, {
        isGift: false
      }, {
        analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON],
        guildId: P
      })
    }, [L, P]),
    z = i.useCallback(() => {
      null != L && (0, A.a)(L, {
        isGift: true,
        giftRecipient: null != U ? U : true
      }, {
        analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
      })
    }, [L, U]);
  return D && null == L ? (0, r.jsx)("div", {
    className: E.kL,
    children: (0, r.jsx)(s.y$y, {
      className: E.u1
    })
  }) : null == L ? null : (0, r.jsxs)("div", {
    className: E.kL,
    children: [(0, r.jsx)(v.A, {
      className: E.Nr,
      applicationId: L.applicationId,
      skuId: w,
      guildId: P,
      variant: v.s.EMBEDDED,
      onClick: H,
      analyticsLocations: k
    }), (0, r.jsxs)("div", {
      className: E.zH,
      children: [(0, r.jsxs)("div", {
        className: E.lI,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          children: L.name
        }), (0, r.jsxs)("div", {
          className: E.PB,
          children: [null != B && (0, r.jsx)("img", {
            src: B.toString(),
            alt: F,
            className: E.ye
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/bold",
            lineClamp: 1,
            children: (0, f.$g)(null != (t = null == (I = L.price) ? true : I.amount) ? t : 0, null != (n = null == (S = L.price) ? true : S.currency) ? n : x.Yr.USD)
          })]
        })]
      }), (0, r.jsxs)(l.e2v, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(l.$nd, {
          variant: "secondary",
          onClick: H,
          text: O.intl.string(O.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(l.$nd, {
          variant: "primary",
          onClick: V,
          text: G ? O.intl.format(O.t.Xp5WTn, {
            price: (0, f.$g)(null != (j = null == (T = L.price) ? true : T.amount) ? j : 0, null != (C = null == (N = L.price) ? true : N.currency) ? C : x.Yr.USD)
          }) : O.intl.string(O.t.cg0M2H),
          fullWidth: true,
          disabled: !G
        }), (0, r.jsx)(y.A, {
          onGift: z
        })]
      })]
    })]
  })
}