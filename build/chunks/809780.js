/** Chunk was on 15647 **/
/** chunk id: 809780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  As: () => F,
  ZP: () => Q,
  hC: () => H,
  jd: () => V
}), require("./539854.js"), require("./388685.js");
var r, i, Chunk647438 = require("./647438.js"),
  Chunk836560 = require("./836560.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk607070 = require("./607070.js"),
  Chunk622822 = require("./622822.js"),
  Chunk853856 = require("./853856.js"),
  Chunk181945 = require("./181945.js"),
  Chunk220444 = require("./220444.js"),
  Chunk601070 = require("./601070.js"),
  Chunk344185 = require("./344185.js"),
  Chunk569471 = require("./569471.js"),
  Chunk723170 = require("./723170.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk375954 = require("./375954.js"),
  Chunk496675 = require("./496675.js"),
  Chunk306680 = require("./306680.js"),
  Chunk771845 = require("./771845.js"),
  Chunk9156 = require("./9156.js"),
  Chunk70956 = require("./70956.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk124368 = require("./124368.js");

function G(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      G(e, t, n[t])
    })
  }
  return e
}

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var F = ((r = {})[r.Favorite = 0] = "Favorite", r[r.PrivateChannel = 1] = "PrivateChannel", r[r.HighImportanceMentioned = 2] = "HighImportanceMentioned", r[r.LowImportanceMentioned = 3] = "LowImportanceMentioned", r[r.AllMessagesNotifications = 4] = "AllMessagesNotifications", r[r.GuildChannel = 5] = "GuildChannel", r[r.OldChannel = 6] = "OldChannel", r[r.NoNotifications = 7] = "NoNotifications", r[r.ReallyOldChannel = 8] = "ReallyOldChannel", r),
  V = ((i = {}).Loading = "loading", i.Loaded = "loaded", i.Done = "done", i);
let H = 25;
class z extends Chunk836560.EventEmitter {
  loadMore() {
    let {
      loadState: e,
      channels: t
    } = this.state;
    if ("loaded" !== module) return;
    let n = false,
      r = exports.map(e => {
        if (e.isFullyLoaded || e.deleted || n) return e;
        if (e.collapsed)
          if (!e.hasLoadedAnything) return B(U({}, e), {
            hasLoadedAnything: true
          });
          else return e;
        return (e = this.populateInitialStateFromStore(e)).isFullyLoaded || (s()("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = true)), e
      });
    (!require || r.some((e, n) => e !== t[n])) && this.setState({
      channels: r,
      loadState: require ? this.state.loadState : "done"
    })
  }
  populateInitialStateFromStore(e) {
    if ("messages" === e.type) return W(e, false);
    if ("nsfw" === e.type) return B(U({}, e), {
      isFullyLoaded: true,
      hasLoadedAnything: true
    });
    if ("forum" === e.type) {
      let t = y.Z.hasLoaded(e.guildId);
      return B(U({}, e), {
        isFullyLoaded: t,
        hasLoadedAnything: true
      })
    }(0, D.vE)(e)
  }
  clearScrollToChannelIndex() {
    this.setState({
      scrollToChannelIndex: null
    })
  }
  loadChannelMessages(e) {
    p.Z.clearChannel(e.channelId);
    let t = p.Z.fetchMessages({
      channelId: e.channelId,
      limit: M.AQB,
      jump: {
        messageId: e.oldestReadMessageId,
        flash: true
      }
    });
    return null != t && false !== t && (this.setState({
      loadState: "loading"
    }), t.then(t => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          s()("messages" === e.type, "channel cannot change type");
          let n = W(e, true);
          return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = B(U({}, n), {
            hasLoadedAnything: true,
            isFullyLoaded: true,
            hasError: !t
          })), n
        })
      })
    }, () => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          var t;
          return s()("messages" === e.type, "channel cannot change type"), B(U({}, W(e, true)), {
            isFullyLoaded: true,
            hasError: true,
            hasLoadedAnything: true,
            newestUnreadMessageId: null == (t = e.messages[e.messages.length - 1]) ? true : t.id
          })
        })
      })
    }), true)
  }
  updateChannel(e, t) {
    return this.state.channels.map(n => n.channelId === e ? t(n) : n)
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = U({}, this.state, e), this.emit("change", this.state);
        return
      }
  }
  constructor(e, t) {
    super(), G(this, "state", true), G(this, "scrollerRef", true), G(this, "undoStack", true), G(this, "maybeLoadMore", true), G(this, "reloadMessages", true), G(this, "getNumUnreadChannels", true), G(this, "markChannelRead", true), G(this, "undoMarkChannelRead", true), G(this, "markGuildRead", true), G(this, "deleteChannel", true), G(this, "markAllRead", true), G(this, "toggle", true), G(this, "handleUserGuildSettingsStoreChange", true), G(this, "handleJoinedThreadsStoreChange", true), G(this, "handleActiveThreadsStoreChange", true), this.state = e, this.scrollerRef = t, this.undoStack = [], this.maybeLoadMore = () => {
      var e;
      let t = null == (e = this.scrollerRef.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore()
    }, this.reloadMessages = () => {
      this.setState({
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? W(e, false, true) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      d.Z.wait(() => f.ack(t, {
        section: M.jXE.INBOX,
        object: M.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
        objectType: M.AnalyticsObjectTypes.ACK_AUTOMATIC
      }, true, true, n));
      let r = this.state.channels.find(e => e.channelId === t);
      if (null != r && this.undoStack.push(r), 1 === this.state.channels.length) return void this.deleteChannel(t);
      this.setState({
        channels: this.updateChannel(t, e => B(U({}, e), {
          deleted: true
        }))
      }), h.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.undoMarkChannelRead = () => {
      if (0 === this.undoStack.length) return;
      let e = this.undoStack.pop();
      if (null == e) return;
      f.ack(e.channelId, {
        section: M.jXE.INBOX,
        object: M.qAy.UNDO_MARK_AS_READ,
        objectType: M.AnalyticsObjectTypes.ACK_MANUAL
      }, true, true, e.oldestReadMessageId);
      let t = this.state.channels.findIndex(t => t.order > e.order),
        n = [...this.state.channels];
      t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({
        scrollToChannelIndex: t,
        channels: n
      })
    }, this.markGuildRead = e => {
      d.Z.wait(() => (0, b.Z)([e], M.jXE.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: u().findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      f.y5(this.state.channels.map(e => ({
        channelId: e.channelId,
        messageId: e.newestUnreadMessageId
      }))), this.setState({
        channels: []
      })
    }, this.toggle = e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        channels: r,
        collapsedChannels: i,
        loadState: l
      } = this.state, o = u().findIndex(r, e => e.channelId === t), a = r[o], s = !a.collapsed;
      i[t] = s, (0, C.BU)(n, t, e => {
        e.collapsedInInbox = s
      }, C.fy.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: o,
        collapsedChannels: i,
        loadState: "done" !== l || s || a.isFullyLoaded ? l : "loaded",
        channels: this.updateChannel(t, e => B(U({}, e), {
          collapsed: s
        }))
      }), a.collapsed ? a.isFullyLoaded || this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !A.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleJoinedThreadsStoreChange = () => {
      let e = this.state.channels.filter(e => !v.Z.isMuted(e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleActiveThreadsStoreChange = () => {
      let e = this.state.channels.map(e => {
        if ("forum" !== e.type) return e;
        {
          if (!e.hasLoadedAnything) return e;
          let t = y.Z.hasLoaded(e.guildId);
          return B(U({}, e), {
            isFullyLoaded: t,
            hasLoadedAnything: true
          })
        }
      });
      this.setState({
        channels: e
      })
    };
    for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t
  }
}

function W(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = N.Z.getMessages(e.channelId),
    l = i.toArray().filter(t => L.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= L.default.compare(t.id, e.newestUnreadMessageId));
  if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
  let o = null != i.getAfter(e.oldestReadMessageId) || (null == (n = l[0]) ? true : n.id) === e.oldestUnreadMessageId,
    a = l[l.length - 1],
    s = L.default.compare(null == a ? true : a.id, e.newestUnreadMessageId) >= 0 || l.length >= H;
  return B(U({}, e), {
    messages: l,
    hasLoadedAnything: e.hasLoadedAnything || o || t,
    hasLoadedFirst: e.hasLoadedFirst || o || t,
    isFullyLoaded: e.isFullyLoaded || o && s || t && !i.hasMoreAfter
  })
}

function K() {
  let e = function() {
      var e, t;
      let n = {},
        r = null != (t = null == (e = Chunk581883.Z.settings.guilds) ? true : module.guilds) ? exports : {};
      for (let e in r)
        for (let t in r[module].channels) {
          let i = Chunk592125.Z.getChannel(exports);
          exports in require && (null == i ? true : i.guild_id) !== module || (require[exports] = r[module].channels[exports].collapsedInInbox)
        }
      return require
    }(),
    t = function(e) {
      let t = [];
      return S.Z.getSortedPrivateChannels().forEach(n => Y(e, t, null, n.id)), w.ZP.getFlattenedGuildIds().forEach(n => {
        if (null == n) return;
        let r = I.ZP.getSelectableChannelIds(n),
          i = O.Z.getActiveJoinedUnreadThreadsForGuild(n);
        r.forEach(r => {
          var l;
          Y(e, t, n, r);
          let o = null != (l = i[r]) ? l : {};
          for (let r in o) Y(e, t, n, r)
        })
      }), u().sortBy(t, e => e.sortOrder)
    }(module),
    n = u().uniq(exports.map(e => e.guildId)).filter(Chunk823379.lm);
  return Chunk570140.Z.dispatch({
    type: "INBOX_OPEN",
    guildIds: require
  }), {
    collapsedChannels: module,
    loadState: "loaded",
    channels: exports,
    scrollToChannelIndex: null
  }
}

function Y(e, t, n, r) {
  if (null == r) return;
  let i = S.Z.getChannel(r);
  if (null == i || !x.Ec.has(i.type) && A.ZP.isGuildOrCategoryOrChannelMuted(n, i.id)) return;
  if (i.isPrivate()) {
    if (0 === T.ZP.getMentionCount(r)) return
  } else if (!(0, _.d)(i) && 0 === T.ZP.getMentionCount(r)) return;
  if (!i.isPrivate() && !Z.Z.can(M.Plq.READ_MESSAGE_HISTORY, i) || (0, g.Y3)(i)) return;
  let l = T.ZP.ackMessageId(r);
  if (null == l) {
    let e = P.Z.getGuild(i.guild_id);
    if (null == e || null == e.joinedAt) return;
    l = L.default.fromTimestamp(e.joinedAt.getTime())
  }
  let o = T.ZP.getOldestUnreadMessageId(r),
    a = T.ZP.lastMessageId(r),
    s = T.ZP.getMentionCount(r),
    c = s > 0 || i.isPrivate();
  if (null == a || L.default.compare(l, a) >= 0) return;
  let u = {
    guildId: n,
    channelId: r,
    oldestReadMessageId: l,
    oldestUnreadMessageId: o,
    newestUnreadMessageId: a,
    collapsed: true === e[r],
    hasLoadedAnything: false,
    hasLoadedFirst: false,
    isFullyLoaded: false,
    hasError: false,
    hasMentionsOrUnreads: c,
    mentionCount: s,
    sortOrder: function(e, t, n) {
      let r = S.Z.getChannel(t);
      if (m.Z.isFavorite(t)) return 0;
      if (r.isPrivate()) return 1;
      if (T.ZP.getMentionCount(t) > 0) return T.ZP.getIsMentionLowImportance(t) ? 3 : 2;
      if (null != n) {
        let e = L.default.extractTimestamp(n);
        if (Date.now() - e > X) return 8;
        if (Date.now() - e > q) return 6
      }
      if (r.isThread()) {
        let e = (0, j.J)(r);
        return e === k.iN.ALL_MESSAGES ? 4 : e === k.iN.NO_MESSAGES ? 7 : 5
      } {
        let n = A.ZP.getChannelMessageNotifications(e, t),
          r = n === M.bL.NULL ? A.ZP.getMessageNotifications(e) : n;
        return r === M.bL.ALL_MESSAGES ? 4 : r === M.bL.NO_MESSAGES ? 7 : 5
      }
    }(n, r, a),
    order: 0
  };
  (0, g.Y3)(i) ? t.push(B(U({}, u), {
    type: "nsfw"
  })): i.isForumLikeChannel() ? t.push(B(U({}, u), {
    type: "forum"
  })) : t.push(B(U({}, u), {
    type: "messages",
    messages: []
  }))
}
let q = 2 * Chunk70956.Z.Millis.DAY,
  X = 10 * Chunk70956.Z.Millis.DAY;

function Q(e) {
  let [t, n] = l.useState(() => new z(K(), e)), [r, i] = l.useState(false), o = l.useRef(Date.now()), [a, s] = l.useState(() => K());
  l.useEffect(() => {
    let e = e => s(e);
    return t.on("change", e), s(t.state), () => {
      t.off("change", e)
    }
  }, [t]), l.useEffect(() => {
    if (null == a || a.channels.length > 0 || r) return;
    let t = Date.now(),
      l = K();
    0 === l.channels.length || t - o.current < 10 * R.Z.Millis.SECOND ? i(true) : (o.current = Date.now(), n(new z(l, e)))
  }, [a, r, e]);
  let c = l.useRef(t);
  return l.useLayoutEffect(() => {
    c.current = t
  }), l.useLayoutEffect(() => {
    null == a || a.channels, null == a || a.loadState, c.current.maybeLoadMore()
  }, [null == a ? true : a.channels, null == a ? true : a.loadState]), l.useEffect(() => (N.Z.addChangeListener(t.reloadMessages), () => N.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), l.useEffect(() => (A.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => A.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), l.useEffect(() => (v.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => v.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), l.useEffect(() => (y.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => y.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [a, t]
}