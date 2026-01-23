/** Chunk was on 13530 **/
/** chunk id: 771004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk981355 = require("./981355.js"),
  Chunk409626 = require("./409626.js"),
  Chunk936636 = require("./936636.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk812254 = require("./812254.js");

function j(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, [i, j] = r.useState((null == t ? true : t.summaryLocalized) != null), [h, v] = r.useState(true), [b, y] = r.useState(false), O = r.useRef(null), {
    width: A,
    height: _
  } = (0, d.A)();
  return (r.useEffect(() => {
    let e = O.current;
    null != e && y(e.scrollHeight - e.clientHeight > 1 || !h)
  }, [O, A, _, h]), null == t.summary) ? null : (0, l.jsxs)("div", {
    className: a()(x.fi, x.mX),
    children: [null != t.summaryLocalized && (0, l.jsxs)("div", {
      className: a()(x.nM, x.Lc),
      children: [(0, l.jsx)(s.PencilSparkleIcon, {
        color: c.A.colors.TEXT_DEFAULT,
        size: "xs"
      }), (0, l.jsx)(o.EYj, {
        variant: "text-xs/medium",
        color: "text-default",
        children: i ? g.intl.format(g.t.aZ2iIp, {
          onShowOriginal: () => j(false)
        }) : g.intl.format(g.t["/2ylF4"], {
          onShowTranslated: () => j(true)
        })
      })]
    }), (0, l.jsx)(o.EYj, {
      ref: O,
      lineClamp: h ? 8 : true,
      variant: "text-sm/normal",
      children: i ? t.summaryLocalized : t.summary
    }), b && (0, l.jsx)(u.DUT, {
      className: x.vk,
      onClick: () => {
        n(h ? m.Ws.ShowMore : m.Ws.ShowLess), v(!h)
      },
      children: (0, l.jsx)(o.EYj, {
        variant: "text-sm/semibold",
        children: h ? g.intl.string(g.t.lBeKY2) : g.intl.string(g.t["6MwJo/"])
      })
    }), (0, l.jsx)(f.A, {
      className: p.B,
      detectedGame: t
    })]
  })
}