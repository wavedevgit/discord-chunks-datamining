/** Chunk was on 83264 **/
/** chunk id: 368003, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk404759 = require("./404759.js"),
  o = require.n(Chunk404759),
  Chunk423650 = require("./423650.js"),
  l = require.n(Chunk423650),
  Chunk538534 = require("./538534.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk947719 = require("./947719.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class g extends Chunk647438.Component {
  render() {
    let {
      selectedValue: e
    } = this.state;
    return (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        className: Chunk947719.prompt,
        variant: "heading-md/semibold",
        children: this.props.prompt
      }), (0, Chunk951288.jsx)("hr", {
        className: Chunk947719.separator
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        className: Chunk947719.selectYourAnswer,
        variant: "text-xs/normal",
        children: Chunk388032.intl.string(Chunk388032.t.YeiLeH)
      }), (0, Chunk951288.jsx)(Chunk538534.E, {
        options: this.getQuestionOptions(),
        onChange: this.handleOptionChange,
        value: module
      })]
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      selectedValue: true
    }), h(this, "getQuestionOptions", o()(() => l()(this.props.options.map(e => ({
      name: e.copy,
      value: e.house
    }))))), h(this, "handleOptionChange", e => {
      let {
        onSelect: t
      } = this.props;
      this.setState({
        selectedValue: e
      }), t(e)
    })
  }
}