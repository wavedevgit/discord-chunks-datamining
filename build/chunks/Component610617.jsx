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
  Chunk755721 = require("./755721.js"),
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
  } = e, a = (0, c.e7)([v.Z], () => v.Z.getGuild(t)), y = (0, c.e7)([j.default], () => j.default.getCurrentUser()), {
    playSound: T,
    isPlaying: P,
    soundpackPlaying: M
  } = (0, f.Z)(), w = (0, S.OR)(t), I = N.ZP.canUseCustomNotificationSounds(y), A = I ? w : Z.YC.CLASSIC, G = s.useRef(0), R = s.useRef(false), [U, D] = s.useState(false), k = (0, Z.LB)(), V = s.useCallback(() => {
    clearTimeout(R.current), G.current += 1, G.current > 10 && (D(true), h.K.set(Z.CZ, true)), R.current = setTimeout(() => {
      G.current = 0
    }, 1e3)
  }, []), [W, z] = o().partition(k, e => !e.requirePremium || e.requirePremium && I), Y = W.map(e => {
    var t;
    return {
      name: e.label,
      value: e.value,
      desc: e.description,
      radioBarClassName: (t = e.value, r()(L.option, {
        [L.optionRedesign]: l,
        [L.optionPlaying]: t === M && P
      }))
    }
  }), [B, F] = (0, x.US)([u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]), q = B === u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  s.useEffect(() => () => {
    F(C.L.AUTO_DISMISS)
  }, [F]);
  let H = N.ZP.canUseCustomNotificationSounds(y),
    X = (0, c.e7)([p.ZP], () => p.ZP.isMuted(t), [t]);
  return null == y ? null : (0, i.jsxs)("div", {
    children: [(0, i.jsxs)("div", {
      className: L.header,
      children: [(0, i.jsx)(m.X6q, {
        variant: "heading-md/semibold",
        children: _.intl.string(_.t.mrqSOj)
      }), (0, i.jsx)(m.P3F, {
        onClick: V,
        className: L.nitroWheelContainer,
        children: (0, i.jsx)(m.SrA, {
          size: "md",
          color: "currentColor",
          className: L.nitroWheel
        })
      }), q && (0, i.jsx)(m.IGR, {
        className: L.newBadge,
        text: _.intl.string(_.t.y2b7CA)
      })]
    }), (0, i.jsx)(m.Text, {
      className: L.subheader,
      variant: "text-sm/normal",
      children: _.intl.format(_.t.LuYDy8, {
        guildName: (e, t) => (0, i.jsx)(m.Text, {
          tag: "span",
          variant: "text-sm/medium",
          children: null == a ? true : a.name
        }, t)
      })
    }), X && (0, i.jsxs)("div", {
      className: L.warningContainer,
      children: [(0, i.jsx)(m.Mgn, {
        size: "custom",
        width: 20,
        height: 20,
        color: d.Z.STATUS_WARNING
      }), (0, i.jsx)(m.Text, {
        className: L.warningLabel,
        variant: "text-sm/medium",
        children: _.intl.string(_.t["a9G/ER"])
      })]
    }), (0, i.jsx)(m.xJW, {
      className: L.optionsContainer,
      title: _.intl.string(_.t.xxvoAg),
      children: (0, i.jsxs)("div", {
        className: r()({
          [L.options]: !H
        }),
        children: [(0, i.jsx)(g.Gu, {
          className: r()({
            [L.options]: H
          }),
          value: null != A ? A : Z.YC.CLASSIC,
          onChange: e => {
            T(e.value), I && (0, b.t)(t, A, e.value, "notificationSettings")
          },
          options: Y,
          radioItemClassName: L.option
        }), z.map((e, t) => (0, i.jsx)(O.Z, {
          className: L.playableOption,
          label: e.label,
          description: e.description,
          soundpack: e.value,
          location: "notificationSettings"
        }, "sound_option_".concat(t)))]
      })
    }), !H && (0, i.jsx)(E.Z, {
      onClose: n
    })]
  })
}