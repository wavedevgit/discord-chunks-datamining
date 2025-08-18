/** Chunk was on 15076 **/
/** chunk id: 610617, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk226339 = require("./226339.js");

function y(e) {
  let {
    guildId: t,
    onClose: n,
    isRedesign: l = false
  } = e, a = (0, c.e7)([x.Z], () => x.Z.getGuild(t)), y = (0, c.e7)([v.default], () => v.default.getCurrentUser()), {
    playSound: L,
    isPlaying: T,
    soundpackPlaying: P
  } = (0, S.Z)(), M = (0, N.OR)(t), w = j.ZP.canUseCustomNotificationSounds(y), I = w ? M : C.YC.CLASSIC, A = s.useRef(0), G = s.useRef(false), [R, U] = s.useState(false), D = (0, C.LB)(), k = s.useCallback(() => {
    clearTimeout(G.current), A.current += 1, A.current > 10 && (U(true), h.K.set(C.CZ, true)), G.current = setTimeout(() => {
      A.current = 0
    }, 1e3)
  }, []), [W, V] = o().partition(D, e => !e.requirePremium || e.requirePremium && w), X = W.map(e => {
    var t;
    return {
      name: e.label,
      value: e.value,
      desc: e.description,
      radioBarClassName: (t = e.value, r()(_.option, {
        [_.optionRedesign]: l,
        [_.optionPlaying]: t === P && T
      }))
    }
  }), [J, Y] = (0, m.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), B = J === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  s.useEffect(() => () => {
    Y(E.L.AUTO_DISMISS)
  }, [Y]);
  let F = j.ZP.canUseCustomNotificationSounds(y),
    z = (0, c.e7)([p.ZP], () => p.ZP.isMuted(t), [t]);
  return null == y ? null : (0, i.jsxs)("div", {
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
      }), B && (0, i.jsx)(g.IGR, {
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
    }), z && (0, i.jsxs)("div", {
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
          [_.options]: !F
        }),
        children: [(0, i.jsx)(g.FXm, {
          className: r()({
            [_.options]: F
          }),
          value: null != I ? I : C.YC.CLASSIC,
          onChange: e => {
            L(e.value), w && (0, f.t)(t, I, e.value, "notificationSettings")
          },
          options: X,
          radioItemClassName: _.option
        }), V.map((e, t) => (0, i.jsx)(b.Z, {
          className: _.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value,
          location: "notificationSettings"
        }, "sound_option_".concat(t)))]
      })
    }), !F && (0, i.jsx)(O.Z, {
      onClose: n
    })]
  })
}