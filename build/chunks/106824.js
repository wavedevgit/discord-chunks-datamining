/** Chunk was on web.js **/
/** chunk id: 106824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  PA: () => h,
  ZP: () => m,
  un: () => p
}), require("./388685.js");
var Chunk836560 = require("./836560.js"),
  Chunk555573 = require("./555573.js"),
  Chunk376918 = require("./376918.js"),
  Chunk887490 = require("./887490.js"),
  Chunk695346 = require("./695346.js"),
  Chunk590921 = require("./590921.js"),
  Chunk152089 = require("./152089.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = ["gameMentionInput"];

function h() {
  return {
    query: null,
    selectedIndex: null,
    isVisible: false,
    didInitialQuery: false
  }
}
class m extends Chunk836560.EventEmitter {
  updateProps(e) {
    let t = this.props.focused !== e.focused,
      n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption || this.props.activeInlineAutocompleteInput !== e.activeInlineAutocompleteInput,
      r = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
    if (this.props = e, n || r) this.updateResults(r, n), this.state.didInitialQuery || (this.state = _(d({}, this.state), {
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
    if (!this.state.isVisible) returnfalse;
    if (null == this.state.selectedIndex) {
      var t;
      let n = null == (t = this.state.query) ? true : t.typeInfo.focusMode;
      return !e && (n === l.QZ.MANUAL || n === l.QZ.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), true)
    }
    return this.selectResult(this.state.selectedIndex, e, true)
  }
  onMoveSelection(e) {
    var t, n;
    if (!this.state.isVisible) returnfalse;
    if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null == (t = this.state.query) ? true : t.type) === l.eq.COMMANDS) {
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
      selectedIndex: null
    })
  }
  queryResults() {
    this.updateResults()
  }
  isVisible() {
    return this.state.isVisible
  }
  updateResults() {
    var e, t;
    let n, r, i = arguments.length > 0 && true !== arguments[0] && arguments[0],
      u = arguments.length > 1 && true !== arguments[1] && arguments[1];
    if (null == this.props.editorRef.current) return;
    let d = (0, Chunk152089.FW)(this.props),
      f = this.props.editorRef.current.getSlateEditor();
    null != f && (r = null != (n = Chunk887490.bN.getSelectedParentOfType(f, p)) ? Chunk887490.bN.getTextFromRange(f, Chunk887490.bN.range(f, require[1])) : null);
    let _ = (0, Chunk152089.fZ)({
        channel: this.props.channel,
        guild: this.props.guild,
        options: d,
        currentWord: this.props.currentWord,
        currentWordIsAtStart: this.props.currentWordIsAtStart,
        textValue: this.props.textValue,
        optionText: this.props.optionText,
        parentAutocompleteInputType: null == require ? true : require[0].type,
        parentAutocompleteInputValue: Chunk836560
      }),
      h = d.commands !== Chunk590921.L8.DISABLED ? (0, Chunk152089.py)(this.props.activeCommandOption, this.props.currentWord) : null;
    if (null == _ && null != h) _ = h;
    else if (null == _ || null != h && _.type !== h.type) return void this.clearQuery();
    let {
      type: m,
      typeInfo: g,
      query: E
    } = _, b = u || Chunk555573 && ((null == (e = this.state.query) ? true : module.queryText) !== E || (null == (t = this.state.query) ? true : exports.typeInfo) !== g), y = Chunk695346.fq.getSetting();
    d.allowStickers = d.allowStickers ? y : d.allowStickers;
    let O = Chunk695346.eR.getSetting();
    d.allowSoundmoji = d.allowSoundmoji ? O : d.allowSoundmoji;
    let {
      results: v,
      metadata: I
    } = g.queryResults(this.props.channel, this.props.guild, E, d, b), T = 0;
    for (let e of Object.values(v)) Array.isArray(module) && (T += module.length);
    let S = true === v.isLoading,
      A = this.shouldShow(T, S, g),
      C = this.state.selectedIndex;
    !A || S ? C = null : null != C && C >= T && (C = T - 1), A && !this.state.isVisible && (0, Chunk376918.a7)(m, this.props.channel, I), this.setState({
      query: {
        type: m,
        typeInfo: g,
        queryText: E,
        results: v,
        resultCount: T,
        options: d,
        isLoading: S
      },
      isVisible: A,
      selectedIndex: C
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
      typeInfo: c,
      results: u,
      resultCount: d,
      options: f
    } = this.state.query;
    if (e >= d) returnfalse;
    let _ = null == (i = c.onSelect) ? true : i.call(c, {
      results: u,
      index: e,
      type: t ? l.QB.SEND : l.QB.INSERT,
      options: f,
      channel: this.props.channel,
      guild: this.props.guild,
      tabOrEnter: n,
      queryText: null == (r = this.state.query) ? true : r.queryText
    });
    return null != _ && (0, o.Qt)(s, null != (a = _.type) ? a : null, this.props.channel, _.metadata), true
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = d({}, this.state, e), this.emit("change", this.state);
        return
      }
  }
  constructor(e) {
    super(), u(this, "props", true), u(this, "state", true), this.props = e, this.state = h()
  }
}