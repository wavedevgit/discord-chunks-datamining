/** Chunk was on 93725 **/
/** chunk id: 252417, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
let _ = Chunk481060.EFr.SIZE_40,
  v = (0, Chunk481060.pxk)(_);

function y(e) {
  let {
    user: t,
    status: y,
    guildId: x,
    channelId: O,
    onSelect: P
  } = e, {
    theme: C,
    themeType: k
  } = (0, h.z)(), w = i.useMemo(() => t.isNonUserBot() || (0, b.W)(t, O), [t, O]), {
    activities: Z,
    isMobileOnline: S
  } = (0, a.cj)([f.Z], () => ({
    activities: f.Z.getActivities(t.id),
    isMobileOnline: f.Z.isMobileOnline(t.id)
  })), I = (0, p.Z)(t.id), {
    voiceActivityStatusEnabled: N
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: T
  } = (0, d.Z)({
    userId: N ? t.id : true,
    guildId: x
  });
  return (0, r.jsxs)(o.P3F, {
    focusProps: k === g.l.MODAL_V2 ? {
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
        } = await Promise.all([n.e("79695"), n.e("69220")]).then(n.bind(n, 881351));
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
      src: t.getAvatarURL(x, v),
      "aria-label": t.username,
      size: _,
      status: w ? m.Skl.UNKNOWN : y,
      statusBackdropColor: w ? true : (0, o.QFD)(C),
      isMobile: S,
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
        voiceChannel: T
      })]
    })]
  })
}