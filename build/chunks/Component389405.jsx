/** Chunk was on 21738 **/
/** chunk id: 389405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk607399 = require("./607399.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk723702 = require("./723702.js"),
  Chunk394727 = require("./394727.js"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk742249 = require("./742249.js");

function m(e) {
  let {
    applicationId: t
  } = e.match.params, [m, A] = i.useState(false), _ = i.useRef(false), [b, E] = i.useState(null), O = !u.isPlatformEmbedded && !a.Fr && !m, y = i.useMemo(() => (0, l.A)(), []);
  return (i.useEffect(() => {
    O && true !== _.current && (Promise.resolve().then(n.bind(n, 129014)).then(e => {
      let {
        default: n
      } = e;
      n.request(p.e$_.DEEP_LINK, {
        type: h.XK.ACTIVITIES,
        params: {
          applicationId: t,
          url: location.href,
          attemptId: y
        }
      }).then(e => {
        let n = null != e && e;
        E(n), c.default.track(p.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
          application_id: t,
          source_url: location.href,
          attempt_id: y,
          rpc_success: n
        })
      }).catch(() => {
        E(false), c.default.track(p.HAw.ACTIVITY_DEEP_LINK_ATTEMPTED, {
          application_id: t,
          source_url: location.href,
          attempt_id: y,
          rpc_success: false
        })
      }).then(() => n.disconnect())
    }), _.current = true)
  }, [t, O, y]), O && false !== b) ? true === b ? (0, r.jsxs)("div", {
    className: f.k,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-xxl/bold",
      children: g.intl.string(g.t.csrAMJ)
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/semibold",
      children: g.intl.string(g.t["m1+IBn"])
    }), (0, r.jsx)(s.$nd, {
      variant: "primary",
      text: g.intl.string(g.t.fIv16B),
      onClick: () => A(true)
    })]
  }) : (0, r.jsxs)("div", {
    className: f.k,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-xxl/bold",
      children: g.intl.string(g.t["Z+hCVU"])
    }), (0, r.jsx)(o.y$y, {})]
  }) : (0, r.jsx)(d.A, function(e) {
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
  }({}, e))
}