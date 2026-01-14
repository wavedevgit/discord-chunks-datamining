/** Chunk was on 90882 **/
/** chunk id: 252417, original params: e,t,n (module,exports,require) **/
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
  Chunk580784 = require("./580784.js");
let j = Chunk481060.EFr.SIZE_40,
  O = (0, Chunk481060.dcp)(j);

function x(e) {
  let {
    user: t,
    status: x,
    guildId: v,
    channelId: I,
    onSelect: P
  } = e, {
    theme: w,
    themeType: E
  } = (0, m.z)(), S = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, I), [t, I]), {
    activities: T,
    isMobileOnline: _
  } = (0, l.cj)([p.Z], () => ({
    activities: p.Z.getActivities(t.id),
    isMobileOnline: p.Z.isMobileOnline(t.id)
  })), C = (0, g.Z)(t.id), {
    voiceActivityStatusEnabled: N
  } = (0, s.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: Z
  } = (0, u.Z)({
    userId: N ? t.id : true,
    guildId: v
  });
  return (0, r.jsxs)(a.P3F, {
    focusProps: E === y.l.MODAL_V2 ? {
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
    className: h.row,
    onClick: P,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(n.bind(n, 881351));
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
    children: [(0, r.jsx)(a.qEK, {
      src: t.getAvatarURL(v, O),
      "aria-label": t.username,
      size: j,
      status: S ? b.Skl.UNKNOWN : x,
      statusBackdropColor: S ? true : (0, a.QFD)(w),
      isMobile: _,
      className: h.avatar
    }), (0, r.jsxs)("div", {
      className: h.details,
      children: [(0, r.jsx)(c.Z, {
        user: t,
        className: h.tag,
        discriminatorClass: h.discriminator
      }), (0, r.jsx)(d.Z, {
        user: t,
        activities: T,
        applicationStream: C,
        voiceChannel: Z
      })]
    })]
  })
}