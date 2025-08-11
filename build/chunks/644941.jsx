/** Chunk was on 89311 **/
/** chunk id: 644941, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => X
}), require("./388685.js"), require("./49124.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk705512 = require("./705512.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk835473 = require("./835473.js"),
  Chunk168551 = require("./168551.js"),
  Chunk485267 = require("./485267.js"),
  Chunk561308 = require("./561308.js"),
  Chunk669764 = require("./669764.js"),
  Chunk480086 = require("./480086.js"),
  Chunk706454 = require("./706454.js"),
  Chunk768581 = require("./768581.js"),
  Chunk814225 = require("./814225.js"),
  Chunk709054 = require("./709054.js"),
  Chunk810568 = require("./810568.js"),
  Chunk998058 = require("./998058.js"),
  Chunk839392 = require("./839392.js"),
  Chunk567409 = require("./567409.js"),
  Chunk774073 = require("./774073.js"),
  Chunk426482 = require("./426482.jsx"),
  Chunk715318 = require("./715318.js"),
  Chunk38516 = require("./38516.jsx"),
  Chunk891949 = require("./891949.js"),
  Chunk252547 = require("./252547.jsx"),
  Chunk484527 = require("./484527.jsx"),
  Chunk131033 = require("./131033.jsx"),
  Chunk296768 = require("./296768.jsx"),
  Chunk978313 = require("./978313.js"),
  Chunk206583 = require("./206583.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk263930 = require("./263930.js");
let H = () => <div className={Chunk263930.gameBadge}>{<Chunk481060.YqE size={"xxs"} />}{<Chunk481060.Text variant={"text-sm/normal"} color={"text-muted"}>{Chunk388032.intl.string(Chunk388032.t.kAlUs7)}</Chunk481060.Text>}</div>;

function W(e) {
  var t;
  let {
    detectedGame: r,
    application: i,
    entries: o,
    viewId: d
  } = e, m = a.useMemo(() => null == r ? true : r.genres.map(_.P3).join(", "), [r]), g = a.useMemo(() => {
    if (null == r) return "";
    let {
      artwork: e,
      screenshots: t
    } = r;
    if (e.length > 0) {
      let t = Math.floor(Math.random() * (e.length - 1));
      return e[t]
    }
    if (t.length > 0) {
      let e = Math.floor(Math.random() * (t.length - 1));
      return t[e]
    }
    return ""
  }, [r]), p = null == i ? true : i.getIconURL(160, y.$k ? "webp" : "png"), f = I.default.extractTimestamp(i.id), x = s()().diff(s()(f), "days") <= R.G, j = o.some(e => (0, v.ig)(e) === c.o.GLOBAL), h = null != (t = r.name) ? t : null == i ? true : i.name;
  return <n.Fragment>{<div className={F.gameArtHero} style={{
        backgroundImage: 'url("'.concat(g, '")')
      }} />}{<div className={l()(F.content, F.column, F.gapLg, F.headerInfo)}>{<div className={F.coverArtRow}>{<div className={F.logoWrapper}><C.C game={r} application={i} className={F.logo} size={C.Z.LARGE} /></div>}{<k.Z applicationId={i.id} viewId={d} className={F.overflowMenu} />}</div>}{<div className={l()(F.row, F.gapSm, F.gameDetails)}><div>{<u.X6q variant={"heading-xl/bold"}>{h}</u.X6q>}{<div className={l()(F.row, F.gapSm)}>{null != p && <img className={F.gameIcon} src={p} height={16} alt={z.intl.formatToPlainString(z.t["nh+jWl"], {
                game: h
              })} />}{<u.Text variant={"text-sm/semibold"} color={"text-muted"}>{m}</u.Text>}{x && <u.Text variant={"eyebrow"} className={F.newBadge}>{z.intl.string(z.t.y2b7CA)}</u.Text>}{j && <n.Fragment>{<u.Text variant={"text-sm/medium"}>{" \xb7 "}</u.Text>}{<H />}</n.Fragment>}</div>}</div></div>}</div>}</n.Fragment>
}

function U(e) {
  var t;
  let {
    detectedGame: r,
    application: a,
    entries: i,
    officialGuildInvite: l,
    similarGames: o,
    similarGamesError: s,
    onClose: c,
    viewId: d,
    trackAction: u
  } = e;
  return <div className={F.sections}>{<T.Z entries={i} viewId={d} officialGuildId={null == l || null == (t = l.guild) ? true : t.id} onClose={c} />}{<G.Z detectedGame={r} trackAction={u} />}{<L.Z applicationId={a.id} onClose={c} trackAction={u} similarGames={o} similarGamesError={s} />}</div>
}

function B(e) {
  let {
    detectedGame: t,
    setOfficialGuildInvite: r,
    trackAction: i,
    onClose: o,
    applicationId: s
  } = e, c = (0, b.u)(s, p.Z.GAME_PROFILE), d = a.useCallback(e => {
    r(e)
  }, [r]);
  return <div className={l()(F.sidebar, F.column, F.gapLg)}>{null != c ? <div className={F.gameStoreButton}><u.zxk icon={c.icon} text={z.intl.string(c.labelKey)} variant={"overlay-secondary"} onClick={c.openLink} fullWidth={true} /></div> : null}{<u.X6q variant={"heading-md/bold"}>{z.intl.string(z.t.CI0vSE)}</u.X6q>}{<div className={F.sections}>{<Z.Z detectedGame={t} trackAction={i} />}{<M.Z detectedGame={t} trackClick={i} onInviteResolved={d} closeModal={o} />}{<A.Z detectedGame={t} trackClick={i} />}{<D.Z detectedGame={t} />}</div>}</div>
}
let Y = e => e.filter(S.z6).slice(0, 5),
  X = e => {
    var t;
    let {
      applicationId: r,
      source: i,
      sourceUserId: o,
      transitionState: s,
      onClose: c,
      appContext: p
    } = e, {
      clientThemesClassName: b
    } = (0, x.ZP)(), y = (0, d.e7)([O.default], () => O.default.locale), _ = a.useMemo(() => (0, w.fP)(), []), I = (0, d.Wu)([E.Z], () => {
      var e;
      return (null != (e = E.Z.getSimilarGames(r)) ? e : []).slice(0, 25)
    }), [S, C] = a.useState(null), k = (0, N.N)(r), [A, G] = a.useState(null), T = (0, f.q)(r), M = (0, d.e7)([h.Z], () => h.Z.getGame(r)), D = null != (t = null == M ? true : M.name) ? t : null == T ? true : T.name, L = (e, t) => {
      var n;
      (0, w.UE)({
        gameName: null != D ? D : "",
        applicationId: r,
        action: e,
        similarGameId: t,
        viewId: _,
        officialGuildId: null == A || null == (n = A.guild) ? true : n.id
      })
    };
    return ((0, g.ZP)(() => {
      (0, w.IS)({
        source: i,
        viewId: _,
        applicationId: r,
        gameName: null != D ? D : "",
        authorId: o
      }), (0, j.Jn)()
    }), (0, f.Z)(I), a.useEffect(() => {
      y.startsWith("en") || (null == M ? true : M.summaryLocalized) != null || m.Z.getDetectableGamesSupplemental([r], {
        forceFetch: true
      })
    }, [r, null == M ? true : M.summaryLocalized, y]), a.useEffect(() => {
      (async () => {
        if (0 === I.length) {
          C(null);
          try {
            await (0, P.i)(r)
          } catch (e) {
            C(e)
          }
        }
      })()
    }, [r, I]), (0, g.ZP)(() => () => {
      var e;
      let t = Date.now(),
        n = k.map(e => {
          let r = (0, v.kr)(e) ? (0, v.T_)(e, t) : (0, v.GL)(e, y);
          return JSON.stringify({
            item_id: e.id,
            trait: e.traits,
            time_played: r
          })
        });
      (0, w.wz)({
        viewId: _,
        applicationId: r,
        gameName: null != D ? D : "",
        playedFriendIds: k.map(e => e.author_id),
        playedFriendsData: n,
        similarGames: Y(I),
        officialGuildId: null == A || null == (e = A.guild) ? true : e.id
      })
    }), null == M || null == T) ? null : <u.Y0X transitionState={s} size={u.CgR.DYNAMIC} className={l()(b, F.gameProfileModal)} parentComponent={"GameProfileModal"}><u.Ttm orientation={"auto"}>{<W detectedGame={M} application={T} entries={k} viewId={_} trackAction={L} />}{<u.y5t><div className={l()(F.content, F.mainContent)}>{<U detectedGame={M} application={T} entries={k} officialGuildInvite={A} similarGames={I} similarGamesError={S} onClose={c} viewId={_} trackAction={L} />}{<B detectedGame={M} setOfficialGuildInvite={G} trackAction={L} onClose={c} appContext={p} applicationId={r} />}</div></u.y5t>}</u.Ttm></u.Y0X>
  }