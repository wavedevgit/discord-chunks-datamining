/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  ZP: () => j,
  Zm: () => I
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(852860),
  o = n(471445),
  A = n(45966),
  c = n(637853),
  d = n(999382),
  u = n(889369),
  g = n(983135),
  f = n(570961),
  m = n(208665),
  p = n(974513),
  h = n(716130),
  C = n(981631),
  b = n(290511),
  v = n(388032),
  x = n(662607);

function N(e) {
  let {
    guildId: t,
    prompts: n
  } = e, l = (0, s.e7)([u.Z], () => u.Z.editedDefaultChannelIds), [A, d] = (0, c.dF)(t, n, [...l]), g = A.length, f = A.length + d.length, m = g / f * 100, p = Math.max(Math.ceil(85 * f / 100) - g, 0), [h, C] = i.useState(!1), b = h ? a.CJ0 : a.u04;
  return (0, r.jsxs)("div", {
    className: x.channelCoverage,
    children: [(0, r.jsxs)(a.P3F, {
      className: x.coverageHeader,
      onClick: () => C(!h),
      children: [(0, r.jsxs)("div", {
        className: x.warningTextContainer,
        children: [m <= 85 && (0, r.jsx)(a.P4T, {
          size: "xs",
          color: "currentColor",
          className: x.warning
        }), (0, r.jsx)(a.Text, {
          className: x.coverageTitle,
          variant: "text-xs/medium",
          color: "text-muted",
          children: v.NW.format(v.t.nMVKCQ, {
            numChannelsMissing: f - g
          })
        })]
      }), (0, r.jsxs)("div", {
        className: x.progressContainer,
        children: [(0, r.jsx)(a.Exd, {
          className: x.coverageProgress,
          foregroundColor: m > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: m
        }), (0, r.jsx)(b, {
          size: "md",
          color: "currentColor",
          className: x.caret
        })]
      })]
    }), h ? (0, r.jsxs)("div", {
      className: x.channelCoverageDetails,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: v.NW.string(v.t["0FM4i4"])
      }), (0, r.jsx)("div", {
        className: x.channels,
        children: d.map(e => {
          var t;
          let n = null !== (t = (0, o.KS)(e)) && void 0 !== t ? t : a.VL1;
          return (0, r.jsx)("div", {
            className: x.channelPill,
            children: (0, r.jsxs)(a.Text, {
              className: x.channel,
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
        className: x.channelCoverageHint,
        children: p > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.P4T, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: v.NW.format(v.t["sX889/"], {
              numChannels: p
            })
          })]
        }) : (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: v.NW.string(v.t.o4s29v)
        })
      })]
    }) : null]
  })
}

function j(e) {
  let {
    saveOnClose: t
  } = e, n = (0, s.e7)([d.Z], () => d.Z.getGuild());
  return null == n ? null : (0, r.jsx)(E, {
    guild: n,
    saveOnClose: t
  })
}

function E(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, l = (0, s.e7)([A.Z], () => A.Z.isLoading()), o = (0, s.e7)([m.Z], () => m.Z.editedOnboardingPrompts), c = (0, s.e7)([m.Z], () => m.Z.advancedMode), d = i.useRef(!1);
  i.useEffect(() => {
    l || d.current || 0 !== o.length || (d.current = !0, c || (0, f.tS)(t, [(0, b.ae)()], !1))
  });
  let u = i.useRef(t);
  if (i.useEffect(() => {
      u.current = t
    }), i.useEffect(() => {
      if (n) return () => {
        (0, f.rS)(u.current, {
          ignoreDefaultPrompt: !0
        }).catch(() => {})
      }
    }, [n]), null == t) return null;
  let j = async () => {
    try {
      await (0, f.rS)(t), await (0, g.di)(t.id)
    } catch (e) {}
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.X6q, {
      className: x.header,
      variant: "heading-lg/extrabold",
      children: c ? v.NW.string(v.t.AGjtFh) : v.NW.string(v.t.dqCzoa)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "header-secondary",
      children: v.NW.string(v.t["q/6MLC"])
    }), (0, r.jsxs)("div", {
      className: x.links,
      children: [(0, r.jsx)(a.eee, {
        target: "_blank",
        href: C.EYA.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.NW.string(v.t.Ok55Ki)
        })
      }), (0, r.jsx)("div", {
        className: x.dot
      }), (0, r.jsx)(a.eee, {
        onClick: j,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: v.NW.string(v.t["6gsjdH"])
        })
      }), (0, r.jsx)("div", {
        className: x.dot
      }), (0, r.jsx)(p.Wu, {
        guildId: t.id
      })]
    }), (0, r.jsx)(N, {
      guildId: t.id,
      prompts: o
    }), (0, r.jsx)("div", {
      className: x.prompts,
      children: l ? (0, r.jsx)(a.$jN, {}) : (0, r.jsx)(h.Z, {
        postjoinOnly: c,
        guildId: t.id
      })
    })]
  })
}

function I() {
  let e = (0, s.e7)([d.Z], () => d.Z.getGuild()),
    t = (0, s.e7)([m.Z], () => m.Z.submitting);
  return null == e ? null : (0, r.jsx)(l.Z, {
    onSave: () => {
      try {
        (0, f.rS)(e)
      } catch (e) {}
    },
    onReset: f.NB,
    submitting: t,
    onSaveText: v.NW.string(v.t.R3BPHx)
  })
}