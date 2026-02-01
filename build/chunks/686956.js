/** Chunk was on web.js **/
/** chunk id: 686956, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => B,
  k: () => V
}), require("./65821.js"), require("./142703.js"), require("./733351.js");
var Chunk110259 = require("./110259.js"),
  Chunk136722 = require("./136722.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk178253 = require("./178253.js"),
  Chunk612200 = require("./612200.js"),
  Chunk323073 = require("./323073.js"),
  Chunk568185 = require("./568185.js"),
  Chunk22007 = require("./22007.js"),
  Chunk854492 = require("./854492.js"),
  Chunk700241 = require("./700241.jsx"),
  Chunk658128 = require("./658128.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk383394 = require("./383394.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk488926 = require("./488926.js"),
  Chunk927578 = require("./927578.js"),
  Chunk499785 = require("./499785.js"),
  Chunk157559 = require("./157559.js"),
  Chunk652215 = require("./652215.js"),
  Chunk204925 = require("./204925.js"),
  Chunk985018 = require("./985018.jsx");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function M(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = j(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function j(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let k = e => {
    C.A.show({
      title: R.intl.string(R.t.cTaRxF),
      body: R.intl.formatToPlainString(R.t["VSd+Aj"], {
        quantity: e
      })
    })
  },
  U = e => {
    o.h.dispatch({
      type: "GUILD_DELETE",
      guild: {
        id: e
      }
    })
  },
  G = () => {
    C.A.show({
      title: R.intl.string(R.t.ZZlox4),
      body: R.intl.string(R.t.ZUEGFn)
    })
  };

function V(e) {
  return new Promise(t => y.A.addConditionalChangeListener(() => {
    let n = y.A.getGuild(e);
    return null == n || (t(n), false)
  }))
}

function F(e, t) {
  return null != t ? t : (0, _.W)(e)
}
let B = {
  joinGuild: async function(e) {
    var t, r, i, s, c, u;
    let d = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {},
      {
        source: f,
        loadId: _,
        lurkLocation: g
      } = d,
      E = null != (t = d.lurker) && t,
      A = v.default.getCurrentUser();
    if (null != (r = null == A ? true : A.hasFlag(N.nhx.QUARANTINED)) && r) return (0, p.default)(), new Promise((e, t) => t(Error()));
    o.h.wait(() => o.h.dispatch({
      type: "GUILD_JOIN",
      guildId: e,
      lurker: E,
      source: f,
      loadId: _
    }));
    try {
      let t = O.A.getGuildId(),
        r = e === t && null != y.A.getGuild(e) ? b.A.getChannelId(e) : null,
        i = await a.Bo.put({
          url: N.Rsh.GUILD_JOIN(e),
          query: {
            lurker: E,
            session_id: E ? m.default.getSessionId() : null,
            recommendation_load_id: _,
            location: E && null != g ? g : null
          },
          context: {
            source: f
          },
          oldFormErrors: true,
          body: {},
          rejectWithError: false
        });
      if (null != i.body.join_request && o.h.dispatch({
          type: "USER_GUILD_JOIN_REQUEST_UPDATE",
          guildId: e,
          request: i.body.join_request
        }), null == y.A.getGuild(e) && i.body.show_verification_form) return (0, h.pX)(N.BVt.GUILD_MEMBER_VERIFICATION(e)), i;
      if (null != i.body.welcome_screen && o.h.dispatch({
          type: "WELCOME_SCREEN_UPDATE",
          guildId: i.body.id,
          welcomeScreen: i.body.welcome_screen
        }), null != i.body.approximate_presence_count && o.h.dispatch({
          type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
          guildId: i.body.id,
          count: i.body.approximate_presence_count
        }), !E) {
        let {
          default: t
        } = await Promise.resolve().then(n.bind(n, 967305));
        await t({
          guildId: e,
          returnChannelId: r
        })
      }
      return i
    } catch (t) {
      if ((null == (i = t.body) ? true : i.code) === N.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED && (0, l.yO)(w.w_.JOIN_LARGE_GUILD_UNDERAGE), (null == (s = t.body) ? true : s.code) === N.t02.TOO_MANY_USER_GUILDS) {
        let e = v.default.getCurrentUser();
        S.Ay.canUseIncreasedGuildCap(e) || (null == e ? true : e.isStaff()) ? k(N.cZu) : k(N.qlD)
      }
      throw (null == (c = t.body) ? true : c.code) === N.t02.GUILD_AT_CAPACITY && G(), E && (null == (u = t.body) ? true : u.code) === N.t02.UNKNOWN_GUILD && U(e), t
    }
  },
  waitForGuild: V,
  async transitionToGuildSync(e, t, n, r) {
    let i = F((await V(e)).id, n),
      a = t;
    (null == t ? true : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (a = x(D({}, t), {
      welcomeModalChannelId: null != i ? i : true
    })), (0, d.A)(N.BVt.CHANNEL(e, i, r), a), await new Promise(setImmediate)
  },
  deleteGuild: U,
  selectGuild(e) {
    (0, f.j)(e)
  },
  createGuild(e) {
    o.h.dispatch({
      type: "GUILD_CREATE",
      guild: e
    })
  },
  setServerMute: (e, t, n) => a.Bo.patch({
    url: N.Rsh.GUILD_MEMBER(e, t),
    body: {
      mute: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  setServerDeaf: (e, t, n) => a.Bo.patch({
    url: N.Rsh.GUILD_MEMBER(e, t),
    body: {
      deaf: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  setChannel(e, t, n) {
    a.Bo.patch({
      url: N.Rsh.GUILD_MEMBER(e, t),
      body: {
        channel_id: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  },
  setMemberFlags(e, t, n) {
    a.Bo.patch({
      url: N.Rsh.GUILD_MEMBER(e, t),
      body: {
        flags: n
      },
      oldFormErrors: true,
      rejectWithError: true
    })
  },
  kickUser: (e, t, n, r) => a.Bo.del({
    url: N.Rsh.GUILD_MEMBER(e, t),
    query: {
      reason: n,
      moderator_report_id: r
    },
    oldFormErrors: true,
    rejectWithError: false
  }).then(() => {
    o.h.dispatch({
      type: "GUILD_MEMBER_REMOVE_LOCAL",
      guildId: e,
      userId: t
    })
  }),
  setCommunicationDisabledUntil(e) {
    let {
      guildId: t,
      userId: n,
      communicationDisabledUntilTimestamp: i,
      duration: a,
      reason: o,
      location: s,
      moderatorReportId: l
    } = e;
    return T.A.patch({
      url: N.Rsh.GUILD_MEMBER(t, n),
      reason: o,
      body: {
        communication_disabled_until: i,
        moderator_report_id: l
      },
      oldFormErrors: true,
      trackedActionData: {
        event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
        properties: {
          guild_id: t,
          target_user_id: n,
          duration: null != a ? a : null,
          reason: null != o ? o : null,
          communication_disabled_until: i,
          location: null != s ? s : null
        }
      },
      rejectWithError: false
    })
  },
  banUser: (e, t, n, r, i) => a.Bo.put({
    url: N.Rsh.GUILD_BAN(e, t),
    reason: r,
    body: {
      delete_message_seconds: n,
      moderator_report_id: i
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  unbanUser: (e, t) => a.Bo.del({
    url: N.Rsh.GUILD_BAN(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }),
  banMultipleUsers: (e, t, n, r) => a.Bo.post({
    url: N.Rsh.BULK_GUILD_BAN(e),
    body: {
      user_ids: t,
      delete_message_seconds: n
    },
    reason: r,
    oldFormErrors: true,
    rejectWithError: false
  }),
  async createRole(e, t, n, r) {
    let l = {
      name: null != t && "" !== t ? t : R.intl.string(R.t.QBMHvB),
      color: null != n ? n : 0,
      colors: null != r ? r : {
        primary_color: null != n ? n : 0,
        secondary_color: null,
        tertiary_color: null
      },
      permissions: I.x3
    };
    try {
      let t = await a.Bo.post({
          url: N.Rsh.GUILD_ROLES(e),
          oldFormErrors: true,
          body: l,
          rejectWithError: false
        }),
        n = t.body;
      return n.permissions = i.iu(n.permissions), o.h.dispatch({
        type: "GUILD_SETTINGS_ROLE_SELECT",
        roleId: t.body.id,
        role: n
      }), u.A.checkGuildTemplateDirty(e), n
    } catch (e) {
      throw new s.A(e)
    }
  },
  async updateRole(e, t, n) {
    let {
      icon: r,
      unicodeEmoji: i
    } = n, o = M(n, ["icon", "unicodeEmoji"]), s = null === r || (null == r ? true : r.startsWith("data:")) ? r : true, l = await a.Bo.patch({
      url: N.Rsh.GUILD_ROLE(e, t),
      body: x(D({}, o), {
        icon: s,
        unicode_emoji: i
      }),
      oldFormErrors: true,
      rejectWithError: false
    });
    return u.A.checkGuildTemplateDirty(e), l
  },
  updateRolePermissions: (e, t, n) => a.Bo.patch({
    url: N.Rsh.GUILD_ROLE(e, t),
    body: {
      permissions: n
    },
    oldFormErrors: true,
    rejectWithError: false
  }),
  deleteRole(e, t) {
    a.Bo.del({
      url: N.Rsh.GUILD_ROLE(e, t),
      oldFormErrors: true,
      rejectWithError: true
    }).then(() => {
      u.A.checkGuildTemplateDirty(e)
    })
  },
  async batchChannelUpdate(e, t) {
    let n = await a.Bo.patch({
      url: N.Rsh.GUILD_CHANNELS(e),
      body: t,
      oldFormErrors: true,
      rejectWithError: false
    });
    return u.A.checkGuildTemplateDirty(e), n
  },
  async batchRoleUpdate(e, t) {
    let n = await a.Bo.patch({
      url: N.Rsh.GUILD_ROLES(e),
      body: t,
      oldFormErrors: true,
      rejectWithError: false
    });
    return u.A.checkGuildTemplateDirty(e), n
  },
  requestMembers(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "",
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 10,
      r = !(arguments.length > 3) || true === arguments[3] || arguments[3];
    return o.h.dispatch({
      type: "GUILD_MEMBERS_REQUEST",
      guildIds: Array.isArray(e) ? e : [e],
      query: t,
      limit: n,
      presences: r
    })
  },
  searchRecentMembers(e, t) {
    let {
      query: n,
      continuationToken: r
    } = null != t ? t : {};
    return o.h.dispatch({
      type: "GUILD_SEARCH_RECENT_MEMBERS",
      guildId: e,
      query: n,
      continuationToken: r
    })
  },
  requestMembersById(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    return o.h.dispatch({
      type: "GUILD_MEMBERS_REQUEST",
      guildIds: Array.isArray(e) ? e : [e],
      userIds: Array.isArray(t) ? t : [t],
      presences: n
    })
  },
  move(e, t, n, r) {
    o.h.dispatch({
      type: "GUILD_MOVE",
      fromIndex: e,
      toIndex: t,
      fromFolderIndex: n,
      toFolderIndex: r
    })
  },
  moveById(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2],
      r = arguments.length > 3 && true !== arguments[3] && arguments[3];
    if (e === t) throw Error("GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: ".concat(e));
    o.h.dispatch({
      type: "GUILD_MOVE_BY_ID",
      sourceId: e,
      targetId: t,
      moveToBelow: n,
      combine: r
    })
  },
  createGuildFolderLocal(e, t) {
    A.default.track(N.HAw.GUILD_FOLDER_CREATED), o.h.dispatch({
      type: "GUILD_FOLDER_CREATE_LOCAL",
      sourceIds: e,
      name: t
    })
  },
  editGuildFolderLocal(e, t, n) {
    o.h.dispatch({
      type: "GUILD_FOLDER_EDIT_LOCAL",
      targetId: e,
      sourceIds: t,
      name: n
    })
  },
  deleteGuildFolderLocal(e) {
    o.h.dispatch({
      type: "GUILD_FOLDER_DELETE_LOCAL",
      targetId: e
    })
  },
  toggleGuildFolderExpand(e) {
    let t = g.A.isFolderExpanded(e);
    A.default.track(N.HAw.GUILD_FOLDER_CLICKED, {
      source: "sidebar",
      action: t ? "collapsed" : "expanded"
    }), o.h.dispatch({
      type: "TOGGLE_GUILD_FOLDER_EXPAND",
      folderId: e
    })
  },
  setGuildFolderExpanded(e, t) {
    o.h.dispatch({
      type: "SET_GUILD_FOLDER_EXPANDED",
      folderId: e,
      expanded: t
    })
  },
  collapseAllFolders() {
    o.h.dispatch({
      type: "GUILD_FOLDER_COLLAPSE"
    })
  },
  nsfwAgree(e) {
    o.h.dispatch({
      type: "GUILD_NSFW_AGREE",
      guildId: e
    })
  },
  nsfwReturnToSafety(e) {
    if (null == e) return void(0, h.pX)(N.BVt.FRIENDS, {
      navigationReplace: false,
      openChannel: true
    });
    let t = E.Ay.getDefaultChannel(e);
    null == t || (0, c.qR)(t) ? (0, h.pX)(N.BVt.FRIENDS, {
      navigationReplace: false,
      openChannel: true
    }) : (0, h.pX)(N.BVt.CHANNEL(e, t.id))
  },
  escapeToDefaultChannel(e) {
    let t = E.Ay.getDefaultChannel(e);
    null != t ? (0, h.pX)(N.BVt.CHANNEL(e, t.id)) : (0, h.pX)(N.BVt.FRIENDS)
  },
  async fetchApplications(e, t) {
    let n = {
      url: N.Rsh.GUILD_APPLICATIONS(e),
      oldFormErrors: true,
      rejectWithError: false
    };
    null != t && (n.query = {
      channel_id: t
    });
    let r = (await a.Bo.get(n)).body;
    o.h.dispatch({
      type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
      guildId: e,
      applications: r
    })
  },
  async fetchGuildBansBatch(e) {
    let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 1e3,
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : null,
      r = {
        limit: t
      };
    null != n && (r.after = n), await a.Bo.get({
      url: N.Rsh.GUILD_BANS(e),
      oldFormErrors: true,
      query: r,
      rejectWithError: false
    }).then(t => {
      o.h.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
        bans: t.body,
        guildId: e
      })
    })
  },
  async searchGuildBans(e, t, n) {
    let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : 10,
      i = {
        limit: r
      };
    null != n && n.length > 0 && (i.user_ids = n), null != t && t.trim().length > 0 && (i.query = t), await a.Bo.get({
      url: N.Rsh.GUILD_BANS_SEARCH(e),
      oldFormErrors: true,
      query: i,
      rejectWithError: false
    }).then(t => {
      o.h.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
        bans: t.body,
        userIds: n,
        guildId: e
      })
    })
  },
  async fetchGuildBans(e) {
    await a.Bo.get({
      url: N.Rsh.GUILD_BANS(e),
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      o.h.dispatch({
        type: "GUILD_SETTINGS_LOADED_BANS",
        bans: e.body
      })
    })
  },
  fetchGuildRoleConnectionsEligibility: (e, t) => a.Bo.get({
    url: N.Rsh.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
    oldFormErrors: true,
    rejectWithError: false
  }).then(e => {
    let {
      body: n
    } = e;
    return o.h.dispatch({
      type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
      roleId: t,
      roleConnectionEligibility: n
    }), n
  }),
  async assignGuildRoleConnection(e, t) {
    await a.Bo.post({
      url: N.Rsh.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
      oldFormErrors: true,
      rejectWithError: false
    })
  },
  async unassignGuildRoleConnection(e, t) {
    await a.Bo.post({
      url: N.Rsh.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
      oldFormErrors: true,
      rejectWithError: false
    })
  },
  getGuildRoleConnectionsConfigurations: async e => (await a.Bo.get({
    url: N.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
    oldFormErrors: true,
    rejectWithError: false
  })).body
}