/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => G,
  s: () => M
}), n(266796), n(47120), n(653041);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(481060),
  l = n(852860),
  o = n(558324),
  A = n(933557),
  c = n(456268),
  d = n(134432),
  u = n(345861),
  g = n(208567),
  f = n(984933),
  m = n(496675),
  p = n(699516),
  h = n(594174),
  C = n(768581),
  b = n(900849),
  v = n(434404),
  x = n(999382),
  N = n(718157),
  j = n(450474),
  E = n(209054),
  I = n(118215),
  O = n(166184),
  y = n(96788),
  w = n(936735),
  P = n(654351),
  B = n(354051),
  D = n(347604),
  T = n(203377),
  S = n(929834),
  L = n(981631),
  R = n(388032),
  Q = n(482719);

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Z() {
  return (Z = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}
let M = s.ZP.connectStores([x.Z], () => {
  let {
    guild: e,
    originalGuild: t,
    submitting: n,
    guildMetadata: r
  } = x.Z.getProps();
  return {
    guild: e,
    submitting: n,
    onReset() {
      null != e && v.Z.init(e.id)
    },
    onSave() {
      null != e && ((0, P.UA)(e, t), v.Z.saveGuild(e.id, {
        features: e.features,
        discoverySplash: e.discoverySplash,
        description: e.description,
        safetyAlertsChannelId: e.safetyAlertsChannelId,
        rulesChannelId: e.rulesChannelId,
        preferredLocale: e.preferredLocale
      }), (0, c.Vv)({
        guildId: e.id,
        primaryCategoryId: r.primaryCategoryId,
        keywords: r.keywords,
        emojiDiscoverabilityEnabled: r.emojiDiscoverabilityEnabled,
        partnerActionedTimestamp: r.partnerActionedTimestamp,
        partnerApplicationTimestamp: r.partnerApplicationTimestamp,
        isPublished: r.isPublished,
        reasonsToJoin: r.reasonsToJoin,
        socialLinks: r.socialLinks,
        about: r.about
      }))
    }
  }
})(l.Z);
class _ extends i.PureComponent {
  async componentDidMount() {
    let {
      guild: e
    } = this.props;
    if (null != e) {
      (0, E.k)(e.id).then(() => {
        (0, y.V)(e.id)
      }), (0, c.le)(), (0, c.aC)(e.id);
      let t = await (0, b.Eg)(e.id);
      null != t && this.setState({
        discoverableGuild: t
      })
    }
  }
  renderDiscoverableSection() {
    let {
      guild: e,
      isGuildAdmin: t
    } = this.props;
    if (null == e) return;
    let n = e.hasFeature(L.oNc.DISCOVERABLE);
    return (0, r.jsxs)(a.hjN, {
      className: Q.twoColumnFormSection,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.vwX, {
          className: Q.formTitle,
          children: R.NW.string(R.t.XU0S6u)
        }), (0, r.jsx)(a.R94, {
          type: a.geA.DESCRIPTION,
          className: Q.formDescription,
          children: R.NW.string(R.t["IIiV/P"])
        }), (0, r.jsx)(a.R94, {
          type: a.geA.DESCRIPTION,
          className: Q.formDescription,
          children: R.NW.string(R.t.rSHA09)
        }), (0, r.jsx)(a.ua7, {
          text: t ? null : R.NW.string(R.t["5VbUBw"]),
          children: e => {
            var i, s;
            return (0, r.jsx)(a.zxk, (i = k({
              size: a.zxk.Sizes.SMALL,
              onClick: this.handleToggleDiscovery,
              color: n ? a.zxk.Colors.PRIMARY : a.zxk.Colors.GREEN,
              disabled: !t
            }, e), s = s = {
              children: n ? R.NW.string(R.t.VHHyFR) : R.NW.string(R.t.XU0S6u)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(s)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
            }), i))
          }
        })]
      }), (0, r.jsx)(O.Z, {
        className: Q.guildCard,
        loading: null == e,
        guild: e
      })]
    })
  }
  renderCoverImageSection() {
    let {
      guild: e,
      errors: t,
      canManageGuild: n
    } = this.props;
    if (null != e) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(a.hjN, {
        className: Q.twoColumnFormSection,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(a.vwX, {
            className: Q.formTitle,
            children: R.NW.string(R.t["8bT/Cg"])
          }), (0, r.jsx)(a.R94, {
            type: a.geA.DESCRIPTION,
            className: Q.formDescription,
            children: R.NW.string(R.t.Ltsutr)
          }), (0, r.jsx)(u.Z, {
            buttonCTA: R.NW.string(R.t.yG2pUl),
            size: a.zxk.Sizes.SMALL,
            color: a.zxk.Colors.PRIMARY,
            disabled: !n,
            onChange: this.handleSplashChange
          })]
        }), (0, r.jsx)("div", {
          className: Q.imageUploaderWrapper,
          children: (0, r.jsx)(g.Z, {
            image: e.discoverySplash,
            makeURL: t => C.ZP.getGuildDiscoverySplashURL({
              id: e.id,
              splash: t,
              size: 512 * (0, d.x_)()
            }),
            disabled: !n,
            onChange: this.handleSplashChange,
            hint: R.NW.string(R.t.uPvxqK),
            imageClassName: Q.imageUploaderInnerSquare,
            hideSize: !0
          })
        })]
      }), (null == t ? void 0 : t.discovery_splash) != null ? (0, r.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-sm/normal",
        children: t.discovery_splash
      }) : null]
    })
  }
  renderEmojiDiscoverabilitySection() {
    let {
      canManageGuild: e,
      guildMetadata: t,
      guild: n
    } = this.props, {
      discoverableGuild: i
    } = this.state, {
      emojiDiscoverabilityEnabled: s
    } = t;
    return (0, r.jsxs)(a.hjN, {
      className: Q.twoColumnFormSection,
      children: [(0, r.jsxs)("div", {
        className: Q.formColumnLeft,
        children: [(0, r.jsx)(a.vwX, {
          className: Q.formTitle,
          children: R.NW.string(R.t.DhJ8ur)
        }), (0, r.jsx)(a.R94, {
          className: Q.description,
          type: a.geA.DESCRIPTION,
          children: R.NW.string(R.t["/RSSlZ"])
        }), (0, r.jsx)(a.zxk, {
          size: a.zxk.Sizes.SMALL,
          color: s ? a.zxk.Colors.PRIMARY : a.zxk.Colors.GREEN,
          disabled: !e,
          onClick: this.handleToggleEmojiDiscoverability,
          children: s ? R.NW.string(R.t.XnrNLi) : R.NW.string(R.t.bHbZLC)
        })]
      }), (0, r.jsx)(w.k, {
        guild: n,
        discoverableGuild: i
      })]
    })
  }
  renderLocaleSelector() {
    let {
      guild: e,
      canManageGuild: t,
      localeOptions: n
    } = this.props;
    if (null != e) return (0, r.jsxs)(a.hjN, {
      className: Q.twoColumnFormSection,
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.vwX, {
          className: Q.formTitle,
          children: R.NW.string(R.t.pO60f3)
        }), (0, r.jsx)(a.R94, {
          type: a.geA.DESCRIPTION,
          className: Q.formDescription,
          children: R.NW.string(R.t["SF/GRk"])
        })]
      }), (0, r.jsx)("div", {
        className: Q.formSelect,
        children: (0, r.jsx)(a.q4e, {
          value: e.preferredLocale,
          options: n,
          onChange: this.handleLocaleChange,
          isDisabled: !t
        })
      })]
    })
  }
  renderCategoriesSection() {
    let {
      canManageGuild: e,
      guildMetadata: t,
      errors: n,
      guild: i
    } = this.props;
    if (null != i) return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(a.hjN, {
        children: [(0, r.jsx)(a.vwX, {
          className: Q.formTitle,
          children: R.NW.string(R.t["5b4VCQ"])
        }), (0, r.jsx)(a.R94, {
          type: a.geA.DESCRIPTION,
          className: Q.description,
          children: R.NW.string(R.t.MSfJlZ)
        })]
      }), (0, r.jsx)(N.E, {
        guildId: i.id,
        guildMetadata: t,
        isDisabled: !e
      }), (0, r.jsxs)(a.hjN, {
        className: Q.noDividerFormSection,
        children: [(0, r.jsx)(a.vwX, {
          className: Q.formTitle,
          children: R.NW.string(R.t.oOPlPD)
        }), (0, r.jsx)(j.Z, {
          guild: i,
          guildMetadata: t
        })]
      }), (null == n ? void 0 : n.category) != null ? (0, r.jsx)(a.Text, {
        color: "text-danger",
        className: Q.error,
        variant: "text-sm/normal",
        children: n.category
      }) : null]
    })
  }
  renderKeywordsSection() {
    let {
      canManageGuild: e,
      guildMetadata: t,
      errors: n
    } = this.props;
    return (0, r.jsxs)(a.hjN, {
      children: [(0, r.jsx)(a.vwX, {
        className: Q.formTitle,
        children: R.NW.string(R.t.V5pXNT)
      }), (0, r.jsx)(a.R94, {
        className: Q.description,
        type: a.geA.DESCRIPTION,
        children: R.NW.format(R.t.FLMb5O, {})
      }), (0, r.jsx)(o.Z, {
        tags: t.keywords,
        onRemoveTag: this.handleRemoveKeyword,
        onAddTag: this.handleAddKeyword,
        maxTags: T.G7,
        maxTaxLength: T._0,
        disabled: !e
      }), (null == n ? void 0 : n.keywords) != null ? (0, r.jsx)(a.Text, {
        color: "text-danger",
        className: Q.error,
        variant: "text-sm/normal",
        children: n.keywords
      }) : null]
    })
  }
  render() {
    let {
      guild: e,
      discoveryChecklist: t,
      isGuildAdmin: n
    } = this.props;
    if (null == e || null == t) return null;
    switch ((0, P.TJ)(e, t)) {
      case P.d5.INTRO:
        return (0, r.jsx)(D.Z, {
          guild: e,
          onEnableDiscovery: this.handleEnableDiscovery,
          isGuildAdmin: n
        });
      case P.d5.DISQUALIFIED:
        return (0, r.jsx)(B.Z, {
          guild: e
        });
      case P.d5.SETTINGS:
        return (0, r.jsxs)(a.hjN, {
          className: Q.__invalid_discoverySettings,
          title: R.NW.string(R.t.oGaVGx),
          tag: a.RB0.H1,
          children: [this.renderDiscoverableSection(), (0, r.jsx)(a.$i$, {
            className: Q.divider
          }), this.renderCoverImageSection(), (0, r.jsx)(a.$i$, {
            className: Q.divider
          }), this.renderEmojiDiscoverabilitySection(), (0, r.jsx)(a.$i$, {
            className: Q.divider
          }), this.renderCategoriesSection(), (0, r.jsx)(a.$i$, {
            className: Q.divider
          }), this.renderKeywordsSection(), (0, r.jsx)(a.$i$, {
            className: Q.divider
          }), this.renderLocaleSelector()]
        });
      default:
        return null
    }
  }
  constructor(...e) {
    super(...e), W(this, "state", {
      discoverableGuild: null
    }), W(this, "handleToggleDiscovery", () => {
      let {
        guild: e
      } = this.props;
      if (null == e) return;
      let t = new Set(e.features);
      e.hasFeature(L.oNc.DISCOVERABLE) ? t.delete(L.oNc.DISCOVERABLE) : t.add(L.oNc.DISCOVERABLE), v.Z.updateGuild({
        features: t
      })
    }), W(this, "handleEnableDiscovery", async () => {
      let e = await (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("50721").then(n.bind(n, 210172));
        return t => {
          var n = Z({}, function(e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e
          }(t));
          return (0, r.jsx)(e, k({}, n))
        }
      }, {
        onCloseRequest: () => {
          null != e && (0, a.Mr3)(e)
        }
      })
    }), W(this, "handleSplashChange", e => {
      v.Z.updateGuild({
        discoverySplash: e
      })
    }), W(this, "handleLocaleChange", e => {
      v.Z.updateGuild({
        preferredLocale: e
      })
    }), W(this, "handleRemoveKeyword", e => {
      let {
        guild: t,
        guildMetadata: n
      } = this.props;
      if ((null == t ? void 0 : t.id) == null) return;
      let r = [...n.keywords];
      r.splice(e, 1), (0, c.zH)(t.id, r)
    }), W(this, "handleAddKeyword", e => {
      let {
        guild: t,
        guildMetadata: n
      } = this.props, {
        keywords: r
      } = n;
      (null == t ? void 0 : t.id) != null && (r.length >= T.G7 || (0, c.zH)(t.id, [...r, e]))
    }), W(this, "handleToggleEmojiDiscoverability", () => {
      let {
        guild: e,
        guildMetadata: t
      } = this.props, {
        emojiDiscoverabilityEnabled: n
      } = t;
      (null == e ? void 0 : e.id) != null && (0, c.J9)(e.id, !n)
    })
  }
}
let G = s.ZP.connectStores([x.Z, m.Z, I.ZP, f.ZP, h.default, p.Z], () => {
  let {
    guild: e,
    errors: t,
    submitting: n,
    guildMetadata: r
  } = x.Z.getProps(), i = m.Z.can(L.Plq.MANAGE_GUILD, e), s = m.Z.can(L.Plq.ADMINISTRATOR, e), a = null != e ? I.ZP.getDiscoveryChecklist(e.id) : null, l = null != e ? f.ZP.getChannels(e.id) : null, o = [];
  return null != l && l[f.sH].forEach(e => {
    let {
      channel: t
    } = e;
    t.type === L.d4z.GUILD_TEXT && o.push({
      value: t.id,
      label: (0, A.F6)(t, h.default, p.Z, !0)
    })
  }), {
    guild: e,
    errors: t,
    submitting: n,
    discoveryChecklist: a,
    selectableChannels: o,
    canManageGuild: i,
    isGuildAdmin: s,
    guildMetadata: r,
    localeOptions: (0, S.jb)()
  }
})(_)