/** Chunk was on 41753 **/
/** chunk id: 373274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => eC,
  j: () => ey
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk91192 = require("./91192.jsx"),
  Chunk924826 = require("./924826.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk925549 = require("./925549.js"),
  Chunk260300 = require("./260300.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk362658 = require("./362658.js"),
  Chunk583962 = require("./583962.jsx"),
  Chunk915885 = require("./915885.jsx"),
  Chunk258871 = require("./258871.jsx"),
  Chunk216306 = require("./216306.js"),
  Chunk398758 = require("./398758.js"),
  Chunk742139 = require("./742139.js"),
  Chunk761700 = require("./761700.js"),
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
  Chunk594174 = require("./594174.js"),
  Chunk540126 = require("./540126.js"),
  Chunk734307 = require("./734307.js"),
  Chunk854444 = require("./854444.js"),
  Chunk113544 = require("./113544.js"),
  Chunk598056 = require("./598056.js"),
  Chunk761091 = require("./761091.js"),
  Chunk301342 = require("./301342.jsx"),
  Chunk906817 = require("./906817.jsx"),
  Chunk429122 = require("./429122.jsx"),
  Chunk285573 = require("./285573.jsx"),
  Chunk995993 = require("./995993.jsx"),
  Chunk910595 = require("./910595.jsx"),
  Chunk120818 = require("./120818.jsx"),
  Chunk61642 = require("./61642.jsx"),
  Chunk848442 = require("./848442.jsx"),
  Chunk53425 = require("./53425.jsx"),
  Chunk424785 = require("./424785.jsx"),
  Chunk770202 = require("./770202.jsx"),
  Chunk79556 = require("./79556.jsx"),
  Chunk428127 = require("./428127.jsx"),
  Chunk950969 = require("./950969.jsx"),
  Chunk233657 = require("./233657.jsx"),
  Chunk831700 = require("./831700.jsx"),
  Chunk443063 = require("./443063.js"),
  Chunk327530 = require("./327530.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk432178 = require("./432178.js");

function ef(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ef(e, t, n[t])
    })
  }
  return e
}

function em(e, t) {
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

function eb(e) {
  return h.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({
    density: e
  }) + 2 * h.TVs.space.SPACE_XXS.resolve({
    density: e
  }) + 2
}
class eO extends(r = Chunk73800.PureComponent) {
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
    } = D.Z.getGuildDimensions(r);
    null != n ? (this.scrollToChannel(n), p.Z.clearChannelListScrollTo(r)) : r !== e.guildId ? null != o && this.scrollTo(o) : i !== e.selectedChannelId ? this.scrollToChannel(i) : !t.initialized && l && (null == o && null != i ? this.scrollToChannel(i, false, ec.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial()
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
      n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : ec.yE,
      r = arguments.length > 3 ? arguments[3] : true,
      i = this._list,
      l = this.getSectionRowsFromChannel(e)[0];
    if (null != l && null != i)
      if (null != l.threadOffset) {
        let [e] = i.getScrollPosition(l.section, l.row), {
          density: o = "default"
        } = this.props, s = l.threadOffset * eb(o);
        i.scrollIntoViewRect({
          start: e + s,
          end: e + s + eb(o),
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
      if (r < U.wd || e.isPlaceholderRow(r, i)) returnfalse;
      let l = e.getChannelFromSectionRow(r, i);
      if (null == l) returnfalse;
      let {
        channel: o,
        category: s
      } = l;
      return !!(0, A.vc)(o.record.type) && (!s.isCollapsed || !s.isMuted) && !o.isMuted && !!t.isItemVisible(r, i, true) && (0, w.d)(o.record)
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
      guildChannelsVersion: s
    } = this.props;
    return (0, Chunk255367.jsx)("div", {
      className: Chunk432178.positionedContainer,
      children: (0, Chunk255367.jsx)(Chunk950969.Z, {
        ref: this.unreadTopRef,
        textUnread: Chunk388032.intl.string(Chunk388032.t.FCRiT0),
        textMention: Chunk388032.intl.string(Chunk388032.t["8zH0LC"]),
        hide: null == module && (r || null != exports || null != require),
        className: Chunk432178.unreadTop,
        barClassName: Chunk432178.unreadBar,
        guildId: Chunk73800,
        guildChannels: Chunk392711,
        guildChannelsVersion: s,
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
    return (0, Chunk255367.jsx)(Chunk950969.Z, {
      reverse: true,
      ref: this.unreadBottomRef,
      textUnread: Chunk388032.intl.string(Chunk388032.t.FCRiT0),
      textMention: Chunk388032.intl.string(Chunk388032.t["8zH0LC"]),
      hide: null == r && Chunk73800,
      className: Chunk432178.unreadBottom,
      barClassName: Chunk432178.unreadBar,
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
      guild: t,
      guildBanner: n,
      hasGuildSubheader: r,
      selectedGuildId: l,
      density: o
    } = this.props, s = {};
    Chunk73800 === Chunk981631.I_8 && (s["data-favorites"] = true);
    let a = this.context,
      {
        ref: c
      } = Chunk91192,
      u = function(e, t) {
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
      }(Chunk91192, ["ref"]),
      d = 0;
    null != require ? d = Chunk327530.Q0 : (0, Chunk598056.Z)(exports) && !r && (d = Chunk327530.JD);
    let p = "compact" === Chunk392711 ? 8 : Chunk327530.$k;
    return (0, Chunk255367.jsx)(Chunk481060.Wdt, {
      children: t => (0, i.jsx)(h.aVo, eg({
        ref: this.setListRef,
        className: ep.scroller,
        fade: true,
        sectionHeight: this.getSectionHeight,
        footerHeight: this.getSectionFooterHeight,
        rowHeight: this.getRowHeight,
        paddingTop: d,
        paddingBottom: p,
        renderSection: this.renderSection,
        renderFooter: this.renderSectionFooter,
        renderRow: this.renderRow,
        onScroll: this.handleListScroll,
        onResize: this.handleResize,
        onContentResize: this.handleResize,
        sections: e.getSections(true),
        innerAriaLabel: eh.intl.string(eh.t.OGiMXF),
        innerTag: "ul",
        getAnchorId: this.getAnchorId
      }, u, t, s), "guild-channels")
    })
  }
  render() {
    let {
      guildChannels: e,
      guildChannelsVersion: t,
      showNewUnreadsBar: n
    } = this.props;
    return (0, Chunk255367.jsx)(Chunk313201.FG, {
      children: r => (0, i.jsx)(h.y5t, {
        component: (0, i.jsx)(h.nn4, {
          children: (0, i.jsx)(h.H, {
            id: r,
            children: eh.intl.string(eh.t.OGiMXF)
          })
        }),
        children: n ? (0, i.jsxs)(l.Fragment, {
          children: [(0, i.jsx)("div", {
            className: ep.positionedContainer,
            children: (0, i.jsx)(ei.Z, {
              position: "top",
              guildChannels: e,
              guildChannelsVersion: t,
              jumpToVoiceChannels: this.jumpToVoiceChannels,
              jumpToChannel: this.jumpToChannel
            })
          }), this.renderList(), (0, i.jsx)(ei.Z, {
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
    super(...e), ef(this, "_list", null), ef(this, "unreadTopRef", l.createRef()), ef(this, "unreadBottomRef", l.createRef()), ef(this, "state", {
      initialized: false,
      isUnreadVisible: true,
      topUnread: null,
      topMention: null,
      bottomUnread: null,
      bottomMention: null
    }), ef(this, "setListRef", e => {
      var t;
      let {
        ref: n
      } = this.context;
      n.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null, this._list = e
    }), ef(this, "jumpToVoiceChannels", () => {
      var e, t, n, r;
      let {
        guildChannels: i,
        voiceStates: l
      } = this.props, o = 0, s = null != (n = null == (e = i.getCategoryFromSection(i.voiceChannelsSectionNumber)) ? true : e.getShownChannelIds()) ? n : [];
      for (let e = 0; e < s.length - 1; e++)
        if ((null != (r = l[s[e]]) ? r : []).length > 0) {
          o = e + 1;
          break
        } null == (t = this._list) || t.scrollToIndex({
        section: i.voiceChannelsSectionNumber,
        row: o,
        animate: true,
        padding: ec.yE
      })
    }), ef(this, "jumpToChannel", e => this.scrollToChannel(e, true, ec.Q1)), ef(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
      let [n, r] = t;
      return this.scrollToChannel(e, true, null != n && null != r ? ec.Q1 : ec.yE)
    }), ef(this, "isChannelVisible", (e, t) => {
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
    }), ef(this, "getVisibleChannels", () => {
      let e = this._list;
      if (null == e) return [];
      let t = e.getItems(),
        n = e.getScrollerState(),
        r = [];
      for (var i = 0; i < t.length; i++) {
        let l = t[i];
        if ((0, h.oZU)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
          let t = this.props.guildChannels.getChannelFromSectionRow(l.section, l.row),
            [i, o] = e.getScrollPosition(l.section, l.row);
          null != t && i + o < n.scrollTop + n.offsetHeight && i > n.scrollTop && r.push(t.channel.id)
        }
      }
      return r
    }), ef(this, "handleResize", () => {
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
    }), ef(this, "handleListScroll", () => {
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
    }), ef(this, "handleUnreadCalculate", (e, t, n) => {
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
    }), ef(this, "updateChannelListScroll", s().throttle(e => {
      p.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100)), ef(this, "getSectionHeight", e => {
      let {
        guild: t,
        guildChannels: n,
        density: r
      } = this.props;
      return (0, W.EM)(e, t, n, r)
    }), ef(this, "getSectionFooterHeight", e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: r,
        selectedChannelId: i,
        optInEnabled: l,
        guildChannelsVersion: o
      } = this.props;
      return (0, K.dt)({
        sectionIndex: e,
        guildChannels: t,
        guildChannelsVersion: o,
        voiceStates: n,
        selectedChannelId: i,
        selectedVoiceChannelId: r,
        optInEnabled: l,
        density: this.props.density
      })
    }), ef(this, "getRowHeight", (e, t) => {
      let {
        guildChannels: n,
        voiceStates: r,
        stageChannelSpeakerVoiceStates: i,
        selectedVoiceChannelId: l,
        selectedGuildId: o,
        density: s = "default"
      } = this.props, a = eb(s);
      if (e === U.wZ) {
        let e = n.getGuildActionSection();
        return e.isEmpty() ? 0 : e.getRow(t) === ea.z.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? C.aR : C.PD : a
      }
      if (n.isPlaceholderRow(e, t)) return 0;
      let c = n.getChannelFromSectionRow(e, t);
      if (null == c) return 0;
      let {
        channel: u,
        category: d
      } = c;
      if (u.record.type === eu.d4z.GUILD_CATEGORY) return 40;
      let {
        isFavoritesPerk: p
      } = y.Z.getCurrentConfig({
        location: "channel_list"
      }, {
        autoTrackExposure: true
      });
      for (let e of (!p || o !== eu.I_8 || u.record.isDM() || u.record.isGroupDM() || u.record.isGuildStageVoice() || (a = 46), u.threadIds)) {
        let {
          density: t = "default"
        } = this.props;
        a += eb(t);
        let n = r[u.id];
        null != n && n.length > 0 && (a += l === e ? 32 * n.length : 32, a += ec.cx)
      }
      if (u.record.isGuildVoice()) {
        let e = r[u.id];
        if (null != e && e.length > 0) {
          let t = 32 * e.length;
          (u.isCollapsed || d.isCollapsed) && (t = 32), a += t + h.TVs.space.SPACE_XS.resolve({
            density: s
          })
        }
        u.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount)
      }
      if (null != u.subtitle && (a += ec.NY), u.record.isGuildStageVoice()) {
        var f, g;
        let e = null != (f = r[u.id]) ? f : [],
          t = null != (g = i[u.id]) ? g : [];
        if (null != e && e.length > 0) {
          let e = 32 * t.length;
          u.isCollapsed || d.isCollapsed ? e = Math.ceil(e / ec.VE) : e += 32, a += e + ec.cx
        }
      }
      return a
    }), ef(this, "dismissRecents", () => {
      let {
        guild: e,
        guildChannels: t,
        selectedChannelId: n
      } = this.props, r = t.getCategoryFromSection(t.recentsSectionNumber);
      if (null == r) return;
      let i = null,
        l = r.getShownChannelAndThreadIds();
      null != n && l.includes(n) && (i = (0, E.KY)(t)), (0, E.Uo)(e.id, l, i)
    }), ef(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: r,
        guild: l,
        selectedChannelId: o,
        disableManageChannels: s
      } = this.props;
      return (0, i.jsx)(W.ZP, {
        sectionIndex: t,
        guild: l,
        guildChannels: n,
        guildChannelsVersion: r,
        selectedChannelId: o,
        disableManageChannels: s
      }, (0, W.WW)(t, n))
    }), ef(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        guild: r,
        selectedChannel: o,
        selectedChannelId: s,
        selectedVoiceChannel: a,
        selectedVoiceChannelId: c,
        guildChannels: u,
        voiceStates: h,
        disableManageChannels: p,
        stageChannelSpeakerVoiceStates: f,
        optInEnabled: g,
        withGuildIcon: m,
        isNewGuildPowerupsProgressBarEnabled: b,
        shouldRenderBoosterEnhancedRoleColorsCoachmark: O
      } = this.props;
      if (t === U.wZ) {
        let e = u.getGuildActionSection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case ea.z.GUILD_HUB_HEADER_OPTIONS:
            return (0, i.jsx)(j.Z, {
              guild: r,
              channel: L.ZP.getDefaultChannel(r.id)
            }, ea.z.GUILD_HUB_HEADER_OPTIONS);
          case ea.z.GUILD_PREMIUM_PROGRESS_BAR:
            let l = e.getRows(),
              o = [];
            return O && o.push(d.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK), b ? (0, i.jsx)(N.Z, {
              guild: r,
              tooltipTypes: o,
              withMargin: l.length > 1
            }, ea.z.GUILD_PREMIUM_PROGRESS_BAR) : (0, i.jsx)(C.ZP, {
              guild: r,
              tooltipTypes: o,
              withMargin: l.length > 1
            }, ea.z.GUILD_PREMIUM_PROGRESS_BAR);
          case ea.z.GUILD_HOME:
            return (0, i.jsx)(X.Z, {
              guild: r,
              selected: s === ed.oC.GUILD_HOME
            }, ea.z.GUILD_HOME);
          case ea.z.GUILD_SCHEDULED_EVENTS:
            return (0, i.jsx)(eo.Z, {
              guild: r,
              selected: s === ea.z.GUILD_SCHEDULED_EVENTS
            }, ea.z.GUILD_SCHEDULED_EVENTS);
          case ea.z.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, i.jsx)(J.Z, {
              guild: r,
              selected: s === ed.oC.ROLE_SUBSCRIPTIONS
            }, ea.z.GUILD_ROLE_SUBSCRIPTIONS);
          case ea.z.GUILD_SHOP:
            return (0, i.jsx)($.Z, {
              guild: r,
              selected: s === ed.oC.GUILD_SHOP
            }, ea.z.GUILD_SHOP);
          case ea.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, i.jsx)(Q.T, {
              guild: r
            });
          case ea.z.CHANNELS_AND_ROLES:
            return (0, i.jsx)(q.m, {
              guild: r,
              selected: s === ed.oC.CHANNEL_BROWSER || s === ed.oC.CUSTOMIZE_COMMUNITY
            }, ea.z.CHANNELS_AND_ROLES);
          case ea.z.GUILD_DIRECTORY:
            return (0, i.jsx)(Y.Z, {
              guild: r,
              selectedChannelId: s,
              disableManageChannels: p
            }, ea.z.GUILD_DIRECTORY);
          case ea.z.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, i.jsx)(v.Z, {
              guild: r,
              selected: s === ed.oC.MEMBER_SAFETY
            }, ea.z.GUILD_MOD_DASH_MEMBER_SAFETY);
          case ea.z.GUILD_BOOSTS:
            return (0, i.jsx)(P.Z, {
              guildId: r.id,
              selected: s === ed.oC.GUILD_BOOSTS
            }, ea.z.GUILD_BOOSTS);
          default:
            return null
        }
      }
      if (u.isPlaceholderRow(t, n)) return null;
      let _ = u.getChannelFromSectionRow(t, n);
      if (null == _) return null;
      let {
        category: y,
        channel: E
      } = _, S = y instanceof U.VR, x = E.record, I = "".concat(t).concat(E.id);
      switch (x.type) {
        case eu.d4z.GUILD_ANNOUNCEMENT:
        case eu.d4z.GUILD_TEXT:
        case eu.d4z.GUILD_FORUM:
        case eu.d4z.GUILD_MEDIA:
        case eu.d4z.DM:
        case eu.d4z.GROUP_DM:
          return (0, i.jsxs)(l.Fragment, {
            children: [(0, i.jsx)(er.Z, {
              channel: x,
              guild: r,
              position: E.position,
              selected: s === E.id,
              muted: E.isMuted,
              subtitle: E.subtitle,
              disableManageChannels: p,
              canBeNewChannel: g && t === u.recentsSectionNumber,
              isFavoriteCategory: S,
              withGuildIcon: m
            }), E.threadCount > 0 ? (0, i.jsx)(ee.Z, {
              withGuildIcon: m,
              channel: x,
              sortedThreadIds: E.threadIds,
              selectedChannel: null != o && (o.id === E.id || o.parent_id === x.id) ? o : null,
              selectedVoiceChannelId: (null == a ? true : a.parent_id) === x.id ? c : null
            }) : null]
          }, I);
        case eu.d4z.GUILD_STAGE_VOICE:
          var w, Z;
          return (0, i.jsx)(et.Z, {
            channel: x,
            guild: r,
            position: E.position,
            selected: s === E.id,
            connected: c === E.id,
            collapsed: E.isCollapsed || y.isCollapsed,
            voiceStates: null != (w = h[E.id]) ? w : [],
            speakerVoiceStates: null != (Z = f[E.id]) ? Z : [],
            disableManageChannels: p,
            isFavoriteCategory: S
          }, I);
        case eu.d4z.GUILD_VOICE:
          return (0, i.jsx)(es.Z, {
            channel: x,
            guild: r,
            position: E.position,
            selected: s === E.id,
            connected: c === E.id,
            collapsed: E.isCollapsed || y.isCollapsed,
            voiceStates: h[E.id],
            subtitle: E.subtitle,
            disableManageChannels: p,
            showTutorial: E.isFirstVoiceChannel,
            isFavoriteCategory: S,
            withGuildIcon: m
          }, I);
        case eu.d4z.GUILD_STORE:
          return (0, i.jsx)(en.Z, {
            channel: x,
            guild: r,
            position: E.position,
            selected: s === E.id
          }, I);
        case eu.d4z.GUILD_CATEGORY:
          if (t !== u.voiceChannelsSectionNumber) return null;
          return (0, i.jsx)(z.kw, {
            channel: x
          }, "readonly-".concat(x.id));
        case eu.d4z.PUBLIC_THREAD:
        case eu.d4z.PRIVATE_THREAD:
          return (0, i.jsx)(er.Z, {
            channel: x,
            guild: r,
            position: E.position,
            selected: s === E.id,
            muted: E.isMuted,
            subtitle: E.subtitle,
            disableManageChannels: p,
            canBeNewChannel: false,
            isFavoriteCategory: false,
            forceTopLevelThread: true
          }, I);
        default:
          return null
      }
    }), ef(this, "renderSectionFooter", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: r,
        voiceStates: l,
        selectedChannelId: o,
        selectedVoiceChannelId: s,
        optInEnabled: a,
        guildId: c
      } = this.props;
      return (0, i.jsx)(K.ZP, {
        guildId: c,
        guildChannels: n,
        guildChannelsVersion: r,
        sectionIndex: t,
        voiceStates: l,
        selectedChannelId: o,
        selectedVoiceChannelId: s,
        optInEnabled: a
      }, (0, K.eo)(t, n, a))
    }), ef(this, "getAnchorId", (e, t) => {
      var n, r, i;
      let {
        guildChannels: l
      } = this.props;
      if (e !== U.wZ) {
        if (null == t) return e === U.p2 ? "favorites-header" : e === l.recentsSectionNumber ? "recents-header" : e === l.voiceChannelsSectionNumber ? "voice-channels" : e === U.wd ? "uncategorized-header" : null == (i = l.getNamedCategoryFromSection(e)) ? true : i.id;
        if (!l.isPlaceholderRow(e, t)) return null == (r = l.getChannelFromSectionRow(e, t)) || null == (n = r.channel) ? true : n.id
      }
    }), ef(this, "testShouldSkipTutorial", () => {
      if (!T.Z.shouldShow("voice-conversations")) return;
      let {
        guildChannels: e
      } = this.props, t = e.getFirstVoiceChannel();
      if (null == t) return void f.Z.dismiss("voice-conversations");
      let n = this._list;
      if (null != n)
        for (let {
            section: e,
            row: r
          }
          of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || f.Z.dismiss("voice-conversations")
    })
  }
}
ef(eO, "contextType", Chunk91192.qB), ef(eO, "defaultProps", {
  density: "default"
});
let e_ = e => {
  let {
    guildId: t,
    guild: n,
    selectedChannelId: r,
    selectedVoiceChannelId: o
  } = e, s = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled), {
    analyticsLocations: d
  } = (0, O.ZP)(b.Z.GUILD_CHANNEL_LIST), h = (0, u.e7)([R.Z], () => R.Z.getChannel(r)), p = (0, u.e7)([R.Z], () => R.Z.getChannel(o)), f = (0, u.e7)([M.Z], () => M.Z.getGuildId()), _ = (0, S.DM)(t), y = l.useRef(null), C = l.useCallback((e, t) => {
    let n = y.current;
    if (null != n)
      if (eu.Xyh.test(t) || (0, ed.AB)(t)) n.scrollToChannel(t, false, 2 * ec.yE, () => {
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
  }), []), E = (0, c.ZP)({
    id: "channels",
    defaultFocused: null != r ? r : true,
    isEnabled: s,
    setFocus: C,
    scrollToStart: v,
    scrollToEnd: j
  }), P = E.setFocus;
  l.useEffect(() => {
    null != r && P(r)
  }, [r, P]);
  let N = (0, Z.Z)(t),
    w = (0, x.V)("NavigableChannels"),
    T = (0, u.e7)([k.default], () => k.default.getCurrentUser()),
    A = (0, I.Z)(null == T ? true : T.id, t) && true === n.premiumProgressBarEnabled;
  return (0, i.jsx)(O.Gt, {
    value: d,
    children: (0, i.jsx)(g.Z, {
      section: eu.jXE.GUILD_CHANNEL_LIST,
      children: (0, i.jsx)(a.bG, {
        navigator: E,
        children: (0, i.jsx)(eO, em(eg({}, e), {
          listNavigator: E,
          ref: y,
          selectedChannel: h,
          selectedVoiceChannel: p,
          stageChannelSpeakerVoiceStates: N,
          selectedGuildId: f,
          optInEnabled: _,
          isNewGuildPowerupsProgressBarEnabled: w,
          shouldRenderBoosterEnhancedRoleColorsCoachmark: A
        }))
      })
    })
  })
};

function ey(e) {
  let t = (0, B.o)(),
    {
      isFavoritesPerk: n
    } = (0, y.z)("favorites-channel-list"),
    {
      density: r
    } = (0, h.TCT)();
  return (0, i.jsx)(e_, em(eg({}, e), {
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n,
    density: r
  }))
}

function eC(e) {
  let t = (0, H.Z)(e.guild),
    n = (0, u.cj)([G.Z], () => G.Z.getGuild(e.guildId, {
      guildActionRows: t
    })),
    {
      density: r
    } = (0, h.TCT)();
  return (0, i.jsx)(e_, em(eg({}, e, n), {
    density: r
  }))
}