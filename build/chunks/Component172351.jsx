/** Chunk was on web.js **/
/** chunk id: 172351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk911969 = require("./911969.js"),
  Chunk367907 = require("./367907.js"),
  Chunk10718 = require("./10718.js"),
  Chunk69626 = require("./69626.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk785717 = require("./785717.jsx"),
  Chunk678738 = require("./678738.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk870277 = require("./870277.js");

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
    trackUserProfileAction: b
  } = (0, u.KZ)(), y = i.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    commands: O
  } = s.Qm(y, t, n), v = i.useMemo(() => null == O ? true : O.filter(e => {
    let {
      nsfw: t,
      options: n
    } = e;
    returntrue !== t && (null == n ? true : n.find(e => {
      let {
        type: t
      } = e;
      return t === a.jw.SUB_COMMAND || t === a.jw.SUB_COMMAND_GROUP
    })) == null
  }), [O]);
  if (null == v || 0 === v.length) return null;
  let S = e => {
    null == E || E(), b({
      action: "PRESS_APP_COMMAND"
    }), c.default.track(f.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, m({
      application_id: t,
      command_id: e,
      guild_id: h
    }, (0, o.JS)(g.id)))
  };
  return (0, r.jsx)(d.Z, {
    heading: p.intl.string(p.t["0hKkS+"]),
    children: (0, r.jsx)("ul", {
      className: _.list,
      children: v.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(l.wz, {
          commandId: e.id,
          commandName: e.displayName,
          commandDescription: e.displayDescription,
          onClick: S,
          guildId: h,
          channelId: g.id,
          applicationId: e.applicationId
        })
      }, e.id))
    })
  })
}