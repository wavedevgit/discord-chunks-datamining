/** Chunk was on web.js **/
/** chunk id: 795594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => ep,
  Z: () => eh
}), require("./997841.js"), require("./388685.js"), require("./539854.js"), require("./953529.js"), require("./781311.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  l = require.n(Chunk658722),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk879690 = require("./879690.js"),
  Chunk243814 = require("./243814.js"),
  Chunk442837 = require("./442837.js"),
  Chunk921072 = require("./921072.js"),
  Chunk524437 = require("./524437.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk384275 = require("./384275.js"),
  Chunk493683 = require("./493683.js"),
  Chunk87051 = require("./87051.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk468026 = require("./468026.jsx"),
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
  Chunk436267 = require("./436267.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk273313 = require("./273313.jsx"),
  Chunk869743 = require("./869743.jsx"),
  Chunk947889 = require("./947889.js"),
  Chunk981631 = require("./981631.js"),
  Chunk468788 = require("./468788.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk392082 = require("./392082.js"),
  Chunk430864 = require("./430864.js"),
  Chunk197571 = require("./197571.js");

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
let el = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}))(Chunk481060.ubH);

function ec(e) {
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
let eu = e => {
    let {
      disclosure: t
    } = e;
    return i.useMemo(() => {
      switch (t) {
        case p.u$.IP_LOCATION:
          return (0, r.jsx)(g.enf, {
            size: "md",
            color: "currentColor",
            className: er.disclosureIcon
          });
        case p.u$.DISPLAYS_ADVERTISEMENTS:
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
  ed = (e, t) => {
    let n = en.intl.string(en.t.DT39Aw),
      i = en.intl.formatToPlainString(en.t.QWGvxM, {
        applicationName: e.name
      });
    return (0, N.Z)(e) && (n = en.intl.formatToPlainString(en.t["paC+UV"], {
      applicationName: e.name
    }), i = (0, r.jsxs)(r.Fragment, {
      children: [en.intl.formatToPlainString(en.t.inM1Ym, {
        applicationName: e.name
      }), (0, r.jsx)(X.Z, {
        look: X.z.WARNING,
        className: er.infoBox,
        children: en.intl.string(en.t.LY35Z2)
      })]
    })), (0, q.Z)(e.id) && (i = (0, r.jsxs)(r.Fragment, {
      children: [i, (0, r.jsx)(X.Z, {
        className: er.infoBox,
        children: en.intl.format(en.t.KRnERk, {
          applicationName: e.name
        })
      })]
    })), (0, g.h7j)(e => (0, r.jsx)(v.default, es({
      title: n,
      body: i,
      confirmText: en.intl.string(en.t.xUqheH),
      confirmColor: m.Tt.RED,
      cancelText: en.intl.string(en.t["ETE/oK"]),
      onConfirm: t
    }, e)))
  },
  ef = e => {
    let {
      application: t,
      isVisible: n
    } = e, i = () => {
      null != t.terms_of_service_url && (0, Z.q)({
        href: t.terms_of_service_url,
        shouldConfirm: true
      })
    }, a = () => {
      null != t.privacy_policy_url && (0, Z.q)({
        href: t.privacy_policy_url,
        shouldConfirm: true
      })
    };
    return null != t.terms_of_service_url || null != t.privacy_policy_url ? (0, r.jsxs)("div", {
      className: er.tosPrivacy,
      children: [null != t.terms_of_service_url ? (0, r.jsxs)(g.P3F, {
        tag: "a",
        onClick: i,
        className: er.tos,
        tabIndex: n ? 0 : false,
        children: [(0, r.jsx)(g.R94, {
          className: er.link,
          children: en.intl.string(en.t["lx+GeX"])
        }), (0, r.jsx)(g.Gr1, {
          className: er.externalLinkIcon,
          color: "var(--text-link)"
        })]
      }) : null, null != t.privacy_policy_url ? (0, r.jsxs)("div", {
        className: er.privacy,
        children: [null != t.terms_of_service_url ? (0, r.jsx)("div", {
          className: er.divider
        }) : null, (0, r.jsxs)(g.P3F, {
          tag: "a",
          onClick: a,
          className: er.privacy,
          tabIndex: n ? 0 : false,
          children: [(0, r.jsx)(g.R94, {
            className: er.link,
            children: en.intl.string(en.t.okSwq6)
          }), (0, r.jsx)(g.Gr1, {
            className: er.externalLinkIcon,
            color: "var(--text-link)"
          })]
        })]
      }) : null]
    }) : null
  },
  e_ = e => {
    let {
      scopes: t,
      application: a,
      selectedChannelId: s,
      selectedGuildId: l,
      onDelete: c,
      disclosures: d,
      locale: p,
      id: m
    } = e, E = a.id, O = i.useMemo(() => x.ZP.createFromServer(a), [a]), v = (0, B.yE)(O.flags, ee.udG.EMBEDDED), I = (0, _.e7)([z.Z], () => {
      var e, t, n, r;
      return null == (r = z.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[E]) || null == (e = t.appDmSettings) ? true : e.allowMobilePush
    }, [E]), T = A.w.useExperiment({
      location: "oauth2_authorize"
    }), N = a.bot, L = (0, _.e7)([j.Z], () => j.Z.getDMFromUserId(null == N ? true : N.id)), {
      appDMChannelMuteConfig: M,
      dmChannelMuted: k
    } = (0, _.cj)([U.ZP], () => null == L ? {
      appDMChannelMuteConfig: null,
      dmChannelMuted: false
    } : {
      appDMChannelMuteConfig: U.ZP.getChannelMuteConfig(null, L),
      dmChannelMuted: U.ZP.isChannelMuted(null, L)
    }), [Z, H] = i.useState(false), [Y, X] = i.useState(false), Q = () => {
      let e = [];
      for (let n of t) e.push(...(0, D.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(en.intl.string(en.t.Ls2XRk));
      if (e.length > 0 || null != d && d.length > 0) return (0, r.jsx)(g.zF9, {
        className: er.appDetailsSection,
        isExpanded: Y,
        collapsibleContent: (0, r.jsxs)("ul", {
          className: er.appDetailsContent,
          children: [e.map((e, t) => (0, r.jsxs)("li", {
            className: er.permission,
            children: [(0, r.jsx)("i", {
              className: er.permissionCheckmark
            }), (0, r.jsx)(g.R94, {
              children: e
            })]
          }, t)), null == d ? true : d.map((t, n) => {
            let i = (0, C.PM)(t);
            return null != i ? (0, r.jsxs)("li", {
              className: er.permission,
              children: [(0, r.jsx)(eu, {
                disclosure: t
              }), (0, r.jsx)(g.R94, {
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
                X(!Y), n(e)
              },
              children: [(0, r.jsx)(g.X6q, {
                variant: "heading-sm/medium",
                color: "header-primary",
                children: en.intl.string(en.t.xrmhRU)
              }), Y ? (0, r.jsx)(g.CJ0, {
                size: "md",
                color: g.TVs.colors.INTERACTIVE_NORMAL
              }) : (0, r.jsx)(g.Fbu, {
                size: "md",
                color: g.TVs.colors.INTERACTIVE_NORMAL
              })]
            }), !Y && (0, r.jsx)(g.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              className: o()(er.appDetailsContent, er.permissionsDescription),
              children: en.intl.format(en.t.nZOS8v, {
                numPermissions: e.length
              })
            })]
          })
        }
      })
    }, eo = i.useMemo(() => {
      if (null != a.description && "" !== a.description) return (0, r.jsx)(g.Text, {
        className: ei.markup,
        variant: "text-sm/normal",
        color: "text-default",
        children: (0, w.parseBioReact)(a.description)
      })
    }, [a.description]), el = () => {
      let e = null != a.description && "" !== a.description,
        t = null != a.terms_of_service_url || null != a.privacy_policy_url;
      return e || t ? (0, r.jsx)(g.zF9, {
        className: er.appDetailsSection,
        isExpanded: Z,
        collapsibleContent: (0, r.jsxs)("div", {
          className: er.appDetailsContent,
          children: [e && eo, t && (0, r.jsx)(ef, {
            application: a,
            isVisible: Z
          })]
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(g.P3F, {
            className: er.appDetailsSectionHeader,
            onClick: e => {
              H(!Z), t(e)
            },
            children: [(0, r.jsx)(g.X6q, {
              variant: "heading-sm/medium",
              color: "header-primary",
              children: en.intl.string(en.t.fcYgiY)
            }), Z ? (0, r.jsx)(g.CJ0, {
              size: "md",
              color: g.TVs.colors.INTERACTIVE_NORMAL
            }) : (0, r.jsx)(g.Fbu, {
              size: "md",
              color: g.TVs.colors.INTERACTIVE_NORMAL
            })]
          })
        }
      }) : null
    }, e_ = () => {
      let e = G.ZP.getApplicationIconURL({
          id: a.id,
          icon: a.icon
        }),
        t = null != e ? (0, r.jsx)(P.Z.Child, {
          className: er.appAvatarV2,
          grow: 0,
          children: (0, r.jsx)("img", {
            src: e,
            alt: ""
          })
        }) : null,
        n = new Date(V.default.extractTimestamp(m)).toLocaleDateString(p);
      return (0, r.jsxs)("div", {
        className: er.headerV2,
        children: [t, (0, r.jsxs)("div", {
          className: er.headerTextContainerV2,
          children: [(0, r.jsx)(g.X6q, {
            variant: "heading-md/semibold",
            className: o()(er.headerText, ea.marginBottom4),
            children: a.name
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: en.intl.format(en.t.yOApCA, {
              date: n
            })
          })]
        }), (0, r.jsx)(J.Z, {
          appRecord: O,
          selectedGuildId: l,
          selectedChannelId: s
        })]
      })
    }, ep = e => {
      K.hW.updateAsync("applications", t => {
        E in t.appSettings ? null == t.appSettings[E].appDmSettings ? t.appSettings[E].appDmSettings = h.c$.create({
          allowMobilePush: e
        }) : t.appSettings[E].appDmSettings.allowMobilePush = e : t.appSettings[E] = h.dp.create({
          appDmSettings: h.c$.create({
            allowMobilePush: e
          })
        })
      }, K.fy.INFREQUENT_USER_ACTION), S.ZP.trackWithMetadata(ee.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: et.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
        application_id: a.id,
        label: e ? F.ZB.Unmuted : F.ZB.Muted
      })
    }, eh = i.useCallback(async () => {
      u()(null != N, "dm channel mute setting requires having a bot user");
      let e = L;
      null == e && (e = await b.Z.ensurePrivateChannel(N.id)), k ? y.Z.updateAppDMOverrideSettings(null, e, a.id, {
        muted: false
      }, F.ZB.Unmuted) : (0, g.ZDy)(async () => {
        let {
          default: t
        } = await n.e("8246").then(n.bind(n, 540679));
        return n => (0, r.jsx)(t, es({
          channelId: e,
          applicationId: a.id
        }, n))
      })
    }, [L, N, k, a.id]), em = () => T.enabled ? (0, r.jsxs)("div", {
      className: er.directMessagesSection,
      children: [(0, r.jsx)(g.X6q, {
        variant: "heading-sm/medium",
        color: "header-primary",
        className: er.dmSettingsHeader,
        children: en.intl.string(en.t.NaZyYG)
      }), null != N ? (0, r.jsx)(g.j7V, {
        hideBorder: true,
        onChange: eh,
        className: er.dmSettingsSwitch,
        note: (null == M ? true : M.end_time) != null ? en.intl.format(en.t.j7h4AA, {
          endTime: new Date(M.end_time).toLocaleString(en.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : true,
        value: k,
        children: (0, r.jsx)(g.Text, {
          variant: "text-sm/medium",
          children: en.intl.string(en.t.NkwaBg)
        })
      }) : null, v && T.enabled ? (0, r.jsx)(g.j7V, {
        hideBorder: true,
        onChange: ep,
        className: er.dmSettingsSwitch,
        note: en.intl.string(en.t.hw1nKS),
        value: I,
        disabled: k,
        children: (0, r.jsx)(g.Text, {
          variant: "text-sm/medium",
          children: en.intl.string(en.t["Pkw//v"])
        })
      }) : null]
    }) : null, eg = (0, q.O)(a.id), eE = (0, R.Z)(a), eb = (0, $.Z)(), ey = () => (0, r.jsxs)("div", {
      className: er.footer,
      children: [eE ? (0, r.jsx)(ec, {
        className: er.warningContainer,
        text: en.intl.format(en.t.j4B7ER, {
          applicationName: a.name
        })
      }) : eg ? (0, r.jsx)(ec, {
        className: er.warningContainer,
        text: en.intl.format(en.t.jUhnwc, {
          applicationName: a.name,
          onConnectionPress: () => eb(W.n.CONNECTIONS_PANEL, {
            section: ee.oAB.CONNECTIONS
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: er.deauthorizeButton,
        children: (0, r.jsx)(g.zxk, {
          variant: "critical-secondary",
          size: "sm",
          text: en.intl.string(en.t.xUqheH),
          onClick: () => ed(a, c)
        })
      })]
    });
    return (0, r.jsx)("div", {
      className: er.authedAppV2,
      children: (0, r.jsx)(g.y5t, {
        component: e_(),
        children: (0, r.jsxs)("div", {
          className: er.appDetailsContainer,
          children: [el(), Q(), em(), ey()]
        })
      })
    })
  },
  ep = (0, Chunk879690.U)(() => ({
    searchQuery: ""
  })),
  eh = () => {
    let e = (0, Chunk442837.e7)([Chunk246946.Z], () => Chunk246946.Z.hidePersonalInformation),
      {
        fetchState: t,
        appAuthTokens: n
      } = (0, Chunk442837.cj)([Chunk881998.Z], () => ({
        fetchState: Chunk881998.Z.getFetchState(),
        appAuthTokens: Chunk881998.Z.getNewestTokensForNonChildrenApplications()
      })),
      a = (0, Chunk442837.e7)([Chunk706454.default], () => Chunk706454.default.locale),
      o = (0, Chunk442837.e7)([Chunk317381.ZP], () => Chunk317381.ZP.getSelfEmbeddedActivities()),
      s = (0, Chunk442837.e7)([Chunk592125.Z, Chunk944486.Z], () => Chunk592125.Z.getChannel(Chunk944486.Z.getChannelId())),
      c = null == Chunk658722 ? true : Chunk658722.getGuildId();
    Chunk647438.useEffect(() => {
      Chunk384275.Z.fetch()
    }, []), Chunk647438.useEffect(() => () => {
      ep.setState({
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
        null != r && T.Z.leaveActivity({
          location: r.location,
          applicationId: n.id,
          showFeedback: false
        })
      },
      d = ep(e => e.searchQuery),
      f = e => ep.setState({
        searchQuery: e
      }),
      p = e => {
        f(e)
      },
      h = () => {
        Chunk243814("")
      },
      m = () => (0, Chunk951288.jsx)("div", {
        className: Chunk392082.searchContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: Chunk879690,
          onChange: Chunk921072,
          onClear: Chunk524437,
          placeholder: Chunk388032.intl.string(Chunk388032.t["5prvKS"]),
          "aria-label": Chunk388032.intl.string(Chunk388032.t["5prvKS"])
        })
      }),
      b = (e, t) => (0, r.jsx)(el, {
        className: er.__invalid_marginTop20,
        children: (0, r.jsx)(g.OZU, {
          note: e,
          children: t
        })
      }),
      y = Chunk647438.useMemo(() => {
        let e = Chunk879690.trim().toLowerCase();
        return "" === module || null == require ? require : require.length < 100 ? require.filter(t => l()(e, t.application.name.toLowerCase())) : require.filter(t => t.application.name.toLowerCase().includes(e))
      }, [require, Chunk879690]),
      v = () => null == require || null == Chunk87051 || exports !== Chunk881998.M.FETCHED ? (0, Chunk951288.jsx)(Chunk481060.$jN, {
        className: Chunk197571.marginTop20,
        type: Chunk481060.$jN.Type.SPINNING_CIRCLE
      }) : 0 === require.length ? Chunk493683(Chunk388032.intl.string(Chunk388032.t.CpPv5u), Chunk388032.intl.string(Chunk388032.t["E+SM6e"])) : 0 === Chunk87051.length ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [Chunk755721(), Chunk493683(null, Chunk388032.intl.string(Chunk388032.t.EVWFNj))]
      }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [Chunk755721(), Chunk87051.sort((e, t) => Number(t.id) - Number(e.id)).map(e => (0, r.jsx)(e_, es({
          locale: a,
          onDelete: () => u(e),
          selectedChannelId: null == s ? true : s.id,
          selectedGuildId: null != c ? c : true
        }, e), e.id))]
      });
    return module ? (0, Chunk951288.jsx)(Chunk497321.Z, {}) : (0, Chunk951288.jsx)(Chunk273313.Z, {
      title: Chunk388032.intl.string(Chunk388032.t["f6kk+v"]),
      children: (0, Chunk951288.jsx)(Chunk481060.y5t, {
        component: (0, Chunk951288.jsx)(Chunk481060.ToO, {
          className: Chunk197571.marginBottom40,
          type: Chunk481060.sje.PRIMARY,
          title: Chunk388032.intl.string(Chunk388032.t.HU3RFx),
          body: Chunk388032.intl.string(Chunk388032.t.Nu5Yi4)
        }),
        children: Chunk468026()
      })
    })
  }