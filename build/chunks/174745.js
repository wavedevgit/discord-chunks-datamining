/** Chunk was on web.js **/
/** chunk id: 174745, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk381538 = require("./381538.js");

function i() {
  return (i = Chunk381538 || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function o(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      a(e, t, n[t])
    })
  }
  return e
}

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk848643 = require("./848643.js"),
  Chunk964930 = require("./964930.js"),
  Chunk473749 = require("./473749.js"),
  Chunk606166 = require("./606166.js"),
  Chunk679785 = require("./679785.js"),
  Chunk467159 = require("./467159.js"),
  _ = function(e, t, n, r) {
    return d({
      "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === e,
      "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === e,
      "public/DraftStyleDefault/reset": n,
      "public/DraftStyleDefault/depth0": 0 === t,
      "public/DraftStyleDefault/depth1": 1 === t,
      "public/DraftStyleDefault/depth2": 2 === t,
      "public/DraftStyleDefault/depth3": 3 === t,
      "public/DraftStyleDefault/depth4": t >= 4,
      "public/DraftStyleDefault/listLTR": "LTR" === r,
      "public/DraftStyleDefault/listRTL": "RTL" === r
    })
  };
module.exports = function(e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  s(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    var t = this.props.editorState,
      n = e.editorState;
    if (t.getDirectionMap() !== n.getDirectionMap() || t.getSelection().getHasFocus() !== n.getSelection().getHasFocus()) returntrue;
    var r = n.getNativelyRenderedContent(),
      i = t.isInCompositionMode(),
      o = n.isInCompositionMode();
    if (t === n || null !== r && n.getCurrentContent() === r || i && o) returnfalse;
    var a = t.getCurrentContent(),
      s = n.getCurrentContent(),
      l = t.getDecorator(),
      c = n.getDecorator();
    return i !== o || a !== s || l !== c || n.mustForceSelection()
  }, n.render = function() {
    for (var e = this.props, t = e.blockRenderMap, n = e.blockRendererFn, r = e.blockStyleFn, a = e.customStyleMap, s = e.customStyleFn, d = e.editorState, m = e.editorKey, h = e.preventScroll, g = e.textDirectionality, E = d.getCurrentContent(), b = d.getSelection(), y = d.mustForceSelection(), O = d.getDecorator(), v = p(d.getDirectionMap()), S = E.getBlocksAsArray(), I = [], T = null, C = null, A = 0; A < S.length; A++) {
      var N = S[A],
        P = N.getKey(),
        R = N.getType(),
        w = n(N),
        D = true,
        x = true,
        L = true;
      w && (D = w.component, x = w.props, L = w.editable);
      var j = g || v.get(P),
        M = c.encode(P, 0, 0),
        k = {
          contentState: E,
          block: N,
          blockProps: x,
          blockStyleFn: r,
          customStyleMap: a,
          customStyleFn: s,
          decorator: O,
          direction: j,
          forceSelection: y,
          offsetKey: M,
          preventScroll: h,
          selection: b,
          tree: d.getBlockTree(P)
        },
        U = t.get(R) || t.get("unstyled"),
        G = U.wrapper,
        Z = U.element || t.get("unstyled").element,
        F = N.getDepth(),
        B = "";
      if (r && (B = r(N)), "li" === Z) {
        var V = C !== G || null === T || F > T;
        B = f(B, _(R, F, V, j))
      }
      var H = D || l,
        Y = {
          className: B,
          "data-block": true,
          "data-editor": m,
          "data-offset-key": M,
          key: P
        };
      true !== L && (Y = o({}, Y, {
        contentEditable: L,
        suppressContentEditableWarning: true
      }));
      var W = u.createElement(Z, Y, u.createElement(H, i({}, k, {
        key: P
      })));
      I.push({
        block: W,
        wrapperTemplate: G,
        key: P,
        offsetKey: M
      }), T = G ? N.getDepth() : null, C = G
    }
    for (var K = [], z = 0; z < I.length;) {
      var q = I[z];
      if (q.wrapperTemplate) {
        var Q = [];
        do Q.push(I[z].block), z++; while (z < I.length && I[z].wrapperTemplate === q.wrapperTemplate);
        var X = u.cloneElement(q.wrapperTemplate, {
          key: q.key + "-wrap",
          "data-offset-key": q.offsetKey
        }, Q);
        K.push(X)
      } else K.push(q.block), z++
    }
    return u.createElement("div", {
      "data-contents": "true"
    }, K)
  }, t
}(Chunk473749.Component)