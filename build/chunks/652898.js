/** Chunk was on web.js **/
/** chunk id: 652898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./457542.js");
var Chunk990547 = require("./990547.js"),
  Chunk283693 = require("./283693.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk573261 = require("./573261.js"),
  Chunk264229 = require("./264229.js"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js");

function p(e, t, n) {
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
      p(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function g(e) {
  let t = null;
  if (null != e && null != e.channel) {
    let n = e.channel;
    t = e.target_type === d.Iq.STREAM ? f.dAT.STREAM : e.target_type === d.Iq.EMBEDDED_APPLICATION ? f.dAT.APPLICATION : (0, a.bc)(n.type) ? f.dAT.GDM_INVITE : null == n || (0, a.hv)(n.type) ? f.dAT.FRIEND_INVITE : f.dAT.SERVER_INVITE
  }
  return t
}
let E = new Map;

function b(e, t, n) {
  if (l.default.track(f.rMx.INVITE_OPENED, {
      invite_code: e
    }), E.has(e)) return E.get(e);
  let a = (0, u.fU)(e),
    d = m(_({}, n), {
      with_counts: true,
      with_expiration: true,
      guild_scheduled_event_id: a.guildScheduledEventId,
      with_permissions: true
    }),
    p = c.Z.get({
      url: f.ANM.INVITE(a.baseCode),
      query: d,
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.INVITE_RESOLVE,
        properties: e => {
          var r, l, c, u, d, p, _;
          let h = e.body,
            m = (null == (r = e.body) ? true : r.code) === f.evJ.USER_BANNED;
          return (0, i.iG)({
            resolved: e.ok,
            guild_id: null == h || null == (l = h.guild) ? true : l.id,
            channel_id: null == h || null == (c = h.channel) ? true : c.id,
            channel_type: null == h || null == (u = h.channel) ? true : u.type,
            inviter_id: null == h || null == (d = h.inviter) ? true : d.id,
            code: a.baseCode,
            input_value: null == n ? true : n.inputValue,
            location: t,
            authenticated: o.default.isAuthenticated(),
            size_total: null == h ? true : h.approximate_member_count,
            size_online: null == h ? true : h.approximate_presence_count,
            destination_user_id: null == h || null == (p = h.target_user) ? true : p.id,
            invite_type: g(h),
            user_banned: m,
            user_is_member: null != s.Z.getGuild(null == h || null == (_ = h.guild) ? true : _.id)
          })
        }
      },
      rejectWithError: false
    }).then(r => {
      let i = r.body;
      if (null != t) {
        var c;
        l.default.track(f.rMx.INVITE_RESOLVED, {
          resolved: true,
          guild_id: null != i.guild ? i.guild.id : null,
          channel_id: null != i.channel ? i.channel.id : null,
          channel_type: null != i.channel ? i.channel.type : null,
          inviter_id: i.inviter ? i.inviter.id : null,
          code: a.baseCode,
          input_value: null == n ? true : n.inputValue,
          location: t,
          authenticated: o.default.isAuthenticated(),
          size_total: i.approximate_member_count,
          size_online: i.approximate_presence_count,
          destination_user_id: null != i.target_user ? i.target_user.id : null,
          invite_type: g(i),
          user_is_member: null != s.Z.getGuild(null == i || null == (c = i.guild) ? true : c.id)
        }, {
          flush: true
        })
      }
      return {
        invite: i,
        code: e
      }
    }, r => {
      let i = null != r.body && r.body.code === f.evJ.USER_BANNED;
      if (null != t) {
        var s, c;
        l.default.track(f.rMx.INVITE_RESOLVED, {
          resolved: false,
          code: a.baseCode,
          input_value: null == n ? true : n.inputValue,
          location: t,
          authenticated: o.default.isAuthenticated(),
          user_banned: i,
          error_code: null == (s = r.body) ? true : s.code,
          error_message: null == (c = r.body) ? true : c.message
        }, {
          flush: true
        })
      }
      return {
        invite: null,
        code: e,
        banned: i
      }
    }).finally(() => {
      E.delete(e)
    });
  return E.set(e, p), p
}