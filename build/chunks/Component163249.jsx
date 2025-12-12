/** Chunk was on 9536 **/
/** chunk id: 163249, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk714939 = require("./714939.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk500591 = require("./500591.js");

function b(e) {
  let {
    color: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: m.roleTag,
    children: [(0, r.jsx)(s.xko, {
      className: m.roleDot,
      color: t,
      colors: null
    }), (0, r.jsx)("span", {
      className: m.roleText,
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
    className: a()(m.banner, t.backgroundClass, {
      [m.bannerOut]: !n
    }),
    children: [(0, r.jsx)("div", {
      className: m.roles,
      children: t.roles.map((e, t) => (0, r.jsx)("div", {
        className: m.rolesRow,
        children: e.map(e => (0, r.jsx)(b, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, r.jsx)("div", {
      className: m.profileCard,
      children: (0, r.jsxs)("div", {
        className: m.avatarContainer,
        children: [(0, r.jsx)(s.qEK, {
          size: s.EFr.SIZE_56,
          "aria-hidden": true,
          status: g.Skl.ONLINE,
          src: t.avatar
        }), (0, r.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-md/bold",
          className: m.avatarName,
          children: t.username
        })]
      })
    })]
  })
}

function h() {
  let e = Chunk473749.useMemo(() => [{
      backgroundClass: Chunk500591.bannerClubs,
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
      backgroundClass: Chunk500591.bannerGaming,
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
      backgroundClass: Chunk500591.bannerHobbies,
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
    [t, l] = Chunk473749.useState(0),
    a = Chunk473749.useRef(module);
  return Chunk473749.useEffect(() => {
    a.current = module
  }), Chunk473749.useEffect(() => {
    if (Chunk607070.Z.useReducedMotion) return;
    let e = setTimeout(() => Chunk120356((exports + 1) % a.current.length), 6332);
    return () => clearTimeout(module)
  }, [exports]), (0, Chunk54381.jsx)("div", {
    className: Chunk500591.bannerContainer,
    "aria-hidden": true,
    children: module.map((e, n) => (0, r.jsx)(p, {
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
  }, b = i.useCallback(() => {
    l(n.id)
  }, [l, n.id]);
  return (0, r.jsx)(c.NM, {
    children: (0, r.jsxs)("div", {
      className: m.section,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: f.intl.string(f.t["LPJmL/"])
      }), (0, r.jsxs)("div", {
        className: m.container,
        children: [(0, r.jsx)(h, {}), (0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: f.intl.string(f.t.ALlnbi)
        }), (0, r.jsx)(s.Text, {
          color: "text-default",
          variant: "text-md/normal",
          className: m.introBody,
          children: f.intl.string(f.t["1ydhVp"])
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: m.button,
          children: (0, r.jsx)(s.Button, {
            variant: "primary",
            text: f.intl.string(f.t.JZZjQK),
            onClick: g,
            loading: a
          })
        })]
      }), (0, r.jsx)(s.izJ, {
        className: m.divider
      }), (0, r.jsx)(u.Z, {
        role: n,
        onClick: b
      })]
    })
  })
}