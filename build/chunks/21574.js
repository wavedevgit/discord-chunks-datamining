/** Chunk was on 4787 **/
/** chunk id: 21574, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => l
}), require("./896048.js"), require("./747238.js"), require("./321073.js");
let r = 0,
  a = null;

function l(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
  try {
    let n = function(e) {
      if (2 === r) return null;
      0 === r && function(e) {
        let t = e;
        for (; null != t && t !== document.body;) {
          for (let t of Object.keys(e))
            if (t.startsWith("__reactFiber$")) {
              a = t, r = 1;
              return
            } t = t.parentElement
        }
        null == a && (r = 2)
      }(e);
      let t = a,
        n = e;
      for (; null != n && n !== document.body;) {
        if (t in n) return n[t];
        n = n.parentElement
      }
      return null
    }(e);
    if (null != n) return function(e, t) {
      let n = [],
        r = e;
      for (; null != r;) {
        var a, l;
        let e = null == r || null == (a = r._debugSource) ? true : a.fileName,
          o = null == r || null == (l = r._debugSource) ? true : l.lineNumber;
        if (null != e && null != o) {
          let r = "".concat(e, ":").concat(o);
          if (t) {
            let e = r.split("/discord/");
            0 !== e.length && n.push(e[e.length - 1])
          } else n.push(r)
        }
        r = null == r ? true : r._debugOwner
      }
      return n
    }(n, t);
    return null
  } catch (e) {
    return null
  }
}