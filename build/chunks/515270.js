/** Chunk was on web.js **/
/** chunk id: 515270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L6: () => N,
  ZP: () => m,
  iF: () => A
}), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./704826.js");
var Chunk466332 = require("./466332.js"),
  Chunk31775 = require("./31775.js"),
  o = require.n(Chunk31775),
  Chunk70956 = require("./70956.js"),
  Chunk364964 = require("./364964.js"),
  Chunk53529 = require("./53529.js"),
  Chunk925994 = require("./925994.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk42530 = require("./42530.js");
let p = new Set(["line"]),
  _ = /^[a-z0-9_+\-.#]+$/i;

function m(e) {
  let {
    onChange: t
  } = e, n = null;
  return e.onChange = () => {
    d.bN.richValue(e) !== n && (l.T.withMergedEntry(e, () => {
      d.bN.withoutNormalizing(e, () => h(e))
    }), n = d.bN.richValue(e)), t()
  }, e
}

function h(e) {
  let t = E(e);
  y(e, t)
}
let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g;

function E(e) {
  let t = [],
    n = null;
  for (let r of d.bN.blocks(e)) {
    let i = null != n && (n.isInCodeBlock || n.opensCodeBlock);
    n = b(e, r, i, null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine), null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null), t.push(n)
  }
  return v(t), t
}

function b(e, t, n, r, i) {
  var o;
  let a = C(t),
    l = a[0],
    c = a[a.length - 1],
    u = null;
  if (null != c) {
    let [t] = d.bN.node(e, c.path);
    u = t.text.substring(c.offset + 3)
  }
  let f = n && null != l,
    p = n && 0 === a.length,
    m = r && 0 === a.length,
    h = (f ? a.slice(1) : a).length % 2 == 1,
    g = h && (null == u || "" === u || null != u.match(_)),
    E = g && null != u && null != (o = s.default.resolveLanguageName(u)) ? o : null;
  return {
    blockEntry: t,
    wasInCodeBlock: n,
    isInCodeBlock: p,
    isStyledCodeBlockLine: m,
    lang: h || f ? E : i,
    hljsTypes: null,
    closesCodeBlock: f,
    opensCodeBlock: h,
    opensCodeBlockOnOwnLine: g
  }
}

function y(e, t) {
  for (let n of t) {
    let [t, r] = n.blockEntry, i = O(n);
    (null == t ? true : t.codeBlockState) != i && u.Q.setNodes(e, {
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
    let o = i === e[e.length - 1];
    if ((i.closesCodeBlock || o) && (n && o && !i.closesCodeBlock && t.push(i), n = false, t.length > 0)) {
      let e = t.map(e => (0, c.sg)(e.blockEntry[0])).join("\n"),
        n = t[0].lang;
      if (null != n && null != r.Z.getLanguage(n)) {
        let r = T(e, n);
        if (null != r && r.length === t.length) {
          let e = [];
          for (let n = 0; n < t.length; n++) {
            let i, o = r[n].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
              a = [],
              s = 0,
              l = 0;
            for (; null != (i = g.exec(o));) {
              let t = i.index + i[0].length,
                n = i.index - l;
              i.index > l && (e.length > 0 && a.push({
                types: [...e],
                start: s,
                end: s + n
              }), s += n), "</span>" === i[0] ? e.pop() : e.push(i[1]), l = t
            }
            if (e.length > 0) {
              let t = o.length - l;
              a.push({
                types: [...e],
                start: s,
                end: s + t
              })
            }
            t[n].hljsTypes = a
          }
        } else
          for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
      }
      t = []
    }
    n && t.push(i), i.opensCodeBlock && (n = true)
  }
}
let S = {
    max: 1 / 0,
    maxAge: +Chunk70956.Z.Millis.MINUTE,
    updateAgeOnGet: true
  },
  I = new(o())(S);

function T(e, t) {
  let n = "".concat(e, "-").concat(t),
    r = I.get(n);
  if (null != r) return r;
  let i = s.default.highlight(t, e, false);
  if (null == i || i.illegal) return null;
  let o = i.value.split("\n");
  return I.set(n, o), o
}

function C(e) {
  let t, [n, r] = e;
  if (!p.has(n.type)) return [];
  let i = [],
    o = /\\|```/g;
  for (let e = 0; e < n.children.length; e++) {
    let a = n.children[e];
    if (d.LC.isText(a))
      for (o.lastIndex = 0; null != (t = o.exec(a.text));) {
        if ("\\" === t[0]) {
          o.lastIndex += 1;
          continue
        }
        i.push({
          path: d.C0.child(r, e),
          offset: t.index
        })
      }
  }
  return i
}

function A(e, t) {
  let n = 0;
  for (let i of d.bN.nodes(e, {
      at: {
        anchor: {
          path: f.u9,
          offset: 0
        },
        focus: t
      },
      mode: "lowest",
      match: e => d.LC.isText(e)
    })) {
    var r;
    let e = i[0].text;
    d.C0.equals(i[1], t.path) && (e = e.substring(0, t.offset));
    let o = e.match(/```/g);
    n += null != (r = null == o ? true : o.length) ? r : 0
  }
  return n % 2 != 0
}

function N(e) {
  if (null == e.selection) returnfalse;
  let t = d.M8.start(e.selection);
  return A(e, t)
}