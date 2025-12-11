/** Chunk was on 85032 **/
/** chunk id: 252417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
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
  Chunk580784 = require("./580784.js");
let O = Chunk481060.EFr.SIZE_40,
  v = (0, Chunk481060.dcp)(O);

function j(e) {
  let {
    user: t,
    status: j,
    guildId: x,
    channelId: P,
    onSelect: I
  } = e, {
    theme: w,
    themeType: S
  } = (0, b.z)(), E = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, P), [t, P]), {
    activities: _,
    isMobileOnline: T
  } = (0, a.cj)([p.Z], () => ({
    activities: p.Z.getActivities(t.id),
    isMobileOnline: p.Z.isMobileOnline(t.id)
  })), C = (0, g.Z)(t.id), {
    voiceActivityStatusEnabled: D
  } = (0, s.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: k
  } = (0, u.Z)({
    userId: D ? t.id : true,
    guildId: x
  });
  return (0, r.jsxs)(l.P3F, {
    focusProps: S === h.l.MODAL_V2 ? {
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
    className: y.row,
    onClick: I,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(n.bind(n, 881351));
        return n => {
          var i, a;
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
          }({}, n), a = a = {
            user: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
          }), i))
        }
      })
    },
    children: [(0, r.jsx)(l.qEK, {
      src: t.getAvatarURL(x, v),
      "aria-label": t.username,
      size: O,
      status: E ? m.Skl.UNKNOWN : j,
      statusBackdropColor: E ? true : (0, l.QFD)(w),
      isMobile: T,
      className: y.avatar
    }), (0, r.jsxs)("div", {
      className: y.details,
      children: [(0, r.jsx)(c.Z, {
        user: t,
        className: y.tag,
        discriminatorClass: y.discriminator
      }), (0, r.jsx)(d.Z, {
        user: t,
        activities: _,
        applicationStream: C,
        voiceChannel: k
      })]
    })]
  })
}