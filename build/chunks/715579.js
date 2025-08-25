/** Chunk was on web.js **/
/** chunk id: 715579, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk732351 = require("./732351.js"),
  Chunk67793 = require("./67793.js"),
  Chunk654530 = require("./654530.js"),
  Chunk65183 = require("./65183.js"),
  Chunk647438 = require("./647438.js"),
  Chunk606166 = require("./606166.js");
Chunk65183.List, module.exports = function(e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  return r(t, e), t.prototype.render = function() {
    var e = this.props,
      t = e.block,
      n = e.contentState,
      r = e.customStyleFn,
      s = e.customStyleMap,
      u = e.decorator,
      d = e.direction,
      f = e.forceSelection,
      _ = e.hasSelection,
      p = e.selection,
      h = e.tree,
      m = t.getKey(),
      g = t.getText(),
      E = h.size - 1,
      b = this.props.children || h.map(function(e, c) {
        var h = e.get("decoratorKey"),
          b = e.get("leaves"),
          y = b.size - 1,
          O = b.map(function(e, n) {
            var i = a.encode(m, c, n),
              u = e.get("start"),
              d = e.get("end");
            return l.createElement(o, {
              key: i,
              offsetKey: i,
              block: t,
              start: u,
              selection: _ ? p : null,
              forceSelection: f,
              text: g.slice(u, d),
              styleSet: t.getInlineStyleAt(u),
              customStyleMap: s,
              customStyleFn: r,
              isLast: h === E && n === y
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
      "data-offset-key": a.encode(m, 0, 0),
      className: c({
        "public/DraftStyleDefault/block": true,
        "public/DraftStyleDefault/ltr": "LTR" === d,
        "public/DraftStyleDefault/rtl": "RTL" === d
      })
    }, b)
  }, t
}(Chunk647438.Component)