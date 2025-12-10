/** Chunk was on web.js **/
/** chunk id: 328886, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./539854.js");
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
  Chunk368176 = require("./368176.js"),
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
    currentPlatform: x.M7m.DESKTOP
  }), l = i.useMemo(() => a.map(e => {
    switch (e) {
      case R.Ol.MOBILE:
        return (0, r.jsx)(c.AtH, {
          size: "xxs",
          color: "currentColor"
        });
      case R.Ol.ANDROID:
        return (0, r.jsx)(D.j, {
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
  }).filter(O.lm), [a]);
  if (!(null != n || l.length > 0)) return null;
  let u = null != n ? (0, A.V)(n) : j.intl.string(j.t["4dGUP0"]);
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

function U(e) {
  var t, n, o;
  let {
    message: s,
    application: O,
    applicationName: A,
    channel: R,
    header: D,
    currentUserId: U,
    launchableAppId: G,
    isEmbeddedApplication: Z,
    tryWithGdnAction: B,
    staticBannerSrc: F,
    onClickContent: V,
    iconSrc: H,
    onView: Y,
    presenceActivity: W,
    currentUserPresenceActivity: K,
    hideParty: z,
    partyStatusElement: q,
    analyticsLocations: Q,
    showAuthButton: X,
    startAuthorization: J
  } = e, {
    enabled: $
  } = m.Q.useConfig({
    location: "rich_presence_game_invite"
  }), ee = null != (o = null == W || null == (t = W.timestamps) ? true : t.start) ? o : null == W ? true : W.created_at, et = i.useMemo(() => {
    var e;
    return null != ee ? (0, r.jsxs)("div", {
      className: M.timestampContainer,
      children: [(0, r.jsx)(c.iWm, {
        size: "xxs",
        color: $ ? c.TVs.colors.ICON_FEEDBACK_POSITIVE : "currentColor"
      }), (0, r.jsx)(h.x3, {
        entry: {
          start: ee,
          end: null == W || null == (e = W.timestamps) ? true : e.end
        },
        textColor: "currentColor",
        textTabularNumbers: false,
        textFontCode: false
      })]
    }) : null
  }, [ee, null == W || null == (n = W.timestamps) ? true : n.end, $]), en = (0, T.H)(s), er = (0, b.N)(O.id), ei = i.useMemo(() => er.some(e => (0, g.ig)(e) === a.o.GLOBAL) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.YqE, {
      size: "xxs",
      color: "currentColor"
    }), j.intl.string(j.t.TsWCdW)]
  }) : null, [er]), ea = i.useMemo(() => (0, r.jsxs)(c.Text, {
    variant: "text-xs/normal",
    className: M.tagline,
    color: "none",
    lineClamp: 2,
    children: [en ? (0, v.$v)(s, A, R, U, false) : et, en ? null : ei]
  }), [en, s, A, R, U, et, ei]), eo = i.useMemo(() => (0, r.jsxs)("div", {
    className: M.info,
    children: [ea, z || en ? null : q]
  }), [ea, z, en, q]), es = !!G, el = (0, E.A)(O), {
    canJoin: ec,
    remoteJoinPlatform: eu
  } = (0, S.h)({
    presenceActivity: W,
    currentUserPresenceActivity: K,
    currentUserId: U,
    message: s,
    application: O,
    isEmbeddedApplication: Z,
    isFrameApplication: el,
    isGameLaunchable: es
  }), ed = (0, S.p)(W, K, s, O), ef = (0, I.L)(W, s, O, U), ep = (0, C.g)(K, W), e_ = (0, l.e7)([y.Z], () => null != W && null != W.application_id && y.Z.getState(W.application_id, x.mFx.JOIN) === x.OcF.LOADING), em = i.useMemo(() => {
    let e = null,
      t = true;
    ec ? e = {
      label: j.intl.string(j.t.VJlc0S),
      trackingArea: _.j_.JOIN,
      submitting: e_,
      onClick: () => {
        var e, t;
        d.Z.join({
          userId: s.author.id,
          sessionId: W.session_id,
          applicationId: W.application_id,
          channelId: R.id,
          messageId: s.id,
          source: x.Sbl.MESSAGE_EMBED,
          analyticsLocations: Q,
          embedded: (0, N.Z)(W, x.xjy.EMBEDDED),
          remotePartyId: null != eu ? null == (e = W.party) ? true : e.id : true
        }), (0, P.Z)({
          type: x.q5t.JOIN,
          source: x.Sbl.MESSAGE_EMBED,
          userId: s.author.id,
          guildId: R.guild_id,
          channelId: R.id,
          applicationId: W.application_id,
          partyId: null == (t = W.party) ? true : t.id,
          messageId: s.id,
          analyticsLocations: Q,
          remoteJoinPlatform: eu
        })
      }
    } : ed ? (e = {
      label: j.intl.string(j.t.VJlc0S),
      trackingArea: _.j_.SYNC,
      onClick: () => {
        null != W && f.Z_(W, s.author.id)
      }
    }, t = false) : ef ? e = {
      label: j.intl.string(j.t["hC/Zey"]),
      trackingArea: _.j_.INVITE,
      onClick: () => {
        null != W && u.Z.sendActivityInvite({
          type: x.mFx.JOIN,
          channelId: R.id,
          activity: W,
          location: x.Sbl.MESSAGE_EMBED
        })
      },
      disabled: s.author.id === U,
      disabledReason: s.author.id === U ? j.intl.string(j.t.IBl8ID) : true
    } : ep ? e = {
      label: j.intl.string(j.t.KC26NR),
      trackingArea: _.j_.PLAY,
      onClick: () => {},
      disabled: true
    } : null != B && (e = B, t = false);
    let n = [];
    return null != e && (n.push(e), X && t && n.push({
      label: j.intl.string(j.t.lw71Nf),
      trackingArea: _.j_.CONNECT_ACCOUNT,
      onClick: () => {
        J({
          analyticsLocations: Q
        })
      },
      icon: c.uIJ,
      iconButton: true
    })), n
  }, [ec, ed, ef, ep, B, s.author.id, s.id, W, R.id, R.guild_id, Q, eu, U, e_, X, J]), eh = em.some(e => e.trackingArea === _.j_.CLOUD_PLAY);
  (0, w.Z)(eh, Q);
  let eg = i.useMemo(() => ep ? null : (0, r.jsx)(k, {
    presenceActivity: W,
    remoteJoinPlatform: eu
  }), [ep, W, eu]);
  return (0, r.jsx)(p.W, {
    header: D,
    title: A,
    staticBannerSrc: F,
    onClickBanner: V,
    bannerAspectRatio: p.u.ACTIVITY,
    iconSrc: null != H ? H : true,
    info: eo,
    actions: em,
    primaryActionFirst: true,
    onClickContent: V,
    trackingConfig: {
      id: O.id,
      linkType: L.U.RICH_PRESENCE_INVITE,
      onView: Y,
      referrerId: s.author.id,
      guildId: R.guild_id,
      channelId: s.channel_id,
      messageId: s.id
    },
    footer: eg
  })
}