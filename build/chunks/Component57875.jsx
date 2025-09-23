/** Chunk was on 83264 **/
/** chunk id: 57875, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk298241 = require("./298241.js");
class l extends Chunk647438.Component {
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
    return (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      className: Chunk298241.wrapper,
      style: {
        left: 0,
        position: module ? "absolute" : "relative",
        top: 0,
        transform: [{
          translateX: exports.interpolate({
            inputRange: [false, 1],
            outputRange: ["-100%", "100%"]
          })
        }]
      },
      children: (0, Chunk951288.jsx)(Chunk481060.hzk, {
        className: Chunk298241.contentWrapper,
        children: this.props.children
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
      }(this, "state", {
        isExiting: false,
        offset: new i.Z.Value(0),
        selectedValue: null
      })
  }
}