/** Chunk was on 90320 **/
/** chunk id: 252417, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => P
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  O = (0, Chunk481060.pxk)(b);

function P(e) {
  let {
    user: t,
    status: P,
    guildId: I,
    channelId: x,
    onSelect: y
  } = e, {
    theme: w,
    themeType: S
  } = (0, m.z)(), E = s.useMemo(() => t.isNonUserBot() || (0, f.W)(t, x), [t, x]), {
    activities: _,
    isMobileOnline: N
  } = (0, a.cj)([p.Z], () => ({
    activities: p.Z.getActivities(t.id),
    isMobileOnline: p.Z.isMobileOnline(t.id)
  })), k = (0, h.Z)(t.id), {
    voiceActivityStatusEnabled: Z
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: F
  } = (0, u.Z)({
    userId: Z ? t.id : true,
    guildId: I
  });
  return (0, i.jsxs)(l.P3F, {
    focusProps: S === g.l.MODAL_V2 ? {
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
    className: j.row,
    onClick: y,
    onContextMenu: e => {
      (0, n.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("79695"), r.e("69220")]).then(r.bind(r, 881351));
        return r => {
          var s, a;
          return (0, i.jsx)(e, (s = function(e) {
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
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              r.push.apply(r, i)
            }
            return r
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(a, e))
          }), s))
        }
      })
    },
    children: [(0, i.jsx)(l.qEK, {
      src: t.getAvatarURL(I, O),
      "aria-label": t.username,
      size: b,
      status: E ? v.Skl.UNKNOWN : P,
      statusBackdropColor: E ? true : (0, l.QFD)(w),
      isMobile: N,
      className: j.avatar
    }), (0, i.jsxs)("div", {
      className: j.details,
      children: [(0, i.jsx)(o.Z, {
        user: t,
        className: j.tag,
        discriminatorClass: j.discriminator
      }), (0, i.jsx)(d.Z, {
        user: t,
        activities: _,
        applicationStream: k,
        voiceChannel: F
      })]
    })]
  })
}