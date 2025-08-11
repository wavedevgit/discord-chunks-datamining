/** Chunk was on 63141 **/
/** chunk id: 707878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk13245 = require("./13245.js"),
  Chunk313201 = require("./313201.js"),
  Chunk237997 = require("./237997.js"),
  Chunk766032 = require("./766032.js"),
  Chunk987650 = require("./987650.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk225932 = require("./225932.js");
let g = Object.values(Chunk987650.wF).map(e => 100 * e),
  m = (0, Chunk313201.hQ)();
class y extends Chunk73800.PureComponent {
  handleUpdateBackgroundOpacity(e) {
    s.Z.setTextWidgetOpacity((0, d.Z)(e / 100)), s.Z.track(h.rMx.OVERLAY_SETTINGS_UPDATED, {
      text_opacity_slider: e
    })
  }
  handlePreviewBackgroundOpacity(e) {
    s.Z.setTextWidgetOpacity((0, d.Z)(e / 100))
  }
  render() {
    return <div className={Chunk225932.container}>{<Chunk481060.vwX id={m} tag={Chunk481060.RB0.H5} className={Chunk225932.title}>{Chunk388032.intl.string(Chunk388032.t.OVovCQ)}</Chunk481060.vwX>}{<div className={Chunk225932.sliderContainer}><Chunk481060.iRW mini={true} initialValue={this.initialValue} defaultValue={this.initialValue} minValue={g[0]} maxValue={g[g.length - 1]} handleSize={10} onValueChange={this.handleUpdateBackgroundOpacity} asValueChanges={this.handlePreviewBackgroundOpacity} markers={g} onMarkerRender={Chunk981631.dG4} equidistant={true} stickToMarkers={true} aria-labelledby={m} /></div>}</div>
  }
  constructor(...e) {
    var t, n;
    super(...e), t = "initialValue", n = 100 * this.props.opacity, t in this ? Object.defineProperty(this, t, {
      value: n,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = n
  }
}
let O = Chunk442837.ZP.connectStores([Chunk237997.default], () => ({
  opacity: Chunk237997.default.getTextWidgetOpacity()
}))(y)