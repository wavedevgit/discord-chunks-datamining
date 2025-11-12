/** Chunk was on web.js **/
/** chunk id: 254736, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk381538 = require("./381538.js");

function i() {
  return (i = Chunk381538 || function(e) {
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
      s(e, t, n[t])
    })
  }
  return e
}

function o(e) {
  if (true === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function s(e, t, n) {
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
var Chunk901607 = require("./901607.js"),
  Chunk280451 = require("./280451.js"),
  Chunk655183 = require("./655183.js"),
  Chunk166589 = require("./166589.js"),
  Chunk542501 = require("./542501.js"),
  Chunk701871 = require("./701871.js"),
  Chunk141794 = require("./141794.js"),
  Chunk586953 = require("./586953.js"),
  Chunk618894 = require("./618894.js"),
  Chunk102736 = require("./102736.js"),
  Chunk647438 = require("./647438.js"),
  Chunk1231 = require("./1231.js"),
  Chunk292489 = require("./292489.js"),
  Chunk169774 = require("./169774.js"),
  Chunk606166 = require("./606166.js"),
  Chunk656367 = require("./656367.js"),
  Chunk551483 = require("./551483.js"),
  Chunk685536 = require("./685536.js"),
  Chunk740336 = require("./740336.js"),
  Chunk581079 = require("./581079.js"),
  Chunk246974 = require("./246974.js"),
  Chunk467159 = require("./467159.js"),
  D = Chunk169774.isBrowser("IE"),
  w = !D,
  x = {
    edit: Chunk701871,
    composite: Chunk655183,
    drag: Chunk542501,
    cut: null,
    render: null
  },
  L = false,
  M = function(e) {
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
  }(Chunk647438.Component),
  j = function(e) {
    function t(t) {
      var n;
      return s(o(n = e.call(this, t) || this), "_blockSelectEvents", true), s(o(n), "_clipboard", true), s(o(n), "_handler", true), s(o(n), "_dragCount", true), s(o(n), "_internalDrag", true), s(o(n), "_editorKey", true), s(o(n), "_placeholderAccessibilityID", true), s(o(n), "_latestEditorState", true), s(o(n), "_latestCommittedEditorState", true), s(o(n), "_pendingStateFromBeforeInput", true), s(o(n), "_onBeforeInput", true), s(o(n), "_onBlur", true), s(o(n), "_onCharacterData", true), s(o(n), "_onCompositionEnd", true), s(o(n), "_onCompositionStart", true), s(o(n), "_onCopy", true), s(o(n), "_onCut", true), s(o(n), "_onDragEnd", true), s(o(n), "_onDragOver", true), s(o(n), "_onDragStart", true), s(o(n), "_onDrop", true), s(o(n), "_onInput", true), s(o(n), "_onFocus", true), s(o(n), "_onKeyDown", true), s(o(n), "_onKeyPress", true), s(o(n), "_onKeyUp", true), s(o(n), "_onMouseDown", true), s(o(n), "_onMouseUp", true), s(o(n), "_onPaste", true), s(o(n), "_onSelect", true), s(o(n), "editor", true), s(o(n), "editorContainer", true), s(o(n), "focus", true), s(o(n), "blur", true), s(o(n), "setMode", true), s(o(n), "exitCurrentMode", true), s(o(n), "restoreEditorDOM", true), s(o(n), "setClipboard", true), s(o(n), "getClipboard", true), s(o(n), "getEditorKey", true), s(o(n), "update", true), s(o(n), "onDragEnter", true), s(o(n), "onDragLeave", true), s(o(n), "_handleEditorContainerRef", function(e) {
        n.editorContainer = e, n.editor = null !== e ? e.firstChild : null
      }), s(o(n), "focus", function(e) {
        var t = n.props.editorState,
          r = t.getSelection().getHasFocus(),
          i = n.editor;
        if (i) {
          var a = O.getScrollParent(i),
            o = e || A(a),
            s = o.x,
            l = o.y;
          R(i) || N(false), i.focus(), a === window ? window.scrollTo(s, l) : y.setTop(a, l), r || n.update(E.forceSelection(t, t.getSelection()))
        }
      }), s(o(n), "blur", function() {
        var e = n.editor;
        e && (R(e) || N(false), e.blur())
      }), s(o(n), "setMode", function(e) {
        var t = n.props,
          r = t.onPaste,
          i = t.onCut,
          o = t.onCopy,
          s = a({}, x.edit);
        r && (s.onPaste = r), i && (s.onCut = i), o && (s.onCopy = o), n._handler = a({}, x, {
          edit: s
        })[e]
      }), s(o(n), "exitCurrentMode", function() {
        n.setMode("edit")
      }), s(o(n), "restoreEditorDOM", function(e) {
        n.setState({
          contentsKey: n.state.contentsKey + 1
        }, function() {
          n.focus(e)
        })
      }), s(o(n), "setClipboard", function(e) {
        n._clipboard = e
      }), s(o(n), "getClipboard", function() {
        return n._clipboard
      }), s(o(n), "update", function(e) {
        n._latestEditorState = e, n.props.onChange(e)
      }), s(o(n), "onDragEnter", function() {
        n._dragCount++
      }), s(o(n), "onDragLeave", function() {
        n._dragCount--, 0 === n._dragCount && n.exitCurrentMode()
      }), n._blockSelectEvents = false, n._clipboard = null, n._handler = null, n._dragCount = 0, n._editorKey = t.editorKey || T(), n._placeholderAccessibilityID = "placeholder-" + n._editorKey, n._latestEditorState = t.editorState, n._latestCommittedEditorState = t.editorState, n._onBeforeInput = n._buildHandler("onBeforeInput"), n._onBlur = n._buildHandler("onBlur"), n._onCharacterData = n._buildHandler("onCharacterData"), n._onCompositionEnd = n._buildHandler("onCompositionEnd"), n._onCompositionStart = n._buildHandler("onCompositionStart"), n._onCopy = n._buildHandler("onCopy"), n._onCut = n._buildHandler("onCut"), n._onDragEnd = n._buildHandler("onDragEnd"), n._onDragOver = n._buildHandler("onDragOver"), n._onDragStart = n._buildHandler("onDragStart"), n._onDrop = n._buildHandler("onDrop"), n._onInput = n._buildHandler("onInput"), n._onFocus = n._buildHandler("onFocus"), n._onKeyDown = n._buildHandler("onKeyDown"), n._onKeyPress = n._buildHandler("onKeyPress"), n._onKeyUp = n._buildHandler("onKeyUp"), n._onMouseDown = n._buildHandler("onMouseDown"), n._onMouseUp = n._buildHandler("onMouseUp"), n._onPaste = n._buildHandler("onPaste"), n._onSelect = n._buildHandler("onSelect"), n.getEditorKey = function() {
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
          text: P(this.props.placeholder),
          editorState: this.props.editorState,
          textAlignment: this.props.textAlignment,
          accessibilityID: this._placeholderAccessibilityID
        };
        return b.createElement(m, e)
      }
      return null
    }, r.render = function() {
      var e = this.props,
        t = e.blockRenderMap,
        n = e.blockRendererFn,
        r = e.blockStyleFn,
        o = e.customStyleFn,
        s = e.customStyleMap,
        l = e.editorState,
        c = e.preventScroll,
        d = e.readOnly,
        _ = e.textAlignment,
        p = e.textDirectionality,
        h = I({
          "DraftEditor/root": true,
          "DraftEditor/alignLeft": "left" === _,
          "DraftEditor/alignRight": "right" === _,
          "DraftEditor/alignCenter": "center" === _
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
        y = {
          blockRenderMap: t,
          blockRendererFn: n,
          blockStyleFn: r,
          customStyleMap: a({}, u, s),
          customStyleFn: o,
          editorKey: this._editorKey,
          editorState: l,
          preventScroll: c,
          textDirectionality: p
        };
      return b.createElement("div", {
        className: h
      }, this._renderPlaceholder(), b.createElement("div", {
        className: I("DraftEditor/editorContainer"),
        ref: this._handleEditorContainerRef
      }, b.createElement("div", {
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
        className: I({
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
        spellCheck: w && this.props.spellCheck,
        style: m,
        suppressContentEditableWarning: true,
        tabIndex: this.props.tabIndex
      }, b.createElement(M, {
        editor: this,
        editorState: l
      }), b.createElement(f, i({}, y, {
        key: "contents" + this.state.contentsKey
      })))))
    }, r.componentDidMount = function() {
      this._blockSelectEvents = false, !L && C("draft_ods_enabled") && (L = true, g.initODS()), this.setMode("edit"), D && (this.editor ? this.editor.ownerDocument.execCommand("AutoUrlDetect", false, false) : n.g.execCommand("AutoUrlDetect", false, false))
    }, r.componentDidUpdate = function() {
      this._blockSelectEvents = false, this._latestEditorState = this.props.editorState, this._latestCommittedEditorState = this.props.editorState
    }, t
  }(Chunk647438.Component);
s(j, "defaultProps", {
  blockRenderMap: Chunk901607,
  blockRendererFn: function() {
    return null
  },
  blockStyleFn: function() {
    return ""
  },
  keyBindingFn: Chunk551483,
  readOnly: false,
  spellCheck: false,
  stripPastedStyles: false
}), module.exports = j