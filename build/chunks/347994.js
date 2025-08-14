/** Chunk was on 7384 **/
/** chunk id: 347994, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk710845 = require("./710845.js"),
  Chunk581883 = require("./581883.js"),
  Chunk314897 = require("./314897.js"),
  Chunk287328 = require("./287328.js"),
  Chunk261875 = require("./261875.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let u = new Chunk710845.Z("UserSettingsProto"),
  m = new class {
    async getAll(e) {
      let t = performance.now(),
        n = await o.Z.userSettings(e).getMany(),
        i = performance.now();
      u.verbose("loaded in ".concat(i - t, "ms (settings: ").concat(n.length, ")"));
      let r = {};
      for (let e of n) r[e.id] = e.value;
      return r
    }
    resetInMemoryState() {}
    constructor() {
      d(this, "actions", {
        CONNECTION_OPEN: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_ENQUEUE_UPDATE: () => this.throttledOnChange(),
        USER_SETTINGS_PROTO_UPDATE_EDIT_INFO: () => this.throttledOnChange()
      }), d(this, "handleUserSettingsProtoChange", () => {
        let e = Chunk314897.default.getId(),
          t = Chunk261875.Z.database(module);
        null == exports || exports.transaction(e => {
          var t, n;
          let i = a.Z.computeState(),
            r = o.Z.userSettingsTransaction(e);
          for (let e in i) r.put({
            id: Number(e),
            value: i[e]
          });
          let s = null != (n = null == (t = a.Z.settings.versions) ? true : t.dataVersion) ? n : false;
          o.Z.nonGuildVersionsTransaction(e).put({
            id: "user_settings_version",
            version: s
          })
        }, "handleUserSettingsProtoChange")
      }), d(this, "throttledOnChange", r().debounce(this.handleUserSettingsProtoChange, 0))
    }
  }