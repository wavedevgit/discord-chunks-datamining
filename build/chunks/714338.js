/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => N
}), n(47120), n(757143), n(301563), n(653041), n(566702);
var r = n(879443),
  i = n.n(r),
  o = n(414861),
  a = n.n(o),
  s = n(360038),
  l = n(710845),
  c = n(626135),
  u = n(358085),
  d = n(981631);
let f = {},
  _ = [],
  p = !1,
  h = a()(new(i())(window)),
  g = (0, u.isMac)() || (0, u.isMacWeb)() ? "cmd" : "ctrl",
  m = (0, u.isMac)() || (0, u.isMacWeb)() ? "opt" : "alt",
  E = (0, u.isMac)() || (0, u.isMacWeb)() ? "return" : "enter",
  v = [...s.u.binds, "mod+shift+[", "mod+shift+]", "mod+[", "mod+]", "alt+[", "alt+]", "ctrl+shift+tab", "ctrl+tab", "mod+n", "mod+t", "mod+shift+t", "mod+plus", "mod+minus", "mod+0"].map(e => e.replace("mod", g)),
  b = () => [],
  y = [];

function O(e, t) {
  let n = e => t(e, e.key);
  document.addEventListener(e, n), y.push(() => document.removeEventListener(e, n))
}

function S(e) {
  let t = [];
  for (let n of Object.values(e)) null != n && t.push(...n.binds);
  return t.map(e => e.replace("mod", g))
}

function I(e, t) {
  return (n, r) => (c.default.track(d.rMx.KEYBOARD_SHORTCUT_USED, {
    shortcut_name: e
  }), t(n, r))
}

function T(e) {
  for (let [t, n] of Object.entries(e)) {
    if (null == n) continue;
    let e = b();
    u.isPlatformEmbedded || (e = e.concat(v));
    let r = n.binds.filter(t => (t = t.replace("mod", g), 0 > e.indexOf(t)));
    if (0 === r.length) continue;
    let i = n.comboKeysBindGlobal ? h.bindGlobal : h.bind;
    if (null != n.action && i.call(h, r, I(t, n.action)), null != n.keyup && i.call(h, r, I(t, n.keyup), "keyup"), null != n.keydown) {
      let e = r.indexOf("any-character"); - 1 !== e && (O("keydown", n.keydown), r.splice(e, 1)), r.length > 0 && i.call(h, r, I(t, n.keydown), "keydown")
    }
    null != n.keypress && i.call(h, r, I(t, n.keypress), "keypress")
  }
}(0, u.isDesktop)() && new(i())(document.documentElement).bind("backspace", e => e.preventDefault());
let N = {
  combokeys: h,
  modKey: g,
  altKey: m,
  returnKey: E,
  setGetKeybindList(e) {
    b = e
  },
  checkDupes(e) {
    let t = new Set,
      n = [];
    for (let r of S(e)) t.has(r) && n.push(r), t.add(r);
    n.length > 0 && new l.Z("Keybinds").warn("Duplicate keyboard shortcuts defined:", n)
  },
  setLayout(e) {
    f = e
  },
  enable() {
    !p && (p = !0, this.checkDupes(f), T(f))
  },
  enableTemp(e) {
    _.push(f), f = e, T(e), p = !0
  },
  disableTemp() {
    let e = _.pop();
    null != e && (f = e), this.disable(), this.enable()
  },
  disable() {
    p && (p = !1, y.forEach(e => e()), y = [], h.reset())
  },
  validateKeybind(e) {
    p && this.hasBind(e) && h.unbind(e)
  },
  hasBind(e) {
    let t = S(f);
    return e = (e = e.replace("meta", "cmd")).replace(/right |left /i, "").trim(), t.includes(e)
  }
}