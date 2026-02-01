/** Chunk was on 21738 **/
/** chunk id: 278066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  a: () => g
}), require("./65821.js"), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk615300 = require("./615300.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk544028 = require("./544028.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk149460 = require("./149460.js");

function h(e, t, n) {
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
      lightSrc: require("./445451.js"),
      darkSrc: require("./642269.js"),
      width: 376,
      height: 162,
      renderContent: e => (0, i.jsxs)(l.Fragment, {
        children: [(0, i.jsx)(o.SGT, {
          note: d.intl.string(d.t.Y4vMY8)
        }), (0, i.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: p.x6,
          children: (0, i.jsx)(o.Button, {
            variant: "primary",
            text: d.intl.string(d.t.w5uwoI),
            onClick: e
          })
        })]
      })
    },
    SECTION_ONLINE: {
      lightSrc: require("./939333.js"),
      darkSrc: require("./492055.js"),
      width: 421,
      height: 218,
      renderContent: () => (0, i.jsx)(o.SGT, {
        note: d.intl.string(d.t.v7HbiQ)
      })
    },
    SECTION_BLOCKED: {
      lightSrc: require("./751906.js"),
      darkSrc: require("./689818.js"),
      width: 433,
      height: 232,
      renderContent: () => (0, i.jsx)(o.SGT, {
        note: d.intl.string(d.t["9xdyWB"])
      })
    },
    SECTION_PENDING: {
      lightSrc: require("./826223.js"),
      darkSrc: require("./317017.js"),
      width: 415,
      height: 200,
      renderContent: (e, t) => (0, i.jsxs)("div", {
        className: p.y7,
        children: [(0, i.jsx)(o.SGT, {
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
      lightSrc: require("./826223.js"),
      darkSrc: require("./317017.js"),
      width: 415,
      height: 200,
      renderContent: () => (0, i.jsx)(o.SGT, {
        note: d.intl.string(d.t["vgI/EF"])
      })
    },
    SECTION_NO_RESULTS: {
      lightSrc: require("./939333.js"),
      darkSrc: require("./492055.js"),
      width: 421,
      height: 218,
      renderContent: () => (0, i.jsx)(o.SGT, {
        note: d.intl.string(d.t["7sW4h1"])
      })
    }
  }),
  f = e => {
    let {
      theme: t
    } = e, n = d.intl.string(d.t["oi+B4p"]);
    return (0, i.jsx)(o.ppr, {
      theme: t,
      children: (0, i.jsx)(o.SGT, {
        note: n
      })
    })
  };
class A extends Chunk64700.PureComponent {
  render() {
    let {
      type: e,
      onClick: t,
      theme: n
    } = this.props, r = {
      opacity: this.state.opacity
    }, l = function(e) {
      switch (e) {
        case u.m3P.ADD_FRIEND:
        case u.m3P.ALL:
          return m.SECTION_ALL;
        case u.m3P.ONLINE:
          return m.SECTION_ONLINE;
        case u.m3P.PENDING:
          return m.SECTION_PENDING;
        case u.m3P.SUGGESTIONS:
          return m.SECTION_SUGGESTIONS;
        case "SECTION_NO_RESULTS":
          return m.SECTION_NO_RESULTS;
        default:
          throw Error("FriendsEmptyState: Invalid empty state")
      }
    }(e);
    return e === u.m3P.ADD_FRIEND ? (0, i.jsx)(a.A.div, {
      className: p.VD,
      style: r,
      children: (0, i.jsx)(f, {
        theme: n
      })
    }) : (0, i.jsx)(a.A.div, {
      className: p.VD,
      style: r,
      children: (0, i.jsx)(o.ppr, {
        theme: n,
        children: l.renderContent(t)
      })
    })
  }
  constructor(...e) {
    super(...e), h(this, "state", {
      opacity: new a.A.Value(1)
    }), h(this, "componentWillEnter", e => {
      this.state.opacity.setValue(0), a.A.timing(this.state.opacity, {
        toValue: 1,
        duration: 250
      }).start(e)
    }), h(this, "componentWillLeave", e => {
      a.A.timing(this.state.opacity, {
        toValue: 0,
        duration: 250
      }).start(e)
    })
  }
}
let _ = Chunk311907.Ay.connectStores([Chunk544028.A], () => ({
  theme: c.A.theme
}), {
  forwardRef: true
})(A)