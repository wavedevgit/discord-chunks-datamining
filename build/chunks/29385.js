/** Chunk was on 38939 **/
/** chunk id: 29385, original params: t,e,r (module,exports,require) **/
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

function d(t, e, r) {
  var n = a.replaceWithFragment(t.getCurrentContent(), t.getSelection(), e);
  return u.push(t, n.set("entityMap", r), "insert-fragment")
}
module.exports = function(t, e) {
  e.preventDefault();
  var r = new o(e.clipboardData);
  if (!r.isRichText()) {
    var g = r.getFiles(),
      y = r.getText();
    if (g.length > 0) {
      if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g))) return;
      f(g, function(e) {
        if (e = e || y) {
          var r = t._latestEditorState,
            o = h(e),
            f = i.create({
              style: r.getCurrentInlineStyle(),
              entity: l(r.getCurrentContent(), r.getSelection())
            }),
            p = c.getCurrentBlockType(r),
            d = s.processText(o, f, p),
            g = n.createFromArray(d),
            v = a.replaceWithFragment(r.getCurrentContent(), r.getSelection(), g);
          t.update(u.push(r, v, "insert-fragment"))
        }
      });
      return
    }
  }
  var v = [],
    m = r.getText(),
    _ = r.getHTML(),
    b = t._latestEditorState;
  if (!(t.props.handlePastedText && p(t.props.handlePastedText(m, _, b)))) {
    if (m && (v = h(m)), !t.props.stripPastedStyles) {
      var S, w, k = t.getClipboard();
      if (r.isRichText() && k) {
        if (false !== _.indexOf(t.getEditorKey()) || 1 === v.length && 1 === k.size && k.first().getText() === m) return void t.update(d(t._latestEditorState, k))
      } else {
        if (k && r.types.includes("com.apple.webarchive") && !r.types.includes("text/html") && (S = v, w = k, S.length === w.size && w.valueSeq().every(function(t, e) {
            return t.getText() === S[e]
          }))) return void t.update(d(t._latestEditorState, k))
      }
      if (_) {
        var x = s.processHTML(_, t.props.blockRenderMap);
        if (x) {
          var C = x.contentBlocks,
            E = x.entityMap;
          if (C) {
            var O = n.createFromArray(C);
            t.update(d(t._latestEditorState, O, E));
            return
          }
        }
      }
      t.setClipboard(null)
    }
    if (v.length) {
      var D = i.create({
          style: b.getCurrentInlineStyle(),
          entity: l(b.getCurrentContent(), b.getSelection())
        }),
        K = c.getCurrentBlockType(b),
        T = s.processText(v, D, K),
        M = n.createFromArray(T);
      t.update(d(t._latestEditorState, M))
    }
  }
}