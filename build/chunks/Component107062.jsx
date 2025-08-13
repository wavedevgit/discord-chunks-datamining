/** Chunk was on web.js **/
/** chunk id: 107062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => D
}), require("./804061.js"), require("./704826.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456100 = require("./456100.js"),
  Chunk620662 = require("./620662.js"),
  Chunk841784 = require("./841784.js"),
  Chunk429589 = require("./429589.jsx"),
  Chunk499254 = require("./499254.js"),
  Chunk827498 = require("./827498.js"),
  Chunk541716 = require("./541716.js"),
  Chunk706454 = require("./706454.js"),
  Chunk823379 = require("./823379.js"),
  Chunk5192 = require("./5192.js"),
  Chunk379357 = require("./379357.js"),
  Chunk192918 = require("./192918.js"),
  Chunk561308 = require("./561308.js"),
  Chunk907152 = require("./907152.js"),
  Chunk206295 = require("./206295.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk591853 = require("./591853.jsx"),
  Chunk797342 = require("./797342.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}
let R = (e, t) => A.intl.formatToPlainString(A.t.tAwI1t, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  P = (e, t, n) => {
    let r = A.t["bES+y8"],
      i = m.ZP.getName(t.guild_id, t.id, n),
      o = e.extra.activity_name;
    return A.intl.formatToMarkdownString(r, {
      gameName: o,
      userName: i
    }).replaceAll("*", "")
  },
  w = e => {
    let {
      entry: t,
      channel: n,
      users: r,
      countOthers: i
    } = e, o = A.t["7j/5mp"];
    return A.intl.formatToMarkdownString(o, {
      gameName: t.extra.activity_name,
      user1: m.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[0]),
      user2: m.ZP.getName(null == n ? true : n.guild_id, null == n ? true : n.id, r[1]),
      countOthers: i
    }).replaceAll("*", "")
  },
  D = e => {
    let {
      channel: t,
      entry: n,
      onReaction: m,
      onVoiceChannelPreview: N,
      disableActivityProfileLinks: D
    } = e, {
      largeImage: L
    } = (0, g.rv)({
      entry: n,
      showCoverImage: false
    }), {
      user: x,
      details: M,
      activity: k,
      embeddedActivity: j
    } = (0, T.n)(n), {
      primaryColor: U,
      secondaryColor: G
    } = (0, O.Z)(null == L ? true : L.src), B = (0, o.e7)([p.default], () => p.default.locale), {
      displayParticipants: Z,
      participant1: F,
      participant2: V,
      numOtherParticipants: H
    } = (0, E.Z)(n, 3), Y = () => {
      d.__(f._b.TEXT, _.Ie.NORMAL, {
        applicationId: n.extra.application_id
      })
    }, W = i.useCallback(e => {
      if ((null == L ? true : L.src) == null || null == t || null == x) return;
      let r = H > 0 ? w({
        entry: n,
        channel: t,
        users: [F, V],
        countOthers: H
      }) : P(n, t, x);
      return (0, y.C4)({
        entry: n,
        applicationImageSrc: null == L ? true : L.src,
        avatarSrcs: Z.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, b.yh)(n, B),
        colors: [U, G],
        channelId: e
      })
    }, [null == L ? true : L.src, t, Z, n, B, H, F, V, U, G, x]), {
      enabled: K
    } = s.c.useExperiment({
      location: "MemberListAcitivtyContentPopout"
    }, {
      autoTrackExposure: true
    });
    if (null == x) return null;
    let z = (0, r.jsx)(v.PZ, {
        location: v.Gt.POPOUT,
        entry: n
      }),
      q = (0, r.jsx)(I.wG, {
        channel: t,
        userDescription: (0, b.kr)(n) ? A.t.vPg1JS : A.t.rPqqtr,
        title: n.extra.activity_name,
        subtitle: M,
        badges: z,
        entry: n,
        showCoverImage: false,
        onClickTitle: D ? true : Y,
        onClickSubtitle: D ? true : Y,
        onClickThumbnail: D ? true : Y
      }),
      X = (0, l.Z)(k, S.xjy.JOIN) || (0, c.Z)(k),
      Q = X ? (0, r.jsx)(u.Z, {
        embeddedActivity: j,
        activity: k,
        user: x,
        ButtonComponent: e => (0, r.jsx)(I.Ll, C({
          IconComponent: a.YVR
        }, e))
      }) : null,
      J = K ? a.iWm : a.jje,
      $ = D ? null : (0, r.jsx)(I.Ll, {
        onClick: Y,
        IconComponent: J,
        children: A.intl.string(A.t.GDWYR0)
      }),
      ee = [X && !D ? Q : $].filter(h.lm);
    return (0, r.jsxs)(I.yR, {
      children: [q, (0, r.jsx)(I.St, {
        children: (0, r.jsx)(I.WT, {
          onReaction: m,
          onVoiceChannelPreview: N,
          user: x,
          channel: t,
          generateReactionImage: W,
          reactionImageAltText: R(n, x),
          entry: n,
          buttons: ee
        })
      })]
    })
  }