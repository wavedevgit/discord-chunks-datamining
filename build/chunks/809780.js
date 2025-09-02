/** Chunk was on 11160 **/
/** chunk id: 809780, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  As: () => z,
  ZP: () => ee,
  hC: () => K,
  jd: () => W
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
  Chunk81643 = require("./81643.js"),
  Chunk974814 = require("./974814.js"),
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

function F(e, t, n) {
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
      F(e, t, n[t])
    })
  }
  return e
}

function H(e, t) {
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
var z = ((r = {})[r.Favorite = 0] = "Favorite", r[r.PrivateChannel = 1] = "PrivateChannel", r[r.HighImportanceMentioned = 2] = "HighImportanceMentioned", r[r.LowImportanceMentioned = 3] = "LowImportanceMentioned", r[r.AllMessagesNotifications = 4] = "AllMessagesNotifications", r[r.GuildChannel = 5] = "GuildChannel", r[r.OldChannel = 6] = "OldChannel", r[r.NoNotifications = 7] = "NoNotifications", r[r.ReallyOldChannel = 8] = "ReallyOldChannel", r),
  W = ((i = {}).Loading = "loading", i.Loaded = "loaded", i.Done = "done", i);
let K = 25;
class Y extends Chunk836560.EventEmitter {
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
          if (!e.hasLoadedAnything) return H(V({}, e), {
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
    if ("messages" === e.type) return q(e, false);
    if ("nsfw" === e.type) return H(V({}, e), {
      isFullyLoaded: true,
      hasLoadedAnything: true
    });
    if ("forum" === e.type) {
      let t = j.Z.hasLoaded(e.guildId);
      return H(V({}, e), {
        isFullyLoaded: t,
        hasLoadedAnything: true
      })
    }(0, k.vE)(e)
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
      limit: G.AQB,
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
          let n = q(e, true);
          return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = H(V({}, n), {
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
          return s()("messages" === e.type, "channel cannot change type"), H(V({}, q(e, true)), {
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
    super(), F(this, "state", true), F(this, "scrollerRef", true), F(this, "undoStack", true), F(this, "maybeLoadMore", true), F(this, "reloadMessages", true), F(this, "getNumUnreadChannels", true), F(this, "markChannelRead", true), F(this, "undoMarkChannelRead", true), F(this, "markGuildRead", true), F(this, "deleteChannel", true), F(this, "markAllRead", true), F(this, "toggle", true), F(this, "handleUserGuildSettingsStoreChange", true), F(this, "handleJoinedThreadsStoreChange", true), F(this, "handleActiveThreadsStoreChange", true), this.state = e, this.scrollerRef = t, this.undoStack = [], this.maybeLoadMore = () => {
      var e;
      let t = null == (e = this.scrollerRef.current) ? true : e.getScrollerState();
      null != t && t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore()
    }, this.reloadMessages = () => {
      this.setState({
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? q(e, false, true) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      d.Z.wait(() => h.In(t, {
        section: G.jXE.INBOX,
        object: G.qAy.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
        objectType: G.Qqv.ACK_AUTOMATIC
      }, true, true, n));
      let r = this.state.channels.find(e => e.channelId === t);
      if (null != r && this.undoStack.push(r), 1 === this.state.channels.length) return void this.deleteChannel(t);
      this.setState({
        channels: this.updateChannel(t, e => H(V({}, e), {
          deleted: true
        }))
      }), f.Z.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.undoMarkChannelRead = () => {
      if (0 === this.undoStack.length) return;
      let e = this.undoStack.pop();
      if (null == e) return;
      h.In(e.channelId, {
        section: G.jXE.INBOX,
        object: G.qAy.UNDO_MARK_AS_READ,
        objectType: G.Qqv.ACK_MANUAL
      }, true, true, e.oldestReadMessageId);
      let t = this.state.channels.findIndex(t => t.order > e.order),
        n = [...this.state.channels];
      t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({
        scrollToChannelIndex: t,
        channels: n
      })
    }, this.markGuildRead = e => {
      d.Z.wait(() => (0, y.Z)([e], G.jXE.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: u().findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      h.y5(this.state.channels.map(e => ({
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
      i[t] = s, (0, E.BU)(n, t, e => {
        e.collapsedInInbox = s
      }, E.fy.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: o,
        collapsedChannels: i,
        loadState: "done" !== l || s || a.isFullyLoaded ? l : "loaded",
        channels: this.updateChannel(t, e => H(V({}, e), {
          collapsed: s
        }))
      }), a.collapsed ? a.isFullyLoaded || this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !M.ZP.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleJoinedThreadsStoreChange = () => {
      let e = this.state.channels.filter(e => !x.Z.isMuted(e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleActiveThreadsStoreChange = () => {
      let e = this.state.channels.map(e => {
        if ("forum" !== e.type) return e;
        {
          if (!e.hasLoadedAnything) return e;
          let t = j.Z.hasLoaded(e.guildId);
          return H(V({}, e), {
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

function q(e, t) {
  var n;
  let r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = T.Z.getMessages(e.channelId),
    l = i.toArray().filter(t => U.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= U.default.compare(t.id, e.newestUnreadMessageId));
  if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && r) return e;
  let o = null != i.getAfter(e.oldestReadMessageId) || (null == (n = l[0]) ? true : n.id) === e.oldestUnreadMessageId,
    a = l[l.length - 1],
    s = U.default.compare(null == a ? true : a.id, e.newestUnreadMessageId) >= 0 || l.length >= K;
  return H(V({}, e), {
    messages: l,
    hasLoadedAnything: e.hasLoadedAnything || o || t,
    hasLoadedFirst: e.hasLoadedFirst || o || t,
    isFullyLoaded: e.isFullyLoaded || o && s || t && !i.hasMoreAfter
  })
}

function X() {
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
      return I.Z.getSortedPrivateChannels().forEach(n => Q(e, t, null, n.id)), D.ZP.getFlattenedGuildIds().forEach(n => {
        if (null == n) return;
        let r = N.ZP.getSelectableChannelIds(n),
          i = v.Z.getActiveJoinedUnreadThreadsForGuild(n);
        r.forEach(r => {
          var l;
          Q(e, t, n, r);
          let o = null != (l = i[r]) ? l : {};
          for (let r in o) Q(e, t, n, r)
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

function Q(e, t, n, r) {
  if (null == r) return;
  let i = I.Z.getChannel(r);
  if (null == i || !P.Ec.has(i.type) && M.ZP.isGuildOrCategoryOrChannelMuted(n, i.id)) return;
  if (i.isPrivate()) {
    if (0 === R.ZP.getMentionCount(r)) return
  } else if (!(0, _.d)(i) && 0 === R.ZP.getMentionCount(r)) return;
  if (!i.isPrivate() && !A.Z.can(G.Plq.READ_MESSAGE_HISTORY, i) || (0, b.aC)(i) && (0, m.H1)({
      location: "unreads-loader"
    }) && (0, g.sf)()) return;
  let l = R.ZP.ackMessageId(r);
  if (null == l) {
    let e = Z.Z.getGuild(i.guild_id);
    if (null == e || null == e.joinedAt) return;
    l = U.default.fromTimestamp(e.joinedAt.getTime())
  }
  let o = R.ZP.getOldestUnreadMessageId(r),
    a = R.ZP.lastMessageId(r),
    s = R.ZP.getMentionCount(r),
    c = s > 0 || i.isPrivate();
  if (null == a || U.default.compare(l, a) >= 0) return;
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
      let r = I.Z.getChannel(t);
      if (O.Z.isFavorite(t)) return 0;
      if (r.isPrivate()) return 1;
      if (R.ZP.getMentionCount(t) > 0) return R.ZP.getIsMentionLowImportance(t) ? 3 : 2;
      if (null != n) {
        let e = U.default.extractTimestamp(n);
        if (Date.now() - e > $) return 8;
        if (Date.now() - e > J) return 6
      }
      if (r.isThread()) {
        let e = (0, C.J)(r);
        return e === B.iN.ALL_MESSAGES ? 4 : e === B.iN.NO_MESSAGES ? 7 : 5
      } {
        let n = M.ZP.getChannelMessageNotifications(e, t),
          r = n === G.bL.NULL ? M.ZP.getMessageNotifications(e) : n;
        return r === G.bL.ALL_MESSAGES ? 4 : r === G.bL.NO_MESSAGES ? 7 : 5
      }
    }(n, r, a),
    order: 0
  };
  (0, b.aC)(i) && !w.Z.didAgree(i.guild_id) ? t.push(H(V({}, u), {
    type: "nsfw"
  })) : i.isForumLikeChannel() ? t.push(H(V({}, u), {
    type: "forum"
  })) : t.push(H(V({}, u), {
    type: "messages",
    messages: []
  }))
}
let J = 2 * Chunk70956.Z.Millis.DAY,
  $ = 10 * Chunk70956.Z.Millis.DAY;

function ee(e) {
  let [t, n] = l.useState(() => new Y(X(), e)), [r, i] = l.useState(false), o = l.useRef(Date.now()), [a, s] = l.useState(() => X());
  l.useEffect(() => {
    let e = e => s(e);
    return t.on("change", e), s(t.state), () => {
      t.off("change", e)
    }
  }, [t]), l.useEffect(() => {
    if (null == a || a.channels.length > 0 || r) return;
    let t = Date.now(),
      l = X();
    0 === l.channels.length || t - o.current < 10 * L.Z.Millis.SECOND ? i(true) : (o.current = Date.now(), n(new Y(l, e)))
  }, [a, r, e]);
  let c = l.useRef(t);
  return l.useLayoutEffect(() => {
    c.current = t
  }), l.useLayoutEffect(() => {
    null == a || a.channels, null == a || a.loadState, c.current.maybeLoadMore()
  }, [null == a ? true : a.channels, null == a ? true : a.loadState]), l.useEffect(() => (T.Z.addChangeListener(t.reloadMessages), () => T.Z.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), l.useEffect(() => (M.ZP.addChangeListener(t.handleUserGuildSettingsStoreChange), () => M.ZP.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), l.useEffect(() => (x.Z.addChangeListener(t.handleJoinedThreadsStoreChange), () => x.Z.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), l.useEffect(() => (j.Z.addChangeListener(t.handleActiveThreadsStoreChange), () => j.Z.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [a, t]
}