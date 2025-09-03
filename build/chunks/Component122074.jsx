/** Chunk was on 56826 **/
/** chunk id: 122074, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => E,
  Uf: () => m,
  ng: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.jsx"),
  Chunk706140 = require("./706140.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk759198 = require("./759198.jsx"),
  Chunk11352 = require("./11352.js"),
  Chunk213931 = require("./213931.js"),
  Chunk767157 = require("./767157.js"),
  Chunk112440 = require("./112440.jsx"),
  Chunk671105 = require("./671105.js"),
  Chunk552958 = require("./552958.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk392238 = require("./392238.js");

function I(e, t) {
  let n = h.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: true
    }),
    r = C(e, true, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? "trailing" : "top");
  return (n.nestedEntry && t || !n.nestedEntry && !t) && r
}

function m(e, t, n) {
  return C(e, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n)
}

function E() {
  let e = Chunk11352.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: true
    }),
    [t] = (0, Chunk706140.cv)([Chunk704215.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return module.enabled && module.nestedEntry && exports === Chunk704215.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && (0, Chunk951288.jsx)(Chunk481060.IGR, {
    className: Chunk392238.newBadge,
    text: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
  })
}

function C(e, t, a, I) {
  var m, E;
  let C = (0, p.OR)(e),
    T = (0, p._c)(e, t),
    P = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
    Z = (0, l.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
    A = f.ZP.canUseCustomNotificationSounds(P),
    U = A ? null != T ? T : C : x.YC.CLASSIC,
    M = h.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: true
    }).enabled,
    [D, k] = i.useState(false),
    {
      playSound: w
    } = (0, _.Z)(),
    [R, G] = (0, c.cv)([a]),
    L = R === a;
  if (i.useEffect(() => () => {
      D && G(v.L.TAKE_ACTION)
    }, [D, G]), !M) return null;
  let F = n => {
      if (w(n), G(v.L.TAKE_ACTION), !A && n !== x.YC.CLASSIC) {
        (0, j.Z)(n, "contextMenu"), (0, b.Z)();
        return
      }
      null != t ? (0, g.M)(e, t, U, n, "contextMenu") : (0, g.t)(e, U, n, "contextMenu")
    },
    Q = A ? o.Text : O.Z,
    Y = (0, x.LB)(),
    V = null != (E = null == (m = Y.find(e => e.value === U)) ? true : m.label) ? E : S.intl.string(S.t.p3Hg5e),
    B = (0, r.jsx)(o.IGR, {
      className: N.newBadge,
      text: S.intl.string(S.t.y2b7CA)
    });
  return (0, r.jsx)(o.sNh, {
    id: "notification-sounds",
    label: e => {
      let {
        isFocused: t
      } = e;
      return t && k(t), (0, r.jsxs)("div", {
        className: N.rootContainer,
        children: [(0, r.jsxs)("div", {
          children: [L && "top" === I && B, (0, r.jsxs)("div", {
            className: N.headerContainer,
            children: [(0, r.jsx)(Q, {
              className: N.text,
              variant: "text-sm/medium",
              children: S.intl.string(S.t.mrqSOj)
            }), (0, r.jsx)(o.SrA, {
              size: "xs",
              className: N.nitroWheel,
              color: A ? true : s.JX.PREMIUM_TIER_2
            })]
          }), null != V && (0, r.jsx)(Q, {
            className: N.text,
            variant: "text-xs/normal",
            children: V
          })]
        }), L && "trailing" === I && B]
      })
    },
    action: e !== y.aIL ? () => (0, o.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("15076"), n.e("99964")]).then(n.bind(n, 907941));
      return n => {
        var i, l;
        return (0, r.jsx)(t, (i = function(e) {
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
        }({}, n), l = l = {
          guildId: e
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    }) : true,
    hasSubmenu: true,
    children: (0, r.jsxs)(o.kSQ, {
      children: [Y.map((e, t) => (0, r.jsxs)(i.Fragment, {
        children: [A || e.value === x.YC.CLASSIC ? (0, r.jsx)(o.k5B, {
          id: e.label,
          group: "notification-preset",
          checked: (null != U ? U : x.YC.CLASSIC) === e.value,
          label: e.label,
          action: () => F(e.value)
        }) : (0, r.jsx)(o.sNh, {
          id: e.label,
          label: t => {
            let {
              isFocused: n
            } = t;
            return (0, r.jsxs)("div", {
              className: N.labelContainer,
              children: [(0, r.jsx)(O.Z, {
                color: n ? "always-white" : true,
                variant: "text-sm/medium",
                children: e.label
              }), (0, r.jsx)(o.g8d, {
                className: N.playButton,
                color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.INTERACTIVE_NORMAL
              })]
            })
          },
          action: () => F(e.value)
        }), e.value === x.YC.CLASSIC ? (0, r.jsx)(o.Clw, {}) : null]
      }, t)), Z && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.Clw, {}), (0, r.jsx)(o.sNh, {
          id: "label",
          label: (0, r.jsx)(o.Text, {
            className: N.mutedLabel,
            variant: "text-sm/medium",
            children: S.intl.string(S.t["a9G/ER"])
          })
        })]
      })]
    })
  })
}