/** Chunk was on 97710 **/
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
  Chunk788485 = require("./788485.js");
let v = Chunk481060.EFr.SIZE_40,
  y = (0, Chunk481060.pxk)(v);

function x(e) {
  let {
    user: t,
    status: x,
    guildId: _,
    channelId: O,
    onSelect: C
  } = e, {
    theme: P,
    themeType: k
  } = (0, f.z)(), S = i.useMemo(() => t.isNonUserBot() || (0, p.W)(t, O), [t, O]), {
    activities: Z,
    isMobileOnline: w
  } = (0, a.cj)([h.Z], () => ({
    activities: h.Z.getActivities(t.id),
    isMobileOnline: h.Z.isMobileOnline(t.id)
  })), I = (0, b.Z)(t.id), {
    voiceActivityStatusEnabled: E
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: N
  } = (0, d.Z)({
    userId: E ? t.id : true,
    guildId: _
  });
  return (0, r.jsxs)(o.P3F, {
    focusProps: k === m.l.MODAL_V2 ? {
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
    onClick: C,
    onContextMenu: e => {
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("79695"), n.e("69220"), n.e("73444")]).then(n.bind(n, 881351));
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
    children: [(0, r.jsx)(o.qEK, {
      src: t.getAvatarURL(_, y),
      "aria-label": t.username,
      size: v,
      status: S ? g.Skl.UNKNOWN : x,
      statusBackdropColor: S ? true : (0, o.QFD)(P),
      isMobile: w,
      className: j.avatar
    }), (0, r.jsxs)("div", {
      className: j.details,
      children: [(0, r.jsx)(s.Z, {
        user: t,
        className: j.tag,
        discriminatorClass: j.discriminator
      }), (0, r.jsx)(u.Z, {
        user: t,
        activities: Z,
        applicationStream: I,
        voiceChannel: N
      })]
    })]
  })
}