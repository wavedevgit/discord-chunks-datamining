/** Chunk was on web.js **/
/** chunk id: 664559, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk768943 = require("./768943.js"),
  Chunk429828 = require("./429828.js");

function o() {
  return Chunk768943.Z.getSavedMessages().map(e => e.saveData)
}

function s() {
  let [e, t] = Chunk473749.useState(o), n = Chunk473749.useRef(Chunk768943.Z.getIsStale());
  return Chunk473749.useEffect(() => {
    let e = Chunk768943.Z.getLastChanged();

    function r() {
      let r = Chunk768943.Z.getLastChanged();
      if (module !== Chunk473749) {
        if (e = Chunk473749, require.current && !Chunk768943.Z.getIsStale()) {
          require.current = false, exports(o());
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
    return Chunk768943.Z.addChangeListener(Chunk473749), () => {
      Chunk768943.Z.removeChangeListener(Chunk473749)
    }
  }, []), (0, Chunk429828.Z)(), module
}