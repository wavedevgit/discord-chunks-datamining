/** Chunk was on web.js **/
/** chunk id: 867455, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./938796.js");
var Chunk392421 = require("./392421.js"),
  Chunk562465 = require("./562465.js"),
  Chunk73153 = require("./73153.js"),
  Chunk157559 = require("./157559.js"),
  Chunk465532 = require("./465532.js"),
  Chunk58149 = require("./58149.js"),
  Chunk721768 = require("./721768.js"),
  Chunk95701 = require("./95701.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk403362 = require("./403362.js"),
  Chunk45494 = require("./45494.js"),
  Chunk152007 = require("./152007.js"),
  Chunk780057 = require("./780057.js"),
  Chunk707539 = require("./707539.js"),
  Chunk736130 = require("./736130.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx");

function A(e, t) {
  return i.Bo.patch({
    url: b.Rsh.CHANNEL(e.id),
    body: t,
    rejectWithError: false
  }).then(t => (a.h.dispatch({
    type: "THREAD_UPDATE",
    channel: (0, u.UE)(t.body)
  }), e.isForumPost() && null != e.parent_id && a.h.dispatch({
    type: "RESORT_THREADS",
    channelId: e.parent_id
  }), t))
}

function I(e, t) {
  a.h.dispatch({
    type: "THREAD_MEMBER_LOCAL_UPDATE",
    id: e.id,
    guildId: e.getGuildId(),
    userId: d.default.getId(),
    isJoining: t
  })
}
let S = {
  archiveThread(e, t) {
    let n = {
      archived: true
    };
    return t && (n.locked = true), A(e, n)
  },
  async lockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, false), A(e, {
      locked: true,
      archived: t
    })
  },
  async unlockThread(e) {
    let t = e.isArchivedThread();
    return t && await this.unarchiveThread(e, true), A(e, {
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
      return await A(e, n)
    } catch (e) {
      var i, a;
      throw (null == (i = e.body) ? true : i.code) === b.t02.TOO_MANY_THREADS ? o.A.show({
        title: r ? v.intl.string(v.t.kwyWNX) : v.intl.string(v.t["PeIE/r"]),
        body: r ? v.intl.string(v.t.KGaiEK) : v.intl.string(v.t.P0wT5S)
      }) : (null == (a = e.body) ? true : a.code) === b.t02.TOO_MANY_ANNOUNCEMENT_THREADS ? o.A.show({
        title: v.intl.string(v.t["PeIE/r"]),
        body: v.intl.string(v.t.jDMxz2)
      }) : 429 === e.status ? o.A.show({
        title: r ? v.intl.string(v.t.kwyWNX) : v.intl.string(v.t["PeIE/r"]),
        body: v.intl.string(v.t.Whhv4w)
      }) : o.A.show({
        title: v.intl.string(v.t.j2d6Km),
        body: v.intl.string(v.t.fEptJP)
      }), e
    }
  },
  async unarchiveThreadIfNecessary(e) {
    var t;
    let n = f.A.getChannel(e),
      r = p.A.can(b.xBc.MANAGE_THREADS, n);
    null != n && n.isArchivedThread() && (r || (null == (t = n.threadMetadata) ? true : t.locked) !== true) && await this.unarchiveThread(n, false)
  },
  setInvitable: (e, t) => A(e, {
    invitable: t
  }),
  async joinThread(e, t) {
    e.isForumPost() && I(e, true);
    try {
      return await i.Bo.post({
        url: b.Rsh.THREAD_MEMBER(e.id),
        query: {
          location: t
        },
        rejectWithError: false
      })
    } catch (t) {
      var n;
      if ((null == (n = t.body) ? true : n.code) === b.t02.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        o.A.show({
          title: t ? v.intl.string(v.t.EMYJFi) : v.intl.string(v.t.gtdVcs),
          body: t ? v.intl.string(v.t.QYyad3) : v.intl.string(v.t.abMwgm)
        })
      } else o.A.show({
        title: v.intl.string(v.t.j2d6Km),
        body: v.intl.string(v.t.fEptJP)
      });
      e.isForumPost() && I(e, false)
    }
  },
  async addMember(e, t, n) {
    try {
      return await i.Bo.post({
        url: b.Rsh.THREAD_MEMBER(e.id, t),
        query: {
          location: n
        },
        rejectWithError: false
      })
    } catch (t) {
      var r;
      if ((null == (r = t.body) ? true : r.code) === b.t02.TOO_MANY_THREAD_MEMBERS) {
        let t = e.isForumPost();
        o.A.show({
          title: t ? v.intl.string(v.t["0yAqqN"]) : v.intl.string(v.t.YErysD),
          body: t ? v.intl.string(v.t.QYyad3) : v.intl.string(v.t.abMwgm)
        })
      } else o.A.show({
        title: v.intl.string(v.t.j2d6Km),
        body: v.intl.string(v.t.fEptJP)
      })
    }
  },
  leaveThread: (e, t) => (e.isForumPost() && I(e, false), i.Bo.del({
    url: b.Rsh.THREAD_MEMBER(e.id),
    query: {
      location: t
    },
    rejectWithError: false
  })),
  removeMember: (e, t, n) => i.Bo.del({
    url: b.Rsh.THREAD_MEMBER(e, t),
    query: {
      location: n
    },
    rejectWithError: false
  }),
  setAutoArchiveDuration: (e, t) => i.Bo.patch({
    url: b.Rsh.CHANNEL(e.id),
    body: {
      auto_archive_duration: t
    },
    rejectWithError: false
  }),
  pin(e) {
    let t = e.flags | O.lx.PINNED;
    this.updateFlags(e, t, e.isArchivedThread())
  },
  unpin(e) {
    let t = e.flags & ~O.lx.PINNED;
    this.updateFlags(e, t)
  },
  async updateFlags(e, t) {
    let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
    a.h.dispatch({
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
      await i.Bo.patch({
        url: b.Rsh.CHANNEL(e.id),
        body: r,
        rejectWithError: true
      })
    } catch (t) {
      a.h.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      })
    }
  },
  async replacePin(e, t) {
    let n = e.merge({
        flags: e.flags & ~O.lx.PINNED
      }),
      r = t.merge({
        flags: t.flags | O.lx.PINNED
      });
    a.h.dispatch({
      type: "THREAD_UPDATE",
      channel: n
    }), a.h.dispatch({
      type: "THREAD_UPDATE",
      channel: r
    }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
    try {
      await i.Bo.patch({
        url: b.Rsh.CHANNEL(e.id),
        body: {
          flags: e.flags & ~O.lx.PINNED
        },
        rejectWithError: true
      })
    } catch (n) {
      a.h.dispatch({
        type: "THREAD_UPDATE",
        channel: e
      }), a.h.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      });
      return
    }
    try {
      await i.Bo.patch({
        url: b.Rsh.CHANNEL(t.id),
        body: {
          flags: t.flags | O.lx.PINNED
        },
        rejectWithError: true
      })
    } catch (e) {
      a.h.dispatch({
        type: "THREAD_UPDATE",
        channel: t
      })
    }
  },
  openThreadCreationForMobile(e, t, n) {
    (0, l.zV)(b.HAw.THREAD_CREATION_STARTED, {
      location: n,
      channel_id: e.id,
      guild_id: e.guild_id
    }), s.A.changeThreadSettings(e.id, {
      parentMessageId: t,
      isPrivate: false,
      location: n
    }), null == t && (0, c.Gf)({
      channelId: e.id,
      command: null,
      section: null
    })
  },
  async setNotificationSettings(e, t) {
    return (0, E.hs)(e, t), m.A.hasJoined(e.id) || await this.joinThread(e, "Change Notification Settings"), i.Bo.patch({
      url: b.Rsh.THREAD_MEMBER_SETTINGS(e.id),
      body: t,
      rejectWithError: false
    })
  },
  loadArchivedThreads(e) {
    let {
      guildId: t,
      channelId: n,
      sortOrder: r,
      tagFilter: o,
      tagSetting: s,
      offset: l
    } = e;
    h.A.isLoading(n, r, o, s) || (a.h.dispatch({
      type: "LOAD_ARCHIVED_THREADS",
      channelId: n,
      sortOrder: r,
      tagFilter: o,
      tagSetting: s
    }), i.Bo.get({
      url: b.Rsh.THREAD_SEARCH(n),
      query: {
        archived: true,
        sort_by: "last_message_time",
        sort_order: "desc",
        limit: h.m,
        tag: o.size > 0 ? Array.from(o).join(",") : true,
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
      null == i ? a.h.dispatch({
        type: "LOAD_ARCHIVED_THREADS_FAIL",
        channelId: n,
        sortOrder: r,
        tagFilter: o,
        tagSetting: s
      }) : a.h.dispatch({
        type: "LOAD_ARCHIVED_THREADS_SUCCESS",
        guildId: t,
        channelId: n,
        offset: l,
        sortOrder: r,
        tagFilter: o,
        tagSetting: s,
        threads: i,
        firstMessages: d,
        mostRecentMessages: f,
        members: (null != c ? c : []).map(e => (0, y.A)(e)),
        owners: i.map(e => e.owner).filter(_.Vq),
        hasMore: u
      })
    }, () => {
      a.h.dispatch({
        type: "LOAD_ARCHIVED_THREADS_FAIL",
        channelId: n,
        sortOrder: r,
        tagFilter: o,
        tagSetting: s
      })
    }))
  },
  async searchThreads(e, t, n, o) {
    let s = arguments.length > 4 && true !== arguments[4] ? arguments[4] : r.n.MATCH_SOME,
      l = null != o && o.size > 0 ? Array.from(o).join(",") : true,
      {
        body: {
          threads: c,
          members: u,
          first_messages: d,
          most_recent_messages: f
        }
      } = await i.Bo.get({
        url: b.Rsh.THREAD_SEARCH(t),
        query: {
          name: n,
          tag: l,
          tag_setting: s
        },
        rejectWithError: false
      });
    return a.h.dispatch({
      type: "LOAD_THREADS_SUCCESS",
      threads: c,
      members: u,
      guildId: e,
      firstMessages: d,
      mostRecentMessages: f
    }), c.map(e => e.id)
  },
  summarizeThread(e, t) {
    if (!(!e.isThread() || g.A.isInProgress())) return a.h.dispatch({
      type: "SUMMARIZE_THREAD_START"
    }), i.Bo.post({
      url: b.Rsh.AI_SUMMARIZE_THREAD(e.id),
      body: {
        ephemeral: null == t || t
      },
      rejectWithError: false
    }).then(() => {
      a.h.dispatch({
        type: "SUMMARIZE_THREAD_SUCCESS",
        channelId: e.id
      })
    }).catch(() => {
      a.h.dispatch({
        type: "SUMMARIZE_THREAD_FAILURE",
        channelId: e.id
      }), o.A.show({
        title: v.intl.string(v.t.j2d6Km),
        body: v.intl.string(v.t.fEptJP)
      })
    })
  }
}