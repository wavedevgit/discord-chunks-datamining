/** Chunk was on 80448 **/
/** chunk id: 765457, original params: i,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk2835 = require("./2835.jsx"),
  Chunk410853 = require("./410853.jsx"),
  Chunk425196 = require("./425196.jsx"),
  Chunk860277 = require("./860277.jsx"),
  Chunk118045 = require("./118045.jsx"),
  Chunk221558 = require("./221558.jsx"),
  Chunk360469 = require("./360469.jsx"),
  Chunk741549 = require("./741549.jsx"),
  Chunk271268 = require("./271268.jsx"),
  Chunk626698 = require("./626698.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk231338 = require("./231338.js"),
  Chunk552788 = require("./552788.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356379 = require("./356379.js");

function g(i) {
  let {} = i, [t, r] = n.useState(f.ij.WELCOME), a = f.bq[t], g = n.useCallback(() => {
    if (t >= f.ij.END) return void(0, d.xf)();
    r(t + 1)
  }, [t]);
  return (0, e.jsx)(s.f6W, {
    theme: E.BR.DARKER,
    children: i => (0, e.jsxs)("div", {
      className: l()(Z.container, i),
      "aria-label": S.intl.string(T.default["CdU/PF"]),
      children: [(0, e.jsxs)(s.MyZ, {
        activeSlide: a,
        children: [(0, e.jsx)(s.Mi4, {
          id: f.yD.WELCOME,
          children: (0, e.jsx)(y.Z, {})
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.MESSAGES,
          children: (0, e.jsx)(j.Z, {})
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.EMOJIS,
          children: (0, e.jsx)(o.Z, {})
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.VOICE,
          children: (0, e.jsx)(v.Z, {})
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.GUILDS,
          children: (0, e.jsx)(m.Z, {})
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.FRIENDS,
          children: (0, e.jsx)(u.Z, {
            step: t
          })
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.GAMING,
          children: (0, e.jsx)(p.Z, {})
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.QUESTS,
          children: (0, e.jsx)(h.Z, {})
        }), (0, e.jsx)(s.Mi4, {
          id: f.yD.END,
          children: (0, e.jsx)(x.Z, {})
        })]
      }), (0, e.jsxs)("div", {
        className: l()(Z.header, i),
        children: [(0, e.jsxs)("div", {
          className: Z.logo,
          children: [(0, e.jsx)(s.gw7, {
            color: s.TVs.colors.BG_BRAND
          }), (0, e.jsx)(s.Text, {
            variant: "display-sm",
            color: "text-primary",
            className: Z.logoText,
            children: S.intl.string(T.default["CdU/PF"])
          })]
        }), (0, e.jsx)(c.Z, {
          activeSlide: a,
          totalSlides: Object.keys(f.yD).length,
          className: Z.stepIndicator
        }), (0, e.jsx)(s.P3F, {
          onClick: d.xf,
          className: Z.closeButton,
          children: (0, e.jsx)(s.Uz9, {})
        })]
      }), (0, e.jsx)(s.P3F, {
        onClick: g,
        className: Z.nextButton,
        children: (0, e.jsx)(s.Text, {
          variant: "display-sm",
          color: "text-primary",
          children: S.intl.string(S.t.PDTjLN)
        })
      })]
    })
  })
}