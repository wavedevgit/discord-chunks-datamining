/** Chunk was on 51143 **/
/** chunk id: 888762, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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

function h(t) {
  let {
    guildId: e,
    channel: h,
    keybind: b,
    transitionState: p,
    onClose: y
  } = t, k = a.useCallback(async () => {
    (0, c.sF)(c._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL), await y()
  }, [y]), f = a.useCallback(async () => {
    await k(), (0, s.mMO)(async () => {
      let {
        default: t
      } = await n.e("12618").then(n.bind(n, 29681));
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
  }, [k]), j = a.useMemo(() => [{
    variant: "secondary",
    text: d.intl.string(d.t.TJ0N99),
    onClick: f
  }, {
    text: d.intl.string(d.t.ZwRzIH),
    onClick: k,
    variant: "primary"
  }], [f, k]);
  return (0, i.jsxs)(r.Modal, {
    onClose: k,
    actions: j,
    transitionState: p,
    title: d.intl.string(d.t.yJeV51),
    children: [(0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      children: d.intl.format(d.t.fq3Swz, {
        keybind: (0, o.dI)(b.shortcut, true).split(" + "),
        keybindHook: (t, e) => (0, i.jsx)("span", {
          className: u.EY,
          children: (0, i.jsx)(s.e7I, {
            className: u.d4,
            shortcut: (0, o.dI)(b.shortcut, false)
          })
        }, e),
        openSettingsHook: (t, e) => (0, i.jsx)(s.MzZ, {
          onClick: f,
          children: t
        }, e)
      })
    }), (0, i.jsx)("div", {
      className: u.Rj,
      children: (0, i.jsx)(l.A, {
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