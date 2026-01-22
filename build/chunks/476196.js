/** Chunk was on web.js **/
/** chunk id: 476196, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk626584 = require("./626584.js"),
  Chunk617617 = require("./617617.js"),
  Chunk961350 = require("./961350.js"),
  Chunk723176 = require("./723176.js"),
  Chunk989950 = require("./989950.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk626584.A("UserSettingsProto");
class f {
  async getAll(e) {
    let t = performance.now(),
      n = await l.A.userSettings(e).getMany(),
      r = performance.now();
    d.verbose("loaded in ".concat(r - t, "ms (settings: ").concat(n.length, ")"));
    let i = {};
    for (let e of n) i[e.id] = e.value;
    return i
  }
  resetInMemoryState() {}
  constructor() {
    u(this, "actions", {
      CONNECTION_OPEN: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
      USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
    }), u(this, "handleUserSettingsProtoChange", () => {
      let e = o.default.getId(),
        t = c.A.database(e);
      null == t || t.transaction(e => {
        var t, n;
        let r = s.A.computeState(),
          i = l.A.userSettingsTransaction(e);
        for (let e in r) i.put({
          id: Number(e),
          value: r[e]
        });
        let a = null != (t = null == (n = s.A.settings.versions) ? true : n.dataVersion) ? t : false;
        l.A.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: a
        })
      }, "handleUserSettingsProtoChange")
    }), u(this, "throttledOnChange", i().debounce(this.handleUserSettingsProtoChange, 0))
  }
}
let p = new f