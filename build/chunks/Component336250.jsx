/** Chunk was on 1272 **/
/** chunk id: 336250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk772848 = require("./772848.js"),
  Chunk873546 = require("./873546.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk857458 = require("./857458.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk981631 = require("./981631.js"),
  Chunk186901 = require("./186901.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk123591 = require("./123591.js");

function h(e) {
  let {
    applicationId: t
  } = e, [h, m] = i.useState(null), [b, E] = i.useState(false), _ = i.useRef(false), O = !u.isPlatformEmbedded && !a.tq, I = i.useMemo(() => (0, l.Z)(), []);
  if (i.useEffect(() => {
      O && true !== _.current ? (Promise.resolve().then(n.bind(n, 536285)).then(e => {
        let {
          default: n
        } = e;
        n.request(d.Etm.DEEP_LINK, {
          type: p.jE.ACTIVITIES,
          params: {
            applicationId: t,
            url: location.href,
            attemptId: I
          }
        }).then(e => {
          let t = null != e && e;
          m(t), t || E(true)
        }).catch(() => {
          m(false), E(true)
        }).then(() => n.disconnect())
      }), _.current = true) : O || E(true)
    }, [t, O, I]), b) return (0, r.jsx)(c.Z, {});
  if (O && false !== h)
    if (true === h) return (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xxl/bold",
        children: f.intl.string(f.t.csrAMJ)
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        children: f.intl.string(f.t["m1+IBn"])
      }), (0, r.jsx)(o.zxk, {
        variant: "primary",
        text: f.intl.string(f.t.fIv16B),
        onClick: () => E(true)
      })]
    });
    else return (0, r.jsxs)("div", {
      className: g.container,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-xxl/bold",
        children: f.intl.string(f.t["Z+hCVU"])
      }), (0, r.jsx)(s.$jN, {})]
    });
  return (0, r.jsx)(c.Z, {})
}