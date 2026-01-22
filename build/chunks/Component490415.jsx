/** Chunk was on web.js **/
/** chunk id: 490415, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk961350 = require("./961350.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  return class extends i.Component {
    componentDidMount() {
      a.default.addChangeListener(this.onStoreChange)
    }
    componentWillUnmount() {
      a.default.removeChangeListener(this.onStoreChange)
    }
    render() {
      return (0, r.jsx)(e, c(o({}, this.props), {
        isAuthenticated: this.state.isAuthenticated
      }))
    }
    constructor(...e) {
      super(...e), s(this, "state", {
        isAuthenticated: a.default.isAuthenticated()
      }), s(this, "onStoreChange", () => {
        this.setState({
          isAuthenticated: a.default.isAuthenticated()
        })
      })
    }
  }
}