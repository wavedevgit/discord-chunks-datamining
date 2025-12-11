/** Chunk was on 69208 **/
/** chunk id: 490166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk13140 = require("./13140.js"),
  Chunk487029 = require("./487029.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk362961 = require("./362961.js");

function b(e) {
  let {
    guildId: t,
    channel: b,
    keybind: h,
    transitionState: y,
    onClose: k
  } = e, p = a.useCallback(async () => {
    (0, o.Kw)(o.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await k()
  }, [k]), f = a.useCallback(async () => {
    await p(), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("58120").then(n.bind(n, 355453));
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
  }, [p]), j = a.useMemo(() => [{
    variant: "secondary",
    text: d.intl.string(d.t.TJ0N99),
    onClick: f
  }, {
    text: d.intl.string(d.t.ZwRzIH),
    onClick: p,
    variant: "primary"
  }], [f, p]);
  return (0, i.jsxs)(r.Modal, {
    onClose: p,
    actions: j,
    transitionState: y,
    title: d.intl.string(d.t.yJeV51),
    children: [(0, i.jsx)(c.Text, {
      variant: "text-md/normal",
      children: d.intl.format(d.t.fq3Swz, {
        keybind: (0, s.BB)(h.shortcut, true).split(" + "),
        keybindHook: (e, t) => (0, i.jsx)("span", {
          className: u.keybindHintKeys,
          children: (0, i.jsx)(c.M2$, {
            className: u.keybindShortcut,
            shortcut: (0, s.BB)(h.shortcut, false)
          })
        }, t),
        openSettingsHook: (e, t) => (0, i.jsx)(c.Anchor, {
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
        channel: b,
        interactive: false,
        keepOpen: true,
        onClose: () => {},
        analyticsSource: "education modal"
      })
    })]
  })
}