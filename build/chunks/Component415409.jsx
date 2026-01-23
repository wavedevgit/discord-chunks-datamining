/** Chunk was on web.js **/
/** chunk id: 415409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => k
}), require("./896048.js"), require("./321073.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk607399 = require("./607399.js"),
  Chunk465532 = require("./465532.js"),
  Chunk608299 = require("./608299.js"),
  Chunk23658 = require("./23658.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk565150 = require("./565150.js"),
  Chunk861382 = require("./861382.js"),
  Chunk626584 = require("./626584.js"),
  Chunk522602 = require("./522602.js"),
  Chunk234320 = require("./234320.jsx"),
  Chunk453771 = require("./453771.js"),
  Chunk741394 = require("./741394.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk579940 = require("./579940.js"),
  Chunk177686 = require("./177686.js"),
  Chunk133684 = require("./133684.jsx"),
  Chunk827977 = require("./827977.jsx"),
  Chunk323350 = require("./323350.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function D(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      P(e, t, n[t])
    })
  }
  return e
}

function x(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function L(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
new Chunk626584.A("ChannelEditor.tsx");
let j = function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  },
  M = 1e3;
class k extends Chunk64700.Component {
  _getEditorWindow() {
    var e, t, n, r, i;
    let a = null == (i = this.ref) || null == (r = i.current) || null == (n = r.getSlateEditor) || null == (t = n.call(r)) || null == (e = t.windowContext) ? true : e.renderWindow;
    if (null == this._cachedEditorWindow || this._cachedEditorWindow !== a) {
      if (null != this._cachedEditorWindow && null == a) return null;
      this._cachedEditorWindow = null != a ? a : window
    }
    return this._cachedEditorWindow
  }
  componentDidMount() {
    this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload), this._initTimeoutId = setTimeout(() => void this._getEditorWindow(), M)
  }
  componentDidUpdate(e) {
    if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
      var t, n;
      let e;
      e = this.props.useSlate ? this.props.textValue : (0, C.WO)(this.props.richValue, {
        mode: "plain"
      }), null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, v.x7)(e))
    } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
  }
  componentWillUnmount() {
    var e, t;
    this.saveCurrentText(), null == (e = (t = this)._unsubscribe) || e.call(t), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null, this._cachedEditorWindow = null, null != this._initTimeoutId && clearTimeout(this._initTimeoutId)
  }
  blur() {
    let e = this.ref.current;
    null != e && e.blur()
  }
  submit(e) {
    var t;
    null == (t = this.ref.current) || t.submit(e)
  }
  insertEmoji(e) {
    let {
      emoji: t,
      willClose: n
    } = e, r = this.ref.current;
    null != t && null != r && (r.insertEmoji({
      emoji: t,
      addSpace: n
    }), n && this.focus())
  }
  insertGIF(e) {
    let {
      textValue: t
    } = this.props, n = this.ref.current;
    null != e && null != n && (t.endsWith(" ") || n.insertText(" ", true, false), n.insertText(e.url))
  }
  insertSound(e) {
    let {
      textValue: t
    } = this.props, n = this.ref.current;
    null != e && null != n && (t.endsWith(" ") || n.insertText(" ", true, false), n.insertText("<sound:".concat(e.guildId, ":").concat(e.soundId, ">"), true, true))
  }
  handleOuterClick() {
    this.focus()
  }
  clearValue() {
    let {
      channel: e,
      type: t
    } = this.props;
    this.setState({
      focused: true,
      submitting: false
    }), u.A.saveDraft(e.id, "", t.drafts.type)
  }
  getCurrentWord() {
    var e;
    let t = this.ref.current;
    return null != (e = null == t ? true : t.getCurrentWord()) ? e : {
      word: null,
      isAtStart: false
    }
  }
  insertAutocomplete(e, t, n) {
    let r = this.ref.current;
    return null == r ? true : r.insertAutocomplete(e, t, n)
  }
  insertInlineAutocompleteElement(e) {
    let t = this.ref.current;
    return null == t ? true : t.insertInlineAutocompleteInput(e)
  }
  replaceInlineAutocompleteInput(e, t, n) {
    let r = this.ref.current;
    return null == r ? true : r.replaceInlineAutocompleteInput(e, t, n)
  }
  getCurrentCommandOption() {
    var e, t;
    let n = this.ref.current;
    return null != (e = null == n || null == (t = n.getCurrentCommandOption) ? true : t.call(n)) ? e : null
  }
  getCurrentCommandOptionValue() {
    var e, t;
    let n = this.ref.current;
    return null != (e = null == n || null == (t = n.getCurrentCommandOptionValue) ? true : t.call(n)) ? e : []
  }
  getCommandOptionValues() {
    var e, t;
    let n = this.ref.current;
    return null != (e = null == n || null == (t = n.getCommandOptionValues) ? true : t.call(n)) ? e : {}
  }
  getFirstText() {
    var e;
    let t = this.ref.current;
    return null != (e = null == t ? true : t.getFirstText()) ? e : null
  }
  getSlateEditor() {
    var e, t;
    let n = this.ref.current;
    return null != (e = null == n || null == (t = n.getSlateEditor) ? true : t.call(n)) ? e : null
  }
  fixFocus(e) {
    e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus()
  }
  appendText(e, t) {
    var n;
    let r = !(arguments.length > 2) || true === arguments[2] || arguments[2];
    null == (n = this.ref.current) || n.insertText(e, t, r)
  }
  getPlaceholder() {
    let {
      disabled: e,
      placeholder: t,
      isPreviewing: n,
      showValueWhenDisabled: r
    } = this.props;
    return e && !n ? r ? "" : w.intl.string(w.t.IYKTTc) : t
  }
  render() {
    var e, t, n, i, a, o;
    let {
      textValue: l,
      richValue: u,
      disabled: d,
      onChange: f,
      onKeyDown: p,
      onResize: _,
      onSubmit: h,
      onSubmitFailure: m,
      channel: g,
      type: y,
      useSlate: b,
      spellcheckEnabled: A,
      useNewSlashCommands: I,
      canOnlyUseTextCommands: C,
      className: w,
      id: P,
      required: x,
      maxCharacterCount: j,
      allowNewLines: M,
      isEditorIdle: k,
      currentAutocompleteType: U,
      "aria-describedby": G,
      "aria-labelledby": V,
      accessibilityLabel: F,
      showValueWhenDisabled: B
    } = this.props, {
      submitting: H,
      popup: Y
    } = this.state, W = {
      channel: g,
      className: s()(w, R.Tg, {
        [R.w5]: b,
        [R.Rr]: d || H
      }),
      id: P,
      placeholder: this.getPlaceholder(),
      required: x,
      accessibilityLabel: F,
      disabled: d || false,
      submitting: H,
      isEdit: y === O.oU.EDIT,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onPaste: this.handlePaste,
      onTab: this.handleTab,
      onEnter: this.handleEnter,
      moveSelection: this.handleMoveSelection,
      maybeShowAutocomplete: this.maybeShowAutocomplete,
      hideAutocomplete: this.hideAutocomplete,
      allowNewLines: M,
      onChange: f,
      onResize: _,
      onKeyDown: p,
      onSubmit: h,
      textAreaPaddingClassName: s()({
        [R.H$]: y === O.oU.CREATE_FORUM_POST,
        [R.g_]: y === O.oU.CUSTOM_GIFT,
        [R.Yg]: y === O.oU.USER_PROFILE,
        [R.$$]: y === O.oU.OVERLAY_INLINE_REPLY
      }),
      spellcheckEnabled: A,
      useNewSlashCommands: I,
      isEditorIdle: k,
      currentAutocompleteType: U,
      disableAutoFocus: c.Fr || null != (e = y.disableAutoFocus) && e,
      disableEnterToSubmit: null != (t = null == (a = y.submit) ? true : a.disableEnterToSubmit) && t,
      "aria-controls": null != (n = Y.id) ? n : true,
      "aria-haspopup": "listbox",
      "aria-expanded": null !== Y.id || true,
      "aria-activedescendant": null != (i = Y.activeDescendant) ? i : true,
      "aria-invalid": l.length > j,
      "aria-describedby": G,
      "aria-labelledby": V,
      "aria-autocomplete": "list"
    }, K = b ? (0, r.jsx)(T.A, L(D({
      ref: this.ref
    }, W), {
      type: y,
      value: d && !B ? (0, v.x7)("") : u,
      canUseCommands: null == (o = y.commands) ? true : o.enabled,
      canOnlyUseTextCommands: C,
      onSubmitFailure: m
    })) : (0, r.jsx)(S.A, L(D({
      ref: this.ref
    }, W), {
      value: d && !B ? "" : l
    }));
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E.EG, {
        event: N.jej.INSERT_TEXT,
        handler: this.handleInsertText
      }), (0, r.jsx)(E.EG, {
        event: N.jej.CLEAR_TEXT,
        handler: this.handleClearText
      }), K]
    })
  }
  constructor(e) {
    var t;
    super(e), t = this, P(this, "ref", i.createRef()), P(this, "_focusBlurQueue", Promise.resolve()), P(this, "_unsubscribe", true), P(this, "_initTimeoutId", null), P(this, "_cachedEditorWindow", null), P(this, "handleSelectionChange", () => {
      if (this.props.focused) {
        var e, t, n;
        this.props.onSelectionChanged(null == (t = (n = document).getSelection) || null == (e = t.call(n)) ? true : e.toString())
      }
    }), P(this, "focus", () => {
      var e;
      null == (e = this._focusBlurQueue) || e.then(() => {
        this.setState({
          focused: true
        }, () => {
          let e = this.ref.current;
          null != e && e.focus()
        })
      })
    }), P(this, "saveCurrentText", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        {
          type: n,
          channel: r
        } = t.props;
      n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id))
    }), P(this, "handleBeforeUnload", () => this.saveCurrentText()), P(this, "saveCurrentTextThrottled", l().throttle(this.saveCurrentText.bind(this, false), 500)), P(this, "handleEnter", e => {
      var t, n;
      return null == (t = (n = this.props).onEnter) ? true : t.call(n, e)
    }), P(this, "handleTab", () => {
      var e, t;
      return null == (e = (t = this.props).onTab) ? true : e.call(t)
    }), P(this, "handleMoveSelection", e => {
      var t, n;
      return null == (t = (n = this.props).onMoveSelection) ? true : t.call(n, e)
    }), P(this, "maybeShowAutocomplete", () => {
      var e, t;
      return null == (e = (t = this.props).onMaybeShowAutocomplete) ? true : e.call(t)
    }), P(this, "hideAutocomplete", () => {
      var e, t;
      return null == (e = (t = this.props).onHideAutocomplete) ? true : e.call(t)
    }), P(this, "handleSaveCurrentText", e => {
      u.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
    }), P(this, "handleClearText", () => {
      var e, t;
      null == (e = (t = this.props).onChange) || e.call(t, null, "", (0, v.x7)(""))
    }), P(this, "handleInsertText", e => {
      let {
        plainText: t,
        rawText: n,
        addSpace: r = false
      } = e;
      this.props.disabled || (this.appendText(t, n, r), this.focus())
    }), P(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), n || this.setState({
        focused: true
      })
    }), P(this, "handleBlur", e => {
      let {
        onBlur: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), n && this.setState({
        focused: false
      })
    }), P(this, "handlePaste", e => {
      var t, n, r;
      let i = null == (r = e.target) || null == (n = r.ownerDocument) ? true : n.defaultView,
        {
          channel: a,
          canPasteFiles: s,
          uploadPromptCharacterCount: o,
          promptToUpload: l,
          maxCharacterCount: c,
          type: u
        } = this.props,
        m = null != i ? (0, I.VG)(i) : null,
        E = (0, I.W7)(),
        y = null != (t = null != m ? m : E) ? t : a,
        b = (0, I.qH)(i, this._getEditorWindow()) ? a : y;
      if (null == l || !b.isPrivate() && !s || b.isPrivate() && b.isManaged()) returnfalse;
      let O = e => {
          var t, n;
          let r = h.A.getActiveCommand(b.id);
          if (null == r) return l(e, b, u.drafts.type, {
            requireConfirm: true,
            origin: "clipboard"
          });
          let i = null != (t = u.drafts.commandType) ? t : u.drafts.type,
            a = null,
            s = h.A.getActiveOption(b.id);
          null != (a = (null == s ? true : s.type) === p.n4.ATTACHMENT ? s : null == (n = r.options) ? true : n.find(e => {
            if (e.type === p.n4.ATTACHMENT) return null == g.A.getUpload(b.id, e.name, i)
          })) && d.A.setFile({
            channelId: b.id,
            id: a.name,
            draftType: i,
            file: {
              id: a.name,
              platform: _.xz.WEB,
              file: e[0]
            }
          })
        },
        v = null != o ? o : c,
        {
          files: A,
          errors: S
        } = U(e.clipboardData, u.uploadLongMessages ? v : null);
      return (j("onPaste", [...e.clipboardData.items].map(e => {
        if ("file" !== e.kind) return {
          kind: e.kind,
          type: e.type
        };
        {
          let t = e.getAsFile();
          return {
            kind: e.kind,
            type: e.type,
            name: null == t ? true : t.name,
            path: null == t ? true : t.path
          }
        }
      })), 0 === A.length) ? ((null == S ? true : S.some(e => {
        let {
          error: t
        } = e;
        return "is_directory" === t
      })) && (0, f.openUploadError)({
        title: w.intl.string(w.t.azO1Pe),
        help: w.intl.string(w.t["Koklr/"])
      }), false) : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), O(A), this.focus(), true)
    }), this._unsubscribe = A.Y0.subscribe(e => {
      requestAnimationFrame(() => {
        this.setState({
          popup: e
        })
      })
    }), this.state = {
      focused: false,
      submitting: false,
      popup: A.Y0.getState()
    }
  }
}

function U(e, t) {
  var n, r, i, a, s;
  let o = [],
    l = [],
    c = null,
    u = null,
    d = [];
  for (let t of e.items)
    if ("file" === t.kind) {
      let e = null != (n = null != (r = null == (i = t.webkitGetAsEntry) ? true : i.call(t)) ? r : null == (a = t.getAsEntry) ? true : a.call(t)) ? n : null;
      if (null != e && false === e.isFile) {
        d.push({
          item: t,
          error: "is_directory"
        });
        continue
      }
      let s = t.getAsFile();
      if (null == s) continue;
      null != s.path && s.path.length > 0 ? o.push(s) : l.push(s)
    } else "string" === t.kind && ("text/plain" === t.type && null == c ? c = t : "text/html" === t.type && null == u && (u = t));
  if (o.length > 0) return {
    files: o,
    errors: d
  };
  if (l.length > 0) {
    if (1 === l.length && "image/png" === l[0].type && null != u) {
      let t = l[0],
        n = null != (s = G(e.getData(u.type))) ? s : t.name;
      return {
        files: [(0, y.VE)(t, n, t.type)],
        errors: d
      }
    }
    return {
      files: l,
      errors: d
    }
  }
  if (null != c && null != t) {
    let n = e.getData(c.type);
    if (n.length > t) {
      let e = new Blob([n], {
        type: "text/plain"
      });
      return {
        files: [(0, y.VE)(e, "message.txt", "text/plain")],
        convertedStringToFile: true,
        errors: d
      }
    }
  }
  return {
    files: [],
    errors: d
  }
}

function G(e) {
  let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
  if (null != t) {
    let e;
    try {
      let {
        pathname: n
      } = new URL(t.src);
      null != n && n.length > 0 && (e = (0, b.kh)(n))
    } catch (e) {}
    if (null != e && e.length > 0) return "".concat(e, ".png")
  }
}