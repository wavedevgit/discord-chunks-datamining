/** Chunk was on web.js **/
/** chunk id: 353903, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G0: () => h,
  u$: () => g
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk748780 = require("./748780.js"),
  Chunk692547 = require("./692547.js"),
  Chunk356362 = require("./356362.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 12,
  p = [Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, Chunk692547.Z.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class _ extends Chunk473749.PureComponent {
  render() {
    let {
      props: {
        height: e
      },
      state: {
        backgroundColor: t
      }
    } = this;
    return (0, Chunk54381.jsx)("div", {
      style: {
        height: module,
        backgroundColor: exports
      },
      className: Chunk356362.gif
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      backgroundColor: s().sample(p)
    })
  }
}
class m extends(r = Chunk473749.Component) {
  componentDidMount() {
    this.animateSlide()
  }
  getAnimatedStyle() {
    let {
      props: {
        columns: e
      },
      state: {
        translateY: t
      }
    } = this;
    return {
      width: "".concat(100 / module, "%"),
      transform: [{
        translateY: exports.interpolate({
          inputRange: [0, 1],
          outputRange: ["0px", "1px"]
        })
      }]
    }
  }
  render() {
    let {
      blocks: e
    } = this.state;
    return (0, Chunk54381.jsxs)(Chunk748780.Z.div, {
      className: Chunk356362.column,
      style: this.getAnimatedStyle(),
      children: [module.map((e, t) => (0, i.jsx)(_, {
        height: e
      }, t)), module.map((e, t) => (0, i.jsx)(_, {
        height: e
      }, "alt".concat(t)))]
    })
  }
  constructor(e) {
    super(e), d(this, "animateSlide", () => {
      let {
        props: {
          direction: e
        },
        state: {
          translateY: t,
          height: n
        }
      } = this, r = e > 0 ? 0 : -n / 2 + f, i = e > 0 ? -n / 2 + f : 0;
      t.setValue(r), l.Z.timing(t, {
        toValue: i,
        duration: 800,
        easing: l.Z.Easing.linear
      }).start(this.animateSlide)
    });
    let t = Array(10).fill(null).map(() => s().random(40, 150));
    this.state = {
      blocks: t,
      height: 2 * t.reduce((e, t) => e + t + f, f),
      translateY: new l.Z.Value(0)
    }
  }
}
d(m, "defaultProps", {
  direction: false
});
let h = e => {
  let {
    columns: t
  } = e;
  return (0, i.jsx)("div", {
    className: u.column,
    style: {
      width: "".concat(100 / t, "%")
    },
    children: [, , , , ].fill(null).map((e, t) => (0, i.jsx)("div", {
      className: u.categoryLoader
    }, t))
  })
};
class g extends Chunk473749.PureComponent {
  render() {
    let {
      columns: e,
      renderColumn: t
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      className: Chunk356362.container,
      children: Array(module).fill(null).map((n, r) => t(e, r))
    })
  }
}