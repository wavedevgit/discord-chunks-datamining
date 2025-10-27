/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ep
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

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ea(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      er(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
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
  INVITE_OPTIONS_FOREVER: eu,
  INVITE_OPTIONS_7_DAYS: ed,
  INVITE_OPTIONS_UNLIMITED: ec
} = Chunk971130.ZP;
class eg extends(i = Chunk647438.PureComponent) {
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
        temporary: Chunk755721,
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
            className: el.channelIcon
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
        }), (0, Chunk951288.jsx)(Chunk603236.I, eo(ea({}, this.props), {
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
        children: (0, Chunk951288.jsx)(Chunk603236.I, eo(ea({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: c
        }))
      })
    } else exports || (d = (0, Chunk951288.jsxs)(Chunk600164.Z, {
      justify: Chunk600164.Z.Justify.BETWEEN,
      children: [(0, Chunk951288.jsx)(Chunk755721.$q, {
        size: 18,
        type: Chunk755721.M0.INVERTED,
        value: u === eu.value,
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
          return (0, l.jsx)(x.P3F, {
            onClick: this.openSettings,
            onMouseEnter: t,
            onMouseLeave: n,
            className: es.cursorPointer,
            children: (0, l.jsx)(x.ewm, {
              size: "sm",
              color: I.Z.unsafe_rawColors.PRIMARY_400.css
            })
          })
        }
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
        return (0, Chunk951288.jsx)(Chunk585385.D, eo(ea({}, this.props), {
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
    super(...e), er(this, "_scroller", null), er(this, "_headerId", c().uniqueId()), er(this, "getSectionVisibility", e => {
      var t;
      let {
        modalState: n
      } = this.props;
      return null == (t = n.sectionVisibility[e]) || t
    }), er(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(ee.RV.SETTINGS)
    }), er(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), er(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), er(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), er(this, "handleSetInviteFlags", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        flags: e
      })
    }), er(this, "handleQueryChange", e => {
      var t;
      let {
        modalState: n,
        setModalState: i
      } = this.props, l = {
        query: e
      };
      "" === e && "" !== n.query ? (l.sectionVisibility = ea({}, n.defaultSectionVisibility), l.defaultSectionVisibility = {}) : "" !== e && "" === n.query && (l.defaultSectionVisibility = ea({}, n.sectionVisibility), l.sectionVisibility = {}), null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, f.C)(e), i(l)
    }), er(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), er(this, "handleToggleMaxAge", () => {
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
    }), er(this, "handleToggleSectionVisibility", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        sectionVisibility: eo(ea({}, t.sectionVisibility), {
          [e]: !this.getSectionVisibility(e)
        })
      })
    }), er(this, "getRowHeight", (e, t) => {
      let {
        sections: n,
        rows: i
      } = this.props, l = this.getSectionVisibility(e);
      if (null != n && !l) return 0;
      switch ((null == n ? i[t] : n[e][t]).type) {
        case z.bm.CHANNEL:
        case z.bm.GROUP_DM:
        case z.bm.DM:
        case z.bm.FRIEND:
          return X.k;
        default:
          return 0
      }
    }), er(this, "renderRow", e => {
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
        case z.bm.GROUP_DM:
        case z.bm.CHANNEL:
          return (0, l.jsx)(X.d, {
            row: u,
            channel: u.item,
            inviteKey: o,
            location: r,
            source: a
          }, d);
        case z.bm.DM:
        case z.bm.FRIEND:
          return (0, l.jsx)(X.d, {
            row: u,
            user: u.item,
            inviteKey: o,
            location: r,
            source: a
          }, d);
        default:
          return null
      }
    }), er(this, "getSectionHeight", e => 0 === e ? 24 : 36), er(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        sections: n,
        isFriendsInVCInvitesEnabled: i
      } = this.props;
      if (!i || null == n) return null;
      let s = 0 === t ? ei.intl.string(ei.t.y29JXs) : ei.intl.string(ei.t.Sd8Ixw),
        r = this.getSectionVisibility(t);
      return (0, l.jsx)(eh, {
        section: t,
        heading: s,
        isOpen: r,
        onToggleVisibility: this.handleToggleSectionVisibility
      })
    })
  }
}

function eh(e) {
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
    className: el.inviteSectionHeader,
    onClick: () => s(t),
    children: [(0, l.jsx)(x.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      children: n
    }), (0, l.jsx)(x.CJ0, {
      size: "md",
      color: "currentColor",
      className: el.inviteSectionToggleIcon
    })]
  })
}
er(eg, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ed.value
});
let ev = Chunk647438.forwardRef(function(e, t) {
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
    analyticsLocations: b
  } = (0, C.ZP)(y.Z.INSTANT_INVITE_MODAL), N = (0, v.e7)([k.Z, V.Z, O.ZP], () => {
    if (null != r) return r;
    let e = k.Z.getChannelId(),
      t = null == e || (0, en.AB)(e) ? true : V.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = V.Z.getChannel(t.parent_id)), null != t ? t : O.ZP.getDefaultChannel(a.id, true, et.Plq.CREATE_INSTANT_INVITE)
  }, [r, a.id]), A = null;
  null != d ? A = ee.Iq.STREAM : null != c && (A = ee.Iq.EMBEDDED_APPLICATION);
  let P = null != r ? r.getGuildId() : null != a ? a.id : null,
    w = (0, q.xU)({
      guildId: P,
      location: "InstantInviteModalConnected"
    }),
    G = (0, q.WV)({
      guildId: P,
      location: "InstantInviteModalConnected"
    }),
    D = (0, v.e7)([R.Z], () => {
      let e = null != N ? N.id : null;
      return null == e ? null : R.Z.getInvite(e, {
        targetType: A,
        targetUserId: d,
        targetApplicationId: c
      })
    }, [N, A, d, c]),
    {
      isFriendsInVCInvitesEnabled: B
    } = (0, W.am)({
      guildId: null != P ? P : true,
      location: "instant_invite_modal",
      autoTrackExposure: true
    }),
    [K, Y, J, $] = (0, v.Wu)([U.Z, F.ZP], () => [U.Z.getInviteSuggestionRows(), U.Z.getTotalSuggestionsCount() >= 1, U.Z.getInitialCounts(), null != r && null != N ? F.ZP.getVoiceStatesForChannel(N) : null], [N, r]),
    X = (0, v.e7)([j.ZP], () => {
      let e = null != N ? N.id : null;
      return null != P ? j.ZP.getProps(P, e) : true
    }, [N, P], p.Z),
    ei = (0, v.e7)([L.Z], () => null != N && L.Z.can(et.Plq.CREATE_INSTANT_INVITE, N), [N]),
    el = null === D || !ei,
    [es] = s.useState(() => {
      let e = new Set;
      return null != d && null != $ ? $.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != P && null != X && A !== ee.Iq.EMBEDDED_APPLICATION && X.rows.forEach(t => {
        t.type === j.so.MEMBER && e.add(t.userId)
      }), e
    }),
    er = null == r ? true : r.id,
    eo = (0, v.e7)([M.Z], () => M.Z.getStageInstanceByChannel(er), [er]);
  s.useEffect(() => {
    (0, f.x)({
      omitUserIds: es,
      guild: a,
      channel: r,
      applicationId: c,
      inviteTargetType: A
    }).catch(et.VqG)
  }, [es, r, a, c, A]);
  let [eh] = (0, _.Z)(null != c ? [c] : []), ev = null != D ? D.code : true, ep = null == D ? true : D.maxAge, eI = null == D ? true : D.maxUses, em = null == D ? true : D.temporary, ex = a.vanityURLCode, eS = null != ex && ex.length > 0, ef = !ei && !(null == N ? true : N.isGuildVocal()) && eS, eE = null != (n = null == D ? true : D.flags) ? n : 0, ey = (null == N ? true : N.type) === et.d4z.GUILD_VOICE, eC = (0, T.Z)(N);
  ei || (null == eo ? true : eo.invite_code) == null || (ev = eo.invite_code);
  let e_ = s.useMemo(() => B && ey ? (0, z.Qq)(K, P) : null, [B, ey, K, P]),
    [eT, eb] = s.useState({
      query: "",
      maxAgeOptions: G,
      maxAge: null != (i = null != ep ? ep : w) ? i : q.zv,
      savedMaxAge: ep === eu.value ? null != w ? w : ed.value : eu.value,
      maxUses: null != eI && 0 !== eI ? eI : ec.value,
      temporary: null != em && em,
      networkError: true,
      showVanityURL: ef,
      currentPage: null != m ? m : ee.RV.MAIN,
      lastPage: true,
      flags: eE,
      sectionVisibility: {},
      defaultSectionVisibility: {}
    }),
    eN = s.useCallback(e => {
      eb(t => ea({}, t, e))
    }, []),
    eA = s.useCallback(e => {
      eN({
        currentPage: e,
        lastPage: eT.currentPage
      })
    }, [eT.currentPage, eN]),
    eZ = ey && !ef && !el && !eC,
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
      temporary: ej,
      savedMaxAge: eV,
      flags: eO
    } = eT,
    eR = s.useCallback(() => {
      let {
        currentPage: e,
        lastPage: t
      } = eT;
      e === ee.RV.SETTINGS && null != t ? eA(t) : I()
    }, [eA, eT, I]),
    eU = s.useCallback(() => {
      let e = null == N ? true : N.id;
      0 === ew && 0 === eP && !ej && ef ? eN({
        networkError: true,
        showVanityURL: true
      }) : ei && null != e && (eN({
        networkError: true,
        showVanityURL: false
      }), S.ZP.createInvite(e, {
        max_age: eP,
        max_uses: ew,
        target_type: A,
        target_user_id: d,
        target_application_id: null == eh ? true : eh.id,
        temporary: ej,
        flags: eO
      }, o).catch(e => eN({
        networkError: e,
        showVanityURL: ef
      }))), eP !== eu.value && eV !== eu.value && eN({
        savedMaxAge: eu.value
      })
    }, [ef, ei, N, o, null == eh ? true : eh.id, A, d, eP, ew, ej, eN, eV, eO]),
    eL = (0, E.Z)(N),
    eG = (0, E.Z)((0, H.yE)(eO, g.$.IS_APPLICATION_BYPASS)),
    ek = null != eL && eL !== N,
    eD = null != eG && eG !== (0, H.yE)(eO, g.$.IS_APPLICATION_BYPASS);
  s.useEffect(() => {
    !ef && (ek || eD) && eU()
  }, [eU, ek, eD, ef]);
  let {
    canCreateApplicationBypassInvites: eF,
    isManualApprovalGuild: eB
  } = (0, Q.R)(a);
  return (0, l.jsx)(C.Gt, {
    value: b,
    children: (0, l.jsx)(eg, {
      ref: t,
      canCreateInvites: ei,
      noInvitesAvailable: el,
      inviteChannel: N,
      guild: a,
      guildScheduledEvent: u,
      streamUserId: d,
      vanityURLCode: ex,
      targetType: A,
      targetUserId: d,
      application: eh,
      rows: K,
      sections: e_,
      isFriendsInVCInvitesEnabled: B,
      showFriends: Y,
      initialCounts: J,
      code: ev,
      source: o,
      analyticsLocations: b,
      analyticsLocation: x,
      transitionState: h,
      onClose: I,
      canShowVanityURL: ef,
      isGuestInviteCreationToggleEnabled: eM && eZ,
      shouldHideTemporaryInviteToggle: eM && eZ || eB,
      modalState: eT,
      setModalState: eN,
      changePage: eA,
      onGenerateNewLink: eU,
      handleDone: eR,
      isApplicationBypassToggleEnabled: eF && !el
    })
  })
});

function ep(e) {
  return (0, l.jsx)(ev, ea({}, e))
}