/** Chunk was on web.js **/
/** chunk id: 518650, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk16789 = require("./16789.js"),
  Chunk221233 = require("./221233.js"),
  Chunk594931 = require("./594931.js"),
  Chunk556924 = require("./556924.js"),
  Chunk896880 = require("./896880.js"),
  Chunk322958 = require("./322958.js"),
  Chunk52478 = require("./52478.js"),
  Chunk242263 = require("./242263.js"),
  Chunk191617 = require("./191617.js"),
  Chunk240005 = require("./240005.js"),
  Chunk477033 = require("./477033.js"),
  Chunk544891 = require("./544891.js"),
  Chunk5888 = require("./5888.js"),
  Chunk824480 = require("./824480.js"),
  Chunk596375 = require("./596375.js"),
  Chunk653506 = require("./653506.js"),
  Chunk900268 = require("./900268.js"),
  Chunk946515 = require("./946515.js"),
  Chunk908574 = require("./908574.js"),
  Chunk1222 = require("./1222.js"),
  Chunk976999 = require("./976999.js"),
  Chunk331164 = require("./331164.js");
let C = [Chunk52478.Z, Chunk242263.Z, Chunk240005.Z, Chunk477033.Z, Chunk191617.Z, Chunk596375.Z, Chunk653506.Z, Chunk900268.Z, Chunk946515.Z, Chunk908574.Z, Chunk1222.Z, Chunk976999.Z, Chunk331164.Z, Chunk221233.Z, Chunk322958.Z, Chunk896880.Z, Chunk16789.Z, Chunk594931.Z, Chunk556924.Z];

function A() {
  let e = r.useRef(0),
    t = r.useRef(true),
    n = (0, g.d)(),
    i = n === h.p.SUCCESS || n === h.p.ERROR,
    [a, o] = r.useState(false);
  return (0, r.useEffect)(() => {
    C.forEach(n => m.tn.get({
      url: n,
      rejectWithError: true
    }).then(() => {
      t.current && (e.current += 1, e.current === C.length && o(true))
    }))
  }, []), (0, r.useEffect)(() => () => {
    t.current = false
  }, []), a && i
}