/** Chunk was on web.js **/
/** chunk id: 753294, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk473749 = require("./473749.js"),
  Chunk606166 = require("./606166.js");
module.exports = function(e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  r(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    return this.props.text !== e.text || this.props.editorState.getSelection().getHasFocus() !== e.editorState.getSelection().getHasFocus()
  }, n.render = function() {
    var e = a({
        "public/DraftEditorPlaceholder/root": true,
        "public/DraftEditorPlaceholder/hasFocus": this.props.editorState.getSelection().getHasFocus()
      }),
      t = {
        whiteSpace: "pre-wrap"
      };
    return i.createElement("div", {
      className: e
    }, i.createElement("div", {
      className: a("public/DraftEditorPlaceholder/inner"),
      id: this.props.accessibilityID,
      style: t
    }, this.props.text))
  }, t
}(Chunk473749.Component)