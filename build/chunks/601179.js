/** Chunk was on 52199 **/
/** chunk id: 601179, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => i
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk85109 = require("./85109.js"),
  Chunk470654 = require("./470654.js");

function a() {
  return l.A.getSavedMessages().map(e => e.saveData)
}

function i() {
  let [e, t] = n.useState(a), r = n.useRef(l.A.getIsStale());
  return n.useEffect(() => {
    let e = l.A.getLastChanged();

    function n() {
      let n = l.A.getLastChanged();
      if (e !== n) {
        if (e = n, r.current && !l.A.getIsStale()) {
          r.current = false, t(a());
          return
        }
        t(e => {
          let t = [...e],
            r = new Map(l.A.getSavedMessages().map(e => [e.saveData.messageId, e]));
          for (let n of e) r.has(n.messageId) ? r.delete(n.messageId) : t.splice(t.indexOf(n), 1);
          for (let e of r.values()) t.push(e.saveData);
          return t
        })
      }
    }
    return l.A.addChangeListener(n), () => {
      l.A.removeChangeListener(n)
    }
  }, []), (0, s.A)(), e
}