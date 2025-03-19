/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => w
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(704215),
  c = n(481060),
  A = n(605236),
  d = n(768762),
  u = n(999382),
  g = n(743475),
  f = n(983135),
  m = n(570961),
  p = n(208665),
  h = n(359191),
  C = n(84658),
  b = n(142961),
  v = n(729311),
  x = n(850864),
  N = n(729995),
  j = n(966301),
  E = n(707076),
  I = n(213956),
  O = n(388032),
  y = n(992994);

function w() {
  let e = (0, l.e7)([u.Z], () => u.Z.getGuildId());
  return null == e ? null : (0, r.jsx)(P, {
    guildId: e
  })
}

function P(e) {
  let t, {
      guildId: n
    } = e,
    s = (0, l.e7)([h.Z], () => h.Z.getCurrentPage()),
    u = (0, l.e7)([h.Z], () => {
      let e = (0, C.lg)(s);
      return null != e && !h.Z.isEducationUpsellDismissed(e)
    }),
    p = (0, b.Z)(n),
    w = !p && u;
  switch (i.useEffect(() => {
      (0, A.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), s) {
    case C.PG.LANDING:
      t = p ? (0, r.jsx)(N.Z, {
        completed: !0,
        guildId: n
      }) : (0, r.jsx)(E.Z, {});
      break;
    case C.PG.SAFETY_CHECK:
      t = (0, r.jsx)(I.Z, {});
      break;
    case C.PG.DEFAULT_CHANNELS:
      t = (0, r.jsx)(v.Z, {
        saveOnClose: !p
      });
      break;
    case C.PG.CUSTOMIZATION_QUESTIONS:
      t = (0, r.jsx)(j.ZP, {
        saveOnClose: !p
      });
      break;
    case C.PG.HOME_SETTINGS:
      t = (0, r.jsx)(x.Z, {
        saveOnClose: !p
      });
      break;
    case C.PG.REVIEW:
      t = (0, r.jsx)(N.Z, {
        completed: p,
        guildId: n
      })
  }
  return (0, r.jsxs)("div", {
    className: a()(y.onboardingContainer, {
      [y.upsellOnTop]: w
    }),
    children: [!p && s !== C.PG.LANDING && (0, r.jsx)(B, {
      setOnboardingStep: f.$K,
      page: s,
      homeSettingsEnabled: !0
    }), p && s !== C.PG.LANDING && (0, r.jsx)("div", {
      children: (0, r.jsxs)(c.zxk, {
        innerClassName: y.backButton,
        look: c.zxk.Looks.BLANK,
        size: c.zxk.Sizes.MIN,
        onClick: () => {
          (0, m.NB)(), (0, g.BG)(), (0, f.$K)(C.PG.LANDING)
        },
        children: [(0, r.jsx)(d.Z, {
          className: y.arrow,
          direction: d.Z.Directions.LEFT
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: O.NW.string(O.t["13/7kZ"])
        })]
      })
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}

function B(e) {
  let {
    page: t,
    setOnboardingStep: n,
    homeSettingsEnabled: i
  } = e, s = (0, l.e7)([h.Z], () => h.Z.hasErrors()), o = e => {
    if (!s) return () => n(e)
  }, A = (0, l.e7)([p.Z], () => p.Z.advancedMode);
  return (0, r.jsxs)("div", {
    className: y.progressContainer,
    children: [(0, r.jsxs)(c.P3F, {
      className: a()(y.progressBarContainer, y.clickableProgressBar),
      onClick: o(C.PG.SAFETY_CHECK),
      children: [(0, r.jsx)("div", {
        className: a()(y.progressBar, {
          [y.progressBarCurrent]: t === C.PG.SAFETY_CHECK
        })
      }), (0, r.jsx)(c.Text, {
        color: t === C.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: O.NW.format(O.t.Me5MmZ, {
          stepNumber: 1
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: a()(y.progressBarContainer, y.clickableProgressBar),
      onClick: o(C.PG.DEFAULT_CHANNELS),
      children: [(0, r.jsx)("div", {
        className: a()(y.progressBar, {
          [y.progressBarCurrent]: t === C.PG.DEFAULT_CHANNELS
        })
      }), (0, r.jsx)(c.Text, {
        color: t === C.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: A ? O.NW.formatToPlainString(O.t["8mGhOz"], {
          stepNumber: 2
        }) : O.NW.formatToPlainString(O.t.vxpuTU, {
          stepNumber: 2
        })
      })]
    }), (0, r.jsxs)(c.P3F, {
      className: a()(y.progressBarContainer, y.clickableProgressBar),
      onClick: o(C.PG.CUSTOMIZATION_QUESTIONS),
      children: [(0, r.jsx)("div", {
        className: a()(y.progressBar, {
          [y.progressBarCurrent]: t === C.PG.CUSTOMIZATION_QUESTIONS
        })
      }), (0, r.jsx)(c.Text, {
        color: t === C.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: A ? O.NW.formatToPlainString(O.t.vb6J5u, {
          stepNumber: 3
        }) : O.NW.formatToPlainString(O.t.ZpdQqK, {
          stepNumber: 3
        })
      })]
    }), i && (0, r.jsxs)(c.P3F, {
      className: a()(y.progressBarContainer, y.clickableProgressBar),
      onClick: o(C.PG.HOME_SETTINGS),
      children: [(0, r.jsx)("div", {
        className: a()(y.progressBar, {
          [y.progressBarCurrent]: t === C.PG.HOME_SETTINGS
        })
      }), (0, r.jsx)(c.Text, {
        color: t === C.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: O.NW.format(O.t.KVOukp, {
          stepNumber: 4
        })
      })]
    }), (0, r.jsxs)("div", {
      className: y.progressBarContainer,
      children: [(0, r.jsx)("div", {
        className: a()(y.progressBar, {
          [y.progressBarCurrent]: t === C.PG.REVIEW
        })
      }), (0, r.jsx)(c.Text, {
        color: t === C.PG.REVIEW ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: O.NW.format(O.t.oVzkiI, {
          stepNumber: 3 + +!!i + 1
        })
      })]
    })]
  })
}