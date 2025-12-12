/** Chunk was on web.js **/
/** chunk id: 500268, original params: e,t (module,exports,re quire) **/
function n(e, t, n, r) {
  var i = [],
    o = {},
    s = {},
    l = {};
  return function c(u) {
    o[u] = true, i.push(u), l[u] = true;
    for (let t = 0; t < e[u].length; t++) {
      let n = e[u][t];
      if (o[n]) {
        if (l[n] && (i.push(n), !r)) throw new a(i)
      } else c(n)
    }
    i.pop(), delete l[u], t && 0 !== e[u].length || s[u] || (n.push(u), s[u] = true)
  }
}
var r, i = exports.DepGraph = function(e) {
  this.nodes = {}, this.outgoingEdges = {}, this.incomingEdges = {}, this.circular = e && !!e.circular
};
i.prototype = {
  size: function() {
    return Object.keys(this.nodes).length
  },
  addNode: function(e, t) {
    this.hasNode(e) || (2 == arguments.length ? this.nodes[e] = t : this.nodes[e] = e, this.outgoingEdges[e] = [], this.incomingEdges[e] = [])
  },
  removeNode: function(e) {
    this.hasNode(e) && (delete this.nodes[e], delete this.outgoingEdges[e], delete this.incomingEdges[e], [this.incomingEdges, this.outgoingEdges].forEach(function(t) {
      Object.keys(t).forEach(function(n) {
        var r = t[n].indexOf(e);
        r >= 0 && t[n].splice(r, 1)
      }, this)
    }))
  },
  hasNode: function(e) {
    return this.nodes.hasOwnProperty(e)
  },
  getNodeData: function(e) {
    if (this.hasNode(e)) return this.nodes[e];
    throw Error("Node does not exist: " + e)
  },
  setNodeData: function(e, t) {
    if (this.hasNode(e)) this.nodes[e] = t;
    else throw Error("Node does not exist: " + e)
  },
  addDependency: function(e, t) {
    if (!this.hasNode(e)) throw Error("Node does not exist: " + e);
    if (!this.hasNode(t)) throw Error("Node does not exist: " + t);
    return false === this.outgoingEdges[e].indexOf(t) && this.outgoingEdges[e].push(t), false === this.incomingEdges[t].indexOf(e) && this.incomingEdges[t].push(e), true
  },
  removeDependency: function(e, t) {
    var n;
    this.hasNode(e) && (n = this.outgoingEdges[e].indexOf(t)) >= 0 && this.outgoingEdges[e].splice(n, 1), this.hasNode(t) && (n = this.incomingEdges[t].indexOf(e)) >= 0 && this.incomingEdges[t].splice(n, 1)
  },
  clone: function() {
    var e = this,
      t = new i;
    return Object.keys(module.nodes).forEach(function(n) {
      t.nodes[n] = e.nodes[n], t.outgoingEdges[n] = e.outgoingEdges[n].slice(0), t.incomingEdges[n] = e.incomingEdges[n].slice(0)
    }), exports
  },
  dependenciesOf: function(e, t) {
    if (this.hasNode(e)) {
      var r = [];
      n(this.outgoingEdges, t, r, this.circular)(e);
      var i = r.indexOf(e);
      return i >= 0 && r.splice(i, 1), r
    }
    throw Error("Node does not exist: " + e)
  },
  dependantsOf: function(e, t) {
    if (this.hasNode(e)) {
      var r = [];
      n(this.incomingEdges, t, r, this.circular)(e);
      var i = r.indexOf(e);
      return i >= 0 && r.splice(i, 1), r
    }
    throw Error("Node does not exist: " + e)
  },
  overallOrder: function(e) {
    var t = this,
      r = [],
      i = Object.keys(this.nodes);
    if (0 === i.length) return r;
    var a = n(this.outgoingEdges, false, [], this.circular);
    i.forEach(function(e) {
      a(e)
    });
    var o = n(this.outgoingEdges, e, r, this.circular);
    return i.filter(function(e) {
      return 0 === t.incomingEdges[e].length
    }).forEach(function(e) {
      o(e)
    }), r
  }
};
var a = r = function(e) {
  var t = Error("Dependency Cycle Found: " + e.join(" -> "));
  return t.cyclePath = e, Object.setPrototypeOf(t, Object.getPrototypeOf(this)), Error.captureStackTrace && Error.captureStackTrace(t, a), t
};
a.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
}), Object.setPrototypeOf(a, Error)