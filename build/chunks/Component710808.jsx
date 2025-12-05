/** Chunk was on web.js **/
/** chunk id: 710808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W2: () => D,
  ZP: () => k,
  rT: () => j,
  xI: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk885387 = require("./885387.jsx"),
  Chunk248514 = require("./248514.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk846027 = require("./846027.js"),
  Chunk179658 = require("./179658.js"),
  Chunk304680 = require("./304680.js"),
  Chunk579806 = require("./579806.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk729345 = require("./729345.js"),
  Chunk458725 = require("./458725.js"),
  Chunk921801 = require("./921801.js"),
  Chunk857192 = require("./857192.js"),
  Chunk131951 = require("./131951.js"),
  Chunk226961 = require("./226961.js"),
  Chunk12647 = require("./12647.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk197571 = require("./197571.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function w(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function D() {
  let e = await Chunk579806.Z.fileManager.getLogPath();
  Chunk579806.Z.fileManager.showItemInFolder(module)
}

function x() {
  let e = Chunk388032.intl.string(Chunk388032.t["fKBB8+"]),
    t = Chunk388032.intl.string(Chunk388032.t.BvyxE7);
  (0, Chunk885387.Z)({
    title: module,
    subtitle: exports
  })
}

function L(e) {
  var t;
  let n = A.intl.string(A.t.QZg0J7),
    i = null != e ? e : A.intl.string(A.t.VzHcSm),
    a = null == (t = (0, h.hp)(h.u.DEBUG_LOG_UPLOAD_FAILED)) ? true : t.errorCode,
    o = A.intl.formatToPlainString(A.t.ejOT95, {
      errorCode: a
    });
  (0, c.h7j)(e => (0, r.jsx)(c.ConfirmModal, w(P({
    header: n,
    confirmButtonColor: l.zx.Colors.BRAND,
    confirmText: A.intl.string(A.t.BddRzS)
  }, e), {
    children: (0, r.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/normal",
        children: i
      }), (0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        selectable: true,
        style: {
          marginTop: "auto"
        },
        children: o
      })]
    })
  })))
}

function j(e) {
  (0, s.Z)({
    title: A.intl.string(A.t["7UXEF2"]),
    subtitle: A.intl.string(A.t.IYPrRl),
    confirmText: A.intl.string(A.t.BddRzS),
    onConfirm: () => u.Z.setDebugLogging(e)
  })
}
async function M(e) {
  let {
    onUploadStart: t,
    onUploadFinish: n
  } = e;
  null == t || t();
  try {
    await b.Z.getMediaEngine().writeAudioDebugState(), await O.Z.submitLiveCrashReport({
      message: {
        message: "User Live Dump"
      }
    }), await (0, m.E)(I.GU0.RTC), x()
  } catch (e) {
    L(e.displayMessage)
  } finally {
    null == n || n()
  }
}

function k() {
  let [e, t] = Chunk473749.useState(false), {
    debugLogging: n,
    aecDumpEnabled: o
  } = (0, Chunk442837.cj)([Chunk131951.Z], () => ({
    aecDumpSupported: Chunk131951.Z.isAecDumpSupported(),
    debugLogging: Chunk131951.Z.getDebugLogging(),
    aecDumpEnabled: Chunk131951.Z.getAecDump(),
    supportsConnectionReplay: Chunk131951.Z.supports(Chunk65154.AN.CONNECTION_REPLAY)
  })), s = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.isStreamInfoOverlayEnabled), l = (0, Chunk442837.e7)([Chunk226961.ZP], () => Chunk226961.ZP.shouldRecordNextConnection()), p = Chunk473749.useCallback(async () => {
    await M({
      onUploadStart: () => exports(true)
    })
  }, []);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["0CEP6e"]),
        description: Chunk388032.intl.string(Chunk388032.t["kBXuW+"]),
        checked: Chunk248514,
        onChange: e => {
          (0, v.Z)("stream_info_overlay_enabled", e, s), (0, d.y)({
            isStreamInfoOverlayEnabled: e
          })
        }
      })
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t["r6K+TL"]),
        description: Chunk388032.intl.string(Chunk388032.t["xl9+I6"]),
        checked: Chunk885387,
        onChange: e => u.Z.setAecDump(e)
      })
    }), (0, Chunk54381.jsxs)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
        label: Chunk388032.intl.string(Chunk388032.t.U4FgFK),
        description: Chunk388032.intl.string(Chunk388032.t.Lm72RU),
        checked: Chunk755721,
        onChange: e => f.TC(e)
      }), (0, Chunk54381.jsx)(Chunk600164.Z, {
        className: Chunk197571.marginBottom20,
        children: (0, Chunk54381.jsx)(Chunk600164.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: Chunk388032.intl.string(Chunk388032.t.nJnOHO),
            onClick: () => Chunk304680.z4()
          })
        })
      })]
    }), (0, Chunk54381.jsx)(Chunk921801.F, {
      setting: Chunk726985.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: (0, Chunk54381.jsxs)("div", {
        children: [(0, Chunk54381.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t["726JHL"]),
          description: Chunk388032.intl.string(Chunk388032.t["/7ak9Q"]),
          checked: require,
          onChange: j
        }), (0, Chunk54381.jsxs)(Chunk481060.ButtonGroup, {
          size: "sm",
          children: [(0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "primary",
            text: Chunk388032.intl.string(Chunk388032.t["3UB9ad"]),
            disabled: module,
            onClick: Chunk579806
          }), (0, Chunk54381.jsx)(Chunk481060.Button, {
            variant: "secondary",
            text: Chunk388032.intl.string(Chunk388032.t.nuPtYi),
            onClick: D
          })]
        })]
      })
    })]
  })
}