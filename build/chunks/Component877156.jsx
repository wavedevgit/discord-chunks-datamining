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
  } = e, A = (0, i.bG)([h.default], () => h.default.getCurrentUser()), O = (0, i.bG)([o.A], () => o.A.useReducedMotion), {
    analyticsLocations: b
  } = (0, u.Ay)(), y = a._3J.SIZE_32, {
    product: I,
    isFetching: _
  } = (0, d.q)(n), [v, C] = r.useState(false), N = null == I ? true : I.items[0], {
    isNameplateReward: M,
    nameplateData: R,
    rewardDeco: k
  } = r.useMemo(() => {
    if (null == N) return {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: true
    };
    if ((0, m.F)(N)) {
      var e;
      return {
        isNameplateReward: true,
        nameplateData: {
          src: N.asset,
          palette: (0, f.H6)(null != (e = N.palette) ? e : "sky"),
          imgAlt: N.label
        },
        rewardDeco: true
      }
    }
    return (0, p.T)(N) ? {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: (0, c.A)(N.asset, y, !O)
    } : {
      isNameplateReward: false,
      nameplateData: null,
      rewardDeco: true
    }
  }, [N, y, O]);
  return (0, l.jsx)(x.UX, {
    children: (0, l.jsx)(a.jlY, {
      align: E.A.Align.CENTER,
      "data-migration-pending": true,
      children: (0, l.jsxs)("div", {
        className: S.W,
        children: [M && null != R ? (0, l.jsx)("div", {
          className: S.D,
          onMouseEnter: () => C(true),
          onMouseLeave: () => C(false),
          children: (0, l.jsx)(j.a, {
            user: A,
            nameplate: null,
            nameplateData: R,
            showPlaceholderUser: true,
            nameplatePreviewSize: "xsmall",
            isHighlighted: v
          })
        }) : (0, l.jsx)(a.JsQ, {
          "aria-label": null == A ? true : A.username,
          size: y,
          src: null == A ? true : A.getAvatarURL(true, (0, a.FT9)(y), !O),
          avatarDecoration: k
        }), (0, l.jsx)(s.$nd, {
          variant: "primary",
          text: T.intl.string(T.t.kMYVwv),
          loading: _,
          onClick: () => {
            null != I && (t(), (0, g.A)({
              product: I,
              shouldShowPromotionalExperience: true,
              analyticsLocations: b,
              purchaseType: P.gs.PROMOTIONAL
            }))
          }
        })]
      })
    })
  })
}