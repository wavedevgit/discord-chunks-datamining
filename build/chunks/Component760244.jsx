/** Chunk was on 13419 **/
/** chunk id: 760244, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk716965 = require("./716965.js"),
  Chunk321987 = require("./321987.jsx"),
  Chunk595244 = require("./595244.jsx"),
  Chunk985018 = require("./985018.jsx");

function i() {
  let e, t = (0, n.zy)(),
    [a, i] = c.useState(false),
    [p, _] = c.useState(false);
  return c.useEffect(() => {
    !async function() {
      let e = (0, d.parse)(t.search);
      try {
        var a;
        await (0, f.Kf)(null != (a = e.token) ? a : ""), i(true)
      } catch (e) {
        _(true)
      }
    }()
  }, [t.search]), e = a ? (0, s.jsx)(r.jX, {
    message: o.intl.string(o.t.Tqu3OQ),
    showsCloseWindowText: true
  }) : p ? (0, s.jsx)(r.gz, {
    message: o.intl.string(o.t.J8LsCs),
    showsCloseWindowText: true
  }) : (0, s.jsx)(r.Ay, {
    message: o.intl.string(o.t.BAcf6a),
    spinner: true
  }), (0, s.jsx)(b.$, {
    children: e
  })
}