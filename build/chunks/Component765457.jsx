/** Chunk was on 80448 **/
/** chunk id: 765457, original params: i,e,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk198358 = require("./198358.jsx"),
  Chunk363157 = require("./363157.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk231338 = require("./231338.js"),
  Chunk509950 = require("./509950.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356379 = require("./356379.js");
let u = {
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

function m(i) {
  let {} = i, [e, r] = n.useState(0), s = u[e], m = n.useCallback(() => {
    if (e >= x.t.length - 1) return void(0, d.xf)();
    r(e + 1)
  }, [e]);
  return (0, t.jsx)(a.f6W, {
    theme: h.BR.DARKER,
    children: i => (0, t.jsxs)("div", {
      className: l()(E.container, i),
      "aria-label": p.intl.string(j.default["CdU/PD"]),
      children: [(0, t.jsxs)(a.MyZ, {
        activeSlide: s,
        children: [(0, t.jsx)(a.Mi4, {
          id: x.W.WELCOME,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: p.intl.string(j.default.wnuxp6)
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.MESSAGES,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.EMOJIS,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.VOICE,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.GUILDS,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.FRIENDS,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.BEST_FRIEND,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.GAMING,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.QUESTS,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "TBD"
            })
          })
        }), (0, t.jsx)(a.Mi4, {
          id: x.W.END,
          children: (0, t.jsx)(c.Z, {
            children: (0, t.jsx)(a.Text, {
              variant: "display-lg",
              color: "text-primary",
              children: "Thanks for being a gamer."
            })
          })
        })]
      }), (0, t.jsxs)("div", {
        className: l()(E.header, i),
        children: [(0, t.jsxs)("div", {
          className: E.logo,
          children: [(0, t.jsx)(a.gw7, {
            color: a.TVs.colors.BG_BRAND
          }), (0, t.jsx)(a.Text, {
            variant: "display-sm",
            color: "text-primary",
            className: E.logoText,
            children: p.intl.string(j.default["CdU/PD"])
          })]
        }), (0, t.jsx)(o.Z, {
          currentStep: e,
          totalSteps: x.t.length,
          className: E.stepIndicator
        }), (0, t.jsx)(a.P3F, {
          onClick: d.xf,
          className: E.closeButton,
          children: (0, t.jsx)(a.Uz9, {})
        })]
      }), (0, t.jsx)(a.P3F, {
        onClick: m,
        className: E.nextButton,
        children: (0, t.jsx)(a.Text, {
          variant: "display-sm",
          color: "text-primary",
          children: p.intl.string(p.t.PDTjLC)
        })
      })]
    })
  })
}