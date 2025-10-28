/** Chunk was on 33622 **/
/** chunk id: 998163, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  J: () => o
});
var Chunk616868 = require("./616868.js"),
  Chunk594886 = require("./594886.js"),
  Chunk970185 = require("./970185.js"),
  Chunk647438 = require("./647438.js");

function o() {
  var e;
  let {
    locale: a
  } = (0, Chunk594886.j)(), t = (0, Chunk970185.K)((e = Chunk616868.Z) && module.__esModule ? module.default : module, "@react-aria/datepicker");
  return (0, Chunk647438.useMemo)(() => {
    try {
      return new Intl.DisplayNames(exports, {
        type: "dateTimeField"
      })
    } catch {
      return new l(exports, require)
    }
  }, [exports, require])
}
class l {
  of(e) {
    return this.dictionary.getStringForLocale(e, this.locale)
  }
  constructor(e, a) {
    this.locale = e, this.dictionary = a
  }
}