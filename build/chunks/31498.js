/** Chunk was on web.js **/
/** chunk id: 31498, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => g,
  Ur: () => m,
  mk: () => h
}), require("./896048.js");
var Chunk143236 = require("./143236.js"),
  Chunk721768 = require("./721768.js"),
  Chunk612394 = require("./612394.js"),
  Chunk711371 = require("./711371.js"),
  Chunk352505 = require("./352505.js"),
  Chunk253932 = require("./253932.js"),
  Chunk374803 = require("./374803.js"),
  Chunk56436 = require("./56436.js");

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
let h = ["gameMentionInput", "timestampMentionInput"];

function m() {
  return {
    query: null,
    selectedIndex: null,
    isVisible: false,
    didInitialQuery: false,
    hadInitialResults: false,
    isInitialAfterError: false
  }
}
class g extends Chunk143236.EventEmitter {
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
    if (!this.state.isVisible || (null == (t = this.state.query) ? true : t.typeInfo.selectMode) === c.SB.TAB_ONLY && e) returnfalse;
    if (null == this.state.selectedIndex) {
      let t = null == (n = this.state.query) ? true : n.typeInfo.focusMode;
      return !e && (t === c.e.MANUAL || t === c.e.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), true)
    }
    return this.selectResult(this.state.selectedIndex, e, true)
  }
  onMoveSelection(e) {
    var t, n;
    if (!this.state.isVisible) returnfalse;
    if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null == (t = this.state.query) ? true : t.type) === c.DB.COMMANDS) {
      let e = null == (n = this.state.query.results.commands) ? true : n[this.state.selectedIndex];
      null != e && i.e0(this.props.channel.id, e.id)
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
    this.nextUpdateQueryChanged = this.nextUpdateQueryChanged || e, this.nextUpdateContextChanged = this.nextUpdateContextChanged || t, this.updateTimeout = setTimeout(() => {
      n.updateResults(this.nextUpdateQueryChanged, this.nextUpdateContextChanged), this.nextUpdateQueryChanged = false, this.nextUpdateContextChanged = false, this.updateTimeout = true
    }, 0)
  }
  updateResults() {
    var e, t, n;
    let r, i, d = arguments.length > 0 && true !== arguments[0] && arguments[0],
      f = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (null == this.props.editorRef.current) return;
    let p = (0, u.$E)(this.props, this.state),
      _ = this.props.editorRef.current.getSlateEditor();
    null != _ && (i = null != (r = s.VW.getSelectedParentOfType(_, h)) ? s.VW.getTextFromRange(_, s.VW.range(_, r[1])) : null);
    let m = (0, u.Ny)({
        channel: this.props.channel,
        guild: this.props.guild,
        options: p,
        currentWord: this.props.currentWord,
        currentWordIsAtStart: this.props.currentWordIsAtStart,
        textValue: this.props.textValue,
        optionText: this.props.optionText,
        parentAutocompleteInputType: null == r ? true : r[0].type,
        parentAutocompleteInputValue: i
      }),
      g = p.commands !== c.Ze.DISABLED ? (0, u.QC)(this.props.activeCommandOption, this.props.currentWord) : null;
    if (null == m && null != g) m = g;
    else if (null == m || null != g && m.type !== g.type) return void this.clearQuery();
    let {
      type: E,
      typeInfo: b,
      query: y
    } = m, O = f || d && ((null == (t = this.state.query) ? true : t.queryText) !== y || (null == (n = this.state.query) ? true : n.typeInfo) !== b), A = l.ML.getSetting();
    p.allowStickers = p.allowStickers ? A : p.allowStickers;
    let v = l.eK.getSetting();
    p.allowSoundmoji = p.allowSoundmoji ? v : p.allowSoundmoji;
    let {
      results: S,
      metadata: I
    } = b.queryResults(this.props.channel, this.props.guild, y, p, O), T = 0;
    for (let e of Object.values(S)) Array.isArray(e) && (T += e.length);
    let C = true === S.isLoading,
      N = this.shouldShow(T, C, b),
      R = this.state.selectedIndex;
    !N || C ? R = null : null != R && R >= T && (R = T - 1);
    let w = null != this.props.guild && o.M.getCurrentConfig({
      guildId: this.props.guild.id,
      location: "mention autocomplete"
    }, {
      autoTrackExposure: true
    }).enabled;
    N && !this.state.isVisible && (0, a.uA)(E, this.props.channel, I, w), this.setState({
      query: {
        type: E,
        typeInfo: b,
        queryText: y,
        results: S,
        resultCount: T,
        options: p,
        isLoading: C
      },
      isVisible: N,
      selectedIndex: R,
      hadInitialResults: true,
      isInitialAfterError: true !== this.state.hadInitialResults && null != (e = null == r ? true : r[0].error) && e
    })
  }
  shouldShow(e, t, n) {
    return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
  }
  selectResult(e, t, n) {
    var r, i, s;
    if (!this.state.isVisible) returnfalse;
    let {
      type: o,
      typeInfo: l,
      results: u,
      resultCount: d,
      options: f
    } = this.state.query;
    if (e >= d) returnfalse;
    let p = null == (i = l.onSelect) ? true : i.call(l, {
      results: u,
      index: e,
      type: t ? c.lg.SEND : c.lg.INSERT,
      options: f,
      channel: this.props.channel,
      guild: this.props.guild,
      tabOrEnter: n,
      queryText: null == (r = this.state.query) ? true : r.queryText
    });
    return null != p && (0, a.So)(o, null != (s = p.type) ? s : null, this.props.channel, p.metadata), true
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = f({}, this.state, e), this.emit("change", this.state);
        return
      }
  }
  constructor(e) {
    super(), d(this, "props", true), d(this, "state", true), d(this, "nextUpdateQueryChanged", false), d(this, "nextUpdateContextChanged", false), d(this, "updateTimeout", true), this.props = e, this.state = m()
  }
}