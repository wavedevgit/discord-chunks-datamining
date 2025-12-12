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
  Chunk111301 = require("./111301.js"),
  Chunk841264 = require("./841264.js"),
  Chunk678579 = require("./678579.js"),
  Chunk545556 = require("./545556.js"),
  Chunk684868 = require("./684868.js"),
  Chunk971605 = require("./971605.js"),
  Chunk16222 = require("./16222.js"),
  Chunk347842 = require("./347842.js");
let y = {
    [Chunk474936.VU.PREMIUM_TENURE_1_MONTH]: {
      standard: Chunk749472,
      ambient: Chunk111301.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_3_MONTH]: {
      standard: Chunk557821,
      ambient: Chunk841264.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_6_MONTH]: {
      standard: Chunk64649,
      ambient: Chunk678579.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_12_MONTH]: {
      standard: Chunk79914,
      ambient: Chunk545556.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_24_MONTH]: {
      standard: Chunk860691,
      ambient: Chunk684868.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_36_MONTH]: {
      standard: Chunk110149,
      ambient: Chunk971605.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_60_MONTH]: {
      standard: Chunk634071,
      ambient: Chunk16222.Z
    },
    [Chunk474936.VU.PREMIUM_TENURE_72_MONTH]: {
      standard: Chunk166870,
      ambient: Chunk347842.Z
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