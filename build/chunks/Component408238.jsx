/** Chunk was on web.js **/
/** chunk id: 408238, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk732955 = require("./732955.js"),
  Chunk770178 = require("./770178.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk734188 = require("./734188.js");
let f = 200,
  p = e => "var(--space-".concat(e, ")"),
  _ = e => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
  h = e => {
    let {
      children: t,
      gap: n = 8,
      edgeFade: a = "xl",
      hideActionsWhenDisabled: h = true
    } = e, m = i.useRef(0), g = i.useRef(0), E = i.useRef(0), b = i.useRef(false), y = i.useRef(null), O = i.useMemo(() => i.Children.map(t, e => !i.isValidElement(e) || _(e) ? e : i.cloneElement(e, {
      tabIndex: false
    })), [t]), [A, v] = i.useState(false), [S, I] = i.useState(false), [T, C] = i.useState(true), N = () => {
      v(g.current > m.current)
    }, R = i.useCallback(() => {
      let e = D.current;
      null == e || (y.current = Math.floor((E.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)))
    }, []), w = i.useCallback(() => {
      let e = D.current;
      null != e && (I(E.current > 0), C(E.current + e.clientWidth < e.scrollWidth), R())
    }, [R]), P = (0, c.w)(e => {
      let {
        contentRect: t
      } = e;
      if (m.current = t.width, null != D.current) {
        var n;
        E.current = null == (n = D.current) ? true : n.scrollLeft
      }
      N(), w()
    }), D = i.useRef(null);
    i.useEffect(() => {
      let e = D.current;
      if (null == e) return;
      let t = new ResizeObserver(() => {
        g.current = e.scrollWidth, N(), w()
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
      }), e.addEventListener("scrollend", w), () => {
        t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", w)
      }
    }, [w]);
    let x = i.useMemo(() => (0, o.throttle)(() => {
        let e = D.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = Math.max(0, t - m.current);
        E.current = n, b.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => b.current = false, {
          once: true
        }), w()
      }, f), [m, w]),
      L = i.useMemo(() => (0, o.throttle)(() => {
        let e = D.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = t + m.current;
        E.current = n, b.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => b.current = false, {
          once: true
        }), w()
      }, f), [m, w]),
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
      ref: P,
      style: k,
      className: d.kL,
      children: [A && (0, r.jsxs)("div", {
        className: d.o1,
        children: [(0, r.jsx)("div", {
          className: s()(d.x6, {
            [d.r9]: !S && h
          }),
          children: (0, r.jsx)(l.K0, {
            icon: l.Zge,
            variant: "overlay-secondary",
            onClick: x,
            disabled: !S,
            "aria-label": u.intl.string(u.t.FQx1Ru),
            "aria-hidden": !S && h
          })
        }), (0, r.jsx)("div", {
          className: s()(d.x6, {
            [d.r9]: !T && h
          }),
          children: (0, r.jsx)(l.K0, {
            icon: l.KS6,
            variant: "overlay-secondary",
            onClick: L,
            disabled: !T,
            "aria-label": u.intl.string(u.t.H4hwjn),
            "aria-hidden": !T && h
          })
        })]
      }), (0, r.jsx)(l.BJc, {
        direction: "horizontal",
        gap: n,
        ref: D,
        className: s()(d.Y_, {
          [d.jL]: S,
          [d.w6]: T,
          [d.XG]: S && T
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
          let s = ["ArrowLeft"],
            o = ["ArrowRight"];
          [...s, ...o].includes(e.key) && (e.preventDefault(), s.includes(e.key) && (i = Math.max(0, i - 1)), o.includes(e.key) && (i = Math.min(n.childElementCount - 1, i + 1)), null != (a = r[i]) ? (a.setAttribute("tabIndex", "0"), n.setAttribute("tabIndex", "-1"), a.focus(), y.current = i) : (n.setAttribute("tabIndex", "0"), R()))
        },
        onScroll: e => {
          b.current || (E.current = e.target.scrollLeft, w())
        },
        children: O
      })]
    })
  }