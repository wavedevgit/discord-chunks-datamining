/** Chunk was on 76282 **/
n.d(t, {
  Z: () => p
}), n(266796);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(481060),
  s = n(955204),
  c = n(818765),
  u = n(674680),
  d = n(309008);
let _ = e => {
  let {
    color: t
  } = e;
  return (0, r.jsxs)("svg", {
    width: "48",
    height: "28",
    viewBox: "0 0 55 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, r.jsx)("rect", {
      x: "10.1968",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 10.1968 7)",
      className: d.__invalid_toastBG
    }), (0, r.jsx)("rect", {
      x: "27.3936",
      y: "0.59021",
      width: "23.4851",
      height: "23.4851",
      transform: "rotate(45 27.3936 0.59021)",
      className: d.__invalid_toastBG
    }), (0, r.jsx)("rect", {
      x: "44.5903",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 44.5903 7)",
      className: d.__invalid_toastBG
    }), (0, r.jsx)("rect", {
      x: "10.1968",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 10.1968 13)",
      fill: t
    }), (0, r.jsx)("path", {
      d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
      fill: t
    }), (0, r.jsx)("rect", {
      x: "44.5903",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 44.5903 13)",
      fill: t
    })]
  })
};

function p(e) {
  let {
    achievement: t,
    unlocked: n
  } = e, {
    name: o,
    description: p,
    rarity: E,
    hideDescriptionUntilUnlock: f,
    onAction: m
  } = t, {
    color: h
  } = (0, s.F7)(E);
  i.useEffect(() => {
    let e = setTimeout(() => {
      c.Z.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let g = null != m && n,
    b = g ? a.P3F : "div";
  return (0, r.jsxs)(b, {
    className: l()(d.container, g && d.actionable),
    onClick: () => {
      g && m()
    },
    children: [(0, r.jsx)("div", {
      className: d.iconContainer,
      children: (0, r.jsx)(u.Z, {
        achievementId: t.id,
        size: u.Z.Sizes.SIZE_40,
        unlocked: n
      })
    }), (0, r.jsxs)("div", {
      className: d.__invalid_nameContainer,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: o()
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: f && !n ? "?????" : p()
      })]
    }), (0, r.jsx)("div", {
      className: d.flair,
      children: (0, r.jsx)(_, {
        color: h
      })
    })]
  })
}