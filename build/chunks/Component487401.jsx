/** Chunk was on 97492 **/
/** chunk id: 487401, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B: () => eg,
  T: () => eb
}), require("./896048.js"), require("./321073.js"), require("./747238.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
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

function ef(e) {
  return d.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({
    density: e
  }) + 2 * d.LU0.space.SPACE_XXS.resolve({
    density: e
  }) + 2
}
class ep extends(r = Chunk64700.PureComponent) {
  componentDidMount() {
    this.setState({
      initialized: true
    }), (0, k.Ei)(this.getVisibleChannels)
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
      scrollTop: a
    } = w.A.getGuildDimensions(r);
    null != n ? (this.scrollToChannel(n), f.A.clearChannelListScrollTo(r)) : r !== e.guildId ? null != a && this.scrollTo(a) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && i && (null == a && null != l ? this.scrollToChannel(l, false, 8, this.handleListScroll) : this.scrollTo(null != a ? a : 0, this.handleListScroll)), this.testShouldSkipTutorial()
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
          density: a = "default"
        } = this.props, s = i.threadOffset * ef(a);
        l.scrollIntoViewRect({
          start: e + s,
          end: e + s + ef(a),
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
        channel: a,
        category: s
      } = i;
      return !!(0, T.ig)(a.record.type) && (!s.isCollapsed || !s.isMuted) && !a.isMuted && !!t.isItemVisible(r, l, true) && (0, S.Y)(a.record)
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
      guildChannels: a,
      guildChannelsVersion: s
    } = this.props;
    return (0, l.jsx)("div", {
      className: eo.Eo,
      children: (0, l.jsx)(et.A, {
        ref: this.unreadTopRef,
        textUnread: es.intl.string(es.t.FCRiT3),
        textMention: es.intl.string(es.t["8zH0LJ"]),
        hide: null == e && (r || null != t || null != n),
        className: eo.Vq,
        barClassName: eo.bu,
        guildId: i,
        guildChannels: a,
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
      isUnreadVisible: i
    } = this.state;
    return (0, l.jsx)(et.A, {
      reverse: true,
      ref: this.unreadBottomRef,
      textUnread: es.intl.string(es.t.FCRiT3),
      textMention: es.intl.string(es.t["8zH0LJ"]),
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
    let a = this.context,
      {
        ref: s
      } = a,
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
      }(a, ["ref"]),
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
        innerAriaLabel: es.intl.string(es.t.OGiMXJ),
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
            children: es.intl.string(es.t.OGiMXJ)
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
      } = this.props, a = 0, s = null != (e = null == (t = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) ? true : t.getShownChannelIds()) ? e : [];
      for (let e = 0; e < s.length - 1; e++)
        if ((null != (r = i[s[e]]) ? r : []).length > 0) {
          a = e + 1;
          break
        } null == (n = this._list) || n.scrollToIndex({
        section: l.voiceChannelsSectionNumber,
        row: a,
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
        let [n, i] = r.getScrollPosition(l, e), a = r.getScrollerState();
        if (t && n + i < a.scrollTop + a.offsetHeight || !t && n > a.scrollTop) returntrue
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
            [l, a] = e.getScrollPosition(i.section, i.row);
          null != t && l + a < n.scrollTop + n.offsetHeight && l > n.scrollTop && r.push(t.channel.id)
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
    }), ec(this, "updateChannelListScroll", s().throttle(e => {
      f.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100)), ec(this, "getSectionHeight", e => {
      let {
        guild: t,
        guildChannels: n,
        density: r
      } = this.props;
      return (0, F.sc)(e, t, n, r)
    }), ec(this, "getSectionFooterHeight", e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: r,
        selectedChannelId: l,
        optInEnabled: i,
        guildChannelsVersion: a
      } = this.props;
      return (0, H.fz)({
        sectionIndex: e,
        guildChannels: t,
        guildChannelsVersion: a,
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
        selectedGuildId: a,
        density: s = "default"
      } = this.props, o = ef(s);
      if (e === M.PU) {
        let e = n.getGuildActionSection();
        return e.isEmpty() ? 0 : e.getRow(t) === el.n.GUILD_PREMIUM_PROGRESS_BAR ? e.getRows().length > 1 ? 69 : 57 : o
      }
      if (n.isPlaceholderRow(e, t)) return 0;
      let c = n.getChannelFromSectionRow(e, t);
      if (null == c) return 0;
      let {
        channel: u,
        category: f
      } = c;
      if (u.record.type === ei.rbe.GUILD_CATEGORY) return 40;
      let {
        isFavoritesPerk: p
      } = y.A.getCurrentConfig({
        location: "channel_list"
      }, {
        autoTrackExposure: true
      });
      for (let e of (!p || a !== ei.YYv || u.record.isDM() || u.record.isGroupDM() || u.record.isGuildStageVoice() || (o = 46), u.threadIds)) {
        let {
          density: t = "default"
        } = this.props;
        o += ef(t);
        let n = r[u.id];
        null != n && n.length > 0 && (o += i === e ? 32 * n.length : 32)
      }
      if (u.record.isGuildVoice()) {
        let e = r[u.id];
        if (null != e && e.length > 0) {
          let t = 32 * e.length;
          (u.isCollapsed || f.isCollapsed) && (t = 32), o += t + d.LU0.space.SPACE_XS.resolve({
            density: s
          })
        }
        u.id === this.props.rtcConnectedChannelId && (o += 32 * this.props.rtcDesyncedVoiceStatesCount)
      }
      if ((null != u.subtitle || i === u.id) && (o += 16), u.record.isGuildStageVoice()) {
        var h, b;
        let e = null != (h = r[u.id]) ? h : [],
          t = null != (b = l[u.id]) ? b : [];
        if (null != e && e.length > 0) {
          let e = 32 * t.length;
          u.isCollapsed || f.isCollapsed ? e = Math.ceil(e / 5) : e += 32, o += e + 8
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
      null != n && i.includes(n) && (l = (0, v.xb)(t)), (0, v.DD)(e.id, i, l)
    }), ec(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        guildChannels: n,
        guildChannelsVersion: r,
        guild: i,
        selectedChannelId: a,
        disableManageChannels: s
      } = this.props;
      return (0, l.jsx)(F.Ay, {
        sectionIndex: t,
        guild: i,
        guildChannels: n,
        guildChannelsVersion: r,
        selectedChannelId: a,
        disableManageChannels: s
      }, (0, F.is)(t, n))
    }), ec(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        guild: r,
        selectedChannel: a,
        selectedChannelId: s,
        selectedVoiceChannel: o,
        selectedVoiceChannelId: c,
        guildChannels: u,
        voiceStates: d,
        disableManageChannels: f,
        stageChannelSpeakerVoiceStates: p,
        optInEnabled: h,
        withGuildIcon: b
      } = this.props;
      if (t === M.PU) {
        let e = u.getGuildActionSection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case el.n.GUILD_HUB_HEADER_OPTIONS:
            return (0, l.jsx)(j.A, {
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
              selected: s === ea.VV.GUILD_HOME
            }, el.n.GUILD_HOME);
          case el.n.GUILD_SCHEDULED_EVENTS:
            return (0, l.jsx)(en.A, {
              guild: r,
              selected: s === el.n.GUILD_SCHEDULED_EVENTS
            }, el.n.GUILD_SCHEDULED_EVENTS);
          case el.n.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, l.jsx)(q.A, {
              guild: r,
              selected: s === ea.VV.ROLE_SUBSCRIPTIONS
            }, el.n.GUILD_ROLE_SUBSCRIPTIONS);
          case el.n.GUILD_SHOP:
            return (0, l.jsx)(X.A, {
              guild: r,
              selected: s === ea.VV.GUILD_SHOP
            }, el.n.GUILD_SHOP);
          case el.n.GUILD_GAME_SHOP:
            return (0, l.jsx)(K.A, {
              guild: r,
              selected: s === ea.VV.GAME_SHOP
            }, el.n.GUILD_GAME_SHOP);
          case el.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, l.jsx)(Y.j, {
              guild: r
            });
          case el.n.CHANNELS_AND_ROLES:
            return (0, l.jsx)(W.G, {
              guild: r,
              selected: s === ea.VV.CHANNEL_BROWSER || s === ea.VV.CUSTOMIZE_COMMUNITY
            }, el.n.CHANNELS_AND_ROLES);
          case el.n.GUILD_DIRECTORY:
            return (0, l.jsx)(B.A, {
              guild: r,
              selectedChannelId: s,
              disableManageChannels: f
            }, el.n.GUILD_DIRECTORY);
          case el.n.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, l.jsx)(O.A, {
              guild: r,
              selected: s === ea.VV.MEMBER_SAFETY
            }, el.n.GUILD_MOD_DASH_MEMBER_SAFETY);
          case el.n.GUILD_BOOSTS:
            return (0, l.jsx)(_.A, {
              guildId: r.id,
              selected: s === ea.VV.GUILD_BOOSTS
            }, el.n.GUILD_BOOSTS);
          case el.n.GAME_SERVERS:
            return (0, l.jsx)(E.A, {
              guildId: r.id,
              selected: s === ea.VV.GAME_SERVERS
            }, el.n.GAME_SERVERS);
          default:
            return null
        }
      }
      if (u.isPlaceholderRow(t, n)) return null;
      let g = u.getChannelFromSectionRow(t, n);
      if (null == g) return null;
      let {
        category: m,
        channel: A
      } = g, y = m instanceof M.xu, v = A.record, x = "".concat(t).concat(A.id);
      switch (v.type) {
        case ei.rbe.GUILD_ANNOUNCEMENT:
        case ei.rbe.GUILD_TEXT:
        case ei.rbe.GUILD_FORUM:
        case ei.rbe.GUILD_MEDIA:
        case ei.rbe.DM:
        case ei.rbe.GROUP_DM:
          return (0, l.jsxs)(i.Fragment, {
            children: [(0, l.jsx)($.A, {
              channel: v,
              guild: r,
              position: A.position,
              selected: s === A.id,
              muted: A.isMuted,
              subtitle: A.subtitle,
              disableManageChannels: f,
              canBeNewChannel: h && t === u.recentsSectionNumber,
              isFavoriteCategory: y,
              withGuildIcon: b
            }), A.threadCount > 0 ? (0, l.jsx)(J.A, {
              withGuildIcon: b,
              channel: v,
              sortedThreadIds: A.threadIds,
              selectedChannel: null != a && (a.id === A.id || a.parent_id === v.id) ? a : null,
              selectedVoiceChannelId: (null == o ? true : o.parent_id) === v.id ? c : null
            }) : null]
          }, x);
        case ei.rbe.GUILD_STAGE_VOICE:
          var S, I;
          return (0, l.jsx)(Q.A, {
            channel: v,
            guild: r,
            position: A.position,
            selected: s === A.id,
            connected: c === A.id,
            collapsed: A.isCollapsed || m.isCollapsed,
            voiceStates: null != (S = d[A.id]) ? S : [],
            speakerVoiceStates: null != (I = p[A.id]) ? I : [],
            disableManageChannels: f,
            isFavoriteCategory: y
          }, x);
        case ei.rbe.GUILD_VOICE:
          return (0, l.jsx)(er.A, {
            channel: v,
            guild: r,
            position: A.position,
            selected: s === A.id,
            connected: c === A.id,
            collapsed: A.isCollapsed || m.isCollapsed,
            voiceStates: d[A.id],
            subtitle: A.subtitle,
            disableManageChannels: f,
            showTutorial: A.isFirstVoiceChannel,
            isFavoriteCategory: y,
            withGuildIcon: b
          }, x);
        case ei.rbe.GUILD_STORE:
          return (0, l.jsx)(Z.A, {
            channel: v,
            guild: r,
            position: A.position,
            selected: s === A.id
          }, x);
        case ei.rbe.GUILD_CATEGORY:
          if (t !== u.voiceChannelsSectionNumber) return null;
          return (0, l.jsx)(V.sM, {
            channel: v
          }, "readonly-".concat(v.id));
        case ei.rbe.PUBLIC_THREAD:
        case ei.rbe.PRIVATE_THREAD:
        case ei.rbe.ANNOUNCEMENT_THREAD:
          return (0, l.jsx)($.A, {
            channel: v,
            guild: r,
            position: A.position,
            selected: s === A.id,
            muted: A.isMuted,
            subtitle: A.subtitle,
            disableManageChannels: f,
            canBeNewChannel: false,
            isFavoriteCategory: false,
            forceTopLevelThread: true
          }, x);
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
        selectedChannelId: a,
        selectedVoiceChannelId: s,
        optInEnabled: o,
        guildId: c
      } = this.props;
      return (0, l.jsx)(H.Ay, {
        guildId: c,
        guildChannels: n,
        guildChannelsVersion: r,
        sectionIndex: t,
        voiceStates: i,
        selectedChannelId: a,
        selectedVoiceChannelId: s,
        optInEnabled: o
      }, (0, H.tt)(t, n, o))
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
      if (null == t) return void p.A.dismiss("voice-conversations");
      let n = this._list;
      if (null != n)
        for (let {
            section: e,
            row: r
          }
          of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || p.A.dismiss("voice-conversations")
    })
  }
}
ec(ep, "contextType", Chunk837381.nC), ec(ep, "defaultProps", {
  density: "default"
});
let eh = e => {
  let {
    guildId: t,
    selectedChannelId: n,
    selectedVoiceChannelId: r
  } = e, a = (0, u.bG)([b.A], () => b.A.keyboardModeEnabled), {
    analyticsLocations: s
  } = (0, m.Ay)(g.A.GUILD_CHANNEL_LIST), d = (0, u.bG)([P.A], () => P.A.getChannel(n)), f = (0, u.bG)([P.A], () => P.A.getChannel(r)), p = (0, u.bG)([D.A], () => D.A.getGuildId()), A = (0, x.jN)(t), y = i.useRef(null), O = i.useCallback((e, t) => {
    let n = y.current;
    if (null != n)
      if (ei.Ut1.test(t) || (0, ea.jq)(t)) n.scrollToChannel(t, false, 16, () => {
        requestAnimationFrame(() => {
          var t;
          return null == (t = document.querySelector(e)) ? true : t.focus()
        })
      });
      else {
        var r;
        null == (r = document.querySelector(e)) || r.focus()
      }
  }, []), j = i.useCallback(() => new Promise(e => {
    let t = y.current;
    if (null == t) return e();
    t.scrollTo(0, () => requestAnimationFrame(() => e()))
  }), []), v = i.useCallback(() => new Promise(e => {
    let t = y.current;
    if (null == t) return e();
    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
  }), []), E = (0, c.Ay)({
    id: "channels",
    defaultFocused: null != n ? n : true,
    isEnabled: a,
    setFocus: O,
    scrollToStart: j,
    scrollToEnd: v
  }), _ = E.setFocus;
  i.useEffect(() => {
    null != n && _(n)
  }, [n, _]);
  let C = (0, I.A)(t);
  return (0, l.jsx)(m.f5, {
    value: s,
    children: (0, l.jsx)(h.A, {
      section: ei.JJy.GUILD_CHANNEL_LIST,
      children: (0, l.jsx)(o.hD, {
        navigator: E,
        children: (0, l.jsx)(ep, ed(eu({}, e), {
          listNavigator: E,
          ref: y,
          selectedChannel: d,
          selectedVoiceChannel: f,
          stageChannelSpeakerVoiceStates: C,
          selectedGuildId: p,
          optInEnabled: A
        }))
      })
    })
  })
};

function eb(e) {
  let t = (0, G.x)(),
    {
      isFavoritesPerk: n
    } = (0, y.l)("favorites-channel-list"),
    {
      density: r
    } = (0, d.wRf)();
  return (0, l.jsx)(eh, ed(eu({}, e), {
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n,
    density: r
  }))
}

function eg(e) {
  let t = (0, U.A)(e.guild),
    n = (0, u.cf)([L.A], () => L.A.getGuild(e.guildId, {
      guildActionRows: t
    })),
    {
      density: r
    } = (0, d.wRf)();
  return (0, l.jsx)(eh, ed(eu({}, e, n), {
    density: r
  }))
}