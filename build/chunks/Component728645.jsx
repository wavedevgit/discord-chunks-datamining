/** Chunk was on 7937 **/
/** chunk id: 728645, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk439309 = require("./439309.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk256209 = require("./256209.js");

function o(t) {
  for (var e = 1; e < arguments.length; e++) {
    var a = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(t) {
      return Object.getOwnPropertyDescriptor(a, t).enumerable
    }))), n.forEach(function(e) {
      var n;
      n = a[e], e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = n
    })
  }
  return t
}

function d(t, e) {
  return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
    var a = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      a.push.apply(a, n)
    }
    return a
  })(Object(e)).forEach(function(a) {
    Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e, a))
  }), t
}

function g(t) {
  let {
    user: e,
    tagId: a,
    title: r,
    messageCount: i,
    reactionCount: o,
    activeAgo: d,
    tags: g,
    attachment: m
  } = t, {
    name: u,
    avatarSrc: x
  } = e;
  return (0, n.jsxs)("div", {
    className: c.bE,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: c.mG,
        children: [(0, n.jsxs)(s.Text, {
          color: "text-strong",
          variant: "text-xs/medium",
          className: c.mG,
          children: [(0, n.jsx)("img", {
            src: x,
            alt: l.intl.string(l.t.lqaIxI),
            width: 16,
            height: 16
          }), u]
        }), null != a && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("span", {
            className: c.xE,
            children: "•"
          }), (0, n.jsx)(s.Text, {
            color: "text-strong",
            variant: "text-xxs/medium",
            className: c.qo,
            children: g[a]
          })]
        })]
      }), (0, n.jsx)(s.Heading, {
        color: "text-strong",
        variant: "heading-md/semibold",
        className: c.W0,
        children: r
      }), (0, n.jsxs)("div", {
        className: c.mG,
        children: [(0, n.jsxs)(s.Text, {
          color: "text-default",
          variant: "text-xs/medium",
          className: c.Hu,
          children: [(0, n.jsx)(s.oyn, {
            size: "xs",
            color: "currentColor",
            className: c.Kk
          }), i]
        }), o > 0 && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("span", {
            className: c.xE,
            children: "•"
          }), (0, n.jsxs)(s.Text, {
            color: "text-default",
            variant: "text-xs/medium",
            className: c.Hu,
            children: [(0, n.jsx)("span", {
              role: "img",
              "aria-label": l.intl.string(l.t.gHp0C4),
              className: c.Kk,
              children: "❤️"
            }), o]
          })]
        }), (0, n.jsx)("span", {
          className: c.xE,
          children: "•"
        }), (0, n.jsx)(s.Text, {
          color: "text-default",
          variant: "text-xs/medium",
          children: d
        })]
      })]
    }), null != m && (0, n.jsx)("img", {
      src: m,
      alt: l.intl.formatToPlainString(l.t.MJHFt9, {
        name: r
      }),
      className: c.oh
    })]
  })
}

function m(t) {
  let {
    author: e,
    content: a
  } = t, {
    name: r,
    isOP: i,
    avatarSrc: o
  } = e;
  return (0, n.jsxs)("div", {
    className: c.iU,
    children: [(0, n.jsx)("img", {
      src: o,
      alt: l.intl.string(l.t.lqaIxI),
      width: 40,
      height: 40
    }), (0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: c.mG,
        children: [(0, n.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-sm/semibold",
          children: r
        }), i && (0, n.jsx)("span", {
          className: c.aj,
          children: l.intl.string(l.t.fyE8sH)
        })]
      }), (0, n.jsx)(s.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: a
      })]
    })]
  })
}

function u(t) {
  let {
    title: e,
    messages: a,
    maxHeight: r
  } = t;
  return (0, n.jsx)("div", {
    className: c.i1,
    style: {
      maxHeight: r
    },
    "aria-hidden": true,
    children: (0, n.jsxs)("div", {
      className: c.VH,
      children: [(0, n.jsx)(s.oyn, {
        size: "md",
        color: "currentColor",
        className: c.DD
      }), (0, n.jsx)(s.Heading, {
        color: "text-strong",
        variant: "heading-lg/semibold",
        className: c.wx,
        children: e
      }), (0, n.jsx)("div", {
        className: c.zC,
        children: a.map((t, e) => (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(m, o({}, t), e), 0 === e && (0, n.jsxs)("div", {
            children: [(0, n.jsx)("hr", {
              className: c.lL
            }), (0, n.jsxs)("div", {
              className: c.KY,
              children: [(0, n.jsxs)(s.Text, {
                color: "text-brand",
                variant: "text-xs/medium",
                className: c.QJ,
                children: [(0, n.jsx)("span", {
                  role: "img",
                  "aria-label": l.intl.string(l.t.gHp0C4),
                  className: c.Kk,
                  children: "❤️"
                }), "17"]
              }), (0, n.jsxs)(s.Text, {
                color: "text-muted",
                variant: "text-xs/medium",
                className: c.CQ,
                children: [(0, n.jsx)(s.XFE, {
                  size: "xs",
                  color: "currentColor"
                }), l.intl.string(l.t["3aOv+h"])]
              })]
            }), (0, n.jsx)("hr", {
              className: c.N
            })]
          })]
        }))
      }), (0, n.jsx)("div", {
        className: c.RW,
        children: (0, n.jsx)(s.Text, {
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
  } = t, [a, l] = r.useState(0), m = r.useRef(null), {
    tags: x,
    posts: f,
    postPreview: p,
    ariaLabel: b
  } = (0, i.A)(e);
  return r.useEffect(() => {
    l(0)
  }, [e]), r.useEffect(() => {
    var t;
    0 === a && (null == m || null == (t = m.current) ? true : t.clientHeight) != null && l(m.current.clientHeight - 40)
  }, [a]), (0, n.jsxs)("div", {
    className: c.kL,
    role: "image",
    "aria-label": b,
    children: [(0, n.jsxs)("div", {
      ref: m,
      className: c.T,
      "aria-hidden": true,
      children: [(0, n.jsx)("div", {
        className: c._A,
        children: x.map((t, e) => (0, n.jsx)(s.Text, {
          color: "text-strong",
          variant: "text-xs/medium",
          className: c.Tc,
          children: t
        }, e))
      }), (0, n.jsx)("div", {
        className: c.Yl,
        children: f.map((t, e) => (0, n.jsx)(g, d(o({}, t), {
          tags: x
        }), e))
      })]
    }), (0, n.jsx)(u, d(o({}, p), {
      maxHeight: a
    }))]
  })
}