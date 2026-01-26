/** Chunk was on 39048 **/
/** chunk id: 763582, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk775602 = require("./775602.js"),
  Chunk50249 = require("./50249.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk389612 = require("./389612.js");

function f(e) {
  let {
    color: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: p.b6,
    children: [(0, r.jsx)(a.RYH, {
      className: p.m4,
      color: t,
      colors: null
    }), (0, r.jsx)("span", {
      className: p.yj,
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
    className: s()(p.vK, t.backgroundClass, {
      [p.lK]: !n
    }),
    children: [(0, r.jsx)("div", {
      className: p.Ot,
      children: t.roles.map((e, t) => (0, r.jsx)("div", {
        className: p.UK,
        children: e.map(e => (0, r.jsx)(f, {
          color: e.color,
          children: e.name
        }, e.name))
      }, t))
    }), (0, r.jsx)("div", {
      className: p.Kq,
      children: (0, r.jsxs)("div", {
        className: p.H,
        children: [(0, r.jsx)(a.euF, {
          size: a._3J.SIZE_56,
          "aria-hidden": true,
          status: g.clD.ONLINE,
          src: t.avatar
        }), (0, r.jsx)(a.Text, {
          color: "text-strong",
          variant: "text-md/bold",
          className: p.HQ,
          children: t.username
        })]
      })
    })]
  })
}

function b() {
  let e = i.useMemo(() => [{
      backgroundClass: p.Cy,
      username: "Wumpus#0000",
      avatar: n(75169),
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
      backgroundClass: p.Gp,
      username: "Graggle#0000",
      avatar: n(818573),
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
      backgroundClass: p.$t,
      username: "Mallow#0000",
      avatar: n(516574),
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
    s = i.useRef(e);
  return i.useEffect(() => {
    s.current = e
  }), i.useEffect(() => {
    if (d.A.useReducedMotion) return;
    let e = setTimeout(() => l((t + 1) % s.current.length), 6332);
    return () => clearTimeout(e)
  }, [t]), (0, r.jsx)("div", {
    className: p.cI,
    "aria-hidden": true,
    children: e.map((e, n) => (0, r.jsx)(h, {
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
  } = e, [s, d] = i.useState(false), g = async () => {
    d(true), await o.A.createRole(t.id), d(false)
  }, f = i.useCallback(() => {
    l(n.id)
  }, [l, n.id]);
  return (0, r.jsx)(c.gJ, {
    children: (0, r.jsxs)("div", {
      className: p.uW,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: m.intl.string(m.t["LPJmL/"])
      }), (0, r.jsxs)("div", {
        className: p.kL,
        children: [(0, r.jsx)(b, {}), (0, r.jsx)(a.Heading, {
          variant: "heading-xl/semibold",
          children: m.intl.string(m.t.ALlnbi)
        }), (0, r.jsx)(a.Text, {
          color: "text-default",
          variant: "text-md/normal",
          className: p.NQ,
          children: m.intl.string(m.t["1ydhVp"])
        }), (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.x6,
          children: (0, r.jsx)(a.Button, {
            variant: "primary",
            text: m.intl.string(m.t.JZZjQK),
            onClick: g,
            loading: s
          })
        })]
      }), (0, r.jsx)(a.cGx, {
        className: p.yF
      }), (0, r.jsx)(u.A, {
        role: n,
        onClick: f
      })]
    })
  })
}