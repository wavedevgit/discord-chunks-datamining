/** Chunk was on web.js **/
/** chunk id: 526846, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => V
}), require("./997841.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk535655 = require("./535655.js"),
  Chunk973693 = require("./973693.js"),
  Chunk912370 = require("./912370.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk783097 = require("./783097.js"),
  Chunk226026 = require("./226026.js"),
  Chunk397698 = require("./397698.jsx"),
  Chunk895924 = require("./895924.js"),
  Chunk471518 = require("./471518.js"),
  Chunk425986 = require("./425986.js"),
  Chunk216780 = require("./216780.js"),
  Chunk390322 = require("./390322.js"),
  Chunk857192 = require("./857192.js"),
  Chunk626135 = require("./626135.js"),
  Chunk456100 = require("./456100.js"),
  Chunk566620 = require("./566620.js"),
  Chunk127255 = require("./127255.js"),
  Chunk5200 = require("./5200.jsx"),
  Chunk558317 = require("./558317.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk210408 = require("./210408.js");
let M = 5,
  k = 12,
  j = 1e3,
  U = Chunk973693.Y.APP_LAUNCHER_IN_VOICE_BANNER,
  G = 584,
  B = "vc-activities-".concat((0, Chunk772848.Z)());

function Z() {
  let e = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.onlyShowPreviewAppCollections) ? Chunk535655.E.PREVIEW : Chunk535655.E.ACTIVE;
  return Chunk73800.useEffect(() => {
    (0, Chunk471518.XK)({
      surface: U,
      activeState: module
    })
  }, [module]), {
    fetchState: (0, Chunk442837.e7)([Chunk425986.Z], () => Chunk425986.Z.getFetchState({
      surface: U,
      activeState: module
    })),
    voiceBannerCollection: (0, Chunk442837.e7)([Chunk425986.Z], () => Chunk425986.Z.getCollections({
      surface: U,
      activeState: module
    }))[0]
  }
}

function F(e) {
  var t;
  let n, {
      channel: o,
      openInPopout: a,
      onClick: s
    } = e,
    {
      fetchState: l,
      voiceBannerCollection: c
    } = Z(),
    d = l === v.M.FETCHING,
    _ = i.useMemo(() => {
      let e = null == c ? true : c.application_directory_collection_items[0];
      return null == e ? null : e.type === u.C.APPLICATION_BANNER ? e : null
    }, [null == c ? true : c.application_directory_collection_items]),
    {
      trackItemImpressionRef: p
    } = (0, E.Z)({
      applicationId: null != (t = null == _ ? true : _.application.id) ? t : "",
      applicationFlags: null == _ ? true : _.application.flags,
      sectionName: "app_launcher_in_voice_banner",
      sectionPosition: null == _ ? true : _.position,
      sectionOverallPosition: 0,
      promotionalLabel: null != _ ? (0, g.dF)(_.application) : true
    });
  return null == _ || null == c || d ? null : (null != _.id && null != _.image_hash && (n = (0, I.$_)({
    itemId: _.id,
    hash: _.image_hash,
    containerWidth: G
  })), <f.P3F className={x.clickableBanner} innerRef={p} onClick={() => {
      s(), (0, b.Z)({
        context: {
          type: "channel",
          channel: o
        },
        openInPopout: a,
        analyticsLocation: h.Z.APP_LAUNCHER_IN_VOICE_BANNER,
        initialState: {
          applicationId: _.application.id
        }
      })
    }}>{<img alt={_.description} src={n} className={x.poster} />}{<div className={x.posterDivider} />}</f.P3F>)
}
let V = Chunk73800.forwardRef(function(e, t) {
  let {
    channel: n,
    isHovered: o,
    closePopout: s,
    onMouseEnter: l,
    onMouseLeave: c,
    onClick: u,
    className: g
  } = e, E = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), {
    id: O,
    guild_id: v
  } = n;
  i.useEffect(() => {
    A.default.track(D.rMx.ACTIVITIES_CENTER_CONTROL_TRAY_BUTTON_HOVERED, {
      channel_id: O,
      guild_id: v
    })
  }, [O, v]), i.useEffect(() => {
    o || s()
  }, [s, o]);
  let I = (0, _.bp)(),
    {
      analyticsLocations: S,
      newestAnalyticsLocation: R
    } = (0, m.ZP)(h.Z.ACTIVITIES_MINI_SHELF),
    M = I === D.IlC.POPOUT,
    U = H(n.getGuildId());
  i.useEffect(() => {
    let e = setTimeout(() => C.ux(), j);
    return () => clearTimeout(e)
  }, []);
  let {
    enabled: G
  } = N.c.useExperiment({
    location: "ActivitiesMiniShelf"
  }, {
    autoTrackExposure: true
  }), Z = i.useCallback(() => {
    (0, b.Z)({
      context: null != n ? {
        type: "channel",
        channel: n
      } : {
        type: "contextless"
      },
      openInPopout: M,
      analyticsLocation: R
    }), c(), u()
  }, [n, R, u, c, M]), V = i.useCallback(e => {
    l(), A.default.track(D.rMx.ACTIVITIES_MINI_SHELF_HOVERED, {
      channel_id: n.id,
      guild_id: n.getGuildId()
    })
  }, [l, n]), Y = G ? f.iWm : f.nG3;
  return <m.Gt value={S}><T.Z><f.VqE ref={t} aria-labelledby={B} className={g}>{<f.y5t forceLevel={2}><f.nn4><f.H id={B}>{L.intl.string(L.t["2lnYtL"])}</f.H></f.nn4></f.y5t>}{<div className={x.container} onMouseEnter={V} onMouseLeave={c}>{<div className={x.titleContainer}>{<div className={x.titleLeft}>{<Y size={"md"} className={x.titleLeftIcon} color={"var(--interactive-active)"} />}{<f.Text variant={"eyebrow"}>{L.intl.string(L.t.f3Cz29)}</f.Text>}</div>}{<f.P3F className={x.titleRight} onClick={Z}>{<f.Text variant={"eyebrow"}>{L.intl.string(L.t["K8+z4e"])}</f.Text>}{<f.Fbu size={"custom"} width={k} height={k} color={"var(--interactive-active)"} className={x.titleRightIcon} />}</f.P3F>}</div>}{<F openInPopout={M} channel={n} onClick={() => {
              u(), s()
            }} />}{<div className={x.activityContainer}>{U.map(e => <P.Y context={{
                channel: n,
                type: "channel"
              }} activityItem={e} onClick={() => {
                s(), u()
              }} aspectRatio={P.Y.AspectRatio.THIRTEEN_BY_ELEVEN} animatedDivClass={x.activitySuggestion} commandOrigin={y.bB.MINI_SHELF} />)}{<div className={a()(x.wumpusRocketOuterContainer, {
                [x.wumpusReducedMotion]: E
              })}><div className={x.wumpusRocketInnerContainer}><w.Z className={x.wumpusRocket} /></div></div>}</div>}</div>}</f.VqE></T.Z></m.Gt>
});

function H(e) {
  return (0, R.Z)({
    guildId: e
  }).slice(0, M)
}