/** Chunk was on 2824 **/
/** chunk id: 877156, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk920064 = require("./920064.js"),
  Chunk674658 = require("./674658.js"),
  Chunk898461 = require("./898461.js"),
  Chunk837015 = require("./837015.js"),
  Chunk61750 = require("./61750.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk369496 = require("./369496.js"),
  Chunk550111 = require("./550111.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk287809 = require("./287809.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk401506 = require("./401506.js");

function b(e) {
  let {
    rewardSkuId: n,
    purchase: t,
    onClose: b
  } = e, A = (0, i.bG)([h.default], () => h.default.getCurrentUser()), y = (0, i.bG)([o.A], () => o.A.useReducedMotion), {
    analyticsLocations: v
  } = (0, u.Ay)(), I = a._3J.SIZE_32, O = (0, x.A)(), _ = null == O ? true : O.giftPurchaseConfirmation, {
    product: N,
    isFetching: C
  } = (0, d.q)(n), [M, w] = r.useState(false), R = t.items[0], {
    isNameplateReward: k,
    nameplateData: D,
    rewardDeco: L
  } = r.useMemo(() => {
    if (null == R) return {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: true
    };
    if ((0, m.F)(R)) {
      var e;
      return {
        isNameplateReward: true,
        nameplateData: {
          src: R.asset,
          palette: (0, j.H6)(null != (e = R.palette) ? e : "sky"),
          imgAlt: R.label
        },
        rewardDeco: true
      }
    }
    return (0, p.T)(R) ? {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: (0, c.A)(R.asset, I, !y)
    } : {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: true
    }
  }, [R, I, y]);
  return null == _ ? null : (0, l.jsx)(T.UX, {
    children: (0, l.jsx)(a.jlY, {
      align: f.A.Align.CENTER,
      "data-migration-pending": true,
      children: (0, l.jsxs)("div", {
        className: S.W,
        children: [k && null != D ? (0, l.jsx)("div", {
          className: S.D,
          onMouseEnter: () => w(true),
          onMouseLeave: () => w(false),
          children: (0, l.jsx)(E.a, {
            user: A,
            nameplate: null,
            nameplateData: D,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: M
          })
        }) : (0, l.jsx)(a.JsQ, {
          "aria-label": null == A ? true : A.username,
          size: I,
          src: null == A ? true : A.getAvatarURL(true, (0, a.FT9)(I), !y),
          avatarDecoration: L
        }), (0, l.jsx)(s.$nd, {
          variant: "primary",
          text: _.collectRewardButtonText(),
          loading: C,
          onClick: () => {
            null != N && (b(), (0, g.A)({
              product: N,
              shouldShowPromotionalExperience: true,
              analyticsLocations: v,
              purchaseType: P.gs.PROMOTIONAL
            }))
          }
        })]
      })
    })
  })
}