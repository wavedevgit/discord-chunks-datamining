/** Chunk was on web.js **/
/** chunk id: 845885, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk401843 = require("./401843.js"),
  Chunk571044 = require("./571044.js"),
  Chunk338771 = require("./338771.js"),
  Chunk929921 = require("./929921.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk74329 = require("./74329.jsx"),
  Chunk361618 = require("./361618.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  var t, n, b;
  let {
    stream: O,
    handleGoLive: v,
    showReportOption: A = false,
    disableChangeWindows: I = false,
    minimal: S = false,
    appContext: T = m.BRT.APP
  } = e, {
    desktopSourceId: C,
    lastPickedContent: N
  } = (0, a.cf)([c.Ay, f.A], () => {
    var e;
    let {
      desktopSource: t
    } = null != (e = f.A.getGoLiveSource()) ? e : {}, n = c.Ay.getLastPickedContent();
    return {
      desktopSourceId: null == t ? true : t.id,
      lastPickedContent: n
    }
  }), w = (0, a.bG)([d.A], () => d.A.getState().soundshareEnabled), R = f.A.supports(E.O5.DESKTOP_CAPTURE_APPLICATIONS), P = (0, a.bG)([f.A], () => f.A.supports(E.O5.SOUNDSHARE)), D = (0, a.bG)([f.A], () => f.A.supportsScreenSoundshare()), L = (0, h.A)(O, T), x = (0, _.A)(O, T, g.FX), M = null != C && P && (!C.startsWith("screen") || D), j = (0, a.bG)([f.A], () => f.A.getUseSystemScreensharePicker() && (0, p.isLinux)()), k = i.useCallback(() => {
    (null == C ? true : C.startsWith("prepicked:")) ? f.A.getMediaEngine().eachConnection(e => {
      e.context === E.x.STREAM && e.presentDesktopSourcePicker("window")
    }): v()
  }, [C, v]), U = null != (t = null == C ? true : C.startsWith("prepicked:")) && t, G = (0, p.isMac)() && p.isPlatformEmbedded && U && (null != (n = null == N ? true : N.windows.length) ? n : 0) > 0, V = (0, p.isMac)() && p.isPlatformEmbedded && U && (null != (b = null == N ? true : N.applications.length) ? b : 0) > 0, F = G ? y.intl.string(y.t.qDK8gQ) : V ? y.intl.string(y.t["3m8w+Q"]) : S ? y.intl.string(y.t.eAktHv) : y.intl.string(y.t.qntSal), B = i.useCallback(() => {
    let {
      preset: e,
      resolution: t,
      fps: n
    } = d.A.getState(), r = {
      qualityOptions: {
        preset: e,
        resolution: t,
        frameRate: n
      },
      context: E.x.STREAM
    };
    null != C && (r.desktopSettings = {
      sourceId: C,
      sound: !w
    }), (0, l.Xd)({
      preset: e,
      resolution: t,
      frameRate: n,
      soundshareEnabled: !w
    }), s.A.setGoLiveSource(r)
  }, [C, w]);
  if (null == O) return (0, r.jsx)(o.Drp, {
    id: "share-your-screen",
    label: y.intl.string(y.t.fjBNo1),
    icon: o.Fzq,
    leadingAccessory: {
      type: "icon",
      icon: o.Fzq
    },
    action: v
  });
  let H = p.isPlatformEmbedded ? (0, r.jsx)(o.Drp, {
      id: "stream-settings",
      label: y.intl.string(y.t.ytAD9d),
      children: L
    }) : null,
    Y = M ? (0, r.jsx)(o.sLh, {
      id: "stream-settings-audio-enable",
      label: S ? y.intl.string(y.t.af2Tw1) : y.intl.string(y.t.ZJEHt7),
      checked: w,
      action: B
    }) : null,
    W = !R || I || j ? null : (0, r.jsx)(o.Drp, {
      id: "change-windows",
      label: F,
      icon: o.Fzq,
      leadingAccessory: {
        type: "icon",
        icon: o.Fzq
      },
      action: k
    }),
    K = (0, r.jsx)(o.Drp, {
      id: "stop-streaming",
      color: "danger",
      label: y.intl.string(y.t.S5anIc),
      icon: o.GT3,
      leadingAccessory: {
        type: "icon",
        icon: o.GT3
      },
      action: () => (0, u.A)(O)
    });
  return S ? (0, r.jsxs)(r.Fragment, {
    children: [K, W, H, Y]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [H, A ? x : null, Y, W, K]
  })
}