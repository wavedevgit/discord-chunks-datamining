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
  return i.Z.getSavedMessages().map(e => e.saveData)
}

function s() {
  let [e, t] = r.useState(o), n = r.useRef(i.Z.getIsStale());
  return r.useEffect(() => {
    let e = i.Z.getLastChanged();

    function r() {
      let r = i.Z.getLastChanged();
      if (e !== r) {
        if (e = r, n.current && !i.Z.getIsStale()) {
          n.current = false, t(o());
          return
        }
        t(e => {
          let t = [...e],
            n = new Map(i.Z.getSavedMessages().map(e => [e.saveData.messageId, e]));
          for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
          for (let e of n.values()) t.push(e.saveData);
          return t
        })
      }
    }
    return i.Z.addChangeListener(r), () => {
      i.Z.removeChangeListener(r)
    }
  }, []), (0, a.Z)(), e
}