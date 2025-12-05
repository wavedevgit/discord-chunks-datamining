/** Chunk was on 84608 **/
/** chunk id: 252417, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk138182 = require("./138182.js"),
  Chunk956221 = require("./956221.js"),
  Chunk747017 = require("./747017.jsx"),
  Chunk140701 = require("./140701.js"),
  Chunk545957 = require("./545957.js"),
  Chunk158776 = require("./158776.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk671955 = require("./671955.js"),
  Chunk777267 = require("./777267.js");
let b = Chunk481060.EFr.SIZE_40,
  x = (0, Chunk481060.dcp)(b);

function O(e) {
  let {
    user: t,
    status: O,
    guildId: P,
    channelId: w,
    onSelect: y
  } = e, {
    theme: _,
    themeType: S
  } = (0, m.z)(), Z = n.useMemo(() => t.isNonUserBot() || (0, v.W)(t, w), [t, w]), {
    activities: E,
    isMobileOnline: I
  } = (0, a.cj)([h.Z], () => ({
    activities: h.Z.getActivities(t.id),
    isMobileOnline: h.Z.isMobileOnline(t.id)
  })), A = (0, f.Z)(t.id), {
    voiceActivityStatusEnabled: N
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: k
  } = (0, u.Z)({
    userId: N ? t.id : true,
    guildId: P
  });
  return (0, i.jsxs)(s.P3F, {
    focusProps: S === j.l.MODAL_V2 ? {
      offset: {
        top: 4,
        right: 4,
        left: 4
      }
    } : {
      offset: {
        right: 8
      }
    },
    className: g.row,
    onClick: y,
    onContextMenu: e => {
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("79695"), r.e("69220"), r.e("77635")]).then(r.bind(r, 881351));
        return r => {
          var n, a;
          return (0, i.jsx)(e, (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                i = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), i.forEach(function(t) {
                var i;
                i = r[t], t in e ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = i
              })
            }
            return e
          }({}, r), a = a = {
            user: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              r.push.apply(r, i)
            }
            return r
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
          }), n))
        }
      })
    },
    children: [(0, i.jsx)(s.qEK, {
      src: t.getAvatarURL(P, x),
      "aria-label": t.username,
      size: b,
      status: Z ? p.Skl.UNKNOWN : O,
      statusBackdropColor: Z ? true : (0, s.QFD)(_),
      isMobile: I,
      className: g.avatar
    }), (0, i.jsxs)("div", {
      className: g.details,
      children: [(0, i.jsx)(o.Z, {
        user: t,
        className: g.tag,
        discriminatorClass: g.discriminator
      }), (0, i.jsx)(d.Z, {
        user: t,
        activities: E,
        applicationStream: A,
        voiceChannel: k
      })]
    })]
  })
}