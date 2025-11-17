/** Chunk was on web.js **/
/** chunk id: 866040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk751688 = require("./751688.jsx"),
  Chunk456077 = require("./456077.jsx"),
  Chunk210887 = require("./210887.js"),
  Chunk5192 = require("./5192.js"),
  Chunk263884 = require("./263884.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function m(e) {
  let {
    participants: t,
    channel: i
  } = e;
  return (0, r.jsx)(a.Ttm, {
    className: d.popout,
    children: t.map(e => (0, r.jsx)(s.Z, {
      user: e,
      guildId: null == i ? true : i.guild_id,
      channelId: null == i ? true : i.id,
      nick: u.ZP.getNickname(null == i ? true : i.guild_id, null == i ? true : i.id, e),
      onContextMenu: t => {
        (0, o.jW)(t, async () => {
          let {
            default: t
          } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(n.bind(n, 881351));
          return n => (0, r.jsx)(t, h(_({}, n), {
            user: e
          }))
        })
      }
    }, e.id))
  })
}

function g(e) {
  let {
    children: t,
    participants: n,
    channel: o,
    onPopoutClosed: s,
    targetElementRef: u
  } = e, d = (0, i.e7)([c.Z], () => c.Z.theme), f = 1 === n.length ? n[0] : null;
  return null != f ? (0, r.jsx)(a.ze6, {
    theme: d,
    children: (0, r.jsx)(l.Z, {
      targetElementRef: u,
      user: f,
      guildId: null == o ? true : o.guild_id,
      channelId: null == o ? true : o.id,
      onClosePopout: s,
      children: t
    })
  }) : (0, r.jsx)(a.ze6, {
    theme: d,
    children: (0, r.jsx)(a.yRy, {
      targetElementRef: u,
      renderPopout: () => {
        if (null != n) return (0, r.jsx)(m, {
          participants: n,
          channel: o
        });
        throw Error("One of participant or participants is required")
      },
      children: t
    })
  })
}