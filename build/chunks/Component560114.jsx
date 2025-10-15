/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ey
}), require("./997841.js"), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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

function ec(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ec(e, t, n[t])
    })
  }
  return e
}

function eg(e, t) {
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
  INVITE_OPTIONS_FOREVER: em,
  INVITE_OPTIONS_7_DAYS: ep,
  INVITE_OPTIONS_UNLIMITED: ev
} = Chunk971130.ZP;
class ex extends(i = Chunk647438.PureComponent) {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: i,
      canCreateInvites: l,
      analyticsLocation: s,
      streamUserId: a,
      targetType: r,
      targetUserId: o,
      application: d,
      initialCounts: u,
      rows: c,
      showFriends: h,
      modalState: g,
      setModalState: m
    } = this.props, {
      maxAge: p,
      maxUses: v,
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
        target_type: r,
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
      className: Chunk451964.warningContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Mgn, {
        size: "custom",
        className: Chunk451964.warningIcon,
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
        application: a,
        welcomeToServer: o,
        inviteChannel: d,
        modalState: u,
        handleDone: c
      } = this.props,
      {
        query: h
      } = Chunk392711,
      g = null,
      m = null;
    if (e = Chunk512722 ? null : null != Chunk647438 ? Chunk388032.intl.string(Chunk388032.t["6VQaqd"]) : null != Chunk120356 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZdK3dW, {
        applicationName: Chunk120356.name
      }) : null != i ? Chunk388032.intl.string(Chunk388032.t.JKV4FL) : (null == d ? true : d.isGuildStageVoice()) ? Chunk388032.intl.string(Chunk388032.t.zTrsH0) : Chunk388032.intl.format(Chunk388032.t.NvVBJU, {
        name: exports.name
      }), null != d) {
      let e = (0, Chunk471445.KS)(d, exports);
      null != module && (m = (0, Chunk951288.jsxs)("div", {
        className: Chunk451964.headerChannelContainer,
        children: [(0, Chunk951288.jsx)(module, {
          className: Chunk451964.channelIcon
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "interactive-normal",
          variant: "text-md/normal",
          children: d.name
        })]
      }))
    }
    return g = exports.features.has(Chunk981631.oNc.HUB) ? (0, Chunk951288.jsxs)("div", {
      className: Chunk451964.hubHeader,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        className: Chunk451964.headerCloseButtonSpacing,
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
          className: Chunk451964.headerCloseButtonSpacing,
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
        className: Chunk197571.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        id: this._headerId,
        variant: "heading-md/semibold",
        className: r()(Chunk197571.marginReset, Chunk451964.headerCloseButtonSpacing, Chunk451964.headerText),
        children: module
      }), Chunk442837, this.renderChannelWarning()]
    }), (0, Chunk951288.jsxs)(Chunk481060.xBx, {
      separator: require,
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk451964.closeButton,
        children: (0, Chunk951288.jsx)(Chunk481060.olH, {
          onClick: c
        })
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk451964.headerContainer,
        children: [Chunk512722 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)("img", {
            className: Chunk451964.welcomeImage,
            src: Chunk622577,
            alt: ""
          }), (0, Chunk951288.jsx)(Chunk481060.Heading, {
            variant: "heading-lg/semibold",
            className: Chunk451964.welcomeHeading,
            children: Chunk388032.intl.string(Chunk388032.t.DpoBN0)
          }), (0, Chunk951288.jsx)(Chunk481060.Text, {
            variant: "text-md/normal",
            color: "text-secondary",
            className: Chunk451964.welcomeSubheading,
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
      className: Chunk451964.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.ojoWgX)
      })
    }) : null == i ? (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk451964.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.hzPwGG)
      })
    }) : require && null != exports ? (0, Chunk951288.jsx)(Chunk481060.YAO, {
      style: {
        "--custom-invite-section-header-height": 24,
        "--custom-invite-section-header-gap": 12
      },
      className: Chunk451964.scroller,
      sections: exports.map(e => e.length),
      renderSection: this.renderSection,
      sectionHeight: this.getSectionHeight,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight,
      paddingBottom: 16
    }) : (0, Chunk951288.jsx)(Chunk481060.YAO, {
      className: Chunk451964.scroller,
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
    let a = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : ""),
      r = Chunk594174.default.getCurrentUser();
    d()(null != r, "InstantInviteModal: user cannot be undefined");
    let o = (0, Chunk601964.eM)(exports, r) ? Chunk388032.intl.string(Chunk388032.t.HFbByJ) : Chunk388032.intl.string(Chunk388032.t.ueBhA9);
    return null != i ? o = Chunk388032.intl.string(Chunk388032.t.CXpS1I) : null != Chunk647438 && (o = Chunk388032.intl.string(Chunk388032.t.ueCrHB)), (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk451964.noScroll,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk451964.subText,
          variant: "text-sm/normal",
          children: Chunk512722
        }), (0, Chunk951288.jsx)(Chunk603236.I, eg(eh({}, this.props), {
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
      application: a,
      inviteChannel: o,
      modalState: d
    } = this.props, {
      maxAge: u
    } = d, c = null, h = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : "");
    if (require) {
      let e = Chunk388032.intl.string(Chunk388032.t.MLkj7N);
      null != Chunk647438 ? e = Chunk388032.intl.string(Chunk388032.t["1b9neu"]) : null != Chunk120356 ? e = Chunk388032.intl.string(Chunk388032.t.iI1gMg) : null != i ? e = Chunk388032.intl.string(Chunk388032.t.KaWCyD) : (null == Chunk512722 ? true : Chunk512722.isGuildStageVoice()) && (e = Chunk388032.intl.string(Chunk388032.t["2frWa3"])), c = (0, Chunk951288.jsx)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk451964.content,
        children: (0, Chunk951288.jsx)(Chunk481060.gNt, {
          label: module,
          children: (0, Chunk951288.jsx)(Chunk603236.I, eg(eh({}, this.props), {
            setInviteFlags: this.handleSetInviteFlags,
            copyValue: Chunk990547
          }))
        })
      })
    } else exports || (c = (0, Chunk951288.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      className: Chunk197571.marginTop20,
      children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
        size: 18,
        type: Chunk755721.M0.INVERTED,
        value: Chunk392711 === em.value,
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
            className: ed.cursorPointer,
            children: (0, l.jsx)(I.ewm, {
              size: "sm",
              color: v.Z.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, Chunk951288.jsx)(Chunk481060.mzw, {
      className: r()({
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
        return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
      case Chunk245335.RV.SETTINGS:
        return (0, Chunk951288.jsx)(Chunk585385.D, eg(eh({}, this.props), {
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
      sections: a
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: r()({
        [Chunk451964.isFriendsInVCInvitesExperiment]: Chunk647438 && null != Chunk120356,
        [Chunk451964.wrapper]: i
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
        className: Chunk451964.modal,
        parentComponent: "InstantInvite",
        children: this.getModalContent()
      })
    })
  }
  constructor(...e) {
    super(...e), ec(this, "_scroller", null), ec(this, "_headerId", c().uniqueId()), ec(this, "getSectionVisibility", e => {
      var t;
      let {
        modalState: n
      } = this.props;
      return null == (t = n.sectionVisibility[e]) || t
    }), ec(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(ei.RV.SETTINGS)
    }), ec(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), ec(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), ec(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), ec(this, "handleSetInviteFlags", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        flags: e
      })
    }), ec(this, "handleQueryChange", e => {
      var t;
      let {
        modalState: n,
        setModalState: i
      } = this.props, l = {
        query: e
      };
      "" === e && "" !== n.query ? (l.sectionVisibility = eh({}, n.defaultSectionVisibility), l.defaultSectionVisibility = {}) : "" !== e && "" === n.query && (l.defaultSectionVisibility = eh({}, n.sectionVisibility), l.sectionVisibility = {}), null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, y.C)(e), i(l)
    }), ec(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), ec(this, "handleToggleMaxAge", () => {
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
    }), ec(this, "handleToggleSectionVisibility", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        sectionVisibility: eg(eh({}, t.sectionVisibility), {
          [e]: !this.getSectionVisibility(e)
        })
      })
    }), ec(this, "getRowHeight", (e, t) => {
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
          return en.k;
        default:
          return 0
      }
    }), ec(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        rows: i,
        sections: s,
        analyticsLocation: a,
        source: r
      } = this.props, o = this.getInviteKey(), d = null == s ? i[n] : s[t][n], u = "".concat(d.type, "-").concat(d.item.id), c = this.getSectionVisibility(t);
      if (null != s && !c) return null;
      switch (d.type) {
        case q.bm.GROUP_DM:
        case q.bm.CHANNEL:
          return (0, l.jsx)(en.d, {
            row: d,
            channel: d.item,
            inviteKey: o,
            location: a,
            source: r
          }, u);
        case q.bm.DM:
        case q.bm.FRIEND:
          return (0, l.jsx)(en.d, {
            row: d,
            user: d.item,
            inviteKey: o,
            location: a,
            source: r
          }, u);
        default:
          return null
      }
    }), ec(this, "getSectionHeight", e => 0 === e ? 24 : 36), ec(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        sections: n,
        isFriendsInVCInvitesEnabled: i
      } = this.props;
      if (!i || null == n) return null;
      let s = 0 === t ? ea.intl.string(ea.t.y29JXs) : ea.intl.string(ea.t.Sd8Ixw),
        a = this.getSectionVisibility(t);
      return (0, l.jsx)(eI, {
        section: t,
        heading: s,
        isOpen: a,
        onToggleVisibility: this.handleToggleSectionVisibility
      })
    })
  }
}

function eI(e) {
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
    className: er.inviteSectionHeader,
    onClick: () => s(t),
    children: [(0, l.jsx)(I.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      children: n
    }), (0, l.jsx)(I.CJ0, {
      size: "md",
      color: "currentColor",
      className: er.inviteSectionToggleIcon
    })]
  })
}
ec(ex, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ep.value
});
let eS = Chunk647438.forwardRef(function(e, t) {
  var n, i;
  let {
    channel: a,
    guild: r,
    source: o,
    guildScheduledEvent: d,
    streamUserId: u,
    applicationId: c,
    transitionState: h,
    onClose: v,
    welcomeToServer: x,
    page: I,
    analyticsLocation: b
  } = e, {
    analyticsLocations: T
  } = (0, N.ZP)(C.Z.INSTANT_INVITE_MODAL), _ = (0, m.e7)([F.Z, R.Z, L.ZP], () => {
    if (null != a) return a;
    let e = F.Z.getChannelId(),
      t = null == e || (0, es.AB)(e) ? true : R.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = R.Z.getChannel(t.parent_id)), null != t ? t : L.ZP.getDefaultChannel(r.id, true, el.Plq.CREATE_INSTANT_INVITE)
  }, [a, r.id]), P = null;
  null != u ? P = ei.Iq.STREAM : null != c && (P = ei.Iq.EMBEDDED_APPLICATION);
  let A = null != a ? a.getGuildId() : null != r ? r.id : null,
    w = (0, W.xU)({
      guildId: A,
      location: "InstantInviteModalConnected"
    }),
    D = (0, W.WV)({
      guildId: A,
      location: "InstantInviteModalConnected"
    }),
    B = (0, m.e7)([O.Z], () => {
      let e = null != _ ? _.id : null;
      return null == e ? null : O.Z.getInvite(e, {
        targetType: P,
        targetUserId: u,
        targetApplicationId: c
      })
    }, [_, P, u, c]),
    {
      isFriendsInVCInvitesEnabled: G
    } = (0, K.am)({
      guildId: null != A ? A : true,
      location: "instant_invite_modal",
      autoTrackExposure: true
    }),
    [Y, J, Q, X] = (0, m.Wu)([k.Z, z.ZP], () => [k.Z.getInviteSuggestionRows(), k.Z.getTotalSuggestionsCount() >= 1, k.Z.getInitialCounts(), null != a && null != _ ? z.ZP.getVoiceStatesForChannel(_) : null], [_, a]),
    ee = (0, m.e7)([V.ZP], () => {
      let e = null != _ ? _.id : null;
      return null != A ? V.ZP.getProps(A, e) : true
    }, [_, A], p.Z),
    et = (0, m.e7)([U.Z], () => null != _ && U.Z.can(el.Plq.CREATE_INSTANT_INVITE, _), [_]),
    en = null === B || !et,
    [ea] = s.useState(() => {
      let e = new Set;
      return null != u && null != X ? X.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != A && null != ee && P !== ei.Iq.EMBEDDED_APPLICATION && ee.rows.forEach(t => {
        t.type === V.so.MEMBER && e.add(t.userId)
      }), e
    }),
    er = null == a ? true : a.id,
    eo = (0, m.e7)([M.Z], () => M.Z.getStageInstanceByChannel(er), [er]);
  s.useEffect(() => {
    (0, y.x)({
      omitUserIds: ea,
      guild: r,
      channel: a,
      applicationId: c,
      inviteTargetType: P
    }).catch(el.VqG)
  }, [ea, a, r, c, P]);
  let [ed] = (0, f.Z)(null != c ? [c] : []), eu = null != B ? B.code : true, ec = null == B ? true : B.maxAge, eg = null == B ? true : B.maxUses, eI = null == B ? true : B.temporary, eS = r.vanityURLCode, ey = null != eS && eS.length > 0, ej = !et && !(null == _ ? true : _.isGuildVocal()) && ey, eC = null != (n = null == B ? true : B.flags) ? n : 0, eN = (null == _ ? true : _.type) === el.d4z.GUILD_VOICE, ef = (0, E.Z)(_);
  et || (null == eo ? true : eo.invite_code) == null || (eu = eo.invite_code);
  let eE = s.useMemo(() => G && eN ? (0, q.Qq)(Y, A) : null, [G, eN, Y, A]),
    [eb, eT] = s.useState({
      query: "",
      maxAgeOptions: D,
      maxAge: null != (i = null != ec ? ec : w) ? i : W.zv,
      savedMaxAge: ec === em.value ? null != w ? w : ep.value : em.value,
      maxUses: null != eg && 0 !== eg ? eg : ev.value,
      temporary: null != eI && eI,
      networkError: true,
      showVanityURL: ej,
      currentPage: null != I ? I : ei.RV.MAIN,
      lastPage: true,
      flags: eC,
      sectionVisibility: {},
      defaultSectionVisibility: {}
    }),
    e_ = s.useCallback(e => {
      eT(t => eh({}, t, e))
    }, []),
    eP = s.useCallback(e => {
      e_({
        currentPage: e,
        lastPage: eb.currentPage
      })
    }, [eb.currentPage, e_]),
    eZ = eN && !ej && !en && !ef,
    {
      enabled: eM
    } = Z.o.useExperiment({
      guildId: null == r ? true : r.id,
      location: "acc417_3"
    }, {
      autoTrackExposure: eZ
    }),
    {
      maxAge: eA,
      maxUses: ew,
      temporary: eV,
      savedMaxAge: eR,
      flags: eL
    } = eb,
    eO = s.useCallback(() => {
      let {
        currentPage: e,
        lastPage: t
      } = eb;
      e === ei.RV.SETTINGS && null != t ? eP(t) : v()
    }, [eP, eb, v]),
    ek = s.useCallback(() => {
      let e = null == _ ? true : _.id;
      0 === ew && 0 === eA && !eV && ej ? e_({
        networkError: true,
        showVanityURL: true
      }) : et && null != e && (e_({
        networkError: true,
        showVanityURL: false
      }), S.ZP.createInvite(e, {
        max_age: eA,
        max_uses: ew,
        target_type: P,
        target_user_id: u,
        target_application_id: null == ed ? true : ed.id,
        temporary: eV,
        flags: eL
      }, o).catch(e => e_({
        networkError: e,
        showVanityURL: ej
      }))), eA !== em.value && eR !== em.value && e_({
        savedMaxAge: em.value
      })
    }, [ej, et, _, o, null == ed ? true : ed.id, P, u, eA, ew, eV, e_, eR, eL]),
    eU = (0, j.Z)(_),
    eD = (0, j.Z)((0, H.yE)(eL, g.$.IS_APPLICATION_BYPASS)),
    eF = null != eU && eU !== _,
    eB = null != eD && eD !== (0, H.yE)(eL, g.$.IS_APPLICATION_BYPASS);
  s.useEffect(() => {
    !ej && (eF || eB) && ek()
  }, [ek, eF, eB, ej]);
  let {
    canCreateApplicationBypassInvites: ez,
    isManualApprovalGuild: eG
  } = (0, $.R)(r);
  return (0, l.jsx)(N.Gt, {
    value: T,
    children: (0, l.jsx)(ex, {
      ref: t,
      canCreateInvites: et,
      noInvitesAvailable: en,
      inviteChannel: _,
      guild: r,
      guildScheduledEvent: d,
      streamUserId: u,
      vanityURLCode: eS,
      targetType: P,
      targetUserId: u,
      application: ed,
      rows: Y,
      sections: eE,
      isFriendsInVCInvitesEnabled: G,
      showFriends: J,
      initialCounts: Q,
      code: eu,
      source: o,
      welcomeToServer: x,
      analyticsLocations: T,
      analyticsLocation: b,
      transitionState: h,
      onClose: v,
      canShowVanityURL: ej,
      isGuestInviteCreationToggleEnabled: eM && eZ,
      shouldHideTemporaryInviteToggle: eM && eZ || eG,
      modalState: eb,
      setModalState: e_,
      changePage: eP,
      onGenerateNewLink: ek,
      handleDone: eO,
      isApplicationBypassToggleEnabled: ez && !en
    })
  })
});

function ey(e) {
  let {
    modal: t
  } = (0, J._k)({
    location: "instant_invite_modal"
  }), n = t ? X.InstantInviteRefreshModal : eS;
  return (0, l.jsx)(n, eh({}, e))
}