/** Chunk was on 23706 **/
/** chunk id: 987714, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => k
});
var Chunk891943 = require("./891943.js"),
  Chunk856706 = require("./856706.js"),
  Chunk455412 = require("./455412.js"),
  Chunk706852 = require("./706852.js"),
  Chunk371101 = require("./371101.js"),
  Chunk174083 = require("./174083.js"),
  Chunk565294 = require("./565294.js"),
  Chunk619825 = require("./619825.js"),
  Chunk44837 = require("./44837.js"),
  Chunk473749 = require("./473749.js"),
  Chunk639519 = require("./639519.js"),
  h = require.n(Chunk639519),
  Chunk22356 = require("./22356.js"),
  Chunk80901 = require("./80901.js"),
  Chunk558876 = require("./558876.js"),
  Chunk309445 = require("./309445.js");

function m(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), r.push.apply(r, n)
  }
  return r
}

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? m(Object(r), true).forEach(function(t) {
      (0, u.Z)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}

function O(e) {
  return {
    expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level)
  }
}
var k = function(e) {
  (0, s.Z)(d, e);
  var t, r = (t = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
    if ("function" == typeof Proxy) returntrue;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), true
    } catch (e) {
      returnfalse
    }
  }(), function() {
    var e, r = (0, c.Z)(d);
    return e = t ? Reflect.construct(r, arguments, (0, c.Z)(this).constructor) : r.apply(this, arguments), (0, i.Z)(this, e)
  });

  function d(e) {
    var t;
    return (0, n.Z)(this, d), t = r.call(this, e), (0, u.Z)((0, o.Z)(t), "handleClick", function() {
      t.props.expandable && t.setState({
        expanded: !t.state.expanded
      })
    }), t.state = O(e), t
  }
  return (0, a.Z)(d, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function(e) {
      var t = O(e);
      O(this.props).expanded !== t.expanded && this.setState(t)
    }
  }, {
    key: "shouldComponentUpdate",
    value: function(e, t) {
      var r = this;
      return !!Object.keys(e).find(function(t) {
        return "circularCache" !== t && ("keyPath" === t ? e[t].join("/") !== r.props[t].join("/") : e[t] !== r.props[t])
      }) || t.expanded !== this.state.expanded
    }
  }, {
    key: "render",
    value: function() {
      var e = this.props,
        t = e.getItemString,
        r = e.nodeTypeIndicator,
        n = e.nodeType,
        a = e.data,
        o = e.hideRoot,
        s = e.createItemString,
        i = e.styling,
        c = e.collectionLimit,
        u = e.keyPath,
        d = e.labelRenderer,
        h = e.expandable,
        m = this.state.expanded,
        O = m || o && 0 === this.props.level ? function e(t, r, n) {
          var a = t.nodeType,
            o = t.data,
            s = t.collectionLimit,
            i = t.circularCache,
            c = t.keyPath,
            u = t.postprocessValue,
            d = t.sortObjectKeys,
            h = [];
          return (0, y.Z)(a, o, d, s, r, n).forEach(function(r) {
            if (true !== r.to) h.push(b.createElement(v.Z, (0, f.Z)({}, t, {
              key: "ItemRange--".concat(r.from, "-").concat(r.to),
              from: r.from,
              to: r.to,
              renderChildNodes: e
            })));
            else {
              var n = r.key,
                a = r.value,
                o = false !== i.indexOf(a);
              h.push(b.createElement(g.Z, (0, f.Z)({}, t, {
                postprocessValue: u,
                collectionLimit: s,
                key: "Node--".concat(n),
                keyPath: [n].concat((0, l.Z)(c)),
                value: u(a),
                circularCache: [].concat((0, l.Z)(i), [a]),
                isCircular: o,
                hideRoot: false
              })))
            }
          }), h
        }(w(w({}, this.props), {}, {
          level: this.props.level + 1
        })) : null,
        k = t(n, a, b.createElement("span", i("nestedNodeItemType", m), r), s(a, c), u),
        x = [u, n, m, h];
      return o ? b.createElement("li", i.apply(true, ["rootNode"].concat(x)), b.createElement("ul", i.apply(true, ["rootNodeChildren"].concat(x)), O)) : b.createElement("li", i.apply(true, ["nestedNode"].concat(x)), h && b.createElement(p.Z, {
        styling: i,
        nodeType: n,
        expanded: m,
        onClick: this.handleClick
      }), b.createElement("label", (0, f.Z)({}, i.apply(true, [
        ["label", "nestedNodeLabel"]
      ].concat(x)), {
        onClick: this.handleClick
      }), d.apply(true, x)), b.createElement("span", (0, f.Z)({}, i.apply(true, ["nestedNodeItemString"].concat(x)), {
        onClick: this.handleClick
      }), k), b.createElement("ul", i.apply(true, ["nestedNodeChildren"].concat(x)), O))
    }
  }]), d
}(Chunk473749.Component);
(0, Chunk565294.Z)(k, "propTypes", {
  getItemString: h().func.isRequired,
  nodeTypeIndicator: h().any,
  nodeType: h().string.isRequired,
  data: h().any,
  hideRoot: h().bool.isRequired,
  createItemString: h().func.isRequired,
  styling: h().func.isRequired,
  collectionLimit: h().number,
  keyPath: h().arrayOf(h().oneOfType([h().string, h().number])).isRequired,
  labelRenderer: h().func.isRequired,
  shouldExpandNode: h().func,
  level: h().number.isRequired,
  sortObjectKeys: h().oneOfType([h().func, h().bool]),
  isCircular: h().bool,
  expandable: h().bool
}), (0, Chunk565294.Z)(k, "defaultProps", {
  data: [],
  circularCache: [],
  level: 0,
  expandable: true
})