/** Chunk was on web.js **/
/** chunk id: 430086, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fv: () => p,
  GY: () => _,
  M$: () => h,
  Oc: () => f,
  kF: () => d
});
var Chunk949645 = require("./949645.js"),
  Chunk265422 = require("./265422.js"),
  Chunk963169 = require("./963169.js"),
  Chunk345942 = require("./345942.js"),
  Chunk309010 = require("./309010.js"),
  Chunk967198 = require("./967198.js"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js");
let d = {
    binds: ["alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(), false)
  },
  f = {
    binds: ["alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.A)(false), false)
  },
  p = {
    binds: ["mod+alt+right"],
    comboKeysBindGlobal: true,
    action() {
      let e;
      if (null != l.A.getGuildId()) e = u.ME;
      else {
        let t = l.A.getLastSelectedGuildId();
        null != t && (e = t, (0, i.i)(t, o.A.getChannelId(t)))
      }
      return null != e && (0, s.u)(e), false
    }
  },
  _ = {
    binds: (0, Chunk723702.isMac)() ? ["mod+["] : ["alt+left"],
    comboKeysBindGlobal: true,
    action: () => ((0, a.OE)("keybind"), false)
  },
  h = {
    binds: (0, Chunk723702.isMac)() ? ["mod+]"] : ["alt+right"],
    comboKeysBindGlobal: true,
    action: () => ((0, a.Qb)("keybind"), false)
  }