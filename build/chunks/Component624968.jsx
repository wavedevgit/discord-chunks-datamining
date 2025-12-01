/** Chunk was on web.js **/
/** chunk id: 624968, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk159691 = require("./159691.js"),
  Chunk393903 = require("./393903.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk968413 = require("./968413.js");
let f = 200,
  p = e => "var(--space-".concat(e, ")"),
  _ = e => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
  m = e => {
    let {
      children: t,
      gap: n = 8,
      edgeFade: a = "xl"
    } = e, m = i.useRef(0), h = i.useRef(0), g = i.useRef(0), E = i.useRef(false), b = i.useRef(null), y = i.useMemo(() => i.Children.map(t, e => !i.isValidElement(e) || _(e) ? e : i.cloneElement(e, {
      tabIndex: false
    })), [t]), [O, v] = i.useState(false), [S, I] = i.useState(false), [T, A] = i.useState(true), C = () => {
      v(h.current > m.current)
    }, N = i.useCallback(() => {
      let e = w.current;
      null != e && (b.current = Math.floor((g.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)))
    }, []), P = i.useCallback(() => {
      let e = w.current;
      null != e && (I(g.current > 0), A(g.current + e.clientWidth < e.scrollWidth), N())
    }, [N]), R = (0, c.y)(e => {
      let {
        contentRect: t
      } = e;
      if (m.current = t.width, null != w.current) {
        var n;
        g.current = null == (n = w.current) ? true : n.scrollLeft
      }
      C(), P()
    }), w = i.useRef(null);
    i.useEffect(() => {
      let e = w.current;
      if (null == e) return;
      let t = new ResizeObserver(() => {
        h.current = e.scrollWidth, C(), P()
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
      }), e.addEventListener("scrollend", P), () => {
        t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", P)
      }
    }, [P]);
    let D = i.useMemo(() => (0, s.throttle)(() => {
        let e = w.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = Math.max(0, t - m.current);
        g.current = n, E.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => E.current = false, {
          once: true
        }), P()
      }, f), [m, P]),
      x = i.useMemo(() => (0, s.throttle)(() => {
        let e = w.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = t + m.current;
        g.current = n, E.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => E.current = false, {
          once: true
        }), P()
      }, f), [m, P]),
      L = i.useCallback(() => {
        let e = w.current;
        if (null == e) returnfalse;
        for (let t of e.children) {
          let e = t;
          if (document.activeElement === e) returntrue
        }
        returnfalse
      }, []),
      j = () => {
        setTimeout(() => {
          if (!L()) {
            let e = w.current;
            if (null != e)
              for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1")
          }
        }, 10)
      },
      M = {
        "--custom-edge-fade-width": p(a)
      };
    return (0, r.jsxs)("div", {
      ref: R,
      style: M,
      className: d.container,
      children: [O && (0, r.jsxs)("div", {
        className: d.actions,
        children: [(0, r.jsx)(l.hU, {
          icon: l.j9r,
          variant: "overlay-secondary",
          onClick: D,
          disabled: !S,
          "aria-label": u.intl.string(u.t.FQx1Ru)
        }), (0, r.jsx)(l.hU, {
          icon: l.d4D,
          variant: "overlay-secondary",
          onClick: x,
          disabled: !T,
          "aria-label": u.intl.string(u.t.H4hwjn)
        })]
      }), (0, r.jsx)(l.Kqy, {
        direction: "horizontal",
        gap: n,
        ref: w,
        className: o()(d.children, {
          [d.scrollLeft]: S,
          [d.scrollRight]: T,
          [d.scrollBoth]: S && T
        }),
        tabIndex: 0,
        onFocus: e => {
          let t = w.current;
          if (null != t) {
            if (e.preventDefault(), false !== t.tabIndex) {
              var n;
              let e = t.children[null != (n = null == b ? true : b.current) ? n : 0];
              null != e && (e.focus(), e.setAttribute("tabIndex", "0"))
            }
            t.setAttribute("tabIndex", "-1")
          }
        },
        onBlur: e => {
          e.preventDefault(), j()
        },
        onKeyDown: e => {
          var t;
          let n = w.current;
          if (null == n) return;
          let r = n.children,
            i = null != (t = b.current) ? t : 0,
            a = r[i];
          null != a && a.setAttribute("tabIndex", "-1");
          let o = ["ArrowLeft"],
            s = ["ArrowRight"];
          [...o, ...s].includes(e.key) && (e.preventDefault(), o.includes(e.key) && (i = Math.max(0, i - 1)), s.includes(e.key) && (i = Math.min(n.childElementCount - 1, i + 1)), null != (a = r[i]) ? (a.setAttribute("tabIndex", "0"), n.setAttribute("tabIndex", "-1"), a.focus(), b.current = i) : (n.setAttribute("tabIndex", "0"), N()))
        },
        onScroll: e => {
          E.current || (g.current = e.target.scrollLeft, P())
        },
        children: y
      })]
    })
  }