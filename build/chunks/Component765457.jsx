/** Chunk was on 80448 **/
/** chunk id: 765457, original params: e,i,t (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk363157 = require("./363157.jsx"),
  Chunk860277 = require("./860277.jsx"),
  Chunk221558 = require("./221558.jsx"),
  Chunk360469 = require("./360469.jsx"),
  Chunk271268 = require("./271268.jsx"),
  Chunk626698 = require("./626698.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk231338 = require("./231338.js"),
  Chunk509950 = require("./509950.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356379 = require("./356379.js");
let f = {
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

function E(e) {
  let {} = e, [i, t] = n.useState(0), s = f[i], E = n.useCallback(() => {
    if (i >= j.t.length - 1) return void(0, d.xf)();
    t(i + 1)
  }, [i]);
  return (0, r.jsx)(a.f6W, {
    theme: v.BR.DARKER,
    children: e => (0, r.jsxs)("div", {
      className: l()(S.container, e),
      "aria-label": y.intl.string(g.default["CdU/PD"]),
      children: [(0, r.jsxs)(a.MyZ, {
        activeSlide: s,
        children: [(0, r.jsx)(a.Mi4, {
          id: j.W.WELCOME,
          children: (0, r.jsx)(h.Z, {})
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.MESSAGES,
          children: (0, r.jsx)(m.Z, {})
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.EMOJIS,
          children: (0, r.jsx)(c.Z, {
            children: (0, r.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.VOICE,
          children: (0, r.jsx)(p.Z, {})
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.GUILDS,
          children: (0, r.jsx)(u.Z, {})
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.FRIENDS,
          children: (0, r.jsx)(x.Z, {
            slide: j.W.FRIENDS
          })
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.BEST_FRIEND,
          children: (0, r.jsx)(x.Z, {
            slide: j.W.BEST_FRIEND
          })
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.GAMING,
          children: (0, r.jsx)(c.Z, {
            children: (0, r.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.QUESTS,
          children: (0, r.jsx)(c.Z, {
            children: (0, r.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, r.jsx)(a.Mi4, {
          id: j.W.END,
          children: (0, r.jsx)(c.Z, {
            children: (0, r.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "Thanks for being a gamer."
            })
          })
        })]
      }), (0, r.jsxs)("div", {
        className: l()(S.header, e),
        children: [(0, r.jsxs)("div", {
          className: S.logo,
          children: [(0, r.jsx)(a.gw7, {
            color: a.TVs.colors.BG_BRAND
          }), (0, r.jsx)(a.Text, {
            variant: "display-sm",
            color: "text-primary",
            className: S.logoText,
            children: y.intl.string(g.default["CdU/PD"])
          })]
        }), (0, r.jsx)(o.Z, {
          currentStep: i,
          totalSteps: j.t.length,
          className: S.stepIndicator
        }), (0, r.jsx)(a.P3F, {
          onClick: d.xf,
          className: S.closeButton,
          children: (0, r.jsx)(a.Uz9, {})
        })]
      }), (0, r.jsx)(a.P3F, {
        onClick: E,
        className: S.nextButton,
        children: (0, r.jsx)(a.Text, {
          variant: "display-sm",
          color: "text-primary",
          children: y.intl.string(y.t.PDTjLC)
        })
      })]
    })
  })
}