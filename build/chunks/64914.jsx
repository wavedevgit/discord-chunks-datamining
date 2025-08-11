/** Chunk was on 75708 **/
/** chunk id: 64914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk401430 = require("./401430.js"),
  Chunk100527 = require("./100527.js"),
  Chunk415439 = require("./415439.js"),
  Chunk956097 = require("./956097.js"),
  Chunk921801 = require("./921801.js"),
  Chunk695103 = require("./695103.js"),
  Chunk998502 = require("./998502.js"),
  Chunk740492 = require("./740492.js"),
  Chunk695346 = require("./695346.js"),
  Chunk494620 = require("./494620.js"),
  Chunk399970 = require("./399970.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk40713 = require("./40713.js");

function C(e) {
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
}

function O() {
  let [e] = Chunk73800.useState(() => Chunk998502.ZP.getEnableHardwareAcceleration()), t = Chunk695346.bm.useSetting(), n = Chunk695346.Sb.useSetting(), O = (0, Chunk442837.e7)([Chunk695103.Z], () => Chunk695103.Z.testModeApplicationId), v = (0, Chunk442837.e7)([Chunk740492.ZP], () => Chunk740492.ZP.showPlayAgain), S = Chunk73800.useCallback(e => {
    h.bm.updateSetting(!e)
  }, []), T = Chunk73800.useCallback(e => {
    e ? (0, a.h7j)(e => <b.Z{...C({}, e)} />) : l.mc()
  }, []), I = Chunk73800.useCallback(e => {
    (0, c.BV)(e, o.Z.USER_SETTINGS)
  }, []), N = Chunk73800.useCallback(e => {
    (0, a.h7j)(t => {
      var n, r;
      let s = e ? j.intl.format(j.t.LYXRxM, {}) : j.intl.format(j.t.uDP3Ky, {});
      return <a.ConfirmModal{...n = C({
        header: j.intl.string(j.t.aqpAvr),
        confirmText: j.intl.string(j.t.vT7ckp),
        cancelText: j.intl.string(j.t["ETE/oK"]),
        onConfirm: () => p.ZP.setEnableHardwareAcceleration(e)
      }, t), r = r = {
        children: (0, i.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: s
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
  }, []), {
    warpEnabled: y,
    warpConnecting: A,
    warpLog: P
  } = (0, Chunk442837.cj)([Chunk956097.Z], () => ({
    warpEnabled: Chunk956097.Z.enabled,
    warpConnecting: Chunk956097.Z.connecting,
    warpLog: Chunk956097.Z.log
  })), R = Chunk73800.useCallback(e => {
    e ? d.Z.connect() : d.Z.disconnect()
  }, []);
  return <Chunk481060.hjN tag={Chunk481060.RB0.H1} title={Chunk388032.intl.string(Chunk388032.t["8/udY2"])}>{<Chunk921801.F setting={Chunk726985.s6.SETTINGS_ADVANCED_DEVELOPER_MODE}><Chunk481060.j7V value={require} onChange={Chunk695346.Sb.updateSetting} note={Chunk388032.intl.format(Chunk388032.t["CY6q/f"], {
          apiDocsUrl: Chunk981631.EYA.API_DOCS
        })}>{Chunk388032.intl.string(Chunk388032.t.ObIb1d)}</Chunk481060.j7V></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION}><Chunk481060.j7V className={module ? "" : Chunk40713.formSwitchExtension} value={module} onChange={N} note={Chunk388032.intl.string(Chunk388032.t.Afc7l5)} hideBorder={!module}>{Chunk388032.intl.string(Chunk388032.t["eOC/Fx"])}</Chunk481060.j7V></Chunk921801.F>}{!module && <Chunk255367.Fragment>{<Chunk494620.Z look={Chunk494620.z.WARNING}>{Chunk388032.intl.string(Chunk388032.t.j7S6IS)}</Chunk494620.Z>}{<Chunk481060.$i$ className={Chunk40713.infoBoxDivider} />}</Chunk255367.Fragment>}{<Chunk921801.F setting={Chunk726985.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY}><Chunk481060.j7V value={!exports} onChange={S} note={Chunk388032.intl.string(Chunk388032.t["8mYp39"])}>{Chunk388032.intl.string(Chunk388032.t.fi3UQE)}</Chunk481060.j7V></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE}><Chunk481060.j7V value={null != O} note={Chunk388032.intl.string(Chunk388032.t["52hMnJ"])} onChange={T}>{Chunk388032.intl.string(Chunk388032.t.erOqlp)}</Chunk481060.j7V></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.SETTINGS_ADVANCED_SHOW_PLAY_AGAIN}><Chunk481060.j7V value={v} note={Chunk388032.intl.string(Chunk388032.t["B/qU4O"])} onChange={I}>{Chunk388032.intl.string(Chunk388032.t.qDZryM)}</Chunk481060.j7V></Chunk921801.F>}{<Chunk921801.F setting={Chunk726985.s6.SETTINGS_ADVANCED_CF_WARP}>{<Chunk481060.j7V value={y} note={"Enable WARP Proxy Connection"} onChange={R}>{"Enable WARP"}</Chunk481060.j7V>}{A ? <Chunk481060.$jN /> : null}{<Chunk481060.Text variant={"code"}>{P.map((e, t) => (0, i.jsx)("div", {
          children: JSON.stringify(e)
        }, t))}</Chunk481060.Text>}</Chunk921801.F>}</Chunk481060.hjN>
}