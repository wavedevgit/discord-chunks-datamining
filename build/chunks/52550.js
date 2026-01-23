/** Chunk was on web.js **/
/** chunk id: 52550, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk724039 = require("./724039.js");

function i() {
  return (i = r || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }).apply(this, arguments)
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}

function s(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}
var Chunk611668 = require("./611668.js"),
  Chunk955043 = require("./955043.js"),
  Chunk212453 = require("./212453.js"),
  Chunk887808 = require("./887808.js"),
  Chunk327229 = require("./327229.js"),
  Chunk727055 = require("./727055.js"),
  Chunk298379 = require("./298379.js"),
  Chunk417159 = require("./417159.js"),
  Chunk934886 = require("./934886.js"),
  Chunk869639 = require("./869639.js"),
  Chunk64700 = require("./64700.js"),
  Chunk251577 = require("./251577.js"),
  Chunk448567 = require("./448567.js"),
  Chunk573750 = require("./573750.js"),
  Chunk550835 = require("./550835.js"),
  Chunk279998 = require("./279998.js"),
  Chunk673776 = require("./673776.js"),
  Chunk423856 = require("./423856.js"),
  Chunk661551 = require("./661551.js"),
  Chunk797686 = require("./797686.js"),
  Chunk537578 = require("./537578.js"),
  Chunk670200 = require("./670200.js"),
  P = Chunk573750.isBrowser("IE"),
  D = !P,
  x = {
    edit: Chunk727055,
    composite: Chunk212453,
    drag: Chunk327229,
    cut: null,
    render: null
  },
  L = false,
  j = function(e) {
    function t() {
      return e.apply(this, arguments) || this
    }
    l(t, e);
    var n = t.prototype;
    return n.render = function() {
      return null
    }, n.componentDidMount = function() {
      this._update()
    }, n.componentDidUpdate = function() {
      this._update()
    }, n._update = function() {
      var e = this.props.editor;
      e._latestEditorState = this.props.editorState, e._blockSelectEvents = true
    }, t
  }(Chunk64700.Component),
  M = function(e) {
    function t(t) {
      var n;
      return o(s(n = e.call(this, t) || this), "_blockSelectEvents", true), o(s(n), "_clipboard", true), o(s(n), "_handler", true), o(s(n), "_dragCount", true), o(s(n), "_internalDrag", true), o(s(n), "_editorKey", true), o(s(n), "_placeholderAccessibilityID", true), o(s(n), "_latestEditorState", true), o(s(n), "_latestCommittedEditorState", true), o(s(n), "_pendingStateFromBeforeInput", true), o(s(n), "_onBeforeInput", true), o(s(n), "_onBlur", true), o(s(n), "_onCharacterData", true), o(s(n), "_onCompositionEnd", true), o(s(n), "_onCompositionStart", true), o(s(n), "_onCopy", true), o(s(n), "_onCut", true), o(s(n), "_onDragEnd", true), o(s(n), "_onDragOver", true), o(s(n), "_onDragStart", true), o(s(n), "_onDrop", true), o(s(n), "_onInput", true), o(s(n), "_onFocus", true), o(s(n), "_onKeyDown", true), o(s(n), "_onKeyPress", true), o(s(n), "_onKeyUp", true), o(s(n), "_onMouseDown", true), o(s(n), "_onMouseUp", true), o(s(n), "_onPaste", true), o(s(n), "_onSelect", true), o(s(n), "editor", true), o(s(n), "editorContainer", true), o(s(n), "focus", true), o(s(n), "blur", true), o(s(n), "setMode", true), o(s(n), "exitCurrentMode", true), o(s(n), "restoreEditorDOM", true), o(s(n), "setClipboard", true), o(s(n), "getClipboard", true), o(s(n), "getEditorKey", true), o(s(n), "update", true), o(s(n), "onDragEnter", true), o(s(n), "onDragLeave", true), o(s(n), "_handleEditorContainerRef", function(e) {
        n.editorContainer = e, n.editor = null !== e ? e.firstChild : null
      }), o(s(n), "focus", function(e) {
        var t = n.props.editorState,
          r = t.getSelection().getHasFocus(),
          i = n.editor;
        if (i) {
          var a = O.getScrollParent(i),
            s = e || T(a),
            o = s.x,
            l = s.y;
          R(i) || N(false), i.focus(), a === window ? window.scrollTo(o, l) : b.setTop(a, l), r || n.update(E.forceSelection(t, t.getSelection()))
        }
      }), o(s(n), "blur", function() {
        var e = n.editor;
        e && (R(e) || N(false), e.blur())
      }), o(s(n), "setMode", function(e) {
        var t = n.props,
          r = t.onPaste,
          i = t.onCut,
          s = t.onCopy,
          o = a({}, x.edit);
        r && (o.onPaste = r), i && (o.onCut = i), s && (o.onCopy = s), n._handler = a({}, x, {
          edit: o
        })[e]
      }), o(s(n), "exitCurrentMode", function() {
        n.setMode("edit")
      }), o(s(n), "restoreEditorDOM", function(e) {
        n.setState({
          contentsKey: n.state.contentsKey + 1
        }, function() {
          n.focus(e)
        })
      }), o(s(n), "setClipboard", function(e) {
        n._clipboard = e
      }), o(s(n), "getClipboard", function() {
        return n._clipboard
      }), o(s(n), "update", function(e) {
        n._latestEditorState = e, n.props.onChange(e)
      }), o(s(n), "onDragEnter", function() {
        n._dragCount++
      }), o(s(n), "onDragLeave", function() {
        n._dragCount--, 0 === n._dragCount && n.exitCurrentMode()
      }), n._blockSelectEvents = false, n._clipboard = null, n._handler = null, n._dragCount = 0, n._editorKey = t.editorKey || I(), n._placeholderAccessibilityID = "placeholder-" + n._editorKey, n._latestEditorState = t.editorState, n._latestCommittedEditorState = t.editorState, n._onBeforeInput = n._buildHandler("onBeforeInput"), n._onBlur = n._buildHandler("onBlur"), n._onCharacterData = n._buildHandler("onCharacterData"), n._onCompositionEnd = n._buildHandler("onCompositionEnd"), n._onCompositionStart = n._buildHandler("onCompositionStart"), n._onCopy = n._buildHandler("onCopy"), n._onCut = n._buildHandler("onCut"), n._onDragEnd = n._buildHandler("onDragEnd"), n._onDragOver = n._buildHandler("onDragOver"), n._onDragStart = n._buildHandler("onDragStart"), n._onDrop = n._buildHandler("onDrop"), n._onInput = n._buildHandler("onInput"), n._onFocus = n._buildHandler("onFocus"), n._onKeyDown = n._buildHandler("onKeyDown"), n._onKeyPress = n._buildHandler("onKeyPress"), n._onKeyUp = n._buildHandler("onKeyUp"), n._onMouseDown = n._buildHandler("onMouseDown"), n._onMouseUp = n._buildHandler("onMouseUp"), n._onPaste = n._buildHandler("onPaste"), n._onSelect = n._buildHandler("onSelect"), n.getEditorKey = function() {
        return n._editorKey
      }, n.state = {
        contentsKey: 0
      }, n
    }
    l(t, e);
    var r = t.prototype;
    return r._buildHandler = function(e) {
      var t = this;
      return function(n) {
        if (!t.props.readOnly) {
          var r = t._handler && t._handler[e];
          r && (h ? h(function() {
            return r(t, n)
          }) : r(t, n))
        }
      }
    }, r._showPlaceholder = function() {
      return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText()
    }, r._renderPlaceholder = function() {
      if (this._showPlaceholder()) {
        var e = {
          text: w(this.props.placeholder),
          editorState: this.props.editorState,
          textAlignment: this.props.textAlignment,
          accessibilityID: this._placeholderAccessibilityID
        };
        return y.createElement(m, e)
      }
      return null
    }, r.render = function() {
      var e = this.props,
        t = e.blockRenderMap,
        n = e.blockRendererFn,
        r = e.blockStyleFn,
        s = e.customStyleFn,
        o = e.customStyleMap,
        l = e.editorState,
        c = e.preventScroll,
        d = e.readOnly,
        p = e.textAlignment,
        _ = e.textDirectionality,
        h = A({
          "DraftEditor/root": true,
          "DraftEditor/alignLeft": "left" === p,
          "DraftEditor/alignRight": "right" === p,
          "DraftEditor/alignCenter": "center" === p
        }),
        m = {
          outline: "none",
          userSelect: "text",
          WebkitUserSelect: "text",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word"
        },
        g = this.props.role || "textbox",
        E = "combobox" === g ? !!this.props.ariaExpanded : null,
        b = {
          blockRenderMap: t,
          blockRendererFn: n,
          blockStyleFn: r,
          customStyleMap: a({}, u, o),
          customStyleFn: s,
          editorKey: this._editorKey,
          editorState: l,
          preventScroll: c,
          textDirectionality: _
        };
      return y.createElement("div", {
        className: h
      }, this._renderPlaceholder(), y.createElement("div", {
        className: A("DraftEditor/editorContainer"),
        ref: this._handleEditorContainerRef
      }, y.createElement("div", {
        "aria-activedescendant": d ? null : this.props.ariaActiveDescendantID,
        "aria-autocomplete": d ? null : this.props.ariaAutoComplete,
        "aria-controls": d ? null : this.props.ariaControls,
        "aria-describedby": this.props.ariaDescribedBy || this._placeholderAccessibilityID,
        "aria-expanded": d ? null : E,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-multiline": this.props.ariaMultiline,
        "aria-owns": d ? null : this.props.ariaOwneeID,
        autoCapitalize: this.props.autoCapitalize,
        autoComplete: this.props.autoComplete,
        autoCorrect: this.props.autoCorrect,
        className: A({
          notranslate: !d,
          "public/DraftEditor/content": true
        }),
        contentEditable: !d,
        "data-testid": this.props.webDriverTestID,
        onBeforeInput: this._onBeforeInput,
        onBlur: this._onBlur,
        onCompositionEnd: this._onCompositionEnd,
        onCompositionStart: this._onCompositionStart,
        onCopy: this._onCopy,
        onCut: this._onCut,
        onDragEnd: this._onDragEnd,
        onDragEnter: this.onDragEnter,
        onDragLeave: this.onDragLeave,
        onDragOver: this._onDragOver,
        onDragStart: this._onDragStart,
        onDrop: this._onDrop,
        onFocus: this._onFocus,
        onInput: this._onInput,
        onKeyDown: this._onKeyDown,
        onKeyPress: this._onKeyPress,
        onKeyUp: this._onKeyUp,
        onMouseUp: this._onMouseUp,
        onPaste: this._onPaste,
        onSelect: this._onSelect,
        ref: this.props.editorRef,
        role: d ? null : g,
        spellCheck: D && this.props.spellCheck,
        style: m,
        suppressContentEditableWarning: true,
        tabIndex: this.props.tabIndex
      }, y.createElement(j, {
        editor: this,
        editorState: l
      }), y.createElement(f, i({}, b, {
        key: "contents" + this.state.contentsKey
      })))))
    }, r.componentDidMount = function() {
      this._blockSelectEvents = false, !L && C("draft_ods_enabled") && (L = true, g.initODS()), this.setMode("edit"), P && (this.editor ? this.editor.ownerDocument.execCommand("AutoUrlDetect", false, false) : n.g.execCommand("AutoUrlDetect", false, false))
    }, r.componentDidUpdate = function() {
      this._blockSelectEvents = false, this._latestEditorState = this.props.editorState, this._latestCommittedEditorState = this.props.editorState
    }, t
  }(Chunk64700.Component);
o(M, "defaultProps", {
  blockRenderMap: Chunk611668,
  blockRendererFn: function() {
    return null
  },
  blockStyleFn: function() {
    return ""
  },
  keyBindingFn: Chunk673776,
  readOnly: false,
  spellCheck: false,
  stripPastedStyles: false
}), module.exports = M