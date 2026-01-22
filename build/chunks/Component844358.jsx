/** Chunk was on 21738 **/
/** chunk id: 844358, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    applicationId: t
  } = e, [A, g] = i.useState(null), [m, b] = i.useState(false), _ = i.useRef(false), E = !u.isPlatformEmbedded && !a.Fr, O = i.useMemo(() => (0, l.A)(), []);
  if (i.useEffect(() => {
      E && true !== _.current ? (Promise.resolve().then(n.bind(n, 129014)).then(e => {
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
          g(t), t || b(true)
        }).catch(() => {
          g(false), b(true)
        }).then(() => n.disconnect())
      }), _.current = true) : E || b(true)
    }, [t, E, O]), m) return (0, r.jsx)(c.A, {});
  if (E && false !== A)
    if (true === A) return (0, r.jsxs)("div", {
      className: h.k,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-xxl/bold",
        children: f.intl.string(f.t.csrAMJ)
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/semibold",
        children: f.intl.string(f.t["m1+IBn"])
      }), (0, r.jsx)(s.$nd, {
        variant: "primary",
        text: f.intl.string(f.t.fIv16B),
        onClick: () => b(true)
      })]
    });
    else return (0, r.jsxs)("div", {
      className: h.k,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-xxl/bold",
        children: f.intl.string(f.t["Z+hCVU"])
      }), (0, r.jsx)(o.y$y, {})]
    });
  return (0, r.jsx)(c.A, {})
}