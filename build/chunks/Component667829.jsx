/** Chunk was on web.js **/
/** chunk id: 667829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => U
}), require("./388685.js"), require("./539854.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk744114 = require("./744114.js");

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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
new Chunk710845.Z("ChannelEditor.tsx");
let j = function() {
    for (var e = arguments.length, t = Array(module), n = 0; require < module; require++) exports[require] = arguments[require]
  },
  k = 1e3;
class U extends Chunk647438.Component {
  _getEditorWindow() {
    var e, t, n, r, i;
    let a = null == (i = this.ref) || null == (r = Chunk647438.current) || null == (n = Chunk951288.getSlateEditor) || null == (t = require.call(Chunk951288)) || null == (e = exports.windowContext) ? true : module.renderWindow;
    if (null == this._cachedEditorWindow || this._cachedEditorWindow !== Chunk120356) {
      if (null != this._cachedEditorWindow && null == Chunk120356) return null;
      this._cachedEditorWindow = null != Chunk120356 ? Chunk120356 : window
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
      }), null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, I.JM)(e))
    } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
  }
  componentWillUnmount() {
    var e, t;
    this.saveCurrentText(), null == (e = (t = this)._unsubscribe) || module.call(exports), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null, this._cachedEditorWindow = null, null != this._initTimeoutId && clearTimeout(this._initTimeoutId)
  }
  blur() {
    let e = this.ref.current;
    null != module && module.blur()
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
    }), Chunk430742.Z.saveDraft(module.id, "", exports.drafts.type)
  }
  getCurrentWord() {
    var e;
    let t = this.ref.current;
    return null != (e = null == exports ? true : exports.getCurrentWord()) ? module : {
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
    return null != (t = null == require || null == (e = require.getCurrentCommandOption) ? true : module.call(require)) ? exports : null
  }
  getCurrentCommandOptionValue() {
    var e, t;
    let n = this.ref.current;
    return null != (t = null == require || null == (e = require.getCurrentCommandOptionValue) ? true : module.call(require)) ? exports : []
  }
  getCommandOptionValues() {
    var e, t;
    let n = this.ref.current;
    return null != (t = null == require || null == (e = require.getCommandOptionValues) ? true : module.call(require)) ? exports : {}
  }
  getFirstText() {
    var e;
    let t = this.ref.current;
    return null != (e = null == exports ? true : exports.getFirstText()) ? module : null
  }
  getSlateEditor() {
    var e, t;
    let n = this.ref.current;
    return null != (t = null == require || null == (e = require.getSlateEditor) ? true : module.call(require)) ? exports : null
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
    return module && !require ? Chunk951288 ? "" : Chunk388032.intl.string(Chunk388032.t.IYKTTc) : exports
  }
  render() {
    var e, t, n, i, a, s;
    let {
      textValue: l,
      richValue: c,
      disabled: d,
      onChange: f,
      onKeyDown: _,
      onResize: p,
      onSubmit: h,
      channel: m,
      type: g,
      useSlate: E,
      spellcheckEnabled: y,
      useNewSlashCommands: O,
      canOnlyUseTextCommands: S,
      className: T,
      id: N,
      required: P,
      maxCharacterCount: D,
      allowNewLines: L,
      isEditorIdle: j,
      currentAutocompleteType: k,
      "aria-describedby": U,
      "aria-labelledby": G,
      accessibilityLabel: B,
      showValueWhenDisabled: Z
    } = this.props, {
      submitting: F,
      popup: V
    } = this.state, H = {
      channel: Chunk998698,
      className: o()(Chunk330122, Chunk744114.textArea, {
        [Chunk744114.textAreaSlate]: Chunk117530,
        [Chunk744114.textAreaDisabled]: Chunk430742 || F
      }),
      id: Chunk925994,
      placeholder: this.getPlaceholder(),
      required: Chunk388032,
      accessibilityLabel: B,
      disabled: Chunk430742 || false,
      submitting: F,
      isEdit: Chunk710845 === Chunk541716.Ie.EDIT,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onPaste: this.handlePaste,
      onTab: this.handleTab,
      onEnter: this.handleEnter,
      moveSelection: this.handleMoveSelection,
      maybeShowAutocomplete: this.maybeShowAutocomplete,
      hideAutocomplete: this.hideAutocomplete,
      allowNewLines: L,
      onChange: Chunk166459,
      onResize: Chunk911969,
      onKeyDown: Chunk531643,
      onSubmit: Chunk476326,
      textAreaPaddingClassName: o()({
        [Chunk744114.textAreaForPostCreation]: Chunk710845 === Chunk541716.Ie.CREATE_FORUM_POST,
        [Chunk744114.textAreaCustomGift]: Chunk710845 === Chunk541716.Ie.CUSTOM_GIFT,
        [Chunk744114.textAreaForUserProfile]: Chunk710845 === Chunk541716.Ie.USER_PROFILE,
        [Chunk744114.textAreaForOverlayInlineReply]: Chunk710845 === Chunk541716.Ie.OVERLAY_INLINE_REPLY
      }),
      spellcheckEnabled: Chunk403182,
      useNewSlashCommands: Chunk137058,
      isEditorIdle: j,
      currentAutocompleteType: k,
      disableAutoFocus: Chunk873546.tq || null != (n = Chunk710845.disableAutoFocus) && require,
      disableEnterToSubmit: null != (i = null == (e = Chunk710845.submit) ? true : module.disableEnterToSubmit) && Chunk647438,
      "aria-controls": null != (a = V.id) ? Chunk120356 : true,
      "aria-haspopup": "listbox",
      "aria-expanded": null !== V.id || true,
      "aria-activedescendant": null != (s = V.activeDescendant) ? Chunk392711 : true,
      "aria-invalid": l.length > D,
      "aria-describedby": U,
      "aria-labelledby": G,
      "aria-autocomplete": "list"
    }, Y = Chunk117530 ? (0, Chunk951288.jsx)(Chunk4484.Z, M(x({
      ref: this.ref
    }, H), {
      type: Chunk710845,
      value: Chunk430742 && !Z ? (0, Chunk752305.JM)("") : Chunk729594,
      canUseCommands: null == (t = Chunk710845.commands) ? true : exports.enabled,
      canOnlyUseTextCommands: Chunk30465
    })) : (0, Chunk951288.jsx)(Chunk140963.Z, M(x({
      ref: this.ref
    }, H), {
      value: Chunk430742 && !Z ? "" : l
    }));
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk459273.d9, {
        event: Chunk981631.CkL.INSERT_TEXT,
        handler: this.handleInsertText
      }), (0, Chunk951288.jsx)(Chunk459273.d9, {
        event: Chunk981631.CkL.CLEAR_TEXT,
        handler: this.handleClearText
      }), Y]
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
      null == (e = (t = this.props).onChange) || e.call(t, null, "", (0, I.JM)(""))
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
          let i = m.Z.getActiveCommand(y.id);
          if (null == i) return l(e, y, u.drafts.type, {
            requireConfirm: true,
            showLargeMessageDialog: t,
            origin: "clipboard"
          });
          let a = null != (n = u.drafts.commandType) ? n : u.drafts.type,
            o = null,
            s = m.Z.getActiveOption(y.id);
          null != (o = (null == s ? true : s.type) === p.jw.ATTACHMENT ? s : null == (r = i.options) ? true : r.find(e => {
            if (e.type === p.jw.ATTACHMENT) return null == E.Z.getUpload(y.id, e.name, a)
          })) && f.Z.setFile({
            channelId: y.id,
            id: o.name,
            draftType: a,
            file: {
              id: o.name,
              platform: h.ow.WEB,
              file: e[0]
            }
          })
        },
        v = null != s ? s : c,
        {
          files: I,
          errors: S
        } = G(e.clipboardData, u.uploadLongMessages ? v : null);
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
      })), 0 === I.length) ? ((null == S ? true : S.some(e => {
        let {
          error: t
        } = e;
        return "is_directory" === t
      })) && (0, _.openUploadError)({
        title: P.intl.string(P.t.azO1Pe),
        help: P.intl.string(P.t["Koklr/"])
      }), false) : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), O(I), this.focus(), true)
    }), this._unsubscribe = S.p8.subscribe(e => {
      requestAnimationFrame(() => {
        this.setState({
          popup: e
        })
      })
    }), this.state = {
      focused: false,
      submitting: false,
      popup: S.p8.getState()
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
        n = null != (o = B(e.getData(u.type))) ? o : t.name;
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

function B(e) {
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