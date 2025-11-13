/** Chunk was on 80448 **/
/** chunk id: 765457, original params: t,r,e (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => D
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk892694 = require("./892694.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk691446 = require("./691446.js");

function D(t) {
  let {} = t, [r, e] = n.useState(v.ij.WELCOME), l = v.bq[r], D = n.useCallback(() => {
    if (r >= v.ij.END_SUMMARY) return void(0, d.xf)();
    e(r + 1)
  }, [r]);
  return (0, i.jsx)(s.f6W, {
    theme: j.BR.DARKER,
    children: t => (0, i.jsxs)("div", {
      className: a()(Z.container, t),
      "aria-label": T.intl.string(S.default["CdU/PF"]),
      children: [(0, i.jsxs)(s.MyZ, {
        activeSlide: l,
        children: [(0, i.jsx)(s.Mi4, {
          id: v.yD.WELCOME,
          children: (0, i.jsx)(E.Z, {})
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.MESSAGES,
          children: (0, i.jsx)(y.Z, {})
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.EMOJIS,
          children: (0, i.jsx)(o.Z, {})
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.VOICE,
          children: (0, i.jsx)(m.Z, {})
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.GUILDS,
          children: (0, i.jsx)(h.Z, {})
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.FRIENDS,
          children: (0, i.jsx)(x.Z, {
            step: r
          })
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.GAMING,
          children: (0, i.jsx)(p.Z, {})
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.QUESTS,
          children: (0, i.jsx)(f.Z, {})
        }), (0, i.jsx)(s.Mi4, {
          id: v.yD.END,
          children: (0, i.jsx)(u.Z, {
            step: r
          })
        })]
      }), (0, i.jsxs)("div", {
        className: a()(Z.header, t),
        children: [(0, i.jsxs)("div", {
          className: Z.logo,
          children: [(0, i.jsx)(s.gw7, {
            color: s.TVs.colors.BG_BRAND
          }), (0, i.jsx)(s.Text, {
            variant: "display-sm",
            color: "text-primary",
            className: Z.logoText,
            children: T.intl.string(S.default["CdU/PF"])
          })]
        }), (0, i.jsx)(c.Z, {
          activeSlide: l,
          totalSlides: Object.keys(v.yD).length,
          className: Z.stepIndicator
        }), (0, i.jsx)(s.P3F, {
          onClick: d.xf,
          className: Z.closeButton,
          children: (0, i.jsx)(s.Uz9, {})
        })]
      }), (0, i.jsx)(s.P3F, {
        onClick: D,
        className: Z.nextButton,
        children: (0, i.jsx)(s.Text, {
          variant: "display-sm",
          color: "text-primary",
          children: T.intl.string(T.t.PDTjLN)
        })
      })]
    })
  })
}