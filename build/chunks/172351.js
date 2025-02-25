/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => g
});
var r = n(200651),
  i = n(192379),
  o = n(367907),
  a = n(10718),
  s = n(69626),
  l = n(626135),
  c = n(785717),
  u = n(678738),
  d = n(981631),
  f = n(388032),
  _ = n(539469);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
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

function g(e) {
  let {
    applicationId: t,
    commandIds: n,
    guildId: p,
    channel: g,
    onClick: m
  } = e, {
    trackUserProfileAction: E
  } = (0, c.KZ)(), v = i.useMemo(() => ({
    channel: g,
    type: "channel"
  }), [g]), {
    commands: b
  } = a.Qm(v, t, n), y = i.useMemo(() => null == b ? void 0 : b.filter(e => {
    let {
      nsfw: t
    } = e;
    return !0 !== t
  }), [b]);
  if (null == y || 0 === y.length) return null;
  let O = e => {
    null == m || m(), E({
      action: "PRESS_APP_COMMAND"
    }), l.default.track(d.rMx.POPULAR_APPLICATION_COMMAND_CLICKED, h({
      application_id: t,
      command_id: e,
      guild_id: p
    }, (0, o.JS)(g.id)))
  };
  return (0, r.jsx)(u.Z, {
    heading: f.NW.string(f.t["0hKkS0"]),
    children: (0, r.jsx)("ul", {
      className: _.list,
      children: y.map(e => (0, r.jsx)("li", {
        children: (0, r.jsx)(s.wz, {
          commandId: e.id,
          commandName: e.displayName,
          commandDescription: e.displayDescription,
          onClick: O,
          guildId: p,
          channelId: g.id,
          applicationId: e.applicationId
        })
      }, e.id))
    })
  })
}