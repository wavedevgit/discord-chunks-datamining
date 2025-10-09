/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eN
}), require("./997841.js"), require("./388685.js");
var l, Chunk951288 = require("./951288.js"),
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

function eg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      ec(e, t, n[t])
    })
  }
  return e
}

function eh(e, t) {
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
  INVITE_OPTIONS_FOREVER: em,
  INVITE_OPTIONS_7_DAYS: ep,
  INVITE_OPTIONS_UNLIMITED: ev
} = Chunk971130.ZP;
class eI extends(l = Chunk647438.PureComponent) {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
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
        target_type: a,
        target_application_id: null == d ? true : d.id,
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
        application_id: null == d ? true : d.id
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
    } else(null == d ? true : d.id) != null || Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
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
    } = l, s = Chunk951288 ? exports : null != module ? module : exports;
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
        children: Chunk388032.intl.string(Chunk388032.t.x1SQZW)
      })]
    }) : null
  }
  renderHeader() {
    let e, {
        guild: t,
        showFriends: n,
        guildScheduledEvent: l,
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
    if (e = Chunk512722 ? null : null != Chunk647438 ? Chunk388032.intl.string(Chunk388032.t["6VQaqa"]) : null != Chunk120356 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZdK3dX, {
        applicationName: Chunk120356.name
      }) : null != l ? Chunk388032.intl.string(Chunk388032.t.JKV4FB) : (null == d ? true : d.isGuildStageVoice()) ? Chunk388032.intl.string(Chunk388032.t.zTrsHx) : Chunk388032.intl.format(Chunk388032.t.NvVBJS, {
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
    return h = exports.features.has(Chunk981631.oNc.HUB) ? (0, Chunk951288.jsxs)("div", {
      className: Chunk451964.hubHeader,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        className: Chunk451964.headerCloseButtonSpacing,
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
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          id: this._headerId,
          variant: "heading-md/semibold",
          className: Chunk451964.headerCloseButtonSpacing,
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
        className: Chunk197571.marginTop8,
        children: this.renderChannelWarning()
      })]
    }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        id: this._headerId,
        variant: "heading-md/semibold",
        className: a()(Chunk197571.marginReset, Chunk451964.headerCloseButtonSpacing, Chunk451964.headerText),
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
          }), (0, Chunk951288.jsx)(Chunk481060.X6q, {
            variant: "heading-lg/semibold",
            className: Chunk451964.welcomeHeading,
            children: Chunk388032.intl.string(Chunk388032.t.DpoBNz)
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
    } = this.props, l = this.getInviteKey();
    return 0 === module.length ? (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk451964.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.ojoWgY)
      })
    }) : null == l ? (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk451964.inviteRowEmptyState,
      children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
        children: Chunk388032.intl.string(Chunk388032.t.hzPwGB)
      })
    }) : require && null != exports ? (0, Chunk951288.jsx)(Chunk481060.YAO, {
      style: {
        "--custom-invite-section-header-height": 24,
        "--custom-invite-section-header-gap": 16
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
      streamUserId: l,
      application: s
    } = this.props;
    if (require) return this.renderFriendsBody();
    let r = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : ""),
      a = Chunk594174.default.getCurrentUser();
    d()(null != a, "InstantInviteModal: user cannot be undefined");
    let o = (0, Chunk601964.eM)(exports, a) ? Chunk388032.intl.string(Chunk388032.t.HFbByM) : Chunk388032.intl.string(Chunk388032.t.ueBhAw);
    return null != l ? o = Chunk388032.intl.string(Chunk388032.t.CXpS1N) : null != Chunk647438 && (o = Chunk388032.intl.string(Chunk388032.t.ueCrHB)), (0, Chunk951288.jsx)(Chunk481060.hzk, {
      className: Chunk451964.noScroll,
      children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk197571.marginBottom20,
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk451964.subText,
          variant: "text-sm/normal",
          children: Chunk512722
        }), (0, Chunk951288.jsx)(Chunk603236.I, eh(eg({}, this.props), {
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
      streamUserId: s,
      application: r,
      inviteChannel: o,
      modalState: d
    } = this.props, {
      maxAge: u
    } = d, c = null, g = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : "");
    if (require) {
      let e = Chunk388032.intl.string(Chunk388032.t.MLkj7O);
      null != Chunk647438 ? e = Chunk388032.intl.string(Chunk388032.t["1b9nen"]) : null != Chunk120356 ? e = Chunk388032.intl.string(Chunk388032.t.iI1gMj) : null != l ? e = Chunk388032.intl.string(Chunk388032.t.KaWCyM) : (null == Chunk512722 ? true : Chunk512722.isGuildStageVoice()) && (e = Chunk388032.intl.string(Chunk388032.t["2frWa2"])), c = (0, Chunk951288.jsx)(Chunk600164.Z, {
        direction: Chunk600164.Z.Direction.VERTICAL,
        className: Chunk451964.content,
        children: (0, Chunk951288.jsx)(Chunk481060.gNt, {
          label: module,
          children: (0, Chunk951288.jsx)(Chunk603236.I, eh(eg({}, this.props), {
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
          children: Chunk388032.intl.string(Chunk388032.t.QKJru7)
        })
      }), (0, Chunk951288.jsx)(Chunk481060.ua7, {
        "data-migration-pending": true,
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
            className: ed.cursorPointer,
            children: (0, i.jsx)(x.ewm, {
              size: "sm",
              color: v.Z.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
      })]
    }));
    return null != c ? (0, Chunk951288.jsx)(Chunk481060.mzw, {
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
        return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [this.renderHeader(), this.renderBody(), this.renderFooter()]
        });
      case Chunk245335.RV.SETTINGS:
        return (0, Chunk951288.jsx)(Chunk585385.D, eh(eg({}, this.props), {
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
      showFriends: l,
      isFriendsInVCInvitesEnabled: s,
      sections: r
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: a()({
        [Chunk451964.isFriendsInVCInvitesExperiment]: Chunk647438 && null != Chunk120356,
        [Chunk451964.wrapper]: l
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
      e(el.RV.SETTINGS)
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
        setModalState: l
      } = this.props, i = {
        query: e
      };
      "" === e && "" !== n.query ? (i.sectionVisibility = eg({}, n.defaultSectionVisibility), i.defaultSectionVisibility = {}) : "" !== e && "" === n.query && (i.defaultSectionVisibility = eg({}, n.sectionVisibility), i.sectionVisibility = {}), null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, N.C)(e), l(i)
    }), ec(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), ec(this, "handleToggleMaxAge", () => {
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
    }), ec(this, "handleToggleSectionVisibility", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        sectionVisibility: eh(eg({}, t.sectionVisibility), {
          [e]: !this.getSectionVisibility(e)
        })
      })
    }), ec(this, "getRowHeight", (e, t) => {
      let {
        sections: n,
        rows: l
      } = this.props, i = this.getSectionVisibility(e);
      if (null != n && !i) return 0;
      switch ((null == n ? l[t] : n[e][t]).type) {
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
        rows: l,
        sections: s,
        analyticsLocation: r,
        source: a
      } = this.props, o = this.getInviteKey(), d = null == s ? l[n] : s[t][n], u = "".concat(d.type, "-").concat(d.item.id), c = this.getSectionVisibility(t);
      if (null != s && !c) return null;
      switch (d.type) {
        case q.bm.GROUP_DM:
        case q.bm.CHANNEL:
          return (0, i.jsx)(en.d, {
            row: d,
            channel: d.item,
            inviteKey: o,
            location: r,
            source: a
          }, u);
        case q.bm.DM:
        case q.bm.FRIEND:
          return (0, i.jsx)(en.d, {
            row: d,
            user: d.item,
            inviteKey: o,
            location: r,
            source: a
          }, u);
        default:
          return null
      }
    }), ec(this, "getSectionHeight", e => 0 === e ? 24 : 40), ec(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        sections: n,
        isFriendsInVCInvitesEnabled: l
      } = this.props;
      if (!l || null == n) return null;
      let s = 0 === t ? er.intl.string(er.t.y29JXl) : er.intl.string(er.t.Sd8Ix8),
        r = this.getSectionVisibility(t);
      return (0, i.jsx)(ex, {
        section: t,
        heading: s,
        isOpen: r,
        onToggleVisibility: this.handleToggleSectionVisibility
      })
    })
  }
}

function ex(e) {
  let {
    section: t,
    heading: n,
    isOpen: l,
    onToggleVisibility: s
  } = e;
  return (0, i.jsxs)(x.P3F, {
    style: {
      "--custom-invite-section-header-height": 24,
      "--custom-invite-section-header-gap": 16 * (0 !== t),
      "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg"
    },
    className: ea.inviteSectionHeader,
    onClick: () => s(t),
    children: [(0, i.jsx)(x.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      children: n
    }), (0, i.jsx)(x.CJ0, {
      size: "md",
      color: "currentColor",
      className: ea.inviteSectionToggleIcon
    })]
  })
}
ec(eI, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ep.value
});
let ef = Chunk647438.forwardRef(function(e, t) {
  var n, l;
  let {
    channel: r,
    guild: a,
    source: o,
    guildScheduledEvent: d,
    streamUserId: u,
    applicationId: c,
    transitionState: g,
    onClose: v,
    welcomeToServer: I,
    page: x,
    analyticsLocation: y
  } = e, {
    analyticsLocations: T
  } = (0, b.ZP)(_.Z.INSTANT_INVITE_MODAL), O = (0, m.e7)([F.Z, R.Z, V.ZP], () => {
    if (null != r) return r;
    let e = F.Z.getChannelId(),
      t = null == e || (0, es.AB)(e) ? true : R.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = R.Z.getChannel(t.parent_id)), null != t ? t : V.ZP.getDefaultChannel(a.id, true, ei.Plq.CREATE_INSTANT_INVITE)
  }, [r, a.id]), C = null;
  null != u ? C = el.Iq.STREAM : null != c && (C = el.Iq.EMBEDDED_APPLICATION);
  let A = null != r ? r.getGuildId() : null != a ? a.id : null,
    M = (0, W.xU)({
      guildId: A,
      location: "InstantInviteModalConnected"
    }),
    U = (0, W.WV)({
      guildId: A,
      location: "InstantInviteModalConnected"
    }),
    z = (0, m.e7)([k.Z], () => {
      let e = null != O ? O.id : null;
      return null == e ? null : k.Z.getInvite(e, {
        targetType: C,
        targetUserId: u,
        targetApplicationId: c
      })
    }, [O, C, u, c]),
    {
      isFriendsInVCInvitesEnabled: G
    } = (0, Y.am)({
      guildId: null != A ? A : true,
      location: "instant_invite_modal",
      autoTrackExposure: true
    }),
    [K, X, Q, J] = (0, m.Wu)([D.Z, B.ZP], () => [D.Z.getInviteSuggestionRows(), D.Z.getTotalSuggestionsCount() >= 1, D.Z.getInitialCounts(), null != r && null != O ? B.ZP.getVoiceStatesForChannel(O) : null], [O, r]),
    ee = (0, m.e7)([w.ZP], () => {
      let e = null != O ? O.id : null;
      return null != A ? w.ZP.getProps(A, e) : true
    }, [O, A], p.Z),
    et = (0, m.e7)([L.Z], () => null != O && L.Z.can(ei.Plq.CREATE_INSTANT_INVITE, O), [O]),
    en = null === z || !et,
    [er] = s.useState(() => {
      let e = new Set;
      return null != u && null != J ? J.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != A && null != ee && C !== el.Iq.EMBEDDED_APPLICATION && ee.rows.forEach(t => {
        t.type === w.so.MEMBER && e.add(t.userId)
      }), e
    }),
    ea = null == r ? true : r.id,
    eo = (0, m.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(ea), [ea]);
  s.useEffect(() => {
    (0, N.x)({
      omitUserIds: er,
      guild: a,
      channel: r,
      applicationId: c,
      inviteTargetType: C
    }).catch(ei.VqG)
  }, [er, r, a, c, C]);
  let [ed] = (0, j.Z)(null != c ? [c] : []), eu = null != z ? z.code : true, ec = null == z ? true : z.maxAge, eh = null == z ? true : z.maxUses, ex = null == z ? true : z.temporary, ef = a.vanityURLCode, eN = null != ef && ef.length > 0, eS = !et && !(null == O ? true : O.isGuildVocal()) && eN, e_ = null != (n = null == z ? true : z.flags) ? n : 0, eb = (null == O ? true : O.type) === ei.d4z.GUILD_VOICE, ej = (0, E.Z)(O);
  et || (null == eo ? true : eo.invite_code) == null || (eu = eo.invite_code);
  let eE = s.useMemo(() => G && eb ? (0, q.Qq)(K, A) : null, [G, eb, K, A]),
    [ey, eT] = s.useState({
      query: "",
      maxAgeOptions: U,
      maxAge: null != (l = null != ec ? ec : M) ? l : W.zv,
      savedMaxAge: ec === em.value ? null != M ? M : ep.value : em.value,
      maxUses: null != eh && 0 !== eh ? eh : ev.value,
      temporary: null != ex && ex,
      networkError: true,
      showVanityURL: eS,
      currentPage: null != x ? x : el.RV.MAIN,
      lastPage: true,
      flags: e_,
      sectionVisibility: {},
      defaultSectionVisibility: {}
    }),
    eO = s.useCallback(e => {
      eT(t => eg({}, t, e))
    }, []),
    eC = s.useCallback(e => {
      eO({
        currentPage: e,
        lastPage: ey.currentPage
      })
    }, [ey.currentPage, eO]),
    eP = eb && !eS && !en && !ej,
    {
      enabled: eZ
    } = P.o.useExperiment({
      guildId: null == a ? true : a.id,
      location: "acc417_3"
    }, {
      autoTrackExposure: eP
    }),
    {
      maxAge: eA,
      maxUses: eM,
      temporary: ew,
      savedMaxAge: eR,
      flags: eV
    } = ey,
    ek = s.useCallback(() => {
      let {
        currentPage: e,
        lastPage: t
      } = ey;
      e === el.RV.SETTINGS && null != t ? eC(t) : v()
    }, [eC, ey, v]),
    eD = s.useCallback(() => {
      let e = null == O ? true : O.id;
      0 === eM && 0 === eA && !ew && eS ? eO({
        networkError: true,
        showVanityURL: true
      }) : et && null != e && (eO({
        networkError: true,
        showVanityURL: false
      }), f.ZP.createInvite(e, {
        max_age: eA,
        max_uses: eM,
        target_type: C,
        target_user_id: u,
        target_application_id: null == ed ? true : ed.id,
        temporary: ew,
        flags: eV
      }, o).catch(e => eO({
        networkError: e,
        showVanityURL: eS
      }))), eA !== em.value && eR !== em.value && eO({
        savedMaxAge: em.value
      })
    }, [eS, et, O, o, null == ed ? true : ed.id, C, u, eA, eM, ew, eO, eR, eV]),
    eL = (0, S.Z)(O),
    eU = (0, S.Z)((0, H.yE)(eV, h.$.IS_APPLICATION_BYPASS)),
    eF = null != eL && eL !== O,
    ez = null != eU && eU !== (0, H.yE)(eV, h.$.IS_APPLICATION_BYPASS);
  s.useEffect(() => {
    !eS && (eF || ez) && eD()
  }, [eD, eF, ez, eS]);
  let {
    canCreateApplicationBypassInvites: eB,
    isManualApprovalGuild: eG
  } = (0, $.R)(a);
  return (0, i.jsx)(b.Gt, {
    value: T,
    children: (0, i.jsx)(eI, {
      ref: t,
      canCreateInvites: et,
      noInvitesAvailable: en,
      inviteChannel: O,
      guild: a,
      guildScheduledEvent: d,
      streamUserId: u,
      vanityURLCode: ef,
      targetType: C,
      targetUserId: u,
      application: ed,
      rows: K,
      sections: eE,
      isFriendsInVCInvitesEnabled: G,
      showFriends: X,
      initialCounts: Q,
      code: eu,
      source: o,
      welcomeToServer: I,
      analyticsLocations: T,
      analyticsLocation: y,
      transitionState: g,
      onClose: v,
      canShowVanityURL: eS,
      isGuestInviteCreationToggleEnabled: eZ && eP,
      shouldHideTemporaryInviteToggle: eZ && eP || eG,
      modalState: ey,
      setModalState: eO,
      changePage: eC,
      onGenerateNewLink: eD,
      handleDone: ek,
      isApplicationBypassToggleEnabled: eB && !en
    })
  })
});

function eN(e) {
  let {
    modal: t
  } = (0, X._k)({
    location: "instant_invite_modal"
  }), n = t ? J.H : ef;
  return (0, i.jsx)(n, eg({}, e))
}