/** Chunk was on 58511 **/
/** chunk id: 351644, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./539854.js"), require("./781311.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk410030 = require("./410030.js"),
  Chunk726542 = require("./726542.js"),
  Chunk835473 = require("./835473.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk749681 = require("./749681.js"),
  Chunk258971 = require("./258971.js"),
  Chunk685929 = require("./685929.js"),
  Chunk163400 = require("./163400.js"),
  Chunk553795 = require("./553795.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk768581 = require("./768581.js"),
  Chunk63063 = require("./63063.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk466070 = require("./466070.jsx"),
  Chunk585835 = require("./585835.jsx"),
  Chunk997787 = require("./997787.js"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk81187 = require("./81187.js"),
  Chunk509399 = require("./509399.js"),
  Chunk790904 = require("./790904.js"),
  Chunk609182 = require("./609182.js");

function B(e, t) {
  return t.includes(e)
}

function U(e) {
  let {
    query: t,
    setQuery: n
  } = e, l = r.useCallback(e => {
    n(e)
  }, [n]);
  return (0, i.jsx)("div", {
    className: D.searchContainer,
    children: (0, i.jsx)(u.E1j, {
      query: t,
      onChange: l,
      onClear: () => n(""),
      placeholder: A.intl.string(A.t["5prvKS"]),
      "aria-label": A.intl.string(A.t["5prvKS"])
    })
  })
}

function W(e) {
  var t, n, l, o;
  let {
    guild: W,
    channel: H,
    applicationIntegrations: G,
    builtInIntegrations: F,
    customWebhooks: z,
    followedChannelWebhooks: q,
    isLoadingWebhooks: K,
    canCreateWebhook: V,
    onManageBuiltIn: Y,
    onManageCustomWebhooks: $,
    onManageFollowedChannels: X,
    onManageApplication: J,
    onManageLobbiesLinked: Q
  } = e, ee = (0, m.ZP)(), [et, en] = r.useState(""), {
    isFetchingConnections: ei,
    accounts: er
  } = (0, c.cj)([O.Z], () => ({
    isFetchingConnections: O.Z.isFetching(),
    accounts: O.Z.getAccounts()
  }), []), {
    canManageWebhooks: el,
    canManageGuild: ea
  } = (0, c.cj)([_.Z], () => ({
    canManageWebhooks: null != W && _.Z.can(E.Plq.MANAGE_WEBHOOKS, W) || null != H && _.Z.can(E.Plq.MANAGE_WEBHOOKS, H),
    canManageGuild: null != W && null == H && _.Z.can(E.Plq.MANAGE_GUILD, W)
  }), [W, H]), eo = (0, v.Y)(H), es = (0, g.q)(null == H || null == (t = H.linkedLobby) ? true : t.application_id), ec = (0, y.F)(null == W ? true : W.id), {
    availableTwitchIntegrations: ed,
    availableYoutubeIntegrations: eu,
    guildTwitchIntegrations: ep,
    guildYoutubeIntegrations: em
  } = r.useMemo(() => {
    var e, t, n, i, r, l, a, o;
    return {
      availableTwitchIntegrations: null != (r = null == (e = F.twitch) ? true : e.length) ? r : 0,
      availableYoutubeIntegrations: null != (l = null == (t = F.youtube) ? true : t.length) ? l : 0,
      guildTwitchIntegrations: null != (a = null == (n = F.twitch) ? true : n.filter(e => e.enabled).length) ? a : 0,
      guildYoutubeIntegrations: null != (o = null == (i = F.youtube) ? true : i.filter(e => e.enabled).length) ? o : 0
    }
  }, [F.twitch, F.youtube]), {
    showTwitchCard: eb,
    showYoutubeCard: eg
  } = r.useMemo(() => {
    if (ei || !ea) return {
      showTwitchCard: false,
      showYoutubeCard: false
    };
    let e = null == W ? true : W.features.has(E.oNc.COMMUNITY),
      t = er.filter(e => e.type === E.ABu.TWITCH).length > 0,
      n = er.filter(e => e.type === E.ABu.YOUTUBE).length > 0;
    return {
      showTwitchCard: ed > 0 || !t && e,
      showYoutubeCard: eu > 0 || !n && e
    }
  }, [ei, ea, W, er, ed, eu]), ef = Object.values(G).length, eh = r.useMemo(() => {
    let e = ef > 100 ? B : s();
    return Object.values(G).filter(t => {
      var n;
      let {
        application: i
      } = t;
      return !!("" === (n = (n = et).trim().toLowerCase()) || i.id === n || e(n, i.name.toLowerCase()) || null != i.bot && e(n, i.bot.username.toLowerCase()))
    })
  }, [G, ef, et]), ex = (0, c.e7)([T.Z], () => {
    if (null != W) return eh.find(e => T.Z.canShowOverviewTooltip(W.id, e.integration.id))
  }, [eh, W]), ej = r.useMemo(() => true !== ex ? [ex, ...eh.filter(e => e.integration.id !== ex.integration.id)] : eh, [eh, ex]), ev = (0, u.s9z)(u.JQI), [ey, eO] = r.useState(false), e_ = r.useRef(0), eC = () => {
    eO(true), clearTimeout(e_.current), e_.current = setTimeout(() => {
      eO(false)
    }, 200)
  };
  r.useEffect(() => (window.addEventListener("scroll", eC, true), () => window.removeEventListener("scroll", eC)));
  let eN = ej.map(e => {
      var t;
      let n = !ev && e.integration.id === (null == ex ? true : ex.integration.id),
        {
          application: r,
          integration: l
        } = e,
        a = [];
      return null != l.user ? a.push({
        icon: u.T39,
        text: A.intl.formatToPlainString(A.t.Nu9sam, {
          timestamp: S.default.extractTimestamp(l.id),
          user: I.ZP.getUserTag(l.user)
        })
      }) : a.push({
        icon: u.T39,
        text: A.intl.formatToPlainString(A.t.gcdJ8P, {
          timestamp: S.default.extractTimestamp(l.id)
        })
      }), (0, i.jsx)(Z.Z, {
        name: r.name,
        imageSrc: null != (t = r.getIconURL(48)) ? t : N.pK["0"],
        integration: e,
        buttonText: A.intl.string(A.t["Z/qRnJ"]),
        hasNextSection: true,
        onButtonClick: () => {
          J(r.id), C.default.track(E.rMx.APP_MANAGE_CTA_CLICKED, {
            application_id: r.id,
            guild_id: null == W ? true : W.id,
            is_admin: null != W ? _.Z.can(E.Plq.ADMINISTRATOR, W) : true
          })
        },
        details: a,
        guildId: null == W ? true : W.id,
        isScrolling: ey,
        canShowMigrationTooltip: n
      }, "integration-".concat(l.id))
    }),
    ew = (0, i.jsx)("div", {
      className: D.footerImage
    });
  0 === eN.length && ea && (eN = function(e, t, n) {
    let r = (0, d.wj)(e) ? L : M,
      l = (0, i.jsxs)(h.Z, {
        direction: h.Z.Direction.VERTICAL,
        align: h.Z.Align.CENTER,
        className: D.emptyStateWrapper,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: r,
          className: D.emptyStateSearchImage
        }), (0, i.jsx)(u.Zbd, {
          editable: true,
          className: D.emptyStateCard,
          children: (0, i.jsx)(u.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: A.intl.string(A.t.EVWFNj)
          })
        })]
      }),
      a = (0, i.jsx)(u.Zbd, {
        editable: true,
        className: D.emptyStateCard,
        children: (0, i.jsxs)("div", {
          className: D.emptyStateText,
          children: [(0, i.jsx)("img", {
            alt: "",
            src: R,
            className: D.emptyStateImage
          }), (0, i.jsx)(u.X6q, {
            color: "header-secondary",
            variant: "heading-xl/bold",
            children: A.intl.string(A.t.nQQeFB)
          }), (0, i.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: A.intl.format(A.t.snvKU1, {
              handleGoToAppDirectory: () => {
                (0, x.transitionToGlobalDiscovery)({
                  tab: k.GlobalDiscoveryTab.APPS,
                  newSessionState: {
                    entrypoint: {
                      name: j.xF.GUILD_INTEGRATION_SETTINGS
                    },
                    guildId: n
                  }
                }), (0, p.xf)()
              }
            })
          })]
        })
      });
    return t > 0 ? l : a
  }(ee, ef, null == W ? true : W.id), ew = null);
  let eS = w.Z.getArticleURL(E.BhN.INTEGRATIONS),
    eI = null != H ? A.t.YV0vh4 : A.t.FnZEJi,
    eP = [];
  if (el) {
    let e, t, r, a, o;
    eP.push((n = z.length, n > 0 ? t = (0, i.jsx)(u.LJT, {
      size: "xs"
    }) : e = A.intl.string(A.t.lOQqJC), (0, i.jsx)(Z.Z, {
      name: A.intl.string(A.t.xOg4SE),
      icon: u.tYf,
      buttonText: e,
      buttonDisabled: !V,
      trailing: t,
      onButtonClick: $,
      hasNextSection: n > 0,
      details: [{
        text: A.intl.formatToPlainString(A.t["6HqDfX"], {
          count: n
        })
      }]
    }, "webhooks"))), (null == H ? true : H.type) === E.d4z.GUILD_VOICE || (null == H ? true : H.type) != null && E.TPd.GUILD_THREADS_ONLY.has(H.type) || eP.push((l = q.length, l > 0 ? (o = (0, i.jsx)(u.LJT, {
      size: "xs"
    }), a = X) : (r = A.intl.string(A.t["ZwSt+f"]), a = () => open(w.Z.getArticleURL(E.BhN.CHANNEL_FOLLOWING))), (0, i.jsx)(Z.Z, {
      name: A.intl.string(A.t.OrV60t),
      icon: u.AsW,
      buttonText: r,
      onButtonClick: a,
      trailing: o,
      hasNextSection: l > 0,
      details: [{
        text: A.intl.formatToPlainString(A.t.JUNGIS, {
          count: l
        })
      }]
    }, "channels-followed")))
  }
  null == H && ec.length > 0 && eP.push((o = ec.length, (0, i.jsx)(Z.Z, {
    name: A.intl.string(A.t.tqtDXF),
    icon: u.DuK,
    trailing: (0, i.jsx)(u.LJT, {
      size: "xs"
    }),
    onButtonClick: Q,
    hasNextSection: true,
    details: [{
      text: A.intl.formatToPlainString(A.t["puxS4+"], {
        count: o
      })
    }]
  }, "channels-syncing"))), eb && eP.push(function(e, t, n) {
    let r, l, a, o, s = b.Z.get(E.ABu.TWITCH);
    return e > 0 ? (o = (0, i.jsx)(u.LJT, {
      size: "xs"
    }), l = A.intl.formatToPlainString(A.t.FFpnT0, {
      count: t
    }), a = () => n(E.ABu.TWITCH)) : (r = A.intl.string(A.t.bkvGkp), l = A.intl.string(A.t.Qq3X2N), a = () => (0, f.Z)({
      platformType: E.ABu.TWITCH,
      location: "Integration Settings"
    })), (0, i.jsx)(Z.Z, {
      name: A.intl.string(A.t.q4pBGx),
      icon: s.icon.whiteSVG,
      iconBackgroundColor: s.color,
      iconClassName: D.platformIcon,
      buttonText: r,
      onButtonClick: a,
      trailing: o,
      hasNextSection: e > 0,
      details: [{
        text: l
      }]
    }, "integrations-twitch")
  }(ed, ep, Y)), eg && eP.push(function(e, t, n) {
    let r, l, a, o, s = b.Z.get(E.ABu.YOUTUBE);
    return e > 0 ? (o = (0, i.jsx)(u.LJT, {
      size: "xs"
    }), l = A.intl.formatToPlainString(A.t.b2g5vL, {
      count: t
    }), a = () => n(E.ABu.YOUTUBE)) : (r = A.intl.string(A.t.xEyQ3d), l = A.intl.string(A.t.T0ivgY), a = () => (0, f.Z)({
      platformType: E.ABu.YOUTUBE,
      location: "Integration Settings"
    })), (0, i.jsx)(Z.Z, {
      name: A.intl.string(A.t.aS6cKy),
      icon: s.icon.whiteSVG,
      iconBackgroundColor: s.color,
      iconClassName: D.platformIcon,
      buttonText: r,
      onButtonClick: a,
      trailing: o,
      hasNextSection: e > 0,
      details: [{
        text: l
      }]
    }, "integrations-youtube")
  }(eu, em, Y));
  let eZ = null != H && eo && null != es;
  return (0, i.jsxs)(u.hjN, {
    className: a()(null != ew ? D.footerPlaceholder : null),
    children: [(0, i.jsx)(u.R94, {
      type: u.geA.DESCRIPTION,
      children: A.intl.format(eI, {
        helpdeskArticle: eS
      })
    }), (0, i.jsx)(u.$i$, {
      className: D.divider
    }), K || ei || null == W ? (0, i.jsx)(u.$jN, {
      className: D.__invalid_spinner,
      type: u.$jN.Type.SPINNING_CIRCLE
    }) : (0, i.jsxs)(i.Fragment, {
      children: [eP, eZ && (0, i.jsxs)(i.Fragment, {
        children: [eP.length > 0 ? (0, i.jsx)(u.$i$, {
          className: D.divider
        }) : null, (0, i.jsx)(u.X6q, {
          variant: "heading-md/semibold",
          className: D.sectionHeader,
          children: A.intl.string(A.t.oAvIAg)
        }), (0, i.jsx)(P.t, {
          channel: H,
          application: es,
          showApplicationImage: true,
          name: es.name,
          hasNextSection: true,
          iconClassName: D.linkedLobbyIcon,
          trailing: (0, i.jsx)(u.vdY, {
            size: "xs"
          })
        })]
      }), ea ? (0, i.jsxs)(i.Fragment, {
        children: [eP.length > 0 || eZ ? (0, i.jsx)(u.$i$, {
          className: D.divider
        }) : null, (0, i.jsx)(u.X6q, {
          variant: "heading-md/semibold",
          className: D.sectionHeader,
          children: A.intl.string(A.t.pUBKho)
        }), ef > 4 ? (0, i.jsx)(U, {
          query: et,
          setQuery: en
        }) : null, eN]
      }) : null, ew]
    })]
  })
}