/** Chunk was on web.js **/
/** chunk id: 414940, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
}), require("./896048.js"), require("./747238.js");
var Chunk186306 = require("./186306.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk407315 = require("./407315.js");
let s = new Set(["line", "blockQuote"]);

function l(e) {
  let {
    deleteBackward: t,
    deleteFragment: n,
    insertBreak: o,
    onChange: s
  } = e;
  e.deleteBackward = n => {
    let r = a.VW.getCurrentBlock(e);
    if ((null == r ? true : r[0].type) === "blockQuote") {
      let t = a.ZF.toPoint(e.selection);
      if (null != t && a.PW.isFirstChild(r[1], t.path) && 0 === t.offset) return void i.b.setNodes(e, {
        type: "line"
      }, {
        at: r[1]
      })
    }
    t(n)
  }, e.deleteFragment = t => {
    if (null != e.selection) {
      let [o, s] = a.ZF.edges(e.selection), l = [o.path[0]], c = a.VW.node(e, l), u = [s.path[0]], d = a.PW.equals(l, u) ? null : a.VW.node(e, u);
      r.o.withSingleEntry(e, () => {
        (null == c ? true : c[0].type) === "blockQuote" && a.Kh.isAtStart(o, c) && i.b.setNodes(e, {
          type: "line"
        }, {
          at: l
        }), (null == d ? true : d[0].type) === "blockQuote" && a.Kh.isAtEnd(s, d) && i.b.setNodes(e, {
          type: "line"
        }, {
          at: u
        }), n(t)
      });
      return
    }
    n(t)
  }, e.insertBreak = () => {
    let t = a.VW.getCurrentBlock(e);
    if ((null == t ? true : t[0].type) === "blockQuote") {
      let n = a.ZF.toPoint(e.selection);
      if (null == n) return;
      u(e, t, n) || i.b.splitNodes(e, {
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
    let t = a.VW.richValue(e);
    (t !== l || e.previewMarkdown !== d) && (r.o.withMergedEntry(e, () => {
      a.VW.withoutNormalizing(e, () => c(e))
    }), l = t, d = e.previewMarkdown), s()
  }, e
}

function c(e) {
  let t = false;
  for (let l of a.VW.blocks(e)) {
    let [c, u] = l;
    if (!s.has(c.type)) continue;
    let d = {
      path: a.PW.child(u, 0),
      offset: 0
    };
    if ((0, o.W)(e, d)) {
      "blockQuote" === c.type && (i.b.setNodes(e, {
        type: "line"
      }, {
        at: u
      }), i.b.insertText(e, "> ", {
        at: d
      }));
      continue
    }
    if ("blockQuote" === c.type || a.VW.areStylesDisabled(e)) continue;
    let f = c.children[0];
    if (!a.l5.isText(f)) continue;
    let p = f.text.match(/^\s*>>> /),
      _ = f.text.match(/^\s*> /);
    if ((null != _ || null != p || t) && (i.b.setNodes(e, {
        type: "blockQuote"
      }, {
        at: u
      }), !t)) {
      var n, r;
      let o = null != (n = null != (r = null == _ ? true : _[0].length) ? r : null == p ? true : p[0].length) ? n : 0,
        s = a.PW.child(u, 0);
      i.b.delete(e, {
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
  if (!a.VW.isEmpty(e, t[0])) returnfalse;
  let r = a.VW.previous(e, {
    at: t[1]
  });
  return null != r && !!a.AS.isType(r[0], "blockQuote") && !!a.VW.isEmpty(e, r[0]) && !!a.Kh.isAtStart(n, t) && (i.b.setNodes(e, {
    type: "line"
  }, {
    at: t[1]
  }), i.b.removeNodes(e, {
    at: r[1]
  }), true)
}