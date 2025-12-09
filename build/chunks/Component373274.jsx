/** Chunk was on 64271 **/
/** chunk id: 373274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => eb,
  j: () => em
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk925549 = require("./925549.js"),
  Chunk260300 = require("./260300.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk362658 = require("./362658.js"),
  Chunk915885 = require("./915885.jsx"),
  Chunk258871 = require("./258871.jsx"),
  Chunk216306 = require("./216306.js"),
  Chunk398758 = require("./398758.js"),
  Chunk737982 = require("./737982.jsx"),
  Chunk486311 = require("./486311.jsx"),
  Chunk620304 = require("./620304.jsx"),
  Chunk220444 = require("./220444.js"),
  Chunk31022 = require("./31022.js"),
  Chunk10401 = require("./10401.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk796974 = require("./796974.js"),
  Chunk984933 = require("./984933.js"),
  Chunk914010 = require("./914010.js"),
  Chunk540126 = require("./540126.js"),
  Chunk734307 = require("./734307.js"),
  Chunk854444 = require("./854444.js"),
  Chunk113544 = require("./113544.js"),
  Chunk761091 = require("./761091.js"),
  Chunk301342 = require("./301342.jsx"),
  Chunk906817 = require("./906817.jsx"),
  Chunk429122 = require("./429122.jsx"),
  Chunk285573 = require("./285573.jsx"),
  Chunk734579 = require("./734579.jsx"),
  Chunk995993 = require("./995993.jsx"),
  Chunk910595 = require("./910595.jsx"),
  Chunk120818 = require("./120818.jsx"),
  Chunk61642 = require("./61642.jsx"),
  Chunk848442 = require("./848442.jsx"),
  Chunk53425 = require("./53425.jsx"),
  Chunk424785 = require("./424785.jsx"),
  Chunk770202 = require("./770202.jsx"),
  Chunk437621 = require("./437621.jsx"),
  Chunk428127 = require("./428127.jsx"),
  Chunk950969 = require("./950969.jsx"),
  Chunk233657 = require("./233657.jsx"),
  Chunk831700 = require("./831700.jsx"),
  Chunk443063 = require("./443063.js"),
  Chunk327530 = require("./327530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk776677 = require("./776677.js");

function eu(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ed(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eu(e, t, n[t])
    })
  }
  return e
}

function ef(e, t) {
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

function eh(e) {
  return d.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({
    density: e
  }) + 2 * d.TVs.space.SPACE_XXS.resolve({
    density: e
  }) + 2
}
class ep extends(r = Chunk473749.PureComponent) {
  componentDidMount() {
    this.setState({
      initialized: true
    }), (0, Chunk113544.Q5)(this.getVisibleChannels)
  }
  componentWillUnmount() {
    this.updateChannelListScroll.cancel()
  }
  componentDidUpdate(e, t) {
    let {
      scrollToChannel: n,
      guildId: r,
      selectedChannelId: i
    } = this.props, {
      initialized: l
    } = this.state, {
      scrollTop: o
    } = T.Z.getGuildDimensions(r);
    null != n ? (this.scrollToChannel(n), f.Z.clearChannelListScrollTo(r)) : r !== e.guildId ? null != o && this.scrollTo(o) : i !== e.selectedChannelId ? this.scrollToChannel(i) : !t.initialized && l && (null == o && null != i ? this.scrollToChannel(i, false, el.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial()
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
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : el.yE,
      r = arguments.length > 3 ? arguments[3] : true,
      i = this._list,
      l = this.getSectionRowsFromChannel(e)[0];
    if (null != l && null != i)
      if (null != l.threadOffset) {
        let [e] = i.getScrollPosition(l.section, l.row), {
          density: o = "default"
        } = this.props, a = l.threadOffset * eh(o);
        i.scrollIntoViewRect({
          start: e + a,
          end: e + a + eh(o),
          padding: n,
          animate: t,
          callback: r
        })
      } else i.scrollToIndex({
        section: l.section,
        row: l.row,
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
    return null != exports && exports.getItems().some(n => {
      if ("row" !== n.type) returnfalse;
      let {
        section: r,
        row: i
      } = n;
      if (r < D.wd || e.isPlaceholderRow(r, i)) returnfalse;
      let l = e.getChannelFromSectionRow(r, i);
      if (null == l) returnfalse;
      let {
        channel: o,
        category: a
      } = l;
      return !!(0, Z.vc)(o.record.type) && (!a.isCollapsed || !a.isMuted) && !o.isMuted && !!t.isItemVisible(r, i, true) && (0, I.d)(o.record)
    })
  }
  renderTopUnread() {
    let {
      topMention: e,
      bottomUnread: t,
      bottomMention: n,
      isUnreadVisible: r
    } = this.state, {
      guildId: l,
      guildChannels: o,
      guildChannelsVersion: a
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk776677.positionedContainer,
      children: (0, Chunk54381.jsx)(Chunk950969.Z, {
        ref: this.unreadTopRef,
        textUnread: Chunk388032.intl.string(Chunk388032.t.FCRiT3),
        textMention: Chunk388032.intl.string(Chunk388032.t["8zH0LJ"]),
        hide: null == module && (r || null != exports || null != require),
        className: Chunk776677.unreadTop,
        barClassName: Chunk776677.unreadBar,
        guildId: Chunk473749,
        guildChannels: Chunk392711,
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
      isUnreadVisible: l
    } = this.state;
    return (0, Chunk54381.jsx)(Chunk950969.Z, {
      reverse: true,
      ref: this.unreadBottomRef,
      textUnread: Chunk388032.intl.string(Chunk388032.t.FCRiT3),
      textMention: Chunk388032.intl.string(Chunk388032.t["8zH0LJ"]),
      hide: null == r && Chunk473749,
      className: Chunk776677.unreadBottom,
      barClassName: Chunk776677.unreadBar,
      guildId: module,
      guildChannels: exports,
      guildChannelsVersion: require,
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
    } = this.props, l = {};
    require === Chunk981631.I_8 && (Chunk473749["data-favorites"] = true);
    let o = this.context,
      {
        ref: a
      } = Chunk392711,
      s = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(Chunk392711, ["ref"]),
      c = 0;
    null != exports && (c = Chunk327530.Q0);
    let u = "compact" === r ? 8 : Chunk327530.$k;
    return (0, Chunk54381.jsx)(Chunk481060.Wdt, {
      children: t => (0, i.jsx)(d.aVo, ed({
        ref: this.setListRef,
        className: ec.scroller,
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
        innerAriaLabel: es.intl.string(es.t.OGiMXJ),
        innerTag: "ul",
        getAnchorId: this.getAnchorId
      }, s, t, l), "guild-channels")
    })
  }
  render() {
    let {
      guildChannels: e,
      guildChannelsVersion: t,
      showNewUnreadsBar: n
    } = this.props;
    return (0, Chunk54381.jsx)(Chunk313201.FG, {
      children: r => (0, i.jsx)(d.y5t, {
        component: (0, i.jsx)(d.nn4, {
          children: (0, i.jsx)(d.H, {
            id: r,
            children: es.intl.string(es.t.OGiMXJ)
          })
        }),
        children: n ? (0, i.jsxs)(l.Fragment, {
          children: [(0, i.jsx)("div", {
            className: ec.positionedContainer,
            children: (0, i.jsx)(ee.Z, {
              position: "top",
              guildChannels: e,
              guildChannelsVersion: t,
              jumpToVoiceChannels: this.jumpToVoiceChannels,
              jumpToChannel: this.jumpToChannel
            })
          }), this.renderList(), (0, i.jsx)(ee.Z, {
            position: "bottom",
            guildChannels: e,
            guildChannelsVersion: t,
            jumpToVoiceChannels: this.jumpToVoiceChannels,
            jumpToChannel: this.jumpToChannel
          })]
        }) : (0, i.jsxs)(l.Fragment, {
          children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), eu(this, "_list", null), eu(this, "unreadTopRef", l.createRef()), eu(this, "unreadBottomRef", l.createRef()), eu(this, "state", {
      initialized: false,
      isUnreadVisible: true,
      topUnread: null,
      topMention: null,
      bottomUnread: null,
      bottomMention: null
    }), eu(this, "setListRef", e => {
      var t;
      let {
        ref: n
      } = this.context;
      n.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null, this._list = e
    }), eu(this, "jumpToVoiceChannels", () => {
      var e, t, n, r;
      let {
        guildChannels: i,
        voiceStates: l
      } = this.props, o = 0, a = null != (n = null == (e = i.getCategoryFromSection(i.voiceChannelsSectionNumber)) ? true : e.getShownChannelIds()) ? n : [];
      for (let e = 0; e < a.length - 1; e++)
        if ((null != (r = l[a[e]]) ? r : []).length > 0) {
          o = e + 1;
          break
        } null == (t = this._list) || t.scrollToIndex({
        section: i.voiceChannelsSectionNumber,
        row: o,
        animate: true,
        padding: el.yE
      })
    }), eu(this, "jumpToChannel", e => this.scrollToChannel(e, true, el.Q1)), eu(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
      let [n, r] = t;
      return this.scrollToChannel(e, true, null != n && null != r ? el.Q1 : el.yE)
    }), eu(this, "isChannelVisible", (e, t) => {
      let n = this.getSectionRowsFromChannel(e),
        r = this._list;
      if (null == r) returnfalse;
      for (let {
          row: e,
          section: i
        }
        of n) {
        let [n, l] = r.getScrollPosition(i, e), o = r.getScrollerState();
        if (t && n + l < o.scrollTop + o.offsetHeight || !t && n > o.scrollTop) returntrue
      }
      returnfalse
    }), eu(this, "getVisibleChannels", () => {
      let e = this._list;
      if (null == e) return [];
      let t = e.getItems(),
        n = e.getScrollerState(),
        r = [];
      for (var i = 0; i < t.length; i++) {
        let l = t[i];
        if ((0, d.oZU)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
          let t = this.props.guildChannels.getChannelFromSectionRow(l.section, l.row),
            [i, o] = e.getScrollPosition(l.section, l.row);
          null != t && i + o < n.scrollTop + n.offsetHeight && i > n.scrollTop && r.push(t.channel.id)
        }
      }
      return r
    }), eu(this, "handleResize", () => {
      var e, t;
      let {
        showNewUnreadsBar: n
      } = this.props, r = null != (t = null == (e = this._list) ? true : e.getScrollerState()) ? t : null;
      if (this.setState({
          isUnreadVisible: this.isUnreadVisible()
        }), n && null != r) {
        let {
          scrollTop: e
        } = r;
        this.updateChannelListScroll(e)
      }
    }), eu(this, "handleListScroll", () => {
      var e, t;
      let {
        onScroll: n
      } = this.props, r = null != (t = null == (e = this._list) ? true : e.getScrollerState()) ? t : null;
      if (null != r) {
        let {
          scrollTop: e
        } = r;
        null != n && n(r), this.updateChannelListScroll(e)
      }
      null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState()
    }), eu(this, "handleUnreadCalculate", (e, t, n) => {
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
    }), eu(this, "updateChannelListScroll", a().throttle(e => {
      f.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100)), eu(this, "getSectionHeight", e => {
      let {
        guild: t,
        guildChannels: n,
        density: r
      } = this.props;
      return (0, B.EM)(e, t, n, r)
    }), eu(this, "getSectionFooterHeight", e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: r,
        selectedChannelId: i,
        optInEnabled: l,
        guildChannelsVersion: o
      } = this.props;
      return (0, F.dt)({
        sectionIndex: e,
        guildChannels: t,
        guildChannelsVersion: o,
        voiceStates: n,
        selectedChannelId: i,
        selectedVoiceChannelId: r,
        optInEnabled: l,
        density: this.props.density
      })
    }), eu(this, "getRowHeight", (e, t) => {
      let {
        guildChannels: n,
        voiceStates: r,
        stageChannelSpeakerVoiceStates: i,
        selectedVoiceChannelId: l,
        selectedGuildId: o,
        density: a = "default"
      } = this.props, s = eh(a);
      if (e === D.wZ) {
        let e = n.getGuildActionSection();
        return e.isEmpty() ? 0 : e.getRow(t) === ei.z.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? 69 : 57 : s
      }
      if (n.isPlaceholderRow(e, t)) return 0;
      let c = n.getChannelFromSectionRow(e, t);
      if (null == c) return 0;
      let {
        channel: u,
        category: f
      } = c;
      if (u.record.type === eo.d4z.GUILD_CATEGORY) return 40;
      let {
        isFavoritesPerk: h
      } = y.Z.getCurrentConfig({
        location: "channel_list"
      }, {
        autoTrackExposure: true
      });
      for (let e of (!h || o !== eo.I_8 || u.record.isDM() || u.record.isGroupDM() || u.record.isGuildStageVoice() || (s = 46), u.threadIds)) {
        let {
          density: t = "default"
        } = this.props;
        s += eh(t);
        let n = r[u.id];
        null != n && n.length > 0 && (s += l === e ? 32 * n.length : 32)
      }
      if (u.record.isGuildVoice()) {
        let e = r[u.id];
        if (null != e && e.length > 0) {
          let t = 32 * e.length;
          (u.isCollapsed || f.isCollapsed) && (t = 32), s += t + d.TVs.space.SPACE_XS.resolve({
            density: a
          })
        }
        u.id === this.props.rtcConnectedChannelId && (s += 32 * this.props.rtcDesyncedVoiceStatesCount)
      }
      if ((null != u.subtitle || l === u.id) && (s += el.NY), u.record.isGuildStageVoice()) {
        var p, g;
        let e = null != (p = r[u.id]) ? p : [],
          t = null != (g = i[u.id]) ? g : [];
        if (null != e && e.length > 0) {
          let e = 32 * t.length;
          u.isCollapsed || f.isCollapsed ? e = Math.ceil(e / el.VE) : e += 32, s += e + el.cx
        }
      }
      return s
    }), eu(this, "dismissRecents", () => {
      let {
        guild: e,
        guildChannels: t,
        selectedChannelId: n
      } = this.props, r = t.getCategoryFromSection(t.recentsSectionNumber);
      if (null == r) return;
      let i = null,
        l = r.getShownChannelAndThreadIds();
      null != n && l.includes(n) && (i = (0, j.KY)(t)), (0, j.Uo)(e.id, l, i)
    }), eu(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: r,
        guild: l,
        selectedChannelId: o,
        disableManageChannels: a
      } = this.props;
      return (0, i.jsx)(B.ZP, {
        sectionIndex: t,
        guild: l,
        guildChannels: n,
        guildChannelsVersion: r,
        selectedChannelId: o,
        disableManageChannels: a
      }, (0, B.WW)(t, n))
    }), eu(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        guild: r,
        selectedChannel: o,
        selectedChannelId: a,
        selectedVoiceChannel: s,
        selectedVoiceChannelId: c,
        guildChannels: u,
        voiceStates: d,
        disableManageChannels: f,
        stageChannelSpeakerVoiceStates: h,
        optInEnabled: p,
        withGuildIcon: g
      } = this.props;
      if (t === D.wZ) {
        let e = u.getGuildActionSection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case ei.z.GUILD_HUB_HEADER_OPTIONS:
            return (0, i.jsx)(v.Z, {
              guild: r,
              channel: A.ZP.getDefaultChannel(r.id)
            }, ei.z.GUILD_HUB_HEADER_OPTIONS);
          case ei.z.GUILD_PREMIUM_PROGRESS_BAR:
            let l = e.getRows();
            return (0, i.jsx)(S.Z, {
              guild: r,
              withMargin: l.length > 1
            }, ei.z.GUILD_PREMIUM_PROGRESS_BAR);
          case ei.z.GUILD_HOME:
            return (0, i.jsx)(z.Z, {
              guild: r,
              selected: a === ea.oC.GUILD_HOME
            }, ei.z.GUILD_HOME);
          case ei.z.GUILD_SCHEDULED_EVENTS:
            return (0, i.jsx)(en.Z, {
              guild: r,
              selected: a === ei.z.GUILD_SCHEDULED_EVENTS
            }, ei.z.GUILD_SCHEDULED_EVENTS);
          case ei.z.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, i.jsx)(Y.Z, {
              guild: r,
              selected: a === ea.oC.ROLE_SUBSCRIPTIONS
            }, ei.z.GUILD_ROLE_SUBSCRIPTIONS);
          case ei.z.GUILD_SHOP:
            return (0, i.jsx)(q.Z, {
              guild: r,
              selected: a === ea.oC.GUILD_SHOP
            }, ei.z.GUILD_SHOP);
          case ei.z.GUILD_GAME_SHOP:
            return (0, i.jsx)(H.Z, {
              guild: r,
              selected: a === ea.oC.GAME_SHOP
            }, ei.z.GUILD_GAME_SHOP);
          case ei.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, i.jsx)(K.T, {
              guild: r
            });
          case ei.z.CHANNELS_AND_ROLES:
            return (0, i.jsx)(W.m, {
              guild: r,
              selected: a === ea.oC.CHANNEL_BROWSER || a === ea.oC.CUSTOMIZE_COMMUNITY
            }, ei.z.CHANNELS_AND_ROLES);
          case ei.z.GUILD_DIRECTORY:
            return (0, i.jsx)(V.Z, {
              guild: r,
              selectedChannelId: a,
              disableManageChannels: f
            }, ei.z.GUILD_DIRECTORY);
          case ei.z.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, i.jsx)(O.Z, {
              guild: r,
              selected: a === ea.oC.MEMBER_SAFETY
            }, ei.z.GUILD_MOD_DASH_MEMBER_SAFETY);
          case ei.z.GUILD_BOOSTS:
            return (0, i.jsx)(E.Z, {
              guildId: r.id,
              selected: a === ea.oC.GUILD_BOOSTS
            }, ei.z.GUILD_BOOSTS);
          case ei.z.GAME_SERVERS:
            return (0, i.jsx)(C.Z, {
              guildId: r.id,
              selected: a === ea.oC.GAME_SERVERS
            }, ei.z.GAME_SERVERS);
          default:
            return null
        }
      }
      if (u.isPlaceholderRow(t, n)) return null;
      let m = u.getChannelFromSectionRow(t, n);
      if (null == m) return null;
      let {
        category: b,
        channel: _
      } = m, y = b instanceof D.VR, j = _.record, x = "".concat(t).concat(_.id);
      switch (j.type) {
        case eo.d4z.GUILD_ANNOUNCEMENT:
        case eo.d4z.GUILD_TEXT:
        case eo.d4z.GUILD_FORUM:
        case eo.d4z.GUILD_MEDIA:
        case eo.d4z.DM:
        case eo.d4z.GROUP_DM:
          return (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)($.Z, {
              channel: j,
              guild: r,
              position: _.position,
              selected: a === _.id,
              muted: _.isMuted,
              subtitle: _.subtitle,
              disableManageChannels: f,
              canBeNewChannel: p && t === u.recentsSectionNumber,
              isFavoriteCategory: y,
              withGuildIcon: g
            }), _.threadCount > 0 ? (0, i.jsx)(Q.Z, {
              withGuildIcon: g,
              channel: j,
              sortedThreadIds: _.threadIds,
              selectedChannel: null != o && (o.id === _.id || o.parent_id === j.id) ? o : null,
              selectedVoiceChannelId: (null == s ? true : s.parent_id) === j.id ? c : null
            }) : null]
          }, x);
        case eo.d4z.GUILD_STAGE_VOICE:
          var I, P;
          return (0, i.jsx)(X.Z, {
            channel: j,
            guild: r,
            position: _.position,
            selected: a === _.id,
            connected: c === _.id,
            collapsed: _.isCollapsed || b.isCollapsed,
            voiceStates: null != (I = d[_.id]) ? I : [],
            speakerVoiceStates: null != (P = h[_.id]) ? P : [],
            disableManageChannels: f,
            isFavoriteCategory: y
          }, x);
        case eo.d4z.GUILD_VOICE:
          return (0, i.jsx)(er.Z, {
            channel: j,
            guild: r,
            position: _.position,
            selected: a === _.id,
            connected: c === _.id,
            collapsed: _.isCollapsed || b.isCollapsed,
            voiceStates: d[_.id],
            subtitle: _.subtitle,
            disableManageChannels: f,
            showTutorial: _.isFirstVoiceChannel,
            isFavoriteCategory: y,
            withGuildIcon: g
          }, x);
        case eo.d4z.GUILD_STORE:
          return (0, i.jsx)(J.Z, {
            channel: j,
            guild: r,
            position: _.position,
            selected: a === _.id
          }, x);
        case eo.d4z.GUILD_CATEGORY:
          if (t !== u.voiceChannelsSectionNumber) return null;
          return (0, i.jsx)(U.kw, {
            channel: j
          }, "readonly-".concat(j.id));
        case eo.d4z.PUBLIC_THREAD:
        case eo.d4z.PRIVATE_THREAD:
        case eo.d4z.ANNOUNCEMENT_THREAD:
          return (0, i.jsx)($.Z, {
            channel: j,
            guild: r,
            position: _.position,
            selected: a === _.id,
            muted: _.isMuted,
            subtitle: _.subtitle,
            disableManageChannels: f,
            canBeNewChannel: false,
            isFavoriteCategory: false,
            forceTopLevelThread: true
          }, x);
        default:
          return null
      }
    }), eu(this, "renderSectionFooter", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: r,
        voiceStates: l,
        selectedChannelId: o,
        selectedVoiceChannelId: a,
        optInEnabled: s,
        guildId: c
      } = this.props;
      return (0, i.jsx)(F.ZP, {
        guildId: c,
        guildChannels: n,
        guildChannelsVersion: r,
        sectionIndex: t,
        voiceStates: l,
        selectedChannelId: o,
        selectedVoiceChannelId: a,
        optInEnabled: s
      }, (0, F.eo)(t, n, s))
    }), eu(this, "getAnchorId", (e, t) => {
      var n, r, i;
      let {
        guildChannels: l
      } = this.props;
      if (e !== D.wZ) {
        if (null == t) return e === D.p2 ? "favorites-header" : e === l.recentsSectionNumber ? "recents-header" : e === l.voiceChannelsSectionNumber ? "voice-channels" : e === D.wd ? "uncategorized-header" : null == (i = l.getNamedCategoryFromSection(e)) ? true : i.id;
        if (!l.isPlaceholderRow(e, t)) return null == (r = l.getChannelFromSectionRow(e, t)) || null == (n = r.channel) ? true : n.id
      }
    }), eu(this, "testShouldSkipTutorial", () => {
      if (!N.Z.shouldShow("voice-conversations")) return;
      let {
        guildChannels: e
      } = this.props, t = e.getFirstVoiceChannel();
      if (null == t) return void h.Z.dismiss("voice-conversations");
      let n = this._list;
      if (null != n)
        for (let {
            section: e,
            row: r
          }
          of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || h.Z.dismiss("voice-conversations")
    })
  }
}
eu(ep, "contextType", Chunk91192.qB), eu(ep, "defaultProps", {
  density: "default"
});
let eg = e => {
  let {
    guildId: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r
  } = e, o = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled), {
    analyticsLocations: a
  } = (0, b.ZP)(m.Z.GUILD_CHANNEL_LIST), d = (0, u.e7)([w.Z], () => w.Z.getChannel(n)), f = (0, u.e7)([w.Z], () => w.Z.getChannel(r)), h = (0, u.e7)([R.Z], () => R.Z.getGuildId()), _ = (0, x.DM)(t), y = l.useRef(null), O = l.useCallback((e, t) => {
    let n = y.current;
    if (null != n)
      if (eo.Xyh.test(t) || (0, ea.AB)(t)) n.scrollToChannel(t, false, 2 * el.yE, () => {
        requestAnimationFrame(() => {
          var t;
          return null == (t = document.querySelector(e)) ? true : t.focus()
        })
      });
      else {
        var r;
        null == (r = document.querySelector(e)) || r.focus()
      }
  }, []), v = l.useCallback(() => new Promise(e => {
    let t = y.current;
    if (null == t) return e();
    t.scrollTo(0, () => requestAnimationFrame(() => e()))
  }), []), j = l.useCallback(() => new Promise(e => {
    let t = y.current;
    if (null == t) return e();
    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
  }), []), C = (0, c.ZP)({
    id: "channels",
    defaultFocused: null != n ? n : true,
    isEnabled: o,
    setFocus: O,
    scrollToStart: v,
    scrollToEnd: j
  }), E = C.setFocus;
  l.useEffect(() => {
    null != n && E(n)
  }, [n, E]);
  let S = (0, P.Z)(t);
  return (0, i.jsx)(b.Gt, {
    value: a,
    children: (0, i.jsx)(p.Z, {
      section: eo.jXE.GUILD_CHANNEL_LIST,
      children: (0, i.jsx)(s.bG, {
        navigator: C,
        children: (0, i.jsx)(ep, ef(ed({}, e), {
          listNavigator: C,
          ref: y,
          selectedChannel: d,
          selectedVoiceChannel: f,
          stageChannelSpeakerVoiceStates: S,
          selectedGuildId: h,
          optInEnabled: _
        }))
      })
    })
  })
};

function em(e) {
  let t = (0, L.o)(),
    {
      isFavoritesPerk: n
    } = (0, y.z)("favorites-channel-list"),
    {
      density: r
    } = (0, d.TCT)();
  return (0, i.jsx)(eg, ef(ed({}, e), {
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n,
    density: r
  }))
}

function eb(e) {
  let t = (0, G.Z)(e.guild),
    n = (0, u.cj)([M.Z], () => M.Z.getGuild(e.guildId, {
      guildActionRows: t
    })),
    {
      density: r
    } = (0, d.TCT)();
  return (0, i.jsx)(eg, ef(ed({}, e, n), {
    density: r
  }))
}