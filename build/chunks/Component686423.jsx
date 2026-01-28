/** Chunk was on 5606 **/
/** chunk id: 686423, original params: e,t,n (module,exports,require) **/
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

function g(e) {
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
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = function() {
  let e = i.useRef(null),
    {
      analyticsLocations: t
    } = (0, o.Ay)(),
    {
      fractionalState: b
    } = (0, c.A)();

  function h(n) {
    null != e.current && (0, a.OoC)(e.current), (0, d.g)({
      analyticsLocation: {
        page: p.liQ.GUILD_BOOSTING_USER_SETTINGS,
        section: p.JJy.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
        object: p.ZSU.BUTTON_CTA,
        objectType: p.AnalyticsObjectTypes.BUY
      },
      analyticsLocations: t,
      guild: n
    })
  }
  async function A() {
    e.current = await (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 770101));
      return t => (0, r.jsx)(e, f(g({}, t), {
        onSelectGuild: h
      }))
    }, {
      onCloseRequest: () => {
        null != e.current && (0, a.OoC)(e.current)
      }
    })
  }
  let E = (0, u.Nc)({
    fractionalState: b
  });
  return (0, r.jsxs)("div", {
    className: m.iE,
    children: [(0, r.jsx)(a._Jp, {
      color: a.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
      className: m.$J
    }), (0, r.jsx)(a.Text, {
      className: m.C,
      color: "text-default",
      variant: "text-sm/medium",
      children: _.intl.format(_.t.kqC5vq, {
        boostAnyGuildHook: (e, t) => {
          let n = null != E,
            i = (0, a.Oer)(e),
            o = (0, r.jsx)("div", {
              className: m.lO,
              children: (0, r.jsx)(s.QWc, {
                variant: "primary",
                onClick: n ? true : A,
                text: i,
                disabled: n
              }, t)
            });
          return n ? (0, r.jsx)(l.A, {
            text: E,
            "aria-label": E.toString(),
            children: e => (0, r.jsx)("span", f(g({}, e), {
              children: o
            }))
          }, t) : o
        }
      })
    })]
  })
}