/** Chunk was on 92917 **/
/** chunk id: 444901, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./321073.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function E(e) {
  let {
    message: t,
    applicationName: n,
    iconSrc: i,
    channel: l,
    currentUserId: s,
    viewAction: c
  } = e, u = (0, m.Ay)(t), d = (0, f.P)({
    user: t.author,
    channelId: l.id,
    guildId: l.guild_id,
    messageId: t.id
  })(u);
  return (0, r.jsx)(g.A, {
    compact: false,
    children: v.intl.format(s === t.author.id ? v.t.anvg2q : v.t.AxVbYF, {
      username: u.nick,
      usernameHook: d,
      applicationHook: () => {
        let e = null != c ? o.MzZ : "div";
        return (0, r.jsxs)(e, {
          onClick: c,
          className: x.Lf,
          children: [(0, r.jsx)("img", {
            alt: v.intl.string(v.t["2B/phM"]),
            src: i,
            className: a()(O.Gt, p.M.XSMALL)
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            children: n
          })]
        })
      }
    })
  })
}

function j(e) {
  let {
    message: t,
    application: n,
    applicationName: l,
    channel: a,
    header: p,
    currentUserId: m,
    launchableAppId: f,
    isEmbeddedApplication: g,
    tryWithGdnAction: O,
    staticBannerSrc: j,
    onClickContent: C,
    iconSrc: I,
    onView: S,
    presenceActivity: T,
    analyticsLocations: N,
    showAuthButton: P,
    startAuthorization: w,
    accountLinkButtonRef: R,
    renderAccountLinkUpsell: D
  } = e, L = (0, s.bG)([h.A], () => h.A.getMessages(a.id)), {
    actions: M,
    hasAccountLinkButton: k
  } = i.useMemo(() => {
    let e = [],
      r = true,
      i = false;
    if (null != f ? e = [{
        label: v.intl.string(v.t["s+J8Dl"]),
        trackingArea: d.kY.PLAY,
        isDeadEnd: true,
        onClick: () => {
          c.A.launch({
            applicationId: f,
            embedded: g
          })
        }
      }] : null != O && (e = [O], r = false), e.length > 0)
      if (!(0, b.p)(t.id, L, n.id, T)) return {
        actions: [],
        hasAccountLinkButton: false
      };
      else P && r && (e.push({
        label: v.intl.string(v.t.lw71Nf),
        trackingArea: d.kY.CONNECT_ACCOUNT,
        onClick: () => {
          w({
            analyticsLocations: N
          })
        },
        icon: o.A5T,
        iconButton: true,
        buttonRef: R
      }), i = true);
    return {
      actions: e,
      hasAccountLinkButton: i
    }
  }, [g, f, O, L, T, n.id, t.id, P, w, N, R]), U = M.some(e => e.trackingArea === d.kY.CLOUD_PLAY);
  (0, A.A)(U, N);
  let G = M.length > 0,
    B = i.useMemo(() => (0, r.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: x.h_,
      color: "none",
      lineClamp: 3,
      children: (0, _.BE)(t, l, a, m, G)
    }), [t, l, a, m, G]);
  return 0 === M.length ? (0, r.jsx)(E, {
    message: t,
    applicationName: l,
    iconSrc: I,
    channel: a,
    currentUserId: m,
    viewAction: C
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.h, {
      header: p,
      title: l,
      staticBannerSrc: j,
      onClickBanner: C,
      bannerAspectRatio: u.u.ACTIVITY,
      iconSrc: null != I ? I : true,
      info: B,
      actions: M,
      primaryActionFirst: true,
      onClickContent: C,
      trackingConfig: {
        id: n.id,
        linkType: y.J.RICH_PRESENCE_INVITE,
        onView: S,
        referrerId: t.author.id,
        guildId: a.guild_id,
        channelId: t.channel_id,
        messageId: t.id,
        isDeadEnd: true
      }
    }), k ? D() : null]
  })
}