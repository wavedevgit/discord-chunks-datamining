/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eI
}), require("./997841.js"), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  d = require.n(Chunk512722),
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
  Chunk559310 = require("./559310.js"),
  Chunk264229 = require("./264229.js"),
  Chunk366980 = require("./366980.js"),
  Chunk277364 = require("./277364.js"),
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

function eu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ed(e, t, n[t])
    })
  }
  return e
}

function ec(e, t) {
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
let {
  INVITE_OPTIONS_FOREVER: eg,
  INVITE_OPTIONS_7_DAYS: eh,
  INVITE_OPTIONS_UNLIMITED: em
} = Chunk971130.ZP;
class ev extends(i = Chunk647438.PureComponent) {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: i,
      canCreateInvites: l,
      analyticsLocation: s,
      streamUserId: r,
      targetType: a,
      targetUserId: o,
      application: d,
      initialCounts: u,
      rows: c,
      showFriends: g,
      modalState: h,
      setModalState: m
    } = this.props, {
      maxAge: v,
      maxUses: p,
      temporary: x,
      flags: I
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
        target_type: a,
        target_application_id: null == d ? true : d.id,
        temporary: Chunk755721,
        flags: Chunk481060
      }, i).catch(e => m({
        networkError: e
      }))
    }
    if (Chunk990547 && Chunk626135.default.track(Chunk981631.rMx.INVITE_SUGGESTION_OPENED, {
        location: i,
        num_suggestions: c.length,
        num_friends: Chunk392711.numFriends,
        num_dms: Chunk392711.numDms,
        num_group_dms: Chunk392711.numGroupDms,
        guild_id: require.id,
        application_id: null == d ? true : d.id
      }), null != Chunk120356) {
      let e = Chunk199902.Z.getStreamForUser(Chunk120356, require.id),
        t = (0, Chunk687516.L2)(module, Chunk158776.Z);
      Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: i,
        location: Chunk647438,
        other_user_id: Chunk120356,
        application_id: null != exports ? exports.id : null,
        application_name: null != exports ? exports.name : null,
        game_id: null != exports ? exports.id : null
      })
    } else(null == d ? true : d.id) != null || Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: i,
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
      modalState: i
    } = this.props, {
      showVanityURL: l
    } = i, s = Chunk951288 ? exports : null != module ? module : exports;
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
        children: Chunk388032.intl.string(Chunk388032.t.x1SQZb)
      })]
    }) : null
  }
  renderHeader() {
    let e, {
        guild: t,
        showFriends: n,
        guildScheduledEvent: i,
        streamUserId: s,
        application: r,
        welcomeToServer: o,
        inviteChannel: d,
        modalState: u,
        handleDone: c
      } = this.props,
      {
        query: g
      } = Chunk392711,
      h = null,
      m = null;
    if (e = Chunk512722 ? null : null != Chunk647438 ? Chunk388032.intl.string(Chunk388032.t["6VQaqd"]) : null != Chunk120356 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZdK3dW, {
        applicationName: Chunk120356.name
      }) : null != i ? Chunk388032.intl.string(Chunk388032.t.JKV4FL) : (null == d ? true : d.isGuildStageVoice()) ? Chunk388032.intl.string(Chunk388032.t.zTrsH0) : Chunk388032.intl.format(Chunk388032.t.NvVBJU, {
        name: exports.name
      }), null != d) {
      let e = (0, Chunk471445.KS)(d, exports);
      null != module && (m = (0, Chunk951288.jsxs)("div", {
        className: Chunk869306.headerChannelContainer,
        children: [(0, Chunk951288.jsx)(module, {
          className: Chunk869306.channelIcon
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: d.name
        })]
      }))
    }
    return h = exports.features.has(Chunk981631.GuildFeatures.HUB) ? (0, Chunk951288.jsxs)("div", {
      className: Chunk869306.hubHeader,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        className: Chunk869306.headerCloseButtonSpacing,
        id: this._headerId,
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.WhR38i)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        children: Chunk388032.intl.string(Chunk388032.t.Ed4BMs)
      }), require && (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: Chunk990547,
        onChange: this.handleQueryChange,
        placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHYx),
        "aria-label": Chunk388032.intl.string(Chunk388032.t.CmSHYx),
        autoFocus: true,
        onClear: this.handleClearSearch
      })]
    }) : require ? (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 4,
      children: [(0, Chunk951288.jsxs)(Chunk481060.Kqy, {
        gap: 0,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          id: this._headerId,
          variant: "heading-md/semibold",
          className: Chunk869306.headerCloseButtonSpacing,
          children: module
        }), Chunk442837]
      }), (0, Chunk951288.jsx)(Chunk481060.E1j, {
        size: "sm",
        query: Chunk990547,
        onChange: this.handleQueryChange,
        placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHYx),
        autoFocus: true,
        onClear: this.handleClearSearch
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk10198.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        id: this._headerId,
        variant: "heading-md/semibold",
        className: a()(Chunk10198.marginReset, Chunk869306.headerCloseButtonSpacing, Chunk869306.headerText),
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
          }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            className: Chunk869306.welcomeHeading,
            children: Chunk388032.intl.string(Chunk388032.t.DpoBN0)
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
      rows: e,
      sections: t,
      isFriendsInVCInvitesEnabled: n
    } = this.props, i = this.getInviteKey();
    return 0 === module.length ? (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk869306.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.ojoWgX)
      })
    }) : null == i ? (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk869306.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.hzPwGG)
      })
    }) : require && null != exports ? (0, Chunk951288.jsx)(Chunk481060.YAO, {
      style: {
        "--custom-invite-section-header-height": 24,
        "--custom-invite-section-header-gap": 12
      },
      className: Chunk869306.scroller,
      sections: exports.map(e => e.length),
      renderSection: this.renderSection,
      sectionHeight: this.getSectionHeight,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      paddingBottom: 16
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
  renderBody() {
    var e;
    let {
      guild: t,
      showFriends: n,
      streamUserId: i,
      application: s
    } = this.props;
    if (require) return this.renderFriendsBody();
    let r = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : ""),
      a = Chunk594174.default.getCurrentUser();
    d()(null != a, "InstantInviteModal: user cannot be undefined");
    let o = (0, Chunk601964.eM)(exports, a) ? Chunk388032.intl.string(Chunk388032.t.HFbByJ) : Chunk388032.intl.string(Chunk388032.t.ueBhA9);
    return null != i ? o = Chunk388032.intl.string(Chunk388032.t.CXpS1I) : null != Chunk647438 && (o = Chunk388032.intl.string(Chunk388032.t.ueCrHB)), (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk869306.noScroll,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk10198.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk869306.subText,
          variant: "text-sm/normal",
          children: Chunk512722
        }), (0, Chunk951288.jsx)(Chunk603236.I, ec(eu({}, this.props), {
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
      guildScheduledEvent: i,
      streamUserId: s,
      application: r,
      inviteChannel: o,
      modalState: d
    } = this.props, {
      maxAge: u
    } = d, c = null, g = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : "");
    if (require) {
      let e = Chunk388032.intl.string(Chunk388032.t.MLkj7N);
      null != Chunk647438 ? e = Chunk388032.intl.string(Chunk388032.t["1b9neu"]) : null != Chunk120356 ? e = Chunk388032.intl.string(Chunk388032.t.iI1gMg) : null != i ? e = Chunk388032.intl.string(Chunk388032.t.KaWCyD) : (null == Chunk512722 ? true : Chunk512722.isGuildStageVoice()) && (e = Chunk388032.intl.string(Chunk388032.t["2frWa3"])), c = (0, Chunk951288.jsx)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk869306.content,
        children: (0, Chunk951288.jsx)(Chunk481060.gNt, {
          label: module,
          children: (0, Chunk951288.jsx)(Chunk603236.I, ec(eu({}, this.props), {
            setInviteFlags: this.handleSetInviteFlags,
            copyValue: Chunk990547
          }))
        })
      })
    } else exports || (c = (0, Chunk951288.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      className: Chunk10198.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
        size: 18,
        type: Chunk755721.M0.INVERTED,
        value: Chunk392711 === eg.value,
        onChange: this.handleToggleMaxAge,
        children: (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t["QKJru/"])
        })
      }), (0, Chunk951288.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        text: Chunk388032.intl.string(Chunk388032.t.Yx4IiC),
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n
          } = e;
          return (0, l.jsx)(I.P3F, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: ea.cursorPointer,
            children: (0, l.jsx)(I.ewm, {
              size: "sm",
              color: p.Z.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: a()({
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
        return (0, Chunk951288.jsx)(Chunk585385.D, ec(eu({}, this.props), {
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
      guild: n,
      showFriends: i,
      isFriendsInVCInvitesEnabled: s,
      sections: r
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: a()({
        [Chunk869306.isFriendsInVCInvitesExperiment]: Chunk647438 && null != Chunk120356,
        [Chunk869306.wrapper]: i
      }),
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
    super(...e), ed(this, "_scroller", null), ed(this, "_headerId", c().uniqueId()), ed(this, "getSectionVisibility", e => {
      var t;
      let {
        modalState: n
      } = this.props;
      return null == (t = n.sectionVisibility[e]) || t
    }), ed(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(et.RV.SETTINGS)
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
        modalState: n,
        setModalState: i
      } = this.props, l = {
        query: e
      };
      "" === e && "" !== n.query ? (l.sectionVisibility = eu({}, n.defaultSectionVisibility), l.defaultSectionVisibility = {}) : "" !== e && "" === n.query && (l.defaultSectionVisibility = eu({}, n.sectionVisibility), l.sectionVisibility = {}), null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, f.C)(e), i(l)
    }), ed(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), ed(this, "handleToggleMaxAge", () => {
      let {
        modalState: e,
        setModalState: t
      } = this.props, {
        maxAge: n,
        savedMaxAge: i
      } = e;
      t({
        maxAge: i,
        savedMaxAge: n
      })
    }), ed(this, "handleToggleSectionVisibility", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        sectionVisibility: ec(eu({}, t.sectionVisibility), {
          [e]: !this.getSectionVisibility(e)
        })
      })
    }), ed(this, "getRowHeight", (e, t) => {
      let {
        sections: n,
        rows: i
      } = this.props, l = this.getSectionVisibility(e);
      if (null != n && !l) return 0;
      switch ((null == n ? i[t] : n[e][t]).type) {
        case q.bm.CHANNEL:
        case q.bm.GROUP_DM:
        case q.bm.DM:
        case q.bm.FRIEND:
          return ee.k;
        default:
          return 0
      }
    }), ed(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        rows: i,
        sections: s,
        analyticsLocation: r,
        source: a
      } = this.props, o = this.getInviteKey(), d = null == s ? i[n] : s[t][n], u = "".concat(d.type, "-").concat(d.item.id), c = this.getSectionVisibility(t);
      if (null != s && !c) return null;
      switch (d.type) {
        case q.bm.GROUP_DM:
        case q.bm.CHANNEL:
          return (0, l.jsx)(ee.d, {
            row: d,
            channel: d.item,
            inviteKey: o,
            location: r,
            source: a
          }, u);
        case q.bm.DM:
        case q.bm.FRIEND:
          return (0, l.jsx)(ee.d, {
            row: d,
            user: d.item,
            inviteKey: o,
            location: r,
            source: a
          }, u);
        default:
          return null
      }
    }), ed(this, "getSectionHeight", e => 0 === e ? 24 : 36), ed(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        sections: n,
        isFriendsInVCInvitesEnabled: i
      } = this.props;
      if (!i || null == n) return null;
      let s = 0 === t ? el.intl.string(el.t.y29JXs) : el.intl.string(el.t.Sd8Ixw),
        r = this.getSectionVisibility(t);
      return (0, l.jsx)(ep, {
        section: t,
        heading: s,
        isOpen: r,
        onToggleVisibility: this.handleToggleSectionVisibility
      })
    })
  }
}

function ep(e) {
  let {
    section: t,
    heading: n,
    isOpen: i,
    onToggleVisibility: s
  } = e;
  return (0, l.jsxs)(I.P3F, {
    style: {
      "--custom-invite-section-header-height": 24,
      "--custom-invite-section-header-gap": 12 * (0 !== t),
      "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg"
    },
    className: es.inviteSectionHeader,
    onClick: () => s(t),
    children: [(0, l.jsx)(I.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      children: n
    }), (0, l.jsx)(I.CJ0, {
      size: "md",
      color: "currentColor",
      className: es.inviteSectionToggleIcon
    })]
  })
}
ed(ev, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: eh.value
});
let ex = Chunk647438.forwardRef(function(e, t) {
  var n, i;
  let {
    channel: r,
    guild: a,
    source: o,
    guildScheduledEvent: d,
    streamUserId: u,
    applicationId: c,
    transitionState: g,
    onClose: p,
    welcomeToServer: x,
    page: I,
    analyticsLocation: T
  } = e, {
    analyticsLocations: b
  } = (0, y.ZP)(C.Z.INSTANT_INVITE_MODAL), j = (0, m.e7)([G.Z, O.Z, R.ZP], () => {
    if (null != r) return r;
    let e = G.Z.getChannelId(),
      t = null == e || (0, ei.AB)(e) ? true : O.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = O.Z.getChannel(t.parent_id)), null != t ? t : R.ZP.getDefaultChannel(a.id, true, en.Plq.CREATE_INSTANT_INVITE)
  }, [r, a.id]), A = null;
  null != u ? A = et.Iq.STREAM : null != c && (A = et.Iq.EMBEDDED_APPLICATION);
  let P = null != r ? r.getGuildId() : null != a ? a.id : null,
    w = (0, W.xU)({
      guildId: P,
      location: "InstantInviteModalConnected"
    }),
    D = (0, W.WV)({
      guildId: P,
      location: "InstantInviteModalConnected"
    }),
    F = (0, m.e7)([U.Z], () => {
      let e = null != j ? j.id : null;
      return null == e ? null : U.Z.getInvite(e, {
        targetType: A,
        targetUserId: u,
        targetApplicationId: c
      })
    }, [j, A, u, c]),
    {
      isFriendsInVCInvitesEnabled: H
    } = (0, K.am)({
      guildId: null != P ? P : true,
      location: "instant_invite_modal",
      autoTrackExposure: true
    }),
    [Y, Q, $, X] = (0, m.Wu)([L.Z, B.ZP], () => [L.Z.getInviteSuggestionRows(), L.Z.getTotalSuggestionsCount() >= 1, L.Z.getInitialCounts(), null != r && null != j ? B.ZP.getVoiceStatesForChannel(j) : null], [j, r]),
    ee = (0, m.e7)([V.ZP], () => {
      let e = null != j ? j.id : null;
      return null != P ? V.ZP.getProps(P, e) : true
    }, [j, P], v.Z),
    el = (0, m.e7)([k.Z], () => null != j && k.Z.can(en.Plq.CREATE_INSTANT_INVITE, j), [j]),
    es = null === F || !el,
    [er] = s.useState(() => {
      let e = new Set;
      return null != u && null != X ? X.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != P && null != ee && A !== et.Iq.EMBEDDED_APPLICATION && ee.rows.forEach(t => {
        t.type === V.so.MEMBER && e.add(t.userId)
      }), e
    }),
    ea = null == r ? true : r.id,
    eo = (0, m.e7)([M.Z], () => M.Z.getStageInstanceByChannel(ea), [ea]);
  s.useEffect(() => {
    (0, f.x)({
      omitUserIds: er,
      guild: a,
      channel: r,
      applicationId: c,
      inviteTargetType: A
    }).catch(en.VqG)
  }, [er, r, a, c, A]);
  let [ed] = (0, _.Z)(null != c ? [c] : []), ec = null != F ? F.code : true, ep = null == F ? true : F.maxAge, ex = null == F ? true : F.maxUses, eI = null == F ? true : F.temporary, eS = a.vanityURLCode, ef = null != eS && eS.length > 0, eE = !el && !(null == j ? true : j.isGuildVocal()) && ef, eC = null != (n = null == F ? true : F.flags) ? n : 0, ey = (null == j ? true : j.type) === en.d4z.GUILD_VOICE, e_ = (0, N.Z)(j);
  el || (null == eo ? true : eo.invite_code) == null || (ec = eo.invite_code);
  let eN = s.useMemo(() => H && ey ? (0, q.Qq)(Y, P) : null, [H, ey, Y, P]),
    [eT, eb] = s.useState({
      query: "",
      maxAgeOptions: D,
      maxAge: null != (i = null != ep ? ep : w) ? i : W.zv,
      savedMaxAge: ep === eg.value ? null != w ? w : eh.value : eg.value,
      maxUses: null != ex && 0 !== ex ? ex : em.value,
      temporary: null != eI && eI,
      networkError: true,
      showVanityURL: eE,
      currentPage: null != I ? I : et.RV.MAIN,
      lastPage: true,
      flags: eC,
      sectionVisibility: {},
      defaultSectionVisibility: {}
    }),
    ej = s.useCallback(e => {
      eb(t => eu({}, t, e))
    }, []),
    eA = s.useCallback(e => {
      ej({
        currentPage: e,
        lastPage: eT.currentPage
      })
    }, [eT.currentPage, ej]),
    eZ = ey && !eE && !es && !e_,
    {
      enabled: eM
    } = Z.o.useExperiment({
      guildId: null == a ? true : a.id,
      location: "acc417_3"
    }, {
      autoTrackExposure: eZ
    }),
    {
      maxAge: eP,
      maxUses: ew,
      temporary: eV,
      savedMaxAge: eO,
      flags: eR
    } = eT,
    eU = s.useCallback(() => {
      let {
        currentPage: e,
        lastPage: t
      } = eT;
      e === et.RV.SETTINGS && null != t ? eA(t) : p()
    }, [eA, eT, p]),
    eL = s.useCallback(() => {
      let e = null == j ? true : j.id;
      0 === ew && 0 === eP && !eV && eE ? ej({
        networkError: true,
        showVanityURL: true
      }) : el && null != e && (ej({
        networkError: true,
        showVanityURL: false
      }), S.ZP.createInvite(e, {
        max_age: eP,
        max_uses: ew,
        target_type: A,
        target_user_id: u,
        target_application_id: null == ed ? true : ed.id,
        temporary: eV,
        flags: eR
      }, o).catch(e => ej({
        networkError: e,
        showVanityURL: eE
      }))), eP !== eg.value && eO !== eg.value && ej({
        savedMaxAge: eg.value
      })
    }, [eE, el, j, o, null == ed ? true : ed.id, A, u, eP, ew, eV, ej, eO, eR]),
    ek = (0, E.Z)(j),
    eD = (0, E.Z)((0, z.yE)(eR, h.$.IS_APPLICATION_BYPASS)),
    eG = null != ek && ek !== j,
    eF = null != eD && eD !== (0, z.yE)(eR, h.$.IS_APPLICATION_BYPASS);
  s.useEffect(() => {
    !eE && (eG || eF) && eL()
  }, [eL, eG, eF, eE]);
  let {
    canCreateApplicationBypassInvites: eB,
    isManualApprovalGuild: eH
  } = (0, J.R)(a);
  return (0, l.jsx)(y.Gt, {
    value: b,
    children: (0, l.jsx)(ev, {
      ref: t,
      canCreateInvites: el,
      noInvitesAvailable: es,
      inviteChannel: j,
      guild: a,
      guildScheduledEvent: d,
      streamUserId: u,
      vanityURLCode: eS,
      targetType: A,
      targetUserId: u,
      application: ed,
      rows: Y,
      sections: eN,
      isFriendsInVCInvitesEnabled: H,
      showFriends: Q,
      initialCounts: $,
      code: ec,
      source: o,
      welcomeToServer: x,
      analyticsLocations: b,
      analyticsLocation: T,
      transitionState: g,
      onClose: p,
      canShowVanityURL: eE,
      isGuestInviteCreationToggleEnabled: eM && eZ,
      shouldHideTemporaryInviteToggle: eM && eZ || eH,
      modalState: eT,
      setModalState: ej,
      changePage: eA,
      onGenerateNewLink: eL,
      handleDone: eU,
      isApplicationBypassToggleEnabled: eB && !es
    })
  })
});

function eI(e) {
  return (0, l.jsx)(ex, eu({}, e))
}