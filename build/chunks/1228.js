/** Chunk was on web.js **/
/** chunk id: 1228, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk253018 = require("./253018.js"),
  Chunk155718 = require("./155718.js"),
  Chunk861382 = require("./861382.js"),
  Chunk317681 = require("./317681.js"),
  Chunk186306 = require("./186306.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk407315 = require("./407315.js"),
  Chunk2368 = require("./2368.js"),
  Chunk551483 = require("./551483.js");
let m = (e, t, n) => ({
  getSlateEditor: () => e,
  submit(e) {
    e.preventDefault(), n()
  },
  focus() {
    f.VW.focus(e)
  },
  blur() {
    o.rL.blur(e)
  },
  getCurrentWord() {
    let t = e.selection;
    if (null == t || !f.Ot.isValid(e, t) || f.ZF.isExpanded(t) || (0, p.Q9)(e)) return {
      word: null,
      isAtStart: false
    };
    let [n, r] = f.VW.node(e, f.PW.parent(t.anchor.path)), [i, a] = f.VW.node(e, t.anchor.path), o = t.anchor.offset;
    if (!f.PW.hasPrevious(a) && f.l5.isText(i)) {
      let e = i.text.substring(0, o);
      if (f.AS.isType(n, "applicationCommand") && o < n.command.displayName.length + 2) return {
        word: e,
        isAtStart: true
      }
    }
    let s = "",
      l = false;
    for (;;) {
      if (--o < 0) {
        if (!f.PW.hasPrevious(a)) {
          l = true;
          break
        } [i, a] = f.VW.node(e, f.PW.previous(a))
      }
      if (!f.l5.isText(i)) break;
      let t = i.text[o];
      if (h.ug.test(t)) break;
      s = t + s
    }
    let c = s,
      u = t.anchor.offset,
      [d] = f.VW.node(e, t.anchor.path);
    for (; f.l5.isText(d) && !(u >= d.text.length);) {
      let e = d.text[u];
      if (h.ug.test(e)) break;
      c += e, u++
    }
    return {
      word: s,
      fullWord: c,
      isAtStart: l && f.PW.isFirstEditorBlock(r)
    }
  },
  getFirstText() {
    var t, n;
    return null != (t = null == (n = f.VW.getFirstText(e)) ? true : n.text) ? t : ""
  },
  getCurrentCommandOption() {
    let t = c.M3(e);
    return null == t ? null : t[0].optionName
  },
  getCurrentCommandOptionValue() {
    var n;
    let r = c.M3(e);
    if (null == r) return [];
    let i = l.A.getActiveCommand(t.id),
      a = null == i || null == (n = i.options) ? true : n.find(e => e.name === r[0].optionName);
    return null == a ? [] : c.FV(e, a, r[0], t.id)
  },
  getCommandOptionValues() {
    let n = l.A.getActiveCommand(t.id);
    return null == n ? {} : c.SQ(e, n, t.id)
  },
  insertText(n) {
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      i = arguments.length > 2 && true !== arguments[2] && arguments[2];
    u.o.withSingleEntry(e, () => {
      let a = c.M3(e),
        o = null != a && g(t, a[0]);
      if (null != r && o && (d.b.removeInlineChildren(e, a), i = false), E(e, n, r, i), null != r && o) {
        let n = c.n$(e);
        if (a = f.cv.updateElement(e, a), null != n) {
          let r = f.cv.markdown(n[0], t.guild_id);
          (0, _.lE)(e, a, t.id, r) && (a = f.cv.updateElement(e, a))
        }
        c.ke(e, t.guild_id, t.id, f.cv.updateElement(e, a), false), d.b.selectNextCommandOption(e)
      }
    })
  },
  insertAutocomplete(n) {
    let r = arguments.length > 1 && true !== arguments[1] ? arguments[1] : null,
      {
        addSpace: i = true,
        replaceFullWord: a = false
      } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
    u.o.withSingleEntry(e, () => {
      let o = c.M3(e),
        s = null != o && g(t, o[0]);
      if (s) d.b.removeInlineChildren(e, o), i = false;
      else {
        let {
          word: t,
          fullWord: n
        } = this.getCurrentWord();
        null != t && t.length > 0 && d.b.delete(e, {
          distance: t.length,
          unit: "character",
          reverse: true
        }), a && null != t && null != n && n.length - t.length > 0 && d.b.delete(e, {
          distance: n.length - t.length,
          unit: "character"
        })
      }
      E(e, n, r, i), s && d.b.selectNextCommandOption(e)
    })
  },
  insertInlineAutocompleteInput(t) {
    u.o.withSingleEntry(e, () => {
      let {
        word: n
      } = this.getCurrentWord();
      null != n && n.length > 0 && d.b.delete(e, {
        distance: n.length,
        unit: "character",
        reverse: true
      }), d.b.insertNodes(e, [{
        type: t,
        children: [{
          text: ""
        }]
      }])
    })
  },
  replaceInlineAutocompleteInput(t, n, r) {
    u.o.withSingleEntry(e, () => {
      let i = f.VW.getSelectedParentOfType(e, [t]);
      a()(null != i, "Cannot replace inline input of type ".concat(t, " when none is selected")), d.b.removeNodes(e, {
        at: i[1]
      }), E(e, n, r, true)
    })
  },
  insertEmoji(t) {
    let {
      emoji: n,
      addSpace: r = false
    } = t;
    u.o.withSingleEntry(e, () => {
      var t, i;
      let a = n.animated ? "a" : "",
        o = null != (t = null != (i = n.originalName) ? i : n.name) ? t : "";
      E(e, ":".concat(n.name, ":"), null != n.id ? "<".concat(a, ":").concat(o.replace(/:/g, ""), ":").concat(n.id, ">") : null, r)
    })
  }
});

function g(e, t) {
  var n;
  let r = l.A.getActiveCommand(e.id),
    i = null == r || null == (n = r.options) ? true : n.find(e => e.name === t.optionName);
  return null != i && (i.type !== s.n4.STRING || (null == i ? true : i.choices) != null || (null == i ? true : i.autocomplete))
}

function E(e, t, n, r) {
  let i = f.VW.areStylesDisabled(e) || null == n ? t : n;
  u.o.withSingleEntry(e, () => {
    d.b.insertText(e, r ? i + " " : i)
  })
}

function y(e, t, n, i) {
  r.useImperativeHandle(e, () => m(t, n, i), [t, n, i])
}