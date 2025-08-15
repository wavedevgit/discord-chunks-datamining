/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eI
}), require("./997841.js"), require("./388685.js");
var l, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk990547 = require("./990547.js"),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk247272 = require("./247272.js"),
  Chunk110924 = require("./110924.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
  Chunk259473 = require("./259473.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk687516 = require("./687516.js"),
  Chunk648159 = require("./648159.js"),
  Chunk227672 = require("./227672.js"),
  Chunk427679 = require("./427679.js"),
  Chunk601964 = require("./601964.js"),
  Chunk199902 = require("./199902.js"),
  Chunk439170 = require("./439170.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk341165 = require("./341165.js"),
  Chunk751771 = require("./751771.js"),
  Chunk496675 = require("./496675.js"),
  Chunk158776 = require("./158776.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk938475 = require("./938475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk630388 = require("./630388.js"),
  Chunk971130 = require("./971130.js"),
  Chunk264229 = require("./264229.js"),
  Chunk340541 = require("./340541.js"),
  Chunk366980 = require("./366980.js"),
  Chunk277364 = require("./277364.js"),
  Chunk265452 = require("./265452.jsx"),
  Chunk585385 = require("./585385.jsx"),
  Chunk603236 = require("./603236.jsx"),
  Chunk462376 = require("./462376.jsx"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451964 = require("./451964.js"),
  Chunk197571 = require("./197571.js"),
  Chunk103126 = require("./103126.js"),
  Chunk622577 = require("./622577.js");

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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      eu(e, t, n[t])
    })
  }
  return e
}

function ec(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let {
  INVITE_OPTIONS_FOREVER: eh,
  INVITE_OPTIONS_7_DAYS: eg,
  INVITE_OPTIONS_UNLIMITED: em
} = Chunk971130.ZP;
class ep extends(l = Chunk73800.PureComponent) {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
      analyticsLocation: r,
      streamUserId: s,
      targetType: a,
      targetUserId: o,
      application: u,
      initialCounts: d,
      rows: c,
      showFriends: h,
      modalState: g,
      setModalState: m
    } = this.props, {
      maxAge: p,
      maxUses: v,
      temporary: I,
      flags: f
    } = Chunk533800;
    if (Chunk255367) {
      let n = null == module ? true : module.id;
      if (null == require) return;
      Chunk442837({
        networkError: true
      }), Chunk447543.ZP.createInvite(require, {
        validate: null != exports ? exports : null,
        max_age: Chunk902704,
        max_uses: Chunk692547,
        target_user_id: Chunk512722,
        target_type: a,
        target_application_id: null == u ? true : u.id,
        temporary: Chunk481060,
        flags: Chunk247272
      }, l).catch(e => m({
        networkError: e
      }))
    }
    if (Chunk990547 && Chunk626135.default.track(Chunk981631.rMx.INVITE_SUGGESTION_OPENED, {
        location: l,
        num_suggestions: c.length,
        num_friends: Chunk392711.numFriends,
        num_dms: Chunk392711.numDms,
        num_group_dms: Chunk392711.numGroupDms,
        guild_id: require.id,
        application_id: null == u ? true : u.id
      }), null != Chunk120356) {
      let e = Chunk199902.Z.getStreamForUser(Chunk120356, require.id),
        t = (0, Chunk687516.L2)(module, Chunk158776.Z);
      Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: Chunk73800,
        other_user_id: Chunk120356,
        application_id: null != exports ? exports.id : null,
        application_name: null != exports ? exports.name : null,
        game_id: null != exports ? exports.id : null
      })
    } else(null == u ? true : u.id) != null || Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: Chunk73800
    })
  }
  componentWillUnmount() {
    let {
      inviteChannel: e,
      modalState: t
    } = this.props;
    (0, Chunk630388.yE)(exports.flags, Chunk533800.$.IS_GUEST_INVITE) && null != module && Chunk447543.ZP.clearInviteFromStore(module.id)
  }
  getInviteKey() {
    let {
      code: e,
      vanityURLCode: t,
      guildScheduledEvent: n,
      modalState: l
    } = this.props, {
      showVanityURL: i
    } = l, r = Chunk255367 ? exports : null != module ? module : exports;
    return null == Chunk73800 ? Chunk73800 : (0, Chunk264229.tV)({
      baseCode: Chunk73800,
      guildScheduledEventId: null == require ? true : require.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, Chunk447003.Z)(module) ? (0, Chunk255367.jsxs)("div", {
      className: Chunk451964.warningContainer,
      children: [(0, Chunk255367.jsx)(Chunk481060.Mgn, {
        size: "custom",
        className: Chunk451964.warningIcon,
        color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: Chunk388032.intl.string(Chunk388032.t.x1SQZW)
      })]
    }) : null
  }
  renderHeader() {
    let e, {
        guild: t,
        showFriends: n,
        guildScheduledEvent: l,
        streamUserId: r,
        application: s,
        welcomeToServer: o,
        inviteChannel: u,
        modalState: d,
        handleDone: c
      } = this.props,
      {
        query: h
      } = Chunk392711,
      g = null,
      m = null;
    if (e = Chunk512722 ? null : null != Chunk73800 ? Chunk388032.intl.string(Chunk388032.t["6VQaqa"]) : null != Chunk120356 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZdK3dX, {
        applicationName: Chunk120356.name
      }) : null != l ? Chunk388032.intl.string(Chunk388032.t.JKV4FB) : (null == u ? true : u.isGuildStageVoice()) ? Chunk388032.intl.string(Chunk388032.t.zTrsHx) : Chunk388032.intl.format(Chunk388032.t.NvVBJS, {
        name: exports.name
      }), null != u) {
      let e = (0, Chunk471445.KS)(u, exports);
      null != module && (m = (0, Chunk255367.jsxs)("div", {
        className: Chunk451964.headerChannelContainer,
        children: [(0, Chunk255367.jsx)(module, {
          className: Chunk451964.channelIcon
        }), (0, Chunk255367.jsx)(Chunk481060.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: u.name
        })]
      }))
    }
    return g = exports.features.has(Chunk981631.oNc.HUB) ? (0, Chunk255367.jsxs)("div", {
      className: Chunk451964.hubHeader,
      children: [(0, Chunk255367.jsx)(Chunk481060.X6q, {
        className: a()(Chunk451964.hubInviteTitle, Chunk451964.headerCloseButtonSpacing),
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.WhR38v)
      }), (0, Chunk255367.jsx)(Chunk481060.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.Ed4BMj)
      }), require && (0, Chunk255367.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: Chunk990547,
        className: Chunk451964.hubFriendSearch,
        onChange: this.handleQueryChange,
        placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHY2),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.CmSHY2),
        autoFocus: true,
        onClear: this.handleClearSearch
      })]
    }) : require ? (0, Chunk255367.jsxs)("div", {
      className: Chunk451964.header,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk451964.__invalid_headerTopRow,
        children: (0, Chunk255367.jsx)(Chunk481060.vwX, {
          id: this._headerId,
          tag: "h2",
          className: a()(Chunk197571.marginBottom4, Chunk451964.headerCloseButtonSpacing, Chunk451964.headerText),
          children: module
        })
      }), Chunk442837, (0, Chunk255367.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: Chunk990547,
        className: Chunk451964.searchBar,
        onChange: this.handleQueryChange,
        placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHY2),
        autoFocus: true,
        onClear: this.handleClearSearch
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk197571.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
      children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
        id: this._headerId,
        tag: "h2",
        className: a()(Chunk197571.marginReset, Chunk451964.headerCloseButtonSpacing, Chunk451964.headerText),
        children: module
      }), Chunk442837, this.renderChannelWarning()]
    }), (0, Chunk255367.jsxs)(Chunk481060.xBx, {
      separator: require,
      children: [(0, Chunk255367.jsx)("div", {
        className: Chunk451964.closeButton,
        children: (0, Chunk255367.jsx)(Chunk481060.olH, {
          onClick: c
        })
      }), (0, Chunk255367.jsxs)("div", {
        className: Chunk451964.headerContainer,
        children: [Chunk512722 && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
          children: [(0, Chunk255367.jsx)("img", {
            className: Chunk451964.welcomeImage,
            src: Chunk622577,
            alt: ""
          }), (0, Chunk255367.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            className: Chunk451964.welcomeHeading,
            children: Chunk388032.intl.string(Chunk388032.t.DpoBNz)
          }), (0, Chunk255367.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: Chunk451964.welcomeSubheading,
            children: Chunk388032.intl.string(Chunk388032.t["wJ/ouL"])
          })]
        }), null != Chunk73800 ? (0, Chunk255367.jsx)(Chunk648159.Z, {}) : null, Chunk533800]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === module.length ? (0, Chunk255367.jsx)(Chunk481060.hzk, {
      className: Chunk451964.inviteRowEmptyState,
      children: (0, Chunk255367.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.ojoWgY)
      })
    }) : null == exports ? (0, Chunk255367.jsx)(Chunk481060.hzk, {
      className: Chunk451964.inviteRowEmptyState,
      children: (0, Chunk255367.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.hzPwGB)
      })
    }) : (0, Chunk255367.jsx)(Chunk481060.YAO, {
      className: Chunk451964.scroller,
      sections: [module.length],
      renderSection: this.renderSection,
      sectionHeight: 0,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      paddingBottom: 16
    })
  }
  renderSection() {
    return null
  }
  renderBody() {
    var e;
    let {
      guild: t,
      showFriends: n,
      streamUserId: l,
      application: r
    } = this.props;
    if (require) return this.renderFriendsBody();
    let s = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : ""),
      a = Chunk594174.default.getCurrentUser();
    u()(null != a, "InstantInviteModal: user cannot be undefined");
    let o = (0, Chunk601964.eM)(exports, a) ? Chunk388032.intl.string(Chunk388032.t.HFbByM) : Chunk388032.intl.string(Chunk388032.t.ueBhAw);
    return null != l ? o = Chunk388032.intl.string(Chunk388032.t.CXpS1N) : null != Chunk73800 && (o = Chunk388032.intl.string(Chunk388032.t.ueCrHB)), (0, Chunk255367.jsx)(Chunk481060.hzk, {
      className: Chunk451964.noScroll,
      children: (0, Chunk255367.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
          className: Chunk451964.subText,
          variant: "text-sm/normal",
          children: Chunk512722
        }), (0, Chunk255367.jsx)(Chunk603236.I, ec(ed({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: Chunk120356
        }))]
      })
    })
  }
  renderFooter() {
    var e;
    let {
      noInvitesAvailable: t,
      showFriends: n,
      guildScheduledEvent: l,
      streamUserId: r,
      application: s,
      inviteChannel: o,
      modalState: u
    } = this.props, {
      maxAge: d
    } = u, c = null, h = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : "");
    if (require) {
      let e = Chunk388032.intl.string(Chunk388032.t.MLkj7O);
      null != Chunk73800 ? e = Chunk388032.intl.string(Chunk388032.t["1b9nen"]) : null != Chunk120356 ? e = Chunk388032.intl.string(Chunk388032.t.iI1gMj) : null != l ? e = Chunk388032.intl.string(Chunk388032.t.KaWCyM) : (null == Chunk512722 ? true : Chunk512722.isGuildStageVoice()) && (e = Chunk388032.intl.string(Chunk388032.t["2frWa2"])), c = (0, Chunk255367.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk451964.content,
        children: [(0, Chunk255367.jsx)(Chunk481060.vwX, {
          tag: "h5",
          className: Chunk197571.marginBottom8,
          children: module
        }), (0, Chunk255367.jsx)(Chunk603236.I, ec(ed({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: Chunk990547
        }))]
      })
    } else exports || (c = (0, Chunk255367.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      className: Chunk197571.marginTop20,
      children: [(0, Chunk255367.jsx)(Chunk481060.XZJ, {
        size: 18,
        type: Chunk481060.XZJ.Types.INVERTED,
        value: Chunk392711 === eh.value,
        onChange: this.handleToggleMaxAge,
        children: (0, Chunk255367.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.QKJru7)
        })
      }), (0, Chunk255367.jsx)(Chunk481060.ua7, {
        text: Chunk388032.intl.string(Chunk388032.t.Yx4IiI),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, i.jsx)(I.P3F, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: ea.cursorPointer,
            children: (0, i.jsx)(I.ewm, {
              size: "sm",
              color: v.Z.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, Chunk255367.jsx)(Chunk481060.mzw, {
      className: a()({
        [Chunk451964.noPadding]: !require,
        [Chunk451964.footer]: require
      }),
      children: c
    }) : null
  }
  getModalContent() {
    let {
      modalState: e,
      handleDone: t
    } = this.props, {
      currentPage: n
    } = module;
    switch (require) {
      case Chunk245335.RV.MAIN:
        return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
          children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
      case Chunk245335.RV.SETTINGS:
        return (0, Chunk255367.jsx)(Chunk585385.D, ec(ed({}, this.props), {
          onSetInviteFlags: this.handleSetInviteFlags,
          headerId: this._headerId,
          onSelectMaxAge: this.handleSelectMaxAge,
          onSelectMaxUses: this.handleSelectMaxUses,
          onToggleTemporary: this.handleToggleTemporary,
          handleDone: exports
        }));
      default:
        return null
    }
  }
  render() {
    let {
      transitionState: e,
      inviteChannel: t,
      guild: n
    } = this.props;
    return (0, Chunk255367.jsx)("div", {
      className: this.props.showFriends ? Chunk451964.wrapper : true,
      children: (0, Chunk255367.jsx)(Chunk481060.Y0X, {
        impression: {
          impressionName: Chunk990547.ImpressionNames.GUILD_INVITE,
          impressionProperties: {
            invite_channel_id: null == exports ? true : exports.id,
            invite_guild_id: require.id
          }
        },
        "aria-labelledby": this._headerId,
        transitionState: module,
        className: Chunk451964.modal,
        parentComponent: "InstantInvite",
        children: this.getModalContent()
      })
    })
  }
  constructor(...e) {
    super(...e), eu(this, "_scroller", null), eu(this, "_headerId", c().uniqueId()), eu(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(et.RV.SETTINGS)
    }), eu(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), eu(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), eu(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), eu(this, "handleSetInviteFlags", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        flags: e
      })
    }), eu(this, "handleQueryChange", e => {
      var t;
      let {
        setModalState: n
      } = this.props;
      null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, f.C)(e), n({
        query: e
      })
    }), eu(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), eu(this, "handleToggleMaxAge", () => {
      let {
        modalState: e,
        setModalState: t
      } = this.props, {
        maxAge: n,
        savedMaxAge: l
      } = e;
      t({
        maxAge: l,
        savedMaxAge: n
      })
    }), eu(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      switch (this.props.rows[t].type) {
        case q.bm.CHANNEL:
        case q.bm.GROUP_DM:
        case q.bm.DM:
        case q.bm.FRIEND:
          return ee.k;
        default:
          return 0
      }
    }), eu(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        analyticsLocation: l
      } = this.props, r = this.getInviteKey(), s = this.props.rows[n], a = "".concat(s.type, "-").concat(s.item.id);
      switch (s.type) {
        case q.bm.GROUP_DM:
        case q.bm.CHANNEL:
          return (0, i.jsx)(ee.d, {
            row: s,
            channel: s.item,
            inviteKey: r,
            location: l
          }, a);
        case q.bm.DM:
        case q.bm.FRIEND:
          return (0, i.jsx)(ee.d, {
            row: s,
            user: s.item,
            inviteKey: r,
            location: l
          }, a);
        default:
          return null
      }
    })
  }
}
eu(ep, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: eg.value
});
let ev = Chunk73800.forwardRef(function(e, t) {
  var n, l;
  let {
    channel: s,
    guild: a,
    source: o,
    guildScheduledEvent: u,
    streamUserId: d,
    applicationId: c,
    transitionState: h,
    onClose: v,
    welcomeToServer: I,
    page: b,
    analyticsLocation: O
  } = e, {
    analyticsLocations: y
  } = (0, _.ZP)(j.Z.INSTANT_INVITE_MODAL), C = (0, m.e7)([B.Z, M.Z, D.ZP], () => {
    if (null != s) return s;
    let e = B.Z.getChannelId(),
      t = null == e || (0, el.AB)(e) ? true : M.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = M.Z.getChannel(t.parent_id)), null != t ? t : D.ZP.getDefaultChannel(a.id, true, en.Plq.CREATE_INSTANT_INVITE)
  }, [s, a.id]), w = null;
  null != d ? w = et.Iq.STREAM : null != c && (w = et.Iq.EMBEDDED_APPLICATION);
  let A = null != s ? s.getGuildId() : null != a ? a.id : null,
    V = (0, m.e7)([k.Z], () => {
      let e = null != C ? C.id : null;
      return null == e ? null : k.Z.getInvite(e, {
        targetType: w,
        targetUserId: d,
        targetApplicationId: c
      })
    }, [C, w, d, c]),
    [F, z, q, W] = (0, m.Wu)([L.Z, G.ZP], () => [L.Z.getInviteSuggestionRows(), L.Z.getTotalSuggestionsCount() >= 1, L.Z.getInitialCounts(), null != s && null != C ? G.ZP.getVoiceStatesForChannel(C) : null], [C, s]),
    Y = (0, m.e7)([R.ZP], () => {
      let e = null != C ? C.id : null;
      return null != A ? R.ZP.getProps(A, e) : true
    }, [C, A], p.Z),
    X = (0, m.e7)([U.Z], () => null != C && U.Z.can(en.Plq.CREATE_INSTANT_INVITE, C), [C]),
    J = null === V || !X,
    [Q] = r.useState(() => {
      let e = new Set;
      return null != d && null != W ? W.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != A && null != Y && w !== et.Iq.EMBEDDED_APPLICATION && Y.rows.forEach(t => {
        t.type === R.so.MEMBER && e.add(t.userId)
      }), e
    }),
    $ = null == s ? true : s.id,
    ee = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel($), [$]);
  r.useEffect(() => {
    (0, f.x)({
      omitUserIds: Q,
      guild: a,
      channel: s,
      applicationId: c,
      inviteTargetType: w
    }).catch(en.VqG)
  }, [Q, s, a, c, w]);
  let [ei] = (0, E.Z)(null != c ? [c] : []), er = (0, T.Z)({
    guildId: A
  }), es = null != V ? V.code : true, ea = null == V ? true : V.maxAge, eo = null == V ? true : V.maxUses, eu = null == V ? true : V.temporary, ec = a.vanityURLCode, ev = null != ec && ec.length > 0, eI = !X && !(null == C ? true : C.isGuildVocal()) && ev, ex = (null == C ? true : C.type) === en.d4z.GUILD_VOICE, ef = null != (n = null == V ? true : V.flags) ? n : 0, eN = (0, S.Z)(C);
  X || (null == ee ? true : ee.invite_code) == null || (es = ee.invite_code);
  let [ej, e_] = r.useState({
    query: "",
    maxAge: null != (l = null != ea ? ea : er) ? l : eg.value,
    savedMaxAge: ea === eh.value ? null != er ? er : eg.value : eh.value,
    maxUses: null != eo && 0 !== eo ? eo : em.value,
    temporary: null != eu && eu,
    networkError: true,
    showVanityURL: eI,
    currentPage: null != b ? b : et.RV.MAIN,
    lastPage: true,
    flags: ef
  }), eE = r.useCallback(e => {
    e_(t => ed({}, t, e))
  }, []), eS = r.useCallback(e => {
    eE({
      currentPage: e,
      lastPage: ej.currentPage
    })
  }, [ej.currentPage, eE]), eb = ex && !eI && !J && !eN, {
    enabled: eT
  } = P.o.useExperiment({
    guildId: null == a ? true : a.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: eb
  }), {
    maxAge: eO,
    maxUses: ey,
    temporary: eC,
    savedMaxAge: eP,
    flags: eZ
  } = ej, ew = r.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = ej;
    e === et.RV.SETTINGS && null != t ? eS(t) : v()
  }, [eS, ej, v]), eA = r.useCallback(() => {
    let e = null == C ? true : C.id;
    0 === ey && 0 === eO && !eC && eI ? eE({
      networkError: true,
      showVanityURL: true
    }) : X && null != e && (eE({
      networkError: true,
      showVanityURL: false
    }), x.ZP.createInvite(e, {
      max_age: eO,
      max_uses: ey,
      target_type: w,
      target_user_id: d,
      target_application_id: null == ei ? true : ei.id,
      temporary: eC,
      flags: eZ
    }, o).catch(e => eE({
      networkError: e,
      showVanityURL: eI
    }))), eO !== eh.value && eP !== eh.value && eE({
      savedMaxAge: eh.value
    })
  }, [eI, X, C, o, null == ei ? true : ei.id, w, d, eO, ey, eC, eE, eP, eZ]), eR = (0, N.Z)(C), eM = (0, N.Z)((0, H.yE)(eZ, g.$.IS_APPLICATION_BYPASS)), eD = null != eR && eR !== C, ek = null != eM && eM !== (0, H.yE)(eZ, g.$.IS_APPLICATION_BYPASS);
  r.useEffect(() => {
    !eI && (eD || ek) && eA()
  }, [eA, eD, ek, eI]);
  let {
    canCreateApplicationBypassInvites: eL,
    isManualApprovalGuild: eU
  } = (0, K.R)(a);
  return (0, i.jsx)(_.Gt, {
    value: y,
    children: (0, i.jsx)(ep, {
      ref: t,
      canCreateInvites: X,
      noInvitesAvailable: J,
      inviteChannel: C,
      guild: a,
      guildScheduledEvent: u,
      streamUserId: d,
      vanityURLCode: ec,
      targetType: w,
      targetUserId: d,
      application: ei,
      rows: F,
      showFriends: z,
      initialCounts: q,
      code: es,
      source: o,
      welcomeToServer: I,
      analyticsLocations: y,
      analyticsLocation: O,
      transitionState: h,
      onClose: v,
      canShowVanityURL: eI,
      isGuestInviteCreationToggleEnabled: eT && eb,
      shouldHideTemporaryInviteToggle: eT && eb || eU,
      modalState: ej,
      setModalState: eE,
      changePage: eS,
      onGenerateNewLink: eA,
      handleDone: ew,
      isApplicationBypassToggleEnabled: eL && !J
    })
  })
});

function eI(e) {
  let {
    modal: t
  } = (0, Y._k)({
    location: "instant_invite_modal"
  }), n = t ? J.H : ev;
  return (0, i.jsx)(n, ed({}, e))
}