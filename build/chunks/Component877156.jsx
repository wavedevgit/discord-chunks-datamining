/** Chunk was on 2824 **/
/** chunk id: 877156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk575593 = require("./575593.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk920064 = require("./920064.js"),
  Chunk674658 = require("./674658.js"),
  Chunk61750 = require("./61750.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk369496 = require("./369496.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk287809 = require("./287809.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk401506 = require("./401506.js");

function P(e) {
  let {
    reward: t,
    purchase: n,
    onClose: P
  } = e, E = (0, s.bG)([b.default], () => b.default.getCurrentUser()), x = (0, s.bG)([u.A], () => u.A.useReducedMotion), {
    analyticsLocations: S
  } = (0, c.Ay)(), T = o._3J.SIZE_32, I = (0, d.A)(t.assetId, T, !x), A = (0, j.A)(), k = null == A ? true : A.giftPurchaseConfirmation, {
    product: C,
    isFetching: w
  } = (0, p.q)(n.skuId), _ = t.type === i.R.NAMEPLATE, [M, N] = l.useState(false), R = l.useMemo(() => {
    var e, n;
    return _ && null != t.assetId ? {
      src: t.assetId,
      palette: (0, f.H6)(null != (e = t.palette) ? e : "sky"),
      imgAlt: null == (n = t.a11yLabel) ? true : n.call(t)
    } : null
  }, [_, t]);
  return null == k ? null : (0, r.jsx)(h.UX, {
    children: (0, r.jsx)(o.jlY, {
      align: g.A.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: O.W,
        children: [_ && null != R ? (0, r.jsx)("div", {
          className: O.D,
          onMouseEnter: () => N(true),
          onMouseLeave: () => N(false),
          children: (0, r.jsx)(y.a, {
            user: E,
            nameplate: null,
            nameplateData: R,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: M
          })
        }) : (0, r.jsx)(o.JsQ, {
          "aria-label": null == E ? true : E.username,
          size: T,
          src: null == E ? true : E.getAvatarURL(true, (0, o.FT9)(T), !x),
          avatarDecoration: I
        }), (0, r.jsx)(a.$nd, {
          variant: "primary",
          text: k.collectRewardButtonText(),
          loading: w,
          onClick: () => {
            null != C && (P(), (0, m.A)({
              product: C,
              shouldShowPromotionalExperience: true,
              analyticsLocations: S,
              purchaseType: v.gs.PROMOTIONAL
            }))
          }
        })]
      })
    })
  })
}