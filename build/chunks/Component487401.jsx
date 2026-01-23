/** Chunk was on 97492 **/
/** chunk id: 487401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => em,
  T: () => eg
}), require("./896048.js"), require("./321073.js"), require("./747238.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk837381 = require("./837381.jsx"),
  Chunk884362 = require("./884362.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk951001 = require("./951001.js"),
  Chunk166649 = require("./166649.js"),
  Chunk820284 = require("./820284.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk915089 = require("./915089.js"),
  Chunk616075 = require("./616075.js"),
  Chunk227004 = require("./227004.jsx"),
  Chunk781862 = require("./781862.jsx"),
  Chunk637248 = require("./637248.js"),
  Chunk395504 = require("./395504.js"),
  Chunk770904 = require("./770904.jsx"),
  Chunk357746 = require("./357746.jsx"),
  Chunk816288 = require("./816288.jsx"),
  Chunk455234 = require("./455234.js"),
  Chunk649247 = require("./649247.js"),
  Chunk482361 = require("./482361.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk72314 = require("./72314.js"),
  Chunk808728 = require("./808728.js"),
  Chunk967198 = require("./967198.js"),
  Chunk32603 = require("./32603.js"),
  Chunk960755 = require("./960755.js"),
  Chunk994020 = require("./994020.js"),
  Chunk633965 = require("./633965.js"),
  Chunk33324 = require("./33324.js"),
  Chunk823142 = require("./823142.jsx"),
  Chunk884452 = require("./884452.jsx"),
  Chunk137089 = require("./137089.jsx"),
  Chunk506792 = require("./506792.jsx"),
  Chunk724591 = require("./724591.jsx"),
  Chunk573956 = require("./573956.jsx"),
  Chunk141515 = require("./141515.jsx"),
  Chunk463938 = require("./463938.jsx"),
  Chunk779881 = require("./779881.jsx"),
  Chunk998986 = require("./998986.jsx"),
  Chunk732077 = require("./732077.jsx"),
  Chunk689025 = require("./689025.jsx"),
  Chunk698126 = require("./698126.jsx"),
  Chunk889806 = require("./889806.jsx"),
  Chunk923432 = require("./923432.jsx"),
  Chunk815213 = require("./815213.jsx"),
  Chunk530484 = require("./530484.jsx"),
  Chunk422361 = require("./422361.jsx"),
  Chunk281405 = require("./281405.js");
require("./83766.js");
var Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk495401 = require("./495401.js");

function ec(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ec(e, t, n[t])
    })
  }
  return e
}

function ed(e, t) {
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

function ep(e) {
  return d.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({
    density: e
  }) + 2 * d.LU0.space.SPACE_XXS.resolve({
    density: e
  }) + 2
}
class eh extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    this.setState({
      initialized: true
    }), (0, G.Ei)(this.getVisibleChannels)
  }
  componentWillUnmount() {
    this.updateChannelListScroll.cancel()
  }
  componentDidUpdate(e, t) {
    let {
      scrollToChannel: n,
      guildId: r,
      selectedChannelId: l
    } = this.props, {
      initialized: i
    } = this.state, {
      scrollTop: s
    } = w.A.getGuildDimensions(r);
    null != n ? (this.scrollToChannel(n), p.A.clearChannelListScrollTo(r)) : r !== e.guildId ? null != s && this.scrollTo(s) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && i && (null == s && null != l ? this.scrollToChannel(l, false, 8, this.handleListScroll) : this.scrollTo(null != s ? s : 0, this.handleListScroll)), this.testShouldSkipTutorial()
  }
  getSectionRowsFromChannel(e) {
    return this.props.guildChannels.getSectionRowsFromChannel(e)
  }
  scrollTo(e, t) {
    var n;
    null == (n = this._list) || n.scrollTo({
      to: e,
      animate: false,
      callback: t
    })
  }
  scrollToChannel(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 8,
      r = arguments.length > 3 ? arguments[3] : true,
      l = this._list,
      i = this.getSectionRowsFromChannel(e)[0];
    if (null != i && null != l)
      if (null != i.threadOffset) {
        let [e] = l.getScrollPosition(i.section, i.row), {
          density: s = "default"
        } = this.props, a = i.threadOffset * ep(s);
        l.scrollIntoViewRect({
          start: e + a,
          end: e + a + ep(s),
          padding: n,
          animate: t,
          callback: r
        })
      } else l.scrollToIndex({
        section: i.section,
        row: i.row,
        animate: t,
        padding: n,
        callback: r
      });
    else null == r || r()
  }
  isUnreadVisible() {
    let {
      guildChannels: e
    } = this.props, t = this._list;
    return null != t && t.getItems().some(n => {
      if ("row" !== n.type) returnfalse;
      let {
        section: r,
        row: l
      } = n;
      if (r < M.bK || e.isPlaceholderRow(r, l)) returnfalse;
      let i = e.getChannelFromSectionRow(r, l);
      if (null == i) returnfalse;
      let {
        channel: s,
        category: a
      } = i;
      return !!(0, T.ig)(s.record.type) && (!a.isCollapsed || !a.isMuted) && !s.isMuted && !!t.isItemVisible(r, l, true) && (0, S.Y)(s.record)
    })
  }
  renderTopUnread() {
    let {
      topMention: e,
      bottomUnread: t,
      bottomMention: n,
      isUnreadVisible: r
    } = this.state, {
      guildId: i,
      guildChannels: s,
      guildChannelsVersion: a
    } = this.props;
    return (0, l.jsx)("div", {
      className: eo.Eo,
      children: (0, l.jsx)(et.A, {
        ref: this.unreadTopRef,
        textUnread: ea.intl.string(ea.t.FCRiT3),
        textMention: ea.intl.string(ea.t["8zH0LJ"]),
        hide: null == e && (r || null != t || null != n),
        className: eo.Vq,
        barClassName: eo.bu,
        guildId: i,
        guildChannels: s,
        guildChannelsVersion: a,
        isVisible: this.isChannelVisible,
        onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
        onCalculate: this.handleUnreadCalculate
      })
    })
  }
  renderBottomUnread() {
    let {
      guildId: e,
      guildChannels: t,
      guildChannelsVersion: n
    } = this.props, {
      bottomMention: r,
      isUnreadVisible: i
    } = this.state;
    return (0, l.jsx)(et.A, {
      reverse: true,
      ref: this.unreadBottomRef,
      textUnread: ea.intl.string(ea.t.FCRiT3),
      textMention: ea.intl.string(ea.t["8zH0LJ"]),
      hide: null == r && i,
      className: eo.di,
      barClassName: eo.bu,
      guildId: e,
      guildChannels: t,
      guildChannelsVersion: n,
      isVisible: this.isChannelVisible,
      onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
      onCalculate: this.handleUnreadCalculate
    })
  }
  renderList() {
    let {
      guildChannels: e,
      guildBanner: t,
      selectedGuildId: n,
      density: r
    } = this.props, i = {};
    n === ei.YYv && (i["data-favorites"] = true);
    let s = this.context,
      {
        ref: a
      } = s,
      o = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
          return i
        }
        if (i = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              i = Object.getOwnPropertyNames(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l
          }(e, t), Object.getOwnPropertySymbols)
          for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
      }(s, ["ref"]),
      c = 0;
    null != t && (c = 84);
    let u = "compact" === r ? 8 : 12;
    return (0, l.jsx)(d.skg, {
      children: t => (0, l.jsx)(d.B8B, eu({
        ref: this.setListRef,
        className: eo.XG,
        fade: true,
        sectionHeight: this.getSectionHeight,
        footerHeight: this.getSectionFooterHeight,
        rowHeight: this.getRowHeight,
        paddingTop: c,
        paddingBottom: u,
        renderSection: this.renderSection,
        renderFooter: this.renderSectionFooter,
        renderRow: this.renderRow,
        onScroll: this.handleListScroll,
        onResize: this.handleResize,
        onContentResize: this.handleResize,
        sections: e.getSections(true),
        innerAriaLabel: ea.intl.string(ea.t.OGiMXJ),
        innerTag: "ul",
        getAnchorId: this.getAnchorId
      }, o, t, i), "guild-channels")
    })
  }
  render() {
    let {
      guildChannels: e,
      guildChannelsVersion: t,
      showNewUnreadsBar: n
    } = this.props;
    return (0, l.jsx)(A.V0, {
      children: r => (0, l.jsx)(d.Fmo, {
        component: (0, l.jsx)(d.AC4, {
          children: (0, l.jsx)(d.H, {
            id: r,
            children: ea.intl.string(ea.t.OGiMXJ)
          })
        }),
        children: n ? (0, l.jsxs)(i.Fragment, {
          children: [(0, l.jsx)("div", {
            className: eo.Eo,
            children: (0, l.jsx)(ee.A, {
              position: "top",
              guildChannels: e,
              guildChannelsVersion: t,
              jumpToVoiceChannels: this.jumpToVoiceChannels,
              jumpToChannel: this.jumpToChannel
            })
          }), this.renderList(), (0, l.jsx)(ee.A, {
            position: "bottom",
            guildChannels: e,
            guildChannelsVersion: t,
            jumpToVoiceChannels: this.jumpToVoiceChannels,
            jumpToChannel: this.jumpToChannel
          })]
        }) : (0, l.jsxs)(i.Fragment, {
          children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), ec(this, "_list", null), ec(this, "unreadTopRef", i.createRef()), ec(this, "unreadBottomRef", i.createRef()), ec(this, "state", {
      initialized: false,
      isUnreadVisible: true,
      topUnread: null,
      topMention: null,
      bottomUnread: null,
      bottomMention: null
    }), ec(this, "setListRef", e => {
      var t;
      let {
        ref: n
      } = this.context;
      n.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null, this._list = e
    }), ec(this, "jumpToVoiceChannels", () => {
      var e, t, n, r;
      let {
        guildChannels: l,
        voiceStates: i
      } = this.props, s = 0, a = null != (e = null == (t = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) ? true : t.getShownChannelIds()) ? e : [];
      for (let e = 0; e < a.length - 1; e++)
        if ((null != (r = i[a[e]]) ? r : []).length > 0) {
          s = e + 1;
          break
        } null == (n = this._list) || n.scrollToIndex({
        section: l.voiceChannelsSectionNumber,
        row: s,
        animate: true,
        padding: 8
      })
    }), ec(this, "jumpToChannel", e => this.scrollToChannel(e, true, 32)), ec(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
      let [n, r] = t;
      return this.scrollToChannel(e, true, null != n && null != r ? 32 : 8)
    }), ec(this, "isChannelVisible", (e, t) => {
      let n = this.getSectionRowsFromChannel(e),
        r = this._list;
      if (null == r) returnfalse;
      for (let {
          row: e,
          section: l
        }
        of n) {
        let [n, i] = r.getScrollPosition(l, e), s = r.getScrollerState();
        if (t && n + i < s.scrollTop + s.offsetHeight || !t && n > s.scrollTop) returntrue
      }
      returnfalse
    }), ec(this, "getVisibleChannels", () => {
      let e = this._list;
      if (null == e) return [];
      let t = e.getItems(),
        n = e.getScrollerState(),
        r = [];
      for (var l = 0; l < t.length; l++) {
        let i = t[l];
        if ((0, d.ogc)(i) && i.section >= this.props.guildChannels.favoritesSectionNumber) {
          let t = this.props.guildChannels.getChannelFromSectionRow(i.section, i.row),
            [l, s] = e.getScrollPosition(i.section, i.row);
          null != t && l + s < n.scrollTop + n.offsetHeight && l > n.scrollTop && r.push(t.channel.id)
        }
      }
      return r
    }), ec(this, "handleResize", () => {
      var e, t;
      let {
        showNewUnreadsBar: n
      } = this.props, r = null != (e = null == (t = this._list) ? true : t.getScrollerState()) ? e : null;
      if (this.setState({
          isUnreadVisible: this.isUnreadVisible()
        }), n && null != r) {
        let {
          scrollTop: e
        } = r;
        this.updateChannelListScroll(e)
      }
    }), ec(this, "handleListScroll", () => {
      var e, t;
      let {
        onScroll: n
      } = this.props, r = null != (e = null == (t = this._list) ? true : t.getScrollerState()) ? e : null;
      if (null != r) {
        let {
          scrollTop: e
        } = r;
        null != n && n(r), this.updateChannelListScroll(e)
      }
      null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState()
    }), ec(this, "handleUnreadCalculate", (e, t, n) => {
      let r = this.isUnreadVisible();
      n ? this.setState({
        isUnreadVisible: r,
        bottomUnread: t,
        bottomMention: e
      }) : this.setState({
        isUnreadVisible: r,
        topUnread: t,
        topMention: e
      })
    }), ec(this, "updateChannelListScroll", a().throttle(e => {
      p.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100)), ec(this, "getSectionHeight", e => {
      let {
        guild: t,
        guildChannels: n,
        density: r
      } = this.props;
      return (0, V.sc)(e, t, n, r)
    }), ec(this, "getSectionFooterHeight", e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: r,
        selectedChannelId: l,
        optInEnabled: i,
        guildChannelsVersion: s
      } = this.props;
      return (0, F.fz)({
        sectionIndex: e,
        guildChannels: t,
        guildChannelsVersion: s,
        voiceStates: n,
        selectedChannelId: l,
        selectedVoiceChannelId: r,
        optInEnabled: i,
        density: this.props.density
      })
    }), ec(this, "getRowHeight", (e, t) => {
      let {
        guildChannels: n,
        voiceStates: r,
        stageChannelSpeakerVoiceStates: l,
        selectedVoiceChannelId: i,
        selectedGuildId: s,
        density: a = "default"
      } = this.props, o = ep(a);
      if (e === M.PU) {
        let e = n.getGuildActionSection();
        return e.isEmpty() ? 0 : e.getRow(t) === el.n.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? 69 : 57 : o
      }
      if (n.isPlaceholderRow(e, t)) return 0;
      let c = n.getChannelFromSectionRow(e, t);
      if (null == c) return 0;
      let {
        channel: u,
        category: p
      } = c;
      if (u.record.type === ei.rbe.GUILD_CATEGORY) return 40;
      let {
        isFavoritesPerk: h
      } = y.A.getCurrentConfig({
        location: "channel_list"
      }, {
        autoTrackExposure: true
      });
      for (let e of (!h || s !== ei.YYv || u.record.isDM() || u.record.isGroupDM() || u.record.isGuildStageVoice() || (o = 46), u.threadIds)) {
        let {
          density: t = "default"
        } = this.props;
        o += ep(t);
        let n = r[u.id];
        null != n && n.length > 0 && (o += i === e ? 32 * n.length : 32)
      }
      if (u.record.isGuildVoice()) {
        let e = r[u.id];
        if (null != e && e.length > 0) {
          let t = 32 * e.length;
          (u.isCollapsed || p.isCollapsed) && (t = 32), o += t + d.LU0.space.SPACE_XS.resolve({
            density: a
          })
        }
        u.id === this.props.rtcConnectedChannelId && (o += 32 * this.props.rtcDesyncedVoiceStatesCount)
      }
      if ((null != u.subtitle || i === u.id) && (o += 16), u.record.isGuildStageVoice()) {
        var f, g;
        let e = null != (f = r[u.id]) ? f : [],
          t = null != (g = l[u.id]) ? g : [];
        if (null != e && e.length > 0) {
          let e = 32 * t.length;
          u.isCollapsed || p.isCollapsed ? e = Math.ceil(e / 5) : e += 32, o += e + 8
        }
      }
      return o
    }), ec(this, "dismissRecents", () => {
      let {
        guild: e,
        guildChannels: t,
        selectedChannelId: n
      } = this.props, r = t.getCategoryFromSection(t.recentsSectionNumber);
      if (null == r) return;
      let l = null,
        i = r.getShownChannelAndThreadIds();
      null != n && i.includes(n) && (l = (0, j.xb)(t)), (0, j.DD)(e.id, i, l)
    }), ec(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: r,
        guild: i,
        selectedChannelId: s,
        disableManageChannels: a
      } = this.props;
      return (0, l.jsx)(V.Ay, {
        sectionIndex: t,
        guild: i,
        guildChannels: n,
        guildChannelsVersion: r,
        selectedChannelId: s,
        disableManageChannels: a
      }, (0, V.is)(t, n))
    }), ec(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        guild: r,
        selectedChannel: s,
        selectedChannelId: a,
        selectedVoiceChannel: o,
        selectedVoiceChannelId: c,
        guildChannels: u,
        voiceStates: d,
        disableManageChannels: p,
        stageChannelSpeakerVoiceStates: h,
        optInEnabled: f,
        withGuildIcon: g
      } = this.props;
      if (t === M.PU) {
        let e = u.getGuildActionSection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case el.n.GUILD_HUB_HEADER_OPTIONS:
            return (0, l.jsx)(O.A, {
              guild: r,
              channel: R.Ay.getDefaultChannel(r.id)
            }, el.n.GUILD_HUB_HEADER_OPTIONS);
          case el.n.GUILD_PREMIUM_PROGRESS_BAR:
            let i = e.getRows();
            return (0, l.jsx)(C.A, {
              guild: r,
              withMargin: i.length > 1
            }, el.n.GUILD_PREMIUM_PROGRESS_BAR);
          case el.n.GUILD_HOME:
            return (0, l.jsx)(z.A, {
              guild: r,
              selected: a === es.VV.GUILD_HOME
            }, el.n.GUILD_HOME);
          case el.n.GUILD_SCHEDULED_EVENTS:
            return (0, l.jsx)(en.A, {
              guild: r,
              selected: a === el.n.GUILD_SCHEDULED_EVENTS
            }, el.n.GUILD_SCHEDULED_EVENTS);
          case el.n.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, l.jsx)(q.A, {
              guild: r,
              selected: a === es.VV.ROLE_SUBSCRIPTIONS
            }, el.n.GUILD_ROLE_SUBSCRIPTIONS);
          case el.n.GUILD_SHOP:
            return (0, l.jsx)(X.A, {
              guild: r,
              selected: a === es.VV.GUILD_SHOP
            }, el.n.GUILD_SHOP);
          case el.n.GUILD_GAME_SHOP:
            return (0, l.jsx)(K.A, {
              guild: r,
              selected: a === es.VV.GAME_SHOP
            }, el.n.GUILD_GAME_SHOP);
          case el.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, l.jsx)(Y.j, {
              guild: r
            });
          case el.n.CHANNELS_AND_ROLES:
            return (0, l.jsx)(W.G, {
              guild: r,
              selected: a === es.VV.CHANNEL_BROWSER || a === es.VV.CUSTOMIZE_COMMUNITY
            }, el.n.CHANNELS_AND_ROLES);
          case el.n.GUILD_DIRECTORY:
            return (0, l.jsx)(H.A, {
              guild: r,
              selectedChannelId: a,
              disableManageChannels: p
            }, el.n.GUILD_DIRECTORY);
          case el.n.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, l.jsx)(_.A, {
              guild: r,
              selected: a === es.VV.MEMBER_SAFETY
            }, el.n.GUILD_MOD_DASH_MEMBER_SAFETY);
          case el.n.GUILD_BOOSTS:
            return (0, l.jsx)(E.A, {
              guildId: r.id,
              selected: a === es.VV.GUILD_BOOSTS
            }, el.n.GUILD_BOOSTS);
          case el.n.GAME_SERVERS:
            return (0, l.jsx)(x.A, {
              guildId: r.id,
              selected: a === es.VV.GAME_SERVERS
            }, el.n.GAME_SERVERS);
          default:
            return null
        }
      }
      if (u.isPlaceholderRow(t, n)) return null;
      let m = u.getChannelFromSectionRow(t, n);
      if (null == m) return null;
      let {
        category: b,
        channel: A
      } = m, y = b instanceof M.xu, j = A.record, v = "".concat(t).concat(A.id);
      switch (j.type) {
        case ei.rbe.GUILD_ANNOUNCEMENT:
        case ei.rbe.GUILD_TEXT:
        case ei.rbe.GUILD_FORUM:
        case ei.rbe.GUILD_MEDIA:
        case ei.rbe.DM:
        case ei.rbe.GROUP_DM:
          return (0, l.jsxs)(i.Fragment, {
            children: [(0, l.jsx)($.A, {
              channel: j,
              guild: r,
              position: A.position,
              selected: a === A.id,
              muted: A.isMuted,
              subtitle: A.subtitle,
              disableManageChannels: p,
              canBeNewChannel: f && t === u.recentsSectionNumber,
              isFavoriteCategory: y,
              withGuildIcon: g
            }), A.threadCount > 0 ? (0, l.jsx)(J.A, {
              withGuildIcon: g,
              channel: j,
              sortedThreadIds: A.threadIds,
              selectedChannel: null != s && (s.id === A.id || s.parent_id === j.id) ? s : null,
              selectedVoiceChannelId: (null == o ? true : o.parent_id) === j.id ? c : null
            }) : null]
          }, v);
        case ei.rbe.GUILD_STAGE_VOICE:
          var S, I;
          return (0, l.jsx)(Q.A, {
            channel: j,
            guild: r,
            position: A.position,
            selected: a === A.id,
            connected: c === A.id,
            collapsed: A.isCollapsed || b.isCollapsed,
            voiceStates: null != (S = d[A.id]) ? S : [],
            speakerVoiceStates: null != (I = h[A.id]) ? I : [],
            disableManageChannels: p,
            isFavoriteCategory: y
          }, v);
        case ei.rbe.GUILD_VOICE:
          return (0, l.jsx)(er.A, {
            channel: j,
            guild: r,
            position: A.position,
            selected: a === A.id,
            connected: c === A.id,
            collapsed: A.isCollapsed || b.isCollapsed,
            voiceStates: d[A.id],
            subtitle: A.subtitle,
            disableManageChannels: p,
            showTutorial: A.isFirstVoiceChannel,
            isFavoriteCategory: y,
            withGuildIcon: g
          }, v);
        case ei.rbe.GUILD_STORE:
          return (0, l.jsx)(Z.A, {
            channel: j,
            guild: r,
            position: A.position,
            selected: a === A.id
          }, v);
        case ei.rbe.GUILD_CATEGORY:
          if (t !== u.voiceChannelsSectionNumber) return null;
          return (0, l.jsx)(B.sM, {
            channel: j
          }, "readonly-".concat(j.id));
        case ei.rbe.PUBLIC_THREAD:
        case ei.rbe.PRIVATE_THREAD:
        case ei.rbe.ANNOUNCEMENT_THREAD:
          return (0, l.jsx)($.A, {
            channel: j,
            guild: r,
            position: A.position,
            selected: a === A.id,
            muted: A.isMuted,
            subtitle: A.subtitle,
            disableManageChannels: p,
            canBeNewChannel: false,
            isFavoriteCategory: false,
            forceTopLevelThread: true
          }, v);
        default:
          return null
      }
    }), ec(this, "renderSectionFooter", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: r,
        voiceStates: i,
        selectedChannelId: s,
        selectedVoiceChannelId: a,
        optInEnabled: o,
        guildId: c
      } = this.props;
      return (0, l.jsx)(F.Ay, {
        guildId: c,
        guildChannels: n,
        guildChannelsVersion: r,
        sectionIndex: t,
        voiceStates: i,
        selectedChannelId: s,
        selectedVoiceChannelId: a,
        optInEnabled: o
      }, (0, F.tt)(t, n, o))
    }), ec(this, "getAnchorId", (e, t) => {
      var n, r, l;
      let {
        guildChannels: i
      } = this.props;
      if (e !== M.PU) {
        if (null == t) return e === M.HP ? "favorites-header" : e === i.recentsSectionNumber ? "recents-header" : e === i.voiceChannelsSectionNumber ? "voice-channels" : e === M.bK ? "uncategorized-header" : null == (l = i.getNamedCategoryFromSection(e)) ? true : l.id;
        if (!i.isPlaceholderRow(e, t)) return null == (r = i.getChannelFromSectionRow(e, t)) || null == (n = r.channel) ? true : n.id
      }
    }), ec(this, "testShouldSkipTutorial", () => {
      if (!N.A.shouldShow("voice-conversations")) return;
      let {
        guildChannels: e
      } = this.props, t = e.getFirstVoiceChannel();
      if (null == t) return void h.A.dismiss("voice-conversations");
      let n = this._list;
      if (null != n)
        for (let {
            section: e,
            row: r
          }
          of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || h.A.dismiss("voice-conversations")
    })
  }
}
ec(eh, "contextType", Chunk837381.nC), ec(eh, "defaultProps", {
  density: "default"
});
let ef = e => {
  let {
    guildId: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r
  } = e, s = (0, u.bG)([g.A], () => g.A.keyboardModeEnabled), {
    analyticsLocations: a
  } = (0, b.Ay)(m.A.GUILD_CHANNEL_LIST), d = (0, u.bG)([P.A], () => P.A.getChannel(n)), p = (0, u.bG)([P.A], () => P.A.getChannel(r)), h = (0, u.bG)([D.A], () => D.A.getGuildId()), A = (0, v.jN)(t), y = i.useRef(null), _ = i.useCallback((e, t) => {
    let n = y.current;
    if (null != n)
      if (ei.Ut1.test(t) || (0, es.jq)(t)) n.scrollToChannel(t, false, 16, () => {
        requestAnimationFrame(() => {
          var t;
          return null == (t = document.querySelector(e)) ? true : t.focus()
        })
      });
      else {
        var r;
        null == (r = document.querySelector(e)) || r.focus()
      }
  }, []), O = i.useCallback(() => new Promise(e => {
    let t = y.current;
    if (null == t) return e();
    t.scrollTo(0, () => requestAnimationFrame(() => e()))
  }), []), j = i.useCallback(() => new Promise(e => {
    let t = y.current;
    if (null == t) return e();
    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
  }), []), x = (0, c.Ay)({
    id: "channels",
    defaultFocused: null != n ? n : true,
    isEnabled: s,
    setFocus: _,
    scrollToStart: O,
    scrollToEnd: j
  }), E = x.setFocus;
  i.useEffect(() => {
    null != n && E(n)
  }, [n, E]);
  let C = (0, I.A)(t);
  return (0, l.jsx)(b.f5, {
    value: a,
    children: (0, l.jsx)(f.A, {
      section: ei.JJy.GUILD_CHANNEL_LIST,
      children: (0, l.jsx)(o.hD, {
        navigator: x,
        children: (0, l.jsx)(eh, ed(eu({}, e), {
          listNavigator: x,
          ref: y,
          selectedChannel: d,
          selectedVoiceChannel: p,
          stageChannelSpeakerVoiceStates: C,
          selectedGuildId: h,
          optInEnabled: A
        }))
      })
    })
  })
};

function eg(e) {
  let t = (0, k.x)(),
    {
      isFavoritesPerk: n
    } = (0, y.l)("favorites-channel-list"),
    {
      density: r
    } = (0, d.wRf)();
  return (0, l.jsx)(ef, ed(eu({}, e), {
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n,
    density: r
  }))
}

function em(e) {
  let t = (0, U.A)(e.guild),
    n = (0, u.cf)([L.A], () => L.A.getGuild(e.guildId, {
      guildActionRows: t
    })),
    {
      density: r
    } = (0, d.wRf)();
  return (0, l.jsx)(ef, ed(eu({}, e, n), {
    density: r
  }))
}