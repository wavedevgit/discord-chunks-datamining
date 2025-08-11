/** Chunk was on web.js **/
/** chunk id: 993083, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk147521 = require("./147521.js"),
  Chunk574369 = require("./574369.js"),
  Chunk805797 = require("./805797.js"),
  Chunk169774 = require("./169774.js"),
  Chunk352582 = require("./352582.js"),
  Chunk476363 = require("./476363.js"),
  Chunk963782 = require("./963782.js"),
  Chunk904112 = require("./904112.js"),
  Chunk727813 = require("./727813.js"),
  Chunk599552 = require("./599552.js"),
  Chunk544611 = require("./544611.js"),
  Chunk803068 = require("./803068.js"),
  Chunk561099 = require("./561099.js"),
  Chunk655000 = require("./655000.js"),
  Chunk920267 = require("./920267.js"),
  y = Chunk147521.isOptionKeyCommand,
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
      return m(t);
    case "backspace-word":
      return d(t);
    case "backspace-to-start-of-line":
      return u(t, n);
    case "split-block":
      return _(t);
    case "transpose-characters":
      return E(t);
    case "move-selection-to-start-of-block":
      return h(t);
    case "move-selection-to-end-of-block":
      return p(t);
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