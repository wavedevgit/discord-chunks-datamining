/** Chunk was on 86142 **/
/** chunk id: 850381, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk492917 = require("./492917.js"),
  Chunk154672 = require("./154672.js"),
  Chunk396681 = require("./396681.js"),
  Chunk317940 = require("./317940.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk210714 = require("./210714.js"),
  Chunk341371 = require("./341371.js"),
  Chunk714505 = require("./714505.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    location: t
  } = e, [n, f] = i.useState(false), {
    verifySuccess: _,
    verifyErrors: A,
    redirectGuildId: x
  } = (0, s.bG)([h.A], () => h.A.getState());
  i.useEffect(() => {
    let e = (0, o.A)(t);
    a.A.verify(e), (0, d.d)("verify_hub_email")
  }, [t]);
  let E = () => {
    (0, p.A)(x), f(true)
  };
  return n ? (0, r.jsx)(c.A, {
    title: m.intl.string(m.t.csrAMJ),
    subtitle: m.intl.string(m.t["m1+IBn"]),
    buttonText: m.intl.string(m.t.fIv16B),
    onButtonClick: () => (0, u.pX)(g.BVt.CHANNEL(x))
  }) : _ ? (0, r.jsx)(c.A, {
    title: m.intl.string(m.t["dAfGb+"]),
    buttonText: m.intl.string(m.t["uJWIj/"]),
    onButtonClick: E,
    image: (0, r.jsx)(l.bqQ, {
      alt: m.intl.string(m.t["dAfGb+"])
    })
  }) : null != A ? (0, r.jsx)(c.A, {
    title: m.intl.string(m.t["PCgG3+"]),
    subtitle: m.intl.string(m.t.tQpeA3),
    buttonText: m.intl.string(m.t["uJWIj/"]),
    onButtonClick: E
  }) : (0, r.jsx)(c.A, {
    title: m.intl.string(m.t["0c8+5n"]),
    subtitle: m.intl.string(m.t.ULTCBE),
    loading: true
  })
}
Chunk311907.Ay.initialize()