/** Chunk was on web.js **/
/** chunk id: 714338, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./704826.js"), require("./35282.js"), require("./539854.js"), require("./781311.js");
var Chunk879443 = require("./879443.js"),
  i = require.n(Chunk879443),
  Chunk360038 = require("./360038.js"),
  Chunk710845 = require("./710845.js"),
  Chunk280049 = require("./280049.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let d = {},
  f = [],
  _ = false,
  p = (0, Chunk280049.r)(window),
  h = (0, Chunk358085.isMac)() || (0, Chunk358085.isMacWeb)() ? "cmd" : "ctrl",
  m = (0, Chunk358085.isMac)() || (0, Chunk358085.isMacWeb)() ? "opt" : "alt",
  g = (0, Chunk358085.isMac)() || (0, Chunk358085.isMacWeb)() ? "return" : "enter",
  E = [...Chunk360038.u.binds, "mod+shift+[", "mod+shift+]", "mod+[", "mod+]", "alt+[", "alt+]", "ctrl+shift+tab", "ctrl+tab", "mod+n", "mod+t", "mod+shift+t", "mod+plus", "mod+minus", "mod+0"].map(e => e.replace("mod", h)),
  b = () => [],
  y = [];

function O(e, t) {
  let n = e => t(e, e.key);
  document.addEventListener(e, n), y.push(() => document.removeEventListener(e, n))
}

function v(e) {
  let t = [];
  for (let n of Object.values(e)) null != n && t.push(...n.binds);
  return t.map(e => e.replace("mod", h))
}

function I(e, t) {
  return (n, r) => (l.default.track(u.rMx.KEYBOARD_SHORTCUT_USED, {
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
    let i = n.comboKeysBindGlobal ? p.bindGlobal : p.bind;
    if (null != n.action && i.call(p, r, I(t, n.action)), null != n.keyup && i.call(p, r, I(t, n.keyup), "keyup"), null != n.keydown) {
      let e = r.indexOf("any-character");
      false !== e && (O("keydown", n.keydown), r.splice(e, 1)), r.length > 0 && i.call(p, r, I(t, n.keydown), "keydown")
    }
    null != n.keypress && i.call(p, r, I(t, n.keypress), "keypress")
  }
}(0, Chunk358085.isDesktop)() && new(i())(document.documentElement).bind("backspace", e => e.preventDefault());
let T = {
  combokeys: p,
  modKey: h,
  altKey: m,
  returnKey: g,
  setGetKeybindList(e) {
    b = e
  },
  checkDupes(e) {
    let t = new Set,
      n = [];
    for (let r of v(e)) t.has(r) && n.push(r), t.add(r);
    n.length > 0 && new o.Z("Keybinds").warn("Duplicate keyboard shortcuts defined:", n)
  },
  setLayout(e) {
    d = e
  },
  enable() {
    _ || (_ = true, this.checkDupes(d), S(d))
  },
  enableTemp(e) {
    f.push(d), d = e, S(e), _ = true
  },
  disableTemp() {
    let e = f.pop();
    null != module && (d = module), this.disable(), this.enable()
  },
  disable() {
    _ && (_ = false, y.forEach(e => e()), y = [], p.reset())
  },
  validateKeybind(e) {
    _ && this.hasBind(e) && p.unbind(e)
  },
  hasBind(e) {
    let t = v(d);
    return e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim(), t.includes(e)
  }
}