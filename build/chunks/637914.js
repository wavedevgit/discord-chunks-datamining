/** Chunk was on web.js **/
/** chunk id: 637914, original params: e,t,n (module,exports,re quire) **/
"use strict";

function r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var a, Chunk50153 = require("./50153.js"),
  Chunk117242 = require("./117242.js"),
  Chunk309987 = require("./309987.js"),
  Chunk329554 = require("./329554.js"),
  Chunk364918 = require("./364918.js"),
  Chunk946572 = require("./946572.js"),
  Chunk606166 = require("./606166.js"),
  Chunk703579 = require("./703579.js"),
  Chunk249252 = require("./249252.js"),
  Chunk40375 = require("./40375.js"),
  Chunk65183 = require("./65183.js"),
  g = Chunk65183.List,
  E = Chunk65183.Map,
  b = Chunk65183.OrderedSet,
  Chunk277844 = require("./277844.js"),
  Chunk139500 = require("./139500.js"),
  Chunk207303 = require("./207303.js"),
  Chunk81894 = require("./81894.js"),
  I = Chunk40375("draft_tree_data_support"),
  T = "&nbsp;",
  A = " ",
  C = RegExp("\r", "g"),
  N = RegExp("\n", "g"),
  P = RegExp("^\n", "g"),
  R = RegExp(T, "g"),
  w = RegExp("&#13;?", "g"),
  D = RegExp("&#8203;?", "g"),
  x = ["bold", "bolder", "500", "600", "700", "800", "900"],
  L = ["light", "lighter", "normal", "100", "200", "300", "400"],
  j = ["className", "href", "rel", "target", "title"],
  M = ["alt", "className", "height", "src", "width"],
  k = (i(a = {}, Chunk606166("public/DraftStyleDefault/depth0"), 0), i(a, Chunk606166("public/DraftStyleDefault/depth1"), 1), i(a, Chunk606166("public/DraftStyleDefault/depth2"), 2), i(a, Chunk606166("public/DraftStyleDefault/depth3"), 3), i(a, Chunk606166("public/DraftStyleDefault/depth4"), 4), a),
  U = E({
    b: "BOLD",
    code: "CODE",
    del: "STRIKETHROUGH",
    em: "ITALIC",
    i: "ITALIC",
    s: "STRIKETHROUGH",
    strike: "STRIKETHROUGH",
    strong: "BOLD",
    u: "UNDERLINE",
    mark: "HIGHLIGHT"
  }),
  G = function(e) {
    var t = {};
    return e.mapKeys(function(e, n) {
      var r = [n.element];
      true !== n.aliasedElements && r.push.apply(r, n.aliasedElements), r.forEach(function(n) {
        true === t[n] ? t[n] = e : "string" == typeof t[n] ? t[n] = [t[n], e] : t[n].push(e)
      })
    }), E(t)
  },
  Z = function(e) {
    var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    return Object.keys(k).some(function(n) {
      e.classList.contains(n) && (t = k[n])
    }), t
  },
  B = function(e) {
    if (!y(e)) returnfalse;
    var t = e;
    return !!(t.href && ("http:" === t.protocol || "https:" === t.protocol || "mailto:" === t.protocol))
  },
  F = function(e) {
    if (!S(e)) returnfalse;
    var t = e;
    return !!(t.attributes.getNamedItem("src") && t.attributes.getNamedItem("src").value)
  },
  V = function(e, t) {
    if (!v(e)) return t;
    var n = e,
      r = n.style.fontWeight,
      i = n.style.fontStyle,
      a = n.style.textDecoration;
    return t.withMutations(function(e) {
      x.indexOf(r) >= 0 ? e.add("BOLD") : L.indexOf(r) >= 0 && e.remove("BOLD"), "italic" === i ? e.add("ITALIC") : "normal" === i && e.remove("ITALIC"), "underline" === a && e.add("UNDERLINE"), "line-through" === a && e.add("STRIKETHROUGH"), "none" === a && (e.remove("UNDERLINE"), e.remove("STRIKETHROUGH"))
    })
  },
  H = function(e) {
    return "ul" === e || "ol" === e
  },
  Y = function() {
    function e(e, t) {
      i(this, "characterList", g()), i(this, "currentBlockType", "unstyled"), i(this, "currentDepth", 0), i(this, "currentEntity", null), i(this, "currentText", ""), i(this, "wrapper", null), i(this, "blockConfigs", []), i(this, "contentBlocks", []), i(this, "entityMap", u), i(this, "blockTypeMap", true), i(this, "disambiguate", true), this.clear(), this.blockTypeMap = e, this.disambiguate = t
    }
    var t = module.prototype;
    return exports.clear = function() {
      this.characterList = g(), this.blockConfigs = [], this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentText = "", this.entityMap = Chunk364918, this.wrapper = null, this.contentBlocks = []
    }, exports.addDOMNode = function(e) {
      var t;
      return this.contentBlocks = [], this.currentDepth = 0, (t = this.blockConfigs).push.apply(t, this._toBlockConfigs([e], b())), this._trimCurrentText(), "" !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()), this
    }, exports.getContentBlocks = function() {
      return 0 === this.contentBlocks.length && (I ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)), {
        contentBlocks: this.contentBlocks,
        entityMap: this.entityMap
      }
    }, exports._makeBlockConfig = function() {
      var e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        t = r({
          key: module.key || Chunk703579(),
          type: this.currentBlockType,
          text: this.currentText,
          characterList: this.characterList,
          depth: this.currentDepth,
          parent: null,
          children: g(),
          prevSibling: null,
          nextSibling: null,
          childConfigs: []
        }, module);
      return this.characterList = g(), this.currentBlockType = "unstyled", this.currentText = "", exports
    }, exports._toBlockConfigs = function(e, t) {
      for (var n = [], r = 0; r < e.length; r++) {
        var i = e[r],
          a = i.nodeName.toLowerCase();
        if ("body" === a || H(a)) {
          this._trimCurrentText(), "" !== this.currentText && n.push(this._makeBlockConfig());
          var o = this.currentDepth,
            s = this.wrapper;
          H(a) && (this.wrapper = a, H(s) && this.currentDepth++), n.push.apply(n, this._toBlockConfigs(Array.from(i.childNodes), t)), this.currentDepth = o, this.wrapper = s;
          continue
        }
        var l = this.blockTypeMap.get(a);
        if (true !== l) {
          this._trimCurrentText(), "" !== this.currentText && n.push(this._makeBlockConfig());
          var c = this.currentDepth,
            u = this.wrapper;
          if (this.wrapper = "pre" === a ? "pre" : this.wrapper, "string" != typeof l && (l = this.disambiguate(a, this.wrapper) || l[0] || "unstyled"), !I && v(i) && ("unordered-list-item" === l || "ordered-list-item" === l)) {
            var d = i;
            this.currentDepth = Z(d, this.currentDepth)
          }
          var f = p(),
            _ = this._toBlockConfigs(Array.from(i.childNodes), t);
          this._trimCurrentText(), n.push(this._makeBlockConfig({
            key: f,
            childConfigs: _,
            type: l
          })), this.currentDepth = c, this.wrapper = u;
          continue
        }
        if ("#text" === a) {
          this._addTextNode(i, t);
          continue
        }
        if ("br" === a) {
          this._addBreakNode(i, t);
          continue
        }
        if (F(i)) {
          this._addImgNode(i, t);
          continue
        }
        if (B(i)) {
          this._addAnchorNode(i, n, t);
          continue
        }
        var m = t;
        U.has(a) && (m = m.add(U.get(a))), m = V(i, m), n.push.apply(n, this._toBlockConfigs(Array.from(i.childNodes), m))
      }
      return n
    }, exports._appendText = function(e, t) {
      this.currentText += e;
      var n, r = o.create({
        style: t,
        entity: this.currentEntity
      });
      this.characterList = (n = this.characterList).push.apply(n, Array(e.length).fill(r))
    }, exports._trimCurrentText = function() {
      var e = this.currentText.length,
        t = module - this.currentText.trimLeft().length,
        n = this.currentText.trimRight().length,
        r = this.characterList.findEntry(function(e) {
          return null !== e.getEntity()
        });
      (t = true !== r ? Math.min(exports, r[0]) : exports) > (n = true !== (r = this.characterList.reverse().findEntry(function(e) {
        return null !== e.getEntity()
      })) ? Math.max(require, module - r[0]) : require) ? (this.currentText = "", this.characterList = g()) : (this.currentText = this.currentText.slice(exports, require), this.characterList = this.characterList.slice(exports, require))
    }, exports._addTextNode = function(e, t) {
      var n = e.textContent;
      "" === n.trim() && "pre" !== this.wrapper && (n = " "), "pre" !== this.wrapper && (n = (n = n.replace(P, "")).replace(N, A)), this._appendText(n, t)
    }, exports._addBreakNode = function(e, t) {
      O(e) && this._appendText("\n", t)
    }, exports._addImgNode = function(e, t) {
      if (S(e)) {
        var n = e,
          r = {};
        M.forEach(function(e) {
          var t = n.getAttribute(e);
          t && (r[e] = t)
        }), this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", r), m("draftjs_fix_paste_for_img") ? "presentation" !== n.getAttribute("role") && this._appendText("\uD83D\uDCF7", t) : this._appendText("\uD83D\uDCF7", t), this.currentEntity = null
      }
    }, exports._addAnchorNode = function(e, t, n) {
      if (y(e)) {
        var r = e,
          i = {};
        j.forEach(function(e) {
          var t = r.getAttribute(e);
          t && (i[e] = t)
        }), i.url = new d(r.href).toString(), this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", i || {}), t.push.apply(t, this._toBlockConfigs(Array.from(e.childNodes), n)), this.currentEntity = null
      }
    }, exports._toContentBlocks = function(e) {
      for (var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null, n = e.length - 1, i = 0; i <= n; i++) {
        var a = e[i];
        a.parent = t, a.prevSibling = i > 0 ? e[i - 1].key : null, a.nextSibling = i < n ? e[i + 1].key : null, a.children = g(a.childConfigs.map(function(e) {
          return e.key
        })), this.contentBlocks.push(new l(r({}, a))), this._toContentBlocks(a.childConfigs, a.key)
      }
    }, exports._hoistContainersInBlockConfigs = function(e) {
      var t = this;
      return g(e).flatMap(function(e) {
        return "unstyled" !== e.type || "" !== e.text ? [e] : t._hoistContainersInBlockConfigs(e.childConfigs)
      })
    }, exports._toFlatContentBlocks = function(e) {
      var t = this;
      this._hoistContainersInBlockConfigs(e).forEach(function(e) {
        var n = t._extractTextFromBlockConfigs(e.childConfigs),
          i = n.text,
          a = n.characterList;
        t.contentBlocks.push(new s(r({}, e, {
          text: e.text + i,
          characterList: e.characterList.concat(a)
        })))
      })
    }, exports._extractTextFromBlockConfigs = function(e) {
      for (var t = e.length - 1, n = "", r = g(), i = 0; i <= t; i++) {
        var a = e[i];
        n += a.text, r = r.concat(a.characterList), "" !== n && "unstyled" !== a.type && (n += "\n", r = r.push(r.last()));
        var o = this._extractTextFromBlockConfigs(a.childConfigs);
        n += o.text, r = r.concat(o.characterList)
      }
      return {
        text: n,
        characterList: r
      }
    }, module
  }();
module.exports = function(e) {
  var t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : _,
    n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : c,
    r = t(e = e.trim().replace(C, "").replace(R, A).replace(w, "").replace(D, ""));
  return r ? new Y(G(n), function(e, t) {
    return "li" === e ? "ol" === t ? "ordered-list-item" : "unordered-list-item" : null
  }).addDOMNode(r).getContentBlocks() : null
}