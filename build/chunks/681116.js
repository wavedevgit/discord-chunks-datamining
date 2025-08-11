/** Chunk was on web.js **/
/** chunk id: 681116, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk512972 = require("./512972.js"),
  Chunk359282 = require("./359282.js"),
  Chunk198392 = require("./198392.js"),
  Chunk621796 = require("./621796.js"),
  Chunk659796 = require("./659796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk505904 = require("./505904.js"),
  Chunk596464 = require("./596464.js"),
  Chunk992456 = require("./992456.js"),
  Chunk352582 = require("./352582.js"),
  Chunk108665 = require("./108665.js");

function p(e, t, n) {
  var r = a.replaceWithFragment(e.getCurrentContent(), e.getSelection(), t);
  return l.push(e, r.set("entityMap", n), "insert-fragment")
}

function h(e, t) {
  return e.length === t.size && t.valueSeq().every(function(t, n) {
    return t.getText() === e[n]
  })
}
module.exports = function(e, t) {
  t.preventDefault();
  var n = new o(t.clipboardData);
  if (!n.isRichText()) {
    var m = n.getFiles(),
      g = n.getText();
    if (m.length > 0) {
      if (e.props.handlePastedFiles && f(e.props.handlePastedFiles(m))) return;
      d(m, function(t) {
        if (t = t || g) {
          var n = e._latestEditorState,
            o = _(t),
            d = i.create({
              style: n.getCurrentInlineStyle(),
              entity: u(n.getCurrentContent(), n.getSelection())
            }),
            f = c.getCurrentBlockType(n),
            p = s.processText(o, d, f),
            h = r.createFromArray(p),
            m = a.replaceWithFragment(n.getCurrentContent(), n.getSelection(), h);
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
      var N = i.create({
          style: O.getCurrentInlineStyle(),
          entity: u(O.getCurrentContent(), O.getSelection())
        }),
        C = c.getCurrentBlockType(O),
        R = s.processText(E, N, C),
        P = r.createFromArray(R);
      e.update(p(e._latestEditorState, P))
    }
  }
}