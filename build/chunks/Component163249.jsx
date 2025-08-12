/** Chunk was on 5533 **/
/** chunk id: 163249, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk714939 = require("./714939.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk29749 = require("./29749.js");

function h(e) {
  let {
    color: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: p.roleTag,
    children: [(0, r.jsx)(s.xko, {
      className: p.roleDot,
      color: t,
      colors: null
    }), (0, r.jsx)("span", {
      className: p.roleText,
      children: n
    })]
  })
}

function f(e) {
  let {
    guild: t,
    display: n
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(p.banner, t.backgroundClass, {
      [p.bannerOut]: !n
    }),
    children: [(0, r.jsx)("div", {
      className: p.roles,
      children: t.roles.map((e, t) => (0, r.jsx)("div", {
        className: p.rolesRow,
        children: e.map(e => (0, r.jsx)(h, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, r.jsx)("div", {
      className: p.profileCard,
      children: (0, r.jsxs)("div", {
        className: p.avatarContainer,
        children: [(0, r.jsx)(s.qEK, {
          size: s.EFr.SIZE_56,
          "aria-hidden": true,
          status: m.Skl.ONLINE,
          src: t.avatar
        }), (0, r.jsx)(s.Text, {
          color: "header-primary",
          variant: "text-md/bold",
          className: p.avatarName,
          children: t.username
        })]
      })
    })]
  })
}

function b() {
  let e = Chunk73800.useMemo(() => [{
      backgroundClass: Chunk29749.bannerClubs,
      username: "Wumpus#0000",
      avatar: require("./91055.js"),
      roles: [
        [{
          name: Chunk388032.intl.string(Chunk388032.t["7oaPPj"]),
          color: "#7e00fc"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["Z/HN6+"]),
          color: "#faa61a"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.lvHTg4),
          color: "#f06ea8"
        }],
        [{
          name: Chunk388032.intl.string(Chunk388032.t["6yECkp"]),
          color: "#45ddc0"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["5DabCQ"]),
          color: "#00b0f4"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.bB900d),
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: Chunk29749.bannerGaming,
      username: "Graggle#0000",
      avatar: require("./507003.js"),
      roles: [
        [{
          name: Chunk388032.intl.string(Chunk388032.t["xz/Vfn"]),
          color: "#4a76e6"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.Bceru7),
          color: "#ad87ff"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.W51slp),
          color: "#6defcf"
        }],
        [{
          name: Chunk388032.intl.string(Chunk388032.t.y9gTiY),
          color: "#ff73fa"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.HslvdX),
          color: "#3ba55c"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.ipL1AA),
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: Chunk29749.bannerHobbies,
      username: "Mallow#0000",
      avatar: require("./552557.js"),
      roles: [
        [{
          name: Chunk388032.intl.string(Chunk388032.t.pAFEbm),
          color: "#20d6b8"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["p/HZEB"]),
          color: "#236136"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["9Qp/JS"]),
          color: "#ff9a15"
        }],
        [{
          name: Chunk388032.intl.string(Chunk388032.t.craF5e),
          color: "#ff78b9"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.L1TvXF),
          color: "#00b0f4"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.lqKz9P),
          color: "#6f52e4"
        }]
      ]
    }], []),
    [t, l] = Chunk73800.useState(0),
    a = Chunk73800.useRef(module);
  return Chunk73800.useEffect(() => {
    a.current = module
  }), Chunk73800.useEffect(() => {
    if (Chunk607070.Z.useReducedMotion) return;
    let e = setTimeout(() => Chunk120356((exports + 1) % a.current.length), 6332);
    return () => clearTimeout(module)
  }, [exports]), (0, Chunk255367.jsx)("div", {
    className: Chunk29749.bannerContainer,
    "aria-hidden": true,
    children: module.map((e, n) => (0, r.jsx)(f, {
      guild: e,
      display: n === t
    }, n))
  })
}

function x(e) {
  let {
    guild: t,
    everyoneRole: n,
    setEditRoleId: l
  } = e, [a, d] = i.useState(false), m = async () => {
    d(true), await o.Z.createRole(t.id), d(false)
  }, h = i.useCallback(() => {
    l(n.id)
  }, [l, n.id]);
  return (0, r.jsx)(c.NM, {
    children: (0, r.jsxs)(s.hjN, {
      className: p.section,
      title: g.intl.string(g.t.LPJmLy),
      tag: s.RB0.H2,
      children: [(0, r.jsxs)("div", {
        className: p.container,
        children: [(0, r.jsx)(b, {}), (0, r.jsx)(s.X6q, {
          variant: "heading-xl/semibold",
          children: g.intl.string(g.t.ALlnbm)
        }), (0, r.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: p.introBody,
          children: g.intl.string(g.t["1ydhVl"])
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.button,
          children: (0, r.jsx)(s.zxk, {
            variant: "primary",
            text: g.intl.string(g.t.JZZjQE),
            onClick: m,
            loading: a
          })
        })]
      }), (0, r.jsx)(s.$i$, {
        className: p.divider
      }), (0, r.jsx)(u.Z, {
        role: n,
        onClick: h
      })]
    })
  })
}