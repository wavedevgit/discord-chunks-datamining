/** Chunk was on 49236 **/
/** chunk id: 815977, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk8426 = require("./8426.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk359191 = require("./359191.js"),
  Chunk84658 = require("./84658.js"),
  Chunk142961 = require("./142961.js"),
  Chunk729311 = require("./729311.jsx"),
  Chunk850864 = require("./850864.jsx"),
  Chunk729995 = require("./729995.jsx"),
  Chunk966301 = require("./966301.jsx"),
  Chunk707076 = require("./707076.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk344037 = require("./344037.js");

function D() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId());
  return null == module ? null : (0, Chunk951288.jsx)(Z, {
    guildId: module
  })
}

function Z(e) {
  let t, {
      guildId: n
    } = e,
    l = (0, a.e7)([O.Z], () => O.Z.getCurrentPage()),
    f = (0, a.e7)([O.Z], () => {
      let e = (0, y.lg)(l);
      return null != e && !O.Z.isEducationUpsellDismissed(e)
    }),
    _ = (0, C.Z)(n),
    D = !_ && f;
  switch (i.useEffect(() => {
      (0, m.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), l) {
    case y.PG.LANDING:
      t = _ ? (0, r.jsx)(I.Z, {
        completed: true,
        guildId: n
      }) : (0, r.jsx)(T.Z, {});
      break;
    case y.PG.SAFETY_CHECK:
      t = (0, r.jsx)(h.Z, {});
      break;
    case y.PG.DEFAULT_CHANNELS:
      t = (0, r.jsx)(N.Z, {
        saveOnClose: !_
      });
      break;
    case y.PG.CUSTOMIZATION_QUESTIONS:
      t = (0, r.jsx)(S.ZP, {
        saveOnClose: !_
      });
      break;
    case y.PG.HOME_SETTINGS:
      t = (0, r.jsx)(E.Z, {
        saveOnClose: !_
      });
      break;
    case y.PG.REVIEW:
      t = (0, r.jsx)(I.Z, {
        completed: _,
        guildId: n
      })
  }
  return (0, r.jsxs)("div", {
    className: s()(R.onboardingContainer, {
      [R.upsellOnTop]: D
    }),
    children: [!_ && l !== y.PG.LANDING && (0, r.jsx)(A, {
      setOnboardingStep: b.$K,
      page: l,
      homeSettingsEnabled: true
    }), _ && l !== y.PG.LANDING && (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.zx, {
        innerClassName: R.backButton,
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.MIN,
        onClick: () => {
          if (O.Z.hasChanges() && !O.Z.canCloseEarly()) {
            p.S.dispatch(P.CkL.SHAKE_APP, {
              duration: 300,
              intensity: u.$x
            }), p.S.dispatch(P.CkL.EMPHASIZE_NOTICE);
            return
          }(0, v.NB)(), (0, x.BG)(), (0, j.bj)(), (0, b.$K)(y.PG.LANDING)
        },
        children: [(0, r.jsx)(g.Z, {
          className: R.arrow,
          direction: g.Z.Directions.LEFT
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: w.intl.string(w.t["13/7kZ"])
        })]
      })
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}

function A(e) {
  let {
    page: t,
    setOnboardingStep: n,
    homeSettingsEnabled: i
  } = e, l = (0, a.e7)([O.Z], () => O.Z.hasErrors()), o = e => {
    if (!l) return () => n(e)
  }, c = (0, a.e7)([_.Z], () => _.Z.advancedMode);
  return (0, r.jsxs)("div", {
    className: R.progressContainer,
    children: [(0, r.jsxs)(d.P3F, {
      className: s()(R.progressBarContainer, R.clickableProgressBar),
      onClick: o(y.PG.SAFETY_CHECK),
      children: [(0, r.jsx)("div", {
        className: s()(R.progressBar, {
          [R.progressBarCurrent]: t === y.PG.SAFETY_CHECK
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: w.intl.format(w.t.Me5MmZ, {
          stepNumber: 1
        })
      })]
    }), (0, r.jsxs)(d.P3F, {
      className: s()(R.progressBarContainer, R.clickableProgressBar),
      onClick: o(y.PG.DEFAULT_CHANNELS),
      children: [(0, r.jsx)("div", {
        className: s()(R.progressBar, {
          [R.progressBarCurrent]: t === y.PG.DEFAULT_CHANNELS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: c ? w.intl.formatToPlainString(w.t["8mGhOz"], {
          stepNumber: 2
        }) : w.intl.formatToPlainString(w.t.vxpuTU, {
          stepNumber: 2
        })
      })]
    }), (0, r.jsxs)(d.P3F, {
      className: s()(R.progressBarContainer, R.clickableProgressBar),
      onClick: o(y.PG.CUSTOMIZATION_QUESTIONS),
      children: [(0, r.jsx)("div", {
        className: s()(R.progressBar, {
          [R.progressBarCurrent]: t === y.PG.CUSTOMIZATION_QUESTIONS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: c ? w.intl.formatToPlainString(w.t.vb6J5u, {
          stepNumber: 3
        }) : w.intl.formatToPlainString(w.t.ZpdQqK, {
          stepNumber: 3
        })
      })]
    }), i && (0, r.jsxs)(d.P3F, {
      className: s()(R.progressBarContainer, R.clickableProgressBar),
      onClick: o(y.PG.HOME_SETTINGS),
      children: [(0, r.jsx)("div", {
        className: s()(R.progressBar, {
          [R.progressBarCurrent]: t === y.PG.HOME_SETTINGS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: w.intl.format(w.t.KVOukp, {
          stepNumber: 4
        })
      })]
    }), (0, r.jsxs)("div", {
      className: R.progressBarContainer,
      children: [(0, r.jsx)("div", {
        className: s()(R.progressBar, {
          [R.progressBarCurrent]: t === y.PG.REVIEW
        })
      }), (0, r.jsx)(d.Text, {
        color: t === y.PG.REVIEW ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: w.intl.format(w.t.oVzkiI, {
          stepNumber: 3 + +!!i + 1
        })
      })]
    })]
  })
}