/** Chunk was on 63141 **/
/** chunk id: 707878, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk313201 = require("./313201.js"),
  Chunk237997 = require("./237997.js"),
  Chunk766032 = require("./766032.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk264815 = require("./264815.js");
let g = Object.values(Chunk987650.wF).map(e => 100 * e),
  m = (0, Chunk313201.hQ)();
class y extends Chunk647438.PureComponent {
  handleUpdateBackgroundOpacity(e) {
    l.Z.setTextWidgetOpacity((0, d.Z)(e / 100)), l.Z.track(p.rMx.OVERLAY_SETTINGS_UPDATED, {
      text_opacity_slider: e
    })
  }
  handlePreviewBackgroundOpacity(e) {
    l.Z.setTextWidgetOpacity((0, d.Z)(e / 100))
  }
  render() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk264815.container,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk264815.sliderContainer,
        children: (0, Chunk951288.jsx)(Chunk481060.iRW, {
          label: Chunk388032.intl.string(Chunk388032.t.OVovCb),
          mini: true,
          initialValue: this.initialValue,
          defaultValue: this.initialValue,
          minValue: g[0],
          maxValue: g[g.length - 1],
          handleSize: 10,
          onValueChange: this.handleUpdateBackgroundOpacity,
          asValueChanges: this.handlePreviewBackgroundOpacity,
          markers: g,
          onMarkerRender: Chunk981631.dG4,
          equidistant: true,
          stickToMarkers: true,
          "aria-labelledby": m
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
let O = Chunk442837.ZP.connectStores([Chunk237997.default], () => ({
  opacity: Chunk237997.default.getTextWidgetOpacity()
}))(y)