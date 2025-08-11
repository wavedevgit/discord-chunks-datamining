/** Chunk was on 80960 **/
/** chunk id: 206314, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.js"),
  Chunk4912 = require("./4912.jsx"),
  Chunk442122 = require("./442122.js");
let m = ["firCount", "nackCount"];
class p extends Chunk73800.PureComponent {
  renderValueIcon() {
    let {
      label: e
    } = this.props;
    return m.includes(module) ? <Chunk4912.Z color={Chunk692547.Z.unsafe_rawColors.YELLOW_300.css} className={Chunk442122.valueIcon} /> : null
  }
  render() {
    let {
      children: e,
      className: t,
      valueRendered: r,
      section: a,
      label: i,
      renderGraph: o
    } = this.props;
    return <Chunk600164.Z className={l()(Chunk442122.item, exports)} direction={Chunk600164.Z.Direction.VERTICAL} basis={"50%"}>{<Chunk600164.Z className={Chunk442122.kvContainer} align={Chunk600164.Z.Align.START}>{<Chunk600164.Z.Child><Chunk481060.H className={Chunk442122.title}>{module}</Chunk481060.H></Chunk600164.Z.Child>}{Array.isArray(require) ? <Chunk600164.Z.Child grow={1}>{require}</Chunk600164.Z.Child> : <Chunk600164.Z.Child grow={0} shrink={0}>{this.renderValueIcon()}{<span className={Chunk442122.itemValue} title={require}>{require}</span>}</Chunk600164.Z.Child>}</Chunk600164.Z>}{null !== Chunk692547 && <Chunk600164.Z.Child className={Chunk442122.graph}><Chunk481060.R94 type={Chunk481060.geA.DESCRIPTION}>{Chunk692547}</Chunk481060.R94></Chunk600164.Z.Child>}{<Chunk481060.$i$ className={Chunk442122.divider} />}</Chunk600164.Z>
  }
}