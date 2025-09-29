/** Chunk was on 27087 **/
/** chunk id: 163249, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk714939 = require("./714939.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk22168 = require("./22168.js");

function f(e) {
  let {
    color: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: p.roleTag,
    children: [(0, r.jsx)(a.xko, {
      className: p.roleDot,
      color: t,
      colors: null
    }), (0, r.jsx)("span", {
      className: p.roleText,
      children: n
    })]
  })
}

function h(e) {
  let {
    guild: t,
    display: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(p.banner, t.backgroundClass, {
      [p.bannerOut]: !n
    }),
    children: [(0, r.jsx)("div", {
      className: p.roles,
      children: t.roles.map((e, t) => (0, r.jsx)("div", {
        className: p.rolesRow,
        children: e.map(e => (0, r.jsx)(f, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, r.jsx)("div", {
      className: p.profileCard,
      children: (0, r.jsxs)("div", {
        className: p.avatarContainer,
        children: [(0, r.jsx)(a.qEK, {
          size: a.EFr.SIZE_56,
          "aria-hidden": true,
          status: m.Skl.ONLINE,
          src: t.avatar
        }), (0, r.jsx)(a.Text, {
          color: "header-primary",
          variant: "text-md/bold",
          className: p.avatarName,
          children: t.username
        })]
      })
    })]
  })
}

function x() {
  let e = Chunk647438.useMemo(() => [{
      backgroundClass: Chunk22168.bannerClubs,
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
      backgroundClass: Chunk22168.bannerGaming,
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
      backgroundClass: Chunk22168.bannerHobbies,
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
    [t, l] = Chunk647438.useState(0),
    s = Chunk647438.useRef(module);
  return Chunk647438.useEffect(() => {
    s.current = module
  }), Chunk647438.useEffect(() => {
    if (Chunk607070.Z.useReducedMotion) return;
    let e = setTimeout(() => Chunk120356((exports + 1) % s.current.length), 6332);
    return () => clearTimeout(module)
  }, [exports]), (0, Chunk951288.jsx)("div", {
    className: Chunk22168.bannerContainer,
    "aria-hidden": true,
    children: module.map((e, n) => (0, r.jsx)(h, {
      guild: e,
      display: n === t
    }, n))
  })
}

function b(e) {
  let {
    guild: t,
    everyoneRole: n,
    setEditRoleId: l
  } = e, [s, d] = i.useState(false), m = async () => {
    d(true), await o.Z.createRole(t.id), d(false)
  }, f = i.useCallback(() => {
    l(n.id)
  }, [l, n.id]);
  return (0, r.jsx)(c.NM, {
    children: (0, r.jsxs)(a.hjN, {
      className: p.section,
      title: g.intl.string(g.t.LPJmLy),
      tag: a.RB0.H2,
      children: [(0, r.jsxs)("div", {
        className: p.container,
        children: [(0, r.jsx)(x, {}), (0, r.jsx)(a.X6q, {
          variant: "heading-xl/semibold",
          children: g.intl.string(g.t.ALlnbm)
        }), (0, r.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: p.introBody,
          children: g.intl.string(g.t["1ydhVl"])
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.button,
          children: (0, r.jsx)(a.zxk, {
            variant: "primary",
            text: g.intl.string(g.t.JZZjQE),
            onClick: m,
            loading: s
          })
        })]
      }), (0, r.jsx)(a.$i$, {
        className: p.divider
      }), (0, r.jsx)(u.Z, {
        role: n,
        onClick: f
      })]
    })
  })
}