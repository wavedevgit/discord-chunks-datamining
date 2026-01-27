/** Chunk was on web.js **/
/** chunk id: 407315, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => h,
  Q9: () => N,
  W: () => C
}), require("./896048.js"), require("./321073.js"), require("./747238.js"), require("./812715.js");
var Chunk28728 = require("./28728.js"),
  Chunk635377 = require("./635377.js"),
  a = require.n(Chunk635377),
  Chunk927813 = require("./927813.js"),
  Chunk752238 = require("./752238.js"),
  Chunk186306 = require("./186306.js"),
  Chunk323350 = require("./323350.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk551483 = require("./551483.js");
let p = new Set(["line"]),
  _ = /^[a-z0-9_+\-.#]+$/i;

function h(e) {
  let {
    onChange: t
  } = e, n = null;
  return e.onChange = () => {
    d.VW.richValue(e) !== n && (l.o.withMergedEntry(e, () => {
      d.VW.withoutNormalizing(e, () => m(e))
    }), n = d.VW.richValue(e)), t()
  }, e
}

function m(e) {
  let t = E(e);
  b(e, t)
}
let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;

function E(e) {
  let t = [],
    n = null;
  for (let r of d.VW.blocks(e)) n = y(e, r, null != n && (n.isInCodeBlock || n.opensCodeBlock), null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine), null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null), t.push(n);
  return v(t), t
}

function y(e, t, n, r, i) {
  var a;
  let o = T(t),
    l = o[0],
    c = o[o.length - 1],
    u = null;
  if (null != c) {
    let [t] = d.VW.node(e, c.path);
    u = t.text.substring(c.offset + 3)
  }
  let f = n && null != l,
    p = n && 0 === o.length,
    h = r && 0 === o.length,
    m = (f ? o.slice(1) : o).length % 2 == 1,
    g = m && (null == u || "" === u || null != u.match(_)),
    E = g && null != u && null != (a = s.default.resolveLanguageName(u)) ? a : null;
  return {
    blockEntry: t,
    wasInCodeBlock: n,
    isInCodeBlock: p,
    isStyledCodeBlockLine: h,
    lang: m || f ? E : i,
    hljsTypes: null,
    closesCodeBlock: f,
    opensCodeBlock: m,
    opensCodeBlockOnOwnLine: g
  }
}

function b(e, t) {
  for (let n of t) {
    let [t, r] = n.blockEntry, i = O(n);
    (null == t ? true : t.codeBlockState) != i && u.b.setNodes(e, {
      codeBlockState: i
    }, {
      at: r
    })
  }
}

function O(e) {
  return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
    lang: e.lang,
    wasInCodeBlock: e.wasInCodeBlock,
    isInCodeBlock: e.isInCodeBlock,
    isStyledCodeBlockLine: e.isStyledCodeBlockLine,
    hljsTypes: e.hljsTypes
  } : null
}

function v(e) {
  let t = [],
    n = false;
  for (let i of e) {
    let a = i === e[e.length - 1];
    if ((i.closesCodeBlock || a) && (n && a && !i.closesCodeBlock && t.push(i), n = false, t.length > 0)) {
      let e = t.map(e => (0, c.IQ)(e.blockEntry[0])).join("\n"),
        n = t[0].lang;
      if (null != n && null != r.A.getLanguage(n)) {
        let r = S(e, n);
        if (null != r && r.length === t.length) {
          let e = [];
          for (let n = 0; n < t.length; n++) {
            let i, a = r[n].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
              o = [],
              s = 0,
              l = 0;
            for (; null != (i = g.exec(a));) {
              let t = i.index + i[0].length,
                n = i.index - l;
              i.index > l && (e.length > 0 && o.push({
                types: [...e],
                start: s,
                end: s + n
              }), s += n), "</span>" === i[0] ? e.pop() : e.push(i[1]), l = t
            }
            if (e.length > 0) {
              let t = a.length - l;
              o.push({
                types: [...e],
                start: s,
                end: s + t
              })
            }
            t[n].hljsTypes = o
          }
        } else
          for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
      }
      t = []
    }
    n && t.push(i), i.opensCodeBlock && (n = true)
  }
}
let A = {
    max: 1 / 0,
    maxAge: +Chunk927813.A.Millis.MINUTE,
    updateAgeOnGet: true
  },
  I = new(a())(A);

function S(e, t) {
  let n = "".concat(e, "-").concat(t),
    r = I.get(n);
  if (null != r) return r;
  let i = s.default.highlight(t, e, false);
  if (null == i || i.illegal) return null;
  let a = i.value.split("\n");
  return I.set(n, a), a
}

function T(e) {
  let t, [n, r] = e;
  if (!p.has(n.type)) return [];
  let i = [],
    a = /\\|```/g;
  for (let e = 0; e < n.children.length; e++) {
    let o = n.children[e];
    if (d.l5.isText(o))
      for (a.lastIndex = 0; null != (t = a.exec(o.text));) {
        if ("\\" === t[0]) {
          a.lastIndex += 1;
          continue
        }
        i.push({
          path: d.PW.child(r, e),
          offset: t.index
        })
      }
  }
  return i
}

function C(e, t) {
  let n = 0;
  for (let i of d.VW.nodes(e, {
      at: {
        anchor: {
          path: f.fP,
          offset: 0
        },
        focus: t
      },
      mode: "lowest",
      match: e => d.l5.isText(e)
    })) {
    var r;
    let e = i[0].text;
    d.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
    let a = e.match(/```/g);
    n += null != (r = null == a ? true : a.length) ? r : 0
  }
  return n % 2 != 0
}

function N(e) {
  if (null == e.selection) returnfalse;
  let t = d.ZF.start(e.selection);
  return C(e, t)
}