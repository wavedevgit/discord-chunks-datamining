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
    className: f.roleTag,
    children: [(0, r.jsx)(s.xko, {
      className: f.roleDot,
      color: t,
      colors: null
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
        children: e.map(e => (0, r.jsx)(b, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, r.jsx)("div", {
      className: f.profileCard,
      children: (0, r.jsxs)("div", {
        className: f.avatarContainer,
        children: [(0, r.jsx)(s.qEK, {
          size: s.EFr.SIZE_56,
          "aria-hidden": true,
          status: g.Skl.ONLINE,
          src: t.avatar
        }), (0, r.jsx)(s.Text, {
          color: "text-strong",
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
          name: m.intl.string(m.t["7oaPPo"]),
          color: "#7e00fc"
        }, {
          name: m.intl.string(m.t["Z/HN61"]),
          color: "#faa61a"
        }, {
          name: m.intl.string(m.t.lvHTg0),
          color: "#f06ea8"
        }],
        [{
          name: m.intl.string(m.t["6yECkg"]),
          color: "#45ddc0"
        }, {
          name: m.intl.string(m.t["5DabCV"]),
          color: "#00b0f4"
        }, {
          name: m.intl.string(m.t.bB900T),
          color: "#ba1616"
        }]
      ]
    }, {
      backgroundClass: f.bannerGaming,
      username: "Graggle#0000",
      avatar: n(507003),
      roles: [
        [{
          name: m.intl.string(m.t["xz/Vfn"]),
          color: "#4a76e6"
        }, {
          name: m.intl.string(m.t.Bceruw),
          color: "#ad87ff"
        }, {
          name: m.intl.string(m.t.W51slj),
          color: "#6defcf"
        }],
        [{
          name: m.intl.string(m.t.y9gTiX),
          color: "#ff73fa"
        }, {
          name: m.intl.string(m.t.HslvdS),
          color: "#3ba55c"
        }, {
          name: m.intl.string(m.t.ipL1AG),
          color: "#ff1b66"
        }]
      ]
    }, {
      backgroundClass: f.bannerHobbies,
      username: "Mallow#0000",
      avatar: n(552557),
      roles: [
        [{
          name: m.intl.string(m.t.pAFEbr),
          color: "#20d6b8"
        }, {
          name: m.intl.string(m.t["p/HZEE"]),
          color: "#236136"
        }, {
          name: m.intl.string(m.t["9Qp/JQ"]),
          color: "#ff9a15"
        }],
        [{
          name: m.intl.string(m.t.craF5a),
          color: "#ff78b9"
        }, {
          name: m.intl.string(m.t.L1TvXF),
          color: "#00b0f4"
        }, {
          name: m.intl.string(m.t.lqKz9F),
          color: "#6f52e4"
        }]
      ]
    }], []),
    [t, l] = i.useState(0),
    a = i.useRef(e);
  return i.useEffect(() => {
    a.current = e
  }), i.useEffect(() => {
    if (d.Z.useReducedMotion) return;
    let e = setTimeout(() => l((t + 1) % a.current.length), 6332);
    return () => clearTimeout(e)
  }, [t]), (0, r.jsx)("div", {
    className: f.bannerContainer,
    "aria-hidden": true,
    children: e.map((e, n) => (0, r.jsx)(p, {
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
      className: f.section,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: m.intl.string(m.t["LPJmL/"])
      }), (0, r.jsxs)("div", {
        className: f.container,
        children: [(0, r.jsx)(h, {}), (0, r.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.ALlnbi)
        }), (0, r.jsx)(s.Text, {
          color: "text-default",
          variant: "text-md/normal",
          className: f.introBody,
          children: m.intl.string(m.t["1ydhVp"])
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: f.button,
          children: (0, r.jsx)(s.Button, {
            variant: "primary",
            text: m.intl.string(m.t.JZZjQK),
            onClick: g,
            loading: a
          })
        })]
      }), (0, r.jsx)(s.izJ, {
        className: f.divider
      }), (0, r.jsx)(u.Z, {
        role: n,
        onClick: b
      })]
    })
  })
}