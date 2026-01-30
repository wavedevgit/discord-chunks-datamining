/** Chunk was on 64935 **/
/** chunk id: 302291, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  R: () => f,
  d: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk342296 = require("./342296.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk552691 = require("./552691.js"),
  Chunk652215 = require("./652215.js");

function m(e, t) {
  let n = i.useRef(null);
  return i.useCallback(i => (a, s) => {
    let o = u.Ay.getApplicationIconURL({
        id: i.id,
        icon: i.icon,
        bot: i.bot,
        botIconFirst: true
      }),
      {
        bot: d
      } = i;
    return null == d ? a : (0, r.jsx)(c.A, {
      targetElementRef: n,
      userId: d.id,
      avatarUrl: o,
      guildId: e.guild_id,
      channelId: e.id,
      messageId: t.id,
      clickTrap: true,
      children: e => {
        var t, i;
        return (0, r.jsx)(l.MzZ, (t = function(e) {
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
        }({}, e), i = i = {
          ref: n,
          children: a
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
        }), t))
      }
    }, s)
  }, [e, t.id])
}

function f(e) {
  let {
    message: t,
    channel: i,
    compact: l
  } = e, c = (0, a.Ay)(t), u = t.application, f = (0, s.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), g = m(i, t);
  return (0, r.jsx)(o.A, {
    icon: n(394803),
    timestamp: t.timestamp,
    compact: l,
    children: (0, d.eu)({
      application: u,
      username: c.nick,
      usernameHook: f(c),
      applicationNameHook: null != u ? g(u) : p.tEg
    })
  })
}

function g(e) {
  let {
    message: t,
    channel: i,
    compact: l
  } = e, c = (0, a.Ay)(t), u = t.application, f = (0, s.P)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), g = m(i, t);
  return (0, r.jsx)(o.A, {
    icon: n(884797),
    timestamp: t.timestamp,
    compact: l,
    children: (0, d.A0)({
      application: u,
      username: c.nick,
      usernameHook: f(c),
      applicationNameHook: null != u ? g(u) : p.tEg
    })
  })
}