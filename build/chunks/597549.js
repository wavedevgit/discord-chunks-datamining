/** Chunk was on 38939 **/
/** chunk id: 597549, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk868361 = require("./868361.js"),
  Chunk63996 = require("./63996.js"),
  Chunk278089 = require("./278089.js"),
  Chunk573750 = require("./573750.js"),
  Chunk4323 = require("./4323.js"),
  Chunk768260 = require("./768260.js"),
  Chunk589834 = require("./589834.js"),
  Chunk288598 = require("./288598.js"),
  Chunk234485 = require("./234485.js"),
  Chunk832368 = require("./832368.js"),
  Chunk692807 = require("./692807.js"),
  Chunk907014 = require("./907014.js"),
  Chunk70986 = require("./70986.js"),
  Chunk1214 = require("./1214.js"),
  Chunk631735 = require("./631735.js"),
  b = Chunk868361.isOptionKeyCommand,
  S = Chunk573750.isBrowser("Chrome");
module.exports = function(t, e) {
  var r = e.which,
    o = t._latestEditorState;

  function u(r) {
    var n = t.props[r];
    return !!n && (n(e), true)
  }
  switch (r) {
    case a.RETURN:
      if (e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o))) return;
      break;
    case a.ESC:
      if (e.preventDefault(), u("onEscape")) return;
      break;
    case a.TAB:
      if (u("onTab")) return;
      break;
    case a.UP:
      if (u("onUpArrow")) return;
      break;
    case a.RIGHT:
      if (u("onRightArrow")) return;
      break;
    case a.DOWN:
      if (u("onDownArrow")) return;
      break;
    case a.LEFT:
      if (u("onLeftArrow")) return;
      break;
    case a.SPACE:
      S && b(e) && e.preventDefault()
  }
  var w = t.props.keyBindingFn(e);
  if (null == w || "" === w) {
    if (r === a.SPACE && S && b(e)) {
      var k = n.replaceText(o.getCurrentContent(), o.getSelection(), "\xa0");
      t.update(i.push(o, k, "insert-characters"))
    }
    return
  }
  if ("undo" === w) return void _(e, o, t.update);
  if (e.preventDefault(), !(t.props.handleKeyCommand && c(t.props.handleKeyCommand(w, o, e.timeStamp)))) {
    var x = function(t, e, r) {
      switch (t) {
        case "redo":
          return i.redo(e);
        case "delete":
          return v(e);
        case "delete-word":
          return p(e);
        case "backspace":
          return y(e);
        case "backspace-word":
          return f(e);
        case "backspace-to-start-of-line":
          return l(e, r);
        case "split-block":
          return h(e);
        case "transpose-characters":
          return m(e);
        case "move-selection-to-start-of-block":
          return g(e);
        case "move-selection-to-end-of-block":
          return d(e);
        case "secondary-cut":
          return s.cut(e);
        case "secondary-paste":
          return s.paste(e);
        default:
          return e
      }
    }(w, o, e);
    x !== o && t.update(x)
  }
}