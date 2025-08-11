/** Chunk was on 75708 **/
/** chunk id: 335082, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695346 = require("./695346.js"),
  Chunk358085 = require("./358085.js"),
  Chunk940276 = require("./940276.js"),
  Chunk981631 = require("./981631.js"),
  Chunk726985 = require("./726985.js"),
  Chunk29953 = require("./29953.js"),
  Chunk388032 = require("./388032.js"),
  Chunk154947 = require("./154947.js");

function h(e) {
  let {
    label: t,
    sublabel: n,
    id: r,
    checked: a,
    onChange: l
  } = e;
  return <div className={g.settingSwitch}>{<label className={g.settingSwitchLabel} htmlFor={r}>{<s.X6q variant={"heading-md/semibold"}>{t}</s.X6q>}{<s.Text variant={"text-md/normal"} color={"header-secondary"}>{n}</s.Text>}</label>}{<s.rsf id={r} checked={a} onChange={l} />}</div>
}

function f() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = e => {
      l.no.updateSetting(e)
    },
    a = [{
      value: Chunk524437.GI.ACTIVITY_STATUS_ON,
      name: Chunk388032.intl.string(Chunk388032.t.UzGMHx)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: Chunk388032.intl.string(Chunk29953.default["/sAeRU"])
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_OFF,
      name: Chunk388032.intl.string(Chunk29953.default.m3oL7e)
    }];
  return <Chunk481060.hjN className={Chunk154947.formSection}><Chunk481060.y5t component={(0, Chunk255367.jsxs)("div", {
        children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
          className: Chunk154947.formTitle,
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: Chunk388032.intl.string(Chunk29953.default.TG0Qsb)
        }), (0, Chunk255367.jsx)(Chunk481060.R94, {
          className: Chunk154947.formDescription,
          type: Chunk481060.R94.Types.DESCRIPTION,
          children: Chunk388032.intl.string(Chunk29953.default.OO17Li)
        })]
      })}>{<div>{<Chunk481060.X6q className={Chunk154947.defaultSetting} variant={"heading-md/medium"} color={"header-primary"}>{Chunk388032.intl.string(Chunk29953.default["/LHVbm"])}</Chunk481060.X6q>}{<Chunk481060.FXm options={Chunk921801} value={exports} onChange={e => n(e.value)} />}</div>}{<div className={Chunk154947.myServersContainer}>{<div className={Chunk154947.myServersHeaderContainer}>{<Chunk481060.X6q className={Chunk154947.myServersTitle} variant={"heading-md/medium"} color={"header-primary"}>{Chunk388032.intl.string(Chunk388032.t.TqdOvL)}</Chunk481060.X6q>}{!module && <Chunk481060.Wn className={Chunk154947.myServersIgnoredWarning} messageType={Chunk481060.QYI.WARNING} textColor={"text-feedback-warning"}>{Chunk388032.intl.string(Chunk29953.default["xxI0/f"])}</Chunk481060.Wn>}</div>}{<Chunk940276.Z />}</div>}</Chunk481060.y5t></Chunk481060.hjN>
}

function b() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return <Chunk921801.F setting={Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE}><Chunk481060.hjN className={Chunk154947.formSection}>{<div><Chunk481060.X6q className={Chunk154947.formTitle} variant={"heading-lg/semibold"} color={"header-primary"}>{Chunk388032.intl.string(Chunk29953.default["5rYBAQ"])}</Chunk481060.X6q></div>}{<h label={Chunk388032.intl.string(Chunk29953.default.khuuzs)} sublabel={Chunk388032.intl.string(Chunk29953.default["8EWsJy"])} id={"allow-friends-to-join-my-game"} checked={module} onChange={e => l.cP.updateSetting(e)} />}{<h label={Chunk388032.intl.string(Chunk29953.default.Uz5Ipq)} sublabel={Chunk388032.intl.string(Chunk29953.default.CZI2GR)} id={"allow-vc-join-without-request"} checked={exports} onChange={e => l.Ou.updateSetting(e)} />}</Chunk481060.hjN></Chunk921801.F>
}

function x() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk29953.default.UQ9RHB) : Chunk388032.intl.string(Chunk388032.t.oKqC4u);
  return <Chunk921801.F setting={Chunk726985.s6.ACTIVITY_PRIVACY_STATUS}><Chunk481060.hjN className={Chunk154947.formSection}>{<div><Chunk481060.R94 className={Chunk154947.formDescription} type={Chunk481060.R94.Types.DESCRIPTION}>{Chunk388032.intl.string(Chunk29953.default.t2Ysra)}</Chunk481060.R94></div>}{<div className={Chunk154947.switchContainer}><h label={Chunk388032.intl.string(Chunk29953.default.WhdCGB)} sublabel={exports} id={"share-my-activity"} checked={module} onChange={Chunk695346.G6.updateSetting} /></div>}</Chunk481060.hjN></Chunk921801.F>
}

function _() {
  return <Chunk921801.F setting={Chunk726985.s6.ACTIVITY_PRIVACY_TOS}><Chunk481060.hjN><Chunk481060.ToO type={Chunk481060.ToO.Types.PRIMARY} body={Chunk388032.intl.format(Chunk388032.t.xvCsx8, {
          termsLink: Chunk981631.EYA.TERMS,
          privacyLink: Chunk981631.EYA.PRIVACY
        })} /></Chunk481060.hjN></Chunk921801.F>
}
let j = function(e) {
  let {
    className: t
  } = e;
  return <s.hjN className={t}><s.y5t forceLevel={1} component={(0, i.jsx)(s.X6q, {
        className: g.formTitle,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: p.intl.string(p.t.Cq98yM)
      })}>{<x />}{<s.$i$ className={g.divider} />}{<f />}{<s.$i$ className={g.divider} />}{<b />}{<s.$i$ className={g.divider} />}{<_ />}</s.y5t></s.hjN>
}