/** Chunk was on web.js **/
/** chunk id: 328886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk705512 = require("./705512.js"),
  Chunk657707 = require("./657707.js"),
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

function k(e) {
  let {
    presenceActivity: t,
    remoteJoinPlatform: n
  } = e, a = (0, R.Cx)({
    platforms: null == t ? true : t.supported_platforms,
    currentPlatform: w.M7m.DESKTOP
  }), l = i.useMemo(() => a.map(e => {
    switch (e) {
      case R.Ol.MOBILE:
        return (0, r.jsx)(c.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case R.Ol.ANDROID:
        return (0, r.jsx)(P.j, {
          width: s.Z.xxs,
          height: s.Z.xxs,
          color: "currentColor"
        });
      case R.Ol.IOS:
        return (0, r.jsx)(c.gLQ, {
          size: "xxs",
          color: "currentColor"
        });
      case R.Ol.PLAYSTATION:
        return (0, r.jsx)(c.Tsp, {
          size: "xxs",
          color: "currentColor"
        });
      case R.Ol.XBOX:
        return (0, r.jsx)(c.Mko, {
          size: "xxs",
          color: "currentColor"
        });
      case R.Ol.VR:
        return (0, r.jsx)(o.Pb9, {
          size: "xxs",
          color: "currentColor"
        });
      default:
        return null
    }
  }).filter(y.lm), [a]);
  if (!(null != n || l.length > 0)) return null;
  let u = null != n ? (0, A.V)(n) : x.intl.string(x.t["4dGUP0"]);
  return (0, r.jsxs)("div", {
    className: M.footer,
    children: [(0, r.jsx)("div", {
      className: M.footerSupportedPlatformIconsContainer,
      children: l.map((e, t) => (0, r.jsx)("div", {
        className: M.footerSupportedPlatformIconContainer,
        children: e
      }, t))
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "currentColor",
      className: M.footerSupportedPlatformText,
      children: u
    })]
  })
}

function j(e) {
  var t, n, o;
  let {
    message: s,
    application: y,
    applicationName: A,
    channel: R,
    header: P,
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
      className: M.timestampContainer,
      children: [(0, r.jsx)(c.iWm, {
        size: "xxs",
        color: "currentColor"
      }), (0, r.jsx)(h.x3, {
        entry: {
          start: X,
          end: null == W || null == (e = W.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [X, null == W || null == (n = W.timestamps) ? true : n.end]), J = (0, T.H)(s), $ = (0, E.N)(y.id), ee = i.useMemo(() => $.some(e => (0, m.ig)(e) === a.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.YqE, {
      size: "xxs",
      color: "currentColor"
    }), x.intl.string(x.t.TsWCdW)]
  }) : null, [$]), et = i.useMemo(() => (0, r.jsxs)(c.Text, {
    variant: "text-xs/normal",
    className: M.tagline,
    color: "none",
    lineClamp: 2,
    children: [J ? (0, O.$v)(s, A, R, j, false) : Q, J ? null : ee]
  }), [J, s, A, R, j, Q, ee]), en = i.useMemo(() => (0, r.jsxs)("div", {
    className: M.info,
    children: [et, K || J ? null : z]
  }), [et, K, J, z]), er = !!U, ei = (0, g.A)(y), {
    canJoin: ea,
    remoteJoinPlatform: eo
  } = (0, v.h)({
    presenceActivity: W,
    currentUserPresenceActivity: Y,
    currentUserId: j,
    message: s,
    application: y,
    isEmbeddedApplication: G,
    isFrameApplication: ei,
    isGameLaunchable: er
  }), es = (0, v.p)(W, Y, s, y), el = (0, I.L)(W, s, y, j), ec = (0, S.g)(Y, W), eu = (0, l.e7)([b.Z], () => null != W && null != W.application_id && b.Z.getState(W.application_id, w.mFx.JOIN) === w.OcF.LOADING), ed = i.useMemo(() => ea ? [{
    label: x.intl.string(x.t.VJlc0S),
    trackingArea: p.j_.JOIN,
    submitting: eu,
    onClick: () => {
      var e, t;
      d.Z.join({
        userId: s.author.id,
        sessionId: W.session_id,
        applicationId: W.application_id,
        channelId: R.id,
        messageId: s.id,
        source: w.Sbl.MESSAGE_EMBED,
        analyticsLocations: q,
        embedded: (0, C.Z)(W, w.xjy.EMBEDDED),
        remotePartyId: null != eo ? null == (e = W.party) ? true : e.id : true
      }), (0, N.Z)({
        type: w.q5t.JOIN,
        source: w.Sbl.MESSAGE_EMBED,
        userId: s.author.id,
        guildId: R.guild_id,
        channelId: R.id,
        applicationId: W.application_id,
        partyId: null == (t = W.party) ? true : t.id,
        messageId: s.id,
        analyticsLocations: q,
        remoteJoinPlatform: eo
      })
    }
  }] : es ? [{
    label: x.intl.string(x.t.VJlc0S),
    trackingArea: p.j_.SYNC,
    onClick: () => {
      null != W && f.Z_(W, s.author.id)
    }
  }] : el ? [{
    label: x.intl.string(x.t["hC/Zey"]),
    trackingArea: p.j_.INVITE,
    onClick: () => {
      null != W && u.Z.sendActivityInvite({
        type: w.mFx.JOIN,
        channelId: R.id,
        activity: W,
        location: w.Sbl.MESSAGE_EMBED
      })
    },
    disabled: s.author.id === j,
    disabledReason: s.author.id === j ? x.intl.string(x.t.IBl8ID) : true
  }] : ec ? [{
    label: x.intl.string(x.t.KC26NR),
    trackingArea: p.j_.PLAY,
    onClick: () => {},
    disabled: true
  }] : null != B ? [B] : [], [ea, es, el, ec, B, s.author.id, s.id, W, R.id, R.guild_id, q, eo, j, eu]), ef = ed.some(e => e.trackingArea === p.j_.CLOUD_PLAY);
  (0, D.Z)(ef, q);
  let e_ = i.useMemo(() => ec ? null : (0, r.jsx)(k, {
    presenceActivity: W,
    remoteJoinPlatform: eo
  }), [ec, W, eo]);
  return (0, r.jsx)(_.W, {
    header: P,
    title: A,
    staticBannerSrc: Z,
    onClickBanner: F,
    bannerAspectRatio: _.u.ACTIVITY,
    iconSrc: null != V ? V : true,
    info: en,
    actions: ed,
    onClickContent: F,
    trackingConfig: {
      id: y.id,
      linkType: L.U.RICH_PRESENCE_INVITE,
      onView: H,
      referrerId: s.author.id,
      guildId: R.guild_id,
      channelId: s.channel_id,
      messageId: s.id
    },
    footer: e_
  })
}