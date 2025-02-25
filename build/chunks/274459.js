/** Chunk was on 12416 **/
n.d(t, {
  Z: () => y
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  a = n.n(l),
  o = n(642128),
  s = n(442837),
  c = n(481060),
  u = n(596454),
  d = n(607070),
  f = n(70956),
  m = n(456631),
  p = n(1883);
let h = 6 * f.Z.Millis.SECOND,
  v = 2 * f.Z.Millis.SECOND,
  b = 2 * f.Z.Millis.SECOND,
  g = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function y(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: l
  } = e, {
    emoji: f,
    sentAt: y
  } = n, E = (0, s.e7)([d.Z], () => d.Z.useReducedMotion), [O, S] = i.useState(!0), j = !E, x = (0, c.Yzy)(O, {
    from: {
      rotate: -120
    },
    enter: {
      rotate: 0
    },
    leave: {
      rotate: -120
    },
    config: o.config.default,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && l()
    }
  });
  return (i.useEffect(() => {
    let e;
    return Date.now() - y >= b ? (0, m.H)(t) : e = setTimeout(() => {
      S(!1), j && (0, m.H)(t)
    }, j ? v : h), () => {
      null != e && clearTimeout(e)
    }
  }, [y, t, j]), j) ? null : x((e, t) => {
    var n;
    let {
      rotate: i
    } = e;
    return t && (0, r.jsx)(o.animated.div, {
      className: p.voiceChannelEffectEmojiContainer,
      style: {
        transform: i.to(g)
      },
      children: (0, r.jsx)(u.Z, {
        className: a()(p.voiceChannelEffectEmoji),
        emojiId: f.id,
        emojiName: f.name,
        animated: null !== (n = f.animated) && void 0 !== n && n
      })
    })
  })
}