/** Chunk was on 35755 **/
n.d(t, {
  Z: () => v
}), n(47120);
var i = n(200651),
  r = n(192379),
  l = n(392711),
  o = n(780384),
  a = n(481060),
  c = n(410030),
  s = n(220082),
  d = n(564334),
  u = n(302221),
  p = n(783097),
  m = n(772606),
  f = n(488977),
  h = n(320599);

function b(e) {
  let [t, n] = r.useState(void 0);
  return r.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function v(e) {
  let {
    application: t,
    context: n,
    name: v,
    iconURL: C,
    scrollerRef: _,
    sectionName: x
  } = e, y = (0, o.ap)((0, c.ZP)()), N = r.useRef(null), g = r.useRef(null), j = r.useRef(null), P = r.useRef(null), E = (0, a.dQu)(a.TVs.colors.BG_BASE_PRIMARY).hex(), A = (0, s.ZP)("number" == typeof C ? "" : C, null != E ? E : ""), O = r.useMemo(() => {
    var e, t;
    let n = (0, l.compact)([d.Z.parseHexString(A), d.Z.parseHexString(y ? "#000000" : "#ffffff")]);
    return null !== (t = null === (e = (0, u.k8)({
      colors: n,
      ratio: 5,
      saturationFactor: .6
    })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== t ? t : A
  }, [A, y]), I = b(N), S = b(g), T = r.useCallback(() => {
    var e, t, n, i;
    let r = _.current,
      o = N.current,
      a = j.current,
      c = null == P ? void 0 : P.current,
      s = parseInt(null !== (e = null == I ? void 0 : I.height) && void 0 !== e ? e : ""),
      d = parseInt(null !== (t = null == S ? void 0 : S.height) && void 0 !== t ? t : "");
    if (null != r && null != o && null != a && !isNaN(s) && !isNaN(d)) {
      let e = null !== (n = r.scrollTop) && void 0 !== n ? n : 0,
        t = 0 !== r.scrollHeight ? r.scrollHeight : d + 20,
        u = 0 !== r.clientHeight ? r.clientHeight : d + 20,
        p = d - s,
        m = (0, l.clamp)(t - u, p + 1, d + 20),
        f = p === m ? 1 : (0, l.clamp)((e - p) / (m - p), 0, 1);
      o.style.filter = "brightness(".concat(1 + ((y ? 1.4 : .6) - 1) * f, ")"), o.style.backgroundColor = "color-mix(in oklab,".concat(A, " ").concat((1 - f) * 100, "%, ").concat(O, ")"), a.style.opacity = "".concat(0 + +f), a.style.transform = "translateY(".concat((i = s / 4) + (0 - i) * f, "px)"), null != c && (c.style.opacity = "".concat(1 + -1 * f))
    }
  }, [O, A, null == S ? void 0 : S.height, y, _, null == I ? void 0 : I.height]);
  return r.useEffect(() => {
    T()
  }, [T, y]), r.useEffect(() => {
    let e = _.current,
      t = () => {
        T()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [_, T]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: h.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: h.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: h.stickyBanner,
          ref: N
        })
      }), (0, i.jsx)("div", {
        className: h.backButtonContainer,
        children: (0, i.jsx)(m.Z, {
          className: h.headerButton
        })
      }), (0, i.jsx)("div", {
        className: h.nameContainer,
        children: (0, i.jsx)(a.X6q, {
          ref: j,
          className: h.textApplicationName,
          variant: "heading-lg/extrabold",
          children: v
        })
      })]
    }), (0, p.BQ)(t) ? (0, i.jsx)("div", {
      ref: P,
      className: h.moreMenuButtonContainer,
      children: (0, i.jsx)(f.Z, {
        application: t,
        context: n,
        className: h.headerButton,
        sectionName: x
      })
    }) : null, (0, i.jsx)("div", {
      ref: g,
      className: h.bannerBackground,
      style: {
        backgroundColor: A
      }
    })]
  })
}