/** Chunk was on 21738 **/
/** chunk id: 844358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk607399 = require("./607399.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk642277 = require("./642277.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk652215 = require("./652215.js"),
  Chunk613057 = require("./613057.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk742249 = require("./742249.js");

function m(e) {
  let {
    applicationId: t
  } = e, [m, f] = i.useState(null), [A, _] = i.useState(false), b = i.useRef(false), E = !u.isPlatformEmbedded && !a.Fr, O = i.useMemo(() => (0, l.A)(), []);
  if (i.useEffect(() => {
      E && true !== b.current ? (Promise.resolve().then(n.bind(n, 129014)).then(e => {
        let {
          default: n
        } = e;
        n.request(d.e$_.DEEP_LINK, {
          type: p.XK.ACTIVITIES,
          params: {
            applicationId: t,
            url: location.href,
            attemptId: O
          }
        }).then(e => {
          let t = null != e && e;
          f(t), t || _(true)
        }).catch(() => {
          f(false), _(true)
        }).then(() => n.disconnect())
      }), b.current = true) : E || _(true)
    }, [t, E, O]), A) return (0, r.jsx)(c.A, {});
  if (E && false !== m)
    if (true === m) return (0, r.jsxs)("div", {
      className: g.k,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-xxl/bold",
        children: h.intl.string(h.t.csrAMJ)
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: h.intl.string(h.t["m1+IBn"])
      }), (0, r.jsx)(s.$nd, {
        variant: "primary",
        text: h.intl.string(h.t.fIv16B),
        onClick: () => _(true)
      })]
    });
    else return (0, r.jsxs)("div", {
      className: g.k,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-xxl/bold",
        children: h.intl.string(h.t["Z+hCVU"])
      }), (0, r.jsx)(o.y$y, {})]
    });
  return (0, r.jsx)(c.A, {})
}