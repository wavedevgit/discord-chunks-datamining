/** Chunk was on 60667 **/
/** chunk id: 991793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => P,
  G0: () => v,
  p9: () => N,
  q5: () => y
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
  Chunk709710 = require("./709710.js"),
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
async function v() {
  let e = await p.A.fileManager.getLogPath();
  p.A.fileManager.showItemInFolder(e)
}

function N(e) {
  (0, a.A)({
    title: S.intl.string(S.t["7UXEF2"]),
    subtitle: S.intl.string(S.t.IYPrRl),
    confirmText: S.intl.string(S.t.BddRzS),
    onConfirm: () => d.A.setDebugLogging(e)
  })
}
async function y(e) {
  let {
    onUploadStart: t,
    onUploadFinish: n
  } = e;
  null == t || t();
  try {
    let e, t;
    await b.A.getMediaEngine().writeAudioDebugState(), await x.A.submitLiveCrashReport({
      message: {
        message: "User Live Dump"
      }
    }), await (0, g.a)(I.Umv.RTC), e = S.intl.string(S.t["fKBB8+"]), t = S.intl.string(S.t.BvyxE7), (0, s.A)({
      title: e,
      subtitle: t
    })
  } catch (a) {
    var i, l;
    let e, t, n, s;
    i = a.displayMessage, e = S.intl.string(S.t.QZg0J7), t = null != i ? i : S.intl.string(S.t.VzHcSm), n = null == (l = (0, A.B1)(A.iy.DEBUG_LOG_UPLOAD_FAILED)) ? true : l.errorCode, s = S.intl.formatToPlainString(S.t.ejOT95, {
      errorCode: n
    }), (0, c.qfG)(n => {
      var i, l;
      return (0, r.jsx)(c.VoidConfirmModal, (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        header: e,
        confirmButtonColor: o.$n.Colors.BRAND,
        confirmText: S.intl.string(S.t.BddRzS)
      }, n), l = l = {
        children: (0, r.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
          },
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/normal",
            children: t
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            selectable: true,
            style: {
              marginTop: "auto"
            },
            children: s
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    })
  } finally {
    null == n || n()
  }
}

function P() {
  let [e, t] = i.useState(false), {
    debugLogging: n,
    aecDumpEnabled: s
  } = (0, l.cf)([b.A], () => ({
    aecDumpSupported: b.A.isAecDumpSupported(),
    debugLogging: b.A.getDebugLogging(),
    aecDumpEnabled: b.A.getAecDump(),
    supportsConnectionReplay: b.A.supports(T.O5.CONNECTION_REPLAY)
  })), a = (0, l.bG)([h.default], () => h.default.isStreamInfoOverlayEnabled), o = (0, l.bG)([E.Ay], () => E.Ay.shouldRecordNextConnection()), p = i.useCallback(async () => {
    await y({
      onUploadStart: () => t(true)
    })
  }, []);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(f.x, {
      setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
      children: (0, r.jsx)(c.dOG, {
        label: S.intl.string(S.t["0CEP6e"]),
        description: S.intl.string(S.t["kBXuW+"]),
        checked: a,
        onChange: e => {
          (0, O.A)("stream_info_overlay_enabled", e, a), (0, u.x)({
            isStreamInfoOverlayEnabled: e
          })
        }
      })
    }), (0, r.jsx)(f.x, {
      setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, r.jsx)(c.dOG, {
        label: S.intl.string(S.t["r6K+TL"]),
        description: S.intl.string(S.t["xl9+I6"]),
        checked: s,
        onChange: e => d.A.setAecDump(e)
      })
    }), (0, r.jsxs)(f.x, {
      setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, r.jsx)(c.dOG, {
        label: S.intl.string(S.t.U4FgFK),
        description: S.intl.string(S.t.Lm72RU),
        checked: o,
        onChange: e => _.Et(e)
      }), (0, r.jsx)(m.A, {
        className: j.SX,
        children: (0, r.jsx)(m.A.Child, {
          grow: 0,
          shrink: 0,
          children: (0, r.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: S.intl.string(S.t.nJnOHO),
            onClick: () => _.YW()
          })
        })
      })]
    }), (0, r.jsx)(f.x, {
      setting: C.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(c.dOG, {
          label: S.intl.string(S.t["726JHL"]),
          description: S.intl.string(S.t["/7ak9Q"]),
          checked: n,
          onChange: N
        }), (0, r.jsxs)(c.ButtonGroup, {
          size: "sm",
          children: [(0, r.jsx)(c.Button, {
            variant: "primary",
            text: S.intl.string(S.t["3UB9ad"]),
            disabled: e,
            onClick: p
          }), (0, r.jsx)(c.Button, {
            variant: "secondary",
            text: S.intl.string(S.t.nuPtYi),
            onClick: v
          })]
        })]
      })
    })]
  })
}