/** Chunk was on 43600 **/
/** chunk id: 234355, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => ev
}), require("./938796.js"), require("./896048.js");
var l, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  c = require.n(Chunk735438),
  Chunk821418 = require("./821418.js"),
  Chunk665260 = require("./665260.js"),
  Chunk189213 = require("./189213.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk846293 = require("./846293.js"),
  Chunk681579 = require("./681579.js"),
  Chunk475743 = require("./475743.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk148719 = require("./148719.js"),
  Chunk713654 = require("./713654.js"),
  Chunk834757 = require("./834757.js"),
  Chunk720527 = require("./720527.js"),
  Chunk446600 = require("./446600.js"),
  Chunk260509 = require("./260509.js"),
  Chunk616356 = require("./616356.js"),
  Chunk963307 = require("./963307.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk958590 = require("./958590.js"),
  Chunk535820 = require("./535820.js"),
  Chunk576705 = require("./576705.js"),
  Chunk290863 = require("./290863.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk607567 = require("./607567.js"),
  Chunk954571 = require("./954571.js"),
  Chunk735547 = require("./735547.js"),
  Chunk368739 = require("./368739.js"),
  Chunk21599 = require("./21599.js"),
  Chunk540683 = require("./540683.js"),
  Chunk4092 = require("./4092.js"),
  Chunk279208 = require("./279208.js"),
  Chunk577710 = require("./577710.js"),
  Chunk968010 = require("./968010.js"),
  Chunk663269 = require("./663269.jsx"),
  Chunk708051 = require("./708051.jsx"),
  Chunk672814 = require("./672814.jsx"),
  Chunk172799 = require("./172799.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk912579 = require("./912579.js"),
  Chunk176465 = require("./176465.js");

function ea(e, t, n) {
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}

function eo(e, t) {
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
  INVITE_OPTIONS_FOREVER: eu,
  INVITE_OPTIONS_7_DAYS: ed,
  INVITE_OPTIONS_UNLIMITED: ec
} = Chunk735547.Ay;
class eg extends(l = Chunk64700.PureComponent) {
  componentDidMount() {
    let {
      inviteChannel: e,
      code: t,
      guild: n,
      source: l,
      canCreateInvites: i,
      analyticsLocation: s,
      streamUserId: a,
      targetType: r,
      targetUserId: o,
      application: u,
      initialCounts: d,
      rows: c,
      showFriends: g,
      modalState: h,
      setModalState: p
    } = this.props, {
      maxAge: v,
      maxUses: A,
      temporary: I,
      flags: m
    } = h;
    if (i) {
      let n = null == e ? true : e.id;
      if (null == n) return;
      p({
        networkError: true
      }), S.Ay.createInvite(n, {
        validate: null != t ? t : null,
        max_age: v,
        max_uses: A,
        target_user_id: o,
        target_type: r,
        target_application_id: null == u ? true : u.id,
        temporary: I,
        flags: m
      }, l).catch(e => p({
        networkError: e
      }))
    }
    if (g && F.default.track(et.HAw.INVITE_SUGGESTION_OPENED, {
        location: l,
        num_suggestions: c.length,
        num_friends: d.numFriends,
        num_dms: d.numDms,
        num_group_dms: d.numGroupDms,
        guild_id: n.id,
        application_id: null == u ? true : u.id
      }), null != a) {
      let e = j.A.getStreamForUser(a, n.id),
        t = (0, T.Ee)(e, D.A);
      F.default.track(et.HAw.OPEN_MODAL, {
        type: "Send Stream Invite",
        source: l,
        location: s,
        other_user_id: a,
        application_id: null != t ? t.id : null,
        application_name: null != t ? t.name : null,
        game_id: null != t ? t.id : null
      })
    } else(null == u ? true : u.id) != null || F.default.track(et.HAw.OPEN_MODAL, {
      type: "Instant Invite Modal",
      source: l,
      location: s
    })
  }
  componentWillUnmount() {
    let {
      inviteChannel: e,
      modalState: t
    } = this.props;
    (0, h.Lt)(t.flags, g.Q.IS_GUEST_INVITE) && null != e && S.Ay.clearInviteFromStore(e.id)
  }
  getInviteKey() {
    let {
      code: e,
      vanityURLCode: t,
      guildScheduledEvent: n,
      modalState: l
    } = this.props, {
      showVanityURL: i
    } = l, s = i ? t : null != e ? e : t;
    return null == s ? s : (0, Q.WU)({
      baseCode: s,
      guildScheduledEventId: null == n ? true : n.id
    })
  }
  renderChannelWarning() {
    let {
      inviteChannel: e
    } = this.props;
    return (0, C.A)(e) ? (0, i.jsxs)("div", {
      className: ei.UW,
      children: [(0, i.jsx)(m.EpV, {
        size: "custom",
        className: ei.QW,
        color: A.A.unsafe_rawColors.YELLOW_300.css,
        width: 12
      }), (0, i.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "text-default",
        children: el.intl.string(el.t.x1SQZb)
      })]
    }) : null
  }
  getHeaderContent() {
    let e, t, {
      guild: n,
      guildScheduledEvent: l,
      streamUserId: s,
      application: a,
      inviteChannel: r
    } = this.props;
    if (e = null != s ? el.intl.string(el.t["6VQaqd"]) : null != a ? el.intl.formatToPlainString(el.t.ZdK3dW, {
        applicationName: a.name
      }) : null != l ? el.intl.string(el.t.JKV4FL) : (null == r ? true : r.isGuildStageVoice()) ? el.intl.string(el.t.zTrsH0) : el.intl.formatToPlainString(el.t.NvVBJU, {
        name: n.name
      }), null != r) {
      let e = (0, b.gU)(r, n);
      null != e && (t = el.intl.format(el.t.MkSwTR, {
        channelName: r.name,
        channelNameHook: (t, n) => (0, i.jsxs)("span", {
          children: [(0, i.jsx)(e, {
            className: ei.p
          }), t]
        }, n)
      }))
    }
    return n.features.has(et.GuildFeatures.HUB) ? {
      title: el.intl.string(el.t.WhR38i),
      subtitle: el.intl.string(el.t.Ed4BMs)
    } : {
      title: e,
      subtitle: t
    }
  }
  renderFriendsBody() {
    let {
      modalState: e,
      showFriends: t,
      guild: n
    } = this.props, {
      query: l
    } = e, s = this.getListProps();
    return {
      bodyContent: true,
      controls: (0, i.jsxs)(i.Fragment, {
        children: [t && (0, i.jsx)(m.IWV, {
          size: "md",
          query: l,
          onChange: this.handleQueryChange,
          placeholder: el.intl.string(el.t.CmSHYx),
          autoFocus: true,
          onClear: this.handleClearSearch
        }), !n.features.has(et.GuildFeatures.HUB) && this.renderChannelWarning()]
      }),
      listProps: s
    }
  }
  getListProps() {
    let {
      rows: e,
      sections: t
    } = this.props, n = this.getInviteKey();
    return 0 === e.length ? {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, i.jsx)("div", {
        className: ei.Iq,
        children: (0, i.jsx)(m.SGT, {
          children: el.intl.string(el.t.ojoWgX)
        })
      }),
      rowHeight: 200
    } : null == n ? {
      sections: [1],
      sectionHeight: 0,
      renderRow: () => (0, i.jsx)("div", {
        className: ei.Iq,
        children: (0, i.jsx)(m.SGT, {
          children: el.intl.string(el.t.hzPwGG)
        })
      }),
      rowHeight: 200
    } : null != t ? {
      sections: t.map(e => e.length),
      renderSection: this.renderSection,
      sectionHeight: this.getSectionHeight,
      renderRow: this.renderRow,
      rowHeight: this.getRowHeight
    } : {
      sections: [e.length],
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
      streamUserId: l,
      application: s
    } = this.props;
    if (n) return this.renderFriendsBody();
    let a = (0, z.A)(null != (e = this.getInviteKey()) ? e : ""),
      r = k.default.getCurrentUser();
    u()(null != r, "InstantInviteModal: user cannot be undefined");
    let o = (0, O.bM)(t, r) ? el.intl.string(el.t.HFbByJ) : el.intl.string(el.t.ueBhA9);
    return null != l ? o = el.intl.string(el.t.CXpS1I) : null != s && (o = el.intl.string(el.t.ueCrHB)), {
      bodyContent: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(m.Text, {
          className: ei.Sv,
          variant: "text-sm/normal",
          children: o
        }), (0, i.jsx)(X.p, eo(er({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: a
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
      guildScheduledEvent: l,
      streamUserId: s,
      application: a,
      inviteChannel: r,
      modalState: o
    } = this.props, {
      maxAge: u
    } = o, d = null, c = (0, z.A)(null != (e = this.getInviteKey()) ? e : "");
    if (n) {
      let e = el.intl.string(el.t.MLkj7N);
      null != s ? e = el.intl.string(el.t["1b9neu"]) : null != a ? e = el.intl.string(el.t.iI1gMg) : null != l ? e = el.intl.string(el.t.KaWCyD) : (null == r ? true : r.isGuildStageVoice()) && (e = el.intl.string(el.t["2frWa3"])), d = (0, i.jsx)(m.D0$, {
        label: e,
        children: (0, i.jsx)(X.p, eo(er({}, this.props), {
          setInviteFlags: this.handleSetInviteFlags,
          copyValue: c
        }))
      })
    } else t || (d = (0, i.jsxs)("div", {
      className: ei.xF,
      children: [(0, i.jsx)(m.Checkbox, {
        checked: u === eu.value,
        onChange: this.handleToggleMaxAge,
        label: el.intl.string(el.t["QKJru/"])
      }), (0, i.jsx)(I.m_, {
        text: el.intl.string(el.t.Yx4IiC),
        children: (0, i.jsx)(m.DUT, {
          onClick: this.openSettings,
          className: es.or,
          children: (0, i.jsx)(m.Zes, {
            size: "sm",
            color: A.A.unsafe_rawColors.PRIMARY_400.css
          })
        })
      })]
    }));
    return d
  }
  getModal() {
    let {
      modalState: e,
      handleDone: t,
      transitionState: n,
      onClose: l
    } = this.props, {
      currentPage: s
    } = e;
    switch (s) {
      case ee.QR.MAIN:
        let {
          title: a, subtitle: r
        } = this.getHeaderContent(), {
          bodyContent: o,
          controls: u,
          listProps: d
        } = this.getBodyContent();
        return (0, i.jsx)(p.Modal, {
          transitionState: n,
          onClose: l,
          title: a,
          subtitle: r,
          input: u,
          listProps: d,
          preview: this.renderFooter(),
          actions: [],
          children: o
        });
      case ee.QR.SETTINGS:
        return (0, i.jsx)(Z.h, eo(er({}, this.props), {
          onSetInviteFlags: this.handleSetInviteFlags,
          headerId: this._headerId,
          onSelectMaxAge: this.handleSelectMaxAge,
          onSelectMaxUses: this.handleSelectMaxUses,
          onToggleTemporary: this.handleToggleTemporary,
          handleDone: t
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
    return (0, i.jsx)("div", {
      className: r()({
        [ei.iE]: e,
        [ei.VL]: null != t
      }),
      children: this.getModal()
    })
  }
  constructor(...e) {
    super(...e), ea(this, "_scroller", null), ea(this, "_headerId", c().uniqueId()), ea(this, "getSectionVisibility", e => {
      var t;
      let {
        modalState: n
      } = this.props;
      return null == (t = n.sectionVisibility[e]) || t
    }), ea(this, "openSettings", () => {
      let {
        changePage: e
      } = this.props;
      e(ee.QR.SETTINGS)
    }), ea(this, "handleSelectMaxAge", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        maxAge: e,
        savedMaxAge: t.maxAge
      })
    }), ea(this, "handleSelectMaxUses", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        maxUses: e
      })
    }), ea(this, "handleToggleTemporary", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        temporary: e
      })
    }), ea(this, "handleSetInviteFlags", e => {
      let {
        setModalState: t
      } = this.props;
      t({
        flags: e
      })
    }), ea(this, "handleQueryChange", e => {
      var t;
      let {
        modalState: n,
        setModalState: l
      } = this.props, i = {
        query: e
      };
      "" === e && "" !== n.query ? (i.sectionVisibility = er({}, n.defaultSectionVisibility), i.defaultSectionVisibility = {}) : "" !== e && "" === n.query && (i.defaultSectionVisibility = er({}, n.sectionVisibility), i.sectionVisibility = {}), null == (t = this._scroller) || t.scrollTo({
        to: 0
      }), (0, x.B)(e), l(i)
    }), ea(this, "handleClearSearch", () => {
      this.handleQueryChange("")
    }), ea(this, "handleToggleMaxAge", () => {
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
    }), ea(this, "handleToggleSectionVisibility", e => {
      let {
        modalState: t,
        setModalState: n
      } = this.props;
      n({
        sectionVisibility: eo(er({}, t.sectionVisibility), {
          [e]: !this.getSectionVisibility(e)
        })
      })
    }), ea(this, "getRowHeight", (e, t) => {
      let {
        sections: n,
        rows: l
      } = this.props, i = this.getSectionVisibility(e);
      if (null != n && !i) return 0;
      switch ((null == n ? l[t] : n[e][t]).type) {
        case H.OK.CHANNEL:
        case H.OK.GROUP_DM:
        case H.OK.DM:
        case H.OK.FRIEND:
          return $.r;
        default:
          return 0
      }
    }), ea(this, "renderRow", e => {
      let {
        section: t,
        row: n
      } = e, {
        rows: l,
        sections: s,
        analyticsLocation: a,
        source: r,
        shouldRenameButtonCTA: o
      } = this.props, u = this.getInviteKey(), d = null == s ? l[n] : s[t][n], c = "".concat(d.type, "-").concat(d.item.id), g = this.getSectionVisibility(t);
      if (null != s && !g) return null;
      switch (d.type) {
        case H.OK.GROUP_DM:
        case H.OK.CHANNEL:
          return (0, i.jsx)($.e, {
            row: d,
            channel: d.item,
            inviteKey: u,
            location: a,
            source: r,
            shouldRenameButtonCTA: o
          }, c);
        case H.OK.DM:
        case H.OK.FRIEND:
          return (0, i.jsx)($.e, {
            row: d,
            user: d.item,
            inviteKey: u,
            location: a,
            source: r,
            shouldRenameButtonCTA: o
          }, c);
        default:
          return null
      }
    }), ea(this, "getSectionHeight", e => 0 === e ? 24 : 36), ea(this, "renderSection", e => {
      let {
        section: t
      } = e, {
        sections: n
      } = this.props;
      if (null == n) return null;
      let l = 0 === t ? el.intl.string(el.t.y29JXs) : el.intl.string(el.t.Sd8Ixw),
        s = this.getSectionVisibility(t);
      return (0, i.jsx)(eh, {
        section: t,
        heading: l,
        isOpen: s,
        onToggleVisibility: this.handleToggleSectionVisibility
      })
    })
  }
}

function eh(e) {
  let {
    section: t,
    heading: n,
    isOpen: l,
    onToggleVisibility: s
  } = e;
  return (0, i.jsxs)(m.DUT, {
    style: {
      "--custom-invite-section-header-height": 24,
      "--custom-invite-section-header-gap": 12 * (0 !== t),
      "--custom-icon-collapse-rotate": l ? "0deg" : "-90deg"
    },
    className: ei.uP,
    onClick: () => s(t),
    children: [(0, i.jsx)(m.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: n
    }), (0, i.jsx)(m.abt, {
      size: "md",
      color: "currentColor",
      className: ei.ep
    })]
  })
}
ea(eg, "defaultProps", {
  analyticsLocation: Chunk652215.ThZ.GUILD_CREATE_INVITE_SUGGESTION,
  defaultMaxAge: ed.value
});
let ep = Chunk64700.forwardRef(function(e, t) {
  var n, l;
  let {
    channel: a,
    guild: r,
    source: o,
    guildScheduledEvent: u,
    streamUserId: d,
    applicationId: c,
    transitionState: p,
    onClose: A,
    page: I,
    analyticsLocation: m
  } = e, {
    analyticsLocations: b
  } = (0, E.Ay)(f.A.INSTANT_INVITE_MODAL), {
    enabled: T
  } = q.D.useConfig({
    location: "InstantInvite"
  }), O = (0, v.bG)([L.A, R.A, V.Ay], () => {
    if (null != a) return a;
    let e = L.A.getChannelId(),
      t = null == e || (0, en.jq)(e) ? true : R.A.getChannel(e);
    return (null == t ? true : t.isThread()) && (t = R.A.getChannel(t.parent_id)), (null == t ? true : t.guild_id) === r.id && null != t ? t : V.Ay.getDefaultChannel(r.id, true, et.xBc.CREATE_INSTANT_INVITE)
  }, [a, r.id]), j = null;
  null != d ? j = ee.yV.STREAM : null != c && (j = ee.yV.EMBEDDED_APPLICATION);
  let D = null != a ? a.getGuildId() : null != r ? r.id : null,
    k = (0, K.LD)({
      guildId: D,
      location: "InstantInviteModalConnected"
    }),
    F = (0, K.pS)({
      guildId: D,
      location: "InstantInviteModalConnected"
    }),
    Q = (0, v.bG)([U.A], () => {
      let e = null != O ? O.id : null;
      return null == e ? null : U.A.getInvite(e, {
        targetType: j,
        targetUserId: d,
        targetApplicationId: c
      })
    }, [O, j, d, c]),
    [z, Z, X, $] = (0, v.yK)([G.A, B.Ay], () => [G.A.getInviteSuggestionRows(), G.A.getTotalSuggestionsCount() >= 1, G.A.getInitialCounts(), null != a && null != O ? B.Ay.getVoiceStatesForChannel(O) : null], [O, a]),
    el = s.useMemo(() => {
      let e = null != O ? O.id : null;
      return null != D ? w.Ay.getProps(D, e) : true
    }, [O, D]),
    ei = (0, v.bG)([P.A], () => null != O && P.A.can(et.xBc.CREATE_INSTANT_INVITE, O), [O]),
    es = null === Q || !ei,
    ea = (null == O ? true : O.type) === et.rbe.GUILD_VOICE,
    eo = (0, C.A)(O),
    eh = s.useMemo(() => {
      let e = new Set;
      return ea || null != d ? null == $ || $.forEach(t => {
        let {
          user: n
        } = t;
        e.add(n.id)
      }) : null != D && null != el && j !== ee.yV.EMBEDDED_APPLICATION && el.rows.forEach(t => {
        t.type === w.S9.MEMBER && e.add(t.userId)
      }), e
    }, [ea, el, d, $, D, j]),
    ep = null == a ? true : a.id,
    ev = (0, v.bG)([M.A], () => M.A.getStageInstanceByChannel(ep), [ep]);
  s.useEffect(() => {
    (0, x.t)({
      omitUserIds: eh,
      guild: r,
      channel: a,
      applicationId: c,
      inviteTargetType: j
    }).catch(et.FXj)
  }, [eh, a, r, c, j]);
  let [eA] = (0, _.A)(null != c ? [c] : []), eI = null != Q ? Q.code : true, em = null == Q ? true : Q.maxAge, eS = null == Q ? true : Q.maxUses, ex = null == Q ? true : Q.temporary, ey = r.vanityURLCode, ef = null != ey && ey.length > 0, eE = !ei && !(null == O ? true : O.isGuildVocal()) && ef, e_ = null != (n = null == Q ? true : Q.flags) ? n : 0;
  ei || (null == ev ? true : ev.invite_code) == null || (eI = ev.invite_code);
  let eC = s.useMemo(() => ea ? (0, H.Gv)(z, D) : null, [ea, z, D]),
    [eb, eT] = s.useState({
      query: "",
      maxAgeOptions: F,
      maxAge: null != (l = null != em ? em : k) ? l : K.D4,
      savedMaxAge: em === eu.value ? null != k ? k : ed.value : eu.value,
      maxUses: null != eS && 0 !== eS ? eS : ec.value,
      temporary: null != ex && ex,
      networkError: true,
      showVanityURL: eE,
      currentPage: null != I ? I : ee.QR.MAIN,
      lastPage: true,
      flags: e_,
      sectionVisibility: {},
      defaultSectionVisibility: {},
      roleIds: new Set
    }),
    eN = s.useCallback(e => {
      eT(t => er({}, t, e))
    }, []),
    eM = s.useCallback(e => {
      eN({
        currentPage: e,
        lastPage: eb.currentPage
      })
    }, [eb.currentPage, eN]),
    eO = ea && !eE && !es && !eo,
    {
      enabled: ej
    } = N.w.useExperiment({
      guildId: null == r ? true : r.id,
      location: "acc417_3"
    }, {
      autoTrackExposure: eO
    }),
    {
      maxAge: ew,
      maxUses: eR,
      temporary: eV,
      savedMaxAge: eU,
      flags: eG,
      roleIds: eP
    } = eb,
    {
      enabled: eD
    } = (0, W.E)(null == r ? true : r.id, "InstantInviteModal"),
    eL = (0, J.A)(r),
    ek = eD && eL.length > 0,
    eB = s.useCallback(e => {
      let t = new Set(eP);
      t.delete(e) || t.add(e), eN({
        roleIds: t
      })
    }, [eP, eN]),
    eF = s.useCallback(() => {
      let {
        currentPage: e,
        lastPage: t
      } = eb;
      e === ee.QR.SETTINGS && null != t ? eM(t) : A()
    }, [eM, eb, A]),
    eH = s.useCallback(() => {
      let e = null == O ? true : O.id;
      0 === eR && 0 === ew && !eV && eE ? eN({
        networkError: true,
        showVanityURL: true
      }) : ei && null != e && (eN({
        networkError: true,
        showVanityURL: false
      }), S.Ay.createInvite(e, {
        max_age: ew,
        max_uses: eR,
        target_type: j,
        target_user_id: d,
        target_application_id: null == eA ? true : eA.id,
        temporary: eV,
        flags: eG,
        role_ids: Array.from(eP)
      }, o).catch(e => eN({
        networkError: e,
        showVanityURL: eE
      }))), ew !== eu.value && eU !== eu.value && eN({
        savedMaxAge: eu.value
      })
    }, [eE, ei, O, o, null == eA ? true : eA.id, j, d, ew, eR, eV, eN, eU, eG, eP]),
    eK = (0, y.A)(O),
    eQ = (0, y.A)((0, h.Lt)(eG, g.Q.IS_APPLICATION_BYPASS)),
    eW = null != eK && eK !== O,
    eq = null != eQ && eQ !== (0, h.Lt)(eG, g.Q.IS_APPLICATION_BYPASS);
  s.useEffect(() => {
    !eE && (eW || eq) && eH()
  }, [eH, eW, eq, eE]);
  let {
    canCreateApplicationBypassInvites: ez,
    isManualApprovalGuild: eY
  } = (0, Y.N)(r);
  return (0, i.jsx)(E.f5, {
    value: b,
    children: (0, i.jsx)(eg, {
      ref: t,
      canCreateInvites: ei,
      noInvitesAvailable: es,
      inviteChannel: O,
      guild: r,
      guildScheduledEvent: u,
      streamUserId: d,
      vanityURLCode: ey,
      targetType: j,
      targetUserId: d,
      application: eA,
      rows: z,
      sections: eC,
      showFriends: Z,
      initialCounts: X,
      code: eI,
      source: o,
      analyticsLocations: b,
      analyticsLocation: m,
      transitionState: p,
      onClose: A,
      canShowVanityURL: eE,
      isGuestInviteCreationToggleEnabled: ej && eO,
      shouldHideTemporaryInviteToggle: ej && eO || eY,
      modalState: eb,
      setModalState: eN,
      changePage: eM,
      onGenerateNewLink: eH,
      handleDone: eF,
      isApplicationBypassToggleEnabled: ez && !es,
      isRoleAssignmentEnabled: ek,
      assignableRoles: eL,
      onToggleRole: eB,
      shouldRenameButtonCTA: T
    })
  })
});

function ev(e) {
  return (0, i.jsx)(ep, er({}, e))
}