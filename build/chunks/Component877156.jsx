/** Chunk was on 2824 **/
/** chunk id: 877156, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => S
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

function S(e) {
  let {
    rewardSkuId: n,
    onClose: t
  } = e, S = (0, i.bG)([j.default], () => j.default.getCurrentUser()), b = (0, i.bG)([o.A], () => o.A.useReducedMotion), {
    analyticsLocations: O
  } = (0, u.Ay)(), y = a._3J.SIZE_32, {
    product: A,
    isFetching: I
  } = (0, d.q)(n), [v, R] = l.useState(false), C = null == A ? true : A.items[0], {
    isNameplateReward: M,
    nameplateData: N,
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
          palette: (0, f.H6)(null != (e = C.palette) ? e : "sky"),
          imgAlt: C.label
        },
        rewardDeco: true
      }
    }
    return (0, p.T)(C) ? {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: (0, c.A)(C.asset, y, !b)
    } : {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: true
    }
  }, [C, y, b]);
  return (0, r.jsx)(h.UX, {
    children: (0, r.jsx)(a.jlY, {
      align: g.A.Align.CENTER,
      "data-migration-pending": true,
      children: (0, r.jsxs)("div", {
        className: T.W,
        children: [M && null != N ? (0, r.jsx)("div", {
          className: T.D,
          onMouseEnter: () => R(true),
          onMouseLeave: () => R(false),
          children: (0, r.jsx)(P.a, {
            user: S,
            nameplate: null,
            nameplateData: N,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: v
          })
        }) : (0, r.jsx)(a.JsQ, {
          "aria-label": null == S ? true : S.username,
          size: y,
          src: null == S ? true : S.getAvatarURL(true, (0, a.FT9)(y), !b),
          avatarDecoration: k
        }), (0, r.jsx)(s.$nd, {
          variant: "primary",
          text: x.intl.string(x.t.kMYVwv),
          loading: I,
          onClick: () => {
            null != A && (t(), (0, E.A)({
              product: A,
              shouldShowPromotionalExperience: true,
              analyticsLocations: O,
              purchaseType: _.gs.PROMOTIONAL
            }))
          }
        })]
      })
    })
  })
}