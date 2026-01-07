/** Chunk was on web.js **/
/** chunk id: 185514, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $c: () => p,
  Nx: () => _,
  On: () => m,
  tQ: () => d,
  x5: () => f
});
var Chunk140492 = require("./140492.js"),
  Chunk475468 = require("./475468.js"),
  Chunk891304 = require("./891304.js"),
  Chunk769654 = require("./769654.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let d = {
    binds: ["alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Z)(), false)
  },
  f = {
    binds: ["alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, r.Z)(false), false)
  },
  p = {
    binds: ["mod+alt+right"],
    comboKeysBindGlobal: true,
    action() {
      let e;
      if (null != l.Z.getGuildId()) e = u.ME;
      else {
        let t = l.Z.getLastSelectedGuildId();
        null != t && (e = t, (0, i.K)(t, s.Z.getChannelId(t)))
      }
      return null != e && (0, o.X)(e), false
    }
  },
  _ = {
    binds: (0, Chunk358085.isMac)() ? ["mod+["] : ["alt+left"],
    comboKeysBindGlobal: true,
    action: () => ((0, a.Hm)("keybind"), false)
  },
  m = {
    binds: (0, Chunk358085.isMac)() ? ["mod+]"] : ["alt+right"],
    comboKeysBindGlobal: true,
    action: () => ((0, a.TL)("keybind"), false)
  }