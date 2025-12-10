/** Chunk was on 80598 **/
/** chunk id: 252417, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
let y = Chunk481060.EFr.SIZE_40,
  g = (0, Chunk481060.dcp)(y);

function _(e) {
  let {
    user: t,
    status: _,
    guildId: h,
    channelId: x,
    onSelect: w
  } = e, {
    theme: P,
    themeType: Z
  } = (0, v.z)(), S = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, x), [t, x]), {
    activities: A,
    isMobileOnline: E
  } = (0, a.cj)([b.Z], () => ({
    activities: b.Z.getActivities(t.id),
    isMobileOnline: b.Z.isMobileOnline(t.id)
  })), k = (0, p.Z)(t.id), {
    voiceActivityStatusEnabled: C
  } = (0, l.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: M
  } = (0, u.Z)({
    userId: C ? t.id : true,
    guildId: h
  });
  return (0, n.jsxs)(o.P3F, {
    focusProps: Z === j.l.MODAL_V2 ? {
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
    className: O.row,
    onClick: w,
    onContextMenu: e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("79695"), r.e("69220"), r.e("77635")]).then(r.bind(r, 881351));
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
    children: [(0, n.jsx)(o.qEK, {
      src: t.getAvatarURL(h, g),
      "aria-label": t.username,
      size: y,
      status: S ? m.Skl.UNKNOWN : _,
      statusBackdropColor: S ? true : (0, o.QFD)(P),
      isMobile: E,
      className: O.avatar
    }), (0, n.jsxs)("div", {
      className: O.details,
      children: [(0, n.jsx)(s.Z, {
        user: t,
        className: O.tag,
        discriminatorClass: O.discriminator
      }), (0, n.jsx)(d.Z, {
        user: t,
        activities: A,
        applicationStream: k,
        voiceChannel: M
      })]
    })]
  })
}