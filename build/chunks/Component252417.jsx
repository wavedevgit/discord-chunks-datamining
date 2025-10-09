/** Chunk was on 73289 **/
/** chunk id: 252417, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => _
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
let g = Chunk481060.EFr.SIZE_40,
  m = (0, Chunk481060.pxk)(g);

function _(e) {
  let {
    user: t,
    status: _,
    guildId: h,
    channelId: x,
    onSelect: P
  } = e, {
    theme: w,
    themeType: k
  } = (0, v.z)(), Z = n.useMemo(() => t.isNonUserBot() || (0, f.W)(t, x), [t, x]), {
    activities: S,
    isMobileOnline: A
  } = (0, a.cj)([b.Z], () => ({
    activities: b.Z.getActivities(t.id),
    isMobileOnline: b.Z.isMobileOnline(t.id)
  })), E = (0, p.Z)(t.id), {
    voiceActivityStatusEnabled: M
  } = (0, l.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: C
  } = (0, u.Z)({
    userId: M ? t.id : true,
    guildId: h
  });
  return (0, i.jsxs)(o.P3F, {
    focusProps: k === O.l.MODAL_V2 ? {
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
    onClick: P,
    onContextMenu: e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("79695"), r.e("69220")]).then(r.bind(r, 881351));
        return r => {
          var n, a;
          return (0, i.jsx)(e, (n = function(e) {
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
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              r.push.apply(r, i)
            }
            return r
          })(Object(a)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
          }), n))
        }
      })
    },
    children: [(0, i.jsx)(o.qEK, {
      src: t.getAvatarURL(h, m),
      "aria-label": t.username,
      size: g,
      status: Z ? j.Skl.UNKNOWN : _,
      statusBackdropColor: Z ? true : (0, o.QFD)(w),
      isMobile: A,
      className: y.avatar
    }), (0, i.jsxs)("div", {
      className: y.details,
      children: [(0, i.jsx)(s.Z, {
        user: t,
        className: y.tag,
        discriminatorClass: y.discriminator
      }), (0, i.jsx)(d.Z, {
        user: t,
        activities: S,
        applicationStream: E,
        voiceChannel: C
      })]
    })]
  })
}