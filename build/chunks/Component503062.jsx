/** Chunk was on 59569 **/
/** chunk id: 503062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk439547 = require("./439547.js"),
  Chunk714114 = require("./714114.js"),
  Chunk729551 = require("./729551.jsx"),
  Chunk178418 = require("./178418.js"),
  Chunk87664 = require("./87664.js"),
  Chunk290863 = require("./290863.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk996988 = require("./996988.js"),
  Chunk794904 = require("./794904.js");
let j = Chunk397927._3J.SIZE_40,
  h = (0, Chunk397927.FT9)(j);

function x(e) {
  let {
    user: t,
    status: x,
    guildId: v,
    channelId: _,
    onSelect: I
  } = e, {
    theme: w,
    themeType: A
  } = (0, m.E)(), P = l.useMemo(() => t.isNonUserBot() || (0, f.c)(t, _), [t, _]), {
    activities: E,
    isMobileOnline: S
  } = (0, i.cf)([g.A], () => ({
    activities: g.A.getActivities(t.id),
    isMobileOnline: g.A.isMobileOnline(t.id)
  })), T = (0, p.A)(t.id), {
    voiceActivityStatusEnabled: N
  } = (0, c.g)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: C
  } = (0, u.A)({
    userId: N ? t.id : true,
    guildId: v
  });
  return (0, r.jsxs)(a.DUT, {
    focusProps: A === y.d.MODAL_V2 ? {
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
    className: O.nM,
    onClick: I,
    onContextMenu: e => {
      (0, o.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("3795"), n.e("32418"), n.e("57600")]).then(n.bind(n, 668569));
        return n => {
          var l, i;
          return (0, r.jsx)(e, (l = function(e) {
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
          }({}, n), i = i = {
            user: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
          }), l))
        }
      })
    },
    children: [(0, r.jsx)(a.euF, {
      src: t.getAvatarURL(v, h),
      "aria-label": t.username,
      size: j,
      status: P ? b.clD.UNKNOWN : x,
      statusBackdropColor: P ? true : (0, a.C$5)(w),
      isMobile: S,
      className: O.my
    }), (0, r.jsxs)("div", {
      className: O.zH,
      children: [(0, r.jsx)(s.A, {
        user: t,
        className: O.Tc,
        discriminatorClass: O.D2
      }), (0, r.jsx)(d.A, {
        user: t,
        activities: E,
        applicationStream: T,
        voiceChannel: C
      })]
    })]
  })
}