/** Chunk was on 13530 **/
/** chunk id: 771004, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => j,
  h: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk203736 = require("./203736.js"),
  Chunk409626 = require("./409626.js"),
  Chunk936636 = require("./936636.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk812254 = require("./812254.js");

function p(e) {
  let {
    detectedGame: t,
    trackAction: l
  } = e, [a, p] = i.useState((null == t ? true : t.summaryLocalized) != null), [j, v] = i.useState(true), [b, y] = i.useState(false), A = i.useRef(null), {
    width: N,
    height: O
  } = (0, u.A)();
  return (i.useEffect(() => {
    let e = A.current;
    null != e && y(e.scrollHeight - e.clientHeight > 1 || !j)
  }, [A, N, O, j]), null == t.summary) ? null : (0, n.jsxs)("div", {
    className: r()(g.fi, g.mX),
    children: [null != t.summaryLocalized && (0, n.jsxs)("div", {
      className: r()(g.nM, g.Lc),
      children: [(0, n.jsx)(s.PencilSparkleIcon, {
        color: c.A.colors.TEXT_DEFAULT,
        size: "xs"
      }), (0, n.jsx)(o.EYj, {
        variant: "text-xs/medium",
        color: "text-default",
        children: a ? f.intl.format(f.t.aZ2iIp, {
          onShowOriginal: () => p(false)
        }) : f.intl.format(f.t["/2ylF4"], {
          onShowTranslated: () => p(true)
        })
      })]
    }), (0, n.jsx)(o.EYj, {
      ref: A,
      lineClamp: j ? 8 : true,
      variant: "text-sm/normal",
      children: a ? t.summaryLocalized : t.summary
    }), b && (0, n.jsx)(d.DUT, {
      className: g.vk,
      onClick: () => {
        l(j ? m.Ws.ShowMore : m.Ws.ShowLess), v(!j)
      },
      children: (0, n.jsx)(o.EYj, {
        variant: "text-sm/semibold",
        children: j ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
      })
    }), (0, n.jsx)(x.A, {
      className: h.B,
      detectedGame: t
    })]
  })
}

function j(e) {
  let {
    detectedGame: t,
    trackAction: l
  } = e, [a, p] = i.useState((null == t ? true : t.summaryLocalized) != null), [j, v] = i.useState(true), [b, y] = i.useState(false), A = i.useRef(null), {
    width: N,
    height: O
  } = (0, u.A)();
  return (i.useEffect(() => {
    let e = A.current;
    null != e && y(e.scrollHeight - e.clientHeight > 1 || !j)
  }, [A, N, O, j]), null == t.summary) ? null : (0, n.jsxs)("div", {
    className: r()(g.fi, g.mX),
    children: [null != t.summaryLocalized && (0, n.jsxs)("div", {
      className: r()(g.nM, g.Lc),
      children: [(0, n.jsx)(s.PencilSparkleIcon, {
        color: c.A.colors.TEXT_DEFAULT,
        size: "xs"
      }), (0, n.jsx)(o.EYj, {
        variant: "text-xs/medium",
        color: "text-default",
        children: a ? f.intl.format(f.t.aZ2iIp, {
          onShowOriginal: () => p(false)
        }) : f.intl.format(f.t["/2ylF4"], {
          onShowTranslated: () => p(true)
        })
      })]
    }), (0, n.jsx)(o.EYj, {
      ref: A,
      lineClamp: j ? 8 : true,
      variant: "text-sm/normal",
      children: a ? t.summaryLocalized : t.summary
    }), b && (0, n.jsx)(d.DUT, {
      className: g.vk,
      onClick: () => {
        l(j ? m.Ws.ShowMore : m.Ws.ShowLess), v(!j)
      },
      children: (0, n.jsx)(o.EYj, {
        variant: "text-sm/semibold",
        children: j ? f.intl.string(f.t.lBeKY2) : f.intl.string(f.t["6MwJo/"])
      })
    }), (0, n.jsx)(x.A, {
      className: h.B,
      detectedGame: t
    })]
  })
}