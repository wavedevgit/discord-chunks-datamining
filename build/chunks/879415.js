/** Chunk was on web.js **/
/** chunk id: 879415, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk179361 = require("./179361.js"),
  Chunk76466 = require("./76466.js"),
  Chunk198392 = require("./198392.js"),
  Chunk441710 = require("./441710.js"),
  Chunk814422 = require("./814422.js"),
  Chunk102736 = require("./102736.js"),
  Chunk173548 = require("./173548.js"),
  Chunk878694 = require("./878694.js"),
  Chunk99922 = require("./99922.js"),
  Chunk510898 = require("./510898.js"),
  Chunk419166 = require("./419166.js");

function p(e, t, n) {
  var r = o.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
  return l.push(e, r.set("entityMap", n), "insert-fragment")
}

function h(e, t) {
  return e.length === t.size && t.valueSeq().every(function(t, n) {
    return t.getText() === e[n]
  })
}
module.exports = function(e, t) {
  t.preventDefault();
  var n = new a(t.clipboardData);
  if (!n.isRichText()) {
    var m = n.getFiles(),
      g = n.getText();
    if (m.length > 0) {
      if (e.props.handlePastedFiles && f(e.props.handlePastedFiles(m))) return;
      d(m, function(t) {
        if (t = t || g) {
          var n = e._latestEditorState,
            a = _(t),
            d = i.create({
              style: n.getCurrentInlineStyle(),
              entity: u(n.getCurrentContent(), n.getSelection())
            }),
            f = c.getCurrentBlockType(n),
            p = s.processText(a, d, f),
            h = r.createFromArray(p),
            m = o.replaceWithFragment(n.getCurrentContent(), n.getSelection(), h);
          e.update(l.push(n, m, "insert-fragment"))
        }
      });
      return
    }
  }
  var E = [],
    b = n.getText(),
    y = n.getHTML(),
    O = e._latestEditorState;
  if (!(e.props.handlePastedText && f(e.props.handlePastedText(b, y, O)))) {
    if (b && (E = _(b)), !e.props.stripPastedStyles) {
      var v = e.getClipboard();
      if (n.isRichText() && v) {
        if (false !== y.indexOf(e.getEditorKey()) || 1 === E.length && 1 === v.size && v.first().getText() === b) return void e.update(p(e._latestEditorState, v))
      } else if (v && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && h(E, v)) return void e.update(p(e._latestEditorState, v));
      if (y) {
        var I = s.processHTML(y, e.props.blockRenderMap);
        if (I) {
          var T = I.contentBlocks,
            S = I.entityMap;
          if (T) {
            var A = r.createFromArray(T);
            e.update(p(e._latestEditorState, A, S));
            return
          }
        }
      }
      e.setClipboard(null)
    }
    if (E.length) {
      var C = i.create({
          style: O.getCurrentInlineStyle(),
          entity: u(O.getCurrentContent(), O.getSelection())
        }),
        N = c.getCurrentBlockType(O),
        R = s.processText(E, C, N),
        P = r.createFromArray(R);
      e.update(p(e._latestEditorState, P))
    }
  }
}