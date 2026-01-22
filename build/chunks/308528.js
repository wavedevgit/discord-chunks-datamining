/** Chunk was on web.js **/
/** chunk id: 308528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk562465 = require("./562465.js"),
  Chunk582754 = require("./582754.js"),
  Chunk73153 = require("./73153.js"),
  Chunk883600 = require("./883600.js"),
  Chunk343328 = require("./343328.js"),
  Chunk568185 = require("./568185.js"),
  Chunk250953 = require("./250953.js"),
  Chunk700241 = require("./700241.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk378570 = require("./378570.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk222823 = require("./222823.js"),
  Chunk954571 = require("./954571.js"),
  Chunk371794 = require("./371794.js"),
  Chunk387755 = require("./387755.js"),
  Chunk956793 = require("./956793.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = {
  async openPrivateChannel(e) {
    let {
      recipientIds: t,
      joinCall: n = false,
      joinCallVideo: i = false,
      location: a,
      onBeforeTransition: s,
      navigateToChannel: o = true
    } = e, l = this._getRecipients(t), c = e => {
      n && E.A.call(e.id, i, true, e.isDM() ? e.getRecipientId() : null)
    };
    if (1 === l.length) {
      let [e] = l, t = this._openCachedDMChannel(e, s, o);
      if (null != t) return c(t), Promise.resolve(t.id)
    }
    try {
      let e = await r.Bo.post({
        url: y.Rsh.USER_CHANNELS,
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
      if (o) {
        null == s || s();
        let t = this._openPrivateChannel(e.body);
        c(t)
      }
      return e.body.id
    } catch (e) {
      var d;
      throw (null == e || null == (d = e.body) ? true : d.code) === y.t02.QUARANTINED && (0, u.default)(), e
    }
  },
  _openCachedDMChannel(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = _.A.getDMFromUserId(e),
      i = null != r ? _.A.getChannel(r) : null;
    return null == i ? null : (n && (null == t || t(), null != (0, c.Y)() ? (0, f.iN)(i.id, {
      navigationReplace: true
    }) : b.default.selectPrivateChannel(i.id)), i)
  },
  async ensurePrivateChannel(e) {
    let t = this._getRecipients(e),
      n = await r.Bo.post({
        url: y.Rsh.USER_CHANNELS,
        body: {
          recipients: t
        },
        oldFormErrors: true,
        rejectWithError: false
      }),
      i = (0, p.UE)(n.body);
    return a.h.dispatch({
      type: "CHANNEL_CREATE",
      channel: i
    }), i.id
  },
  async getOrEnsurePrivateChannel(e) {
    let t = _.A.getDMFromUserId(e);
    return null != t ? t : await this.ensurePrivateChannel(e)
  },
  async getDMChannel(e) {
    let t = await r.Bo.get({
        url: y.Rsh.DM_CHANNEL(e),
        rejectWithError: true
      }),
      n = (0, p.UE)(t.body);
    return a.h.dispatch({
      type: "CHANNEL_CREATE",
      channel: n
    }), n.id
  },
  _getRecipients: e => null != e ? Array.isArray(e) ? e : [e] : [],
  _openPrivateChannel(e) {
    let t = (0, p.UE)(e);
    return a.h.dispatch({
      type: "CHANNEL_CREATE",
      channel: t
    }), null != (0, c.Y)() ? (0, f.iN)(t.id, {
      navigationReplace: true
    }) : b.default.selectPrivateChannel(t.id), t
  },
  closePrivateChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    return (0, o.A)(e) && m.default.track(y.HAw.CHANGE_LOG_DM_REMOVED, {
      last_changelog_id: s.A.latestChangelogId(),
      unread_count: h.Ay.getUnreadCount(e)
    }), a.h.dispatch({
      type: "CHANNEL_DELETE",
      channel: {
        id: e,
        guild_id: true,
        parent_id: true
      },
      silent: n
    }), t && !__OVERLAY__ && (0, d.pX)(y.BVt.FRIENDS), r.Bo.del({
      url: y.Rsh.CHANNEL(e),
      query: {
        silent: n
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(() => {
      i.OR.announce(O.intl.string(O.t.nRbucl))
    }).catch(() => {
      i.OR.announce(O.intl.string(O.t.ndXVI5))
    })
  },
  async updatePermissionOverwrite(e, t) {
    let n = await r.Bo.put({
      url: y.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t.id),
      body: t,
      oldFormErrors: true,
      rejectWithError: false
    });
    return a.h.dispatch({
      type: "CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS",
      channelId: e,
      overwrite: t
    }), n
  },
  async clearPermissionOverwrite(e, t) {
    let n = await r.Bo.del({
      url: y.Rsh.CHANNEL_PERMISSIONS_OVERWRITE(e, t),
      oldFormErrors: true,
      rejectWithError: false
    });
    return a.h.dispatch({
      type: "CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS",
      channelId: e,
      overwriteId: t
    }), n
  },
  addRecipient(e, t, n, a) {
    return r.Bo.put({
      url: y.Rsh.CHANNEL_RECIPIENT(e, t),
      context: {
        location: n
      },
      oldFormErrors: true,
      rejectWithError: true
    }).then(t => (i.OR.announce(O.intl.string(O.t.cU0t1F)), null == a || a(), 201 === t.status) ? this._openPrivateChannel(t.body).id : e).catch(() => (i.OR.announce(O.intl.string(O.t["8GEdej"])), e))
  },
  addRecipients(e, t, n, r) {
    return this.addRecipient(e, t[0], n, r).then(e => Promise.all(t.slice(1).map(t => this.addRecipient(e, t, n))).then(() => e))
  },
  removeRecipient: (e, t) => r.Bo.del({
    url: y.Rsh.CHANNEL_RECIPIENT(e, t),
    oldFormErrors: true,
    rejectWithError: true
  }),
  setDMOwner: (e, t) => r.Bo.patch({
    url: y.Rsh.CHANNEL(e),
    body: {
      owner: t
    },
    oldFormErrors: true,
    rejectWithError: true
  }),
  async setName(e, t) {
    let n = _.A.getChannel(e),
      i = await r.Bo.patch({
        url: y.Rsh.CHANNEL(e),
        body: {
          name: t
        },
        oldFormErrors: true,
        rejectWithError: true
      }),
      a = null == n ? true : n.getGuildId();
    return null == a || (null == n ? true : n.isThread()) || l.A.checkGuildTemplateDirty(a), i
  },
  async setIcon(e, t, n) {
    let i = _.A.getChannel(e),
      a = {
        channel_id: e,
        channel_type: null == i ? true : i.type,
        old_icon_set: (null == i ? true : i.icon) != null,
        new_icon_set: null != t,
        location: n
      };
    m.default.track(y.HAw.CHANNEL_ICON_EDIT_PROGRESSED, I(v({}, a), {
      status: "initiated"
    }));
    try {
      let n = await r.Bo.patch({
        url: y.Rsh.CHANNEL(e),
        body: {
          icon: t
        },
        oldFormErrors: true,
        rejectWithError: true,
        failImmediatelyWhenRateLimited: true
      });
      m.default.track(y.HAw.CHANNEL_ICON_EDIT_PROGRESSED, I(v({}, a), {
        status: "success"
      }));
      let s = null == i ? true : i.getGuildId();
      return null == s || (null == i ? true : i.isThread()) || l.A.checkGuildTemplateDirty(s), n
    } catch (e) {
      var s, o;
      throw m.default.track(y.HAw.CHANNEL_ICON_EDIT_PROGRESSED, I(v({}, a), {
        status: "failed",
        is_rate_limited: (null == e || null == (s = e.body) ? true : s.retry_after) != null,
        error_message: null == e || null == (o = e.body) ? true : o.message
      })), e
    }
  },
  async updateChannel(e, t, n) {
    let i = "icon" in t,
      a = _.A.getChannel(e),
      s = t.icon,
      o = {
        channel_id: e,
        channel_type: null == a ? true : a.type,
        old_icon_set: (null == a ? true : a.icon) != null,
        new_icon_set: null != s,
        location: n
      };
    i && m.default.track(y.HAw.CHANNEL_ICON_EDIT_PROGRESSED, I(v({}, o), {
      status: "initiated"
    }));
    try {
      let s = await r.Bo.patch({
          context: {
            location: n
          },
          url: y.Rsh.CHANNEL(e),
          body: t,
          oldFormErrors: true,
          rejectWithError: true
        }),
        c = null == a ? true : a.getGuildId();
      return null == c || (null == a ? true : a.isThread()) || l.A.checkGuildTemplateDirty(c), i && m.default.track(y.HAw.CHANNEL_ICON_EDIT_PROGRESSED, I(v({}, o), {
        status: "success"
      })), s
    } catch (e) {
      if (i) {
        var c, u;
        m.default.track(y.HAw.CHANNEL_ICON_EDIT_PROGRESSED, I(v({}, o), {
          status: "failed",
          is_rate_limited: (null == e || null == (c = e.body) ? true : c.retry_after) != null,
          error_message: null == e || null == (u = e.body) ? true : u.message
        }))
      }
      throw e
    }
  },
  convertToGuild: e => r.Bo.post({
    url: y.Rsh.CHANNEL_CONVERT(e),
    oldFormErrors: true,
    rejectWithError: true
  }),
  preload(e, t) {
    a.h.dispatch({
      type: "CHANNEL_PRELOAD",
      guildId: e === y.ME ? null : e,
      channelId: t,
      context: y.QCW
    })
  },
  fetchChannelStoreListing(e, t) {
    let n = null != t ? y.Rsh.CHANNEL_STORE_LISTING_SKU(e, t) : y.Rsh.CHANNEL_STORE_LISTING(e);
    return (0, g.aP)(n).then(t => {
      a.h.dispatch({
        type: "STORE_LISTING_FETCH_SUCCESS",
        channelId: e,
        storeListing: t.body
      })
    })
  },
  async createTextChannel(e, t, n, i) {
    let a = {
      type: y.rbe.GUILD_TEXT,
      name: t,
      permission_overwrites: []
    };
    null != n && (a.parent_id = n), null != i && (a.topic = i);
    let s = await r.Bo.post({
      url: y.Rsh.GUILD_CHANNELS(e),
      body: a,
      oldFormErrors: true,
      rejectWithError: false
    });
    return l.A.checkGuildTemplateDirty(e), s
  },
  fetchChannel: async e => (await r.Bo.get({
    url: y.Rsh.CHANNEL(e),
    rejectWithError: true
  })).body
}