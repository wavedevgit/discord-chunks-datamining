/** Chunk was on 80448 **/
/** chunk id: 765457, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk140939 = require("./140939.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk691446 = require("./691446.js");

function E(e) {
  let {} = e, [t, n] = r.useState(g.ij.WELCOME), l = g.bq[t], E = r.useCallback(() => {
    if (t >= g.ij.END_SUMMARY) return void(0, o.xf)();
    n(t + 1)
  }, [t]);
  return (0, i.jsx)(a.f6W, {
    theme: j.BR.DARKER,
    children: e => (0, i.jsxs)("div", {
      className: s()(M.container, e),
      "aria-label": Z.intl.string(_.default["CdU/PF"]),
      children: [(0, i.jsxs)(a.MyZ, {
        activeSlide: l,
        children: [(0, i.jsx)(a.Mi4, {
          id: g.yD.WELCOME,
          children: (0, i.jsx)(v.Z, {})
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.MESSAGES,
          children: (0, i.jsx)(h.Z, {})
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.EMOJIS,
          children: (0, i.jsx)(u.Z, {})
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.VOICE,
          children: (0, i.jsx)(f.Z, {})
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.GUILDS,
          children: (0, i.jsx)(x.Z, {})
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.FRIENDS,
          children: (0, i.jsx)(m.Z, {
            step: t
          })
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.GAMING,
          children: (0, i.jsx)(p.Z, {})
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.QUESTS,
          children: (0, i.jsx)(y.Z, {})
        }), (0, i.jsx)(a.Mi4, {
          id: g.yD.END,
          children: (0, i.jsx)(d.Z, {
            step: t
          })
        })]
      }), (0, i.jsxs)("div", {
        className: s()(M.header, e),
        children: [(0, i.jsxs)("div", {
          className: M.logo,
          children: [(0, i.jsx)(a.gw7, {
            color: a.TVs.colors.BG_BRAND
          }), (0, i.jsx)(a.Text, {
            variant: "display-sm",
            color: "text-primary",
            className: M.logoText,
            children: Z.intl.string(_.default["CdU/PF"])
          })]
        }), (0, i.jsx)(c.Z, {
          activeSlide: l,
          totalSlides: Object.keys(g.yD).length,
          className: M.stepIndicator
        }), (0, i.jsx)(a.P3F, {
          onClick: o.xf,
          className: M.closeButton,
          children: (0, i.jsx)(a.Uz9, {})
        })]
      }), (0, i.jsx)(a.P3F, {
        onClick: E,
        className: M.nextButton,
        children: (0, i.jsx)(a.Text, {
          variant: "display-sm",
          color: "text-primary",
          children: Z.intl.string(Z.t.PDTjLN)
        })
      })]
    })
  })
}