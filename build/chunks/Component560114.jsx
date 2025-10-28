/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ev
}), require("./997841.js"), require("./388685.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk533800 = require("./533800.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk692547 = require("./692547.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk247272 = require("./247272.js"),
  Chunk110924 = require("./110924.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk447003 = require("./447003.js"),
  Chunk471445 = require("./471445.js"),
  Chunk687516 = require("./687516.js"),
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
  Chunk451964 = require("./451964.js"),
  Chunk103126 = require("./103126.js");

function es(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      es(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
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
  INVITE_OPTIONS_FOREVER: eo,
  INVITE_OPTIONS_7_DAYS: eu,
  INVITE_OPTIONS_UNLIMITED: ed
} = Chunk971130.ZP;
class ec extends(i = Chunk647438.PureComponent) {
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
      application: u,
      initialCounts: d,
      rows: c,
      showFriends: g,
      modalState: h,
      setModalState: v
    } = this.props, {
      maxAge: p,
      maxUses: I,
      temporary: m,
      flags: x
    } = Chunk775086;
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
        target_application_id: null == u ? true : u.id,
        temporary: Chunk681715,
        flags: Chunk481060
      }, i).catch(e => v({
        networkError: e
      }))
    }
    if (Chunk533800 && Chunk626135.default.track(Chunk981631.rMx.INVITE_SUGGESTION_OPENED, {
        location: i,
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
        source: i,
        location: Chunk647438,
        other_user_id: Chunk120356,
        application_id: null != exports ? exports.id : null,
        application_name: null != exports ? exports.name : null,
        game_id: null != exports ? exports.id : null
      })
    } else(null == u ? true : u.id) != null || Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
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
  getHeaderContent() {
    let e, t, {
      guild: n,
      guildScheduledEvent: i,
      streamUserId: s,
      application: r,
      inviteChannel: a
    } = this.props;
    if (e = null != Chunk647438 ? Chunk388032.intl.string(Chunk388032.t["6VQaqd"]) : null != Chunk120356 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZdK3dW, {
        applicationName: Chunk120356.name
      }) : null != i ? Chunk388032.intl.string(Chunk388032.t.JKV4FL) : (null == a ? true : a.isGuildStageVoice()) ? Chunk388032.intl.string(Chunk388032.t.zTrsH0) : Chunk388032.intl.formatToPlainString(Chunk388032.t.NvVBJU, {
        name: require.name
      }), null != a) {
      let e = (0, Chunk471445.KS)(a, require);
      null != module && (t = Chunk388032.intl.format(Chunk388032.t.MkSwTR, {
        channelName: a.name,
        channelNameHook: (t, n) => (0, l.jsxs)("span", {
          children: [(0, l.jsx)(e, {
            className: ei.channelIcon
          }), t]
        }, n)
      }))
    }
    return require.features.has(Chunk981631.GuildFeatures.HUB) ? {
      title: Chunk388032.intl.string(Chunk388032.t.WhR38i),
      subtitle: Chunk388032.intl.string(Chunk388032.t.Ed4BMs)
    } : {
      title: module,
      subtitle: exports
    }
  }
  renderFriendsBody() {
    let {
      modalState: e,
      showFriends: t,
      guild: n
    } = this.props, {
      query: i
    } = module, s = this.getListProps();
    return {
      bodyContent: true,
      controls: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [exports && (0, Chunk951288.jsx)(Chunk481060.E1j, {
          size: "sm",
          query: i,
          onChange: this.handleQueryChange,
          placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHYx),
          autoFocus: true,
          onClear: this.handleClearSearch
        }), !require.features.has(Chunk981631.GuildFeatures.HUB) && this.renderChannelWarning()]
      }),
      listProps: Chunk647438
    }
  }
  getListProps() {
    let {
      rows: e,
      sections: t,
      isFriendsInVCInvitesEnabled: n
    } = this.props, i = this.getInviteKey();
    return 0 === module.length ? {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, Chunk951288.jsx)("div", {
        className: Chunk451964.inviteRowEmptyState,
        children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
          children: Chunk388032.intl.string(Chunk388032.t.ojoWgX)
        })
      }),
      rowHeight: 200
    } : null == i ? {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, Chunk951288.jsx)("div", {
        className: Chunk451964.inviteRowEmptyState,
        children: (0, Chunk951288.jsx)(Chunk481060.OZU, {
          children: Chunk388032.intl.string(Chunk388032.t.hzPwGG)
        })
      }),
      rowHeight: 200
    } : require && null != exports ? {
      sections: exports.map(e => e.length),
      renderSection: this.renderSection,
      sectionHeight: this.getSectionHeight,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight
    } : {
      sections: [module.length],
      renderSection: this.renderSection,
      sectionHeight: 0,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight
    }
  }
  getBodyContent() {
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
    u()(null != a, "InstantInviteModal: user cannot be undefined");
    let o = (0, Chunk601964.eM)(exports, a) ? Chunk388032.intl.string(Chunk388032.t.HFbByJ) : Chunk388032.intl.string(Chunk388032.t.ueBhA9);
    return null != i ? o = Chunk388032.intl.string(Chunk388032.t.CXpS1I) : null != Chunk647438 && (o = Chunk388032.intl.string(Chunk388032.t.ueCrHB)), {
      bodyContent: (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
          className: Chunk451964.subText,
          variant: "text-sm/normal",
          children: Chunk512722
        }), (0, Chunk951288.jsx)(Chunk603236.I, ea(er({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: Chunk120356
        }))]
      }),
      controls: true,
      listProps: true
    }
  }
  renderFooter() {
    var e;
    let {
      noInvitesAvailable: t,
      showFriends: n,
      guildScheduledEvent: i,
      streamUserId: s,
      application: r,
      inviteChannel: a,
      modalState: o
    } = this.props, {
      maxAge: u
    } = Chunk512722, d = null, c = (0, Chunk366980.Z)(null != (e = this.getInviteKey()) ? module : "");
    if (require) {
      let e = Chunk388032.intl.string(Chunk388032.t.MLkj7N);
      null != Chunk647438 ? e = Chunk388032.intl.string(Chunk388032.t["1b9neu"]) : null != Chunk120356 ? e = Chunk388032.intl.string(Chunk388032.t.iI1gMg) : null != i ? e = Chunk388032.intl.string(Chunk388032.t.KaWCyD) : (null == a ? true : a.isGuildStageVoice()) && (e = Chunk388032.intl.string(Chunk388032.t["2frWa3"])), d = (0, Chunk951288.jsx)(Chunk481060.gNt, {
        label: module,
        children: (0, Chunk951288.jsx)(Chunk603236.I, ea(er({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: c
        }))
      })
    } else exports || (d = (0, Chunk951288.jsxs)("div", {
      className: Chunk451964.footerWithCheckbox,
      children: [(0, Chunk951288.jsx)(Chunk481060.Checkbox, {
        checked: u === eo.value,
        onChange: this.handleToggleMaxAge,
        label: Chunk388032.intl.string(Chunk388032.t["QKJru/"])
      }), (0, Chunk951288.jsx)(Chunk681715.u, {
        text: Chunk388032.intl.string(Chunk388032.t.Yx4IiC),
        children: (0, Chunk951288.jsx)(Chunk481060.P3F, {
          onClick: this.openSettings,
          className: Chunk103126.cursorPointer,
          children: (0, Chunk951288.jsx)(Chunk481060.ewm, {
            size: "sm",
            color: Chunk692547.Z.unsafe_rawColors.PRIMARY_400.css
          })
        })
      })]
    }));
    return Chunk392711
  }
  getModal() {
    let {
      modalState: e,
      handleDone: t,
      transitionState: n,
      onClose: i
    } = this.props, {
      currentPage: s
    } = module;
    switch (Chunk647438) {
      case Chunk245335.RV.MAIN:
        let {
          title: r, subtitle: a
        } = this.getHeaderContent(), {
          bodyContent: o,
          controls: u,
          listProps: d
        } = this.getBodyContent();
        return (0, Chunk951288.jsx)(Chunk775086.u, {
          transitionState: require,
          onClose: i,
          title: Chunk120356,
          subtitle: a,
          input: u,
          listProps: Chunk392711,
          preview: this.renderFooter(),
          actions: [],
          children: Chunk512722
        });
      case Chunk245335.RV.SETTINGS:
        return (0, Chunk951288.jsx)(Chunk585385.D, ea(er({}, this.props), {
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
      showFriends: e,
      isFriendsInVCInvitesEnabled: t,
      sections: n
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      className: a()({
        [Chunk451964.isFriendsInVCInvitesExperiment]: exports && null != require,
        [Chunk451964.wrapper]: module
      }),
      children: this.getModal()
    })
  }
  constructor(...e) {
    super(...e), es(this, "_scroller", null), es(this, "_headerId", c().uniqueId()), es(this, "getSectionVisibility", e => {
      var t;
      let {
        modalState: n
      } = this.props;
      return null == (t = n.sectionVisibility[e]) || t
    }), es(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(X.RV.SETTINGS)
    }), es(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), es(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), es(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), es(this, "handleSetInviteFlags", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        flags: e
      })
    }), es(this, "handleQueryChange", e => {
      var t;
      let {
        modalState: n,
        setModalState: i
      } = this.props, l = {
        query: e
      };
      "" === e && "" !== n.query ? (l.sectionVisibility = er({}, n.defaultSectionVisibility), l.defaultSectionVisibility = {}) : "" !== e && "" === n.query && (l.defaultSectionVisibility = er({}, n.sectionVisibility), l.sectionVisibility = {}), null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, f.C)(e), i(l)
    }), es(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), es(this, "handleToggleMaxAge", () => {
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
    }), es(this, "handleToggleSectionVisibility", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        sectionVisibility: ea(er({}, t.sectionVisibility), {
          [e]: !this.getSectionVisibility(e)
        })
      })
    }), es(this, "getRowHeight", (e, t) => {
      let {
        sections: n,
        rows: i
      } = this.props, l = this.getSectionVisibility(e);
      if (null != n && !l) return 0;
      switch ((null == n ? i[t] : n[e][t]).type) {
        case H.bm.CHANNEL:
        case H.bm.GROUP_DM:
        case H.bm.DM:
        case H.bm.FRIEND:
          return $.k;
        default:
          return 0
      }
    }), es(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        rows: i,
        sections: s,
        analyticsLocation: r,
        source: a
      } = this.props, o = this.getInviteKey(), u = null == s ? i[n] : s[t][n], d = "".concat(u.type, "-").concat(u.item.id), c = this.getSectionVisibility(t);
      if (null != s && !c) return null;
      switch (u.type) {
        case H.bm.GROUP_DM:
        case H.bm.CHANNEL:
          return (0, l.jsx)($.d, {
            row: u,
            channel: u.item,
            inviteKey: o,
            location: r,
            source: a
          }, d);
        case H.bm.DM:
        case H.bm.FRIEND:
          return (0, l.jsx)($.d, {
            row: u,
            user: u.item,
            inviteKey: o,
            location: r,
            source: a
          }, d);
        default:
          return null
      }
    }), es(this, "getSectionHeight", e => 0 === e ? 24 : 36), es(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        sections: n,
        isFriendsInVCInvitesEnabled: i
      } = this.props;
      if (!i || null == n) return null;
      let s = 0 === t ? en.intl.string(en.t.y29JXs) : en.intl.string(en.t.Sd8Ixw),
        r = this.getSectionVisibility(t);
      return (0, l.jsx)(eg, {
        section: t,
        heading: s,
        isOpen: r,
        onToggleVisibility: this.handleToggleSectionVisibility
      })
    })
  }
}

function eg(e) {
  let {
    section: t,
    heading: n,
    isOpen: i,
    onToggleVisibility: s
  } = e;
  return (0, l.jsxs)(x.P3F, {
    style: {
      "--custom-invite-section-header-height": 24,
      "--custom-invite-section-header-gap": 12 * (0 !== t),
      "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg"
    },
    className: ei.inviteSectionHeader,
    onClick: () => s(t),
    children: [(0, l.jsx)(x.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      children: n
    }), (0, l.jsx)(x.CJ0, {
      size: "md",
      color: "currentColor",
      className: ei.inviteSectionToggleIcon
    })]
  })
}
es(ec, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: eu.value
});
let eh = Chunk647438.forwardRef(function(e, t) {
  var n, i;
  let {
    channel: r,
    guild: a,
    source: o,
    guildScheduledEvent: u,
    streamUserId: d,
    applicationId: c,
    transitionState: h,
    onClose: I,
    page: m,
    analyticsLocation: x
  } = e, {
    analyticsLocations: T
  } = (0, C.ZP)(y.Z.INSTANT_INVITE_MODAL), N = (0, v.e7)([L.Z, j.Z, V.ZP], () => {
    if (null != r) return r;
    let e = L.Z.getChannelId(),
      t = null == e || (0, et.AB)(e) ? true : j.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = j.Z.getChannel(t.parent_id)), null != t ? t : V.ZP.getDefaultChannel(a.id, true, ee.Plq.CREATE_INSTANT_INVITE)
  }, [r, a.id]), P = null;
  null != d ? P = X.Iq.STREAM : null != c && (P = X.Iq.EMBEDDED_APPLICATION);
  let M = null != r ? r.getGuildId() : null != a ? a.id : null,
    k = (0, z.xU)({
      guildId: M,
      location: "InstantInviteModalConnected"
    }),
    G = (0, z.WV)({
      guildId: M,
      location: "InstantInviteModalConnected"
    }),
    F = (0, v.e7)([O.Z], () => {
      let e = null != N ? N.id : null;
      return null == e ? null : O.Z.getInvite(e, {
        targetType: P,
        targetUserId: d,
        targetApplicationId: c
      })
    }, [N, P, d, c]),
    {
      isFriendsInVCInvitesEnabled: W
    } = (0, q.am)({
      guildId: null != M ? M : true,
      location: "instant_invite_modal",
      autoTrackExposure: true
    }),
    [K, Q, J, $] = (0, v.Wu)([R.Z, D.ZP], () => [R.Z.getInviteSuggestionRows(), R.Z.getTotalSuggestionsCount() >= 1, R.Z.getInitialCounts(), null != r && null != N ? D.ZP.getVoiceStatesForChannel(N) : null], [N, r]),
    en = (0, v.e7)([w.ZP], () => {
      let e = null != N ? N.id : null;
      return null != M ? w.ZP.getProps(M, e) : true
    }, [N, M], p.Z),
    ei = (0, v.e7)([U.Z], () => null != N && U.Z.can(ee.Plq.CREATE_INSTANT_INVITE, N), [N]),
    el = null === F || !ei,
    [es] = s.useState(() => {
      let e = new Set;
      return null != d && null != $ ? $.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != M && null != en && P !== X.Iq.EMBEDDED_APPLICATION && en.rows.forEach(t => {
        t.type === w.so.MEMBER && e.add(t.userId)
      }), e
    }),
    ea = null == r ? true : r.id,
    eg = (0, v.e7)([Z.Z], () => Z.Z.getStageInstanceByChannel(ea), [ea]);
  s.useEffect(() => {
    (0, f.x)({
      omitUserIds: es,
      guild: a,
      channel: r,
      applicationId: c,
      inviteTargetType: P
    }).catch(ee.VqG)
  }, [es, r, a, c, P]);
  let [eh] = (0, _.Z)(null != c ? [c] : []), ev = null != F ? F.code : true, ep = null == F ? true : F.maxAge, eI = null == F ? true : F.maxUses, em = null == F ? true : F.temporary, ex = a.vanityURLCode, eS = null != ex && ex.length > 0, ef = !ei && !(null == N ? true : N.isGuildVocal()) && eS, eE = null != (n = null == F ? true : F.flags) ? n : 0, ey = (null == N ? true : N.type) === ee.d4z.GUILD_VOICE, eC = (0, b.Z)(N);
  ei || (null == eg ? true : eg.invite_code) == null || (ev = eg.invite_code);
  let e_ = s.useMemo(() => W && ey ? (0, H.Qq)(K, M) : null, [W, ey, K, M]),
    [eb, eT] = s.useState({
      query: "",
      maxAgeOptions: G,
      maxAge: null != (i = null != ep ? ep : k) ? i : z.zv,
      savedMaxAge: ep === eo.value ? null != k ? k : eu.value : eo.value,
      maxUses: null != eI && 0 !== eI ? eI : ed.value,
      temporary: null != em && em,
      networkError: true,
      showVanityURL: ef,
      currentPage: null != m ? m : X.RV.MAIN,
      lastPage: true,
      flags: eE,
      sectionVisibility: {},
      defaultSectionVisibility: {}
    }),
    eN = s.useCallback(e => {
      eT(t => er({}, t, e))
    }, []),
    eA = s.useCallback(e => {
      eN({
        currentPage: e,
        lastPage: eb.currentPage
      })
    }, [eb.currentPage, eN]),
    eZ = ey && !ef && !el && !eC,
    {
      enabled: eP
    } = A.o.useExperiment({
      guildId: null == a ? true : a.id,
      location: "acc417_3"
    }, {
      autoTrackExposure: eZ
    }),
    {
      maxAge: eM,
      maxUses: ew,
      temporary: ej,
      savedMaxAge: eV,
      flags: eO
    } = eb,
    eR = s.useCallback(() => {
      let {
        currentPage: e,
        lastPage: t
      } = eb;
      e === X.RV.SETTINGS && null != t ? eA(t) : I()
    }, [eA, eb, I]),
    eU = s.useCallback(() => {
      let e = null == N ? true : N.id;
      0 === ew && 0 === eM && !ej && ef ? eN({
        networkError: true,
        showVanityURL: true
      }) : ei && null != e && (eN({
        networkError: true,
        showVanityURL: false
      }), S.ZP.createInvite(e, {
        max_age: eM,
        max_uses: ew,
        target_type: P,
        target_user_id: d,
        target_application_id: null == eh ? true : eh.id,
        temporary: ej,
        flags: eO
      }, o).catch(e => eN({
        networkError: e,
        showVanityURL: ef
      }))), eM !== eo.value && eV !== eo.value && eN({
        savedMaxAge: eo.value
      })
    }, [ef, ei, N, o, null == eh ? true : eh.id, P, d, eM, ew, ej, eN, eV, eO]),
    ek = (0, E.Z)(N),
    eL = (0, E.Z)((0, B.yE)(eO, g.$.IS_APPLICATION_BYPASS)),
    eG = null != ek && ek !== N,
    eD = null != eL && eL !== (0, B.yE)(eO, g.$.IS_APPLICATION_BYPASS);
  s.useEffect(() => {
    !ef && (eG || eD) && eU()
  }, [eU, eG, eD, ef]);
  let {
    canCreateApplicationBypassInvites: eF,
    isManualApprovalGuild: eB
  } = (0, Y.R)(a);
  return (0, l.jsx)(C.Gt, {
    value: T,
    children: (0, l.jsx)(ec, {
      ref: t,
      canCreateInvites: ei,
      noInvitesAvailable: el,
      inviteChannel: N,
      guild: a,
      guildScheduledEvent: u,
      streamUserId: d,
      vanityURLCode: ex,
      targetType: P,
      targetUserId: d,
      application: eh,
      rows: K,
      sections: e_,
      isFriendsInVCInvitesEnabled: W,
      showFriends: Q,
      initialCounts: J,
      code: ev,
      source: o,
      analyticsLocations: T,
      analyticsLocation: x,
      transitionState: h,
      onClose: I,
      canShowVanityURL: ef,
      isGuestInviteCreationToggleEnabled: eP && eZ,
      shouldHideTemporaryInviteToggle: eP && eZ || eB,
      modalState: eb,
      setModalState: eN,
      changePage: eA,
      onGenerateNewLink: eU,
      handleDone: eR,
      isApplicationBypassToggleEnabled: eF && !el
    })
  })
});

function ev(e) {
  return (0, l.jsx)(eh, er({}, e))
}