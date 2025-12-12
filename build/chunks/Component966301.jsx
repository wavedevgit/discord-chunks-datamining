/** Chunk was on 384 **/
/** chunk id: 966301, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => E,
  Zm: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk999382 = require("./999382.js"),
  Chunk889369 = require("./889369.js"),
  Chunk983135 = require("./983135.js"),
  Chunk190007 = require("./190007.js"),
  Chunk926958 = require("./926958.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk38703 = require("./38703.jsx"),
  Chunk716130 = require("./716130.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk314160 = require("./314160.js");

function N(e) {
  let {
    guildId: t,
    prompts: n
  } = e, s = (0, l.e7)([g.Z], () => g.Z.editedDefaultChannelIds), [c, d] = (0, u.dF)(t, n, [...s]), m = c.length, p = c.length + d.length, f = m / p * 100, h = Math.max(Math.ceil(85 * p / 100) - m, 0), [x, b] = i.useState(false), j = x ? a.CJ0 : a.u04;
  return (0, r.jsxs)("div", {
    className: y.channelCoverage,
    children: [(0, r.jsxs)(a.P3F, {
      className: y.coverageHeader,
      onClick: () => b(!x),
      children: [(0, r.jsxs)("div", {
        className: y.warningTextContainer,
        children: [f <= 85 && (0, r.jsx)(a.Mgn, {
          size: "xs",
          color: "currentColor",
          className: y.warning
        }), (0, r.jsx)(a.Text, {
          className: y.coverageTitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: C.intl.format(C.t.nMVKCX, {
            numChannelsMissing: p - m
          })
        })]
      }), (0, r.jsxs)("div", {
        className: y.progressContainer,
        children: [(0, r.jsx)(a.Exd, {
          className: y.coverageProgress,
          foregroundColor: f > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: f
        }), (0, r.jsx)(j, {
          size: "md",
          color: "currentColor",
          className: y.caret
        })]
      })]
    }), x ? (0, r.jsxs)("div", {
      className: y.channelCoverageDetails,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: C.intl.string(C.t["0FM4i+"])
      }), (0, r.jsx)("div", {
        className: y.channels,
        children: d.map(e => {
          var t;
          let n = null != (t = (0, o.KS)(e)) ? t : a.VL1;
          return (0, r.jsx)("div", {
            className: y.channelPill,
            children: (0, r.jsxs)(a.Text, {
              className: y.channel,
              variant: "text-xs/normal",
              color: "interactive-text-active",
              children: [(0, r.jsx)(n, {
                size: "xxs",
                color: "currentColor"
              }), e.name]
            })
          }, e.id)
        })
      }), (0, r.jsx)("div", {
        className: y.channelCoverageHint,
        children: h > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Mgn, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: C.intl.format(C.t.sX8890, {
              numChannels: h
            })
          })]
        }) : (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: C.intl.string(C.t.o4s29v)
        })
      })]
    }) : null]
  })
}

function E(e) {
  let {
    saveOnClose: t
  } = e, n = (0, l.e7)([d.Z], () => d.Z.getGuild());
  return null == n ? null : (0, r.jsx)(I, {
    guild: n,
    saveOnClose: t
  })
}

function I(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, s = (0, l.e7)([c.Z], () => c.Z.isLoading()), o = (0, l.e7)([x.Z], () => x.Z.editedOnboardingPrompts), u = (0, l.e7)([x.Z], () => x.Z.advancedMode), d = i.useRef(false);
  i.useEffect(() => {
    s || d.current || (d.current = true, u || 0 !== o.length || (0, h.tS)(t, [(0, O.ae)()], false))
  });
  let g = i.useRef(t);
  if (i.useEffect(() => {
      g.current = t
    }), i.useEffect(() => {
      if (n) return () => {
        let e = g.current;
        null != e && (0, h.rS)(e, {
          ignoreDefaultPrompt: true
        }).then(() => (0, p.ss)(e.id)).catch(() => {})
      }
    }, [n]), null == t) return null;
  let f = async () => {
    try {
      await (0, h.rS)(t), await (0, m.di)(t.id)
    } catch (e) {}
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      className: y.header,
      variant: "heading-lg/extrabold",
      children: u ? C.intl.string(C.t.AGjtFv) : C.intl.string(C.t.dqCzoT)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: C.intl.string(C.t["q/6MLL"])
    }), (0, r.jsxs)("div", {
      className: y.links,
      children: [(0, r.jsx)(a.Anchor, {
        target: "_blank",
        href: v.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: C.intl.string(C.t.Ok55Kh)
        })
      }), (0, r.jsx)("div", {
        className: y.dot
      }), (0, r.jsx)(a.Anchor, {
        onClick: f,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: C.intl.string(C.t["6gsjdM"])
        })
      }), (0, r.jsx)("div", {
        className: y.dot
      }), (0, r.jsx)(b.Wu, {
        guildId: t.id
      })]
    }), (0, r.jsx)(N, {
      guildId: t.id,
      prompts: o
    }), n && (0, r.jsx)(j.Z, {}), (0, r.jsx)("div", {
      className: y.prompts,
      children: s ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(_.Z, {
        postjoinOnly: u,
        guildId: t.id
      })
    })]
  })
}

function S() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk442837.e7)([Chunk208665.Z], () => Chunk208665.Z.submitting),
    n = (0, Chunk442837.e7)([Chunk926958.Z], () => Chunk926958.Z.isSubmitting()),
    i = (0, Chunk442837.e7)([Chunk926958.Z], () => Chunk926958.Z.hasChanges());
  return null == module ? null : (0, Chunk54381.jsx)(Chunk796027.Z, {
    onSave: async () => {
      try {
        await (0, Chunk570961.rS)(module), Chunk473749 && await (0, Chunk190007.e$)(module.id)
      } catch (e) {}
    },
    onReset: () => {
      (0, Chunk570961.NB)(), Chunk473749 && (0, Chunk190007.Pk)()
    },
    submitting: exports || Chunk473749 && require,
    onSaveText: Chunk388032.intl.string(Chunk388032.t["R3BPH+"])
  })
}