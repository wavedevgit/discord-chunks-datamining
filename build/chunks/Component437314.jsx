/** Chunk was on 1272 **/
/** chunk id: 437314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  j: () => g
}), require("./415506.js"), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk397977 = require("./397977.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var g = ((r = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS", r);
let m = Object.freeze({
    SECTION_ALL: {
      lightSrc: require("./900933.js"),
      darkSrc: require("./67764.js"),
      width: 376,
      height: 162,
      renderContent: e => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(s.OZU, {
          note: d.intl.string(d.t.Y4vMY8)
        }), (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.button,
          children: (0, i.jsx)(s.Button, {
            variant: "primary",
            text: d.intl.string(d.t.w5uwoI),
            onClick: e
          })
        })]
      })
    },
    SECTION_ONLINE: {
      lightSrc: require("./55346.js"),
      darkSrc: require("./917847.js"),
      width: 421,
      height: 218,
      renderContent: () => (0, i.jsx)(s.OZU, {
        note: d.intl.string(d.t.v7HbiQ)
      })
    },
    SECTION_BLOCKED: {
      lightSrc: require("./459505.js"),
      darkSrc: require("./356634.js"),
      width: 433,
      height: 232,
      renderContent: () => (0, i.jsx)(s.OZU, {
        note: d.intl.string(d.t["9xdyWB"])
      })
    },
    SECTION_PENDING: {
      lightSrc: require("./979770.js"),
      darkSrc: require("./138715.js"),
      width: 415,
      height: 200,
      renderContent: (e, t) => (0, i.jsxs)("div", {
        className: p.emptyStateContainer,
        children: [(0, i.jsx)(s.OZU, {
          note: d.intl.string(d.t["aCYQ+P"])
        }), null != e && (0, i.jsx)(s.Button, {
          variant: "secondary",
          text: t ? d.intl.string(d.t.R40bU2) : d.intl.string(d.t.rXl8fj),
          onClick: e,
          size: "sm"
        })]
      })
    },
    SECTION_SUGGESTIONS: {
      lightSrc: require("./979770.js"),
      darkSrc: require("./138715.js"),
      width: 415,
      height: 200,
      renderContent: () => (0, i.jsx)(s.OZU, {
        note: d.intl.string(d.t["vgI/EF"])
      })
    },
    SECTION_NO_RESULTS: {
      lightSrc: require("./55346.js"),
      darkSrc: require("./917847.js"),
      width: 421,
      height: 218,
      renderContent: () => (0, i.jsx)(s.OZU, {
        note: d.intl.string(d.t["7sW4h1"])
      })
    }
  }),
  h = e => {
    let {
      theme: t
    } = e, n = d.intl.string(d.t["oi+B4p"]);
    return (0, i.jsx)(s.ubH, {
      theme: t,
      children: (0, i.jsx)(s.OZU, {
        note: n
      })
    })
  };
class b extends Chunk473749.PureComponent {
  render() {
    let {
      type: e,
      onClick: t,
      theme: n
    } = this.props, r = {
      opacity: this.state.opacity
    }, l = function(e) {
      switch (e) {
        case u.pJs.ADD_FRIEND:
        case u.pJs.ALL:
          return m.SECTION_ALL;
        case u.pJs.ONLINE:
          return m.SECTION_ONLINE;
        case u.pJs.PENDING:
          return m.SECTION_PENDING;
        case u.pJs.SUGGESTIONS:
          return m.SECTION_SUGGESTIONS;
        case "SECTION_NO_RESULTS":
          return m.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(e);
    return e === u.pJs.ADD_FRIEND ? (0, i.jsx)(a.Z.div, {
      className: p.friendsEmpty,
      style: r,
      children: (0, i.jsx)(h, {
        theme: n
      })
    }) : (0, i.jsx)(a.Z.div, {
      className: p.friendsEmpty,
      style: r,
      children: (0, i.jsx)(s.ubH, {
        theme: n,
        children: l.renderContent(t)
      })
    })
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      opacity: new a.Z.Value(1)
    }), f(this, "componentWillEnter", e => {
      this.state.opacity.setValue(0), a.Z.timing(this.state.opacity, {
        toValue: 1,
        duration: 250
      }).start(e)
    }), f(this, "componentWillLeave", e => {
      a.Z.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      }).start(e)
    })
  }
}
let _ = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: c.Z.theme
}), {
  forwardRef: true
})(b)