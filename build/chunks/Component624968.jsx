/** Chunk was on web.js **/
/** chunk id: 624968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk159691 = require("./159691.js"),
  Chunk393903 = require("./393903.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk968413 = require("./968413.js");
let u = 200,
  d = e => {
    let {
      children: t,
      gap: n = 12
    } = e, d = i.useRef(0), f = i.useRef(0), _ = i.useRef(0), p = i.useRef(false), [h, m] = i.useState(false), [g, E] = i.useState(false), [b, y] = i.useState(true), O = () => {
      m(f.current > d.current)
    }, v = () => {
      let e = T.current;
      null != e && (E(_.current > 0), y(_.current + e.clientWidth < e.scrollWidth))
    }, I = (0, s.y)(e => {
      let {
        contentRect: t
      } = e;
      if (d.current = t.width, null != T.current) {
        var n;
        _.current = null == (n = T.current) ? true : n.scrollLeft
      }
      O(), v()
    }), T = i.useRef(null);
    i.useEffect(() => {
      let e = T.current;
      if (null == e) return;
      let t = new ResizeObserver(() => {
        f.current = e.scrollWidth, O(), v()
      });
      Array.from(e.children).forEach(e => {
        t.observe(e)
      });
      let n = new MutationObserver(() => {
        t.disconnect(), Array.from(e.children).forEach(e => {
          t.observe(e)
        })
      });
      return n.observe(e, {
        childList: true
      }), e.addEventListener("scrollend", v), () => {
        t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", v)
      }
    }, []);
    let S = i.useMemo(() => (0, a.throttle)(() => {
        let e = T.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = Math.max(0, t - d.current);
        _.current = n, p.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => p.current = false, {
          once: true
        }), v()
      }, u), [d]),
      A = i.useMemo(() => (0, a.throttle)(() => {
        let e = T.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = t + d.current;
        _.current = n, p.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => p.current = false, {
          once: true
        }), v()
      }, u), [d]);
    return (0, r.jsxs)("div", {
      ref: I,
      className: c.container,
      children: [(0, r.jsx)("div", {
        ref: T,
        className: c.children,
        style: {
          gap: n
        },
        onScroll: e => {
          p.current || (_.current = e.target.scrollLeft, v())
        },
        children: t
      }), h && (0, r.jsxs)("div", {
        className: c.actions,
        children: [(0, r.jsx)(o.hU, {
          icon: o.j9r,
          variant: "overlay-secondary",
          onClick: S,
          disabled: !g,
          "aria-label": l.intl.string(l.t.FQx1Ru)
        }), (0, r.jsx)(o.hU, {
          icon: o.d4D,
          variant: "overlay-secondary",
          onClick: A,
          disabled: !b,
          "aria-label": l.intl.string(l.t.H4hwjn)
        })]
      })]
    })
  }