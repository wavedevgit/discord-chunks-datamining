/** Chunk was on 74477 **/
/** chunk id: 252417, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
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
  j = (0, Chunk481060.pxk)(y);

function O(e) {
  let {
    user: t,
    status: O,
    guildId: x,
    channelId: P,
    onSelect: S
  } = e, {
    theme: w,
    themeType: I
  } = (0, p.z)(), E = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, P), [t, P]), {
    activities: C,
    isMobileOnline: N
  } = (0, l.cj)([h.Z], () => ({
    activities: h.Z.getActivities(t.id),
    isMobileOnline: h.Z.isMobileOnline(t.id)
  })), A = (0, g.Z)(t.id), {
    voiceActivityStatusEnabled: k
  } = (0, c.a)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: T
  } = (0, u.Z)({
    userId: k ? t.id : true,
    guildId: x
  });
  return (0, n.jsxs)(a.P3F, {
    focusProps: I === v.l.MODAL_V2 ? {
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
    className: b.row,
    onClick: S,
    onContextMenu: e => {
      (0, s.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("79695"), r.e("69220")]).then(r.bind(r, 881351));
        return r => {
          var i, l;
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
          }({}, r), l = l = {
            user: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
          }), i))
        }
      })
    },
    children: [(0, n.jsx)(a.qEK, {
      src: t.getAvatarURL(x, j),
      "aria-label": t.username,
      size: y,
      status: E ? m.Skl.UNKNOWN : O,
      statusBackdropColor: E ? true : (0, a.QFD)(w),
      isMobile: N,
      className: b.avatar
    }), (0, n.jsxs)("div", {
      className: b.details,
      children: [(0, n.jsx)(o.Z, {
        user: t,
        className: b.tag,
        discriminatorClass: b.discriminator
      }), (0, n.jsx)(d.Z, {
        user: t,
        activities: C,
        applicationStream: A,
        voiceChannel: T
      })]
    })]
  })
}