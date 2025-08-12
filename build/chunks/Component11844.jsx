/** Chunk was on 20501 **/
/** chunk id: 11844, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk125529 = require("./125529.jsx"),
  Chunk879892 = require("./879892.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk805861 = require("./805861.js");

function h(e) {
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
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = function() {
  let e = Chunk73800.useRef(null),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(),
    {
      fractionalState: b
    } = (0, Chunk975298.Z)();

  function x(n) {
    null != e.current && (0, a.Mr3)(e.current), (0, d.u)({
      analyticsLocation: {
        page: m.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: m.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
        object: m.qAy.BUTTON_CTA,
        objectType: m.Qqv.BUY
      },
      analyticsLocations: t,
      guild: n
    })
  }
  async function _() {
    module.current = await (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(require.bind(require, 719228));
      return t => (0, i.jsx)(e, f(h({}, t), {
        onSelectGuild: x
      }))
    }, {
      onCloseRequest: () => {
        null != module.current && (0, Chunk481060.Mr3)(module.current)
      }
    })
  }
  let j = (0, Chunk267642.aq)({
    fractionalState: b
  });
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk805861.wrapper,
    children: [(0, Chunk255367.jsx)(Chunk481060.$Eu, {
      color: Chunk481060.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: Chunk805861.boostIcon
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk805861.copy,
      color: "header-secondary",
      variant: "text-sm/medium",
      children: Chunk388032.intl.format(Chunk388032.t.kqC5vr, {
        boostAnyGuildHook: (e, t) => {
          let n = null != j,
            r = (0, i.jsx)(s.zx, {
              className: g.cta,
              disabled: n,
              color: s.zx.Colors.LINK,
              look: s.zx.Looks.LINK,
              onClick: n ? true : _,
              children: e
            }, t);
          return n ? (0, i.jsx)(c.Z, {
            text: j,
            "aria-label": j.toString(),
            children: e => (0, i.jsx)("span", f(h({}, e), {
              children: r
            }))
          }, t) : r
        }
      })
    })]
  })
}