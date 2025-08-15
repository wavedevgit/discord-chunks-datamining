/** Chunk was on 91584 **/
/** chunk id: 940660, original params: t,e,r (module,exports,require) **/
"use strict";

function n(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      i(t, e, r[e])
    })
  }
  return t
}

function i(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}
var o, Chunk76466 = require("./76466.js"),
  Chunk988231 = require("./988231.js"),
  Chunk470427 = require("./470427.js"),
  Chunk901607 = require("./901607.js"),
  Chunk928460 = require("./928460.js"),
  Chunk946572 = require("./946572.js"),
  Chunk606166 = require("./606166.js"),
  Chunk656367 = require("./656367.js"),
  Chunk439000 = require("./439000.js"),
  Chunk740336 = require("./740336.js"),
  Chunk65183 = require("./65183.js"),
  v = Chunk65183.List,
  m = Chunk65183.Map,
  _ = Chunk65183.OrderedSet,
  Chunk332477 = require("./332477.js"),
  Chunk205558 = require("./205558.js"),
  Chunk246974 = require("./246974.js"),
  Chunk997962 = require("./997962.js"),
  k = Chunk740336("draft_tree_data_support"),
  C = RegExp("\r", "g"),
  E = RegExp("\n", "g"),
  D = RegExp("^\n", "g"),
  O = RegExp("&nbsp;", "g"),
  K = RegExp("&#13;?", "g"),
  T = RegExp("&#8203;?", "g"),
  M = ["bold", "bolder", "500", "600", "700", "800", "900"],
  A = ["light", "lighter", "normal", "100", "200", "300", "400"],
  I = ["className", "href", "rel", "target", "title"],
  B = ["alt", "className", "height", "src", "width"],
  L = (i(o = {}, Chunk606166("public/DraftStyleDefault/depth0"), 0), i(o, Chunk606166("public/DraftStyleDefault/depth1"), 1), i(o, Chunk606166("public/DraftStyleDefault/depth2"), 2), i(o, Chunk606166("public/DraftStyleDefault/depth3"), 3), i(o, Chunk606166("public/DraftStyleDefault/depth4"), 4), o),
  R = m({
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
  N = function(t) {
    var e = {};
    return t.mapKeys(function(t, r) {
      var n = [r.element];
      true !== r.aliasedElements && n.push.apply(n, r.aliasedElements), n.forEach(function(r) {
        true === e[r] ? e[r] = t : "string" == typeof e[r] ? e[r] = [e[r], t] : e[r].push(t)
      })
    }), m(e)
  },
  F = function(t) {
    var e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : 0;
    return Object.keys(L).some(function(r) {
      t.classList.contains(r) && (e = L[r])
    }), e
  },
  z = function(t, e) {
    if (!w(t)) return e;
    var r = t.style.fontWeight,
      n = t.style.fontStyle,
      i = t.style.textDecoration;
    return e.withMutations(function(t) {
      M.indexOf(r) >= 0 ? t.add("BOLD") : A.indexOf(r) >= 0 && t.remove("BOLD"), "italic" === n ? t.add("ITALIC") : "normal" === n && t.remove("ITALIC"), "underline" === i && t.add("UNDERLINE"), "line-through" === i && t.add("STRIKETHROUGH"), "none" === i && (t.remove("UNDERLINE"), t.remove("STRIKETHROUGH"))
    })
  },
  P = function(t) {
    return "ul" === t || "ol" === t
  },
  j = function() {
    function t(t, e) {
      i(this, "characterList", v()), i(this, "currentBlockType", "unstyled"), i(this, "currentDepth", 0), i(this, "currentEntity", null), i(this, "currentText", ""), i(this, "wrapper", null), i(this, "blockConfigs", []), i(this, "contentBlocks", []), i(this, "entityMap", l), i(this, "blockTypeMap", true), i(this, "disambiguate", true), this.clear(), this.blockTypeMap = t, this.disambiguate = e
    }
    var e = module.prototype;
    return exports.clear = function() {
      this.characterList = v(), this.blockConfigs = [], this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentText = "", this.entityMap = Chunk928460, this.wrapper = null, this.contentBlocks = []
    }, exports.addDOMNode = function(t) {
      var e;
      return this.contentBlocks = [], this.currentDepth = 0, (e = this.blockConfigs).push.apply(e, this._toBlockConfigs([t], _())), this._trimCurrentText(), "" !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()), this
    }, exports.getContentBlocks = function() {
      return 0 === this.contentBlocks.length && (k ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)), {
        contentBlocks: this.contentBlocks,
        entityMap: this.entityMap
      }
    }, exports._makeBlockConfig = function() {
      var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        e = n({
          key: module.key || Chunk656367(),
          type: this.currentBlockType,
          text: this.currentText,
          characterList: this.characterList,
          depth: this.currentDepth,
          parent: null,
          children: v(),
          prevSibling: null,
          nextSibling: null,
          childConfigs: []
        }, module);
      return this.characterList = v(), this.currentBlockType = "unstyled", this.currentText = "", exports
    }, exports._toBlockConfigs = function(t, e) {
      for (var r = [], n = 0; n < t.length; n++) {
        var i = t[n],
          o = i.nodeName.toLowerCase();
        if ("body" === o || P(o)) {
          this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
          var a = this.currentDepth,
            u = this.wrapper;
          P(o) && (this.wrapper = o, P(u) && this.currentDepth++), r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), e)), this.currentDepth = a, this.wrapper = u;
          continue
        }
        var s = this.blockTypeMap.get(o);
        if (true !== s) {
          this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
          var c = this.currentDepth,
            l = this.wrapper;
          this.wrapper = "pre" === o ? "pre" : this.wrapper, "string" != typeof s && (s = this.disambiguate(o, this.wrapper) || s[0] || "unstyled"), !k && w(i) && ("unordered-list-item" === s || "ordered-list-item" === s) && (this.currentDepth = F(i, this.currentDepth));
          var f = h(),
            p = this._toBlockConfigs(Array.from(i.childNodes), e);
          this._trimCurrentText(), r.push(this._makeBlockConfig({
            key: f,
            childConfigs: p,
            type: s
          })), this.currentDepth = c, this.wrapper = l;
          continue
        }
        if ("#text" === o) {
          this._addTextNode(i, e);
          continue
        }
        if ("br" === o) {
          this._addBreakNode(i, e);
          continue
        }
        if (x(i) && i.attributes.getNamedItem("src") && i.attributes.getNamedItem("src").value) {
          this._addImgNode(i, e);
          continue
        }
        if (b(i) && i.href && ("http:" === i.protocol || "https:" === i.protocol || "mailto:" === i.protocol)) {
          this._addAnchorNode(i, r, e);
          continue
        }
        var d = e;
        R.has(o) && (d = d.add(R.get(o))), d = z(i, d), r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), d))
      }
      return r
    }, exports._appendText = function(t, e) {
      this.currentText += t;
      var r, n = a.create({
        style: e,
        entity: this.currentEntity
      });
      this.characterList = (r = this.characterList).push.apply(r, Array(t.length).fill(n))
    }, exports._trimCurrentText = function() {
      var t = this.currentText.length,
        e = module - this.currentText.trimLeft().length,
        r = this.currentText.trimRight().length,
        n = this.characterList.findEntry(function(t) {
          return null !== t.getEntity()
        });
      (e = true !== n ? Math.min(exports, n[0]) : exports) > (r = true !== (n = this.characterList.reverse().findEntry(function(t) {
        return null !== t.getEntity()
      })) ? Math.max(require, module - n[0]) : require) ? (this.currentText = "", this.characterList = v()) : (this.currentText = this.currentText.slice(exports, require), this.characterList = this.characterList.slice(exports, require))
    }, exports._addTextNode = function(t, e) {
      var r = t.textContent;
      "" === r.trim() && "pre" !== this.wrapper && (r = " "), "pre" !== this.wrapper && (r = (r = r.replace(D, "")).replace(E, " ")), this._appendText(r, e)
    }, exports._addBreakNode = function(t, e) {
      S(t) && this._appendText("\n", e)
    }, exports._addImgNode = function(t, e) {
      if (x(t)) {
        var r = {};
        B.forEach(function(e) {
          var n = t.getAttribute(e);
          n && (r[e] = n)
        }), this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", r), g("draftjs_fix_paste_for_img") ? "presentation" !== t.getAttribute("role") && this._appendText("\uD83D\uDCF7", e) : this._appendText("\uD83D\uDCF7", e), this.currentEntity = null
      }
    }, exports._addAnchorNode = function(t, e, r) {
      if (b(t)) {
        var n = {};
        I.forEach(function(e) {
          var r = t.getAttribute(e);
          r && (n[e] = r)
        }), n.url = new f(t.href).toString(), this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", n || {}), e.push.apply(e, this._toBlockConfigs(Array.from(t.childNodes), r)), this.currentEntity = null
      }
    }, exports._toContentBlocks = function(t) {
      for (var e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null, r = t.length - 1, i = 0; i <= r; i++) {
        var o = t[i];
        o.parent = e, o.prevSibling = i > 0 ? t[i - 1].key : null, o.nextSibling = i < r ? t[i + 1].key : null, o.children = v(o.childConfigs.map(function(t) {
          return t.key
        })), this.contentBlocks.push(new s(n({}, o))), this._toContentBlocks(o.childConfigs, o.key)
      }
    }, exports._hoistContainersInBlockConfigs = function(t) {
      var e = this;
      return v(t).flatMap(function(t) {
        return "unstyled" !== t.type || "" !== t.text ? [t] : e._hoistContainersInBlockConfigs(t.childConfigs)
      })
    }, exports._toFlatContentBlocks = function(t) {
      var e = this;
      this._hoistContainersInBlockConfigs(t).forEach(function(t) {
        var r = e._extractTextFromBlockConfigs(t.childConfigs),
          i = r.text,
          o = r.characterList;
        e.contentBlocks.push(new u(n({}, t, {
          text: t.text + i,
          characterList: t.characterList.concat(o)
        })))
      })
    }, exports._extractTextFromBlockConfigs = function(t) {
      for (var e = t.length - 1, r = "", n = v(), i = 0; i <= e; i++) {
        var o = t[i];
        r += o.text, n = n.concat(o.characterList), "" !== r && "unstyled" !== o.type && (r += "\n", n = n.push(n.last()));
        var a = this._extractTextFromBlockConfigs(o.childConfigs);
        r += a.text, n = n.concat(a.characterList)
      }
      return {
        text: r,
        characterList: n
      }
    }, module
  }();
module.exports = function(t) {
  var e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d,
    r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : c,
    n = e(t = t.trim().replace(C, "").replace(O, " ").replace(K, "").replace(T, ""));
  return n ? new j(N(r), function(t, e) {
    return "li" === t ? "ol" === e ? "ordered-list-item" : "unordered-list-item" : null
  }).addDOMNode(n).getContentBlocks() : null
}