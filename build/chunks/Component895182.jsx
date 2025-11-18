/** Chunk was on 65347 **/
/** chunk id: 895182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk660815 = require("./660815.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk248919 = require("./248919.js");

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
  let e = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    t = (0, Chunk442837.e7)([Chunk430824.Z], () => {
      var t;
      return null == (t = Chunk430824.Z.getGuild(module)) ? true : exports.name
    }),
    n = (0, Chunk442837.e7)([Chunk60482.Z], () => {
      var t;
      return null == (t = Chunk60482.Z.getStateForGuild(module)) ? true : exports.instances
    }),
    g = Chunk473749.useMemo(() => Object.values(null != require ? require : {})[0], [require]),
    f = Chunk473749.useCallback(t => {
      null != g && null != e && o.Z.dispatch({
        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
        guildId: e,
        instance: x(h({}, g), {
          status: t
        })
      })
    }, [g, module]),
    b = Chunk473749.useMemo(() => Object.values(Chunk660815.V).map(e => (0, a.jsx)(s.Button, {
      variant: "primary",
      text: e,
      onClick: () => {
        f(e)
      }
    }, e)), [f]),
    v = Chunk473749.useCallback(() => {
      null != g && null != module && Chunk570140.Z.dispatch({
        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
        guildId: module,
        instance: x(h({}, g), {
          serverIP: true,
          port: true,
          gameServerPanelUrl: true
        })
      })
    }, [g, module]);
  return null == module ? null : (0, Chunk54381.jsxs)(Chunk481060.zJl, {
    className: Chunk248919.container,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk248919.section,
      children: (0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(exports)
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk248919.section,
      children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Set server state for first server: ".concat(null == g ? true : g.name)
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk248919.buttonContainer,
        children: b
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Remove Server Info"
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk248919.buttonContainer,
        children: (0, Chunk54381.jsx)(Chunk481060.Button, {
          variant: "primary",
          text: "Remove IP Address & Game Server Panel URL",
          onClick: v
        })
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Reset server"
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        text: "Reset",
        onClick: () => {
          (0, Chunk905551.mF)(module)
        }
      })]
    })]
  })
}