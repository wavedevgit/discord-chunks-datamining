/** Chunk was on web.js **/
/** chunk id: 518311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eA,
  l: () => eN
}), require("./642613.js"), require("./415506.js"), require("./539854.js"), require("./388685.js"), require("./35282.js"), require("./49124.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk913527 = require("./913527.js"),
  u = require.n(Chunk913527),
  Chunk873546 = require("./873546.js"),
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
  Chunk794433 = require("./794433.jsx"),
  Chunk493773 = require("./493773.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk367907 = require("./367907.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk429090 = require("./429090.js"),
  Chunk912114 = require("./912114.jsx"),
  Chunk366980 = require("./366980.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk382314 = require("./382314.js"),
  Chunk20493 = require("./20493.js");

function es(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      es(e, t, n[t])
    })
  }
  return e
}

function ec(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function eu(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ec(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ed(e, t) {
  if (null == e) return {};
  var n, r, i = ef(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ef(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let e_ = 48,
  ep = 42,
  eh = 24,
  em = (0, Chunk313201.hQ)(),
  eg = (0, Chunk313201.hQ)(),
  eE = 110;

function eb(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsxs)(w.Z, {
    align: w.Z.Align.CENTER,
    justify: w.Z.Justify.CENTER,
    direction: w.Z.Direction.VERTICAL,
    className: s()(eo.errorState, t),
    children: [(0, i.jsx)("div", {
      className: s()(eo.errorStateIcon, ea.marginBottom20)
    }), n]
  })
}
let ey = e => {
    var t;
    let {
      channel: n,
      onClose: r
    } = e, o = null != (t = (0, P.ZP)(n)) ? t : "", a = (0, f.e7)([H.ZP], () => {
      var e;
      return null != (e = H.ZP.lastMessageId(n.id)) ? e : n.id
    });
    return (0, i.jsx)(p.P3F, {
      onClick: () => {
        (0, k.XU)(er.ME, n.id), r()
      },
      children: (0, i.jsxs)("div", {
        className: eo.confirmChannelItemContainer,
        children: [(0, i.jsx)(p.qEK, {
          src: (0, R.x)(n),
          size: p.EFr.SIZE_24,
          "aria-label": o
        }), (0, i.jsx)("span", {
          className: eo.confirmChannelName,
          children: o
        }), (0, i.jsx)("span", {
          className: eo.lastActiveTimestamp,
          children: u()(J.default.extractTimestamp(a)).fromNow()
        })]
      })
    })
  },
  eO = e => {
    var {
      onConfirm: t,
      channelIds: n
    } = e, r = ed(e, ["onConfirm", "channelIds"]);
    let o = (0, f.Wu)([B.Z], () => Array.from(n).map(B.Z.getChannel), [n]);
    return (0, i.jsxs)(p.ConfirmModal, eu(el({
      header: ei.intl.string(ei.t.uFHxNT),
      confirmText: ei.intl.string(ei.t.KCNNJi),
      cancelText: ei.intl.string(ei.t["ETE/oK"]),
      onConfirm: t,
      confirmButtonColor: _.zx.Colors.BRAND
    }, r), {
      children: [(0, i.jsx)(p.Text, {
        variant: "text-md/normal",
        children: ei.intl.string(ei.t.rIsSqK)
      }), (0, i.jsx)(p.vwX, {
        className: eo.selectExistingFormHeader,
        children: ei.intl.string(ei.t.cjE7wM)
      }), (0, i.jsx)(p.Ttm, {
        className: eo.confirmInviteScroller,
        children: o.filter(Q.lm).sort((e, t) => {
          var n, r;
          let i = null != (n = e.lastMessageId) ? n : e.id,
            o = null != (r = t.lastMessageId) ? r : t.id;
          return J.default.compare(o, i)
        }).map(e => (0, i.jsx)(ey, {
          onClose: r.onClose,
          channel: e
        }, e.id))
      })]
    }))
  };
class ev extends(r = Chunk73800.PureComponent) {
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
    Chunk626135.default.track(Chunk981631.rMx.OPEN_POPOUT, eu(el({}, exports), {
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
  renderCreateGroupButton() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props, n = this.getRemaining(), r = null != module && 0 === exports.size || require < 0, o = exports.size > 1 || null != module ? Chunk388032.intl.string(Chunk388032.t.ZGMNAw) : Chunk388032.intl.string(Chunk388032.t["6Urw1t"]);
    return (0, Chunk255367.jsx)(Chunk481060.zxk, {
      variant: "primary",
      fullWidth: true,
      disabled: r,
      onClick: this.handleInviteUsers,
      text: Chunk73800
    })
  }
  renderAddUsersButton() {
    let {
      channel: e,
      selectedUsers: t
    } = this.props;
    if (null == module || module.isDM()) return;
    let n = this.getRemaining(),
      r = 0 === exports.size || require < 0;
    return (0, Chunk255367.jsx)("div", {
      className: Chunk382314.addButton,
      children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.OYkgVl),
        disabled: r,
        onClick: this.handleInviteUsers
      })
    })
  }
  renderSubtitle() {
    if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
    let e = this.getRemaining(),
      t = module <= 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.xYr009, {
        number: this.getMaxParticipants()
      }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.HrSDPD, {
        number: module
      });
    return (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      className: s()(Chunk382314.subtitle, {
        [Chunk382314.subtitleWarning]: module < 0
      }, Chunk20493.marginTop4),
      children: exports
    })
  }
  renderSearchBar() {
    var e;
    let {
      query: t,
      hasFriends: n,
      results: r,
      selectedRow: o,
      selectedUsers: a
    } = this.props;
    if (!require || this.isNotFriends()) return null;
    let s = [];
    return Chunk120356.forEach(e => {
      let t = K.default.getUser(e);
      null != t && s.push($.ZP.getName(t))
    }), (0, Chunk255367.jsxs)("div", {
      className: Chunk382314.searchBar,
      children: [(0, Chunk255367.jsx)(Chunk794433.Z, {
        ref: this.searchBarRef,
        className: Chunk382314.searchBarComponent,
        autoFocus: true,
        placeholder: 0 === Chunk120356.size ? Chunk388032.intl.string(Chunk388032.t.Wxnb6u) : "",
        disabled: this.isPartyFull(),
        size: Chunk794433.Z.Sizes.MEDIUM,
        maxHeight: this.props.inBornThisNamedExperiment ? eE : true,
        query: exports,
        selectedRow: Chunk73800,
        sections: [null != (e = null == r ? true : r.length) ? module : 0],
        tags: s,
        onSelect: this.handleSelect,
        onSelectionChange: this.handleSelectionChange,
        onQueryChange: this.handleQueryChange,
        onRemoveTag: this.handleRemoveUser,
        onHeightChange: this.scrollToCounterSearchBarHeightChange,
        inputProps: {
          "aria-labelledby": em,
          "aria-controls": eg,
          "aria-expanded": true,
          "aria-activedescendant": "user-row-".concat(Chunk73800),
          autoComplete: "off"
        }
      }), this.renderAddUsersButton()]
    })
  }
  renderHeader() {
    let e = null != this.scrollerRef.current && this.state.separator,
      t = this.isNotFriends() ? Chunk388032.intl.string(Chunk388032.t.Xjlbvr) : Chunk388032.intl.string(Chunk388032.t.CdNhGR);
    return (0, Chunk255367.jsxs)(Chunk481060.xBx, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      align: Chunk600164.Z.Align.STRETCH,
      className: Chunk382314.header,
      separator: module,
      children: [Chunk873546.tq ? this.renderMobileCloseButton() : null, (0, Chunk255367.jsx)(Chunk481060.X6q, {
        id: em,
        variant: "heading-lg/semibold",
        children: exports
      }), this.renderSubtitle(), (0, Chunk255367.jsx)(Chunk481060.olH, {
        className: Chunk382314.closeButton,
        onClick: this.props.onClose
      })]
    })
  }
  renderBody() {
    let {
      channel: e,
      hasFriends: t,
      results: n
    } = this.props;
    if (this.isNotFriends()) {
      let t = null != module ? module.getRecipientId() : null;
      if (null == exports) throw Error("no recipient in DM");
      let n = Chunk594174.default.getUser(exports),
        r = null != require ? require.username : "",
        o = null != require && Chunk699516.Z.getRelationshipType(require.id) === Chunk981631.OGo.PENDING_OUTGOING;
      return (0, Chunk255367.jsxs)(eb, {
        className: Chunk382314.notFriends,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: Chunk388032.intl.format(Chunk388032.t["eg+R9/"], {
            username: r
          })
        }), (0, Chunk255367.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: Chunk20493.marginTop20,
          children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: Chunk73800 ? Chunk388032.intl.string(Chunk388032.t.xMH6vL) : Chunk388032.intl.string(Chunk388032.t["PMsq/f"]),
            disabled: Chunk73800,
            onClick: () => null != require ? this.handleAddFriend(require) : null
          })
        })]
      })
    }
    return exports ? this.isPartyFull() ? (0, Chunk255367.jsxs)(eb, {
      className: Chunk382314.partyFull,
      children: [(0, Chunk255367.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.OtTQDw)
      }), (0, Chunk255367.jsx)("div", {
        children: Chunk388032.intl.format(Chunk388032.t.xYr009, {
          number: this.getMaxParticipants()
        })
      })]
    }) : 0 === require.length ? (0, Chunk255367.jsx)(eb, {
      className: s()(Chunk382314.noResults, Chunk20493.marginBottom20),
      children: (0, Chunk255367.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.SV4DJy)
      })
    }) : (0, Chunk255367.jsx)(Chunk481060.aVo, {
      ref: this.scrollerRef,
      sections: [require.length],
      className: Chunk382314.scroller,
      innerClassName: Chunk382314.scrollerInner,
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
      innerId: eg,
      innerAriaMultiselectable: true,
      innerAriaOrientation: "vertical"
    }) : (0, Chunk255367.jsxs)(eb, {
      className: Chunk382314.noFriends,
      children: [(0, Chunk255367.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t["7orY6O"])
      }), (0, Chunk255367.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk20493.marginTop20,
        children: (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.w5uwoK),
          autoFocus: true,
          fullWidth: true,
          onClick: this.handleAddFriendNavigation
        })
      })]
    })
  }
  renderSection() {
    return null
  }
  renderInviteLink() {
    let {
      channel: e,
      invite: t,
      hideInstantInvites: n
    } = this.props, {
      copied: r
    } = this.state;
    if (null == module || !module.isMultiUserDM() || this.isPartyFull()) return null;
    let a = null != exports ? (0, Chunk366980.Z)(exports.code) : "",
      l = Chunk120356.length > 0;
    return (0, Chunk255367.jsxs)(Chunk73800.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
        tag: "h5",
        className: Chunk20493.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.t3O2BQ)
      }), (0, Chunk255367.jsx)(Chunk481060.kO8, {
        supportsCopy: Chunk572004.wS,
        placeholder: (0, Chunk366980.Z)(Chunk388032.intl.string(Chunk388032.t.lPVBqK)),
        value: Chunk392711 ? require ? Chunk388032.intl.string(Chunk388032.t["6HzNgY"]) : Chunk120356 : "",
        buttonColor: Chunk755721.zx.Colors.BRAND,
        text: Chunk392711 ? r ? Chunk388032.intl.string(Chunk388032.t.q30c5u) : Chunk388032.intl.string(Chunk388032.t.OpuAlJ) : Chunk388032.intl.string(Chunk388032.t.qzxqUV),
        mode: r ? Chunk481060.uA3.SUCCESS : Chunk481060.uA3.DEFAULT,
        onCopy: () => {
          Chunk392711 ? this.handleCopyInvite(Chunk120356) : this.createInvite()
        }
      }), Chunk120356.length > 0 ? (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        className: s()(Chunk20493.marginTop8, Chunk382314.footerText),
        children: Chunk388032.intl.format(Chunk388032.t.ZVdJMz, {
          numHours: "".concat(eh)
        })
      }) : null]
    })
  }
  renderFooter() {
    let {
      hasFriends: e,
      channel: t,
      selectedUsers: n
    } = this.props;
    if (this.isNotFriends() || !module || this.isPartyFull()) return null;
    if (null == exports) return (0, Chunk255367.jsxs)(Chunk481060.mzw, {
      className: Chunk382314.footer,
      children: [require.size > 1 && (0, Chunk255367.jsx)(eI, {
        previewIcon: this.state.previewIcon,
        selectedUsers: require,
        channelName: this.state.newChannelName,
        onChange: this.handleChannelNameChange,
        onIconChange: this.handleIconChange,
        onIconRemove: this.handleIconRemove
      }), (0, Chunk255367.jsxs)(Chunk481060.hE2, {
        fullWidth: true,
        direction: "horizontal",
        children: [(0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
          onClick: this.props.onClose
        }), this.renderCreateGroupButton()]
      })]
    });
    let r = exports.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
    if (null != r) return (0, Chunk255367.jsx)(Chunk481060.mzw, {
      className: Chunk382314.footer,
      children: r
    })
  }
  render() {
    let {
      transitionState: e,
      inBornThisNamedExperiment: t
    } = this.props;
    return (0, Chunk255367.jsxs)(Chunk481060.Y0X, {
      transitionState: null != module ? module : Chunk481060.Dvm.ENTERED,
      className: s()(Chunk382314.popout, {
        [Chunk382314.showAsModal]: exports,
        [Chunk382314.showAsPopout]: !exports
      }),
      fullscreenOnMobile: false,
      parentComponent: "PrivateChannelRecipientsInvite",
      children: [this.renderHeader(), this.renderSearchBar(), this.renderBody(), this.renderFooter()]
    })
  }
  handleAddFriend(e) {
    this.props.onClose(), O.Z.sendRequest({
      discordTag: $.ZP.getUserTag(e, {
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
        let n = U.Z.getUserAffinity(e);
        return null != (t = null == n ? true : n.communicationProbability) ? t : false
      })
    }
  }
  constructor(...e) {
    super(...e), es(this, "state", {
      separator: false,
      copied: false,
      newChannelName: "",
      previewIcon: true
    }), es(this, "copyTimeout", true), es(this, "scrollerRef", o.createRef()), es(this, "searchBarRef", o.createRef()), es(this, "_mobileCloseRef", o.createRef()), es(this, "_searchCounter", 0), es(this, "_existingTimeout", null), es(this, "scrollPageUp", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageUp({
        animate: true
      })
    }), es(this, "scrollPageDown", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageDown({
        animate: true
      })
    }), es(this, "renderMobileCloseButton", () => (0, i.jsx)("div", {
      className: eo.mobileToolsContainer,
      ref: this._mobileCloseRef,
      children: (0, i.jsx)(p.JcV, {
        containerRef: this._mobileCloseRef,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(v.Z, {
            className: eo.mobileToolsCloseIcon,
            closeAction: this.props.onClose,
            keybind: "ESC"
          })
        })
      })
    })), es(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      let {
        results: n
      } = this.props;
      return null != n[t] ? this.props.inBornThisNamedExperiment ? e_ : ep : 0
    }), es(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        results: r,
        selectedUsers: o,
        selectedRow: a,
        hideDiscriminator: s
      } = this.props, l = r[n];
      if (null == l) return null;
      let {
        user: c,
        comparator: u
      } = l, d = o.has(c.id), f = !d && 0 >= this.getRemaining();
      return (0, i.jsx)(en.Z, {
        row: n,
        user: c,
        hideDiscriminator: s,
        comparator: u,
        checked: d,
        disabled: f,
        selected: n === a,
        onClick: this.handleClick,
        onMouseEnter: this.focusResult,
        "aria-posinset": n + 1,
        "aria-setsize": r.length,
        inlineUsername: !this.props.inBornThisNamedExperiment
      }, c.id)
    }), es(this, "forceFocus", () => {
      let e = this.searchBarRef.current;
      null == e || e.focus()
    }), es(this, "focusResult", e => {
      y.Z.select(e)
    }), es(this, "handleSelect", (e, t) => {
      let {
        results: n,
        channel: r
      } = this.props;
      null == t ? y.Z.clear(null == r ? true : r.id) : null != n && this.handleClick(n[t].user.id)
    }), es(this, "handleSelectionChange", (e, t) => {
      y.Z.select(t);
      let n = this.scrollerRef.current;
      null != n && n.scrollToIndex({
        section: e,
        row: t,
        padding: 8
      })
    }), es(this, "handleQueryChange", e => {
      let {
        channel: t
      } = this.props, n = (0, N.v_)(t);
      y.Z.search(e, null == t ? true : t.id), null != this._existingTimeout && clearTimeout(this._existingTimeout), this._existingTimeout = setTimeout(() => {
        z.default.track(er.rMx.SEARCH_USER_LIST_STARTED, eu(el({}, n), {
          entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
          entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
          search_query_length: e.length
        })), this._searchCounter++
      }, 500)
    }), es(this, "handleRemoveUser", e => {
      let t = Array.from(this.props.selectedUsers);
      y.Z.removeUser(t[e]), this.forceFocus()
    }), es(this, "handleClick", e => {
      let {
        selectedUsers: t,
        query: n,
        channel: r
      } = this.props;
      t.has(e) ? y.Z.removeUser(e) : this.getRemaining() > 0 && (y.Z.addUser(e), n.length > 0 && y.Z.clear(null == r ? true : r.id)), this.forceFocus()
    }), es(this, "handleAddFriendNavigation", () => {
      E.Z.transitionToSection(er.pJs.ADD_FRIEND, {
        explicit: true
      }), this.props.onClose()
    }), es(this, "handleScroll", () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({
        separator: !e.isScrolledToTop()
      })
    }), es(this, "handleChannelNameChange", e => {
      this.setState({
        newChannelName: e
      })
    }), es(this, "handleIconChange", e => {
      let {
        imageUri: t
      } = e;
      this.setState({
        previewIcon: t
      })
    }), es(this, "handleIconRemove", () => {
      this.setState({
        previewIcon: null
      })
    }), es(this, "createNewDM", e => {
      let t = this._searchCounter,
        {
          channel: n
        } = this.props,
        r = (0, N.v_)(n),
        i = true;
      1 === e.length && (i = null == g.Z._openCachedDMChannel(e[0])), z.default.track(er.rMx.CREATE_DM_USER_LIST_CLICKED, eu(el({}, r), {
        is_new_dm: i,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: e,
        num_searches: t,
        affinity_score: this._getUserAffinities(e).affinities,
        name_is_set: "" !== this.state.newChannelName,
        icon_is_set: null != this.state.previewIcon
      })), g.Z.openPrivateChannel({
        recipientIds: e,
        location: "New Group DM"
      }).then(e => {
        let t = {};
        "" !== this.state.newChannelName && (t.name = this.state.newChannelName), null != this.state.previewIcon && (t.icon = this.state.previewIcon), (null != t.name || null != t.icon) && g.Z.updateChannel(e, t, A.Z.NEW_GROUP_DM_INVITE_MODAL), z.default.track(er.rMx.GDM_EDIT_INTERACTED, {
          channel_id: e,
          channel_type: er.d4z.GROUP_DM,
          location: A.Z.NEW_GROUP_DM_INVITE_MODAL,
          new_name_set: "" !== this.state.newChannelName,
          new_icon_set: null != this.state.previewIcon
        })
      })
    }), es(this, "pushToExistingDM", (e, t) => {
      let n = this._searchCounter,
        r = (0, N.v_)(e),
        i = V.Z.getChannelId() === e.id;
      g.Z.addRecipients(e.id, t, er.Sbl.ADD_FRIENDS_TO_DM).then(n => {
        if (i) {
          if (e.isDM() && n !== e.id) return void m.Z.call(n, false, true);
          m.Z.ring(n, t, "dm_invite")
        }
      }), z.default.track(er.rMx.CREATE_DM_USER_LIST_CLICKED, eu(el({}, r), {
        is_new_dm: true,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: t,
        num_searches: n,
        affinity_score: this._getUserAffinities(t).affinities
      }))
    }), es(this, "handleInviteUsers", () => {
      let {
        channel: e,
        selectedUsers: t,
        onClose: n
      } = this.props, r = Array.from(t);
      if (null != e) {
        let t = eC(Array.from(new Set([...e.recipients, ...r])));
        t.size > 0 ? (0, p.h7j)(n => (0, i.jsx)(eO, eu(el({}, n), {
          onConfirm: () => this.pushToExistingDM(e, r),
          channelIds: t
        })), {}, (0, p.VnL)(this.context.appContext)) : this.pushToExistingDM(e, r)
      } else {
        let e = eC(r);
        r.length > 1 && e.size > 0 ? (0, p.h7j)(t => (0, i.jsx)(eO, eu(el({}, t), {
          onConfirm: () => this.createNewDM(r),
          channelIds: e
        })), {}, (0, p.VnL)(this.context.appContext)) : this.createNewDM(r)
      }
      n()
    }), es(this, "handleCopyInvite", e => {
      let {
        channel: t,
        invite: n
      } = this.props;
      null != n && (0, q.JG)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
        copied: true
      }), this.copyTimeout = setTimeout(() => {
        this.setState({
          copied: false
        })
      }, 1e3), z.default.track(er.rMx.COPY_INSTANT_INVITE, {
        server: null,
        channel: null != t ? t.id : null,
        channel_type: null != t ? t.type : null,
        location: er.Sbl.ADD_FRIENDS_TO_DM,
        code: null != n ? n.code : null
      })
    }), es(this, "scrollToCounterSearchBarHeightChange", e => {
      var t, n;
      if (!this.props.inBornThisNamedExperiment) return;
      let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? true : t.call(n);
      null != r && (r.scrollTop = Math.max(0, r.scrollTop + e))
    })
  }
}

function eI(e) {
  let {
    selectedUsers: t,
    channelName: n,
    previewIcon: r,
    onIconChange: o,
    onIconRemove: a,
    onChange: s
  } = e, {
    analyticsLocations: l
  } = (0, C.ZP)(A.Z.NEW_GROUP_DM_INVITE_MODAL);
  if (!(0, L.a)(A.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
  let c = (0, P.pT)(Array.from(t), K.default, Y.Z);
  return (0, i.jsxs)("div", {
    className: eo.customizationContainer,
    children: [(0, i.jsx)(x.B, {
      className: eo.iconSelector,
      channel: null,
      previewIcon: r,
      onIconChange: o,
      onIconRemove: a,
      analyticsLocations: l,
      petite: true,
      allowRemovingIcon: false
    }), (0, i.jsx)(p.Text, {
      className: eo.channelNameLabel,
      variant: "text-sm/medium",
      color: "header-muted",
      children: ei.intl.string(ei.t.YynaLC)
    }), (0, i.jsx)(_.Is, {
      "aria-label": ei.intl.string(ei.t.YynaLC),
      className: eo.channelNameInput,
      inputClassName: eo.channelNameInputInner,
      name: "create-gdm-channel-name",
      placeholder: c,
      value: n,
      onChange: s
    })]
  })
}

function eT(e) {
  var {
    channel: t
  } = e, n = ed(e, ["channel"]);
  let r = (0, f.cj)([F.Z, Z.Z, W.Z], () => {
    let e;
    return null != t && null != (e = Z.Z.getInvite(t.id)) && e.isExpired() && (e = null), eu(el({}, F.Z.getState()), {
      invite: e,
      hideDiscriminator: W.Z.hidePersonalInformation,
      hideInstantInvites: W.Z.hideInstantInvites
    })
  });
  return (0, i.jsx)(ev, el({
    channel: t
  }, n, r))
}

function eS(e) {
  let {
    channel: t,
    location: n,
    subscribeToGlobalHotkey: r,
    initialPopoutOpen: a
  } = e, [s, l] = o.useState(null != a && a), c = (0, L.a)(n), u = "channel-invite-modal-".concat(null == t ? true : t.id), d = (0, p.VXO)(u), f = o.useCallback(() => (0, p.ZDy)(() => Promise.resolve(e => (0, i.jsx)(eT, eu(el({}, e), {
    channel: t,
    inBornThisNamedExperiment: c
  }))), {
    modalKey: u
  }), [t, u, c]), _ = o.useCallback(() => {
    let e = () => d ? (0, p.Mr3)(u) : f(),
      t = () => l(e => !e);
    return c ? e() : t()
  }, [c, d, u, f, l]);
  o.useEffect(() => (r && X.S.subscribe(er.CkL.TOGGLE_DM_CREATE, _), () => {
    X.S.unsubscribe(er.CkL.TOGGLE_DM_CREATE, _)
  }), [r, _, c]);
  let h = e => (0, i.jsx)(eT, eu(el({}, e), {
    onClose: e.closePopout,
    channel: t,
    inBornThisNamedExperiment: c
  }));
  return (0, T.ZP)(() => {
    (0, j._)()
  }), {
    showModal: f,
    renderPopout: h,
    toggleVisible: _,
    popoutOpen: s,
    setPopoutOpen: l,
    inBornThisNamedExperiment: c
  }
}

function eA(e) {
  var t, n;
  let {
    channel: r,
    iconClassName: a,
    className: s,
    icon: l,
    tooltip: c,
    tooltipPosition: u = "bottom",
    popoutPosition: d = "bottom",
    popoutAlign: _ = "right",
    subscribeToGlobalHotkey: h = false,
    location: m
  } = e, g = o.useRef(null), E = null != l ? l : null == r ? p.kL_ : p.ejJ, {
    showModal: b,
    renderPopout: y,
    toggleVisible: O,
    popoutOpen: v,
    setPopoutOpen: I,
    inBornThisNamedExperiment: T
  } = eS({
    initialPopoutOpen: null != r && r.isGroupDM() && 0 === r.recipients.length,
    channel: r,
    location: m,
    subscribeToGlobalHotkey: h
  }), S = (0, f.e7)([K.default], () => K.default.getUser(null == r ? true : r.getRecipientId()));
  return null != (t = null == S ? true : S.bot) && t || null != (n = null == S ? true : S.isProvisional) && n ? null : T ? (0, i.jsx)(et.ZP.Icon, {
    ref: g,
    onClick: b,
    icon: E,
    className: s,
    iconClassName: a,
    tooltip: c,
    tooltipPosition: u
  }) : (0, i.jsx)(p.yRy, {
    targetElementRef: g,
    renderPopout: y,
    position: d,
    shouldShow: v,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: _,
    onRequestClose: () => I(false),
    animation: p.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, i.jsx)(et.ZP.Icon, eu(el({}, e), {
      ref: g,
      onClick: O,
      icon: E,
      className: s,
      iconClassName: a,
      tooltip: c,
      tooltipPosition: u
    }))
  })
}

function eN(e) {
  var {
    channel: t,
    popoutPosition: n = "bottom",
    popoutAlign: r = "right",
    fullWidth: a = false,
    text: s,
    icon: l,
    subscribeToGlobalHotkey: c = false
  } = e, u = ed(e, ["channel", "popoutPosition", "popoutAlign", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]);
  let d = o.useRef(null),
    {
      showModal: f,
      renderPopout: _,
      toggleVisible: h,
      popoutOpen: m,
      setPopoutOpen: g,
      inBornThisNamedExperiment: E
    } = eS({
      initialPopoutOpen: false,
      channel: t,
      location: "PrivateChannelRecipientsInviteTextButton",
      subscribeToGlobalHotkey: c
    });
  return E ? (0, i.jsx)(p.zxk, eu(el({}, u), {
    onClick: f,
    variant: "primary",
    buttonRef: d,
    text: s,
    "aria-label": s,
    icon: l,
    fullWidth: a
  })) : (0, i.jsx)(p.yRy, {
    targetElementRef: d,
    renderPopout: _,
    position: n,
    shouldShow: m,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: r,
    onRequestClose: () => g(false),
    animation: p.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, i.jsx)(p.zxk, eu(el({}, e, u), {
      onClick: h,
      variant: "primary",
      buttonRef: d,
      text: s,
      "aria-label": s,
      icon: l,
      fullWidth: a
    }))
  })
}

function eC(e) {
  let t = eR(e);
  return new Set((0, l.chain)(B.Z.getMutablePrivateChannels()).values().filter(e => (0, G.bc)(e.type)).filter(e => eR(e.recipients) === t).map(e => e.id).value())
}

function eR(e) {
  return JSON.stringify(e.sort())
}
es(ev, "contextType", Chunk40851.ZP)