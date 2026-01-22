/** Chunk was on web.js **/
/** chunk id: 775121, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js"), require("./733351.js");
var Chunk507392 = require("./507392.js"),
  i = require.n(Chunk507392),
  Chunk64460 = require("./64460.js"),
  Chunk626584 = require("./626584.js"),
  Chunk549205 = require("./549205.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");
let d = {},
  f = [],
  p = false,
  _ = (0, Chunk549205.I)(window),
  h = (0, Chunk723702.isMac)() || (0, Chunk723702.isMacWeb)() ? "cmd" : "ctrl",
  m = (0, Chunk723702.isMac)() || (0, Chunk723702.isMacWeb)() ? "opt" : "alt",
  g = (0, Chunk723702.isMac)() || (0, Chunk723702.isMacWeb)() ? "return" : "enter",
  E = [...Chunk64460.J.binds, "mod+shift+[", "mod+shift+]", "mod+[", "mod+]", "alt+[", "alt+]", "ctrl+shift+tab", "ctrl+tab", "mod+n", "mod+t", "mod+shift+t", "mod+plus", "mod+minus", "mod+0"].map(e => e.replace("mod", h)),
  b = () => [],
  y = [];

function O(e, t) {
  let n = e => t(e, e.key);
  document.addEventListener(e, n), y.push(() => document.removeEventListener(e, n))
}

function A(e) {
  let t = [];
  for (let n of Object.values(e)) null != n && t.push(...n.binds);
  return t.map(e => e.replace("mod", h))
}

function v(e, t) {
  return (n, r) => (l.default.track(u.HAw.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: e,
    shortcut_combo: r
  }), t(n, r))
}

function S(e) {
  for (let [t, n] of Object.entries(e)) {
    if (null == n) continue;
    let e = b();
    c.isPlatformEmbedded || (e = e.concat(E));
    let r = n.binds.filter(t => (t = t.replace("mod", h), 0 > e.indexOf(t)));
    if (0 === r.length) continue;
    let i = n.comboKeysBindGlobal ? _.bindGlobal : _.bind;
    if (null != n.action && i.call(_, r, v(t, n.action)), null != n.keyup && i.call(_, r, v(t, n.keyup), "keyup"), null != n.keydown) {
      let e = r.indexOf("any-character");
      false !== e && (O("keydown", n.keydown), r.splice(e, 1)), r.length > 0 && i.call(_, r, v(t, n.keydown), "keydown")
    }
    null != n.keypress && i.call(_, r, v(t, n.keypress), "keypress")
  }
}(0, Chunk723702.isDesktop)() && new(i())(document.documentElement).bind("backspace", e => e.preventDefault());
let I = {
  combokeys: _,
  modKey: h,
  altKey: m,
  returnKey: g,
  setGetKeybindList(e) {
    b = e
  },
  checkDupes(e) {
    let t = new Set,
      n = [];
    for (let r of A(e)) t.has(r) && n.push(r), t.add(r);
    n.length > 0 && new s.A("Keybinds").warn("Duplicate keyboard shortcuts defined:", n)
  },
  setLayout(e) {
    d = e
  },
  enable() {
    p || (p = true, this.checkDupes(d), S(d))
  },
  enableTemp(e) {
    f.push(d), d = e, S(e), p = true
  },
  disableTemp() {
    let e = f.pop();
    null != e && (d = e), this.disable(), this.enable()
  },
  disable() {
    p && (p = false, y.forEach(e => e()), y = [], _.reset())
  },
  validateKeybind(e) {
    p && this.hasBind(e) && _.unbind(e)
  },
  hasBind(e) {
    let t = A(d);
    return e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim(), t.includes(e)
  }
}