/** Chunk was on web.js **/
/** chunk id: 886027, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./35282.js");
var Chunk53529 = require("./53529.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk515270 = require("./515270.js");
let s = new Set(["line", "blockQuote"]);

function l(e) {
  let {
    deleteBackward: t,
    deleteFragment: n,
    insertBreak: o,
    onChange: s
  } = e;
  e.deleteBackward = n => {
    let r = a.bN.getCurrentBlock(e);
    if ((null == r ? true : r[0].type) === "blockQuote") {
      let t = a.M8.toPoint(e.selection);
      if (null != t && a.C0.isFirstChild(r[1], t.path) && 0 === t.offset) return void i.Q.setNodes(e, {
        type: "line"
      }, {
        at: r[1]
      })
    }
    t(n)
  }, e.deleteFragment = t => {
    if (null != e.selection) {
      let [o, s] = a.M8.edges(e.selection), l = [o.path[0]], c = a.bN.node(e, l), u = [s.path[0]], d = a.C0.equals(l, u) ? null : a.bN.node(e, u);
      r.T.withSingleEntry(e, () => {
        (null == c ? true : c[0].type) === "blockQuote" && a.Jz.isAtStart(o, c) && i.Q.setNodes(e, {
          type: "line"
        }, {
          at: l
        }), (null == d ? true : d[0].type) === "blockQuote" && a.Jz.isAtEnd(s, d) && i.Q.setNodes(e, {
          type: "line"
        }, {
          at: u
        }), n(t)
      });
      return
    }
    n(t)
  }, e.insertBreak = () => {
    let t = a.bN.getCurrentBlock(e);
    if ((null == t ? true : t[0].type) === "blockQuote") {
      let n = a.M8.toPoint(e.selection);
      if (null == n) return;
      u(e, t, n) || i.Q.splitNodes(e, {
        at: n,
        always: true
      });
      return
    }
    o()
  };
  let l = null,
    d = true;
  return e.onChange = () => {
    let t = a.bN.richValue(e);
    (t !== l || e.previewMarkdown !== d) && (r.T.withMergedEntry(e, () => {
      a.bN.withoutNormalizing(e, () => c(e))
    }), l = t, d = e.previewMarkdown), s()
  }, e
}

function c(e) {
  let t = false;
  for (let l of a.bN.blocks(e)) {
    let [c, u] = l;
    if (!s.has(c.type)) continue;
    let d = {
      path: a.C0.child(u, 0),
      offset: 0
    };
    if ((0, o.iF)(e, d)) {
      "blockQuote" === c.type && (i.Q.setNodes(e, {
        type: "line"
      }, {
        at: u
      }), i.Q.insertText(e, "> ", {
        at: d
      }));
      continue
    }
    if ("blockQuote" === c.type || a.bN.areStylesDisabled(e)) continue;
    let f = c.children[0];
    if (!a.LC.isText(f)) continue;
    let p = f.text.match(/^\s*>>> /),
      _ = f.text.match(/^\s*> /);
    if ((null != _ || null != p || t) && (i.Q.setNodes(e, {
        type: "blockQuote"
      }, {
        at: u
      }), !t)) {
      var n, r;
      let o = null != (r = null != (n = null == _ ? true : _[0].length) ? n : null == p ? true : p[0].length) ? r : 0,
        s = a.C0.child(u, 0);
      i.Q.delete(e, {
        at: {
          anchor: {
            path: s,
            offset: 0
          },
          focus: {
            path: s,
            offset: o
          }
        }
      }), t = null != p
    }
  }
}

function u(e, t, n) {
  if (!a.bN.isEmpty(e, t[0])) returnfalse;
  let r = a.bN.previous(e, {
    at: t[1]
  });
  return null != r && !!a.aj.isType(r[0], "blockQuote") && !!a.bN.isEmpty(e, r[0]) && !!a.Jz.isAtStart(n, t) && (i.Q.setNodes(e, {
    type: "line"
  }, {
    at: t[1]
  }), i.Q.removeNodes(e, {
    at: r[1]
  }), true)
}