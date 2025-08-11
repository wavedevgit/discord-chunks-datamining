/** Chunk was on 75708 **/
/** chunk id: 325808, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk230711 = require("./230711.js"),
  Chunk825209 = require("./825209.js"),
  Chunk906732 = require("./906732.js"),
  Chunk313201 = require("./313201.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk383451 = require("./383451.js"),
  Chunk962100 = require("./962100.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk285425 = require("./285425.js"),
  Chunk893354 = require("./893354.js"),
  Chunk20493 = require("./20493.js");
let O = !Chunk358085.isPlatformEmbedded,
  v = (0, Chunk313201.hQ)();

function S(e) {
  return e >= 1e3 ? (e /= 1e3, "".concat(e.toFixed(2), "s")) : "".concat(e.toFixed(0), "\xa0ms")
}

function T(e) {
  let t, {
      inputMode: n
    } = e,
    {
      shortcut: r,
      delay: s,
      pttLatchingEnabled: m
    } = (0, l.cj)([g.Z], () => g.Z.getModeOptions()),
    {
      enableLatching: O
    } = (0, f.H)({
      location: "PTTTools"
    });
  return t = h.isPlatformEmbedded || n !== x.pM4.PUSH_TO_TALK ? <o.R94 type={o.R94.Types.DESCRIPTION} className={a()(j.pttToolsMessage, C.marginBottom8)}>{_.intl.format(_.t.HVvn5e, {
      onClick: () => d.Z.setSection(x.oAB.KEYBINDS)
    })}</o.R94> : <o.R94 type={o.R94.Types.DESCRIPTION} className={a()(j.pttToolsMessage, j.pttToolsWarning, C.marginBottom8)}>{_.intl.format(_.t.zvMPOT, {
      onDownloadClick: () => (0, b.y)("Help Text PTT")
    })}</o.R94>, <div className={j.pttTools}>{<div className={j.pttToolsFlex}>{<div className={j.column}><o.xJW title={_.intl.string(_.t.YkDjVF)}><u.Z defaultValue={r} onChange={e => c.Z.setMode(n, {
              shortcut: e
            })} /></o.xJW></div>}{<div className={j.column}><o.xJW>{<o.vwX id={v} tag={o.RB0.H5} className={C.marginBottom8}>{_.intl.string(_.t.y0ShVl)}</o.vwX>}{<o.iRW initialValue={s} onValueChange={e => c.Z.setMode(n, {
              delay: e
            })} onValueRender={S} maxValue={x.qhL} aria-labelledby={v} />}</o.xJW></div>}</div>}{O && <o.xJW className={C.marginTop8}>{<p.FG>{e => (0, i.jsxs)("div", {
          className: a()(E.horizontal, C.marginBottom4),
          children: [(0, i.jsx)(o.vwX, {
            tag: o.RB0.H3,
            className: C.marginReset,
            children: (0, i.jsx)("label", {
              htmlFor: e,
              children: _.intl.string(_.t.EGn1eH)
            })
          }), (0, i.jsx)(o.rsf, {
            id: e,
            checked: null != m && m,
            onChange: e => c.Z.setMode(n, {
              pttLatchingEnabled: e
            })
          })]
        })}</p.FG>}{<o.R94 type={o.R94.Types.DESCRIPTION} className={C.marginBottom8}>{_.intl.string(_.t.iT257u)}</o.R94>}</o.xJW>}{t}</div>
}

function I() {
  let {
    analyticsLocations: e
  } = (0, Chunk906732.ZP)(), t = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getMode()), s = [{
    value: Chunk981631.pM4.VOICE_ACTIVITY,
    name: Chunk388032.intl.string(Chunk388032.t.cHCEOD)
  }, {
    value: Chunk981631.pM4.PUSH_TO_TALK,
    name: O ? Chunk388032.intl.string(Chunk388032.t["1AINrK"]) : Chunk388032.intl.string(Chunk388032.t.Q8gkVF)
  }], a = Chunk73800.useCallback(t => {
    let {
      value: r
    } = t;
    r === x.pM4.PUSH_TO_TALK && O && (0, o.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 468026));
      return t => <e{...function(e) {
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
        title: _.intl.string(_.t.Kdt0GR),
        confirmText: _.intl.string(_.t["1WjMbG"]),
        cancelText: _.intl.string(_.t.BddRzc),
        onConfirm: () => (0, b.y)("PTT Limited Modal"),
        body: _.intl.string(_.t.NIozvr)
      }, t)} />
    }), c.Z.setMode(r, true, true, {
      analyticsLocations: e
    })
  }, [module]);
  return <Chunk255367.Fragment>{<Chunk481060.xJW title={Chunk388032.intl.string(Chunk388032.t["pS+K2N"])} className={Chunk20493.marginBottom20}><Chunk481060.FXm onChange={a} options={Chunk120356} value={exports} /></Chunk481060.xJW>}{exports === Chunk981631.pM4.PUSH_TO_TALK && <T inputMode={exports} />}</Chunk255367.Fragment>
}