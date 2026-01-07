/** Chunk was on 96858 **/
/** chunk id: 384666, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js"),
  Chunk489863 = require("./489863.js"),
  Chunk787025 = require("./787025.jsx"),
  Chunk397394 = require("./397394.jsx"),
  Chunk388032 = require("./388032.jsx");

function f() {
  let e, a = (0, c.TH)(),
    [t, f] = n.useState(false),
    [u, p] = n.useState(false);
  return n.useEffect(() => {
    !async function() {
      let e = (0, s.parse)(a.search);
      try {
        var t;
        await (0, r.g)(null != (t = e.token) ? t : ""), f(true)
      } catch (e) {
        p(true)
      }
    }()
  }, [a.search]), e = t ? (0, o.jsx)(i.c7, {
    message: l.intl.string(l.t.Tqu3OQ),
    showsCloseWindowText: true
  }) : u ? (0, o.jsx)(i.Lk, {
    message: l.intl.string(l.t.J8LsCs),
    showsCloseWindowText: true
  }) : (0, o.jsx)(i.ZP, {
    message: l.intl.string(l.t.BAcf6a),
    spinner: true
  }), (0, o.jsx)(d.G, {
    children: e
  })
}