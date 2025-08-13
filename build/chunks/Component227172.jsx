/** Chunk was on web.js **/
/** chunk id: 227172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G,
  v: () => U
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}
let U = {
    [Chunk758713.z.DESKTOP]: null,
    [Chunk758713.z.LINUX]: null,
    [Chunk758713.z.MACOS]: null,
    [Chunk758713.z.NINTENDO]: null,
    [Chunk758713.z.IOS]: null,
    [Chunk758713.z.ANDROID]: null,
    [Chunk758713.z.XBOX]: Chunk639351.Z,
    [Chunk758713.z.PLAYSTATION]: Chunk374129.Z
  },
  G = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: E,
      onReaction: b,
      onVoiceChannelPreview: j,
      onUserPopoutClosed: G,
      trackRankingItemInteraction: B
    } = e, {
      largeImage: Z
    } = (0, O.rv)({
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
    } = (0, C.Z)(null == Z ? true : Z.src), q = (0, a.e7)([g.default], () => g.default.locale), {
      streamPreviewUrl: X,
      stream: Q
    } = (0, I.Z)(n), {
      displayParticipants: J,
      participant1: $,
      participant2: ee,
      numOtherParticipants: et
    } = (0, v.Z)(n, 3), en = n.extra.platform, er = null != en ? U[en] : null, ei = en === o.z.XBOX ? x.ABu.XBOX : en === o.z.PLAYSTATION ? x.ABu.PLAYSTATION : true, eo = (0, N.Z)(ei), {
      data: ea
    } = (0, h.IX)(n.extra.application_id), es = (0, d.q)(ea, "MemberListGamingContentPopout"), el = (0, m.L)(Y, W), ec = i.useCallback(e => {
      if ((null == Z ? true : Z.src) == null || null == t || null == F) return;
      let r = et > 0 ? (0, A.VY)({
        entry: n,
        channel: t,
        users: [$, ee],
        countOthers: et
      }) : (0, A.HV)(n, t, F);
      return (0, S.SO)({
        entry: n,
        applicationImageSrc: null == Z ? true : Z.src,
        avatarSrcs: J.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, T.yh)(n, q),
        colors: [K, z],
        channelId: e
      })
    }, [null == Z ? true : Z.src, t, J, n, q, et, $, ee, K, z, F]);
    if (null == F) return null;
    let eu = (0, r.jsx)(P.Gk, {
        location: null == X ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
        children: R.W.map((e, t) => (0, r.jsx)(e, {
          entry: n
        }, t))
      }),
      ed = null == Q ? (0, r.jsx)(w.wG, {
        channel: t,
        headerIcons: null == er ? null : (0, r.jsx)(D.Z, {
          onClick: eo,
          Icon: er,
          "aria-label": M.intl.string(M.t.YR4cHB)
        }),
        userDescription: (0, T.kr)(n) ? M.t.vPg1JS : M.t.rPqqtr,
        title: H,
        subtitle: V,
        badges: eu,
        entry: n,
        disableGameProfileLinks: E,
        onUserPopoutClosed: G,
        trackRankingItemInteraction: B
      }) : (0, r.jsx)(w.jL, {
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
        application: ea,
        ButtonComponent: e => (0, r.jsx)(w.Ll, k({
          IconComponent: s.v3n
        }, e)),
        location: "MemberListGamingContentPopout"
      }) : null,
      e_ = [null == ef && ((0, l.Z)(Y, x.xjy.JOIN) || (0, c.Z)(Y)) ? (0, r.jsx)(_.Z, {
        activity: Y,
        user: F,
        ButtonComponent: e => (0, r.jsx)(w.Ll, k({
          IconComponent: s.iWm
        }, e))
      }) : null, (0, u.Z)(Y) ? (0, r.jsx)(p.Z, {
        activity: Y,
        ButtonComponent: e => (0, r.jsx)(w.Ll, k({
          IconComponent: s.tEF
        }, e))
      }) : null, ef].filter(y.lm);
    return (0, r.jsxs)(w.yR, {
      children: [ed, (0, r.jsx)(w.St, {
        children: (0, r.jsx)(w.WT, {
          onReaction: b,
          onVoiceChannelPreview: j,
          user: F,
          channel: t,
          generateReactionImage: ec,
          reactionImageAltText: (0, A.IS)(n, F),
          entry: n,
          buttons: e_
        })
      })]
    })
  }