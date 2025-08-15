/** Chunk was on web.js **/
/** chunk id: 652898, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./457542.js");
var Chunk990547 = require("./990547.js"),
  Chunk283693 = require("./283693.js"),
  Chunk44609 = require("./44609.js"),
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

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let t = null;
  if (null != e && null != e.channel) {
    let n = e.channel;
    t = e.target_type === f.Iq.STREAM ? _.dAT.STREAM : e.target_type === f.Iq.EMBEDDED_APPLICATION ? _.dAT.APPLICATION : (0, o.bc)(n.type) ? _.dAT.GDM_INVITE : null == n || (0, o.hv)(n.type) ? _.dAT.FRIEND_INVITE : _.dAT.SERVER_INVITE
  }
  return t
}
let b = new Map;

function y(e, t, n) {
  if (c.default.track(_.rMx.INVITE_OPENED, {
      invite_code: e
    }), b.has(e)) return b.get(e);
  let o = (0, d.fU)(e),
    f = g(h({}, n), {
      with_counts: true,
      with_expiration: true,
      guild_scheduled_event_id: o.guildScheduledEventId,
      with_permissions: (0, a.gY)({
        location: "resolveInvite"
      })
    }),
    p = u.Z.get({
      url: _.ANM.INVITE(o.baseCode),
      query: f,
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.INVITE_RESOLVE,
        properties: e => {
          var r, a, c, u, d, f, p;
          let h = e.body,
            m = (null == (r = e.body) ? true : r.code) === _.evJ.USER_BANNED;
          return (0, i.iG)({
            resolved: e.ok,
            guild_id: null == h || null == (a = h.guild) ? true : a.id,
            channel_id: null == h || null == (c = h.channel) ? true : c.id,
            channel_type: null == h || null == (u = h.channel) ? true : u.type,
            inviter_id: null == h || null == (d = h.inviter) ? true : d.id,
            code: o.baseCode,
            input_value: null == n ? true : n.inputValue,
            location: t,
            authenticated: s.default.isAuthenticated(),
            size_total: null == h ? true : h.approximate_member_count,
            size_online: null == h ? true : h.approximate_presence_count,
            destination_user_id: null == h || null == (f = h.target_user) ? true : f.id,
            invite_type: E(h),
            user_banned: m,
            user_is_member: null != l.Z.getGuild(null == h || null == (p = h.guild) ? true : p.id)
          })
        }
      },
      rejectWithError: false
    }).then(r => {
      let i = r.body;
      if (null != t) {
        var a;
        c.default.track(_.rMx.INVITE_RESOLVED, {
          resolved: true,
          guild_id: null != i.guild ? i.guild.id : null,
          channel_id: null != i.channel ? i.channel.id : null,
          channel_type: null != i.channel ? i.channel.type : null,
          inviter_id: i.inviter ? i.inviter.id : null,
          code: o.baseCode,
          input_value: null == n ? true : n.inputValue,
          location: t,
          authenticated: s.default.isAuthenticated(),
          size_total: i.approximate_member_count,
          size_online: i.approximate_presence_count,
          destination_user_id: null != i.target_user ? i.target_user.id : null,
          invite_type: E(i),
          user_is_member: null != l.Z.getGuild(null == i || null == (a = i.guild) ? true : a.id)
        }, {
          flush: true
        })
      }
      return {
        invite: i,
        code: e
      }
    }, r => {
      let i = null != r.body && r.body.code === _.evJ.USER_BANNED;
      if (null != t) {
        var a, l;
        c.default.track(_.rMx.INVITE_RESOLVED, {
          resolved: false,
          code: o.baseCode,
          input_value: null == n ? true : n.inputValue,
          location: t,
          authenticated: s.default.isAuthenticated(),
          user_banned: i,
          error_code: null == (a = r.body) ? true : a.code,
          error_message: null == (l = r.body) ? true : l.message
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
      b.delete(e)
    });
  return b.set(e, p), p
}