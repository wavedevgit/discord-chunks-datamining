/** Chunk was on web.js **/
/** chunk id: 417662, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => p,
  Z: () => _
}), require("./388685.js");
var Chunk653603 = require("./653603.js"),
  i = require.n(Chunk653603),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk53529 = require("./53529.js"),
  Chunk50659 = require("./50659.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk981631 = require("./981631.js");
let f = "  ";

function p(e, t) {
  let {
    cmd: n = false,
    ctrl: r = false,
    alt: i = false,
    shift: a = false
  } = t;
  return (null == n || e.metaKey === n) && (null == r || e.ctrlKey === r) && (null == i || e.altKey === i) && (null == a || e.shiftKey === a)
}

function _(e) {
  return e.onKeyDown = t => {
    var n, r, a, _;
    let m = e.isMac;
    switch (t.which) {
      case d.yXg.B:
        if (!u.bN.isEditorEmpty(e) && p(t, {
            ctrl: !m,
            cmd: m
          })) return (0, l.py)(e, "bold"), true;
        break;
      case d.yXg.I:
        if (!u.bN.isEditorEmpty(e) && p(t, {
            ctrl: !m,
            cmd: m
          })) return (0, l.py)(e, "italics"), true;
        break;
      case d.yXg.U:
        if (!u.bN.isEditorEmpty(e) && p(t, {
            ctrl: !m,
            cmd: m
          })) return (0, l.py)(e, "underline"), true;
        break;
      case d.yXg.S:
        if (!u.bN.isEditorEmpty(e) && p(t, {
            ctrl: !m,
            cmd: m,
            shift: true
          })) return (0, l.py)(e, "strikethrough"), true;
        break;
      case d.yXg.TAB:
        if (null != e.selection && p(t, {
            shift: null
          })) {
          let [r, i] = u.M8.edges(e.selection), a = u.bN.blocks(e).slice(r.path[0], i.path[0] + 1), o = true;
          for (let [e] of a)
            if ("line" !== e.type || !(null == (n = e.codeBlockState) ? true : n.isInCodeBlock)) {
              o = false;
              break
            } if (o) {
            if (!t.shiftKey && u.M8.isCollapsed(e.selection)) return c.Q.insertText(e, f), true;
            let n = !t.shiftKey;
            return s.T.withSingleEntry(e, () => {
              var t, r, i, o;
              let s = null != (i = null == (t = e.selection) ? true : t.anchor) ? i : u.bN.start(e, []),
                l = null != (o = null == (r = e.selection) ? true : r.focus) ? o : u.bN.end(e, []);
              for (let [t, r] of a) {
                let i = t.children[0];
                if (!u.LC.isText(t.children[0])) continue;
                let a = u.C0.child(r, 0),
                  o = {
                    path: a,
                    offset: 0
                  };
                if (n) c.Q.insertText(e, f, {
                  at: o
                }), u.C0.equals(s.path, a) && 0 !== s.offset && (s = {
                  path: a,
                  offset: s.offset + f.length
                }), u.C0.equals(l.path, a) && 0 !== l.offset && (l = {
                  path: a,
                  offset: l.offset + f.length
                });
                else if (i.text.startsWith(f)) {
                  let t = {
                    path: u.C0.child(r, 0),
                    offset: f.length
                  };
                  c.Q.delete(e, {
                    at: {
                      anchor: o,
                      focus: t
                    }
                  }), u.C0.equals(s.path, a) && (s = {
                    path: a,
                    offset: Math.max(0, s.offset - f.length)
                  }), u.C0.equals(l.path, a) && (l = {
                    path: a,
                    offset: Math.max(0, l.offset - f.length)
                  })
                }
              }
              c.Q.select(e, {
                anchor: s,
                focus: l
              })
            }), true
          }
        }
        break;
      case d.yXg.ARROW_LEFT:
      case d.yXg.ARROW_RIGHT: {
        let n, o;
        if (p(t, {
            shift: null
          })) n = "character";
        else if (p(t, {
            ctrl: !m,
            alt: m,
            shift: null
          })) n = "word";
        else if (m && p(t, {
            cmd: true,
            shift: null
          })) returnfalse;
        else returnfalse;
        t.shiftKey && (o = "focus");
        let s = e.children[null != (_ = null == (a = e.selection) || null == (r = a.focus) ? true : r.path[0]) ? _ : 0],
          l = "rtl" === i()(u.aj.string(s)),
          f = t.which === d.yXg.ARROW_LEFT == !l;
        return c.Q.keyboardMove(e, {
          reverse: f,
          unit: n,
          edge: o
        }), true
      }
      case d.yXg.A:
        if (m && p(t, {
            ctrl: true
          })) {
          let t = u.bN.getCurrentBlock(e);
          if (null != t) {
            let [, n] = t, r = {
              path: u.C0.child(n, 0),
              offset: 0
            };
            return c.Q.select(e, {
              anchor: r,
              focus: r
            }), true
          }
        }
        break;
      case d.yXg.E:
        if (m && p(t, {
            ctrl: true
          })) {
          let t = u.bN.getCurrentBlock(e);
          if (null != t) {
            let [n, r] = t, i = u.C0.child(r, n.children.length - 1), [a] = u.bN.node(e, i), o = {
              path: i,
              offset: a.text.length
            };
            return c.Q.select(e, {
              anchor: o,
              focus: o
            }), true
          }
        }
        break;
      case d.yXg.BACKSPACE:
      case d.yXg.DELETE:
      case d.yXg.K:
        let h = t.which === d.yXg.BACKSPACE;
        if ((!m && t.which !== d.yXg.K && p(t, {
            ctrl: true,
            shift: true
          }) || m && t.which !== d.yXg.K && p(t, {
            cmd: true
          }) || m && t.which === d.yXg.K && p(t, {
            ctrl: true
          })) && null != e.selection) {
          let [t, n] = u.M8.edges(e.selection), [r, i] = u.bN.node(e, [h ? t.path[0] : n.path[0]]);
          if (o()(u.q.isElement(r) && u.bN.isBlock(e, r), "Top-most node of selection is not a block"), h && !u.Jz.isAtStart(t, [r, i]) || !h && !u.Jz.isAtEnd(n, [r, i])) return h ? e.deleteBackward("line") : e.deleteForward("line"), true
        }
    }
    returnfalse
  }, e
}