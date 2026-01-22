/** Chunk was on web.js **/
/** chunk id: 453212, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XW: () => m,
  oK: () => g
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  o = require.n(Chunk735438),
  Chunk615300 = require("./615300.js"),
  Chunk827734 = require("./827734.js"),
  Chunk399374 = require("./399374.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let f = 12,
  p = [Chunk827734.A.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css, Chunk827734.A.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css, "#929AFA"];
class _ extends Chunk64700.PureComponent {
  render() {
    let {
      props: {
        height: e
      },
      state: {
        backgroundColor: t
      }
    } = this;
    return (0, i.jsx)("div", {
      style: {
        height: e,
        backgroundColor: t
      },
      className: u.nX
    })
  }
  constructor(...e) {
    super(...e), d(this, "state", {
      backgroundColor: o().sample(p)
    })
  }
}
class h extends(r = Chunk64700.Component) {
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
      width: "".concat(100 / e, "%"),
      transform: [{
        translateY: t.interpolate({
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
    return (0, i.jsxs)(l.A.div, {
      className: u.fi,
      style: this.getAnimatedStyle(),
      children: [e.map((e, t) => (0, i.jsx)(_, {
        height: e
      }, t)), e.map((e, t) => (0, i.jsx)(_, {
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
      t.setValue(r), l.A.timing(t, {
        toValue: i,
        duration: 800,
        easing: l.A.Easing.linear
      }).start(this.animateSlide)
    });
    const t = Array(10).fill(null).map(() => o().random(40, 150));
    this.state = {
      blocks: t,
      height: 2 * t.reduce((e, t) => e + t + f, f),
      translateY: new l.A.Value(0)
    }
  }
}
d(h, "defaultProps", {
  direction: false
});
let m = e => {
  let {
    columns: t
  } = e;
  return (0, i.jsx)("div", {
    className: u.fi,
    style: {
      width: "".concat(100 / t, "%")
    },
    children: [, , , , ].fill(null).map((e, t) => (0, i.jsx)("div", {
      className: u.c8
    }, t))
  })
};
class g extends Chunk64700.PureComponent {
  render() {
    let {
      columns: e,
      renderColumn: t
    } = this.props;
    return (0, i.jsx)("div", {
      className: u.kL,
      children: Array(e).fill(null).map((n, r) => t(e, r))
    })
  }
}