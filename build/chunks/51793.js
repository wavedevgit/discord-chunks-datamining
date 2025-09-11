/** Chunk was on 54628 **/
/** chunk id: 51793, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk44837 = require("./44837.js"),
  Chunk891943 = require("./891943.js"),
  Chunk856706 = require("./856706.js"),
  Chunk455412 = require("./455412.js"),
  Chunk706852 = require("./706852.js"),
  Chunk371101 = require("./371101.js"),
  Chunk174083 = require("./174083.js"),
  Chunk565294 = require("./565294.js"),
  Chunk647438 = require("./647438.js"),
  Chunk639519 = require("./639519.js"),
  d = require.n(Chunk639519),
  Chunk594747 = require("./594747.js"),
  p = function(e) {
    (0, i.Z)(b, e);
    var t, r = (t = function() {
      if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) returnfalse;
      if ("function" == typeof Proxy) returntrue;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), true
      } catch (e) {
        returnfalse
      }
    }(), function() {
      var e, r = (0, u.Z)(b);
      return e = t ? Reflect.construct(r, arguments, (0, u.Z)(this).constructor) : r.apply(this, arguments), (0, c.Z)(this, e)
    });

    function b(e) {
      var t;
      return (0, n.Z)(this, b), t = r.call(this, e), (0, l.Z)((0, s.Z)(t), "handleClick", function() {
        t.setState({
          expanded: !t.state.expanded
        })
      }), t.state = {
        expanded: false
      }, t
    }
    return (0, o.Z)(b, [{
      key: "render",
      value: function() {
        var e = this.props,
          t = e.styling,
          r = e.from,
          n = e.to,
          o = e.renderChildNodes,
          s = e.nodeType;
        return this.state.expanded ? f.createElement("div", t("itemRange", this.state.expanded), o(this.props, r, n)) : f.createElement("div", (0, a.Z)({}, t("itemRange", this.state.expanded), {
          onClick: this.handleClick
        }), f.createElement(h.Z, {
          nodeType: s,
          styling: t,
          expanded: false,
          onClick: this.handleClick,
          arrowStyle: "double"
        }), "".concat(r, " ... ").concat(n))
      }
    }]), b
  }(Chunk647438.Component);
(0, Chunk565294.Z)(p, "propTypes", {
  styling: d().func.isRequired,
  from: d().number.isRequired,
  to: d().number.isRequired,
  renderChildNodes: d().func.isRequired,
  nodeType: d().string.isRequired
})