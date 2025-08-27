/** Chunk was on 27978 **/
/** chunk id: 637776, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function m(e) {
  let {
    location: t
  } = e, [n, m] = i.useState(false), {
    verifySuccess: _,
    verifyErrors: x,
    redirectGuildId: v
  } = (0, l.e7)([h.Z], () => h.Z.getState());
  i.useEffect(() => {
    let e = (0, a.Z)(t);
    s.Z.verify(e), (0, d.e)("verify_hub_email")
  }, [t]);
  let E = () => {
    (0, f.Z)(v), m(true)
  };
  return n ? (0, r.jsx)(c.Z, {
    title: g.intl.string(g.t.csrAMD),
    subtitle: g.intl.string(g.t["m1+IBg"]),
    buttonText: g.intl.string(g.t.fIv16O),
    onButtonClick: () => (0, u.uL)(p.Z5c.CHANNEL(v))
  }) : _ ? (0, r.jsx)(c.Z, {
    title: g.intl.string(g.t.dAfGb2),
    buttonText: g.intl.string(g.t.uJWIj4),
    onButtonClick: E,
    image: (0, r.jsx)(o.Om, {
      alt: g.intl.string(g.t.dAfGb2)
    })
  }) : null != x ? (0, r.jsx)(c.Z, {
    title: g.intl.string(g.t.PCgG39),
    subtitle: g.intl.string(g.t.tQpeAw),
    buttonText: g.intl.string(g.t.uJWIj4),
    onButtonClick: E
  }) : (0, r.jsx)(c.Z, {
    title: g.intl.string(g.t["0c8+5u"]),
    subtitle: g.intl.string(g.t.ULTCBA),
    loading: true
  })
}
Chunk442837.ZP.initialize()