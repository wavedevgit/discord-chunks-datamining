/** Chunk was on 56710 **/
/** chunk id: 252417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
let y = Chunk481060.EFr.SIZE_40,
  O = (0, Chunk481060.pxk)(y);

function v(e) {
  let {
    user: t,
    status: v,
    guildId: j,
    channelId: C,
    onSelect: x
  } = e, {
    theme: E,
    themeType: S
  } = (0, g.z)(), I = i.useMemo(() => t.isNonUserBot() || (0, p.W)(t, C), [t, C]), {
    activities: P,
    isMobileOnline: N
  } = (0, l.cj)([f.Z], () => ({
    activities: f.Z.getActivities(t.id),
    isMobileOnline: f.Z.isMobileOnline(t.id)
  })), Z = (0, h.Z)(t.id), {
    voiceActivityStatusEnabled: w
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: T
  } = (0, u.Z)({
    userId: w ? t.id : true,
    guildId: j
  });
  return (0, r.jsxs)(o.P3F, {
    focusProps: S === b.l.MODAL_V2 ? {
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
    className: _.row,
    onClick: x,
    onContextMenu: e => {
      (0, a.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
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
            user: t
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
      })
    },
    children: [(0, r.jsx)(o.qEK, {
      src: t.getAvatarURL(j, O),
      "aria-label": t.username,
      size: y,
      status: I ? m.Skl.UNKNOWN : v,
      statusBackdropColor: I ? true : (0, o.QFD)(E),
      isMobile: N,
      className: _.avatar
    }), (0, r.jsxs)("div", {
      className: _.details,
      children: [(0, r.jsx)(s.Z, {
        user: t,
        className: _.tag,
        discriminatorClass: _.discriminator
      }), (0, r.jsx)(d.Z, {
        user: t,
        activities: P,
        applicationStream: Z,
        voiceChannel: T
      })]
    })]
  })
}