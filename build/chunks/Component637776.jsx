/** Chunk was on 27978 **/
/** chunk id: 637776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk894892 = require("./894892.js");

function f(e) {
  let {
    location: t
  } = e, [f, _] = i.useState(false), {
    verifySuccess: x,
    verifyErrors: b,
    redirectGuildId: v
  } = (0, l.e7)([d.Z], () => d.Z.getState());
  i.useEffect(() => {
    let e = (0, s.Z)(t);
    a.Z.verify(e), (0, u.e)("verify_hub_email")
  }, [t]);
  let E = () => {
    (0, h.Z)(v), _(true)
  };
  return f ? (0, r.jsxs)(o.ZP, {
    children: [(0, r.jsx)(o.Dx, {
      className: g.title,
      children: m.intl.string(m.t.csrAMD)
    }), (0, r.jsx)(o.DK, {
      className: g.subtitle,
      children: m.intl.string(m.t["m1+IBg"])
    }), (0, r.jsx)(o.zx, {
      className: g.spacedButton,
      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(v)),
      children: m.intl.string(m.t.fIv16O)
    })]
  }) : x ? (0, r.jsxs)(o.ZP, {
    children: [(0, r.jsx)(o.Ee, {
      className: g.image,
      src: n(73962)
    }), (0, r.jsx)(o.Dx, {
      className: g.title,
      children: m.intl.string(m.t.dAfGb2)
    }), (0, r.jsx)(o.zx, {
      onClick: E,
      children: m.intl.string(m.t.uJWIj4)
    })]
  }) : null != b ? (0, r.jsxs)(o.ZP, {
    children: [(0, r.jsx)(o.Ee, {
      className: g.image,
      src: n(375673)
    }), (0, r.jsx)(o.Dx, {
      className: g.title,
      children: m.intl.string(m.t.PCgG39)
    }), (0, r.jsx)(o.DK, {
      className: g.subtitle,
      children: m.intl.string(m.t.tQpeAw)
    }), (0, r.jsx)(o.zx, {
      onClick: E,
      children: m.intl.string(m.t.uJWIj4)
    })]
  }) : (0, r.jsxs)(o.ZP, {
    children: [(0, r.jsx)(o.Ee, {
      className: g.image,
      src: n(892235)
    }), (0, r.jsx)(o.Dx, {
      className: g.title,
      children: m.intl.string(m.t["0c8+5u"])
    }), (0, r.jsx)(o.DK, {
      className: g.subtitle,
      children: m.intl.string(m.t.ULTCBA)
    }), (0, r.jsx)(o.zx, {
      submitting: true,
      color: o.zx.Colors.PRIMARY
    })]
  })
}
Chunk442837.ZP.initialize()