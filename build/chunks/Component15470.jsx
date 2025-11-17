/** Chunk was on 69844 **/
/** chunk id: 15470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y,
  i: () => x
}), require("./35282.js"), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159635 = require("./159635.js"),
  o = require.n(Chunk159635),
  Chunk755721 = require("./755721.js"),
  Chunk770146 = require("./770146.jsx"),
  Chunk241209 = require("./241209.jsx"),
  Chunk73346 = require("./73346.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk395155 = require("./395155.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
  x = f(_({}, Chunk241209.Z.rules), {
    heading: f(_({}, Chunk241209.Z.rules.heading), {
      react(e, t, n) {
        let a = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
        return (0, r.jsx)(d.Z, {
          tag: a,
          children: t(e.content, n)
        }, n.key)
      }
    }),
    assetImage: {
      order: 5,
      match(e, t) {
        let n = e.match(b);
        if (null != n) {
          let e = n[2],
            r = t.assets.find(t => t.id === e);
          return null != r && [...n, r, t.applicationId]
        }
        returnfalse
      },
      parse: e => ({
        asset: e[3],
        alt: e[1],
        applicationId: e[4]
      }),
      react: (e, t, n) => (0, r.jsx)("div", {
        className: h.assetWrapper,
        children: (0, r.jsx)("img", {
          alt: e.alt,
          src: (0, p._W)(e.applicationId, e.asset, 800),
          className: h.asset
        })
      }, n.key)
    }
  }),
  v = o().parserFor(x),
  C = o().reactFor(o().ruleOutput(x, "react"));
class j extends Chunk473749.PureComponent {
  componentDidMount() {
    if (null != this._container) {
      let {
        height: e
      } = this._container.getBoundingClientRect();
      this.setState({
        collapsable: module > 400
      })
    }
  }
  render() {
    let {
      applicationId: e,
      description: t,
      blurb: n,
      className: a,
      assets: i
    } = this.props, {
      collapsed: s,
      collapsable: o
    } = this.state;
    return (0, Chunk54381.jsxs)("div", {
      className: Chunk473749,
      children: [(0, Chunk54381.jsx)("div", {
        className: l()({
          [Chunk395155.collapsed]: o && Chunk159635
        }),
        children: (0, Chunk54381.jsxs)("div", {
          ref: this.setContentContainerRef,
          children: [(0, Chunk54381.jsx)("div", {
            className: Chunk395155.blurb,
            children: require
          }), (0, Chunk54381.jsx)(Chunk241209.Z, {
            className: Chunk395155.description,
            parser: v,
            output: C,
            state: {
              assets: Chunk120356,
              applicationId: module
            },
            children: exports
          })]
        })
      }), o ? (0, Chunk54381.jsx)(Chunk755721.zx, {
        className: Chunk395155.toggleCollapseButton,
        onClick: this.handleToggleCollapse,
        color: Chunk755721.zx.Colors.PRIMARY,
        children: Chunk159635 ? Chunk388032.intl.string(Chunk388032.t.DxcOXA) : Chunk388032.intl.string(Chunk388032.t.rD6EaA)
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), g(this, "state", {
      collapsed: true,
      collapsable: true
    }), g(this, "_container", true), g(this, "handleToggleCollapse", () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }), g(this, "setContentContainerRef", e => {
      this._container = e
    })
  }
}
let y = j