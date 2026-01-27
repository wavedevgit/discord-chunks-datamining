/** Chunk was on 38939 **/
/** chunk id: 92690, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk207135 = require("./207135.js"),
  Chunk423758 = require("./423758.js"),
  Chunk595042 = require("./595042.js"),
  Chunk116740 = require("./116740.js"),
  Chunk64700 = require("./64700.js"),
  Chunk550835 = require("./550835.js");
Chunk116740.List, module.exports = function(t) {
  function e() {
    return t.apply(this, arguments) || this
  }
  return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t, e.prototype.render = function() {
    var t = this.props,
      e = t.block,
      r = t.contentState,
      a = t.customStyleFn,
      c = t.customStyleMap,
      l = t.decorator,
      f = t.direction,
      p = t.forceSelection,
      h = t.hasSelection,
      d = t.selection,
      g = t.tree,
      y = e.getKey(),
      v = e.getText(),
      m = g.size - 1,
      _ = this.props.children || g.map(function(t, u) {
        var g = t.get("decoratorKey"),
          _ = t.get("leaves"),
          b = _.size - 1,
          S = _.map(function(t, r) {
            var n = o.encode(y, u, r),
              l = t.get("start"),
              f = t.get("end");
            return s.createElement(i, {
              key: n,
              offsetKey: n,
              block: e,
              start: l,
              selection: h ? d : null,
              forceSelection: p,
              text: v.slice(l, f),
              styleSet: e.getInlineStyleAt(l),
              customStyleMap: c,
              customStyleFn: a,
              isLast: g === m && r === b
            })
          }).toArray();
        return g && l ? s.createElement(n, {
          block: e,
          children: S,
          contentState: r,
          decorator: l,
          decoratorKey: g,
          direction: f,
          leafSet: t,
          text: v,
          key: u
        }) : S
      }).toArray();
    return s.createElement("div", {
      "data-offset-key": o.encode(y, 0, 0),
      className: u({
        "public/DraftStyleDefault/block": true,
        "public/DraftStyleDefault/ltr": "LTR" === f,
        "public/DraftStyleDefault/rtl": "RTL" === f
      })
    }, _)
  }, e
}(Chunk64700.Component)