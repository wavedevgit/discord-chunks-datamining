/** Chunk was on 32502 **/
/** chunk id: 513664, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => A,
  dd: () => m,
  lD: () => E
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk873298 = require("./873298.js"),
  Chunk397927 = require("./397927.js"),
  Chunk285058 = require("./285058.jsx"),
  Chunk195043 = require("./195043.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk253932 = require("./253932.js"),
  Chunk790174 = require("./790174.jsx"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk536482 = require("./536482.js"),
  Chunk208746 = require("./208746.js");

function m() {
  let e = c.tz.useSetting();
  return (0, i.jsxs)("div", {
    className: p.QF,
    children: [(0, i.jsxs)("div", {
      className: p.v_,
      children: [(0, i.jsx)(s.Heading, {
        className: p.n7,
        variant: "heading-md/medium",
        color: "text-strong",
        children: g.intl.string(g.t.TqdOvC)
      }), !e && (0, i.jsx)("div", {
        className: p.ZT,
        children: (0, i.jsx)(s.wx6, {
          type: "warning",
          children: g.intl.string(x.default["xxI0/W"])
        })
      })]
    }), (0, i.jsx)(r.A, {})]
  })
}

function A(e) {
  let {
    className: t
  } = e;
  return (0, i.jsxs)(d.A, {
    className: t,
    title: g.intl.string(g.t.Cq98yL),
    children: [(0, i.jsx)(O, {}), (0, i.jsx)(s.cGx, {
      gap: 32
    }), (0, i.jsx)(b, {}), (0, i.jsx)(s.cGx, {
      gap: 32
    }), (0, i.jsx)(j, {}), (0, i.jsx)(s.cGx, {
      gap: 32
    }), (0, i.jsx)(E, {})]
  })
}

function b() {
  let e = c._Z.useSetting(),
    t = [{
      value: l.Qd.ACTIVITY_STATUS_ON,
      name: g.intl.string(g.t.UzGMH9)
    }, {
      value: l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
      name: g.intl.string(x.default["/sAeRY"])
    }, {
      value: l.Qd.ACTIVITY_STATUS_OFF,
      name: g.intl.string(x.default.m3oL7Q)
    }];
  return (0, i.jsxs)(s.nVY, {
    label: g.intl.string(x.default.TG0QsS),
    description: g.intl.string(x.default.OO17Lg),
    children: [(0, i.jsx)(s.z6M, {
      label: g.intl.string(x.default["/LHVbt"]),
      options: t,
      value: e,
      onChange: e => {
        c._Z.updateSetting(e)
      }
    }), (0, i.jsx)(m, {})]
  })
}

function j() {
  let e = c.e.useSetting(),
    t = c.UM.useSetting();
  return (0, i.jsx)(a.x, {
    setting: u.H.ACTIVITY_PRIVACY_RICH_PRESENCE,
    children: (0, i.jsxs)(s.nVY, {
      label: g.intl.string(x.default["5rYBAQ"]),
      children: [(0, i.jsx)(s.dOG, {
        label: g.intl.string(x.default.khuuzv),
        description: g.intl.string(x.default["8EWsJ8"]),
        id: "allow-friends-to-join-my-game",
        checked: e,
        onChange: e => c.e.updateSetting(e)
      }), (0, i.jsx)(s.dOG, {
        label: g.intl.string(x.default.Uz5Ipi),
        description: g.intl.string(x.default.CZI2Gb),
        id: "allow-vc-join-without-request",
        checked: t,
        onChange: e => c.UM.updateSetting(e)
      })]
    })
  })
}

function O() {
  let e = c.tz.useSetting(),
    t = o.isPlatformEmbedded ? g.intl.string(x.default.UQ9RHJ) : g.intl.string(g.t.oKqC4t);
  return (0, i.jsx)(a.x, {
    setting: u.H.ACTIVITY_PRIVACY_STATUS,
    children: (0, i.jsxs)(s.BJc, {
      gap: 32,
      children: [(0, i.jsx)("div", {
        children: g.intl.string(x.default.t2YsrV)
      }), (0, i.jsx)(s.dOG, {
        label: g.intl.string(x.default.WhdCGP),
        description: t,
        id: "share-my-activity",
        checked: e,
        onChange: c.tz.updateSetting
      })]
    })
  })
}

function E() {
  return (0, i.jsx)(a.x, {
    setting: u.H.ACTIVITY_PRIVACY_TOS,
    children: (0, i.jsx)(s.ZpM, {
      type: s.ZpM.Types.PRIMARY,
      className: p.AX,
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: g.intl.format(g.t.xvCsx4, {
          termsLink: h.X7G.TERMS,
          privacyLink: h.X7G.PRIVACY
        })
      })
    })
  })
}