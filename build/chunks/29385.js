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
    b = n.getText(),
    y = n.getHTML(),
    O = e._latestEditorState;
  if (!(e.props.handlePastedText && f(e.props.handlePastedText(b, y, O)))) {
    if (b && (E = p(b)), !e.props.stripPastedStyles) {
      var A = e.getClipboard();
      if (n.isRichText() && A) {
        if (false !== y.indexOf(e.getEditorKey()) || 1 === E.length && 1 === A.size && A.first().getText() === b) return void e.update(_(e._latestEditorState, A))
      } else if (A && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && h(E, A)) return void e.update(_(e._latestEditorState, A));
      if (y) {
        var v = o.processHTML(y, e.props.blockRenderMap);
        if (v) {
          var S = v.contentBlocks,
            I = v.entityMap;
          if (S) {
            var T = r.createFromArray(S);
            e.update(_(e._latestEditorState, T, I));
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