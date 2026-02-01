/** Chunk was on 30485 **/
/** chunk id: 929548, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  L: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk139033 = require("./139033.jsx"),
  Chunk314116 = require("./314116.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk827343 = require("./827343.js"),
  Chunk77729 = require("./77729.js"),
  Chunk839214 = require("./839214.js"),
  Chunk98919 = require("./98919.js"),
  Chunk709710 = require("./709710.js"),
  Chunk419954 = require("./419954.js"),
  Chunk430452 = require("./430452.js"),
  Chunk353835 = require("./353835.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk731854 = require("./731854.js"),
  Chunk985018 = require("./985018.jsx");
let p = (0, Chunk839214.D)(() => ({
  isUploading: false,
  isDisabled: false
}));
async function L() {
  let t = await A.A.fileManager.getLogPath();
  A.A.fileManager.showItemInFolder(t)
}

function D(t) {
  (0, a.A)({
    title: b.intl.string(b.t["7UXEF2"]),
    subtitle: b.intl.string(b.t.IYPrRl),
    confirmText: b.intl.string(b.t.BddRzS),
    onConfirm: () => T.A.setDebugLogging(t)
  })
}
async function m(t) {
  let {
    onUploadStart: e,
    onUploadFinish: i
  } = t;
  null == e || e();
  try {
    let t, e;
    await _.A.getMediaEngine().writeAudioDebugState(), await I.A.submitLiveCrashReport({
      message: {
        message: "User Live Dump"
      }
    }), await (0, c.a)(N.Umv.RTC), t = b.intl.string(b.t["fKBB8+"]), e = b.intl.string(b.t.BvyxE7), (0, u.A)({
      title: t,
      subtitle: e
    })
  } catch (u) {
    var l, s;
    let t, e, i, r;
    l = u.displayMessage, t = b.intl.string(b.t.QZg0J7), e = null != l ? l : b.intl.string(b.t.VzHcSm), i = null == (s = (0, E.B1)(E.iy.DEBUG_LOG_UPLOAD_FAILED)) ? true : s.errorCode, r = b.intl.formatToPlainString(b.t.ejOT95, {
      errorCode: i
    }), (0, d.qfG)(i => {
      var l, s;
      return (0, n.jsx)(d.VoidConfirmModal, (l = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({
        header: t,
        confirmButtonColor: o.$n.Colors.BRAND,
        confirmText: b.intl.string(b.t.BddRzS)
      }, i), s = s = {
        children: (0, n.jsxs)("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            height: "100%"
          },
          children: [(0, n.jsx)(d.Text, {
            variant: "text-md/normal",
            children: e
          }), (0, n.jsx)(d.Text, {
            variant: "text-sm/semibold",
            selectable: true,
            style: {
              marginTop: "auto"
            },
            children: r
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          i.push.apply(i, n)
        }
        return i
      })(Object(s)).forEach(function(t) {
        Object.defineProperty(l, t, Object.getOwnPropertyDescriptor(s, t))
      }), l))
    })
  } finally {
    null == i || i()
  }
}
async function R() {
  await m({
    onUploadStart: () => p.setState({
      isUploading: true
    }),
    onUploadFinish: () => p.setState({
      isUploading: false,
      isDisabled: true
    })
  })
}
let f = (0, Chunk419954.E2)(Chunk780964.X.VOICE_AND_VIDEO_DEBUG_LOGGING, {
  useSearchTerms: () => [b.intl.string(b.t["726JHL"]), b.intl.string(b.t.EbwFfR), b.intl.string(b.t.nuPtYi)],
  usePredicate: function() {
    let t = (0, r.bG)([_.A], () => _.A.supports(C.O5.DEBUG_LOGGING));
    return s.Av && t && null != A.A.fileManager.readLogFiles
  },
  Component: function() {
    let t = (0, r.bG)([_.A], () => _.A.getDebugLogging()),
      e = p.useField("isUploading"),
      i = p.useField("isDisabled"),
      s = l.useId();
    return (0, n.jsxs)("fieldset", {
      children: [(0, n.jsx)(d.AC4, {
        tag: "legend",
        id: s,
        children: b.intl.string(b.t["FjN+et"])
      }), (0, n.jsxs)(d.BJc, {
        direction: "vertical",
        gap: 4,
        children: [(0, n.jsx)(d.dOG, {
          label: b.intl.string(b.t["726JHL"]),
          description: b.intl.string(b.t["/7ak9Q"]),
          checked: t,
          onChange: D
        }), (0, n.jsx)("div", {
          role: "group",
          "aria-labelledby": s,
          children: (0, n.jsxs)(d.ButtonGroup, {
            children: [(0, n.jsx)(d.Button, {
              variant: "secondary",
              text: b.intl.string(b.t.EbwFfR),
              onClick: R,
              loading: e,
              disabled: i,
              "aria-label": b.intl.string(b.t.aY1OH2)
            }), (0, n.jsx)(d.Button, {
              variant: "secondary",
              text: b.intl.string(b.t.nuPtYi),
              onClick: L,
              "aria-label": b.intl.string(b.t["L/hFOe"])
            })]
          })
        })]
      })]
    })
  }
})