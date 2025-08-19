/** Chunk was on 66181 **/
/** chunk id: 185514, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $c: () => p,
  Nx: () => g,
  On: () => h,
  tQ: () => u,
  x5: () => m
});
var Chunk140492 = require("./140492.js"),
  Chunk475468 = require("./475468.js"),
  Chunk703656 = require("./703656.js"),
  Chunk769654 = require("./769654.js"),
  Chunk944486 = require("./944486.js"),
  Chunk914010 = require("./914010.js"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js");
let u = {
    binds: ["alt+down"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk140492.Z)(), false)
  },
  m = {
    binds: ["alt+up"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk140492.Z)(false), false)
  },
  p = {
    binds: ["mod+alt+right"],
    comboKeysBindGlobal: true,
    action() {
      let e;
      if (null != Chunk914010.Z.getGuildId()) e = Chunk981631.ME;
      else {
        let t = Chunk914010.Z.getLastSelectedGuildId();
        null != exports && (e = exports, (0, Chunk475468.K)(exports, Chunk944486.Z.getChannelId(exports)))
      }
      return null != module && (0, Chunk769654.X)(module), false
    }
  },
  g = {
    binds: (0, Chunk358085.isMac)() ? ["mod+["] : ["alt+left"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk703656.op)(), false)
  },
  h = {
    binds: (0, Chunk358085.isMac)() ? ["mod+]"] : ["alt+right"],
    comboKeysBindGlobal: true,
    action: () => ((0, Chunk703656.eH)(), false)
  }