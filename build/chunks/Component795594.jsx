/** Chunk was on web.js **/
/** chunk id: 795594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => em,
  Z: () => eg
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
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk921072 = require("./921072.js"),
  Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk493683 = require("./493683.js"),
  Chunk87051 = require("./87051.js"),
  Chunk497321 = require("./497321.jsx"),
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
  Chunk246946 = require("./246946.js"),
  Chunk9156 = require("./9156.js"),
  Chunk768581 = require("./768581.js"),
  Chunk630388 = require("./630388.js"),
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
  Chunk609157 = require("./609157.js"),
  Chunk602009 = require("./602009.js"),
  Chunk10198 = require("./10198.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}

function el(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ec(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : el(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eu = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}))(Chunk481060.ubH);

function ed(e) {
  let {
    className: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(er.warningOuterContainer, t),
    children: [(0, r.jsx)(g.d3s, {
      size: "md",
      color: "currentColor",
      className: er.warningIcon
    }), (0, r.jsx)(g.Text, {
      color: "text-default",
      variant: "text-sm/medium",
      children: n
    })]
  })
}
let ef = e => {
    let {
      disclosure: t
    } = e;
    return i.useMemo(() => {
      switch (t) {
        case h.u$.IP_LOCATION:
          return (0, r.jsx)(g.enf, {
            size: "md",
            color: "currentColor",
            className: er.disclosureIcon
          });
        case h.u$.DISPLAYS_ADVERTISEMENTS:
          return (0, r.jsx)(g.FLu, {
            className: er.disclosureIcon
          });
        default:
          return (0, r.jsx)(g.d3s, {
            className: er.disclosureIcon
          })
      }
    }, [t])
  },
  e_ = (e, t) => {
    let n = en.intl.string(en.t["DT39A+"]),
      i = en.intl.formatToPlainString(en.t.QWGvxA, {
        applicationName: e.name
      }),
      a = null;
    return (0, C.Z)(e) && (n = en.intl.formatToPlainString(en.t["paC+US"], {
      applicationName: e.name
    }), i = en.intl.formatToPlainString(en.t.inM1Yt, {
      applicationName: e.name
    }), a = (0, r.jsx)(X.Z, {
      look: X.z.WARNING,
      children: en.intl.string(en.t.LY35Zy)
    })), (0, q.Z)(e.id) && (a = (0, r.jsxs)(r.Fragment, {
      children: [a, (0, r.jsx)(X.Z, {
        children: en.intl.format(en.t.KRnERi, {
          applicationName: e.name
        })
      })]
    })), (0, g.h7j)(e => (0, r.jsx)(_.Modal, ec(es({
      title: n,
      subtitle: i,
      actions: [{
        text: en.intl.string(en.t["ETE/oC"]),
        onClick: e.onClose,
        variant: "secondary"
      }, {
        text: en.intl.string(en.t.xUqheM),
        onClick: () => {
          t(), e.onClose()
        },
        variant: "critical-primary"
      }]
    }, e), {
      children: (0, r.jsx)("div", {
        className: er.deleteModalBody,
        children: a
      })
    })))
  },
  ep = e => {
    let {
      application: t,
      isVisible: n
    } = e, i = () => {
      null != t.terms_of_service_url && (0, B.q)({
        href: t.terms_of_service_url,
        shouldConfirm: true
      })
    }, a = () => {
      null != t.privacy_policy_url && (0, B.q)({
        href: t.privacy_policy_url,
        shouldConfirm: true
      })
    };
    return null != t.terms_of_service_url || null != t.privacy_policy_url ? (0, r.jsxs)("div", {
      className: er.tosPrivacy,
      children: [null != t.terms_of_service_url ? (0, r.jsxs)(g.Anchor, {
        onClick: i,
        tabIndex: n ? 0 : false,
        className: er.tos,
        children: [(0, r.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: en.intl.string(en.t["lx+Gec"])
        }), (0, r.jsx)(g.Gr1, {
          size: "sm",
          className: er.externalLinkIcon,
          color: "var(--text-link)"
        })]
      }) : null, null != t.privacy_policy_url ? (0, r.jsxs)("div", {
        className: er.privacy,
        children: [null != t.terms_of_service_url ? (0, r.jsx)("div", {
          className: er.divider
        }) : null, (0, r.jsxs)(g.Anchor, {
          onClick: a,
          className: er.privacy,
          tabIndex: n ? 0 : false,
          children: [(0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: en.intl.string(en.t.okSwq9)
          }), (0, r.jsx)(g.Gr1, {
            size: "sm",
            className: er.externalLinkIcon,
            color: "var(--text-link)"
          })]
        })]
      }) : null]
    }) : null
  },
  eh = e => {
    let {
      scopes: t,
      application: a,
      selectedChannelId: s,
      selectedGuildId: l,
      onDelete: c,
      disclosures: d,
      locale: _,
      id: h
    } = e, E = a.id, O = i.useMemo(() => w.ZP.createFromServer(a), [a]), v = (0, G.yE)(O.flags, ee.udG.EMBEDDED), I = (0, p.e7)([K.Z], () => {
      var e, t, n, r;
      return null == (r = K.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[E]) || null == (e = t.appDmSettings) ? true : e.allowMobilePush
    }, [E]), C = S.w.useExperiment({
      location: "oauth2_authorize"
    }), L = a.bot, M = (0, p.e7)([x.Z], () => x.Z.getDMFromUserId(null == L ? true : L.id)), {
      appDMChannelMuteConfig: k,
      dmChannelMuted: B
    } = (0, p.cj)([j.ZP], () => null == M ? {
      appDMChannelMuteConfig: null,
      dmChannelMuted: false
    } : {
      appDMChannelMuteConfig: j.ZP.getChannelMuteConfig(null, M),
      dmChannelMuted: j.ZP.isChannelMuted(null, M)
    }), [V, H] = i.useState(false), [X, Q] = i.useState(false), eo = () => {
      let e = [];
      for (let n of t) e.push(...(0, D.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(en.intl.string(en.t.Ls2XRq));
      if (e.length > 0 || null != d && d.length > 0) return (0, r.jsx)(g.zF9, {
        className: er.appDetailsSection,
        isExpanded: X,
        collapsibleContent: (0, r.jsxs)("ul", {
          className: er.appDetailsContent,
          children: [e.map((e, t) => (0, r.jsxs)("li", {
            className: er.permission,
            children: [(0, r.jsx)("i", {
              className: er.permissionCheckmark
            }), (0, r.jsx)(g.Text, {
              variant: "text-sm/normal",
              children: e
            })]
          }, t)), null == d ? true : d.map((t, n) => {
            let i = (0, A.PM)(t);
            return null != i ? (0, r.jsxs)("li", {
              className: er.permission,
              children: [(0, r.jsx)(ef, {
                disclosure: t
              }), (0, r.jsx)(g.Text, {
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
            children: [(0, r.jsxs)(g.P3F, {
              className: er.appDetailsSectionHeader,
              onClick: e => {
                Q(!X), n(e)
              },
              children: [(0, r.jsx)(g.Heading, {
                variant: "heading-sm/medium",
                color: "header-primary",
                children: en.intl.string(en.t.xrmhRX)
              }), X ? (0, r.jsx)(g.CJ0, {
                size: "md",
                color: g.TVs.colors.INTERACTIVE_NORMAL
              }) : (0, r.jsx)(g.Fbu, {
                size: "md",
                color: g.TVs.colors.INTERACTIVE_NORMAL
              })]
            }), !X && (0, r.jsx)(g.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              className: o()(er.appDetailsContent, er.permissionsDescription),
              children: en.intl.format(en.t.nZOS8j, {
                numPermissions: e.length
              })
            })]
          })
        }
      })
    }, el = i.useMemo(() => {
      if (null != a.description && "" !== a.description) return (0, r.jsx)(g.Text, {
        className: ei.markup,
        variant: "text-sm/normal",
        color: "text-default",
        children: (0, P.parseBioReact)(a.description)
      })
    }, [a.description]), ec = () => {
      let e = null != a.description && "" !== a.description,
        t = null != a.terms_of_service_url || null != a.privacy_policy_url;
      return e || t ? (0, r.jsx)(g.zF9, {
        className: er.appDetailsSection,
        isExpanded: V,
        collapsibleContent: (0, r.jsxs)("div", {
          className: er.appDetailsContent,
          children: [e && el, t && (0, r.jsx)(ep, {
            application: a,
            isVisible: V
          })]
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(g.P3F, {
            className: er.appDetailsSectionHeader,
            onClick: e => {
              H(!V), t(e)
            },
            children: [(0, r.jsx)(g.Heading, {
              variant: "heading-sm/medium",
              color: "header-primary",
              children: en.intl.string(en.t.fcYgiY)
            }), V ? (0, r.jsx)(g.CJ0, {
              size: "md",
              color: g.TVs.colors.INTERACTIVE_NORMAL
            }) : (0, r.jsx)(g.Fbu, {
              size: "md",
              color: g.TVs.colors.INTERACTIVE_NORMAL
            })]
          })
        }
      }) : null
    }, eu = () => {
      let e = U.ZP.getApplicationIconURL({
          id: a.id,
          icon: a.icon
        }),
        t = null != e ? (0, r.jsx)(R.Z.Child, {
          className: er.appAvatarV2,
          grow: 0,
          children: (0, r.jsx)("img", {
            src: e,
            alt: ""
          })
        }) : null,
        n = new Date(F.default.extractTimestamp(h)).toLocaleDateString(_);
      return (0, r.jsxs)("div", {
        className: er.headerV2,
        children: [t, (0, r.jsxs)("div", {
          className: er.headerTextContainerV2,
          children: [(0, r.jsx)(g.Heading, {
            variant: "heading-md/semibold",
            className: o()(er.headerText, ea.marginBottom4),
            children: a.name
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: en.intl.format(en.t.yOApCK, {
              date: n
            })
          })]
        }), (0, r.jsx)(J.Z, {
          appRecord: O,
          selectedGuildId: l,
          selectedChannelId: s
        })]
      })
    }, eh = e => {
      W.hW.updateAsync("applications", t => {
        E in t.appSettings ? null == t.appSettings[E].appDmSettings ? t.appSettings[E].appDmSettings = m.c$.create({
          allowMobilePush: e
        }) : t.appSettings[E].appDmSettings.allowMobilePush = e : t.appSettings[E] = m.dp.create({
          appDmSettings: m.c$.create({
            allowMobilePush: e
          })
        })
      }, W.fy.INFREQUENT_USER_ACTION), T.ZP.trackWithMetadata(ee.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: et.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
        application_id: a.id,
        label: e ? Z.ZB.Unmuted : Z.ZB.Muted
      })
    }, em = i.useCallback(async () => {
      u()(null != L, "dm channel mute setting requires having a bot user");
      let e = M;
      null == e && (e = await b.Z.ensurePrivateChannel(L.id)), B ? y.Z.updateAppDMOverrideSettings(null, e, a.id, {
        muted: false
      }, Z.ZB.Unmuted) : (0, g.ZDy)(async () => {
        let {
          default: t
        } = await n.e("8246").then(n.bind(n, 540679));
        return n => (0, r.jsx)(t, es({
          channelId: e,
          applicationId: a.id
        }, n))
      })
    }, [M, L, B, a.id]), eg = () => C.enabled ? (0, r.jsxs)("div", {
      className: er.directMessagesSection,
      children: [(0, r.jsx)(g.Heading, {
        variant: "heading-sm/medium",
        color: "header-primary",
        className: er.dmSettingsHeader,
        children: en.intl.string(en.t.NaZyYC)
      }), (0, r.jsxs)(g.Kqy, {
        gap: 20,
        children: [null != L ? (0, r.jsx)(g.rsf, {
          label: en.intl.string(en.t.NkwaBs),
          description: (null == k ? true : k.end_time) != null ? en.intl.format(en.t.j7h4AJ, {
            endTime: new Date(k.end_time).toLocaleString(en.intl.currentLocale, {
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            })
          }) : true,
          checked: B,
          onChange: em
        }) : null, v && C.enabled ? (0, r.jsx)(g.rsf, {
          label: en.intl.string(en.t["Pkw//o"]),
          description: en.intl.string(en.t.hw1nKf),
          checked: I,
          disabled: B,
          onChange: eh
        }) : null]
      })]
    }) : null, eE = (0, q.O)(a.id), eb = (0, N.Z)(a), ey = () => (0, r.jsxs)("div", {
      className: er.footer,
      children: [eb ? (0, r.jsx)(ed, {
        className: er.warningContainer,
        text: en.intl.format(en.t.j4B7EW, {
          applicationName: a.name
        })
      }) : eE ? (0, r.jsx)(ed, {
        className: er.warningContainer,
        text: en.intl.format(en.t.jUhnwb, {
          applicationName: a.name,
          onConnectionPress: () => (0, $.openUserSettings)(Y.n.CONNECTIONS_PANEL, {
            section: ee.oAB.CONNECTIONS
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: er.deauthorizeButton,
        children: (0, r.jsx)(g.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: en.intl.string(en.t.xUqheM),
          onClick: () => e_(a, c)
        })
      })]
    }), eO = (0, z.wy)("AuthorizedApps");
    return (0, r.jsx)("div", {
      className: o()(er.authedAppV2, {
        [er.authedAppV2UserSettingsRedesign]: eO
      }),
      children: (0, r.jsx)(g.y5t, {
        component: eu(),
        children: (0, r.jsxs)("div", {
          className: er.appDetailsContainer,
          children: [ec(), eo(), eg(), ey()]
        })
      })
    })
  },
  em = (0, Chunk663042.U)(() => ({
    searchQuery: ""
  })),
  eg = () => {
    let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
      {
        fetchState: t,
        appAuthTokens: n
      } = (0, Chunk442837.cj)([Chunk881998.default], () => ({
        fetchState: Chunk881998.default.getFetchState(),
        appAuthTokens: Chunk881998.default.getNewestTokensForNonChildrenApplications()
      })),
      a = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
      o = (0, Chunk442837.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getSelfEmbeddedActivities()),
      s = (0, Chunk442837.e7)([Chunk592125.Z, Chunk944486.Z], () => Chunk592125.Z.getChannel(Chunk944486.Z.getChannelId())),
      c = null == Chunk658722 ? true : Chunk658722.getGuildId();
    Chunk473749.useEffect(() => {
      Chunk384275.Z.fetch()
    }, []), Chunk473749.useEffect(() => () => {
      em.setState({
        searchQuery: ""
      })
    }, []);
    let u = e => {
        let {
          id: t,
          application: n
        } = e;
        E.Z.delete(t);
        let r = o.get(n.id);
        null != r && I.Z.leaveActivity({
          location: r.location,
          applicationId: n.id,
          showFeedback: false
        })
      },
      d = em(e => e.searchQuery),
      f = e => em.setState({
        searchQuery: e
      }),
      _ = e => {
        f(e)
      },
      h = () => {
        Chunk243814("")
      },
      m = () => (0, Chunk54381.jsx)("div", {
        className: Chunk609157.searchContainer,
        children: (0, Chunk54381.jsx)(Chunk481060.E1j, {
          query: Chunk663042,
          onChange: Chunk793030,
          onClear: Chunk921072,
          placeholder: Chunk388032.intl.string(Chunk388032.t["5prvKe"]),
          "aria-label": Chunk388032.intl.string(Chunk388032.t["5prvKe"])
        })
      }),
      b = (e, t) => (0, r.jsx)(eu, {
        className: er.__invalid_marginTop20,
        children: (0, r.jsx)(g.OZU, {
          note: e,
          children: t
        })
      }),
      y = Chunk473749.useMemo(() => {
        let e = Chunk663042.trim().toLowerCase();
        return "" === module || null == require ? require : require.length < 100 ? require.filter(t => l()(e, t.application.name.toLowerCase())) : require.filter(t => t.application.name.toLowerCase().includes(e))
      }, [require, Chunk663042]),
      T = () => null == require || null == Chunk87051 || exports !== Chunk881998.FetchState.FETCHED ? (0, Chunk54381.jsx)(Chunk481060.$jN, {
        className: Chunk10198.marginTop20,
        type: Chunk481060.$jN.Type.SPINNING_CIRCLE
      }) : 0 === require.length ? Chunk493683(Chunk388032.intl.string(Chunk388032.t.CpPv5l), Chunk388032.intl.string(Chunk388032.t["E+SM6T"])) : 0 === Chunk87051.length ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [Chunk524437(), Chunk493683(null, Chunk388032.intl.string(Chunk388032.t.EVWFNr))]
      }) : (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [Chunk524437(), Chunk87051.sort((e, t) => Number(t.id) - Number(e.id)).map(e => (0, r.jsx)(eh, es({
          locale: a,
          onDelete: () => u(e),
          selectedChannelId: null == s ? true : s.id,
          selectedGuildId: null != c ? c : true
        }, e), e.id))]
      });
    return module ? (0, Chunk54381.jsx)(Chunk497321.Z, {}) : (0, Chunk54381.jsx)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["f6kk+r"]),
      children: (0, Chunk54381.jsx)(Chunk481060.y5t, {
        component: (0, Chunk54381.jsxs)(Chunk481060.Zbd, {
          type: Chunk481060.Zbd.Types.PRIMARY,
          className: Chunk609157.headingCard,
          children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
            variant: "heading-md/medium",
            children: Chunk388032.intl.string(Chunk388032.t.HU3RFw)
          }), (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-sm/normal",
            children: Chunk388032.intl.string(Chunk388032.t.Nu5Yi0)
          })]
        }),
        children: Chunk367907()
      })
    })
  }