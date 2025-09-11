/** Chunk was on 93886 **/
/** chunk id: 719672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk713284 = require("./713284.js"),
  Chunk883904 = require("./883904.js"),
  Chunk211644 = require("./211644.js"),
  Chunk675478 = require("./675478.js"),
  Chunk681619 = require("./681619.jsx"),
  Chunk995891 = require("./995891.js");
let x = e => {
    switch (e) {
      case c.D.DC_DISMISSED:
        return "DISMISS:";
      case c.D.DC_SHOWN:
        return "SHOW:";
      case c.D.DC_SHOW_REQUEST:
        return "REQUEST TO SHOW:";
      default:
        return "UNKNOWN TYPE:"
    }
  },
  b = [{
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

function g() {
  let e = (0, Chunk442837.e7)([Chunk713284.Z], () => Chunk713284.Z.getDCFEvents()),
    t = (0, Chunk211644.ZP)(e => e.candidates),
    n = (0, Chunk211644.ZP)(e => e.lastWinnerTime),
    r = 0 !== require ? l()(require).fromNow() : "n/a",
    g = (0, Chunk211644.ZP)(e => e.recentlyShown[0]),
    v = module.map(e => {
      let {
        eventType: t,
        dismissibleContent: n
      } = e;
      return {
        key: x(t) + n.toString(),
        event: x(t),
        dismissibleContent: n
      }
    }),
    j = Array.from(exports.keys()).map(e => ({
      key: e.toString(),
      dismissibleContent: e
    }));
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk995891.panelContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk995891.buttonContainer,
      children: [(0, Chunk951288.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk995891.button,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Reset Daily Cap",
          onClick: () => (0, Chunk883904.EG)()
        })
      }), (0, Chunk951288.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk995891.button,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Clear All Dismissed Contents",
          onClick: Chunk675478.sr
        })
      }), (0, Chunk951288.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: Chunk995891.button,
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Check All Dismissed Contents",
          onClick: Chunk675478.bE
        })
      })]
    }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsxs)("div", {
      className: Chunk995891.info,
      children: ["Last winner time: ", Chunk913527]
    }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsxs)("div", {
      className: Chunk995891.info,
      children: ["Last winner: ", null != g ? Chunk704215.z[g] : "None"]
    }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)("div", {
      className: Chunk995891.candidatesTableContainer,
      children: (0, Chunk951288.jsx)(Chunk681619.Z, {
        className: Chunk995891.candidatesTable,
        columns: f,
        data: j
      })
    }), (0, Chunk951288.jsx)("br", {}), (0, Chunk951288.jsx)(Chunk681619.Z, {
      columns: b,
      data: v
    })]
  })
}