/** Chunk was on 71919 **/
/** chunk id: 926665, original params: e,s,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk828700 = require("./828700.js"),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk169382 = require("./169382.js"),
  Chunk726542 = require("./726542.js"),
  Chunk656649 = require("./656649.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk971990 = require("./971990.js");
let p = "https://dis.gd/Amazon-Music-Connection",
  x = null != window.opener;

function j() {
  let {
    type: e
  } = (0, Chunk828700.UO)(), s = (0, Chunk656649.vJ)(module), n = (0, Chunk169382.l)().get("error-code"), t = Chunk473749.useCallback(() => {
    window.close()
  }, []), j = Chunk473749.useMemo(() => {
    switch (exports) {
      case Chunk981631.ABu.AMAZON_MUSIC:
        return (0, Chunk54381.jsx)("div", {
          className: a()(Chunk971990.message, Chunk971990.details),
          children: Chunk873546.tq ? Chunk388032.intl.format(Chunk388032.t["0EikXi"], {
            link: () => (0, Chunk54381.jsx)(Chunk481060.Anchor, {
              href: p,
              children: p
            })
          }) : Chunk388032.intl.format(Chunk388032.t.hKHZhO, {
            link: () => (0, Chunk54381.jsx)(Chunk481060.Anchor, {
              href: p,
              children: p
            })
          })
        });
      case Chunk981631.ABu.YOUTUBE:
        if (require === Chunk981631.evJ.UNKNOWN_ACCOUNT.toString()) return (0, Chunk54381.jsx)("div", {
          className: a()(Chunk971990.message, Chunk971990.details),
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
  let N = Chunk726542.Z.get(exports);
  return (0, Chunk54381.jsxs)(Chunk656649.UV, {
    platformType: exports,
    children: [(0, Chunk54381.jsx)("div", {
      className: a()(Chunk971990.message, Chunk971990.error),
      children: Chunk388032.intl.format(Chunk388032.t.E62dXo, {
        name: N.name
      })
    }), (0, Chunk54381.jsx)("div", {
      className: a()(Chunk971990.message, Chunk971990.details),
      children: Chunk388032.intl.string(Chunk388032.t.Ra6lcp)
    }), j, x ? (0, Chunk54381.jsx)(Chunk755721.zx, {
      className: Chunk971990.btn,
      onClick: Chunk120356,
      children: Chunk388032.intl.string(Chunk388032.t.i4jeWR)
    }) : null, null != require ? (0, Chunk54381.jsx)("div", {
      className: a()(Chunk971990.message, Chunk971990.errorDetails),
      children: Chunk388032.intl.format(Chunk388032.t.LElyIL, {
        errorCode: require
      })
    }) : null]
  })
}