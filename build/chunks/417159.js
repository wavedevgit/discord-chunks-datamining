/** Chunk was on 38939 **/
/** chunk id: 417159, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk550835 = require("./550835.js");
module.exports = function(t) {
  function e() {
    return t.apply(this, arguments) || this
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r.shouldComponentUpdate = function(t) {
    return this.props.text !== t.text || this.props.editorState.getSelection().getHasFocus() !== t.editorState.getSelection().getHasFocus()
  }, r.render = function() {
    var t = i({
      "public/DraftEditorPlaceholder/root": true,
      "public/DraftEditorPlaceholder/hasFocus": this.props.editorState.getSelection().getHasFocus()
    });
    return n.createElement("div", {
      className: t
    }, n.createElement("div", {
      className: i("public/DraftEditorPlaceholder/inner"),
      id: this.props.accessibilityID,
      style: {
        whiteSpace: "pre-wrap"
      }
    }, this.props.text))
  }, e
}(Chunk64700.Component)