/** Chunk was on web.js **/
/** chunk id: 664559, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk768943 = require("./768943.js"),
  Chunk429828 = require("./429828.js");

function a() {
  return Chunk768943.Z.getSavedMessages().map(e => e.saveData)
}

function s() {
  let [e, t] = Chunk647438.useState(a), n = Chunk647438.useRef(Chunk768943.Z.getIsStale());
  return Chunk647438.useEffect(() => {
    let e = Chunk768943.Z.getLastChanged();

    function r() {
      let r = Chunk768943.Z.getLastChanged();
      if (module !== Chunk647438) {
        if (e = Chunk647438, require.current && !Chunk768943.Z.getIsStale()) {
          require.current = false, exports(a());
          return
        }
        exports(e => {
          let t = [...e],
            n = new Map(i.Z.getSavedMessages().map(e => [e.saveData.messageId, e]));
          for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
          for (let e of n.values()) t.push(e.saveData);
          return t
        })
      }
    }
    return Chunk768943.Z.addChangeListener(Chunk647438), () => {
      Chunk768943.Z.removeChangeListener(Chunk647438)
    }
  }, []), (0, Chunk429828.Z)(), module
}