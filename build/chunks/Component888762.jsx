/** Chunk was on 51143 **/
/** chunk id: 888762, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk450510 = require("./450510.js"),
  Chunk350535 = require("./350535.js"),
  Chunk927421 = require("./927421.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk290844 = require("./290844.js");

function b(t) {
  let {
    guildId: e,
    channel: b,
    keybind: h,
    transitionState: p,
    onClose: f
  } = t, y = i.useCallback(async () => {
    (0, c.sF)(c._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await f()
  }, [f]), j = i.useCallback(async () => {
    await y(), (0, s.mMO)(async () => {
      let {
        default: t
      } = await n.e("12618").then(n.bind(n, 29681));
      return e => (0, a.jsx)(t, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), a.forEach(function(e) {
            var a;
            a = n[e], e in t ? Object.defineProperty(t, e, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = a
          })
        }
        return t
      }({}, e))
    })
  }, [y]), k = i.useMemo(() => [{
    variant: "secondary",
    text: d.intl.string(d.t.TJ0N99),
    onClick: j
  }, {
    text: d.intl.string(d.t.ZwRzIH),
    onClick: y,
    variant: "primary"
  }], [j, y]);
  return (0, a.jsxs)(r.Modal, {
    onClose: y,
    actions: k,
    transitionState: p,
    title: d.intl.string(d.t.yJeV51),
    children: [(0, a.jsx)(s.Text, {
      variant: "text-md/normal",
      children: d.intl.format(d.t.fq3Swz, {
        keybind: (0, o.dI)(h.shortcut, true).split(" + "),
        keybindHook: (t, e) => (0, a.jsx)("span", {
          className: u.EY,
          children: (0, a.jsx)(s.e7I, {
            className: u.d4,
            shortcut: (0, o.dI)(h.shortcut, false)
          })
        }, e),
        openSettingsHook: (t, e) => (0, a.jsx)(s.MzZ, {
          onClick: j,
          children: t
        }, e)
      })
    }), (0, a.jsx)("div", {
      className: u.Rj,
      children: (0, a.jsx)(l.A, {
        width: 372,
        height: 316,
        guildId: e,
        channel: b,
        interactive: false,
        keepOpen: true,
        onClose: () => {},
        analyticsSource: "education modal"
      })
    })]
  })
}