/** Chunk was on 5588 **/
/** chunk id: 113231, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk660815 = require("./660815.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk430824 = require("./430824.js"),
  Chunk914010 = require("./914010.js"),
  Chunk733870 = require("./733870.js");

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

function f() {
  let e = (0, Chunk442837.e7)([Chunk914010.Z], () => Chunk914010.Z.getGuildId()),
    t = (0, Chunk442837.e7)([Chunk430824.Z], () => {
      var t;
      return null == (t = Chunk430824.Z.getGuild(module)) ? true : exports.name
    }),
    n = (0, Chunk442837.e7)([Chunk693587.Z], () => {
      var t;
      return null == (t = Chunk693587.Z.getStateForGuild(module)) ? true : exports.instances
    }),
    f = Chunk647438.useMemo(() => Object.values(null != require ? require : {})[0], [require]),
    b = Chunk647438.useCallback(t => {
      null != f && null != e && o.Z.dispatch({
        type: "PORTKEY_UPDATE_INSTANCE_SUCCESS",
        guildId: e,
        instance: x(h({}, f), {
          status: t
        })
      })
    }, [f, module]),
    g = Chunk647438.useMemo(() => Object.values(Chunk660815.V).map(e => (0, a.jsx)(s.zxk, {
      variant: "primary",
      text: e,
      onClick: () => {
        b(e)
      }
    }, e)), [b]),
    v = Chunk647438.useCallback(() => {
      null != f && null != module && Chunk570140.Z.dispatch({
        type: "PORTKEY_UPDATE_INSTANCE_SUCCESS",
        guildId: module,
        instance: x(h({}, f), {
          serverIP: true,
          port: true,
          gameServerPanelUrl: true
        })
      })
    }, [f, module]);
  return null == module ? null : (0, Chunk951288.jsxs)(Chunk481060.zJl, {
    className: Chunk733870.container,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk733870.section,
      children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(exports)
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk733870.section,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Set server state for first server: ".concat(null == f ? true : f.name)
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk733870.buttonContainer,
        children: g
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Remove Server Info"
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk733870.buttonContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Remove IP Address & Game Server Panel URL",
          onClick: v
        })
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "eyebrow",
        children: "Reset server"
      }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
        variant: "primary",
        text: "Reset",
        onClick: () => {
          (0, Chunk744993.EC)(module)
        }
      })]
    })]
  })
}