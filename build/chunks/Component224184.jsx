/** Chunk was on 5665 **/
/** chunk id: 224184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk84709 = require("./84709.js");
let I = e => {
  let {
    hangStatusActivity: t,
    userId: l,
    channel: I,
    previewIsOpen: P,
    targetElementRef: Z
  } = e, {
    enableHangStatus: T
  } = y.n.useExperiment({
    guildId: I.guild_id,
    location: "HangStatusPopout"
  }), N = (0, o.e7)([p.default], () => p.default.getId()), A = (0, o.e7)([g.default], () => g.default.getUser(l)), w = (0, o.e7)([m.Z], () => m.Z.getChannelId() === I.id), R = (0, o.e7)([f.Z], () => f.Z.can(j.Plq.CONNECT, I)), M = (null == t ? true : t.emoji) == null || (0, x.K)(t.emoji, I), D = (0, o.e7)([h.ZP], () => null != I.guild_id && null != A ? h.ZP.getMember(I.guild_id, l) : null), L = i.useMemo(() => null != A ? (0, d.SG)(true, D, A, {
    size: 40
  }) : true, [D, A]);
  return (i.useEffect(() => {
    (0, _.UP)()
  }, []), i.useEffect(() => {
    T && null != t && P && null != A && N !== l && b.default.track(j.rMx.VIEW_HANG_STATUS, {
      source: "HangStatusPopout",
      guild_id: I.guild_id,
      channel_id: I.id
    })
  }, [T, t, P, A, N, l, I]), T && null != A) ? N === l ? (0, r.jsx)("div", {
    className: a()(S.popoutWrapper, {
      [S.mounted]: P
    }),
    children: (0, r.jsx)(O.v, {
      currentStatus: t,
      channel: I
    })
  }) : null == t ? null : (0, r.jsxs)(s.m, {
    position: "right",
    targetElementRef: Z,
    children: [(0, r.jsxs)("div", {
      className: S.contentContainer,
      children: [(0, r.jsxs)("div", {
        className: S.statusGroup,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: E.intl.string(E.t["74vS//"])
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          className: S.statusText,
          children: (0, C.O8)(t)
        })]
      }), (0, r.jsxs)("div", {
        className: S.iconGroup,
        children: [(0, r.jsx)(v.Z, {
          className: S.statusIcon,
          hangStatusActivity: t
        }), (0, r.jsxs)("div", {
          className: S.avatarWrapper,
          children: [(0, r.jsx)(c.qEK, {
            className: S.avatar,
            size: c.EFr.SIZE_40,
            src: L,
            "aria-hidden": true
          }), (0, r.jsx)("div", {
            className: S.outline
          })]
        })]
      })]
    }), !w && R ? (0, r.jsx)(c.zxk, {
      size: "sm",
      text: E.intl.string(E.t["B/dHXF"]),
      onClick: () => {
        !w && R && (u.default.selectVoiceChannel(I.id), b.default.track(j.rMx.HANG_STATUS_CTA_CLICKED, {
          source: "HangStatusPopout",
          guild_id: I.guild_id,
          channel_id: I.id
        }))
      }
    }) : null, w && M ? (0, r.jsx)(c.zxk, {
      size: "sm",
      text: E.intl.string(E.t.xcVcFR),
      onClick: () => {
        let e = t.state;
        e === j.tNA.CUSTOM ? (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("1631").then(n.bind(n, 333541));
          return n => {
            var i, l;
            return (0, r.jsx)(e, (i = function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                  r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                  var r;
                  r = n[t], t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  }) : e[t] = r
                })
              }
              return e
            }({}, n), l = l = {
              startingText: t.details,
              startingEmoji: t.emoji
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
              }
              return n
            })(Object(l)).forEach(function(e) {
              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
            }), i))
          }
        }) : (0, _.Zx)(e, true), b.default.track(j.rMx.SWIPE_HANG_STATUS, {
          guild_id: I.guild_id,
          channel_id: I.id,
          media_session_id: m.Z.getMediaSessionId()
        })
      }
    }) : null]
  }) : null
}