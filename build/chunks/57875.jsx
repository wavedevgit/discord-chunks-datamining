/** Chunk was on 83264 **/
/** chunk id: 57875, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk502254 = require("./502254.js");
class l extends Chunk73800.Component {
  componentWillEnter(e) {
    let {
      offset: t
    } = this.state;
    t.setValue(1), i.Z.spring(t, {
      toValue: 0,
      duration: 75
    }).start(e)
  }
  componentWillLeave(e) {
    let {
      offset: t
    } = this.state;
    t.setValue(0), this.setState({
      isExiting: true
    }, () => {
      i.Z.spring(t, {
        toValue: false,
        duration: 75
      }).start(e)
    })
  }
  render() {
    let {
      isExiting: e,
      offset: t
    } = this.state;
    return <Chunk748780.Z.div className={Chunk502254.wrapper} style={{
        left: 0,
        position: module ? "absolute" : "relative",
        top: 0,
        transform: [{
          translateX: exports.interpolate({
            inputRange: [false, 1],
            outputRange: ["-100%", "100%"]
          })
        }]
      }}><Chunk481060.hzk className={Chunk502254.contentWrapper}>{this.props.children}</Chunk481060.hzk></Chunk748780.Z.div>
  }
  constructor(...e) {
    var t, r;
    super(...e), t = "state", r = {
      isExiting: false,
      offset: new i.Z.Value(0),
      selectedValue: null
    }, t in this ? Object.defineProperty(this, t, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : this[t] = r
  }
}