/** Chunk was on web.js **/
/** chunk id: 444901, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk572211 = require("./572211.jsx"),
  Chunk354287 = require("./354287.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk447215 = require("./447215.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk320501 = require("./320501.js"),
  Chunk456060 = require("./456060.js"),
  Chunk472590 = require("./472590.js"),
  Chunk878831 = require("./878831.js"),
  Chunk768349 = require("./768349.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk609653 = require("./609653.js"),
  Chunk103467 = require("./103467.js");

function S(e) {
  let {
    message: t,
    applicationName: n,
    iconSrc: i,
    channel: a,
    currentUserId: o,
    viewAction: c
  } = e, u = (0, p.Ay)(t), d = (0, _.P)({
    user: t.author,
    channelId: a.id,
    guildId: a.guild_id,
    messageId: t.id
  })(u);
  return (0, r.jsx)(h.A, {
    compact: false,
    children: O.intl.format(o === t.author.id ? O.t.anvg2q : O.t.AxVbYF, {
      username: u.nick,
      usernameHook: d,
      applicationHook: () => {
        let e = null != c ? l.MzZ : "div";
        return (0, r.jsxs)(e, {
          onClick: c,
          className: A.Lf,
          children: [(0, r.jsx)("img", {
            alt: O.intl.string(O.t["2B/phM"]),
            src: i,
            className: s()(v.Gt, f.M.XSMALL)
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

function I(e) {
  let {
    message: t,
    application: n,
    applicationName: a,
    channel: s,
    header: f,
    currentUserId: p,
    launchableAppId: _,
    isEmbeddedApplication: h,
    tryWithGdnAction: v,
    staticBannerSrc: I,
    onClickContent: T,
    iconSrc: C,
    onView: N,
    presenceActivity: R,
    analyticsLocations: w,
    showAuthButton: P,
    startAuthorization: D,
    accountLinkButtonRef: x,
    renderAccountLinkUpsell: L
  } = e, j = (0, o.bG)([m.A], () => m.A.getMessages(s.id)), {
    actions: M,
    hasAccountLinkButton: k
  } = i.useMemo(() => {
    let e = [],
      r = true,
      i = false;
    if (null != _ ? e = [{
        label: O.intl.string(O.t["s+J8Dl"]),
        trackingArea: d.kY.PLAY,
        isDeadEnd: true,
        onClick: () => {
          c.A.launch({
            applicationId: _,
            embedded: h
          })
        }
      }] : null != v && (e = [v], r = false), e.length > 0)
      if (!(0, E.p)(t.id, j, n.id, R)) return {
        actions: [],
        hasAccountLinkButton: false
      };
      else P && r && (e.push({
        label: O.intl.string(O.t.lw71Nf),
        trackingArea: d.kY.CONNECT_ACCOUNT,
        onClick: () => {
          D({
            analyticsLocations: w
          })
        },
        icon: l.A5T,
        iconButton: true,
        buttonRef: x
      }), i = true);
    return {
      actions: e,
      hasAccountLinkButton: i
    }
  }, [h, _, v, j, R, n.id, t.id, P, D, w, x]), U = M.some(e => e.trackingArea === d.kY.CLOUD_PLAY);
  (0, b.A)(U, w);
  let G = M.length > 0,
    V = i.useMemo(() => (0, r.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: A.h_,
      color: "none",
      lineClamp: 3,
      children: (0, g.BE)(t, a, s, p, G)
    }), [t, a, s, p, G]);
  return 0 === M.length ? (0, r.jsx)(S, {
    message: t,
    applicationName: a,
    iconSrc: C,
    channel: s,
    currentUserId: p,
    viewAction: T
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.h, {
      header: f,
      title: a,
      staticBannerSrc: I,
      onClickBanner: T,
      bannerAspectRatio: u.u.ACTIVITY,
      iconSrc: null != C ? C : true,
      info: V,
      actions: M,
      primaryActionFirst: true,
      onClickContent: T,
      trackingConfig: {
        id: n.id,
        linkType: y.J.RICH_PRESENCE_INVITE,
        onView: N,
        referrerId: t.author.id,
        guildId: s.guild_id,
        channelId: t.channel_id,
        messageId: t.id,
        isDeadEnd: true
      }
    }), k ? L() : null]
  })
}