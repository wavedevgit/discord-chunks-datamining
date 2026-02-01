/** Chunk was on web.js **/
/** chunk id: 891912, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => eh,
  _g: () => e_,
  iU: () => ep
}), require("./938796.js"), require("./896048.js"), require("./321073.js"), require("./228524.js"), require("./733351.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk91871 = require("./91871.js"),
  l = require.n(Chunk91871),
  Chunk284009 = require("./284009.js"),
  u = require.n(Chunk284009),
  Chunk353640 = require("./353640.js"),
  Chunk179771 = require("./179771.js"),
  Chunk665260 = require("./665260.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk257474 = require("./257474.js"),
  Chunk873298 = require("./873298.js"),
  Chunk397927 = require("./397927.js"),
  Chunk824552 = require("./824552.js"),
  Chunk308528 = require("./308528.js"),
  Chunk832712 = require("./832712.js"),
  Chunk933958 = require("./933958.js"),
  Chunk869003 = require("./869003.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk537569 = require("./537569.js"),
  Chunk224750 = require("./224750.js"),
  Chunk875444 = require("./875444.js"),
  Chunk62447 = require("./62447.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk713804 = require("./713804.js"),
  Chunk647053 = require("./647053.js"),
  Chunk611010 = require("./611010.js"),
  Chunk546183 = require("./546183.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk543465 = require("./543465.js"),
  Chunk486020 = require("./486020.js"),
  Chunk307600 = require("./307600.js"),
  Chunk477427 = require("./477427.js"),
  Chunk661191 = require("./661191.js"),
  Chunk773669 = require("./773669.js"),
  Chunk544028 = require("./544028.js"),
  Chunk780964 = require("./780964.js"),
  Chunk594061 = require("./594061.js"),
  Chunk617617 = require("./617617.js"),
  Chunk904504 = require("./904504.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk790174 = require("./790174.jsx"),
  Chunk669253 = require("./669253.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk406535 = require("./406535.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk259878 = require("./259878.js"),
  Chunk206314 = require("./206314.js"),
  Chunk473169 = require("./473169.js");

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
let es = Chunk311907.Ay.connectStores([Chunk544028.A], () => ({
  theme: B.A.theme
}))(Chunk397927.ppr);

function el(e) {
  let {
    className: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(ee.GC, t),
    children: [(0, r.jsx)(E.mir, {
      size: "md",
      color: "currentColor",
      className: ee.QW
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
        case m.mo.IP_LOCATION:
          return (0, r.jsx)(E.L_e, {
            size: "md",
            color: "currentColor",
            className: ee.PR
          });
        case m.mo.DISPLAYS_ADVERTISEMENTS:
          return (0, r.jsx)(E.JD7, {
            className: ee.PR
          });
        default:
          return (0, r.jsx)(E.mir, {
            className: ee.PR
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
    return (0, C.A)(e) && (n = $.intl.formatToPlainString($.t["paC+US"], {
      applicationName: e.name
    }), i = $.intl.formatToPlainString($.t.inM1Yt, {
      applicationName: e.name
    }), a = (0, r.jsx)(z.A, {
      look: z.k.WARNING,
      children: $.intl.string($.t.LY35Zy)
    })), (0, K.A)(e.id) && (a = (0, r.jsxs)(r.Fragment, {
      children: [a, (0, r.jsx)(z.A, {
        children: $.intl.format($.t.KRnERi, {
          applicationName: e.name
        })
      })]
    })), (0, E.qfG)(e => (0, r.jsx)(_.Modal, eo(ei({
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
        className: ee.rO,
        children: a
      })
    })))
  },
  ed = e => {
    let {
      application: t,
      isVisible: n
    } = e, i = () => {
      null != t.terms_of_service_url && (0, U.h)({
        href: t.terms_of_service_url,
        shouldConfirm: true
      })
    }, a = () => {
      null != t.privacy_policy_url && (0, U.h)({
        href: t.privacy_policy_url,
        shouldConfirm: true
      })
    };
    return null != t.terms_of_service_url || null != t.privacy_policy_url ? (0, r.jsxs)("div", {
      className: ee.vi,
      children: [null != t.terms_of_service_url ? (0, r.jsxs)(E.MzZ, {
        onClick: i,
        tabIndex: n ? 0 : false,
        className: ee.Dt,
        children: [(0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: $.intl.string($.t["lx+Gec"])
        }), (0, r.jsx)(E.I9m, {
          size: "sm",
          className: ee.X6,
          color: "var(--text-link)"
        })]
      }) : null, null != t.privacy_policy_url ? (0, r.jsxs)("div", {
        className: ee.Fb,
        children: [null != t.terms_of_service_url ? (0, r.jsx)("div", {
          className: ee.yF
        }) : null, (0, r.jsxs)(E.MzZ, {
          onClick: a,
          className: ee.Fb,
          tabIndex: n ? 0 : false,
          children: [(0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-link",
            children: $.intl.string($.t.okSwq9)
          }), (0, r.jsx)(E.I9m, {
            size: "sm",
            className: ee.X6,
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
    } = e, y = a.id, v = i.useMemo(() => D.Ay.createFromServer(a), [a]), A = (0, p.Lt)(v.flags, X.gfo.EMBEDDED), C = (0, h.bG)([W.A], () => {
      var e, t, n, r;
      return null == (r = W.A.settings.applications) || null == (n = r.appSettings) || null == (t = n[y]) || null == (e = t.appDmSettings) ? true : e.allowMobilePush
    }, [y]), L = S.v.useExperiment({
      location: "oauth2_authorize"
    }), M = a.bot, U = (0, h.bG)([x.A], () => x.A.getDMFromUserId(null == M ? true : M.id)), {
      appDMChannelMuteConfig: F,
      dmChannelMuted: B
    } = (0, h.cf)([j.Ay], () => null == U ? {
      appDMChannelMuteConfig: null,
      dmChannelMuted: false
    } : {
      appDMChannelMuteConfig: j.Ay.getChannelMuteConfig(null, U),
      dmChannelMuted: j.Ay.isChannelMuted(null, U)
    }), [z, q] = i.useState(false), [er, ea] = i.useState(false), eo = () => {
      let e = [];
      for (let n of t) e.push(...(0, P.rY)(n, t)), n === f.F.APPLICATIONS_COMMANDS && e.push($.intl.string($.t.Ls2XRq));
      if (e.length > 0 || null != d && d.length > 0) return (0, r.jsx)(E.Nt8, {
        className: ee.Nm,
        isExpanded: er,
        collapsibleContent: (0, r.jsxs)("ul", {
          className: ee.vo,
          children: [e.map((e, t) => (0, r.jsxs)("li", {
            className: ee.EK,
            children: [(0, r.jsx)("i", {
              className: ee.dv
            }), (0, r.jsx)(E.Text, {
              variant: "text-sm/normal",
              children: e
            })]
          }, t)), null == d ? true : d.map((t, n) => {
            let i = (0, T.wI)(t);
            return null != i ? (0, r.jsxs)("li", {
              className: ee.EK,
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
            children: [(0, r.jsxs)(E.DUT, {
              className: ee.gF,
              onClick: e => {
                ea(!er), n(e)
              },
              children: [(0, r.jsx)(E.Heading, {
                variant: "heading-sm/medium",
                color: "text-strong",
                children: $.intl.string($.t.xrmhRX)
              }), er ? (0, r.jsx)(E.abt, {
                size: "md",
                color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT
              }) : (0, r.jsx)(E._BQ, {
                size: "md",
                color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT
              })]
            }), !er && (0, r.jsx)(E.Text, {
              variant: "text-sm/normal",
              color: "text-subtle",
              className: o()(ee.vo, ee.k8),
              children: $.intl.format($.t.nZOS8j, {
                numPermissions: e.length
              })
            })]
          })
        }
      })
    }, es = i.useMemo(() => {
      if (null != a.description && "" !== a.description) return (0, r.jsx)(E.Text, {
        className: et.PT,
        variant: "text-sm/normal",
        color: "text-default",
        children: (0, R.parseBioReact)(a.description)
      })
    }, [a.description]), ef = () => {
      let e = null != a.description && "" !== a.description,
        t = null != a.terms_of_service_url || null != a.privacy_policy_url;
      return e || t ? (0, r.jsx)(E.Nt8, {
        className: ee.Nm,
        isExpanded: z,
        collapsibleContent: (0, r.jsxs)("div", {
          className: ee.vo,
          children: [e && es, t && (0, r.jsx)(ed, {
            application: a,
            isVisible: z
          })]
        }),
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsxs)(E.DUT, {
            className: ee.gF,
            onClick: e => {
              q(!z), t(e)
            },
            children: [(0, r.jsx)(E.Heading, {
              variant: "heading-sm/medium",
              color: "text-strong",
              children: $.intl.string($.t.fcYgiY)
            }), z ? (0, r.jsx)(E.abt, {
              size: "md",
              color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            }) : (0, r.jsx)(E._BQ, {
              size: "md",
              color: E.LU0.colors.INTERACTIVE_TEXT_DEFAULT
            })]
          })
        }
      }) : null
    }, ep = () => {
      let e = k.Ay.getApplicationIconURL({
          id: a.id,
          icon: a.icon
        }),
        t = null != e ? (0, r.jsx)(w.A.Child, {
          className: ee.zN,
          grow: 0,
          children: (0, r.jsx)("img", {
            src: e,
            alt: ""
          })
        }) : null,
        n = new Date(V.default.extractTimestamp(m)).toLocaleDateString(_);
      return (0, r.jsxs)("div", {
        className: ee.ie,
        children: [t, (0, r.jsxs)("div", {
          className: ee.gC,
          children: [(0, r.jsx)(E.Heading, {
            variant: "heading-md/semibold",
            className: o()(ee.TK, en.Q5),
            children: a.name
          }), (0, r.jsx)(E.Text, {
            variant: "text-sm/normal",
            color: "text-default",
            children: $.intl.format($.t.yOApCK, {
              date: n
            })
          })]
        }), (0, r.jsx)(Z.A, {
          appRecord: v,
          selectedGuildId: l,
          selectedChannelId: s
        })]
      })
    }, e_ = e => {
      Y.wc.updateAsync("applications", t => {
        y in t.appSettings ? null == t.appSettings[y].appDmSettings ? t.appSettings[y].appDmSettings = g.Po.create({
          allowMobilePush: e
        }) : t.appSettings[y].appDmSettings.allowMobilePush = e : t.appSettings[y] = g._o.create({
          appDmSettings: g.Po.create({
            allowMobilePush: e
          })
        })
      }, Y.Sb.INFREQUENT_USER_ACTION), I.Ay.trackWithMetadata(X.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        update_type: J.Y.AUTHORIZED_APP_DM_PUSH_NOTIFICATION,
        application_id: a.id,
        label: e ? G.fd.Unmuted : G.fd.Muted
      })
    }, eh = i.useCallback(async () => {
      u()(null != M, "dm channel mute setting requires having a bot user");
      let e = U;
      null == e && (e = await b.A.ensurePrivateChannel(M.id)), B ? O.A.updateAppDMOverrideSettings(null, e, a.id, {
        muted: false
      }, G.fd.Unmuted) : (0, E.mMO)(async () => {
        let {
          default: t
        } = await n.e("78560").then(n.bind(n, 123939));
        return n => (0, r.jsx)(t, ei({
          channelId: e,
          applicationId: a.id
        }, n))
      })
    }, [U, M, B, a.id]), em = () => L.enabled ? (0, r.jsxs)("div", {
      className: ee.LS,
      children: [(0, r.jsx)(E.Heading, {
        variant: "heading-sm/medium",
        color: "text-strong",
        className: ee.WZ,
        children: $.intl.string($.t.NaZyYC)
      }), (0, r.jsxs)(E.BJc, {
        gap: 20,
        children: [null != M ? (0, r.jsx)(E.dOG, {
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
        }) : null, A && L.enabled ? (0, r.jsx)(E.dOG, {
          label: $.intl.string($.t["Pkw//o"]),
          description: $.intl.string($.t.hw1nKf),
          checked: C,
          disabled: B,
          onChange: e_
        }) : null]
      })]
    }) : null, eg = (0, K.I)(a.id), eE = (0, N.A)(a), ey = () => (0, r.jsxs)("div", {
      className: ee.qr,
      children: [eE ? (0, r.jsx)(el, {
        className: ee.UW,
        text: $.intl.format($.t.j4B7EW, {
          applicationName: a.name
        })
      }) : eg ? (0, r.jsx)(el, {
        className: ee.UW,
        text: $.intl.format($.t.jUhnwb, {
          applicationName: a.name,
          onConnectionPress: () => (0, Q.openUserSettings)(H.X.CONNECTIONS_PANEL, {
            section: X.nc_.CONNECTIONS
          })
        })
      }) : null, (0, r.jsx)("div", {
        className: ee.hU,
        children: (0, r.jsx)(E.Button, {
          variant: "critical-secondary",
          size: "sm",
          text: $.intl.string($.t.xUqheM),
          onClick: () => eu(a, c)
        })
      })]
    });
    return (0, r.jsx)("div", {
      className: ee.Zy,
      children: (0, r.jsx)(E.Fmo, {
        component: ep(),
        children: (0, r.jsxs)("div", {
          className: ee.TD,
          children: [ef(), eo(), em(), ey()]
        })
      })
    })
  },
  ep = (0, Chunk353640.v)(() => ({
    searchQuery: ""
  })),
  e_ = () => {
    let {
      fetchState: e,
      appAuthTokens: t
    } = (0, h.cf)([L.default], () => ({
      fetchState: L.default.getFetchState(),
      appAuthTokens: L.default.getNewestTokensForNonChildrenApplications()
    })), n = (0, h.bG)([F.default], () => F.default.locale), a = (0, h.bG)([v.Ay], () => v.Ay.getSelfEmbeddedActivities()), o = (0, h.bG)([x.A, M.A], () => x.A.getChannel(M.A.getChannelId())), s = null == o ? true : o.getGuildId(), c = e => {
      let {
        id: t,
        application: n
      } = e;
      y.A.delete(t);
      let r = a.get(n.id);
      null != r && A.A.leaveActivity({
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
      className: ee.MT,
      children: (0, r.jsx)(E.IWV, {
        query: u,
        onChange: f,
        onClear: p,
        placeholder: $.intl.string($.t["5prvKe"]),
        "aria-label": $.intl.string($.t["5prvKe"])
      })
    }), m = (e, t) => (0, r.jsx)(es, {
      className: ee.__invalid_marginTop20,
      children: (0, r.jsx)(E.SGT, {
        note: e,
        children: t
      })
    }), g = i.useMemo(() => {
      let e = u.trim().toLowerCase();
      return "" === e || null == t ? t : t.length < 100 ? t.filter(t => l()(e, t.application.name.toLowerCase())) : t.filter(t => t.application.name.toLowerCase().includes(e))
    }, [t, u]), b = () => null == t || null == g || e !== L.FetchState.FETCHED ? (0, r.jsx)(E.y$y, {
      className: en.QX,
      type: E.y$y.Type.SPINNING_CIRCLE
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
    return (0, r.jsx)(E.Fmo, {
      component: (0, r.jsxs)(E.ZpM, {
        type: E.ZpM.Types.PRIMARY,
        className: ee.Rd,
        children: [(0, r.jsx)(E.Heading, {
          variant: "heading-md/medium",
          children: $.intl.string($.t.HU3RFw)
        }), (0, r.jsx)(E.Text, {
          variant: "text-sm/normal",
          children: $.intl.string($.t.Nu5Yi0)
        })]
      }),
      children: b()
    })
  },
  eh = () => (i.useEffect(() => {
    y.A.fetch()
  }, []), i.useEffect(() => () => {
    ep.setState({
      searchQuery: ""
    })
  }, []), (0, r.jsx)(q.A, {
    title: $.intl.string($.t["f6kk+r"]),
    children: (0, r.jsx)(e_, {})
  }))