/** Chunk was on 47841 **/
/** chunk id: 291444, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => G
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk83257 = require("./83257.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk532197 = require("./532197.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk555337 = require("./555337.js"),
  Chunk155008 = require("./155008.jsx"),
  Chunk418448 = require("./418448.js"),
  Chunk527678 = require("./527678.js"),
  Chunk923121 = require("./923121.js"),
  Chunk199940 = require("./199940.js"),
  Chunk107795 = require("./107795.js"),
  Chunk655943 = require("./655943.js"),
  Chunk287479 = require("./287479.js"),
  Chunk400812 = require("./400812.js"),
  Chunk72533 = require("./72533.js"),
  Chunk729984 = require("./729984.jsx"),
  Chunk193477 = require("./193477.jsx"),
  Chunk692453 = require("./692453.jsx"),
  Chunk307209 = require("./307209.jsx"),
  Chunk360827 = require("./360827.jsx"),
  Chunk307879 = require("./307879.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk361870 = require("./361870.js");

function G() {
  let e = (0, a.bG)([m.A], () => m.A.getGuildId());
  return null == e ? null : (0, r.jsx)(L, {
    guildId: e
  })
}

function L(e) {
  let t, {
      guildId: n
    } = e,
    l = (0, a.bG)([A.A], () => A.A.getCurrentPage()),
    m = (0, a.bG)([A.A], () => {
      let e = (0, E.ql)(l);
      return null != e && !A.A.isEducationUpsellDismissed(e)
    }),
    v = (0, N.A)(n),
    G = !v && m;
  switch (i.useEffect(() => {
      (0, f.Dr)(c.M.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), l) {
    case E.Hy.LANDING:
      t = v ? (0, r.jsx)(I.A, {
        completed: true,
        guildId: n
      }) : (0, r.jsx)(P.A, {});
      break;
    case E.Hy.SAFETY_CHECK:
      t = (0, r.jsx)(p.A, {});
      break;
    case E.Hy.DEFAULT_CHANNELS:
      t = (0, r.jsx)(_.A, {
        saveOnClose: !v
      });
      break;
    case E.Hy.CUSTOMIZATION_QUESTIONS:
      t = (0, r.jsx)(C.Ay, {
        saveOnClose: !v
      });
      break;
    case E.Hy.HOME_SETTINGS:
      t = (0, r.jsx)(S.A, {
        saveOnClose: !v
      });
      break;
    case E.Hy.CONNECTIONS:
      t = (0, r.jsx)(T.A, {
        saveOnClose: !v
      });
      break;
    case E.Hy.REVIEW:
      t = (0, r.jsx)(I.A, {
        completed: v,
        guildId: n
      })
  }
  return (0, r.jsxs)("div", {
    className: s()(D.Jp, {
      [D.Q3]: G
    }),
    children: [!v && l !== E.Hy.LANDING && (0, r.jsx)(k, {
      setOnboardingStep: h.e_,
      page: l,
      homeSettingsEnabled: true
    }), v && l !== E.Hy.LANDING && (0, r.jsx)("div", {
      children: (0, r.jsxs)(o.$n, {
        innerClassName: D.Gv,
        look: o.$n.Looks.BLANK,
        size: o.$n.Sizes.MIN,
        onClick: () => {
          if (A.A.hasChanges() && !A.A.canCloseEarly()) {
            b._.dispatch(w.jej.SHAKE_APP, {
              duration: 300,
              intensity: u.n3
            }), b._.dispatch(w.jej.EMPHASIZE_NOTICE);
            return
          }(0, y.P3)(), (0, x.nx)(), (0, O.sk)(), (0, j.p2)(), (0, h.e_)(E.Hy.LANDING)
        },
        children: [(0, r.jsx)(g.A, {
          className: D.UE,
          direction: g.A.Directions.LEFT
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
  } = e, l = (0, a.bG)([A.A], () => A.A.hasErrors()), c = e => {
    if (!l) return () => n(e)
  }, o = (0, a.bG)([v.A], () => v.A.advancedMode);
  return (0, r.jsxs)("div", {
    className: D.L$,
    children: [(0, r.jsxs)(d.DUT, {
      className: s()(D.G9, D.zp),
      onClick: c(E.Hy.SAFETY_CHECK),
      children: [(0, r.jsx)("div", {
        className: s()(D.hr, {
          [D.Ou]: t === E.Hy.SAFETY_CHECK
        })
      }), (0, r.jsx)(d.Text, {
        color: t === E.Hy.SAFETY_CHECK ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: R.intl.format(R.t.Me5Mma, {
          stepNumber: 1
        })
      })]
    }), (0, r.jsxs)(d.DUT, {
      className: s()(D.G9, D.zp),
      onClick: c(E.Hy.DEFAULT_CHANNELS),
      children: [(0, r.jsx)("div", {
        className: s()(D.hr, {
          [D.Ou]: t === E.Hy.DEFAULT_CHANNELS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === E.Hy.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: o ? R.intl.formatToPlainString(R.t["8mGhOy"], {
          stepNumber: 2
        }) : R.intl.formatToPlainString(R.t.vxpuTd, {
          stepNumber: 2
        })
      })]
    }), (0, r.jsxs)(d.DUT, {
      className: s()(D.G9, D.zp),
      onClick: c(E.Hy.CUSTOMIZATION_QUESTIONS),
      children: [(0, r.jsx)("div", {
        className: s()(D.hr, {
          [D.Ou]: t === E.Hy.CUSTOMIZATION_QUESTIONS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === E.Hy.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: o ? R.intl.formatToPlainString(R.t.vb6J5g, {
          stepNumber: 3
        }) : R.intl.formatToPlainString(R.t.ZpdQqK, {
          stepNumber: 3
        })
      })]
    }), i && (0, r.jsxs)(d.DUT, {
      className: s()(D.G9, D.zp),
      onClick: c(E.Hy.HOME_SETTINGS),
      children: [(0, r.jsx)("div", {
        className: s()(D.hr, {
          [D.Ou]: t === E.Hy.HOME_SETTINGS
        })
      }), (0, r.jsx)(d.Text, {
        color: t === E.Hy.HOME_SETTINGS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: R.intl.format(R.t.KVOukh, {
          stepNumber: 4
        })
      })]
    }), (0, r.jsxs)("div", {
      className: D.G9,
      children: [(0, r.jsx)("div", {
        className: s()(D.hr, {
          [D.Ou]: t === E.Hy.REVIEW
        })
      }), (0, r.jsx)(d.Text, {
        color: t === E.Hy.REVIEW ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: R.intl.format(R.t.oVzkiA, {
          stepNumber: 3 + +!!i + 1
        })
      })]
    })]
  })
}