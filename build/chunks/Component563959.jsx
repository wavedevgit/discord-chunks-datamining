/** Chunk was on 66866 **/
/** chunk id: 563959, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => f,
  e: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk670188 = require("./670188.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk693912 = require("./693912.js"),
  Chunk981631 = require("./981631.js");

function m(e, t) {
  let n = i.useRef(null);
  return i.useCallback(i => (a, o) => {
    let s = u.ZP.getApplicationIconURL({
        id: i.id,
        icon: i.icon,
        bot: i.bot,
        botIconFirst: true
      }),
      {
        bot: d
      } = i;
    return null == d ? a : (0, r.jsx)(c.Z, {
      targetElementRef: n,
      userId: d.id,
      avatarUrl: s,
      guildId: e.guild_id,
      channelId: e.id,
      messageId: t.id,
      clickTrap: true,
      children: e => {
        var t, i;
        return (0, r.jsx)(l.eee, (t = function(e) {
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
    }, o)
  }, [e, t.id])
}

function f(e) {
  let {
    message: t,
    channel: i,
    compact: l
  } = e, c = (0, a.ZP)(t), u = t.application, f = (0, o.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), _ = m(i, t);
  return (0, r.jsx)(s.Z, {
    icon: n(570111),
    timestamp: t.timestamp,
    compact: l,
    children: (0, d.DS)({
      application: u,
      username: c.nick,
      usernameHook: f(c),
      applicationNameHook: null != u ? _(u) : p.dG4
    })
  })
}

function _(e) {
  let {
    message: t,
    channel: i,
    compact: l
  } = e, c = (0, a.ZP)(t), u = t.application, f = (0, o.l)({
    user: t.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: t.id
  }), _ = m(i, t);
  return (0, r.jsx)(s.Z, {
    icon: n(474019),
    timestamp: t.timestamp,
    compact: l,
    children: (0, d.nh)({
      application: u,
      username: c.nick,
      usernameHook: f(c),
      applicationNameHook: null != u ? _(u) : p.dG4
    })
  })
}