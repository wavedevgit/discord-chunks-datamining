/** Chunk was on 13419 **/
/** chunk id: 760244, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk716965 = require("./716965.js"),
  Chunk321987 = require("./321987.jsx"),
  Chunk595244 = require("./595244.jsx"),
  Chunk985018 = require("./985018.jsx");

function c() {
  let e, t = (0, r.zy)(),
    [s, c] = o.useState(false),
    [u, d] = o.useState(false);
  return o.useEffect(() => {
    !async function() {
      let e = (0, _.parse)(t.search);
      try {
        var s;
        await (0, n.Kf)(null != (s = e.token) ? s : ""), c(true)
      } catch (e) {
        d(true)
      }
    }()
  }, [t.search]), e = s ? (0, a.jsx)(p.jX, {
    message: l.intl.string(l.t.Tqu3OQ),
    showsCloseWindowText: true
  }) : u ? (0, a.jsx)(p.gz, {
    message: l.intl.string(l.t.J8LsCs),
    showsCloseWindowText: true
  }) : (0, a.jsx)(p.Ay, {
    message: l.intl.string(l.t.BAcf6a),
    spinner: true
  }), (0, a.jsx)(i.$, {
    children: e
  })
}