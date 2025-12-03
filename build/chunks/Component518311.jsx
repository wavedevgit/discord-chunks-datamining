/** Chunk was on 34740 **/
/** chunk id: 518311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => ef,
  l: () => em
}), require("./642613.js"), require("./415506.js"), require("./539854.js"), require("./388685.js"), require("./35282.js"), require("./49124.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk26151 = require("./26151.js"),
  Chunk493683 = require("./493683.js"),
  Chunk529103 = require("./529103.js"),
  Chunk447543 = require("./447543.js"),
  Chunk708690 = require("./708690.js"),
  Chunk194359 = require("./194359.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk313201 = require("./313201.js"),
  Chunk429090 = require("./429090.js"),
  Chunk912114 = require("./912114.jsx"),
  Chunk366980 = require("./366980.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk93127 = require("./93127.js"),
  Chunk752048 = require("./752048.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk341165 = require("./341165.js"),
  Chunk544610 = require("./544610.js"),
  Chunk19780 = require("./19780.js"),
  Chunk306680 = require("./306680.js"),
  Chunk699516 = require("./699516.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk585483 = require("./585483.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk73752 = require("./73752.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk575464 = require("./575464.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk918324 = require("./918324.js");

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function el(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ea(e, t) {
  if (null == e) return {};
  var n, i, r = function(e, t) {
    if (null == e) return {};
    var n, i, r = {},
      l = Object.keys(e);
    for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
    return r
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
  }
  return r
}
let eo = (0, Chunk313201.hQ)(),
  es = e => {
    var t;
    let {
      channel: n,
      onClose: i
    } = e, l = null != (t = (0, S.ZP)(n)) ? t : "", a = (0, u.e7)([V.ZP], () => {
      var e;
      return null != (e = V.ZP.lastMessageId(n.id)) ? e : n.id
    });
    return (0, r.jsx)(p.P3F, {
      onClick: () => {
        (0, A.XU)($.ME, n.id), i()
      },
      children: (0, r.jsxs)("div", {
        className: en.confirmChannelItemContainer,
        children: [(0, r.jsx)(p.qEK, {
          src: (0, j.x)(n),
          size: p.EFr.SIZE_24,
          "aria-label": l
        }), (0, r.jsx)("span", {
          className: en.confirmChannelName,
          children: l
        }), (0, r.jsx)("span", {
          className: en.lastActiveTimestamp,
          children: s()(K.default.extractTimestamp(a)).fromNow()
        })]
      })
    })
  },
  ec = e => {
    var {
      onConfirm: t,
      channelIds: n
    } = e, i = ea(e, ["onConfirm", "channelIds"]);
    let l = (0, u.Wu)([L.Z], () => Array.from(n).map(L.Z.getChannel), [n]);
    return (0, r.jsx)(c.Modal, el(er({
      title: et.intl.string(et.t.uFHxNd),
      subtitle: et.intl.string(et.t.rIsSqE),
      actions: [{
        variant: "secondary",
        text: et.intl.string(et.t["ETE/oC"]),
        onClick: i.onClose
      }, {
        variant: "primary",
        text: et.intl.string(et.t.KCNNJu),
        onClick: () => {
          t(), i.onClose()
        }
      }],
      input: (0, r.jsx)(p.Text, {
        variant: "text-md/normal",
        className: en.selectExistingFormHeader,
        children: et.intl.string(et.t.cjE7wH)
      })
    }, i), {
      children: l.filter(q.lm).sort((e, t) => {
        var n, i;
        let r = null != (n = e.lastMessageId) ? n : e.id,
          l = null != (i = t.lastMessageId) ? i : t.id;
        return K.default.compare(l, r)
      }).map(e => (0, r.jsx)(es, {
        onClose: i.onClose,
        channel: e
      }, e.id))
    }))
  };
class eu extends(i = Chunk473749.PureComponent) {
  componentDidUpdate(e) {
    if (e.selectedUsers !== this.props.selectedUsers || e.query !== this.props.query) {
      var t, n;
      null == (t = (n = this.props).updatePosition) || t.call(n)
    }
  }
  _getAnalyticsEntryPoint() {
    let {
      channel: e
    } = this.props, t = "", n = "";
    return null != module ? module.isDM() ? (t = "Add Friends to DM", n = "DM") : (t = "Add Friends to DM", n = "Group DM") : (t = "New Group DM", n = "Friends List"), {
      entryPointType: exports,
      entryPointSource: require
    }
  }
  componentDidMount() {
    let {
      channel: e
    } = this.props;
    Chunk570140.Z.wait(() => Chunk708690.Z.open(null == module ? true : module.id));
    let t = (0, Chunk367907.v_)(module);
    Chunk626135.default.track(Chunk981631.rMx.OPEN_POPOUT, el(er({}, exports), {
      type: this._getAnalyticsEntryPoint().entryPointType,
      source: this._getAnalyticsEntryPoint().entryPointSource,
      is_friend: !this.isNotFriends()
    })), Chunk585483.S.subscribe(Chunk981631.CkL.SCROLL_PAGE_UP, this.scrollPageUp), Chunk585483.S.subscribe(Chunk981631.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown)
  }
  componentWillUnmount() {
    Chunk585483.S.unsubscribe(Chunk981631.CkL.SCROLL_PAGE_UP, this.scrollPageUp), Chunk585483.S.unsubscribe(Chunk981631.CkL.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), Chunk570140.Z.wait(() => Chunk708690.Z.close())
  }
  isNotFriends() {
    let {
      channel: e
    } = this.props;
    if (null == module || !module.isDM()) returnfalse;
    let t = module.getRecipientId();
    if (null == exports) throw Error("no recipient in DM");
    return !Chunk699516.Z.isFriend(exports)
  }
  createInvite() {
    let {
      channel: e
    } = this.props;
    if (null == module || !module.isMultiUserDM() || this.isPartyFull()) return;
    let {
      inviteMaxAgeSeconds: t
    } = Chunk73752.Z.getCurrentConfig({
      location: "5326c5_1"
    }, {
      autoTrackExposure: false
    });
    Chunk447543.ZP.createInvite(module.id, {
      max_age: exports
    }, Chunk981631.t4x.GROUP_DM)
  }
  isPartyFull() {
    let {
      channel: e
    } = this.props;
    return null != module && module.recipients.length + 1 >= this.getMaxParticipants()
  }
  getMaxParticipants() {
    let {
      channel: e
    } = this.props, t = Chunk594174.default.getCurrentUser();
    return null != exports && exports.isStaff() ? Chunk981631.p3w : null != module && module.userLimit > 0 ? module.userLimit : Chunk981631.pAY
  }
  getRemaining() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props, n = (null == module ? 0 : module.recipients.length) + 1;
    return this.getMaxParticipants() - exports.size - require
  }
  getCreateGroupButtonAction() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props, n = this.getRemaining(), i = null != module && 0 === exports.size || require < 0, r = exports.size > 1 || null != module ? Chunk388032.intl.string(Chunk388032.t.ZGMNA8) : Chunk388032.intl.string(Chunk388032.t["6Urw1t"]);
    return {
      variant: "primary",
      disabled: i,
      onClick: this.handleInviteUsers,
      text: Chunk54381
    }
  }
  renderAddUsersButton() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props;
    if (null == module || module.isDM()) return;
    let n = this.getRemaining(),
      i = 0 === exports.size || require < 0;
    return (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "primary",
      text: Chunk388032.intl.string(Chunk388032.t.OYkgVk),
      disabled: i,
      onClick: this.handleInviteUsers
    })
  }
  getTitle() {
    return this.isNotFriends() ? Chunk388032.intl.string(Chunk388032.t.Xjlbvs) : this.isPartyFull() ? Chunk388032.intl.string(Chunk388032.t.OtTQDz) : Chunk388032.intl.string(Chunk388032.t.CdNhGX)
  }
  getSubtitle() {
    let {
      channel: e,
      hasFriends: t
    } = this.props;
    if (!exports) return Chunk388032.intl.string(Chunk388032.t["7orY6K"]);
    if (this.isPartyFull()) return;
    if (this.isNotFriends()) {
      let t = null != module ? module.getRecipientId() : null;
      if (null == exports) throw Error("no recipient in DM");
      let n = Chunk594174.default.getUser(exports),
        i = null != require ? require.username : "";
      return Chunk388032.intl.format(Chunk388032.t["eg+R9x"], {
        username: i
      })
    }
    let n = this.getRemaining();
    return require <= 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.xYr004, {
      number: this.getMaxParticipants()
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.HrSDPF, {
      number: require
    })
  }
  handleKeyDown(e) {
    let {
      selectedRow: t,
      selectedUsers: n,
      results: i,
      query: r
    } = this.props, {
      current: l
    } = this.searchBarRef;
    if (null == l) return;
    let a = t;
    switch (e.key) {
      case ee.vn.BACKSPACE:
        (null == r || 0 === r.length) && n.size > 0 && (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
        break;
      case ee.vn.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), ++a >= i.length && (a = 0), this.handleSelectionChange(a);
        break;
      case ee.vn.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --a < 0 && (a = i.length - 1), this.handleSelectionChange(a);
        break;
      case ee.vn.ENTER:
        e.preventDefault(), e.stopPropagation(), i.length > a && this.handleSelect(a)
    }
  }
  renderSearchBar() {
    let {
      query: e,
      hasFriends: t,
      selectedUsers: n
    } = this.props;
    if (!exports || this.isNotFriends() || this.isPartyFull()) return null;
    let i = [];
    return require.forEach(e => {
      let t = H.default.getUser(e);
      null != t && i.push({
        id: e,
        label: Y.ZP.getName(t)
      })
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk918324.searchBar,
      children: [(0, Chunk54381.jsx)(Chunk481060.oil, {
        inputRef: this.searchBarRef,
        autoFocus: true,
        fullWidth: true,
        placeholder: 0 === require.size ? Chunk388032.intl.string(Chunk388032.t.Wxnb6q) : "",
        disabled: this.isPartyFull(),
        value: module,
        leading: {
          type: "tags",
          items: i,
          onRemove: this.handleRemoveUser
        },
        onChange: this.handleQueryChange,
        onKeyDown: this.handleKeyDown.bind(this)
      }), this.renderAddUsersButton()]
    })
  }
  renderPopoutBody() {
    let {
      hasFriends: e,
      results: t
    } = this.props;
    return this.isNotFriends() || !module ? null : this.isPartyFull() ? (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk918324.popoutContent,
      variant: "text-md/normal",
      color: "text-secondary",
      children: Chunk388032.intl.format(Chunk388032.t.xYr004, {
        number: this.getMaxParticipants()
      })
    }) : 0 === exports.length ? (0, Chunk54381.jsx)("div", {
      className: Chunk918324.noResults,
      children: (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: Chunk388032.intl.string(Chunk388032.t.SV4DJ1)
      })
    }) : (0, Chunk54381.jsx)(Chunk481060.aVo, {
      ref: this.scrollerRef,
      sections: [exports.length],
      className: Chunk918324.scroller,
      innerClassName: Chunk918324.scrollerInner,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      renderSection: this.renderSection,
      sectionHeight: 0,
      onScroll: this.handleScroll,
      paddingTop: 0,
      paddingBottom: 14,
      fade: true,
      role: true,
      innerRole: "listbox",
      innerId: eo,
      innerAriaMultiselectable: true,
      innerAriaOrientation: "vertical"
    })
  }
  renderBody() {
    let {
      hasFriends: e
    } = this.props;
    return this.isNotFriends() || !module ? null : this.isPartyFull() ? (0, Chunk54381.jsx)("div", {
      children: Chunk388032.intl.format(Chunk388032.t.xYr004, {
        number: this.getMaxParticipants()
      })
    }) : null
  }
  getListProps() {
    let {
      hasFriends: e,
      results: t
    } = this.props;
    if (!(this.isNotFriends() || !module || this.isPartyFull())) return 0 === exports.length ? {
      sections: [1],
      sectionHeight: 0,
      rowHeight: 32,
      renderRow: () => (0, Chunk54381.jsx)("div", {
        className: Chunk918324.noResults,
        children: (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: Chunk388032.intl.string(Chunk388032.t.SV4DJ1)
        })
      })
    } : {
      ref: this.scrollerRef,
      sections: [exports.length],
      className: Chunk918324.scroller,
      innerClassName: Chunk918324.scrollerInner,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      renderSection: this.renderSection,
      sectionHeight: 0,
      onScroll: this.handleScroll,
      paddingTop: 0,
      paddingBottom: 14,
      fade: true,
      role: true,
      innerRole: "listbox",
      innerId: eo,
      innerAriaMultiselectable: true,
      innerAriaOrientation: "vertical"
    }
  }
  renderSection() {
    return null
  }
  getInviteLinkFooter() {
    let {
      channel: e,
      invite: t,
      hideInstantInvites: n
    } = this.props, {
      copied: i
    } = this.state;
    if (null == module || !module.isMultiUserDM() || this.isPartyFull()) return null;
    let l = null != exports ? (0, Chunk366980.Z)(exports.code) : "",
      a = Chunk473749.length > 0;
    return (0, Chunk54381.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.t3O2BR),
      helperText: Chunk473749.length > 0 ? Chunk388032.intl.format(Chunk388032.t.ZVdJMy, {
        numHours: "".concat(24)
      }) : true,
      children: (0, Chunk54381.jsx)(Chunk481060.kO8, {
        supportsCopy: Chunk572004.wS,
        placeholder: (0, Chunk366980.Z)(Chunk388032.intl.string(Chunk388032.t.lPVBqP)),
        value: Chunk392711 ? require ? Chunk388032.intl.string(Chunk388032.t["6HzNgZ"]) : Chunk473749 : "",
        buttonColor: Chunk755721.zx.Colors.BRAND,
        text: Chunk392711 ? i ? Chunk388032.intl.string(Chunk388032.t.q30c5i) : Chunk388032.intl.string(Chunk388032.t.OpuAlK) : Chunk388032.intl.string(Chunk388032.t.qzxqUf),
        mode: i ? Chunk481060.uA3.SUCCESS : Chunk481060.uA3.DEFAULT,
        onCopy: () => {
          Chunk392711 ? this.handleCopyInvite(Chunk473749) : this.createInvite()
        }
      })
    })
  }
  getFooterProps() {
    let {
      hasFriends: e,
      channel: t,
      selectedUsers: n
    } = this.props;
    if (this.isNotFriends()) {
      let e = null != exports ? exports.getRecipientId() : null;
      if (null == module) throw Error("no recipient in DM");
      let n = Chunk594174.default.getUser(module),
        i = null != require && Chunk699516.Z.getRelationshipType(require.id) === Chunk981631.OGo.PENDING_OUTGOING;
      return {
        actions: [{
          variant: "primary",
          text: i ? Chunk388032.intl.string(Chunk388032.t.xMH6vD) : Chunk388032.intl.string(Chunk388032.t["PMsq/b"]),
          disabled: i,
          onClick: () => null != require ? this.handleAddFriend(require) : null
        }]
      }
    }
    if (!module) return {
      actions: [{
        variant: "primary",
        text: Chunk388032.intl.string(Chunk388032.t.w5uwoI),
        onClick: this.handleAddFriendNavigation
      }]
    };
    if (this.isPartyFull()) return {};
    if (null == exports) return {
      actionBarInput: require.size > 1 ? (0, Chunk54381.jsx)(ed, {
        previewIcon: this.state.previewIcon,
        selectedUsers: require,
        channelName: this.state.newChannelName,
        onChange: this.handleChannelNameChange,
        onIconChange: this.handleIconChange,
        onIconRemove: this.handleIconRemove
      }) : true,
      actions: [{
        variant: "secondary",
        text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
        onClick: this.props.onClose
      }, this.getCreateGroupButtonAction()]
    };
    if (exports.isDM()) return {
      actions: [this.getCreateGroupButtonAction()]
    };
    let i = this.getInviteLinkFooter();
    return null != i ? {
      actionBarInput: i
    } : {}
  }
  render() {
    var e;
    let {
      transitionState: t,
      onClose: n,
      inBornThisNamedExperiment: i
    } = this.props, {
      actionBarInput: l,
      actions: a
    } = this.getFooterProps();
    return i ? (0, Chunk54381.jsx)(Chunk793030.Modal, {
      transitionState: null != exports ? exports : Chunk481060.Dvm.ENTERED,
      onClose: async () => await require(),
      title: this.getTitle(),
      subtitle: this.getSubtitle(),
      input: null != (e = this.renderSearchBar()) ? module : true,
      actionBarInput: Chunk473749,
      listProps: this.getListProps(),
      actions: null != Chunk392711 ? Chunk392711 : [],
      children: this.renderBody()
    }) : (0, Chunk54381.jsxs)("div", {
      className: Chunk918324.popout,
      children: [(0, Chunk54381.jsx)(Chunk793030.X6q, {
        className: Chunk918324.popoutContent,
        variant: "heading-lg/semibold",
        color: "text-primary",
        children: this.getTitle()
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        className: Chunk918324.popoutContent,
        variant: "text-md/normal",
        color: "text-secondary",
        children: this.getSubtitle()
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk918324.popoutContent,
        children: this.renderSearchBar()
      }), this.renderPopoutBody(), null != Chunk473749 && (0, Chunk54381.jsx)("div", {
        className: Chunk918324.footer,
        children: Chunk473749
      }), null != Chunk392711 && (0, Chunk54381.jsx)("div", {
        className: Chunk918324.popoutContent,
        children: (0, Chunk54381.jsx)(Chunk793030.hE2, {
          padding: {
            top: 12
          },
          fullWidth: true,
          children: Chunk392711.map((e, t) => (0, r.jsx)(p.Button, er({}, e), t))
        })
      })]
    })
  }
  handleAddFriend(e) {
    this.props.onClose(), C.Z.sendRequest({
      discordTag: Y.ZP.getUserTag(e, {
        identifiable: "always"
      }),
      context: {
        location: "Group DM"
      }
    })
  }
  _getUserAffinities(e) {
    return {
      affinities: e.map(e => {
        var t;
        let n = M.Z.getUserAffinity(e);
        return null != (t = null == n ? true : n.communicationProbability) ? t : false
      })
    }
  }
  constructor(...e) {
    super(...e), ei(this, "state", {
      separator: false,
      copied: false,
      newChannelName: "",
      previewIcon: true
    }), ei(this, "copyTimeout", true), ei(this, "scrollerRef", l.createRef()), ei(this, "searchBarRef", l.createRef()), ei(this, "_mobileCloseRef", l.createRef()), ei(this, "_searchCounter", 0), ei(this, "_existingTimeout", null), ei(this, "scrollPageUp", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageUp({
        animate: true
      })
    }), ei(this, "scrollPageDown", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageDown({
        animate: true
      })
    }), ei(this, "renderMobileCloseButton", () => (0, r.jsx)("div", {
      className: en.mobileToolsContainer,
      ref: this._mobileCloseRef,
      children: (0, r.jsx)(p.JcV, {
        containerRef: this._mobileCloseRef,
        children: (0, r.jsx)("div", {
          children: (0, r.jsx)(v.Z, {
            className: en.mobileToolsCloseIcon,
            closeAction: this.props.onClose,
            keybind: "ESC"
          })
        })
      })
    })), ei(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      let {
        results: n
      } = this.props;
      return null != n[t] ? this.props.inBornThisNamedExperiment ? 48 : 42 : 0
    }), ei(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        results: i,
        selectedUsers: l,
        selectedRow: a,
        hideDiscriminator: o
      } = this.props, s = i[n];
      if (null == s) return null;
      let {
        user: c,
        comparator: u
      } = s, d = l.has(c.id), p = !d && 0 >= this.getRemaining();
      return (0, r.jsx)(Q.Z, {
        row: n,
        user: c,
        hideDiscriminator: o,
        comparator: u,
        checked: d,
        disabled: p,
        selected: n === a,
        onClick: this.handleClick,
        onMouseEnter: this.focusResult,
        "aria-posinset": n + 1,
        "aria-setsize": i.length,
        inlineUsername: !this.props.inBornThisNamedExperiment
      }, c.id)
    }), ei(this, "forceFocus", () => {
      let e = this.searchBarRef.current;
      null == e || e.focus()
    }), ei(this, "focusResult", e => {
      y.Z.select(e)
    }), ei(this, "handleSelect", e => {
      let {
        results: t,
        channel: n
      } = this.props;
      null == e ? y.Z.clear(null == n ? true : n.id) : null != t && this.handleClick(t[e].user.id)
    }), ei(this, "handleSelectionChange", e => {
      y.Z.select(e);
      let t = this.scrollerRef.current;
      null != t && t.scrollToIndex({
        section: 0,
        row: e,
        padding: 8
      })
    }), ei(this, "handleQueryChange", e => {
      let {
        channel: t
      } = this.props, n = (0, x.v_)(t);
      y.Z.search(e, null == t ? true : t.id), null != this._existingTimeout && clearTimeout(this._existingTimeout), this._existingTimeout = setTimeout(() => {
        G.default.track($.rMx.SEARCH_USER_LIST_STARTED, el(er({}, n), {
          entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
          entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
          search_query_length: e.length
        })), this._searchCounter++
      }, 500)
    }), ei(this, "handleRemoveTag", e => {
      let t = Array.from(this.props.selectedUsers);
      y.Z.removeUser(t[e])
    }), ei(this, "handleRemoveUser", e => {
      e.forEach(e => {
        y.Z.removeUser(e)
      }), this.forceFocus()
    }), ei(this, "handleClick", e => {
      let {
        selectedUsers: t,
        query: n,
        channel: i
      } = this.props;
      t.has(e) ? y.Z.removeUser(e) : this.getRemaining() > 0 && (y.Z.addUser(e), n.length > 0 && y.Z.clear(null == i ? true : i.id)), this.forceFocus()
    }), ei(this, "handleAddFriendNavigation", () => {
      g.Z.transitionToSection($.pJs.ADD_FRIEND, {
        explicit: true
      }), this.props.onClose()
    }), ei(this, "handleScroll", () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({
        separator: !e.isScrolledToTop()
      })
    }), ei(this, "handleChannelNameChange", e => {
      this.setState({
        newChannelName: e
      })
    }), ei(this, "handleIconChange", e => {
      let {
        imageUri: t
      } = e;
      this.setState({
        previewIcon: t
      })
    }), ei(this, "handleIconRemove", () => {
      this.setState({
        previewIcon: null
      })
    }), ei(this, "createNewDM", e => {
      let t = this._searchCounter,
        {
          channel: n
        } = this.props,
        i = (0, x.v_)(n),
        r = true;
      1 === e.length && (r = null == m.Z._openCachedDMChannel(e[0])), G.default.track($.rMx.CREATE_DM_USER_LIST_CLICKED, el(er({}, i), {
        is_new_dm: r,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: e,
        num_searches: t,
        affinity_score: this._getUserAffinities(e).affinities,
        name_is_set: "" !== this.state.newChannelName,
        icon_is_set: null != this.state.previewIcon
      })), m.Z.openPrivateChannel({
        recipientIds: e,
        location: "New Group DM"
      }).then(e => {
        let t = {};
        "" !== this.state.newChannelName && (t.name = this.state.newChannelName), null != this.state.previewIcon && (t.icon = this.state.previewIcon), (null != t.name || null != t.icon) && m.Z.updateChannel(e, t, O.Z.NEW_GROUP_DM_INVITE_MODAL), G.default.track($.rMx.GDM_EDIT_INTERACTED, {
          channel_id: e,
          channel_type: $.d4z.GROUP_DM,
          location: O.Z.NEW_GROUP_DM_INVITE_MODAL,
          new_name_set: "" !== this.state.newChannelName,
          new_icon_set: null != this.state.previewIcon
        })
      })
    }), ei(this, "pushToExistingDM", (e, t) => {
      let n = this._searchCounter,
        i = (0, x.v_)(e),
        r = U.Z.getChannelId() === e.id;
      m.Z.addRecipients(e.id, t, $.Sbl.ADD_FRIENDS_TO_DM).then(n => {
        if (r) {
          if (e.isDM() && n !== e.id) return void f.Z.call(n, false, true);
          f.Z.ring(n, t, "dm_invite")
        }
      }), G.default.track($.rMx.CREATE_DM_USER_LIST_CLICKED, el(er({}, i), {
        is_new_dm: true,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: t,
        num_searches: n,
        affinity_score: this._getUserAffinities(t).affinities
      }))
    }), ei(this, "handleInviteUsers", () => {
      let {
        channel: e,
        selectedUsers: t,
        onClose: n
      } = this.props, i = Array.from(t);
      if (null != e) {
        let t = eg(Array.from(new Set([...e.recipients, ...i])));
        t.size > 0 ? (0, p.h7j)(n => (0, r.jsx)(ec, el(er({}, n), {
          onConfirm: () => this.pushToExistingDM(e, i),
          channelIds: t
        })), {}, (0, p.VnL)(this.context.appContext)) : this.pushToExistingDM(e, i)
      } else {
        let e = eg(i);
        i.length > 1 && e.size > 0 ? (0, p.h7j)(t => (0, r.jsx)(ec, el(er({}, t), {
          onConfirm: () => this.createNewDM(i),
          channelIds: e
        })), {}, (0, p.VnL)(this.context.appContext)) : this.createNewDM(i)
      }
      n()
    }), ei(this, "handleCopyInvite", e => {
      let {
        channel: t,
        invite: n
      } = this.props;
      null != n && (0, z.JG)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
        copied: true
      }), this.copyTimeout = setTimeout(() => {
        this.setState({
          copied: false
        })
      }, 1e3), G.default.track($.rMx.COPY_INSTANT_INVITE, {
        server: null,
        channel: null != t ? t.id : null,
        channel_type: null != t ? t.type : null,
        location: $.Sbl.ADD_FRIENDS_TO_DM,
        code: null != n ? n.code : null
      })
    }), ei(this, "scrollToCounterSearchBarHeightChange", e => {
      var t, n;
      if (!this.props.inBornThisNamedExperiment) return;
      let i = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? true : t.call(n);
      null != i && (i.scrollTop = Math.max(0, i.scrollTop + e))
    })
  }
}

function ed(e) {
  let {
    selectedUsers: t,
    channelName: n,
    previewIcon: i,
    onIconChange: l,
    onIconRemove: a,
    onChange: o
  } = e, {
    analyticsLocations: s
  } = (0, E.ZP)(O.Z.NEW_GROUP_DM_INVITE_MODAL);
  if (!(0, I.a)(O.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
  let c = (0, S.pT)(Array.from(t), H.default, F.Z);
  return (0, r.jsxs)("div", {
    className: en.customizationContainer,
    children: [(0, r.jsx)(Z.B, {
      className: en.iconSelector,
      channel: null,
      previewIcon: i,
      onIconChange: l,
      onIconRemove: a,
      analyticsLocations: s,
      petite: true,
      allowRemovingIcon: false
    }), (0, r.jsx)(p.Text, {
      className: en.channelNameLabel,
      variant: "text-sm/medium",
      color: "header-muted",
      children: et.intl.string(et.t.YynaLK)
    }), (0, r.jsx)(p.oil, {
      "aria-label": et.intl.string(et.t.YynaLK),
      name: "create-gdm-channel-name",
      placeholder: c,
      value: n,
      onChange: o
    })]
  })
}

function ep(e) {
  var {
    channel: t
  } = e, n = ea(e, ["channel"]);
  let i = (0, u.cj)([D.Z, k.Z, B.Z], () => {
    let e;
    return null != t && null != (e = k.Z.getInvite(t.id)) && e.isExpired() && (e = null), el(er({}, D.Z.getState()), {
      invite: e,
      hideDiscriminator: B.Z.hidePersonalInformation,
      hideInstantInvites: B.Z.hideInstantInvites
    })
  });
  return (0, r.jsx)(eu, er({
    channel: t
  }, n, i))
}

function eh(e) {
  let {
    channel: t,
    location: n,
    subscribeToGlobalHotkey: i,
    initialPopoutOpen: a
  } = e, [o, s] = l.useState(null != a && a), c = (0, I.a)(n), u = "channel-invite-modal-".concat(null == t ? true : t.id), d = (0, p.VXO)(u), h = l.useCallback(() => (0, p.ZDy)(() => Promise.resolve(e => (0, r.jsx)(ep, el(er({}, e), {
    channel: t,
    inBornThisNamedExperiment: c
  }))), {
    modalKey: u
  }), [t, u, c]), f = l.useCallback(() => c ? d ? (0, p.Mr3)(u) : h() : s(e => !e), [c, d, u, h, s]);
  return l.useEffect(() => (i && W.S.subscribe($.CkL.TOGGLE_DM_CREATE, f), () => {
    W.S.unsubscribe($.CkL.TOGGLE_DM_CREATE, f)
  }), [i, f, c]), (0, _.ZP)(() => {
    (0, w._)()
  }), {
    showModal: h,
    renderPopout: e => (0, r.jsx)(ep, el(er({}, e), {
      onClose: e.closePopout,
      channel: t,
      inBornThisNamedExperiment: c
    })),
    toggleVisible: f,
    popoutOpen: o,
    setPopoutOpen: s,
    inBornThisNamedExperiment: c
  }
}

function ef(e) {
  var t, n;
  let {
    channel: i,
    iconClassName: a,
    className: o,
    icon: s,
    tooltip: c,
    tooltipPosition: d = "bottom",
    popoutPosition: h = "bottom",
    popoutAlign: f = "right",
    subscribeToGlobalHotkey: m = false,
    location: g
  } = e, b = l.useRef(null), y = null != s ? s : null == i ? p.kL_ : p.ejJ, {
    showModal: C,
    renderPopout: v,
    toggleVisible: _,
    popoutOpen: O,
    setPopoutOpen: x,
    inBornThisNamedExperiment: E
  } = eh({
    initialPopoutOpen: null != i && i.isGroupDM() && 0 === i.recipients.length,
    channel: i,
    location: g,
    subscribeToGlobalHotkey: m
  }), j = (0, u.e7)([H.default], () => H.default.getUser(null == i ? true : i.getRecipientId()));
  return null != (t = null == j ? true : j.bot) && t || null != (n = null == j ? true : j.isProvisional) && n ? null : E ? (0, r.jsx)(J.ZP.Icon, {
    ref: b,
    onClick: C,
    icon: y,
    className: o,
    iconClassName: a,
    tooltip: c,
    tooltipPosition: d
  }) : (0, r.jsx)(p.yRy, {
    targetElementRef: b,
    renderPopout: v,
    position: h,
    shouldShow: O,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: f,
    onRequestClose: () => x(false),
    animation: p.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, r.jsx)(J.ZP.Icon, el(er({}, e), {
      ref: b,
      onClick: _,
      icon: y,
      className: o,
      iconClassName: a,
      tooltip: c,
      tooltipPosition: d
    }))
  })
}

function em(e) {
  var {
    channel: t,
    popoutPosition: n = "bottom",
    popoutAlign: i = "right",
    fullWidth: a = false,
    text: o,
    icon: s,
    subscribeToGlobalHotkey: c = false
  } = e, u = ea(e, ["channel", "popoutPosition", "popoutAlign", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]);
  let d = l.useRef(null),
    {
      showModal: h,
      renderPopout: f,
      toggleVisible: m,
      popoutOpen: g,
      setPopoutOpen: b,
      inBornThisNamedExperiment: y
    } = eh({
      initialPopoutOpen: false,
      channel: t,
      location: "PrivateChannelRecipientsInviteTextButton",
      subscribeToGlobalHotkey: c
    });
  return y ? (0, r.jsx)(p.Button, el(er({}, u), {
    onClick: h,
    variant: "primary",
    buttonRef: d,
    text: o,
    "aria-label": o,
    icon: s,
    fullWidth: a
  })) : (0, r.jsx)(p.yRy, {
    targetElementRef: d,
    renderPopout: f,
    position: n,
    shouldShow: g,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: i,
    onRequestClose: () => b(false),
    animation: p.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, r.jsx)(p.Button, el(er({}, e, u), {
      onClick: m,
      variant: "primary",
      buttonRef: d,
      text: o,
      "aria-label": o,
      icon: s,
      fullWidth: a
    }))
  })
}

function eg(e) {
  let t = eb(e);
  return new Set((0, a.chain)(L.Z.getMutablePrivateChannels()).values().filter(e => (0, R.bc)(e.type)).filter(e => eb(e.recipients) === t).map(e => e.id).value())
}

function eb(e) {
  return JSON.stringify(e.sort())
}
ei(eu, "contextType", Chunk728285.ZP)