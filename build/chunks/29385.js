/** Chunk was on web.js **/
/** chunk id: 29385, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk414501 = require("./414501.js"),
  Chunk387739 = require("./387739.js"),
  Chunk743595 = require("./743595.js"),
  Chunk954055 = require("./954055.js"),
  Chunk284819 = require("./284819.js"),
  Chunk869639 = require("./869639.js"),
  Chunk770933 = require("./770933.js"),
  Chunk197576 = require("./197576.js"),
  Chunk809206 = require("./809206.js"),
  Chunk4323 = require("./4323.js"),
  Chunk101813 = require("./101813.js");

function _(e, t, n) {
  var r = s.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
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
            a = p(t),
            d = i.create({
              style: n.getCurrentInlineStyle(),
              entity: u(n.getCurrentContent(), n.getSelection())
            }),
            f = c.getCurrentBlockType(n),
            _ = o.processText(a, d, f),
            h = r.createFromArray(_),
            m = s.replaceWithFragment(n.getCurrentContent(), n.getSelection(), h);
          e.update(l.push(n, m, "insert-fragment"))
        }
      });
      return
    }
  }
  var E = [],
    y = n.getText(),
    b = n.getHTML(),
    O = e._latestEditorState;
  if (!(e.props.handlePastedText && f(e.props.handlePastedText(y, b, O)))) {
    if (y && (E = p(y)), !e.props.stripPastedStyles) {
      var v = e.getClipboard();
      if (n.isRichText() && v) {
        if (false !== b.indexOf(e.getEditorKey()) || 1 === E.length && 1 === v.size && v.first().getText() === y) return void e.update(_(e._latestEditorState, v))
      } else if (v && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && h(E, v)) return void e.update(_(e._latestEditorState, v));
      if (b) {
        var A = o.processHTML(b, e.props.blockRenderMap);
        if (A) {
          var I = A.contentBlocks,
            S = A.entityMap;
          if (I) {
            var T = r.createFromArray(I);
            e.update(_(e._latestEditorState, T, S));
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
        R = o.processText(E, C, N),
        w = r.createFromArray(R);
      e.update(_(e._latestEditorState, w))
    }
  }
}