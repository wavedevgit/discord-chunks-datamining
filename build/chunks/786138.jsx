/** Chunk was on web.js **/
/** chunk id: 786138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk872810 = require("./872810.js"),
  Chunk803647 = require("./803647.js"),
  Chunk361291 = require("./361291.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk418469 = require("./418469.jsx"),
  Chunk776031 = require("./776031.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    stream: t,
    handleGoLive: n,
    showReportOption: b = false,
    disableChangeWindows: y = false,
    minimal: O = false,
    appContext: v = h.IlC.APP
  } = e, {
    desktopSourceId: I
  } = (0, o.cj)([d.Z], () => {
    var e;
    let {
      desktopSource: t
    } = null != (e = d.Z.getGoLiveSource()) ? e : {};
    return {
      desktopSourceId: null == t ? true : t.id
    }
  }), T = (0, o.e7)([u.Z], () => u.Z.getState().soundshareEnabled), S = d.Z.supports(g.AN.DESKTOP_CAPTURE_APPLICATIONS), A = (0, o.e7)([d.Z], () => d.Z.supports(g.AN.SOUNDSHARE)), N = (0, o.e7)([d.Z], () => d.Z.supportsScreenSoundshare()), C = (0, p.Z)(t, v), R = (0, _.Z)(t, v, m.Vq), P = null != I && A && (!I.startsWith("screen") || N), w = (0, o.e7)([d.Z], () => d.Z.getUseSystemScreensharePicker() && (0, f.isLinux)()), D = i.useCallback(() => {
    (null == I ? true : I.startsWith("prepicked:")) ? d.Z.getMediaEngine().eachConnection(e => {
      e.context === g.Yn.STREAM && e.presentDesktopSourcePicker()
    }): n()
  }, [I, n]), L = i.useCallback(() => {
    let {
      preset: e,
      resolution: t,
      fps: n
    } = u.Z.getState(), r = {
      qualityOptions: {
        preset: e,
        resolution: t,
        frameRate: n
      },
      context: g.Yn.STREAM
    };
    null != I && (r.desktopSettings = {
      sourceId: I,
      sound: !T
    }), (0, l.Rc)({
      preset: e,
      resolution: t,
      frameRate: n,
      soundshareEnabled: !T
    }), s.Z.setGoLiveSource(r)
  }, [I, T]);
  if (null == t) return <a.sNh id={"share-your-screen"} label={E.intl.string(E.t.fjBNo6)} icon={a.hGI} action={n} />;
  let x = f.isPlatformEmbedded ? <a.sNh id={"stream-settings"} label={E.intl.string(E.t.ytAD9f)}>{C}</a.sNh> : null,
    M = P ? <a.S89 id={"stream-settings-audio-enable"} label={O ? E.intl.string(E.t.af2Tw8) : E.intl.string(E.t.ZJEHt7)} checked={T} action={L} /> : null,
    k = !S || y || w ? null : <a.sNh id={"change-windows"} label={O ? E.intl.string(E.t.eAktHh) : E.intl.string(E.t.qntSam)} icon={a.hGI} action={D} />,
    j = <a.sNh id={"stop-streaming"} label={E.intl.string(E.t.S5anIS)} icon={a.g5r} action={() => (0, c.Z)(t)} />;
  return O ? <r.Fragment>{j}{k}{x}{M}</r.Fragment> : <r.Fragment>{x}{b ? R : null}{M}{k}{j}</r.Fragment>
}