/** Chunk was on 35755 **/
n.d(t, {
  Z: () => y
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
  f = n(488977),
  h = n(861273);

function v(e) {
  let [t, n] = l.useState(void 0);
  return l.useEffect(() => {
    null != e.current && n(getComputedStyle(e.current))
  }, [e]), t
}

function y(e) {
  let {
    application: t,
    context: n,
    name: y,
    iconURL: b,
    scrollerRef: N,
    sectionName: g
  } = e, x = (0, o.ap)((0, s.ZP)()), j = l.useRef(null), E = l.useRef(null), P = l.useRef(null), C = l.useRef(null), O = (0, a.dQu)(a.TVs.colors.BG_BASE_PRIMARY).hex(), A = (0, c.ZP)("number" == typeof b ? "" : b, null != O ? O : ""), I = l.useMemo(() => {
    var e, t;
    let n = (0, r.compact)([u.Z.parseHexString(A), u.Z.parseHexString(x ? "#000000" : "#ffffff")]);
    return null !== (t = null === (e = (0, d.k8)({
      colors: n,
      ratio: 5,
      saturationFactor: .6
    })) || void 0 === e ? void 0 : e.toHexString()) && void 0 !== t ? t : A
  }, [A, x]), _ = v(j), S = v(E), T = l.useCallback(() => {
    var e, t, n, i;
    let l = N.current,
      o = j.current,
      a = P.current,
      s = null == C ? void 0 : C.current,
      c = parseInt(null !== (e = null == _ ? void 0 : _.height) && void 0 !== e ? e : ""),
      u = parseInt(null !== (t = null == S ? void 0 : S.height) && void 0 !== t ? t : "");
    if (null != l && null != o && null != a && !isNaN(c) && !isNaN(u)) {
      let e = null !== (n = l.scrollTop) && void 0 !== n ? n : 0,
        t = 0 !== l.scrollHeight ? l.scrollHeight : u + 20,
        d = 0 !== l.clientHeight ? l.clientHeight : u + 20,
        p = u - c,
        m = (0, r.clamp)(t - d, p + 1, u + 20),
        f = p === m ? 1 : (0, r.clamp)((e - p) / (m - p), 0, 1);
      o.style.filter = "brightness(".concat(1 + ((x ? 1.4 : .6) - 1) * f, ")"), o.style.backgroundColor = "color-mix(in oklab,".concat(A, " ").concat((1 - f) * 100, "%, ").concat(I, ")"), a.style.opacity = "".concat(0 + +f), a.style.transform = "translateY(".concat((i = c / 4) + (0 - i) * f, "px)"), null != s && (s.style.opacity = "".concat(1 + -1 * f))
    }
  }, [I, A, null == S ? void 0 : S.height, x, N, null == _ ? void 0 : _.height]);
  return l.useEffect(() => {
    T()
  }, [T, x]), l.useEffect(() => {
    let e = N.current,
      t = () => {
        T()
      };
    return null == e || e.addEventListener("scroll", t), () => {
      null == e || e.removeEventListener("scroll", t)
    }
  }, [N, T]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: h.stickyContainer,
      children: [(0, i.jsx)("div", {
        className: h.stickyBannerContainer,
        children: (0, i.jsx)("div", {
          className: h.stickyBanner,
          ref: j
        })
      }), (0, i.jsx)("div", {
        className: h.backButtonContainer,
        children: (0, i.jsx)(m.Z, {
          className: h.headerButton
        })
      }), (0, i.jsx)("div", {
        className: h.nameContainer,
        children: (0, i.jsx)(a.X6q, {
          ref: P,
          className: h.textApplicationName,
          variant: "heading-lg/extrabold",
          children: y
        })
      })]
    }), (0, p.BQ)(t) ? (0, i.jsx)("div", {
      ref: C,
      className: h.moreMenuButtonContainer,
      children: (0, i.jsx)(f.Z, {
        application: t,
        context: n,
        className: h.headerButton,
        sectionName: g
      })
    }) : null, (0, i.jsx)("div", {
      ref: E,
      className: h.bannerBackground,
      style: {
        backgroundColor: A
      }
    })]
  })
}