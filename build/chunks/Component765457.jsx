/** Chunk was on 80448 **/
/** chunk id: 765457, original params: t,i,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk363157 = require("./363157.jsx"),
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
  Chunk484718 = require("./484718.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk691446 = require("./691446.js");
let S = {
  0: Chunk612776.W.WELCOME,
  1: Chunk612776.W.MESSAGES,
  2: Chunk612776.W.EMOJIS,
  3: Chunk612776.W.VOICE,
  4: Chunk612776.W.GUILDS,
  5: Chunk612776.W.FRIENDS,
  6: Chunk612776.W.BEST_FRIEND,
  7: Chunk612776.W.GAMING,
  8: Chunk612776.W.QUESTS,
  9: Chunk612776.W.END
};

function M(t) {
  let {} = t, [i, r] = n.useState(0), a = S[i], M = n.useCallback(() => {
    if (i >= y.t.length - 1) return void(0, d.xf)();
    r(i + 1)
  }, [i]);
  return (0, e.jsx)(l.f6W, {
    theme: T.BR.DARKER,
    children: t => (0, e.jsxs)("div", {
      className: s()(g.container, t),
      "aria-label": Z.intl.string(E.default["CdU/PD"]),
      children: [(0, e.jsxs)(l.MyZ, {
        activeSlide: a,
        children: [(0, e.jsx)(l.Mi4, {
          id: y.W.WELCOME,
          children: (0, e.jsx)(f.Z, {})
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.MESSAGES,
          children: (0, e.jsx)(m.Z, {})
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.EMOJIS,
          children: (0, e.jsx)(o.Z, {})
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.VOICE,
          children: (0, e.jsx)(j.Z, {})
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.GUILDS,
          children: (0, e.jsx)(h.Z, {})
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.FRIENDS,
          children: (0, e.jsx)(u.Z, {
            slide: y.W.FRIENDS
          })
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.BEST_FRIEND,
          children: (0, e.jsx)(u.Z, {
            slide: y.W.BEST_FRIEND
          })
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.GAMING,
          children: (0, e.jsx)(p.Z, {})
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.QUESTS,
          children: (0, e.jsx)(v.Z, {})
        }), (0, e.jsx)(l.Mi4, {
          id: y.W.END,
          children: (0, e.jsx)(x.Z, {})
        })]
      }), (0, e.jsxs)("div", {
        className: s()(g.header, t),
        children: [(0, e.jsxs)("div", {
          className: g.logo,
          children: [(0, e.jsx)(l.gw7, {
            color: l.TVs.colors.BG_BRAND
          }), (0, e.jsx)(l.Text, {
            variant: "display-sm",
            color: "text-primary",
            className: g.logoText,
            children: Z.intl.string(E.default["CdU/PD"])
          })]
        }), (0, e.jsx)(c.Z, {
          currentStep: i,
          totalSteps: y.t.length,
          className: g.stepIndicator
        }), (0, e.jsx)(l.P3F, {
          onClick: d.xf,
          className: g.closeButton,
          children: (0, e.jsx)(l.Uz9, {})
        })]
      }), (0, e.jsx)(l.P3F, {
        onClick: M,
        className: g.nextButton,
        children: (0, e.jsx)(l.Text, {
          variant: "display-sm",
          color: "text-primary",
          children: Z.intl.string(Z.t.PDTjLC)
        })
      })]
    })
  })
}