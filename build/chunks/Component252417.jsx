/** Chunk was on 1268 **/
/** chunk id: 252417, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  let {
    user: t,
    status: h,
    guildId: g,
    channelId: P,
    onSelect: w
  } = e, {
    theme: Z,
    themeType: N
  } = (0, f.z)(), S = i.useMemo(() => t.isNonUserBot() || (0, m.W)(t, P), [t, P]), {
    activities: k,
    isMobileOnline: C
  } = (0, a.cj)([b.Z], () => ({
    activities: b.Z.getActivities(t.id),
    isMobileOnline: b.Z.isMobileOnline(t.id)
  })), E = (0, p.Z)(t.id), {
    voiceActivityStatusEnabled: M
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: I
  } = (0, u.Z)({
    userId: M ? t.id : true,
    guildId: g
  });
  return (0, n.jsxs)(l.P3F, {
    focusProps: N === v.l.MODAL_V2 ? {
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
    className: x.row,
    onClick: w,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("70274"), r.e("79695"), r.e("69220"), r.e("92522")]).then(r.bind(r, 881351));
        return r => {
          var i, a;
          return (0, n.jsx)(e, (i = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, r), a = a = {
            user: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
          }), i))
        }
      })
    },
    children: [(0, n.jsx)(l.qEK, {
      src: t.getAvatarURL(g, O),
      "aria-label": t.username,
      size: y,
      status: S ? j.Skl.UNKNOWN : h,
      statusBackdropColor: S ? true : (0, l.QFD)(Z),
      isMobile: C,
      className: x.avatar
    }), (0, n.jsxs)("div", {
      className: x.details,
      children: [(0, n.jsx)(s.Z, {
        user: t,
        className: x.tag,
        discriminatorClass: x.discriminator
      }), (0, n.jsx)(d.Z, {
        user: t,
        activities: k,
        applicationStream: E,
        voiceChannel: I
      })]
    })]
  })
}