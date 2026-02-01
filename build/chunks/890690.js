/** Chunk was on 9207 **/
/** chunk id: 890690, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => o,
  u: () => a
}), require("./896048.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk894858 = require("./894858.js");

function a(e, t, n) {
  let i = r.useRef(null),
    l = r.useRef(new Set);
  r.useEffect(() => {
    let e = n.current;
    if (null == e) return;
    let t = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(e => null != e.getAttribute("data-settings-category-key")),
      r = new Map,
      a = [];
    return t.forEach(e => {
      let t = e.getAttribute("data-settings-category-key");
      null != t && (r.set(e, t), a.push(t))
    }), i.current = new IntersectionObserver(e => {
      if (e.forEach(e => {
          let {
            isIntersecting: t,
            target: n
          } = e, i = r.get(n);
          null != i && (t ? l.current.add(i) : l.current.delete(i))
        }), s.A.getField("disableSidebarCategoryAutoSelect")) return;
      let t = [];
      if (a.forEach(e => {
          l.current.has(e) && t.push(e)
        }), 0 === t.length) return;
      let n = t[0];
      s.A.getField("currentCategoryKey") !== n && s.A.setState({
        currentCategoryKey: n
      })
    }, {
      root: e,
      rootMargin: "0px 100000px 0px 100000px",
      threshold: 1
    }), t.forEach(e => {
      var t;
      return null == (t = i.current) ? true : t.observe(e)
    }), () => {
      var e;
      t.forEach(e => {
        var t;
        return null == (t = i.current) ? true : t.unobserve(e)
      }), null == (e = i.current) || e.disconnect(), i.current = null
    }
  }, [n, e, t])
}

function o() {
  r.useEffect(() => {
    let e = document.querySelectorAll("[data-settings-panel-scroller]");
    if (0 === e.length) return;
    let t = e[0];
    if (null == t) return;
    let n = l().debounce(() => {
      s.A.setState({
        disableSidebarCategoryAutoSelect: false
      })
    }, 50);
    return t.addEventListener("scroll", n), () => {
      t.removeEventListener("scroll", n), null == n || n.cancel()
    }
  }, []), r.useEffect(() => () => {
    s.A.setState({
      disableSidebarCategoryAutoSelect: false
    })
  }, [])
}