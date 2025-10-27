/** Chunk was on 38342 **/
/** chunk id: 624453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => A,
  Z: () => I
}), require("./388685.js"), require("./290780.js");
var i, l, s, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk247206 = require("./247206.js"),
  Chunk786761 = require("./786761.js"),
  Chunk706454 = require("./706454.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  A = ((l = {}).LOADING = "LOADING", l.LOADED_HAS_MORE = "LOADED_HAS_MORE", l.LOADED_FINISHED = "LOADING_FINISHED", l.FAILED = "FAILED", l);
let D = {};

function h(e) {
  let {
    channel: t
  } = e;
  delete D[t.id]
}

function p() {
  a().forEach(D, e => {
    e.items.forEach(e => {
      let {
        message: t
      } = e;
      t.set("blocked", S.Z.isBlockedForMessage(t)), t.set("ignored", S.Z.isIgnoredForMessage(t))
    }), e.items = e.items.slice()
  })
}
class O extends(i = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk592125.Z, Chunk271383.ZP, Chunk430824.Z, Chunk706454.default, Chunk375954.Z, Chunk699516.Z, Chunk594174.default)
  }
  getPins(e) {
    return D[e]
  }
}(s = "displayName") in O ? Object.defineProperty(O, s, {
  value: "ChannelPinsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : O[s] = "ChannelPinsStore";
let I = new O(Chunk570140.Z, {
  CONNECTION_OPEN: function() {
    D = {}
  },
  LOAD_PINNED_MESSAGES: function(e) {
    var t, n;
    let {
      channelId: i,
      reset: l
    } = e;
    if (!l && null != D[i]) {
      D[i].state = "LOADING";
      return
    }
    let s = null != (n = null == (t = f.Z.getChannel(i)) ? true : t.getGuildId()) ? n : true;
    D[i] = {
      id: i,
      items: [],
      state: "LOADING",
      guildId: s
    }
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      pins: n,
      hasMore: i
    } = e, l = D[t];
    if (null == l) returnfalse;
    let s = n.map(e => {
      let {
        pinned_at: t,
        message: n
      } = e;
      return {
        pinnedAt: new Date(Date.parse(t)),
        message: (0, d.e5)(n)
      }
    });
    l.items = [...l.items, ...s], l.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED"
  },
  LOAD_PINNED_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e, n = D[t];
    if (null == n) returnfalse;
    n.state = "FAILED"
  },
  CHANNEL_DELETE: h,
  THREAD_DELETE: h,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    D = a()(D).filter(e => e.guildId !== t.id).keyBy("id").value()
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, i = D[n];
    if (null == i || 0 === a().remove(i.items, e => {
        let {
          message: n
        } = e;
        return n.id === t
      }).length) returnfalse;
    i.items = i.items.slice(), D[n] = i
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, i = D[n];
    if (null == i) returnfalse;
    i.items = i.items.filter(e => {
      let {
        message: n
      } = e;
      return !t.includes(n.id)
    })
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id,
      n = e.message.channel_id;
    if (null == n) returnfalse;
    let i = D[n];
    if (null == i) returnfalse;
    if (null == e.message.author) {
      let l = a().findIndex(i.items, e => {
        let {
          message: n
        } = e;
        return n.id === t
      });
      if (false === l) return;
      let {
        pinnedAt: s,
        message: r
      } = i.items[l], o = (0, d.wi)(r, e.message);
      if (o !== r) {
        let e = i.items.slice();
        e[l] = {
          pinnedAt: s,
          message: o
        }, D[n].items = e
      }
      return
    }
    if (e.message.pinned) {
      i.items = i.items.slice();
      let n = a().findIndex(i.items, e => {
        let {
          message: n
        } = e;
        return n.id === t
      });
      false === n ? i.items.unshift({
        message: (0, d.e5)(e.message),
        pinnedAt: new Date
      }) : i.items[n].message = (0, d.wi)(i.items[n].message, e.message);
      return
    }
    let l = a().findIndex(i.items, e => {
      let {
        message: n
      } = e;
      return n.id === t
    });
    if (false === l) returnfalse;
    i.items = i.items.slice(), i.items.splice(l, 1)
  },
  RELATIONSHIP_ADD: p,
  RELATIONSHIP_REMOVE: p,
  RELATIONSHIP_UPDATE: p,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, i = D[n];
    if (null == i) returnfalse;
    let l = a().findIndex(i.items, e => {
      let {
        message: n
      } = e;
      return n.id === t
    });
    if (false === l) returnfalse;
    i.items = i.items.slice(), i.items[l].message = (0, c.Cm)(i.items[l].message)
  }
})