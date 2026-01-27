/** Chunk was on 86142 **/
/** chunk id: 7936, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk557722 = require("./557722.js"),
  Chunk628387 = require("./628387.js"),
  Chunk148864 = require("./148864.js"),
  Chunk146571 = require("./146571.jsx"),
  Chunk854378 = require("./854378.jsx");
require("./53516.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk20976 = require("./20976.js"),
  Chunk473169 = require("./473169.js");
let m = () => {
  let [e, t] = i.useState(""), [s, m] = i.useState(""), [A, x] = i.useState(false), [E, v] = i.useState(false), [y, b] = i.useState(null), [j, O] = i.useState(null), I = (0, a.bG)([d.A], () => d.A.getCountryCode()), S = I.code.split(" ")[0], N = async () => {
    try {
      await c.A.resendCode(e)
    } catch (e) {
      O(e.body.message)
    }
  }, C = async () => {
    x(true);
    try {
      let {
        token: t
      } = await c.A.verifyPhone(S + e, s);
      b(null), O(null), v(true), c.A.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (b(null), O(e.body.message)) : (b(e.body.phone), O(e.body.code))
    } finally {
      x(false)
    }
  }, T = (0, r.jsxs)(p.Ay, {
    children: [(0, r.jsx)(p._V, {
      src: n(142041)
    }), (0, r.jsxs)(p.hE, {
      className: l()(_.QX, f.Uu, f.wq, f.Hu),
      children: [g.intl.string(g.t.WWzQta), (0, r.jsx)(o.yr3, {
        size: "md",
        color: "currentColor",
        className: _.oY
      })]
    })]
  });
  return E ? T : (0, r.jsxs)(p.Ay, {
    children: [(0, r.jsx)(p.hE, {
      children: g.intl.string(g.t.o4JNrO)
    }), (0, r.jsx)(p.tK, {
      className: _.Ot,
      children: g.intl.string(g.t.y0tVbq)
    }), (0, r.jsxs)(p.eB, {
      className: _.QX,
      children: [(0, r.jsx)(h.A, {
        label: g.intl.string(g.t["eJnn0+"]),
        alpha2: I.alpha2,
        countryCode: S,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Pd.PHONE,
        error: y
      }), (0, r.jsx)(p.pd, {
        className: _.QX,
        label: g.intl.string(g.t.OdzNbm),
        value: s,
        onChange: m,
        maxLength: 6,
        error: j
      }), (0, r.jsx)(o.QWc, {
        text: g.intl.string(g.t["5b60gi"]),
        onClick: N
      }), (0, r.jsx)("div", {
        className: _.QX,
        children: (0, r.jsx)(o.Button, {
          text: g.intl.string(g.t.i4jeWR),
          fullWidth: true,
          onClick: C,
          loading: A
        })
      })]
    })]
  })
}