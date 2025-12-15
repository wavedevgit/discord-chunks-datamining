/** Chunk was on web.js **/
/** chunk id: 493387, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk907862 = require("./907862.js"),
  Chunk481060 = require("./481060.js"),
  Chunk783097 = require("./783097.js"),
  Chunk335670 = require("./335670.js"),
  Chunk951106 = require("./951106.js"),
  Chunk524995 = require("./524995.js"),
  Chunk812206 = require("./812206.js"),
  Chunk914498 = require("./914498.js"),
  Chunk515344 = require("./515344.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk171516 = require("./171516.js"),
  Chunk77498 = require("./77498.js"),
  Chunk375954 = require("./375954.js"),
  Chunk81063 = require("./81063.js"),
  Chunk768581 = require("./768581.js"),
  Chunk758371 = require("./758371.js"),
  Chunk994339 = require("./994339.js"),
  Chunk866449 = require("./866449.js"),
  Chunk206074 = require("./206074.js"),
  Chunk77603 = require("./77603.js"),
  Chunk732067 = require("./732067.jsx"),
  Chunk328886 = require("./328886.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx");

function x(e, t) {
  var n;
  let r = (0, b.h)(e),
    i = (0, a.e7)([p.Z, y.Z], () => {
      let t = p.Z.getApplication(e);
      return null != t ? y.Z.getGameByApplication(t) : null
    }, [e]);
  return {
    openGameProfileModal: (0, E.Z)({
      location: "Rich Presence Activity Invite Embed",
      applicationId: null != (n = null == i ? true : i.id) ? n : true,
      source: g.m1.Embed,
      trackEntryPointImpression: true,
      sourceUserId: t
    }),
    launchableAppId: r
  }
}

function L(e, t) {
  var n, r, i, a;
  let {
    bot: o
  } = t, s = (null == (n = e.activity) ? true : n.icon_override) != null ? (0, v.xF)(t.id, null == (r = e.activity) ? true : r.icon_override) : null;
  return {
    iconSrc: null != s ? s : S.ZP.getApplicationIconURL({
      id: t.id,
      icon: t.icon,
      bot: o
    }),
    name: null != (a = null == (i = e.activity) ? true : i.name_override) ? a : t.name
  }
}

function j(e) {
  var t, n;
  let {
    analyticsLocations: p,
    application: g,
    channel: E,
    currentUserId: b,
    currentUserPresenceActivity: y,
    hideParty: v,
    message: S,
    onView: j,
    partyStatusElement: M,
    presenceActivity: k
  } = e, U = (0, c.ye)(g), {
    iconSrc: G,
    name: Z
  } = L(S, g), F = null != (n = (0, N.v)({
    messageId: S.id,
    presenceActivity: k,
    application: g
  })) ? n : true, {
    openGameProfileModal: B,
    launchableAppId: V
  } = x(g.id, S.author.id), H = (0, A.Z)({
    application: g,
    analyticsLocations: p
  }), Y = i.useMemo(() => {
    if (null != H) return {
      label: D.intl.string(D.t["jaYS/h"]),
      icon: l.v3n,
      trackingArea: _.j_.CLOUD_PLAY,
      onClick: H
    }
  }, [H]), W = (0, m.G)(g), K = i.useMemo(() => null != B ? B : null != W && U ? W : true, [U, B, W]), z = u.Z.useConfig({
    location: "RichPresenceGameActivityInviteEmbed"
  }), {
    canStartAuthorization: q,
    hasAlreadyLinked: Q,
    startAuthorization: X
  } = (0, f.F)(g), J = (0, d.K)(X, Q), $ = !(0, T.Z)(k, S, g.id), ee = (0, I.dQ)(Z, null == (t = S.activity) ? true : t.type, $), et = i.useRef(null), en = (0, a.e7)([O.Z], () => O.Z.getMessages(E.id)), er = () => {
    let e = [];
    return (0, C.c)(S.id, en) && q && !Q && z.enabled && e.push(o.z.GAME_INVITE_ACCOUNT_LINK_UPSELL), (0, r.jsx)(h.ZP, {
      contentTypes: e,
      children: e => {
        let {
          visibleContent: t,
          markAsDismissed: n
        } = e;
        if (t === o.z.GAME_INVITE_ACCOUNT_LINK_UPSELL) return (0, r.jsx)(s.J2, {
          graphic: {
            type: "dynamic",
            component: l.P3w.ACCOUNT_LINK_DISPLAY,
            props: {
              application: g
            }
          },
          title: D.intl.formatToPlainString(D.t["lo6H6+"], {
            gameName: g.name
          }),
          body: D.intl.string(D.t.qYAzOp),
          targetElementRef: et,
          caretConfig: {
            align: "start"
          },
          shouldShow: true,
          gradientColor: "purple",
          onRequestClose: () => n(w.L.USER_DISMISS)
        })
      }
    })
  };
  return $ ? (0, r.jsx)(P.Z, {
    message: S,
    application: g,
    applicationName: Z,
    channel: E,
    header: ee,
    currentUserId: b,
    launchableAppId: V,
    isEmbeddedApplication: U,
    tryWithGdnAction: Y,
    staticBannerSrc: F,
    onClickContent: K,
    iconSrc: G,
    onView: j,
    presenceActivity: k,
    analyticsLocations: p,
    showAuthButton: q && !Q && z.enabled,
    startAuthorization: J,
    accountLinkButtonRef: et,
    renderAccountLinkUpsell: er
  }) : (0, r.jsx)(R.Z, {
    message: S,
    application: g,
    applicationName: Z,
    channel: E,
    header: ee,
    currentUserId: b,
    launchableAppId: V,
    isEmbeddedApplication: U,
    tryWithGdnAction: Y,
    staticBannerSrc: F,
    onClickContent: K,
    iconSrc: G,
    onView: j,
    presenceActivity: k,
    currentUserPresenceActivity: y,
    hideParty: v,
    partyStatusElement: M,
    analyticsLocations: p,
    showAuthButton: q && !Q && z.enabled,
    startAuthorization: J,
    accountLinkButtonRef: et,
    renderAccountLinkUpsell: er
  })
}