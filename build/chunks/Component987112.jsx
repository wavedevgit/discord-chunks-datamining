/** Chunk was on web.js **/
/** chunk id: 987112, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk155718 = require("./155718.js"),
  Chunk58149 = require("./58149.js"),
  Chunk842209 = require("./842209.js"),
  Chunk990474 = require("./990474.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk183555 = require("./183555.jsx"),
  Chunk900179 = require("./900179.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk624082 = require("./624082.js");

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

function g(e) {
  let {
    applicationId: t,
    commandIds: n,
    guildId: h,
    channel: g,
    onClick: E
  } = e, {
    trackUserProfileAction: y
  } = (0, u.NJ)(), b = i.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    commands: O
  } = o.DP(b, t, n), v = i.useMemo(() => null == O ? true : O.filter(e => {
    let {
      nsfw: t,
      options: n
    } = e;
    returntrue !== t && (null == n ? true : n.find(e => {
      let {
        type: t
      } = e;
      return t === a.n4.SUB_COMMAND || t === a.n4.SUB_COMMAND_GROUP
    })) == null
  }), [O]);
  if (null == v || 0 === v.length) return null;
  let A = e => {
    null == E || E(), y({
      action: "PRESS_APP_COMMAND"
    }), c.default.track(f.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, m({
      application_id: t,
      command_id: e,
      guild_id: h
    }, (0, s.Ou)(g.id)))
  };
  return (0, r.jsx)(d.A, {
    heading: p.intl.string(p.t["0hKkS+"]),
    children: (0, r.jsx)("ul", {
      className: _.p,
      children: v.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(l.Oh, {
          commandId: e.id,
          commandName: e.displayName,
          commandDescription: e.displayDescription,
          onClick: A,
          guildId: h,
          channelId: g.id,
          applicationId: e.applicationId
        })
      }, e.id))
    })
  })
}