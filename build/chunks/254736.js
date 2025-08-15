/** Chunk was on 91584 **/
/** chunk id: 254736, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk381538 = require("./381538.js");

function i() {
  return (i = Chunk381538 || function(t) {
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
      u(t, e, r[e])
    })
  }
  return t
}

function a(t) {
  if (true === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t
}

function u(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[e] = r, t
}

function s(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
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
  M = Chunk169774.isBrowser("IE"),
  A = !M,
  I = {
    edit: Chunk701871,
    composite: Chunk655183,
    drag: Chunk542501,
    cut: null,
    render: null
  },
  B = false,
  L = function(t) {
    function e() {
      return t.apply(this, arguments) || this
    }
    s(e, t);
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
  }(Chunk647438.Component),
  R = function(t) {
    function e(e) {
      var r;
      return u(a(r = t.call(this, e) || this), "_blockSelectEvents", true), u(a(r), "_clipboard", true), u(a(r), "_handler", true), u(a(r), "_dragCount", true), u(a(r), "_internalDrag", true), u(a(r), "_editorKey", true), u(a(r), "_placeholderAccessibilityID", true), u(a(r), "_latestEditorState", true), u(a(r), "_latestCommittedEditorState", true), u(a(r), "_pendingStateFromBeforeInput", true), u(a(r), "_onBeforeInput", true), u(a(r), "_onBlur", true), u(a(r), "_onCharacterData", true), u(a(r), "_onCompositionEnd", true), u(a(r), "_onCompositionStart", true), u(a(r), "_onCopy", true), u(a(r), "_onCut", true), u(a(r), "_onDragEnd", true), u(a(r), "_onDragOver", true), u(a(r), "_onDragStart", true), u(a(r), "_onDrop", true), u(a(r), "_onInput", true), u(a(r), "_onFocus", true), u(a(r), "_onKeyDown", true), u(a(r), "_onKeyPress", true), u(a(r), "_onKeyUp", true), u(a(r), "_onMouseDown", true), u(a(r), "_onMouseUp", true), u(a(r), "_onPaste", true), u(a(r), "_onSelect", true), u(a(r), "editor", true), u(a(r), "editorContainer", true), u(a(r), "focus", true), u(a(r), "blur", true), u(a(r), "setMode", true), u(a(r), "exitCurrentMode", true), u(a(r), "restoreEditorDOM", true), u(a(r), "setClipboard", true), u(a(r), "getClipboard", true), u(a(r), "getEditorKey", true), u(a(r), "update", true), u(a(r), "onDragEnter", true), u(a(r), "onDragLeave", true), u(a(r), "_handleEditorContainerRef", function(t) {
        r.editorContainer = t, r.editor = null !== t ? t.firstChild : null
      }), u(a(r), "focus", function(t) {
        var e = r.props.editorState,
          n = e.getSelection().getHasFocus(),
          i = r.editor;
        if (i) {
          var o = S.getScrollParent(i),
            a = t || E(o),
            u = a.x,
            s = a.y;
          K(i) || O(false), i.focus(), o === window ? window.scrollTo(u, s) : b.setTop(o, s), n || r.update(m.forceSelection(e, e.getSelection()))
        }
      }), u(a(r), "blur", function() {
        var t = r.editor;
        t && (K(t) || O(false), t.blur())
      }), u(a(r), "setMode", function(t) {
        var e = r.props,
          n = e.onPaste,
          i = e.onCut,
          a = e.onCopy,
          u = o({}, I.edit);
        n && (u.onPaste = n), i && (u.onCut = i), a && (u.onCopy = a), r._handler = o({}, I, {
          edit: u
        })[t]
      }), u(a(r), "exitCurrentMode", function() {
        r.setMode("edit")
      }), u(a(r), "restoreEditorDOM", function(t) {
        r.setState({
          contentsKey: r.state.contentsKey + 1
        }, function() {
          r.focus(t)
        })
      }), u(a(r), "setClipboard", function(t) {
        r._clipboard = t
      }), u(a(r), "getClipboard", function() {
        return r._clipboard
      }), u(a(r), "update", function(t) {
        r._latestEditorState = t, r.props.onChange(t)
      }), u(a(r), "onDragEnter", function() {
        r._dragCount++
      }), u(a(r), "onDragLeave", function() {
        r._dragCount--, 0 === r._dragCount && r.exitCurrentMode()
      }), r._blockSelectEvents = false, r._clipboard = null, r._handler = null, r._dragCount = 0, r._editorKey = e.editorKey || k(), r._placeholderAccessibilityID = "placeholder-" + r._editorKey, r._latestEditorState = e.editorState, r._latestCommittedEditorState = e.editorState, r._onBeforeInput = r._buildHandler("onBeforeInput"), r._onBlur = r._buildHandler("onBlur"), r._onCharacterData = r._buildHandler("onCharacterData"), r._onCompositionEnd = r._buildHandler("onCompositionEnd"), r._onCompositionStart = r._buildHandler("onCompositionStart"), r._onCopy = r._buildHandler("onCopy"), r._onCut = r._buildHandler("onCut"), r._onDragEnd = r._buildHandler("onDragEnd"), r._onDragOver = r._buildHandler("onDragOver"), r._onDragStart = r._buildHandler("onDragStart"), r._onDrop = r._buildHandler("onDrop"), r._onInput = r._buildHandler("onInput"), r._onFocus = r._buildHandler("onFocus"), r._onKeyDown = r._buildHandler("onKeyDown"), r._onKeyPress = r._buildHandler("onKeyPress"), r._onKeyUp = r._buildHandler("onKeyUp"), r._onMouseDown = r._buildHandler("onMouseDown"), r._onMouseUp = r._buildHandler("onMouseUp"), r._onPaste = r._buildHandler("onPaste"), r._onSelect = r._buildHandler("onSelect"), r.getEditorKey = function() {
        return r._editorKey
      }, r.state = {
        contentsKey: 0
      }, r
    }
    s(e, t);
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
        u = t.customStyleMap,
        s = t.editorState,
        c = t.preventScroll,
        f = t.readOnly,
        h = t.textAlignment,
        d = t.textDirectionality,
        g = x({
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
          customStyleMap: o({}, l, u),
          customStyleFn: a,
          editorKey: this._editorKey,
          editorState: s,
          preventScroll: c,
          textDirectionality: d
        };
      return _.createElement("div", {
        className: g
      }, this._renderPlaceholder(), _.createElement("div", {
        className: x("DraftEditor/editorContainer"),
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
        className: x({
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
        editorState: s
      }), _.createElement(p, i({}, m, {
        key: "contents" + this.state.contentsKey
      })))))
    }, n.componentDidMount = function() {
      this._blockSelectEvents = false, !B && D("draft_ods_enabled") && (B = true, v.initODS()), this.setMode("edit"), M && (this.editor ? this.editor.ownerDocument.execCommand("AutoUrlDetect", false, false) : r.g.execCommand("AutoUrlDetect", false, false))
    }, n.componentDidUpdate = function() {
      this._blockSelectEvents = false, this._latestEditorState = this.props.editorState, this._latestCommittedEditorState = this.props.editorState
    }, e
  }(Chunk647438.Component);
u(R, "defaultProps", {
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
}), module.exports = R