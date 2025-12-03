/** Chunk was on web.js **/
/** chunk id: 11844, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk589358 = require("./589358.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk879892 = require("./879892.jsx"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk569029 = require("./569029.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = function() {
  let e = Chunk473749.useRef(null),
    {
      analyticsLocations: t
    } = (0, Chunk906732.ZP)(),
    {
      fractionalState: m
    } = (0, Chunk975298.Z)();

  function g(n) {
    null != e.current && (0, s.Mr3)(e.current), (0, u.u)({
      analyticsLocation: {
        page: f.ZY5.GUILD_BOOSTING_USER_SETTINGS,
        section: f.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
        object: f.qAy.BUTTON_CTA,
        objectType: f.AnalyticsObjectTypes.BUY
      },
      analyticsLocations: t,
      guild: n
    })
  }
  async function b() {
    module.current = await (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(require.bind(require, 719228));
      return t => (0, r.jsx)(e, E(h({}, t), {
        onSelectGuild: g
      }))
    }, {
      onCloseRequest: () => {
        null != module.current && (0, Chunk481060.Mr3)(module.current)
      }
    })
  }
  let y = (0, Chunk267642.aq)({
    fractionalState: m
  });
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk569029.wrapper,
    children: [(0, Chunk54381.jsx)(Chunk481060.Ucv, {
      color: Chunk481060.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: Chunk569029.boostIcon
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk569029.copy,
      color: "text-default",
      variant: "text-sm/medium",
      children: Chunk388032.intl.format(Chunk388032.t.kqC5vq, {
        boostAnyGuildHook: (e, t) => {
          let n = null != y,
            i = (0, s.qgQ)(e),
            l = (0, r.jsx)("div", {
              className: _.cta,
              children: (0, r.jsx)(o.Avr, {
                variant: "primary",
                onClick: n ? true : b,
                text: i,
                disabled: n
              }, t)
            });
          return n ? (0, r.jsx)(a.Z, {
            text: y,
            "aria-label": y.toString(),
            children: e => (0, r.jsx)("span", E(h({}, e), {
              children: l
            }))
          }, t) : l
        }
      })
    })]
  })
}