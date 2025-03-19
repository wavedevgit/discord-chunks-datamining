/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => C
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(481060),
  o = n(749210),
  c = n(493544),
  A = n(607070),
  d = n(714939),
  u = n(981631),
  g = n(388032),
  f = n(793846);

function m(e) {
  let {
    color: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: f.roleTag,
    children: [(0, r.jsx)(l.xko, {
      className: f.roleDot,
      color: t
    }), (0, r.jsx)("span", {
      className: f.roleText,
      children: n
    })]
  })
}

function p(e) {
  let {
    guild: t,
    display: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(f.banner, t.backgroundClass, {
      [f.bannerOut]: !n
    }),
    children: [(0, r.jsx)("div", {
      className: f.roles,
      children: t.roles.map((e, t) => (0, r.jsx)("div", {
        className: f.rolesRow,
        children: e.map(e => (0, r.jsx)(m, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, r.jsx)("div", {
      className: f.profileCard,
      children: (0, r.jsxs)("div", {
        className: f.avatarContainer,
        children: [(0, r.jsx)(l.qEK, {
          size: l.EFr.SIZE_56,
          "aria-hidden": !0,
          status: u.Skl.ONLINE,
          src: t.avatar
        }), (0, r.jsx)(l.Text, {
          color: "header-primary",
          variant: "text-md/bold",
          className: f.avatarName,
          children: t.username
        })]
      })
    })]
  })
}

function h() {
  let e = i.useMemo(() => [{
      backgroundClass: f.bannerClubs,
      username: "Wumpus#0000",
      avatar: n(91055),
      roles: [
        [{
          name: g.NW.string(g.t["7oaPPj"]),
          color: "#7e00fc"
        }, {
          name: g.NW.string(g.t["Z/HN6+"]),
          color: "#faa61a"
        }, {
          name: g.NW.string(g.t.lvHTg4),
          color: "#f06ea8"
        }],
        [{
          name: g.NW.string(g.t["6yECkp"]),
          color: "#45ddc0"
        }, {
          name: g.NW.string(g.t["5DabCQ"]),
          color: "#00b0f4"
        }, {
          name: g.NW.string(g.t.bB900d),
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: f.bannerGaming,
      username: "Graggle#0000",
      avatar: n(507003),
      roles: [
        [{
          name: g.NW.string(g.t["xz/Vfn"]),
          color: "#4a76e6"
        }, {
          name: g.NW.string(g.t.Bceru7),
          color: "#ad87ff"
        }, {
          name: g.NW.string(g.t.W51slp),
          color: "#6defcf"
        }],
        [{
          name: g.NW.string(g.t.y9gTiY),
          color: "#ff73fa"
        }, {
          name: g.NW.string(g.t.HslvdX),
          color: "#3ba55c"
        }, {
          name: g.NW.string(g.t.ipL1AA),
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: f.bannerHobbies,
      username: "Mallow#0000",
      avatar: n(552557),
      roles: [
        [{
          name: g.NW.string(g.t.pAFEbm),
          color: "#20d6b8"
        }, {
          name: g.NW.string(g.t["p/HZEB"]),
          color: "#236136"
        }, {
          name: g.NW.string(g.t["9Qp/JS"]),
          color: "#ff9a15"
        }],
        [{
          name: g.NW.string(g.t.craF5e),
          color: "#ff78b9"
        }, {
          name: g.NW.string(g.t.L1TvXF),
          color: "#00b0f4"
        }, {
          name: g.NW.string(g.t.lqKz9P),
          color: "#6f52e4"
        }]
      ]
    }], []),
    [t, s] = i.useState(0),
    a = i.useRef(e);
  return i.useEffect(() => {
    a.current = e
  }), i.useEffect(() => {
    if (A.Z.useReducedMotion) return;
    let e = setTimeout(() => s((t + 1) % a.current.length), 6332);
    return () => clearTimeout(e)
  }, [t]), (0, r.jsx)("div", {
    className: f.bannerContainer,
    "aria-hidden": !0,
    children: e.map((e, n) => (0, r.jsx)(p, {
      guild: e,
      display: n === t
    }, n))
  })
}

function C(e) {
  let {
    guild: t,
    everyoneRole: n,
    setEditRoleId: s
  } = e, [a, A] = i.useState(!1), u = async () => {
    A(!0), await o.Z.createRole(t.id), A(!1)
  }, m = i.useCallback(() => {
    s(n.id)
  }, [s, n.id]);
  return (0, r.jsx)(c.NM, {
    children: (0, r.jsxs)(l.hjN, {
      className: f.section,
      title: g.NW.string(g.t.LPJmLy),
      tag: l.RB0.H2,
      children: [(0, r.jsxs)("div", {
        className: f.container,
        children: [(0, r.jsx)(h, {}), (0, r.jsx)(l.X6q, {
          variant: "heading-xl/semibold",
          children: g.NW.string(g.t.ALlnbm)
        }), (0, r.jsx)(l.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: f.introBody,
          children: g.NW.string(g.t["1ydhVl"])
        }), (0, r.jsx)(l.zxk, {
          className: f.button,
          size: l.zxk.Sizes.MEDIUM,
          onClick: u,
          submitting: a,
          children: g.NW.string(g.t.JZZjQE)
        })]
      }), (0, r.jsx)(l.$i$, {
        className: f.divider
      }), (0, r.jsx)(d.Z, {
        role: n,
        onClick: m
      })]
    })
  })
}