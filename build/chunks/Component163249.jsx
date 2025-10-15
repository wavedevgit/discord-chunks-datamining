/** Chunk was on 64982 **/
/** chunk id: 163249, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk714939 = require("./714939.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk203552 = require("./203552.js");

function f(e) {
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

function h(e) {
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
        children: e.map(e => (0, r.jsx)(f, {
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
          status: g.Skl.ONLINE,
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
  let e = Chunk647438.useMemo(() => [{
      backgroundClass: Chunk203552.bannerClubs,
      username: "Wumpus#0000",
      avatar: require("./91055.js"),
      roles: [
        [{
          name: Chunk388032.intl.string(Chunk388032.t["7oaPPo"]),
          color: "#7e00fc"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["Z/HN61"]),
          color: "#faa61a"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.lvHTg0),
          color: "#f06ea8"
        }],
        [{
          name: Chunk388032.intl.string(Chunk388032.t["6yECkg"]),
          color: "#45ddc0"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["5DabCV"]),
          color: "#00b0f4"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.bB900T),
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: Chunk203552.bannerGaming,
      username: "Graggle#0000",
      avatar: require("./507003.js"),
      roles: [
        [{
          name: Chunk388032.intl.string(Chunk388032.t["xz/Vfn"]),
          color: "#4a76e6"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.Bceruw),
          color: "#ad87ff"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.W51slj),
          color: "#6defcf"
        }],
        [{
          name: Chunk388032.intl.string(Chunk388032.t.y9gTiX),
          color: "#ff73fa"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.HslvdS),
          color: "#3ba55c"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.ipL1AG),
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: Chunk203552.bannerHobbies,
      username: "Mallow#0000",
      avatar: require("./552557.js"),
      roles: [
        [{
          name: Chunk388032.intl.string(Chunk388032.t.pAFEbr),
          color: "#20d6b8"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["p/HZEE"]),
          color: "#236136"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t["9Qp/JQ"]),
          color: "#ff9a15"
        }],
        [{
          name: Chunk388032.intl.string(Chunk388032.t.craF5a),
          color: "#ff78b9"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.L1TvXF),
          color: "#00b0f4"
        }, {
          name: Chunk388032.intl.string(Chunk388032.t.lqKz9F),
          color: "#6f52e4"
        }]
      ]
    }], []),
    [t, l] = Chunk647438.useState(0),
    a = Chunk647438.useRef(module);
  return Chunk647438.useEffect(() => {
    a.current = module
  }), Chunk647438.useEffect(() => {
    if (Chunk607070.Z.useReducedMotion) return;
    let e = setTimeout(() => Chunk120356((exports + 1) % a.current.length), 6332);
    return () => clearTimeout(module)
  }, [exports]), (0, Chunk951288.jsx)("div", {
    className: Chunk203552.bannerContainer,
    "aria-hidden": true,
    children: module.map((e, n) => (0, r.jsx)(h, {
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
  } = e, [a, d] = i.useState(false), g = async () => {
    d(true), await o.Z.createRole(t.id), d(false)
  }, f = i.useCallback(() => {
    l(n.id)
  }, [l, n.id]);
  return (0, r.jsx)(c.NM, {
    children: (0, r.jsxs)("div", {
      className: p.section,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: m.intl.string(m.t["LPJmL/"])
      }), (0, r.jsxs)("div", {
        className: p.container,
        children: [(0, r.jsx)(b, {}), (0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.ALlnbi)
        }), (0, r.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-md/normal",
          className: p.introBody,
          children: m.intl.string(m.t["1ydhVp"])
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.button,
          children: (0, r.jsx)(s.Button, {
            variant: "primary",
            text: m.intl.string(m.t.JZZjQK),
            onClick: g,
            loading: a
          })
        })]
      }), (0, r.jsx)(s.izJ, {
        className: p.divider
      }), (0, r.jsx)(u.Z, {
        role: n,
        onClick: f
      })]
    })
  })
}