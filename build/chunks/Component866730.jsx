/** Chunk was on 6043 **/
/** chunk id: 866730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk713284 = require("./713284.js"),
  Chunk211644 = require("./211644.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk135970 = require("./135970.js");
let m = e => {
    switch (e) {
      case o.D.DC_DISMISSED:
        return "DISMISS:";
      case o.D.DC_SHOWN:
        return "SHOW:";
      case o.D.DC_SHOW_REQUEST:
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
      return "".concat(t, " ").concat(s.z[n])
    }
  }],
  f = [{
    key: "candidates",
    render(e) {
      let {
        dismissibleContent: t
      } = e;
      return "".concat(s.z[t])
    }
  }];

function h() {
  let e = (0, l.e7)([o.Z], () => o.Z.getDCFEvents()),
    t = (0, c.ZP)(e => e.candidates),
    n = (0, c.ZP)(e => e.lastWinnerTime),
    r = 0 !== n ? i()(n).fromNow() : "n/a",
    h = (0, c.ZP)(e => e.recentlyShown[0]),
    x = e.map(e => {
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
    b = Array.from(t.keys()).map(e => ({
      key: e.toString(),
      dismissibleContent: e
    }));
  return (0, a.jsxs)("div", {
    className: u.panelContainer,
    children: [(0, a.jsxs)("div", {
      className: u.info,
      children: ["Last winner time: ", r]
    }), (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
      className: u.info,
      children: ["Last winner: ", null != h ? s.z[h] : "None"]
    }), (0, a.jsx)("br", {}), (0, a.jsx)("div", {
      className: u.candidatesTableContainer,
      children: (0, a.jsx)(d.Z, {
        className: u.candidatesTable,
        columns: f,
        data: b
      })
    }), (0, a.jsx)("br", {}), (0, a.jsx)(d.Z, {
      columns: p,
      data: x
    })]
  })
}