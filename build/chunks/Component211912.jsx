/** Chunk was on 21854 **/
/** chunk id: 211912, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk605236 = require("./605236.js"),
  Chunk626135 = require("./626135.js"),
  Chunk164670 = require("./164670.js"),
  Chunk705338 = require("./705338.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk487373 = require("./487373.js"),
  Chunk867709 = require("./867709.js"),
  Chunk157443 = require("./157443.js");

function b(e) {
  let {
    transitionState: t,
    returnRef: s,
    onClose: r
  } = e;
  n.useEffect(() => {
    u.default.track(f.rMx.OPEN_MODAL, {
      type: "Social Layer Storefront Announcement Modal"
    }), (0, d.bj)(o.z.GAME_SHOP_ANNOUNCEMENT_MODAL, {
      dismissAction: h.L.AUTO_DISMISS
    })
  }, []);
  let b = n.useCallback(() => {
      (0, m.eagerNavigateToSocialLayerStorefront)({
        guildId: (0, x.ac)()
      })
    }, []),
    k = n.useCallback(() => {
      (0, m.default)({
        guildId: (0, x.ac)()
      }), r()
    }, [r]);
  return (0, a.jsx)(c.f6W, {
    theme: g.BR.DARK,
    children: e => (0, a.jsx)(l.Y0X, {
      transitionState: t,
      parentComponent: "SocialLayerStorefrontAnnouncementModal",
      size: l.CgR.DYNAMIC,
      className: i()(e, p.modal),
      returnRef: s,
      children: (0, a.jsxs)(l.hzk, {
        className: p.content,
        children: [(0, a.jsx)("div", {
          className: p.closeButton,
          children: (0, a.jsx)(l.olH, {
            onClick: r
          })
        }), (0, a.jsx)("div", {
          className: p.artwork
        }), (0, a.jsx)(c.X6q, {
          variant: "display-md",
          color: "text-strong",
          children: j.intl.string(j.t.to0E8U)
        }), (0, a.jsx)(c.X6q, {
          variant: "display-md",
          color: "text-strong",
          children: j.intl.string(j.t.BKEkBd)
        }), (0, a.jsx)(c.X6q, {
          variant: "heading-md/medium",
          color: "text-muted",
          children: j.intl.string(j.t.SiXpR2)
        }), (0, a.jsxs)("div", {
          className: p.features,
          children: [(0, a.jsxs)("div", {
            className: p.feature,
            children: [(0, a.jsx)("div", {
              className: p.featureIcon,
              children: (0, a.jsx)("img", {
                src: N,
                alt: ""
              })
            }), (0, a.jsxs)("div", {
              className: p.featureCopy,
              children: [(0, a.jsx)(c.X6q, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: j.intl.string(j.t["5hRbeH"])
              }), (0, a.jsx)(c.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: j.intl.string(j.t["72sDuh"])
              })]
            })]
          }), (0, a.jsxs)("div", {
            className: p.feature,
            children: [(0, a.jsx)("div", {
              className: p.featureIcon,
              children: (0, a.jsx)("img", {
                src: v,
                alt: ""
              })
            }), (0, a.jsxs)("div", {
              className: p.featureCopy,
              children: [(0, a.jsx)(c.X6q, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: j.intl.string(j.t.MO4ASw)
              }), (0, a.jsx)(c.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: j.intl.string(j.t.o4i2Wx)
              })]
            })]
          })]
        }), (0, a.jsx)(c.zxk, {
          variant: "primary",
          text: j.intl.string(j.t.CekBHq),
          onClick: k,
          onMouseDown: b
        })]
      })
    })
  })
}