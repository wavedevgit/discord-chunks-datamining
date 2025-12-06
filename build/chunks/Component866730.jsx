/** Chunk was on 88282 **/
/** chunk id: 866730, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  r = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk713284 = require("./713284.js"),
  Chunk211644 = require("./211644.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk607669 = require("./607669.js");
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
  h = [{
    key: "candidates",
    render(e) {
      let {
        dismissibleContent: t
      } = e;
      return "".concat(s.z[t])
    }
  }];

function x() {
  let e = (0, Chunk442837.e7)([Chunk713284.Z], () => Chunk713284.Z.getDCFEvents()),
    t = (0, Chunk211644.ZP)(e => e.candidates),
    n = (0, Chunk211644.ZP)(e => e.lastWinnerTime),
    l = 0 !== require ? r()(require).fromNow() : "n/a",
    x = (0, Chunk211644.ZP)(e => e.recentlyShown[0]),
    f = module.map(e => {
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
    g = Array.from(exports.keys()).map(e => ({
      key: e.toString(),
      dismissibleContent: e
    }));
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk607669.panelContainer,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk607669.info,
      children: ["Last winner time: ", Chunk913527]
    }), (0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsxs)("div", {
      className: Chunk607669.info,
      children: ["Last winner: ", null != x ? Chunk704215.z[x] : "None"]
    }), (0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsx)("div", {
      className: Chunk607669.candidatesTableContainer,
      children: (0, Chunk54381.jsx)(Chunk681619.Z, {
        className: Chunk607669.candidatesTable,
        columns: h,
        data: g
      })
    }), (0, Chunk54381.jsx)("br", {}), (0, Chunk54381.jsx)(Chunk681619.Z, {
      columns: p,
      data: f
    })]
  })
}