/** Chunk was on 63974 **/
/** chunk id: 399122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk347805 = require("./347805.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk716804 = require("./716804.js"),
  Chunk83013 = require("./83013.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473836 = require("./473836.js");

function u(e) {
  let {
    userId: t
  } = e, n = (0, s.g)(), {
    trackUserProfileAction: u
  } = (0, r.NJ)();
  return (0, l.jsx)(o.A, {
    heading: d.intl.string(d.t["mQKv+v"]),
    scrollTargetId: a.bk.NOTE,
    children: (0, l.jsx)(i.A, {
      userId: t,
      className: c.N,
      autoFocus: n === a.bk.NOTE,
      onUpdate: () => u({
        action: "SET_NOTE"
      })
    })
  })
}