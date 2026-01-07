/** Chunk was on web.js **/
/** chunk id: 667829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk729594 = require("./729594.js"),
  Chunk873546 = require("./873546.js"),
  Chunk430742 = require("./430742.js"),
  Chunk166459 = require("./166459.js"),
  Chunk531643 = require("./531643.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk476326 = require("./476326.js"),
  Chunk998698 = require("./998698.js"),
  Chunk710845 = require("./710845.js"),
  Chunk117530 = require("./117530.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk403182 = require("./403182.js"),
  Chunk137058 = require("./137058.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk30465 = require("./30465.js"),
  Chunk330122 = require("./330122.js"),
  Chunk140963 = require("./140963.jsx"),
  Chunk4484 = require("./4484.jsx"),
  Chunk925994 = require("./925994.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk72775 = require("./72775.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
new Chunk710845.Z("ChannelEditor.tsx");
let M = function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  },
  k = 1e3;
class U extends Chunk473749.Component {
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
    this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload), this._initTimeoutId = setTimeout(() => void this._getEditorWindow(), k)
  }
  componentDidUpdate(e) {
    if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
      var t, n;
      let e;
      e = this.props.useSlate ? this.props.textValue : (0, N.sk)(this.props.richValue, {
        mode: "plain"
      }), null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, S.JM)(e))
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
    }), d.Z.saveDraft(e.id, "", t.drafts.type)
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
    return null != (t = null == n || null == (e = n.getCurrentCommandOption) ? true : e.call(n)) ? t : null
  }
  getCurrentCommandOptionValue() {
    var e, t;
    let n = this.ref.current;
    return null != (t = null == n || null == (e = n.getCurrentCommandOptionValue) ? true : e.call(n)) ? t : []
  }
  getCommandOptionValues() {
    var e, t;
    let n = this.ref.current;
    return null != (t = null == n || null == (e = n.getCommandOptionValues) ? true : e.call(n)) ? t : {}
  }
  getFirstText() {
    var e;
    let t = this.ref.current;
    return null != (e = null == t ? true : t.getFirstText()) ? e : null
  }
  getSlateEditor() {
    var e, t;
    let n = this.ref.current;
    return null != (t = null == n || null == (e = n.getSlateEditor) ? true : e.call(n)) ? t : null
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
    return e && !n ? r ? "" : R.intl.string(R.t.IYKTTc) : t
  }
  render() {
    var e, t, n, i, a, s;
    let {
      textValue: l,
      richValue: c,
      disabled: d,
      onChange: f,
      onKeyDown: p,
      onResize: _,
      onSubmit: m,
      onSubmitFailure: h,
      channel: g,
      type: E,
      useSlate: y,
      spellcheckEnabled: O,
      useNewSlashCommands: I,
      canOnlyUseTextCommands: T,
      className: N,
      id: R,
      required: D,
      maxCharacterCount: L,
      allowNewLines: M,
      isEditorIdle: k,
      currentAutocompleteType: U,
      "aria-describedby": G,
      "aria-labelledby": Z,
      accessibilityLabel: F,
      showValueWhenDisabled: B
    } = this.props, {
      submitting: V,
      popup: H
    } = this.state, Y = {
      channel: g,
      className: o()(N, w.textArea, {
        [w.textAreaSlate]: y,
        [w.textAreaDisabled]: d || V
      }),
      id: R,
      placeholder: this.getPlaceholder(),
      required: D,
      accessibilityLabel: F,
      disabled: d || false,
      submitting: V,
      isEdit: E === v.Ie.EDIT,
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
      onSubmit: m,
      textAreaPaddingClassName: o()({
        [w.textAreaForPostCreation]: E === v.Ie.CREATE_FORUM_POST,
        [w.textAreaCustomGift]: E === v.Ie.CUSTOM_GIFT,
        [w.textAreaForUserProfile]: E === v.Ie.USER_PROFILE,
        [w.textAreaForOverlayInlineReply]: E === v.Ie.OVERLAY_INLINE_REPLY
      }),
      spellcheckEnabled: O,
      useNewSlashCommands: I,
      isEditorIdle: k,
      currentAutocompleteType: U,
      disableAutoFocus: u.tq || null != (n = E.disableAutoFocus) && n,
      disableEnterToSubmit: null != (i = null == (e = E.submit) ? true : e.disableEnterToSubmit) && i,
      "aria-controls": null != (a = H.id) ? a : true,
      "aria-haspopup": "listbox",
      "aria-expanded": null !== H.id || true,
      "aria-activedescendant": null != (s = H.activeDescendant) ? s : true,
      "aria-invalid": l.length > L,
      "aria-describedby": G,
      "aria-labelledby": Z,
      "aria-autocomplete": "list"
    }, W = y ? (0, r.jsx)(A.Z, j(x({
      ref: this.ref
    }, Y), {
      type: E,
      value: d && !B ? (0, S.JM)("") : c,
      canUseCommands: null == (t = E.commands) ? true : t.enabled,
      canOnlyUseTextCommands: T,
      onSubmitFailure: h
    })) : (0, r.jsx)(C.Z, j(x({
      ref: this.ref
    }, Y), {
      value: d && !B ? "" : l
    }));
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(b.d9, {
        event: P.CkL.INSERT_TEXT,
        handler: this.handleInsertText
      }), (0, r.jsx)(b.d9, {
        event: P.CkL.CLEAR_TEXT,
        handler: this.handleClearText
      }), W]
    })
  }
  constructor(e) {
    var t;
    super(e), t = this, D(this, "ref", i.createRef()), D(this, "_focusBlurQueue", Promise.resolve()), D(this, "_unsubscribe", true), D(this, "_initTimeoutId", null), D(this, "_cachedEditorWindow", null), D(this, "handleSelectionChange", () => {
      if (this.props.focused) {
        var e, t, n;
        this.props.onSelectionChanged(null == (t = (n = document).getSelection) || null == (e = t.call(n)) ? true : e.toString())
      }
    }), D(this, "focus", () => {
      var e;
      null == (e = this._focusBlurQueue) || e.then(() => {
        this.setState({
          focused: true
        }, () => {
          let e = this.ref.current;
          null != e && e.focus()
        })
      })
    }), D(this, "saveCurrentText", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        {
          type: n,
          channel: r
        } = t.props;
      n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id))
    }), D(this, "handleBeforeUnload", () => this.saveCurrentText()), D(this, "saveCurrentTextThrottled", l().throttle(this.saveCurrentText.bind(this, false), 500)), D(this, "handleEnter", e => {
      var t, n;
      return null == (t = (n = this.props).onEnter) ? true : t.call(n, e)
    }), D(this, "handleTab", () => {
      var e, t;
      return null == (e = (t = this.props).onTab) ? true : e.call(t)
    }), D(this, "handleMoveSelection", e => {
      var t, n;
      return null == (t = (n = this.props).onMoveSelection) ? true : t.call(n, e)
    }), D(this, "maybeShowAutocomplete", () => {
      var e, t;
      return null == (e = (t = this.props).onMaybeShowAutocomplete) ? true : e.call(t)
    }), D(this, "hideAutocomplete", () => {
      var e, t;
      return null == (e = (t = this.props).onHideAutocomplete) ? true : e.call(t)
    }), D(this, "handleSaveCurrentText", e => {
      d.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
    }), D(this, "handleClearText", () => {
      var e, t;
      null == (e = (t = this.props).onChange) || e.call(t, null, "", (0, S.JM)(""))
    }), D(this, "handleInsertText", e => {
      let {
        plainText: t,
        rawText: n,
        addSpace: r = false
      } = e;
      this.props.disabled || (this.appendText(t, n, r), this.focus())
    }), D(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), n || this.setState({
        focused: true
      })
    }), D(this, "handleBlur", e => {
      let {
        onBlur: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), n && this.setState({
        focused: false
      })
    }), D(this, "handlePaste", e => {
      var t, n, r;
      let i = null == (n = e.target) || null == (t = n.ownerDocument) ? true : t.defaultView,
        {
          channel: a,
          canPasteFiles: o,
          uploadPromptCharacterCount: s,
          promptToUpload: l,
          maxCharacterCount: c,
          type: u
        } = this.props,
        d = null != i ? (0, T.im)(i) : null,
        g = (0, T.Mo)(),
        b = null != (r = null != d ? d : g) ? r : a,
        y = (0, T._K)(i, this._getEditorWindow()) ? a : b;
      if (null == l || !y.isPrivate() && !o || y.isPrivate() && y.isManaged()) returnfalse;
      let O = (e, t) => {
          var n, r;
          let i = h.Z.getActiveCommand(y.id);
          if (null == i) return l(e, y, u.drafts.type, {
            requireConfirm: true,
            showLargeMessageDialog: t,
            origin: "clipboard"
          });
          let a = null != (n = u.drafts.commandType) ? n : u.drafts.type,
            o = null,
            s = h.Z.getActiveOption(y.id);
          null != (o = (null == s ? true : s.type) === _.jw.ATTACHMENT ? s : null == (r = i.options) ? true : r.find(e => {
            if (e.type === _.jw.ATTACHMENT) return null == E.Z.getUpload(y.id, e.name, a)
          })) && f.Z.setFile({
            channelId: y.id,
            id: o.name,
            draftType: a,
            file: {
              id: o.name,
              platform: m.ow.WEB,
              file: e[0]
            }
          })
        },
        v = null != s ? s : c,
        {
          files: S,
          errors: I
        } = G(e.clipboardData, u.uploadLongMessages ? v : null);
      return (M("onPaste", [...e.clipboardData.items].map(e => {
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
      })), 0 === S.length) ? ((null == I ? true : I.some(e => {
        let {
          error: t
        } = e;
        return "is_directory" === t
      })) && (0, p.openUploadError)({
        title: R.intl.string(R.t.azO1Pe),
        help: R.intl.string(R.t["Koklr/"])
      }), false) : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), O(S), this.focus(), true)
    }), this._unsubscribe = I.p8.subscribe(e => {
      requestAnimationFrame(() => {
        this.setState({
          popup: e
        })
      })
    }), this.state = {
      focused: false,
      submitting: false,
      popup: I.p8.getState()
    }
  }
}

function G(e, t) {
  var n, r, i, a, o;
  let s = [],
    l = [],
    c = null,
    u = null,
    d = [];
  for (let t of e.items)
    if ("file" === t.kind) {
      let e = null != (a = null != (i = null == (n = t.webkitGetAsEntry) ? true : n.call(t)) ? i : null == (r = t.getAsEntry) ? true : r.call(t)) ? a : null;
      if (null != e && false === e.isFile) {
        d.push({
          item: t,
          error: "is_directory"
        });
        continue
      }
      let o = t.getAsFile();
      if (null == o) continue;
      null != o.path && o.path.length > 0 ? s.push(o) : l.push(o)
    } else "string" === t.kind && ("text/plain" === t.type && null == c ? c = t : "text/html" === t.type && null == u && (u = t));
  if (s.length > 0) return {
    files: s,
    errors: d
  };
  if (l.length > 0) {
    if (1 === l.length && "image/png" === l[0].type && null != u) {
      let t = l[0],
        n = null != (o = Z(e.getData(u.type))) ? o : t.name;
      return {
        files: [(0, y.dp)(t, n, t.type)],
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
        files: [(0, y.dp)(e, "message.txt", "text/plain")],
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

function Z(e) {
  let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
  if (null != t) {
    let e;
    try {
      let {
        pathname: n
      } = c.parse(t.src);
      null != n && n.length > 0 && (e = (0, O.eP)(n).split(".")[0])
    } catch (e) {}
    if (null != e && e.length > 0) return "".concat(e, ".png")
  }
}