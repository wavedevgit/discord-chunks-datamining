/** Chunk was on 77069 **/
/** chunk id: 797525, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Ey: () => r,
  Vh: () => s,
  py: () => a,
  t8: () => o,
  wA: () => u
});
var Chunk972959 = require("./972959.js"),
  Chunk998502 = require("./998502.js");
let s = (0, Chunk972959.H)(() => ({
  openOnStartup: true,
  startMinimized: false,
  minimizeToTray: true
}));
async function u() {
  let t = await l.ZP.getOpenOnStart(),
    e = await l.ZP.getSetting("START_MINIMIZED", false),
    n = await l.ZP.getSetting("MINIMIZE_TO_TRAY", true);
  s.setState({
    openOnStartup: t,
    startMinimized: e,
    minimizeToTray: n
  })
}

function r(t) {
  s.setState({
    openOnStartup: t
  }), l.ZP.send("TOGGLE_OPEN_ON_STARTUP", t)
}

function a(t) {
  s.setState({
    startMinimized: t
  }), l.ZP.send("TOGGLE_START_MINIMIZED", t)
}

function o(t) {
  s.setState({
    minimizeToTray: t
  }), l.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", t)
}