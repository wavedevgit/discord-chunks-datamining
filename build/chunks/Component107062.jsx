/** Chunk was on web.js **/
/** chunk id: 107062, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => x
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

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let w = (e, t) => A.intl.formatToPlainString(A.t.tAwI1t, {
    username: t.username,
    activity: e.extra.activity_name
  }),
  D = (e, t, n) => {
    let r = A.t["bES+y8"],
      i = m.ZP.getName(t.guild_id, t.id, n),
      o = e.extra.activity_name;
    return A.intl.formatToMarkdownString(r, {
      gameName: o,
      userName: i
    }).replaceAll("*", "")
  },
  L = e => {
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
  x = e => {
    let {
      channel: t,
      entry: n,
      onReaction: m,
      onVoiceChannelPreview: N,
      disableActivityProfileLinks: P
    } = e, {
      largeImage: x
    } = (0, g.rv)({
      entry: n,
      showCoverImage: false
    }), {
      user: M,
      details: j,
      activity: k,
      embeddedActivity: U
    } = (0, T.n)(n), {
      primaryColor: G,
      secondaryColor: B
    } = (0, O.Z)(null == x ? true : x.src), Z = (0, o.e7)([p.default], () => p.default.locale), {
      displayParticipants: F,
      participant1: V,
      participant2: H,
      numOtherParticipants: Y
    } = (0, E.Z)(n, 3), W = () => {
      d.__(f._b.TEXT, _.Ie.NORMAL, {
        applicationId: n.extra.application_id
      })
    }, K = i.useCallback(e => {
      if ((null == x ? true : x.src) == null || null == t || null == M) return;
      let r = Y > 0 ? L({
        entry: n,
        channel: t,
        users: [V, H],
        countOthers: Y
      }) : D(n, t, M);
      return (0, y.C4)({
        entry: n,
        applicationImageSrc: null == x ? true : x.src,
        avatarSrcs: F.map(e => e.getAvatarURL(t.guild_id, 128)),
        description: r,
        timestamp: (0, b.yh)(n, Z),
        colors: [G, B],
        channelId: e
      })
    }, [null == x ? true : x.src, t, F, n, Z, Y, V, H, G, B, M]), {
      enabled: z
    } = s.c.useExperiment({
      location: "MemberListAcitivtyContentPopout"
    }, {
      autoTrackExposure: true
    });
    if (null == M) return null;
    let q = (0, r.jsx)(v.PZ, {
        location: v.Gt.POPOUT,
        entry: n
      }),
      X = (0, r.jsx)(I.wG, {
        channel: t,
        userDescription: (0, b.kr)(n) ? A.t.vPg1JS : A.t.rPqqtr,
        title: n.extra.activity_name,
        subtitle: j,
        badges: q,
        entry: n,
        showCoverImage: false,
        onClickTitle: P ? true : W,
        onClickSubtitle: P ? true : W,
        onClickThumbnail: P ? true : W
      }),
      Q = (0, l.Z)(k, S.xjy.JOIN) || (0, c.Z)(k),
      J = Q ? (0, r.jsx)(u.Z, {
        embeddedActivity: U,
        activity: k,
        user: M,
        ButtonComponent: e => {
          let {
            children: t,
            size: n
          } = e, i = R(e, ["children", "size"]);
          return (0, r.jsx)(I.Ll, C({
            icon: a.YVR,
            text: t
          }, i))
        }
      }) : null,
      $ = z ? a.iWm : a.jje,
      ee = P ? null : (0, r.jsx)(I.Ll, {
        onClick: W,
        icon: $,
        text: A.intl.string(A.t.GDWYR0)
      }),
      et = [Q && !P ? J : ee].filter(h.lm);
    return (0, r.jsxs)(I.yR, {
      children: [X, (0, r.jsx)(I.St, {
        children: (0, r.jsx)(I.WT, {
          onReaction: m,
          onVoiceChannelPreview: N,
          user: M,
          channel: t,
          generateReactionImage: K,
          reactionImageAltText: w(n, M),
          entry: n,
          buttons: et
        })
      })]
    })
  }