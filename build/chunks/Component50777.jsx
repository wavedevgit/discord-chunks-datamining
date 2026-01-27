/** Chunk was on 92917 **/
/** chunk id: 50777, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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
  Chunk317560 = require("./317560.jsx"),
  Chunk533406 = require("./533406.jsx"),
  Chunk300182 = require("./300182.jsx"),
  Chunk183802 = require("./183802.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk928625 = require("./928625.js");

function E(e) {
  var t, n, E, j, C, I, S, T;
  let {
    guildId: N,
    skuId: P,
    channel: w
  } = e, R = (0, a.bG)([m.A], () => m.A.isFetchingForSKU(P)), D = (0, a.bG)([p.A], () => p.A.get(P)), L = null == D ? true : D.applicationId, {
    analyticsLocations: M
  } = (0, c.Ay)(o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
  (0, u.pE)();
  let k = (0, a.bG)([d.default], () => w.isDM() && null != w.recipients && 0 !== w.recipients.length ? d.default.getUser(w.recipients[0]) : null),
    {
      primaryIconAsset: U,
      primaryIconLabel: G
    } = i.useMemo(() => (0, g.Cv)(D, L), [D, L]);
  i.useEffect(() => {
    null == N || null == P || m.A.isFetchingForSKU(P) || (0, h.qf)(N, P)
  }, [N, P]);
  let B = i.useCallback(e => {
      e.stopPropagation(), (null == D ? true : D.applicationId) != null && null != N && (0, _.R)({
        skuId: P,
        applicationId: D.applicationId,
        guildId: N,
        isStorefront: false,
        analyticsLocations: M
      })
    }, [P, null == D ? true : D.applicationId, N, M]),
    F = i.useCallback(() => {
      null != D && (0, b.a)(D, {
        isGift: false
      }, {
        analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON]
      })
    }, [D]),
    H = i.useCallback(() => {
      null != D && (0, b.a)(D, {
        isGift: true,
        giftRecipient: null != k ? k : true
      }, {
        analyticsLocations: [o.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
      })
    }, [D, k]);
  return R && null == D ? (0, r.jsx)("div", {
    className: O.kL,
    children: (0, r.jsx)(s.y$y, {
      className: O.u1
    })
  }) : null == D ? null : (0, r.jsxs)("div", {
    className: O.kL,
    children: [(0, r.jsx)(y.A, {
      className: O.Nr,
      applicationId: D.applicationId,
      skuId: P,
      guildId: N,
      variant: y.s.EMBEDDED,
      onClick: B,
      analyticsLocations: M
    }), (0, r.jsxs)("div", {
      className: O.zH,
      children: [(0, r.jsxs)("div", {
        className: O.lI,
        children: [(0, r.jsx)(s.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          children: D.name
        }), (0, r.jsxs)("div", {
          className: O.PB,
          children: [null != U && (0, r.jsx)("img", {
            src: U.toString(),
            alt: G,
            className: O.ye
          }), (0, r.jsx)(s.Text, {
            variant: "text-md/bold",
            lineClamp: 1,
            children: (0, f.$g)(null != (t = null == (C = D.price) ? true : C.amount) ? t : 0, null != (n = null == (I = D.price) ? true : I.currency) ? n : v.Yr.USD)
          })]
        })]
      }), (0, r.jsxs)(l.e2v, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(l.$nd, {
          variant: "secondary",
          onClick: B,
          text: x.intl.string(x.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(l.$nd, {
          variant: "primary",
          onClick: F,
          text: x.intl.format(x.t.Xp5WTn, {
            price: (0, f.$g)(null != (E = null == (S = D.price) ? true : S.amount) ? E : 0, null != (j = null == (T = D.price) ? true : T.currency) ? j : v.Yr.USD)
          }),
          fullWidth: true
        }), (0, r.jsx)(A.A, {
          onGift: H
        })]
      })]
    })]
  })
}