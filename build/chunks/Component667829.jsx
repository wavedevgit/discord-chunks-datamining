/** Chunk was on web.js **/
/** chunk id: 667829, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => k
}), require("./388685.js"), require("./539854.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
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

function w(e, t, n) {
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
      w(e, t, n[t])
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
new Chunk710845.Z("ChannelEditor.tsx");
let j = function() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  },
  M = 1e3;
class k extends Chunk473749.Component {
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
      e = this.props.useSlate ? this.props.textValue : (0, A.sk)(this.props.richValue, {
        mode: "plain"
      }), null == (t = (n = this.props).onChange) || t.call(n, null, e, (0, v.JM)(e))
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
    }), u.Z.saveDraft(e.id, "", t.drafts.type)
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
    return e && !n ? r ? "" : P.intl.string(P.t.IYKTTc) : t
  }
  render() {
    var e, t, n, i, a, s;
    let {
      textValue: l,
      richValue: u,
      disabled: d,
      onChange: f,
      onKeyDown: p,
      onResize: _,
      onSubmit: m,
      onSubmitFailure: h,
      channel: g,
      type: b,
      useSlate: y,
      spellcheckEnabled: S,
      useNewSlashCommands: I,
      canOnlyUseTextCommands: A,
      className: P,
      id: w,
      required: x,
      maxCharacterCount: j,
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
      className: o()(P, R.textArea, {
        [R.textAreaSlate]: y,
        [R.textAreaDisabled]: d || V
      }),
      id: w,
      placeholder: this.getPlaceholder(),
      required: x,
      accessibilityLabel: F,
      disabled: d || false,
      submitting: V,
      isEdit: b === O.Ie.EDIT,
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
        [R.textAreaForPostCreation]: b === O.Ie.CREATE_FORUM_POST,
        [R.textAreaCustomGift]: b === O.Ie.CUSTOM_GIFT,
        [R.textAreaForUserProfile]: b === O.Ie.USER_PROFILE,
        [R.textAreaForOverlayInlineReply]: b === O.Ie.OVERLAY_INLINE_REPLY
      }),
      spellcheckEnabled: S,
      useNewSlashCommands: I,
      isEditorIdle: k,
      currentAutocompleteType: U,
      disableAutoFocus: c.tq || null != (n = b.disableAutoFocus) && n,
      disableEnterToSubmit: null != (i = null == (e = b.submit) ? true : e.disableEnterToSubmit) && i,
      "aria-controls": null != (a = H.id) ? a : true,
      "aria-haspopup": "listbox",
      "aria-expanded": null !== H.id || true,
      "aria-activedescendant": null != (s = H.activeDescendant) ? s : true,
      "aria-invalid": l.length > j,
      "aria-describedby": G,
      "aria-labelledby": Z,
      "aria-autocomplete": "list"
    }, W = y ? (0, r.jsx)(C.Z, L(D({
      ref: this.ref
    }, Y), {
      type: b,
      value: d && !B ? (0, v.JM)("") : u,
      canUseCommands: null == (t = b.commands) ? true : t.enabled,
      canOnlyUseTextCommands: A,
      onSubmitFailure: h
    })) : (0, r.jsx)(T.Z, L(D({
      ref: this.ref
    }, Y), {
      value: d && !B ? "" : l
    }));
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E.d9, {
        event: N.CkL.INSERT_TEXT,
        handler: this.handleInsertText
      }), (0, r.jsx)(E.d9, {
        event: N.CkL.CLEAR_TEXT,
        handler: this.handleClearText
      }), W]
    })
  }
  constructor(e) {
    var t;
    super(e), t = this, w(this, "ref", i.createRef()), w(this, "_focusBlurQueue", Promise.resolve()), w(this, "_unsubscribe", true), w(this, "_initTimeoutId", null), w(this, "_cachedEditorWindow", null), w(this, "handleSelectionChange", () => {
      if (this.props.focused) {
        var e, t, n;
        this.props.onSelectionChanged(null == (t = (n = document).getSelection) || null == (e = t.call(n)) ? true : e.toString())
      }
    }), w(this, "focus", () => {
      var e;
      null == (e = this._focusBlurQueue) || e.then(() => {
        this.setState({
          focused: true
        }, () => {
          let e = this.ref.current;
          null != e && e.focus()
        })
      })
    }), w(this, "saveCurrentText", function() {
      let e = !(arguments.length > 0) || true === arguments[0] || arguments[0],
        {
          type: n,
          channel: r
        } = t.props;
      n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(r.id))
    }), w(this, "handleBeforeUnload", () => this.saveCurrentText()), w(this, "saveCurrentTextThrottled", l().throttle(this.saveCurrentText.bind(this, false), 500)), w(this, "handleEnter", e => {
      var t, n;
      return null == (t = (n = this.props).onEnter) ? true : t.call(n, e)
    }), w(this, "handleTab", () => {
      var e, t;
      return null == (e = (t = this.props).onTab) ? true : e.call(t)
    }), w(this, "handleMoveSelection", e => {
      var t, n;
      return null == (t = (n = this.props).onMoveSelection) ? true : t.call(n, e)
    }), w(this, "maybeShowAutocomplete", () => {
      var e, t;
      return null == (e = (t = this.props).onMaybeShowAutocomplete) ? true : e.call(t)
    }), w(this, "hideAutocomplete", () => {
      var e, t;
      return null == (e = (t = this.props).onHideAutocomplete) ? true : e.call(t)
    }), w(this, "handleSaveCurrentText", e => {
      u.Z.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
    }), w(this, "handleClearText", () => {
      var e, t;
      null == (e = (t = this.props).onChange) || e.call(t, null, "", (0, v.JM)(""))
    }), w(this, "handleInsertText", e => {
      let {
        plainText: t,
        rawText: n,
        addSpace: r = false
      } = e;
      this.props.disabled || (this.appendText(t, n, r), this.focus())
    }), w(this, "handleFocus", e => {
      let {
        onFocus: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), n || this.setState({
        focused: true
      })
    }), w(this, "handleBlur", e => {
      let {
        onBlur: t
      } = this.props, {
        focused: n
      } = this.state;
      null == t || t(e), n && this.setState({
        focused: false
      })
    }), w(this, "handlePaste", e => {
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
        h = null != i ? (0, I.im)(i) : null,
        E = (0, I.Mo)(),
        b = null != (r = null != h ? h : E) ? r : a,
        y = (0, I._K)(i, this._getEditorWindow()) ? a : b;
      if (null == l || !y.isPrivate() && !o || y.isPrivate() && y.isManaged()) returnfalse;
      let O = e => {
          var t, n;
          let r = m.Z.getActiveCommand(y.id);
          if (null == r) return l(e, y, u.drafts.type, {
            requireConfirm: true,
            origin: "clipboard"
          });
          let i = null != (t = u.drafts.commandType) ? t : u.drafts.type,
            a = null,
            o = m.Z.getActiveOption(y.id);
          null != (a = (null == o ? true : o.type) === p.jw.ATTACHMENT ? o : null == (n = r.options) ? true : n.find(e => {
            if (e.type === p.jw.ATTACHMENT) return null == g.Z.getUpload(y.id, e.name, i)
          })) && d.Z.setFile({
            channelId: y.id,
            id: a.name,
            draftType: i,
            file: {
              id: a.name,
              platform: _.ow.WEB,
              file: e[0]
            }
          })
        },
        v = null != s ? s : c,
        {
          files: S,
          errors: T
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
      })), 0 === S.length) ? ((null == T ? true : T.some(e => {
        let {
          error: t
        } = e;
        return "is_directory" === t
      })) && (0, f.openUploadError)({
        title: P.intl.string(P.t.azO1Pe),
        help: P.intl.string(P.t["Koklr/"])
      }), false) : (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), O(S), this.focus(), true)
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

function U(e, t) {
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
        n = null != (o = G(e.getData(u.type))) ? o : t.name;
      return {
        files: [(0, b.dp)(t, n, t.type)],
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
        files: [(0, b.dp)(e, "message.txt", "text/plain")],
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
      null != n && n.length > 0 && (e = (0, y.G6)(n))
    } catch (e) {}
    if (null != e && e.length > 0) return "".concat(e, ".png")
  }
}