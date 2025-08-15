/** Chunk was on 91584 **/
/** chunk id: 512797, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  Chunk102736 = require("./102736.js"),
  Chunk366885 = require("./366885.js"),
  Chunk574369 = require("./574369.js"),
  Chunk175571 = require("./175571.js"),
  Chunk169774 = require("./169774.js"),
  Chunk510898 = require("./510898.js"),
  Chunk924849 = require("./924849.js"),
  Chunk720057 = require("./720057.js"),
  Chunk556924 = require("./556924.js"),
  Chunk885096 = require("./885096.js"),
  Chunk698453 = require("./698453.js"),
  Chunk906757 = require("./906757.js"),
  Chunk568064 = require("./568064.js"),
  Chunk91242 = require("./91242.js"),
  Chunk562531 = require("./562531.js"),
  Chunk890582 = require("./890582.js"),
  b = Chunk366885.isOptionKeyCommand,
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