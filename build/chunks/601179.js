/** Chunk was on web.js **/
/** chunk id: 601179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk85109 = require("./85109.js"),
  Chunk470654 = require("./470654.js");

function s() {
  return i.A.getSavedMessages().map(e => e.saveData)
}

function o() {
  let [e, t] = r.useState(s), n = r.useRef(i.A.getIsStale());
  return r.useEffect(() => {
    let e = i.A.getLastChanged();

    function r() {
      let r = i.A.getLastChanged();
      if (e !== r) {
        if (e = r, n.current && !i.A.getIsStale()) {
          n.current = false, t(s());
          return
        }
        t(e => {
          let t = [...e],
            n = new Map(i.A.getSavedMessages().map(e => [e.saveData.messageId, e]));
          for (let r of e) n.has(r.messageId) ? n.delete(r.messageId) : t.splice(t.indexOf(r), 1);
          for (let e of n.values()) t.push(e.saveData);
          return t
        })
      }
    }
    return i.A.addChangeListener(r), () => {
      i.A.removeChangeListener(r)
    }
  }, []), (0, a.A)(), e
}