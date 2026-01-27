/** Chunk was on 41727 **/
/** chunk id: 95550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eh,
  N: () => ef
}), require("./638769.js"), require("./65821.js"), require("./321073.js"), require("./896048.js"), require("./747238.js"), require("./457529.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk387755 = require("./387755.js"),
  Chunk308528 = require("./308528.js"),
  Chunk711950 = require("./711950.js"),
  Chunk846293 = require("./846293.js"),
  Chunk888906 = require("./888906.js"),
  Chunk49229 = require("./49229.js"),
  Chunk684136 = require("./684136.jsx"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk915089 = require("./915089.js"),
  Chunk66442 = require("./66442.jsx"),
  Chunk279208 = require("./279208.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk219271 = require("./219271.js"),
  Chunk21119 = require("./21119.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk958590 = require("./958590.js"),
  Chunk584777 = require("./584777.js"),
  Chunk383501 = require("./383501.js"),
  Chunk222823 = require("./222823.js"),
  Chunk994500 = require("./994500.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk203982 = require("./203982.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk662367 = require("./662367.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk286498 = require("./286498.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587360 = require("./587360.js");

function en(e, t, n) {
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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      en(e, t, n[t])
    })
  }
  return e
}

function el(e, t) {
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

function ei(e, t) {
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
}
let es = (0, Chunk915089.Ld)(),
  ea = e => {
    var t;
    let {
      channel: n,
      onClose: r
    } = e, i = null != (t = (0, C.Ay)(n)) ? t : "", s = (0, u.bG)([U.Ay], () => {
      var e;
      return null != (e = U.Ay.lastMessageId(n.id)) ? e : n.id
    });
    return (0, l.jsx)(p.DUT, {
      onClick: () => {
        (0, P.uh)(Z.ME, n.id), r()
      },
      children: (0, l.jsxs)("div", {
        className: et.us,
        children: [(0, l.jsx)(p.euF, {
          src: (0, E.Y)(n),
          size: p._3J.SIZE_24,
          "aria-label": i
        }), (0, l.jsx)("span", {
          className: et.J2,
          children: i
        }), (0, l.jsx)("span", {
          className: et.Pd,
          children: o()(Y.default.extractTimestamp(s)).fromNow()
        })]
      })
    })
  },
  eo = e => {
    let {
      onConfirm: t,
      channelIds: n
    } = e, r = ei(e, ["onConfirm", "channelIds"]), i = (0, u.yK)([M.A], () => Array.from(n).map(M.A.getChannel), [n]);
    return (0, l.jsx)(c.Modal, el(er({
      title: ee.intl.string(ee.t.uFHxNd),
      subtitle: ee.intl.string(ee.t.rIsSqE),
      actions: [{
        variant: "secondary",
        text: ee.intl.string(ee.t["ETE/oC"]),
        onClick: r.onClose
      }, {
        variant: "primary",
        text: ee.intl.string(ee.t.KCNNJu),
        onClick: () => {
          t(), r.onClose()
        }
      }],
      input: (0, l.jsx)(p.Text, {
        variant: "text-md/normal",
        className: et.Jv,
        children: ee.intl.string(ee.t.cjE7wH)
      })
    }, r), {
      children: i.filter(z.Vq).sort((e, t) => {
        var n, r;
        let l = null != (n = e.lastMessageId) ? n : e.id,
          i = null != (r = t.lastMessageId) ? r : t.id;
        return Y.default.compare(i, l)
      }).map(e => (0, l.jsx)(ea, {
        onClose: r.onClose,
        channel: e
      }, e.id))
    }))
  };
class ec extends(r = Chunk64700.PureComponent) {
  _getAnalyticsEntryPoint() {
    let {
      channel: e
    } = this.props, t = "", n = "";
    return null != e ? e.isDM() ? (t = "Add Friends to DM", n = "DM") : (t = "Add Friends to DM", n = "Group DM") : (t = "New Group DM", n = "Friends List"), {
      entryPointType: t,
      entryPointSource: n
    }
  }
  componentDidMount() {
    let {
      channel: e
    } = this.props;
    h.h.wait(() => A.A.open(null == e ? true : e.id));
    let t = (0, v.dI)(e);
    H.default.track(Z.HAw.OPEN_POPOUT, el(er({}, t), {
      type: this._getAnalyticsEntryPoint().entryPointType,
      source: this._getAnalyticsEntryPoint().entryPointSource,
      is_friend: !this.isNotFriends()
    })), W._.subscribe(Z.jej.SCROLL_PAGE_UP, this.scrollPageUp), W._.subscribe(Z.jej.SCROLL_PAGE_DOWN, this.scrollPageDown)
  }
  componentWillUnmount() {
    W._.unsubscribe(Z.jej.SCROLL_PAGE_UP, this.scrollPageUp), W._.unsubscribe(Z.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), h.h.wait(() => A.A.close())
  }
  isNotFriends() {
    let {
      channel: e,
      isStaffOnlyDM: t
    } = this.props;
    if (null == e || !e.isDM()) returnfalse;
    let n = e.getRecipientId();
    if (null == n) throw Error("no recipient in DM");
    return !B.A.isFriend(n) && !t
  }
  createInvite() {
    let {
      channel: e
    } = this.props;
    if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return;
    let {
      inviteMaxAgeSeconds: t
    } = X.A.getCurrentConfig({
      location: "5326c5_1"
    }, {
      autoTrackExposure: false
    });
    b.Ay.createInvite(e.id, {
      max_age: t
    }, Z.PE1.GROUP_DM)
  }
  isPartyFull() {
    let {
      channel: e
    } = this.props;
    return null != e && e.recipients.length + 1 >= this.getMaxParticipants()
  }
  getMaxParticipants() {
    let {
      channel: e
    } = this.props, t = F.default.getCurrentUser();
    return null != t && t.isStaff() ? Z.$aF : null != e && e.userLimit > 0 ? e.userLimit : Z.wLU
  }
  getRemaining() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props, n = (null == e ? 0 : e.recipients.length) + 1;
    return this.getMaxParticipants() - t.size - n
  }
  getCreateGroupButtonAction() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props, n = this.getRemaining(), r = null != e && 0 === t.size || n < 0, l = t.size > 1 || null != e ? ee.intl.string(ee.t.ZGMNA8) : ee.intl.string(ee.t["6Urw1t"]);
    return {
      variant: "primary",
      disabled: r,
      onClick: this.handleInviteUsers,
      text: l
    }
  }
  renderAddUsersButton() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props;
    if (null == e || e.isDM()) return;
    let n = this.getRemaining(),
      r = 0 === t.size || n < 0;
    return (0, l.jsx)(p.Button, {
      variant: "primary",
      text: ee.intl.string(ee.t.OYkgVk),
      disabled: r,
      onClick: this.handleInviteUsers
    })
  }
  getTitle() {
    return this.isNotFriends() ? ee.intl.string(ee.t.Xjlbvs) : this.isPartyFull() ? ee.intl.string(ee.t.OtTQDz) : ee.intl.string(ee.t.CdNhGX)
  }
  getSubtitle() {
    let {
      channel: e,
      hasFriends: t
    } = this.props;
    if (!t) return ee.intl.string(ee.t["7orY6K"]);
    if (this.isPartyFull()) return;
    if (this.isNotFriends()) {
      let t = null != e ? e.getRecipientId() : null;
      if (null == t) throw Error("no recipient in DM");
      let n = F.default.getUser(t),
        r = null != n ? n.username : "";
      return ee.intl.format(ee.t["eg+R9x"], {
        username: r
      })
    }
    let n = this.getRemaining();
    return n <= 0 ? ee.intl.formatToPlainString(ee.t.xYr004, {
      number: this.getMaxParticipants()
    }) : ee.intl.formatToPlainString(ee.t.HrSDPF, {
      number: n
    })
  }
  handleKeyDown(e) {
    let {
      selectedRow: t,
      selectedUsers: n,
      results: r,
      query: l
    } = this.props, {
      current: i
    } = this.searchBarRef;
    if (null == i) return;
    let s = t;
    switch (e.key) {
      case $.dh.BACKSPACE:
        (null == l || 0 === l.length) && n.size > 0 && (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(n.size - 1));
        break;
      case $.dh.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), ++s >= r.length && (s = 0), this.handleSelectionChange(s);
        break;
      case $.dh.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), --s < 0 && (s = r.length - 1), this.handleSelectionChange(s);
        break;
      case $.dh.ENTER:
        e.preventDefault(), e.stopPropagation(), r.length > s && this.handleSelect(s)
    }
  }
  renderSearchBar() {
    let {
      query: e,
      hasFriends: t,
      selectedUsers: n
    } = this.props;
    if (!t || this.isNotFriends() || this.isPartyFull()) return null;
    let r = [];
    return n.forEach(e => {
      let t = F.default.getUser(e);
      null != t && r.push({
        id: e,
        label: q.Ay.getName(t)
      })
    }), (0, l.jsxs)("div", {
      className: et.ON,
      children: [(0, l.jsx)(p.ksK, {
        inputRef: this.searchBarRef,
        autoFocus: true,
        fullWidth: true,
        placeholder: 0 === n.size ? ee.intl.string(ee.t.Wxnb6q) : "",
        disabled: this.isPartyFull(),
        value: e,
        leading: {
          type: "tags",
          items: r,
          onRemove: this.handleRemoveUser
        },
        onChange: this.handleQueryChange,
        onKeyDown: this.handleKeyDown.bind(this)
      }), this.renderAddUsersButton()]
    })
  }
  renderBody() {
    let {
      hasFriends: e
    } = this.props;
    return this.isNotFriends() || !e ? null : this.isPartyFull() ? (0, l.jsx)("div", {
      children: ee.intl.format(ee.t.xYr004, {
        number: this.getMaxParticipants()
      })
    }) : null
  }
  getListProps() {
    let {
      hasFriends: e,
      results: t
    } = this.props;
    if (!(this.isNotFriends() || !e || this.isPartyFull())) return 0 === t.length ? {
      sections: [1],
      sectionHeight: 0,
      rowHeight: 32,
      renderRow: () => (0, l.jsx)("div", {
        className: et.wV,
        children: (0, l.jsx)(p.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: ee.intl.string(ee.t.SV4DJ1)
        })
      })
    } : {
      ref: this.scrollerRef,
      sections: [t.length],
      className: et.XG,
      innerClassName: et.bv,
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
      innerId: es,
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
      copied: r
    } = this.state;
    if (null == e || !e.isMultiUserDM() || this.isPartyFull()) return null;
    let i = null != t ? (0, N.A)(t.code) : "",
      s = i.length > 0;
    return (0, l.jsx)(p.D0$, {
      label: ee.intl.string(ee.t.t3O2BR),
      helperText: i.length > 0 ? ee.intl.format(ee.t.ZVdJMy, {
        numHours: "".concat(24)
      }) : true,
      children: (0, l.jsx)(p.e2O, {
        supportsCopy: K.p5,
        placeholder: (0, N.A)(ee.intl.string(ee.t.lPVBqP)),
        value: s ? n ? ee.intl.string(ee.t["6HzNgZ"]) : i : "",
        buttonColor: d.$n.Colors.BRAND,
        text: s ? r ? ee.intl.string(ee.t.q30c5i) : ee.intl.string(ee.t.OpuAlK) : ee.intl.string(ee.t.qzxqUf),
        mode: r ? p.qCr.SUCCESS : p.qCr.DEFAULT,
        onCopy: () => {
          s ? this.handleCopyInvite(i) : this.createInvite()
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
      let e = null != t ? t.getRecipientId() : null;
      if (null == e) throw Error("no recipient in DM");
      let n = F.default.getUser(e),
        r = null != n && B.A.getRelationshipType(n.id) === Z.eA$.PENDING_OUTGOING;
      return {
        actions: [{
          variant: "primary",
          text: r ? ee.intl.string(ee.t.xMH6vD) : ee.intl.string(ee.t["PMsq/b"]),
          disabled: r,
          onClick: () => null != n ? this.handleAddFriend(n) : null
        }]
      }
    }
    if (!e) return {
      actions: [{
        variant: "primary",
        text: ee.intl.string(ee.t.w5uwoI),
        onClick: this.handleAddFriendNavigation
      }]
    };
    if (this.isPartyFull()) return {};
    if (null == t) return {
      actionBarInput: n.size > 1 ? (0, l.jsx)(eu, {
        previewIcon: this.state.previewIcon,
        selectedUsers: n,
        channelName: this.state.newChannelName,
        onChange: this.handleChannelNameChange,
        onIconChange: this.handleIconChange,
        onIconRemove: this.handleIconRemove
      }) : true,
      actions: [{
        variant: "secondary",
        text: ee.intl.string(ee.t["ETE/oC"]),
        onClick: this.props.onClose
      }, this.getCreateGroupButtonAction()]
    };
    if (t.isDM()) return {
      actions: [this.getCreateGroupButtonAction()]
    };
    let r = this.getInviteLinkFooter();
    return null != r ? {
      actionBarInput: r
    } : {}
  }
  render() {
    var e;
    let {
      transitionState: t,
      onClose: n
    } = this.props, {
      actionBarInput: r,
      actions: i
    } = this.getFooterProps();
    return (0, l.jsx)(c.Modal, {
      transitionState: null != t ? t : p.ip4.ENTERED,
      onClose: async () => await n(),
      title: this.getTitle(),
      subtitle: this.getSubtitle(),
      input: null != (e = this.renderSearchBar()) ? e : true,
      actionBarInput: r,
      listProps: this.getListProps(),
      actions: null != i ? i : [],
      children: this.renderBody()
    })
  }
  handleAddFriend(e) {
    this.props.onClose(), y.A.sendRequest({
      discordTag: q.Ay.getUserTag(e, {
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
        let n = R.A.getUserAffinity(e);
        return null != (t = null == n ? true : n.communicationProbability) ? t : false
      })
    }
  }
  constructor(...e) {
    super(...e), en(this, "state", {
      separator: false,
      copied: false,
      newChannelName: "",
      previewIcon: true
    }), en(this, "copyTimeout", true), en(this, "scrollerRef", i.createRef()), en(this, "searchBarRef", i.createRef()), en(this, "_mobileCloseRef", i.createRef()), en(this, "_searchCounter", 0), en(this, "_existingTimeout", null), en(this, "scrollPageUp", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageUp({
        animate: true
      })
    }), en(this, "scrollPageDown", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageDown({
        animate: true
      })
    }), en(this, "renderMobileCloseButton", () => (0, l.jsx)("div", {
      className: et.Lh,
      ref: this._mobileCloseRef,
      children: (0, l.jsx)(p.xpW, {
        containerRef: this._mobileCloseRef,
        children: (0, l.jsx)("div", {
          children: (0, l.jsx)(_.A, {
            className: et.RR,
            closeAction: this.props.onClose,
            keybind: "ESC"
          })
        })
      })
    })), en(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      let {
        results: n
      } = this.props;
      return 48 * (null != n[t])
    }), en(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        results: r,
        selectedUsers: i,
        selectedRow: s,
        hideDiscriminator: a
      } = this.props, o = r[n];
      if (null == o) return null;
      let {
        user: c,
        comparator: u
      } = o, d = i.has(c.id), p = !d && 0 >= this.getRemaining();
      return (0, l.jsx)(Q.A, {
        row: n,
        user: c,
        hideDiscriminator: a,
        comparator: u,
        checked: d,
        disabled: p,
        selected: n === s,
        onClick: this.handleClick,
        onMouseEnter: this.focusResult,
        "aria-posinset": n + 1,
        "aria-setsize": r.length
      }, c.id)
    }), en(this, "forceFocus", () => {
      let e = this.searchBarRef.current;
      null == e || e.focus()
    }), en(this, "focusResult", e => {
      A.A.select(e)
    }), en(this, "handleSelect", e => {
      let {
        results: t,
        channel: n
      } = this.props;
      null == e ? A.A.clear(null == n ? true : n.id) : null != t && this.handleClick(t[e].user.id)
    }), en(this, "handleSelectionChange", e => {
      A.A.select(e);
      let t = this.scrollerRef.current;
      null != t && t.scrollToIndex({
        section: 0,
        row: e,
        padding: 8
      })
    }), en(this, "handleQueryChange", e => {
      let {
        channel: t
      } = this.props, n = (0, v.dI)(t);
      A.A.search(e, null == t ? true : t.id), null != this._existingTimeout && clearTimeout(this._existingTimeout), this._existingTimeout = setTimeout(() => {
        H.default.track(Z.HAw.SEARCH_USER_LIST_STARTED, el(er({}, n), {
          entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
          entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
          search_query_length: e.length
        })), this._searchCounter++
      }, 500)
    }), en(this, "handleRemoveTag", e => {
      let t = Array.from(this.props.selectedUsers);
      A.A.removeUser(t[e])
    }), en(this, "handleRemoveUser", e => {
      e.forEach(e => {
        A.A.removeUser(e)
      }), this.forceFocus()
    }), en(this, "handleClick", e => {
      let {
        selectedUsers: t,
        query: n,
        channel: r
      } = this.props;
      t.has(e) ? A.A.removeUser(e) : this.getRemaining() > 0 && (A.A.addUser(e), n.length > 0 && A.A.clear(null == r ? true : r.id)), this.forceFocus()
    }), en(this, "handleAddFriendNavigation", () => {
      m.A.transitionToSection(Z.m3P.ADD_FRIEND, {
        explicit: true
      }), this.props.onClose()
    }), en(this, "handleScroll", () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({
        separator: !e.isScrolledToTop()
      })
    }), en(this, "handleChannelNameChange", e => {
      this.setState({
        newChannelName: e
      })
    }), en(this, "handleIconChange", e => {
      let {
        imageUri: t
      } = e;
      this.setState({
        previewIcon: t
      })
    }), en(this, "handleIconRemove", () => {
      this.setState({
        previewIcon: null
      })
    }), en(this, "createNewDM", e => {
      let t = this._searchCounter,
        {
          channel: n
        } = this.props,
        r = (0, v.dI)(n),
        l = true;
      1 === e.length && (l = null == g.A._openCachedDMChannel(e[0])), H.default.track(Z.HAw.CREATE_DM_USER_LIST_CLICKED, el(er({}, r), {
        is_new_dm: l,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: e,
        num_searches: t,
        affinity_score: this._getUserAffinities(e).affinities,
        name_is_set: "" !== this.state.newChannelName,
        icon_is_set: null != this.state.previewIcon
      })), g.A.openPrivateChannel({
        recipientIds: e,
        location: "New Group DM"
      }).then(e => {
        let t = {};
        "" !== this.state.newChannelName && (t.name = this.state.newChannelName), null != this.state.previewIcon && (t.icon = this.state.previewIcon), (null != t.name || null != t.icon) && g.A.updateChannel(e, t, j.A.NEW_GROUP_DM_INVITE_MODAL), H.default.track(Z.HAw.GDM_EDIT_INTERACTED, {
          channel_id: e,
          channel_type: Z.rbe.GROUP_DM,
          location: j.A.NEW_GROUP_DM_INVITE_MODAL,
          new_name_set: "" !== this.state.newChannelName,
          new_icon_set: null != this.state.previewIcon
        })
      })
    }), en(this, "pushToExistingDM", (e, t) => {
      let n = this._searchCounter,
        r = (0, v.dI)(e),
        l = G.A.getChannelId() === e.id;
      g.A.addRecipients(e.id, t, Z.ThZ.ADD_FRIENDS_TO_DM).then(n => {
        if (l) {
          if (e.isDM() && n !== e.id) return void f.A.call(n, false, true);
          f.A.ring(n, t, "dm_invite")
        }
      }), H.default.track(Z.HAw.CREATE_DM_USER_LIST_CLICKED, el(er({}, r), {
        is_new_dm: true,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: t,
        num_searches: n,
        affinity_score: this._getUserAffinities(t).affinities
      }))
    }), en(this, "handleInviteUsers", () => {
      let {
        channel: e,
        selectedUsers: t,
        onClose: n
      } = this.props, r = Array.from(t);
      if (null != e) {
        let t = eg(Array.from(new Set([...e.recipients, ...r])));
        t.size > 0 ? (0, p.qfG)(n => (0, l.jsx)(eo, el(er({}, n), {
          onConfirm: () => this.pushToExistingDM(e, r),
          channelIds: t
        })), {}, (0, p.TId)(this.context.appContext)) : this.pushToExistingDM(e, r)
      } else {
        let e = eg(r);
        r.length > 1 && e.size > 0 ? (0, p.qfG)(t => (0, l.jsx)(eo, el(er({}, t), {
          onConfirm: () => this.createNewDM(r),
          channelIds: e
        })), {}, (0, p.TId)(this.context.appContext)) : this.createNewDM(r)
      }
      n()
    }), en(this, "handleCopyInvite", e => {
      let {
        channel: t,
        invite: n
      } = this.props;
      null != n && (0, K.C)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
        copied: true
      }), this.copyTimeout = setTimeout(() => {
        this.setState({
          copied: false
        })
      }, 1e3), H.default.track(Z.HAw.COPY_INSTANT_INVITE, {
        server: null,
        channel: null != t ? t.id : null,
        channel_type: null != t ? t.type : null,
        location: Z.ThZ.ADD_FRIENDS_TO_DM,
        code: null != n ? n.code : null
      })
    }), en(this, "scrollToCounterSearchBarHeightChange", e => {
      var t, n;
      let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? true : t.call(n);
      null != r && (r.scrollTop = Math.max(0, r.scrollTop + e))
    })
  }
}

function eu(e) {
  let {
    selectedUsers: t,
    channelName: n,
    previewIcon: r,
    onIconChange: i,
    onIconRemove: s,
    onChange: a
  } = e, {
    analyticsLocations: o
  } = (0, x.Ay)(j.A.NEW_GROUP_DM_INVITE_MODAL), c = (0, C.Jo)(Array.from(t), F.default, B.A);
  return (0, l.jsxs)("div", {
    className: et.zj,
    children: [(0, l.jsx)(I.X, {
      className: et.r9,
      channel: null,
      previewIcon: r,
      onIconChange: i,
      onIconRemove: s,
      analyticsLocations: o,
      petite: true,
      allowRemovingIcon: false
    }), (0, l.jsx)(p.Text, {
      className: et.hL,
      variant: "text-sm/medium",
      color: "text-muted",
      children: ee.intl.string(ee.t.YynaLK)
    }), (0, l.jsx)(p.ksK, {
      "aria-label": ee.intl.string(ee.t.YynaLK),
      name: "create-gdm-channel-name",
      placeholder: c,
      value: n,
      onChange: a
    })]
  })
}

function ed(e) {
  let {
    channel: t
  } = e, n = ei(e, ["channel"]), r = (0, u.cf)([k.A, L.A, V.A], () => {
    let e;
    return null != t && null != (e = L.A.getInvite(t.id)) && e.isExpired() && (e = null), el(er({}, k.A.getState()), {
      invite: e,
      hideDiscriminator: V.A.hidePersonalInformation,
      hideInstantInvites: V.A.hideInstantInvites
    })
  }), i = (0, u.bG)([F.default], () => {
    var e;
    return !!(null == (e = F.default.getCurrentUser()) ? true : e.isStaff()) && null != t && !!t.isDM() && t.recipients.every(e => {
      var t;
      return null == (t = F.default.getUser(e)) ? true : t.isStaff()
    })
  }, [t]);
  return (0, l.jsx)(ec, er({
    channel: t,
    isStaffOnlyDM: i
  }, n, r))
}

function ep(e) {
  let {
    channel: t,
    subscribeToGlobalHotkey: n
  } = e, r = "channel-invite-modal-".concat(null == t ? true : t.id), s = (0, p.Ry6)(r), a = i.useCallback(() => (0, p.mMO)(() => Promise.resolve(e => (0, l.jsx)(ed, el(er({}, e), {
    channel: t
  }))), {
    modalKey: r
  }), [t, r]), o = i.useCallback(() => s ? (0, p.OoC)(r) : a(), [s, r, a]);
  return i.useEffect(() => (n && W._.subscribe(Z.jej.TOGGLE_DM_CREATE, o), () => {
    W._.unsubscribe(Z.jej.TOGGLE_DM_CREATE, o)
  }), [n, o]), (0, O.Ay)(() => {
    (0, w.u)()
  }), {
    showModal: a,
    toggleVisible: o
  }
}

function eh(e) {
  var t, n;
  let {
    channel: r,
    iconClassName: s,
    className: a,
    icon: o,
    tooltip: c,
    tooltipPosition: d = "bottom",
    subscribeToGlobalHotkey: h = false
  } = e, f = i.useRef(null), g = null != o ? o : null == r ? p.ggM : p.DpX, {
    showModal: m
  } = ep({
    channel: r,
    subscribeToGlobalHotkey: h
  }), b = (0, u.bG)([F.default], () => F.default.getUser(null == r ? true : r.getRecipientId()));
  return null != (t = null == b ? true : b.bot) && t || null != (n = null == b ? true : b.isProvisional) && n ? null : (0, l.jsx)(J.Ay.Icon, {
    ref: f,
    onClick: m,
    icon: g,
    className: a,
    iconClassName: s,
    tooltip: c,
    tooltipPosition: d
  })
}

function ef(e) {
  let {
    channel: t,
    fullWidth: n = false,
    text: r,
    icon: s,
    subscribeToGlobalHotkey: a = false
  } = e, o = ei(e, ["channel", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]), c = i.useRef(null), {
    showModal: u
  } = ep({
    channel: t,
    subscribeToGlobalHotkey: a
  });
  return (0, l.jsx)(p.Button, el(er({}, o), {
    onClick: u,
    variant: "primary",
    buttonRef: c,
    text: r,
    "aria-label": r,
    icon: s,
    fullWidth: n
  }))
}

function eg(e) {
  let t = em(e);
  return new Set((0, s.chain)(M.A.getMutablePrivateChannels()).values().filter(e => (0, D.MK)(e.type)).filter(e => em(e.recipients) === t).map(e => e.id).value())
}

function em(e) {
  return JSON.stringify(e.sort())
}
en(ec, "contextType", Chunk267102.Ay)