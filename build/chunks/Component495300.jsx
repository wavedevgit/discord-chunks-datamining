/** Chunk was on 6049 **/
/** chunk id: 495300, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk266454 = require("./266454.js"),
  Chunk768762 = require("./768762.jsx"),
  Chunk999382 = require("./999382.js"),
  Chunk743475 = require("./743475.js"),
  Chunk983135 = require("./983135.js"),
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
  Chunk213956 = require("./213956.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk885541 = require("./885541.js");

function T() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId());
  return null == module ? null : (0, Chunk951288.jsx)(P, {
    guildId: module
  })
}

function P(e) {
  let t, {
      guildId: n
    } = e,
    l = (0, s.e7)([x.Z], () => x.Z.getCurrentPage()),
    g = (0, s.e7)([x.Z], () => {
      let e = (0, j.lg)(l);
      return null != e && !x.Z.isEducationUpsellDismissed(e)
    }),
    b = (0, v.Z)(n),
    T = !b && g;
  switch (i.useEffect(() => {
      (0, u.Q3)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), l) {
    case j.PG.LANDING:
      t = b ? (0, r.jsx)(y.Z, {
        completed: true,
        guildId: n
      }) : (0, r.jsx)(N.Z, {});
      break;
    case j.PG.SAFETY_CHECK:
      t = (0, r.jsx)(E.Z, {});
      break;
    case j.PG.DEFAULT_CHANNELS:
      t = (0, r.jsx)(_.Z, {
        saveOnClose: !b
      });
      break;
    case j.PG.CUSTOMIZATION_QUESTIONS:
      t = (0, r.jsx)(C.ZP, {
        saveOnClose: !b
      });
      break;
    case j.PG.HOME_SETTINGS:
      t = (0, r.jsx)(O.Z, {
        saveOnClose: !b
      });
      break;
    case j.PG.REVIEW:
      t = (0, r.jsx)(y.Z, {
        completed: b,
        guildId: n
      })
  }
  return (0, r.jsxs)("div", {
    className: a()(S.onboardingContainer, {
      [S.upsellOnTop]: T
    }),
    children: [!b && l !== j.PG.LANDING && (0, r.jsx)(w, {
      setOnboardingStep: h.$K,
      page: l,
      homeSettingsEnabled: true
    }), b && l !== j.PG.LANDING && (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.zx, {
        innerClassName: S.backButton,
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.MIN,
        onClick: () => {
          (0, f.NB)(), (0, p.BG)(), (0, h.$K)(j.PG.LANDING)
        },
        children: [(0, r.jsx)(m.Z, {
          className: S.arrow,
          direction: m.Z.Directions.LEFT
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: I.intl.string(I.t["13/7kZ"])
        })]
      })
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}

function w(e) {
  let {
    page: t,
    setOnboardingStep: n,
    homeSettingsEnabled: i
  } = e, l = (0, s.e7)([x.Z], () => x.Z.hasErrors()), o = e => {
    if (!l) return () => n(e)
  }, c = (0, s.e7)([b.Z], () => b.Z.advancedMode);
  return (0, r.jsxs)("div", {
    className: S.progressContainer,
    children: [(0, r.jsxs)(d.P3F, {
      className: a()(S.progressBarContainer, S.clickableProgressBar),
      onClick: o(j.PG.SAFETY_CHECK),
      children: [(0, r.jsx)("div", {
        className: a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.SAFETY_CHECK
        })
      }), (0, r.jsx)(d.Text, {
        color: t === j.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: I.intl.format(I.t.Me5MmZ, {
          stepNumber: 1
        })
      })]
    }), (0, r.jsxs)(d.P3F, {
      className: a()(S.progressBarContainer, S.clickableProgressBar),
      onClick: o(j.PG.DEFAULT_CHANNELS),
      children: [(0, r.jsx)("div", {
        className: a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.DEFAULT_CHANNELS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === j.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: c ? I.intl.formatToPlainString(I.t["8mGhOz"], {
          stepNumber: 2
        }) : I.intl.formatToPlainString(I.t.vxpuTU, {
          stepNumber: 2
        })
      })]
    }), (0, r.jsxs)(d.P3F, {
      className: a()(S.progressBarContainer, S.clickableProgressBar),
      onClick: o(j.PG.CUSTOMIZATION_QUESTIONS),
      children: [(0, r.jsx)("div", {
        className: a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.CUSTOMIZATION_QUESTIONS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === j.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: c ? I.intl.formatToPlainString(I.t.vb6J5u, {
          stepNumber: 3
        }) : I.intl.formatToPlainString(I.t.ZpdQqK, {
          stepNumber: 3
        })
      })]
    }), i && (0, r.jsxs)(d.P3F, {
      className: a()(S.progressBarContainer, S.clickableProgressBar),
      onClick: o(j.PG.HOME_SETTINGS),
      children: [(0, r.jsx)("div", {
        className: a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.HOME_SETTINGS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === j.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: I.intl.format(I.t.KVOukp, {
          stepNumber: 4
        })
      })]
    }), (0, r.jsxs)("div", {
      className: S.progressBarContainer,
      children: [(0, r.jsx)("div", {
        className: a()(S.progressBar, {
          [S.progressBarCurrent]: t === j.PG.REVIEW
        })
      }), (0, r.jsx)(d.Text, {
        color: t === j.PG.REVIEW ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: I.intl.format(I.t.oVzkiI, {
          stepNumber: 3 + +!!i + 1
        })
      })]
    })]
  })
}