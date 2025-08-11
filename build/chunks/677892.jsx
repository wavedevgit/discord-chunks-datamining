/** Chunk was on 22988 **/
/** chunk id: 677892, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $$: () => x,
  P_: () => _,
  ap: () => v,
  ku: () => j
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk734893 = require("./734893.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk974513 = require("./974513.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk271254 = require("./271254.js");

function f(e) {
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
      t = <r.Fragment>{<a.dz2 size={"xs"} color={"currentColor"} className={h.checkmark} />}{<a.Text variant={"text-xs/semibold"} color={"status-positive"} className={h.statusText}>{p.intl.string(p.t.rPnzRU)}</a.Text>}</r.Fragment>;
      break;
    case "warning":
      t = <r.Fragment>{<a.Mgn size={"xs"} color={"currentColor"} className={h.warning} />}{<a.Text variant={"text-xs/semibold"} color={"status-warning"} className={h.statusText}>{p.intl.string(p.t["yTa+dn"])}</a.Text>}</r.Fragment>;
      break;
    case "required":
      t = <r.Fragment>{<a.Mgn size={"xs"} color={"currentColor"} className={h.danger} />}{<a.Text variant={"text-xs/semibold"} color={"status-danger"} className={h.statusText}>{p.intl.string(p.t.EkokLy)}</a.Text>}</r.Fragment>
  }
  return <div className={h.onboardingStepContainer}>{<div className={h.leftContainer}>{<div className={h.iconContainer}>{l}</div>}{<div className={h.onboardingStepText}>{<a.X6q variant={"heading-md/semibold"}>{n}</a.X6q>}{<a.Text variant={"text-xs/normal"} color={s && "required" === o ? "status-danger" : "text-default"}>{i}</a.Text>}</div>}</div>}{<div className={h.rightContainer}>{t}{d}{<div className={h.cta}>{s ? (0, r.jsx)(a.zxk, {
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
        })}</div>}</div>}</div>
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
  } = e, d = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)), u = (0, l.e7)([s.Z], () => (0, o.kl)(t, s.Z.getDefaultChannelIds(t), s.Z.getOnboardingPrompts(t)).length), x = i.useMemo(() => new Set(d), [d]), [, j] = (0, o.VF)(t, x), v = j.length, _ = b(t), O = (0, m.O4)(t), y = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)), C = y ? p.intl.formatToPlainString(p.t.nHwnLC, {
    numDefaultChannels: v,
    numFromQuestions: u - v
  }) : _ ? p.intl.formatToPlainString(p.t.HxEwSk, {
    numDefaultChannels: v
  }) : p.intl.formatToPlainString(p.t.ey3uVV, {
    numDefaultChannels: g.md,
    numChattableChannels: g.X
  });
  return <f title={y ? p.intl.string(p.t.YZookZ) : p.intl.string(p.t["4GSygo"])} description={C} icon={(0, r.jsx)(a.VL1, {
      size: "md",
      color: "currentColor",
      className: h.channelIcon
    })} hasStarted={v > 0 || y} status={_ || O ? c ? "none" : "good" : "required"} onEdit={n} />
}

function v(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: i
  } = e, c = (0, l.Wu)([s.Z], () => s.Z.getDefaultChannelIds(t)), d = (0, l.Wu)([s.Z], () => s.Z.getOnboardingPrompts(t)), u = d.length, [m, g] = (0, o.dF)(t, d, c), b = m.length, x = m.length + g.length, j = b / x * 100, v = (0, l.e7)([s.Z], () => s.Z.isAdvancedMode(t)), _ = u > 0, O = "none";
  return _ && (j >= 85 && !i ? O = "good" : j < 85 && (O = "warning")), <f title={v ? p.intl.string(p.t.AGjtFh) : p.intl.string(p.t.dqCzoa)} description={p.intl.format(p.t.iuNisr, {
      numChannels: b,
      numTotalChannels: x,
      channelsHook: (e, t) => (0, r.jsx)("span", {
        style: {
          color: j > 85 ? "var(--header-primary)" : "var(--status-warning)"
        },
        children: e
      }, t)
    })} icon={(0, r.jsx)(a.iFz, {
      size: "md",
      color: "currentColor",
      className: h.channelIcon
    })} hasStarted={_} status={O} onEdit={n} />
}

function _(e) {
  let {
    guildId: t,
    onEdit: n,
    disableGoodStatus: o
  } = e, m = (0, l.e7)([u.Z], () => u.Z.getSettings()), g = (0, l.e7)([s.Z], () => s.Z.getEnabled(t)), b = (0, c.uo)(m), x = m.enabled, j = i.useCallback(() => {
    (0, d.To)(t, !x)
  }, [t, x]), v = !(0, c.av)(m), _ = "none";
  v && (b && !o ? _ = "good" : b || (_ = "required"));
  let O = p.intl.string(p.t.GMOwOD);
  b ? v || (O = p.intl.string(p.t.wHOoyM)) : O = p.intl.string(p.t.wXFbgY);
  let y = null;
  return v && g && (y = <a.rsf className={h.inlineSwitch} checked={x} onChange={j} disabled={!b} />), <f title={p.intl.string(p.t.mRHqsr)} description={O} icon={(0, r.jsx)(a.Vy8, {
      size: "md",
      color: "currentColor",
      className: h.channelIcon
    })} hasStarted={v} status={_} onEdit={n} extra={y} />
}