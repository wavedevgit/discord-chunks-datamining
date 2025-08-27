/** Chunk was on web.js **/
/** chunk id: 665672, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class o {
  setExporter(e) {
    this.exporter = e
  }
  export (e) {
    i()(null != this.exporter, "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.");
    let t = this.canvas.getCanvasForExport();
    return i()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e)
  }
  constructor(e, t) {
    a(this, "canvas", true), a(this, "exporter", true), this.canvas = e, this.exporter = t
  }
}