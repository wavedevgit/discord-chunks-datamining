/** Chunk was on web.js **/
/** chunk id: 140963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./781311.js"), require("./35282.js"), require("./388685.js"), require("./704826.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk555573 = require("./555573.js"),
  Chunk998698 = require("./998698.js"),
  Chunk459273 = require("./459273.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk62883 = require("./62883.jsx"),
  Chunk752305 = require("./752305.js"),
  Chunk981631 = require("./981631.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = ":",
  O = /(\t|\s)/;
class v extends Chunk647438.PureComponent {
  componentDidMount() {
    this.props.disableAutoFocus || (Promise.resolve().then(() => {
      var e;
      let {
        value: t
      } = this.props;
      null == (e = this._ref) || module.setSelection(exports.length, exports.length)
    }), this.focus()), null != Chunk998698.Z.getActiveCommand(this.props.channel.id) && Chunk555573.Po({
      channelId: this.props.channel.id,
      command: null,
      section: null
    })
  }
  componentDidUpdate(e, t) {
    this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection)
  }
  getCurrentWord() {
    let e = this._ref;
    if (null == module) return {
      word: null,
      isAtStart: false
    };
    let {
      value: t
    } = this.props;
    if (0 === exports.trim().length) return {
      word: null,
      isAtStart: false
    };
    let n = module.selectionStart,
      r = module.selectionEnd;
    for (; require > 0 && !O.test(exports[require - 1]);) require--;
    return {
      word: exports.slice(require, Chunk951288),
      isAtStart: 0 === require
    }
  }
  blur() {
    let {
      _ref: e
    } = this;
    null != module && module.blur()
  }
  submit(e) {
    return e.preventDefault(), this.props.onSubmit(this.props.value)
  }
  insertAutocomplete(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      {
        word: r
      } = this.getCurrentWord();
    if (null == r) this.insertText(e, t, n);
    else {
      let t = this._ref;
      if (null == t) return;
      let i = t.value.slice(0, t.selectionStart - r.length),
        o = t.value.slice(t.selectionEnd);
      this._insertText(e, i, o, n)
    }
  }
  insertInlineAutocompleteInput(e) {}
  replaceInlineAutocompleteInput(e, t, n) {}
  insertText(e, t) {
    let n = !(arguments.length > 2) || true === arguments[2] || arguments[2],
      r = this._ref;
    if (null == r) return;
    let i = r.value.slice(0, r.selectionStart),
      o = r.value.slice(r.selectionEnd);
    this._insertText(e, i, o, n)
  }
  _insertText(e, t, n, r) {
    if (null == this._ref) return;
    r && (e += " ");
    let i = t + e + n,
      {
        onChange: o
      } = this.props;
    null == o || o(null, i, (0, p.JM)(i));
    let a = t.length + e.length;
    this.setState({
      nextSelection: a
    }, () => {
      this.props.maybeShowAutocomplete()
    })
  }
  hasOpenCodeBlock() {
    let e = this._ref;
    if (null == module) returnfalse;
    let t = this.props.value.slice(0, module.selectionStart).match(/```/g);
    return null != exports && exports.length > 0 && exports.length % 2 != 0
  }
  render() {
    let {
      value: e,
      disabled: t,
      placeholder: n,
      required: i,
      onResize: o,
      className: l,
      id: c,
      submitting: u,
      textAreaPaddingClassName: f,
      spellcheckEnabled: _,
      "aria-controls": p,
      "aria-expanded": m,
      "aria-activedescendant": g
    } = this.props;
    return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk459273.d9, {
        event: Chunk981631.CkL.GLOBAL_CLIPBOARD_PASTE,
        handler: this.handleGlobalPaste
      }), (0, Chunk951288.jsx)(Chunk481060.lcI, {
        ref: this.handleSetRef,
        className: a()(Chunk239091, Chunk358085),
        id: Chunk555573,
        rows: 1,
        fontWidthEstimate: 6,
        placeholder: require,
        disabled: exports || Chunk998698,
        required: Chunk647438,
        onChange: this.handleOnChange,
        onResize: Chunk120356,
        onKeyPress: this.handleKeyPress,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onFocus: this.props.onFocus,
        onBlur: this.props.onBlur,
        onPaste: this.handlePaste,
        onClick: this.handleClick,
        onContextMenu: this.handleContextMenu,
        value: exports ? "" : module,
        tabIndex: 0,
        spellCheck: Chunk62883,
        "aria-controls": Chunk752305,
        "aria-expanded": m,
        "aria-activedescendant": g,
        "aria-haspopup": "listbox",
        "aria-autocomplete": "list",
        "aria-multiline": true
      })]
    })
  }
  handleTabOrEnterDown(e) {
    e.which === h.yXg.TAB && this.props.onTab() || e.which === h.yXg.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === h.yXg.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === h.yXg.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText("	", true, false))
  }
  insertEmoji(e) {
    let {
      emoji: t,
      addSpace: n = false
    } = e;
    this.insertText("".concat(y).concat(t.name).concat(y), true, n)
  }
  getFirstText() {
    return this.props.value
  }
  constructor(...e) {
    super(...e), m(this, "_ref", true), m(this, "state", {
      nextSelection: false
    }), m(this, "focus", () => {
      let {
        _ref: e
      } = this;
      null != e && e.focus()
    }), m(this, "handleSetRef", e => {
      this._ref = e
    }), m(this, "handleKeyPress", e => {
      if (e.which === h.yXg.ENTER && !e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value)
    }), m(this, "handleKeyDown", e => {
      switch (e.which) {
        case h.yXg.ARROW_DOWN:
          this.props.moveSelection(1) && e.preventDefault();
          break;
        case h.yXg.N:
          e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
          break;
        case h.yXg.ARROW_UP:
          this.props.moveSelection(false) && e.preventDefault();
          break;
        case h.yXg.P:
          e.ctrlKey && this.props.moveSelection(false) && e.preventDefault();
          break;
        case h.yXg.TAB:
        case h.yXg.ENTER:
          this.handleTabOrEnterDown(e)
      }
      let {
        onKeyDown: t
      } = this.props;
      null == t || t(e)
    }), m(this, "handleKeyUp", e => {
      switch (e.which) {
        case h.yXg.ARROW_RIGHT:
        case h.yXg.ARROW_LEFT:
        case h.yXg.HOME:
        case h.yXg.END:
          this.props.maybeShowAutocomplete()
      }
      let {
        onKeyUp: t
      } = this.props;
      null == t || t(e)
    }), m(this, "handleGlobalPaste", e => {
      let {
        event: t
      } = e;
      this.handlePaste(t) || this.focus()
    }), m(this, "handlePaste", e => {
      let t = this.props.onPaste(e);
      return t && e.preventDefault(), t
    }), m(this, "handleClick", () => {
      this.props.maybeShowAutocomplete()
    }), m(this, "handleContextMenu", e => {
      f.isPlatformEmbedded && (0, l.jW)(e, async () => {
        let {
          default: e
        } = await n.e("99989").then(n.bind(n, 889662));
        return t => (0, r.jsx)(e, b(g({}, t), {
          text: (0, _.getSelectionText)()
        }))
      }, {
        align: "bottom",
        enableSpellCheck: true
      })
    }), m(this, "handleOnChange", e => {
      let {
        onChange: t,
        allowNewLines: n
      } = this.props, r = e.currentTarget.value, i = n ? r : r.replace("\n", "");
      null == t || t(e, i, (0, p.JM)(i))
    })
  }
}
let I = v