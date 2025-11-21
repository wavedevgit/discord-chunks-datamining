/** Chunk was on web.js **/
/** chunk id: 227172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U,
  v: () => k
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk100527 = require("./100527.js"),
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
  Chunk159862 = require("./159862.jsx"),
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
  U = e => {
    var t, n;
    let {
      channel: b,
      entry: y,
      disableGameProfileLinks: U,
      onReaction: G,
      onVoiceChannelPreview: B,
      onUserPopoutClosed: Z,
      trackRankingItemInteraction: F
    } = e, {
      largeImage: V
    } = (0, v.rv)({
      entry: y
    }), {
      user: H,
      details: Y,
      appName: W,
      activity: K,
      embeddedActivity: z
    } = (0, x.n)(y), {
      primaryColor: q,
      secondaryColor: X
    } = (0, R.Z)(null == V ? true : V.src), Q = (0, o.e7)([E.default], () => E.default.locale), {
      streamPreviewUrl: J,
      stream: $
    } = (0, T.Z)(y), {
      displayParticipants: ee,
      participant1: et,
      participant2: en,
      numOtherParticipants: er
    } = (0, I.Z)(y, 3), ei = y.extra.platform, ea = null != ei ? k[ei] : null, eo = ei === a.z.XBOX ? M.ABu.XBOX : ei === a.z.PLAYSTATION ? M.ABu.PLAYSTATION : true, es = (0, N.Z)(eo), {
      data: el
    } = (0, m.IX)(y.extra.application_id), ec = (0, d.q)(el), eu = (0, g.L)(null != (n = null != (t = null == K ? true : K.application_id) ? t : null == z ? true : z.applicationId) ? n : null == el ? true : el.id), ed = i.useCallback(e => {
      if ((null == V ? true : V.src) == null || null == b || null == H) return;
      let t = er > 0 ? (0, C.VY)({
        entry: y,
        channel: b,
        users: [et, en],
        countOthers: er
      }) : (0, C.HV)(y, b, H);
      return (0, A.SO)({
        entry: y,
        applicationImageSrc: null == V ? true : V.src,
        avatarSrcs: ee.map(e => e.getAvatarURL(b.guild_id, 128)),
        description: t,
        timestamp: (0, S.yh)(y, Q),
        colors: [q, X],
        channelId: e
      })
    }, [null == V ? true : V.src, b, ee, y, Q, er, et, en, q, X, H]);
    if (null == H) return null;
    let ef = (0, r.jsx)(D.Gk, {
        location: null == J ? D.Gt.POPOUT : D.Gt.STREAMING_POPOUT,
        children: P.W.map((e, t) => (0, r.jsx)(e, {
          entry: y
        }, t))
      }),
      e_ = null == $ ? (0, r.jsx)(w.wG, {
        channel: b,
        headerIcons: null == ea ? null : (0, r.jsx)(L.Z, {
          onClick: es,
          Icon: ea,
          "aria-label": j.intl.string(j.t.YR4cHH)
        }),
        userDescription: (0, S.kr)(y) ? j.t.vPg1JT : j.t.rPqqts,
        title: W,
        subtitle: Y,
        badges: ef,
        entry: y,
        disableGameProfileLinks: U,
        onUserPopoutClosed: Z,
        trackRankingItemInteraction: F
      }) : (0, r.jsx)(w.jL, {
        channel: b,
        title: y.extra.game_name,
        subtitle: Y,
        badges: ef,
        userDescription: j.t["6oWFUN"],
        entry: y,
        stream: $,
        onUserPopoutClosed: Z,
        trackRankingItemInteraction: F
      }),
      ep = !eu && ec ? (0, r.jsx)(f.Z, {
        application: el,
        analyticsLocation: h.Z.MEMBER_LIST_GAMING_CONTENT_POPOUT
      }, "cloud-play") : null,
      eh = [null == ep && ((0, l.Z)(K, M.xjy.JOIN) || (0, c.Z)(K)) ? (0, r.jsx)(_.Z, {
        activity: K,
        user: H,
        variant: "primary",
        size: "md",
        icon: s.iWm
      }, "join") : null, (0, u.Z)(K) ? (0, r.jsx)(p.Z, {
        activity: K,
        size: "md",
        variant: "primary",
        icon: s.tEF
      }, "watch") : null, ep].filter(O.lm);
    return (0, r.jsxs)(w.yR, {
      children: [e_, (0, r.jsx)(w.St, {
        children: (0, r.jsx)(w.WT, {
          onReaction: G,
          onVoiceChannelPreview: B,
          user: H,
          channel: b,
          generateReactionImage: ed,
          reactionImageAltText: (0, C.IS)(y, H),
          entry: y,
          buttons: eh
        })
      })]
    })
  }