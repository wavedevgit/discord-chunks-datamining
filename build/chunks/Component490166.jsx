/** Chunk was on 69208 **/
/** chunk id: 490166, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk536442 = require("./536442.js"),
  Chunk13140 = require("./13140.js"),
  Chunk487029 = require("./487029.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71661 = require("./71661.js");

function h(t) {
  let {
    guildId: e,
    channel: h,
    keybind: y,
    transitionState: b,
    onClose: k
  } = t, p = r.useCallback(async () => {
    (0, s.Kw)(s.v6.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await k()
  }, [k]), f = r.useCallback(async () => {
    await p(), (0, o.ZDy)(async () => {
      let {
        default: t
      } = await n.e("58120").then(n.bind(n, 355453));
      return e => (0, i.jsx)(t, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, e))
    })
  }, [p]), j = r.useMemo(() => [{
    variant: "secondary",
    text: d.intl.string(d.t.TJ0N99),
    onClick: f
  }, {
    text: d.intl.string(d.t.ZwRzIH),
    onClick: p,
    variant: "primary"
  }], [f, p]);
  return (0, i.jsxs)(a.Modal, {
    onClose: p,
    actions: j,
    transitionState: b,
    title: d.intl.string(d.t.yJeV51),
    children: [(0, i.jsx)(o.Text, {
      variant: "text-md/normal",
      children: d.intl.format(d.t.fq3Swz, {
        keybind: (0, c.BB)(y.shortcut, true).split(" + "),
        keybindHook: (t, e) => (0, i.jsx)("span", {
          className: u.keybindHintKeys,
          children: (0, i.jsx)(o.M2$, {
            className: u.keybindShortcut,
            shortcut: (0, c.BB)(y.shortcut, false)
          })
        }, e),
        openSettingsHook: (t, e) => (0, i.jsx)(o.Anchor, {
          onClick: f,
          children: t
        }, e)
      })
    }), (0, i.jsx)("div", {
      className: u.soundWheel,
      children: (0, i.jsx)(l.Z, {
        width: 372,
        height: 316,
        guildId: e,
        channel: h,
        interactive: false,
        keepOpen: true,
        onClose: () => {},
        analyticsSource: "education modal"
      })
    })]
  })
}