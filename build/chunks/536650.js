/** Chunk was on 35755 **/
n.d(t, {
  Z: () => N
}), n(47120);
var i = n(200651),
  l = n(192379),
  r = n(392711),
  o = n(780384),
  a = n(481060),
  s = n(410030),
  c = n(220082),
  u = n(564334),
  d = n(302221),
  p = n(783097),
  m = n(772606),
  h = n(488977),
  f = n(320599);

function v(e) {
  let [t, n] = l.useState(void 0);
  return l.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function N(e) {
  let {
    application: t,
    context: n,
    name: N,
    iconURL: x,
    scrollerRef: y,
    sectionName: b
  } = e, g = (0, o.ap)((0, s.ZP)()), j = l.useRef(null), C = l.useRef(null), E = l.useRef(null), P = l.useRef(null), A = (0, a.dQu)(a.TVs.colors.BG_BASE_PRIMARY).hex(), O = (0, c.ZP)("number" == typeof x ? "" : x, null != A ? A : ""), I = l.useMemo(() => {
    var e, t;
    let n = (0, r.compact)([u.Z.parseHexString(O), u.Z.parseHexString(g ? "#000000" : "#ffffff")]);
    return null !== (t = null === (e = (0, d.k8)({
      colors: n,
      ratio: 5,
      saturationFactor: .6
    })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== t ? t : O
  }, [O, g]), _ = v(j), S = v(C), T = l.useCallback(() => {
    var e, t, n, i;
    let l = y.current,
      o = j.current,
      a = E.current,
      s = null == P ? void 0 : P.current,
      c = parseInt(null !== (e = null == _ ? void 0 : _.height) && void 0 !== e ? e : ""),
      u = parseInt(null !== (t = null == S ? void 0 : S.height) && void 0 !== t ? t : "");
    if (null != l && null != o && null != a && !isNaN(c) && !isNaN(u)) {
      let e = null !== (n = l.scrollTop) && void 0 !== n ? n : 0,
        t = 0 !== l.scrollHeight ? l.scrollHeight : u + 20,
        d = 0 !== l.clientHeight ? l.clientHeight : u + 20,
        p = u - c,
        m = (0, r.clamp)(t - d, p + 1, u + 20),
        h = p === m ? 1 : (0, r.clamp)((e - p) / (m - p), 0, 1);
      o.style.filter = "brightness(".concat(1 + ((g ? 1.4 : .6) - 1) * h, ")"), o.style.backgroundColor = "color-mix(in oklab,".concat(O, " ").concat((1 - h) * 100, "%, ").concat(I, ")"), a.style.opacity = "".concat(0 + +h), a.style.transform = "translateY(".concat((i = c / 4) + (0 - i) * h, "px)"), null != s && (s.style.opacity = "".concat(1 + -1 * h))
    }
  }, [I, O, null == S ? void 0 : S.height, g, y, null == _ ? void 0 : _.height]);
  return l.useEffect(() => {
    T()
  }, [T, g]), l.useEffect(() => {
    let e = y.current,
      t = () => {
        T()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [y, T]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: f.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: f.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: f.stickyBanner,
          ref: j
        })
      }), (0, i.jsx)("div", {
        className: f.backButtonContainer,
        children: (0, i.jsx)(m.Z, {
          className: f.headerButton
        })
      }), (0, i.jsx)("div", {
        className: f.nameContainer,
        children: (0, i.jsx)(a.X6q, {
          ref: E,
          className: f.textApplicationName,
          variant: "heading-lg/extrabold",
          children: N
        })
      })]
    }), (0, p.BQ)(t) ? (0, i.jsx)("div", {
      ref: P,
      className: f.moreMenuButtonContainer,
      children: (0, i.jsx)(h.Z, {
        application: t,
        context: n,
        className: f.headerButton,
        sectionName: b
      })
    }) : null, (0, i.jsx)("div", {
      ref: C,
      className: f.bannerBackground,
      style: {
        backgroundColor: O
      }
    })]
  })
}