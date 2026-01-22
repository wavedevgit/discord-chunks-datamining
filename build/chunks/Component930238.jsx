/** Chunk was on 21968 **/
/** chunk id: 930238, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W
}), require("./321073.js"), require("./733351.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk91871 = require("./91871.js"),
  o = require.n(Chunk91871),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398590 = require("./398590.js"),
  Chunk736653 = require("./736653.js"),
  Chunk573648 = require("./573648.js"),
  Chunk429913 = require("./429913.js"),
  Chunk882997 = require("./882997.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk837057 = require("./837057.js"),
  Chunk310419 = require("./310419.js"),
  Chunk526132 = require("./526132.js"),
  Chunk887501 = require("./887501.js"),
  Chunk962173 = require("./962173.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk486020 = require("./486020.js"),
  Chunk975571 = require("./975571.js"),
  Chunk661191 = require("./661191.js"),
  Chunk427262 = require("./427262.js"),
  Chunk523352 = require("./523352.jsx"),
  Chunk517765 = require("./517765.jsx"),
  Chunk381616 = require("./381616.js"),
  Chunk652215 = require("./652215.js"),
  Chunk488995 = require("./488995.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk443536 = require("./443536.js"),
  Chunk882370 = require("./882370.js"),
  Chunk854766 = require("./854766.js"),
  Chunk237070 = require("./237070.js");

function U(e, t) {
  return t.includes(e)
}

function B(e) {
  let {
    query: t,
    setQuery: n
  } = e, l = r.useCallback(e => {
    n(e)
  }, [n]);
  return (0, i.jsx)("div", {
    className: L.MT,
    children: (0, i.jsx)(u.IWV, {
      query: t,
      onChange: l,
      onClear: () => n(""),
      placeholder: R.intl.string(R.t["5prvKe"]),
      "aria-label": R.intl.string(R.t["5prvKe"])
    })
  })
}

function W(e) {
  var t, n, l, s, W;
  let H, V, z, K, F, Y, q, Q, J, Z, {
      guild: X,
      channel: $,
      applicationIntegrations: ee,
      builtInIntegrations: et,
      customWebhooks: en,
      followedChannelWebhooks: ei,
      isLoadingWebhooks: er,
      canCreateWebhook: el,
      onManageBuiltIn: ea,
      onManageCustomWebhooks: es,
      onManageFollowedChannels: eo,
      onManageApplication: ec,
      onManageLobbiesLinked: ed
    } = e,
    eu = (0, f.Ay)(),
    [eb, ef] = r.useState(""),
    {
      isFetchingConnections: ep,
      accounts: em
    } = (0, c.cf)([A.A], () => ({
      isFetchingConnections: A.A.isFetching(),
      accounts: A.A.getAccounts()
    }), []),
    {
      canManageWebhooks: eg,
      canManageGuild: eh
    } = (0, c.cf)([v.A], () => ({
      canManageWebhooks: null != X && v.A.can(P.xBc.MANAGE_WEBHOOKS, X) || null != $ && v.A.can(P.xBc.MANAGE_WEBHOOKS, $),
      canManageGuild: null != X && null == $ && v.A.can(P.xBc.MANAGE_GUILD, X)
    }), [X, $]),
    ex = (0, O.e)($),
    ej = (0, m.h)(null == $ || null == (t = $.linkedLobby) ? true : t.application_id),
    eO = (0, y.A)(null == X ? true : X.id),
    {
      availableTwitchIntegrations: ey,
      availableYoutubeIntegrations: eA,
      guildTwitchIntegrations: ev,
      guildYoutubeIntegrations: eN
    } = r.useMemo(() => {
      var e, t, n, i, r, l, a, s;
      return {
        availableTwitchIntegrations: null != (e = null == (r = et.twitch) ? true : r.length) ? e : 0,
        availableYoutubeIntegrations: null != (t = null == (l = et.youtube) ? true : l.length) ? t : 0,
        guildTwitchIntegrations: null != (n = null == (a = et.twitch) ? true : a.filter(e => e.enabled).length) ? n : 0,
        guildYoutubeIntegrations: null != (i = null == (s = et.youtube) ? true : s.filter(e => e.enabled).length) ? i : 0
      }
    }, [et.twitch, et.youtube]),
    {
      showTwitchCard: eE,
      showYoutubeCard: eT
    } = r.useMemo(() => {
      if (ep || !eh) return {
        showTwitchCard: false,
        showYoutubeCard: false
      };
      let e = null == X ? true : X.features.has(P.GuildFeatures.COMMUNITY),
        t = em.filter(e => e.type === P.fg2.TWITCH).length > 0,
        n = em.filter(e => e.type === P.fg2.YOUTUBE).length > 0;
      return {
        showTwitchCard: ey > 0 || !t && e,
        showYoutubeCard: eA > 0 || !n && e
      }
    }, [ep, eh, X, em, ey, eA]),
    ew = Object.values(ee).length,
    eC = r.useMemo(() => {
      let e = ew > 100 ? U : o();
      return Object.values(ee).filter(t => {
        var n;
        let {
          application: i
        } = t;
        return !!("" === (n = (n = eb).trim().toLowerCase()) || i.id === n || e(n, i.name.toLowerCase()) || null != i.bot && e(n, i.bot.username.toLowerCase()))
      })
    }, [ee, ew, eb]),
    eS = (0, c.bG)([I.A], () => {
      if (null != X) return eC.find(e => I.A.canShowOverviewTooltip(X.id, e.integration.id))
    }, [eC, X]),
    e_ = r.useMemo(() => true !== eS ? [eS, ...eC.filter(e => e.integration.id !== eS.integration.id)] : eC, [eC, eS]),
    eI = (0, u.red)(u.DXt),
    [eP, ek] = r.useState(false),
    eR = r.useRef(0),
    eL = () => {
      ek(true), clearTimeout(eR.current), eR.current = setTimeout(() => {
        ek(false)
      }, 200)
    };
  r.useEffect(() => (window.addEventListener("scroll", eL, true), () => window.removeEventListener("scroll", eL)));
  let eM = e_.map(e => {
      let t = !eI && e.integration.id === (null == eS ? true : eS.integration.id);
      return function(e, t, n, r, l) {
        let {
          application: a,
          integration: s
        } = t, o = [];
        return null != s.user ? o.push({
          icon: u.O4,
          text: R.intl.formatToPlainString(R.t.Nu9sat, {
            timestamp: w.default.extractTimestamp(s.id),
            user: C.Ay.getUserTag(s.user)
          })
        }) : o.push({
          icon: u.O4,
          text: R.intl.formatToPlainString(R.t.gcdJ8J, {
            timestamp: w.default.extractTimestamp(s.id)
          })
        }), (0, i.jsx)(_.A, {
          name: a.name,
          imageSrc: E.Ay.getApplicationIconURL({
            id: a.id,
            icon: a.icon,
            size: 48
          }),
          integration: t,
          buttonText: R.intl.string(R.t["Z/qRnM"]),
          hasNextSection: true,
          onButtonClick: () => {
            n(a.id), N.default.track(P.HAw.APP_MANAGE_CTA_CLICKED, {
              application_id: a.id,
              guild_id: null == e ? true : e.id,
              is_admin: null != e ? v.A.can(P.xBc.ADMINISTRATOR, e) : true
            })
          },
          details: o,
          guildId: null == e ? true : e.id,
          isScrolling: r,
          canShowMigrationTooltip: l
        }, "integration-".concat(s.id))
      }(X, e, ec, eP, t)
    }),
    eD = (0, i.jsx)("div", {
      className: L.Hw
    });
  if (0 === eM.length && eh) {
    let e, t, r;
    n = null == X ? true : X.id, e = (0, d.Mw)(eu) ? D : G, t = (0, i.jsxs)(h.A, {
      direction: h.A.Direction.VERTICAL,
      align: h.A.Align.CENTER,
      className: L.Kl,
      children: [(0, i.jsx)("img", {
        alt: "",
        src: e,
        className: L.s1
      }), (0, i.jsx)(u.ZpM, {
        editable: true,
        className: L.$N,
        children: (0, i.jsx)(u.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: R.intl.string(R.t.EVWFNr)
        })
      })]
    }), r = (0, i.jsx)(u.ZpM, {
      editable: true,
      className: L.$N,
      children: (0, i.jsxs)("div", {
        className: L.q6,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: M,
          className: L.QT
        }), (0, i.jsx)(u.Heading, {
          color: "text-default",
          variant: "heading-xl/bold",
          children: R.intl.string(R.t.nQQeFM)
        }), (0, i.jsx)(u.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: R.intl.format(R.t.snvKU3, {
            handleGoToAppDirectory: () => {
              (0, x.transitionToGlobalDiscovery)({
                tab: k.GlobalDiscoveryTab.APPS,
                newSessionState: {
                  entrypoint: {
                    name: j.sW.GUILD_INTEGRATION_SETTINGS
                  },
                  guildId: n
                }
              }), (0, b.jH)()
            }
          })
        })]
      })
    }), eM = ew > 0 ? t : r, eD = null
  }
  let eG = T.A.getArticleURL(P.MVz.INTEGRATIONS),
    eU = null != $ ? R.t.YV0vh6 : R.t.FnZEJs,
    eB = [];
  if (eg) {
    let e, t, n, r, a;
    eB.push((l = en.length, l > 0 ? t = (0, i.jsx)(u.uhT, {
      size: "xs"
    }) : e = R.intl.string(R.t.lOQqJK), (0, i.jsx)(_.A, {
      name: R.intl.string(R.t.xOg4SP),
      icon: u.XC7,
      buttonText: e,
      buttonDisabled: !el,
      trailing: t,
      onButtonClick: es,
      hasNextSection: l > 0,
      details: [{
        text: R.intl.formatToPlainString(R.t["6HqDfT"], {
          count: l
        })
      }]
    }, "webhooks"))), (null == $ ? true : $.type) === P.rbe.GUILD_VOICE || (null == $ ? true : $.type) != null && P.kvI.GUILD_THREADS_ONLY.has($.type) || eB.push((s = ei.length, s > 0 ? (a = (0, i.jsx)(u.uhT, {
      size: "xs"
    }), r = eo) : (n = R.intl.string(R.t["ZwSt+T"]), r = () => open(T.A.getArticleURL(P.MVz.CHANNEL_FOLLOWING))), (0, i.jsx)(_.A, {
      name: R.intl.string(R.t.OrV60r),
      icon: u._qW,
      buttonText: n,
      onButtonClick: r,
      trailing: a,
      hasNextSection: s > 0,
      details: [{
        text: R.intl.formatToPlainString(R.t.JUNGIZ, {
          count: s
        })
      }]
    }, "channels-followed")))
  }
  null == $ && eO.length > 0 && eB.push((W = eO.length, (0, i.jsx)(_.A, {
    name: R.intl.string(R.t.tqtDXC),
    icon: u.fNY,
    trailing: (0, i.jsx)(u.uhT, {
      size: "xs"
    }),
    onButtonClick: ed,
    hasNextSection: true,
    details: [{
      text: R.intl.formatToPlainString(R.t["puxS4+"], {
        count: W
      })
    }]
  }, "channels-syncing"))), eE && eB.push((F = p.A.get(P.fg2.TWITCH), ey > 0 ? (K = (0, i.jsx)(u.uhT, {
    size: "xs"
  }), V = R.intl.formatToPlainString(R.t.FFpnT8, {
    count: ev
  }), z = () => ea(P.fg2.TWITCH)) : (H = R.intl.string(R.t.bkvGkn), V = R.intl.string(R.t.Qq3X2M), z = () => (0, g.A)({
    platformType: P.fg2.TWITCH,
    location: "Integration Settings"
  })), (0, i.jsx)(_.A, {
    name: R.intl.string(R.t.q4pBG3),
    icon: F.icon.whiteSVG,
    iconBackgroundColor: F.color,
    iconClassName: L.tV,
    buttonText: H,
    onButtonClick: z,
    trailing: K,
    hasNextSection: ey > 0,
    details: [{
      text: V
    }]
  }, "integrations-twitch"))), eT && eB.push((Z = p.A.get(P.fg2.YOUTUBE), eA > 0 ? (J = (0, i.jsx)(u.uhT, {
    size: "xs"
  }), q = R.intl.formatToPlainString(R.t.b2g5vC, {
    count: eN
  }), Q = () => ea(P.fg2.YOUTUBE)) : (Y = R.intl.string(R.t.xEyQ3X), q = R.intl.string(R.t.T0ivgQ), Q = () => (0, g.A)({
    platformType: P.fg2.YOUTUBE,
    location: "Integration Settings"
  })), (0, i.jsx)(_.A, {
    name: R.intl.string(R.t.aS6cK4),
    icon: Z.icon.whiteSVG,
    iconBackgroundColor: Z.color,
    iconClassName: L.tV,
    buttonText: Y,
    onButtonClick: Q,
    trailing: J,
    hasNextSection: eA > 0,
    details: [{
      text: q
    }]
  }, "integrations-youtube")));
  let eW = null != $ && ex && null != ej;
  return (0, i.jsxs)("div", {
    className: a()(null != eD ? L.bg : null),
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: R.intl.format(eU, {
        helpdeskArticle: eG
      })
    }), (0, i.jsx)(u.cGx, {
      className: L.yF
    }), er || ep || null == X ? (0, i.jsx)(u.y$y, {
      className: L.__invalid_spinner,
      type: u.y$y.Type.SPINNING_CIRCLE
    }) : (0, i.jsxs)(i.Fragment, {
      children: [eB, eW && (0, i.jsxs)(i.Fragment, {
        children: [eB.length > 0 ? (0, i.jsx)(u.cGx, {
          className: L.yF
        }) : null, (0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: L.bV,
          children: R.intl.string(R.t.oAvIAg)
        }), (0, i.jsx)(S.q, {
          channel: $,
          application: ej,
          showApplicationImage: true,
          name: ej.name,
          hasNextSection: true,
          iconClassName: L.d0,
          trailing: (0, i.jsx)(u.R2l, {
            size: "xs"
          })
        })]
      }), eh ? (0, i.jsxs)(i.Fragment, {
        children: [eB.length > 0 || eW ? (0, i.jsx)(u.cGx, {
          className: L.yF
        }) : null, (0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: L.bV,
          children: R.intl.string(R.t.pUBKht)
        }), ew > 4 ? (0, i.jsx)(B, {
          query: eb,
          setQuery: ef
        }) : null, eM]
      }) : null, eD]
    })]
  })
}