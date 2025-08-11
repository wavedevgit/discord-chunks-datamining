/** Chunk was on 13616 **/
/** chunk id: 351644, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./539854.js"), require("./781311.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk600164 = require("./600164.js"),
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
  Chunk466070 = require("./466070.js"),
  Chunk585835 = require("./585835.js"),
  Chunk997787 = require("./997787.js"),
  Chunk981631 = require("./981631.js"),
  Chunk49898 = require("./49898.js"),
  Chunk388032 = require("./388032.js"),
  Chunk709677 = require("./709677.js"),
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
  return <div className={R.searchContainer}><u.E1j query={t} onChange={l} onClear={() => n("")} placeholder={A.intl.string(A.t["5prvKS"])} aria-label={A.intl.string(A.t["5prvKS"])} /></div>
}

function W(e) {
  var t, n, l, a;
  let {
    guild: W,
    channel: H,
    applicationIntegrations: G,
    builtInIntegrations: z,
    customWebhooks: F,
    followedChannelWebhooks: V,
    isLoadingWebhooks: K,
    canCreateWebhook: q,
    onManageBuiltIn: Y,
    onManageCustomWebhooks: X,
    onManageFollowedChannels: $,
    onManageApplication: J,
    onManageLobbiesLinked: Q
  } = e, ee = (0, m.ZP)(), [et, en] = r.useState(""), {
    isFetchingConnections: ei,
    accounts: er
  } = (0, c.cj)([y.Z], () => ({
    isFetchingConnections: y.Z.isFetching(),
    accounts: y.Z.getAccounts()
  }), []), {
    canManageWebhooks: el,
    canManageGuild: eo
  } = (0, c.cj)([_.Z], () => ({
    canManageWebhooks: null != W && _.Z.can(T.Plq.MANAGE_WEBHOOKS, W) || null != H && _.Z.can(T.Plq.MANAGE_WEBHOOKS, H),
    canManageGuild: null != W && null == H && _.Z.can(T.Plq.MANAGE_GUILD, W)
  }), [W, H]), ea = (0, v.Y)(H), es = (0, g.q)(null == H || null == (t = H.linkedLobby) ? true : t.application_id), ec = (0, O.F)(null == W ? true : W.id), {
    availableTwitchIntegrations: ed,
    availableYoutubeIntegrations: eu,
    guildTwitchIntegrations: ep,
    guildYoutubeIntegrations: em
  } = r.useMemo(() => {
    var e, t, n, i, r, l, o, a;
    return {
      availableTwitchIntegrations: null != (r = null == (e = z.twitch) ? true : e.length) ? r : 0,
      availableYoutubeIntegrations: null != (l = null == (t = z.youtube) ? true : t.length) ? l : 0,
      guildTwitchIntegrations: null != (o = null == (n = z.twitch) ? true : n.filter(e => e.enabled).length) ? o : 0,
      guildYoutubeIntegrations: null != (a = null == (i = z.youtube) ? true : i.filter(e => e.enabled).length) ? a : 0
    }
  }, [z.twitch, z.youtube]), {
    showTwitchCard: eb,
    showYoutubeCard: eg
  } = r.useMemo(() => {
    if (ei || !eo) return {
      showTwitchCard: false,
      showYoutubeCard: false
    };
    let e = null == W ? true : W.features.has(T.oNc.COMMUNITY),
      t = er.filter(e => e.type === T.ABu.TWITCH).length > 0,
      n = er.filter(e => e.type === T.ABu.YOUTUBE).length > 0;
    return {
      showTwitchCard: ed > 0 || !t && e,
      showYoutubeCard: eu > 0 || !n && e
    }
  }, [ei, eo, W, er, ed, eu]), ef = Object.values(G).length, eh = r.useMemo(() => {
    let e = ef > 100 ? B : s();
    return Object.values(G).filter(t => {
      var n;
      let {
        application: i
      } = t;
      return !!("" === (n = (n = et).trim().toLowerCase()) || i.id === n || e(n, i.name.toLowerCase()) || null != i.bot && e(n, i.bot.username.toLowerCase()))
    })
  }, [G, ef, et]), ex = (0, c.e7)([P.Z], () => {
    if (null != W) return eh.find(e => P.Z.canShowOverviewTooltip(W.id, e.integration.id))
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
        o = [];
      return null != l.user ? o.push({
        icon: u.T39,
        text: A.intl.formatToPlainString(A.t.Nu9sam, {
          timestamp: I.default.extractTimestamp(l.id),
          user: w.ZP.getUserTag(l.user)
        })
      }) : o.push({
        icon: u.T39,
        text: A.intl.formatToPlainString(A.t.gcdJ8P, {
          timestamp: I.default.extractTimestamp(l.id)
        })
      }), <E.Z name={r.name} imageSrc={null != (t = r.getIconURL(48)) ? t : N.pK["0"]} integration={e} buttonText={A.intl.string(A.t["Z/qRnJ"])} hasNextSection={true} onButtonClick={() => {
          J(r.id), C.default.track(T.rMx.APP_MANAGE_CTA_CLICKED, {
            application_id: r.id,
            guild_id: null == W ? true : W.id,
            is_admin: null != W ? _.Z.can(T.Plq.ADMINISTRATOR, W) : true
          })
        }} details={o} guildId={null == W ? true : W.id} isScrolling={eO} canShowMigrationTooltip={n} />
    }),
    eS = <div className={R.footerImage} />;
  0 === eN.length && eo && (eN = function(e, t, n) {
    let r = (0, d.wj)(e) ? L : M,
      l = <h.Z direction={h.Z.Direction.VERTICAL} align={h.Z.Align.CENTER} className={R.emptyStateWrapper}>{<img alt={""} src={r} className={R.emptyStateSearchImage} />}{<u.Zbd editable={true} className={R.emptyStateCard}><u.Text color={"text-muted"} variant={"text-sm/normal"}>{A.intl.string(A.t.EVWFNj)}</u.Text></u.Zbd>}</h.Z>,
      o = <u.Zbd editable={true} className={R.emptyStateCard}><div className={R.emptyStateText}>{<img alt={""} src={D} className={R.emptyStateImage} />}{<u.X6q color={"header-secondary"} variant={"heading-xl/bold"}>{A.intl.string(A.t.nQQeFB)}</u.X6q>}{<u.Text color={"header-secondary"} variant={"text-sm/normal"}>{A.intl.format(A.t.snvKU1, {
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
            })}</u.Text>}</div></u.Zbd>;
    return t > 0 ? l : o
  }(ee, ef, null == W ? true : W.id), eS = null);
  let eI = S.Z.getArticleURL(T.BhN.INTEGRATIONS),
    ew = null != H ? A.t.YV0vh4 : A.t.FnZEJi,
    eZ = [];
  if (el) {
    let e, t, r, o, a;
    eZ.push((n = F.length, n > 0 ? t = <u.LJT size={"xs"} /> : e = A.intl.string(A.t.lOQqJC), <E.Z name={A.intl.string(A.t.xOg4SE)} icon={u.tYf} buttonText={e} buttonDisabled={!q} trailing={t} onButtonClick={X} hasNextSection={n > 0} details={[{
        text: A.intl.formatToPlainString(A.t["6HqDfX"], {
          count: n
        })
      }]} />)), (null == H ? true : H.type) === T.d4z.GUILD_VOICE || (null == H ? true : H.type) != null && T.TPd.GUILD_THREADS_ONLY.has(H.type) || eZ.push((l = V.length, l > 0 ? (a = <u.LJT size={"xs"} />, o = $) : (r = A.intl.string(A.t["ZwSt+f"]), o = () => open(S.Z.getArticleURL(T.BhN.CHANNEL_FOLLOWING))), <E.Z name={A.intl.string(A.t.OrV60t)} icon={u.AsW} buttonText={r} onButtonClick={o} trailing={a} hasNextSection={l > 0} details={[{
        text: A.intl.formatToPlainString(A.t.JUNGIS, {
          count: l
        })
      }]} />))
  }
  null == H && ec.length > 0 && eZ.push((a = ec.length, <E.Z name={A.intl.string(A.t.tqtDXF)} icon={u.DuK} trailing={(0, i.jsx)(u.LJT, {
      size: "xs"
    })} onButtonClick={Q} hasNextSection={true} details={[{
      text: A.intl.formatToPlainString(A.t["puxS4+"], {
        count: a
      })
    }]} />)), eb && eZ.push(function(e, t, n) {
    let r, l, o, a, s = b.Z.get(T.ABu.TWITCH);
    return e > 0 ? (a = <u.LJT size={"xs"} />, l = A.intl.formatToPlainString(A.t.FFpnT0, {
      count: t
    }), o = () => n(T.ABu.TWITCH)) : (r = A.intl.string(A.t.bkvGkp), l = A.intl.string(A.t.Qq3X2N), o = () => (0, f.Z)({
      platformType: T.ABu.TWITCH,
      location: "Integration Settings"
    })), <E.Z name={A.intl.string(A.t.q4pBGx)} icon={s.icon.whiteSVG} iconBackgroundColor={s.color} iconClassName={R.platformIcon} buttonText={r} onButtonClick={o} trailing={a} hasNextSection={e > 0} details={[{
        text: l
      }]} />
  }(ed, ep, Y)), eg && eZ.push(function(e, t, n) {
    let r, l, o, a, s = b.Z.get(T.ABu.YOUTUBE);
    return e > 0 ? (a = <u.LJT size={"xs"} />, l = A.intl.formatToPlainString(A.t.b2g5vL, {
      count: t
    }), o = () => n(T.ABu.YOUTUBE)) : (r = A.intl.string(A.t.xEyQ3d), l = A.intl.string(A.t.T0ivgY), o = () => (0, f.Z)({
      platformType: T.ABu.YOUTUBE,
      location: "Integration Settings"
    })), <E.Z name={A.intl.string(A.t.aS6cKy)} icon={s.icon.whiteSVG} iconBackgroundColor={s.color} iconClassName={R.platformIcon} buttonText={r} onButtonClick={o} trailing={a} hasNextSection={e > 0} details={[{
        text: l
      }]} />
  }(eu, em, Y));
  let eE = null != H && ea && null != es;
  return <u.hjN className={o()(null != eS ? R.footerPlaceholder : null)}>{<u.R94 type={u.geA.DESCRIPTION}>{A.intl.format(ew, {
        helpdeskArticle: eI
      })}</u.R94>}{<u.$i$ className={R.divider} />}{K || ei || null == W ? <u.$jN className={R.__invalid_spinner} type={u.$jN.Type.SPINNING_CIRCLE} /> : <i.Fragment>{eZ}{eE && <i.Fragment>{eZ.length > 0 ? <u.$i$ className={R.divider} /> : null}{<u.X6q variant={"heading-md/semibold"} className={R.sectionHeader}>{A.intl.string(A.t.oAvIAg)}</u.X6q>}{<Z.t channel={H} application={es} showApplicationImage={true} name={es.name} hasNextSection={true} iconClassName={R.linkedLobbyIcon} trailing={(0, i.jsx)(u.vdY, {
            size: "xs"
          })} />}</i.Fragment>}{eo ? <i.Fragment>{eZ.length > 0 || eE ? <u.$i$ className={R.divider} /> : null}{<u.X6q variant={"heading-md/semibold"} className={R.sectionHeader}>{A.intl.string(A.t.pUBKho)}</u.X6q>}{ef > 4 ? <U query={et} setQuery={en} /> : null}{eN}</i.Fragment> : null}{eS}</i.Fragment>}</u.hjN>
}