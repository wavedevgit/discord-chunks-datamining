/** Chunk was on web.js **/
/** chunk id: 518650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk21890 = require("./21890.js"),
  Chunk854062 = require("./854062.js"),
  Chunk481743 = require("./481743.js"),
  Chunk747732 = require("./747732.js"),
  Chunk38581 = require("./38581.js"),
  Chunk391767 = require("./391767.js"),
  Chunk949875 = require("./949875.js"),
  Chunk419763 = require("./419763.js"),
  Chunk518711 = require("./518711.js"),
  Chunk396754 = require("./396754.js"),
  Chunk193071 = require("./193071.js"),
  Chunk544891 = require("./544891.js"),
  Chunk5888 = require("./5888.js"),
  Chunk824480 = require("./824480.js"),
  Chunk167262 = require("./167262.js"),
  Chunk550770 = require("./550770.js"),
  Chunk807808 = require("./807808.js"),
  Chunk464633 = require("./464633.js"),
  Chunk270586 = require("./270586.js"),
  Chunk868981 = require("./868981.js"),
  Chunk918746 = require("./918746.js"),
  Chunk228137 = require("./228137.js");
let C = [Chunk949875.Z, Chunk419763.Z, Chunk396754.Z, Chunk193071.Z, Chunk518711.Z, Chunk167262.Z, Chunk550770.Z, Chunk807808.Z, Chunk464633.Z, Chunk270586.Z, Chunk868981.Z, Chunk918746.Z, Chunk228137.Z, Chunk854062.Z, Chunk391767.Z, Chunk38581.Z, Chunk21890.Z, Chunk481743.Z, Chunk747732.Z];

function A() {
  let e = Chunk473749.useRef(0),
    t = Chunk473749.useRef(true),
    n = (0, Chunk824480.d)(),
    i = require === Chunk5888.p.SUCCESS || require === Chunk5888.p.ERROR,
    [a, o] = Chunk473749.useState(false);
  return (0, Chunk473749.useEffect)(() => {
    C.forEach(n => m.tn.get({
      url: n,
      rejectWithError: true
    }).then(() => {
      t.current && (e.current += 1, e.current === C.length && o(true))
    }))
  }, []), (0, Chunk473749.useEffect)(() => () => {
    exports.current = false
  }, []), Chunk854062 && Chunk21890
}