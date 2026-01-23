/** Chunk was on web.js **/
/** chunk id: 976639, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./938796.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk665260 = require("./665260.js"),
  Chunk397927 = require("./397927.js"),
  Chunk439372 = require("./439372.js"),
  Chunk164956 = require("./164956.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk967198 = require("./967198.js"),
  Chunk225142 = require("./225142.js"),
  Chunk701785 = require("./701785.js"),
  Chunk374084 = require("./374084.js"),
  Chunk65995 = require("./65995.js"),
  Chunk473529 = require("./473529.js"),
  Chunk978165 = require("./978165.js"),
  Chunk340837 = require("./340837.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
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
class A extends Chunk439372.A {
  constructor(...e) {
    super(...e), y(this, "onboardingCompleteGuilds", new Set), y(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      GUILD_DELETE: e => this.handleGuildDelete(e),
      CHANNEL_SELECT: e => this.handleChannelSelect(e),
      MESSAGE_CREATE: e => this.handleMessageSend(e),
      THREAD_CREATE: e => this.handleThreadCreate(e)
    }), y(this, "handlePostConnectionOpen", () => {
      let e = d.A.getGuildId();
      null != e && this._getOrLoadOnboardingMemberActions(e)
    }), y(this, "handleGuildMemberUpdate", e => {
      let {
        flags: t,
        user: s,
        guildId: o
      } = e;
      if (s.id === l.default.getId() && !this.onboardingCompleteGuilds.has(o) && (0, i.Lt)(null != t ? t : 0, E.D.COMPLETED_HOME_ACTIONS)) {
        var c, u;
        this.onboardingCompleteGuilds.add(o);
        let e = null != (c = null == (u = p.h.getNewMemberActions(o)) ? true : u.length) ? c : 0;
        if (0 === e) return;
        (0, a.mMO)(async () => {
          let {
            default: t
          } = await n.e("63893").then(n.bind(n, 455796));
          return n => (0, r.jsx)(t, v(b({}, n), {
            initialPercent: (e - 1) / e,
            numActions: e
          }))
        })
      }
    }), y(this, "handleGuildDelete", e => {
      let {
        guild: t
      } = e;
      this.onboardingCompleteGuilds.delete(t.id)
    }), y(this, "handleChannelSelect", async e => {
      let {
        guildId: t,
        channelId: n
      } = e;
      if (null == t || null == n) return;
      let {
        memberActions: r,
        completedActions: i
      } = await this._getOrLoadOnboardingMemberActions(t), a = null == r ? true : r.find(e => e.channelId === n);
      (null == i ? true : i[n]) !== true && null != a && a.actionType === _.NewMemberActionTypes.VIEW && (0, f.eC)(t, n)
    }), y(this, "handleMessageSend", e => {
      var t;
      let {
        guildId: n,
        channelId: r,
        message: i
      } = e;
      if (null == n || null == r || (null == (t = i.author) ? true : t.id) !== l.default.getId()) return;
      let a = c.A.getChannel(r);
      (null == a ? true : a.isForumPost()) && (null == a ? true : a.parent_id) != null && this._completeChatAction(n, a.parent_id), this._completeChatAction(n, r)
    }), y(this, "handleThreadCreate", e => {
      var t;
      let {
        channel: n,
        isNewlyCreated: r
      } = e;
      r && null != n.parent_id && (null == (t = c.A.getChannel(n.parent_id)) ? true : t.isForumLikeChannel()) && n.ownerId === l.default.getId() && this._completeChatAction(n.guild_id, n.parent_id)
    }), y(this, "_completeChatAction", async (e, t) => {
      let {
        memberActions: n,
        completedActions: r
      } = await this._getOrLoadOnboardingMemberActions(e), i = null == n ? true : n.find(e => e.channelId === t);
      (null == r ? true : r[t]) !== true && null != i && i.actionType === _.NewMemberActionTypes.CHAT && (0, f.eC)(e, t)
    }), y(this, "_getOrLoadOnboardingMemberActions", async e => {
      let t = (0, m.K)(e),
        n = o.A.isFullServerPreview(e);
      if (!t && !n) return {};
      let r = u.Ay.getSelfMember(e);
      if (null == r || !(0, g.j)(e)) return {};
      let [i, a] = await Promise.all([this._getOrLoadOnboardingHomeSettings(e), this._getOrLoadMemberActions(e, r)]);
      return {
        memberActions: i,
        completedActions: a
      }
    }), y(this, "_getOrLoadOnboardingHomeSettings", async e => {
      let t = p.h.getNewMemberActions(e),
        n = p.h.getIsLoading(e);
      if (!(null == t && !n && (0, g.j)(e))) return t;
      {
        let t = await (0, f.ag)(e);
        return null == t ? true : t.newMemberActions
      }
    }), y(this, "_getOrLoadMemberActions", async (e, t) => {
      var n;
      let {
        completedActions: r,
        loading: a
      } = h.A.getState(e);
      return null == r && !a && (0, i.Lt)(null != (n = t.flags) ? n : 0, E.D.STARTED_HOME_ACTIONS) ? await (0, f.aW)(e) : r
    })
  }
}
let I = new A