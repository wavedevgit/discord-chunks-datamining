/** Chunk was on 41753 **/
/** chunk id: 809780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  As: () => H,
  ZP: () => $,
  hC: () => W,
  jd: () => z
}), require("./539854.js"), require("./388685.js");
var r, i, Chunk73800 = require("./73800.js"),
  Chunk836560 = require("./836560.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  u = require.n(Chunk392711),
  Chunk570140 = require("./570140.js"),
  Chunk904245 = require("./904245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk607070 = require("./607070.js"),
  Chunk81643 = require("./81643.js"),
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
  Chunk731290 = require("./731290.js"),
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
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
var H = ((r = {})[r.Favorite = 0] = "Favorite", r[r.PrivateChannel = 1] = "PrivateChannel", r[r.HighImportanceMentioned = 2] = "HighImportanceMentioned", r[r.LowImportanceMentioned = 3] = "LowImportanceMentioned", r[r.AllMessagesNotifications = 4] = "AllMessagesNotifications", r[r.GuildChannel = 5] = "GuildChannel", r[r.OldChannel = 6] = "OldChannel", r[r.NoNotifications = 7] = "NoNotifications", r[r.ReallyOldChannel = 8] = "ReallyOldChannel", r),
  z = ((i = {}).Loading = "loading", i.Loaded = "loaded", i.Done = "done", i);
let W = 25;
class K extends Chunk836560.EventEmitter {
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
          if (!e.hasLoadedAnything) return F(V({}, e), {
            hasLoadedAnything: true
          });
          else return e;
        return (e = this.populateInitialStateFromStore(e)).isFullyLoaded || (a()("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = true)), e
      });
    (!require || r.some((e, n) => e !== t[n])) && this.setState({
      channels: r,
      loadState: require ? this.state.loadState : "done"
    })
  }
  populateInitialStateFromStore(e) {
    if ("messages" === e.type) return Y(e, false);
    if ("nsfw" === e.type) return F(V({}, e), {
      isFullyLoaded: true,
      hasLoadedAnything: true
    });
    if ("forum" === e.type) {
      let t = C.Z.hasLoaded(e.guildId);
      return F(V({}, e), {
        isFullyLoaded: t,
        hasLoadedAnything: true
      })
    }(0, M.vE)(e)
  }
  clearScrollToChannelIndex() {
    this.setState({
      scrollToChannelIndex: null
    })
  }
  loadChannelMessages(e) {
    h.Z.clearChannel(e.channelId);
    let t = h.Z.fetchMessages({
      channelId: e.channelId,
      limit: U.AQB,
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
          a()("messages" === e.type, "channel cannot change type");
          let n = Y(e, true);
          return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = F(V({}, n), {
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
          return a()("messages" === e.type, "channel cannot change type"), F(V({}, Y(e, true)), {
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
        this.state = V({}, this.state, e), this.emit("change", this.state);
        return
      }
  }
  constructor(e, t) {
    super(), B(this, "state", true), B(this, "scrollerRef", true), B(this, "undoStack", true), B(this, "maybeLoadMore", true), B(this, "reloadMessages", true), B(this, "getNumUnreadChannels", true), B(this, "markChannelRead", true), B(this, "undoMarkChannelRead", true), B(this, "markGuildRead", true), B(this, "deleteChannel", true), B(this, "markAllRead", true), B(this, "toggle", true), B(this, "handleUserGuildSettingsStoreChange", true), B(this, "handleJoinedThreadsStoreChange", true), B(this, "handleActiveThreadsStoreChange", true), this.state = e, this.scrollerRef = t, this.undoStack = [], this.maybeLoadMore = () => {
      var e;
      let t = null == (e = this.scrollerRef.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore()
    }, this.reloadMessages = () => {
      this.setState({
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? Y(e, false, true) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      d.Z.wait(() => p.In(t, {
        section: U.jXE.INBOX,
        object: U.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
        objectType: U.Qqv.ACK_AUTOMATIC
      }, true, true, n));
      let r = this.state.channels.find(e => e.channelId === t);
      if (null != r && this.undoStack.push(r), 1 === this.state.channels.length) return void this.deleteChannel(t);
      this.setState({
        channels: this.updateChannel(t, e => F(V({}, e), {
          deleted: true
        }))
      }), f.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.undoMarkChannelRead = () => {
      if (0 === this.undoStack.length) return;
      let e = this.undoStack.pop();
      if (null == e) return;
      p.In(e.channelId, {
        section: U.jXE.INBOX,
        object: U.qAy.UNDO_MARK_AS_READ,
        objectType: U.Qqv.ACK_MANUAL
      }, true, true, e.oldestReadMessageId);
      let t = this.state.channels.findIndex(t => t.order > e.order),
        n = [...this.state.channels];
      t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({
        scrollToChannelIndex: t,
        channels: n
      })
    }, this.markGuildRead = e => {
      d.Z.wait(() => (0, O.Z)([e], U.jXE.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: u().findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      p.y5(this.state.channels.map(e => ({
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
      } = this.state, o = u().findIndex(r, e => e.channelId === t), s = r[o], a = !s.collapsed;
      i[t] = a, (0, E.BU)(n, t, e => {
        e.collapsedInInbox = a
      }, E.fy.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: o,
        collapsedChannels: i,
        loadState: "done" !== l || a || s.isFullyLoaded ? l : "loaded",
        channels: this.updateChannel(t, e => F(V({}, e), {
          collapsed: a
        }))
      }), s.collapsed ? s.isFullyLoaded || this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !D.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
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
          let t = C.Z.hasLoaded(e.guildId);
          return F(V({}, e), {
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

function Y(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = Z.Z.getMessages(e.channelId),
    l = i.toArray().filter(t => k.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= k.default.compare(t.id, e.newestUnreadMessageId));
  if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
  let o = null != i.getAfter(e.oldestReadMessageId) || (null == (n = l[0]) ? true : n.id) === e.oldestUnreadMessageId,
    s = l[l.length - 1],
    a = k.default.compare(null == s ? true : s.id, e.newestUnreadMessageId) >= 0 || l.length >= W;
  return F(V({}, e), {
    messages: l,
    hasLoadedAnything: e.hasLoadedAnything || o || t,
    hasLoadedFirst: e.hasLoadedFirst || o || t,
    isFullyLoaded: e.isFullyLoaded || o && a || t && !i.hasMoreAfter
  })
}

function q() {
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
      return I.Z.getSortedPrivateChannels().forEach(n => X(e, t, null, n.id)), R.ZP.getFlattenedGuildIds().forEach(n => {
        if (null == n) return;
        let r = P.ZP.getSelectableChannelIds(n),
          i = y.Z.getActiveJoinedUnreadThreadsForGuild(n);
        r.forEach(r => {
          var l;
          X(e, t, n, r);
          let o = null != (l = i[r]) ? l : {};
          for (let r in o) X(e, t, n, r)
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

function X(e, t, n, r) {
  if (null == r) return;
  let i = I.Z.getChannel(r);
  if (null == i || !x.Ec.has(i.type) && D.ZP.isGuildOrCategoryOrChannelMuted(n, i.id)) return;
  if (i.isPrivate()) {
    if (0 === A.ZP.getMentionCount(r)) return
  } else if (!(0, _.d)(i) && 0 === A.ZP.getMentionCount(r)) return;
  if (!i.isPrivate() && !T.Z.can(U.Plq.READ_MESSAGE_HISTORY, i) || (0, m.aC)(i) && (0, g.sf)()) return;
  let l = A.ZP.ackMessageId(r);
  if (null == l) {
    let e = w.Z.getGuild(i.guild_id);
    if (null == e || null == e.joinedAt) return;
    l = k.default.fromTimestamp(e.joinedAt.getTime())
  }
  let o = A.ZP.getOldestUnreadMessageId(r),
    s = A.ZP.lastMessageId(r),
    a = A.ZP.getMentionCount(r),
    c = a > 0 || i.isPrivate();
  if (null == s || k.default.compare(l, s) >= 0) return;
  let u = {
    guildId: n,
    channelId: r,
    oldestReadMessageId: l,
    oldestUnreadMessageId: o,
    newestUnreadMessageId: s,
    collapsed: true === e[r],
    hasLoadedAnything: false,
    hasLoadedFirst: false,
    isFullyLoaded: false,
    hasError: false,
    hasMentionsOrUnreads: c,
    mentionCount: a,
    sortOrder: function(e, t, n) {
      let r = I.Z.getChannel(t);
      if (b.Z.isFavorite(t)) return 0;
      if (r.isPrivate()) return 1;
      if (A.ZP.getMentionCount(t) > 0) return A.ZP.getIsMentionLowImportance(t) ? 3 : 2;
      if (null != n) {
        let e = k.default.extractTimestamp(n);
        if (Date.now() - e > J) return 8;
        if (Date.now() - e > Q) return 6
      }
      if (r.isThread()) {
        let e = (0, j.J)(r);
        return e === G.iN.ALL_MESSAGES ? 4 : e === G.iN.NO_MESSAGES ? 7 : 5
      } {
        let n = D.ZP.getChannelMessageNotifications(e, t),
          r = n === U.bL.NULL ? D.ZP.getMessageNotifications(e) : n;
        return r === U.bL.ALL_MESSAGES ? 4 : r === U.bL.NO_MESSAGES ? 7 : 5
      }
    }(n, r, s),
    order: 0
  };
  (0, m.aC)(i) && !N.Z.didAgree(i.guild_id) ? t.push(F(V({}, u), {
    type: "nsfw"
  })) : i.isForumLikeChannel() ? t.push(F(V({}, u), {
    type: "forum"
  })) : t.push(F(V({}, u), {
    type: "messages",
    messages: []
  }))
}
let Q = 2 * Chunk70956.Z.Millis.DAY,
  J = 10 * Chunk70956.Z.Millis.DAY;

function $(e) {
  let [t, n] = l.useState(() => new K(q(), e)), [r, i] = l.useState(false), o = l.useRef(Date.now()), [s, a] = l.useState(() => q());
  l.useEffect(() => {
    let e = e => a(e);
    return t.on("change", e), a(t.state), () => {
      t.off("change", e)
    }
  }, [t]), l.useEffect(() => {
    if (null == s || s.channels.length > 0 || r) return;
    let t = Date.now(),
      l = q();
    0 === l.channels.length || t - o.current < 10 * L.Z.Millis.SECOND ? i(true) : (o.current = Date.now(), n(new K(l, e)))
  }, [s, r, e]);
  let c = l.useRef(t);
  return l.useLayoutEffect(() => {
    c.current = t
  }), l.useLayoutEffect(() => {
    null == s || s.channels, null == s || s.loadState, c.current.maybeLoadMore()
  }, [null == s ? true : s.channels, null == s ? true : s.loadState]), l.useEffect(() => (Z.Z.addChangeListener(t.reloadMessages), () => Z.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), l.useEffect(() => (D.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => D.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), l.useEffect(() => (v.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => v.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), l.useEffect(() => (C.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => C.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [s, t]
}