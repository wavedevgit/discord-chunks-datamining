/** Chunk was on web.js **/
/** chunk id: 795594, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => eh,
  Z: () => em
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

function ea(e, t, n) {
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
      ea(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function el(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let ec = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}))(Chunk481060.ubH);

function eu(e) {
  let {
    className: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(en.warningOuterContainer, t),
    children: [(0, r.jsx)(g.d3s, {
      size: "md",
      color: "currentColor",
      className: en.warningIcon
    }), (0, r.jsx)(g.Text, {
      color: "text-default",
      variant: "text-sm/medium",
      children: n
    })]
  })
}
let ed = e => {
    let {
      disclosure: t
    } = e;
    return i.useMemo(() => {
      switch (t) {
        case h.u$.IP_LOCATION:
          return (0, r.jsx)(g.enf, {
            size: "md",
            color: "currentColor",
            className: en.disclosureIcon
          });
        case h.u$.DISPLAYS_ADVERTISEMENTS:
          return (0, r.jsx)(g.FLu, {
            className: en.disclosureIcon
          });
        default:
          return (0, r.jsx)(g.d3s, {
            className: en.disclosureIcon
          })
      }
    }, [t])
  },
  ef = (e, t) => {
    let n = et.intl.string(et.t.DT39Aw),
      i = et.intl.formatToPlainString(et.t.QWGvxM, {
        applicationName: e.name
      }),
      a = null;
    return (0, C.Z)(e) && (n = et.intl.formatToPlainString(et.t["paC+UV"], {
      applicationName: e.name
    }), i = et.intl.formatToPlainString(et.t.inM1Ym, {
      applicationName: e.name
    }), a = (0, r.jsx)(q.Z, {
      look: q.z.WARNING,
      children: et.intl.string(et.t.LY35Z2)
    })), (0, z.Z)(e.id) && (a = (0, r.jsxs)(r.Fragment, {
      children: [a, (0, r.jsx)(q.Z, {
        children: et.intl.format(et.t.KRnERk, {
          applicationName: e.name
        })
      })]
    })), (0, g.h7j)(e => (0, r.jsx)(_.Modal, el(eo({
      title: n,
      subtitle: i,
      actions: [{
        text: et.intl.string(et.t["ETE/oK"]),
        onClick: e.onClose,
        variant: "secondary"
      }, {
        text: et.intl.string(et.t.xUqheH),
        onClick: () => {
          t(), e.onClose()
        },
        variant: "critical-primary"
      }]
    }, e), {
      children: (0, r.jsx)("div", {
        className: en.deleteModalBody,
        children: a
      })
    })))
  },
  e_ = e => {
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
      className: en.tosPrivacy,
      children: [null != t.terms_of_service_url ? (0, r.jsxs)(g.P3F, {
        tag: "a",
        onClick: i,
        className: en.tos,
        tabIndex: n ? 0 : false,
        children: [(0, r.jsx)(g.R94, {
          className: en.link,
          children: et.intl.string(et.t["lx+GeX"])
        }), (0, r.jsx)(g.Gr1, {
          className: en.externalLinkIcon,
          color: "var(--text-link)"
        })]
      }) : null, null != t.privacy_policy_url ? (0, r.jsxs)("div", {
        className: en.privacy,
        children: [null != t.terms_of_service_url ? (0, r.jsx)("div", {
          className: en.divider
        }) : null, (0, r.jsxs)(g.P3F, {
          tag: "a",
          onClick: a,
          className: en.privacy,
          tabIndex: n ? 0 : false,
          children: [(0, r.jsx)(g.R94, {
            className: en.link,
            children: et.intl.string(et.t.okSwq6)
          }), (0, r.jsx)(g.Gr1, {
            className: en.externalLinkIcon,
            color: "var(--text-link)"
          })]
        })]
      }) : null]
    }) : null
  },
  ep = e => {
    let {
      scopes: t,
      application: a,
      selectedChannelId: s,
      selectedGuildId: l,
      onDelete: c,
      disclosures: d,
      locale: _,
      id: h
    } = e, E = a.id, O = i.useMemo(() => D.ZP.createFromServer(a), [a]), v = (0, G.yE)(O.flags, $.udG.EMBEDDED), I = (0, p.e7)([K.Z], () => {
      var e, t, n, r;
      return null == (r = K.Z.settings.applications) || null == (n = r.appSettings) || null == (t = n[E]) || null == (e = t.appDmSettings) ? true : e.allowMobilePush
    }, [E]), C = S.w.useExperiment({
      location: "oauth2_authorize"
    }), L = a.bot, j = (0, p.e7)([x.Z], () => x.Z.getDMFromUserId(null == L ? true : L.id)), {
      appDMChannelMuteConfig: M,
      dmChannelMuted: B
    } = (0, p.cj)([k.ZP], () => null == j ? {
      appDMChannelMuteConfig: null,
      dmChannelMuted: false
    } : {
      appDMChannelMuteConfig: k.ZP.getChannelMuteConfig(null, j),
      dmChannelMuted: k.ZP.isChannelMuted(null, j)
    }), [V, H] = i.useState(false), [q, X] = i.useState(false), ea = () => {
      let e = [];
      for (let n of t) e.push(...(0, w.CI)(n, t)), n === f.x.APPLICATIONS_COMMANDS && e.push(et.intl.string(et.t.Ls2XRk));
      if (e.length > 0 || null != d && d.length > 0) return (0, r.jsx)(g.zF9, {
        className: en.appDetailsSection,
        isExpanded: q,
        collapsibleContent: (0, r.jsxs)("ul", {
          className: en.appDetailsContent,
          children: [e.map((e, t) => (0, r.jsxs)("li", {
            className: en.permission,
            children: [(0, r.jsx)("i", {
              className: en.permissionCheckmark
            }), (0, r.jsx)(g.R94, {
              children: e
            })]
          }, t)), null == d ? true : d.map((t, n) => {
            let i = (0, A.PM)(t);
            return null != i ? (0, r.jsxs)("li", {
              className: en.permission,
              children: [(0, r.jsx)(ed, {
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
              className: en.appDetailsSectionHeader,
              onClick: e => {
                X(!q), n(e)
              },
              children: [(0, r.jsx)(g.X6q, {
                variant: "heading-sm/medium",
                color: "header-primary",
                children: et.intl.string(et.t.xrmhRU)
              }), q ? (0, r.jsx)(g.CJ0, {
                size: "md",
                color: g.TVs.colors.INTERACTIVE_NORMAL
              }) : (0, r.jsx)(g.Fbu, {
                size: "md",
                color: g.TVs.colors.INTERACTIVE_NORMAL
              })]
            }), !q && (0, r.jsx)(g.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              className: o()(en.appDetailsContent, en.permissionsDescription),
              children: et.intl.format(et.t.nZOS8v, {
                numPermissions: e.length
              })
            })]
          })
        }
      })
    }, es = i.useMemo(() => {
      if (null != a.description && "" !== a.description) return (0, r.jsx)(g.Text, {
        className: er.markup,
        variant: "text-sm/normal",
        color: "text-default",
        children: (0, P.parseBioReact)(a.description)
      })
    }, [a.description]), el = () => {
      let e = null != a.description && "" !== a.description,
        t = null != a.terms_of_service_url || null != a.privacy_policy_url;
      return e || t ? (0, r.jsx)(g.zF9, {
        className: en.appDetailsSection,
        isExpanded: V,
        collapsibleContent: (0, r.jsxs)("div", {
          className: en.appDetailsContent,
          children: [e && es, t && (0, r.jsx)(e_, {
            application: a,
            isVisible: V
          })]
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(g.P3F, {
            className: en.appDetailsSectionHeader,
            onClick: e => {
              H(!V), t(e)
            },
            children: [(0, r.jsx)(g.X6q, {
              variant: "heading-sm/medium",
              color: "header-primary",
              children: et.intl.string(et.t.fcYgiY)
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
    }, ec = () => {
      let e = U.ZP.getApplicationIconURL({
          id: a.id,
          icon: a.icon
        }),
        t = null != e ? (0, r.jsx)(R.Z.Child, {
          className: en.appAvatarV2,
          grow: 0,
          children: (0, r.jsx)("img", {
            src: e,
            alt: ""
          })
        }) : null,
        n = new Date(F.default.extractTimestamp(h)).toLocaleDateString(_);
      return (0, r.jsxs)("div", {
        className: en.headerV2,
        children: [t, (0, r.jsxs)("div", {
          className: en.headerTextContainerV2,
          children: [(0, r.jsx)(g.X6q, {
            variant: "heading-md/semibold",
            className: o()(en.headerText, ei.marginBottom4),
            children: a.name
          }), (0, r.jsx)(g.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: et.intl.format(et.t.yOApCA, {
              date: n
            })
          })]
        }), (0, r.jsx)(Q.Z, {
          appRecord: O,
          selectedGuildId: l,
          selectedChannelId: s
        })]
      })
    }, ep = e => {
      W.hW.updateAsync("applications", t => {
        E in t.appSettings ? null == t.appSettings[E].appDmSettings ? t.appSettings[E].appDmSettings = m.c$.create({
          allowMobilePush: e
        }) : t.appSettings[E].appDmSettings.allowMobilePush = e : t.appSettings[E] = m.dp.create({
          appDmSettings: m.c$.create({
            allowMobilePush: e
          })
        })
      }, W.fy.INFREQUENT_USER_ACTION), T.ZP.trackWithMetadata($.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: ee.I.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
        application_id: a.id,
        label: e ? Z.ZB.Unmuted : Z.ZB.Muted
      })
    }, eh = i.useCallback(async () => {
      u()(null != L, "dm channel mute setting requires having a bot user");
      let e = j;
      null == e && (e = await b.Z.ensurePrivateChannel(L.id)), B ? y.Z.updateAppDMOverrideSettings(null, e, a.id, {
        muted: false
      }, Z.ZB.Unmuted) : (0, g.ZDy)(async () => {
        let {
          default: t
        } = await n.e("8246").then(n.bind(n, 540679));
        return n => (0, r.jsx)(t, eo({
          channelId: e,
          applicationId: a.id
        }, n))
      })
    }, [j, L, B, a.id]), em = () => C.enabled ? (0, r.jsxs)("div", {
      className: en.directMessagesSection,
      children: [(0, r.jsx)(g.X6q, {
        variant: "heading-sm/medium",
        color: "header-primary",
        className: en.dmSettingsHeader,
        children: et.intl.string(et.t.NaZyYG)
      }), null != L ? (0, r.jsx)(g.j7V, {
        hideBorder: true,
        onChange: eh,
        className: en.dmSettingsSwitch,
        note: (null == M ? true : M.end_time) != null ? et.intl.format(et.t.j7h4AA, {
          endTime: new Date(M.end_time).toLocaleString(et.intl.currentLocale, {
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
          })
        }) : true,
        value: B,
        children: (0, r.jsx)(g.Text, {
          variant: "text-sm/medium",
          children: et.intl.string(et.t.NkwaBg)
        })
      }) : null, v && C.enabled ? (0, r.jsx)(g.j7V, {
        hideBorder: true,
        onChange: ep,
        className: en.dmSettingsSwitch,
        note: et.intl.string(et.t.hw1nKS),
        value: I,
        disabled: B,
        children: (0, r.jsx)(g.Text, {
          variant: "text-sm/medium",
          children: et.intl.string(et.t["Pkw//v"])
        })
      }) : null]
    }) : null, eg = (0, z.O)(a.id), eE = (0, N.Z)(a), eb = (0, J.Z)(), ey = () => (0, r.jsxs)("div", {
      className: en.footer,
      children: [eE ? (0, r.jsx)(eu, {
        className: en.warningContainer,
        text: et.intl.format(et.t.j4B7ER, {
          applicationName: a.name
        })
      }) : eg ? (0, r.jsx)(eu, {
        className: en.warningContainer,
        text: et.intl.format(et.t.jUhnwc, {
          applicationName: a.name,
          onConnectionPress: () => eb(Y.n.CONNECTIONS_PANEL, {
            section: $.oAB.CONNECTIONS
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: en.deauthorizeButton,
        children: (0, r.jsx)(g.zxk, {
          variant: "critical-secondary",
          size: "sm",
          text: et.intl.string(et.t.xUqheH),
          onClick: () => ef(a, c)
        })
      })]
    });
    return (0, r.jsx)("div", {
      className: en.authedAppV2,
      children: (0, r.jsx)(g.y5t, {
        component: ec(),
        children: (0, r.jsxs)("div", {
          className: en.appDetailsContainer,
          children: [el(), ea(), em(), ey()]
        })
      })
    })
  },
  eh = (0, Chunk879690.U)(() => ({
    searchQuery: ""
  })),
  em = () => {
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
      eh.setState({
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
      d = eh(e => e.searchQuery),
      f = e => eh.setState({
        searchQuery: e
      }),
      _ = e => {
        f(e)
      },
      h = () => {
        Chunk243814("")
      },
      m = () => (0, Chunk951288.jsx)("div", {
        className: Chunk392082.searchContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
          query: Chunk879690,
          onChange: Chunk793030,
          onClear: Chunk921072,
          placeholder: Chunk388032.intl.string(Chunk388032.t["5prvKS"]),
          "aria-label": Chunk388032.intl.string(Chunk388032.t["5prvKS"])
        })
      }),
      b = (e, t) => (0, r.jsx)(ec, {
        className: en.__invalid_marginTop20,
        children: (0, r.jsx)(g.OZU, {
          note: e,
          children: t
        })
      }),
      y = Chunk647438.useMemo(() => {
        let e = Chunk879690.trim().toLowerCase();
        return "" === module || null == require ? require : require.length < 100 ? require.filter(t => l()(e, t.application.name.toLowerCase())) : require.filter(t => t.application.name.toLowerCase().includes(e))
      }, [require, Chunk879690]),
      T = () => null == require || null == Chunk87051 || exports !== Chunk881998.M.FETCHED ? (0, Chunk951288.jsx)(Chunk481060.$jN, {
        className: Chunk197571.marginTop20,
        type: Chunk481060.$jN.Type.SPINNING_CIRCLE
      }) : 0 === require.length ? Chunk493683(Chunk388032.intl.string(Chunk388032.t.CpPv5u), Chunk388032.intl.string(Chunk388032.t["E+SM6e"])) : 0 === Chunk87051.length ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [Chunk524437(), Chunk493683(null, Chunk388032.intl.string(Chunk388032.t.EVWFNj))]
      }) : (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [Chunk524437(), Chunk87051.sort((e, t) => Number(t.id) - Number(e.id)).map(e => (0, r.jsx)(ep, eo({
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
        children: Chunk367907()
      })
    })
  }