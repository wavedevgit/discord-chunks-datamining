/** Chunk was on 2824 **/
/** chunk id: 877156, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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

function x(e) {
  let {
    reward: t,
    purchase: n,
    onClose: x
  } = e, P = (0, s.bG)([h.default], () => h.default.getCurrentUser()), S = (0, s.bG)([u.A], () => u.A.useReducedMotion), {
    analyticsLocations: E
  } = (0, c.Ay)(), T = o._3J.SIZE_32, I = (0, d.A)(t.assetId, T, !S), A = (0, y.A)(), k = null == A ? true : A.giftPurchaseConfirmation, {
    product: w,
    isFetching: _
  } = (0, p.q)(n.skuId), C = t.type === i.R.NAMEPLATE, [M, N] = r.useState(false), R = r.useMemo(() => {
    var e, n;
    return C && null != t.assetId ? {
      src: t.assetId,
      palette: (0, g.H6)(null != (e = t.palette) ? e : "sky"),
      imgAlt: null == (n = t.a11yLabel) ? true : n.call(t)
    } : null
  }, [C, t]);
  return null == k ? null : (0, l.jsx)(v.UX, {
    children: (0, l.jsx)(o.jlY, {
      align: f.A.Align.CENTER,
      "data-migration-pending": true,
      children: (0, l.jsxs)("div", {
        className: O.W,
        children: [C && null != R ? (0, l.jsx)("div", {
          className: O.D,
          onMouseEnter: () => N(true),
          onMouseLeave: () => N(false),
          children: (0, l.jsx)(j.a, {
            user: P,
            nameplate: null,
            nameplateData: R,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: M
          })
        }) : (0, l.jsx)(o.JsQ, {
          "aria-label": null == P ? true : P.username,
          size: T,
          src: null == P ? true : P.getAvatarURL(true, (0, o.FT9)(T), !S),
          avatarDecoration: I
        }), (0, l.jsx)(a.$nd, {
          variant: "primary",
          text: k.collectRewardButtonText(),
          loading: _,
          onClick: () => {
            null != w && (x(), (0, m.A)({
              product: w,
              shouldShowPromotionalExperience: true,
              analyticsLocations: E,
              purchaseType: b.gs.PROMOTIONAL
            }))
          }
        })]
      })
    })
  })
}