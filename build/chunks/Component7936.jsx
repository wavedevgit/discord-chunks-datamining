/** Chunk was on 86142 **/
/** chunk id: 7936, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => A
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
let A = () => {
  let [e, t] = i.useState(""), [s, A] = i.useState(""), [x, _] = i.useState(false), [E, b] = i.useState(false), [v, j] = i.useState(null), [y, S] = i.useState(null), N = (0, a.bG)([d.A], () => d.A.getCountryCode()), O = N.code.split(" ")[0], I = async () => {
    try {
      await c.A.resendCode(e)
    } catch (e) {
      S(e.body.message)
    }
  }, T = async () => {
    _(true);
    try {
      let {
        token: t
      } = await c.A.verifyPhone(O + e, s);
      j(null), S(null), b(true), c.A.validatePhoneForSupport(t)
    } catch (e) {
      e.body.message ? (j(null), S(e.body.message)) : (j(e.body.phone), S(e.body.code))
    } finally {
      _(false)
    }
  }, C = (0, r.jsxs)(f.Ay, {
    children: [(0, r.jsx)(f._V, {
      src: n(142041)
    }), (0, r.jsxs)(f.hE, {
      className: l()(m.QX, g.Uu, g.wq, g.Hu),
      children: [p.intl.string(p.t.WWzQta), (0, r.jsx)(o.yr3, {
        size: "md",
        color: "currentColor",
        className: m.oY
      })]
    })]
  });
  return E ? C : (0, r.jsxs)(f.Ay, {
    children: [(0, r.jsx)(f.hE, {
      children: p.intl.string(p.t.o4JNrO)
    }), (0, r.jsx)(f.tK, {
      className: m.Ot,
      children: p.intl.string(p.t.y0tVbq)
    }), (0, r.jsxs)(f.eB, {
      className: m.QX,
      children: [(0, r.jsx)(h.A, {
        label: p.intl.string(p.t["eJnn0+"]),
        alpha2: N.alpha2,
        countryCode: O,
        value: e,
        autoComplete: "off",
        spellCheck: "false",
        onChange: t,
        forceMode: u.Pd.PHONE,
        error: v
      }), (0, r.jsx)(f.pd, {
        className: m.QX,
        label: p.intl.string(p.t.OdzNbm),
        value: s,
        onChange: A,
        maxLength: 6,
        error: y
      }), (0, r.jsx)(o.QWc, {
        text: p.intl.string(p.t["5b60gi"]),
        onClick: I
      }), (0, r.jsx)("div", {
        className: m.QX,
        children: (0, r.jsx)(o.Button, {
          text: p.intl.string(p.t.i4jeWR),
          fullWidth: true,
          onClick: T,
          loading: x
        })
      })]
    })]
  })
}