/** Chunk was on web.js **/
/** chunk id: 686423, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk502572 = require("./502572.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk987144 = require("./987144.jsx"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk572523 = require("./572523.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
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
  let e = i.useRef(null),
    {
      analyticsLocations: t
    } = (0, l.Ay)(),
    {
      fractionalState: h
    } = (0, c.A)();

  function g(n) {
    null != e.current && (0, o.OoC)(e.current), (0, u.g)({
      analyticsLocation: {
        page: f.liQ.GUILD_BOOSTING_USER_SETTINGS,
        section: f.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
        object: f.ZSU.BUTTON_CTA,
        objectType: f.AnalyticsObjectTypes.BUY
      },
      analyticsLocations: t,
      guild: n
    })
  }
  async function b() {
    e.current = await (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 770101));
      return t => (0, r.jsx)(e, E(m({}, t), {
        onSelectGuild: g
      }))
    }, {
      onCloseRequest: () => {
        null != e.current && (0, o.OoC)(e.current)
      }
    })
  }
  let y = (0, d.Nc)({
    fractionalState: h
  });
  return (0, r.jsxs)("div", {
    className: _.iE,
    children: [(0, r.jsx)(o._Jp, {
      color: o.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: _.$J
    }), (0, r.jsx)(o.Text, {
      className: _.C,
      color: "text-default",
      variant: "text-sm/medium",
      children: p.intl.format(p.t.kqC5vq, {
        boostAnyGuildHook: (e, t) => {
          let n = null != y,
            i = (0, o.Oer)(e),
            l = (0, r.jsx)("div", {
              className: _.lO,
              children: (0, r.jsx)(s.QWc, {
                variant: "primary",
                onClick: n ? true : b,
                text: i,
                disabled: n
              }, t)
            });
          return n ? (0, r.jsx)(a.A, {
            text: y,
            "aria-label": y.toString(),
            children: e => (0, r.jsx)("span", E(m({}, e), {
              children: l
            }))
          }, t) : l
        }
      })
    })]
  })
}