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
  } = (0, Chunk828700.UO)(), a = (0, Chunk656649.vJ)(module), s = (0, Chunk169382.l)().get("error-code"), r = Chunk473749.useCallback(() => {
    window.close()
  }, []), x = Chunk473749.useMemo(() => {
    switch (exports) {
      case Chunk981631.ABu.AMAZON_MUSIC:
        return (0, Chunk54381.jsx)("div", {
          className: t()(Chunk86105.message, Chunk86105.details),
          children: Chunk873546.tq ? Chunk388032.intl.format(Chunk388032.t["0EikXi"], {
            link: () => (0, Chunk54381.jsx)(Chunk481060.Anchor, {
              href: b,
              children: b
            })
          }) : Chunk388032.intl.format(Chunk388032.t.hKHZhO, {
            link: () => (0, Chunk54381.jsx)(Chunk481060.Anchor, {
              href: b,
              children: b
            })
          })
        });
      case Chunk981631.ABu.YOUTUBE:
        if (require === Chunk981631.evJ.UNKNOWN_ACCOUNT.toString()) return (0, Chunk54381.jsx)("div", {
          className: t()(Chunk86105.message, Chunk86105.details),
          children: Chunk388032.intl.format(Chunk388032.t.nQPJdL, {
            link: "https://support.google.com/youtube/answer/1646861"
          })
        });
        return null;
      default:
        return null
    }
  }, [require, exports]);
  if (null == exports) return null;
  let j = Chunk726542.Z.get(exports);
  return (0, Chunk54381.jsxs)(Chunk656649.UV, {
    platformType: exports,
    children: [(0, Chunk54381.jsx)("div", {
      className: t()(Chunk86105.message, Chunk86105.error),
      children: Chunk388032.intl.format(Chunk388032.t.E62dXo, {
        name: j.name
      })
    }), (0, Chunk54381.jsx)("div", {
      className: t()(Chunk86105.message, Chunk86105.details),
      children: Chunk388032.intl.string(Chunk388032.t.Ra6lcp)
    }), x, p ? (0, Chunk54381.jsx)(Chunk755721.zx, {
      className: Chunk86105.btn,
      onClick: Chunk120356,
      children: Chunk388032.intl.string(Chunk388032.t.i4jeWR)
    }) : null, null != require ? (0, Chunk54381.jsx)("div", {
      className: t()(Chunk86105.message, Chunk86105.errorDetails),
      children: Chunk388032.intl.format(Chunk388032.t.LElyIL, {
        errorCode: require
      })
    }) : null]
  })
}