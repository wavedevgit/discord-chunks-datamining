/** Chunk was on web.js **/
/** chunk id: 227172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M,
  v: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk758713 = require("./758713.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk420660 = require("./420660.js"),
  Chunk206074 = require("./206074.js"),
  Chunk145843 = require("./145843.jsx"),
  Chunk429589 = require("./429589.jsx"),
  Chunk757182 = require("./757182.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk584057 = require("./584057.js"),
  Chunk706454 = require("./706454.js"),
  Chunk374129 = require("./374129.jsx"),
  Chunk639351 = require("./639351.jsx"),
  Chunk823379 = require("./823379.js"),
  Chunk379357 = require("./379357.js"),
  Chunk192918 = require("./192918.js"),
  Chunk22211 = require("./22211.js"),
  Chunk561308 = require("./561308.js"),
  Chunk919394 = require("./919394.js"),
  Chunk438226 = require("./438226.js"),
  Chunk31074 = require("./31074.js"),
  Chunk206295 = require("./206295.js"),
  Chunk91140 = require("./91140.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk591853 = require("./591853.jsx"),
  Chunk410441 = require("./410441.jsx"),
  Chunk797342 = require("./797342.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let k = {
    [Chunk758713.z.DESKTOP]: null,
    [Chunk758713.z.LINUX]: null,
    [Chunk758713.z.MACOS]: null,
    [Chunk758713.z.NINTENDO]: null,
    [Chunk758713.z.IOS]: null,
    [Chunk758713.z.ANDROID]: null,
    [Chunk758713.z.XBOX]: Chunk639351.Z,
    [Chunk758713.z.PLAYSTATION]: Chunk374129.Z
  },
  M = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: E,
      onReaction: b,
      onVoiceChannelPreview: M,
      onUserPopoutClosed: U,
      trackRankingItemInteraction: G
    } = e, {
      largeImage: B
    } = (0, O.rv)({
      entry: n
    }), {
      user: Z,
      details: F,
      appName: V,
      activity: H,
      embeddedActivity: Y
    } = (0, x.n)(n), {
      primaryColor: W,
      secondaryColor: K
    } = (0, N.Z)(null == B ? true : B.src), z = (0, o.e7)([g.default], () => g.default.locale), {
      streamPreviewUrl: q,
      stream: X
    } = (0, I.Z)(n), {
      displayParticipants: Q,
      participant1: J,
      participant2: $,
      numOtherParticipants: ee
    } = (0, v.Z)(n, 3), et = n.extra.platform, en = null != et ? k[et] : null, er = et === a.z.XBOX ? L.ABu.XBOX : et === a.z.PLAYSTATION ? L.ABu.PLAYSTATION : true, ei = (0, C.Z)(er), {
      data: ea
    } = (0, h.IX)(n.extra.application_id), eo = (0, d.q)(ea, "MemberListGamingContentPopout"), es = (0, m.L)(H, Y), el = i.useCallback(e => {
      if ((null == B ? true : B.src) == null || null == t || null == Z) return;
      let r = ee > 0 ? (0, A.VY)({
        entry: n,
        channel: t,
        users: [J, $],
        countOthers: ee
      }) : (0, A.HV)(n, t, Z);
      return (0, S.SO)({
        entry: n,
        applicationImageSrc: null == B ? true : B.src,
        avatarSrcs: Q.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, T.yh)(n, z),
        colors: [W, K],
        channelId: e
      })
    }, [null == B ? true : B.src, t, Q, n, z, ee, J, $, W, K, Z]);
    if (null == Z) return null;
    let ec = (0, r.jsx)(P.Gk, {
        location: null == q ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
        children: R.W.map((e, t) => (0, r.jsx)(e, {
          entry: n
        }, t))
      }),
      eu = null == X ? (0, r.jsx)(w.wG, {
        channel: t,
        headerIcons: null == en ? null : (0, r.jsx)(D.Z, {
          onClick: ei,
          Icon: en,
          "aria-label": j.intl.string(j.t.YR4cHB)
        }),
        userDescription: (0, T.kr)(n) ? j.t.vPg1JS : j.t.rPqqtr,
        title: V,
        subtitle: F,
        badges: ec,
        entry: n,
        disableGameProfileLinks: E,
        onUserPopoutClosed: U,
        trackRankingItemInteraction: G
      }) : (0, r.jsx)(w.jL, {
        channel: t,
        title: n.extra.game_name,
        subtitle: F,
        badges: ec,
        userDescription: j.t["6oWFUF"],
        entry: n,
        stream: X,
        onUserPopoutClosed: U,
        trackRankingItemInteraction: G
      }),
      ed = !es && eo ? (0, r.jsx)(f.Z, {
        application: ea,
        location: "MemberListGamingContentPopout"
      }, "cloud-play") : null,
      ef = [null == ed && ((0, l.Z)(H, L.xjy.JOIN) || (0, c.Z)(H)) ? (0, r.jsx)(_.Z, {
        activity: H,
        user: Z,
        variant: "primary",
        size: "md",
        icon: s.iWm
      }, "join") : null, (0, u.Z)(H) ? (0, r.jsx)(p.Z, {
        activity: H,
        size: "md",
        variant: "primary",
        icon: s.tEF
      }, "watch") : null, ed].filter(y.lm);
    return (0, r.jsxs)(w.yR, {
      children: [eu, (0, r.jsx)(w.St, {
        children: (0, r.jsx)(w.WT, {
          onReaction: b,
          onVoiceChannelPreview: M,
          user: Z,
          channel: t,
          generateReactionImage: el,
          reactionImageAltText: (0, A.IS)(n, Z),
          entry: n,
          buttons: ef
        })
      })]
    })
  }