/** Chunk was on 38939 **/
/** chunk id: 52550, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk724039 = require("./724039.js");

function i() {
  return (i = n || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
    }
    return t
  }).apply(this, arguments)
}

function o(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable
    }))), n.forEach(function(e) {
      s(t, e, r[e])
    })
  }
  return t
}

function a(t) {
  if (true === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function s(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}

function u(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
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
  M = Chunk573750.isBrowser("IE"),
  A = !M,
  I = {
    edit: Chunk727055,
    composite: Chunk212453,
    drag: Chunk327229,
    cut: null,
    render: null
  },
  B = false,
  L = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    u(e, t);
    var r = e.prototype;
    return r.render = function() {
      return null
    }, r.componentDidMount = function() {
      this._update()
    }, r.componentDidUpdate = function() {
      this._update()
    }, r._update = function() {
      var t = this.props.editor;
      t._latestEditorState = this.props.editorState, t._blockSelectEvents = true
    }, e
  }(Chunk64700.Component),
  R = function(t) {
    function e(e) {
      var r;
      return s(a(r = t.call(this, e) || this), "_blockSelectEvents", true), s(a(r), "_clipboard", true), s(a(r), "_handler", true), s(a(r), "_dragCount", true), s(a(r), "_internalDrag", true), s(a(r), "_editorKey", true), s(a(r), "_placeholderAccessibilityID", true), s(a(r), "_latestEditorState", true), s(a(r), "_latestCommittedEditorState", true), s(a(r), "_pendingStateFromBeforeInput", true), s(a(r), "_onBeforeInput", true), s(a(r), "_onBlur", true), s(a(r), "_onCharacterData", true), s(a(r), "_onCompositionEnd", true), s(a(r), "_onCompositionStart", true), s(a(r), "_onCopy", true), s(a(r), "_onCut", true), s(a(r), "_onDragEnd", true), s(a(r), "_onDragOver", true), s(a(r), "_onDragStart", true), s(a(r), "_onDrop", true), s(a(r), "_onInput", true), s(a(r), "_onFocus", true), s(a(r), "_onKeyDown", true), s(a(r), "_onKeyPress", true), s(a(r), "_onKeyUp", true), s(a(r), "_onMouseDown", true), s(a(r), "_onMouseUp", true), s(a(r), "_onPaste", true), s(a(r), "_onSelect", true), s(a(r), "editor", true), s(a(r), "editorContainer", true), s(a(r), "focus", true), s(a(r), "blur", true), s(a(r), "setMode", true), s(a(r), "exitCurrentMode", true), s(a(r), "restoreEditorDOM", true), s(a(r), "setClipboard", true), s(a(r), "getClipboard", true), s(a(r), "getEditorKey", true), s(a(r), "update", true), s(a(r), "onDragEnter", true), s(a(r), "onDragLeave", true), s(a(r), "_handleEditorContainerRef", function(t) {
        r.editorContainer = t, r.editor = null !== t ? t.firstChild : null
      }), s(a(r), "focus", function(t) {
        var e = r.props.editorState,
          n = e.getSelection().getHasFocus(),
          i = r.editor;
        if (i) {
          var o = S.getScrollParent(i),
            a = t || E(o),
            s = a.x,
            u = a.y;
          K(i) || D(false), i.focus(), o === window ? window.scrollTo(s, u) : b.setTop(o, u), n || r.update(m.forceSelection(e, e.getSelection()))
        }
      }), s(a(r), "blur", function() {
        var t = r.editor;
        t && (K(t) || D(false), t.blur())
      }), s(a(r), "setMode", function(t) {
        var e = r.props,
          n = e.onPaste,
          i = e.onCut,
          a = e.onCopy,
          s = o({}, I.edit);
        n && (s.onPaste = n), i && (s.onCut = i), a && (s.onCopy = a), r._handler = o({}, I, {
          edit: s
        })[t]
      }), s(a(r), "exitCurrentMode", function() {
        r.setMode("edit")
      }), s(a(r), "restoreEditorDOM", function(t) {
        r.setState({
          contentsKey: r.state.contentsKey + 1
        }, function() {
          r.focus(t)
        })
      }), s(a(r), "setClipboard", function(t) {
        r._clipboard = t
      }), s(a(r), "getClipboard", function() {
        return r._clipboard
      }), s(a(r), "update", function(t) {
        r._latestEditorState = t, r.props.onChange(t)
      }), s(a(r), "onDragEnter", function() {
        r._dragCount++
      }), s(a(r), "onDragLeave", function() {
        r._dragCount--, 0 === r._dragCount && r.exitCurrentMode()
      }), r._blockSelectEvents = false, r._clipboard = null, r._handler = null, r._dragCount = 0, r._editorKey = e.editorKey || x(), r._placeholderAccessibilityID = "placeholder-" + r._editorKey, r._latestEditorState = e.editorState, r._latestCommittedEditorState = e.editorState, r._onBeforeInput = r._buildHandler("onBeforeInput"), r._onBlur = r._buildHandler("onBlur"), r._onCharacterData = r._buildHandler("onCharacterData"), r._onCompositionEnd = r._buildHandler("onCompositionEnd"), r._onCompositionStart = r._buildHandler("onCompositionStart"), r._onCopy = r._buildHandler("onCopy"), r._onCut = r._buildHandler("onCut"), r._onDragEnd = r._buildHandler("onDragEnd"), r._onDragOver = r._buildHandler("onDragOver"), r._onDragStart = r._buildHandler("onDragStart"), r._onDrop = r._buildHandler("onDrop"), r._onInput = r._buildHandler("onInput"), r._onFocus = r._buildHandler("onFocus"), r._onKeyDown = r._buildHandler("onKeyDown"), r._onKeyPress = r._buildHandler("onKeyPress"), r._onKeyUp = r._buildHandler("onKeyUp"), r._onMouseDown = r._buildHandler("onMouseDown"), r._onMouseUp = r._buildHandler("onMouseUp"), r._onPaste = r._buildHandler("onPaste"), r._onSelect = r._buildHandler("onSelect"), r.getEditorKey = function() {
        return r._editorKey
      }, r.state = {
        contentsKey: 0
      }, r
    }
    u(e, t);
    var n = e.prototype;
    return n._buildHandler = function(t) {
      var e = this;
      return function(r) {
        if (!e.props.readOnly) {
          var n = e._handler && e._handler[t];
          n && (g ? g(function() {
            return n(e, r)
          }) : n(e, r))
        }
      }
    }, n._showPlaceholder = function() {
      return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText()
    }, n._renderPlaceholder = function() {
      if (this._showPlaceholder()) {
        var t = {
          text: T(this.props.placeholder),
          editorState: this.props.editorState,
          textAlignment: this.props.textAlignment,
          accessibilityID: this._placeholderAccessibilityID
        };
        return _.createElement(y, t)
      }
      return null
    }, n.render = function() {
      var t = this.props,
        e = t.blockRenderMap,
        r = t.blockRendererFn,
        n = t.blockStyleFn,
        a = t.customStyleFn,
        s = t.customStyleMap,
        u = t.editorState,
        c = t.preventScroll,
        f = t.readOnly,
        h = t.textAlignment,
        d = t.textDirectionality,
        g = k({
          "DraftEditor/root": true,
          "DraftEditor/alignLeft": "left" === h,
          "DraftEditor/alignRight": "right" === h,
          "DraftEditor/alignCenter": "center" === h
        }),
        y = this.props.role || "textbox",
        v = "combobox" === y ? !!this.props.ariaExpanded : null,
        m = {
          blockRenderMap: e,
          blockRendererFn: r,
          blockStyleFn: n,
          customStyleMap: o({}, l, s),
          customStyleFn: a,
          editorKey: this._editorKey,
          editorState: u,
          preventScroll: c,
          textDirectionality: d
        };
      return _.createElement("div", {
        className: g
      }, this._renderPlaceholder(), _.createElement("div", {
        className: k("DraftEditor/editorContainer"),
        ref: this._handleEditorContainerRef
      }, _.createElement("div", {
        "aria-activedescendant": f ? null : this.props.ariaActiveDescendantID,
        "aria-autocomplete": f ? null : this.props.ariaAutoComplete,
        "aria-controls": f ? null : this.props.ariaControls,
        "aria-describedby": this.props.ariaDescribedBy || this._placeholderAccessibilityID,
        "aria-expanded": f ? null : v,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-multiline": this.props.ariaMultiline,
        "aria-owns": f ? null : this.props.ariaOwneeID,
        autoCapitalize: this.props.autoCapitalize,
        autoComplete: this.props.autoComplete,
        autoCorrect: this.props.autoCorrect,
        className: k({
          notranslate: !f,
          "public/DraftEditor/content": true
        }),
        contentEditable: !f,
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
        role: f ? null : y,
        spellCheck: A && this.props.spellCheck,
        style: {
          outline: "none",
          userSelect: "text",
          WebkitUserSelect: "text",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word"
        },
        suppressContentEditableWarning: true,
        tabIndex: this.props.tabIndex
      }, _.createElement(L, {
        editor: this,
        editorState: u
      }), _.createElement(p, i({}, m, {
        key: "contents" + this.state.contentsKey
      })))))
    }, n.componentDidMount = function() {
      this._blockSelectEvents = false, !B && O("draft_ods_enabled") && (B = true, v.initODS()), this.setMode("edit"), M && (this.editor ? this.editor.ownerDocument.execCommand("AutoUrlDetect", false, false) : r.g.execCommand("AutoUrlDetect", false, false))
    }, n.componentDidUpdate = function() {
      this._blockSelectEvents = false, this._latestEditorState = this.props.editorState, this._latestCommittedEditorState = this.props.editorState
    }, e
  }(Chunk64700.Component);
s(R, "defaultProps", {
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
}), module.exports = R