/** Chunk was on 13530 **/
/** chunk id: 771004, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    detectedGame: t,
    trackAction: n
  } = e, [i, g] = r.useState((null == t ? true : t.summaryLocalized) != null), [j, h] = r.useState(true), [v, y] = r.useState(false), O = r.useRef(null), {
    width: A,
    height: I
  } = (0, u.A)();
  return (r.useEffect(() => {
    let e = O.current;
    null != e && y(e.scrollHeight - e.clientHeight > 1 || !j)
  }, [O, A, I, j]), null == t.summary) ? null : (0, l.jsxs)("div", {
    className: a()(b.fi, b.mX),
    children: [null != t.summaryLocalized && (0, l.jsxs)("div", {
      className: a()(b.nM, b.Lc),
      children: [(0, l.jsx)(s.PencilSparkleIcon, {
        color: c.A.colors.TEXT_DEFAULT,
        size: "xs"
      }), (0, l.jsx)(o.EYj, {
        variant: "text-xs/medium",
        color: "text-default",
        children: i ? x.intl.format(x.t.aZ2iIp, {
          onShowOriginal: () => g(false)
        }) : x.intl.format(x.t["/2ylF4"], {
          onShowTranslated: () => g(true)
        })
      })]
    }), (0, l.jsx)(o.EYj, {
      ref: O,
      lineClamp: j ? 8 : true,
      variant: "text-sm/normal",
      children: i ? t.summaryLocalized : t.summary
    }), v && (0, l.jsx)(d.DUT, {
      className: b.vk,
      onClick: () => {
        n(j ? m.Ws.ShowMore : m.Ws.ShowLess), h(!j)
      },
      children: (0, l.jsx)(o.EYj, {
        variant: "text-sm/semibold",
        children: j ? x.intl.string(x.t.lBeKY2) : x.intl.string(x.t["6MwJo/"])
      })
    }), (0, l.jsx)(f.A, {
      className: p.B,
      detectedGame: t
    })]
  })
}