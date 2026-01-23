/** Chunk was on 47841 **/
/** chunk id: 960756, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $i: () => v,
  aV: () => A,
  bW: () => y,
  gE: () => O,
  n5: () => _
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk591552 = require("./591552.js"),
  Chunk961973 = require("./961973.js"),
  Chunk374084 = require("./374084.js"),
  Chunk352821 = require("./352821.js"),
  Chunk199940 = require("./199940.js"),
  Chunk132514 = require("./132514.js"),
  Chunk949034 = require("./949034.js"),
  Chunk259866 = require("./259866.jsx"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk818110 = require("./818110.js");

function x(e) {
  let t, {
    title: n,
    description: i,
    icon: l,
    hasStarted: a,
    status: o,
    onEdit: c,
    extra: d
  } = e;
  switch (o) {
    case "good":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.A9s, {
          size: "xs",
          color: "currentColor",
          className: h.AI
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "status-positive",
          className: h.qS,
          children: b.intl.string(b.t.rPnzRf)
        })]
      });
      break;
    case "warning":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.EpV, {
          size: "xs",
          color: "currentColor",
          className: h.$e
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "status-warning",
          className: h.qS,
          children: b.intl.string(b.t["yTa+di"])
        })]
      });
      break;
    case "required":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.EpV, {
          size: "xs",
          color: "currentColor",
          className: h.OR
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "text-feedback-critical",
          className: h.qS,
          children: b.intl.string(b.t.EkokLy)
        })]
      })
  }
  return (0, r.jsxs)("div", {
    className: h.jB,
    children: [(0, r.jsxs)("div", {
      className: h.jA,
      children: [(0, r.jsx)("div", {
        className: h.zc,
        children: l
      }), (0, r.jsxs)("div", {
        className: h.FE,
        children: [(0, r.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: n
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: a && "required" === o ? "text-feedback-critical" : "text-default",
          children: i
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: h.Ib,
      children: [t, d, (0, r.jsx)("div", {
        className: h.lO,
        children: a ? (0, r.jsx)(s.Button, {
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: b.intl.string(b.t.bt75uw)
        }) : (0, r.jsx)(s.Button, {
          icon: s.EdP,
          iconPosition: "end",
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: b.intl.string(b.t["0GWElc"])
        })
      })]
    })]
  })
}

function j(e) {
  let t = (0, l.bG)([a.A], () => a.A.getDefaultChannelIds(e)),
    n = i.useMemo(() => new Set(t), [t]),
    [r] = (0, o.tb)(e, n);
  return r.length >= f.Kd
}

function _(e) {
  let t = j(e),
    n = (0, p.Mj)(e);
  return t || n
}

function O(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: c
  } = e, d = (0, l.yK)([a.A], () => a.A.getDefaultChannelIds(t)), u = (0, l.bG)([a.A], () => (0, o.G4)(t, a.A.getDefaultChannelIds(t), a.A.getOnboardingPrompts(t)).length), g = i.useMemo(() => new Set(d), [d]), [, m] = (0, o.tb)(t, g), _ = m.length, O = j(t), v = (0, p.Mj)(t), y = (0, l.bG)([a.A], () => a.A.isAdvancedMode(t)), A = y ? b.intl.formatToPlainString(b.t.nHwnLK, {
    numDefaultChannels: _,
    numFromQuestions: u - _
  }) : O ? b.intl.formatToPlainString(b.t.HxEwSv, {
    numDefaultChannels: _
  }) : b.intl.formatToPlainString(b.t.vPwmA0, {
    numChattableChannels: f.Kd
  });
  return (0, r.jsx)(x, {
    title: y ? b.intl.string(b.t.YZookV) : b.intl.string(b.t["4GSygh"]),
    description: A,
    icon: (0, r.jsx)(s.N$i, {
      size: "md",
      color: "currentColor",
      className: h.p
    }),
    hasStarted: _ > 0 || y,
    status: O || v ? c ? "none" : "good" : "required",
    onEdit: n
  })
}

function v(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: i
  } = e, c = (0, l.yK)([a.A], () => a.A.getDefaultChannelIds(t)), d = (0, l.yK)([a.A], () => a.A.getOnboardingPrompts(t)), u = d.length, [g, m] = (0, o.Lx)(t, d, c), p = g.length, f = g.length + m.length, j = p / f * 100, _ = (0, l.bG)([a.A], () => a.A.isAdvancedMode(t)), O = u > 0, v = "none";
  return O && (j >= 85 && !i ? v = "good" : j < 85 && (v = "warning")), (0, r.jsx)(x, {
    title: _ ? b.intl.string(b.t.AGjtFv) : b.intl.string(b.t.dqCzoT),
    description: b.intl.format(b.t.iuNisr, {
      numChannels: p,
      numTotalChannels: f,
      channelsHook: (e, t) => (0, r.jsx)("span", {
        style: {
          color: j > 85 ? "var(--text-strong)" : "var(--status-warning)"
        },
        children: e
      }, t)
    }),
    icon: (0, r.jsx)(s.$yI, {
      size: "md",
      color: "currentColor",
      className: h.p
    }),
    hasStarted: O,
    status: v,
    onEdit: n
  })
}

function y(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: o
  } = e, d = (0, l.bG)([g.A], () => g.A.getSettings()), m = (0, l.bG)([a.A], () => a.A.getEnabled(t)), p = (0, c.Ic)(d), f = d.enabled, j = i.useCallback(() => {
    (0, u.UP)(t, !f)
  }, [t, f]), _ = !(0, c.jJ)(d), O = "none";
  _ && (p && !o ? O = "good" : p || (O = "required"));
  let v = b.intl.string(b.t.GMOwOD);
  p ? _ || (v = b.intl.string(b.t.wHOoyE)) : v = b.intl.string(b.t.wXFbgZ);
  let y = null;
  return _ && m && (y = (0, r.jsx)("div", {
    className: h.WW,
    children: (0, r.jsx)(s.dOG, {
      checked: f,
      onChange: j,
      disabled: !p
    })
  })), (0, r.jsx)(x, {
    title: b.intl.string(b.t.mRHqsj),
    description: v,
    icon: (0, r.jsx)(s.Zf8, {
      size: "md",
      color: "currentColor",
      className: h.p
    }),
    hasStarted: _,
    status: O,
    onEdit: n,
    extra: y
  })
}

function A(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: i
  } = e, {
    enabled: a
  } = m.A.useExperiment({
    guildId: t,
    location: "guild_settings"
  }, {
    autoTrackExposure: true
  }), o = (0, l.yK)([d.A], () => d.A.getEditedConnections());
  if (!a) return null;
  let c = o.length > 0,
    u = "none";
  c && !i && (u = "good");
  let g = c ? b.intl.format(b.t["9swnQZ"], {
    count: o.length
  }) : b.intl.string(b.t["3d3Cd5"]);
  return (0, r.jsx)(x, {
    title: b.intl.string(b.t.oL60eW),
    description: g,
    icon: (0, r.jsx)(s.qYV, {
      size: "md",
      color: "currentColor",
      className: h.p
    }),
    hasStarted: c,
    status: u,
    onEdit: n
  })
}