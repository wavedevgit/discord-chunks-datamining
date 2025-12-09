/** Chunk was on 82082 **/
/** chunk id: 252417, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
let g = Chunk481060.EFr.SIZE_40,
  O = (0, Chunk481060.dcp)(g);

function x(e) {
  let {
    user: t,
    status: x,
    guildId: y,
    channelId: w,
    onSelect: _
  } = e, {
    theme: P,
    themeType: S
  } = (0, m.z)(), Z = n.useMemo(() => t.isNonUserBot() || (0, f.W)(t, w), [t, w]), {
    activities: E,
    isMobileOnline: A
  } = (0, a.cj)([p.Z], () => ({
    activities: p.Z.getActivities(t.id),
    isMobileOnline: p.Z.isMobileOnline(t.id)
  })), I = (0, v.Z)(t.id), {
    voiceActivityStatusEnabled: N
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: M
  } = (0, u.Z)({
    userId: N ? t.id : true,
    guildId: y
  });
  return (0, i.jsxs)(o.P3F, {
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
    className: b.row,
    onClick: _,
    onContextMenu: e => {
      (0, s.jW)(e, async () => {
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
    children: [(0, i.jsx)(o.qEK, {
      src: t.getAvatarURL(y, O),
      "aria-label": t.username,
      size: g,
      status: Z ? h.Skl.UNKNOWN : x,
      statusBackdropColor: Z ? true : (0, o.QFD)(P),
      isMobile: A,
      className: b.avatar
    }), (0, i.jsxs)("div", {
      className: b.details,
      children: [(0, i.jsx)(l.Z, {
        user: t,
        className: b.tag,
        discriminatorClass: b.discriminator
      }), (0, i.jsx)(d.Z, {
        user: t,
        activities: E,
        applicationStream: I,
        voiceChannel: M
      })]
    })]
  })
}