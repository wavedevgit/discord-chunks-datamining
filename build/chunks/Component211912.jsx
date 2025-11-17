/** Chunk was on 21854 **/
/** chunk id: 211912, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk705338 = require("./705338.js"),
  Chunk582113 = require("./582113.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk487373 = require("./487373.js"),
  Chunk867709 = require("./867709.js"),
  Chunk157443 = require("./157443.js");

function v(e) {
  let {
    transitionState: t,
    returnRef: s,
    onClose: i
  } = e;
  a.useEffect(() => {
    (0, o.Q3)(c.z.GAME_SHOP_ANNOUNCEMENT_MODAL)
  }, []);
  let v = a.useCallback(() => {
    (0, m.Z)({
      guildId: u.ON
    }), i()
  }, [i]);
  return (0, r.jsx)(l.f6W, {
    theme: f.BR.DARK,
    children: e => (0, r.jsx)(d.Y0X, {
      transitionState: t,
      parentComponent: "SocialLayerStorefrontAnnouncementModal",
      size: d.CgR.DYNAMIC,
      className: n()(e, h.modal),
      returnRef: s,
      children: (0, r.jsxs)(d.hzk, {
        className: h.content,
        children: [(0, r.jsx)("div", {
          className: h.closeButton,
          children: (0, r.jsx)(l.olH, {})
        }), (0, r.jsx)("div", {
          className: h.artwork
        }), (0, r.jsx)(l.X6q, {
          variant: "display-md",
          color: "header-primary",
          children: x.intl.string(x.t.to0E8U)
        }), (0, r.jsx)(l.X6q, {
          variant: "display-md",
          color: "header-primary",
          children: x.intl.string(x.t.BKEkBd)
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-md/medium",
          color: "header-muted",
          children: x.intl.string(x.t.SiXpR2)
        }), (0, r.jsxs)("div", {
          className: h.features,
          children: [(0, r.jsxs)("div", {
            className: h.feature,
            children: [(0, r.jsx)("div", {
              className: h.featureIcon,
              children: (0, r.jsx)("img", {
                src: j,
                alt: ""
              })
            }), (0, r.jsxs)("div", {
              className: h.featureCopy,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: x.intl.string(x.t["5hRbeH"])
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: x.intl.string(x.t["72sDuh"])
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: h.feature,
            children: [(0, r.jsx)("div", {
              className: h.featureIcon,
              children: (0, r.jsx)("img", {
                src: p,
                alt: ""
              })
            }), (0, r.jsxs)("div", {
              className: h.featureCopy,
              children: [(0, r.jsx)(l.X6q, {
                variant: "heading-md/semibold",
                color: "header-primary",
                children: x.intl.string(x.t.MO4ASw)
              }), (0, r.jsx)(l.xvT, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: x.intl.string(x.t.o4i2Wx)
              })]
            })]
          })]
        }), (0, r.jsx)(l.zxk, {
          variant: "expressive",
          text: x.intl.string(x.t.CekBHq),
          onClick: v
        })]
      })
    })
  })
}