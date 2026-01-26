/** Chunk was on 6502 **/
/** chunk id: 966833, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N,
  e: () => _
}), require("./896048.js"), require("./667532.js");
var i, l, s, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk390248 = require("./390248.js"),
  Chunk141468 = require("./141468.js"),
  Chunk773669 = require("./773669.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk320501 = require("./320501.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  _ = ((l = {}).LOADING = "LOADING", l.LOADED_HAS_MORE = "LOADED_HAS_MORE", l.LOADED_FINISHED = "LOADING_FINISHED", l.FAILED = "FAILED", l);
let S = {};

function I(e) {
  let {
    channel: t
  } = e;
  delete S[t.id]
}

function h() {
  a().forEach(S, e => {
    e.items.forEach(e => {
      let {
        message: t
      } = e;
      t.set("blocked", p.A.isBlockedForMessage(t)), t.set("ignored", p.A.isIgnoredForMessage(t))
    }), e.items = e.items.slice()
  })
}
class y extends(i = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(A.A, f.Ay, m.A, E.default, g.A, p.A, D.default)
  }
  getPins(e) {
    return S[e]
  }
}(s = "displayName") in y ? Object.defineProperty(y, s, {
  value: "ChannelPinsStore",
  enumerable: true,
  configurable: true,
  writable: true
}) : y[s] = "ChannelPinsStore";
let N = new y(Chunk73153.h, {
  CONNECTION_OPEN: function() {
    S = {}
  },
  LOAD_PINNED_MESSAGES: function(e) {
    var t, n;
    let {
      channelId: i,
      reset: l
    } = e;
    if (!l && null != S[i]) {
      S[i].state = "LOADING";
      return
    }
    let s = null != (t = null == (n = A.A.getChannel(i)) ? true : n.getGuildId()) ? t : true;
    S[i] = {
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
    } = e, l = S[t];
    if (null == l) returnfalse;
    let s = n.map(e => {
      let {
        pinned_at: t,
        message: n
      } = e;
      return {
        pinnedAt: new Date(Date.parse(t)),
        message: (0, u.rh)(n)
      }
    });
    l.items = [...l.items, ...s], l.state = i ? "LOADED_HAS_MORE" : "LOADING_FINISHED"
  },
  LOAD_PINNED_MESSAGES_FAILURE: function(e) {
    let {
      channelId: t
    } = e, n = S[t];
    if (null == n) returnfalse;
    n.state = "FAILED"
  },
  CHANNEL_DELETE: I,
  THREAD_DELETE: I,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    S = a()(S).filter(e => e.guildId !== t.id).keyBy("id").value()
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, i = S[n];
    if (null == i || 0 === a().remove(i.items, e => {
        let {
          message: n
        } = e;
        return n.id === t
      }).length) returnfalse;
    i.items = i.items.slice(), S[n] = i
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, i = S[n];
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
    let i = S[n];
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
      } = i.items[l], o = (0, u.IU)(r, e.message);
      if (o !== r) {
        let e = i.items.slice();
        e[l] = {
          pinnedAt: s,
          message: o
        }, S[n].items = e
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
        message: (0, u.rh)(e.message),
        pinnedAt: new Date
      }) : i.items[n].message = (0, u.IU)(i.items[n].message, e.message);
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
  RELATIONSHIP_ADD: h,
  RELATIONSHIP_REMOVE: h,
  RELATIONSHIP_UPDATE: h,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e, i = S[n];
    if (null == i) returnfalse;
    let l = a().findIndex(i.items, e => {
      let {
        message: n
      } = e;
      return n.id === t
    });
    if (false === l) returnfalse;
    i.items = i.items.slice(), i.items[l].message = (0, d.Td)(i.items[l].message)
  }
})