/** Chunk was on 22988 **/
/** chunk id: 729995, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk2052 = require("./2052.js"),
  Chunk367907 = require("./367907.js"),
  Chunk45966 = require("./45966.js"),
  Chunk734893 = require("./734893.js"),
  Chunk661824 = require("./661824.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk983135 = require("./983135.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk570961 = require("./570961.js"),
  Chunk84658 = require("./84658.js"),
  Chunk974513 = require("./974513.js"),
  Chunk677892 = require("./677892.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk276 = require("./276.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e) {
  let {
    guildId: t,
    completed: n
  } = e, l = (0, i.e7)([o.Z], () => o.Z.getEnabled(t)), {
    location: c
  } = (0, a.O)();
  c.object = n ? v.qAy.ONBOARDING_EDIT : v.qAy.ONBOARDING_REVIEW;
  let u = async function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    l ? (await (0, f.$y)(t, false), m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, C(y({}, (0, s.hH)(t)), {
      action_taken: b.W$[b.W$.TOGGLE_DISABLED],
      location: c
    }))) : (await (0, f.$y)(t, true), e && (0, p.To)(t, true), n ? m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, C(y({}, (0, s.hH)(t)), {
      action_taken: b.W$[b.W$.TOGGLE_ENABLED],
      location: c
    })) : m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, C(y({}, (0, s.hH)(t)), {
      step: b.PG[b.PG.REVIEW],
      back: false,
      skip: false,
      completed: true
    })))
  }, h = () => {
    m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, C(y({}, (0, s.hH)(t)), {
      action_taken: b.W$[b.W$.PREVIEW],
      location: c
    })), (0, g.di)(t)
  }, x = <r.Fragment>{<j.ku guildId={t} onEdit={() => {
        m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, C(y({}, (0, s.hH)(t)), {
          action_taken: b.W$[b.W$.EDIT_DEFAULT_CHANNELS],
          location: c
        })), (0, g.$K)(b.PG.DEFAULT_CHANNELS)
      }} disableGoodStatus={n} />}{<d.Z className={O.divider} />}{<j.ap guildId={t} onEdit={() => {
        m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, C(y({}, (0, s.hH)(t)), {
          action_taken: b.W$[b.W$.EDIT_CUSTOMIZATION_QUESTIONS],
          location: c
        })), (0, g.$K)(b.PG.CUSTOMIZATION_QUESTIONS)
      }} disableGoodStatus={n} />}{<d.Z className={O.divider} />}{<j.P_ guildId={t} onEdit={() => {
        m.default.track(v.rMx.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, C(y({}, (0, s.hH)(t)), {
          action_taken: b.W$[b.W$.EDIT_HOME_SETTINGS],
          location: c
        })), (0, g.$K)(b.PG.HOME_SETTINGS)
      }} disableGoodStatus={n} />}</r.Fragment>;
  return n ? <r.Fragment>{<I guildId={t} handlePreview={h} />}{<E />}{<div className={O.content}>{<S guildId={t} handleOnboardingToggle={u} />}{x}</div>}</r.Fragment> : <r.Fragment>{<div className={O.content}>{<T guildId={t} handleOnboardingToggle={u} handlePreview={h} />}{x}</div>}{<P guildId={t} />}</r.Fragment>
}

function I(e) {
  let {
    guildId: t,
    handlePreview: n
  } = e;
  return <r.Fragment>{<l.X6q variant={"heading-lg/semibold"} color={"header-primary"} className={O.header}>{_.intl.string(_.t.mhxUsL)}</l.X6q>}{<l.Text variant={"text-md/normal"} color={"header-secondary"} className={O.subheader}>{_.intl.string(_.t.GtWdQE)}</l.Text>}{<div className={O.help}>{<l.eee target={"_blank"} href={v.EYA.GUILD_ONBOARDING_EXAMPLES}><l.Text variant={"text-sm/medium"} color={"text-link"}>{_.intl.string(_.t.Ok55Ki)}</l.Text></l.eee>}{<div className={O.helpSeparator} />}{<l.eee onClick={n}><l.Text variant={"text-sm/medium"} color={"text-link"}>{_.intl.string(_.t["6gsjdH"])}</l.Text></l.eee>}{<div className={O.helpSeparator} />}{<x.Wu guildId={t} />}</div>}</r.Fragment>
}

function E() {
  let e = "• ";
  return <div className={Chunk276.notice}>{<img className={Chunk276.wumpus} src={require("./33631.js")} alt={"wumpus"} />}{<div>{<Chunk481060.X6q variant={"heading-md/semibold"} color={"header-primary"} className={Chunk276.header}>{Chunk388032.intl.string(Chunk388032.t.WslWRE)}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/medium"} color={"header-secondary"}>{module}{Chunk388032.intl.string(Chunk388032.t.z9k21N)}</Chunk481060.Text>}{<Chunk481060.Text variant={"text-sm/medium"} color={"header-secondary"}>{module}{Chunk388032.intl.string(Chunk388032.t.t1LelZ)}</Chunk481060.Text>}</div>}</div>
}

function S(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n
  } = e, a = (0, j.$$)(t), s = (0, i.e7)([o.Z], () => o.Z.getEnabled(t));
  return <div className={O.review}>{<div className={O.reviewHeaderText}>{<l.X6q variant={"heading-md/semibold"}>{s ? _.intl.string(_.t.MBdTCQ) : _.intl.string(_.t.Wslim5)}</l.X6q>}{<l.Text variant={"text-xs/normal"} color={"text-muted"}>{s ? _.intl.string(_.t.LokpLi) : _.intl.string(_.t.nBIyJi)}</l.Text>}</div>}{<l.rsf checked={s} onChange={() => n(false)} disabled={!s && !a} />}</div>
}

function T(e) {
  let {
    guildId: t,
    handleOnboardingToggle: n,
    handlePreview: a
  } = e, s = (0, j.$$)(t), o = (0, i.e7)([h.Z], () => h.Z.getSettings()), d = (0, c.uo)(o);
  return <div className={O.reviewHeader}>{<div className={O.reviewHeaderText}>{<l.X6q variant={"heading-md/semibold"}>{s ? _.intl.string(_.t.FcIcT0) : _.intl.string(_.t.R09tJy)}</l.X6q>}{<l.Text variant={"text-xs/normal"}>{s ? _.intl.string(_.t.ockHVV) : _.intl.string(_.t["u/ji09"])}</l.Text>}</div>}{<div className={O.reviewActions}>{<l.zxk size={"sm"} variant={"secondary"} onClick={a} text={_.intl.string(_.t["6gsjdH"])} />}{<l.zxk variant={"primary"} size={"sm"} text={_.intl.string(_.t.Yz7hsL)} onClick={() => n(d)} disabled={!s} />}</div>}</div>
}

function P(e) {
  let {
    guildId: t
  } = e, n = (0, i.e7)([u.Z], () => u.Z.getGuild(t));
  return null == n || n.verificationLevel < v.sFg.VERY_HIGH ? null : <div className={O.rolesWarning}>{<l.Mgn size={"xs"} color={"currentColor"} className={O.warningIcon} />}{<l.Text variant={"text-sm/medium"} color={"text-muted"}>{_.intl.string(_.t.HVoKZ2)}</l.Text>}</div>
}