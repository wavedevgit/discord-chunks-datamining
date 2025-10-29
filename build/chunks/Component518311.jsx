/** Chunk was on 88647 **/
/** chunk id: 518311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eC,
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
  Chunk388032 = require("./388032.jsx"),
  Chunk918324 = require("./918324.js"),
  Chunk197571 = require("./197571.js");

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

function ef(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, i.jsxs)(T.Z, {
    align: T.Z.Align.CENTER,
    justify: T.Z.Justify.CENTER,
    direction: T.Z.Direction.VERTICAL,
    className: o()(el.errorState, t),
    children: [(0, i.jsx)("div", {
      className: o()(el.errorStateIcon, ea.marginBottom20)
    }), n]
  })
}
let eh = e => {
    var t;
    let {
      channel: n,
      onClose: r
    } = e, l = null != (t = (0, Z.ZP)(n)) ? t : "", a = (0, p.e7)([G.ZP], () => {
      var e;
      return null != (e = G.ZP.lastMessageId(n.id)) ? e : n.id
    });
    return (0, i.jsx)(h.P3F, {
      onClick: () => {
        (0, D.XU)(er.ME, n.id), r()
      },
      children: (0, i.jsxs)("div", {
        className: el.confirmChannelItemContainer,
        children: [(0, i.jsx)(h.qEK, {
          src: (0, I.x)(n),
          size: h.EFr.SIZE_24,
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
    return (0, i.jsxs)(h.ConfirmModal, ec(es({
      header: ei.intl.string(ei.t.uFHxNd),
      confirmText: ei.intl.string(ei.t.KCNNJu),
      cancelText: ei.intl.string(ei.t["ETE/oC"]),
      onConfirm: t,
      confirmButtonColor: f.zx.Colors.BRAND
    }, r), {
      children: [(0, i.jsx)(h.Text, {
        variant: "text-md/normal",
        children: ei.intl.string(ei.t.rIsSqE)
      }), (0, i.jsx)(h.Text, {
        variant: "text-md/normal",
        className: el.selectExistingFormHeader,
        children: ei.intl.string(ei.t.cjE7wH)
      }), (0, i.jsx)(h.Ttm, {
        className: el.confirmInviteScroller,
        children: l.filter(J.lm).sort((e, t) => {
          var n, r;
          let i = null != (n = e.lastMessageId) ? n : e.id,
            l = null != (r = t.lastMessageId) ? r : t.id;
          return Q.default.compare(l, i)
        }).map(e => (0, i.jsx)(eh, {
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
    } = this.props, n = this.getRemaining(), r = null != module && 0 === exports.size || require < 0, l = exports.size > 1 || null != module ? Chunk388032.intl.string(Chunk388032.t.ZGMNA8) : Chunk388032.intl.string(Chunk388032.t["6Urw1t"]);
    return (0, Chunk951288.jsx)(Chunk481060.Button, {
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
      className: Chunk918324.addButton,
      children: (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: Chunk388032.intl.string(Chunk388032.t.OYkgVk),
        disabled: r,
        onClick: this.handleInviteUsers
      })
    })
  }
  renderSubtitle() {
    if (!this.props.hasFriends || this.isNotFriends() || this.isPartyFull()) return null;
    let e = this.getRemaining(),
      t = module <= 0 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.xYr004, {
        number: this.getMaxParticipants()
      }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.HrSDPF, {
        number: module
      });
    return (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-xs/normal",
      className: o()(Chunk918324.subtitle, {
        [Chunk918324.subtitleWarning]: module < 0
      }, Chunk197571.marginTop4),
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
      className: Chunk918324.searchBar,
      children: [(0, Chunk951288.jsx)(Chunk794433.Z, {
        ref: this.searchBarRef,
        className: Chunk918324.searchBarComponent,
        autoFocus: true,
        placeholder: 0 === Chunk120356.size ? Chunk388032.intl.string(Chunk388032.t.Wxnb6q) : "",
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
      t = this.isNotFriends() ? Chunk388032.intl.string(Chunk388032.t.Xjlbvs) : Chunk388032.intl.string(Chunk388032.t.CdNhGX);
    return (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      direction: Chunk600164.Z.Direction.VERTICAL,
      align: Chunk600164.Z.Align.STRETCH,
      className: Chunk918324.header,
      separator: module,
      children: [Chunk873546.tq ? this.renderMobileCloseButton() : null, (0, Chunk951288.jsx)(Chunk481060.Heading, {
        id: ed,
        variant: "heading-lg/semibold",
        children: exports
      }), this.renderSubtitle(), (0, Chunk951288.jsx)(Chunk481060.olH, {
        className: Chunk918324.closeButton,
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
      return (0, Chunk951288.jsxs)(ef, {
        className: Chunk918324.notFriends,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          children: Chunk388032.intl.format(Chunk388032.t["eg+R9x"], {
            username: r
          })
        }), (0, Chunk951288.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: Chunk197571.marginTop20,
          children: (0, Chunk951288.jsx)(Chunk481060.Button, {
            variant: "primary",
            size: "sm",
            text: Chunk647438 ? Chunk388032.intl.string(Chunk388032.t.xMH6vD) : Chunk388032.intl.string(Chunk388032.t["PMsq/b"]),
            disabled: Chunk647438,
            onClick: () => null != require ? this.handleAddFriend(require) : null
          })
        })]
      })
    }
    return exports ? this.isPartyFull() ? (0, Chunk951288.jsxs)(ef, {
      className: Chunk918324.partyFull,
      children: [(0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.OtTQDz)
      }), (0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.format(Chunk388032.t.xYr004, {
          number: this.getMaxParticipants()
        })
      })]
    }) : 0 === require.length ? (0, Chunk951288.jsx)(ef, {
      className: o()(Chunk918324.noResults, Chunk197571.marginBottom20),
      children: (0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t.SV4DJ1)
      })
    }) : (0, Chunk951288.jsx)(Chunk481060.aVo, {
      ref: this.scrollerRef,
      sections: [require.length],
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
      innerId: ep,
      innerAriaMultiselectable: true,
      innerAriaOrientation: "vertical"
    }) : (0, Chunk951288.jsxs)(ef, {
      className: Chunk918324.noFriends,
      children: [(0, Chunk951288.jsx)("div", {
        children: Chunk388032.intl.string(Chunk388032.t["7orY6K"])
      }), (0, Chunk951288.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk197571.marginTop20,
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.w5uwoI),
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
    let l = null != exports ? (0, Chunk366980.Z)(exports.code) : "",
      a = Chunk647438.length > 0;
    return (0, Chunk951288.jsx)(Chunk481060.gNt, {
      label: Chunk388032.intl.string(Chunk388032.t.t3O2BR),
      helperText: Chunk647438.length > 0 ? Chunk388032.intl.format(Chunk388032.t.ZVdJMy, {
        numHours: "".concat(24)
      }) : true,
      children: (0, Chunk951288.jsx)(Chunk481060.kO8, {
        supportsCopy: Chunk572004.wS,
        placeholder: (0, Chunk366980.Z)(Chunk388032.intl.string(Chunk388032.t.lPVBqP)),
        value: Chunk120356 ? require ? Chunk388032.intl.string(Chunk388032.t["6HzNgZ"]) : Chunk647438 : "",
        buttonColor: Chunk755721.zx.Colors.BRAND,
        text: Chunk120356 ? r ? Chunk388032.intl.string(Chunk388032.t.q30c5i) : Chunk388032.intl.string(Chunk388032.t.OpuAlK) : Chunk388032.intl.string(Chunk388032.t.qzxqUf),
        mode: r ? Chunk481060.uA3.SUCCESS : Chunk481060.uA3.DEFAULT,
        onCopy: () => {
          Chunk120356 ? this.handleCopyInvite(Chunk647438) : this.createInvite()
        }
      })
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
      className: Chunk918324.footer,
      children: [require.size > 1 && (0, Chunk951288.jsx)(eb, {
        previewIcon: this.state.previewIcon,
        selectedUsers: require,
        channelName: this.state.newChannelName,
        onChange: this.handleChannelNameChange,
        onIconChange: this.handleIconChange,
        onIconRemove: this.handleIconRemove
      }), (0, Chunk951288.jsxs)(Chunk481060.ButtonGroup, {
        fullWidth: true,
        direction: "horizontal",
        children: [(0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "secondary",
          text: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
          onClick: this.props.onClose
        }), this.renderCreateGroupButton()]
      })]
    });
    let r = exports.isDM() ? this.renderCreateGroupButton() : this.renderInviteLink();
    if (null != r) return (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: Chunk918324.footer,
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
      className: o()(Chunk918324.popout, {
        [Chunk918324.showAsModal]: exports,
        [Chunk918324.showAsPopout]: !exports
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
        let n = k.Z.getUserAffinity(e);
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
      children: (0, i.jsx)(h.JcV, {
        containerRef: this._mobileCloseRef,
        children: (0, i.jsx)("div", {
          children: (0, i.jsx)(O.Z, {
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
      C.Z.select(e)
    }), eo(this, "handleSelect", (e, t) => {
      let {
        results: n,
        channel: r
      } = this.props;
      null == t ? C.Z.clear(null == r ? true : r.id) : null != n && this.handleClick(n[t].user.id)
    }), eo(this, "handleSelectionChange", (e, t) => {
      C.Z.select(t);
      let n = this.scrollerRef.current;
      null != n && n.scrollToIndex({
        section: e,
        row: t,
        padding: 8
      })
    }), eo(this, "handleQueryChange", e => {
      let {
        channel: t
      } = this.props, n = (0, S.v_)(t);
      C.Z.search(e, null == t ? true : t.id), null != this._existingTimeout && clearTimeout(this._existingTimeout), this._existingTimeout = setTimeout(() => {
        Y.default.track(er.rMx.SEARCH_USER_LIST_STARTED, ec(es({}, n), {
          entry_point_type: this._getAnalyticsEntryPoint().entryPointType,
          entry_point_source: this._getAnalyticsEntryPoint().entryPointSource,
          search_query_length: e.length
        })), this._searchCounter++
      }, 500)
    }), eo(this, "handleRemoveUser", e => {
      let t = Array.from(this.props.selectedUsers);
      C.Z.removeUser(t[e]), this.forceFocus()
    }), eo(this, "handleClick", e => {
      let {
        selectedUsers: t,
        query: n,
        channel: r
      } = this.props;
      t.has(e) ? C.Z.removeUser(e) : this.getRemaining() > 0 && (C.Z.addUser(e), n.length > 0 && C.Z.clear(null == r ? true : r.id)), this.forceFocus()
    }), eo(this, "handleAddFriendNavigation", () => {
      _.Z.transitionToSection(er.pJs.ADD_FRIEND, {
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
        r = (0, S.v_)(n),
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
        "" !== this.state.newChannelName && (t.name = this.state.newChannelName), null != this.state.previewIcon && (t.icon = this.state.previewIcon), (null != t.name || null != t.icon) && b.Z.updateChannel(e, t, j.Z.NEW_GROUP_DM_INVITE_MODAL), Y.default.track(er.rMx.GDM_EDIT_INTERACTED, {
          channel_id: e,
          channel_type: er.d4z.GROUP_DM,
          location: j.Z.NEW_GROUP_DM_INVITE_MODAL,
          new_name_set: "" !== this.state.newChannelName,
          new_icon_set: null != this.state.previewIcon
        })
      })
    }), eo(this, "pushToExistingDM", (e, t) => {
      let n = this._searchCounter,
        r = (0, S.v_)(e),
        i = H.Z.getChannelId() === e.id;
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
        let t = eO(Array.from(new Set([...e.recipients, ...r])));
        t.size > 0 ? (0, h.h7j)(n => (0, i.jsx)(em, ec(es({}, n), {
          onConfirm: () => this.pushToExistingDM(e, r),
          channelIds: t
        })), {}, (0, h.VnL)(this.context.appContext)) : this.pushToExistingDM(e, r)
      } else {
        let e = eO(r);
        r.length > 1 && e.size > 0 ? (0, h.h7j)(t => (0, i.jsx)(em, ec(es({}, t), {
          onConfirm: () => this.createNewDM(r),
          channelIds: e
        })), {}, (0, h.VnL)(this.context.appContext)) : this.createNewDM(r)
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
  } = (0, P.ZP)(j.Z.NEW_GROUP_DM_INVITE_MODAL);
  if (!(0, A.a)(j.Z.NEW_GROUP_DM_INVITE_MODAL)) return null;
  let c = (0, Z.pT)(Array.from(t), q.default, W.Z);
  return (0, i.jsxs)("div", {
    className: el.customizationContainer,
    children: [(0, i.jsx)(w.B, {
      className: el.iconSelector,
      channel: null,
      previewIcon: r,
      onIconChange: l,
      onIconRemove: a,
      analyticsLocations: s,
      petite: true,
      allowRemovingIcon: false
    }), (0, i.jsx)(h.Text, {
      className: el.channelNameLabel,
      variant: "text-sm/medium",
      color: "header-muted",
      children: ei.intl.string(ei.t.YynaLK)
    }), (0, i.jsx)(h.oil, {
      "aria-label": ei.intl.string(ei.t.YynaLK),
      name: "create-gdm-channel-name",
      placeholder: c,
      value: n,
      onChange: o
    })]
  })
}

function e_(e) {
  var {
    channel: t
  } = e, n = eu(e, ["channel"]);
  let r = (0, p.cj)([V.Z, F.Z, z.Z], () => {
    let e;
    return null != t && null != (e = F.Z.getInvite(t.id)) && e.isExpired() && (e = null), ec(es({}, V.Z.getState()), {
      invite: e,
      hideDiscriminator: z.Z.hidePersonalInformation,
      hideInstantInvites: z.Z.hideInstantInvites
    })
  });
  return (0, i.jsx)(eg, es({
    channel: t
  }, n, r))
}

function ey(e) {
  let {
    channel: t,
    location: n,
    subscribeToGlobalHotkey: r,
    initialPopoutOpen: a
  } = e, [o, s] = l.useState(null != a && a), c = (0, A.a)(n), u = "channel-invite-modal-".concat(null == t ? true : t.id), d = (0, h.VXO)(u), p = l.useCallback(() => (0, h.ZDy)(() => Promise.resolve(e => (0, i.jsx)(e_, ec(es({}, e), {
    channel: t,
    inBornThisNamedExperiment: c
  }))), {
    modalKey: u
  }), [t, u, c]), f = l.useCallback(() => c ? d ? (0, h.Mr3)(u) : p() : s(e => !e), [c, d, u, p, s]);
  return l.useEffect(() => (r && X.S.subscribe(er.CkL.TOGGLE_DM_CREATE, f), () => {
    X.S.unsubscribe(er.CkL.TOGGLE_DM_CREATE, f)
  }), [r, f, c]), (0, E.ZP)(() => {
    (0, L._)()
  }), {
    showModal: p,
    renderPopout: e => (0, i.jsx)(e_, ec(es({}, e), {
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

function eC(e) {
  var t, n;
  let {
    channel: r,
    iconClassName: a,
    className: o,
    icon: s,
    tooltip: c,
    tooltipPosition: u = "bottom",
    popoutPosition: d = "bottom",
    popoutAlign: f = "right",
    subscribeToGlobalHotkey: m = false,
    location: g
  } = e, b = l.useRef(null), _ = null != s ? s : null == r ? h.kL_ : h.ejJ, {
    showModal: y,
    renderPopout: C,
    toggleVisible: v,
    popoutOpen: O,
    setPopoutOpen: x,
    inBornThisNamedExperiment: E
  } = ey({
    initialPopoutOpen: null != r && r.isGroupDM() && 0 === r.recipients.length,
    channel: r,
    location: g,
    subscribeToGlobalHotkey: m
  }), j = (0, p.e7)([q.default], () => q.default.getUser(null == r ? true : r.getRecipientId()));
  return null != (t = null == j ? true : j.bot) && t || null != (n = null == j ? true : j.isProvisional) && n ? null : E ? (0, i.jsx)(et.ZP.Icon, {
    ref: b,
    onClick: y,
    icon: _,
    className: o,
    iconClassName: a,
    tooltip: c,
    tooltipPosition: u
  }) : (0, i.jsx)(h.yRy, {
    targetElementRef: b,
    renderPopout: C,
    position: d,
    shouldShow: O,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: f,
    onRequestClose: () => x(false),
    animation: h.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, i.jsx)(et.ZP.Icon, ec(es({}, e), {
      ref: b,
      onClick: v,
      icon: _,
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
      renderPopout: f,
      toggleVisible: m,
      popoutOpen: g,
      setPopoutOpen: b,
      inBornThisNamedExperiment: _
    } = ey({
      initialPopoutOpen: false,
      channel: t,
      location: "PrivateChannelRecipientsInviteTextButton",
      subscribeToGlobalHotkey: c
    });
  return _ ? (0, i.jsx)(h.Button, ec(es({}, u), {
    onClick: p,
    variant: "primary",
    buttonRef: d,
    text: o,
    "aria-label": o,
    icon: s,
    fullWidth: a
  })) : (0, i.jsx)(h.yRy, {
    targetElementRef: d,
    renderPopout: f,
    position: n,
    shouldShow: g,
    nudgeAlignIntoViewport: true,
    autoInvert: true,
    align: r,
    onRequestClose: () => b(false),
    animation: h.yRy.Animation.NONE,
    ignoreModalClicks: true,
    clickTrap: true,
    children: e => (0, i.jsx)(h.Button, ec(es({}, e, u), {
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

function eO(e) {
  let t = ex(e);
  return new Set((0, s.chain)(B.Z.getMutablePrivateChannels()).values().filter(e => (0, U.bc)(e.type)).filter(e => ex(e.recipients) === t).map(e => e.id).value())
}

function ex(e) {
  return JSON.stringify(e.sort())
}
eo(eg, "contextType", Chunk728285.ZP)