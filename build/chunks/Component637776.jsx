/** Chunk was on 27978 **/
/** chunk id: 637776, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk970683 = require("./970683.js"),
  Chunk231239 = require("./231239.js"),
  Chunk129293 = require("./129293.js"),
  Chunk80206 = require("./80206.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk108427 = require("./108427.js"),
  Chunk844800 = require("./844800.js"),
  Chunk580497 = require("./580497.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    location: t
  } = e, [n, f] = i.useState(false), {
    verifySuccess: _,
    verifyErrors: x,
    redirectGuildId: E
  } = (0, s.e7)([h.Z], () => h.Z.getState());
  i.useEffect(() => {
    let e = (0, o.Z)(t);
    a.Z.verify(e), (0, d.e)("verify_hub_email")
  }, [t]);
  let v = () => {
    (0, g.Z)(E), f(true)
  };
  return n ? (0, r.jsx)(c.Z, {
    title: m.intl.string(m.t.csrAMJ),
    subtitle: m.intl.string(m.t["m1+IBn"]),
    buttonText: m.intl.string(m.t.fIv16B),
    onButtonClick: () => (0, u.uL)(p.Z5c.CHANNEL(E))
  }) : _ ? (0, r.jsx)(c.Z, {
    title: m.intl.string(m.t["dAfGb+"]),
    buttonText: m.intl.string(m.t["uJWIj/"]),
    onButtonClick: v,
    image: (0, r.jsx)(l.dQ, {
      alt: m.intl.string(m.t["dAfGb+"])
    })
  }) : null != x ? (0, r.jsx)(c.Z, {
    title: m.intl.string(m.t["PCgG3+"]),
    subtitle: m.intl.string(m.t.tQpeA3),
    buttonText: m.intl.string(m.t["uJWIj/"]),
    onButtonClick: v
  }) : (0, r.jsx)(c.Z, {
    title: m.intl.string(m.t["0c8+5n"]),
    subtitle: m.intl.string(m.t.ULTCBE),
    loading: true
  })
}
Chunk442837.ZP.initialize()