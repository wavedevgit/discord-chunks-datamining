/** Chunk was on web.js **/
/** chunk id: 218315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./997841.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk95015 = require("./95015.js"),
  Chunk481060 = require("./481060.js"),
  Chunk147913 = require("./147913.js"),
  Chunk160404 = require("./160404.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk914010 = require("./914010.js"),
  Chunk526120 = require("./526120.js"),
  Chunk563534 = require("./563534.js"),
  Chunk734893 = require("./734893.js"),
  Chunk846121 = require("./846121.js"),
  Chunk931261 = require("./931261.js"),
  Chunk460347 = require("./460347.js"),
  Chunk372897 = require("./372897.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class S extends Chunk147913.Z {
  constructor(...e) {
    super(...e), b(this, "onboardingCompleteGuilds", new Set), b(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      MESSAGE_CREATE: e => this.handleMessageSend(e),
      THREAD_CREATE: e => this.handleThreadCreate(e)
    }), b(this, "handlePostConnectionOpen", () => {
      let e = d.Z.getGuildId();
      null != e && this._getOrLoadOnboardingMemberActions(e)
    }), b(this, "handleGuildMemberUpdate", e => {
      let {
        flags: t,
        user: a,
        guildId: s
      } = e;
      if (a.id === l.default.getId() && !this.onboardingCompleteGuilds.has(s) && (0, i.yE)(null != t ? t : 0, E.q.COMPLETED_HOME_ACTIONS)) {
        var c, u;
        this.onboardingCompleteGuilds.add(s);
        let e = null != (u = null == (c = p.Z.getNewMemberActions(s)) ? true : c.length) ? u : 0;
        if (0 === e) return;
        (0, o.ZDy)(async () => {
          let {
            default: t
          } = await n.e("92339").then(n.bind(n, 184100));
          return n => (0, r.jsx)(t, v(y({}, n), {
            initialPercent: (e - 1) / e,
            numActions: e
          }))
        })
      }
    }), b(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      this.onboardingCompleteGuilds.delete(t.id)
    }), b(this, "handleChannelSelect", async e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null == t || null == n) return;
      let {
        memberActions: r,
        completedActions: i
      } = await this._getOrLoadOnboardingMemberActions(t), o = null == r ? true : r.find(e => e.channelId === n);
      (null == i ? true : i[n]) !== true && null != o && o.actionType === _.NewMemberActionTypes.VIEW && (0, f.Oh)(t, n)
    }), b(this, "handleMessageSend", e => {
      var t;
      let {
        guildId: n,
        channelId: r,
        message: i
      } = e;
      if (null == n || null == r || (null == (t = i.author) ? true : t.id) !== l.default.getId()) return;
      let o = c.Z.getChannel(r);
      (null == o ? true : o.isForumPost()) && (null == o ? true : o.parent_id) != null && this._completeChatAction(n, o.parent_id), this._completeChatAction(n, r)
    }), b(this, "handleThreadCreate", e => {
      var t;
      let {
        channel: n,
        isNewlyCreated: r
      } = e;
      r && null != n.parent_id && (null == (t = c.Z.getChannel(n.parent_id)) ? true : t.isForumLikeChannel()) && n.ownerId === l.default.getId() && this._completeChatAction(n.guild_id, n.parent_id)
    }), b(this, "_completeChatAction", async (e, t) => {
      let {
        memberActions: n,
        completedActions: r
      } = await this._getOrLoadOnboardingMemberActions(e), i = null == n ? true : n.find(e => e.channelId === t);
      (null == r ? true : r[t]) !== true && null != i && i.actionType === _.NewMemberActionTypes.CHAT && (0, f.Oh)(e, t)
    }), b(this, "_getOrLoadOnboardingMemberActions", async e => {
      let t = (0, h.s)(e),
        n = s.Z.isFullServerPreview(e);
      if (!t && !n) return {};
      let r = u.ZP.getSelfMember(e);
      if (null == r || !(0, g.m)(e)) return {};
      let [i, o] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, r)]);
      return {
        memberActions: i,
        completedActions: o
      }
    }), b(this, "_getOrLoadOnboardingHomeSettings", async e => {
      let t = p.Z.getNewMemberActions(e),
        n = p.Z.getIsLoading(e);
      if (!(null == t && !n && (0, g.m)(e))) return t;
      {
        let t = await (0, f.cP)(e);
        return null == t ? true : t.newMemberActions
      }
    }), b(this, "_getOrLoadMemberActions", async (e, t) => {
      var n;
      let {
        completedActions: r,
        loading: o
      } = m.Z.getState(e);
      return null == r && !o && (0, i.yE)(null != (n = t.flags) ? n : 0, E.q.STARTED_HOME_ACTIONS) ? await (0, f.Fg)(e) : r
    })
  }
}
let I = new S