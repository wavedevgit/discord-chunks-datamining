/** Chunk was on 1544 **/
/** chunk id: 926665, original params: e,s,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk114858 = require("./114858.js"),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk169382 = require("./169382.js"),
  Chunk726542 = require("./726542.js"),
  Chunk656649 = require("./656649.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk242752 = require("./242752.js");
let p = "https://dis.gd/Amazon-Music-Connection",
  x = null != window.opener;

function j() {
  let {
    type: e
  } = (0, Chunk114858.UO)(), s = (0, Chunk656649.vJ)(module), n = (0, Chunk169382.l)().get("error-code"), r = Chunk73800.useCallback(() => {
    window.close()
  }, []), j = Chunk73800.useMemo(() => {
    switch (exports) {
      case Chunk981631.ABu.AMAZON_MUSIC:
        return (0, Chunk255367.jsx)("div", {
          className: a()(Chunk242752.message, Chunk242752.details),
          children: Chunk873546.tq ? Chunk388032.intl.format(Chunk388032.t["0EikXl"], {
            link: () => (0, Chunk255367.jsx)(Chunk481060.eee, {
              href: p,
              children: p
            })
          }) : Chunk388032.intl.format(Chunk388032.t.hKHZhI, {
            link: () => (0, Chunk255367.jsx)(Chunk481060.eee, {
              href: p,
              children: p
            })
          })
        });
      case Chunk981631.ABu.YOUTUBE:
        if (require === Chunk981631.evJ.UNKNOWN_ACCOUNT.toString()) return (0, Chunk255367.jsx)("div", {
          className: a()(Chunk242752.message, Chunk242752.details),
          children: Chunk388032.intl.format(Chunk388032.t.nQPJdH, {
            link: "https://support.google.com/youtube/answer/1646861"
          })
        });
        return null;
      default:
        return null
    }
  }, [require, exports]);
  if (null == exports) return null;
  let b = Chunk726542.Z.get(exports);
  return (0, Chunk255367.jsxs)(Chunk656649.UV, {
    platformType: exports,
    children: [(0, Chunk255367.jsx)("div", {
      className: a()(Chunk242752.message, Chunk242752.error),
      children: Chunk388032.intl.format(Chunk388032.t.E62dXl, {
        name: b.name
      })
    }), (0, Chunk255367.jsx)("div", {
      className: a()(Chunk242752.message, Chunk242752.details),
      children: Chunk388032.intl.string(Chunk388032.t.Ra6lcn)
    }), j, x ? (0, Chunk255367.jsx)(Chunk755721.zx, {
      className: Chunk242752.btn,
      onClick: Chunk120356,
      children: Chunk388032.intl.string(Chunk388032.t.i4jeWV)
    }) : null, null != require ? (0, Chunk255367.jsx)("div", {
      className: a()(Chunk242752.message, Chunk242752.errorDetails),
      children: Chunk388032.intl.format(Chunk388032.t.LElyIC, {
        errorCode: require
      })
    }) : null]
  })
}