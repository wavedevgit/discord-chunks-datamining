/** Chunk was on 88479 **/
/** chunk id: 677892, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $$: () => x,
  P_: () => v,
  ap: () => _,
  ku: () => j
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54028 = require("./54028.js");

function h(e) {
  let t, {
    title: n,
    description: i,
    icon: l,
    hasStarted: s,
    status: o,
    onEdit: c,
    extra: d
  } = e;
  switch (o) {
    case "good":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.dz2, {
          size: "xs",
          color: "currentColor",
          className: f.checkmark
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-positive",
          className: f.statusText,
          children: p.intl.string(p.t.rPnzRU)
        })]
      });
      break;
    case "warning":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Mgn, {
          size: "xs",
          color: "currentColor",
          className: f.warning
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-warning",
          className: f.statusText,
          children: p.intl.string(p.t["yTa+dn"])
        })]
      });
      break;
    case "required":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.Mgn, {
          size: "xs",
          color: "currentColor",
          className: f.danger
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-danger",
          className: f.statusText,
          children: p.intl.string(p.t.EkokLy)
        })]
      })
  }
  return (0, r.jsxs)("div", {
    className: f.onboardingStepContainer,
    children: [(0, r.jsxs)("div", {
      className: f.leftContainer,
      children: [(0, r.jsx)("div", {
        className: f.iconContainer,
        children: l
      }), (0, r.jsxs)("div", {
        className: f.onboardingStepText,
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          children: n
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: s && "required" === o ? "status-danger" : "text-default",
          children: i
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: f.rightContainer,
      children: [t, d, (0, r.jsx)("div", {
        className: f.cta,
        children: s ? (0, r.jsx)(a.zxk, {
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: p.intl.string(p.t.bt75u7)
        }) : (0, r.jsx)(a.zxk, {
          icon: a.ZSh,
          iconPosition: "end",
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: p.intl.string(p.t["0GWElZ"])
        })
      })]
    })]
  })
}

function b(e) {
  let t = (0, l.e7)([s.Z], () => s.Z.getDefaultChannelIds(e)),
    n = i.useMemo(() => new Set(t), [t]),
    [r, a] = (0, o.VF)(e, n);
  return a.length >= g.md && r.length >= g.X
}

function x(e) {
  let t = b(e),
    n = (0, m.O4)(e);
  return t || n
}

function j(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: c
  } = e, d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)), u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length), x = i.useMemo(() => new Set(d), [d]), [, j] = (0, o.VF)(t, x), _ = j.length, v = b(t), O = (0, m.O4)(t), y = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)), C = y ? p.intl.formatToPlainString(p.t.nHwnLC, {
    numDefaultChannels: _,
    numFromQuestions: u - _
  }) : v ? p.intl.formatToPlainString(p.t.HxEwSk, {
    numDefaultChannels: _
  }) : p.intl.formatToPlainString(p.t.ey3uVV, {
    numDefaultChannels: g.md,
    numChattableChannels: g.X
  });
  return (0, r.jsx)(h, {
    title: y ? p.intl.string(p.t.YZookZ) : p.intl.string(p.t["4GSygo"]),
    description: C,
    icon: (0, r.jsx)(a.VL1, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: _ > 0 || y,
    status: v || O ? c ? "none" : "good" : "required",
    onEdit: n
  })
}

function _(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: i
  } = e, c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)), d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)), u = d.length, [m, g] = (0, o.dF)(t, d, c), b = m.length, x = m.length + g.length, j = b / x * 100, _ = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)), v = u > 0, O = "none";
  return v && (j >= 85 && !i ? O = "good" : j < 85 && (O = "warning")), (0, r.jsx)(h, {
    title: _ ? p.intl.string(p.t.AGjtFh) : p.intl.string(p.t.dqCzoa),
    description: p.intl.format(p.t.iuNisr, {
      numChannels: b,
      numTotalChannels: x,
      channelsHook: (e, t) => (0, r.jsx)("span", {
        style: {
          color: j > 85 ? "var(--header-primary)" : "var(--status-warning)"
        },
        children: e
      }, t)
    }),
    icon: (0, r.jsx)(a.iFz, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: v,
    status: O,
    onEdit: n
  })
}

function v(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: o
  } = e, m = (0, l.e7)([u.Z], () => u.Z.getSettings()), g = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)), b = (0, c.uo)(m), x = m.enabled, j = i.useCallback(() => {
    (0, d.To)(t, !x)
  }, [t, x]), _ = !(0, c.av)(m), v = "none";
  _ && (b && !o ? v = "good" : b || (v = "required"));
  let O = p.intl.string(p.t.GMOwOD);
  b ? _ || (O = p.intl.string(p.t.wHOoyM)) : O = p.intl.string(p.t.wXFbgY);
  let y = null;
  return _ && g && (y = (0, r.jsx)(a.rsf, {
    className: f.inlineSwitch,
    checked: x,
    onChange: j,
    disabled: !b
  })), (0, r.jsx)(h, {
    title: p.intl.string(p.t.mRHqsr),
    description: O,
    icon: (0, r.jsx)(a.Vy8, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: _,
    status: v,
    onEdit: n,
    extra: y
  })
}