/** Chunk was on 384 **/
/** chunk id: 815977, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk503089 = require("./503089.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk999382 = require("./999382.js"),
  Chunk213956 = require("./213956.jsx"),
  Chunk743475 = require("./743475.js"),
  Chunk983135 = require("./983135.js"),
  Chunk190007 = require("./190007.js"),
  Chunk8426 = require("./8426.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk359191 = require("./359191.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk729311 = require("./729311.jsx"),
  Chunk850864 = require("./850864.jsx"),
  Chunk478777 = require("./478777.jsx"),
  Chunk729995 = require("./729995.jsx"),
  Chunk966301 = require("./966301.jsx"),
  Chunk707076 = require("./707076.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk344037 = require("./344037.js");

function A() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId());
  return null == module ? null : (0, Chunk54381.jsx)(L, {
    guildId: module
  })
}

function L(e) {
  let t, {
      guildId: n
    } = e,
    l = (0, s.e7)([C.Z], () => C.Z.getCurrentPage()),
    f = (0, s.e7)([C.Z], () => {
      let e = (0, y.lg)(l);
      return null != e && !C.Z.isEducationUpsellDismissed(e)
    }),
    O = (0, N.Z)(n),
    A = !O && f;
  switch (i.useEffect(() => {
      (0, g.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), l) {
    case y.PG.LANDING:
      t = O ? (0, r.jsx)(T.Z, {
        completed: true,
        guildId: n
      }) : (0, r.jsx)(w.Z, {});
      break;
    case y.PG.SAFETY_CHECK:
      t = (0, r.jsx)(h.Z, {});
      break;
    case y.PG.DEFAULT_CHANNELS:
      t = (0, r.jsx)(E.Z, {
        saveOnClose: !O
      });
      break;
    case y.PG.CUSTOMIZATION_QUESTIONS:
      t = (0, r.jsx)(P.ZP, {
        saveOnClose: !O
      });
      break;
    case y.PG.HOME_SETTINGS:
      t = (0, r.jsx)(I.Z, {
        saveOnClose: !O
      });
      break;
    case y.PG.CONNECTIONS:
      t = (0, r.jsx)(S.Z, {
        saveOnClose: !O
      });
      break;
    case y.PG.REVIEW:
      t = (0, r.jsx)(T.Z, {
        completed: O,
        guildId: n
      })
  }
  return (0, r.jsxs)("div", {
    className: a()(D.onboardingContainer, {
      [D.upsellOnTop]: A
    }),
    children: [!O && l !== y.PG.LANDING && (0, r.jsx)(k, {
      setOnboardingStep: x.$K,
      page: l,
      homeSettingsEnabled: true
    }), O && l !== y.PG.LANDING && (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.zx, {
        innerClassName: D.backButton,
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.MIN,
        onClick: () => {
          if (C.Z.hasChanges() && !C.Z.canCloseEarly()) {
            p.S.dispatch(Z.CkL.SHAKE_APP, {
              duration: 300,
              intensity: u.$x
            }), p.S.dispatch(Z.CkL.EMPHASIZE_NOTICE);
            return
          }(0, v.NB)(), (0, b.BG)(), (0, _.bj)(), (0, j.Pk)(), (0, x.$K)(y.PG.LANDING)
        },
        children: [(0, r.jsx)(m.Z, {
          className: D.arrow,
          direction: m.Z.Directions.LEFT
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "interactive-text-default",
          children: R.intl.string(R.t["13/7kX"])
        })]
      })
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}

function k(e) {
  let {
    page: t,
    setOnboardingStep: n,
    homeSettingsEnabled: i
  } = e, l = (0, s.e7)([C.Z], () => C.Z.hasErrors()), o = e => {
    if (!l) return () => n(e)
  }, c = (0, s.e7)([O.Z], () => O.Z.advancedMode);
  return (0, r.jsxs)("div", {
    className: D.progressContainer,
    children: [(0, r.jsxs)(d.P3F, {
      className: a()(D.progressBarContainer, D.clickableProgressBar),
      onClick: o(y.PG.SAFETY_CHECK),
      children: [(0, r.jsx)("div", {
        className: a()(D.progressBar, {
          [D.progressBarCurrent]: t === y.PG.SAFETY_CHECK
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: R.intl.format(R.t.Me5Mma, {
          stepNumber: 1
        })
      })]
    }), (0, r.jsxs)(d.P3F, {
      className: a()(D.progressBarContainer, D.clickableProgressBar),
      onClick: o(y.PG.DEFAULT_CHANNELS),
      children: [(0, r.jsx)("div", {
        className: a()(D.progressBar, {
          [D.progressBarCurrent]: t === y.PG.DEFAULT_CHANNELS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: c ? R.intl.formatToPlainString(R.t["8mGhOy"], {
          stepNumber: 2
        }) : R.intl.formatToPlainString(R.t.vxpuTd, {
          stepNumber: 2
        })
      })]
    }), (0, r.jsxs)(d.P3F, {
      className: a()(D.progressBarContainer, D.clickableProgressBar),
      onClick: o(y.PG.CUSTOMIZATION_QUESTIONS),
      children: [(0, r.jsx)("div", {
        className: a()(D.progressBar, {
          [D.progressBarCurrent]: t === y.PG.CUSTOMIZATION_QUESTIONS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: c ? R.intl.formatToPlainString(R.t.vb6J5g, {
          stepNumber: 3
        }) : R.intl.formatToPlainString(R.t.ZpdQqK, {
          stepNumber: 3
        })
      })]
    }), i && (0, r.jsxs)(d.P3F, {
      className: a()(D.progressBarContainer, D.clickableProgressBar),
      onClick: o(y.PG.HOME_SETTINGS),
      children: [(0, r.jsx)("div", {
        className: a()(D.progressBar, {
          [D.progressBarCurrent]: t === y.PG.HOME_SETTINGS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: R.intl.format(R.t.KVOukh, {
          stepNumber: 4
        })
      })]
    }), (0, r.jsxs)("div", {
      className: D.progressBarContainer,
      children: [(0, r.jsx)("div", {
        className: a()(D.progressBar, {
          [D.progressBarCurrent]: t === y.PG.REVIEW
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.REVIEW ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: R.intl.format(R.t.oVzkiA, {
          stepNumber: 3 + +!!i + 1
        })
      })]
    })]
  })
}