/** Chunk was on 2824 **/
/** chunk id: 877156, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => A
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
  Chunk287809 = require("./287809.js"),
  Chunk482132 = require("./482132.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk401506 = require("./401506.js");

function A(e) {
  let {
    rewardSkuId: n,
    onClose: t
  } = e, A = (0, i.bG)([x.default], () => x.default.getCurrentUser()), b = (0, i.bG)([o.A], () => o.A.useReducedMotion), {
    analyticsLocations: y
  } = (0, u.Ay)(), I = a._3J.SIZE_32, {
    product: O,
    isFetching: v
  } = (0, d.q)(n), [_, N] = l.useState(false), C = null == O ? true : O.items[0], {
    isNameplateReward: M,
    nameplateData: R,
    rewardDeco: k
  } = l.useMemo(() => {
    if (null == C) return {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: true
    };
    if ((0, m.F)(C)) {
      var e;
      return {
        isNameplateReward: true,
        nameplateData: {
          src: C.asset,
          palette: (0, E.H6)(null != (e = C.palette) ? e : "sky"),
          imgAlt: C.label
        },
        rewardDeco: true
      }
    }
    return (0, p.T)(C) ? {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: (0, c.A)(C.asset, I, !b)
    } : {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: true
    }
  }, [C, I, b]);
  return (0, r.jsx)(h.UX, {
    children: (0, r.jsx)(a.jlY, {
      align: f.A.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: S.W,
        children: [M && null != R ? (0, r.jsx)("div", {
          className: S.D,
          onMouseEnter: () => N(true),
          onMouseLeave: () => N(false),
          children: (0, r.jsx)(j.a, {
            user: A,
            nameplate: null,
            nameplateData: R,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: _
          })
        }) : (0, r.jsx)(a.JsQ, {
          "aria-label": null == A ? true : A.username,
          size: I,
          src: null == A ? true : A.getAvatarURL(true, (0, a.FT9)(I), !b),
          avatarDecoration: k
        }), (0, r.jsx)(s.$nd, {
          variant: "primary",
          text: P.intl.string(P.t.kMYVwv),
          loading: v,
          onClick: () => {
            null != O && (t(), (0, g.A)({
              product: O,
              shouldShowPromotionalExperience: true,
              analyticsLocations: y,
              purchaseType: T.gs.PROMOTIONAL
            }))
          }
        })]
      })
    })
  })
}