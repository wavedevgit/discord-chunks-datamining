/** Chunk was on web.js **/
/** chunk id: 732067, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./953529.js");
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

function T(e) {
  let {
    message: t,
    applicationName: n,
    iconSrc: i,
    channel: a,
    currentUserId: s,
    viewAction: c
  } = e, u = (0, _.ZP)(t), d = (0, p.l)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  })(u);
  return (0, r.jsx)(h.Z, {
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
            className: o()(I.gameIcon, f.A.XSMALL)
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

function S(e) {
  let {
    message: t,
    application: n,
    applicationName: a,
    channel: o,
    header: f,
    currentUserId: _,
    launchableAppId: p,
    isEmbeddedApplication: h,
    tryWithGdnAction: I,
    staticBannerSrc: S,
    onClickContent: A,
    iconSrc: C,
    onView: N,
    presenceActivity: R,
    analyticsLocations: P
  } = e, D = (0, s.e7)([m.Z], () => m.Z.getMessages(o.id)), w = i.useMemo(() => {
    let e = [];
    return (null != p ? e = [{
      label: O.intl.string(O.t["s+J8Dl"]),
      trackingArea: d.j_.PLAY,
      isDeadEnd: true,
      onClick: () => {
        c.Z.launch({
          applicationId: p,
          embedded: h
        })
      }
    }] : null != I && (e = [I]), e.length > 0 && !(0, E.b)(t.id, D, n.id, R)) ? [] : e
  }, [h, p, I, D, R, n.id, t.id]), L = w.some(e => e.trackingArea === d.j_.CLOUD_PLAY);
  (0, b.Z)(L, P);
  let x = w.length > 0,
    M = i.useMemo(() => (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: v.description,
      color: "none",
      lineClamp: 3,
      children: (0, g.wR)(t, a, o, _, x)
    }), [t, a, o, _, x]);
  return 0 === w.length ? (0, r.jsx)(T, {
    message: t,
    applicationName: a,
    iconSrc: C,
    channel: o,
    currentUserId: _,
    viewAction: A
  }) : (0, r.jsx)(u.W, {
    header: f,
    title: a,
    staticBannerSrc: S,
    onClickBanner: A,
    bannerAspectRatio: u.u.ACTIVITY,
    iconSrc: null != C ? C : true,
    info: M,
    actions: w,
    onClickContent: A,
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