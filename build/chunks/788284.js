/** Chunk was on 48923 (dce5ea7ad6fc1246.js) **/
n.d(t, {
  Z: () => h
}), n(47120);
var r = n(200651),
  o = n(192379),
  s = n(120356),
  a = n.n(s),
  i = n(392711),
  l = n.n(i),
  c = n(442837),
  d = n(481060),
  u = n(451478),
  p = n(302221),
  m = n(68928);
let f = [0, .5, 1],
  g = {
    "layers[1].shapes[1].g.k.k": [0, .522, .278, .776, .5, .522, .278, .776, 1, .522, .278, .776],
    "layers[2].shapes[1].g.k.k": [0, .714, .271, .757, .5, .714, .271, .757, 1, .714, .271, .757]
  };
async function x(e, t) {
  let r = (await n.e("30166").then(n.t.bind(n, 235630, 19))).default;
  return function(e, t, n) {
    for (let r in t) {
      let t = l().get(e, r);
      if (null == t) continue;
      let o = t.map((e, t) => {
        var r;
        return null !== (r = n[t]) && void 0 !== r ? r : e
      });
      l().set(e, r, o)
    }
  }(r, g, t), r
}

function h(e) {
  var t;
  let {
    animationClassName: n,
    className: s,
    quest: i,
    useReducedMotion: l
  } = e, g = (0, c.e7)([u.Z], () => u.Z.isFocused()), h = o.useRef(null), [b, j] = o.useState(!1), v = o.useMemo(() => {
    if (null == i) return null;
    let e = (0, p.oo)(i.config.colors.primary),
      t = {
        r: e.r / 255,
        g: e.g / 255,
        b: e.b / 255
      },
      n = f.reduce((e, n) => [...e, n, t.r, t.g, t.b], []);
    return x(i.id, n)
  }, [i]), y = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, _ = !l && g;
  o.useEffect(() => {
    var e, t, n, r;
    g ? _ && (null === (r = h.current) || void 0 === r || null === (n = r.animation) || void 0 === n || n.play()) : null === (t = h.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0)
  }, [_, g]);
  let C = o.useCallback(() => {
    j(!0)
  }, []);
  return null == v || y ? (0, r.jsx)("div", {
    className: m.backgroundFallback,
    style: {
      backgroundImage: "linear-gradient(90deg, ".concat(i.config.colors.primary, ", ").concat(i.config.colors.secondary, ")")
    }
  }) : (0, r.jsx)("div", {
    className: a()(m.lottieAnimationBackgroundWrapper, s),
    children: (0, r.jsx)(d.Fmz, {
      ref: h,
      onComplete: C,
      importData: () => v,
      shouldAnimate: !b && _,
      className: a()(m.lottieAnimation, m.lottieAnimationBackground, n),
      loop: 0,
      rendererSettings: {
        preserveAspectRatio: "none"
      }
    }, i.config.colors.primary)
  })
}