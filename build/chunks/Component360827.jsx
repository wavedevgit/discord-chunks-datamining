/** Chunk was on 47841 **/
/** chunk id: 360827, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => _,
  fO: () => T
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

function N(e) {
  let {
    guildId: t,
    prompts: n
  } = e, s = (0, l.bG)([f.A], () => f.A.editedDefaultChannelIds), [o, u] = (0, d.Lx)(t, n, [...s]), g = o.length, b = o.length + u.length, m = g / b * 100, p = Math.max(Math.ceil(85 * b / 100) - g, 0), [x, h] = i.useState(false), j = x ? a.abt : a.tN5;
  return (0, r.jsxs)("div", {
    className: E.Kf,
    children: [(0, r.jsxs)(a.DUT, {
      className: E.a9,
      onClick: () => h(!x),
      children: [(0, r.jsxs)("div", {
        className: E.Vn,
        children: [m <= 85 && (0, r.jsx)(a.EpV, {
          size: "xs",
          color: "currentColor",
          className: E.$e
        }), (0, r.jsx)(a.Text, {
          className: E.XG,
          variant: "text-xs/medium",
          color: "text-muted",
          children: A.intl.format(A.t.nMVKCX, {
            numChannelsMissing: b - g
          })
        })]
      }), (0, r.jsxs)("div", {
        className: E.L$,
        children: [(0, r.jsx)(a.kej, {
          className: E.gH,
          foregroundColor: m > 85 ? "var(--status-positive)" : "var(--status-warning)",
          percent: m
        }), (0, r.jsx)(j, {
          size: "md",
          color: "currentColor",
          className: E.OW
        })]
      })]
    }), x ? (0, r.jsxs)("div", {
      className: E.k$,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-muted",
        children: A.intl.string(A.t["0FM4i+"])
      }), (0, r.jsx)("div", {
        className: E.BM,
        children: u.map(e => {
          var t;
          let n = null != (t = (0, c.gU)(e)) ? t : a.N$i;
          return (0, r.jsx)("div", {
            className: E.N5,
            children: (0, r.jsxs)(a.Text, {
              className: E.Ix,
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
        className: E.fg,
        children: p > 0 ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(a.EpV, {
            size: "xs",
            color: "currentColor"
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: A.intl.format(A.t.sX8890, {
              numChannels: p
            })
          })]
        }) : (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: A.intl.string(A.t.o4s29v)
        })
      })]
    }) : null]
  })
}

function _(e) {
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
  } = e, s = (0, l.bG)([o.A], () => o.A.isLoading()), c = (0, l.bG)([x.A], () => x.A.editedOnboardingPrompts), d = (0, l.bG)([x.A], () => x.A.advancedMode), u = i.useRef(false);
  i.useEffect(() => {
    s || u.current || (u.current = true, d || 0 !== c.length || (0, p.WC)(t, [(0, v.Mc)()], false))
  });
  let f = i.useRef(t);
  if (i.useEffect(() => {
      f.current = t
    }), i.useEffect(() => {
      if (n) return () => {
        let e = f.current;
        null != e && (0, p.dm)(e, {
          ignoreDefaultPrompt: true
        }).then(() => (0, b.fH)(e.id)).catch(() => {})
      }
    }, [n]), null == t) return null;
  let m = async () => {
    try {
      await (0, p.dm)(t), await (0, g.X$)(t.id)
    } catch (e) {}
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Heading, {
      className: E.wx,
      variant: "heading-lg/extrabold",
      children: d ? A.intl.string(A.t.AGjtFv) : A.intl.string(A.t.dqCzoT)
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-default",
      children: A.intl.string(A.t["q/6MLL"])
    }), (0, r.jsxs)("div", {
      className: E.yJ,
      children: [(0, r.jsx)(a.MzZ, {
        target: "_blank",
        href: y.X7G.GUILD_ONBOARDING_EXAMPLES,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: A.intl.string(A.t.Ok55Kh)
        })
      }), (0, r.jsx)("div", {
        className: E.Om
      }), (0, r.jsx)(a.MzZ, {
        onClick: m,
        children: (0, r.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: A.intl.string(A.t["6gsjdM"])
        })
      }), (0, r.jsx)("div", {
        className: E.Om
      }), (0, r.jsx)(h.mU, {
        guildId: t.id
      })]
    }), (0, r.jsx)(N, {
      guildId: t.id,
      prompts: c
    }), n && (0, r.jsx)(j.A, {
      guildId: t.id
    }), (0, r.jsx)("div", {
      className: E.E3,
      children: s ? (0, r.jsx)(a.y$y, {}) : (0, r.jsx)(O.A, {
        postjoinOnly: d,
        guildId: t.id
      })
    })]
  })
}

function T() {
  let e = (0, l.bG)([u.A], () => u.A.getGuild()),
    t = (0, l.bG)([x.A], () => x.A.submitting),
    n = (0, l.bG)([m.A], () => m.A.isSubmitting()),
    i = (0, l.bG)([m.A], () => m.A.hasChanges());
  return null == e ? null : (0, r.jsx)(s.A, {
    onSave: async () => {
      try {
        await (0, p.dm)(e), i && await (0, b.q3)(e.id)
      } catch (e) {}
    },
    onReset: () => {
      (0, p.P3)(), i && (0, b.p2)()
    },
    submitting: t || i && n,
    onSaveText: A.intl.string(A.t["R3BPH+"])
  })
}