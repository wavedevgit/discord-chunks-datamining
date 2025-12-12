/** Chunk was on web.js **/
/** chunk id: 106824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PA: () => h,
  ZP: () => g,
  un: () => m
}), require("./388685.js");
var Chunk836560 = require("./836560.js"),
  Chunk555573 = require("./555573.js"),
  Chunk376918 = require("./376918.js"),
  Chunk887490 = require("./887490.js"),
  Chunk627050 = require("./627050.js"),
  Chunk695346 = require("./695346.js"),
  Chunk590921 = require("./590921.js"),
  Chunk152089 = require("./152089.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let m = ["gameMentionInput", "timestampMentionInput"];

function h() {
  return {
    query: null,
    selectedIndex: null,
    isVisible: false,
    didInitialQuery: false,
    hadInitialResults: false,
    isInitialAfterError: false
  }
}
class g extends Chunk836560.EventEmitter {
  updateProps(e) {
    let t = this.props.focused !== e.focused,
      n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption || this.props.activeInlineAutocompleteInput !== e.activeInlineAutocompleteInput,
      r = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.currentFullWord !== e.currentFullWord || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText,
      i = this.props.isEditorIdle !== e.isEditorIdle;
    if (this.props = e, n || r || i) this.updateResultsDebounced(r, n), this.state.didInitialQuery || (this.state = _(f({}, this.state), {
      didInitialQuery: true
    }));
    else if (t) {
      let e = this.state.query;
      this.setState({
        isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo)
      })
    }
  }
  setSelectedIndex(e) {
    this.setState({
      selectedIndex: e
    })
  }
  onTabOrEnter(e) {
    var t, n;
    if (!this.state.isVisible || (null == (t = this.state.query) ? true : t.typeInfo.selectMode) === c.W7.TAB_ONLY && e) returnfalse;
    if (null == this.state.selectedIndex) {
      let t = null == (n = this.state.query) ? true : n.typeInfo.focusMode;
      return !e && (t === c.QZ.MANUAL || t === c.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), true)
    }
    return this.selectResult(this.state.selectedIndex, e, true)
  }
  onMoveSelection(e) {
    var t, n;
    if (!this.state.isVisible) returnfalse;
    if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null == (t = this.state.query) ? true : t.type) === c.eq.COMMANDS) {
      let e = null == (n = this.state.query.results.commands) ? true : n[this.state.selectedIndex];
      null != e && i.Sg(this.props.channel.id, e.id)
    }
    returntrue
  }
  onMaybeShowAutocomplete() {
    this.emit("update")
  }
  onHideAutocomplete() {
    null != this.state.query && this.setState({
      isVisible: false
    })
  }
  onResultHover(e) {
    this.props.navigator.setFocus(null), this.setSelectedIndex(null)
  }
  onResultClick(e) {
    this.selectResult(e, true)
  }
  clearQuery() {
    this.setState({
      query: null,
      isVisible: false,
      selectedIndex: null,
      hadInitialResults: false,
      isInitialAfterError: false
    })
  }
  queryResults() {
    this.updateResultsDebounced()
  }
  isVisible() {
    return this.state.isVisible
  }
  updateResultsDebounced() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      t = arguments.length > 1 && true !== arguments[1] && arguments[1];
    null != this.updateTimeout && clearTimeout(this.updateTimeout);
    let n = this;
    this.nextUpdateQueryChanged = this.nextUpdateQueryChanged || module, this.nextUpdateContextChanged = this.nextUpdateContextChanged || exports, this.updateTimeout = setTimeout(() => {
      require.updateResults(this.nextUpdateQueryChanged, this.nextUpdateContextChanged), this.nextUpdateQueryChanged = false, this.nextUpdateContextChanged = false, this.updateTimeout = true
    }, 0)
  }
  updateResults() {
    var e, t, n;
    let r, i, d = arguments.length > 0 && true !== arguments[0] && arguments[0],
      f = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (null == this.props.editorRef.current) return;
    let p = (0, Chunk152089.FW)(this.props, this.state),
      _ = this.props.editorRef.current.getSlateEditor();
    null != _ && (i = null != (r = Chunk887490.bN.getSelectedParentOfType(_, m)) ? Chunk887490.bN.getTextFromRange(_, Chunk887490.bN.range(_, Chunk836560[1])) : null);
    let h = (0, Chunk152089.fZ)({
        channel: this.props.channel,
        guild: this.props.guild,
        options: p,
        currentWord: this.props.currentWord,
        currentWordIsAtStart: this.props.currentWordIsAtStart,
        textValue: this.props.textValue,
        optionText: this.props.optionText,
        parentAutocompleteInputType: null == Chunk836560 ? true : Chunk836560[0].type,
        parentAutocompleteInputValue: Chunk555573
      }),
      g = p.commands !== Chunk590921.L8.DISABLED ? (0, Chunk152089.py)(this.props.activeCommandOption, this.props.currentWord) : null;
    if (null == h && null != g) h = g;
    else if (null == h || null != g && h.type !== g.type) return void this.clearQuery();
    let {
      type: E,
      typeInfo: b,
      query: y
    } = h, O = f || d && ((null == (e = this.state.query) ? true : module.queryText) !== y || (null == (t = this.state.query) ? true : exports.typeInfo) !== b), v = Chunk695346.fq.getSetting();
    p.allowStickers = p.allowStickers ? v : p.allowStickers;
    let S = Chunk695346.eR.getSetting();
    p.allowSoundmoji = p.allowSoundmoji ? S : p.allowSoundmoji;
    let {
      results: I,
      metadata: T
    } = b.queryResults(this.props.channel, this.props.guild, y, p, O), C = 0;
    for (let e of Object.values(I)) Array.isArray(module) && (C += module.length);
    let A = true === I.isLoading,
      N = this.shouldShow(C, A, b),
      P = this.state.selectedIndex;
    !N || A ? P = null : null != P && P >= C && (P = C - 1);
    let R = null != this.props.guild && Chunk627050.N.getCurrentConfig({
      guildId: this.props.guild.id,
      location: "mention autocomplete"
    }, {
      autoTrackExposure: true
    }).enabled;
    N && !this.state.isVisible && (0, Chunk376918.a7)(E, this.props.channel, T, R), this.setState({
      query: {
        type: E,
        typeInfo: b,
        queryText: y,
        results: I,
        resultCount: C,
        options: p,
        isLoading: A
      },
      isVisible: N,
      selectedIndex: P,
      hadInitialResults: true,
      isInitialAfterError: true !== this.state.hadInitialResults && null != (n = null == Chunk836560 ? true : Chunk836560[0].error) && require
    })
  }
  shouldShow(e, t, n) {
    return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
  }
  selectResult(e, t, n) {
    var r, i, a;
    if (!this.state.isVisible) returnfalse;
    let {
      type: s,
      typeInfo: l,
      results: u,
      resultCount: d,
      options: f
    } = this.state.query;
    if (e >= d) returnfalse;
    let p = null == (i = l.onSelect) ? true : i.call(l, {
      results: u,
      index: e,
      type: t ? c.QB.SEND : c.QB.INSERT,
      options: f,
      channel: this.props.channel,
      guild: this.props.guild,
      tabOrEnter: n,
      queryText: null == (r = this.state.query) ? true : r.queryText
    });
    return null != p && (0, o.Qt)(s, null != (a = p.type) ? a : null, this.props.channel, p.metadata), true
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = f({}, this.state, e), this.emit("change", this.state);
        return
      }
  }
  constructor(e) {
    super(), d(this, "props", true), d(this, "state", true), d(this, "nextUpdateQueryChanged", false), d(this, "nextUpdateContextChanged", false), d(this, "updateTimeout", true), this.props = e, this.state = h()
  }
}