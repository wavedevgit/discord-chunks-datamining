/** Chunk was on 92504 **/
/** chunk id: 15470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y,
  i: () => v
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
  Chunk697110 = require("./697110.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = /^!\[([^\]]*)\]\(asset:\/\/(\d+)\)/,
  v = b(g({}, Chunk241209.Z.rules), {
    heading: b(g({}, Chunk241209.Z.rules.heading), {
      react(e, t, n) {
        let r = "h".concat(Math.min(Math.max(2, e.level + 1), 4));
        return (0, a.jsx)(d.Z, {
          tag: r,
          children: t(e.content, n)
        }, n.key)
      }
    }),
    assetImage: {
      order: 5,
      match(e, t) {
        let n = e.match(x);
        if (null != n) {
          let e = n[2],
            a = t.assets.find(t => t.id === e);
          return null != a && [...n, a, t.applicationId]
        }
        returnfalse
      },
      parse: e => ({
        asset: e[3],
        alt: e[1],
        applicationId: e[4]
      }),
      react: (e, t, n) => (0, a.jsx)("div", {
        className: h.assetWrapper,
        children: (0, a.jsx)("img", {
          alt: e.alt,
          src: (0, p._W)(e.applicationId, e.asset, 800),
          className: h.asset
        })
      }, n.key)
    }
  }),
  C = o().parserFor(v),
  j = o().reactFor(o().ruleOutput(v, "react"));
class _ extends Chunk473749.PureComponent {
  componentDidMount() {
    if (null != this._container) {
      let {
        height: e
      } = this._container.getBoundingClientRect();
      this.setState({
        collapsable: e > 400
      })
    }
  }
  render() {
    let {
      applicationId: e,
      description: t,
      blurb: n,
      className: r,
      assets: i
    } = this.props, {
      collapsed: s,
      collapsable: o
    } = this.state;
    return (0, a.jsxs)("div", {
      className: r,
      children: [(0, a.jsx)("div", {
        className: l()({
          [h.collapsed]: o && s
        }),
        children: (0, a.jsxs)("div", {
          ref: this.setContentContainerRef,
          children: [(0, a.jsx)("div", {
            className: h.blurb,
            children: n
          }), (0, a.jsx)(u.Z, {
            className: h.description,
            parser: C,
            output: j,
            state: {
              assets: i,
              applicationId: e
            },
            children: t
          })]
        })
      }), o ? (0, a.jsx)(c.zx, {
        className: h.toggleCollapseButton,
        onClick: this.handleToggleCollapse,
        color: c.zx.Colors.PRIMARY,
        children: s ? m.intl.string(m.t.DxcOXA) : m.intl.string(m.t.rD6EaA)
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), f(this, "state", {
      collapsed: true,
      collapsable: true
    }), f(this, "_container", true), f(this, "handleToggleCollapse", () => {
      this.setState({
        collapsed: !this.state.collapsed
      })
    }), f(this, "setContentContainerRef", e => {
      this._container = e
    })
  }
}
let y = _