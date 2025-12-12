/** Chunk was on web.js **/
/** chunk id: 795594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JJ: () => e_,
  Wg: () => em,
  ZP: () => eh
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./781311.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk663042 = require("./663042.js"),
  Chunk243814 = require("./243814.js"),
  Chunk95015 = require("./95015.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk921072 = require("./921072.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk493683 = require("./493683.js"),
  Chunk87051 = require("./87051.js"),
  Chunk317381 = require("./317381.js"),
  Chunk513202 = require("./513202.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk162685 = require("./162685.js"),
  Chunk979200 = require("./979200.js"),
  Chunk870822 = require("./870822.js"),
  Chunk589414 = require("./589414.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk240991 = require("./240991.js"),
  Chunk713938 = require("./713938.js"),
  Chunk973616 = require("./973616.js"),
  Chunk881998 = require("./881998.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk9156 = require("./9156.js"),
  Chunk768581 = require("./768581.js"),
  Chunk49012 = require("./49012.js"),
  Chunk621600 = require("./621600.js"),
  Chunk709054 = require("./709054.js"),
  Chunk706454 = require("./706454.js"),
  Chunk210887 = require("./210887.js"),
  Chunk313789 = require("./313789.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk526665 = require("./526665.js"),
  Chunk436267 = require("./436267.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk869743 = require("./869743.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk392082 = require("./392082.js"),
  Chunk430864 = require("./430864.js"),
  Chunk197571 = require("./197571.js");

function ei(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ei(e, t, n[t])
    })
  }
  return e
}

function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function es(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let el = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}))(Chunk481060.ubH);

function ec(e) {
  let {
    className: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(et.warningOuterContainer, t),
    children: [(0, r.jsx)(E.d3s, {
      size: "md",
      color: "currentColor",
      className: et.warningIcon
    }), (0, r.jsx)(E.Text, {
      color: "text-default",
      variant: "text-sm/medium",
      children: n
    })]
  })
}
let eu = e => {
    let {
      disclosure: t
    } = e;
    return i.useMemo(() => {
      switch (t) {
        case h.u$.IP_LOCATION:
          return (0, r.jsx)(E.enf, {
            size: "md",
            color: "currentColor",
            className: et.disclosureIcon
          });
        case h.u$.DISPLAYS_ADVERTISEMENTS:
          return (0, r.jsx)(E.FLu, {
            className: et.disclosureIcon
          });
        default:
          return (0, r.jsx)(E.d3s, {
            className: et.disclosureIcon
          })
      }
    }, [t])
  },
  ed = (e, t) => {
    let n = ee.intl.string(ee.t["DT39A+"]),
      i = ee.intl.formatToPlainString(ee.t.QWGvxA, {
        applicationName: e.name
      }),
      o = null;
    return (0, A.Z)(e) && (n = ee.intl.formatToPlainString(ee.t["paC+US"], {
      applicationName: e.name
    }), i = ee.intl.formatToPlainString(ee.t.inM1Yt, {
      applicationName: e.name
    }), o = (0, r.jsx)(z.Z, {
      look: z.z.WARNING,
      children: ee.intl.string(ee.t.LY35Zy)
    })), (0, K.Z)(e.id) && (o = (0, r.jsxs)(r.Fragment, {
      children: [o, (0, r.jsx)(z.Z, {
        children: ee.intl.format(ee.t.KRnERi, {
          applicationName: e.name
        })
      })]
    })), (0, E.h7j)(e => (0, r.jsx)(_.Modal, es(eo({
      title: n,
      subtitle: i,
      actions: [{
        text: ee.intl.string(ee.t["ETE/oC"]),
        onClick: e.onClose,
        variant: "secondary"
      }, {
        text: ee.intl.string(ee.t.xUqheM),
        onClick: () => {
          t(), e.onClose()
        },
        variant: "critical-primary"
      }]
    }, e), {
      children: (0, r.jsx)("div", {
        className: et.deleteModalBody,
        children: o
      })
    })))
  },
  ef = e => {
    let {
      application: t,
      isVisible: n
    } = e, i = () => {
      null != t.terms_of_service_url && (0, U.q)({
        href: t.terms_of_service_url,
        shouldConfirm: true
      })
    }, o = () => {
      null != t.privacy_policy_url && (0, U.q)({
        href: t.privacy_policy_url,
        shouldConfirm: true
      })
    };
    return null != t.terms_of_service_url || null != t.privacy_policy_url ? (0, r.jsxs)("div", {
      className: et.tosPrivacy,
      children: [null != t.terms_of_service_url ? (0, r.jsxs)(E.Anchor, {
        onClick: i,
        tabIndex: n ? 0 : false,
        className: et.tos,
        children: [(0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: ee.intl.string(ee.t["lx+Gec"])
        }), (0, r.jsx)(E.Gr1, {
          size: "sm",
          className: et.externalLinkIcon,
          color: "var(--text-link)"
        })]
      }) : null, null != t.privacy_policy_url ? (0, r.jsxs)("div", {
        className: et.privacy,
        children: [null != t.terms_of_service_url ? (0, r.jsx)("div", {
          className: et.divider
        }) : null, (0, r.jsxs)(E.Anchor, {
          onClick: o,
          className: et.privacy,
          tabIndex: n ? 0 : false,
          children: [(0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: ee.intl.string(ee.t.okSwq9)
          }), (0, r.jsx)(E.Gr1, {
            size: "sm",
            className: et.externalLinkIcon,
            color: "var(--text-link)"
          })]
        })]
      }) : null]
    }) : null
  },
  ep = e => {
    let {
      scopes: t,
      application: o,
      selectedChannelId: s,
      selectedGuildId: l,
      onDelete: c,
      disclosures: d,
      locale: _,
      id: h
    } = e, b = o.id, v = i.useMemo(() => D.ZP.createFromServer(o), [o]), S = (0, p.yE)(v.flags, J.udG.EMBEDDED), A = (0, m.e7)([Y.Z], () => {
      var e, t, n, r;
      return null == (r = Y.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[b]) || null == (e = t.appDmSettings) ? true : e.allowMobilePush
    }, [b]), x = T.w.useExperiment({
      location: "oauth2_authorize"
    }), j = o.bot, U = (0, m.e7)([L.Z], () => L.Z.getDMFromUserId(null == j ? true : j.id)), {
      appDMChannelMuteConfig: F,
      dmChannelMuted: B
    } = (0, m.cj)([M.ZP], () => null == U ? {
      appDMChannelMuteConfig: null,
      dmChannelMuted: false
    } : {
      appDMChannelMuteConfig: M.ZP.getChannelMuteConfig(null, U),
      dmChannelMuted: M.ZP.isChannelMuted(null, U)
    }), [z, q] = i.useState(false), [ei, ea] = i.useState(false), es = () => {
      let e = [];
      for (let n of t) e.push(...(0, w.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(ee.intl.string(ee.t.Ls2XRq));
      if (e.length > 0 || null != d && d.length > 0) return (0, r.jsx)(E.zF9, {
        className: et.appDetailsSection,
        isExpanded: ei,
        collapsibleContent: (0, r.jsxs)("ul", {
          className: et.appDetailsContent,
          children: [e.map((e, t) => (0, r.jsxs)("li", {
            className: et.permission,
            children: [(0, r.jsx)("i", {
              className: et.permissionCheckmark
            }), (0, r.jsx)(E.Text, {
              variant: "text-sm/normal",
              children: e
            })]
          }, t)), null == d ? true : d.map((t, n) => {
            let i = (0, C.PM)(t);
            return null != i ? (0, r.jsxs)("li", {
              className: et.permission,
              children: [(0, r.jsx)(eu, {
                disclosure: t
              }), (0, r.jsx)(E.Text, {
                variant: "text-sm/normal",
                children: i
              })]
            }, n + e.length) : null
          })]
        }),
        children: t => {
          let {
            onClick: n
          } = t;
          return (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(E.P3F, {
              className: et.appDetailsSectionHeader,
              onClick: e => {
                ea(!ei), n(e)
              },
              children: [(0, r.jsx)(E.Heading, {
                variant: "heading-sm/medium",
                color: "text-strong",
                children: ee.intl.string(ee.t.xrmhRX)
              }), ei ? (0, r.jsx)(E.CJ0, {
                size: "md",
                color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
              }) : (0, r.jsx)(E.Fbu, {
                size: "md",
                color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
              })]
            }), !ei && (0, r.jsx)(E.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: a()(et.appDetailsContent, et.permissionsDescription),
              children: ee.intl.format(ee.t.nZOS8j, {
                numPermissions: e.length
              })
            })]
          })
        }
      })
    }, el = i.useMemo(() => {
      if (null != o.description && "" !== o.description) return (0, r.jsx)(E.Text, {
        className: en.markup,
        variant: "text-sm/normal",
        color: "text-default",
        children: (0, R.parseBioReact)(o.description)
      })
    }, [o.description]), ep = () => {
      let e = null != o.description && "" !== o.description,
        t = null != o.terms_of_service_url || null != o.privacy_policy_url;
      return e || t ? (0, r.jsx)(E.zF9, {
        className: et.appDetailsSection,
        isExpanded: z,
        collapsibleContent: (0, r.jsxs)("div", {
          className: et.appDetailsContent,
          children: [e && el, t && (0, r.jsx)(ef, {
            application: o,
            isVisible: z
          })]
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(E.P3F, {
            className: et.appDetailsSectionHeader,
            onClick: e => {
              q(!z), t(e)
            },
            children: [(0, r.jsx)(E.Heading, {
              variant: "heading-sm/medium",
              color: "text-strong",
              children: ee.intl.string(ee.t.fcYgiY)
            }), z ? (0, r.jsx)(E.CJ0, {
              size: "md",
              color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
            }) : (0, r.jsx)(E.Fbu, {
              size: "md",
              color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
            })]
          })
        }
      }) : null
    }, e_ = () => {
      let e = k.ZP.getApplicationIconURL({
          id: o.id,
          icon: o.icon
        }),
        t = null != e ? (0, r.jsx)(P.Z.Child, {
          className: et.appAvatarV2,
          grow: 0,
          children: (0, r.jsx)("img", {
            src: e,
            alt: ""
          })
        }) : null,
        n = new Date(Z.default.extractTimestamp(h)).toLocaleDateString(_);
      return (0, r.jsxs)("div", {
        className: et.headerV2,
        children: [t, (0, r.jsxs)("div", {
          className: et.headerTextContainerV2,
          children: [(0, r.jsx)(E.Heading, {
            variant: "heading-md/semibold",
            className: a()(et.headerText, er.marginBottom4),
            children: o.name
          }), (0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: ee.intl.format(ee.t.yOApCK, {
              date: n
            })
          })]
        }), (0, r.jsx)(Q.Z, {
          appRecord: v,
          selectedGuildId: l,
          selectedChannelId: s
        })]
      })
    }, em = e => {
      H.hW.updateAsync("applications", t => {
        b in t.appSettings ? null == t.appSettings[b].appDmSettings ? t.appSettings[b].appDmSettings = g.c$.create({
          allowMobilePush: e
        }) : t.appSettings[b].appDmSettings.allowMobilePush = e : t.appSettings[b] = g.dp.create({
          appDmSettings: g.c$.create({
            allowMobilePush: e
          })
        })
      }, H.fy.INFREQUENT_USER_ACTION), I.ZP.trackWithMetadata(J.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: $.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
        application_id: o.id,
        label: e ? G.ZB.Unmuted : G.ZB.Muted
      })
    }, eh = i.useCallback(async () => {
      u()(null != j, "dm channel mute setting requires having a bot user");
      let e = U;
      null == e && (e = await y.Z.ensurePrivateChannel(j.id)), B ? O.Z.updateAppDMOverrideSettings(null, e, o.id, {
        muted: false
      }, G.ZB.Unmuted) : (0, E.ZDy)(async () => {
        let {
          default: t
        } = await n.e("8246").then(n.bind(n, 540679));
        return n => (0, r.jsx)(t, eo({
          channelId: e,
          applicationId: o.id
        }, n))
      })
    }, [U, j, B, o.id]), eg = () => x.enabled ? (0, r.jsxs)("div", {
      className: et.directMessagesSection,
      children: [(0, r.jsx)(E.Heading, {
        variant: "heading-sm/medium",
        color: "text-strong",
        className: et.dmSettingsHeader,
        children: ee.intl.string(ee.t.NaZyYC)
      }), (0, r.jsxs)(E.Kqy, {
        gap: 20,
        children: [null != j ? (0, r.jsx)(E.rsf, {
          label: ee.intl.string(ee.t.NkwaBs),
          description: (null == F ? true : F.end_time) != null ? ee.intl.format(ee.t.j7h4AJ, {
            endTime: new Date(F.end_time).toLocaleString(ee.intl.currentLocale, {
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            })
          }) : true,
          checked: B,
          onChange: eh
        }) : null, S && x.enabled ? (0, r.jsx)(E.rsf, {
          label: ee.intl.string(ee.t["Pkw//o"]),
          description: ee.intl.string(ee.t.hw1nKf),
          checked: A,
          disabled: B,
          onChange: em
        }) : null]
      })]
    }) : null, eE = (0, K.O)(o.id), eb = (0, N.Z)(o), ey = () => (0, r.jsxs)("div", {
      className: et.footer,
      children: [eb ? (0, r.jsx)(ec, {
        className: et.warningContainer,
        text: ee.intl.format(ee.t.j4B7EW, {
          applicationName: o.name
        })
      }) : eE ? (0, r.jsx)(ec, {
        className: et.warningContainer,
        text: ee.intl.format(ee.t.jUhnwb, {
          applicationName: o.name,
          onConnectionPress: () => (0, X.openUserSettings)(V.n.CONNECTIONS_PANEL, {
            section: J.oAB.CONNECTIONS
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: et.deauthorizeButton,
        children: (0, r.jsx)(E.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: ee.intl.string(ee.t.xUqheM),
          onClick: () => ed(o, c)
        })
      })]
    }), eO = (0, W.wy)("AuthorizedApps");
    return (0, r.jsx)("div", {
      className: a()(et.authedAppV2, {
        [et.authedAppV2UserSettingsRedesign]: eO
      }),
      children: (0, r.jsx)(E.y5t, {
        component: e_(),
        children: (0, r.jsxs)("div", {
          className: et.appDetailsContainer,
          children: [ep(), es(), eg(), ey()]
        })
      })
    })
  },
  e_ = (0, Chunk663042.U)(() => ({
    searchQuery: ""
  })),
  em = () => {
    let {
      fetchState: e,
      appAuthTokens: t
    } = (0, Chunk442837.cj)([Chunk881998.default], () => ({
      fetchState: Chunk881998.default.getFetchState(),
      appAuthTokens: Chunk881998.default.getNewestTokensForNonChildrenApplications()
    })), n = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale), o = (0, Chunk442837.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getSelfEmbeddedActivities()), a = (0, Chunk442837.e7)([Chunk592125.Z, Chunk944486.Z], () => Chunk592125.Z.getChannel(Chunk944486.Z.getChannelId())), s = null == a ? true : a.getGuildId(), c = e => {
      let {
        id: t,
        application: n
      } = e;
      b.Z.delete(t);
      let r = o.get(n.id);
      null != r && S.Z.leaveActivity({
        location: r.location,
        applicationId: n.id,
        showFeedback: false
      })
    }, u = e_(e => e.searchQuery), d = e => e_.setState({
      searchQuery: e
    }), f = e => {
      d(e)
    }, p = () => {
      Chunk663042("")
    }, _ = () => (0, Chunk54381.jsx)("div", {
      className: Chunk392082.searchContainer,
      children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
        query: u,
        onChange: Chunk243814,
        onClear: Chunk95015,
        placeholder: Chunk388032.intl.string(Chunk388032.t["5prvKe"]),
        "aria-label": Chunk388032.intl.string(Chunk388032.t["5prvKe"])
      })
    }), h = (e, t) => (0, r.jsx)(el, {
      className: et.__invalid_marginTop20,
      children: (0, r.jsx)(E.OZU, {
        note: e,
        children: t
      })
    }), g = Chunk473749.useMemo(() => {
      let e = u.trim().toLowerCase();
      return "" === module || null == exports ? exports : exports.length < 100 ? exports.filter(t => l()(e, t.application.name.toLowerCase())) : exports.filter(t => t.application.name.toLowerCase().includes(e))
    }, [exports, u]), y = () => null == exports || null == Chunk524437 || module !== Chunk881998.FetchState.FETCHED ? (0, Chunk54381.jsx)(Chunk481060.$jN, {
      className: Chunk197571.marginTop20,
      type: Chunk481060.$jN.Type.SPINNING_CIRCLE
    }) : 0 === exports.length ? Chunk921072(Chunk388032.intl.string(Chunk388032.t.CpPv5l), Chunk388032.intl.string(Chunk388032.t["E+SM6T"])) : 0 === Chunk524437.length ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [Chunk793030(), Chunk921072(null, Chunk388032.intl.string(Chunk388032.t.EVWFNr))]
    }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [Chunk793030(), Chunk524437.sort((e, t) => Number(t.id) - Number(e.id)).map(e => (0, r.jsx)(ep, eo({
        locale: n,
        onDelete: () => c(e),
        selectedChannelId: null == a ? true : a.id,
        selectedGuildId: null != s ? s : true
      }, e), e.id))]
    });
    return (0, Chunk54381.jsx)(Chunk481060.y5t, {
      component: (0, Chunk54381.jsxs)(Chunk481060.Zbd, {
        type: Chunk481060.Zbd.Types.PRIMARY,
        className: Chunk392082.headingCard,
        children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
          variant: "heading-md/medium",
          children: Chunk388032.intl.string(Chunk388032.t.HU3RFw)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/normal",
          children: Chunk388032.intl.string(Chunk388032.t.Nu5Yi0)
        })]
      }),
      children: Chunk493683()
    })
  },
  eh = () => (Chunk473749.useEffect(() => {
    Chunk384275.Z.fetch()
  }, []), Chunk473749.useEffect(() => () => {
    e_.setState({
      searchQuery: ""
    })
  }, []), (0, Chunk54381.jsx)(Chunk273313.Z, {
    title: Chunk388032.intl.string(Chunk388032.t["f6kk+r"]),
    children: (0, Chunk54381.jsx)(em, {})
  }))