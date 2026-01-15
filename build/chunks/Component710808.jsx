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
  Chunk921801 = require("./921801.jsx"),
  Chunk857192 = require("./857192.js"),
  Chunk131951 = require("./131951.js"),
  Chunk226961 = require("./226961.js"),
  Chunk12647 = require("./12647.js"),
  Chunk569550 = require("./569550.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk478411 = require("./478411.js");

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

function w(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function D() {
  let e = await p.Z.fileManager.getLogPath();
  p.Z.fileManager.showItemInFolder(e)
}

function x() {
  let e = C.intl.string(C.t["fKBB8+"]),
    t = C.intl.string(C.t.BvyxE7);
  (0, o.Z)({
    title: e,
    subtitle: t
  })
}

function L(e) {
  var t;
  let n = C.intl.string(C.t.QZg0J7),
    i = null != e ? e : C.intl.string(C.t.VzHcSm),
    a = null == (t = (0, m.hp)(m.u.DEBUG_LOG_UPLOAD_FAILED)) ? true : t.errorCode,
    o = C.intl.formatToPlainString(C.t.ejOT95, {
      errorCode: a
    });
  (0, c.h7j)(e => (0, r.jsx)(c.VoidConfirmModal, R(P({
    header: n,
    confirmButtonColor: l.zx.Colors.BRAND,
    confirmText: C.intl.string(C.t.BddRzS)
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
    title: C.intl.string(C.t["7UXEF2"]),
    subtitle: C.intl.string(C.t.IYPrRl),
    confirmText: C.intl.string(C.t.BddRzS),
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
    }), await (0, h.E)(I.GU0.RTC), x()
  } catch (e) {
    L(e.displayMessage)
  } finally {
    null == n || n()
  }
}

function k() {
  let [e, t] = i.useState(false), {
    debugLogging: n,
    aecDumpEnabled: o
  } = (0, a.cj)([b.Z], () => ({
    aecDumpSupported: b.Z.isAecDumpSupported(),
    debugLogging: b.Z.getDebugLogging(),
    aecDumpEnabled: b.Z.getAecDump(),
    supportsConnectionReplay: b.Z.supports(T.AN.CONNECTION_REPLAY)
  })), s = (0, a.e7)([E.default], () => E.default.isStreamInfoOverlayEnabled), l = (0, a.e7)([y.ZP], () => y.ZP.shouldRecordNextConnection()), p = i.useCallback(async () => {
    await M({
      onUploadStart: () => t(true)
    })
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.F, {
      setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
      children: (0, r.jsx)(c.rsf, {
        label: C.intl.string(C.t["0CEP6e"]),
        description: C.intl.string(C.t["kBXuW+"]),
        checked: s,
        onChange: e => {
          (0, v.Z)("stream_info_overlay_enabled", e, s), (0, d.y)({
            isStreamInfoOverlayEnabled: e
          })
        }
      })
    }), (0, r.jsx)(g.F, {
      setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, r.jsx)(c.rsf, {
        label: C.intl.string(C.t["r6K+TL"]),
        description: C.intl.string(C.t["xl9+I6"]),
        checked: o,
        onChange: e => u.Z.setAecDump(e)
      })
    }), (0, r.jsxs)(g.F, {
      setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, r.jsx)(c.rsf, {
        label: C.intl.string(C.t.U4FgFK),
        description: C.intl.string(C.t.Lm72RU),
        checked: l,
        onChange: e => f.TC(e)
      }), (0, r.jsx)(_.Z, {
        className: A.marginBottom20,
        children: (0, r.jsx)(_.Z.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: C.intl.string(C.t.nJnOHO),
            onClick: () => f.z4()
          })
        })
      })]
    }), (0, r.jsx)(g.F, {
      setting: S.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.rsf, {
          label: C.intl.string(C.t["726JHL"]),
          description: C.intl.string(C.t["/7ak9Q"]),
          checked: n,
          onChange: j
        }), (0, r.jsxs)(c.ButtonGroup, {
          size: "sm",
          children: [(0, r.jsx)(c.Button, {
            variant: "primary",
            text: C.intl.string(C.t["3UB9ad"]),
            disabled: e,
            onClick: p
          }), (0, r.jsx)(c.Button, {
            variant: "secondary",
            text: C.intl.string(C.t.nuPtYi),
            onClick: D
          })]
        })]
      })
    })]
  })
}