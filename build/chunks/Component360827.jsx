/** Chunk was on 39048 **/
/** chunk id: 360827, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => N,
  fO: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk555337 = require("./555337.js"),
  Chunk863694 = require("./863694.js"),
  Chunk527678 = require("./527678.js"),
  Chunk923121 = require("./923121.js"),
  Chunk352821 = require("./352821.js"),
  Chunk107795 = require("./107795.js"),
  Chunk655943 = require("./655943.js"),
  Chunk259866 = require("./259866.jsx"),
  Chunk699256 = require("./699256.jsx"),
  Chunk191117 = require("./191117.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk42483 = require("./42483.js");

function E(e) {
  let {
    guildId: t,
    prompts: n
  } = e, s = (0, l.bG)([g.A], () => g.A.editedDefaultChannelIds), [c, u] = (0, d.Lx)(t, n, [...s]), m = c.length, p = c.length + u.length, f = m / p * 100, h = Math.max(Math.ceil(85 * p / 100) - m, 0), [b, x] = i.useState(false), j = b ? a.abt : a.tN5;
  return (0, r.jsxs)("div", {
    className: A.Kf,
    children: [(0, r.jsxs)(a.DUT, {
      className: A.a9,
      onClick: () => x(!b),
      children: [(0, r.jsxs)("div", {
        className: A.Vn,
        children: [f <= 85 && (0, r.jsx)(a.EpV, {
          size: "xs",
          color: "currentColor",
          className: A.$e
        }), (0, r.jsx)(a.Text, {
          className: A.XG,
          variant: "text-xs/medium",
          color: "text-muted",
          children: y.intl.format(y.t.nMVKCX, {
            numChannelsMissing: p - m
          })
        })]
      }), (0, r.jsxs)("div", {
        className: A.L$,
        children: [(0, r.jsx)(a.iCB, {
          className: A.gH,
          foregroundColor: f > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: f
        }), (0, r.jsx)(j, {
          size: "md",
          color: "currentColor",
          className: A.OW
        })]
      })]
    }), b ? (0, r.jsxs)("div", {
      className: A.k$,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: y.intl.string(y.t["0FM4i+"])
      }), (0, r.jsx)("div", {
        className: A.BM,
        children: u.map(e => {
          var t;
          let n = null != (t = (0, o.gU)(e)) ? t : a.N$i;
          return (0, r.jsx)("div", {
            className: A.N5,
            children: (0, r.jsxs)(a.Text, {
              className: A.Ix,
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
        className: A.fg,
        children: h > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.EpV, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: y.intl.format(y.t.sX8890, {
              numChannels: h
            })
          })]
        }) : (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: y.intl.string(y.t.o4s29v)
        })
      })]
    }) : null]
  })
}

function N(e) {
  let {
    saveOnClose: t
  } = e, n = (0, l.bG)([u.A], () => u.A.getGuild());
  return null == n ? null : (0, r.jsx)(S, {
    guild: n,
    saveOnClose: t
  })
}

function S(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, s = (0, l.bG)([c.A], () => c.A.isLoading()), o = (0, l.bG)([b.A], () => b.A.editedOnboardingPrompts), d = (0, l.bG)([b.A], () => b.A.advancedMode), u = i.useRef(false);
  i.useEffect(() => {
    s || u.current || (u.current = true, d || 0 !== o.length || (0, h.WC)(t, [(0, v.Mc)()], false))
  });
  let g = i.useRef(t);
  if (i.useEffect(() => {
      g.current = t
    }), i.useEffect(() => {
      if (n) return () => {
        let e = g.current;
        null != e && (0, h.dm)(e, {
          ignoreDefaultPrompt: true
        }).then(() => (0, p.fH)(e.id)).catch(() => {})
      }
    }, [n]), null == t) return null;
  let f = async () => {
    try {
      await (0, h.dm)(t), await (0, m.X$)(t.id)
    } catch (e) {}
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      className: A.wx,
      variant: "heading-lg/extrabold",
      children: d ? y.intl.string(y.t.AGjtFv) : y.intl.string(y.t.dqCzoT)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: y.intl.string(y.t["q/6MLL"])
    }), (0, r.jsxs)("div", {
      className: A.yJ,
      children: [(0, r.jsx)(a.MzZ, {
        target: "_blank",
        href: O.X7G.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: y.intl.string(y.t.Ok55Kh)
        })
      }), (0, r.jsx)("div", {
        className: A.Om
      }), (0, r.jsx)(a.MzZ, {
        onClick: f,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: y.intl.string(y.t["6gsjdM"])
        })
      }), (0, r.jsx)("div", {
        className: A.Om
      }), (0, r.jsx)(x.mU, {
        guildId: t.id
      })]
    }), (0, r.jsx)(E, {
      guildId: t.id,
      prompts: o
    }), n && (0, r.jsx)(j.A, {
      guildId: t.id
    }), (0, r.jsx)("div", {
      className: A.E3,
      children: s ? (0, r.jsx)(a.y$y, {}) : (0, r.jsx)(_.A, {
        postjoinOnly: d,
        guildId: t.id
      })
    })]
  })
}

function I() {
  let e = (0, l.bG)([u.A], () => u.A.getGuild()),
    t = (0, l.bG)([b.A], () => b.A.submitting),
    n = (0, l.bG)([f.A], () => f.A.isSubmitting()),
    i = (0, l.bG)([f.A], () => f.A.hasChanges());
  return null == e ? null : (0, r.jsx)(s.A, {
    onSave: async () => {
      try {
        await (0, h.dm)(e), i && await (0, p.q3)(e.id)
      } catch (e) {}
    },
    onReset: () => {
      (0, h.P3)(), i && (0, p.p2)()
    },
    submitting: t || i && n,
    onSaveText: y.intl.string(y.t["R3BPH+"])
  })
}