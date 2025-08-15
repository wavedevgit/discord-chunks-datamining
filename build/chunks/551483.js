/** Chunk was on 91584 **/
/** chunk id: 551483, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk366885 = require("./366885.js"),
  Chunk574369 = require("./574369.js"),
  Chunk169774 = require("./169774.js"),
  a = Chunk169774.isPlatform("Mac OS X"),
  u = a && Chunk169774.isBrowser("Firefox < 29"),
  s = Chunk366885.hasCommandModifier,
  c = Chunk366885.isCtrlKeyCommand;

function l(t) {
  return a && t.altKey || c(t)
}
module.exports = function(t) {
  switch (t.keyCode) {
    case 66:
      return s(t) ? "bold" : null;
    case 68:
      return c(t) ? "delete" : null;
    case 72:
      return c(t) ? "backspace" : null;
    case 73:
      return s(t) ? "italic" : null;
    case 74:
      return s(t) ? "code" : null;
    case 75:
      return a && c(t) ? "secondary-cut" : null;
    case 77:
    case 79:
      return c(t) ? "split-block" : null;
    case 84:
      return a && c(t) ? "transpose-characters" : null;
    case 85:
      return s(t) ? "underline" : null;
    case 87:
      return a && c(t) ? "backspace-word" : null;
    case 89:
      if (c(t)) return a ? "secondary-paste" : "redo";
      return null;
    case 90:
      return (s(t) ? t.shiftKey ? "redo" : "undo" : null) || null;
    case i.RETURN:
      return "split-block";
    case i.DELETE:
      return !a && t.shiftKey ? null : l(t) ? "delete-word" : "delete";
    case i.BACKSPACE:
      return s(t) && a ? "backspace-to-start-of-line" : l(t) ? "backspace-word" : "backspace";
    case i.LEFT:
      return u && s(t) ? "move-selection-to-start-of-block" : null;
    case i.RIGHT:
      return u && s(t) ? "move-selection-to-end-of-block" : null;
    default:
      return null
  }
}