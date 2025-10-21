/** Chunk was on 64982 **/
/** chunk id: 677892, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  $$: () => x,
  P_: () => _,
  ap: () => v,
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
          children: p.intl.string(p.t.rPnzRf)
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
          children: p.intl.string(p.t["yTa+di"])
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
        children: [(0, r.jsx)(a.Heading, {
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
        children: s ? (0, r.jsx)(a.Button, {
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: p.intl.string(p.t.bt75uw)
        }) : (0, r.jsx)(a.Button, {
          icon: a.ZSh,
          iconPosition: "end",
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: p.intl.string(p.t["0GWElc"])
        })
      })]
    })]
  })
}

function b(e) {
  let t = (0, l.e7)([s.Z], () => s.Z.getDefaultChannelIds(e)),
    n = i.useMemo(() => new Set(t), [t]),
    [r, a] = (0, o.VF)(e, n);
  return a.length >= m.md && r.length >= m.X
}

function x(e) {
  let t = b(e),
    n = (0, g.O4)(e);
  return t || n
}

function j(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: c
  } = e, d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)), u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length), x = i.useMemo(() => new Set(d), [d]), [, j] = (0, o.VF)(t, x), v = j.length, _ = b(t), C = (0, g.O4)(t), O = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)), y = O ? p.intl.formatToPlainString(p.t.nHwnLK, {
    numDefaultChannels: v,
    numFromQuestions: u - v
  }) : _ ? p.intl.formatToPlainString(p.t.HxEwSv, {
    numDefaultChannels: v
  }) : p.intl.formatToPlainString(p.t.ey3uVZ, {
    numDefaultChannels: m.md,
    numChattableChannels: m.X
  });
  return (0, r.jsx)(h, {
    title: O ? p.intl.string(p.t.YZookV) : p.intl.string(p.t["4GSygh"]),
    description: y,
    icon: (0, r.jsx)(a.VL1, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: v > 0 || O,
    status: _ || C ? c ? "none" : "good" : "required",
    onEdit: n
  })
}

function v(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: i
  } = e, c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)), d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)), u = d.length, [g, m] = (0, o.dF)(t, d, c), b = g.length, x = g.length + m.length, j = b / x * 100, v = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)), _ = u > 0, C = "none";
  return _ && (j >= 85 && !i ? C = "good" : j < 85 && (C = "warning")), (0, r.jsx)(h, {
    title: v ? p.intl.string(p.t.AGjtFv) : p.intl.string(p.t.dqCzoT),
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
    hasStarted: _,
    status: C,
    onEdit: n
  })
}

function _(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: o
  } = e, g = (0, l.e7)([u.Z], () => u.Z.getSettings()), m = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)), b = (0, c.uo)(g), x = g.enabled, j = i.useCallback(() => {
    (0, d.To)(t, !x)
  }, [t, x]), v = !(0, c.av)(g), _ = "none";
  v && (b && !o ? _ = "good" : b || (_ = "required"));
  let C = p.intl.string(p.t.GMOwOD);
  b ? v || (C = p.intl.string(p.t.wHOoyE)) : C = p.intl.string(p.t.wXFbgZ);
  let O = null;
  return v && m && (O = (0, r.jsx)("div", {
    className: f.inlineSwitch,
    children: (0, r.jsx)(a.rsf, {
      checked: x,
      onChange: j,
      disabled: !b
    })
  })), (0, r.jsx)(h, {
    title: p.intl.string(p.t.mRHqsj),
    description: C,
    icon: (0, r.jsx)(a.Vy8, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: v,
    status: _,
    onEdit: n,
    extra: O
  })
}