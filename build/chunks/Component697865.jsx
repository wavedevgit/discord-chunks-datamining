/** Chunk was on 88615 **/
/** chunk id: 697865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => C
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
let S = Chunk837921.Ay.getEnableHardwareAcceleration() ? Chunk397927.JsQ : Chunk730134.A;

function C(e) {
  var t, n;
  let {
    guildId: l
  } = e, d = (0, s.bG)([_.A], () => _.A.getGuild(l)), b = (0, s.bG)([A.A], () => A.A.getSortedRoles(l).find(e => {
    var t;
    return (null == (t = e.tags) ? true : t.premium_subscriber) === null
  })), C = (0, s.bG)([x.default], () => x.default.getCurrentUser()), N = null == C ? true : C.id, O = (0, s.bG)([g.Ay], () => null != N ? g.Ay.getMember(l, N) : true, [N, l]), L = (null == O ? true : O.premiumSince) != null, P = (0, s.bG)([c.A], () => c.A.useReducedMotion), {
    avatarDecorationSrc: k,
    avatarSrc: T,
    eventHandlers: G
  } = (0, v.A)({
    userId: null == C ? true : C.id,
    guildId: l,
    size: u._3J.SIZE_40,
    animateOnHover: !P
  });
  return null == d || null == O || null == C ? null : (0, r.jsxs)(u.hLv, {
    className: y.kL,
    children: [(0, r.jsx)("img", {
      alt: "",
      className: y.Sl,
      src: I
    }), (0, r.jsxs)("div", {
      className: y.FS,
      children: [(0, r.jsx)(o.EYj, {
        variant: "text-md/semibold",
        children: w.intl.string(L ? E.default.KSWK1U : E.default.XXXX5l)
      }), (0, r.jsx)(o.EYj, {
        variant: "text-sm/medium",
        children: w.intl.format(L ? E.default["7fWTg4"] : E.default["7PXeeQ"], {
          onClick: () => {
            (0, p.K)({
              guildId: l,
              location: {
                section: j.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR,
                object: j.ZSU.LEARN_MORE
              }
            })
          }
        })
      })]
    }), null != b && !L && (0, r.jsx)(f.V, {
      avatar: (0, r.jsx)(S, (t = function(e) {
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
      }({}, G), n = n = {
        user: C,
        src: T,
        avatarDecoration: k,
        size: u._3J.SIZE_40,
        "aria-hidden": true,
        animate: true
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t)),
      username: (0, r.jsx)(u.gyj, {
        variant: "text-md/semibold",
        name: h.Ay.getName(l, null, C),
        colorString: b.colorString,
        colorStrings: b.colorStrings
      }),
      className: i()(y.Qs, y.cX),
      message: w.intl.string(w.t["6OSasb"]),
      decorations: (0, r.jsx)(u._Jp, {
        color: u.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
        className: y.$J
      })
    }), (0, r.jsx)(m.A, {
      guild: d,
      className: y.Qs,
      analyticsLocation: {
        page: j.liQ.GUILD_POWERUPS_OVERVIEW,
        section: j.JJy.GUILD_POWERUPS_OVERVIEW_SIDEBAR
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