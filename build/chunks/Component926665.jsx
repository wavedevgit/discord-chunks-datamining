/** Chunk was on 1544 **/
/** chunk id: 926665, original params: e,a,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  t = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk169382 = require("./169382.js"),
  Chunk726542 = require("./726542.js"),
  Chunk656649 = require("./656649.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk86105 = require("./86105.js");
let b = "https://dis.gd/Amazon-Music-Connection",
  p = null != window.opener;

function x() {
  let {
    type: e
  } = (0, i.UO)(), a = (0, m.vJ)(e), s = (0, u.l)().get("error-code"), r = l.useCallback(() => {
    window.close()
  }, []), x = l.useMemo(() => {
    switch (a) {
      case g.ABu.AMAZON_MUSIC:
        return (0, n.jsx)("div", {
          className: t()(v.message, v.details),
          children: o.tq ? h.intl.format(h.t["0EikXi"], {
            link: () => (0, n.jsx)(c.eee, {
              href: b,
              children: b
            })
          }) : h.intl.format(h.t.hKHZhO, {
            link: () => (0, n.jsx)(c.eee, {
              href: b,
              children: b
            })
          })
        });
      case g.ABu.YOUTUBE:
        if (s === g.evJ.UNKNOWN_ACCOUNT.toString()) return (0, n.jsx)("div", {
          className: t()(v.message, v.details),
          children: h.intl.format(h.t.nQPJdL, {
            link: "https://support.google.com/youtube/answer/1646861"
          })
        });
        return null;
      default:
        return null
    }
  }, [s, a]);
  if (null == a) return null;
  let j = f.Z.get(a);
  return (0, n.jsxs)(m.UV, {
    platformType: a,
    children: [(0, n.jsx)("div", {
      className: t()(v.message, v.error),
      children: h.intl.format(h.t.E62dXo, {
        name: j.name
      })
    }), (0, n.jsx)("div", {
      className: t()(v.message, v.details),
      children: h.intl.string(h.t.Ra6lcp)
    }), x, p ? (0, n.jsx)(d.zx, {
      className: v.btn,
      onClick: r,
      children: h.intl.string(h.t.i4jeWR)
    }) : null, null != s ? (0, n.jsx)("div", {
      className: t()(v.message, v.errorDetails),
      children: h.intl.format(h.t.LElyIL, {
        errorCode: s
      })
    }) : null]
  })
}