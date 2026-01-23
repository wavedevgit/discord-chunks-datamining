/** Chunk was on 48654 **/
/** chunk id: 803842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $0: () => u,
  $4: () => d,
  B0: () => c,
  FK: () => s,
  cu: () => p
});
var Chunk397927 = require("./397927.js"),
  Chunk186111 = require("./186111.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let a = () => i.A.hasLayers() || (0, l.ueM)(),
  s = 21552 == require.j ? {
    binds: ["right"],
    comboKeysBindGlobal: true,
    action() {
      if (!a()) return r._.dispatch(o.jej.CAROUSEL_NEXT), false
    }
  } : null,
  c = 21552 == require.j ? {
    binds: ["left"],
    comboKeysBindGlobal: true,
    action() {
      if (!a()) return r._.dispatch(o.jej.CAROUSEL_PREV), false
    }
  } : null,
  u = {
    binds: ["right", "down", "space"],
    comboKeysBindGlobal: true,
    action: () => (r._.dispatch(o.jej.MODAL_CAROUSEL_NEXT), false)
  },
  d = {
    binds: ["left", "up"],
    comboKeysBindGlobal: true,
    action: () => (r._.dispatch(o.jej.MODAL_CAROUSEL_PREV), false)
  },
  p = {
    binds: ["esc"],
    comboKeysBindGlobal: true,
    action() {
      if (r._.hasSubscribers(o.jej.MODAL_CLOSE)) return r._.dispatch(o.jej.MODAL_CLOSE), false
    }
  }