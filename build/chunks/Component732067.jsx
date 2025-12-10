/** Chunk was on web.js **/
/** chunk id: 732067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./539854.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk758199 = require("./758199.jsx"),
  Chunk914498 = require("./914498.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk942951 = require("./942951.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk375954 = require("./375954.js"),
  Chunk758371 = require("./758371.js"),
  Chunk810008 = require("./810008.js"),
  Chunk691991 = require("./691991.js"),
  Chunk967249 = require("./967249.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk837262 = require("./837262.js"),
  Chunk520816 = require("./520816.js");

function I(e) {
  let {
    message: t,
    applicationName: n,
    iconSrc: i,
    channel: a,
    currentUserId: s,
    viewAction: c
  } = e, u = (0, p.ZP)(t), d = (0, _.l)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  })(u);
  return (0, r.jsx)(m.Z, {
    compact: false,
    children: O.intl.format(s === t.author.id ? O.t.anvg2q : O.t.AxVbYF, {
      username: u.nick,
      usernameHook: d,
      applicationHook: () => {
        let e = null != c ? l.Anchor : "div";
        return (0, r.jsxs)(e, {
          onClick: c,
          className: v.inlineApplicationText,
          children: [(0, r.jsx)("img", {
            alt: O.intl.string(O.t["2B/phM"]),
            src: i,
            className: o()(S.gameIcon, f.A.XSMALL)
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            children: n
          })]
        })
      }
    })
  })
}

function T(e) {
  let {
    message: t,
    application: n,
    applicationName: a,
    channel: o,
    header: f,
    currentUserId: p,
    launchableAppId: _,
    isEmbeddedApplication: m,
    tryWithGdnAction: S,
    staticBannerSrc: T,
    onClickContent: C,
    iconSrc: A,
    onView: N,
    presenceActivity: P,
    analyticsLocations: R,
    showAuthButton: D,
    startAuthorization: w
  } = e, x = (0, s.e7)([h.Z], () => h.Z.getMessages(o.id)), L = i.useMemo(() => {
    let e = [],
      r = true;
    return (null != _ ? e = [{
      label: O.intl.string(O.t["s+J8Dl"]),
      trackingArea: d.j_.PLAY,
      isDeadEnd: true,
      onClick: () => {
        c.Z.launch({
          applicationId: _,
          embedded: m
        })
      }
    }] : null != S && (e = [S], r = false), D && r && e.push({
      label: O.intl.string(O.t.lw71Nf),
      trackingArea: d.j_.CONNECT_ACCOUNT,
      onClick: () => {
        w({
          analyticsLocations: R
        })
      },
      icon: l.uIJ,
      iconButton: true
    }), e.length > 0 && !(0, E.b)(t.id, x, n.id, P)) ? [] : e
  }, [m, _, S, x, P, n.id, t.id, D, w, R]), j = L.some(e => e.trackingArea === d.j_.CLOUD_PLAY);
  (0, b.Z)(j, R);
  let M = L.length > 0,
    k = i.useMemo(() => (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: v.description,
      color: "none",
      lineClamp: 3,
      children: (0, g.wR)(t, a, o, p, M)
    }), [t, a, o, p, M]);
  return 0 === L.length ? (0, r.jsx)(I, {
    message: t,
    applicationName: a,
    iconSrc: A,
    channel: o,
    currentUserId: p,
    viewAction: C
  }) : (0, r.jsx)(u.W, {
    header: f,
    title: a,
    staticBannerSrc: T,
    onClickBanner: C,
    bannerAspectRatio: u.u.ACTIVITY,
    iconSrc: null != A ? A : true,
    info: k,
    actions: L,
    primaryActionFirst: true,
    onClickContent: C,
    trackingConfig: {
      id: n.id,
      linkType: y.U.RICH_PRESENCE_INVITE,
      onView: N,
      referrerId: t.author.id,
      guildId: o.guild_id,
      channelId: t.channel_id,
      messageId: t.id,
      isDeadEnd: true
    }
  })
}