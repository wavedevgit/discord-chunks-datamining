/** Chunk was on 29679 **/
/** chunk id: 966301, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ZP: () => O,
  Zm: () => N
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
  } = e, a = (0, l.e7)([g.Z], () => g.Z.editedDefaultChannelIds), [c, u] = (0, d.dF)(t, n, [...a]), m = c.length, p = c.length + u.length, f = m / p * 100, h = Math.max(Math.ceil(85 * p / 100) - m, 0), [x, b] = i.useState(false), j = x ? s.CJ0 : s.u04;
  return (0, r.jsxs)("div", {
    className: v.channelCoverage,
    children: [(0, r.jsxs)(s.P3F, {
      className: v.coverageHeader,
      onClick: () => b(!x),
      children: [(0, r.jsxs)("div", {
        className: v.warningTextContainer,
        children: [f <= 85 && (0, r.jsx)(s.Mgn, {
          size: "xs",
          color: "currentColor",
          className: v.warning
        }), (0, r.jsx)(s.Text, {
          className: v.coverageTitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: _.intl.format(_.t.nMVKCQ, {
            numChannelsMissing: p - m
          })
        })]
      }), (0, r.jsxs)("div", {
        className: v.progressContainer,
        children: [(0, r.jsx)(s.Exd, {
          className: v.coverageProgress,
          foregroundColor: f > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: f
        }), (0, r.jsx)(j, {
          size: "md",
          color: "currentColor",
          className: v.caret
        })]
      })]
    }), x ? (0, r.jsxs)("div", {
      className: v.channelCoverageDetails,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: _.intl.string(_.t["0FM4i4"])
      }), (0, r.jsx)("div", {
        className: v.channels,
        children: u.map(e => {
          var t;
          let n = null != (t = (0, o.KS)(e)) ? t : s.VL1;
          return (0, r.jsx)("div", {
            className: v.channelPill,
            children: (0, r.jsxs)(s.Text, {
              className: v.channel,
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
        className: v.channelCoverageHint,
        children: h > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(s.Mgn, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: _.intl.format(_.t["sX889/"], {
              numChannels: h
            })
          })]
        }) : (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: _.intl.string(_.t.o4s29v)
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
  } = e, a = (0, l.e7)([c.Z], () => c.Z.isLoading()), o = (0, l.e7)([f.Z], () => f.Z.editedOnboardingPrompts), d = (0, l.e7)([f.Z], () => f.Z.advancedMode), u = i.useRef(false);
  i.useEffect(() => {
    a || u.current || (u.current = true, d || 0 !== o.length || (0, p.tS)(t, [(0, j.ae)()], false))
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
    children: [(0, r.jsx)(s.X6q, {
      className: v.header,
      variant: "heading-lg/extrabold",
      children: d ? _.intl.string(_.t.AGjtFh) : _.intl.string(_.t.dqCzoa)
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: _.intl.string(_.t["q/6MLC"])
    }), (0, r.jsxs)("div", {
      className: v.links,
      children: [(0, r.jsx)(s.eee, {
        target: "_blank",
        href: b.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: _.intl.string(_.t.Ok55Ki)
        })
      }), (0, r.jsx)("div", {
        className: v.dot
      }), (0, r.jsx)(s.eee, {
        onClick: O,
        children: (0, r.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: _.intl.string(_.t["6gsjdH"])
        })
      }), (0, r.jsx)("div", {
        className: v.dot
      }), (0, r.jsx)(h.Wu, {
        guildId: t.id
      })]
    }), (0, r.jsx)(C, {
      guildId: t.id,
      prompts: o
    }), (0, r.jsx)("div", {
      className: v.prompts,
      children: a ? (0, r.jsx)(s.$jN, {}) : (0, r.jsx)(x.Z, {
        postjoinOnly: d,
        guildId: t.id
      })
    })]
  })
}

function N() {
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
    onSaveText: Chunk388032.intl.string(Chunk388032.t.R3BPHx)
  })
}