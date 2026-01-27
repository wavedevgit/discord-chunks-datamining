/** Chunk was on 77870 **/
/** chunk id: 359348, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk417597 = require("./417597.js"),
  Chunk342494 = require("./342494.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk42473 = require("./42473.jsx"),
  Chunk186111 = require("./186111.js"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk274372 = require("./274372.js"),
  Chunk572164 = require("./572164.js"),
  Chunk399925 = require("./399925.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk345314 = require("./345314.js"),
  Chunk145394 = require("./145394.js");

function j(e) {
  (0, o.L3)(e, async () => {
    let {
      default: e
    } = await n.e("44751").then(n.bind(n, 575538));
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
let v = e => {
    let {
      keybindString: t,
      targetElementRef: n
    } = e, [i, o] = l.useState(false), c = l.useCallback(() => o(false), []);
    return (0, r.jsx)(s.AM, {
      shouldShow: i,
      targetElementRef: n,
      position: "top",
      title: y.intl.format(y.t["o+srEw"], {
        keybind: t,
        keybindHook: () => (0, r.jsx)("span", {
          className: _.E,
          children: (0, r.jsx)(a.e7I, {
            className: _.d,
            shortcut: t
          })
        })
      }),
      body: y.intl.format(y.t.DWeRm1, {
        keybindHook: () => t,
        keybind: t
      }),
      graphic: {
        type: "image",
        src: O
      },
      caretConfig: {
        align: "center"
      },
      onRequestClose: c
    })
  },
  x = () => {
    let e = l.useRef(null),
      {
        parentAnalyticsLocation: t
      } = (0, c.Ay)(),
      n = (0, i.bG)([p.A], () => p.A.hasLayers()),
      s = (0, m.Et)(),
      o = (0, i.bG)([g.A], () => g.A.getIsAtMaxSaveClipOperations()),
      _ = (0, i.bG)([h.Ay], () => h.Ay.getKeybindForAction(A.hCu.SAVE_CLIP));
    if (!s || null == _ || n) return null;
    let O = f.dI(_.shortcut, true);
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(v, {
        keybindString: O,
        targetElementRef: e
      }), (0, r.jsx)(d.A, {
        ref: e,
        disabled: o,
        tooltipText: null != _ ? y.intl.formatToPlainString(y.t.HIMcv1, {
          hotkey: f.dI(null == _ ? true : _.shortcut, true)
        }) : y.intl.string(y.t.s52pju),
        onClick: () => {
          (0, b.l0)(), (0, u.X)(t, u.O.CLIP)
        },
        onContextMenu: j,
        icon: a.xgA
      })]
    })
  }