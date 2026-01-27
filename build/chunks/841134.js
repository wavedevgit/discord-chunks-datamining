/** Chunk was on 38939 **/
/** chunk id: 841134, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk724039 = require("./724039.js");

function i() {
  return (i = n || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    return t
  }).apply(this, arguments)
}
var Chunk868715 = require("./868715.js"),
  Chunk595042 = require("./595042.js"),
  Chunk64700 = require("./64700.js"),
  Chunk670200 = require("./670200.js");
module.exports = function(t) {
  function e() {
    return t.apply(this, arguments) || this
  }
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
  var r = e.prototype;
  return r.shouldComponentUpdate = function(t) {
    var e = this.props.editorState,
      r = t.editorState;
    if (e.getDirectionMap() !== r.getDirectionMap() || e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) returntrue;
    var n = r.getNativelyRenderedContent(),
      i = e.isInCompositionMode(),
      o = r.isInCompositionMode();
    if (e === r || null !== n && r.getCurrentContent() === n || i && o) returnfalse;
    var a = e.getCurrentContent(),
      s = r.getCurrentContent(),
      u = e.getDecorator(),
      c = r.getDecorator();
    return i !== o || a !== s || u !== c || r.mustForceSelection()
  }, r.render = function() {
    for (var t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, c = t.customStyleMap, l = t.customStyleFn, f = t.editorState, p = t.editorKey, h = t.textDirectionality, d = f.getCurrentContent(), g = f.getSelection(), y = f.mustForceSelection(), v = f.getDecorator(), m = u(f.getDirectionMap()), _ = d.getBlocksAsArray()[0], b = [], S = _; S;) {
      var w = S.getKey(),
        k = {
          blockRenderMap: e,
          blockRendererFn: r,
          blockStyleFn: n,
          contentState: d,
          customStyleFn: l,
          customStyleMap: c,
          decorator: v,
          editorKey: p,
          editorState: f,
          forceSelection: y,
          selection: g,
          block: S,
          direction: h || m.get(w),
          tree: f.getBlockTree(w)
        },
        x = (e.get(S.getType()) || e.get("unstyled")).wrapper;
      b.push({
        block: s.createElement(o, i({
          key: w
        }, k)),
        wrapperTemplate: x,
        key: w,
        offsetKey: a.encode(w, 0, 0)
      });
      var C = S.getNextSiblingKey();
      S = C ? d.getBlockForKey(C) : null
    }
    for (var E = [], O = 0; O < b.length;) {
      var D = b[O];
      if (D.wrapperTemplate) {
        var K = [];
        do K.push(b[O].block), O++; while (O < b.length && b[O].wrapperTemplate === D.wrapperTemplate);
        var T = s.cloneElement(D.wrapperTemplate, {
          key: D.key + "-wrap",
          "data-offset-key": D.offsetKey
        }, K);
        E.push(T)
      } else E.push(D.block), O++
    }
    return s.createElement("div", {
      "data-contents": "true"
    }, E)
  }, e
}(Chunk64700.Component)