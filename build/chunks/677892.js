/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  $$: () => C,
  P_: () => x,
  ap: () => v,
  ku: () => b
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(45966),
  o = n(637853),
  A = n(734893),
  c = n(8426),
  d = n(969632),
  u = n(974513),
  g = n(290511),
  f = n(388032),
  m = n(702534);

function p(e) {
  let t, {
    title: n,
    description: i,
    icon: s,
    hasStarted: l,
    status: o,
    onEdit: A,
    extra: c
  } = e;
  switch (o) {
    case "good":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.dz2, {
          size: "xs",
          color: "currentColor",
          className: m.checkmark
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-positive",
          className: m.statusText,
          children: f.NW.string(f.t.rPnzRU)
        })]
      });
      break;
    case "warning":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.P4T, {
          size: "xs",
          color: "currentColor",
          className: m.warning
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-warning",
          className: m.statusText,
          children: f.NW.string(f.t["yTa+dn"])
        })]
      });
      break;
    case "required":
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.P4T, {
          size: "xs",
          color: "currentColor",
          className: m.danger
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/semibold",
          color: "status-danger",
          className: m.statusText,
          children: f.NW.string(f.t.EkokLy)
        })]
      })
  }
  return (0, r.jsxs)("div", {
    className: m.onboardingStepContainer,
    children: [(0, r.jsxs)("div", {
      className: m.leftContainer,
      children: [(0, r.jsx)("div", {
        className: m.iconContainer,
        children: s
      }), (0, r.jsxs)("div", {
        className: m.onboardingStepText,
        children: [(0, r.jsx)(a.X6q, {
          variant: "heading-md/semibold",
          children: n
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: l && "required" === o ? "status-danger" : "text-normal",
          children: i
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: m.rightContainer,
      children: [t, c, l ? (0, r.jsx)(a.zxk, {
        className: m.cta,
        size: a.zxk.Sizes.SMALL,
        color: a.zxk.Colors.PRIMARY,
        look: a.zxk.Looks.OUTLINED,
        onClick: A,
        children: f.NW.string(f.t.bt75u7)
      }) : (0, r.jsxs)(a.zxk, {
        className: m.cta,
        innerClassName: m.ctaInner,
        size: a.zxk.Sizes.SMALL,
        color: a.zxk.Colors.PRIMARY,
        onClick: A,
        children: [f.NW.string(f.t["0GWElZ"]), (0, r.jsx)(a.ZSh, {
          size: "xxs",
          color: "currentColor"
        })]
      })]
    })]
  })
}

function h(e) {
  let t = (0, s.e7)([l.Z], () => l.Z.getDefaultChannelIds(e)),
    n = i.useMemo(() => new Set(t), [t]),
    [r, a] = (0, o.VF)(e, n);
  return a.length >= g.md && r.length >= g.X
}

function C(e) {
  let t = h(e),
    n = (0, u.O4)(e);
  return t || n
}

function b(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: A
  } = e, c = (0, s.Wu)([l.Z], () => l.Z.getDefaultChannelIds(t)), d = (0, s.e7)([l.Z], () => (0, o.kl)(t, l.Z.getDefaultChannelIds(t), l.Z.getOnboardingPrompts(t)).length), C = i.useMemo(() => new Set(c), [c]), [, b] = (0, o.VF)(t, C), v = b.length, x = h(t), N = (0, u.O4)(t), j = (0, s.e7)([l.Z], () => l.Z.isAdvancedMode(t)), E = j ? f.NW.formatToPlainString(f.t.nHwnLC, {
    numDefaultChannels: v,
    numFromQuestions: d - v
  }) : x ? f.NW.formatToPlainString(f.t.HxEwSk, {
    numDefaultChannels: v
  }) : f.NW.formatToPlainString(f.t.ey3uVV, {
    numDefaultChannels: g.md,
    numChattableChannels: g.X
  });
  return (0, r.jsx)(p, {
    title: j ? f.NW.string(f.t.YZookZ) : f.NW.string(f.t["4GSygo"]),
    description: E,
    icon: (0, r.jsx)(a.VL1, {
      size: "md",
      color: "currentColor",
      className: m.channelIcon
    }),
    hasStarted: v > 0 || j,
    status: x || N ? A ? "none" : "good" : "required",
    onEdit: n
  })
}

function v(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: i
  } = e, A = (0, s.Wu)([l.Z], () => l.Z.getDefaultChannelIds(t)), c = (0, s.Wu)([l.Z], () => l.Z.getOnboardingPrompts(t)), d = c.length, [u, g] = (0, o.dF)(t, c, A), h = u.length, C = u.length + g.length, b = h / C * 100, v = (0, s.e7)([l.Z], () => l.Z.isAdvancedMode(t)), x = d > 0, N = "none";
  return x && (b >= 85 && !i ? N = "good" : b < 85 && (N = "warning")), (0, r.jsx)(p, {
    title: v ? f.NW.string(f.t.AGjtFh) : f.NW.string(f.t.dqCzoa),
    description: f.NW.format(f.t.iuNisr, {
      numChannels: h,
      numTotalChannels: C,
      channelsHook: (e, t) => (0, r.jsx)("span", {
        style: {
          color: b > 85 ? "var(--header-primary)" : "var(--status-warning)"
        },
        children: e
      }, t)
    }),
    icon: (0, r.jsx)(a.iFz, {
      size: "md",
      color: "currentColor",
      className: m.channelIcon
    }),
    hasStarted: x,
    status: N,
    onEdit: n
  })
}

function x(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: o
  } = e, u = (0, s.e7)([d.Z], () => d.Z.getSettings()), g = (0, s.e7)([l.Z], () => l.Z.getEnabled(t)), h = (0, A.uo)(u), C = u.enabled, b = i.useCallback(() => {
    (0, c.To)(t, !C)
  }, [t, C]), v = !(0, A.av)(u), x = "none";
  v && (h && !o ? x = "good" : h || (x = "required"));
  let N = f.NW.string(f.t.GMOwOD);
  h ? v || (N = f.NW.string(f.t.wHOoyM)) : N = f.NW.string(f.t.wXFbgY);
  let j = null;
  return v && g && (j = (0, r.jsx)(a.rsf, {
    className: m.inlineSwitch,
    checked: C,
    onChange: b,
    disabled: !h
  })), (0, r.jsx)(p, {
    title: f.NW.string(f.t.mRHqsr),
    description: N,
    icon: (0, r.jsx)(a.Vy8, {
      size: "md",
      color: "currentColor",
      className: m.channelIcon
    }),
    hasStarted: v,
    status: x,
    onEdit: n,
    extra: j
  })
}