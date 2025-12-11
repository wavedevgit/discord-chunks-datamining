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
  Chunk956406 = require("./956406.js");
let f = 200,
  p = e => "var(--space-".concat(e, ")"),
  _ = e => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
  m = e => {
    let {
      children: t,
      gap: n = 8,
      edgeFade: a = "xl",
      hideActionsWhenDisabled: m = true
    } = e, h = i.useRef(0), g = i.useRef(0), E = i.useRef(0), b = i.useRef(false), y = i.useRef(null), O = i.useMemo(() => i.Children.map(t, e => !i.isValidElement(e) || _(e) ? e : i.cloneElement(e, {
      tabIndex: false
    })), [t]), [v, S] = i.useState(false), [I, T] = i.useState(false), [C, A] = i.useState(true), N = () => {
      S(g.current > h.current)
    }, P = i.useCallback(() => {
      let e = D.current;
      null != e && (y.current = Math.floor((E.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)))
    }, []), R = i.useCallback(() => {
      let e = D.current;
      null != e && (T(E.current > 0), A(E.current + e.clientWidth < e.scrollWidth), P())
    }, [P]), w = (0, c.y)(e => {
      let {
        contentRect: t
      } = e;
      if (h.current = t.width, null != D.current) {
        var n;
        E.current = null == (n = D.current) ? true : n.scrollLeft
      }
      N(), R()
    }), D = i.useRef(null);
    i.useEffect(() => {
      let e = D.current;
      if (null == e) return;
      let t = new ResizeObserver(() => {
        g.current = e.scrollWidth, N(), R()
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
      }), e.addEventListener("scrollend", R), () => {
        t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", R)
      }
    }, [R]);
    let x = i.useMemo(() => (0, s.throttle)(() => {
        let e = D.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = Math.max(0, t - h.current);
        E.current = n, b.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => b.current = false, {
          once: true
        }), R()
      }, f), [h, R]),
      L = i.useMemo(() => (0, s.throttle)(() => {
        let e = D.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = t + h.current;
        E.current = n, b.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => b.current = false, {
          once: true
        }), R()
      }, f), [h, R]),
      j = i.useCallback(() => {
        let e = D.current;
        if (null == e) returnfalse;
        for (let t of e.children) {
          let e = t;
          if (document.activeElement === e) returntrue
        }
        returnfalse
      }, []),
      M = () => {
        setTimeout(() => {
          if (!j()) {
            let e = D.current;
            if (null != e)
              for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1")
          }
        }, 10)
      },
      k = {
        "--custom-edge-fade-width": p(a)
      };
    return (0, r.jsxs)("div", {
      ref: w,
      style: k,
      className: d.container,
      children: [v && (0, r.jsxs)("div", {
        className: d.actions,
        children: [(0, r.jsx)("div", {
          className: o()(d.button, {
            [d.disabled]: !I && m
          }),
          children: (0, r.jsx)(l.hU, {
            icon: l.j9r,
            variant: "overlay-secondary",
            onClick: x,
            disabled: !I,
            "aria-label": u.intl.string(u.t.FQx1Ru),
            "aria-hidden": !I && m
          })
        }), (0, r.jsx)("div", {
          className: o()(d.button, {
            [d.disabled]: !C && m
          }),
          children: (0, r.jsx)(l.hU, {
            icon: l.d4D,
            variant: "overlay-secondary",
            onClick: L,
            disabled: !C,
            "aria-label": u.intl.string(u.t.H4hwjn),
            "aria-hidden": !C && m
          })
        })]
      }), (0, r.jsx)(l.Kqy, {
        direction: "horizontal",
        gap: n,
        ref: D,
        className: o()(d.children, {
          [d.scrollLeft]: I,
          [d.scrollRight]: C,
          [d.scrollBoth]: I && C
        }),
        tabIndex: 0,
        onFocus: e => {
          let t = D.current;
          if (null != t) {
            if (e.preventDefault(), false !== t.tabIndex) {
              var n;
              let e = t.children[null != (n = null == y ? true : y.current) ? n : 0];
              null != e && (e.focus(), e.setAttribute("tabIndex", "0"))
            }
            t.setAttribute("tabIndex", "-1")
          }
        },
        onBlur: e => {
          e.preventDefault(), M()
        },
        onKeyDown: e => {
          var t;
          let n = D.current;
          if (null == n) return;
          let r = n.children,
            i = null != (t = y.current) ? t : 0,
            a = r[i];
          null != a && a.setAttribute("tabIndex", "-1");
          let o = ["ArrowLeft"],
            s = ["ArrowRight"];
          [...o, ...s].includes(e.key) && (e.preventDefault(), o.includes(e.key) && (i = Math.max(0, i - 1)), s.includes(e.key) && (i = Math.min(n.childElementCount - 1, i + 1)), null != (a = r[i]) ? (a.setAttribute("tabIndex", "0"), n.setAttribute("tabIndex", "-1"), a.focus(), y.current = i) : (n.setAttribute("tabIndex", "0"), P()))
        },
        onScroll: e => {
          b.current || (E.current = e.target.scrollLeft, R())
        },
        children: O
      })]
    })
  }