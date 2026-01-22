/** Chunk was on 92777 **/
/** chunk id: 257341, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk1139 = require("./1139.js"),
  Chunk26412 = require("./26412.js"),
  Chunk658 = require("./658.js"),
  Chunk527758 = require("./527758.js"),
  Chunk552932 = require("./552932.js"),
  Chunk865977 = require("./865977.js"),
  Chunk761847 = require("./761847.js"),
  Chunk416886 = require("./416886.js"),
  Chunk64700 = require("./64700.js"),
  Chunk223108 = require("./223108.js"),
  d = require.n(Chunk223108),
  Chunk708906 = require("./708906.js"),
  p = function(e) {
    (0, i.A)(f, e);
    var t, r = (t = function() {
      if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
      if ("function" == typeof Proxy) returntrue;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), true
      } catch (e) {
        returnfalse
      }
    }(), function() {
      var e, r = (0, l.A)(f);
      return e = t ? Reflect.construct(r, arguments, (0, l.A)(this).constructor) : r.apply(this, arguments), (0, c.A)(this, e)
    });

    function f(e) {
      var t;
      return (0, n.A)(this, f), t = r.call(this, e), (0, u.A)((0, o.A)(t), "handleClick", function() {
        t.setState({
          expanded: !t.state.expanded
        })
      }), t.state = {
        expanded: false
      }, t
    }
    return (0, s.A)(f, [{
      key: "render",
      value: function() {
        var e = this.props,
          t = e.styling,
          r = e.from,
          n = e.to,
          s = e.renderChildNodes,
          o = e.nodeType;
        return this.state.expanded ? b.createElement("div", t("itemRange", this.state.expanded), s(this.props, r, n)) : b.createElement("div", (0, a.A)({}, t("itemRange", this.state.expanded), {
          onClick: this.handleClick
        }), b.createElement(h.A, {
          nodeType: o,
          styling: t,
          expanded: false,
          onClick: this.handleClick,
          arrowStyle: "double"
        }), "".concat(r, " ... ").concat(n))
      }
    }]), f
  }(Chunk64700.Component);
(0, Chunk416886.A)(p, "propTypes", {
  styling: d().func.isRequired,
  from: d().number.isRequired,
  to: d().number.isRequired,
  renderChildNodes: d().func.isRequired,
  nodeType: d().string.isRequired
})