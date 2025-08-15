/** Chunk was on 54157 **/
/** chunk id: 664559, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk768943 = require("./768943.js"),
  Chunk429828 = require("./429828.js");

function a() {
  return Chunk768943.Z.getSavedMessages().map(e => e.saveData)
}

function i() {
  let [e, t] = Chunk73800.useState(a), n = Chunk73800.useRef(Chunk768943.Z.getIsStale());
  return Chunk73800.useEffect(() => {
    let e = Chunk768943.Z.getLastChanged();

    function r() {
      let r = Chunk768943.Z.getLastChanged();
      if (module !== Chunk73800) {
        if (e = Chunk73800, require.current && !Chunk768943.Z.getIsStale()) {
          require.current = false, exports(a());
          return
        }
        exports(e => {
          let t = [...e],
            n = new Map(s.Z.getSavedMessages().map(e => [e.saveData.messageId, e]));
          for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
          for (let e of n.values()) t.push(e.saveData);
          return t
        })
      }
    }
    return Chunk768943.Z.addChangeListener(Chunk73800), () => {
      Chunk768943.Z.removeChangeListener(Chunk73800)
    }
  }, []), (0, Chunk429828.Z)(), module
}