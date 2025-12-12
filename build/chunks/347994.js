/** Chunk was on web.js **/
/** chunk id: 347994, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk710845 = require("./710845.js"),
  Chunk581883 = require("./581883.js"),
  Chunk314897 = require("./314897.js"),
  Chunk287328 = require("./287328.js"),
  Chunk261875 = require("./261875.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let d = new Chunk710845.Z("UserSettingsProto");
class f {
  async getAll(e) {
    let t = performance.now(),
      n = await l.Z.userSettings(e).getMany(),
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
      let e = Chunk314897.default.getId(),
        t = Chunk261875.Z.database(module);
      null == exports || exports.transaction(e => {
        var t, n;
        let r = a.Z.computeState(),
          i = l.Z.userSettingsTransaction(e);
        for (let e in r) i.put({
          id: Number(e),
          value: r[e]
        });
        let o = null != (n = null == (t = a.Z.settings.versions) ? true : t.dataVersion) ? n : false;
        l.Z.nonGuildVersionsTransaction(e).put({
          id: "user_settings_version",
          version: o
        })
      }, "handleUserSettingsProtoChange")
    }), u(this, "throttledOnChange", i().debounce(this.handleUserSettingsProtoChange, 0))
  }
}
let p = new f