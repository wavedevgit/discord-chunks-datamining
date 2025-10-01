/** Chunk was on web.js **/
/** chunk id: 512797, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk441710 = require("./441710.js"),
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
  y = Chunk366885.isOptionKeyCommand,
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
    a = e._latestEditorState;

  function s(n) {
    var r = e.props[n];
    return !!r && (r(t), true)
  }
  switch (n) {
    case o.RETURN:
      if (t.preventDefault(), e.props.handleReturn && c(e.props.handleReturn(t, a))) return;
      break;
    case o.ESC:
      if (t.preventDefault(), s("onEscape")) return;
      break;
    case o.TAB:
      if (s("onTab")) return;
      break;
    case o.UP:
      if (s("onUpArrow")) return;
      break;
    case o.RIGHT:
      if (s("onRightArrow")) return;
      break;
    case o.DOWN:
      if (s("onDownArrow")) return;
      break;
    case o.LEFT:
      if (s("onLeftArrow")) return;
      break;
    case o.SPACE:
      O && y(t) && t.preventDefault()
  }
  var l = e.props.keyBindingFn(t);
  if (null == l || "" === l) {
    if (n === o.SPACE && O && y(t)) {
      var u = r.replaceText(a.getCurrentContent(), a.getSelection(), "\xa0");
      e.update(i.push(a, u, "insert-characters"))
    }
    return
  }
  if ("undo" === l) return void b(t, a, e.update);
  if (t.preventDefault(), !(e.props.handleKeyCommand && c(e.props.handleKeyCommand(l, a, t.timeStamp)))) {
    var d = v(l, a, t);
    d !== a && e.update(d)
  }
}