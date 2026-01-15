/** Chunk was on web.js **/
/** chunk id: 795594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  JJ: () => ep,
  Wg: () => e_,
  ZP: () => eh
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./781311.js"), require("./642613.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk436267 = require("./436267.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk869743 = require("./869743.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk380735 = require("./380735.js"),
  Chunk960324 = require("./960324.js"),
  Chunk478411 = require("./478411.js");

function er(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      er(e, t, n[t])
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

function eo(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let es = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: B.Z.theme
}))(Chunk481060.ubH);

function el(e) {
  let {
    className: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(ee.warningOuterContainer, t),
    children: [(0, r.jsx)(E.d3s, {
      size: "md",
      color: "currentColor",
      className: ee.warningIcon
    }), (0, r.jsx)(E.Text, {
      color: "text-default",
      variant: "text-sm/medium",
      children: n
    })]
  })
}
let ec = e => {
    let {
      disclosure: t
    } = e;
    return i.useMemo(() => {
      switch (t) {
        case m.u$.IP_LOCATION:
          return (0, r.jsx)(E.enf, {
            size: "md",
            color: "currentColor",
            className: ee.disclosureIcon
          });
        case m.u$.DISPLAYS_ADVERTISEMENTS:
          return (0, r.jsx)(E.FLu, {
            className: ee.disclosureIcon
          });
        default:
          return (0, r.jsx)(E.d3s, {
            className: ee.disclosureIcon
          })
      }
    }, [t])
  },
  eu = (e, t) => {
    let n = $.intl.string($.t["DT39A+"]),
      i = $.intl.formatToPlainString($.t.QWGvxA, {
        applicationName: e.name
      }),
      a = null;
    return (0, A.Z)(e) && (n = $.intl.formatToPlainString($.t["paC+US"], {
      applicationName: e.name
    }), i = $.intl.formatToPlainString($.t.inM1Yt, {
      applicationName: e.name
    }), a = (0, r.jsx)(K.Z, {
      look: K.z.WARNING,
      children: $.intl.string($.t.LY35Zy)
    })), (0, W.Z)(e.id) && (a = (0, r.jsxs)(r.Fragment, {
      children: [a, (0, r.jsx)(K.Z, {
        children: $.intl.format($.t.KRnERi, {
          applicationName: e.name
        })
      })]
    })), (0, E.h7j)(e => (0, r.jsx)(_.Modal, eo(ei({
      title: n,
      subtitle: i,
      actions: [{
        text: $.intl.string($.t["ETE/oC"]),
        onClick: e.onClose,
        variant: "secondary"
      }, {
        text: $.intl.string($.t.xUqheM),
        onClick: () => {
          t(), e.onClose()
        },
        variant: "critical-primary"
      }]
    }, e), {
      children: (0, r.jsx)("div", {
        className: ee.deleteModalBody,
        children: a
      })
    })))
  },
  ed = e => {
    let {
      application: t,
      isVisible: n
    } = e, i = () => {
      null != t.terms_of_service_url && (0, U.q)({
        href: t.terms_of_service_url,
        shouldConfirm: true
      })
    }, a = () => {
      null != t.privacy_policy_url && (0, U.q)({
        href: t.privacy_policy_url,
        shouldConfirm: true
      })
    };
    return null != t.terms_of_service_url || null != t.privacy_policy_url ? (0, r.jsxs)("div", {
      className: ee.tosPrivacy,
      children: [null != t.terms_of_service_url ? (0, r.jsxs)(E.eee, {
        onClick: i,
        tabIndex: n ? 0 : false,
        className: ee.tos,
        children: [(0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: $.intl.string($.t["lx+Gec"])
        }), (0, r.jsx)(E.Gr1, {
          size: "sm",
          className: ee.externalLinkIcon,
          color: "var(--text-link)"
        })]
      }) : null, null != t.privacy_policy_url ? (0, r.jsxs)("div", {
        className: ee.privacy,
        children: [null != t.terms_of_service_url ? (0, r.jsx)("div", {
          className: ee.divider
        }) : null, (0, r.jsxs)(E.eee, {
          onClick: a,
          className: ee.privacy,
          tabIndex: n ? 0 : false,
          children: [(0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: $.intl.string($.t.okSwq9)
          }), (0, r.jsx)(E.Gr1, {
            size: "sm",
            className: ee.externalLinkIcon,
            color: "var(--text-link)"
          })]
        })]
      }) : null]
    }) : null
  },
  ef = e => {
    let {
      scopes: t,
      application: a,
      selectedChannelId: s,
      selectedGuildId: l,
      onDelete: c,
      disclosures: d,
      locale: _,
      id: m
    } = e, b = a.id, v = i.useMemo(() => D.ZP.createFromServer(a), [a]), S = (0, p.yE)(v.flags, X.udG.EMBEDDED), A = (0, h.e7)([Y.Z], () => {
      var e, t, n, r;
      return null == (r = Y.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[b]) || null == (e = t.appDmSettings) ? true : e.allowMobilePush
    }, [b]), x = T.w.useExperiment({
      location: "oauth2_authorize"
    }), j = a.bot, U = (0, h.e7)([L.Z], () => L.Z.getDMFromUserId(null == j ? true : j.id)), {
      appDMChannelMuteConfig: F,
      dmChannelMuted: B
    } = (0, h.cj)([M.ZP], () => null == U ? {
      appDMChannelMuteConfig: null,
      dmChannelMuted: false
    } : {
      appDMChannelMuteConfig: M.ZP.getChannelMuteConfig(null, U),
      dmChannelMuted: M.ZP.isChannelMuted(null, U)
    }), [K, z] = i.useState(false), [er, ea] = i.useState(false), eo = () => {
      let e = [];
      for (let n of t) e.push(...(0, R.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push($.intl.string($.t.Ls2XRq));
      if (e.length > 0 || null != d && d.length > 0) return (0, r.jsx)(E.zF9, {
        className: ee.appDetailsSection,
        isExpanded: er,
        collapsibleContent: (0, r.jsxs)("ul", {
          className: ee.appDetailsContent,
          children: [e.map((e, t) => (0, r.jsxs)("li", {
            className: ee.permission,
            children: [(0, r.jsx)("i", {
              className: ee.permissionCheckmark
            }), (0, r.jsx)(E.Text, {
              variant: "text-sm/normal",
              children: e
            })]
          }, t)), null == d ? true : d.map((t, n) => {
            let i = (0, C.PM)(t);
            return null != i ? (0, r.jsxs)("li", {
              className: ee.permission,
              children: [(0, r.jsx)(ec, {
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
              className: ee.appDetailsSectionHeader,
              onClick: e => {
                ea(!er), n(e)
              },
              children: [(0, r.jsx)(E.Heading, {
                variant: "heading-sm/medium",
                color: "text-strong",
                children: $.intl.string($.t.xrmhRX)
              }), er ? (0, r.jsx)(E.CJ0, {
                size: "md",
                color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
              }) : (0, r.jsx)(E.Fbu, {
                size: "md",
                color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
              })]
            }), !er && (0, r.jsx)(E.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: o()(ee.appDetailsContent, ee.permissionsDescription),
              children: $.intl.format($.t.nZOS8j, {
                numPermissions: e.length
              })
            })]
          })
        }
      })
    }, es = i.useMemo(() => {
      if (null != a.description && "" !== a.description) return (0, r.jsx)(E.Text, {
        className: et.markup,
        variant: "text-sm/normal",
        color: "text-default",
        children: (0, w.parseBioReact)(a.description)
      })
    }, [a.description]), ef = () => {
      let e = null != a.description && "" !== a.description,
        t = null != a.terms_of_service_url || null != a.privacy_policy_url;
      return e || t ? (0, r.jsx)(E.zF9, {
        className: ee.appDetailsSection,
        isExpanded: K,
        collapsibleContent: (0, r.jsxs)("div", {
          className: ee.appDetailsContent,
          children: [e && es, t && (0, r.jsx)(ed, {
            application: a,
            isVisible: K
          })]
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(E.P3F, {
            className: ee.appDetailsSectionHeader,
            onClick: e => {
              z(!K), t(e)
            },
            children: [(0, r.jsx)(E.Heading, {
              variant: "heading-sm/medium",
              color: "text-strong",
              children: $.intl.string($.t.fcYgiY)
            }), K ? (0, r.jsx)(E.CJ0, {
              size: "md",
              color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
            }) : (0, r.jsx)(E.Fbu, {
              size: "md",
              color: E.TVs.colors.INTERACTIVE_TEXT_DEFAULT
            })]
          })
        }
      }) : null
    }, ep = () => {
      let e = k.ZP.getApplicationIconURL({
          id: a.id,
          icon: a.icon
        }),
        t = null != e ? (0, r.jsx)(P.Z.Child, {
          className: ee.appAvatarV2,
          grow: 0,
          children: (0, r.jsx)("img", {
            src: e,
            alt: ""
          })
        }) : null,
        n = new Date(Z.default.extractTimestamp(m)).toLocaleDateString(_);
      return (0, r.jsxs)("div", {
        className: ee.headerV2,
        children: [t, (0, r.jsxs)("div", {
          className: ee.headerTextContainerV2,
          children: [(0, r.jsx)(E.Heading, {
            variant: "heading-md/semibold",
            className: o()(ee.headerText, en.marginBottom4),
            children: a.name
          }), (0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: $.intl.format($.t.yOApCK, {
              date: n
            })
          })]
        }), (0, r.jsx)(q.Z, {
          appRecord: v,
          selectedGuildId: l,
          selectedChannelId: s
        })]
      })
    }, e_ = e => {
      H.hW.updateAsync("applications", t => {
        b in t.appSettings ? null == t.appSettings[b].appDmSettings ? t.appSettings[b].appDmSettings = g.c$.create({
          allowMobilePush: e
        }) : t.appSettings[b].appDmSettings.allowMobilePush = e : t.appSettings[b] = g.dp.create({
          appDmSettings: g.c$.create({
            allowMobilePush: e
          })
        })
      }, H.fy.INFREQUENT_USER_ACTION), I.ZP.trackWithMetadata(X.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: J.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
        application_id: a.id,
        label: e ? G.ZB.Unmuted : G.ZB.Muted
      })
    }, eh = i.useCallback(async () => {
      u()(null != j, "dm channel mute setting requires having a bot user");
      let e = U;
      null == e && (e = await y.Z.ensurePrivateChannel(j.id)), B ? O.Z.updateAppDMOverrideSettings(null, e, a.id, {
        muted: false
      }, G.ZB.Unmuted) : (0, E.ZDy)(async () => {
        let {
          default: t
        } = await n.e("8246").then(n.bind(n, 540679));
        return n => (0, r.jsx)(t, ei({
          channelId: e,
          applicationId: a.id
        }, n))
      })
    }, [U, j, B, a.id]), em = () => x.enabled ? (0, r.jsxs)("div", {
      className: ee.directMessagesSection,
      children: [(0, r.jsx)(E.Heading, {
        variant: "heading-sm/medium",
        color: "text-strong",
        className: ee.dmSettingsHeader,
        children: $.intl.string($.t.NaZyYC)
      }), (0, r.jsxs)(E.Kqy, {
        gap: 20,
        children: [null != j ? (0, r.jsx)(E.rsf, {
          label: $.intl.string($.t.NkwaBs),
          description: (null == F ? true : F.end_time) != null ? $.intl.format($.t.j7h4AJ, {
            endTime: new Date(F.end_time).toLocaleString($.intl.currentLocale, {
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            })
          }) : true,
          checked: B,
          onChange: eh
        }) : null, S && x.enabled ? (0, r.jsx)(E.rsf, {
          label: $.intl.string($.t["Pkw//o"]),
          description: $.intl.string($.t.hw1nKf),
          checked: A,
          disabled: B,
          onChange: e_
        }) : null]
      })]
    }) : null, eg = (0, W.O)(a.id), eE = (0, N.Z)(a), eb = () => (0, r.jsxs)("div", {
      className: ee.footer,
      children: [eE ? (0, r.jsx)(el, {
        className: ee.warningContainer,
        text: $.intl.format($.t.j4B7EW, {
          applicationName: a.name
        })
      }) : eg ? (0, r.jsx)(el, {
        className: ee.warningContainer,
        text: $.intl.format($.t.jUhnwb, {
          applicationName: a.name,
          onConnectionPress: () => (0, Q.openUserSettings)(V.n.CONNECTIONS_PANEL, {
            section: X.oAB.CONNECTIONS
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: ee.deauthorizeButton,
        children: (0, r.jsx)(E.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: $.intl.string($.t.xUqheM),
          onClick: () => eu(a, c)
        })
      })]
    });
    return (0, r.jsx)("div", {
      className: ee.authedAppV2,
      children: (0, r.jsx)(E.y5t, {
        component: ep(),
        children: (0, r.jsxs)("div", {
          className: ee.appDetailsContainer,
          children: [ef(), eo(), em(), eb()]
        })
      })
    })
  },
  ep = (0, Chunk663042.U)(() => ({
    searchQuery: ""
  })),
  e_ = () => {
    let {
      fetchState: e,
      appAuthTokens: t
    } = (0, h.cj)([x.default], () => ({
      fetchState: x.default.getFetchState(),
      appAuthTokens: x.default.getNewestTokensForNonChildrenApplications()
    })), n = (0, h.e7)([F.default], () => F.default.locale), a = (0, h.e7)([v.ZP], () => v.ZP.getSelfEmbeddedActivities()), o = (0, h.e7)([L.Z, j.Z], () => L.Z.getChannel(j.Z.getChannelId())), s = null == o ? true : o.getGuildId(), c = e => {
      let {
        id: t,
        application: n
      } = e;
      b.Z.delete(t);
      let r = a.get(n.id);
      null != r && S.Z.leaveActivity({
        location: r.location,
        applicationId: n.id,
        showFeedback: false
      })
    }, u = ep(e => e.searchQuery), d = e => ep.setState({
      searchQuery: e
    }), f = e => {
      d(e)
    }, p = () => {
      d("")
    }, _ = () => (0, r.jsx)("div", {
      className: ee.searchContainer,
      children: (0, r.jsx)(E.E1j, {
        query: u,
        onChange: f,
        onClear: p,
        placeholder: $.intl.string($.t["5prvKe"]),
        "aria-label": $.intl.string($.t["5prvKe"])
      })
    }), m = (e, t) => (0, r.jsx)(es, {
      className: ee.__invalid_marginTop20,
      children: (0, r.jsx)(E.OZU, {
        note: e,
        children: t
      })
    }), g = i.useMemo(() => {
      let e = u.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => l()(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, u]), y = () => null == t || null == g || e !== x.FetchState.FETCHED ? (0, r.jsx)(E.$jN, {
      className: en.marginTop20,
      type: E.$jN.Type.SPINNING_CIRCLE
    }) : 0 === t.length ? m($.intl.string($.t.CpPv5l), $.intl.string($.t["E+SM6T"])) : 0 === g.length ? (0, r.jsxs)(r.Fragment, {
      children: [_(), m(null, $.intl.string($.t.EVWFNr))]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [_(), g.sort((e, t) => Number(t.id) - Number(e.id)).map(e => (0, r.jsx)(ef, ei({
        locale: n,
        onDelete: () => c(e),
        selectedChannelId: null == o ? true : o.id,
        selectedGuildId: null != s ? s : true
      }, e), e.id))]
    });
    return (0, r.jsx)(E.y5t, {
      component: (0, r.jsxs)(E.Zbd, {
        type: E.Zbd.Types.PRIMARY,
        className: ee.headingCard,
        children: [(0, r.jsx)(E.Heading, {
          variant: "heading-md/medium",
          children: $.intl.string($.t.HU3RFw)
        }), (0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          children: $.intl.string($.t.Nu5Yi0)
        })]
      }),
      children: y()
    })
  },
  eh = () => (i.useEffect(() => {
    b.Z.fetch()
  }, []), i.useEffect(() => () => {
    ep.setState({
      searchQuery: ""
    })
  }, []), (0, r.jsx)(z.Z, {
    title: $.intl.string($.t["f6kk+r"]),
    children: (0, r.jsx)(e_, {})
  }))