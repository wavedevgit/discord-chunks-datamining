/** Chunk was on 78528 **/
/** chunk id: 95550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => eg,
  N: () => em
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
  Chunk695184 = require("./695184.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk625788 = require("./625788.js"),
  Chunk662367 = require("./662367.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk286498 = require("./286498.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk587360 = require("./587360.js");

function el(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      el(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
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

function ea(e, t) {
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
let eo = (0, Chunk915089.Ld)(),
  ec = e => {
    var t;
    let {
      channel: n,
      onClose: r
    } = e, i = null != (t = (0, C.Ay)(n)) ? t : "", s = (0, u.bG)([G.Ay], () => {
      var e;
      return null != (e = G.Ay.lastMessageId(n.id)) ? e : n.id
    });
    return (0, l.jsx)(p.DUT, {
      onClick: () => {
        (0, P.uh)(ee.ME, n.id), r()
      },
      children: (0, l.jsxs)("div", {
        className: er.us,
        children: [(0, l.jsx)(p.euF, {
          src: (0, E.Y)(n),
          size: p._3J.SIZE_24,
          "aria-label": i
        }), (0, l.jsx)("span", {
          className: er.J2,
          children: i
        }), (0, l.jsx)("span", {
          className: er.Pd,
          children: o()(q.default.extractTimestamp(s)).fromNow()
        })]
      })
    })
  },
  eu = e => {
    let {
      onConfirm: t,
      channelIds: n
    } = e, r = ea(e, ["onConfirm", "channelIds"]), i = (0, u.yK)([M.A], () => Array.from(n).map(M.A.getChannel), [n]);
    return (0, l.jsx)(c.Modal, es(ei({
      title: en.intl.string(en.t.uFHxNd),
      subtitle: en.intl.string(en.t.rIsSqE),
      actions: [{
        variant: "secondary",
        text: en.intl.string(en.t["ETE/oC"]),
        onClick: r.onClose
      }, {
        variant: "primary",
        text: en.intl.string(en.t.KCNNJu),
        onClick: () => {
          t(), r.onClose()
        }
      }],
      input: (0, l.jsx)(p.Text, {
        variant: "text-md/normal",
        className: er.Jv,
        children: en.intl.string(en.t.cjE7wH)
      })
    }, r), {
      children: i.filter(z.Vq).sort((e, t) => {
        var n, r;
        let l = null != (n = e.lastMessageId) ? n : e.id,
          i = null != (r = t.lastMessageId) ? r : t.id;
        return q.default.compare(i, l)
      }).map(e => (0, l.jsx)(ec, {
        onClose: r.onClose,
        channel: e
      }, e.id))
    }))
  };
class ed extends(r = Chunk64700.PureComponent) {
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
    H.default.track(ee.HAw.OPEN_POPOUT, es(ei({}, t), {
      type: this._getAnalyticsEntryPoint().entryPointType,
      source: this._getAnalyticsEntryPoint().entryPointSource,
      is_friend: !this.isNotFriends()
    })), W._.subscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp), W._.subscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown)
  }
  componentWillUnmount() {
    W._.unsubscribe(ee.jej.SCROLL_PAGE_UP, this.scrollPageUp), W._.unsubscribe(ee.jej.SCROLL_PAGE_DOWN, this.scrollPageDown), null != this.copyTimeout && clearTimeout(this.copyTimeout), h.h.wait(() => A.A.close())
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
    } = Q.A.getCurrentConfig({
      location: "5326c5_1"
    }, {
      autoTrackExposure: false
    });
    b.Ay.createInvite(e.id, {
      max_age: t
    }, ee.PE1.GROUP_DM)
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
    return null != t && t.isStaff() ? ee.$aF : null != e && e.userLimit > 0 ? e.userLimit : ee.wLU
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
    } = this.props, n = this.getRemaining(), r = null != e && 0 === t.size || n < 0, l = t.size > 1 || null != e ? en.intl.string(en.t.ZGMNA8) : en.intl.string(en.t["6Urw1t"]);
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
      text: en.intl.string(en.t.OYkgVk),
      disabled: r,
      onClick: this.handleInviteUsers
    })
  }
  getTitle() {
    return this.isNotFriends() ? en.intl.string(en.t.Xjlbvs) : this.isPartyFull() ? en.intl.string(en.t.OtTQDz) : en.intl.string(en.t.CdNhGX)
  }
  getSubtitle() {
    let {
      channel: e,
      hasFriends: t
    } = this.props;
    if (!t) return en.intl.string(en.t["7orY6K"]);
    if (this.isPartyFull()) return;
    if (this.isNotFriends()) {
      let t = null != e ? e.getRecipientId() : null;
      if (null == t) throw Error("no recipient in DM");
      let n = F.default.getUser(t),
        r = null != n ? n.username : "";
      return en.intl.format(en.t["eg+R9x"], {
        username: r
      })
    }
    let n = this.getRemaining();
    return n <= 0 ? en.intl.formatToPlainString(en.t.xYr004, {
      number: this.getMaxParticipants()
    }) : en.intl.formatToPlainString(en.t.HrSDPF, {
      number: n
    })
  }
  handleKeyDown(e) {
    let {
      sections: t,
      selectedRow: n,
      selectedSection: r,
      selectedUsers: l,
      results: i,
      query: s,
      inImprovedDMExperiment: a
    } = this.props, {
      sectionVisibility: o
    } = this.state, {
      current: c
    } = this.searchBarRef;
    if (null == c) return;
    let u = n,
      d = r;
    switch (e.key) {
      case et.dh.BACKSPACE:
        (null == s || 0 === s.length) && l.size > 0 && (e.preventDefault(), e.stopPropagation(), this.handleRemoveTag(l.size - 1));
        break;
      case et.dh.ARROW_DOWN:
        e.preventDefault(), e.stopPropagation(), a ? (++u >= t[d].length && (u = 0, d + 1 >= t.length ? d = false !== o[0] ? 0 : d : false !== o[d + 1] && (d += 1)), this.handleSelectionChange(d, u)) : (++u >= i.length && (u = 0), this.handleSelectionChange(0, u));
        break;
      case et.dh.ARROW_UP:
        e.preventDefault(), e.stopPropagation(), a ? (--u < 0 && (d - 1 < 0 ? d = false !== o[t.length - 1] ? t.length - 1 : d : false !== o[d - 1] && (d -= 1), u = t[d].length - 1), this.handleSelectionChange(d, u)) : (--u < 0 && (u = i.length - 1), this.handleSelectionChange(0, u));
        break;
      case et.dh.ENTER:
        e.preventDefault(), e.stopPropagation(), d === k.A.FRIENDS && i.length > u && this.handleSelect(0, u)
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
        label: X.Ay.getName(t)
      })
    }), (0, l.jsxs)("div", {
      className: er.ON,
      children: [(0, l.jsx)(p.ksK, {
        inputRef: this.searchBarRef,
        autoFocus: true,
        fullWidth: true,
        placeholder: 0 === n.size ? en.intl.string(en.t.Wxnb6q) : "",
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
      children: en.intl.format(en.t.xYr004, {
        number: this.getMaxParticipants()
      })
    }) : null
  }
  getListProps() {
    let {
      query: e,
      hasFriends: t,
      results: n,
      inImprovedDMExperiment: r,
      sections: i
    } = this.props;
    if (this.isNotFriends() || !t || this.isPartyFull()) return;
    if (0 === n.length) return {
      sections: [1],
      sectionHeight: 0,
      rowHeight: 32,
      renderRow: () => (0, l.jsx)("div", {
        className: er.wV,
        children: (0, l.jsx)(p.Text, {
          variant: "text-md/normal",
          color: "text-muted",
          children: en.intl.string(en.t.SV4DJ1)
        })
      })
    };
    let s = {
      ref: this.scrollerRef,
      className: er.XG,
      innerClassName: er.bv,
      renderRow: this.renderRow,
      onScroll: this.handleScroll,
      paddingTop: 0,
      paddingBottom: 14,
      fade: true,
      role: true,
      innerRole: "listbox",
      innerId: eo,
      innerAriaMultiselectable: true,
      innerAriaOrientation: "vertical"
    };
    if (r) {
      var a, o, c;
      return ei({
        sections: "" === e ? [null == (a = i[k.A.FRIENDS]) ? true : a.length] : [null == (o = i[k.A.FRIENDS]) ? true : o.length, null == (c = i[k.A.GUILD_MEMBERS]) ? true : c.length],
        rowHeight: this.getImprovedDMRowHeight,
        renderSection: this.renderImprovedDMSection,
        sectionHeight: e => 0 === e ? 24 : 36
      }, s)
    }
    return ei({
      sections: [n.length],
      rowHeight: this.getRowHeight,
      renderSection: this.renderSection,
      sectionHeight: 0
    }, s)
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
      label: en.intl.string(en.t.t3O2BR),
      helperText: i.length > 0 ? en.intl.format(en.t.ZVdJMy, {
        numHours: "".concat(24)
      }) : true,
      children: (0, l.jsx)(p.e2O, {
        supportsCopy: K.p5,
        placeholder: (0, N.A)(en.intl.string(en.t.lPVBqP)),
        value: s ? n ? en.intl.string(en.t["6HzNgZ"]) : i : "",
        buttonColor: d.$n.Colors.BRAND,
        text: s ? r ? en.intl.string(en.t.q30c5i) : en.intl.string(en.t.OpuAlK) : en.intl.string(en.t.qzxqUf),
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
        r = null != n && B.A.getRelationshipType(n.id) === ee.eA$.PENDING_OUTGOING;
      return {
        actions: [{
          variant: "primary",
          text: r ? en.intl.string(en.t.xMH6vD) : en.intl.string(en.t["PMsq/b"]),
          disabled: r,
          onClick: () => null != n ? this.handleAddFriend(n) : null
        }]
      }
    }
    if (!e) return {
      actions: [{
        variant: "primary",
        text: en.intl.string(en.t.w5uwoI),
        onClick: this.handleAddFriendNavigation
      }]
    };
    if (this.isPartyFull()) return {};
    if (null == t) return {
      actionBarInput: n.size > 1 ? (0, l.jsx)(ep, {
        previewIcon: this.state.previewIcon,
        selectedUsers: n,
        channelName: this.state.newChannelName,
        onChange: this.handleChannelNameChange,
        onIconChange: this.handleIconChange,
        onIconRemove: this.handleIconRemove
      }) : true,
      actions: [{
        variant: "secondary",
        text: en.intl.string(en.t["ETE/oC"]),
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
      discordTag: X.Ay.getUserTag(e, {
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
    super(...e), el(this, "state", {
      separator: false,
      copied: false,
      newChannelName: "",
      previewIcon: true,
      sectionVisibility: {}
    }), el(this, "copyTimeout", true), el(this, "scrollerRef", i.createRef()), el(this, "searchBarRef", i.createRef()), el(this, "_mobileCloseRef", i.createRef()), el(this, "_searchCounter", 0), el(this, "_existingTimeout", null), el(this, "scrollPageUp", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageUp({
        animate: true
      })
    }), el(this, "scrollPageDown", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageDown({
        animate: true
      })
    }), el(this, "renderMobileCloseButton", () => (0, l.jsx)("div", {
      className: er.Lh,
      ref: this._mobileCloseRef,
      children: (0, l.jsx)(p.xpW, {
        containerRef: this._mobileCloseRef,
        children: (0, l.jsx)("div", {
          children: (0, l.jsx)(_.A, {
            className: er.RR,
            closeAction: this.props.onClose,
            keybind: "ESC"
          })
        })
      })
    })), el(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      let {
        results: n
      } = this.props;
      return 48 * (null != n[t])
    }), el(this, "getImprovedDMRowHeight", (e, t) => {
      let {
        sections: n
      } = this.props, {
        sectionVisibility: r
      } = this.state;
      returnfalse === r[e] ? 0 : 48 * (null != n[e][t])
    }), el(this, "renderRow", e => {
      var t;
      let {
        section: n,
        row: r
      } = e, {
        inImprovedDMExperiment: i,
        showFriendButton: s,
        sections: a,
        results: o,
        selectedUsers: c,
        selectedRow: u,
        selectedSection: d,
        hideDiscriminator: p,
        isStaffOnlyDM: h,
        channel: f,
        currentUser: g
      } = this.props, {
        sectionVisibility: m
      } = this.state;
      if (i) {
        if (false === m[n]) return null
      } else if (n > 0) return null;
      let b = i ? a[n][r] : o[r];
      if (null == b) return null;
      let {
        user: A,
        comparator: y
      } = b, _ = c.has(A.id), O = n === k.A.FRIENDS && !_ && 0 >= this.getRemaining();
      return (0, l.jsx)($.A, {
        section: n,
        row: r,
        user: A,
        hideDiscriminator: p,
        comparator: y,
        checked: _,
        disabled: O,
        selected: n === d && r === u,
        onClick: this.handleClick,
        onMessageClick: this.handleMessageClick,
        onMouseEnter: this.focusResult,
        "aria-posinset": r + 1,
        "aria-setsize": o.length,
        numSelected: c.size,
        showFriendButton: i && s,
        staffOverride: null != (t = (h || null == f) && A.isStaff() && (null == g ? true : g.isStaff())) && t
      }, A.id)
    }), el(this, "renderImprovedDMSection", e => {
      var t;
      let {
        section: n
      } = e, {
        sectionVisibility: r
      } = this.state;
      return (0, l.jsx)(ey, {
        section: n,
        heading: n === k.A.FRIENDS ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs),
        onToggleVisibility: this.handleToggleSectionVisibility,
        isOpen: null == (t = r[n]) || t
      }, n === k.A.FRIENDS ? en.intl.string(en.t.TdEu5X) : en.intl.string(en.t.y29JXs))
    }), el(this, "handleToggleSectionVisibility", e => {
      var t;
      let {
        sectionVisibility: n
      } = this.state;
      this.setState({
        sectionVisibility: es(ei({}, n), {
          [e]: !(null == (t = n[e]) || t)
        })
      })
    }), el(this, "forceFocus", () => {
      let e = this.searchBarRef.current;
      null == e || e.focus()
    }), el(this, "focusResult", (e, t) => {
      A.A.select(e, t)
    }), el(this, "handleSelect", (e, t) => {
      let {
        results: n,
        sections: r,
        channel: l,
        inImprovedDMExperiment: i
      } = this.props;
      if (null == t || null == e) A.A.clear(null == l ? true : l.id);
      else if (null != n) {
        let l = i ? r[e][t] : n[t];
        this.handleClick(l.user.id)
      }
    }), el(this, "handleSelectionChange", (e, t) => {
      A.A.select(e, t);
      let n = this.scrollerRef.current;
      null != n && n.scrollToIndex({
        section: e,
        row: t,
        padding: 8
      })
    }), el(this, "handleQueryChange", e => {
      let {
        channel: t,
        inImprovedDMExperiment: n
      } = this.props, r = (0, v.dI)(t);
      n && Y.A.requestMembers(null, e), A.A.search(e, null == t ? true : t.id), null != this._existingTimeout && clearTimeout(this._existingTimeout), this._existingTimeout = setTimeout(() => {
        H.default.track(ee.HAw.SEARCH_USER_LIST_STARTED, es(ei({}, r), {
          entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
          entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
          search_query_length: e.length
        })), this._searchCounter++
      }, 500)
    }), el(this, "handleRemoveTag", e => {
      let t = Array.from(this.props.selectedUsers);
      A.A.removeUser(t[e])
    }), el(this, "handleRemoveUser", e => {
      e.forEach(e => {
        A.A.removeUser(e)
      }), this.forceFocus()
    }), el(this, "handleClick", e => {
      let {
        selectedUsers: t,
        query: n,
        channel: r
      } = this.props;
      t.has(e) ? A.A.removeUser(e) : this.getRemaining() > 0 && (A.A.addUser(e), n.length > 0 && A.A.clear(null == r ? true : r.id)), this.forceFocus()
    }), el(this, "handleMessageClick", e => {
      let {
        onClose: t
      } = this.props;
      g.A.openPrivateChannel({
        recipientIds: [e],
        location: j.A.NEW_GROUP_DM_INVITE_MODAL
      }), t()
    }), el(this, "handleAddFriendNavigation", () => {
      m.A.transitionToSection(ee.m3P.ADD_FRIEND, {
        explicit: true
      }), this.props.onClose()
    }), el(this, "handleScroll", () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({
        separator: !e.isScrolledToTop()
      })
    }), el(this, "handleChannelNameChange", e => {
      this.setState({
        newChannelName: e
      })
    }), el(this, "handleIconChange", e => {
      let {
        imageUri: t
      } = e;
      this.setState({
        previewIcon: t
      })
    }), el(this, "handleIconRemove", () => {
      this.setState({
        previewIcon: null
      })
    }), el(this, "createNewDM", e => {
      let t = this._searchCounter,
        {
          channel: n
        } = this.props,
        r = (0, v.dI)(n),
        l = true;
      1 === e.length && (l = null == g.A._openCachedDMChannel(e[0])), H.default.track(ee.HAw.CREATE_DM_USER_LIST_CLICKED, es(ei({}, r), {
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
        "" !== this.state.newChannelName && (t.name = this.state.newChannelName), null != this.state.previewIcon && (t.icon = this.state.previewIcon), (null != t.name || null != t.icon) && g.A.updateChannel(e, t, j.A.NEW_GROUP_DM_INVITE_MODAL), H.default.track(ee.HAw.GDM_EDIT_INTERACTED, {
          channel_id: e,
          channel_type: ee.rbe.GROUP_DM,
          location: j.A.NEW_GROUP_DM_INVITE_MODAL,
          new_name_set: "" !== this.state.newChannelName,
          new_icon_set: null != this.state.previewIcon
        })
      })
    }), el(this, "pushToExistingDM", (e, t) => {
      let n = this._searchCounter,
        r = (0, v.dI)(e),
        l = U.A.getChannelId() === e.id;
      g.A.addRecipients(e.id, t, ee.ThZ.ADD_FRIENDS_TO_DM).then(n => {
        if (l) {
          if (e.isDM() && n !== e.id) return void f.A.call(n, false, true);
          f.A.ring(n, t, "dm_invite")
        }
      }), H.default.track(ee.HAw.CREATE_DM_USER_LIST_CLICKED, es(ei({}, r), {
        is_new_dm: true,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: t,
        num_searches: n,
        affinity_score: this._getUserAffinities(t).affinities
      }))
    }), el(this, "handleInviteUsers", () => {
      let {
        channel: e,
        selectedUsers: t,
        onClose: n
      } = this.props, r = Array.from(t);
      if (null != e) {
        let t = eb(Array.from(new Set([...e.recipients, ...r])));
        t.size > 0 ? (0, p.qfG)(n => (0, l.jsx)(eu, es(ei({}, n), {
          onConfirm: () => this.pushToExistingDM(e, r),
          channelIds: t
        })), {}, (0, p.TId)(this.context.appContext)) : this.pushToExistingDM(e, r)
      } else {
        let e = eb(r);
        r.length > 1 && e.size > 0 ? (0, p.qfG)(t => (0, l.jsx)(eu, es(ei({}, t), {
          onConfirm: () => this.createNewDM(r),
          channelIds: e
        })), {}, (0, p.TId)(this.context.appContext)) : this.createNewDM(r)
      }
      n()
    }), el(this, "handleCopyInvite", e => {
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
      }, 1e3), H.default.track(ee.HAw.COPY_INSTANT_INVITE, {
        server: null,
        channel: null != t ? t.id : null,
        channel_type: null != t ? t.type : null,
        location: ee.ThZ.ADD_FRIENDS_TO_DM,
        code: null != n ? n.code : null
      })
    }), el(this, "scrollToCounterSearchBarHeightChange", e => {
      var t, n;
      let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? true : t.call(n);
      null != r && (r.scrollTop = Math.max(0, r.scrollTop + e))
    })
  }
}

function ep(e) {
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
    className: er.zj,
    children: [(0, l.jsx)(I.X, {
      className: er.r9,
      channel: null,
      previewIcon: r,
      onIconChange: i,
      onIconRemove: s,
      analyticsLocations: o,
      petite: true,
      allowRemovingIcon: false
    }), (0, l.jsx)(p.Text, {
      className: er.hL,
      variant: "text-sm/medium",
      color: "text-muted",
      children: en.intl.string(en.t.YynaLK)
    }), (0, l.jsx)(p.ksK, {
      "aria-label": en.intl.string(en.t.YynaLK),
      name: "create-gdm-channel-name",
      placeholder: c,
      value: n,
      onChange: a
    })]
  })
}

function eh(e) {
  let {
    channel: t
  } = e, n = ea(e, ["channel"]), r = (0, u.cf)([k.h, L.A, V.A], () => {
    let e;
    return null != t && null != (e = L.A.getInvite(t.id)) && e.isExpired() && (e = null), es(ei({}, k.h.getState()), {
      invite: e,
      hideDiscriminator: V.A.hidePersonalInformation,
      hideInstantInvites: V.A.hideInstantInvites
    })
  }), i = (0, u.yK)([k.h], () => k.h.getSections()), {
    enabled: s,
    showFriendButton: a
  } = J.A.useConfig({
    location: "PrivateChannelRecipientsInvite"
  }), o = (0, u.bG)([F.default], () => F.default.getCurrentUser()), c = (0, u.bG)([F.default], () => {
    var e;
    return !!(null == (e = F.default.getCurrentUser()) ? true : e.isStaff()) && null != t && !!t.isDM() && t.recipients.every(e => {
      var t;
      return null == (t = F.default.getUser(e)) ? true : t.isStaff()
    })
  }, [t]);
  return (0, l.jsx)(ed, ei({
    channel: t,
    currentUser: o,
    isStaffOnlyDM: c,
    inImprovedDMExperiment: s,
    showFriendButton: a,
    sections: i
  }, n, r))
}

function ef(e) {
  let {
    channel: t,
    subscribeToGlobalHotkey: n
  } = e, r = "channel-invite-modal-".concat(null == t ? true : t.id), s = (0, p.Ry6)(r), a = i.useCallback(() => (0, p.mMO)(() => Promise.resolve(e => (0, l.jsx)(eh, es(ei({}, e), {
    channel: t
  }))), {
    modalKey: r
  }), [t, r]), o = i.useCallback(() => s ? (0, p.OoC)(r) : a(), [s, r, a]);
  return i.useEffect(() => (n && W._.subscribe(ee.jej.TOGGLE_DM_CREATE, o), () => {
    W._.unsubscribe(ee.jej.TOGGLE_DM_CREATE, o)
  }), [n, o]), (0, O.Ay)(() => {
    (0, w.u)()
  }), {
    showModal: a,
    toggleVisible: o
  }
}

function eg(e) {
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
  } = ef({
    channel: r,
    subscribeToGlobalHotkey: h
  }), b = (0, u.bG)([F.default], () => F.default.getUser(null == r ? true : r.getRecipientId()));
  return null != (t = null == b ? true : b.bot) && t || null != (n = null == b ? true : b.isProvisional) && n ? null : (0, l.jsx)(Z.Ay.Icon, {
    ref: f,
    onClick: m,
    icon: g,
    className: a,
    iconClassName: s,
    tooltip: c,
    tooltipPosition: d
  })
}

function em(e) {
  let {
    channel: t,
    fullWidth: n = false,
    text: r,
    icon: s,
    subscribeToGlobalHotkey: a = false
  } = e, o = ea(e, ["channel", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]), c = i.useRef(null), {
    showModal: u
  } = ef({
    channel: t,
    subscribeToGlobalHotkey: a
  });
  return (0, l.jsx)(p.Button, es(ei({}, o), {
    onClick: u,
    variant: "primary",
    buttonRef: c,
    text: r,
    "aria-label": r,
    icon: s,
    fullWidth: n
  }))
}

function eb(e) {
  let t = eA(e);
  return new Set((0, s.chain)(M.A.getMutablePrivateChannels()).values().filter(e => (0, D.MK)(e.type)).filter(e => eA(e.recipients) === t).map(e => e.id).value())
}

function eA(e) {
  return JSON.stringify(e.sort())
}

function ey(e) {
  let {
    section: t,
    heading: n,
    isOpen: r,
    onToggleVisibility: i
  } = e;
  return (0, l.jsxs)(p.DUT, {
    style: {
      "--custom-invite-section-header-height": 24,
      "--custom-invite-section-header-gap": 12 * (0 !== t),
      "--custom-icon-collapse-rotate": r ? "0deg" : "-90deg"
    },
    className: er.bV,
    onClick: () => i(t),
    children: [(0, l.jsx)(p.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: n
    }), (0, l.jsx)(c.abt, {
      size: "md",
      color: "currentColor",
      className: er.vP
    })]
  })
}
el(ed, "contextType", Chunk267102.Ay)