/** Chunk was on web.js **/
/** chunk id: 493683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk570140 = require("./570140.js"),
  Chunk802098 = require("./802098.js"),
  Chunk702321 = require("./702321.js"),
  Chunk408987 = require("./408987.js"),
  Chunk777639 = require("./777639.js"),
  Chunk895886 = require("./895886.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk359110 = require("./359110.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk306680 = require("./306680.js"),
  Chunk626135 = require("./626135.js"),
  Chunk73346 = require("./73346.js"),
  Chunk26151 = require("./26151.js"),
  Chunk287734 = require("./287734.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let A = {
  async openPrivateChannel(e) {
    let {
      recipientIds: t,
      joinCall: n = false,
      joinCallVideo: i = false,
      location: a,
      onBeforeTransition: o,
      navigateToChannel: s = true
    } = e, l = this._getRecipients(t), c = e => {
      n && E.Z.call(e.id, i, true, e.isDM() ? e.getRecipientId() : null)
    };
    if (1 === l.length) {
      let [e] = l, t = this._openCachedDMChannel(e, o, s);
      if (null != t) return c(t), Promise.resolve(t.id)
    }
    try {
      let e = await r.tn.post({
        url: y.ANM.USER_CHANNELS,
        body: {
          recipients: l
        },
        context: {
          location: a
        },
        oldFormErrors: true,
        retries: 3,
        rejectWithError: false
      });
      if (s) {
        null == o || o();
        let t = this._openPrivateChannel(e.body);
        c(t)
      }
      return e.body.id
    } catch (e) {
      var d;
      throw (null == e || null == (d = e.body) ? true : d.code) === y.evJ.QUARANTINED && (0, u.default)(), e
    }
  },
  _openCachedDMChannel(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = _.Z.getDMFromUserId(e),
      i = null != r ? _.Z.getChannel(r) : null;
    return null == i ? null : (n && (null == t || t(), null != (0, c.D)() ? (0, f.Kh)(i.id, {
      navigationReplace: true
    }) : b.default.selectPrivateChannel(i.id)), i)
  },
  async ensurePrivateChannel(e) {
    let t = this._getRecipients(e),
      n = await r.tn.post({
        url: y.ANM.USER_CHANNELS,
        body: {
          recipients: t
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      i = (0, p.q_)(n.body);
    return a.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: i
    }), i.id
  },
  async getOrEnsurePrivateChannel(e) {
    let t = _.Z.getDMFromUserId(e);
    return null != t ? t : await this.ensurePrivateChannel(e)
  },
  async getDMChannel(e) {
    let t = await r.tn.get({
        url: y.ANM.DM_CHANNEL(e),
        rejectWithError: true
      }),
      n = (0, p.q_)(t.body);
    return a.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: n
    }), n.id
  },
  _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
  _openPrivateChannel(e) {
    let t = (0, p.q_)(e);
    return a.Z.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    }), null != (0, c.D)() ? (0, f.Kh)(t.id, {
      navigationReplace: true
    }) : b.default.selectPrivateChannel(t.id), t
  },
  closePrivateChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    return (0, s.Z)(e) && h.default.track(y.rMx.CHANGE_LOG_DM_REMOVED, {
      last_changelog_id: o.Z.latestChangelogId(),
      unread_count: m.ZP.getUnreadCount(e)
    }), a.Z.dispatch({
      type: "CHANNEL_DELETE",
      channel: {
        id: e,
        guild_id: true,
        parent_id: true
      },
      silent: n
    }), t && !__OVERLAY__ && (0, d.uL)(y.Z5c.FRIENDS), r.tn.del({
      url: y.ANM.CHANNEL(e),
      query: {
        silent: n
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => {
      i.uv.announce(O.intl.string(O.t.nRbucl))
    }).catch(() => {
      i.uv.announce(O.intl.string(O.t.ndXVI5))
    })
  },
  async updatePermissionOverwrite(e, t) {
    let n = await r.tn.put({
      url: y.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
      body: t,
      oldFormErrors: true,
      rejectWithError: false
    });
    return a.Z.dispatch({
      type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS",
      channelId: e,
      overwrite: t
    }), n
  },
  async clearPermissionOverwrite(e, t) {
    let n = await r.tn.del({
      url: y.ANM.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
      oldFormErrors: true,
      rejectWithError: false
    });
    return a.Z.dispatch({
      type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS",
      channelId: e,
      overwriteId: t
    }), n
  },
  addRecipient(e, t, n, a) {
    return r.tn.put({
      url: y.ANM.CHANNEL_RECIPIENT(e, t),
      context: {
        location: n
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => (i.uv.announce(O.intl.string(O.t.cU0t1F)), null == a || a(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (i.uv.announce(O.intl.string(O.t["8GEdej"])), e))
  },
  addRecipients(e, t, n, r) {
    return this.addRecipient(e, t[0], n, r).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
  },
  removeRecipient: (e, t) => r.tn.del({
    url: y.ANM.CHANNEL_RECIPIENT(e, t),
    oldFormErrors: true,
    rejectWithError: true
  }),
  setDMOwner: (e, t) => r.tn.patch({
    url: y.ANM.CHANNEL(e),
    body: {
      owner: t
    },
    oldFormErrors: true,
    rejectWithError: true
  }),
  async setName(e, t) {
    let n = _.Z.getChannel(e),
      i = await r.tn.patch({
        url: y.ANM.CHANNEL(e),
        body: {
          name: t
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      a = null == n ? true : n.getGuildId();
    return null == a || (null == n ? true : n.isThread()) || l.Z.checkGuildTemplateDirty(a), i
  },
  async setIcon(e, t, n) {
    let i = _.Z.getChannel(e),
      a = {
        channel_id: e,
        channel_type: null == i ? true : i.type,
        old_icon_set: (null == i ? true : i.icon) != null,
        new_icon_set: null != t,
        location: n
      };
    h.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(S({}, a), {
      status: "initiated"
    }));
    try {
      let n = await r.tn.patch({
        url: y.ANM.CHANNEL(e),
        body: {
          icon: t
        },
        oldFormErrors: true,
        rejectWithError: true,
        failImmediatelyWhenRateLimited: true
      });
      h.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(S({}, a), {
        status: "success"
      }));
      let o = null == i ? true : i.getGuildId();
      return null == o || (null == i ? true : i.isThread()) || l.Z.checkGuildTemplateDirty(o), n
    } catch (e) {
      var o, s;
      throw h.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(S({}, a), {
        status: "failed",
        is_rate_limited: (null == e || null == (o = e.body) ? true : o.retry_after) != null,
        error_message: null == e || null == (s = e.body) ? true : s.message
      })), e
    }
  },
  async updateChannel(e, t, n) {
    let i = "icon" in t,
      a = _.Z.getChannel(e),
      o = t.icon,
      s = {
        channel_id: e,
        channel_type: null == a ? true : a.type,
        old_icon_set: (null == a ? true : a.icon) != null,
        new_icon_set: null != o,
        location: n
      };
    i && h.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(S({}, s), {
      status: "initiated"
    }));
    try {
      let o = await r.tn.patch({
          context: {
            location: n
          },
          url: y.ANM.CHANNEL(e),
          body: t,
          oldFormErrors: true,
          rejectWithError: true
        }),
        c = null == a ? true : a.getGuildId();
      return null == c || (null == a ? true : a.isThread()) || l.Z.checkGuildTemplateDirty(c), i && h.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(S({}, s), {
        status: "success"
      })), o
    } catch (e) {
      if (i) {
        var c, u;
        h.default.track(y.rMx.CHANNEL_ICON_EDIT_PROGRESSED, T(S({}, s), {
          status: "failed",
          is_rate_limited: (null == e || null == (c = e.body) ? true : c.retry_after) != null,
          error_message: null == e || null == (u = e.body) ? true : u.message
        }))
      }
      throw e
    }
  },
  convertToGuild: e => r.tn.post({
    url: y.ANM.CHANNEL_CONVERT(e),
    oldFormErrors: true,
    rejectWithError: true
  }),
  preload(e, t) {
    a.Z.dispatch({
      type: "CHANNEL_PRELOAD",
      guildId: e === y.ME ? null : e,
      channelId: t,
      context: y.e3s
    })
  },
  fetchChannelStoreListing(e, t) {
    let n = null != t ? y.ANM.CHANNEL_STORE_LISTING_SKU(e, t) : y.ANM.CHANNEL_STORE_LISTING(e);
    return (0, g.Kb)(n).then(t => {
      a.Z.dispatch({
        type: "STORE_LISTING_FETCH_SUCCESS",
        channelId: e,
        storeListing: t.body
      })
    })
  },
  async createTextChannel(e, t, n, i) {
    let a = {
      type: y.d4z.GUILD_TEXT,
      name: t,
      permission_overwrites: []
    };
    null != n && (a.parent_id = n), null != i && (a.topic = i);
    let o = await r.tn.post({
      url: y.ANM.GUILD_CHANNELS(e),
      body: a,
      oldFormErrors: true,
      rejectWithError: false
    });
    return l.Z.checkGuildTemplateDirty(e), o
  },
  fetchChannel: async e => (await r.tn.get({
    url: y.ANM.CHANNEL(e),
    rejectWithError: true
  })).body
}