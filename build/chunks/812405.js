/** Chunk was on web.js **/
/** chunk id: 812405, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk449439 = require("./449439.js"),
  Chunk574369 = require("./574369.js"),
  Chunk283558 = require("./283558.js"),
  Chunk169774 = require("./169774.js"),
  Chunk262279 = require("./262279.js"),
  Chunk868149 = require("./868149.js"),
  Chunk558094 = require("./558094.js"),
  Chunk76443 = require("./76443.js"),
  Chunk246766 = require("./246766.js"),
  Chunk633868 = require("./633868.js"),
  Chunk277816 = require("./277816.js"),
  Chunk257834 = require("./257834.js"),
  Chunk259303 = require("./259303.js"),
  Chunk269166 = require("./269166.js"),
  Chunk694443 = require("./694443.js"),
  y = Chunk449439.isOptionKeyCommand,
  O = Chunk169774.isBrowser("Chrome");

function v(e, t, n) {
  switch (e) {
    case "redo":
      return i.redo(t);
    case "delete":
      return g(t);
    case "delete-word":
      return f(t);
    case "backspace":
      return h(t);
    case "backspace-word":
      return d(t);
    case "backspace-to-start-of-line":
      return u(t, n);
    case "split-block":
      return p(t);
    case "transpose-characters":
      return E(t);
    case "move-selection-to-start-of-block":
      return m(t);
    case "move-selection-to-end-of-block":
      return _(t);
    case "secondary-cut":
      return s.cut(t);
    case "secondary-paste":
      return s.paste(t);
    default:
      return t
  }
}
module.exports = function(e, t) {
  var n = t.which,
    o = e._latestEditorState;

  function s(n) {
    var r = e.props[n];
    return !!r && (r(t), true)
  }
  switch (n) {
    case a.RETURN:
      if (t.preventDefault(), e.props.handleReturn && c(e.props.handleReturn(t, o))) return;
      break;
    case a.ESC:
      if (t.preventDefault(), s("onEscape")) return;
      break;
    case a.TAB:
      if (s("onTab")) return;
      break;
    case a.UP:
      if (s("onUpArrow")) return;
      break;
    case a.RIGHT:
      if (s("onRightArrow")) return;
      break;
    case a.DOWN:
      if (s("onDownArrow")) return;
      break;
    case a.LEFT:
      if (s("onLeftArrow")) return;
      break;
    case a.SPACE:
      O && y(t) && t.preventDefault()
  }
  var l = e.props.keyBindingFn(t);
  if (null == l || "" === l) {
    if (n === a.SPACE && O && y(t)) {
      var u = r.replaceText(o.getCurrentContent(), o.getSelection(), "\xa0");
      e.update(i.push(o, u, "insert-characters"))
    }
    return
  }
  if ("undo" === l) return void b(t, o, e.update);
  if (t.preventDefault(), !(e.props.handleKeyCommand && c(e.props.handleKeyCommand(l, o, t.timeStamp)))) {
    var d = v(l, o, t);
    d !== o && e.update(d)
  }
}