/** Chunk was on web.js **/
/** chunk id: 227172, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Z,
  v: () => B
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

function M(e, t, n) {
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
      M(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  if (null == e) return {};
  var n, r, i = G(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function G(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let B = {
    [Chunk758713.z.DESKTOP]: null,
    [Chunk758713.z.LINUX]: null,
    [Chunk758713.z.MACOS]: null,
    [Chunk758713.z.NINTENDO]: null,
    [Chunk758713.z.IOS]: null,
    [Chunk758713.z.ANDROID]: null,
    [Chunk758713.z.XBOX]: Chunk639351.Z,
    [Chunk758713.z.PLAYSTATION]: Chunk374129.Z
  },
  Z = e => {
    let {
      channel: t,
      entry: n,
      disableGameProfileLinks: E,
      onReaction: b,
      onVoiceChannelPreview: M,
      onUserPopoutClosed: G,
      trackRankingItemInteraction: Z
    } = e, {
      largeImage: V
    } = (0, O.rv)({
      entry: n
    }), {
      user: F,
      details: H,
      appName: Y,
      activity: W,
      embeddedActivity: K
    } = (0, x.n)(n), {
      primaryColor: z,
      secondaryColor: q
    } = (0, N.Z)(null == V ? true : V.src), X = (0, o.e7)([g.default], () => g.default.locale), {
      streamPreviewUrl: Q,
      stream: J
    } = (0, I.Z)(n), {
      displayParticipants: $,
      participant1: ee,
      participant2: et,
      numOtherParticipants: en
    } = (0, v.Z)(n, 3), er = n.extra.platform, ei = null != er ? B[er] : null, ea = er === a.z.XBOX ? L.ABu.XBOX : er === a.z.PLAYSTATION ? L.ABu.PLAYSTATION : true, eo = (0, C.Z)(ea), {
      data: es
    } = (0, h.IX)(n.extra.application_id), el = (0, d.q)(es, "MemberListGamingContentPopout"), ec = (0, m.L)(W, K), eu = i.useCallback(e => {
      if ((null == V ? true : V.src) == null || null == t || null == F) return;
      let r = en > 0 ? (0, A.VY)({
        entry: n,
        channel: t,
        users: [ee, et],
        countOthers: en
      }) : (0, A.HV)(n, t, F);
      return (0, S.SO)({
        entry: n,
        applicationImageSrc: null == V ? true : V.src,
        avatarSrcs: $.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, T.yh)(n, X),
        colors: [z, q],
        channelId: e
      })
    }, [null == V ? true : V.src, t, $, n, X, en, ee, et, z, q, F]);
    if (null == F) return null;
    let ed = (0, r.jsx)(P.Gk, {
        location: null == Q ? P.Gt.POPOUT : P.Gt.STREAMING_POPOUT,
        children: R.W.map((e, t) => (0, r.jsx)(e, {
          entry: n
        }, t))
      }),
      ef = null == J ? (0, r.jsx)(w.wG, {
        channel: t,
        headerIcons: null == ei ? null : (0, r.jsx)(D.Z, {
          onClick: eo,
          Icon: ei,
          "aria-label": j.intl.string(j.t.YR4cHB)
        }),
        userDescription: (0, T.kr)(n) ? j.t.vPg1JS : j.t.rPqqtr,
        title: Y,
        subtitle: H,
        badges: ed,
        entry: n,
        disableGameProfileLinks: E,
        onUserPopoutClosed: G,
        trackRankingItemInteraction: Z
      }) : (0, r.jsx)(w.jL, {
        channel: t,
        title: n.extra.game_name,
        subtitle: H,
        badges: ed,
        userDescription: j.t["6oWFUF"],
        entry: n,
        stream: J,
        onUserPopoutClosed: G,
        trackRankingItemInteraction: Z
      }),
      e_ = !ec && el ? (0, r.jsx)(f.Z, {
        application: es,
        ButtonComponent: e => {
          let {
            children: t,
            size: n
          } = e, i = U(e, ["children", "size"]);
          return (0, r.jsx)(w.Ll, k({
            icon: s.v3n,
            text: t
          }, i))
        },
        location: "MemberListGamingContentPopout"
      }) : null,
      ep = [null == e_ && ((0, l.Z)(W, L.xjy.JOIN) || (0, c.Z)(W)) ? (0, r.jsx)(_.Z, {
        activity: W,
        user: F,
        ButtonComponent: e => {
          let {
            children: t,
            size: n
          } = e, i = U(e, ["children", "size"]);
          return (0, r.jsx)(w.Ll, k({
            icon: s.iWm,
            text: t
          }, i))
        }
      }) : null, (0, u.Z)(W) ? (0, r.jsx)(p.Z, {
        activity: W,
        ButtonComponent: e => {
          let {
            children: t,
            size: n
          } = e, i = U(e, ["children", "size"]);
          return (0, r.jsx)(w.Ll, k({
            icon: s.tEF,
            text: t
          }, i))
        }
      }) : null, e_].filter(y.lm);
    return (0, r.jsxs)(w.yR, {
      children: [ef, (0, r.jsx)(w.St, {
        children: (0, r.jsx)(w.WT, {
          onReaction: b,
          onVoiceChannelPreview: M,
          user: F,
          channel: t,
          generateReactionImage: eu,
          reactionImageAltText: (0, A.IS)(n, F),
          entry: n,
          buttons: ep
        })
      })]
    })
  }