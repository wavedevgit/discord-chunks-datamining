/** Chunk was on 7654 **/
/** chunk id: 560114, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => eg
}), require("./997841.js"), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk533800 = require("./533800.js"),
  Chunk95015 = require("./95015.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk442837 = require("./442837.js"),
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
  Chunk971130 = require("./971130.js"),
  Chunk301873 = require("./301873.js"),
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

function ei(e, t, n) {
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
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
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
  INVITE_OPTIONS_FOREVER: er,
  INVITE_OPTIONS_7_DAYS: ea,
  INVITE_OPTIONS_UNLIMITED: eo
} = Chunk971130.ZP;
class eu extends(i = Chunk473749.PureComponent) {
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
      setModalState: p
    } = this.props, {
      maxAge: v,
      maxUses: I,
      temporary: m,
      flags: S
    } = Chunk95015;
    if (Chunk54381) {
      let n = null == module ? true : module.id;
      if (null == require) return;
      Chunk775086({
        networkError: true
      }), Chunk447543.ZP.createInvite(require, {
        validate: null != exports ? exports : null,
        max_age: Chunk442837,
        max_uses: Chunk692547,
        target_user_id: Chunk512722,
        target_type: a,
        target_application_id: null == u ? true : u.id,
        temporary: Chunk681715,
        flags: Chunk481060
      }, i).catch(e => p({
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
        location: Chunk473749,
        other_user_id: Chunk120356,
        application_id: null != exports ? exports.id : null,
        application_name: null != exports ? exports.name : null,
        game_id: null != exports ? exports.id : null
      })
    } else(null == u ? true : u.id) != null || Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: i,
      location: Chunk473749
    })
  }
  componentWillUnmount() {
    let {
      inviteChannel: e,
      modalState: t
    } = this.props;
    (0, Chunk95015.yE)(exports.flags, Chunk533800.$.IS_GUEST_INVITE) && null != module && Chunk447543.ZP.clearInviteFromStore(module.id)
  }
  getInviteKey() {
    let {
      code: e,
      vanityURLCode: t,
      guildScheduledEvent: n,
      modalState: i
    } = this.props, {
      showVanityURL: l
    } = i, s = Chunk54381 ? exports : null != module ? module : exports;
    return null == Chunk473749 ? Chunk473749 : (0, Chunk264229.tV)({
      baseCode: Chunk473749,
      guildScheduledEventId: null == require ? true : require.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, Chunk447003.Z)(module) ? (0, Chunk54381.jsxs)("div", {
      className: Chunk451964.warningContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.Mgn, {
        size: "custom",
        className: Chunk451964.warningIcon,
        color: Chunk692547.Z.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-xs/normal",
        color: "text-default",
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
    if (e = null != Chunk473749 ? Chunk388032.intl.string(Chunk388032.t["6VQaqd"]) : null != Chunk120356 ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ZdK3dW, {
        applicationName: Chunk120356.name
      }) : null != i ? Chunk388032.intl.string(Chunk388032.t.JKV4FL) : (null == a ? true : a.isGuildStageVoice()) ? Chunk388032.intl.string(Chunk388032.t.zTrsH0) : Chunk388032.intl.formatToPlainString(Chunk388032.t.NvVBJU, {
        name: require.name
      }), null != a) {
      let e = (0, Chunk471445.KS)(a, require);
      null != module && (t = Chunk388032.intl.format(Chunk388032.t.MkSwTR, {
        channelName: a.name,
        channelNameHook: (t, n) => (0, l.jsxs)("span", {
          children: [(0, l.jsx)(e, {
            className: et.channelIcon
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
      controls: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [exports && (0, Chunk54381.jsx)(Chunk481060.E1j, {
          size: "md",
          query: i,
          onChange: this.handleQueryChange,
          placeholder: Chunk388032.intl.string(Chunk388032.t.CmSHYx),
          autoFocus: true,
          onClear: this.handleClearSearch
        }), !require.features.has(Chunk981631.GuildFeatures.HUB) && this.renderChannelWarning()]
      }),
      listProps: Chunk473749
    }
  }
  getListProps() {
    let {
      rows: e,
      sections: t
    } = this.props, n = this.getInviteKey();
    return 0 === module.length ? {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, Chunk54381.jsx)("div", {
        className: Chunk451964.inviteRowEmptyState,
        children: (0, Chunk54381.jsx)(Chunk481060.OZU, {
          children: Chunk388032.intl.string(Chunk388032.t.ojoWgX)
        })
      }),
      rowHeight: 200
    } : null == require ? {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, Chunk54381.jsx)("div", {
        className: Chunk451964.inviteRowEmptyState,
        children: (0, Chunk54381.jsx)(Chunk481060.OZU, {
          children: Chunk388032.intl.string(Chunk388032.t.hzPwGG)
        })
      }),
      rowHeight: 200
    } : null != exports ? {
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
    return null != i ? o = Chunk388032.intl.string(Chunk388032.t.CXpS1I) : null != Chunk473749 && (o = Chunk388032.intl.string(Chunk388032.t.ueCrHB)), {
      bodyContent: (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          className: Chunk451964.subText,
          variant: "text-sm/normal",
          children: Chunk512722
        }), (0, Chunk54381.jsx)(Chunk603236.I, es(el({}, this.props), {
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
      null != Chunk473749 ? e = Chunk388032.intl.string(Chunk388032.t["1b9neu"]) : null != Chunk120356 ? e = Chunk388032.intl.string(Chunk388032.t.iI1gMg) : null != i ? e = Chunk388032.intl.string(Chunk388032.t.KaWCyD) : (null == a ? true : a.isGuildStageVoice()) && (e = Chunk388032.intl.string(Chunk388032.t["2frWa3"])), d = (0, Chunk54381.jsx)(Chunk481060.gNt, {
        label: module,
        children: (0, Chunk54381.jsx)(Chunk603236.I, es(el({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: c
        }))
      })
    } else exports || (d = (0, Chunk54381.jsxs)("div", {
      className: Chunk451964.footerWithCheckbox,
      children: [(0, Chunk54381.jsx)(Chunk481060.Checkbox, {
        checked: u === er.value,
        onChange: this.handleToggleMaxAge,
        label: Chunk388032.intl.string(Chunk388032.t["QKJru/"])
      }), (0, Chunk54381.jsx)(Chunk681715.u, {
        text: Chunk388032.intl.string(Chunk388032.t.Yx4IiC),
        children: (0, Chunk54381.jsx)(Chunk481060.P3F, {
          onClick: this.openSettings,
          className: Chunk103126.cursorPointer,
          children: (0, Chunk54381.jsx)(Chunk481060.ewm, {
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
    switch (Chunk473749) {
      case Chunk245335.RV.MAIN:
        let {
          title: r, subtitle: a
        } = this.getHeaderContent(), {
          bodyContent: o,
          controls: u,
          listProps: d
        } = this.getBodyContent();
        return (0, Chunk54381.jsx)(Chunk775086.Modal, {
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
        return (0, Chunk54381.jsx)(Chunk585385.D, es(el({}, this.props), {
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
      sections: t
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: a()({
        [Chunk451964.wrapper]: module,
        [Chunk451964.hasSections]: null != exports
      }),
      children: this.getModal()
    })
  }
  constructor(...e) {
    super(...e), ei(this, "_scroller", null), ei(this, "_headerId", c().uniqueId()), ei(this, "getSectionVisibility", e => {
      var t;
      let {
        modalState: n
      } = this.props;
      return null == (t = n.sectionVisibility[e]) || t
    }), ei(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(J.RV.SETTINGS)
    }), ei(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), ei(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), ei(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), ei(this, "handleSetInviteFlags", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        flags: e
      })
    }), ei(this, "handleQueryChange", e => {
      var t;
      let {
        modalState: n,
        setModalState: i
      } = this.props, l = {
        query: e
      };
      "" === e && "" !== n.query ? (l.sectionVisibility = el({}, n.defaultSectionVisibility), l.defaultSectionVisibility = {}) : "" !== e && "" === n.query && (l.defaultSectionVisibility = el({}, n.sectionVisibility), l.sectionVisibility = {}), null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, f.C)(e), i(l)
    }), ei(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), ei(this, "handleToggleMaxAge", () => {
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
    }), ei(this, "handleToggleSectionVisibility", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        sectionVisibility: es(el({}, t.sectionVisibility), {
          [e]: !this.getSectionVisibility(e)
        })
      })
    }), ei(this, "getRowHeight", (e, t) => {
      let {
        sections: n,
        rows: i
      } = this.props, l = this.getSectionVisibility(e);
      if (null != n && !l) return 0;
      switch ((null == n ? i[t] : n[e][t]).type) {
        case B.bm.CHANNEL:
        case B.bm.GROUP_DM:
        case B.bm.DM:
        case B.bm.FRIEND:
          return Q.k;
        default:
          return 0
      }
    }), ei(this, "renderRow", e => {
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
        case B.bm.GROUP_DM:
        case B.bm.CHANNEL:
          return (0, l.jsx)(Q.d, {
            row: u,
            channel: u.item,
            inviteKey: o,
            location: r,
            source: a
          }, d);
        case B.bm.DM:
        case B.bm.FRIEND:
          return (0, l.jsx)(Q.d, {
            row: u,
            user: u.item,
            inviteKey: o,
            location: r,
            source: a
          }, d);
        default:
          return null
      }
    }), ei(this, "getSectionHeight", e => 0 === e ? 24 : 36), ei(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        sections: n
      } = this.props;
      if (null == n) return null;
      let i = 0 === t ? ee.intl.string(ee.t.y29JXs) : ee.intl.string(ee.t.Sd8Ixw),
        s = this.getSectionVisibility(t);
      return (0, l.jsx)(ed, {
        section: t,
        heading: i,
        isOpen: s,
        onToggleVisibility: this.handleToggleSectionVisibility
      })
    })
  }
}

function ed(e) {
  let {
    section: t,
    heading: n,
    isOpen: i,
    onToggleVisibility: s
  } = e;
  return (0, l.jsxs)(S.P3F, {
    style: {
      "--custom-invite-section-header-height": 24,
      "--custom-invite-section-header-gap": 12 * (0 !== t),
      "--custom-icon-collapse-rotate": i ? "0deg" : "-90deg"
    },
    className: et.inviteSectionHeader,
    onClick: () => s(t),
    children: [(0, l.jsx)(S.Text, {
      variant: "text-sm/medium",
      color: "header-muted",
      children: n
    }), (0, l.jsx)(S.CJ0, {
      size: "md",
      color: "currentColor",
      className: et.inviteSectionToggleIcon
    })]
  })
}
ei(eu, "defaultProps", {
  analyticsLocation: Chunk981631.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ea.value
});
let ec = Chunk473749.forwardRef(function(e, t) {
  var n, i;
  let {
    channel: r,
    guild: a,
    source: o,
    guildScheduledEvent: u,
    streamUserId: d,
    applicationId: c,
    transitionState: p,
    onClose: I,
    page: m,
    analyticsLocation: S
  } = e, {
    analyticsLocations: b
  } = (0, _.ZP)(E.Z.INSTANT_INVITE_MODAL), N = (0, v.e7)([k.Z, j.Z, V.ZP], () => {
    if (null != r) return r;
    let e = k.Z.getChannelId(),
      t = null == e || (0, X.AB)(e) ? true : j.Z.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = j.Z.getChannel(t.parent_id)), null != t ? t : V.ZP.getDefaultChannel(a.id, true, $.Plq.CREATE_INSTANT_INVITE)
  }, [r, a.id]), M = null;
  null != d ? M = J.Iq.STREAM : null != c && (M = J.Iq.EMBEDDED_APPLICATION);
  let Z = null != r ? r.getGuildId() : null != a ? a.id : null,
    G = (0, H.xU)({
      guildId: Z,
      location: "InstantInviteModalConnected"
    }),
    D = (0, H.WV)({
      guildId: Z,
      location: "InstantInviteModalConnected"
    }),
    F = (0, v.e7)([O.Z], () => {
      let e = null != N ? N.id : null;
      return null == e ? null : O.Z.getInvite(e, {
        targetType: M,
        targetUserId: d,
        targetApplicationId: c
      })
    }, [N, M, d, c]),
    [q, z, K, Y] = (0, v.Wu)([R.Z, L.ZP], () => [R.Z.getInviteSuggestionRows(), R.Z.getTotalSuggestionsCount() >= 1, R.Z.getInitialCounts(), null != r && null != N ? L.ZP.getVoiceStatesForChannel(N) : null], [N, r]),
    Q = s.useMemo(() => {
      let e = null != N ? N.id : null;
      return null != Z ? w.ZP.getProps(Z, e) : true
    }, [N, Z]),
    ee = (0, v.e7)([U.Z], () => null != N && U.Z.can($.Plq.CREATE_INSTANT_INVITE, N), [N]),
    et = null === F || !ee,
    en = (null == N ? true : N.type) === $.d4z.GUILD_VOICE,
    ei = (0, T.Z)(N),
    es = s.useMemo(() => {
      let e = new Set;
      return en || null != d ? null == Y || Y.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != Z && null != Q && M !== J.Iq.EMBEDDED_APPLICATION && Q.rows.forEach(t => {
        t.type === w.so.MEMBER && e.add(t.userId)
      }), e
    }, [en, Q, d, Y, Z, M]),
    ed = null == r ? true : r.id,
    ec = (0, v.e7)([P.Z], () => P.Z.getStageInstanceByChannel(ed), [ed]);
  s.useEffect(() => {
    (0, f.x)({
      omitUserIds: es,
      guild: a,
      channel: r,
      applicationId: c,
      inviteTargetType: M
    }).catch($.VqG)
  }, [es, r, a, c, M]);
  let [eg] = (0, C.Z)(null != c ? [c] : []), eh = null != F ? F.code : true, ep = null == F ? true : F.maxAge, ev = null == F ? true : F.maxUses, eI = null == F ? true : F.temporary, em = a.vanityURLCode, eS = null != em && em.length > 0, ex = !ee && !(null == N ? true : N.isGuildVocal()) && eS, ef = null != (n = null == F ? true : F.flags) ? n : 0;
  ee || (null == ec ? true : ec.invite_code) == null || (eh = ec.invite_code);
  let ey = s.useMemo(() => en ? (0, B.Qq)(q, Z) : null, [en, q, Z]),
    [eE, e_] = s.useState({
      query: "",
      maxAgeOptions: D,
      maxAge: null != (i = null != ep ? ep : G) ? i : H.zv,
      savedMaxAge: ep === er.value ? null != G ? G : ea.value : er.value,
      maxUses: null != ev && 0 !== ev ? ev : eo.value,
      temporary: null != eI && eI,
      networkError: true,
      showVanityURL: ex,
      currentPage: null != m ? m : J.RV.MAIN,
      lastPage: true,
      flags: ef,
      sectionVisibility: {},
      defaultSectionVisibility: {}
    }),
    eC = s.useCallback(e => {
      e_(t => el({}, t, e))
    }, []),
    eT = s.useCallback(e => {
      eC({
        currentPage: e,
        lastPage: eE.currentPage
      })
    }, [eE.currentPage, eC]),
    eb = en && !ex && !et && !ei,
    {
      enabled: eN
    } = A.o.useExperiment({
      guildId: null == a ? true : a.id,
      location: "acc417_3"
    }, {
      autoTrackExposure: eb
    }),
    {
      maxAge: eA,
      maxUses: eP,
      temporary: eM,
      savedMaxAge: eZ,
      flags: ew
    } = eE,
    ej = s.useCallback(() => {
      let {
        currentPage: e,
        lastPage: t
      } = eE;
      e === J.RV.SETTINGS && null != t ? eT(t) : I()
    }, [eT, eE, I]),
    eV = s.useCallback(() => {
      let e = null == N ? true : N.id;
      0 === eP && 0 === eA && !eM && ex ? eC({
        networkError: true,
        showVanityURL: true
      }) : ee && null != e && (eC({
        networkError: true,
        showVanityURL: false
      }), x.ZP.createInvite(e, {
        max_age: eA,
        max_uses: eP,
        target_type: M,
        target_user_id: d,
        target_application_id: null == eg ? true : eg.id,
        temporary: eM,
        flags: ew
      }, o).catch(e => eC({
        networkError: e,
        showVanityURL: ex
      }))), eA !== er.value && eZ !== er.value && eC({
        savedMaxAge: er.value
      })
    }, [ex, ee, N, o, null == eg ? true : eg.id, M, d, eA, eP, eM, eC, eZ, ew]),
    eO = (0, y.Z)(N),
    eR = (0, y.Z)((0, h.yE)(ew, g.$.IS_APPLICATION_BYPASS)),
    eU = null != eO && eO !== N,
    eG = null != eR && eR !== (0, h.yE)(ew, g.$.IS_APPLICATION_BYPASS);
  s.useEffect(() => {
    !ex && (eU || eG) && eV()
  }, [eV, eU, eG, ex]);
  let {
    canCreateApplicationBypassInvites: ek,
    isManualApprovalGuild: eD
  } = (0, W.R)(a);
  return (0, l.jsx)(_.Gt, {
    value: b,
    children: (0, l.jsx)(eu, {
      ref: t,
      canCreateInvites: ee,
      noInvitesAvailable: et,
      inviteChannel: N,
      guild: a,
      guildScheduledEvent: u,
      streamUserId: d,
      vanityURLCode: em,
      targetType: M,
      targetUserId: d,
      application: eg,
      rows: q,
      sections: ey,
      showFriends: z,
      initialCounts: K,
      code: eh,
      source: o,
      analyticsLocations: b,
      analyticsLocation: S,
      transitionState: p,
      onClose: I,
      canShowVanityURL: ex,
      isGuestInviteCreationToggleEnabled: eN && eb,
      shouldHideTemporaryInviteToggle: eN && eb || eD,
      modalState: eE,
      setModalState: eC,
      changePage: eT,
      onGenerateNewLink: eV,
      handleDone: ej,
      isApplicationBypassToggleEnabled: ek && !et
    })
  })
});

function eg(e) {
  return (0, l.jsx)(ec, el({}, e))
}