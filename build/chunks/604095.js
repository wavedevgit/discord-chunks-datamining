/** Chunk was on 28979 **/
/** chunk id: 604095, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  AZ: () => a,
  Cp: () => u,
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
  let t = await l.Ay.getOpenOnStart(),
    e = await l.Ay.getSetting("START_MINIMIZED", false),
    i = await l.Ay.getSetting("MINIMIZE_TO_TRAY", true);
  s.setState({
    openOnStartup: t,
    startMinimized: e,
    minimizeToTray: i
  })
}

function u(t) {
  s.setState({
    openOnStartup: t
  }), l.Ay.send("TOGGLE_OPEN_ON_STARTUP", t)
}

function a(t) {
  s.setState({
    startMinimized: t
  }), l.Ay.send("TOGGLE_START_MINIMIZED", t)
}

function o(t) {
  s.setState({
    minimizeToTray: t
  }), l.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", t)
}