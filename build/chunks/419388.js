/** Chunk was on 34740 **/
/** chunk id: 419388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => j
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk374470 = require("./374470.js"),
  Chunk925549 = require("./925549.js"),
  Chunk904245 = require("./904245.js"),
  Chunk45114 = require("./45114.js"),
  Chunk607070 = require("./607070.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk479313 = require("./479313.js"),
  Chunk796974 = require("./796974.js"),
  Chunk709054 = require("./709054.js"),
  Chunk534469 = require("./534469.jsx"),
  Chunk173033 = require("./173033.js"),
  Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  var t, n;
  if (null == e.jumpTargetId || !e.ready) return null;
  let {
    jumpTargetId: i,
    jumpTargetOffset: r
  } = e;
  if (e.has(i) || !e.hasMoreBefore && i === m.default.castChannelIdAsMessageId(e.channelId)) {
    if (0 === r) return i;
    let n = e.getByIndex(e.indexOf(i) + r);
    return null != (t = null == n ? true : n.id) ? t : i
  }
  let l = [i, ...e.map(e => {
      let {
        id: t
      } = e;
      return t
    })].sort(m.default.compare),
    a = l.indexOf(i),
    o = null != (n = l[a + (Math.abs(r) > 0 ? r : 1)]) ? n : l[a - 1];
  return null != o ? o : null
}
let O = {
  scrollTop: 0,
  scrollHeight: 0,
  offsetHeight: 0
};
class x {
  isReady() {
    return this.props.messages.ready
  }
  isLoading() {
    return this.loading || this.props.messages.loadingMore
  }
  isPinned() {
    return this.pinned
  }
  isJumping() {
    return this.jumping
  }
  isDragging() {
    return this.dragging
  }
  isInitialized() {
    return true === this.initialScrollTop
  }
  isScrollLoadingDisabled() {
    return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore
  }
  isActivelyScrolling() {
    return this.scrollCounter >= 5
  }
  getDocument() {
    var e, t;
    return null == (t = this.ref.current) || null == (e = exports.getScrollerNode()) ? true : module.ownerDocument
  }
  getElementFromMessageId(e) {
    let t = this.getDocument(),
      {
        channel: {
          id: n
        }
      } = this.props;
    return null == t ? null : (0, g.AP)(t, n, e)
  }
  isScrolledToBottom() {
    let {
      scrollTop: e,
      scrollHeight: t,
      offsetHeight: n
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.getScrollerState();
    return module >= exports - require - 2 && !this.props.messages.hasMoreAfter
  }
  mergePropsAndUpdate(e) {
    this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck()
  }
  mergePropsAndUpdate_(e) {
    let t = this.props.messages,
      n = this.props.focusId;
    this.props = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
          v(e, t, n[t])
        })
      }
      return e
    }({}, e);
    let {
      offsetHeight: i,
      scrollHeight: r
    } = this.getScrollerState(), l = this.isHeightChange(i, r);
    if (this.offsetHeightCache = i, this.scrollHeightCache = r, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
      if (!this.isInitialized()) return void this.restoreScroll()
    } else {
      null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
      return
    }
    if (null != e.messages.jumpTargetId) {
      if (this.isLoading()) return;
      let n = _(e.messages);
      if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
        if (this.isJumping()) return void(null != n ? this.scrollToMessage(n, true) : this.jumping = false)
      } else {
        let i, r = t.first();
        null != r && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (i = m.default.extractTimestamp(r.id)), this.scrollToMessage(n, true, i);
        return
      }
    }
    if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
      this.jumping = true, this.scrollTo(0), this.setScrollToBottom(true);
      return
    }
    let a = e.messages.last(),
      o = t.last();
    if (null != a && a.state === C.yb.SENDING && (null == o ? true : o.id) !== a.id) return void this.setScrollToBottom();
    let {
      focusId: s
    } = this.props;
    if (null != s && n !== s) {
      let e = this.getElementFromMessageId(s);
      if (null != e) {
        var c;
        null == (c = this.ref.current) || c.scrollIntoViewNode({
          node: e,
          padding: y.kQ + this.props.additionalMessagePadding,
          callback: this.handleScroll
        });
        return
      }
    }
    l && this.fixScrollPosition(i, r)
  }
  getAnchorData(e, t, n) {
    var i;
    let r = this.getElementFromMessageId(e),
      l = null == (i = this.ref.current) ? true : i.getScrollerNode();
    if (!(0, a.kK)(r) || null == l) return null;
    let {
      offsetHeight: o
    } = r, s = (0, b.Z)(r, l), c = s - t;
    return null != n && (c = Math.max(-o, Math.min(n, c))), {
      id: e,
      offsetFromTop: c,
      offsetTop: s,
      offsetHeight: o,
      clamped: null != c
    }
  }
  cleanAutomaticAnchor() {
    this.setAutomaticAnchor(null)
  }
  newMessageBarBuffer() {
    return this.props.channel.isForumPost() ? Chunk959517.R4 : Chunk959517.Eo
  }
  findAnchor() {
    let {
      messages: e,
      hasUnreads: t,
      channel: n
    } = this.props, i = this.getScrollerState(), {
      scrollTop: r
    } = Chunk473749, l = exports && Chunk392711 >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, a = null, o = t => {
      var i;
      return false === t ? m.default.castChannelIdAsMessageId(n.id) : null == (i = e._array[t]) ? true : i.id
    }, s = false, c = false;
    for (;;) {
      let t = Chunk925549(Chunk904245);
      if (null == exports) break;
      let n = this.getAnchorData(exports, Chunk392711);
      if (this._bottomAnchor = require, Chunk45114 && null != require && require.offsetTop > Chunk392711 + l + Chunk473749.offsetHeight) break;
      if (Chunk45114) {
        Chunk904245++;
        continue
      }
      null != require && (require.offsetTop >= Chunk392711 + l || Chunk904245 === module.length - 1) && (a = require, c = true), Chunk904245++
    }
    return Chunk374470
  }
  findFetchAnchor(e) {
    let {
      messages: t
    } = this.props, {
      scrollTop: n
    } = this.getScrollerState(), i = e ? false : 1, r = null, l = t._array.length - 1;
    for (let a = e ? l : 0; null != t._array[a]; a += i) {
      let e = t._array[a],
        i = this.getAnchorData(e.id, n);
      if (null != i) {
        r = i;
        break
      }
    }
    return r
  }
  getAnchorFixData() {
    for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
      if (null == module) continue;
      let t = this.getElementFromMessageId(module.id);
      if (!(0, Chunk374470.kK)(exports)) continue;
      let n = module === this.messageFetchAnchor ? module.offsetHeight - exports.offsetHeight : 0;
      return {
        node: exports,
        fixedScrollTop: exports.offsetTop - (module.offsetFromTop + require)
      }
    }
    return null
  }
  fixAnchorScrollPosition() {
    let e = this.getAnchorFixData();
    if (null == module) return void this.handleScroll();
    let {
      node: t,
      fixedScrollTop: n
    } = module;
    if (null != this.focusAnchor) {
      var i;
      this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, false, this.handleScroll) : this.mergeTo(require, this.handleScroll), null == (i = this.ref.current) || Chunk473749.scrollIntoViewNode({
        node: exports,
        padding: Chunk959517.kQ + this.props.additionalMessagePadding,
        callback: this.handleScroll
      })
    } else this.mergeTo(require, this.handleScroll);
    this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), this.isLoading() || (this.messageFetchAnchor = null)
  }
  hasAnchor() {
    return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
  }
  updateFocusAnchor(e, t, n) {
    let i = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
    null != i && (i.offsetFromTop >= n || t > i.offsetTop + i.offsetHeight) && (this.focusAnchor = null)
  }
  handleFocusAnchorScroll(e, t) {
    var n;
    this.updateFocusAnchor(null == (n = this.focusAnchor) ? true : n.id, e, t)
  }
  updateFetchAnchor(e, t, n) {
    var i;
    let r = null == (i = this.ref.current) ? true : i.getScrollerNode();
    null != this.messageFetchAnchor && null != r && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
      scrollTop: e,
      offsetHeight: t,
      scrollHeight: n
    }) > 0 ? t : true))
  }
  updateAutomaticAnchor(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      i = null == (t = this.ref.current) ? true : t.getScrollerNode();
    if (null == this.automaticAnchor || null == i) return;
    let r = this.getAnchorData(this.automaticAnchor.id, e);
    n && null != r && null != this.automaticAnchor && (r.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(r)
  }
  setAutomaticAnchor(e) {
    var t, n;
    this.automaticAnchor = e, null == (t = this._automaticAnchorCallbacks) || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? true : e.id, null == (n = this._bottomAnchor) ? true : n.id)
  }
  getScrollerState() {
    var e, t;
    return null != (t = null == (e = this.ref.current) ? true : module.getScrollerState()) ? exports : O
  }
  isHeightChange(e, t) {
    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
  }
  isInPlaceholderRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: i
    } = e, {
      messages: r,
      placeholderHeight: l
    } = this.props;
    return r.hasMoreBefore && t < l && i > n ? 1 : r.hasMoreAfter && t >= i - n - l ? 2 : 0
  }
  isInScrollTriggerLoadingRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: i
    } = e, {
      messages: r
    } = this.props;
    return r.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && i > n ? 1 : r.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
  }
  handleScrollSpeed(e) {
    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: i
    } = e, {
      prevScrollTop: r,
      props: {
        placeholderHeight: l
      }
    } = this;
    if (this.prevScrollTop = t, null == r) return;
    let a = this.isInPlaceholderRegion(e),
      o = t - r;
    0 !== a && 0 !== o && (1 === a && t + o <= 0 ? (this.mergeTo(l - n), this.prevScrollTop = l - n) : 2 === a && t + o >= i - n && (this.mergeTo(i - l), this.prevScrollTop = i - l))
  }
  enableAutomaticAck() {
    this.isInitialized() && !this.acking && (this.acking = true, this.updateStoreDimensions(() => {
      (0, Chunk45114.CZ)(this.props.channel.id, this.props.windowId)
    }))
  }
  fixScrollPosition(e, t) {
    this.offsetHeightCache = e, this.scrollHeightCache = t, this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, false, this.handleScroll) : this.fixAnchorScrollPosition()
  }
  fixJumpTarget() {
    if (!this.isJumping()) return;
    let {
      messages: e,
      hasUnreads: t
    } = this.props;
    if (null != module.jumpTargetId) {
      let n = _(module);
      if (null == require) return;
      let i = this.getElementFromMessageId(require);
      (0, Chunk374470.kK)(Chunk473749) ? this.scrollTo(this.getOffsetOrientationFromNode(Chunk473749, "middle", exports ? this.newMessageBarBuffer() : Chunk959517.kQ), true): this.scrollToNewMessages(true, "middle")
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, true)
  }
  scrollToNewMessages() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "top",
      i = arguments.length > 2 ? arguments[2] : true,
      r = null == (e = this.getDocument()) ? true : module.getElementById(Chunk959517.j1),
      l = () => {
        this.jumping = false, this.setAutomaticAnchor(this.findAnchor()), null != Chunk473749 && Chunk473749(), this.handleScroll()
      };
    this.pinned = false, this.jumping = exports, null != Chunk392711 ? this.scrollTo(this.getOffsetOrientationFromNode(Chunk392711, require, this.newMessageBarBuffer()), exports, l) : this.scrollTo(this.getOffsetToPreventLoading("top"), exports, l)
  }
  getOffsetOrientationFromNode(e, t) {
    var n;
    let i = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0,
      r = null == (n = this.ref.current) ? true : n.getScrollerNode();
    if (null == r) return 0;
    let l = this.getScrollerState(),
      a = (0, b.Z)(e, r);
    return "middle" === t ? Math.min(a - .5 * l.offsetHeight + .5 * e.offsetHeight + false, a - i) : a - i
  }
  restoreScroll() {
    if (this.isInitialized()) return;
    let {
      initialScrollTop: e
    } = this;
    this.initialScrollTop = true;
    let t = _(this.props.messages);
    null != exports ? this.scrollToMessage(exports, false) : this.props.hasUnreads && this.props.channel.type !== Chunk981631.d4z.GUILD_VOICE && this.props.channel.type !== Chunk981631.d4z.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != module ? this.scrollTo(module + this.props.placeholderHeight, false, this.handleScroll) : this.setScrollToBottom()
  }
  scrollTo(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      i = arguments.length > 2 ? arguments[2] : true;
    null == (t = this.ref.current) || t.scrollTo({
      to: e,
      animate: !u.Z.useReducedMotion && n,
      callback: i
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  mergeTo(e, t) {
    var n;
    null == (n = this.ref.current) || n.mergeTo({
      to: e,
      callback: t
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  setScrollToBottom() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      {
        messages: t,
        channel: n
      } = this.props;
    if (exports.hasMoreAfter) {
      var i;
      Chunk904245.Z.jumpToPresent(require.id, Chunk981631.AQB), (0, Chunk703656.XU)(null != (i = require.getGuildId()) ? Chunk473749 : Chunk981631.ME, require.id)
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, module, () => {
      this.jumping = false, this.handleScroll()
    })
  }
  updateStoreDimensions(e) {
    if (this.isJumping() || !this.isInitialized()) return;
    let {
      channel: t
    } = this.props;
    if (this.isPinned()) o.Z.updateChannelDimensions(t.id, 1, 1, 0, e);
    else {
      let {
        placeholderHeight: n
      } = this.props, {
        scrollTop: i,
        scrollHeight: r,
        offsetHeight: l
      } = this.getScrollerState();
      o.Z.updateChannelDimensions(t.id, i - n, r - n, l, e)
    }
  }
  scrollIntoViewRect() {}
  scrollPageUp() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == (e = this.ref.current) || module.scrollPageUp({
      animate: exports
    })
  }
  scrollPageDown() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == (e = this.ref.current) || module.scrollPageDown({
      animate: exports
    })
  }
  scrollToMessage(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : true;
    if (null == this.ref.current) return;
    if (e === this.props.channel.id) return void this.scrollTo(0);
    let i = this.getElementFromMessageId(e);
    this.isJumping() || !t || null == n || u.Z.useReducedMotion || (m.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), this.pinned = false, this.jumping = true;
    let r = () => {
      this.jumping = false, (0, a.kK)(i) && (i.tabIndex = false, i.focus({
        preventScroll: true
      })), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
    };
    (0, a.kK)(i) ? this.scrollTo(this.getOffsetOrientationFromNode(i, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : y.kQ), t, r): this.scrollToNewMessages(t, "middle", r)
  }
  getOffsetToTriggerLoading(e, t) {
    let {
      scrollHeight: n,
      offsetHeight: i
    } = t, {
      messages: r,
      hasUnreads: l,
      placeholderHeight: a
    } = this.props;
    if ("top" === e)
      if (!r.hasMoreBefore) return 0;
      else return l ? a - y.D4 - 2 : a + 500;
    return r.hasMoreAfter ? n - i - a - 500 : n - i
  }
  getOffsetToPreventLoading(e) {
    let {
      messages: t
    } = this.props, n = 0;
    return "top" === e && t.hasMoreBefore ? n = 2 : "bottom" === e && t.hasMoreAfter && (n = false), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
  }
  getSnapshotBeforeUpdate(e) {
    if (this.hasAnchor() || null != e) {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: i
      } = this.getScrollerState();
      this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, i), this.updateAutomaticAnchor(t)
    }
  }
  addAutomaticAnchorCallback(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = l().uniq(this._automaticAnchorCallbacks), true === t && this.setAutomaticAnchor(this.findAnchor())
  }
  removeAutomaticAnchorCallback(e) {
    this._automaticAnchorCallbacks = l().without(this._automaticAnchorCallbacks, e)
  }
  addScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = l().uniq(this._scrollCompleteCallbacks)
  }
  removeScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks = l().without(this._scrollCompleteCallbacks, e)
  }
  cleanup() {
    this.acking = false, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, Chunk45114.jT)(this.props.channel.id, this.props.windowId)
  }
  constructor(e) {
    var t, n, r = this;
    if (v(this, "props", true), v(this, "ref", i.createRef()), v(this, "automaticAnchor", null), v(this, "messageFetchAnchor", null), v(this, "focusAnchor", null), v(this, "loading", true), v(this, "jumping", false), v(this, "pinned", true), v(this, "dragging", false), v(this, "isAtBottom", false), v(this, "prevScrollTop", null), v(this, "anchorTimeout", null), v(this, "initialScrollTop", null), v(this, "acking", false), v(this, "scrollCounter", 0), v(this, "offsetHeightCache", 0), v(this, "scrollHeightCache", 0), v(this, "scrollTopCache", false), v(this, "_bottomAnchor", null), v(this, "_automaticAnchorCallbacks", []), v(this, "_scrollCompleteCallbacks", []), v(this, "updateVisibleMessagesDebounced", l().debounce(h.JR, 300)), v(this, "handleScroll", e => {
        var t;
        if (!this.isInitialized()) return;
        let n = this.getScrollerState(),
          i = this.isScrolledToBottom(n);
        if (i !== this.isAtBottom && (i ? (this.isAtBottom = true, this.props.handleScrollToBottom()) : (this.isAtBottom = false, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), this.isPinned() || (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, true)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
        else {
          if (null != e && e.target !== (null == (t = this.ref.current) ? true : t.getScrollerNode())) return;
          this.scrollTopCache !== n.scrollTop && (this.pinned = i, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, true) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
            this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
            let {
              scrollHeight: e,
              offsetHeight: t
            } = this.getScrollerState();
            this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()))
          }, 35))
        }
        if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(n);
        let r = this.isInScrollTriggerLoadingRegion(n);
        1 === r ? this.loadMore() : 2 === r ? this.loadMore(true) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
      }), v(this, "handleResize", (e, t) => {
        let {
          offsetHeightCache: n,
          scrollHeightCache: i
        } = this;
        "container" === t ? n = e.contentRect.height : "content" === t && (i = e.contentRect.height), this.isHeightChange(n, i) && this.fixScrollPosition(n, i)
      }), v(this, "handleMouseDown", e => {
        e.target === e.currentTarget && (this.dragging = true)
      }), v(this, "handleMouseUp", () => {
        this.dragging = false, this.handleScroll()
      }), v(this, "loadMore", function() {
        let e, t, n = arguments.length > 0 && true !== arguments[0] && arguments[0],
          {
            messages: i
          } = r.props;
        if (n) {
          let e = i.last();
          null != e && (t = e.id)
        } else {
          let t = i.first();
          null != t && (e = t.id)
        }
        r.messageFetchAnchor = r.findFetchAnchor(n), r.loading = true, s.Z.fetchMessages({
          channelId: r.props.channel.id,
          before: e,
          after: t,
          limit: C.AQB,
          truncate: true
        })
      }), v(this, "updateStoreDimensionsDebounced", l().debounce(this.updateStoreDimensions, 200)), this.props = e, this.loading = e.messages.loadingMore, null != e.messages.jumpTargetId) this.pinned = false;
    else {
      let i = f.Z.isAtBottom(e.channel.id);
      this.pinned = null == i || i, this.initialScrollTop = i ? null : null != (n = null == (t = f.Z.getChannelDimensions(e.channel.id)) ? true : t.scrollTop) ? n : null
    }
  }
}

function j(e) {
  let {
    messages: t,
    channel: n,
    compact: r,
    hasUnreads: l,
    focusId: a,
    placeholderHeight: o,
    canLoadMore: s = true,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: p = 0
  } = e, {
    windowId: h
  } = i.useContext(d.ZP), [f] = i.useState(() => new x({
    messages: t,
    channel: n,
    compact: r,
    hasUnreads: l,
    focusId: a,
    placeholderHeight: o,
    canLoadMore: s,
    windowId: h,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: p
  }));
  return f.getSnapshotBeforeUpdate(a), i.useLayoutEffect(() => f.mergePropsAndUpdate({
    messages: t,
    channel: n,
    compact: r,
    hasUnreads: l,
    focusId: a,
    placeholderHeight: o,
    canLoadMore: s,
    windowId: h,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: p
  })), i.useLayoutEffect(() => () => f.cleanup(), [f]), f
}