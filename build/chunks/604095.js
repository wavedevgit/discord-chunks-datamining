/** Chunk was on 4670 **/
/** chunk id: 604095, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  AZ: () => u,
  Cp: () => a,
  _s: () => r,
  fk: () => s,
  tA: () => o
});
var Chunk839214 = require("./839214.js"),
  Chunk837921 = require("./837921.js");
let s = (0, Chunk839214.D)(() => ({
  openOnStartup: true,
  startMinimized: false,
  minimizeToTray: true
}));
async function r() {
  let e = await l.Ay.getOpenOnStart(),
    t = await l.Ay.getSetting("START_MINIMIZED", false),
    i = await l.Ay.getSetting("MINIMIZE_TO_TRAY", true);
  s.setState({
    openOnStartup: e,
    startMinimized: t,
    minimizeToTray: i
  })
}

function a(e) {
  s.setState({
    openOnStartup: e
  }), l.Ay.send("TOGGLE_OPEN_ON_STARTUP", e)
}

function u(e) {
  s.setState({
    startMinimized: e
  }), l.Ay.send("TOGGLE_START_MINIMIZED", e)
}

function o(e) {
  s.setState({
    minimizeToTray: e
  }), l.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e)
}