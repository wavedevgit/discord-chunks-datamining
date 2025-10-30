/** Chunk was on 58829 **/
/** chunk id: 252417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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
  Chunk788485 = require("./788485.js");
let j = Chunk481060.EFr.SIZE_40,
  y = (0, Chunk481060.pxk)(j);

function g(e) {
  let {
    user: t,
    status: g,
    guildId: x,
    channelId: O,
    onSelect: k
  } = e, {
    theme: Z,
    themeType: P
  } = (0, p.z)(), C = i.useMemo(() => t.isNonUserBot() || (0, b.W)(t, O), [t, O]), {
    activities: S,
    isMobileOnline: w
  } = (0, o.cj)([_.Z], () => ({
    activities: _.Z.getActivities(t.id),
    isMobileOnline: _.Z.isMobileOnline(t.id)
  })), E = (0, f.Z)(t.id), {
    voiceActivityStatusEnabled: I
  } = (0, s.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: A
  } = (0, d.Z)({
    userId: I ? t.id : true,
    guildId: x
  });
  return (0, r.jsxs)(a.P3F, {
    focusProps: P === v.l.MODAL_V2 ? {
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
    className: m.row,
    onClick: k,
    onContextMenu: e => {
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
        return n => {
          var i, o;
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
          }({}, n), o = o = {
            user: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
          }), i))
        }
      })
    },
    children: [(0, r.jsx)(a.qEK, {
      src: t.getAvatarURL(x, y),
      "aria-label": t.username,
      size: j,
      status: C ? h.Skl.UNKNOWN : g,
      statusBackdropColor: C ? true : (0, a.QFD)(Z),
      isMobile: w,
      className: m.avatar
    }), (0, r.jsxs)("div", {
      className: m.details,
      children: [(0, r.jsx)(c.Z, {
        user: t,
        className: m.tag,
        discriminatorClass: m.discriminator
      }), (0, r.jsx)(u.Z, {
        user: t,
        activities: S,
        applicationStream: E,
        voiceChannel: A
      })]
    })]
  })
}