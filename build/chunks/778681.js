/** Chunk was on web.js **/
/** chunk id: 778681, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk126182 = require("./126182.js"),
  Chunk50153 = require("./50153.js"),
  Chunk198392 = require("./198392.js"),
  Chunk720218 = require("./720218.js"),
  Chunk155959 = require("./155959.js"),
  Chunk384404 = require("./384404.js"),
  Chunk705586 = require("./705586.js"),
  Chunk520480 = require("./520480.js"),
  Chunk527479 = require("./527479.js"),
  Chunk262279 = require("./262279.js"),
  Chunk185546 = require("./185546.js");

function _(e, t, n) {
  var r = o.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
  return l.push(e, r.set("entityMap", n), "insert-fragment")
}

function m(e, t) {
  return e.length === t.size && t.valueSeq().every(function(t, n) {
    return t.getText() === e[n]
  })
}
module.exports = function(e, t) {
  t.preventDefault();
  var n = new a(t.clipboardData);
  if (!n.isRichText()) {
    var h = n.getFiles(),
      g = n.getText();
    if (h.length > 0) {
      if (e.props.handlePastedFiles && f(e.props.handlePastedFiles(h))) return;
      d(h, function(t) {
        if (t = t || g) {
          var n = e._latestEditorState,
            a = p(t),
            d = i.create({
              style: n.getCurrentInlineStyle(),
              entity: u(n.getCurrentContent(), n.getSelection())
            }),
            f = c.getCurrentBlockType(n),
            _ = s.processText(a, d, f),
            m = r.createFromArray(_),
            h = o.replaceWithFragment(n.getCurrentContent(), n.getSelection(), m);
          e.update(l.push(n, h, "insert-fragment"))
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
    if (b && (E = p(b)), !e.props.stripPastedStyles) {
      var v = e.getClipboard();
      if (n.isRichText() && v) {
        if (false !== y.indexOf(e.getEditorKey()) || 1 === E.length && 1 === v.size && v.first().getText() === b) return void e.update(_(e._latestEditorState, v))
      } else if (v && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && m(E, v)) return void e.update(_(e._latestEditorState, v));
      if (y) {
        var S = s.processHTML(y, e.props.blockRenderMap);
        if (S) {
          var I = S.contentBlocks,
            T = S.entityMap;
          if (I) {
            var A = r.createFromArray(I);
            e.update(_(e._latestEditorState, A, T));
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
        P = s.processText(E, C, N),
        R = r.createFromArray(P);
      e.update(_(e._latestEditorState, R))
    }
  }
}