/** Chunk was on 29679 **/
/** chunk id: 966301, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  Zm: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk471445 = require("./471445.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk999382 = require("./999382.js"),
  Chunk889369 = require("./889369.js"),
  Chunk983135 = require("./983135.js"),
  Chunk570961 = require("./570961.js"),
  Chunk208665 = require("./208665.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk716130 = require("./716130.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405884 = require("./405884.js");

function C(e) {
  let {
    guildId: t,
    prompts: n
  } = e, s = (0, l.e7)([g.Z], () => g.Z.editedDefaultChannelIds), [c, u] = (0, d.dF)(t, n, [...s]), m = c.length, p = c.length + u.length, f = m / p * 100, h = Math.max(Math.ceil(85 * p / 100) - m, 0), [b, x] = i.useState(false), j = b ? a.CJ0 : a.u04;
  return (0, r.jsxs)("div", {
    className: _.channelCoverage,
    children: [(0, r.jsxs)(a.P3F, {
      className: _.coverageHeader,
      onClick: () => x(!b),
      children: [(0, r.jsxs)("div", {
        className: _.warningTextContainer,
        children: [f <= 85 && (0, r.jsx)(a.Mgn, {
          size: "xs",
          color: "currentColor",
          className: _.warning
        }), (0, r.jsx)(a.Text, {
          className: _.coverageTitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: v.intl.format(v.t.nMVKCX, {
            numChannelsMissing: p - m
          })
        })]
      }), (0, r.jsxs)("div", {
        className: _.progressContainer,
        children: [(0, r.jsx)(a.Exd, {
          className: _.coverageProgress,
          foregroundColor: f > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: f
        }), (0, r.jsx)(j, {
          size: "md",
          color: "currentColor",
          className: _.caret
        })]
      })]
    }), b ? (0, r.jsxs)("div", {
      className: _.channelCoverageDetails,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: v.intl.string(v.t["0FM4i+"])
      }), (0, r.jsx)("div", {
        className: _.channels,
        children: u.map(e => {
          var t;
          let n = null != (t = (0, o.KS)(e)) ? t : a.VL1;
          return (0, r.jsx)("div", {
            className: _.channelPill,
            children: (0, r.jsxs)(a.Text, {
              className: _.channel,
              variant: "text-xs/normal",
              color: "interactive-active",
              children: [(0, r.jsx)(n, {
                size: "xxs",
                color: "currentColor"
              }), e.name]
            })
          }, e.id)
        })
      }), (0, r.jsx)("div", {
        className: _.channelCoverageHint,
        children: h > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.Mgn, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: v.intl.format(v.t.sX8890, {
              numChannels: h
            })
          })]
        }) : (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: v.intl.string(v.t.o4s29v)
        })
      })]
    }) : null]
  })
}

function O(e) {
  let {
    saveOnClose: t
  } = e, n = (0, l.e7)([u.Z], () => u.Z.getGuild());
  return null == n ? null : (0, r.jsx)(y, {
    guild: n,
    saveOnClose: t
  })
}

function y(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, s = (0, l.e7)([c.Z], () => c.Z.isLoading()), o = (0, l.e7)([f.Z], () => f.Z.editedOnboardingPrompts), d = (0, l.e7)([f.Z], () => f.Z.advancedMode), u = i.useRef(false);
  i.useEffect(() => {
    s || u.current || (u.current = true, d || 0 !== o.length || (0, p.tS)(t, [(0, j.ae)()], false))
  });
  let g = i.useRef(t);
  if (i.useEffect(() => {
      g.current = t
    }), i.useEffect(() => {
      if (n) return () => {
        (0, p.rS)(g.current, {
          ignoreDefaultPrompt: true
        }).catch(() => {})
      }
    }, [n]), null == t) return null;
  let O = async () => {
    try {
      await (0, p.rS)(t), await (0, m.di)(t.id)
    } catch (e) {}
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      className: _.header,
      variant: "heading-lg/extrabold",
      children: d ? v.intl.string(v.t.AGjtFv) : v.intl.string(v.t.dqCzoT)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: v.intl.string(v.t["q/6MLL"])
    }), (0, r.jsxs)("div", {
      className: _.links,
      children: [(0, r.jsx)(a.Anchor, {
        target: "_blank",
        href: x.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.intl.string(v.t.Ok55Kh)
        })
      }), (0, r.jsx)("div", {
        className: _.dot
      }), (0, r.jsx)(a.Anchor, {
        onClick: O,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.intl.string(v.t["6gsjdM"])
        })
      }), (0, r.jsx)("div", {
        className: _.dot
      }), (0, r.jsx)(h.Wu, {
        guildId: t.id
      })]
    }), (0, r.jsx)(C, {
      guildId: t.id,
      prompts: o
    }), (0, r.jsx)("div", {
      className: _.prompts,
      children: s ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(b.Z, {
        postjoinOnly: d,
        guildId: t.id
      })
    })]
  })
}

function E() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuild()),
    t = (0, Chunk442837.e7)([Chunk208665.Z], () => Chunk208665.Z.submitting);
  return null == module ? null : (0, Chunk951288.jsx)(Chunk852860.Z, {
    onSave: () => {
      try {
        (0, Chunk570961.rS)(module)
      } catch (e) {}
    },
    onReset: Chunk570961.NB,
    submitting: exports,
    onSaveText: Chunk388032.intl.string(Chunk388032.t["R3BPH+"])
  })
}