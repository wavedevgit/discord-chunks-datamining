/** Chunk was on 82697 **/
/** chunk id: 252417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
let O = Chunk481060.EFr.SIZE_40,
  y = (0, Chunk481060.dcp)(O);

function v(e) {
  let {
    user: t,
    status: v,
    guildId: _,
    channelId: x,
    onSelect: P
  } = e, {
    theme: I,
    themeType: S
  } = (0, h.z)(), C = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, x), [t, x]), {
    activities: k,
    isMobileOnline: w
  } = (0, o.cj)([p.Z], () => ({
    activities: p.Z.getActivities(t.id),
    isMobileOnline: p.Z.isMobileOnline(t.id)
  })), Z = (0, b.Z)(t.id), {
    voiceActivityStatusEnabled: E
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: T
  } = (0, u.Z)({
    userId: E ? t.id : true,
    guildId: _
  });
  return (0, r.jsxs)(a.P3F, {
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
    onClick: P,
    onContextMenu: e => {
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(n.bind(n, 881351));
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
      src: t.getAvatarURL(_, y),
      "aria-label": t.username,
      size: O,
      status: C ? m.Skl.UNKNOWN : v,
      statusBackdropColor: C ? true : (0, a.QFD)(I),
      isMobile: w,
      className: j.avatar
    }), (0, r.jsxs)("div", {
      className: j.details,
      children: [(0, r.jsx)(s.Z, {
        user: t,
        className: j.tag,
        discriminatorClass: j.discriminator
      }), (0, r.jsx)(d.Z, {
        user: t,
        activities: k,
        applicationStream: Z,
        voiceChannel: T
      })]
    })]
  })
}