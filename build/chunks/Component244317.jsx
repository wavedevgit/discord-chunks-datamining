/** Chunk was on 1272 **/
/** chunk id: 244317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./35282.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk873546 = require("./873546.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk358085 = require("./358085.js"),
  Chunk289341 = require("./289341.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk123591 = require("./123591.js");

function m(e) {
  let {
    applicationId: t
  } = e.match.params, [m, b] = i.useState(false), E = i.useRef(false), [_, O] = i.useState(null), v = !u.isPlatformEmbedded && !a.tq && !m, y = i.useMemo(() => (0, l.Z)(), []);
  return (i.useEffect(() => {
    v && true !== E.current && (Promise.resolve().then(n.bind(n, 536285)).then(e => {
      let {
        default: n
      } = e;
      n.request(p.Etm.DEEP_LINK, {
        type: f.jE.ACTIVITIES,
        params: {
          applicationId: t,
          url: location.href,
          attemptId: y
        }
      }).then(e => {
        let n = null != e && e;
        O(n), c.default.track(p.rMx.ACTIVITY_DEEP_LINK_ATTEMPTED, {
          application_id: t,
          source_url: location.href,
          attempt_id: y,
          rpc_success: n
        })
      }).catch(() => {
        O(false), c.default.track(p.rMx.ACTIVITY_DEEP_LINK_ATTEMPTED, {
          application_id: t,
          source_url: location.href,
          attempt_id: y,
          rpc_success: false
        })
      }).then(() => n.disconnect())
    }), E.current = true)
  }, [t, v, y]), v && false !== _) ? true === _ ? (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-xxl/bold",
      children: g.intl.string(g.t.csrAMJ)
    }), (0, r.jsx)(o.Text, {
      variant: "text-xs/semibold",
      children: g.intl.string(g.t["m1+IBn"])
    }), (0, r.jsx)(s.zxk, {
      variant: "primary",
      text: g.intl.string(g.t.fIv16B),
      onClick: () => b(true)
    })]
  }) : (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-xxl/bold",
      children: g.intl.string(g.t["Z+hCVU"])
    }), (0, r.jsx)(o.$jN, {})]
  }) : (0, r.jsx)(d.Z, function(e) {
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