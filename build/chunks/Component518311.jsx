/** Chunk was on 37384 **/
/** chunk id: 518311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => e_,
  l: () => ev
}), require("./642613.js"), require("./415506.js"), require("./539854.js"), require("./388685.js"), require("./35282.js"), require("./49124.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk497072 = require("./497072.js"),
  Chunk10198 = require("./10198.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}

function ec(e, t) {
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

function eu(e, t) {
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
}
let ed = (0, Chunk313201.hQ)(),
  ep = (0, Chunk313201.hQ)();

function eh(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsxs)(N.Z, {
    align: N.Z.Align.CENTER,
    justify: N.Z.Justify.CENTER,
    direction: N.Z.Direction.VERTICAL,
    className: o()(el.errorState, t),
    children: [(0, i.jsx)("div", {
      className: o()(el.errorStateIcon, ea.marginBottom20)
    }), n]
  })
}
let ef = e => {
    var t;
    let {
      channel: n,
      onClose: r
    } = e, l = null != (t = (0, T.ZP)(n)) ? t : "", a = (0, p.e7)([G.ZP], () => {
      var e;
      return null != (e = G.ZP.lastMessageId(n.id)) ? e : n.id
    });
    return (0, i.jsx)(f.P3F, {
      onClick: () => {
        (0, k.XU)(er.ME, n.id), r()
      },
      children: (0, i.jsxs)("div", {
        className: el.confirmChannelItemContainer,
        children: [(0, i.jsx)(f.qEK, {
          src: (0, Z.x)(n),
          size: f.EFr.SIZE_24,
          "aria-label": l
        }), (0, i.jsx)("span", {
          className: el.confirmChannelName,
          children: l
        }), (0, i.jsx)("span", {
          className: el.lastActiveTimestamp,
          children: u()(Q.default.extractTimestamp(a)).fromNow()
        })]
      })
    })
  },
  em = e => {
    var {
      onConfirm: t,
      channelIds: n
    } = e, r = eu(e, ["onConfirm", "channelIds"]);
    let l = (0, p.Wu)([B.Z], () => Array.from(n).map(B.Z.getChannel), [n]);
    return (0, i.jsxs)(f.ConfirmModal, ec(es({
      header: ei.intl.string(ei.t.uFHxNT),
      confirmText: ei.intl.string(ei.t.KCNNJi),
      cancelText: ei.intl.string(ei.t["ETE/oK"]),
      onConfirm: t,
      confirmButtonColor: h.zx.Colors.BRAND
    }, r), {
      children: [(0, i.jsx)(f.Text, {
        variant: "text-md/normal",
        children: ei.intl.string(ei.t.rIsSqK)
      }), (0, i.jsx)(f.vwX, {
        className: el.selectExistingFormHeader,
        children: ei.intl.string(ei.t.cjE7wM)
      }), (0, i.jsx)(f.Ttm, {
        className: el.confirmInviteScroller,
        children: l.filter(J.lm).sort((e, t) => {
          var n, r;
          let i = null != (n = e.lastMessageId) ? n : e.id,
            l = null != (r = t.lastMessageId) ? r : t.id;
          return Q.default.compare(l, i)
        }).map(e => (0, i.jsx)(ef, {
          onClose: r.onClose,
          channel: e
        }, e.id))
      })]
    }))
  };
class eg extends(r = Chunk647438.PureComponent) {
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
    Chunk626135.default.track(Chunk981631.rMx.OPEN_POPOUT, ec(es({}, exports), {
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
    } = this.props, n = this.getRemaining(), r = null != module && 0 === exports.size || require < 0, l = exports.size > 1 || null != module ? Chunk388032.intl.string(Chunk388032.t.ZGMNAw) : Chunk388032.intl.string(Chunk388032.t["6Urw1t"]);
    return (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: "primary",
      fullWidth: true,
      disabled: r,
      onClick: this.handleInviteUsers,
      text: Chunk647438
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
    return (0, Chunk951288.jsx)("div", {
      className: Chunk497072.addButton,
      children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
    return (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      className: o()(Chunk497072.subtitle, {
        [Chunk497072.subtitleWarning]: module < 0
      }, Chunk10198.marginTop4),
      children: exports
    })
  }
  renderSearchBar() {
    var e;
    let {
      query: t,
      hasFriends: n,
      results: r,
      selectedRow: l,
      selectedUsers: a
    } = this.props;
    if (!require || this.isNotFriends()) return null;
    let o = [];
    return Chunk120356.forEach(e => {
      let t = q.default.getUser(e);
      null != t && o.push($.ZP.getName(t))
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk497072.searchBar,
      children: [(0, Chunk951288.jsx)(Chunk794433.Z, {
        ref: this.searchBarRef,
        className: Chunk497072.searchBarComponent,
        autoFocus: true,
        placeholder: 0 === Chunk120356.size ? Chunk388032.intl.string(Chunk388032.t.Wxnb6u) : "",
        disabled: this.isPartyFull(),
        size: Chunk794433.Z.Sizes.MEDIUM,
        maxHeight: this.props.inBornThisNamedExperiment ? 110 : true,
        query: exports,
        selectedRow: Chunk647438,
        sections: [null != (e = null == r ? true : r.length) ? module : 0],
        tags: o,
        onSelect: this.handleSelect,
        onSelectionChange: this.handleSelectionChange,
        onQueryChange: this.handleQueryChange,
        onRemoveTag: this.handleRemoveUser,
        onHeightChange: this.scrollToCounterSearchBarHeightChange,
        inputProps: {
          "aria-labelledby": ed,
          "aria-controls": ep,
          "aria-expanded": true,
          "aria-activedescendant": "user-row-".concat(Chunk647438),
          autoComplete: "off"
        }
      }), this.renderAddUsersButton()]
    })
  }
  renderHeader() {
    let e = null != this.scrollerRef.current && this.state.separator,
      t = this.isNotFriends() ? Chunk388032.intl.string(Chunk388032.t.Xjlbvr) : Chunk388032.intl.string(Chunk388032.t.CdNhGR);
    return (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      align: Chunk600164.Z.Align.STRETCH,
      className: Chunk497072.header,
      separator: module,
      children: [Chunk873546.tq ? this.renderMobileCloseButton() : null, (0, Chunk951288.jsx)(Chunk481060.X6q, {
        id: ed,
        variant: "heading-lg/semibold",
        children: exports
      }), this.renderSubtitle(), (0, Chunk951288.jsx)(Chunk481060.olH, {
        className: Chunk497072.closeButton,
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
        l = null != require && Chunk699516.Z.getRelationshipType(require.id) === Chunk981631.OGo.PENDING_OUTGOING;
      return (0, Chunk951288.jsxs)(eh, {
        className: Chunk497072.notFriends,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: Chunk388032.intl.format(Chunk388032.t["eg+R9/"], {
            username: r
          })
        }), (0, Chunk951288.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: Chunk10198.marginTop20,
          children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
            variant: "primary",
            size: "sm",
            text: Chunk647438 ? Chunk388032.intl.string(Chunk388032.t.xMH6vL) : Chunk388032.intl.string(Chunk388032.t["PMsq/f"]),
            disabled: Chunk647438,
            onClick: () => null != require ? this.handleAddFriend(require) : null
          })
        })]
      })
    }
    return exports ? this.isPartyFull() ? (0, Chunk951288.jsxs)(eh, {
      className: Chunk497072.partyFull,
      children: [(0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.OtTQDw)
      }), (0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.format(Chunk388032.t.xYr009, {
          number: this.getMaxParticipants()
        })
      })]
    }) : 0 === require.length ? (0, Chunk951288.jsx)(eh, {
      className: o()(Chunk497072.noResults, Chunk10198.marginBottom20),
      children: (0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.SV4DJy)
      })
    }) : (0, Chunk951288.jsx)(Chunk481060.aVo, {
      ref: this.scrollerRef,
      sections: [require.length],
      className: Chunk497072.scroller,
      innerClassName: Chunk497072.scrollerInner,
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
      innerId: ep,
      innerAriaMultiselectable: true,
      innerAriaOrientation: "vertical"
    }) : (0, Chunk951288.jsxs)(eh, {
      className: Chunk497072.noFriends,
      children: [(0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t["7orY6O"])
      }), (0, Chunk951288.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk10198.marginTop20,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
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
      s = Chunk120356.length > 0;
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        tag: "h5",
        className: Chunk10198.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.t3O2BQ)
      }), (0, Chunk951288.jsx)(Chunk481060.kO8, {
        supportsCopy: Chunk572004.wS,
        placeholder: (0, Chunk366980.Z)(Chunk388032.intl.string(Chunk388032.t.lPVBqK)),
        value: Chunk392711 ? require ? Chunk388032.intl.string(Chunk388032.t["6HzNgY"]) : Chunk120356 : "",
        buttonColor: Chunk755721.zx.Colors.BRAND,
        text: Chunk392711 ? r ? Chunk388032.intl.string(Chunk388032.t.q30c5u) : Chunk388032.intl.string(Chunk388032.t.OpuAlJ) : Chunk388032.intl.string(Chunk388032.t.qzxqUV),
        mode: r ? Chunk481060.uA3.SUCCESS : Chunk481060.uA3.DEFAULT,
        onCopy: () => {
          Chunk392711 ? this.handleCopyInvite(Chunk120356) : this.createInvite()
        }
      }), Chunk120356.length > 0 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        className: o()(Chunk10198.marginTop8, Chunk497072.footerText),
        children: Chunk388032.intl.format(Chunk388032.t.ZVdJMz, {
          numHours: "".concat(24)
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
    if (null == exports) return (0, Chunk951288.jsxs)(Chunk481060.mzw, {
      className: Chunk497072.footer,
      children: [require.size > 1 && (0, Chunk951288.jsx)(eb, {
        previewIcon: this.state.previewIcon,
        selectedUsers: require,
        channelName: this.state.newChannelName,
        onChange: this.handleChannelNameChange,
        onIconChange: this.handleIconChange,
        onIconRemove: this.handleIconRemove
      }), (0, Chunk951288.jsxs)(Chunk481060.hE2, {
        fullWidth: true,
        direction: "horizontal",
        children: [(0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
          onClick: this.props.onClose
        }), this.renderCreateGroupButton()]
      })]
    });
    let r = exports.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
    if (null != r) return (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: Chunk497072.footer,
      children: r
    })
  }
  render() {
    let {
      transitionState: e,
      inBornThisNamedExperiment: t
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk481060.Y0X, {
      transitionState: null != module ? module : Chunk481060.Dvm.ENTERED,
      className: o()(Chunk497072.popout, {
        [Chunk497072.showAsModal]: exports,
        [Chunk497072.showAsPopout]: !exports
      }),
      fullscreenOnMobile: false,
      parentComponent: "PrivateChannelRecipientsInvite",
      children: [this.renderHeader(), this.renderSearchBar(), this.renderBody(), this.renderFooter()]
    })
  }
  handleAddFriend(e) {
    this.props.onClose(), v.Z.sendRequest({
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
        let n = D.Z.getUserAffinity(e);
        return null != (t = null == n ? true : n.communicationProbability) ? t : false
      })
    }
  }
  constructor(...e) {
    super(...e), eo(this, "state", {
      separator: false,
      copied: false,
      newChannelName: "",
      previewIcon: true
    }), eo(this, "copyTimeout", true), eo(this, "scrollerRef", l.createRef()), eo(this, "searchBarRef", l.createRef()), eo(this, "_mobileCloseRef", l.createRef()), eo(this, "_searchCounter", 0), eo(this, "_existingTimeout", null), eo(this, "scrollPageUp", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageUp({
        animate: true
      })
    }), eo(this, "scrollPageDown", () => {
      var e;
      null == (e = this.scrollerRef.current) || e.scrollPageDown({
        animate: true
      })
    }), eo(this, "renderMobileCloseButton", () => (0, i.jsx)("div", {
      className: el.mobileToolsContainer,
      ref: this._mobileCloseRef,
      children: (0, i.jsx)(f.JcV, {
        containerRef: this._mobileCloseRef,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(x.Z, {
            className: el.mobileToolsCloseIcon,
            closeAction: this.props.onClose,
            keybind: "ESC"
          })
        })
      })
    })), eo(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      let {
        results: n
      } = this.props;
      return null != n[t] ? this.props.inBornThisNamedExperiment ? 48 : 42 : 0
    }), eo(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        results: r,
        selectedUsers: l,
        selectedRow: a,
        hideDiscriminator: o
      } = this.props, s = r[n];
      if (null == s) return null;
      let {
        user: c,
        comparator: u
      } = s, d = l.has(c.id), p = !d && 0 >= this.getRemaining();
      return (0, i.jsx)(en.Z, {
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
        "aria-setsize": r.length,
        inlineUsername: !this.props.inBornThisNamedExperiment
      }, c.id)
    }), eo(this, "forceFocus", () => {
      let e = this.searchBarRef.current;
      null == e || e.focus()
    }), eo(this, "focusResult", e => {
      _.Z.select(e)
    }), eo(this, "handleSelect", (e, t) => {
      let {
        results: n,
        channel: r
      } = this.props;
      null == t ? _.Z.clear(null == r ? true : r.id) : null != n && this.handleClick(n[t].user.id)
    }), eo(this, "handleSelectionChange", (e, t) => {
      _.Z.select(t);
      let n = this.scrollerRef.current;
      null != n && n.scrollToIndex({
        section: e,
        row: t,
        padding: 8
      })
    }), eo(this, "handleQueryChange", e => {
      let {
        channel: t
      } = this.props, n = (0, P.v_)(t);
      _.Z.search(e, null == t ? true : t.id), null != this._existingTimeout && clearTimeout(this._existingTimeout), this._existingTimeout = setTimeout(() => {
        Y.default.track(er.rMx.SEARCH_USER_LIST_STARTED, ec(es({}, n), {
          entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
          entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
          search_query_length: e.length
        })), this._searchCounter++
      }, 500)
    }), eo(this, "handleRemoveUser", e => {
      let t = Array.from(this.props.selectedUsers);
      _.Z.removeUser(t[e]), this.forceFocus()
    }), eo(this, "handleClick", e => {
      let {
        selectedUsers: t,
        query: n,
        channel: r
      } = this.props;
      t.has(e) ? _.Z.removeUser(e) : this.getRemaining() > 0 && (_.Z.addUser(e), n.length > 0 && _.Z.clear(null == r ? true : r.id)), this.forceFocus()
    }), eo(this, "handleAddFriendNavigation", () => {
      y.Z.transitionToSection(er.pJs.ADD_FRIEND, {
        explicit: true
      }), this.props.onClose()
    }), eo(this, "handleScroll", () => {
      let e = this.scrollerRef.current;
      null != e && this.setState({
        separator: !e.isScrolledToTop()
      })
    }), eo(this, "handleChannelNameChange", e => {
      this.setState({
        newChannelName: e
      })
    }), eo(this, "handleIconChange", e => {
      let {
        imageUri: t
      } = e;
      this.setState({
        previewIcon: t
      })
    }), eo(this, "handleIconRemove", () => {
      this.setState({
        previewIcon: null
      })
    }), eo(this, "createNewDM", e => {
      let t = this._searchCounter,
        {
          channel: n
        } = this.props,
        r = (0, P.v_)(n),
        i = true;
      1 === e.length && (i = null == b.Z._openCachedDMChannel(e[0])), Y.default.track(er.rMx.CREATE_DM_USER_LIST_CLICKED, ec(es({}, r), {
        is_new_dm: i,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: e,
        num_searches: t,
        affinity_score: this._getUserAffinities(e).affinities,
        name_is_set: "" !== this.state.newChannelName,
        icon_is_set: null != this.state.previewIcon
      })), b.Z.openPrivateChannel({
        recipientIds: e,
        location: "New Group DM"
      }).then(e => {
        let t = {};
        "" !== this.state.newChannelName && (t.name = this.state.newChannelName), null != this.state.previewIcon && (t.icon = this.state.previewIcon), (null != t.name || null != t.icon) && b.Z.updateChannel(e, t, S.Z.NEW_GROUP_DM_INVITE_MODAL), Y.default.track(er.rMx.GDM_EDIT_INTERACTED, {
          channel_id: e,
          channel_type: er.d4z.GROUP_DM,
          location: S.Z.NEW_GROUP_DM_INVITE_MODAL,
          new_name_set: "" !== this.state.newChannelName,
          new_icon_set: null != this.state.previewIcon
        })
      })
    }), eo(this, "pushToExistingDM", (e, t) => {
      let n = this._searchCounter,
        r = (0, P.v_)(e),
        i = V.Z.getChannelId() === e.id;
      b.Z.addRecipients(e.id, t, er.Sbl.ADD_FRIENDS_TO_DM).then(n => {
        if (i) {
          if (e.isDM() && n !== e.id) return void g.Z.call(n, false, true);
          g.Z.ring(n, t, "dm_invite")
        }
      }), Y.default.track(er.rMx.CREATE_DM_USER_LIST_CLICKED, ec(es({}, r), {
        is_new_dm: true,
        entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
        entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
        recipient_ids: t,
        num_searches: n,
        affinity_score: this._getUserAffinities(t).affinities
      }))
    }), eo(this, "handleInviteUsers", () => {
      let {
        channel: e,
        selectedUsers: t,
        onClose: n
      } = this.props, r = Array.from(t);
      if (null != e) {
        let t = ex(Array.from(new Set([...e.recipients, ...r])));
        t.size > 0 ? (0, f.h7j)(n => (0, i.jsx)(em, ec(es({}, n), {
          onConfirm: () => this.pushToExistingDM(e, r),
          channelIds: t
        })), {}, (0, f.VnL)(this.context.appContext)) : this.pushToExistingDM(e, r)
      } else {
        let e = ex(r);
        r.length > 1 && e.size > 0 ? (0, f.h7j)(t => (0, i.jsx)(em, ec(es({}, t), {
          onConfirm: () => this.createNewDM(r),
          channelIds: e
        })), {}, (0, f.VnL)(this.context.appContext)) : this.createNewDM(r)
      }
      n()
    }), eo(this, "handleCopyInvite", e => {
      let {
        channel: t,
        invite: n
      } = this.props;
      null != n && (0, K.JG)(e), null != this.copyTimeout && clearTimeout(this.copyTimeout), this.setState({
        copied: true
      }), this.copyTimeout = setTimeout(() => {
        this.setState({
          copied: false
        })
      }, 1e3), Y.default.track(er.rMx.COPY_INSTANT_INVITE, {
        server: null,
        channel: null != t ? t.id : null,
        channel_type: null != t ? t.type : null,
        location: er.Sbl.ADD_FRIENDS_TO_DM,
        code: null != n ? n.code : null
      })
    }), eo(this, "scrollToCounterSearchBarHeightChange", e => {
      var t, n;
      if (!this.props.inBornThisNamedExperiment) return;
      let r = null == (n = this.scrollerRef.current) || null == (t = n.getScrollerNode) ? true : t.call(n);
      null != r && (r.scrollTop = Math.max(0, r.scrollTop + e))
    })
  }
}

function eb(e) {
  let {
    selectedUsers: t,
    channelName: n,
    previewIcon: r,
    onIconChange: l,
    onIconRemove: a,
    onChange: o
  } = e, {
    analyticsLocations: s
  } = (0, I.ZP)(S.Z.NEW_GROUP_DM_INVITE_MODAL);
  if (!(0, w.a)(S.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
  let c = (0, T.pT)(Array.from(t), q.default, z.Z);
  return (0, i.jsxs)("div", {
    className: el.customizationContainer,
    children: [(0, i.jsx)(M.B, {
      className: el.iconSelector,
      channel: null,
      previewIcon: r,
      onIconChange: l,
      onIconRemove: a,
      analyticsLocations: s,
      petite: true,
      allowRemovingIcon: false
    }), (0, i.jsx)(f.Text, {
      className: el.channelNameLabel,
      variant: "text-sm/medium",
      color: "header-muted",
      children: ei.intl.string(ei.t.YynaLC)
    }), (0, i.jsx)(f.oil, {
      "aria-label": ei.intl.string(ei.t.YynaLC),
      name: "create-gdm-channel-name",
      placeholder: c,
      value: n,
      onChange: o
    })]
  })
}

function ey(e) {
  var {
    channel: t
  } = e, n = eu(e, ["channel"]);
  let r = (0, p.cj)([H.Z, F.Z, W.Z], () => {
    let e;
    return null != t && null != (e = F.Z.getInvite(t.id)) && e.isExpired() && (e = null), ec(es({}, H.Z.getState()), {
      invite: e,
      hideDiscriminator: W.Z.hidePersonalInformation,
      hideInstantInvites: W.Z.hideInstantInvites
    })
  });
  return (0, i.jsx)(eg, es({
    channel: t
  }, n, r))
}

function eC(e) {
  let {
    channel: t,
    location: n,
    subscribeToGlobalHotkey: r,
    initialPopoutOpen: a
  } = e, [o, s] = l.useState(null != a && a), c = (0, w.a)(n), u = "channel-invite-modal-".concat(null == t ? true : t.id), d = (0, f.VXO)(u), p = l.useCallback(() => (0, f.ZDy)(() => Promise.resolve(e => (0, i.jsx)(ey, ec(es({}, e), {
    channel: t,
    inBornThisNamedExperiment: c
  }))), {
    modalKey: u
  }), [t, u, c]), h = l.useCallback(() => c ? d ? (0, f.Mr3)(u) : p() : s(e => !e), [c, d, u, p, s]);
  return l.useEffect(() => (r && X.S.subscribe(er.CkL.TOGGLE_DM_CREATE, h), () => {
    X.S.unsubscribe(er.CkL.TOGGLE_DM_CREATE, h)
  }), [r, h, c]), (0, j.ZP)(() => {
    (0, L._)()
  }), {
    showModal: p,
    renderPopout: e => (0, i.jsx)(ey, ec(es({}, e), {
      onClose: e.closePopout,
      channel: t,
      inBornThisNamedExperiment: c
    })),
    toggleVisible: h,
    popoutOpen: o,
    setPopoutOpen: s,
    inBornThisNamedExperiment: c
  }
}

function e_(e) {
  var t, n;
  let {
    channel: r,
    iconClassName: a,
    className: o,
    icon: s,
    tooltip: c,
    tooltipPosition: u = "bottom",
    popoutPosition: d = "bottom",
    popoutAlign: h = "right",
    subscribeToGlobalHotkey: m = false,
    location: g
  } = e, b = l.useRef(null), y = null != s ? s : null == r ? f.kL_ : f.ejJ, {
    showModal: C,
    renderPopout: _,
    toggleVisible: v,
    popoutOpen: x,
    setPopoutOpen: O,
    inBornThisNamedExperiment: j
  } = eC({
    initialPopoutOpen: null != r && r.isGroupDM() && 0 === r.recipients.length,
    channel: r,
    location: g,
    subscribeToGlobalHotkey: m
  }), E = (0, p.e7)([q.default], () => q.default.getUser(null == r ? true : r.getRecipientId()));
  return null != (t = null == E ? true : E.bot) && t || null != (n = null == E ? true : E.isProvisional) && n ? null : j ? (0, i.jsx)(et.ZP.Icon, {
    ref: b,
    onClick: C,
    icon: y,
    className: o,
    iconClassName: a,
    tooltip: c,
    tooltipPosition: u
  }) : (0, i.jsx)(f.yRy, {
    targetElementRef: b,
    renderPopout: _,
    position: d,
    shouldShow: x,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: h,
    onRequestClose: () => O(false),
    animation: f.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, i.jsx)(et.ZP.Icon, ec(es({}, e), {
      ref: b,
      onClick: v,
      icon: y,
      className: o,
      iconClassName: a,
      tooltip: c,
      tooltipPosition: u
    }))
  })
}

function ev(e) {
  var {
    channel: t,
    popoutPosition: n = "bottom",
    popoutAlign: r = "right",
    fullWidth: a = false,
    text: o,
    icon: s,
    subscribeToGlobalHotkey: c = false
  } = e, u = eu(e, ["channel", "popoutPosition", "popoutAlign", "fullWidth", "text", "icon", "subscribeToGlobalHotkey"]);
  let d = l.useRef(null),
    {
      showModal: p,
      renderPopout: h,
      toggleVisible: m,
      popoutOpen: g,
      setPopoutOpen: b,
      inBornThisNamedExperiment: y
    } = eC({
      initialPopoutOpen: false,
      channel: t,
      location: "PrivateChannelRecipientsInviteTextButton",
      subscribeToGlobalHotkey: c
    });
  return y ? (0, i.jsx)(f.zxk, ec(es({}, u), {
    onClick: p,
    variant: "primary",
    buttonRef: d,
    text: o,
    "aria-label": o,
    icon: s,
    fullWidth: a
  })) : (0, i.jsx)(f.yRy, {
    targetElementRef: d,
    renderPopout: h,
    position: n,
    shouldShow: g,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: r,
    onRequestClose: () => b(false),
    animation: f.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, i.jsx)(f.zxk, ec(es({}, e, u), {
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

function ex(e) {
  let t = eO(e);
  return new Set((0, s.chain)(B.Z.getMutablePrivateChannels()).values().filter(e => (0, U.bc)(e.type)).filter(e => eO(e.recipients) === t).map(e => e.id).value())
}

function eO(e) {
  return JSON.stringify(e.sort())
}
eo(eg, "contextType", Chunk40851.ZP)