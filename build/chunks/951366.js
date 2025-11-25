/** Chunk was on web.js **/
/** chunk id: 951366, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $L: () => g,
  Oz: () => p
});
var Chunk481060 = require("./481060.js"),
  Chunk901297 = require("./901297.jsx"),
  Chunk73166 = require("./73166.jsx"),
  Chunk690524 = require("./690524.jsx"),
  Chunk374834 = require("./374834.jsx"),
  Chunk473542 = require("./473542.jsx"),
  Chunk654346 = require("./654346.jsx"),
  Chunk266631 = require("./266631.jsx"),
  Chunk906731 = require("./906731.jsx"),
  Chunk915409 = require("./915409.js"),
  Chunk74432 = require("./74432.jsx"),
  p = function(e) {
    return e.PAYMENTS = "payments", e.VIRTUAL_CURRENCY = "virtual-currency", e.NITRO = "nitro", e
  }({});
let h = ["Revenue Storybook", "Revenue Playground"],
  m = {
    id: "payments",
    name: "Payments",
    groups: [Chunk690524.C, Chunk74432.iZ, Chunk473542.R, Chunk374834.pl, Chunk915409.W],
    tags: h,
    IconComponent: Chunk481060.uMN
  },
  g = {
    playgroundBaseUrl: "revenue",
    collections: [m, {
      id: "virtual-currency",
      name: "Virtual Currency",
      groups: [Chunk73166.Oi, Chunk901297.vP, Chunk266631.X, Chunk906731.R],
      tags: h,
      IconComponent: Chunk481060.aQr
    }, {
      id: "nitro",
      name: "Nitro",
      groups: [Chunk654346.De],
      tags: h,
      IconComponent: Chunk481060.SrA
    }]
  }