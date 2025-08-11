/** Chunk was on 93886 **/
/** chunk id: 719672, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  Chunk177488 = require("./177488.js");
let p = e => {
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
        dismissibleContent: a
      } = e;
      return "".concat(t, " ").concat(s.z[a])
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

function v() {
  let e = (0, Chunk442837.e7)([Chunk713284.Z], () => Chunk713284.Z.getDCFEvents()),
    t = (0, Chunk211644.ZP)(e => e.candidates),
    a = (0, Chunk211644.ZP)(e => e.lastWinnerTime),
    r = 0 !== require ? l()(require).fromNow() : "n/a",
    v = (0, Chunk211644.ZP)(e => e.recentlyShown[0]),
    j = module.map(e => {
      let {
        eventType: t,
        dismissibleContent: a
      } = e;
      return {
        key: p(t) + a.toString(),
        event: p(t),
        dismissibleContent: a
      }
    }),
    g = Array.from(exports.keys()).map(e => ({
      key: e.toString(),
      dismissibleContent: e
    }));
  return <div className={Chunk177488.panelContainer}>{<div className={Chunk177488.buttonContainer}>{<div data-button-hoisted-classname-wrapper={true} className={Chunk177488.button}><Chunk481060.zxk variant={"primary"} text={"Reset Daily Cap"} onClick={() => (0, Chunk883904.EG)()} /></div>}{<div data-button-hoisted-classname-wrapper={true} className={Chunk177488.button}><Chunk481060.zxk variant={"primary"} text={"Clear All Dismissed Contents"} onClick={Chunk675478.sr} /></div>}{<div data-button-hoisted-classname-wrapper={true} className={Chunk177488.button}><Chunk481060.zxk variant={"primary"} text={"Check All Dismissed Contents"} onClick={Chunk675478.bE} /></div>}</div>}{<br />}{<div className={Chunk177488.info}>{"Last winner time: "}{Chunk913527}</div>}{<br />}{<div className={Chunk177488.info}>{"Last winner: "}{null != v ? Chunk704215.z[v] : "None"}</div>}{<br />}{<div className={Chunk177488.candidatesTableContainer}><Chunk681619.Z className={Chunk177488.candidatesTable} columns={f} data={g} /></div>}{<br />}{<Chunk681619.Z columns={b} data={j} />}</div>
}