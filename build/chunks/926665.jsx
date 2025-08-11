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
  Chunk776699 = require("./776699.js");
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
        return <div className={a()(Chunk776699.message, Chunk776699.details)}>{Chunk873546.tq ? Chunk388032.intl.format(Chunk388032.t["0EikXl"], {
            link: () => (0, Chunk255367.jsx)(Chunk481060.eee, {
              href: p,
              children: p
            })
          }) : Chunk388032.intl.format(Chunk388032.t.hKHZhI, {
            link: () => (0, Chunk255367.jsx)(Chunk481060.eee, {
              href: p,
              children: p
            })
          })}</div>;
      case Chunk981631.ABu.YOUTUBE:
        if (require === Chunk981631.evJ.UNKNOWN_ACCOUNT.toString()) return <div className={a()(Chunk776699.message, Chunk776699.details)}>{Chunk388032.intl.format(Chunk388032.t.nQPJdH, {
            link: "https://support.google.com/youtube/answer/1646861"
          })}</div>;
        return null;
      default:
        return null
    }
  }, [require, exports]);
  if (null == exports) return null;
  let b = Chunk726542.Z.get(exports);
  return <Chunk656649.UV platformType={exports}>{<div className={a()(Chunk776699.message, Chunk776699.error)}>{Chunk388032.intl.format(Chunk388032.t.E62dXl, {
        name: b.name
      })}</div>}{<div className={a()(Chunk776699.message, Chunk776699.details)}>{Chunk388032.intl.string(Chunk388032.t.Ra6lcn)}</div>}{j}{x ? <Chunk755721.zx className={Chunk776699.btn} onClick={Chunk120356}>{Chunk388032.intl.string(Chunk388032.t.i4jeWV)}</Chunk755721.zx> : null}{null != require ? <div className={a()(Chunk776699.message, Chunk776699.errorDetails)}>{Chunk388032.intl.format(Chunk388032.t.LElyIC, {
        errorCode: require
      })}</div> : null}</Chunk656649.UV>
}