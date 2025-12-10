/** Chunk was on web.js **/
/** chunk id: 288897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk685578 = require("./685578.js"),
  Chunk239091 = require("./239091.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk960048 = require("./960048.js"),
  Chunk752305 = require("./752305.js"),
  Chunk53529 = require("./53529.js"),
  Chunk789952 = require("./789952.js"),
  Chunk436660 = require("./436660.js"),
  Chunk887490 = require("./887490.js"),
  Chunk704875 = require("./704875.jsx"),
  Chunk653309 = require("./653309.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk115488 = require("./115488.js"),
  Chunk430864 = require("./430864.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
class N extends Chunk473749.PureComponent {
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
    d.Z.captureException(e, {
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
      attributes: o,
      children: s
    } = e;
    "rtl" === o.dir && (o.style = T(S({}, o.style), {
      textAlign: "right"
    }));
    let l = null != (t = null == a ? true : a(e)) ? t : (0, g.Z)(e, n, i);
    return null != l ? l : (0, r.jsx)("div", T(S({}, o), {
      children: s
    }))
  }
  renderLeaf(e) {
    var t;
    let {
      editor: n,
      renderExtraLeaf: i
    } = this.props, {
      attributes: a,
      children: o
    } = e, s = null != (t = null == i ? true : i(e)) ? t : (0, E.Z)(n, e);
    return null != s ? s : (0, r.jsx)("span", T(S({}, a), {
      children: o
    }))
  }
  handleOnChange() {
    var e, t;
    let {
      editor: n
    } = this.props, r = Chunk887490.bN.isEditorEmpty(require) && null == require.composition;
    if (Chunk54381 !== this.state.showPlaceholder && this.setState({
        showPlaceholder: Chunk54381
      }), null == (e = (t = this.props).onChange) || module.call(exports, Chunk887490.bN.richValue(require)), false === this.props.canFocus) {
      let e = Chunk685578.F3.findDocumentOrShadowRoot(require).getSelection();
      null != module && this.isSelectionPartiallyInside(module) && (null == module || module.removeAllRanges())
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
    } = this.props, r = s.F3.findDocumentOrShadowRoot(n).getSelection(), i = null != r && r.rangeCount > 0 ? r.getRangeAt(0) : null, a = null != (t = e.getTargetRanges()[0]) ? t : null;
    if (null == n.composition) {
      if (("insertText" === e.inputType || "insertReplacementText" === e.inputType) && (null == a && (a = i), null != a)) {
        let t = h.bN.toSlateRange(n, a, {
          exactMatch: false,
          suppressThrow: true
        });
        null != t && null != e.data && (h.M8.isExpanded(t) ? p.T.withSingleEntry(n, () => {
          n.selection = t, n.deleteFragment(), n.insertText(e.data), e.preventDefault()
        }) : (n.insertText(e.data), e.preventDefault()))
      }
      if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
        let t = h.bN.toSlateRange(n, i, {
          exactMatch: true,
          suppressThrow: true
        });
        null != t && h.M8.isExpanded(t) && (n.selection = t, n.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"), e.preventDefault())
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
    let i = null != require.selection && Chunk887490.M8.isCollapsed(require.selection) ? Chunk887490.bN.leaf(require, require.selection.anchor.path) : null;
    if (null == Chunk473749) {
      require.composition = Chunk54381;
      return
    }
    if (null != (null != require.selection && Chunk887490.M8.isCollapsed(require.selection) ? Chunk887490.bN.above(require, {
        at: Chunk473749[1],
        match: e => h.bN.isInline(n, e),
        mode: "lowest"
      }) : null) && (Chunk54381.startedInsideInline = true), Chunk887490.bN.isEditorEmpty(require)) {
      Chunk436660.Q.insertNodes(require, {
        text: "\uFEFF"
      }, {
        select: true
      }), Chunk54381.insertedPrefix = true, require.composition = Chunk54381;
      return
    }
    let a = Chunk685578.F3.findDocumentOrShadowRoot(this.props.editor).getSelection(),
      o = (null != (e = null == Chunk120356 ? true : Chunk120356.rangeCount) ? module : 0) > 0 ? null == Chunk120356 ? true : Chunk120356.getRangeAt(0) : null;
    if (null == (null != o ? Chunk887490.bN.toSlateRange(require, o, {
        exactMatch: true,
        suppressThrow: true
      }) : null) && null != o) {
      let e = Chunk887490.bN.toSlateRange(require, o, {
        exactMatch: false,
        suppressThrow: true
      });
      require.selection = null, null != module ? Chunk436660.Q.select(require, module) : Chunk436660.Q.select(require, null != (t = require.selection) ? exports : Chunk887490.bN.end(require, []))
    }
    require.composition = Chunk54381
  }
  handleCompositionEnd(e) {
    let {
      editor: t
    } = this.props;
    if (null == t.composition) return;
    let {
      insertedPrefix: n
    } = t.composition;
    if (n && null != t.selection && h.M8.isCollapsed(t.selection)) {
      let e = t.selection.anchor.path,
        n = h.aj.leaf(t, e);
      h.bN.withoutNormalizing(t, () => {
        let e = n.text.replace(/^\uFEFF/, "");
        m.Q.delete(t, {
          unit: "offset",
          distance: n.text.length,
          reverse: true
        }), h.bN.insertText(t, e)
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
    } = this.props, r = e.relatedTarget, i = s.F3.findDocumentOrShadowRoot(this.props.editor), a = i.getElementById("textarea-context"), o = i.getElementById("slate-toolbar");
    if (null != r && !(0, _.hasDomParent)(r, a) && !(0, _.hasDomParent)(r, o)) {
      let e = s.F3.findDocumentOrShadowRoot(t).getSelection();
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
          o = r.startOffset,
          s = r.endOffset;
        if ((0, _.hasDomParent)(i, t) || !(0, _.isDOMRangeCollapsed)(i, o, a, s) && (0, _.hasDomParent)(a, t)) returntrue
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
          o = a.startContainer,
          s = a.endContainer,
          l = a.startOffset,
          c = a.endOffset;
        if ((0, _.hasDomParent)(o, t)) {
          if (r) returntrue;
          n = true
        } else {
          if (n) returntrue;
          r = true
        }
        if (!(0, _.isDOMRangeCollapsed)(o, l, s, c))
          if ((0, _.hasDomParent)(o, t)) {
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
    } = this.props, i = e.pageY, a = window.innerHeight, o = null != i && null != a && i < a / 2 ? "top" : "bottom";
    if (u.isPlatformEmbedded) {
      let i = (0, c.GB)();
      (0, l.jW)(e, async () => {
        let {
          default: e
        } = await n.e("41984").then(n.bind(n, 343602));
        return n => (0, r.jsx)(e, T(S({}, n), {
          editor: t,
          text: h.bN.getSelectedText(t, true)
        }))
      }, {
        align: o,
        enableSpellCheck: i === b.IlC.APP
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
        onBlur: m,
        onKeyDown: h,
        onKeyUp: g,
        renderExtraElement: E,
        renderExtraLeaf: b
      } = module,
      v = C(module, ["editor", "className", "containerClassName", "canFocus", "autoFocus", "placeholder", "decorate", "channelId", "guildId", "onChange", "onFocus", "onBlur", "onKeyDown", "onKeyUp", "renderExtraElement", "renderExtraLeaf"]);
    return (0, Chunk54381.jsxs)("div", {
      ref: this.containerRef,
      className: Chunk473749,
      children: [this.state.showPlaceholder ? (0, Chunk54381.jsx)("div", {
        className: o()(Chunk115488.placeholder, require),
        "aria-hidden": true,
        children: Chunk728285
      }) : null, (0, Chunk54381.jsx)(Chunk685578.mH, {
        editor: exports,
        value: [...this.state.initialValue],
        children: (0, Chunk54381.jsx)(Chunk685578.CX, T(S({}, v), {
          className: o()(Chunk430864.markup, Chunk115488.editor, require),
          decorate: Chunk358085,
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
          autoFocus: Chunk239091 && false !== Chunk120356,
          autoCorrect: "off",
          "data-can-focus": false !== Chunk120356,
          "aria-label": Chunk728285,
          "aria-multiline": true
        }))
      })]
    })
  }
  constructor(e) {
    super(e), v(this, "containerRef", i.createRef()), v(this, "state", true), this.renderElement = this.renderElement.bind(this), this.renderLeaf = this.renderLeaf.bind(this), this.handleOnChange = this.handleOnChange.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleKeyUp = this.handleKeyUp.bind(this), this.handleBeforeInput = this.handleBeforeInput.bind(this), this.handleCompositionStart = this.handleCompositionStart.bind(this), this.handleCompositionEnd = this.handleCompositionEnd.bind(this), this.handleFocusCapture = this.handleFocusCapture.bind(this), this.handleBlurCapture = this.handleBlurCapture.bind(this), this.handleContextMenu = this.handleContextMenu.bind(this), this.handlePasteCapture = this.handlePasteCapture.bind(this), h.bN.isEditorEmpty(e.editor) ? this.state = {
      initialValue: (0, f.H2)().richValue,
      showPlaceholder: true
    } : this.state = {
      initialValue: h.bN.richValue(e.editor),
      showPlaceholder: false
    }
  }
}
let P = N