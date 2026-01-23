/** Chunk was on web.js **/
/** chunk id: 50777, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
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

function I(e) {
  var t, n, I, S, T, C, N, R;
  let {
    guildId: w,
    skuId: P,
    channel: D
  } = e, x = (0, s.bG)([p.A], () => p.A.isFetchingForSKU(P)), L = (0, s.bG)([f.A], () => f.A.get(P)), j = null == L ? true : L.applicationId, {
    analyticsLocations: M
  } = (0, c.Ay)(l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED);
  (0, u.pE)();
  let k = (0, s.bG)([d.default], () => D.isDM() && null != D.recipients && 0 !== D.recipients.length ? d.default.getUser(D.recipients[0]) : null),
    {
      primaryIconAsset: U,
      primaryIconLabel: G
    } = i.useMemo(() => (0, h.Cv)(L, j), [L, j]);
  i.useEffect(() => {
    null == w || null == P || p.A.isFetchingForSKU(P) || (0, m.qf)(w, P)
  }, [w, P]);
  let V = i.useCallback(e => {
      e.stopPropagation(), (null == L ? true : L.applicationId) != null && null != w && (0, g.R)({
        skuId: P,
        applicationId: L.applicationId,
        guildId: w,
        isStorefront: false,
        analyticsLocations: M
      })
    }, [P, null == L ? true : L.applicationId, w, M]),
    F = i.useCallback(() => {
      null != L && (0, E.a)(L, {
        isGift: false
      }, {
        analyticsLocations: [l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_PURCHASE_BUTTON]
      })
    }, [L]),
    B = i.useCallback(() => {
      null != L && (0, E.a)(L, {
        isGift: true,
        giftRecipient: null != k ? k : true
      }, {
        analyticsLocations: [l.A.SLAYER_STOREFRONT_PRODUCT_DETAILS_EMBED_GIFT_BUTTON]
      })
    }, [L, k]);
  return x && null == L ? (0, r.jsx)("div", {
    className: A.kL,
    children: (0, r.jsx)(o.y$y, {
      className: A.u1
    })
  }) : null == L ? null : (0, r.jsxs)("div", {
    className: A.kL,
    children: [(0, r.jsx)(b.A, {
      className: A.Nr,
      applicationId: L.applicationId,
      skuId: P,
      guildId: w,
      variant: b.s.EMBEDDED,
      onClick: V,
      analyticsLocations: M
    }), (0, r.jsxs)("div", {
      className: A.zH,
      children: [(0, r.jsxs)("div", {
        className: A.lI,
        children: [(0, r.jsx)(o.Text, {
          variant: "text-md/medium",
          lineClamp: 1,
          children: L.name
        }), (0, r.jsxs)("div", {
          className: A.PB,
          children: [null != U && (0, r.jsx)("img", {
            src: U.toString(),
            alt: G,
            className: A.ye
          }), (0, r.jsx)(o.Text, {
            variant: "text-md/bold",
            lineClamp: 1,
            children: (0, _.$g)(null != (t = null == (T = L.price) ? true : T.amount) ? t : 0, null != (n = null == (C = L.price) ? true : C.currency) ? n : O.Yr.USD)
          })]
        })]
      }), (0, r.jsxs)(a.e2v, {
        wrap: false,
        fullWidth: true,
        children: [(0, r.jsx)(a.$nd, {
          variant: "secondary",
          onClick: V,
          text: v.intl.string(v.t.KLBTgF),
          fullWidth: true
        }), (0, r.jsx)(a.$nd, {
          variant: "primary",
          onClick: F,
          text: v.intl.format(v.t.Xp5WTn, {
            price: (0, _.$g)(null != (I = null == (N = L.price) ? true : N.amount) ? I : 0, null != (S = null == (R = L.price) ? true : R.currency) ? S : O.Yr.USD)
          }),
          fullWidth: true
        }), (0, r.jsx)(y.A, {
          onGift: B
        })]
      })]
    })]
  })
}