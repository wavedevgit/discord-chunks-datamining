/** Chunk was on web.js **/
/** chunk id: 786138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk872810 = require("./872810.js"),
  Chunk960861 = require("./960861.js"),
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

function y(e) {
  var t, n, y;
  let {
    stream: O,
    handleGoLive: v,
    showReportOption: S = false,
    disableChangeWindows: I = false,
    minimal: T = false,
    appContext: C = h.IlC.APP
  } = e, {
    desktopSourceId: A,
    lastPickedContent: N
  } = (0, o.cj)([c.ZP, f.Z], () => {
    var e;
    let {
      desktopSource: t
    } = null != (e = f.Z.getGoLiveSource()) ? e : {}, n = c.ZP.getLastPickedContent();
    return {
      desktopSourceId: null == t ? true : t.id,
      lastPickedContent: n
    }
  }), P = (0, o.e7)([d.Z], () => d.Z.getState().soundshareEnabled), R = f.Z.supports(E.AN.DESKTOP_CAPTURE_APPLICATIONS), w = (0, o.e7)([f.Z], () => f.Z.supports(E.AN.SOUNDSHARE)), D = (0, o.e7)([f.Z], () => f.Z.supportsScreenSoundshare()), x = (0, m.Z)(O, C), L = (0, _.Z)(O, C, g.Vq), j = null != A && w && (!A.startsWith("screen") || D), M = (0, o.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, p.isLinux)()), k = i.useCallback(() => {
    (null == A ? true : A.startsWith("prepicked:")) ? f.Z.getMediaEngine().eachConnection(e => {
      e.context === E.Yn.STREAM && e.presentDesktopSourcePicker("window")
    }): v()
  }, [A, v]), U = null != (t = null == A ? true : A.startsWith("prepicked:")) && t, G = (0, p.isMac)() && p.isPlatformEmbedded && U && (null != (n = null == N ? true : N.windows.length) ? n : 0) > 0, Z = (0, p.isMac)() && p.isPlatformEmbedded && U && (null != (y = null == N ? true : N.applications.length) ? y : 0) > 0, F = G ? b.intl.string(b.t.qDK8gQ) : Z ? b.intl.string(b.t["3m8w+Q"]) : T ? b.intl.string(b.t.eAktHv) : b.intl.string(b.t.qntSal), B = i.useCallback(() => {
    let {
      preset: e,
      resolution: t,
      fps: n
    } = d.Z.getState(), r = {
      qualityOptions: {
        preset: e,
        resolution: t,
        frameRate: n
      },
      context: E.Yn.STREAM
    };
    null != A && (r.desktopSettings = {
      sourceId: A,
      sound: !P
    }), (0, l.Rc)({
      preset: e,
      resolution: t,
      frameRate: n,
      soundshareEnabled: !P
    }), s.Z.setGoLiveSource(r)
  }, [A, P]);
  if (null == O) return (0, r.jsx)(a.sNh, {
    id: "share-your-screen",
    label: b.intl.string(b.t.fjBNo1),
    icon: a.hGI,
    action: v
  });
  let V = p.isPlatformEmbedded ? (0, r.jsx)(a.sNh, {
      id: "stream-settings",
      label: b.intl.string(b.t.ytAD9d),
      children: x
    }) : null,
    H = j ? (0, r.jsx)(a.S89, {
      id: "stream-settings-audio-enable",
      label: T ? b.intl.string(b.t.af2Tw1) : b.intl.string(b.t.ZJEHt7),
      checked: P,
      action: B
    }) : null,
    Y = !R || I || M ? null : (0, r.jsx)(a.sNh, {
      id: "change-windows",
      label: F,
      icon: a.hGI,
      action: k
    }),
    W = (0, r.jsx)(a.sNh, {
      id: "stop-streaming",
      color: "danger",
      label: b.intl.string(b.t.S5anIc),
      icon: a.g5r,
      action: () => (0, u.Z)(O)
    });
  return T ? (0, r.jsxs)(r.Fragment, {
    children: [W, Y, V, H]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [V, S ? L : null, H, Y, W]
  })
}