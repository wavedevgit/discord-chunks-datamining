/** Chunk was on web.js **/
/** chunk id: 673776, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk868361 = require("./868361.js"),
  Chunk63996 = require("./63996.js"),
  Chunk573750 = require("./573750.js"),
  s = Chunk573750.isPlatform("Mac OS X"),
  o = s && Chunk573750.isBrowser("Firefox < 29"),
  l = Chunk868361.hasCommandModifier,
  c = Chunk868361.isCtrlKeyCommand;

function u(e) {
  return s && e.altKey || c(e)
}

function d(e) {
  return l(e) ? e.shiftKey ? "redo" : "undo" : null
}

function f(e) {
  return !s && e.shiftKey ? null : u(e) ? "delete-word" : "delete"
}

function p(e) {
  return l(e) && s ? "backspace-to-start-of-line" : u(e) ? "backspace-word" : "backspace"
}
module.exports = function(e) {
  switch (e.keyCode) {
    case 66:
      return l(e) ? "bold" : null;
    case 68:
      return c(e) ? "delete" : null;
    case 72:
      return c(e) ? "backspace" : null;
    case 73:
      return l(e) ? "italic" : null;
    case 74:
      return l(e) ? "code" : null;
    case 75:
      return s && c(e) ? "secondary-cut" : null;
    case 77:
    case 79:
      return c(e) ? "split-block" : null;
    case 84:
      return s && c(e) ? "transpose-characters" : null;
    case 85:
      return l(e) ? "underline" : null;
    case 87:
      return s && c(e) ? "backspace-word" : null;
    case 89:
      if (c(e)) return s ? "secondary-paste" : "redo";
      return null;
    case 90:
      return d(e) || null;
    case i.RETURN:
      return "split-block";
    case i.DELETE:
      return f(e);
    case i.BACKSPACE:
      return p(e);
    case i.LEFT:
      return o && l(e) ? "move-selection-to-start-of-block" : null;
    case i.RIGHT:
      return o && l(e) ? "move-selection-to-end-of-block" : null;
    default:
      return null
  }
}