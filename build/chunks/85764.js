/** Chunk was on web.js **/
/** chunk id: 85764, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk724039 = require("./724039.js");

function i() {
  return (i = r || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function o(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk220115 = require("./220115.js"),
  Chunk595042 = require("./595042.js"),
  Chunk64700 = require("./64700.js"),
  Chunk550835 = require("./550835.js"),
  Chunk37998 = require("./37998.js"),
  Chunk670200 = require("./670200.js"),
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
  o(t, e);
  var n = t.prototype;
  return n.shouldComponentUpdate = function(e) {
    var t = this.props.editorState,
      n = e.editorState;
    if (t.getDirectionMap() !== n.getDirectionMap() || t.getSelection().getHasFocus() !== n.getSelection().getHasFocus()) returntrue;
    var r = n.getNativelyRenderedContent(),
      i = t.isInCompositionMode(),
      a = n.isInCompositionMode();
    if (t === n || null !== r && n.getCurrentContent() === r || i && a) returnfalse;
    var s = t.getCurrentContent(),
      o = n.getCurrentContent(),
      l = t.getDecorator(),
      c = n.getDecorator();
    return i !== a || s !== o || l !== c || n.mustForceSelection()
  }, n.render = function() {
    for (var e = this.props, t = e.blockRenderMap, n = e.blockRendererFn, r = e.blockStyleFn, s = e.customStyleMap, o = e.customStyleFn, d = e.editorState, h = e.editorKey, m = e.preventScroll, g = e.textDirectionality, E = d.getCurrentContent(), y = d.getSelection(), b = d.mustForceSelection(), O = d.getDecorator(), v = p(d.getDirectionMap()), A = E.getBlocksAsArray(), I = [], S = null, T = null, C = 0; C < A.length; C++) {
      var N = A[C],
        w = N.getKey(),
        R = N.getType(),
        P = n(N),
        D = true,
        x = true,
        L = true;
      P && (D = P.component, x = P.props, L = P.editable);
      var j = g || v.get(w),
        M = c.encode(w, 0, 0),
        k = {
          contentState: E,
          block: N,
          blockProps: x,
          blockStyleFn: r,
          customStyleMap: s,
          customStyleFn: o,
          decorator: O,
          direction: j,
          forceSelection: b,
          offsetKey: M,
          preventScroll: m,
          selection: y,
          tree: d.getBlockTree(w)
        },
        U = t.get(R) || t.get("unstyled"),
        G = U.wrapper,
        V = U.element || t.get("unstyled").element,
        F = N.getDepth(),
        B = "";
      if (r && (B = r(N)), "li" === V) {
        var H = T !== G || null === S || F > S;
        B = f(B, _(R, F, H, j))
      }
      var Y = D || l,
        W = {
          className: B,
          "data-block": true,
          "data-editor": h,
          "data-offset-key": M,
          key: w
        };
      true !== L && (W = a({}, W, {
        contentEditable: L,
        suppressContentEditableWarning: true
      }));
      var K = u.createElement(V, W, u.createElement(Y, i({}, k, {
        key: w
      })));
      I.push({
        block: K,
        wrapperTemplate: G,
        key: w,
        offsetKey: M
      }), S = G ? N.getDepth() : null, T = G
    }
    for (var z = [], q = 0; q < I.length;) {
      var Z = I[q];
      if (Z.wrapperTemplate) {
        var X = [];
        do X.push(I[q].block), q++; while (q < I.length && I[q].wrapperTemplate === Z.wrapperTemplate);
        var Q = u.cloneElement(Z.wrapperTemplate, {
          key: Z.key + "-wrap",
          "data-offset-key": Z.offsetKey
        }, X);
        z.push(Q)
      } else z.push(Z.block), q++
    }
    return u.createElement("div", {
      "data-contents": "true"
    }, z)
  }, t
}(Chunk64700.Component)