/** Chunk was on 54628 **/
/** chunk id: 208844, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
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
  Chunk647438 = require("./647438.js"),
  Chunk639519 = require("./639519.js"),
  h = require.n(Chunk639519),
  Chunk594747 = require("./594747.js"),
  Chunk850312 = require("./850312.js"),
  Chunk434959 = require("./434959.js"),
  Chunk51793 = require("./51793.js");

function v(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), r.push.apply(r, a)
  }
  return r
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2 ? v(Object(r), true).forEach(function(t) {
      (0, u.Z)(e, t, r[t])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
    })
  }
  return e
}

function w(e) {
  return {
    expanded: !e.isCircular && e.shouldExpandNode(e.keyPath, e.data, e.level)
  }
}
var M = function(e) {
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
    return (0, a.Z)(this, d), t = r.call(this, e), (0, u.Z)((0, o.Z)(t), "handleClick", function() {
      t.props.expandable && t.setState({
        expanded: !t.state.expanded
      })
    }), t.state = w(e), t
  }
  return (0, n.Z)(d, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function(e) {
      var t = w(e);
      w(this.props).expanded !== t.expanded && this.setState(t)
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
        a = e.nodeType,
        n = e.data,
        o = e.hideRoot,
        s = e.createItemString,
        i = e.styling,
        c = e.collectionLimit,
        u = e.keyPath,
        d = e.labelRenderer,
        h = e.expandable,
        v = this.state.expanded,
        w = v || o && 0 === this.props.level ? function e(t, r, a) {
          var n = t.nodeType,
            o = t.data,
            s = t.collectionLimit,
            i = t.circularCache,
            c = t.keyPath,
            u = t.postprocessValue,
            d = t.sortObjectKeys,
            h = [];
          return (0, m.Z)(n, o, d, s, r, a).forEach(function(r) {
            if (true !== r.to) h.push(b.createElement(y.Z, (0, f.Z)({}, t, {
              key: "ItemRange--".concat(r.from, "-").concat(r.to),
              from: r.from,
              to: r.to,
              renderChildNodes: e
            })));
            else {
              var a = r.key,
                n = r.value,
                o = false !== i.indexOf(n);
              h.push(b.createElement(g.Z, (0, f.Z)({}, t, {
                postprocessValue: u,
                collectionLimit: s,
                key: "Node--".concat(a),
                keyPath: [a].concat((0, l.Z)(c)),
                value: u(n),
                circularCache: [].concat((0, l.Z)(i), [n]),
                isCircular: o,
                hideRoot: false
              })))
            }
          }), h
        }(Z(Z({}, this.props), {}, {
          level: this.props.level + 1
        })) : null,
        M = t(a, n, b.createElement("span", i("nestedNodeItemType", v), r), s(n, c), u),
        k = [u, a, v, h];
      return o ? b.createElement("li", i.apply(true, ["rootNode"].concat(k)), b.createElement("ul", i.apply(true, ["rootNodeChildren"].concat(k)), w)) : b.createElement("li", i.apply(true, ["nestedNode"].concat(k)), h && b.createElement(p.Z, {
        styling: i,
        nodeType: a,
        expanded: v,
        onClick: this.handleClick
      }), b.createElement("label", (0, f.Z)({}, i.apply(true, [
        ["label", "nestedNodeLabel"]
      ].concat(k)), {
        onClick: this.handleClick
      }), d.apply(true, k)), b.createElement("span", (0, f.Z)({}, i.apply(true, ["nestedNodeItemString"].concat(k)), {
        onClick: this.handleClick
      }), M), b.createElement("ul", i.apply(true, ["nestedNodeChildren"].concat(k)), w))
    }
  }]), d
}(Chunk647438.Component);
(0, Chunk565294.Z)(M, "propTypes", {
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
}), (0, Chunk565294.Z)(M, "defaultProps", {
  data: [],
  circularCache: [],
  level: 0,
  expandable: true
})