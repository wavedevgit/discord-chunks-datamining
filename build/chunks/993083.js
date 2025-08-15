/** Chunk was on 8381 **/
/** chunk id: 993083, original params: t,e,r (module,exports,require) **/
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
  b = Chunk147521.isOptionKeyCommand,
  S = Chunk169774.isBrowser("Chrome");
module.exports = function(t, e) {
  var r = e.which,
    o = t._latestEditorState;

  function s(r) {
    var n = t.props[r];
    return !!n && (n(e), true)
  }
  switch (r) {
    case a.RETURN:
      if (e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o))) return;
      break;
    case a.ESC:
      if (e.preventDefault(), s("onEscape")) return;
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
      S && b(e) && e.preventDefault()
  }
  var w = t.props.keyBindingFn(e);
  if (null == w || "" === w) {
    if (r === a.SPACE && S && b(e)) {
      var x = n.replaceText(o.getCurrentContent(), o.getSelection(), "\xa0");
      t.update(i.push(o, x, "insert-characters"))
    }
    return
  }
  if ("undo" === w) return void _(e, o, t.update);
  if (e.preventDefault(), !(t.props.handleKeyCommand && c(t.props.handleKeyCommand(w, o, e.timeStamp)))) {
    var k = function(t, e, r) {
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
          return u.cut(e);
        case "secondary-paste":
          return u.paste(e);
        default:
          return e
      }
    }(w, o, e);
    k !== o && t.update(k)
  }
}