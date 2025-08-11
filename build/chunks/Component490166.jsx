/** Chunk was on 69208 **/
/** chunk id: 490166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk13140 = require("./13140.js"),
  Chunk487029 = require("./487029.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk771031 = require("./771031.js");

function y(e) {
  let {
    guildId: t,
    channel: y,
    keybind: h,
    transitionState: b,
    onClose: k
  } = e, p = r.useCallback(async () => {
    (0, o.Kw)(o.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await k()
  }, [k]), f = r.useCallback(async () => {
    await p(), (0, s.ZDy)(async () => {
      let {
        default: e
      } = await n.e("5551").then(n.bind(n, 355453));
      return t => (0, i.jsx)(e, function(e) {
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
      }({}, t))
    })
  }, [p]), j = r.useMemo(() => [{
    variant: "secondary",
    text: d.intl.string(d.t["TJ0N9/"]),
    onClick: f
  }, {
    text: d.intl.string(d.t.ZwRzIC),
    onClick: p,
    variant: "primary"
  }], [f, p]);
  return (0, i.jsxs)(a.Modal, {
    onClose: p,
    actions: j,
    transitionState: b,
    title: d.intl.string(d.t["yJeV5+"]),
    children: [(0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      children: d.intl.format(d.t.fq3Sw8, {
        keybind: (0, c.BB)(h.shortcut, true).split(" + "),
        keybindHook: (e, t) => (0, i.jsx)("span", {
          className: u.keybindHintKeys,
          children: (0, i.jsx)(s.M2$, {
            className: u.keybindShortcut,
            shortcut: (0, c.BB)(h.shortcut, false)
          })
        }, t),
        openSettingsHook: (e, t) => (0, i.jsx)(s.eee, {
          onClick: f,
          children: e
        }, t)
      })
    }), (0, i.jsx)("div", {
      className: u.soundWheel,
      children: (0, i.jsx)(l.Z, {
        width: 372,
        height: 316,
        guildId: t,
        channel: y,
        interactive: false,
        keepOpen: true,
        onClose: () => {},
        analyticsSource: "education modal"
      })
    })]
  })
}