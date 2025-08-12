/** Chunk was on 27978 **/
/** chunk id: 637776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk231239 = require("./231239.js"),
  Chunk129293 = require("./129293.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk844800 = require("./844800.js"),
  Chunk580497 = require("./580497.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk306293 = require("./306293.js");

function g(e) {
  let {
    location: t
  } = e, [g, _] = i.useState(false), {
    verifySuccess: x,
    verifyErrors: b,
    redirectGuildId: E
  } = (0, l.e7)([d.Z], () => d.Z.getState());
  i.useEffect(() => {
    let e = (0, s.Z)(t);
    o.Z.verify(e), (0, u.e)("verify_hub_email")
  }, [t]);
  let v = () => {
    (0, h.Z)(E), _(true)
  };
  return g ? (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)(a.Dx, {
      className: m.title,
      children: f.intl.string(f.t.csrAMD)
    }), (0, r.jsx)(a.DK, {
      className: m.subtitle,
      children: f.intl.string(f.t["m1+IBg"])
    }), (0, r.jsx)(a.zx, {
      className: m.spacedButton,
      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(E)),
      children: f.intl.string(f.t.fIv16O)
    })]
  }) : x ? (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)(a.Ee, {
      className: m.image,
      src: n(73962)
    }), (0, r.jsx)(a.Dx, {
      className: m.title,
      children: f.intl.string(f.t.dAfGb2)
    }), (0, r.jsx)(a.zx, {
      onClick: v,
      children: f.intl.string(f.t.uJWIj4)
    })]
  }) : null != b ? (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)(a.Ee, {
      className: m.image,
      src: n(375673)
    }), (0, r.jsx)(a.Dx, {
      className: m.title,
      children: f.intl.string(f.t.PCgG39)
    }), (0, r.jsx)(a.DK, {
      className: m.subtitle,
      children: f.intl.string(f.t.tQpeAw)
    }), (0, r.jsx)(a.zx, {
      onClick: v,
      children: f.intl.string(f.t.uJWIj4)
    })]
  }) : (0, r.jsxs)(a.ZP, {
    children: [(0, r.jsx)(a.Ee, {
      className: m.image,
      src: n(892235)
    }), (0, r.jsx)(a.Dx, {
      className: m.title,
      children: f.intl.string(f.t["0c8+5u"])
    }), (0, r.jsx)(a.DK, {
      className: m.subtitle,
      children: f.intl.string(f.t.ULTCBA)
    }), (0, r.jsx)(a.zx, {
      submitting: true,
      color: a.zx.Colors.PRIMARY
    })]
  })
}
Chunk442837.ZP.initialize()