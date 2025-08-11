/** Chunk was on web.js **/
/** chunk id: 172351, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk367907 = require("./367907.js"),
  Chunk10718 = require("./10718.js"),
  Chunk69626 = require("./69626.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk785717 = require("./785717.js"),
  Chunk678738 = require("./678738.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk175354 = require("./175354.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e) {
  let {
    applicationId: t,
    commandIds: n,
    guildId: p,
    channel: m,
    onClick: g
  } = e, {
    trackUserProfileAction: E
  } = (0, c.KZ)(), b = i.useMemo(() => ({
    channel: m,
    type: "channel"
  }), [m]), {
    commands: y
  } = a.Qm(b, t, n), O = i.useMemo(() => null == y ? true : y.filter(e => {
    let {
      nsfw: t
    } = e;
    returntrue !== t
  }), [y]);
  if (null == O || 0 === O.length) return null;
  let v = e => {
    null == g || g(), E({
      action: "PRESS_APP_COMMAND"
    }), l.default.track(d.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, h({
      application_id: t,
      command_id: e,
      guild_id: p
    }, (0, o.JS)(m.id)))
  };
  return <u.Z heading={f.intl.string(f.t["0hKkS0"])}><ul className={_.list}>{O.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(s.wz, {
          commandId: e.id,
          commandName: e.displayName,
          commandDescription: e.displayDescription,
          onClick: v,
          guildId: p,
          channelId: m.id,
          applicationId: e.applicationId
        })
      }, e.id))}</ul></u.Z>
}