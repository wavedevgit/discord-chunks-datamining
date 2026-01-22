/** Chunk was on 34160 **/
/** chunk id: 617011, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk576705 = require("./576705.js"),
  Chunk867455 = require("./867455.js"),
  Chunk406704 = require("./406704.js"),
  Chunk707539 = require("./707539.js"),
  Chunk836975 = require("./836975.jsx"),
  Chunk572275 = require("./572275.jsx"),
  Chunk747926 = require("./747926.js"),
  Chunk37411 = require("./37411.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk204199 = require("./204199.js");

function p(e) {
  let {
    channel: t,
    className: n,
    onClose: a,
    context: p
  } = e, w = (0, o.bG)([u.A], () => u.A.can(v.xBc.READ_MESSAGE_HISTORY, t)), O = (0, h.AI)(t), S = () => {
    a(), (0, j.Tv)(t, true, "Thread Browser Empty State")
  }, T = l.useCallback((e, t) => {
    a(), (0, j.JA)(e, !t, x.H9.BROWSER)
  }, [a]), N = function(e, t) {
    let [n, r] = l.useState(""), [a, s] = l.useState(false), [o, i] = l.useState(false), [c, u] = l.useState([]), h = async () => {
      if (null != n && "" !== n && !a) {
        s(true);
        try {
          let r = await d.A.searchThreads(e, t, n);
          i(true), u(r)
        } finally {
          s(false)
        }
      }
    };
    return {
      query: n,
      setQuery: e => {
        r(e), 0 === e.length && i(false)
      },
      isLoading: a,
      hasResults: o,
      submit: h,
      results: c
    }
  }(t.guild_id, t.id);
  return l.useEffect(() => {
    (0, g.ju)()
  }, []), (0, r.jsx)("div", {
    className: s()(n, A.kL),
    children: (0, r.jsx)(c.Fmo, {
      component: (0, r.jsxs)("div", {
        className: A.wx,
        children: [(0, r.jsx)(c.ysw, {
          size: "md",
          color: "currentColor",
          className: A.aM
        }), (0, r.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          className: A.DD,
          children: b.intl.string(b.t.E3H5lE)
        }), w ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: A.yF
          }), (0, r.jsx)(y, function(e) {
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
          }({}, N))]
        }) : null, (0, r.jsx)("div", {
          className: A.jH
        }), O ? (0, r.jsx)("div", {
          className: A.Tf,
          children: (0, r.jsx)(i.$nd, {
            size: "sm",
            onClick: () => {
              a(), (0, j.Tv)(t, true, "Thread Browser Toolbar")
            },
            text: b.intl.string(b.t.CumH4u)
          })
        }) : null, "modal" === p ? (0, r.jsx)("div", {
          className: A.ut,
          children: (0, r.jsx)(i.JnF, {
            size: "sm",
            onClick: a
          })
        }) : null]
      }),
      children: N.hasResults ? (0, r.jsx)(m.A, {
        channel: t,
        startThread: S,
        goToThread: T,
        threadIds: N.results
      }) : (0, r.jsx)(f.A, {
        channel: t,
        startThread: S,
        goToThread: T
      })
    })
  })
}

function y(e) {
  let {
    query: t,
    setQuery: n,
    submit: l
  } = e;
  return (0, r.jsx)(c.IWV, {
    size: "sm",
    autoFocus: true,
    query: t,
    onChange: e => n(e),
    onClear: () => n(""),
    onKeyDown: e => "Enter" === e.key && l(),
    placeholder: b.intl.string(b.t.h0JN7Q),
    "aria-label": b.intl.string(b.t.h0JN7Q)
  })
}