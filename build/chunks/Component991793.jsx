/** Chunk was on web.js **/
/** chunk id: 991793, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => k,
  G0: () => D,
  p9: () => j,
  q5: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk314116 = require("./314116.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk926919 = require("./926919.js"),
  Chunk233545 = require("./233545.js"),
  Chunk77729 = require("./77729.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk98919 = require("./98919.js"),
  Chunk487329 = require("./487329.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk111162 = require("./111162.js"),
  Chunk430452 = require("./430452.js"),
  Chunk412780 = require("./412780.js"),
  Chunk353835 = require("./353835.js"),
  Chunk698723 = require("./698723.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function w(e) {
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

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function D() {
  let e = await p.A.fileManager.getLogPath();
  p.A.fileManager.showItemInFolder(e)
}

function x() {
  let e = T.intl.string(T.t["fKBB8+"]),
    t = T.intl.string(T.t.BvyxE7);
  (0, s.A)({
    title: e,
    subtitle: t
  })
}

function L(e) {
  var t;
  let n = T.intl.string(T.t.QZg0J7),
    i = null != e ? e : T.intl.string(T.t.VzHcSm),
    a = null == (t = (0, m.B1)(m.iy.DEBUG_LOG_UPLOAD_FAILED)) ? true : t.errorCode,
    s = T.intl.formatToPlainString(T.t.ejOT95, {
      errorCode: a
    });
  (0, c.qfG)(e => (0, r.jsx)(c.VoidConfirmModal, P(w({
    header: n,
    confirmButtonColor: l.$n.Colors.BRAND,
    confirmText: T.intl.string(T.t.BddRzS)
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
        children: s
      })]
    })
  })))
}

function j(e) {
  (0, o.A)({
    title: T.intl.string(T.t["7UXEF2"]),
    subtitle: T.intl.string(T.t.IYPrRl),
    confirmText: T.intl.string(T.t.BddRzS),
    onConfirm: () => u.A.setDebugLogging(e)
  })
}
async function M(e) {
  let {
    onUploadStart: t,
    onUploadFinish: n
  } = e;
  null == t || t();
  try {
    await y.A.getMediaEngine().writeAudioDebugState(), await O.A.submitLiveCrashReport({
      message: {
        message: "User Live Dump"
      }
    }), await (0, h.a)(I.Umv.RTC), x()
  } catch (e) {
    L(e.displayMessage)
  } finally {
    null == n || n()
  }
}

function k() {
  let [e, t] = i.useState(false), {
    debugLogging: n,
    aecDumpEnabled: s
  } = (0, a.cf)([y.A], () => ({
    aecDumpSupported: y.A.isAecDumpSupported(),
    debugLogging: y.A.getDebugLogging(),
    aecDumpEnabled: y.A.getAecDump(),
    supportsConnectionReplay: y.A.supports(S.O5.CONNECTION_REPLAY)
  })), o = (0, a.bG)([E.default], () => E.default.isStreamInfoOverlayEnabled), l = (0, a.bG)([b.Ay], () => b.Ay.shouldRecordNextConnection()), p = i.useCallback(async () => {
    await M({
      onUploadStart: () => t(true)
    })
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.x, {
      setting: A.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
      children: (0, r.jsx)(c.dOG, {
        label: T.intl.string(T.t["0CEP6e"]),
        description: T.intl.string(T.t["kBXuW+"]),
        checked: o,
        onChange: e => {
          (0, v.A)("stream_info_overlay_enabled", e, o), (0, d.x)({
            isStreamInfoOverlayEnabled: e
          })
        }
      })
    }), (0, r.jsx)(g.x, {
      setting: A.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, r.jsx)(c.dOG, {
        label: T.intl.string(T.t["r6K+TL"]),
        description: T.intl.string(T.t["xl9+I6"]),
        checked: s,
        onChange: e => u.A.setAecDump(e)
      })
    }), (0, r.jsxs)(g.x, {
      setting: A.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, r.jsx)(c.dOG, {
        label: T.intl.string(T.t.U4FgFK),
        description: T.intl.string(T.t.Lm72RU),
        checked: l,
        onChange: e => f.Et(e)
      }), (0, r.jsx)(_.A, {
        className: C.SX,
        children: (0, r.jsx)(_.A.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: T.intl.string(T.t.nJnOHO),
            onClick: () => f.YW()
          })
        })
      })]
    }), (0, r.jsx)(g.x, {
      setting: A.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.dOG, {
          label: T.intl.string(T.t["726JHL"]),
          description: T.intl.string(T.t["/7ak9Q"]),
          checked: n,
          onChange: j
        }), (0, r.jsxs)(c.ButtonGroup, {
          size: "sm",
          children: [(0, r.jsx)(c.Button, {
            variant: "primary",
            text: T.intl.string(T.t["3UB9ad"]),
            disabled: e,
            onClick: p
          }), (0, r.jsx)(c.Button, {
            variant: "secondary",
            text: T.intl.string(T.t.nuPtYi),
            onClick: D
          })]
        })]
      })
    })]
  })
}