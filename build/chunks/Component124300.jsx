/** Chunk was on web.js **/
/** chunk id: 124300, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk770178 = require("./770178.js"),
  Chunk775602 = require("./775602.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk107742 = require("./107742.js");
let _ = 200,
  h = e => "var(--space-".concat(e, ")"),
  m = e => null != e && "object" == typeof e && e.$$typeof === Symbol.for("react.portal"),
  g = e => {
    let {
      children: t,
      gap: n = 8,
      edgeFade: a = "xl",
      hideActionsWhenDisabled: g = true
    } = e, E = i.useRef(0), y = i.useRef(0), b = i.useRef(0), O = i.useRef(false), v = i.useRef(null), A = (0, l.bG)([d.A], () => d.A.keyboardModeEnabled), I = i.useMemo(() => i.Children.map(t, e => !i.isValidElement(e) || m(e) ? e : i.cloneElement(e, {
      tabIndex: false
    })), [t]), [S, T] = i.useState(false), [C, N] = i.useState(false), [w, R] = i.useState(true), P = () => {
      T(y.current > E.current)
    }, D = i.useCallback(() => {
      let e = j.current;
      null == e || (v.current = Math.floor((b.current + e.clientWidth / 2) / (e.scrollWidth / e.childElementCount)))
    }, []), L = i.useCallback(() => {
      let e = j.current;
      null != e && (N(b.current > 0), R(b.current + e.clientWidth < e.scrollWidth), D())
    }, [D]), x = i.useCallback(() => {
      let e = j.current;
      if (null == e) return;
      let t = v.current;
      Array.from(e.children).forEach((e, n) => {
        Array.from(e.children).forEach(e => {
          let r = e;
          A && n !== t ? r.setAttribute("inert", "true") : r.removeAttribute("inert")
        })
      })
    }, [A]), M = (0, u.w)(e => {
      let {
        contentRect: t
      } = e;
      if (E.current = t.width, null != j.current) {
        var n;
        b.current = null == (n = j.current) ? true : n.scrollLeft
      }
      P(), L(), x()
    }), j = i.useRef(null);
    i.useEffect(() => {
      let e = j.current;
      if (null == e) return;
      let t = new ResizeObserver(() => {
        y.current = e.scrollWidth, P(), L()
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
      }), e.addEventListener("scrollend", L), () => {
        t.disconnect(), n.disconnect(), e.removeEventListener("scrollend", L)
      }
    }, [L]);
    let k = i.useMemo(() => (0, s.throttle)(() => {
        let e = j.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = Math.max(0, t - E.current);
        b.current = n, O.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => O.current = false, {
          once: true
        }), L()
      }, _), [E, L]),
      U = i.useMemo(() => (0, s.throttle)(() => {
        let e = j.current;
        if (null == e) return;
        let {
          scrollLeft: t
        } = e, n = t + E.current;
        b.current = n, O.current = true, e.scrollTo({
          left: n,
          behavior: "smooth"
        }), e.addEventListener("scrollend", () => O.current = false, {
          once: true
        }), L()
      }, _), [E, L]),
      G = i.useCallback(() => {
        let e = j.current;
        if (null == e) returnfalse;
        for (let t of e.children)
          if (t.contains(document.activeElement)) returntrue;
        returnfalse
      }, []),
      F = i.useCallback(() => {
        setTimeout(() => {
          if (!G()) {
            let e = j.current;
            if (null != e) {
              for (let t of (e.setAttribute("tabIndex", "0"), e.children)) t.setAttribute("tabIndex", "-1");
              x()
            }
          }
        }, 10)
      }, [G, x]);
    i.useEffect(() => {
      x()
    }, [A, x]);
    let V = {
      "--custom-edge-fade-width": h(a)
    };
    return (0, r.jsxs)("div", {
      ref: M,
      style: V,
      className: p.kL,
      children: [S && (0, r.jsxs)("div", {
        className: p.o1,
        children: [(0, r.jsx)("div", {
          className: o()(p.x6, {
            [p.r9]: !C && g
          }),
          children: (0, r.jsx)(c.K0, {
            icon: c.Zge,
            variant: "overlay-secondary",
            onClick: k,
            disabled: !C,
            "aria-label": f.intl.string(f.t.FQx1Ru),
            "aria-hidden": !C && g
          })
        }), (0, r.jsx)("div", {
          className: o()(p.x6, {
            [p.r9]: !w && g
          }),
          children: (0, r.jsx)(c.K0, {
            icon: c.KS6,
            variant: "overlay-secondary",
            onClick: U,
            disabled: !w,
            "aria-label": f.intl.string(f.t.H4hwjn),
            "aria-hidden": !w && g
          })
        })]
      }), (0, r.jsx)(c.BJc, {
        direction: "horizontal",
        gap: n,
        ref: j,
        className: o()(p.Y_, {
          [p.jL]: C,
          [p.w6]: w,
          [p.XG]: C && w
        }),
        tabIndex: 0,
        onFocus: e => {
          let t = j.current;
          if (null != t) {
            if (e.preventDefault(), false !== t.tabIndex) {
              var n;
              let e = t.children[null != (n = null == v ? true : v.current) ? n : 0];
              null != e && (e.focus(), e.setAttribute("tabIndex", "0"), v.current = 0, x())
            }
            t.setAttribute("tabIndex", "-1")
          }
        },
        onBlur: e => {
          e.preventDefault(), F()
        },
        onKeyDown: e => {
          var t;
          let n = j.current;
          if (null == n) return;
          let r = n.children,
            i = null != (t = v.current) ? t : 0,
            a = r[i];
          null != a && a.setAttribute("tabIndex", "-1");
          let o = ["ArrowLeft"],
            s = ["ArrowRight"];
          [...o, ...s].includes(e.key) && (e.preventDefault(), o.includes(e.key) && (i = Math.max(0, i - 1)), s.includes(e.key) && (i = Math.min(n.childElementCount - 1, i + 1)), null != (a = r[i]) ? (a.setAttribute("tabIndex", "0"), n.setAttribute("tabIndex", "-1"), a.focus(), v.current = i, x()) : (n.setAttribute("tabIndex", "0"), D()))
        },
        onScroll: e => {
          O.current || (b.current = e.target.scrollLeft, L())
        },
        children: I
      })]
    })
  }