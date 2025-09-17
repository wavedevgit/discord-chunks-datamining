/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ex
}), require("./997841.js"), require("./388685.js");
var l, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk990547 = require("./990547.js"),
  Chunk533800 = require("./533800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk247272 = require("./247272.js"),
  Chunk110924 = require("./110924.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
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
  Chunk301873 = require("./301873.js"),
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
  Chunk869306 = require("./869306.js"),
  Chunk10198 = require("./10198.js"),
  Chunk492297 = require("./492297.js"),
  Chunk622577 = require("./622577.js");

function ed(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ec(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function eg(e, t) {
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
  INVITE_OPTIONS_7_DAYS: em,
  INVITE_OPTIONS_UNLIMITED: ep
} = Chunk971130.ZP;
class ev extends(l = Chunk647438.PureComponent) {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
      analyticsLocation: r,
      streamUserId: a,
      targetType: s,
      targetUserId: o,
      application: u,
      initialCounts: d,
      rows: c,
      showFriends: g,
      modalState: h,
      setModalState: m
    } = this.props, {
      maxAge: p,
      maxUses: v,
      temporary: I,
      flags: x
    } = Chunk533800;
    if (Chunk951288) {
      let n = null == module ? true : module.id;
      if (null == require) return;
      Chunk442837({
        networkError: true
      }), Chunk447543.ZP.createInvite(require, {
        validate: null != exports ? exports : null,
        max_age: Chunk902704,
        max_uses: Chunk692547,
        target_user_id: Chunk512722,
        target_type: s,
        target_application_id: null == u ? true : u.id,
        temporary: Chunk755721,
        flags: Chunk481060
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
        location: Chunk647438,
        other_user_id: Chunk120356,
        application_id: null != exports ? exports.id : null,
        application_name: null != exports ? exports.name : null,
        game_id: null != exports ? exports.id : null
      })
    } else(null == u ? true : u.id) != null || Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: Chunk647438
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
    } = l, r = Chunk951288 ? exports : null != module ? module : exports;
    return null == Chunk647438 ? Chunk647438 : (0, Chunk264229.tV)({
      baseCode: Chunk647438,
      guildScheduledEventId: null == require ? true : require.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, Chunk447003.Z)(module) ? (0, Chunk951288.jsxs)("div", {
      className: Chunk869306.warningContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Mgn, {
        size: "custom",
        className: Chunk869306.warningIcon,
        color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
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
        application: a,
        welcomeToServer: o,
        inviteChannel: u,
        modalState: d,
        handleDone: c
      } = this.props,
      {
        query: g
      } = Chunk392711,
      h = null,
      m = null;
    if (e = Chunk512722 ? null : null != Chunk647438 ? Chunk388032.intl.string(Chunk388032.t["6VQaqa"]) : null != Chunk120356 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZdK3dX, {
        applicationName: Chunk120356.name
      }) : null != l ? Chunk388032.intl.string(Chunk388032.t.JKV4FB) : (null == u ? true : u.isGuildStageVoice()) ? Chunk388032.intl.string(Chunk388032.t.zTrsHx) : Chunk388032.intl.format(Chunk388032.t.NvVBJS, {
        name: exports.name
      }), null != u) {
      let e = (0, Chunk471445.KS)(u, exports);
      null != module && (m = (0, Chunk951288.jsxs)("div", {
        className: Chunk869306.headerChannelContainer,
        children: [(0, Chunk951288.jsx)(module, {
          className: Chunk869306.channelIcon
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: u.name
        })]
      }))
    }
    return h = exports.features.has(Chunk981631.oNc.HUB) ? (0, Chunk951288.jsxs)("div", {
      className: Chunk869306.hubHeader,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        className: Chunk869306.headerCloseButtonSpacing,
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.WhR38v)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.Ed4BMj)
      }), require && (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: Chunk990547,
        onChange: this.handleQueryChange,
        placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHY2),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.CmSHY2),
        autoFocus: true,
        onClear: this.handleClearSearch
      })]
    }) : require ? (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 4,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 0,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          id: this._headerId,
          tag: "h2",
          className: Chunk869306.headerCloseButtonSpacing,
          children: module
        }), Chunk442837]
      }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: Chunk990547,
        onChange: this.handleQueryChange,
        placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHY2),
        autoFocus: true,
        onClear: this.handleClearSearch
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk10198.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
        id: this._headerId,
        tag: "h2",
        className: s()(Chunk10198.marginReset, Chunk869306.headerCloseButtonSpacing, Chunk869306.headerText),
        children: module
      }), Chunk442837, this.renderChannelWarning()]
    }), (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      separator: require,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk869306.closeButton,
        children: (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: c
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk869306.headerContainer,
        children: [Chunk512722 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)("img", {
            className: Chunk869306.welcomeImage,
            src: Chunk622577,
            alt: ""
          }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            className: Chunk869306.welcomeHeading,
            children: Chunk388032.intl.string(Chunk388032.t.DpoBNz)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: Chunk869306.welcomeSubheading,
            children: Chunk388032.intl.string(Chunk388032.t["wJ/ouL"])
          })]
        }), null != Chunk647438 ? (0, Chunk951288.jsx)(Chunk648159.Z, {}) : null, Chunk533800]
      })]
    })
  }
  renderFriendsBody() {
    let {
      rows: e
    } = this.props, t = this.getInviteKey();
    return 0 === module.length ? (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk869306.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.ojoWgY)
      })
    }) : null == exports ? (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk869306.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.hzPwGB)
      })
    }) : (0, Chunk951288.jsx)(Chunk481060.YAO, {
      className: Chunk869306.scroller,
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
    let a = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : ""),
      s = Chunk594174.default.getCurrentUser();
    u()(null != s, "InstantInviteModal: user cannot be undefined");
    let o = (0, Chunk601964.eM)(exports, s) ? Chunk388032.intl.string(Chunk388032.t.HFbByM) : Chunk388032.intl.string(Chunk388032.t.ueBhAw);
    return null != l ? o = Chunk388032.intl.string(Chunk388032.t.CXpS1N) : null != Chunk647438 && (o = Chunk388032.intl.string(Chunk388032.t.ueCrHB)), (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk869306.noScroll,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk10198.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk869306.subText,
          variant: "text-sm/normal",
          children: Chunk512722
        }), (0, Chunk951288.jsx)(Chunk603236.I, eg(ec({}, this.props), {
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
      application: a,
      inviteChannel: o,
      modalState: u
    } = this.props, {
      maxAge: d
    } = u, c = null, g = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : "");
    if (require) {
      let e = Chunk388032.intl.string(Chunk388032.t.MLkj7O);
      null != Chunk647438 ? e = Chunk388032.intl.string(Chunk388032.t["1b9nen"]) : null != Chunk120356 ? e = Chunk388032.intl.string(Chunk388032.t.iI1gMj) : null != l ? e = Chunk388032.intl.string(Chunk388032.t.KaWCyM) : (null == Chunk512722 ? true : Chunk512722.isGuildStageVoice()) && (e = Chunk388032.intl.string(Chunk388032.t["2frWa2"])), c = (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk869306.content,
        children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
          tag: "h5",
          className: Chunk10198.marginBottom8,
          children: module
        }), (0, Chunk951288.jsx)(Chunk603236.I, eg(ec({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: Chunk990547
        }))]
      })
    } else exports || (c = (0, Chunk951288.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      className: Chunk10198.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
        size: 18,
        type: Chunk755721.M0.INVERTED,
        value: Chunk392711 === eh.value,
        onChange: this.handleToggleMaxAge,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.QKJru7)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        text: Chunk388032.intl.string(Chunk388032.t.Yx4IiI),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, i.jsx)(x.P3F, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: eo.cursorPointer,
            children: (0, i.jsx)(x.ewm, {
              size: "sm",
              color: v.Z.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: s()({
        [Chunk869306.noPadding]: !require,
        [Chunk869306.footer]: require
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
        return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
      case Chunk245335.RV.SETTINGS:
        return (0, Chunk951288.jsx)(Chunk585385.D, eg(ec({}, this.props), {
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
    return (0, Chunk951288.jsx)("div", {
      className: this.props.showFriends ? Chunk869306.wrapper : true,
      children: (0, Chunk951288.jsx)(Chunk481060.Y0X, {
        impression: {
          impressionName: Chunk990547.ImpressionNames.GUILD_INVITE,
          impressionProperties: {
            invite_channel_id: null == exports ? true : exports.id,
            invite_guild_id: require.id
          }
        },
        "aria-labelledby": this._headerId,
        transitionState: module,
        className: Chunk869306.modal,
        parentComponent: "InstantInvite",
        children: this.getModalContent()
      })
    })
  }
  constructor(...e) {
    super(...e), ed(this, "_scroller", null), ed(this, "_headerId", c().uniqueId()), ed(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(en.RV.SETTINGS)
    }), ed(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), ed(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), ed(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), ed(this, "handleSetInviteFlags", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        flags: e
      })
    }), ed(this, "handleQueryChange", e => {
      var t;
      let {
        setModalState: n
      } = this.props;
      null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, j.C)(e), n({
        query: e
      })
    }), ed(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), ed(this, "handleToggleMaxAge", () => {
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
    }), ed(this, "getRowHeight", (e, t) => {
      if (e > 0) return 0;
      switch (this.props.rows[t].type) {
        case H.bm.CHANNEL:
        case H.bm.GROUP_DM:
        case H.bm.DM:
        case H.bm.FRIEND:
          return et.k;
        default:
          return 0
      }
    }), ed(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e;
      if (t > 0) return null;
      let {
        analyticsLocation: l,
        source: r
      } = this.props, a = this.getInviteKey(), s = this.props.rows[n], o = "".concat(s.type, "-").concat(s.item.id);
      switch (s.type) {
        case H.bm.GROUP_DM:
        case H.bm.CHANNEL:
          return (0, i.jsx)(et.d, {
            row: s,
            channel: s.item,
            inviteKey: a,
            location: l,
            source: r
          }, o);
        case H.bm.DM:
        case H.bm.FRIEND:
          return (0, i.jsx)(et.d, {
            row: s,
            user: s.item,
            inviteKey: a,
            location: l,
            source: r
          }, o);
        default:
          return null
      }
    })
  }
}
ed(ev, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: em.value
});
let eI = Chunk647438.forwardRef(function(e, t) {
  var n, l;
  let {
    channel: a,
    guild: s,
    source: o,
    guildScheduledEvent: u,
    streamUserId: d,
    applicationId: c,
    transitionState: g,
    onClose: v,
    welcomeToServer: I,
    page: x,
    analyticsLocation: O
  } = e, {
    analyticsLocations: y
  } = (0, E.ZP)(_.Z.INSTANT_INVITE_MODAL), T = (0, m.e7)([B.Z, R.Z, D.ZP], () => {
    if (null != a) return a;
    let e = B.Z.getChannelId(),
      t = null == e || (0, ei.AB)(e) ? true : R.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = R.Z.getChannel(t.parent_id)), null != t ? t : D.ZP.getDefaultChannel(s.id, true, el.Plq.CREATE_INSTANT_INVITE)
  }, [a, s.id]), C = null;
  null != d ? C = en.Iq.STREAM : null != c && (C = en.Iq.EMBEDDED_APPLICATION);
  let A = null != a ? a.getGuildId() : null != s ? s.id : null,
    w = (0, W.xU)({
      guildId: A,
      location: "InstantInviteModalConnected"
    }),
    V = (0, W.WV)({
      guildId: A,
      location: "InstantInviteModalConnected"
    }),
    F = (0, m.e7)([k.Z], () => {
      let e = null != T ? T.id : null;
      return null == e ? null : k.Z.getInvite(e, {
        targetType: C,
        targetUserId: d,
        targetApplicationId: c
      })
    }, [T, C, d, c]),
    [G, H, K, Y] = (0, m.Wu)([L.Z, z.ZP], () => [L.Z.getInviteSuggestionRows(), L.Z.getTotalSuggestionsCount() >= 1, L.Z.getInitialCounts(), null != a && null != T ? z.ZP.getVoiceStatesForChannel(T) : null], [T, a]),
    X = (0, m.e7)([M.ZP], () => {
      let e = null != T ? T.id : null;
      return null != A ? M.ZP.getProps(A, e) : true
    }, [T, A], p.Z),
    J = (0, m.e7)([U.Z], () => null != T && U.Z.can(el.Plq.CREATE_INSTANT_INVITE, T), [T]),
    $ = null === F || !J,
    [ee] = r.useState(() => {
      let e = new Set;
      return null != d && null != Y ? Y.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != A && null != X && C !== en.Iq.EMBEDDED_APPLICATION && X.rows.forEach(t => {
        t.type === M.so.MEMBER && e.add(t.userId)
      }), e
    }),
    et = null == a ? true : a.id,
    er = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(et), [et]);
  r.useEffect(() => {
    (0, j.x)({
      omitUserIds: ee,
      guild: s,
      channel: a,
      applicationId: c,
      inviteTargetType: C
    }).catch(el.VqG)
  }, [ee, a, s, c, C]);
  let [ea] = (0, S.Z)(null != c ? [c] : []), es = null != F ? F.code : true, eo = null == F ? true : F.maxAge, eu = null == F ? true : F.maxUses, ed = null == F ? true : F.temporary, eg = s.vanityURLCode, eI = null != eg && eg.length > 0, ex = !J && !(null == T ? true : T.isGuildVocal()) && eI, ef = (null == T ? true : T.type) === el.d4z.GUILD_VOICE, ej = null != (n = null == F ? true : F.flags) ? n : 0, eN = (0, b.Z)(T);
  J || (null == er ? true : er.invite_code) == null || (es = er.invite_code);
  let [e_, eE] = r.useState({
    query: "",
    maxAgeOptions: V,
    maxAge: null != (l = null != eo ? eo : w) ? l : W.zv,
    savedMaxAge: eo === eh.value ? null != w ? w : em.value : eh.value,
    maxUses: null != eu && 0 !== eu ? eu : ep.value,
    temporary: null != ed && ed,
    networkError: true,
    showVanityURL: ex,
    currentPage: null != x ? x : en.RV.MAIN,
    lastPage: true,
    flags: ej
  }), eS = r.useCallback(e => {
    eE(t => ec({}, t, e))
  }, []), eb = r.useCallback(e => {
    eS({
      currentPage: e,
      lastPage: e_.currentPage
    })
  }, [e_.currentPage, eS]), eO = ef && !ex && !$ && !eN, {
    enabled: ey
  } = P.o.useExperiment({
    guildId: null == s ? true : s.id,
    location: "acc417_3"
  }, {
    autoTrackExposure: eO
  }), {
    maxAge: eT,
    maxUses: eC,
    temporary: eP,
    savedMaxAge: eZ,
    flags: eA
  } = e_, ew = r.useCallback(() => {
    let {
      currentPage: e,
      lastPage: t
    } = e_;
    e === en.RV.SETTINGS && null != t ? eb(t) : v()
  }, [eb, e_, v]), eM = r.useCallback(() => {
    let e = null == T ? true : T.id;
    0 === eC && 0 === eT && !eP && ex ? eS({
      networkError: true,
      showVanityURL: true
    }) : J && null != e && (eS({
      networkError: true,
      showVanityURL: false
    }), f.ZP.createInvite(e, {
      max_age: eT,
      max_uses: eC,
      target_type: C,
      target_user_id: d,
      target_application_id: null == ea ? true : ea.id,
      temporary: eP,
      flags: eA
    }, o).catch(e => eS({
      networkError: e,
      showVanityURL: ex
    }))), eT !== eh.value && eZ !== eh.value && eS({
      savedMaxAge: eh.value
    })
  }, [ex, J, T, o, null == ea ? true : ea.id, C, d, eT, eC, eP, eS, eZ, eA]), eR = (0, N.Z)(T), eD = (0, N.Z)((0, q.yE)(eA, h.$.IS_APPLICATION_BYPASS)), ek = null != eR && eR !== T, eL = null != eD && eD !== (0, q.yE)(eA, h.$.IS_APPLICATION_BYPASS);
  r.useEffect(() => {
    !ex && (ek || eL) && eM()
  }, [eM, ek, eL, ex]);
  let {
    canCreateApplicationBypassInvites: eU,
    isManualApprovalGuild: eV
  } = (0, Q.R)(s);
  return (0, i.jsx)(E.Gt, {
    value: y,
    children: (0, i.jsx)(ev, {
      ref: t,
      canCreateInvites: J,
      noInvitesAvailable: $,
      inviteChannel: T,
      guild: s,
      guildScheduledEvent: u,
      streamUserId: d,
      vanityURLCode: eg,
      targetType: C,
      targetUserId: d,
      application: ea,
      rows: G,
      showFriends: H,
      initialCounts: K,
      code: es,
      source: o,
      welcomeToServer: I,
      analyticsLocations: y,
      analyticsLocation: O,
      transitionState: g,
      onClose: v,
      canShowVanityURL: ex,
      isGuestInviteCreationToggleEnabled: ey && eO,
      shouldHideTemporaryInviteToggle: ey && eO || eV,
      modalState: e_,
      setModalState: eS,
      changePage: eb,
      onGenerateNewLink: eM,
      handleDone: ew,
      isApplicationBypassToggleEnabled: eU && !$
    })
  })
});

function ex(e) {
  let {
    modal: t
  } = (0, Y._k)({
    location: "instant_invite_modal"
  }), n = t ? J.H : eI;
  return (0, i.jsx)(n, ec({}, e))
}