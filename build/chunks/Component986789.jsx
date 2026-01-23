/** Chunk was on 22477 **/
/** chunk id: 986789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk390544 = require("./390544.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk665171 = require("./665171.js"),
  Chunk522055 = require("./522055.js"),
  Chunk71393 = require("./71393.js"),
  Chunk967198 = require("./967198.js"),
  Chunk566381 = require("./566381.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g() {
  let e = (0, i.bG)([m.A], () => m.A.getGuildId()),
    t = (0, i.bG)([u.A], () => {
      var t;
      return null == (t = u.A.getGuild(e)) ? true : t.name
    }),
    n = (0, i.bG)([d.A], () => {
      var t;
      return null == (t = d.A.getStateForGuild(e)) ? true : t.instances
    }),
    g = l.useMemo(() => Object.values(null != n ? n : {})[0], [n]),
    f = l.useCallback(t => {
      null != g && null != e && o.h.dispatch({
        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
        guildId: e,
        instance: x(h({}, g), {
          status: t
        })
      })
    }, [g, e]),
    b = l.useMemo(() => Object.values(r.M).map(e => (0, a.jsx)(s.Button, {
      variant: "primary",
      text: e,
      onClick: () => {
        f(e)
      }
    }, e)), [f]),
    v = l.useCallback(() => {
      null != g && null != e && o.h.dispatch({
        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
        guildId: e,
        instance: x(h({}, g), {
          serverIP: true,
          port: true,
          gameServerPanelUrl: true
        })
      })
    }, [g, e]);
  return null == e ? null : (0, a.jsxs)(s.IpV, {
    className: p.kL,
    children: [(0, a.jsx)("div", {
      className: p.uW,
      children: (0, a.jsx)(s.Heading, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(t)
      })
    }), (0, a.jsxs)("div", {
      className: p.uW,
      children: [(0, a.jsx)(s.Text, {
        variant: "eyebrow",
        children: "Set server state for first server: ".concat(null == g ? true : g.name)
      }), (0, a.jsx)("div", {
        className: p.UD,
        children: b
      }), (0, a.jsx)(s.Text, {
        variant: "eyebrow",
        children: "Remove Server Info"
      }), (0, a.jsx)("div", {
        className: p.UD,
        children: (0, a.jsx)(s.Button, {
          variant: "primary",
          text: "Remove IP Address & Game Server Panel URL",
          onClick: v
        })
      }), (0, a.jsx)(s.Text, {
        variant: "eyebrow",
        children: "Reset server"
      }), (0, a.jsx)(s.Button, {
        variant: "primary",
        text: "Reset",
        onClick: () => {
          (0, c.cq)(e)
        }
      })]
    })]
  })
}