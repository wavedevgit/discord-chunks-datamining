/** Chunk was on 93886 **/
/** chunk id: 891401, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk411149 = require("./411149.js"),
  Chunk151480 = require("./151480.js"),
  Chunk461762 = require("./461762.js"),
  Chunk680783 = require("./680783.js"),
  Chunk605236 = require("./605236.js"),
  Chunk675478 = require("./675478.js"),
  Chunk944486 = require("./944486.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk145634 = require("./145634.js");

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = a[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      a.push.apply(a, n)
    }
    return a
  })(Object(t)).forEach(function(a) {
    Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a))
  }), e
}

function N() {
  return <Chunk481060.Ttm className={Chunk145634.container}>{<O />}{<T />}</Chunk481060.Ttm>
}

function O() {
  var e, t;
  let a = (0, Chunk442837.e7)([Chunk944486.Z], () => Chunk944486.Z.getChannelId()),
    l = (0, Chunk680783.Z)(require),
    s = null == Chunk120356 ? true : Chunk120356.wallpaperId,
    d = (0, Chunk461762.Z)(Chunk392711),
    f = Chunk73800.useCallback(e => {
      null != s && (0, h.i)(s, {
        opacity: e
      })
    }, [Chunk392711]),
    v = Chunk73800.useCallback(e => {
      E(null == l ? true : l.wallpaperId, e.target.value)
    }, [null == Chunk120356 ? true : Chunk120356.wallpaperId]),
    N = Chunk73800.useCallback(e => {
      P(null == l ? true : l.wallpaperId, e.target.value)
    }, [null == Chunk120356 ? true : Chunk120356.wallpaperId]),
    O = Chunk73800.useCallback(e => {
      S(null == l ? true : l.wallpaperId, e.target.value)
    }, [null == Chunk120356 ? true : Chunk120356.wallpaperId]),
    T = Chunk73800.useCallback(() => E(null == Chunk120356 ? true : Chunk120356.wallpaperId, true), [null == Chunk120356 ? true : Chunk120356.wallpaperId]),
    w = Chunk73800.useCallback(() => P(null == Chunk120356 ? true : Chunk120356.wallpaperId, true), [null == Chunk120356 ? true : Chunk120356.wallpaperId]),
    I = Chunk73800.useCallback(() => S(null == Chunk120356 ? true : Chunk120356.wallpaperId, true), [null == Chunk120356 ? true : Chunk120356.wallpaperId]),
    k = Chunk73800.useCallback(e => {
      null != s && (0, h.i)(s, {
        token_mix_amount: Math.round(e)
      })
    }, [Chunk392711]),
    R = Chunk73800.useCallback(() => {
      null != Chunk392711 && (0, Chunk151480.i)(Chunk392711, null)
    }, [Chunk392711]),
    Z = null != (e = null == Chunk704215 ? true : Chunk704215.opacity) ? module : 1,
    A = null != (t = null == Chunk704215 ? true : Chunk704215.token_mix_amount) ? exports : 100;
  return <div>{<Chunk793030.X6 className={Chunk145634.header} variant={"heading-lg/semibold"}>{"DM Wallpapers"}</Chunk793030.X6>}{null == Chunk704215 && <p className={Chunk145634.explanation}>{"Open a DM with a wallpaper to customize."}</p>}{null != Chunk704215 && <Chunk255367.Fragment>{<Chunk793030.X6 className={Chunk145634.subheader} variant={"heading-md/semibold"}>{"ChatWallpaperMetadataRecord"}</Chunk793030.X6>}{<pre className={Chunk145634.code}>{JSON.stringify(Chunk411149.Z.getWallpaperById(Chunk392711), null, 2)}</pre>}{<Chunk481060.ua7 text={"The opacity of the wallpaper."}>{e => (0, n.jsx)(o.X6, C(y({
          className: i()(_.subheader, _.hasTooltip),
          variant: "heading-md/semibold"
        }, e), {
          children: "Opacity"
        }))}</Chunk481060.ua7>}{<Chunk481060.iRW className={Chunk145634.slider} initialValue={Z} defaultValue={1} minValue={0} maxValue={1} onValueChange={Chunk605236} />}{<Chunk481060.ua7 text={"The most prominent color in the wallpaper. This will be used to adjust the color tokens."}>{e => (0, n.jsx)(o.X6, C(y({
          className: i()(_.subheader, _.hasTooltip),
          variant: "heading-md/semibold"
        }, e), {
          children: "Primary Color"
        }))}</Chunk481060.ua7>}{<div className={Chunk145634.colorInputContainer}>{<input type={"color"} value={Chunk704215.primary_color} onChange={Chunk675478} />}{<Chunk481060.M0o color={"currentColor"} tooltip={Chunk388032.intl.string(Chunk388032.t.N86XcH)} icon={(0, Chunk255367.jsx)(Chunk481060.P$X, {
            size: "xs",
            color: "currentColor"
          })} onClick={T} className={Chunk145634.removeButton} />}</div>}{<Chunk481060.ua7 text={"The second most prominent color in the wallpaper. This will be used to adjust the color tokens."}>{e => (0, n.jsx)(o.X6, C(y({
          className: i()(_.subheader, _.hasTooltip),
          variant: "heading-md/semibold"
        }, e), {
          children: "Secondary Color"
        }))}</Chunk481060.ua7>}{<div className={Chunk145634.colorInputContainer}>{<input type={"color"} value={Chunk704215.secondary_color} onChange={N} />}{<Chunk481060.M0o color={"currentColor"} tooltip={Chunk388032.intl.string(Chunk388032.t.N86XcH)} icon={(0, Chunk255367.jsx)(Chunk481060.P$X, {
            size: "xs",
            color: "currentColor"
          })} onClick={w} className={Chunk145634.removeButton} />}</div>}{<Chunk481060.ua7 text={"Controls how much the primary/secondary colors are mixed into the tokens."}>{e => (0, n.jsx)(o.X6, C(y({
          className: i()(_.subheader, _.hasTooltip),
          variant: "heading-md/semibold"
        }, e), {
          children: "Token Mix Amount"
        }))}</Chunk481060.ua7>}{<Chunk481060.iRW className={Chunk145634.slider} initialValue={A} defaultValue={100} minValue={0} maxValue={100} onValueChange={k} />}{<Chunk481060.ua7 text={"The color used for hyperlinks."}>{e => (0, n.jsx)(o.X6, C(y({
          className: i()(_.subheader, _.hasTooltip),
          variant: "heading-md/semibold"
        }, e), {
          children: "Link Color"
        }))}</Chunk481060.ua7>}{<div className={Chunk145634.colorInputContainer}>{<input type={"color"} value={Chunk704215.link_color} onChange={O} />}{<Chunk481060.M0o color={"currentColor"} tooltip={Chunk388032.intl.string(Chunk388032.t.N86XcH)} icon={(0, Chunk255367.jsx)(Chunk481060.P$X, {
            size: "xs",
            color: "currentColor"
          })} onClick={I} className={Chunk145634.removeButton} />}</div>}{<Chunk755721.zx className={Chunk145634.resetButton} onClick={R}>{"Reset"}</Chunk755721.zx>}</Chunk255367.Fragment>}</div>
}

function T() {
  let e = Chunk73800.useCallback(() => {
      (0, Chunk675478.Z1)(Chunk704215.z.NITRO_TENURE_BADGE_LEVEL_UP)
    }, []),
    {
      lastDismissedAtMs: t
    } = (0, Chunk605236.Fo)(Chunk704215.z.NITRO_TENURE_BADGE_LEVEL_UP),
    a = null != exports ? new Date(exports) : null;
  return <Chunk255367.Fragment>{<Chunk793030.X6 className={Chunk145634.header} variant={"heading-lg/semibold"}>{"Tenure Badges"}</Chunk793030.X6>}{<p>{"Level Up DC:\xa0"}{null != require && <b>{"Dismissed ("}{require.toLocaleDateString()}{")"}</b>}{null == require && <b>{"Not Dismissed"}</b>}</p>}{<div className={Chunk145634.tenureBadgeControls}><Chunk481060.zxk variant={"primary"} text={"Reset Level Up DC"} onClick={module} /></div>}</Chunk255367.Fragment>
}
let E = (0, Chunk392711.debounce)(function(e, t) {
    null != e && (0, h.i)(e, {
      primary_color: t
    })
  }, 200),
  S = (0, Chunk392711.debounce)(function(e, t) {
    null != e && (0, h.i)(e, {
      link_color: t
    })
  }, 200),
  P = (0, Chunk392711.debounce)(function(e, t) {
    null != e && (0, h.i)(e, {
      secondary_color: t
    })
  }, 200)