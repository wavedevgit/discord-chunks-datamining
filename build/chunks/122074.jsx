/** Chunk was on 57789 **/
/** chunk id: 122074, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => E,
  Uf: () => v,
  ng: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk436774 = require("./436774.js"),
  Chunk706140 = require("./706140.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk759198 = require("./759198.js"),
  Chunk11352 = require("./11352.js"),
  Chunk213931 = require("./213931.js"),
  Chunk767157 = require("./767157.js"),
  Chunk112440 = require("./112440.jsx"),
  Chunk671105 = require("./671105.js"),
  Chunk552958 = require("./552958.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.js"),
  Chunk394049 = require("./394049.js");

function x(e, t) {
  let n = b.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: true
    }),
    r = I(e, true, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE, n.nestedEntry ? "trailing" : "top");
  return (n.nestedEntry && t || !n.nestedEntry && !t) && r
}

function v(e, t, n) {
  return I(e, t, a.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GDM_DM_BADGE, n)
}

function E() {
  let e = Chunk11352.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: true
    }),
    [t] = (0, Chunk706140.cv)([Chunk704215.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]);
  return module.enabled && module.nestedEntry && exports === Chunk704215.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE && <Chunk481060.IGR className={Chunk394049.newBadge} text={Chunk388032.intl.string(Chunk388032.t.y2b7CA)} />
}

function I(e, t, a, x) {
  var v, E;
  let I = (0, N.OR)(e),
    P = (0, N._c)(e, t),
    S = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
    A = (0, l.e7)([u.ZP], () => u.ZP.isMuted(e), [e]),
    U = f.ZP.canUseCustomNotificationSounds(S),
    D = U ? null != P ? P : I : C.YC.CLASSIC,
    M = b.Y.useExperiment({
      location: "guild_context_menu"
    }, {
      autoTrackExposure: true
    }).enabled,
    [w, Z] = i.useState(false),
    {
      playSound: R
    } = (0, m.Z)(),
    [k, G] = (0, s.cv)([a]),
    L = k === a;
  if (i.useEffect(() => () => {
      w && G(j.L.TAKE_ACTION)
    }, [w, G]), !M) return null;
  let B = n => {
      if (R(n), G(j.L.TAKE_ACTION), !U && n !== C.YC.CLASSIC) {
        (0, p.Z)(n, "contextMenu"), (0, h.Z)();
        return
      }
      null != t ? (0, _.M)(e, t, D, n, "contextMenu") : (0, _.t)(e, D, n, "contextMenu")
    },
    F = U ? o.Text : O.Z,
    Y = (0, C.LB)(),
    z = null != (E = null == (v = Y.find(e => e.value === D)) ? true : v.label) ? E : T.intl.string(T.t.p3Hg5e),
    V = <o.IGR className={g.newBadge} text={T.intl.string(T.t.y2b7CA)} />;
  return <o.sNh id={"notification-sounds"} label={e => {
      let {
        isFocused: t
      } = e;
      return t && Z(t), (0, r.jsxs)("div", {
        className: g.rootContainer,
        children: [(0, r.jsxs)("div", {
          children: [L && "top" === x && V, (0, r.jsxs)("div", {
            className: g.headerContainer,
            children: [(0, r.jsx)(F, {
              className: g.text,
              variant: "text-sm/medium",
              children: T.intl.string(T.t.mrqSOj)
            }), (0, r.jsx)(o.SrA, {
              size: "xs",
              className: g.nitroWheel,
              color: U ? true : c.JX.PREMIUM_TIER_2
            })]
          }), null != z && (0, r.jsx)(F, {
            className: g.text,
            variant: "text-xs/normal",
            children: z
          })]
        }), L && "trailing" === x && V]
      })
    }} action={e !== y.aIL ? () => (0, o.ZDy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("5863"), n.e("59322")]).then(n.bind(n, 751212));
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
    }) : true} hasSubmenu={true}><o.kSQ>{Y.map((e, t) => <i.Fragment>{U || e.value === C.YC.CLASSIC ? <o.k5B id={e.label} group={"notification-preset"} checked={(null != D ? D : C.YC.CLASSIC) === e.value} label={e.label} action={() => B(e.value)} /> : <o.sNh id={e.label} label={t => {
            let {
              isFocused: n
            } = t;
            return (0, r.jsxs)("div", {
              className: g.labelContainer,
              children: [(0, r.jsx)(O.Z, {
                color: n ? "always-white" : true,
                variant: "text-sm/medium",
                children: e.label
              }), (0, r.jsx)(o.g8d, {
                className: g.playButton,
                color: n ? o.TVs.colors.INTERACTIVE_ACTIVE : o.TVs.colors.INTERACTIVE_NORMAL
              })]
            })
          }} action={() => B(e.value)} />}{e.value === C.YC.CLASSIC ? <o.Clw /> : null}</i.Fragment>)}{A && <r.Fragment>{<o.Clw />}{<o.sNh id={"label"} label={(0, r.jsx)(o.Text, {
            className: g.mutedLabel,
            variant: "text-sm/medium",
            children: T.intl.string(T.t["a9G/ER"])
          })} />}</r.Fragment>}</o.kSQ></o.sNh>
}