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
  a = require.n(Chunk512722),
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
    shift: o = false
  } = t;
  return (null == n || e.metaKey === n) && (null == r || e.ctrlKey === r) && (null == i || e.altKey === i) && (null == o || e.shiftKey === o)
}

function _(e) {
  return e.onKeyDown = t => {
    var n, r, o, _;
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
          let [r, i] = u.M8.edges(e.selection), o = u.bN.blocks(e).slice(r.path[0], i.path[0] + 1), a = true;
          for (let [e] of o)
            if ("line" !== e.type || !(null == (n = e.codeBlockState) ? true : n.isInCodeBlock)) {
              a = false;
              break
            } if (a) {
            if (!t.shiftKey && u.M8.isCollapsed(e.selection)) return c.Q.insertText(e, f), true;
            let n = !t.shiftKey;
            return s.T.withSingleEntry(e, () => {
              var t, r, i, a;
              let s = null != (i = null == (t = e.selection) ? true : t.anchor) ? i : u.bN.start(e, []),
                l = null != (a = null == (r = e.selection) ? true : r.focus) ? a : u.bN.end(e, []);
              for (let [t, r] of o) {
                let i = t.children[0];
                if (!u.LC.isText(t.children[0])) continue;
                let o = u.C0.child(r, 0),
                  a = {
                    path: o,
                    offset: 0
                  };
                if (n) c.Q.insertText(e, f, {
                  at: a
                }), u.C0.equals(s.path, o) && 0 !== s.offset && (s = {
                  path: o,
                  offset: s.offset + f.length
                }), u.C0.equals(l.path, o) && 0 !== l.offset && (l = {
                  path: o,
                  offset: l.offset + f.length
                });
                else if (i.text.startsWith(f)) {
                  let t = {
                    path: u.C0.child(r, 0),
                    offset: f.length
                  };
                  c.Q.delete(e, {
                    at: {
                      anchor: a,
                      focus: t
                    }
                  }), u.C0.equals(s.path, o) && (s = {
                    path: o,
                    offset: Math.max(0, s.offset - f.length)
                  }), u.C0.equals(l.path, o) && (l = {
                    path: o,
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
        let n, a;
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
        t.shiftKey && (a = "focus");
        let s = e.children[null != (_ = null == (o = e.selection) || null == (r = o.focus) ? true : r.path[0]) ? _ : 0],
          l = "rtl" === i()(u.aj.string(s)),
          f = t.which === d.yXg.ARROW_LEFT == !l;
        return c.Q.keyboardMove(e, {
          reverse: f,
          unit: n,
          edge: a
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
            let [n, r] = t, i = u.C0.child(r, n.children.length - 1), [o] = u.bN.node(e, i), a = {
              path: i,
              offset: o.text.length
            };
            return c.Q.select(e, {
              anchor: a,
              focus: a
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
          if (a()(u.q.isElement(r) && u.bN.isBlock(e, r), "Top-most node of selection is not a block"), h && !u.Jz.isAtStart(t, [r, i]) || !h && !u.Jz.isAtEnd(n, [r, i])) return h ? e.deleteBackward("line") : e.deleteForward("line"), true
        }
    }
    returnfalse
  }, e
}