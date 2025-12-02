/** Chunk was on web.js **/
/** chunk id: 700425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => s,
  l: () => l
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk996435 = require("./996435.js");

function s(e, t) {
  let n = r.useRef(null),
    i = r.useRef(new Set);
  r.useEffect(() => {
    let e = t.current;
    if (null == e) return;
    let r = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(e => null != e.getAttribute("data-settings-category-key")),
      a = new Map,
      s = [];
    return r.forEach(e => {
      let t = e.getAttribute("data-settings-category-key");
      null != t && (a.set(e, t), s.push(t))
    }), n.current = new IntersectionObserver(e => {
      if (e.forEach(e => {
          let {
            isIntersecting: t,
            target: n
          } = e, r = a.get(n);
          null != r && (t ? i.current.add(r) : i.current.delete(r))
        }), o.Z.getField("disableSidebarCategoryAutoSelect")) return;
      let t = [];
      if (s.forEach(e => {
          i.current.has(e) && t.push(e)
        }), 0 === t.length) return;
      let n = t[0];
      o.Z.getField("currentCategoryKey") !== n && o.Z.setState({
        currentCategoryKey: n
      })
    }, {
      root: e,
      rootMargin: "0px 100000px 0px 100000px",
      threshold: 1
    }), r.forEach(e => {
      var t;
      return null == (t = n.current) ? true : t.observe(e)
    }), () => {
      var e;
      r.forEach(e => {
        var t;
        return null == (t = n.current) ? true : t.unobserve(e)
      }), null == (e = n.current) || e.disconnect(), n.current = null
    }
  }, [t, e.key, e.layout])
}

function l() {
  Chunk473749.useEffect(() => {
    let e = document.querySelectorAll("[data-settings-panel-scroller]");
    if (0 === module.length) return;
    let t = module[0];
    if (null == exports) return;
    let n = a().debounce(() => {
      Chunk996435.Z.setState({
        disableSidebarCategoryAutoSelect: false
      })
    }, 50);
    return exports.addEventListener("scroll", require), () => {
      exports.removeEventListener("scroll", require), null == require || require.cancel()
    }
  }, []), Chunk473749.useEffect(() => () => {
    Chunk996435.Z.setState({
      disableSidebarCategoryAutoSelect: false
    })
  }, [])
}