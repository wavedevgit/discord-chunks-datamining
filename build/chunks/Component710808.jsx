/** Chunk was on web.js **/
/** chunk id: 710808, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
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

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
async function P() {
  let e = await Chunk579806.Z.fileManager.getLogPath();
  Chunk579806.Z.fileManager.showItemInFolder(module)
}

function w() {
  let e = Chunk388032.intl.string(Chunk388032.t["fKBB8/"]),
    t = Chunk388032.intl.string(Chunk388032.t.BvyxEx);
  (0, Chunk481060.h7j)(n => (0, r.jsx)(s.ConfirmModal, R(C({
    header: e,
    confirmButtonColor: o.zx.Colors.BRAND,
    confirmText: T.intl.string(T.t.BddRzc)
  }, n), {
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: t
    })
  })))
}

function D(e) {
  var t;
  let n = T.intl.string(T.t.QZg0Jy),
    i = null != e ? e : T.intl.string(T.t.VzHcSk),
    a = null == (t = (0, p.hp)(p.u.DEBUG_LOG_UPLOAD_FAILED)) ? true : t.errorCode,
    l = T.intl.formatToPlainString(T.t["ejOT9/"], {
      errorCode: a
    });
  (0, s.h7j)(e => (0, r.jsx)(s.ConfirmModal, R(C({
    header: n,
    confirmButtonColor: o.zx.Colors.BRAND,
    confirmText: T.intl.string(T.t.BddRzc)
  }, e), {
    children: (0, r.jsxs)("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
      },
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        children: i
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/semibold",
        selectable: true,
        style: {
          marginTop: "auto"
        },
        children: l
      })]
    })
  })))
}

function x(e) {
  (0, s.h7j)(t => (0, r.jsx)(s.ConfirmModal, R(C({
    header: T.intl.string(T.t["7UXEFx"]),
    confirmText: T.intl.string(T.t.BddRzc),
    cancelText: T.intl.string(T.t["ETE/oK"]),
    onCancel: t.onClose,
    onConfirm: () => l.Z.setDebugLogging(e)
  }, t), {
    children: (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      children: T.intl.string(T.t.IYPrRk)
    })
  })))
}

function L(e) {
  let {
    refreshStyles: t = false
  } = e, [n, o] = i.useState(false), {
    debugLogging: d,
    aecDumpEnabled: p
  } = (0, a.cj)([g.Z], () => ({
    aecDumpSupported: g.Z.isAecDumpSupported(),
    debugLogging: g.Z.getDebugLogging(),
    aecDumpEnabled: g.Z.getAecDump(),
    supportsConnectionReplay: g.Z.supports(I.AN.CONNECTION_REPLAY)
  })), A = (0, a.e7)([m.default], () => m.default.isStreamInfoOverlayEnabled), C = (0, a.e7)([E.ZP], () => E.ZP.shouldRecordNextConnection());
  async function N() {
    o(true);
    try {
      await g.Z.getMediaEngine().writeAudioDebugState(), await b.Z.submitLiveCrashReport({
        message: {
          message: "User Live Dump"
        }
      }), await (0, _.E)(v.GU0.RTC), w()
    } catch (e) {
      D(e.displayMessage)
    }
  }
  let R = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY,
      children: (0, r.jsx)(s.j7V, {
        value: A,
        onChange: e => {
          (0, y.Z)("stream_info_overlay_enabled", e, A), (0, c.y)({
            isStreamInfoOverlayEnabled: e
          })
        },
        note: T.intl.string(T.t.kBXuW1),
        hideBorder: t,
        children: T.intl.string(T.t["0CEP6e"])
      })
    }), (0, r.jsx)(h.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP,
      children: (0, r.jsx)(s.j7V, {
        value: p,
        onChange: e => l.Z.setAecDump(e),
        note: T.intl.string(T.t["xl9+Iy"]),
        hideBorder: t,
        children: T.intl.string(T.t["r6K+TE"])
      })
    }), (0, r.jsxs)(h.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY,
      children: [(0, r.jsx)(s.j7V, {
        hideBorder: true,
        value: C,
        onChange: e => u.TC(e),
        note: T.intl.string(T.t.Lm72RU),
        children: T.intl.string(T.t.U4FgFB)
      }), (0, r.jsx)(s.xJW, {
        children: (0, r.jsx)(f.Z, {
          className: S.marginBottom20,
          children: (0, r.jsx)(f.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, r.jsx)(s.zxk, {
              variant: "primary",
              size: "sm",
              text: T.intl.string(T.t.nJnOHB),
              onClick: () => u.z4()
            })
          })
        })
      }), t ? null : (0, r.jsx)(s.$i$, {
        className: S.marginBottom20
      })]
    }), (0, r.jsx)(h.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING,
      children: (0, r.jsxs)("div", {
        children: [(0, r.jsx)(s.j7V, {
          hideBorder: true,
          value: d,
          onChange: x,
          note: T.intl.string(T.t["/7ak9f"]),
          children: T.intl.string(T.t["726JHB"])
        }), (0, r.jsx)(s.xJW, {
          children: (0, r.jsxs)(s.hE2, {
            size: "sm",
            children: [(0, r.jsx)(s.zxk, {
              variant: "primary",
              text: T.intl.string(T.t["3UB9aW"]),
              disabled: n,
              onClick: N
            }), (0, r.jsx)(s.zxk, {
              variant: "primary",
              text: T.intl.string(T.t.nuPtYm),
              onClick: P
            })]
          })
        })]
      })
    })]
  });
  return t ? R : (0, r.jsx)(s.hjN, {
    className: S.marginBottom40,
    title: T.intl.string(T.t.OFpL3d),
    children: R
  })
}