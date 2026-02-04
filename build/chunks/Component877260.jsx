/** Chunk was on 13914 **/
/** chunk id: 877260, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => j
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function j(e) {
  let {
    root: t,
    footer: n,
    onClose: a,
    emptyState: s,
    searchQuery: g,
    onSearchChange: m
  } = e, j = y.A.useField("showNavigationMobile"), S = o.useRef(null), C = o.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        layout: n
      } = t;
      n.forEach(t => {
        if (null != t.trailing) switch (t.trailing.type) {
          case f.S.BADGE_NEW:
          case f.S.STRONGLY_DISCOURAGED_CUSTOM:
            var n, r, o;
            null == (r = (o = t.trailing).getDismissibleContentTypes) || null == (n = r.call(o)) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [w, P] = o.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]), k = (0, p.NC)(), T = (0, _.A)("settings-sidebar", S), A = y.A.useField("currentPanelKey");
  return o.useEffect(() => {
    var e;
    if (null == S.current || null == A) return;
    let t = y.A.getField("navTransition"),
      n = null == t || t.animateScroll,
      r = null == (e = S.current.getScrollerNode()) ? true : e.querySelector('[data-settings-sidebar-item="'.concat(A, '"]'));
    null != r && S.current.scrollIntoViewNode({
      node: r,
      padding: 8,
      animate: !d.A.useReducedMotion && n
    })
  }, [A]), (0, r.jsx)(u.NPJ, {
    theme: k,
    children: e => (0, r.jsx)(b.Ay, {
      contentTypes: C,
      children: t => {
        let {
          visibleContent: o
        } = t;
        return (0, r.jsxs)("div", {
          className: l()(h.pz, e, {
            [h.Hw]: c.Fr,
            [h.n7]: j
          }),
          children: [(0, r.jsxs)("div", {
            className: h.gM,
            children: [c.Fr && (0, r.jsx)("div", {
              className: h.hg,
              children: (0, r.jsx)(u.K0, {
                icon: u.d$L,
                onClick: a,
                variant: "icon-only",
                size: "sm",
                "aria-label": O.intl.string(O.t.cpT0Cq)
              })
            }), (0, r.jsx)("div", {
              children: w.map(e => (0, r.jsx)(x, {
                section: e,
                visibleContent: o,
                hoisted: true
              }, e.key))
            }), null != g && null != m && (0, r.jsx)(v, {
              searchQuery: g,
              onSearchChange: m
            }), null != s && 0 === P.length && (0, r.jsx)(s, {})]
          }), (0, r.jsx)(i.hD, {
            navigator: T,
            children: (0, r.jsx)(i.PR, {
              children: e => {
                var t, a;
                let {
                  ref: l
                } = e, i = function(e, t) {
                  if (null == e) return {};
                  var n, r, o, a = {};
                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                    for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                    return a
                  }
                  if (a = function(e, t) {
                      if (null == e) return {};
                      var n, r, o = {},
                        a = Object.getOwnPropertyNames(e);
                      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                      return o
                    }(e, t), Object.getOwnPropertySymbols)
                    for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                  return a
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
                    S.current = e, l.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: h.Mt,
                  fade: true
                }, i), a = a = {
                  children: [(0, r.jsx)("nav", {
                    className: h.C$,
                    children: P.map(e => (0, r.jsx)(x, {
                      section: e,
                      visibleContent: o
                    }, e.key))
                  }), null != n && (0, r.jsx)(n, {})]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(a)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }), t))
              }
            })
          })]
        })
      }
    })
  })
}

function x(e) {
  var t;
  let {
    section: n,
    visibleContent: o,
    hoisted: a = false
  } = e, l = null == (t = n.useTitle) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: h.uW,
    "aria-label": l,
    children: [null != l && (0, r.jsx)("div", {
      className: h.a9,
      children: (0, r.jsx)(u.Heading, {
        className: h.Pf,
        variant: "heading-sm/medium",
        color: "text-muted",
        children: l
      })
    }), n.layout.map(e => (0, r.jsx)(m.X, {
      node: e,
      visibleContent: o,
      hoisted: a
    }, e.key))]
  })
}

function v(e) {
  let {
    searchQuery: t,
    onSearchChange: n
  } = e, a = o.useRef(null), [l, i] = (0, b.kn)([s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]), c = o.useCallback(() => {
    n("")
  }, [n]), d = o.useMemo(() => ({
    title: O.intl.string(O.t.Kv519a),
    body: O.intl.string(O.t.cTGJBZ),
    badge: "new",
    position: "right",
    align: "center",
    scrollBehavior: "sticky"
  }), []);
  return (0, r.jsxs)("div", {
    className: h.PP,
    children: [(0, r.jsx)(u.IWV, {
      size: "md",
      query: t,
      onChange: n,
      onClear: c
    }), (0, r.jsx)("div", {
      className: h.To,
      ref: a
    }), (0, r.jsx)(g.A, {
      dismissibleContentType: s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
      targetElementRef: a,
      visibleContent: l,
      markAsDismissed: i,
      props: d
    })]
  })
}