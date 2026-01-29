/** Chunk was on 59024 **/
/** chunk id: 877260, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => v
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk607399 = require("./607399.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk928039 = require("./928039.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk97469 = require("./97469.js"),
  Chunk933297 = require("./933297.js"),
  Chunk894858 = require("./894858.js"),
  Chunk130177 = require("./130177.jsx"),
  Chunk188180 = require("./188180.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk658646 = require("./658646.js");

function v(e) {
  let {
    root: t,
    footer: n,
    onClose: o,
    emptyState: s,
    searchQuery: m,
    onSearchChange: h
  } = e, v = g.A.useField("showNavigationMobile"), S = l.useRef(null), P = l.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        layout: n
      } = t;
      n.forEach(t => {
        if (null != t.trailing) switch (t.trailing.type) {
          case f.S.BADGE_NEW:
          case f.S.STRONGLY_DISCOURAGED_CUSTOM:
            var n, r, l;
            null == (r = (l = t.trailing).getDismissibleContentTypes) || null == (n = r.call(l)) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [w, C] = l.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]), A = (0, p.NC)(), N = (0, b.A)("settings-sidebar", S), E = g.A.useField("currentPanelKey");
  return l.useEffect(() => {
    var e;
    if (null == S.current || null == E) return;
    let t = g.A.getField("navTransition"),
      n = null == t || t.animateScroll,
      r = null == (e = S.current.getScrollerNode()) ? true : e.querySelector('[data-settings-sidebar-item="'.concat(E, '"]'));
    null != r && S.current.scrollIntoViewNode({
      node: r,
      padding: 8,
      animate: !d.A.useReducedMotion && n
    })
  }, [E]), (0, r.jsx)(u.NPJ, {
    theme: A,
    children: e => (0, r.jsx)(y.Ay, {
      contentTypes: P,
      children: t => {
        let {
          visibleContent: l
        } = t;
        return (0, r.jsxs)("div", {
          className: a()(O.pz, e, {
            [O.Hw]: c.Fr,
            [O.n7]: v
          }),
          children: [(0, r.jsxs)("div", {
            className: O.gM,
            children: [c.Fr && (0, r.jsx)("div", {
              className: O.hg,
              children: (0, r.jsx)(u.K0, {
                icon: u.d$L,
                onClick: o,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t.cpT0Cq)
              })
            }), (0, r.jsx)("div", {
              children: w.map(e => (0, r.jsx)(_, {
                section: e,
                visibleContent: l,
                hoisted: true
              }, e.key))
            }), null != m && null != h && (0, r.jsx)(x, {
              searchQuery: m,
              onSearchChange: h
            }), null != s && 0 === C.length && (0, r.jsx)(s, {})]
          }), (0, r.jsx)(i.hD, {
            navigator: N,
            children: (0, r.jsx)(i.PR, {
              children: e => {
                var t, o;
                let {
                  ref: a
                } = e, i = function(e, t) {
                  if (null == e) return {};
                  var n, r, l, o = {};
                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o
                  }
                  if (o = function(e, t) {
                      if (null == e) return {};
                      var n, r, l = {},
                        o = Object.getOwnPropertyNames(e);
                      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                      return l
                    }(e, t), Object.getOwnPropertySymbols)
                    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                  return o
                }(e, ["ref"]);
                return (0, r.jsxs)(u.ChK, (t = function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                      r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                      return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                      var r;
                      r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: true,
                        configurable: true,
                        writable: true
                      }) : e[t] = r
                    })
                  }
                  return e
                }({
                  ref: e => {
                    var t;
                    S.current = e, a.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: O.Mt,
                  fade: true
                }, i), o = o = {
                  children: [(0, r.jsx)("nav", {
                    className: O.C$,
                    children: C.map(e => (0, r.jsx)(_, {
                      section: e,
                      visibleContent: l
                    }, e.key))
                  }), null != n && (0, r.jsx)(n, {})]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(o)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }), t))
              }
            })
          })]
        })
      }
    })
  })
}

function _(e) {
  var t;
  let {
    section: n,
    visibleContent: l,
    hoisted: o = false
  } = e, a = null == (t = n.useTitle) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: O.uW,
    "aria-label": a,
    children: [null != a && (0, r.jsx)("div", {
      className: O.a9,
      children: (0, r.jsx)(u.Heading, {
        className: O.Pf,
        variant: "heading-sm/medium",
        color: "text-muted",
        children: a
      })
    }), n.layout.map(e => (0, r.jsx)(h.X, {
      node: e,
      visibleContent: l,
      hoisted: o
    }, e.key))]
  })
}

function x(e) {
  let {
    searchQuery: t,
    onSearchChange: n
  } = e, o = l.useRef(null), [a, i] = (0, y.kn)([s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]), c = l.useCallback(() => {
    n("")
  }, [n]), d = l.useMemo(() => ({
    title: j.intl.string(j.t.Kv519a),
    body: j.intl.string(j.t.cTGJBZ),
    badge: "new",
    position: "right",
    align: "center",
    scrollBehavior: "sticky"
  }), []);
  return (0, r.jsxs)("div", {
    className: O.PP,
    children: [(0, r.jsx)(u.IWV, {
      size: "md",
      query: t,
      onChange: n,
      onClear: c
    }), (0, r.jsx)("div", {
      className: O.To,
      ref: o
    }), (0, r.jsx)(m.A, {
      dismissibleContentType: s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
      targetElementRef: o,
      visibleContent: a,
      markAsDismissed: i,
      props: d
    })]
  })
}