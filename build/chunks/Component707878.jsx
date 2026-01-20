/** Chunk was on 63141 **/
/** chunk id: 707878, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk313201 = require("./313201.js"),
  Chunk237997 = require("./237997.js"),
  Chunk766032 = require("./766032.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk103918 = require("./103918.js");
let g = Object.values(Chunk987650.wF).map(e => 100 * e),
  m = (0, Chunk313201.hQ)();
class b extends Chunk473749.PureComponent {
  handleUpdateBackgroundOpacity(e) {
    a.Z.setTextWidgetOpacity((0, d.Z)(e / 100)), a.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, {
      text_opacity_slider: e
    })
  }
  handlePreviewBackgroundOpacity(e) {
    a.Z.setTextWidgetOpacity((0, d.Z)(e / 100))
  }
  render() {
    return (0, i.jsx)("div", {
      className: p.container,
      children: (0, i.jsx)("div", {
        className: p.sliderContainer,
        children: (0, i.jsx)(o.iRW, {
          label: f.intl.string(f.t.OVovCb),
          mini: true,
          initialValue: this.initialValue,
          defaultValue: this.initialValue,
          minValue: g[0],
          maxValue: g[g.length - 1],
          handleSize: 10,
          onValueChange: this.handleUpdateBackgroundOpacity,
          asValueChanges: this.handlePreviewBackgroundOpacity,
          markers: g,
          onMarkerRender: h.dG4,
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
let y = Chunk442837.ZP.connectStores([Chunk237997.default], () => ({
  opacity: c.default.getTextWidgetOpacity()
}))(b)