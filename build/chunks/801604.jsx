/** Chunk was on 46746 **/
/** chunk id: 801604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk925329 = require("./925329.js"),
  Chunk72897 = require("./72897.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk668519 = require("./668519.js"),
  Chunk672811 = require("./672811.js"),
  Chunk891180 = require("./891180.js"),
  Chunk556389 = require("./556389.js"),
  Chunk615161 = require("./615161.jsx"),
  Chunk396678 = require("./396678.js"),
  Chunk37113 = require("./37113.js"),
  Chunk65154 = require("./65154.js"),
  Chunk676462 = require("./676462.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk326879 = require("./326879.js");

function O() {
  return <span className={Chunk326879.ellipsis}>{"•"}</span>
}

function I(e) {
  let {
    source: t
  } = e, {
    data: n
  } = (0, c.IX)(null != t && (0, g.T)(t) ? t.id : true);
  return null == t ? <a.hGI className={y.screenArrowIcon} size={"md"} color={"currentColor"} /> : (0, g.T)(t) ? <d.Z game={n} pid={t.pid} /> : null == t.icon || "" === t.icon ? <a.hGI className={y.screenArrowIcon} size={"md"} color={"currentColor"} /> : <img src={t.icon} alt={""} className={y.sourceIcon} />
}

function Z(e) {
  var t, n, i, c;
  let {
    nativePickerEnabled: d
  } = e, [{
    preset: g,
    resolution: Z,
    fps: w,
    muteStreamAudio: N,
    selectedSource: T,
    sourceType: E,
    audioSourceId: P
  }] = (0, _.E_)(), {
    twoClickVariant: R
  } = (0, h.a)({
    location: "go_live_modal_refresh",
    autoTrackExposure: false
  }), [A, M] = (0, u.Ls)(b.h7.AUDIO_INPUT, {
    location: "StreamSettingsSummary"
  }), k = A.concat(M), [L, D] = null != (i = (0, v.Z)(g)) ? i : [Z, w], B = (0, p.L)(g), U = (0, x.M)(L), G = E === s.vA.CAMERA, W = null != T || !!R && (!d || G), F = null != T ? null == T || null == (t = T.id) ? true : t.startsWith(s.vA.CAMERA) : G, H = W ? true : g === j.tI.PRESET_VIDEO ? C.intl.string(S.default.MuHUFR) : g === j.tI.PRESET_DOCUMENTS ? C.intl.string(S.default.y0JuYW) : true, z = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, m.isLinux)());
  return <div className={y.root}>{W && <I source={T} />}{<div className={y.summary}>{<a.Text className={y.sourceOrPresetName} variant={"text-md/semibold"} color={"header-primary"}>{W ? null != (c = null == T ? true : T.name) ? c : C.intl.string(S.default["hJMA+/"]) : B}</a.Text>}{<a.Text className={y.summaryDetail} variant={"text-xs/medium"} color={"text-muted"}>{W && <r.Fragment>{<span className={y.iconSummaryContainer}>{<a.ewm className={y.icon} size={"xxs"} color={"currentColor"} />}{B}</span>}{<O />}</r.Fragment>}{null != H && <r.Fragment>{<span>{H}</span>}{<O />}</r.Fragment>}{<span>{U}</span>}{<O />}{<span>{"".concat(D, "fps")}</span>}{N && <r.Fragment>{<O />}{<span className={y.iconSummaryContainer}>{<a.OyP className={l()(y.icon, y.mutedIcon)} size={"xxs"} color={"currentColor"} />}{C.intl.string(S.default.FzMGWV)}</span>}</r.Fragment>}{!N && !F && z && <r.Fragment>{<O />}{C.intl.string(S.default["n9/rUl"])}</r.Fragment>}{F ? <r.Fragment>{<O />}{<span>{null == (n = k.find(e => {
              let {
                id: t
              } = e;
              return P === t
            })) ? true : n.name}</span>}</r.Fragment> : null}</a.Text>}</div>}</div>
}