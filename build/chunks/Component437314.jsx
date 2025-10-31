/** Chunk was on 1272 **/
/** chunk id: 437314, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  j: () => m
}), require("./415506.js"), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk755429 = require("./755429.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var m = ((r = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS", r);
let h = Object.freeze({
    SECTION_ALL: {
      lightSrc: require("./900933.js"),
      darkSrc: require("./67764.js"),
      width: 376,
      height: 162,
      renderContent: e => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(o.OZU, {
          note: d.intl.string(d.t.Y4vMY8)
        }), (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.button,
          children: (0, i.jsx)(o.Button, {
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
      renderContent: () => (0, Chunk951288.jsx)(Chunk481060.OZU, {
        note: Chunk388032.intl.string(Chunk388032.t.v7HbiQ)
      })
    },
    SECTION_BLOCKED: {
      lightSrc: require("./459505.js"),
      darkSrc: require("./356634.js"),
      width: 433,
      height: 232,
      renderContent: () => (0, Chunk951288.jsx)(Chunk481060.OZU, {
        note: Chunk388032.intl.string(Chunk388032.t["9xdyWB"])
      })
    },
    SECTION_PENDING: {
      lightSrc: require("./979770.js"),
      darkSrc: require("./138715.js"),
      width: 415,
      height: 200,
      renderContent: (e, t) => (0, i.jsxs)("div", {
        className: p.emptyStateContainer,
        children: [(0, i.jsx)(o.OZU, {
          note: d.intl.string(d.t["aCYQ+P"])
        }), null != e && (0, i.jsx)(o.Button, {
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
      renderContent: () => (0, Chunk951288.jsx)(Chunk481060.OZU, {
        note: Chunk388032.intl.string(Chunk388032.t["vgI/EF"])
      })
    },
    SECTION_NO_RESULTS: {
      lightSrc: require("./55346.js"),
      darkSrc: require("./917847.js"),
      width: 421,
      height: 218,
      renderContent: () => (0, Chunk951288.jsx)(Chunk481060.OZU, {
        note: Chunk388032.intl.string(Chunk388032.t["7sW4h1"])
      })
    }
  }),
  g = e => {
    let {
      theme: t
    } = e, n = d.intl.string(d.t["oi+B4p"]);
    return (0, i.jsx)(o.ubH, {
      theme: t,
      children: (0, i.jsx)(o.OZU, {
        note: n
      })
    })
  };
class _ extends Chunk647438.PureComponent {
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
          return h.SECTION_ALL;
        case u.pJs.ONLINE:
          return h.SECTION_ONLINE;
        case u.pJs.PENDING:
          return h.SECTION_PENDING;
        case u.pJs.SUGGESTIONS:
          return h.SECTION_SUGGESTIONS;
        case "SECTION_NO_RESULTS":
          return h.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(module);
    return module === Chunk981631.pJs.ADD_FRIEND ? (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      className: Chunk755429.friendsEmpty,
      style: r,
      children: (0, Chunk951288.jsx)(g, {
        theme: require
      })
    }) : (0, Chunk951288.jsx)(Chunk748780.Z.div, {
      className: Chunk755429.friendsEmpty,
      style: r,
      children: (0, Chunk951288.jsx)(Chunk481060.ubH, {
        theme: require,
        children: Chunk647438.renderContent(exports)
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
let b = Chunk442837.ZP.connectStores([Chunk210887.Z], () => ({
  theme: Chunk210887.Z.theme
}), {
  forwardRef: true
})(_)