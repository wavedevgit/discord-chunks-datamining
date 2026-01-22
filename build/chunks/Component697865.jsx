/** Chunk was on 88615 **/
/** chunk id: 697865, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk730134 = require("./730134.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk721923 = require("./721923.jsx"),
  Chunk29086 = require("./29086.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk696451 = require("./696451.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk837921 = require("./837921.js"),
  Chunk652215 = require("./652215.js"),
  Chunk333354 = require("./333354.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk520277 = require("./520277.js"),
  Chunk445826 = require("./445826.js");
let w = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk730134.A;

function N(e) {
  var t, l;
  let {
    guildId: n
  } = e, d = (0, o.bG)([x.A], () => x.A.getGuild(n)), j = (0, o.bG)([g.A], () => g.A.getSortedRoles(n).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), N = (0, o.bG)([b.default], () => b.default.getCurrentUser()), O = null == N ? true : N.id, L = (0, o.bG)([A.Ay], () => null != O ? A.Ay.getMember(n, O) : true, [O, n]), P = (null == L ? true : L.premiumSince) != null, T = (0, o.bG)([c.A], () => c.A.useReducedMotion), {
    avatarDecorationSrc: k,
    avatarSrc: C,
    eventHandlers: G
  } = (0, v.A)({
    userId: null == N ? true : N.id,
    guildId: n,
    size: u._3J.SIZE_40,
    animateOnHover: !T
  });
  return null == d || null == L || null == N ? null : (0, r.jsxs)(u.hLv, {
    className: I.kL,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: I.Sl,
      src: S
    }), (0, r.jsxs)("div", {
      className: I.FS,
      children: [(0, r.jsx)(s.EYj, {
        variant: "text-md/semibold",
        children: y.intl.string(P ? E.default.KSWK1U : E.default.XXXX5l)
      }), (0, r.jsx)(s.EYj, {
        variant: "text-sm/medium",
        children: y.intl.format(P ? E.default["7fWTg4"] : E.default["7PXeeQ"], {
          onClick: () => {
            (0, f.K)({
              guildId: n,
              location: {
                section: _.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: _.ZSU.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != j && !P && (0, r.jsx)(m.V, {
      avatar: (0, r.jsx)(w, (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = l[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, G), l = l = {
        user: N,
        src: C,
        avatarDecoration: k,
        size: u._3J.SIZE_40,
        "aria-hidden": true,
        animate: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          l.push.apply(l, r)
        }
        return l
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
      }), t)),
      username: (0, r.jsx)(u.gyj, {
        variant: "text-md/semibold",
        name: h.Ay.getName(n, null, N),
        colorString: j.colorString,
        colorStrings: j.colorStrings
      }),
      className: i()(I.Qs, I.cX),
      message: y.intl.string(y.t["6OSasb"]),
      decorations: (0, r.jsx)(u._Jp, {
        color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: I.$J
      })
    }), (0, r.jsx)(p.A, {
      guild: d,
      className: I.Qs,
      analyticsLocation: {
        page: _.liQ.GUILD_POWERUPS_OVERVIEW,
        section: _.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR
      },
      color: a.XD.BRAND,
      size: a.lO.MEDIUM,
      fullWidth: true,
      icon: (0, r.jsx)(u._Jp, {
        color: "currentColor",
        size: "sm"
      })
    })]
  })
}