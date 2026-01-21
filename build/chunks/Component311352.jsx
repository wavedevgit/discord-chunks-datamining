/** Chunk was on 82124 **/
/** chunk id: 311352, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk399606 = require("./399606.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk870569 = require("./870569.jsx"),
  Chunk819640 = require("./819640.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk435064 = require("./435064.js"),
  Chunk341569 = require("./341569.js"),
  Chunk39604 = require("./39604.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk238168 = require("./238168.js"),
  Chunk38983 = require("./38983.js");

function x(e) {
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
let C = e => {
    let {
      keybindString: t,
      targetElementRef: n
    } = e, [l, s] = i.useState(false), c = i.useCallback(() => s(false), []);
    return (0, r.jsx)(a.J2, {
      shouldShow: l,
      targetElementRef: n,
      position: "top",
      title: v.intl.format(v.t["o+srEw"], {
        keybind: t,
        keybindHook: () => (0, r.jsx)("span", {
          className: O.keybindHintKeys,
          children: (0, r.jsx)(o.M2$, {
            className: O.keybindShortcut,
            shortcut: t
          })
        })
      }),
      body: v.intl.format(v.t.DWeRm1, {
        keybindHook: () => t,
        keybind: t
      }),
      graphic: {
        type: "image",
        src: j
      },
      caretConfig: {
        align: "center"
      },
      onRequestClose: c
    })
  },
  E = () => {
    let e = i.useRef(null),
      {
        parentAnalyticsLocation: t
      } = (0, c.ZP)(),
      n = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
      a = (0, m.z8)(),
      s = (0, l.e7)([g.Z], () => g.Z.getIsAtMaxSaveClipOperations()),
      O = (0, l.e7)([f.ZP], () => f.ZP.getKeybindForAction(y.kg4.SAVE_CLIP));
    if (!a || null == O || n) return null;
    let j = h.BB(O.shortcut, true);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(C, {
        keybindString: j,
        targetElementRef: e
      }), (0, r.jsx)(d.Z, {
        ref: e,
        disabled: s,
        tooltipText: null != O ? v.intl.formatToPlainString(v.t.HIMcv1, {
          hotkey: h.BB(null == O ? true : O.shortcut, true)
        }) : v.intl.string(v.t.s52pju),
        onClick: () => {
          (0, b.br)(), (0, u.v)(t, u.d.CLIP)
        },
        onContextMenu: x,
        icon: o.AlX
      })]
    })
  }