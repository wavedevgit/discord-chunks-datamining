/** Chunk was on web.js **/
/** chunk id: 140177, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk253018 = require("./253018.js"),
  Chunk442433 = require("./442433.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk728458 = require("./728458.js"),
  Chunk408018 = require("./408018.js"),
  Chunk186306 = require("./186306.js"),
  Chunk654821 = require("./654821.js"),
  Chunk35277 = require("./35277.js"),
  Chunk711371 = require("./711371.js"),
  Chunk492375 = require("./492375.jsx"),
  Chunk249431 = require("./249431.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk618273 = require("./618273.js"),
  Chunk206314 = require("./206314.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = C(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
class N extends Chunk64700.PureComponent {
  componentDidMount() {
    this.props.editor.events.addListener("onChange", this.handleOnChange)
  }
  componentDidUpdate(e, t, n) {
    e.editor !== this.props.editor && (e.editor.events.removeListener("onChange", this.handleOnChange), this.props.editor.events.addListener("onChange", this.handleOnChange))
  }
  componentWillUnmount() {
    this.props.editor.events.removeListener("onChange", this.handleOnChange)
  }
  componentDidCatch(e, t) {
    d.A.captureException(e, {
      extra: t
    }), this.setState({
      initialValue: [...this.props.editor.children]
    })
  }
  renderElement(e) {
    var t;
    let {
      guildId: n,
      channelId: i,
      renderExtraElement: a
    } = this.props, {
      attributes: s,
      children: o
    } = e;
    "rtl" === s.dir && (s.style = S(A({}, s.style), {
      textAlign: "right"
    }));
    let l = null != (t = null == a ? true : a(e)) ? t : (0, g.A)(e, n, i);
    return null != l ? l : (0, r.jsx)("div", S(A({}, s), {
      children: o
    }))
  }
  renderLeaf(e) {
    var t;
    let {
      editor: n,
      renderExtraLeaf: i
    } = this.props, {
      attributes: a,
      children: s
    } = e, o = null != (t = null == i ? true : i(e)) ? t : (0, E.A)(n, e);
    return null != o ? o : (0, r.jsx)("span", S(A({}, a), {
      children: s
    }))
  }
  handleOnChange() {
    var e, t;
    let {
      editor: n
    } = this.props, r = m.VW.isEditorEmpty(n) && null == n.composition;
    if (r !== this.state.showPlaceholder && this.setState({
        showPlaceholder: r
      }), null == (e = (t = this.props).onChange) || e.call(t, m.VW.richValue(n)), false === this.props.canFocus) {
      let e = o.rL.findDocumentOrShadowRoot(n).getSelection();
      null != e && this.isSelectionPartiallyInside(e) && (null == e || e.removeAllRanges())
    }
  }
  handleKeyDown(e) {
    var t, n;
    if (null != this.props.editor.composition) {
      e.preventDefault(), e.stopPropagation();
      return
    }
    null == (t = (n = this.props).onKeyDown) || t.call(n, e)
  }
  handleKeyUp(e) {
    var t, n;
    if (null != this.props.editor.composition) {
      e.preventDefault(), e.stopPropagation();
      return
    }
    null == (t = (n = this.props).onKeyUp) || t.call(n, e)
  }
  handleBeforeInput(e) {
    var t;
    let {
      editor: n
    } = this.props, r = o.rL.findDocumentOrShadowRoot(n).getSelection(), i = null != r && r.rangeCount > 0 ? r.getRangeAt(0) : null, a = null != (t = e.getTargetRanges()[0]) ? t : null;
    if (null == n.composition) {
      if (("insertText" === e.inputType || "insertReplacementText" === e.inputType) && (null == a && (a = i), null != a)) {
        let t = m.VW.toSlateRange(n, a, {
          exactMatch: false,
          suppressThrow: true
        });
        null != t && null != e.data && (m.ZF.isExpanded(t) ? p.o.withSingleEntry(n, () => {
          n.selection = t, n.deleteFragment(), n.insertText(e.data), e.preventDefault()
        }) : (n.insertText(e.data), e.preventDefault()))
      }
      if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
        let t = m.VW.toSlateRange(n, i, {
          exactMatch: true,
          suppressThrow: true
        });
        null != t && m.ZF.isExpanded(t) && (n.selection = t, n.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"), e.preventDefault())
      }
    }
  }
  handleCompositionStart() {
    var e, t;
    let {
      editor: n
    } = this.props, r = {
      insertedPrefix: false,
      startedInsideInline: false
    };
    this.state.showPlaceholder && this.setState({
      showPlaceholder: false
    });
    let i = null != n.selection && m.ZF.isCollapsed(n.selection) ? m.VW.leaf(n, n.selection.anchor.path) : null;
    if (null == i) {
      n.composition = r;
      return
    }
    if (null != (null != n.selection && m.ZF.isCollapsed(n.selection) ? m.VW.above(n, {
        at: i[1],
        match: e => m.VW.isInline(n, e),
        mode: "lowest"
      }) : null) && (r.startedInsideInline = true), m.VW.isEditorEmpty(n)) {
      h.b.insertNodes(n, {
        text: "\uFEFF"
      }, {
        select: true
      }), r.insertedPrefix = true, n.composition = r;
      return
    }
    let a = o.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
      s = (null != (e = null == a ? true : a.rangeCount) ? e : 0) > 0 ? null == a ? true : a.getRangeAt(0) : null;
    if (null == (null != s ? m.VW.toSlateRange(n, s, {
        exactMatch: true,
        suppressThrow: true
      }) : null) && null != s) {
      let e = m.VW.toSlateRange(n, s, {
        exactMatch: false,
        suppressThrow: true
      });
      n.selection = null, null != e ? h.b.select(n, e) : h.b.select(n, null != (t = n.selection) ? t : m.VW.end(n, []))
    }
    n.composition = r
  }
  handleCompositionEnd(e) {
    let {
      editor: t
    } = this.props;
    if (null == t.composition) return;
    let {
      insertedPrefix: n
    } = t.composition;
    if (n && null != t.selection && m.ZF.isCollapsed(t.selection)) {
      let e = t.selection.anchor.path,
        n = m.AS.leaf(t, e);
      m.VW.withoutNormalizing(t, () => {
        let e = n.text.replace(/^\uFEFF/, "");
        h.b.delete(t, {
          unit: "offset",
          distance: n.text.length,
          reverse: true
        }), m.VW.insertText(t, e)
      })
    }
    t.composition = null
  }
  handleFocusCapture(e) {
    let {
      onFocus: t
    } = this.props;
    null == t || t(e)
  }
  handleBlurCapture(e) {
    let {
      editor: t,
      onBlur: n
    } = this.props, r = e.relatedTarget, i = o.rL.findDocumentOrShadowRoot(this.props.editor), a = i.getElementById("textarea-context"), s = i.getElementById("slate-toolbar");
    if (null != r && !(0, _.hasDomParent)(r, a) && !(0, _.hasDomParent)(r, s)) {
      let e = o.rL.findDocumentOrShadowRoot(t).getSelection();
      null != e && this.isSelectionEscaping(e) && e.removeAllRanges()
    }
    null == n || n(e)
  }
  isSelectionPartiallyInside(e) {
    let t = this.containerRef.current;
    if (null != e && null != t)
      for (let n = e.rangeCount - 1; n >= 0; n--) {
        let r = e.getRangeAt(n),
          i = r.startContainer,
          a = r.endContainer,
          s = r.startOffset,
          o = r.endOffset;
        if ((0, _.hasDomParent)(i, t) || !(0, _.isDOMRangeCollapsed)(i, s, a, o) && (0, _.hasDomParent)(a, t)) returntrue
      }
    returnfalse
  }
  isSelectionEscaping(e) {
    let t = this.containerRef.current,
      n = false,
      r = false;
    if (null != e && null != t)
      for (let i = e.rangeCount - 1; i >= 0; i--) {
        let a = e.getRangeAt(i),
          s = a.startContainer,
          o = a.endContainer,
          l = a.startOffset,
          c = a.endOffset;
        if ((0, _.hasDomParent)(s, t)) {
          if (r) returntrue;
          n = true
        } else {
          if (n) returntrue;
          r = true
        }
        if (!(0, _.isDOMRangeCollapsed)(s, l, o, c))
          if ((0, _.hasDomParent)(s, t)) {
            if (r) returntrue;
            n = true
          } else {
            if (n) returntrue;
            r = true
          }
      }
    returnfalse
  }
  handleContextMenu(e) {
    let {
      editor: t
    } = this.props, i = e.pageY, a = window.innerHeight, s = null != i && null != a && i < a / 2 ? "top" : "bottom";
    if (u.isPlatformEmbedded) {
      let i = (0, c.zd)();
      (0, l.L3)(e, async () => {
        let {
          default: e
        } = await n.e("58127").then(n.bind(n, 446514));
        return n => (0, r.jsx)(e, S(A({}, n), {
          editor: t,
          text: m.VW.getSelectedText(t, true)
        }))
      }, {
        align: s,
        enableSpellCheck: i === y.BRT.APP
      })
    } else blur()
  }
  handlePasteCapture(e) {
    let {
      editor: t,
      onPaste: n,
      readOnly: r
    } = this.props;
    null == n || n(e), e.isDefaultPrevented() || e.isPropagationStopped() || r || (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation())
  }
  render() {
    let e = this.props,
      {
        editor: t,
        className: n,
        containerClassName: i,
        canFocus: a,
        autoFocus: l,
        placeholder: c,
        decorate: u,
        channelId: d,
        guildId: f,
        onChange: p,
        onFocus: _,
        onBlur: h,
        onKeyDown: m,
        onKeyUp: g,
        renderExtraElement: E,
        renderExtraLeaf: y
      } = e,
      v = T(e, ["editor", "className", "containerClassName", "canFocus", "autoFocus", "placeholder", "decorate", "channelId", "guildId", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "renderExtraElement", "renderExtraLeaf"]);
    return (0, r.jsxs)("div", {
      ref: this.containerRef,
      className: i,
      children: [this.state.showPlaceholder ? (0, r.jsx)("div", {
        className: s()(b.q, n),
        "aria-hidden": true,
        children: c
      }) : null, (0, r.jsx)(o.A, {
        editor: t,
        value: [...this.state.initialValue],
        children: (0, r.jsx)(o.Fo, S(A({}, v), {
          className: s()(O.PT, b.E, n),
          decorate: u,
          renderElement: this.renderElement,
          renderLeaf: this.renderLeaf,
          onFocusCapture: this.handleFocusCapture,
          onBlurCapture: this.handleBlurCapture,
          onContextMenu: this.handleContextMenu,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onDOMBeforeInput: this.handleBeforeInput,
          onCompositionStart: this.handleCompositionStart,
          onCompositionEnd: this.handleCompositionEnd,
          onPasteCapture: this.handlePasteCapture,
          autoFocus: l && false !== a,
          autoCorrect: "off",
          "data-can-focus": false !== a,
          "aria-label": c,
          "aria-multiline": true
        }))
      })]
    })
  }
  constructor(e) {
    super(e), v(this, "containerRef", i.createRef()), v(this, "state", true), this.renderElement = this.renderElement.bind(this), this.renderLeaf = this.renderLeaf.bind(this), this.handleOnChange = this.handleOnChange.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleKeyUp = this.handleKeyUp.bind(this), this.handleBeforeInput = this.handleBeforeInput.bind(this), this.handleCompositionStart = this.handleCompositionStart.bind(this), this.handleCompositionEnd = this.handleCompositionEnd.bind(this), this.handleFocusCapture = this.handleFocusCapture.bind(this), this.handleBlurCapture = this.handleBlurCapture.bind(this), this.handleContextMenu = this.handleContextMenu.bind(this), this.handlePasteCapture = this.handlePasteCapture.bind(this), m.VW.isEditorEmpty(e.editor) ? this.state = {
      initialValue: (0, f.N3)().richValue,
      showPlaceholder: true
    } : this.state = {
      initialValue: m.VW.richValue(e.editor),
      showPlaceholder: false
    }
  }
}
let R = N