/** Chunk was on 22274 **/
d.r(t), d.d(t, {
  default: () => U
}), d(388685);
var a = d(255367),
  n = d(73800),
  c = d(120356),
  s = d.n(c),
  o = d(704215),
  l = d(481060),
  i = d(70097),
  r = d(605236),
  f = d(7093),
  u = d(553896),
  p = d(848572),
  _ = d(765018),
  b = d(483444),
  E = d(40347),
  h = d(921944),
  T = d(388032),
  m = d(882714);

function U() {
  var e;
  let t = n.useRef(null),
    [d, c] = n.useState(!1),
    [i, u] = n.useState(!0),
    p = (0, E.Z)(),
    b = null == p ? void 0 : p.currentBadge.id;
  n.useEffect(() => {
    if (null != b) return (0, r.wH)(o.z.NITRO_TENURE_BADGE_LEVEL_UP, (0, _.q)(b), {
      dismissAction: h.L.INDIRECT_ACTION
    }), () => f.Z.setState({
      shouldRenderTenureLevelUp: !1
    })
  }, [b]);
  let U = n.useCallback(() => {
      c(!0)
    }, []),
    M = n.useCallback(() => {
      u(!1)
    }, []);
  if (!i || null == p) return null;
  let N = {
    "--custom-old-badge-color": "linear-gradient(to right, ".concat(null != (e = p.prevBadgeTextGradient) ? e : "transparent", ")"),
    "--custom-new-badge-color": "linear-gradient(to right, ".concat(p.currentBadgeTextGradient, ")")
  };
  return (0, a.jsxs)("div", {
    ref: t,
    className: s()(m.container, {
      [m.loaded]: d
    }),
    style: N,
    children: [d && (0, a.jsx)(l.EqS, {
      containerRef: t,
      children: (0, a.jsx)(l.M0o, {
        className: m.closeButton,
        tooltip: T.intl.string(T.t.cpT0Cg),
        color: l.YX$.SECONDARY,
        size: l.tT7.SIZE_24,
        icon: (0, a.jsx)(l.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: M
      })
    }), (0, a.jsx)(g, {
      onVideoLoaded: U,
      levelUpData: p
    })]
  })
}

function g(e) {
  let {
    onVideoLoaded: t,
    levelUpData: d
  } = e, [c, o] = n.useState(!1), r = (0, p.GG)(), f = n.useRef(null), _ = n.useRef(null);
  n.useEffect(() => {
    null != _.current && _.current.load()
  }, []);
  let E = n.useCallback(() => {
    o(!1), _.current.play(), f.current.style.display = "none", f.current.offsetWidth, f.current.style.display = ""
  }, []);
  if (null == r) return null;
  let {
    currentBadge: h,
    prevBadge: U,
    levelUpVideoSrc: g
  } = d;
  return (0, a.jsxs)("div", {
    className: s()(m.content, {
      [m.ended]: c
    }),
    ref: f,
    children: [(0, a.jsx)(i.Z, {
      ref: _,
      className: m.video,
      src: g,
      playsInline: !0,
      onLoadedData: () => {
        t(), _.current.play()
      },
      onEnded: () => o(!0)
    }), (0, a.jsx)(b.Z, {
      className: m.nitroLogo,
      width: 60,
      height: 15
    }), null != U && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.Text, {
        variant: "display-md",
        className: s()(m.badgeText, m.old),
        children: T.intl.string(U.nameUnformatted)
      }), (0, a.jsx)(l.Text, {
        variant: "display-md",
        className: s()(m.badgeText, m.oldWhite),
        "aria-hidden": !0,
        children: T.intl.string(U.nameUnformatted)
      })]
    }), (0, a.jsx)(l.Text, {
      variant: "display-md",
      className: s()(m.badgeText, m.new),
      children: T.intl.string(h.nameUnformatted)
    }), (0, a.jsx)(l.Text, {
      variant: "text-xs/medium",
      className: m.subscribedText,
      children: T.intl.formatToPlainString(T.t["f/OGgI"], {
        timeFrame: (0, u.q)(h.id, h.tenureReqNumMonths),
        date: r
      })
    }), (0, a.jsx)("div", {
      className: m.actionButtons,
      children: (0, a.jsx)(l.M0o, {
        tooltip: T.intl.string(T.t.hsvh0t),
        color: l.YX$.SECONDARY,
        icon: (0, a.jsx)(l.o1U, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: E
      })
    })]
  })
}