/** Chunk was on 7937 **/
/** chunk id: 728645, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk439309 = require("./439309.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk256209 = require("./256209.js");

function c(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), a.forEach(function(e) {
      var a;
      a = n[e], e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = a
    })
  }
  return t
}

function d(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      n.push.apply(n, a)
    }
    return n
  })(Object(e)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
  }), t
}

function g(t) {
  let {
    user: e,
    tagId: n,
    title: r,
    messageCount: i,
    reactionCount: c,
    activeAgo: d,
    tags: g,
    attachment: m
  } = t, {
    name: u,
    avatarSrc: x
  } = e;
  return (0, a.jsxs)("div", {
    className: o.bE,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: o.mG,
        children: [(0, a.jsxs)(s.Text, {
          color: "text-strong",
          variant: "text-xs/medium",
          className: o.mG,
          children: [(0, a.jsx)("img", {
            src: x,
            alt: l.intl.string(l.t.lqaIxI),
            width: 16,
            height: 16
          }), u]
        }), null != n && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("span", {
            className: o.xE,
            children: "•"
          }), (0, a.jsx)(s.Text, {
            color: "text-strong",
            variant: "text-xxs/medium",
            className: o.qo,
            children: g[n]
          })]
        })]
      }), (0, a.jsx)(s.Heading, {
        color: "text-strong",
        variant: "heading-md/semibold",
        className: o.W0,
        children: r
      }), (0, a.jsxs)("div", {
        className: o.mG,
        children: [(0, a.jsxs)(s.Text, {
          color: "text-default",
          variant: "text-xs/medium",
          className: o.Hu,
          children: [(0, a.jsx)(s.oyn, {
            size: "xs",
            color: "currentColor",
            className: o.Kk
          }), i]
        }), c > 0 && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("span", {
            className: o.xE,
            children: "•"
          }), (0, a.jsxs)(s.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            className: o.Hu,
            children: [(0, a.jsx)("span", {
              role: "img",
              "aria-label": l.intl.string(l.t.gHp0C4),
              className: o.Kk,
              children: "❤️"
            }), c]
          })]
        }), (0, a.jsx)("span", {
          className: o.xE,
          children: "•"
        }), (0, a.jsx)(s.Text, {
          color: "text-default",
          variant: "text-xs/medium",
          children: d
        })]
      })]
    }), null != m && (0, a.jsx)("img", {
      src: m,
      alt: l.intl.formatToPlainString(l.t.MJHFt9, {
        name: r
      }),
      className: o.oh
    })]
  })
}

function m(t) {
  let {
    author: e,
    content: n
  } = t, {
    name: r,
    isOP: i,
    avatarSrc: c
  } = e;
  return (0, a.jsxs)("div", {
    className: o.iU,
    children: [(0, a.jsx)("img", {
      src: c,
      alt: l.intl.string(l.t.lqaIxI),
      width: 40,
      height: 40
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: o.mG,
        children: [(0, a.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-sm/semibold",
          children: r
        }), i && (0, a.jsx)("span", {
          className: o.aj,
          children: l.intl.string(l.t.fyE8sH)
        })]
      }), (0, a.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: n
      })]
    })]
  })
}

function u(t) {
  let {
    title: e,
    messages: n,
    maxHeight: r
  } = t;
  return (0, a.jsx)("div", {
    className: o.i1,
    style: {
      maxHeight: r
    },
    "aria-hidden": true,
    children: (0, a.jsxs)("div", {
      className: o.VH,
      children: [(0, a.jsx)(s.oyn, {
        size: "md",
        color: "currentColor",
        className: o.DD
      }), (0, a.jsx)(s.Heading, {
        color: "text-strong",
        variant: "heading-lg/semibold",
        className: o.wx,
        children: e
      }), (0, a.jsx)("div", {
        className: o.zC,
        children: n.map((t, e) => (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(m, c({}, t), e), 0 === e && (0, a.jsxs)("div", {
            children: [(0, a.jsx)("hr", {
              className: o.lL
            }), (0, a.jsxs)("div", {
              className: o.KY,
              children: [(0, a.jsxs)(s.Text, {
                color: "text-brand",
                variant: "text-xs/medium",
                className: o.QJ,
                children: [(0, a.jsx)("span", {
                  role: "img",
                  "aria-label": l.intl.string(l.t.gHp0C4),
                  className: o.Kk,
                  children: "❤️"
                }), "17"]
              }), (0, a.jsxs)(s.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: o.CQ,
                children: [(0, a.jsx)(s.XFE, {
                  size: "xs",
                  color: "currentColor"
                }), l.intl.string(l.t["3aOv+h"])]
              })]
            }), (0, a.jsx)("hr", {
              className: o.N
            })]
          })]
        }))
      }), (0, a.jsx)("div", {
        className: o.RW,
        children: (0, a.jsx)(s.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          children: l.intl.string(l.t.YzpScd)
        })
      })]
    })
  })
}

function x(t) {
  let {
    id: e
  } = t, [n, l] = r.useState(0), m = r.useRef(null), {
    tags: x,
    posts: p,
    postPreview: h,
    ariaLabel: j
  } = (0, i.A)(e);
  return r.useEffect(() => {
    l(0)
  }, [e]), r.useEffect(() => {
    var t;
    0 === n && (null == m || null == (t = m.current) ? true : t.clientHeight) != null && l(m.current.clientHeight - 40)
  }, [n]), (0, a.jsxs)("div", {
    className: o.kL,
    role: "image",
    "aria-label": j,
    children: [(0, a.jsxs)("div", {
      ref: m,
      className: o.T,
      "aria-hidden": true,
      children: [(0, a.jsx)("div", {
        className: o._A,
        children: x.map((t, e) => (0, a.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-xs/medium",
          className: o.Tc,
          children: t
        }, e))
      }), (0, a.jsx)("div", {
        className: o.Yl,
        children: p.map((t, e) => (0, a.jsx)(g, d(c({}, t), {
          tags: x
        }), e))
      })]
    }), (0, a.jsx)(u, d(c({}, h), {
      maxHeight: n
    }))]
  })
}