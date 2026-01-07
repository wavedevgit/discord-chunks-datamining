/** Chunk was on 6043 **/
/** chunk id: 895182, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
  Chunk510726 = require("./510726.js");

function f(e) {
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

function h(e, t) {
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

function x() {
  let e = (0, l.e7)([m.Z], () => m.Z.getGuildId()),
    t = (0, l.e7)([u.Z], () => {
      var t;
      return null == (t = u.Z.getGuild(e)) ? true : t.name
    }),
    n = (0, l.e7)([d.Z], () => {
      var t;
      return null == (t = d.Z.getStateForGuild(e)) ? true : t.instances
    }),
    x = r.useMemo(() => Object.values(null != n ? n : {})[0], [n]),
    b = r.useCallback(t => {
      null != x && null != e && o.Z.dispatch({
        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
        guildId: e,
        instance: h(f({}, x), {
          status: t
        })
      })
    }, [x, e]),
    g = r.useMemo(() => Object.values(i.V).map(e => (0, a.jsx)(s.Button, {
      variant: "primary",
      text: e,
      onClick: () => {
        b(e)
      }
    }, e)), [b]),
    v = r.useCallback(() => {
      null != x && null != e && o.Z.dispatch({
        type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
        guildId: e,
        instance: h(f({}, x), {
          serverIP: true,
          port: true,
          gameServerPanelUrl: true
        })
      })
    }, [x, e]);
  return null == e ? null : (0, a.jsxs)(s.zJl, {
    className: p.container,
    children: [(0, a.jsx)("div", {
      className: p.section,
      children: (0, a.jsx)(s.Heading, {
        variant: "heading-md/normal",
        children: "Current guild: ".concat(t)
      })
    }), (0, a.jsxs)("div", {
      className: p.section,
      children: [(0, a.jsx)(s.Text, {
        variant: "eyebrow",
        children: "Set server state for first server: ".concat(null == x ? true : x.name)
      }), (0, a.jsx)("div", {
        className: p.buttonContainer,
        children: g
      }), (0, a.jsx)(s.Text, {
        variant: "eyebrow",
        children: "Remove Server Info"
      }), (0, a.jsx)("div", {
        className: p.buttonContainer,
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
          (0, c.mF)(e)
        }
      })]
    })]
  })
}