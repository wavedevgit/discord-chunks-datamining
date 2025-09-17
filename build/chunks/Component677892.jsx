/** Chunk was on 70830 **/
/** chunk id: 677892, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $$: () => j,
  P_: () => O,
  ap: () => _,
  ku: () => v
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk376933 = require("./376933.js");

function b(e) {
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
        children: [(0, r.jsx)(s.dz2, {
          size: "xs",
          color: "currentColor",
          className: f.checkmark
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "status-positive",
          className: f.statusText,
          children: h.intl.string(h.t.rPnzRU)
        })]
      });
      break;
    case "warning":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Mgn, {
          size: "xs",
          color: "currentColor",
          className: f.warning
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "status-warning",
          className: f.statusText,
          children: h.intl.string(h.t["yTa+dn"])
        })]
      });
      break;
    case "required":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(s.Mgn, {
          size: "xs",
          color: "currentColor",
          className: f.danger
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/semibold",
          color: "status-danger",
          className: f.statusText,
          children: h.intl.string(h.t.EkokLy)
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
        children: [(0, r.jsx)(s.X6q, {
          variant: "heading-md/semibold",
          children: n
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: a && "required" === o ? "status-danger" : "text-default",
          children: i
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: f.rightContainer,
      children: [t, d, (0, r.jsx)("div", {
        className: f.cta,
        children: a ? (0, r.jsx)(s.zxk, {
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: h.intl.string(h.t.bt75u7)
        }) : (0, r.jsx)(s.zxk, {
          icon: s.ZSh,
          iconPosition: "end",
          size: "sm",
          variant: "secondary",
          onClick: c,
          text: h.intl.string(h.t["0GWElZ"])
        })
      })]
    })]
  })
}

function x(e) {
  let t = (0, l.e7)([o.Z], () => o.Z.getDefaultChannelIds(e)),
    n = i.useMemo(() => new Set(t), [t]),
    [r, a] = (0, c.VF)(e, n);
  return a.length >= p.md && r.length >= p.X
}

function j(e) {
  let t = x(e),
    n = (0, g.O4)(e);
  return t || n
}

function v(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: a
  } = e, d = (0, l.Wu)([o.Z], () => o.Z.getDefaultChannelIds(t)), u = (0, l.e7)([o.Z], () => (0, c.kl)(t, o.Z.getDefaultChannelIds(t), o.Z.getOnboardingPrompts(t)).length), m = i.useMemo(() => new Set(d), [d]), [, j] = (0, c.VF)(t, m), v = j.length, _ = x(t), O = (0, g.O4)(t), y = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)), C = y ? h.intl.formatToPlainString(h.t.nHwnLC, {
    numDefaultChannels: v,
    numFromQuestions: u - v
  }) : _ ? h.intl.formatToPlainString(h.t.HxEwSk, {
    numDefaultChannels: v
  }) : h.intl.formatToPlainString(h.t.ey3uVV, {
    numDefaultChannels: p.md,
    numChattableChannels: p.X
  });
  return (0, r.jsx)(b, {
    title: y ? h.intl.string(h.t.YZookZ) : h.intl.string(h.t["4GSygo"]),
    description: C,
    icon: (0, r.jsx)(s.VL1, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: v > 0 || y,
    status: _ || O ? a ? "none" : "good" : "required",
    onEdit: n
  })
}

function _(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: i
  } = e, a = (0, l.Wu)([o.Z], () => o.Z.getDefaultChannelIds(t)), d = (0, l.Wu)([o.Z], () => o.Z.getOnboardingPrompts(t)), u = d.length, [m, g] = (0, c.dF)(t, d, a), p = m.length, x = m.length + g.length, j = p / x * 100, v = (0, l.e7)([o.Z], () => o.Z.isAdvancedMode(t)), _ = u > 0, O = "none";
  return _ && (j >= 85 && !i ? O = "good" : j < 85 && (O = "warning")), (0, r.jsx)(b, {
    title: v ? h.intl.string(h.t.AGjtFh) : h.intl.string(h.t.dqCzoa),
    description: h.intl.format(h.t.iuNisr, {
      numChannels: p,
      numTotalChannels: x,
      channelsHook: (e, t) => (0, r.jsx)("span", {
        style: {
          color: j > 85 ? "var(--header-primary)" : "var(--status-warning)"
        },
        children: e
      }, t)
    }),
    icon: (0, r.jsx)(s.iFz, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: _,
    status: O,
    onEdit: n
  })
}

function O(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: c
  } = e, g = (0, l.e7)([m.Z], () => m.Z.getSettings()), p = (0, l.e7)([o.Z], () => o.Z.getEnabled(t)), x = (0, d.uo)(g), j = g.enabled, v = i.useCallback(() => {
    (0, u.To)(t, !j)
  }, [t, j]), _ = !(0, d.av)(g), O = "none";
  _ && (x && !c ? O = "good" : x || (O = "required"));
  let y = h.intl.string(h.t.GMOwOD);
  x ? _ || (y = h.intl.string(h.t.wHOoyM)) : y = h.intl.string(h.t.wXFbgY);
  let C = null;
  return _ && p && (C = (0, r.jsx)("div", {
    className: f.inlineSwitch,
    children: (0, r.jsx)(a.T2, {
      checked: j,
      onChange: v,
      disabled: !x
    })
  })), (0, r.jsx)(b, {
    title: h.intl.string(h.t.mRHqsr),
    description: y,
    icon: (0, r.jsx)(s.Vy8, {
      size: "md",
      color: "currentColor",
      className: f.channelIcon
    }),
    hasStarted: _,
    status: O,
    onEdit: n,
    extra: C
  })
}