/** Chunk was on 91315 **/
/** chunk id: 593130, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk496675 = require("./496675.js"),
  Chunk346479 = require("./346479.js"),
  Chunk665906 = require("./665906.js"),
  Chunk91159 = require("./91159.js"),
  Chunk443671 = require("./443671.jsx"),
  Chunk342449 = require("./342449.jsx"),
  Chunk488131 = require("./488131.js"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk269932 = require("./269932.js");

function Z(e) {
  let {
    channel: t,
    className: n,
    onClose: a
  } = e, Z = (0, o.e7)([d.Z], () => d.Z.can(x.Plq.READ_MESSAGE_HISTORY, t)), O = (0, h.cD)(t), w = () => {
    a(), (0, j.R6)(t, true, "Thread Browser Empty State")
  }, N = l.useCallback((e, t) => {
    a(), (0, j.ok)(e, !t, v.on.BROWSER)
  }, [a]), S = function(e, t) {
    let [n, r] = l.useState(""), [a, s] = l.useState(false), [o, i] = l.useState(false), [c, d] = l.useState([]), h = async () => {
      if (null != n && "" !== n && !a) {
        s(true);
        try {
          let r = await u.Z.searchThreads(e, t, n);
          i(true), d(r)
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
    (0, g.A_)()
  }, []), <div className={s()(n, b.container)}><c.y5t component={(0, r.jsxs)("div", {
        className: b.header,
        children: [(0, r.jsx)(c.or_, {
          size: "md",
          color: "currentColor",
          className: b.threadIcon
        }), (0, r.jsx)(c.X6q, {
          variant: "heading-md/semibold",
          className: b.title,
          children: p.intl.string(p.t.E3H5lJ)
        }), Z ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: b.divider
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
          }({}, S))]
        }) : null, (0, r.jsx)("div", {
          className: b.spacer
        }), O ? (0, r.jsx)("div", {
          className: b.createButton,
          children: (0, r.jsx)(i.zx, {
            size: "sm",
            onClick: () => {
              a(), (0, j.R6)(t, true, "Thread Browser Toolbar")
            },
            text: p.intl.string(p.t.CumH4u)
          })
        }) : null, (0, r.jsx)(c.P3F, {
          className: b.closeIcon,
          onClick: a,
          "aria-label": p.intl.string(p.t.cpT0Cg),
          children: (0, r.jsx)(c.Dio, {
            size: "md",
            color: "currentColor"
          })
        })]
      })}>{S.hasResults ? (0, r.jsx)(m.Z, {
        channel: t,
        startThread: w,
        goToThread: N,
        threadIds: S.results
      }) : (0, r.jsx)(f.Z, {
        channel: t,
        startThread: w,
        goToThread: N
      })}</c.y5t></div>
}

function y(e) {
  let {
    query: t,
    setQuery: n,
    submit: l,
    isLoading: a
  } = e;
  return <c.E1j size={"sm"} autoFocus={true} query={t} isLoading={a} onChange={e => n(e)} onClear={() => n("")} onKeyDown={e => "Enter" === e.key && l()} placeholder={p.intl.string(p.t.h0JN7e)} aria-label={p.intl.string(p.t.h0JN7e)} />
}