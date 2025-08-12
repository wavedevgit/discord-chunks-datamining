/** Chunk was on 5863 **/
/** chunk id: 610617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => L
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk831209 = require("./831209.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk671105 = require("./671105.js"),
  Chunk552958 = require("./552958.js"),
  Chunk213931 = require("./213931.js"),
  Chunk940165 = require("./940165.jsx"),
  Chunk820408 = require("./820408.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk871465 = require("./871465.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk728899 = require("./728899.js");

function L(e) {
  let {
    guildId: t,
    onClose: n,
    isRedesign: l = false
  } = e, a = (0, c.e7)([x.Z], () => x.Z.getGuild(t)), L = (0, c.e7)([v.default], () => v.default.getCurrentUser()), {
    playSound: T,
    isPlaying: y,
    soundpackPlaying: M
  } = (0, N.Z)(), I = (0, S.OR)(t), P = j.ZP.canUseCustomNotificationSounds(L), A = P ? I : E.YC.CLASSIC, R = s.useRef(0), w = s.useRef(false), [G, D] = s.useState(false), U = (0, E.LB)(), k = s.useCallback(() => {
    clearTimeout(w.current), R.current += 1, R.current > 10 && (D(true), h.K.set(E.CZ, true)), w.current = setTimeout(() => {
      R.current = 0
    }, 1e3)
  }, []), [X, V] = o().partition(U, e => !e.requirePremium || e.requirePremium && P), W = X.map(e => {
    var t;
    return {
      name: e.label,
      value: e.value,
      desc: e.description,
      radioBarClassName: (t = e.value, r()(_.option, {
        [_.optionRedesign]: l,
        [_.optionPlaying]: t === M && y
      }))
    }
  }), [B, J] = (0, m.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), Y = B === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  s.useEffect(() => () => {
    J(O.L.AUTO_DISMISS)
  }, [J]);
  let z = j.ZP.canUseCustomNotificationSounds(L),
    F = (0, c.e7)([p.ZP], () => p.ZP.isMuted(t), [t]);
  return null == L ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: _.header,
      children: [(0, i.jsx)(g.X6q, {
        variant: "heading-md/semibold",
        children: Z.intl.string(Z.t.mrqSOj)
      }), (0, i.jsx)(g.P3F, {
        onClick: k,
        className: _.nitroWheelContainer,
        children: (0, i.jsx)(g.SrA, {
          size: "md",
          color: "currentColor",
          className: _.nitroWheel
        })
      }), Y && (0, i.jsx)(g.IGR, {
        className: _.newBadge,
        text: Z.intl.string(Z.t.y2b7CA)
      })]
    }), (0, i.jsx)(g.Text, {
      className: _.subheader,
      variant: "text-sm/normal",
      children: Z.intl.format(Z.t.LuYDy8, {
        guildName: (e, t) => (0, i.jsx)(g.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == a ? true : a.name
        }, t)
      })
    }), F && (0, i.jsxs)("div", {
      className: _.warningContainer,
      children: [(0, i.jsx)(g.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: d.Z.STATUS_WARNING
      }), (0, i.jsx)(g.Text, {
        className: _.warningLabel,
        variant: "text-sm/medium",
        children: Z.intl.string(Z.t["a9G/ER"])
      })]
    }), (0, i.jsx)(g.xJW, {
      className: _.optionsContainer,
      title: Z.intl.string(Z.t.xxvoAg),
      children: (0, i.jsxs)("div", {
        className: r()({
          [_.options]: !z
        }),
        children: [(0, i.jsx)(g.FXm, {
          className: r()({
            [_.options]: z
          }),
          value: null != A ? A : E.YC.CLASSIC,
          onChange: e => {
            T(e.value), P && (0, f.t)(t, A, e.value, "notificationSettings")
          },
          options: W,
          radioItemClassName: _.option
        }), V.map((e, t) => (0, i.jsx)(b.Z, {
          className: _.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value,
          location: "notificationSettings"
        }, "sound_option_".concat(t)))]
      })
    }), !z && (0, i.jsx)(C.Z, {
      onClose: n
    })]
  })
}