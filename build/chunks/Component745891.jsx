/** Chunk was on 84018 **/
/** chunk id: 745891, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk684013 = require("./684013.js"),
  Chunk915089 = require("./915089.js"),
  Chunk256415 = require("./256415.js"),
  Chunk448296 = require("./448296.js"),
  Chunk672396 = require("./672396.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk877911 = require("./877911.js");
let g = Object.values(Chunk672396.Li).map(e => 100 * e),
  y = (0, Chunk915089.Ld)();
class A extends Chunk64700.PureComponent {
  handleUpdateBackgroundOpacity(e) {
    o.A.setTextWidgetOpacity((0, d.A)(e / 100)), o.A.track(h.HAw.OVERLAY_SETTINGS_UPDATED, {
      text_opacity_slider: e
    })
  }
  handlePreviewBackgroundOpacity(e) {
    o.A.setTextWidgetOpacity((0, d.A)(e / 100))
  }
  render() {
    return (0, i.jsx)("div", {
      className: f.kL,
      children: (0, i.jsx)("div", {
        className: f.xJ,
        children: (0, i.jsx)(l.Apm, {
          label: p.intl.string(p.t.OVovCb),
          mini: true,
          initialValue: this.initialValue,
          defaultValue: this.initialValue,
          minValue: g[0],
          maxValue: g[g.length - 1],
          handleSize: 10,
          onValueChange: this.handleUpdateBackgroundOpacity,
          asValueChanges: this.handlePreviewBackgroundOpacity,
          markers: g,
          onMarkerRender: h.tEg,
          equidistant: true,
          stickToMarkers: true,
          "aria-labelledby": y
        })
      })
    })
  }
  constructor(...e) {
    super(...e),
      function(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = n
      }(this, "initialValue", 100 * this.props.opacity)
  }
}
let m = Chunk311907.Ay.connectStores([Chunk256415.default], () => ({
  opacity: c.default.getTextWidgetOpacity()
}))(A)