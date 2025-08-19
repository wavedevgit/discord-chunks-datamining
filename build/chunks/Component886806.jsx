/** Chunk was on 27978 **/
/** chunk id: 886806, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk893776 = require("./893776.js"),
  Chunk493773 = require("./493773.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk17894 = require("./17894.js"),
  Chunk108427 = require("./108427.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk767307 = require("./767307.js"),
  Chunk197571 = require("./197571.js");

function b(e) {
  n.g.location.assign(e)
}

function v(e) {
  let {
    location: t,
    transitionTo: l = b
  } = e, [s, v] = i.useState("submitting"), E = i.useRef(true);
  (0, c.ZP)(() => {
    (0, p.e)("verify_email");
    let e = (0, u.Z)(t);
    if (null == e) return void v("failed");
    (async () => {
      try {
        let t = await o.Z.verify(e);
        v("succeeded"), E.current = t
      } catch (e) {
        v("failed")
      }
    })()
  });
  let j = i.useCallback(() => {
      l(f.Z5c.LOGIN, {
        source: "verify_email"
      })
    }, [l]),
    I = i.useCallback(() => {
      m.default.track(f.rMx.VERIFY_ACCOUNT_APP_OPENED, {
        verifying_user_id: E.current
      }), (0, h.Z)("verify_email")
    }, []);
  return "failed" === s ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Ee, {
      src: n(375673),
      className: a()(_.image, x.marginBottom20)
    }), (0, r.jsx)(d.Dx, {
      className: x.marginBottom8,
      children: g.intl.string(g.t.PCgG39)
    }), (0, r.jsx)(d.DK, {
      className: x.marginBottom40,
      children: g.intl.string(g.t.tQpeAw)
    }), (0, r.jsx)(d.zx, {
      onClick: j,
      children: g.intl.string(g.t.dKhVQE)
    })]
  }) : "succeeded" === s ? (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Ee, {
      src: n(73962),
      className: a()(_.image, x.marginBottom20)
    }), (0, r.jsx)(d.Dx, {
      className: x.marginBottom40,
      children: g.intl.string(g.t.dAfGb2)
    }), (0, r.jsx)(d.zx, {
      onClick: I,
      children: g.intl.string(g.t.uJWIj4)
    })]
  }) : (0, r.jsxs)(d.ZP, {
    children: [(0, r.jsx)(d.Ee, {
      src: n(892235),
      className: a()(_.image, x.marginBottom20)
    }), (0, r.jsx)(d.Dx, {
      className: x.marginBottom8,
      children: g.intl.string(g.t["0c8+5u"])
    }), (0, r.jsx)(d.DK, {
      className: x.marginBottom40,
      children: g.intl.string(g.t.ULTCBA)
    }), (0, r.jsx)(d.zx, {
      submitting: true,
      color: d.zx.Colors.PRIMARY
    })]
  })
}
Chunk442837.ZP.initialize()