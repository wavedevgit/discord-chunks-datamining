/** Chunk was on web.js **/
/** chunk id: 346479, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./997841.js");
var Chunk697988 = require("./697988.js"),
  Chunk544891 = require("./544891.js"),
  Chunk570140 = require("./570140.js"),
  Chunk668781 = require("./668781.js"),
  Chunk430742 = require("./430742.js"),
  Chunk367907 = require("./367907.js"),
  Chunk555573 = require("./555573.js"),
  Chunk131704 = require("./131704.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk823379 = require("./823379.js"),
  Chunk920303 = require("./920303.js"),
  Chunk569471 = require("./569471.js"),
  Chunk91159 = require("./91159.js"),
  Chunk952537 = require("./952537.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.js");

function v(e, t) {
  return i.tn.patch({
    url: b.ANM.CHANNEL(e.id),
    body: t,
    rejectWithError: false
  }).then(t => (o.Z.dispatch({
    type: "THREAD_UPDATE",
    channel: (0, u.q_)(t.body)
  }), e.isForumPost() && null != e.parent_id && o.Z.dispatch({
    type: "RESORT_THREADS",
    channelId: e.parent_id
  }), t))
}

function I(e, t) {
  o.Z.dispatch({
    type: "THREAD_MEMBER_LOCAL_UPDATE",
    id: e.id,
    guildId: e.getGuildId(),
    userId: d.default.getId(),
    isJoining: t
  })
}
let T = {
  archiveThread(e, t) {
    let n = {
      archived: true
    };
    return t && (n.locked = true), v(e, n)
  },
  async lockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, false), v(e, {
      locked: true,
      archived: t
    })
  },
  async unlockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, true), v(e, {
      locked: false,
      archived: t
    })
  },
  async unarchiveThread(e, t) {
    let n = {
        archived: false
      },
      r = e.isForumPost();
    t && (n.locked = false);
    try {
      return await v(e, n)
    } catch (e) {
      var i, o;
      throw (null == (i = e.body) ? true : i.code) === b.evJ.TOO_MANY_THREADS ? a.Z.show({
        title: r ? O.intl.string(O.t.kwyWNT) : O.intl.string(O.t["PeIE/v"]),
        body: r ? O.intl.string(O.t.KGaiEB) : O.intl.string(O.t.P0wT5e)
      }) : (null == (o = e.body) ? true : o.code) === b.evJ.TOO_MANY_ANNOUNCEMENT_THREADS ? a.Z.show({
        title: O.intl.string(O.t["PeIE/v"]),
        body: O.intl.string(O.t.jDMxz8)
      }) : 429 === e.status ? a.Z.show({
        title: r ? O.intl.string(O.t.kwyWNT) : O.intl.string(O.t["PeIE/v"]),
        body: O.intl.string(O.t["Whhv4+"])
      }) : a.Z.show({
        title: O.intl.string(O.t.j2d6Ki),
        body: O.intl.string(O.t.fEptJC)
      }), e
    }
  },
  async unarchiveThreadIfNecessary(e) {
    var t;
    let n = f.Z.getChannel(e),
      r = _.Z.can(b.Plq.MANAGE_THREADS, n);
    null != n && n.isArchivedThread() && (r || (null == (t = n.threadMetadata) ? true : t.locked) !== true) && await this.unarchiveThread(n, false)
  },
  setInvitable: (e, t) => v(e, {
    invitable: t
  }),
  async joinThread(e, t) {
    e.isForumPost() && I(e, true);
    try {
      return await i.tn.post({
        url: b.ANM.THREAD_MEMBER(e.id),
        query: {
          location: t
        },
        rejectWithError: false
      })
    } catch (t) {
      var n;
      if ((null == (n = t.body) ? true : n.code) === b.evJ.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        a.Z.show({
          title: t ? O.intl.string(O.t.EMYJFh) : O.intl.string(O.t.gtdVcn),
          body: t ? O.intl.string(O.t.QYyad3) : O.intl.string(O.t.abMwgo)
        })
      } else a.Z.show({
        title: O.intl.string(O.t.j2d6Ki),
        body: O.intl.string(O.t.fEptJC)
      });
      e.isForumPost() && I(e, false)
    }
  },
  async addMember(e, t, n) {
    try {
      return await i.tn.post({
        url: b.ANM.THREAD_MEMBER(e.id, t),
        query: {
          location: n
        },
        rejectWithError: false
      })
    } catch (t) {
      var r;
      if ((null == (r = t.body) ? true : r.code) === b.evJ.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        a.Z.show({
          title: t ? O.intl.string(O.t["0yAqqK"]) : O.intl.string(O.t.YErysL),
          body: t ? O.intl.string(O.t.QYyad3) : O.intl.string(O.t.abMwgo)
        })
      } else a.Z.show({
        title: O.intl.string(O.t.j2d6Ki),
        body: O.intl.string(O.t.fEptJC)
      })
    }
  },
  leaveThread: (e, t) => (e.isForumPost() && I(e, false), i.tn.del({
    url: b.ANM.THREAD_MEMBER(e.id),
    query: {
      location: t
    },
    rejectWithError: false
  })),
  removeMember: (e, t, n) => i.tn.del({
    url: b.ANM.THREAD_MEMBER(e, t),
    query: {
      location: n
    },
    rejectWithError: false
  }),
  setAutoArchiveDuration: (e, t) => i.tn.patch({
    url: b.ANM.CHANNEL(e.id),
    body: {
      auto_archive_duration: t
    },
    rejectWithError: false
  }),
  pin(e) {
    let t = e.flags | y.zZ.PINNED;
    this.updateFlags(e, t, e.isArchivedThread())
  },
  unpin(e) {
    let t = e.flags & ~y.zZ.PINNED;
    this.updateFlags(e, t)
  },
  async updateFlags(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    o.Z.dispatch({
      type: "THREAD_UPDATE",
      channel: e.merge({
        flags: t
      })
    });
    let r = {
      flags: t
    };
    n && (r.archived = false);
    try {
      await i.tn.patch({
        url: b.ANM.CHANNEL(e.id),
        body: r,
        rejectWithError: true
      })
    } catch (t) {
      o.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      })
    }
  },
  async replacePin(e, t) {
    let n = e.merge({
        flags: e.flags & ~y.zZ.PINNED
      }),
      r = t.merge({
        flags: t.flags | y.zZ.PINNED
      });
    o.Z.dispatch({
      type: "THREAD_UPDATE",
      channel: n
    }), o.Z.dispatch({
      type: "THREAD_UPDATE",
      channel: r
    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
    try {
      await i.tn.patch({
        url: b.ANM.CHANNEL(e.id),
        body: {
          flags: e.flags & ~y.zZ.PINNED
        },
        rejectWithError: true
      })
    } catch (n) {
      o.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      }), o.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      });
      return
    }
    try {
      await i.tn.patch({
        url: b.ANM.CHANNEL(t.id),
        body: {
          flags: t.flags | y.zZ.PINNED
        },
        rejectWithError: true
      })
    } catch (e) {
      o.Z.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      })
    }
  },
  openThreadCreationForMobile(e, t, n) {
    (0, l.yw)(b.rMx.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), s.Z.changeThreadSettings(e.id, {
      parentMessageId: t,
      isPrivate: false,
      location: n
    }), null == t && (0, c.Po)({
      channelId: e.id,
      command: null,
      section: null
    })
  },
  async setNotificationSettings(e, t) {
    return (0, g.ZJ)(e, t), m.Z.hasJoined(e.id) || await this.joinThread(e, "Change Notification Settings"), i.tn.patch({
      url: b.ANM.THREAD_MEMBER_SETTINGS(e.id),
      body: t,
      rejectWithError: false
    })
  },
  loadArchivedThreads(e) {
    let {
      guildId: t,
      channelId: n,
      sortOrder: r,
      tagFilter: a,
      tagSetting: s,
      offset: l
    } = e;
    h.Z.isLoading(n, r, a, s) || (o.Z.dispatch({
      type: "LOAD_ARCHIVED_THREADS",
      channelId: n,
      sortOrder: r,
      tagFilter: a,
      tagSetting: s
    }), i.tn.get({
      url: b.ANM.THREAD_SEARCH(n),
      query: {
        archived: true,
        sort_by: "last_message_time",
        sort_order: "desc",
        limit: h.I,
        tag: a.size > 0 ? Array.from(a).join(",") : true,
        tag_setting: s,
        offset: l
      },
      retries: 2,
      rejectWithError: true
    }).then(e => {
      let {
        body: {
          threads: i,
          members: c,
          has_more: u,
          first_messages: d,
          most_recent_messages: f
        }
      } = e;
      null == i ? o.Z.dispatch({
        type: "LOAD_ARCHIVED_THREADS_FAIL",
        channelId: n,
        sortOrder: r,
        tagFilter: a,
        tagSetting: s
      }) : o.Z.dispatch({
        type: "LOAD_ARCHIVED_THREADS_SUCCESS",
        guildId: t,
        channelId: n,
        offset: l,
        sortOrder: r,
        tagFilter: a,
        tagSetting: s,
        threads: i,
        firstMessages: d,
        mostRecentMessages: f,
        members: (null != c ? c : []).map(e => (0, E.Z)(e)),
        owners: i.map(e => e.owner).filter(p.lm),
        hasMore: u
      })
    }, () => {
      o.Z.dispatch({
        type: "LOAD_ARCHIVED_THREADS_FAIL",
        channelId: n,
        sortOrder: r,
        tagFilter: a,
        tagSetting: s
      })
    }))
  },
  async searchThreads(e, t, n, a) {
    let s = arguments.length > 4 && true !== arguments[4] ? arguments[4] : r.z.MATCH_SOME,
      l = null != a && a.size > 0 ? Array.from(a).join(",") : true,
      {
        body: {
          threads: c,
          members: u,
          first_messages: d,
          most_recent_messages: f
        }
      } = await i.tn.get({
        url: b.ANM.THREAD_SEARCH(t),
        query: {
          name: n,
          tag: l,
          tag_setting: s
        },
        rejectWithError: false
      });
    return o.Z.dispatch({
      type: "LOAD_THREADS_SUCCESS",
      threads: c,
      members: u,
      guildId: e,
      firstMessages: d,
      mostRecentMessages: f
    }), c.map(e => e.id)
  }
}