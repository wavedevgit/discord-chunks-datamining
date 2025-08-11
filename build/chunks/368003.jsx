/** Chunk was on 83264 **/
/** chunk id: 368003, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk404759 = require("./404759.js"),
  o = require.n(Chunk404759),
  Chunk423650 = require("./423650.js"),
  l = require.n(Chunk423650),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.js"),
  Chunk843196 = require("./843196.js");

function d(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = r, e
}
class h extends Chunk73800.Component {
  render() {
    let {
      selectedValue: e
    } = this.state;
    return <Chunk73800.Fragment>{<Chunk481060.X6q className={Chunk843196.prompt} variant={"heading-md/semibold"}>{this.props.prompt}</Chunk481060.X6q>}{<hr className={Chunk843196.separator} />}{<Chunk481060.Text className={Chunk843196.selectYourAnswer} variant={"text-xs/normal"}>{Chunk388032.intl.string(Chunk388032.t.YeiLeH)}</Chunk481060.Text>}{<Chunk481060.FXm options={this.getQuestionOptions()} onChange={this.handleOptionChange} value={module} />}</Chunk73800.Fragment>
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      selectedValue: null
    }), d(this, "getQuestionOptions", o()(() => l()(this.props.options.map(e => ({
      name: e.copy,
      value: e.house
    }))))), d(this, "handleOptionChange", e => {
      let {
        onSelect: t
      } = this.props;
      this.setState({
        selectedValue: e.value
      }), t(e.value)
    })
  }
}