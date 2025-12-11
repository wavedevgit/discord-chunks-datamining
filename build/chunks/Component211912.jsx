/** Chunk was on 21854 **/
/** chunk id: 211912, original params: e,t,a (module,exports,require) **/
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
  Chunk383749 = require("./383749.js"),
  Chunk867709 = require("./867709.js"),
  Chunk157443 = require("./157443.js");

function b(e) {
  let {
    transitionState: t,
    returnRef: a,
    onClose: n
  } = e;
  s.useEffect(() => {
    u.default.track(x.rMx.OPEN_MODAL, {
      type: "Social Layer Storefront Announcement Modal"
    }), (0, d.bj)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL, {
      dismissAction: h.L.AUTO_DISMISS
    })
  }, []);
  let b = s.useCallback(() => {
      (0, f.eagerNavigateToSocialLayerStorefront)({
        guildId: (0, m.ac)()
      })
    }, []),
    k = s.useCallback(() => {
      (0, f.default)({
        guildId: (0, m.ac)()
      }), n()
    }, [n]);
  return (0, r.jsx)(l.f6W, {
    theme: p.BR.DARK,
    children: e => (0, r.jsx)(o.Y0X, {
      transitionState: t,
      parentComponent: "SocialLayerStorefrontAnnouncementModal",
      size: o.CgR.DYNAMIC,
      className: i()(e, v.modal),
      returnRef: a,
      children: (0, r.jsxs)(o.hzk, {
        className: v.content,
        children: [(0, r.jsx)("div", {
          className: v.closeButton,
          children: (0, r.jsx)(o.olH, {
            onClick: n
          })
        }), (0, r.jsx)("div", {
          className: v.artwork
        }), (0, r.jsx)(l.X6q, {
          variant: "display-md",
          color: "header-primary",
          children: j.intl.string(j.t.to0E8U)
        }), (0, r.jsx)(l.X6q, {
          variant: "display-md",
          color: "header-primary",
          children: j.intl.string(j.t.BKEkBd)
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-md/medium",
          color: "text-muted",
          children: j.intl.string(j.t.SiXpR2)
        }), (0, r.jsxs)("div", {
          className: v.features,
          children: [(0, r.jsxs)("div", {
            className: v.feature,
            children: [(0, r.jsx)("div", {
              className: v.featureIcon,
              children: (0, r.jsx)("img", {
                src: N,
                alt: ""
              })
            }), (0, r.jsxs)("div", {
              className: v.featureCopy,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: j.intl.string(j.t["5hRbeH"])
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: j.intl.string(j.t["72sDuh"])
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: v.feature,
            children: [(0, r.jsx)("div", {
              className: v.featureIcon,
              children: (0, r.jsx)("img", {
                src: g,
                alt: ""
              })
            }), (0, r.jsxs)("div", {
              className: v.featureCopy,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: j.intl.string(j.t.MO4ASw)
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: j.intl.string(j.t.o4i2Wx)
              })]
            })]
          })]
        }), (0, r.jsx)(l.zxk, {
          variant: "primary",
          text: j.intl.string(j.t.CekBHq),
          onClick: k,
          onMouseDown: b
        })]
      })
    })
  })
}