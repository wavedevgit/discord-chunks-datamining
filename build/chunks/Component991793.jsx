/** Chunk was on 60449 **/
/** chunk id: 991793, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => D,
  G0: () => _,
  p9: () => I,
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
async function _() {
  let e = await h.A.fileManager.getLogPath();
  h.A.fileManager.showItemInFolder(e)
}

function I(e) {
  (0, a.A)({
    title: T.intl.string(T.t["7UXEF2"]),
    subtitle: T.intl.string(T.t.IYPrRl),
    confirmText: T.intl.string(T.t.BddRzS),
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
    await O.A.getMediaEngine().writeAudioDebugState(), await b.A.submitLiveCrashReport({
      message: {
        message: "User Live Dump"
      }
    }), await (0, A.a)(C.Umv.RTC), e = T.intl.string(T.t["fKBB8+"]), t = T.intl.string(T.t.BvyxE7), (0, r.A)({
      title: e,
      subtitle: t
    })
  } catch (a) {
    var s, l;
    let e, t, n, r;
    s = a.displayMessage, e = T.intl.string(T.t.QZg0J7), t = null != s ? s : T.intl.string(T.t.VzHcSm), n = null == (l = (0, p.B1)(p.iy.DEBUG_LOG_UPLOAD_FAILED)) ? true : l.errorCode, r = T.intl.formatToPlainString(T.t.ejOT95, {
      errorCode: n
    }), (0, c.qfG)(n => {
      var s, l;
      return (0, i.jsx)(c.VoidConfirmModal, (s = function(e) {
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
        header: e,
        confirmButtonColor: o.$n.Colors.BRAND,
        confirmText: T.intl.string(T.t.BddRzS)
      }, n), l = l = {
        children: (0, i.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
          },
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/normal",
            children: t
          }), (0, i.jsx)(c.Text, {
            variant: "text-sm/semibold",
            selectable: true,
            style: {
              marginTop: "auto"
            },
            children: r
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(l, e))
      }), s))
    })
  } finally {
    null == n || n()
  }
}

function D() {
  let [e, t] = s.useState(false), {
    debugLogging: n,
    aecDumpEnabled: r
  } = (0, l.cf)([O.A], () => ({
    aecDumpSupported: O.A.isAecDumpSupported(),
    debugLogging: O.A.getDebugLogging(),
    aecDumpEnabled: O.A.getAecDump(),
    supportsConnectionReplay: O.A.supports(f.O5.CONNECTION_REPLAY)
  })), a = (0, l.bG)([j.default], () => j.default.isStreamInfoOverlayEnabled), o = (0, l.bG)([E.Ay], () => E.Ay.shouldRecordNextConnection()), h = s.useCallback(async () => {
    await y({
      onUploadStart: () => t(true)
    })
  }, []);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(m.x, {
      setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
      children: (0, i.jsx)(c.dOG, {
        label: T.intl.string(T.t["0CEP6e"]),
        description: T.intl.string(T.t["kBXuW+"]),
        checked: a,
        onChange: e => {
          (0, S.A)("stream_info_overlay_enabled", e, a), (0, u.x)({
            isStreamInfoOverlayEnabled: e
          })
        }
      })
    }), (0, i.jsx)(m.x, {
      setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, i.jsx)(c.dOG, {
        label: T.intl.string(T.t["r6K+TL"]),
        description: T.intl.string(T.t["xl9+I6"]),
        checked: r,
        onChange: e => d.A.setAecDump(e)
      })
    }), (0, i.jsxs)(m.x, {
      setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, i.jsx)(c.dOG, {
        label: T.intl.string(T.t.U4FgFK),
        description: T.intl.string(T.t.Lm72RU),
        checked: o,
        onChange: e => g.Et(e)
      }), (0, i.jsx)(x.A, {
        className: N.SX,
        children: (0, i.jsx)(x.A.Child, {
          grow: 0,
          shrink: 0,
          children: (0, i.jsx)(c.Button, {
            variant: "primary",
            size: "sm",
            text: T.intl.string(T.t.nJnOHO),
            onClick: () => g.YW()
          })
        })
      })]
    }), (0, i.jsx)(m.x, {
      setting: v.H.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: (0, i.jsxs)("div", {
        children: [(0, i.jsx)(c.dOG, {
          label: T.intl.string(T.t["726JHL"]),
          description: T.intl.string(T.t["/7ak9Q"]),
          checked: n,
          onChange: I
        }), (0, i.jsxs)(c.ButtonGroup, {
          size: "sm",
          children: [(0, i.jsx)(c.Button, {
            variant: "primary",
            text: T.intl.string(T.t["3UB9ad"]),
            disabled: e,
            onClick: h
          }), (0, i.jsx)(c.Button, {
            variant: "secondary",
            text: T.intl.string(T.t.nuPtYi),
            onClick: _
          })]
        })]
      })
    })]
  })
}