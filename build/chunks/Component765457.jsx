/** Chunk was on 80448 **/
/** chunk id: 765457, original params: i,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk506945 = require("./506945.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk691446 = require("./691446.js");

function g(i) {
  let {} = i, [t, r] = e.useState(f.ij.WELCOME), a = f.bq[t], g = e.useCallback(() => {
    if (t >= f.ij.END) return void(0, d.xf)();
    r(t + 1)
  }, [t]);
  return (0, n.jsx)(l.f6W, {
    theme: E.BR.DARKER,
    children: i => (0, n.jsxs)("div", {
      className: s()(Z.container, i),
      "aria-label": S.intl.string(T.default["CdU/PF"]),
      children: [(0, n.jsxs)(l.MyZ, {
        activeSlide: a,
        children: [(0, n.jsx)(l.Mi4, {
          id: f.yD.WELCOME,
          children: (0, n.jsx)(y.Z, {})
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.MESSAGES,
          children: (0, n.jsx)(m.Z, {})
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.EMOJIS,
          children: (0, n.jsx)(o.Z, {})
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.VOICE,
          children: (0, n.jsx)(h.Z, {})
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.GUILDS,
          children: (0, n.jsx)(j.Z, {})
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.FRIENDS,
          children: (0, n.jsx)(u.Z, {
            step: t
          })
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.GAMING,
          children: (0, n.jsx)(p.Z, {})
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.QUESTS,
          children: (0, n.jsx)(v.Z, {})
        }), (0, n.jsx)(l.Mi4, {
          id: f.yD.END,
          children: (0, n.jsx)(x.Z, {})
        })]
      }), (0, n.jsxs)("div", {
        className: s()(Z.header, i),
        children: [(0, n.jsxs)("div", {
          className: Z.logo,
          children: [(0, n.jsx)(l.gw7, {
            color: l.TVs.colors.BG_BRAND
          }), (0, n.jsx)(l.Text, {
            variant: "display-sm",
            color: "text-primary",
            className: Z.logoText,
            children: S.intl.string(T.default["CdU/PF"])
          })]
        }), (0, n.jsx)(c.Z, {
          activeSlide: a,
          totalSlides: Object.keys(f.yD).length,
          className: Z.stepIndicator
        }), (0, n.jsx)(l.P3F, {
          onClick: d.xf,
          className: Z.closeButton,
          children: (0, n.jsx)(l.Uz9, {})
        })]
      }), (0, n.jsx)(l.P3F, {
        onClick: g,
        className: Z.nextButton,
        children: (0, n.jsx)(l.Text, {
          variant: "display-sm",
          color: "text-primary",
          children: S.intl.string(S.t.PDTjLN)
        })
      })]
    })
  })
}