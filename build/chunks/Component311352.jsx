/** Chunk was on 10023 **/
/** chunk id: 311352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk765585 = require("./765585.jsx"),
  Chunk870569 = require("./870569.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk435064 = require("./435064.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk909631 = require("./909631.js");

function j(e) {
  (0, s.jW)(e, async () => {
    let {
      default: e
    } = await n.e("21960").then(n.bind(n, 999466));
    return t => (0, r.jsx)(e, function(e) {
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
    }({}, t))
  })
}
let x = e => {
    let {
      keybindString: t,
      children: n,
      targetElementRef: i
    } = e;
    return (0, r.jsx)(a.yRy, {
      targetElementRef: i,
      shouldShow: false,
      position: "top",
      align: "center",
      renderPopout: e => {
        let {
          closePopout: n
        } = e;
        return (0, r.jsx)(d.Z, {
          dismissibleContent: o.z.CLIPS_ONBOARDING_CLIP_BUTTON_COACHMARK,
          shouldUseHorizontalButtons: true,
          inlineArt: true,
          artClassName: v.clipsEducationArt,
          position: "top",
          header: (0, r.jsx)("div", {
            className: v.header,
            children: O.intl.format(O.t["o+srEw"], {
              keybind: t,
              keybindHook: () => (0, r.jsx)("span", {
                className: v.keybindHintKeys,
                children: (0, r.jsx)(a.M2$, {
                  className: v.keybindShortcut,
                  shortcut: t
                })
              })
            })
          }),
          headerClassName: v.clipsEducationHeader,
          body: (0, r.jsx)(a.Text, {
            variant: "text-sm/normal",
            color: "always-white",
            className: v.bodyText,
            children: O.intl.format(O.t.DWeRm1, {
              keybindHook: () => (0, r.jsx)("div", {
                className: v.keyCombo,
                children: t
              }),
              keybind: t
            })
          }),
          onClose: e => {
            e.stopPropagation(), e.preventDefault(), null == n || n()
          }
        })
      },
      children: () => n
    })
  },
  C = () => {
    let e = Chunk473749.useRef(null),
      {
        parentAnalyticsLocation: t
      } = (0, Chunk906732.ZP)(),
      n = (0, Chunk399606.e7)([Chunk819640.Z], () => Chunk819640.Z.hasLayers()),
      o = (0, Chunk341569.z8)(),
      s = (0, Chunk399606.e7)([Chunk435064.Z], () => Chunk435064.Z.getIsAtMaxSaveClipOperations()),
      d = (0, Chunk399606.e7)([Chunk556296.ZP], () => Chunk556296.ZP.getKeybindForAction(Chunk981631.kg4.SAVE_CLIP));
    if (!Chunk704215 || null == Chunk765585 || require) return null;
    let v = Chunk13140.BB(Chunk765585.shortcut, true);
    return (0, Chunk54381.jsx)(x, {
      keybindString: Chunk909631,
      targetElementRef: module,
      children: (0, Chunk54381.jsx)(Chunk870569.Z, {
        ref: module,
        disabled: Chunk239091,
        tooltipText: null != Chunk765585 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.HIMcv1, {
          hotkey: Chunk13140.BB(null == Chunk765585 ? true : Chunk765585.shortcut, true)
        }) : Chunk388032.intl.string(Chunk388032.t.s52pju),
        onClick: () => {
          (0, Chunk39604.br)(), (0, Chunk522651.v)(exports, Chunk522651.d.CLIP)
        },
        onContextMenu: j,
        icon: Chunk481060.AlX
      })
    })
  }