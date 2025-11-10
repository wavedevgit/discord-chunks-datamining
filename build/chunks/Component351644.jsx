/** Chunk was on 86736 **/
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
    className: A.searchContainer,
    children: (0, i.jsx)(u.E1j, {
      query: t,
      onChange: l,
      onClear: () => n(""),
      placeholder: D.intl.string(D.t["5prvKe"]),
      "aria-label": D.intl.string(D.t["5prvKe"])
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
    customWebhooks: K,
    followedChannelWebhooks: z,
    isLoadingWebhooks: V,
    canCreateWebhook: q,
    onManageBuiltIn: Y,
    onManageCustomWebhooks: J,
    onManageFollowedChannels: Q,
    onManageApplication: X,
    onManageLobbiesLinked: $
  } = e, ee = (0, m.ZP)(), [et, en] = r.useState(""), {
    isFetchingConnections: ei,
    accounts: er
  } = (0, c.cj)([y.Z], () => ({
    isFetchingConnections: y.Z.isFetching(),
    accounts: y.Z.getAccounts()
  }), []), {
    canManageWebhooks: el,
    canManageGuild: ea
  } = (0, c.cj)([_.Z], () => ({
    canManageWebhooks: null != W && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, W) || null != H && _.Z.can(Z.Plq.MANAGE_WEBHOOKS, H),
    canManageGuild: null != W && null == H && _.Z.can(Z.Plq.MANAGE_GUILD, W)
  }), [W, H]), eo = (0, v.Y)(H), es = (0, g.q)(null == H || null == (t = H.linkedLobby) ? true : t.application_id), ec = (0, O.F)(null == W ? true : W.id), {
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
    let e = null == W ? true : W.features.has(Z.GuildFeatures.COMMUNITY),
      t = er.filter(e => e.type === Z.ABu.TWITCH).length > 0,
      n = er.filter(e => e.type === Z.ABu.YOUTUBE).length > 0;
    return {
      showTwitchCard: ed > 0 || !t && e,
      showYoutubeCard: eu > 0 || !n && e
    }
  }, [ei, ea, W, er, ed, eu]), ef = Object.values(G).length, eh = r.useMemo(() => {
    let e = ef > 100 ? U : s();
    return Object.values(G).filter(t => {
      var n;
      let {
        application: i
      } = t;
      return !!("" === (n = (n = et).trim().toLowerCase()) || i.id === n || e(n, i.name.toLowerCase()) || null != i.bot && e(n, i.bot.username.toLowerCase()))
    })
  }, [G, ef, et]), ex = (0, c.e7)([T.Z], () => {
    if (null != W) return eh.find(e => T.Z.canShowOverviewTooltip(W.id, e.integration.id))
  }, [eh, W]), ej = r.useMemo(() => true !== ex ? [ex, ...eh.filter(e => e.integration.id !== ex.integration.id)] : eh, [eh, ex]), ev = (0, u.s9z)(u.JQI), [eO, ey] = r.useState(false), e_ = r.useRef(0), eC = () => {
    ey(true), clearTimeout(e_.current), e_.current = setTimeout(() => {
      ey(false)
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
        text: D.intl.formatToPlainString(D.t.Nu9sat, {
          timestamp: E.default.extractTimestamp(l.id),
          user: w.ZP.getUserTag(l.user)
        })
      }) : a.push({
        icon: u.T39,
        text: D.intl.formatToPlainString(D.t.gcdJ8J, {
          timestamp: E.default.extractTimestamp(l.id)
        })
      }), (0, i.jsx)(P.Z, {
        name: r.name,
        imageSrc: null != (t = r.getIconURL(48)) ? t : N.pK["0"],
        integration: e,
        buttonText: D.intl.string(D.t["Z/qRnM"]),
        hasNextSection: true,
        onButtonClick: () => {
          X(r.id), C.default.track(Z.rMx.APP_MANAGE_CTA_CLICKED, {
            application_id: r.id,
            guild_id: null == W ? true : W.id,
            is_admin: null != W ? _.Z.can(Z.Plq.ADMINISTRATOR, W) : true
          })
        },
        details: a,
        guildId: null == W ? true : W.id,
        isScrolling: eO,
        canShowMigrationTooltip: n
      }, "integration-".concat(l.id))
    }),
    eS = (0, i.jsx)("div", {
      className: A.footerImage
    });
  0 === eN.length && ea && (eN = function(e, t, n) {
    let r = (0, d.wj)(e) ? L : M,
      l = (0, i.jsxs)(h.Z, {
        direction: h.Z.Direction.VERTICAL,
        align: h.Z.Align.CENTER,
        className: A.emptyStateWrapper,
        children: [(0, i.jsx)("img", {
          alt: "",
          src: r,
          className: A.emptyStateSearchImage
        }), (0, i.jsx)(u.Zbd, {
          editable: true,
          className: A.emptyStateCard,
          children: (0, i.jsx)(u.Text, {
            color: "text-muted",
            variant: "text-sm/normal",
            children: D.intl.string(D.t.EVWFNr)
          })
        })]
      }),
      a = (0, i.jsx)(u.Zbd, {
        editable: true,
        className: A.emptyStateCard,
        children: (0, i.jsxs)("div", {
          className: A.emptyStateText,
          children: [(0, i.jsx)("img", {
            alt: "",
            src: R,
            className: A.emptyStateImage
          }), (0, i.jsx)(u.Heading, {
            color: "header-secondary",
            variant: "heading-xl/bold",
            children: D.intl.string(D.t.nQQeFM)
          }), (0, i.jsx)(u.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: D.intl.format(D.t.snvKU3, {
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
  }(ee, ef, null == W ? true : W.id), eS = null);
  let eE = S.Z.getArticleURL(Z.BhN.INTEGRATIONS),
    ew = null != H ? D.t.YV0vh6 : D.t.FnZEJs,
    eI = [];
  if (el) {
    let e, t, r, a, o;
    eI.push((n = K.length, n > 0 ? t = (0, i.jsx)(u.LJT, {
      size: "xs"
    }) : e = D.intl.string(D.t.lOQqJK), (0, i.jsx)(P.Z, {
      name: D.intl.string(D.t.xOg4SP),
      icon: u.tYf,
      buttonText: e,
      buttonDisabled: !q,
      trailing: t,
      onButtonClick: J,
      hasNextSection: n > 0,
      details: [{
        text: D.intl.formatToPlainString(D.t["6HqDfT"], {
          count: n
        })
      }]
    }, "webhooks"))), (null == H ? true : H.type) === Z.d4z.GUILD_VOICE || (null == H ? true : H.type) != null && Z.TPd.GUILD_THREADS_ONLY.has(H.type) || eI.push((l = z.length, l > 0 ? (o = (0, i.jsx)(u.LJT, {
      size: "xs"
    }), a = Q) : (r = D.intl.string(D.t["ZwSt+T"]), a = () => open(S.Z.getArticleURL(Z.BhN.CHANNEL_FOLLOWING))), (0, i.jsx)(P.Z, {
      name: D.intl.string(D.t.OrV60r),
      icon: u.AsW,
      buttonText: r,
      onButtonClick: a,
      trailing: o,
      hasNextSection: l > 0,
      details: [{
        text: D.intl.formatToPlainString(D.t.JUNGIZ, {
          count: l
        })
      }]
    }, "channels-followed")))
  }
  null == H && ec.length > 0 && eI.push((o = ec.length, (0, i.jsx)(P.Z, {
    name: D.intl.string(D.t.tqtDXC),
    icon: u.DuK,
    trailing: (0, i.jsx)(u.LJT, {
      size: "xs"
    }),
    onButtonClick: $,
    hasNextSection: true,
    details: [{
      text: D.intl.formatToPlainString(D.t["puxS4+"], {
        count: o
      })
    }]
  }, "channels-syncing"))), eb && eI.push(function(e, t, n) {
    let r, l, a, o, s = b.Z.get(Z.ABu.TWITCH);
    return e > 0 ? (o = (0, i.jsx)(u.LJT, {
      size: "xs"
    }), l = D.intl.formatToPlainString(D.t.FFpnT8, {
      count: t
    }), a = () => n(Z.ABu.TWITCH)) : (r = D.intl.string(D.t.bkvGkn), l = D.intl.string(D.t.Qq3X2M), a = () => (0, f.Z)({
      platformType: Z.ABu.TWITCH,
      location: "Integration Settings"
    })), (0, i.jsx)(P.Z, {
      name: D.intl.string(D.t.q4pBG3),
      icon: s.icon.whiteSVG,
      iconBackgroundColor: s.color,
      iconClassName: A.platformIcon,
      buttonText: r,
      onButtonClick: a,
      trailing: o,
      hasNextSection: e > 0,
      details: [{
        text: l
      }]
    }, "integrations-twitch")
  }(ed, ep, Y)), eg && eI.push(function(e, t, n) {
    let r, l, a, o, s = b.Z.get(Z.ABu.YOUTUBE);
    return e > 0 ? (o = (0, i.jsx)(u.LJT, {
      size: "xs"
    }), l = D.intl.formatToPlainString(D.t.b2g5vC, {
      count: t
    }), a = () => n(Z.ABu.YOUTUBE)) : (r = D.intl.string(D.t.xEyQ3X), l = D.intl.string(D.t.T0ivgQ), a = () => (0, f.Z)({
      platformType: Z.ABu.YOUTUBE,
      location: "Integration Settings"
    })), (0, i.jsx)(P.Z, {
      name: D.intl.string(D.t.aS6cK4),
      icon: s.icon.whiteSVG,
      iconBackgroundColor: s.color,
      iconClassName: A.platformIcon,
      buttonText: r,
      onButtonClick: a,
      trailing: o,
      hasNextSection: e > 0,
      details: [{
        text: l
      }]
    }, "integrations-youtube")
  }(eu, em, Y));
  let eP = null != H && eo && null != es;
  return (0, i.jsxs)("div", {
    className: a()(null != eS ? A.footerPlaceholder : null),
    children: [(0, i.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: D.intl.format(ew, {
        helpdeskArticle: eE
      })
    }), (0, i.jsx)(u.izJ, {
      className: A.divider
    }), V || ei || null == W ? (0, i.jsx)(u.$jN, {
      className: A.__invalid_spinner,
      type: u.$jN.Type.SPINNING_CIRCLE
    }) : (0, i.jsxs)(i.Fragment, {
      children: [eI, eP && (0, i.jsxs)(i.Fragment, {
        children: [eI.length > 0 ? (0, i.jsx)(u.izJ, {
          className: A.divider
        }) : null, (0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: A.sectionHeader,
          children: D.intl.string(D.t.oAvIAg)
        }), (0, i.jsx)(I.t, {
          channel: H,
          application: es,
          showApplicationImage: true,
          name: es.name,
          hasNextSection: true,
          iconClassName: A.linkedLobbyIcon,
          trailing: (0, i.jsx)(u.vdY, {
            size: "xs"
          })
        })]
      }), ea ? (0, i.jsxs)(i.Fragment, {
        children: [eI.length > 0 || eP ? (0, i.jsx)(u.izJ, {
          className: A.divider
        }) : null, (0, i.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          className: A.sectionHeader,
          children: D.intl.string(D.t.pUBKht)
        }), ef > 4 ? (0, i.jsx)(B, {
          query: et,
          setQuery: en
        }) : null, eN]
      }) : null, eS]
    })]
  })
}