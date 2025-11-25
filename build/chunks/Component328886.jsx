/** Chunk was on web.js **/
/** chunk id: 328886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk705512 = require("./705512.js"),
  Chunk267843 = require("./267843.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk278323 = require("./278323.js"),
  Chunk224706 = require("./224706.js"),
  Chunk763472 = require("./763472.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk813370 = require("./813370.js"),
  Chunk567409 = require("./567409.js"),
  Chunk181106 = require("./181106.js"),
  Chunk823379 = require("./823379.js"),
  Chunk758371 = require("./758371.js"),
  Chunk931271 = require("./931271.js"),
  Chunk565201 = require("./565201.js"),
  Chunk150248 = require("./150248.js"),
  Chunk691731 = require("./691731.js"),
  Chunk935153 = require("./935153.js"),
  Chunk620662 = require("./620662.js"),
  Chunk275920 = require("./275920.js"),
  Chunk561766 = require("./561766.js"),
  Chunk404174 = require("./404174.jsx"),
  Chunk691991 = require("./691991.js"),
  Chunk981631 = require("./981631.js"),
  Chunk967249 = require("./967249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837262 = require("./837262.js");

function M(e) {
  let {
    presenceActivity: t,
    remoteJoinPlatform: n
  } = e, a = (0, N.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: D.M7m.DESKTOP
  }), s = i.useMemo(() => a.map(e => {
    switch (e) {
      case N.Ol.MOBILE:
        return (0, r.jsx)(l.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case N.Ol.ANDROID:
        return (0, r.jsx)(R.j, {
          width: o.Z.xxs,
          height: o.Z.xxs,
          color: "currentColor"
        });
      case N.Ol.IOS:
        return (0, r.jsx)(l.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case N.Ol.PLAYSTATION:
        return (0, r.jsx)(l.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case N.Ol.XBOX:
        return (0, r.jsx)(l.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(b.lm), [a]);
  if (!(null != n || s.length > 0)) return null;
  let c = null != n ? (0, S.V)(n) : L.intl.string(L.t["4dGUP0"]);
  return (0, r.jsxs)("div", {
    className: x.footer,
    children: [(0, r.jsx)("div", {
      className: x.footerSupportedPlatformIconsContainer,
      children: s.map((e, t) => (0, r.jsx)("div", {
        className: x.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: x.footerSupportedPlatformText,
      children: c
    })]
  })
}

function k(e) {
  var t, n, o;
  let {
    message: b,
    application: S,
    applicationName: N,
    channel: R,
    header: k,
    currentUserId: j,
    launchableAppId: U,
    isEmbeddedApplication: G,
    tryWithGdnAction: B,
    staticBannerSrc: Z,
    onClickContent: F,
    iconSrc: V,
    onView: H,
    presenceActivity: W,
    currentUserPresenceActivity: Y,
    hideParty: K,
    partyStatusElement: z,
    analyticsLocations: q
  } = e, X = null != (o = null == W || null == (t = W.timestamps) ? true : t.start) ? o : null == W ? true : W.created_at, Q = i.useMemo(() => {
    var e;
    return null != X ? (0, r.jsxs)("div", {
      className: x.timestampContainer,
      children: [(0, r.jsx)(l.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(p.x3, {
        entry: {
          start: X,
          end: null == W || null == (e = W.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [X, null == W || null == (n = W.timestamps) ? true : n.end]), J = (0, I.H)(b), $ = (0, g.N)(S.id), ee = i.useMemo(() => $.some(e => (0, h.ig)(e) === a.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.YqE, {
      size: "xxs",
      color: "currentColor"
    }), L.intl.string(L.t.TsWCdW)]
  }) : null, [$]), et = i.useMemo(() => (0, r.jsxs)(l.Text, {
    variant: "text-xs/normal",
    className: x.tagline,
    color: "none",
    lineClamp: 2,
    children: [J ? (0, y.$v)(b, N, R, j, false) : Q, J ? null : ee]
  }), [J, b, N, R, j, Q, ee]), en = i.useMemo(() => (0, r.jsxs)("div", {
    className: x.info,
    children: [et, K || J ? null : z]
  }), [et, K, J, z]), er = !!U, ei = (0, m.A)(S), {
    canJoin: ea,
    remoteJoinPlatform: eo
  } = (0, O.h)({
    presenceActivity: W,
    currentUserPresenceActivity: Y,
    currentUserId: j,
    message: b,
    application: S,
    isEmbeddedApplication: G,
    isFrameApplication: ei,
    isGameLaunchable: er
  }), es = (0, O.p)(W, Y, b, S), el = (0, v.L)(W, b, S, j), ec = (0, T.g)(Y, W), eu = (0, s.e7)([E.Z], () => null != W && null != W.application_id && E.Z.getState(W.application_id, D.mFx.JOIN) === D.OcF.LOADING), ed = i.useMemo(() => ea ? [{
    label: L.intl.string(L.t.VJlc0S),
    trackingArea: _.j_.JOIN,
    submitting: eu,
    onClick: () => {
      var e, t;
      u.Z.join({
        userId: b.author.id,
        sessionId: W.session_id,
        applicationId: W.application_id,
        channelId: R.id,
        messageId: b.id,
        source: D.Sbl.MESSAGE_EMBED,
        analyticsLocations: q,
        embedded: (0, A.Z)(W, D.xjy.EMBEDDED),
        remotePartyId: null != eo ? null == (e = W.party) ? true : e.id : true
      }), (0, C.Z)({
        type: D.q5t.JOIN,
        source: D.Sbl.MESSAGE_EMBED,
        userId: b.author.id,
        guildId: R.guild_id,
        channelId: R.id,
        applicationId: W.application_id,
        partyId: null == (t = W.party) ? true : t.id,
        messageId: b.id,
        analyticsLocations: q,
        remoteJoinPlatform: eo
      })
    }
  }] : es ? [{
    label: L.intl.string(L.t.VJlc0S),
    trackingArea: _.j_.SYNC,
    onClick: () => {
      null != W && d.Z_(W, b.author.id)
    }
  }] : el ? [{
    label: L.intl.string(L.t["hC/Zey"]),
    trackingArea: _.j_.INVITE,
    onClick: () => {
      null != W && c.Z.sendActivityInvite({
        type: D.mFx.JOIN,
        channelId: R.id,
        activity: W,
        location: D.Sbl.MESSAGE_EMBED
      })
    },
    disabled: b.author.id === j,
    disabledReason: b.author.id === j ? L.intl.string(L.t.IBl8ID) : true
  }] : ec ? [{
    label: L.intl.string(L.t.KC26NR),
    trackingArea: _.j_.PLAY,
    onClick: () => {},
    disabled: true
  }] : null != B ? [B] : [], [ea, es, el, ec, B, b.author.id, b.id, W, R.id, R.guild_id, q, eo, j, eu]), ef = ed.some(e => e.trackingArea === _.j_.CLOUD_PLAY);
  (0, P.Z)(ef, q);
  let e_ = i.useMemo(() => ec ? null : (0, r.jsx)(M, {
    presenceActivity: W,
    remoteJoinPlatform: eo
  }), [ec, W, eo]);
  return (0, r.jsx)(f.W, {
    header: k,
    title: N,
    staticBannerSrc: Z,
    onClickBanner: F,
    bannerAspectRatio: f.u.ACTIVITY,
    iconSrc: null != V ? V : true,
    info: en,
    actions: ed,
    onClickContent: F,
    trackingConfig: {
      id: S.id,
      linkType: w.U.RICH_PRESENCE_INVITE,
      onView: H,
      referrerId: b.author.id,
      guildId: R.guild_id,
      channelId: b.channel_id,
      messageId: b.id
    },
    footer: e_
  })
}