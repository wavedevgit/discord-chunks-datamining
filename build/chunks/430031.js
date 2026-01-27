/** Chunk was on 38939 **/
/** chunk id: 430031, original params: t,e,r (module,exports,require) **/
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
var o, Chunk387739 = require("./387739.js"),
  Chunk68055 = require("./68055.js"),
  Chunk617179 = require("./617179.js"),
  Chunk611668 = require("./611668.js"),
  Chunk45069 = require("./45069.js"),
  Chunk886316 = require("./886316.js"),
  Chunk550835 = require("./550835.js"),
  Chunk279998 = require("./279998.js"),
  Chunk51169 = require("./51169.js"),
  Chunk661551 = require("./661551.js"),
  Chunk116740 = require("./116740.js"),
  v = Chunk116740.List,
  m = Chunk116740.Map,
  _ = Chunk116740.OrderedSet,
  Chunk154745 = require("./154745.js"),
  Chunk882586 = require("./882586.js"),
  Chunk537578 = require("./537578.js"),
  Chunk609395 = require("./609395.js"),
  x = Chunk661551("draft_tree_data_support"),
  C = RegExp("\r", "g"),
  E = RegExp("\n", "g"),
  O = RegExp("^\n", "g"),
  D = RegExp("&nbsp;", "g"),
  K = RegExp("&#13;?", "g"),
  T = RegExp("&#8203;?", "g"),
  M = ["bold", "bolder", "500", "600", "700", "800", "900"],
  A = ["light", "lighter", "normal", "100", "200", "300", "400"],
  I = ["className", "href", "rel", "target", "title"],
  B = ["alt", "className", "height", "src", "width"],
  L = (i(o = {}, Chunk550835("public/DraftStyleDefault/depth0"), 0), i(o, Chunk550835("public/DraftStyleDefault/depth1"), 1), i(o, Chunk550835("public/DraftStyleDefault/depth2"), 2), i(o, Chunk550835("public/DraftStyleDefault/depth3"), 3), i(o, Chunk550835("public/DraftStyleDefault/depth4"), 4), o),
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
    var e = t.prototype;
    return e.clear = function() {
      this.characterList = v(), this.blockConfigs = [], this.currentBlockType = "unstyled", this.currentDepth = 0, this.currentEntity = null, this.currentText = "", this.entityMap = l, this.wrapper = null, this.contentBlocks = []
    }, e.addDOMNode = function(t) {
      var e;
      return this.contentBlocks = [], this.currentDepth = 0, (e = this.blockConfigs).push.apply(e, this._toBlockConfigs([t], _())), this._trimCurrentText(), "" !== this.currentText && this.blockConfigs.push(this._makeBlockConfig()), this
    }, e.getContentBlocks = function() {
      return 0 === this.contentBlocks.length && (x ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs)), {
        contentBlocks: this.contentBlocks,
        entityMap: this.entityMap
      }
    }, e._makeBlockConfig = function() {
      var t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {},
        e = n({
          key: t.key || h(),
          type: this.currentBlockType,
          text: this.currentText,
          characterList: this.characterList,
          depth: this.currentDepth,
          parent: null,
          children: v(),
          prevSibling: null,
          nextSibling: null,
          childConfigs: []
        }, t);
      return this.characterList = v(), this.currentBlockType = "unstyled", this.currentText = "", e
    }, e._toBlockConfigs = function(t, e) {
      for (var r = [], n = 0; n < t.length; n++) {
        var i = t[n],
          o = i.nodeName.toLowerCase();
        if ("body" === o || P(o)) {
          this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
          var a = this.currentDepth,
            s = this.wrapper;
          P(o) && (this.wrapper = o, P(s) && this.currentDepth++), r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), e)), this.currentDepth = a, this.wrapper = s;
          continue
        }
        var u = this.blockTypeMap.get(o);
        if (true !== u) {
          this._trimCurrentText(), "" !== this.currentText && r.push(this._makeBlockConfig());
          var c = this.currentDepth,
            l = this.wrapper;
          this.wrapper = "pre" === o ? "pre" : this.wrapper, "string" != typeof u && (u = this.disambiguate(o, this.wrapper) || u[0] || "unstyled"), !x && w(i) && ("unordered-list-item" === u || "ordered-list-item" === u) && (this.currentDepth = F(i, this.currentDepth));
          var f = h(),
            p = this._toBlockConfigs(Array.from(i.childNodes), e);
          this._trimCurrentText(), r.push(this._makeBlockConfig({
            key: f,
            childConfigs: p,
            type: u
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
        if (k(i) && i.attributes.getNamedItem("src") && i.attributes.getNamedItem("src").value) {
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
    }, e._appendText = function(t, e) {
      this.currentText += t;
      var r, n = a.create({
        style: e,
        entity: this.currentEntity
      });
      this.characterList = (r = this.characterList).push.apply(r, Array(t.length).fill(n))
    }, e._trimCurrentText = function() {
      var t = this.currentText.length,
        e = t - this.currentText.trimLeft().length,
        r = this.currentText.trimRight().length,
        n = this.characterList.findEntry(function(t) {
          return null !== t.getEntity()
        });
      (e = true !== n ? Math.min(e, n[0]) : e) > (r = true !== (n = this.characterList.reverse().findEntry(function(t) {
        return null !== t.getEntity()
      })) ? Math.max(r, t - n[0]) : r) ? (this.currentText = "", this.characterList = v()) : (this.currentText = this.currentText.slice(e, r), this.characterList = this.characterList.slice(e, r))
    }, e._addTextNode = function(t, e) {
      var r = t.textContent;
      "" === r.trim() && "pre" !== this.wrapper && (r = " "), "pre" !== this.wrapper && (r = (r = r.replace(O, "")).replace(E, " ")), this._appendText(r, e)
    }, e._addBreakNode = function(t, e) {
      S(t) && this._appendText("\n", e)
    }, e._addImgNode = function(t, e) {
      if (k(t)) {
        var r = {};
        B.forEach(function(e) {
          var n = t.getAttribute(e);
          n && (r[e] = n)
        }), this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", r), g("draftjs_fix_paste_for_img") ? "presentation" !== t.getAttribute("role") && this._appendText("\uD83D\uDCF7", e) : this._appendText("\uD83D\uDCF7", e), this.currentEntity = null
      }
    }, e._addAnchorNode = function(t, e, r) {
      if (b(t)) {
        var n = {};
        I.forEach(function(e) {
          var r = t.getAttribute(e);
          r && (n[e] = r)
        }), n.url = new f(t.href).toString(), this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", n || {}), e.push.apply(e, this._toBlockConfigs(Array.from(t.childNodes), r)), this.currentEntity = null
      }
    }, e._toContentBlocks = function(t) {
      for (var e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null, r = t.length - 1, i = 0; i <= r; i++) {
        var o = t[i];
        o.parent = e, o.prevSibling = i > 0 ? t[i - 1].key : null, o.nextSibling = i < r ? t[i + 1].key : null, o.children = v(o.childConfigs.map(function(t) {
          return t.key
        })), this.contentBlocks.push(new u(n({}, o))), this._toContentBlocks(o.childConfigs, o.key)
      }
    }, e._hoistContainersInBlockConfigs = function(t) {
      var e = this;
      return v(t).flatMap(function(t) {
        return "unstyled" !== t.type || "" !== t.text ? [t] : e._hoistContainersInBlockConfigs(t.childConfigs)
      })
    }, e._toFlatContentBlocks = function(t) {
      var e = this;
      this._hoistContainersInBlockConfigs(t).forEach(function(t) {
        var r = e._extractTextFromBlockConfigs(t.childConfigs),
          i = r.text,
          o = r.characterList;
        e.contentBlocks.push(new s(n({}, t, {
          text: t.text + i,
          characterList: t.characterList.concat(o)
        })))
      })
    }, e._extractTextFromBlockConfigs = function(t) {
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
    }, t
  }();
module.exports = function(t) {
  var e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : d,
    r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : c,
    n = e(t = t.trim().replace(C, "").replace(D, " ").replace(K, "").replace(T, ""));
  return n ? new j(N(r), function(t, e) {
    return "li" === t ? "ol" === e ? "ordered-list-item" : "unordered-list-item" : null
  }).addDOMNode(n).getContentBlocks() : null
}