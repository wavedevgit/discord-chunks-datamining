/** Chunk was on 21854 **/
/** chunk id: 211912, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk626135 = require("./626135.js"),
  Chunk705338 = require("./705338.js"),
  Chunk582113 = require("./582113.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk487373 = require("./487373.js"),
  Chunk867709 = require("./867709.js"),
  Chunk157443 = require("./157443.js");

function g(e) {
  let {
    transitionState: t,
    returnRef: a,
    onClose: n
  } = e;
  s.useEffect(() => {
    m.default.track(x.rMx.OPEN_MODAL, {
      type: "Social Layer Storefront Announcement Modal"
    }), (0, d.Q3)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL)
  }, []);
  let g = s.useCallback(() => {
    (0, u.Z)({
      guildId: f.ON
    }), n()
  }, [n]);
  return (0, r.jsx)(l.f6W, {
    theme: h.BR.DARK,
    children: e => (0, r.jsx)(o.Y0X, {
      transitionState: t,
      parentComponent: "SocialLayerStorefrontAnnouncementModal",
      size: o.CgR.DYNAMIC,
      className: i()(e, j.modal),
      returnRef: a,
      children: (0, r.jsxs)(o.hzk, {
        className: j.content,
        children: [(0, r.jsx)("div", {
          className: j.closeButton,
          children: (0, r.jsx)(o.olH, {
            onClick: n
          })
        }), (0, r.jsx)("div", {
          className: j.artwork
        }), (0, r.jsx)(l.X6q, {
          variant: "display-md",
          color: "header-primary",
          children: p.intl.string(p.t.to0E8U)
        }), (0, r.jsx)(l.X6q, {
          variant: "display-md",
          color: "header-primary",
          children: p.intl.string(p.t.BKEkBd)
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-md/medium",
          color: "header-muted",
          children: p.intl.string(p.t.SiXpR2)
        }), (0, r.jsxs)("div", {
          className: j.features,
          children: [(0, r.jsxs)("div", {
            className: j.feature,
            children: [(0, r.jsx)("div", {
              className: j.featureIcon,
              children: (0, r.jsx)("img", {
                src: N,
                alt: ""
              })
            }), (0, r.jsxs)("div", {
              className: j.featureCopy,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: p.intl.string(p.t["5hRbeH"])
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: p.intl.string(p.t["72sDuh"])
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: j.feature,
            children: [(0, r.jsx)("div", {
              className: j.featureIcon,
              children: (0, r.jsx)("img", {
                src: v,
                alt: ""
              })
            }), (0, r.jsxs)("div", {
              className: j.featureCopy,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: p.intl.string(p.t.MO4ASw)
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: p.intl.string(p.t.o4i2Wx)
              })]
            })]
          })]
        }), (0, r.jsx)(l.zxk, {
          variant: "primary",
          text: p.intl.string(p.t.CekBHq),
          onClick: g
        })]
      })
    })
  })
}