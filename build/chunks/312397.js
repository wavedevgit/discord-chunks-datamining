/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  O: () => $,
  Z: () => et
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(512722),
  o = n.n(l),
  A = n(580685),
  c = n(442837),
  d = n(692547),
  u = n(780384),
  g = n(481060),
  f = n(852860),
  m = n(902840),
  p = n(410030),
  h = n(100527),
  C = n(906732),
  b = n(34586),
  v = n(600164),
  x = n(699553),
  N = n(65361),
  j = n(845663),
  E = n(536442),
  I = n(142497),
  O = n(345861),
  y = n(208567),
  w = n(496675),
  P = n(594174),
  B = n(768581),
  D = n(823379),
  T = n(63063),
  S = n(434404),
  L = n(999382),
  R = n(67734),
  Q = n(375263),
  W = n(586382),
  Z = n(594980),
  k = n(515025),
  M = n(760632),
  _ = n(578053),
  G = n(640175),
  F = n(715224),
  U = n(203377),
  H = n(981631),
  z = n(486324),
  X = n(388032),
  Y = n(561169),
  K = n(935653),
  V = n(449874);

function J(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      J(e, t, n[t])
    })
  }
  return e
}
let $ = () => {
  let {
    guild: e,
    originalGuild: t,
    submitting: n,
    errors: s,
    profile: a,
    originalProfile: l
  } = (0, c.cj)([L.Z], () => L.Z.getProps()), o = (0, j.K)({
    guildId: null == e ? void 0 : e.id,
    location: "guild_settings_overview_notice"
  }), A = (0, c.e7)([L.Z], () => L.Z.getProfileError()), d = i.useMemo(() => {
    var e;
    let t = null == A ? void 0 : A.getAnyErrorMessage();
    return null !== (e = (0, U.LG)(s)) && void 0 !== e ? e : t
  }, [s, A]), u = i.useCallback(async () => {
    if (null == e) return;
    o && null != a && null != l && a.visibility !== l.visibility && await (0, x.xV)(e.id, a.visibility);
    let n = {
      name: e.name,
      icon: e.icon,
      splash: e.splash,
      afkChannelId: e.afkChannelId,
      afkTimeout: e.afkTimeout,
      systemChannelId: e.systemChannelId,
      safetyAlertsChannelId: e.safetyAlertsChannelId,
      verificationLevel: e.verificationLevel,
      defaultMessageNotifications: e.defaultMessageNotifications,
      explicitContentFilter: e.explicitContentFilter,
      description: e.description,
      banner: e.banner,
      systemChannelFlags: e.systemChannelFlags,
      publicUpdatesChannelId: e.publicUpdatesChannelId,
      premiumProgressBarEnabled: e.premiumProgressBarEnabled,
      homeHeader: e.homeHeader,
      profile: e.profile
    };
    (0, D.OL)(new Set(e.features), new Set(t.features)) || (n.features = e.features), await S.Z.saveGuild(e.id, n)
  }, [e, o, a, l, t.features]), g = i.useCallback(() => {
    null != e && S.Z.init(e.id)
  }, [e]);
  return (0, r.jsx)(f.Z, {
    submitting: n,
    errorMessage: d,
    onSave: u,
    onReset: g
  })
};
class ee extends i.PureComponent {
  componentDidMount() {
    if (this.props.subsection === H.KsC.DISPLAY && null != this._displaySectionRef.current) {
      let e = this._displaySectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === H.KsC.INVITE && null != this._inviteSectionRef.current) {
      let e = this._inviteSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    } else if (this.props.subsection === H.KsC.DEFAULT_NOTIFICATIONS && null != this._notificationSectionRef.current) {
      let e = this._notificationSectionRef.current;
      setTimeout(() => e.scrollIntoView(), 0)
    }
  }
  handleNameChange(e) {
    S.Z.updateGuild({
      name: e
    })
  }
  handleSplashChange(e) {
    S.Z.updateGuild({
      splash: e
    })
  }
  handlePremiumProgressBarEnabledChange(e) {
    S.Z.updateGuild({
      premiumProgressBarEnabled: e
    })
  }
  handleChangeDescription(e) {
    S.Z.updateGuild({
      description: e
    })
  }
  renderBaseSettings() {
    let {
      guild: e,
      errors: t,
      canManageGuild: n
    } = this.props;
    return (0, r.jsxs)(v.Z, {
      className: Y.__invalid_baseSection,
      children: [(0, r.jsxs)(v.Z, {
        basis: "50%",
        justify: v.Z.Justify.BETWEEN,
        children: [(0, r.jsxs)(v.Z.Child, {
          wrap: !0,
          children: [(0, r.jsx)(y.Z, {
            showIcon: !0,
            name: e.name,
            image: e.icon,
            onChange: this.handleIconChange,
            disabled: !n,
            hint: X.NW.string(X.t["6yrpFR"]),
            makeURL: t => B.ZP.getGuildIconURL({
              id: e.id,
              icon: t,
              canAnimate: !0,
              size: 100
            }),
            className: a()({
              [Y.avatarUploader]: n,
              [Y.avatarUploaderDisabled]: !n
            }),
            imageClassName: a()(Y.avatarUploaderInner, {
              [Y.avatarUploaderInnerEmpty]: null == e.icon
            })
          }), null != t.icon ? (0, r.jsx)("div", {
            className: Y.iconError,
            children: t.icon
          }) : null]
        }), (0, r.jsxs)(v.Z, {
          direction: v.Z.Direction.VERTICAL,
          align: v.Z.Align.START,
          style: {
            maxWidth: 180
          },
          children: [(0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            className: Y.marginBottom8,
            children: X.NW.string(X.t["R/9yQE"])
          }), (0, r.jsx)(O.Z, {
            look: g.iLD.OUTLINED,
            color: g.Ttl.PRIMARY,
            disabled: !n,
            className: Y.marginTop8,
            buttonCTA: X.NW.string(X.t["MsUY/f"]),
            onChange: this.handleOpenImageEditingModal
          })]
        })]
      }), (0, r.jsx)(v.Z.Child, {
        basis: "50%",
        children: (0, r.jsx)(g.xJW, {
          title: X.NW.string(X.t.dBih7e),
          className: Y.marginBottom20,
          children: (0, r.jsx)(g.oil, {
            type: "text",
            disabled: !n,
            value: e.name,
            maxLength: 100,
            onChange: this.handleNameChange,
            error: t.name
          })
        })
      })]
    })
  }
  renderAFKSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props;
    return (0, r.jsxs)(g.hjN, {
      className: Y.divider,
      children: [(0, r.jsxs)(v.Z, {
        children: [(0, r.jsx)(v.Z.Child, {
          basis: "50%",
          children: (0, r.jsx)(g.xJW, {
            title: X.NW.string(X.t.KuYcnZ),
            children: (0, r.jsx)(_.g, {
              canManageGuild: t,
              guildId: e.id,
              afkChannelId: e.afkChannelId
            })
          })
        }), (0, r.jsx)(v.Z.Child, {
          basis: "50%",
          children: (0, r.jsx)(g.xJW, {
            title: X.NW.string(X.t.brhYaW),
            children: (0, r.jsx)(M.M, {
              canManageGuild: t,
              afkTimeout: e.afkTimeout,
              afkChannelId: e.afkChannelId
            })
          })
        })]
      }), (0, r.jsx)(g.R94, {
        className: Y.marginTop8,
        type: g.geA.DESCRIPTION,
        children: X.NW.string(X.t.ffEOKC)
      })]
    })
  }
  renderJoinNotificationSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props;
    return (0, r.jsxs)(g.hjN, {
      className: Y.divider,
      children: [(0, r.jsx)(g.vwX, {
        children: X.NW.string(X.t.NASFnp)
      }), (0, r.jsx)(_.u, {
        canManageGuild: t,
        guildId: e.id,
        systemChannelId: e.systemChannelId
      }), (0, r.jsx)(g.R94, {
        className: Y.marginTop8,
        type: g.geA.DESCRIPTION,
        children: X.NW.string(X.t.BT9zR0)
      }), (0, r.jsx)(F.W, {
        canManageGuild: t,
        guild: e,
        switchClassName: Y.marginTop20
      })]
    })
  }
  renderNotificationSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props;
    return (0, r.jsx)("div", {
      ref: this._notificationSectionRef,
      children: (0, r.jsxs)(g.hjN, {
        className: Y.divider,
        children: [(0, r.jsx)(g.vwX, {
          children: X.NW.string(X.t["23TVho"])
        }), (0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: Y.marginBottom20,
          children: X.NW.string(X.t.U4LwWF)
        }), (0, r.jsx)(g.R94, {
          type: g.geA.DESCRIPTION,
          className: Y.marginBottom20,
          children: X.NW.string(X.t.xdY0pK)
        }), (0, r.jsx)(G.z, {
          guildId: e.id,
          defaultSettings: e.defaultMessageNotifications,
          canManageGuild: t
        })]
      })
    })
  }
  renderActivityFeedSection() {
    let {
      canManageGuild: e,
      isInventoryFeedEnabled: t
    } = this.props;
    return void 0 === t ? null : (0, r.jsx)("div", {
      ref: this._notificationSectionRef,
      children: (0, r.jsxs)(g.hjN, {
        className: Y.divider,
        children: [(0, r.jsx)(g.vwX, {
          children: X.NW.string(X.t["oQ/7BQ"])
        }), (0, r.jsx)(g.j7V, {
          className: Y.marginBottom0,
          onChange: this.handleShowActivityFeedToggle,
          value: t,
          hideBorder: !0,
          note: X.NW.string(X.t.fZ0qZW),
          disabled: !e,
          children: X.NW.string(X.t.WompT0)
        })]
      })
    })
  }
  renderSummariesSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props;
    return (0, m.Jc)(e, !1) ? (0, r.jsx)("div", {
      children: (0, r.jsx)(g.hjN, {
        className: Y.divider,
        children: (0, r.jsx)(g.j7V, {
          className: a()(Y.marginTop8, Y.marginBottom8),
          onChange: this.handleConversationSummariesToggle,
          value: e.hasFeature(H.oNc.SUMMARIES_ENABLED_BY_USER),
          hideBorder: !0,
          note: X.NW.format(X.t["c6Cy/v"], {
            helpdeskArticle: T.Z.getArticleURL(H.BhN.CONVERSATION_SUMMARIES)
          }),
          disabled: !t,
          children: (0, r.jsxs)("div", {
            className: Y.badgedItem,
            children: [X.NW.string(X.t.vmEDQk), (0, r.jsx)(g.IGR, {
              text: X.NW.string(X.t.oW0eUV),
              color: d.Z.unsafe_rawColors.BRAND_500.css,
              className: Y.__invalid_betaTag
            })]
          })
        })
      })
    }) : null
  }
  renderServerInviteBGSection() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props;
    return (0, r.jsx)("div", {
      ref: this._inviteSectionRef,
      children: (0, r.jsx)(g.hjN, {
        className: Y.divider,
        children: (0, r.jsxs)(v.Z, {
          basis: "50%",
          direction: v.Z.Direction.HORIZONTAL,
          align: v.Z.Justify.START,
          children: [(0, r.jsxs)(v.Z.Child, {
            wrap: !0,
            basis: "50%",
            children: [(0, r.jsxs)(g.vwX, {
              className: Y.flexFormTitle,
              children: [(0, r.jsx)("div", {
                children: X.NW.string(X.t.tzGY0t)
              }), (0, r.jsx)(W.hH, {
                guild: e
              })]
            }), (0, r.jsx)(g.R94, {
              type: g.geA.DESCRIPTION,
              className: Y.marginBottom8,
              children: X.NW.string(X.t.F7bbrq)
            }), (0, r.jsx)(g.R94, {
              type: g.geA.DESCRIPTION,
              children: X.NW.format(X.t.ZYA9PT, {
                articleURL: T.Z.getArticleURL(H.BhN.GUILD_INVITE_SPLASH)
              })
            }), (0, r.jsx)(Z.c, {
              guild: e,
              canManageGuild: t,
              buttonClassName: Y.marginTop16
            })]
          }), (0, r.jsx)(v.Z.Child, {
            wrap: !0,
            basis: "50%",
            children: (0, r.jsx)(k.h, {
              guild: e,
              canManageGuild: t
            })
          })]
        })
      })
    })
  }
  renderBanner() {
    let {
      guild: e,
      canManageGuild: t
    } = this.props;
    return (0, r.jsx)(g.hjN, {
      className: Y.divider,
      children: (0, r.jsxs)(v.Z, {
        basis: "50%",
        direction: v.Z.Direction.HORIZONTAL,
        align: v.Z.Justify.START,
        children: [(0, r.jsxs)(v.Z.Child, {
          wrap: !0,
          basis: "50%",
          children: [(0, r.jsxs)(g.vwX, {
            className: Y.flexFormTitle,
            children: [(0, r.jsx)("div", {
              children: X.NW.string(X.t["0r0AzM"])
            }), (0, r.jsx)(W.zA, {
              guild: e
            })]
          }), (0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            className: Y.marginBottom8,
            children: X.NW.string(X.t.UfqmIS)
          }), (0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            children: X.NW.format(X.t.vBcWUl, {
              articleURL: T.Z.getArticleURL(H.BhN.GUILD_BANNER_SPLASH)
            })
          }), (0, r.jsx)(R.F, {
            guild: e,
            canManageGuild: t,
            buttonClassName: Y.marginTop16
          })]
        }), (0, r.jsx)(v.Z.Child, {
          wrap: !0,
          basis: "50%",
          children: (0, r.jsx)(Q.O, {
            guild: e,
            canManageGuild: t
          })
        })]
      })
    })
  }
  renderProgressBar() {
    let {
      guild: e,
      canManageGuild: t,
      theme: n
    } = this.props;
    return (0, r.jsx)(g.hjN, {
      children: (0, r.jsxs)(v.Z, {
        align: v.Z.Align.START,
        children: [(0, r.jsxs)(v.Z, {
          basis: "50%",
          direction: v.Z.Direction.VERTICAL,
          align: v.Z.Align.STRETCH,
          children: [(0, r.jsx)(g.j7V, {
            className: a()(Y.marginTop8, Y.marginBottom8),
            onChange: this.handlePremiumProgressBarEnabledChange,
            value: e.premiumProgressBarEnabled,
            hideBorder: !0,
            disabled: !t,
            children: X.NW.string(X.t.Dl4mJS)
          }), (0, r.jsx)(g.R94, {
            type: g.geA.DESCRIPTION,
            className: Y.marginBottom8,
            children: X.NW.string(X.t.xzHcoa)
          })]
        }), (0, r.jsx)(v.Z.Child, {
          wrap: !0,
          basis: "50%",
          children: (0, r.jsx)("img", {
            alt: X.NW.string(X.t.UOJp5e),
            src: (0, u.ap)(n) ? V : K,
            className: Y.progressBarImage
          })
        })]
      })
    })
  }
  renderDisplaySection() {
    return (0, r.jsx)("div", {
      ref: this._displaySectionRef,
      children: (0, r.jsxs)(g.hjN, {
        title: X.NW.string(X.t.lDskxM),
        tag: g.RB0.H1,
        className: Y.divider,
        children: [this.renderProgressBar(), this.renderBanner(), this.renderServerInviteBGSection()]
      })
    })
  }
  renderProfileVisibilitySection() {
    let {
      canManageGuild: e,
      isGuildProfileVisibilityEnabled: t,
      profile: n
    } = this.props;
    if (!t || null == n) return null;
    let i = A.Y.VISIBLE.has(n.visibility);
    return (0, r.jsxs)(g.hjN, {
      className: Y.divider,
      children: [(0, r.jsx)(g.vwX, {
        children: X.NW.string(X.t.txdaxc)
      }), (0, r.jsx)(g.j7V, {
        className: Y.marginBottom0,
        onChange: this.handleProfileVisibilityChange,
        value: !i,
        hideBorder: !0,
        note: X.NW.string(X.t.yHkqfX),
        disabled: !e,
        children: X.NW.string(X.t.fjHWen)
      })]
    })
  }
  render() {
    return (0, r.jsxs)(g.hjN, {
      title: X.NW.string(X.t.iZmTaG),
      tag: g.RB0.H1,
      children: [this.renderBaseSettings(), this.renderSummariesSection(), this.renderAFKSection(), this.renderJoinNotificationSection(), this.renderActivityFeedSection(), this.renderNotificationSection(), this.renderDisplaySection(), this.renderProfileVisibilitySection()]
    })
  }
  constructor(...e) {
    super(...e), J(this, "_displaySectionRef", i.createRef()), J(this, "_inviteSectionRef", i.createRef()), J(this, "_notificationSectionRef", i.createRef()), J(this, "handleIconChange", e => {
      S.Z.updateGuild({
        icon: e
      })
    }), J(this, "handleOpenImageEditingModal", (e, t) => {
      (0, g.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("91689"), n.e("59732"), n.e("25005"), n.e("30719")]).then(n.bind(n, 73620));
        return n => (0, r.jsx)(i, q({
          onCrop: e => {
            let {
              imageUri: t
            } = e;
            return this.handleIconChange(t)
          },
          imageUri: e,
          file: t
        }, n))
      })
    }), J(this, "handleHomeHeaderChange", (e, t) => {
      if (null == e || void 0 === t) {
        S.Z.updateGuild({
          homeHeader: null
        });
        return
      }(0, g.ZDy)(async () => {
        let {
          default: i
        } = await Promise.all([n.e("91689"), n.e("59732"), n.e("4395")]).then(n.bind(n, 712451));
        return n => (0, r.jsx)(i, q({
          imageUri: e,
          file: t,
          onCrop: e => {
            let {
              imageUri: t
            } = e;
            return S.Z.updateGuild({
              homeHeader: t
            })
          },
          uploadType: z.pC.HOME_HEADER
        }, n))
      })
    }), J(this, "handleConversationSummariesToggle", e => {
      let {
        guild: t
      } = this.props, n = new Set(t.features);
      e ? n.add(H.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(H.oNc.SUMMARIES_ENABLED_BY_USER), S.Z.updateGuild({
        features: n
      })
    }), J(this, "handleShowActivityFeedToggle", e => {
      let {
        guild: t
      } = this.props, n = new Set(t.features);
      e ? (n.add(H.oNc.ACTIVITY_FEED_ENABLED_BY_USER), n.delete(H.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (n.add(H.oNc.ACTIVITY_FEED_DISABLED_BY_USER), n.delete(H.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), S.Z.updateGuild({
        features: n
      })
    }), J(this, "handleProfileVisibilityChange", e => {
      let {
        guild: t
      } = this.props;
      S.Z.updateGuildProfile(t.id, {
        visibility: e ? A.k.RESTRICTED : A.k.PUBLIC
      })
    })
  }
}

function et() {
  let {
    guild: e,
    errors: t,
    submitting: n,
    subsection: s,
    profile: a
  } = (0, c.cj)([L.Z], () => L.Z.getProps()), l = (0, p.ZP)(), {
    analyticsLocations: A
  } = (0, C.ZP)(h.Z.OVERVIEW);
  i.useEffect(() => {
    (0, I.Kw)(E.v6.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL)
  }, []);
  let {
    canManageGuild: d,
    isGuildAdmin: u
  } = (0, c.cj)([w.Z], () => ({
    canManageGuild: w.Z.can(H.Plq.MANAGE_GUILD, e),
    isGuildAdmin: w.Z.can(H.Plq.ADMINISTRATOR, e)
  })), g = (0, b.E)(e), f = (0, c.e7)([P.default], () => P.default.getCurrentUser()), m = null == e ? void 0 : e.id, v = (0, j.K)({
    guildId: m,
    location: "guild_settings_overview"
  }), {
    fetchGuildProfile: x
  } = (0, N.u)(null == e ? void 0 : e.id);
  return (i.useEffect(() => {
    null != m && v && x()
  }, [m, v, x]), o()(null != f, "GuildSettingsOverview: currentUser cannot be undefined"), null == e) ? null : (0, r.jsx)(C.Gt, {
    value: A,
    children: (0, r.jsx)(ee, {
      canManageGuild: d,
      isGuildAdmin: u,
      subsection: s,
      guild: e,
      errors: t,
      submitting: n,
      currentUser: f,
      isInventoryFeedEnabled: g,
      isGuildProfileVisibilityEnabled: v,
      profile: a,
      theme: l,
      analyticsLocations: A
    })
  })
}