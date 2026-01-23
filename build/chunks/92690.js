/** Chunk was on web.js **/
/** chunk id: 92690, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk207135 = require("./207135.js"),
  Chunk423758 = require("./423758.js"),
  Chunk595042 = require("./595042.js"),
  Chunk116740 = require("./116740.js"),
  Chunk64700 = require("./64700.js"),
  Chunk550835 = require("./550835.js");
Chunk116740.List, module.exports = function(e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  return r(t, e), t.prototype.render = function() {
    var e = this.props,
      t = e.block,
      n = e.contentState,
      r = e.customStyleFn,
      o = e.customStyleMap,
      u = e.decorator,
      d = e.direction,
      f = e.forceSelection,
      p = e.hasSelection,
      _ = e.selection,
      h = e.tree,
      m = t.getKey(),
      g = t.getText(),
      E = h.size - 1,
      y = this.props.children || h.map(function(e, c) {
        var h = e.get("decoratorKey"),
          y = e.get("leaves"),
          b = y.size - 1,
          O = y.map(function(e, n) {
            var i = s.encode(m, c, n),
              u = e.get("start"),
              d = e.get("end");
            return l.createElement(a, {
              key: i,
              offsetKey: i,
              block: t,
              start: u,
              selection: p ? _ : null,
              forceSelection: f,
              text: g.slice(u, d),
              styleSet: t.getInlineStyleAt(u),
              customStyleMap: o,
              customStyleFn: r,
              isLast: h === E && n === b
            })
          }).toArray();
        return h && u ? l.createElement(i, {
          block: t,
          children: O,
          contentState: n,
          decorator: u,
          decoratorKey: h,
          direction: d,
          leafSet: e,
          text: g,
          key: c
        }) : O
      }).toArray();
    return l.createElement("div", {
      "data-offset-key": s.encode(m, 0, 0),
      className: c({
        "public/DraftStyleDefault/block": true,
        "public/DraftStyleDefault/ltr": "LTR" === d,
        "public/DraftStyleDefault/rtl": "RTL" === d
      })
    }, y)
  }, t
}(Chunk64700.Component)