/** Chunk was on web.js **/
/** chunk id: 113001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => _,
  j: () => p
}), require("./896048.js");
var Chunk877413 = require("./877413.js"),
  i = require.n(Chunk877413),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk186306 = require("./186306.js"),
  Chunk339871 = require("./339871.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk652215 = require("./652215.js");
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
    let h = e.isMac;
    switch (t.which) {
      case d.Ks6.B:
        if (!u.VW.isEditorEmpty(e) && p(t, {
            ctrl: !h,
            cmd: h
          })) return (0, l.Px)(e, "bold"), true;
        break;
      case d.Ks6.I:
        if (!u.VW.isEditorEmpty(e) && p(t, {
            ctrl: !h,
            cmd: h
          })) return (0, l.Px)(e, "italics"), true;
        break;
      case d.Ks6.U:
        if (!u.VW.isEditorEmpty(e) && p(t, {
            ctrl: !h,
            cmd: h
          })) return (0, l.Px)(e, "underline"), true;
        break;
      case d.Ks6.S:
        if (!u.VW.isEditorEmpty(e) && p(t, {
            ctrl: !h,
            cmd: h,
            shift: true
          })) return (0, l.Px)(e, "strikethrough"), true;
        break;
      case d.Ks6.TAB:
        if (null != e.selection && p(t, {
            shift: null
          })) {
          let [r, i] = u.ZF.edges(e.selection), a = u.VW.blocks(e).slice(r.path[0], i.path[0] + 1), o = true;
          for (let [e] of a)
            if ("line" !== e.type || !(null == (n = e.codeBlockState) ? true : n.isInCodeBlock)) {
              o = false;
              break
            } if (o) {
            if (!t.shiftKey && u.ZF.isCollapsed(e.selection)) return c.b.insertText(e, f), true;
            let n = !t.shiftKey;
            return s.o.withSingleEntry(e, () => {
              var t, r, i, o;
              let s = null != (t = null == (i = e.selection) ? true : i.anchor) ? t : u.VW.start(e, []),
                l = null != (r = null == (o = e.selection) ? true : o.focus) ? r : u.VW.end(e, []);
              for (let [t, r] of a) {
                let i = t.children[0];
                if (!u.l5.isText(i)) continue;
                let a = u.PW.child(r, 0),
                  o = {
                    path: a,
                    offset: 0
                  };
                if (n) c.b.insertText(e, f, {
                  at: o
                }), u.PW.equals(s.path, a) && 0 !== s.offset && (s = {
                  path: a,
                  offset: s.offset + f.length
                }), u.PW.equals(l.path, a) && 0 !== l.offset && (l = {
                  path: a,
                  offset: l.offset + f.length
                });
                else if (i.text.startsWith(f)) {
                  let t = {
                    path: u.PW.child(r, 0),
                    offset: f.length
                  };
                  c.b.delete(e, {
                    at: {
                      anchor: o,
                      focus: t
                    }
                  }), u.PW.equals(s.path, a) && (s = {
                    path: a,
                    offset: Math.max(0, s.offset - f.length)
                  }), u.PW.equals(l.path, a) && (l = {
                    path: a,
                    offset: Math.max(0, l.offset - f.length)
                  })
                }
              }
              c.b.select(e, {
                anchor: s,
                focus: l
              })
            }), true
          }
        }
        break;
      case d.Ks6.ARROW_LEFT:
      case d.Ks6.ARROW_RIGHT: {
        let n;
        if (p(t, {
            shift: null
          })) n = "character";
        else if (p(t, {
            ctrl: !h,
            alt: h,
            shift: null
          })) n = "word";
        else if (h && p(t, {
            cmd: true,
            shift: null
          })) returnfalse;
        else returnfalse;
        let o = e.children[null != (r = null == (_ = e.selection) || null == (a = _.focus) ? true : a.path[0]) ? r : 0],
          s = "rtl" === i()(u.AS.string(o)),
          l = t.which === d.Ks6.ARROW_LEFT == !s;
        return c.b.keyboardMove(e, {
          reverse: l,
          unit: n,
          edge: t.shiftKey ? "focus" : true
        }), true
      }
      case d.Ks6.A:
        if (h && p(t, {
            ctrl: true
          })) {
          let t = u.VW.getCurrentBlock(e);
          if (null != t) {
            let n = u.VW.start(e, t[1]);
            return c.b.select(e, {
              anchor: n,
              focus: n
            }), true
          }
        }
        break;
      case d.Ks6.E:
        if (h && p(t, {
            ctrl: true
          })) {
          let t = u.VW.getCurrentBlock(e);
          if (null != t) {
            let n = u.VW.end(e, t[1]);
            return c.b.select(e, {
              anchor: n,
              focus: n
            }), true
          }
        }
        break;
      case d.Ks6.BACKSPACE:
      case d.Ks6.DELETE:
      case d.Ks6.K:
        let m = t.which === d.Ks6.BACKSPACE;
        if ((!h && t.which !== d.Ks6.K && p(t, {
            ctrl: true,
            shift: true
          }) || h && t.which !== d.Ks6.K && p(t, {
            cmd: true
          }) || h && t.which === d.Ks6.K && p(t, {
            ctrl: true
          })) && null != e.selection) {
          let [t, n] = u.ZF.edges(e.selection), [r, i] = u.VW.node(e, [m ? t.path[0] : n.path[0]]);
          if (o()(u.VW.isBlock(e, r), "Top-most node of selection is not a block"), m && !u.Kh.isAtStart(t, [r, i]) || !m && !u.Kh.isAtEnd(n, [r, i])) return m ? e.deleteBackward("line") : e.deleteForward("line"), true
        }
    }
    returnfalse
  }, e
}