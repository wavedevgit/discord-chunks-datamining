/** Chunk was on 75708 **/
/** chunk id: 309739, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  o = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk524437 = require("./524437.js"),
  Chunk780384 = require("./780384.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk457330 = require("./457330.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk316496 = require("./316496.js"),
  Chunk116841 = require("./116841.js"),
  Chunk335082 = require("./335082.js"),
  Chunk921801 = require("./921801.js"),
  Chunk553795 = require("./553795.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk362352 = require("./362352.js"),
  Chunk413182 = require("./413182.js"),
  Chunk695346 = require("./695346.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk187382 = require("./187382.js"),
  Chunk20493 = require("./20493.js");

function D(e) {
  let t = () => {
    I.SE.updateSetting(e ? C.Z.getGuildIds() : [])
  };
  (0, p.h7j)(e => {
    var n, r;
    return <p.ConfirmModal{...n = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          var i;
          i = n[t], t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = i
        })
      }
      return e
    }({
      header: A.intl.string(A.t["uUr+GR"]),
      confirmText: A.intl.string(A.t.gm1Ven),
      cancelText: A.intl.string(A.t.p89ACg),
      onCancel: t,
      confirmButtonColor: m.zx.Colors.BRAND
    }, e), r = r = {
      children: (0, i.jsx)(p.Text, {
        variant: "text-md/normal",
        children: A.intl.string(A.t.EFu2Ki)
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(r)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
    }), n} />
  })
}

function Z() {
  let e = Chunk695346.G6.useSetting(),
    t = Chunk695346.no.useSetting(),
    n = (0, Chunk362352.Yd)("activity privacy tab"),
    r = Chunk358085.isPlatformEmbedded ? Chunk388032.intl.string(Chunk388032.t.MznbeH) : Chunk388032.intl.string(Chunk388032.t.oKqC4u),
    s = e => {
      I.no.updateSetting(e ? d.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS : d.GI.ACTIVITY_STATUS_OFF), D(e)
    },
    l = e => {
      I.no.updateSetting(e), D(e !== d.GI.ACTIVITY_STATUS_OFF)
    },
    o = [{
      value: Chunk524437.GI.ACTIVITY_STATUS_ON,
      label: Chunk388032.intl.string(Chunk388032.t.UzGMHx)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      label: Chunk388032.intl.string(Chunk388032.t.OFqxQU)
    }, {
      value: Chunk524437.GI.ACTIVITY_STATUS_OFF,
      label: Chunk388032.intl.string(Chunk388032.t.MIgNPD)
    }];
  return <Chunk921801.F setting={Chunk726985.s6.ACTIVITY_PRIVACY_STATUS}><Chunk481060.hjN>{<Chunk481060.vwX tag={Chunk481060.RB0.H5} className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t["8ka8lp"])}</Chunk481060.vwX>}{<Chunk481060.j7V value={module} onChange={e => I.G6.updateSetting(e)} note={Chunk73800}>{Chunk388032.intl.string(Chunk388032.t["4q/Ewc"])}</Chunk481060.j7V>}{require ? <Chunk255367.Fragment>{<Chunk481060.xJW tag={Chunk481060.RB0.H3} title={Chunk388032.intl.string(Chunk388032.t.ffGYGx)}>{<Chunk481060.Text variant={"text-sm/normal"} color={"header-secondary"} className={Chunk20493.marginBottom8}>{Chunk388032.intl.format(Chunk388032.t.aUxRra, {
              helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.ACTIVITY_STATUS_SETTINGS)
            })}</Chunk481060.Text>}{<Chunk481060.q4e options={o} value={exports} onChange={e => l(e)} />}</Chunk481060.xJW>}{<Chunk481060.$i$ className={a()(Chunk20493.marginBottom20, Chunk20493.marginTop20)} />}</Chunk255367.Fragment> : <Chunk481060.j7V value={exports === Chunk524437.GI.ACTIVITY_STATUS_OFF} note={Chunk388032.intl.format(Chunk388032.t["+5/xu7"], {
          helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.ACTIVITY_STATUS_SETTINGS)
        })} onChange={e => s(!e)}>{Chunk388032.intl.string(Chunk388032.t.D5GXTU)}</Chunk481060.j7V>}</Chunk481060.hjN></Chunk921801.F>
}

function w() {
  let e = Chunk695346.cP.useSetting(),
    t = Chunk695346.Ou.useSetting();
  return <Chunk921801.F setting={Chunk726985.s6.ACTIVITY_PRIVACY_RICH_PRESENCE}><Chunk481060.hjN className={Chunk20493.marginBottom40}>{<Chunk481060.vwX tag={Chunk481060.RB0.H5} className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t.VOszPD)}</Chunk481060.vwX>}{<Chunk481060.j7V value={module} note={Chunk388032.intl.string(Chunk388032.t.Hdh7sb)} onChange={e => I.cP.updateSetting(e)}>{Chunk388032.intl.string(Chunk388032.t.WEWQQk)}</Chunk481060.j7V>}{<Chunk481060.j7V value={exports} note={Chunk388032.intl.string(Chunk388032.t.Czr3Bg)} onChange={e => I.Ou.updateSetting(e)}>{Chunk388032.intl.string(Chunk388032.t.UUvJVl)}</Chunk481060.j7V>}</Chunk481060.hjN></Chunk921801.F>
}

function k() {
  return <Chunk921801.F setting={Chunk726985.s6.ACTIVITY_PRIVACY_TOS}><Chunk481060.hjN className={Chunk20493.marginBottom40}><Chunk481060.ToO type={Chunk481060.ToO.Types.PRIMARY} body={Chunk388032.intl.format(Chunk388032.t.xvCsx8, {
          termsLink: Chunk981631.EYA.TERMS,
          privacyLink: Chunk981631.EYA.PRIVACY
        })} /></Chunk481060.hjN></Chunk921801.F>
}
let L = e => {
  switch (e.type) {
    case y.ABu.SPOTIFY:
      return A.intl.format(A.t["5sYPnp"], {
        name: e.name
      });
    case y.ABu.CRUNCHYROLL:
      return A.intl.format(A.t.Ge29Z2, {
        name: e.name
      });
    default:
      return A.intl.format(A.t.nmMsys, {
        game: e.name
      })
  }
};

function M(e) {
  let {
    account: t
  } = e, [n, s] = r.useState(t.showActivity), a = (0, h.ZP)();
  r.useEffect(() => {
    s(t.showActivity)
  }, [t]);
  let l = f.Z.get(t.type);
  return <i.Fragment>{<p.j7V className={P.switchRowContainer} hideBorder={true} value={n} onChange={function(e) {
        s(e), g.Z.setShowActivity(t.type, t.id, e)
      }}><div className={P.activitySwitchRow}>{<img alt={l.name} className={P.connectionIcon} src={(0, u.wj)(a) ? l.icon.darkSVG : l.icon.lightSVG} />}{<div>{<p.Text variant={"text-md/semibold"}>{l.name}</p.Text>}{<p.Text variant={"text-sm/normal"} color={"text-muted"}>{'"'}{L(l)}{'"'}</p.Text>}</div>}</div></p.j7V>}{<div className={P.divider} />}</i.Fragment>
}

function B() {
  let e = (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccounts()),
    t = Chunk73800.useMemo(() => module.filter(e => f.Z.isSupported(e.type) && y.vbS.has(e.type)), [module]),
    [n, s] = Chunk73800.useState(""),
    a = Chunk73800.useMemo(() => {
      let e = require.trim().toLowerCase();
      return "" === module ? exports : exports.filter(t => o()(e, f.Z.get(t.type).name.toLowerCase()))
    }, [exports, require]);
  return 0 === exports.length ? null : <Chunk921801.F setting={Chunk726985.s6.ACTIVITY_PRIVACY_STATUS_DISPLAY}><Chunk481060.hjN className={Chunk20493.marginBottom40}>{<Chunk481060.vwX tag={Chunk481060.RB0.H5} className={Chunk20493.marginBottom8}>{Chunk388032.intl.string(Chunk388032.t["4F2KoK"])}</Chunk481060.vwX>}{<Chunk755721.Is className={Chunk187382.searchInput} value={require} onChange={Chunk120356} placeholder={Chunk388032.intl.string(Chunk388032.t.WPrtoa)} />}{a.map(e => <M account={e} />)}</Chunk481060.hjN></Chunk921801.F>
}

function U(e) {
  let {
    className: t,
    showHeader: n = true
  } = e, {
    showRedesign: r
  } = T.b.useExperiment({
    location: "activity privacy tab"
  }), {
    showPerGuildActivityStatusSetting: s
  } = (0, x.c)("activity privacy tab"), {
    showUpdatedSettingsPage: a
  } = (0, b.D)("activity privacy tab");
  return s || a ? <_.Z /> : <p.hjN className={t} tag={p.RB0.H1} title={n ? A.intl.string(A.t.Cq98yM) : null}>{<Z />}{<w />}{<k />}{r && <B />}</p.hjN>
}