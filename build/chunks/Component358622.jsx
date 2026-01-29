/** Chunk was on 87557 **/
/** chunk id: 358622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  r = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk105565 = require("./105565.js"),
  Chunk771781 = require("./771781.js"),
  Chunk303054 = require("./303054.jsx"),
  Chunk957196 = require("./957196.js");
let m = e => {
    switch (e) {
      case o.r.DC_DISMISSED:
        return "DISMISS:";
      case o.r.DC_SHOWN:
        return "SHOW:";
      case o.r.DC_SHOW_REQUEST:
        return "REQUEST TO SHOW:";
      default:
        return "UNKNOWN TYPE:"
    }
  },
  p = [{
    key: "events",
    render(e) {
      let {
        event: t,
        dismissibleContent: n
      } = e;
      return "".concat(t, " ").concat(s.M[n])
    }
  }],
  h = [{
    key: "candidates",
    render(e) {
      let {
        dismissibleContent: t
      } = e;
      return "".concat(s.M[t])
    }
  }];

function x() {
  let e = (0, i.bG)([o.A], () => o.A.getDCFEvents()),
    t = (0, c.Ay)(e => e.candidates),
    n = (0, c.Ay)(e => e.lastWinnerTime),
    l = 0 !== n ? r()(n).fromNow() : "n/a",
    x = (0, c.Ay)(e => 0 === e.lastWinnerTime ? null : e.recentlyShown[0]),
    g = e.map(e => {
      let {
        eventType: t,
        dismissibleContent: n
      } = e;
      return {
        key: m(t) + n.toString(),
        event: m(t),
        dismissibleContent: n
      }
    }),
    f = Array.from(t.keys()).map(e => ({
      key: e.toString(),
      dismissibleContent: e
    }));
  return (0, a.jsxs)("div", {
    className: u.KE,
    children: [(0, a.jsxs)("div", {
      className: u.pq,
      children: ["Last winner time: ", l]
    }), (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
      className: u.pq,
      children: ["Last winner: ", null != x ? s.M[x] : "None"]
    }), (0, a.jsx)("br", {}), (0, a.jsx)("div", {
      className: u.uI,
      children: (0, a.jsx)(d.A, {
        className: u.Th,
        columns: h,
        data: f
      })
    }), (0, a.jsx)("br", {}), (0, a.jsx)(d.A, {
      columns: p,
      data: g
    })]
  })
}