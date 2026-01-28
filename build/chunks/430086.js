/** Chunk was on 5606 **/
/** chunk id: 430086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Fv: () => _,
  GY: () => m,
  M$: () => g,
  Oc: () => p,
  kF: () => u
});
var Chunk949645 = require("./949645.js"),
  Chunk265422 = require("./265422.js"),
  Chunk963169 = require("./963169.js"),
  Chunk345942 = require("./345942.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");
let u = {
    binds: ["alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(), false)
  },
  p = {
    binds: ["alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(false), false)
  },
  _ = {
    binds: ["mod+alt+right"],
    comboKeysBindGlobal: true,
    action() {
      let e;
      if (null != o.A.getGuildId()) e = d.ME;
      else {
        let t = o.A.getLastSelectedGuildId();
        null != t && (e = t, (0, i.i)(t, a.A.getChannelId(t)))
      }
      return null != e && (0, s.u)(e), false
    }
  },
  m = {
    binds: (0, Chunk723702.isMac)() ? ["mod+["] : ["alt+left"],
    comboKeysBindGlobal: true,
    action: () => ((0, l.OE)("keybind"), false)
  },
  g = {
    binds: (0, Chunk723702.isMac)() ? ["mod+]"] : ["alt+right"],
    comboKeysBindGlobal: true,
    action: () => ((0, l.Qb)("keybind"), false)
  }