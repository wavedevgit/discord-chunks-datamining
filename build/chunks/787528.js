/** Chunk was on web.js **/
/** chunk id: 787528, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => v,
  u: () => O
});
var Chunk474936 = require("./474936.js"),
  Chunk749472 = require("./749472.js"),
  Chunk860691 = require("./860691.js"),
  Chunk110149 = require("./110149.js"),
  Chunk64649 = require("./64649.js"),
  Chunk166870 = require("./166870.js"),
  Chunk79914 = require("./79914.js"),
  Chunk634071 = require("./634071.js"),
  Chunk557821 = require("./557821.js"),
  Chunk396587 = require("./396587.js"),
  Chunk73187 = require("./73187.js"),
  Chunk150285 = require("./150285.js"),
  Chunk818546 = require("./818546.js"),
  Chunk507804 = require("./507804.js"),
  Chunk987658 = require("./987658.js"),
  Chunk522990 = require("./522990.js"),
  Chunk582971 = require("./582971.js");
let y = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: {
      standard: Chunk749472,
      ambient: Chunk396587.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: {
      standard: Chunk557821,
      ambient: Chunk73187.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: {
      standard: Chunk64649,
      ambient: Chunk150285.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: {
      standard: Chunk79914,
      ambient: Chunk818546.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: {
      standard: Chunk860691,
      ambient: Chunk507804.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: {
      standard: Chunk110149,
      ambient: Chunk987658.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: {
      standard: Chunk634071,
      ambient: Chunk522990.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: {
      standard: Chunk166870,
      ambient: Chunk582971.Z
    }
  },
  O = function(e) {
    let {
      ambient: t = false
    } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
    return null != e ? v(e, {
      ambient: t
    }) : null
  };

function v(e) {
  let {
    ambient: t = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, n = y[e];
  return t ? n.ambient : n.standard
}