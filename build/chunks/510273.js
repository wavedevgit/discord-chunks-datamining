/** Chunk was on 27805 (0b869459509b48f5.js) **/
i.d(t, {
  Z: () => E
}), i(266796);
var n = i(200651),
  r = i(192379),
  o = i(120356),
  s = i.n(o),
  l = i(481060),
  a = i(955204),
  c = i(818765),
  d = i(674680),
  u = i(575740);
let h = e => {
  let {
    color: t
  } = e;
  return (0, n.jsxs)("svg", {
    width: "48",
    height: "28",
    viewBox: "0 0 55 34",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [(0, n.jsx)("rect", {
      x: "10.1968",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 10.1968 7)",
      className: u.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "27.3936",
      y: "0.59021",
      width: "23.4851",
      height: "23.4851",
      transform: "rotate(45 27.3936 0.59021)",
      className: u.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "44.5903",
      y: "7",
      width: "14.4203",
      height: "14.4203",
      transform: "rotate(45 44.5903 7)",
      className: u.__invalid_toastBG
    }), (0, n.jsx)("rect", {
      x: "10.1968",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 10.1968 13)",
      fill: t
    }), (0, n.jsx)("path", {
      d: "M27.3936 4.39355L34.1233 16.2873L27.3936 28.1811L20.6638 16.2873L27.3936 4.39355Z",
      fill: t
    }), (0, n.jsx)("rect", {
      x: "44.5903",
      y: "13",
      width: "6",
      height: "6",
      transform: "rotate(45 44.5903 13)",
      fill: t
    })]
  })
};

function E(e) {
  let {
    achievement: t,
    unlocked: i
  } = e, {
    name: o,
    description: E,
    rarity: g,
    hideDescriptionUntilUnlock: _,
    onAction: L
  } = t, {
    color: m
  } = (0, a.F7)(g);
  r.useEffect(() => {
    let e = setTimeout(() => {
      c.Z.playAchievementUnlockSound()
    }, 50);
    return () => {
      clearTimeout(e)
    }
  }, []);
  let C = null != L && i,
    p = C ? l.P3F : "div";
  return (0, n.jsxs)(p, {
    className: s()(u.container, C && u.actionable),
    onClick: () => {
      C && L()
    },
    children: [(0, n.jsx)("div", {
      className: u.iconContainer,
      children: (0, n.jsx)(d.Z, {
        achievementId: t.id,
        size: d.Z.Sizes.SIZE_40,
        unlocked: i
      })
    }), (0, n.jsxs)("div", {
      className: u.__invalid_nameContainer,
      children: [(0, n.jsx)(l.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: o()
      }), (0, n.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "header-secondary",
        children: _ && !i ? "?????" : E()
      })]
    }), (0, n.jsx)("div", {
      className: u.flair,
      children: (0, n.jsx)(h, {
        color: m
      })
    })]
  })
}