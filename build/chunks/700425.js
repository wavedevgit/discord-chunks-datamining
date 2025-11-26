/** Chunk was on 88569 **/
/** chunk id: 700425, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => a,
  l: () => s
}), require("./388685.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk996435 = require("./996435.js");

function a(e, t) {
  let n = r.useRef(null),
    l = r.useRef(new Set);
  r.useEffect(() => {
    let e = t.current;
    if (null == e) return;
    let r = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(e => null != e.getAttribute("data-settings-category-key")),
      i = new Map,
      a = [];
    return r.forEach(e => {
      let t = e.getAttribute("data-settings-category-key");
      null != t && (i.set(e, t), a.push(t))
    }), n.current = new IntersectionObserver(e => {
      if (e.forEach(e => {
          let {
            isIntersecting: t,
            target: n
          } = e, r = i.get(n);
          null != r && (t ? l.current.add(r) : l.current.delete(r))
        }), o.Z.getField("disableSidebarCategoryAutoSelect")) return;
      let t = [];
      if (a.forEach(e => {
          l.current.has(e) && t.push(e)
        }), 0 === t.length) return;
      let n = t[0];
      o.Z.getField("activeCategoryKey") !== n && o.Z.setState({
        activeCategoryKey: n
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

function s() {
  Chunk473749.useEffect(() => {
    let e = document.querySelectorAll("[data-settings-panel-scroller]");
    if (0 === module.length) return;
    let t = module[0];
    if (null == exports) return;
    let n = i().debounce(() => {
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