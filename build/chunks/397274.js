/** Chunk was on 9207 **/
/** chunk id: 397274, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk775602 = require("./775602.js");
let i = new class {
  getPanelScrollerNode() {
    let e = document.querySelectorAll("[data-settings-panel-scroller]");
    return e.length > 0 ? e[0] : null
  }
  clearInitialScrollListener() {
    if (null == this.scrollListener) return;
    let e = this.getPanelScrollerNode();
    null != e && (e.removeEventListener("scroll", this.scrollListener), this.scrollListener = null)
  }
  setInitialScrollListener(e) {
    let t = this.getPanelScrollerNode();
    null != t && (null != this.scrollListener && t.removeEventListener("scroll", this.scrollListener), this.scrollListener = () => {
      this.scrollListener = null, e()
    }, t.addEventListener("scroll", this.scrollListener, {
      once: true
    }))
  }
  scroll(e) {
    let {
      scrollerNode: t,
      target: n,
      scrollBehavior: r,
      scrollBlock: i
    } = e;
    return new Promise(e => {
      let l = null,
        s = () => {
          clearTimeout(l), e(true)
        };
      requestAnimationFrame(() => {
        t.addEventListener("scroll", s, {
          once: true
        }), n.scrollIntoView({
          behavior: r,
          block: i
        }), l = setTimeout(() => {
          t.removeEventListener("scroll", s), e(false)
        }, 50)
      })
    })
  }
  async scrollIntoView(e, t) {
    var n;
    let i = this.getPanelScrollerNode();
    if (null == i) return;
    let l = t.animate && !r.A.useReducedMotion,
      s = null != (n = t.block) ? n : "start";
    await this.scroll({
      scrollerNode: i,
      target: e,
      scrollBehavior: l ? "smooth" : "auto",
      scrollBlock: s
    }) && await new Promise(e => {
      i.addEventListener("scrollend", () => e(), {
        once: true
      })
    })
  }
  constructor() {
    ! function(e, t, n) {
      t in e ? Object.defineProperty(e, t, {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = null
    }(this, "scrollListener", 0)
  }
}