/** Chunk was on 36878 **/
/** chunk id: 604960, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk79808 = require("./79808.jsx"),
  Chunk131051 = require("./131051.js"),
  Chunk996733 = require("./996733.js"),
  Chunk604227 = require("./604227.jsx"),
  Chunk708827 = require("./708827.js"),
  Chunk920952 = require("./920952.js");

function f() {
  let e = (0, Chunk996733.Z7)(),
    t = (0, Chunk131051.Z)(Chunk920952.Z, module);
  return (0, Chunk951288.jsx)(Chunk79808.Z, {
    onClose: Chunk37234.xf,
    root: exports,
    sidebarHeader: g,
    sidebarFooter: Chunk604227.Z,
    initialPanel: Chunk708827.Z
  })
}

function g() {
  let e = (0, Chunk996733.Z7)();
  return (0, Chunk951288.jsx)("div", {
    children: (0, Chunk951288.jsx)(Chunk481060.E1j, {
      size: "md",
      query: module,
      onChange: Chunk996733.yN,
      onClear: () => (0, Chunk996733.yN)("")
    })
  })
}