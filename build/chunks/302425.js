/** Chunk was on web.js **/
/** chunk id: 302425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => l
});
var Chunk254326 = require("./254326.jsx"),
  Chunk919301 = require("./919301.jsx"),
  Chunk672541 = require("./672541.jsx"),
  Chunk285871 = require("./285871.js"),
  Chunk652215 = require("./652215.js");
let l = {
  [Chunk285871.C.ORB_CHECKOUT]: {
    flowType: Chunk285871.C.ORB_CHECKOUT,
    implemented: true,
    purchaseType: Chunk652215.VVm.ONE_TIME,
    TENANT_CHECKOUT_FLOW_CONFIG: Chunk672541.G4
  },
  [Chunk285871.C.COLLECTIBLES_CHECKOUT]: {
    flowType: Chunk285871.C.COLLECTIBLES_CHECKOUT,
    implemented: true,
    purchaseType: Chunk652215.VVm.ONE_TIME,
    TENANT_CHECKOUT_FLOW_CONFIG: Chunk254326.OU
  },
  [Chunk285871.C.SLAYER_STOREFRONT_CHECKOUT]: {
    implemented: true,
    flowType: Chunk285871.C.SLAYER_STOREFRONT_CHECKOUT,
    purchaseType: Chunk652215.VVm.ONE_TIME,
    TENANT_CHECKOUT_FLOW_CONFIG: Chunk919301.WT
  },
  [Chunk285871.C.PREMIUM_CHECKOUT]: {
    implemented: false,
    flowType: Chunk285871.C.PREMIUM_CHECKOUT
  }
}