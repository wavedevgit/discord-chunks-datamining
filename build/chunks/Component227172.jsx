/** Chunk was on web.js **/
/** chunk id: 227172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U,
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
  U = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: b,
      onReaction: y,
      onVoiceChannelPreview: U,
      onUserPopoutClosed: G,
      trackRankingItemInteraction: B
    } = e, {
      largeImage: Z
    } = (0, v.rv)({
      entry: n
    }), {
      user: F,
      details: V,
      appName: H,
      activity: Y,
      embeddedActivity: W
    } = (0, L.n)(n), {
      primaryColor: K,
      secondaryColor: z
    } = (0, R.Z)(null == Z ? true : Z.src), q = (0, o.e7)([E.default], () => E.default.locale), {
      streamPreviewUrl: X,
      stream: Q
    } = (0, T.Z)(n), {
      displayParticipants: J,
      participant1: $,
      participant2: ee,
      numOtherParticipants: et
    } = (0, I.Z)(n, 3), en = n.extra.platform, er = null != en ? k[en] : null, ei = en === a.z.XBOX ? j.ABu.XBOX : en === a.z.PLAYSTATION ? j.ABu.PLAYSTATION : true, ea = (0, N.Z)(ei), {
      data: eo
    } = (0, m.IX)(n.extra.application_id), es = (0, d.q)(eo, "MemberListGamingContentPopout"), el = (0, g.L)(Y, W), ec = i.useCallback(e => {
      if ((null == Z ? true : Z.src) == null || null == t || null == F) return;
      let r = et > 0 ? (0, C.VY)({
        entry: n,
        channel: t,
        users: [$, ee],
        countOthers: et
      }) : (0, C.HV)(n, t, F);
      return (0, A.SO)({
        entry: n,
        applicationImageSrc: null == Z ? true : Z.src,
        avatarSrcs: J.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, S.yh)(n, q),
        colors: [K, z],
        channelId: e
      })
    }, [null == Z ? true : Z.src, t, J, n, q, et, $, ee, K, z, F]);
    if (null == F) return null;
    let eu = (0, r.jsx)(w.Gk, {
        location: null == X ? w.Gt.POPOUT : w.Gt.STREAMING_POPOUT,
        children: P.W.map((e, t) => (0, r.jsx)(e, {
          entry: n
        }, t))
      }),
      ed = null == Q ? (0, r.jsx)(D.wG, {
        channel: t,
        headerIcons: null == er ? null : (0, r.jsx)(x.Z, {
          onClick: ea,
          Icon: er,
          "aria-label": M.intl.string(M.t.YR4cHB)
        }),
        userDescription: (0, S.kr)(n) ? M.t.vPg1JS : M.t.rPqqtr,
        title: H,
        subtitle: V,
        badges: eu,
        entry: n,
        disableGameProfileLinks: b,
        onUserPopoutClosed: G,
        trackRankingItemInteraction: B
      }) : (0, r.jsx)(D.jL, {
        channel: t,
        title: n.extra.game_name,
        subtitle: V,
        badges: eu,
        userDescription: M.t["6oWFUF"],
        entry: n,
        stream: Q,
        onUserPopoutClosed: G,
        trackRankingItemInteraction: B
      }),
      ef = !el && es ? (0, r.jsx)(f.Z, {
        application: eo,
        analyticsLocation: h.Z.MEMBER_LIST_GAMING_CONTENT_POPOUT
      }, "cloud-play") : null,
      e_ = [null == ef && ((0, l.Z)(Y, j.xjy.JOIN) || (0, c.Z)(Y)) ? (0, r.jsx)(_.Z, {
        activity: Y,
        user: F,
        variant: "primary",
        size: "md",
        icon: s.iWm
      }, "join") : null, (0, u.Z)(Y) ? (0, r.jsx)(p.Z, {
        activity: Y,
        size: "md",
        variant: "primary",
        icon: s.tEF
      }, "watch") : null, ef].filter(O.lm);
    return (0, r.jsxs)(D.yR, {
      children: [ed, (0, r.jsx)(D.St, {
        children: (0, r.jsx)(D.WT, {
          onReaction: y,
          onVoiceChannelPreview: U,
          user: F,
          channel: t,
          generateReactionImage: ec,
          reactionImageAltText: (0, C.IS)(n, F),
          entry: n,
          buttons: e_
        })
      })]
    })
  }