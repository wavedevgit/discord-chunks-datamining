/** Chunk was on 97492 **/
/** chunk id: 503062, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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
let y = Chunk397927._3J.SIZE_40,
  O = (0, Chunk397927.FT9)(y);

function j(e) {
  let {
    user: t,
    status: j,
    guildId: v,
    channelId: x,
    onSelect: E
  } = e, {
    theme: _,
    themeType: C
  } = (0, b.E)(), S = l.useMemo(() => t.isNonUserBot() || (0, f.c)(t, x), [t, x]), {
    activities: I,
    isMobileOnline: N
  } = (0, i.cf)([h.A], () => ({
    activities: h.A.getActivities(t.id),
    isMobileOnline: h.A.isMobileOnline(t.id)
  })), T = (0, p.A)(t.id), {
    voiceActivityStatusEnabled: P
  } = (0, c.g)({
    location: "UserProfileMutualFriendRow"
  }), {
    voiceChannel: w
  } = (0, u.A)({
    userId: P ? t.id : true,
    guildId: v
  });
  return (0, r.jsxs)(a.DUT, {
    focusProps: C === m.d.MODAL_V2 ? {
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
    className: A.nM,
    onClick: E,
    onContextMenu: e => {
      (0, s.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(n.bind(n, 668569));
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
      src: t.getAvatarURL(v, O),
      "aria-label": t.username,
      size: y,
      status: S ? g.clD.UNKNOWN : j,
      statusBackdropColor: S ? true : (0, a.C$5)(_),
      isMobile: N,
      className: A.my
    }), (0, r.jsxs)("div", {
      className: A.zH,
      children: [(0, r.jsx)(o.A, {
        user: t,
        className: A.Tc,
        discriminatorClass: A.D2
      }), (0, r.jsx)(d.A, {
        user: t,
        activities: I,
        applicationStream: T,
        voiceChannel: w
      })]
    })]
  })
}