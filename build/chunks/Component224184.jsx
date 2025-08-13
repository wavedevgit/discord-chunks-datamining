/** Chunk was on web.js **/
/** chunk id: 224184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => D
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk920155 = require("./920155.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk287734 = require("./287734.js"),
  Chunk654904 = require("./654904.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk19780 = require("./19780.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk906605 = require("./906605.js"),
  Chunk574176 = require("./574176.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk625938 = require("./625938.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk337022 = require("./337022.js");

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
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = 40,
  D = e => {
    let {
      hangStatusActivity: t,
      userId: o,
      channel: N,
      previewIsOpen: R,
      targetElementRef: D
    } = e, {
      enableHangStatus: L
    } = b.n.useExperiment({
      guildId: N.guild_id,
      location: "HangStatusPopout"
    }), x = (0, s.e7)([f.default], () => f.default.getId()), M = (0, s.e7)([m.default], () => m.default.getUser(o)), k = (0, s.e7)([h.Z], () => h.Z.getChannelId() === N.id), j = (0, s.e7)([p.Z], () => p.Z.can(T.Plq.CONNECT, N)), U = (null == t ? true : t.emoji) == null || (0, O.K)(t.emoji, N), G = (0, s.e7)([_.ZP], () => null != N.guild_id && null != M ? _.ZP.getMember(N.guild_id, o) : null), B = i.useMemo(() => null != M ? (0, d.SG)(true, G, M, {
      size: w
    }) : true, [G, M]);
    i.useEffect(() => {
      (0, E.UP)()
    }, []);
    let Z = () => {
      !k && j && (u.default.selectVoiceChannel(N.id), g.default.track(T.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "HangStatusPopout",
        guild_id: N.guild_id,
        channel_id: N.id
      }))
    };
    if (i.useEffect(() => {
        L && null != t && R && null != M && x !== o && g.default.track(T.rMx.VIEW_HANG_STATUS, {
          source: "HangStatusPopout",
          guild_id: N.guild_id,
          channel_id: N.id
        })
      }, [L, t, R, M, x, o, N]), !L || null == M) return null;
    if (x === o) return (0, r.jsx)("div", {
      className: a()(A.popoutWrapper, {
        [A.mounted]: R
      }),
      children: (0, r.jsx)(I.v, {
        currentStatus: t,
        channel: N
      })
    });
    if (null == t) return null;
    let F = () => {
      let e = t.state;
      e === T.tNA.CUSTOM ? (0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("1631").then(n.bind(n, 333541));
        return n => (0, r.jsx)(e, P(C({}, n), {
          startingText: t.details,
          startingEmoji: t.emoji
        }))
      }) : (0, E.Zx)(e, true), g.default.track(T.rMx.SWIPE_HANG_STATUS, {
        guild_id: N.guild_id,
        channel_id: N.id,
        media_session_id: h.Z.getMediaSessionId()
      })
    };
    return (0, r.jsxs)(l.m, {
      position: "right",
      targetElementRef: D,
      children: [(0, r.jsxs)("div", {
        className: A.contentContainer,
        children: [(0, r.jsxs)("div", {
          className: A.statusGroup,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            children: S.intl.string(S.t["74vS//"])
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/semibold",
            className: A.statusText,
            children: (0, y.O8)(t)
          })]
        }), (0, r.jsxs)("div", {
          className: A.iconGroup,
          children: [(0, r.jsx)(v.Z, {
            className: A.statusIcon,
            hangStatusActivity: t
          }), (0, r.jsxs)("div", {
            className: A.avatarWrapper,
            children: [(0, r.jsx)(c.qEK, {
              className: A.avatar,
              size: c.EFr.SIZE_40,
              src: B,
              "aria-hidden": true
            }), (0, r.jsx)("div", {
              className: A.outline
            })]
          })]
        })]
      }), !k && j ? (0, r.jsx)(c.zxk, {
        size: "sm",
        text: S.intl.string(S.t["B/dHXF"]),
        onClick: Z
      }) : null, k && U ? (0, r.jsx)(c.zxk, {
        size: "sm",
        text: S.intl.string(S.t.xcVcFR),
        onClick: F
      }) : null]
    })
  }