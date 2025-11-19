/** Chunk was on web.js **/
/** chunk id: 624968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk159691 = require("./159691.js"),
  Chunk393903 = require("./393903.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk968413 = require("./968413.js");
let u = 200,
  d = e => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
  f = e => {
    let {
      children: t,
      gap: n = 12
    } = e, f = i.useRef(0), _ = i.useRef(0), p = i.useRef(0), h = i.useRef(false), m = i.useRef(null), g = i.useMemo(() => i.Children.map(t, e => !i.isValidElement(e) || d(e) ? e : i.cloneElement(e, {
      tabIndex: false
    })), [t]), [E, b] = i.useState(false), [y, O] = i.useState(false), [v, I] = i.useState(true), T = () => {
      b(_.current > f.current)
    }, S = i.useCallback(() => {
      let e = N.current;
      null != e && (m.current = Math.floor((p.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)))
    }, []), A = i.useCallback(() => {
      let e = N.current;
      null != e && (O(p.current > 0), I(p.current + e.clientWidth < e.scrollWidth), S())
    }, [S]), C = (0, s.y)(e => {
      let {
        contentRect: t
      } = e;
      if (f.current = t.width, null != N.current) {
        var n;
        p.current = null == (n = N.current) ? true : n.scrollLeft
      }
      T(), A()
    }), N = i.useRef(null);
    i.useEffect(() => {
      let e = N.current;
      if (null == e) return;
      let t = new ResizeObserver(() => {
        _.current = e.scrollWidth, T(), A()
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
      }), e.addEventListener("scrollend", A), () => {
        t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", A)
      }
    }, [A]);
    let R = i.useMemo(() => (0, a.throttle)(() => {
        let e = N.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = Math.max(0, t - f.current);
        p.current = n, h.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => h.current = false, {
          once: true
        }), A()
      }, u), [f, A]),
      P = i.useMemo(() => (0, a.throttle)(() => {
        let e = N.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = t + f.current;
        p.current = n, h.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => h.current = false, {
          once: true
        }), A()
      }, u), [f, A]),
      D = i.useCallback(() => {
        let e = N.current;
        if (null == e) returnfalse;
        for (let t of e.children) {
          let e = t;
          if (document.activeElement === e) returntrue
        }
        returnfalse
      }, []),
      w = () => {
        setTimeout(() => {
          if (!D()) {
            let e = N.current;
            if (null != e)
              for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1")
          }
        }, 10)
      };
    return (0, r.jsxs)("div", {
      ref: C,
      className: c.container,
      children: [E && (0, r.jsxs)("div", {
        className: c.actions,
        children: [(0, r.jsx)(o.hU, {
          icon: o.j9r,
          variant: "overlay-secondary",
          onClick: R,
          disabled: !y,
          "aria-label": l.intl.string(l.t.FQx1Ru)
        }), (0, r.jsx)(o.hU, {
          icon: o.d4D,
          variant: "overlay-secondary",
          onClick: P,
          disabled: !v,
          "aria-label": l.intl.string(l.t.H4hwjn)
        })]
      }), (0, r.jsx)("div", {
        ref: N,
        className: c.children,
        style: {
          gap: n
        },
        tabIndex: 0,
        onFocus: e => {
          let t = N.current;
          if (null != t) {
            if (e.preventDefault(), false !== t.tabIndex) {
              var n;
              let e = t.children[null != (n = null == m ? true : m.current) ? n : 0];
              null != e && (e.focus(), e.setAttribute("tabIndex", "0"))
            }
            t.setAttribute("tabIndex", "-1")
          }
        },
        onBlur: e => {
          e.preventDefault(), w()
        },
        onKeyDown: e => {
          var t;
          let n = N.current;
          if (null == n) return;
          let r = n.children,
            i = null != (t = m.current) ? t : 0,
            a = r[i];
          null != a && a.setAttribute("tabIndex", "-1");
          let o = ["ArrowLeft"],
            s = ["ArrowRight"];
          [...o, ...s].includes(e.key) && (e.preventDefault(), o.includes(e.key) && (i = Math.max(0, i - 1)), s.includes(e.key) && (i = Math.min(n.childElementCount - 1, i + 1)), null != (a = r[i]) ? (a.setAttribute("tabIndex", "0"), n.setAttribute("tabIndex", "-1"), a.focus(), m.current = i) : (n.setAttribute("tabIndex", "0"), S()))
        },
        onScroll: e => {
          h.current || (p.current = e.target.scrollLeft, A())
        },
        children: g
      })]
    })
  }