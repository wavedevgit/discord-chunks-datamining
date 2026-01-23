/** Chunk was on web.js **/
/** chunk id: 597549, original params: e,t,n (module,exports,re quire) **/
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
  O = Chunk573750.isBrowser("Chrome");

function v(e, t, n) {
  switch (e) {
    case "redo":
      return i.redo(t);
    case "delete":
      return g(t);
    case "delete-word":
      return f(t);
    case "backspace":
      return m(t);
    case "backspace-word":
      return d(t);
    case "backspace-to-start-of-line":
      return u(t, n);
    case "split-block":
      return p(t);
    case "transpose-characters":
      return E(t);
    case "move-selection-to-start-of-block":
      return h(t);
    case "move-selection-to-end-of-block":
      return _(t);
    case "secondary-cut":
      return o.cut(t);
    case "secondary-paste":
      return o.paste(t);
    default:
      return t
  }
}
module.exports = function(e, t) {
  var n = t.which,
    a = e._latestEditorState;

  function o(n) {
    var r = e.props[n];
    return !!r && (r(t), true)
  }
  switch (n) {
    case s.RETURN:
      if (t.preventDefault(), e.props.handleReturn && c(e.props.handleReturn(t, a))) return;
      break;
    case s.ESC:
      if (t.preventDefault(), o("onEscape")) return;
      break;
    case s.TAB:
      if (o("onTab")) return;
      break;
    case s.UP:
      if (o("onUpArrow")) return;
      break;
    case s.RIGHT:
      if (o("onRightArrow")) return;
      break;
    case s.DOWN:
      if (o("onDownArrow")) return;
      break;
    case s.LEFT:
      if (o("onLeftArrow")) return;
      break;
    case s.SPACE:
      O && b(t) && t.preventDefault()
  }
  var l = e.props.keyBindingFn(t);
  if (null == l || "" === l) {
    if (n === s.SPACE && O && b(t)) {
      var u = r.replaceText(a.getCurrentContent(), a.getSelection(), "\xa0");
      e.update(i.push(a, u, "insert-characters"))
    }
    return
  }
  if ("undo" === l) return void y(t, a, e.update);
  if (t.preventDefault(), !(e.props.handleKeyCommand && c(e.props.handleKeyCommand(l, a, t.timeStamp)))) {
    var d = v(l, a, t);
    d !== a && e.update(d)
  }
}