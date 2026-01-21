/** Chunk was on 82124 **/
/** chunk id: 419388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => S
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
  Chunk257070 = require("./257070.js"),
  Chunk534469 = require("./534469.jsx"),
  Chunk173033 = require("./173033.js"),
  Chunk959517 = require("./959517.js"),
  Chunk981631 = require("./981631.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  var t, n;
  if (null == e.jumpTargetId || !e.ready) return null;
  let {
    jumpTargetId: r,
    jumpTargetOffset: i
  } = e;
  if (e.has(r) || !e.hasMoreBefore && r === g.default.castChannelIdAsMessageId(e.channelId)) {
    if (0 === i) return r;
    let n = e.getByIndex(e.indexOf(r) + i);
    return null != (t = null == n ? true : n.id) ? t : r
  }
  let l = [r, ...e.map(e => {
      let {
        id: t
      } = e;
      return t
    })].sort(g.default.compare),
    a = l.indexOf(r),
    o = null != (n = l[a + (Math.abs(i) > 0 ? i : 1)]) ? n : l[a - 1];
  return null != o ? o : null
}
let C = {
  scrollTop: 0,
  scrollHeight: 0,
  offsetHeight: 0
};
class E {
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
    return null == (t = this.ref.current) || null == (e = t.getScrollerNode()) ? true : e.ownerDocument
  }
  getElementFromMessageId(e) {
    let t = this.getDocument(),
      {
        channel: {
          id: n
        }
      } = this.props;
    return null == t ? null : (0, b.AP)(t, n, e)
  }
  isScrolledToBottom() {
    let {
      scrollTop: e,
      scrollHeight: t,
      offsetHeight: n
    } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : this.getScrollerState();
    return e >= t - n - 2 && !this.props.messages.hasMoreAfter
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
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          j(e, t, n[t])
        })
      }
      return e
    }({}, e);
    let {
      offsetHeight: r,
      scrollHeight: i
    } = this.getScrollerState(), l = this.isHeightChange(r, i);
    if (this.offsetHeightCache = r, this.scrollHeightCache = i, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
      if (!this.isInitialized()) return void this.restoreScroll()
    } else {
      null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
      return
    }
    if (null != e.messages.jumpTargetId) {
      if (this.isLoading()) return;
      let n = x(e.messages);
      if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
        if (this.isJumping()) return void(null != n ? this.scrollToMessage(n, true) : this.jumping = false)
      } else {
        let r, i = t.first();
        null != i && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (r = g.default.extractTimestamp(i.id)), this.scrollToMessage(n, true, r);
        return
      }
    }
    if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
      this.jumping = true, this.scrollTo(0), this.setScrollToBottom(true);
      return
    }
    let a = e.messages.last(),
      o = t.last();
    if (null != a && a.state === O.yb.SENDING && (null == o ? true : o.id) !== a.id) return void this.setScrollToBottom();
    let {
      focusId: s
    } = this.props;
    if (null != s && n !== s) {
      let e = this.getElementFromMessageId(s);
      if (null != e) {
        var c;
        null == (c = this.ref.current) || c.scrollIntoViewNode({
          node: e,
          padding: v.kQ + this.props.additionalMessagePadding,
          callback: this.handleScroll
        });
        return
      }
    }
    l && this.fixScrollPosition(r, i)
  }
  getAnchorData(e, t, n) {
    var r;
    let i = this.getElementFromMessageId(e),
      l = null == (r = this.ref.current) ? true : r.getScrollerNode();
    if (!(0, a.kK)(i) || null == l) return null;
    let {
      offsetHeight: o
    } = i, s = (0, y.Z)(i, l), c = s - t;
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
    return this.props.channel.isForumPost() ? v.R4 : v.Eo
  }
  findAnchor() {
    let {
      messages: e,
      hasUnreads: t,
      channel: n
    } = this.props, r = this.getScrollerState(), {
      scrollTop: i
    } = r, l = t && i >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, a = null, o = t => {
      var r;
      return false === t ? g.default.castChannelIdAsMessageId(n.id) : null == (r = e._array[t]) ? true : r.id
    }, s = false, c = false;
    for (;;) {
      let t = o(s);
      if (null == t) break;
      let n = this.getAnchorData(t, i);
      if (this._bottomAnchor = n, c && null != n && n.offsetTop > i + l + r.offsetHeight) break;
      if (c) {
        s++;
        continue
      }
      null != n && (n.offsetTop >= i + l || s === e.length - 1) && (a = n, c = true), s++
    }
    return a
  }
  findFetchAnchor(e) {
    let {
      messages: t
    } = this.props, {
      scrollTop: n
    } = this.getScrollerState(), r = e ? false : 1, i = null, l = t._array.length - 1;
    for (let a = e ? l : 0; null != t._array[a]; a += r) {
      let e = t._array[a],
        r = this.getAnchorData(e.id, n);
      if (null != r) {
        i = r;
        break
      }
    }
    return i
  }
  getAnchorFixData() {
    for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
      if (null == e) continue;
      let t = this.getElementFromMessageId(e.id);
      if (!(0, a.kK)(t)) continue;
      let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
      return {
        node: t,
        fixedScrollTop: t.offsetTop - (e.offsetFromTop + n)
      }
    }
    return null
  }
  fixAnchorScrollPosition() {
    let e = this.getAnchorFixData();
    if (null == e) return void this.handleScroll();
    let {
      node: t,
      fixedScrollTop: n
    } = e;
    if (null != this.focusAnchor) {
      var r;
      this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, false, this.handleScroll) : this.mergeTo(n, this.handleScroll), null == (r = this.ref.current) || r.scrollIntoViewNode({
        node: t,
        padding: v.kQ + this.props.additionalMessagePadding,
        callback: this.handleScroll
      })
    } else this.mergeTo(n, this.handleScroll);
    this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), this.isLoading() || (this.messageFetchAnchor = null)
  }
  hasAnchor() {
    return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
  }
  updateFocusAnchor(e, t, n) {
    let r = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
    null != r && (r.offsetFromTop >= n || t > r.offsetTop + r.offsetHeight) && (this.focusAnchor = null)
  }
  handleFocusAnchorScroll(e, t) {
    var n;
    this.updateFocusAnchor(null == (n = this.focusAnchor) ? true : n.id, e, t)
  }
  updateFetchAnchor(e, t, n) {
    var r;
    let i = null == (r = this.ref.current) ? true : r.getScrollerNode();
    null != this.messageFetchAnchor && null != i && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
      scrollTop: e,
      offsetHeight: t,
      scrollHeight: n
    }) > 0 ? t : true))
  }
  updateAutomaticAnchor(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      r = null == (t = this.ref.current) ? true : t.getScrollerNode();
    if (null == this.automaticAnchor || null == r) return;
    let i = this.getAnchorData(this.automaticAnchor.id, e);
    n && null != i && null != this.automaticAnchor && (i.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(i)
  }
  setAutomaticAnchor(e) {
    var t, n;
    this.automaticAnchor = e, null == (t = this._automaticAnchorCallbacks) || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? true : e.id, null == (n = this._bottomAnchor) ? true : n.id)
  }
  getScrollerState() {
    var e, t;
    return null != (t = null == (e = this.ref.current) ? true : e.getScrollerState()) ? t : C
  }
  isHeightChange(e, t) {
    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
  }
  isInPlaceholderRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: r
    } = e, {
      messages: i,
      placeholderHeight: l
    } = this.props;
    return i.hasMoreBefore && t < l && r > n ? 1 : i.hasMoreAfter && t >= r - n - l ? 2 : 0
  }
  isInScrollTriggerLoadingRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: r
    } = e, {
      messages: i
    } = this.props;
    return i.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && r > n ? 1 : i.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
  }
  handleScrollSpeed(e) {
    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: r
    } = e, {
      prevScrollTop: i,
      props: {
        placeholderHeight: l
      }
    } = this;
    if (this.prevScrollTop = t, null == i) return;
    let a = this.isInPlaceholderRegion(e),
      o = t - i;
    0 !== a && 0 !== o && (1 === a && t + o <= 0 ? (this.mergeTo(l - n), this.prevScrollTop = l - n) : 2 === a && t + o >= r - n && (this.mergeTo(r - l), this.prevScrollTop = r - l))
  }
  enableAutomaticAck() {
    this.isInitialized() && !this.acking && (this.acking = true, this.updateStoreDimensions(() => {
      (0, c.CZ)(this.props.channel.id, this.props.windowId)
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
    if (null != e.jumpTargetId) {
      let n = x(e);
      if (null == n) return;
      let r = this.getElementFromMessageId(n);
      (0, a.kK)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, "middle", t ? this.newMessageBarBuffer() : v.kQ), true): this.scrollToNewMessages(true, "middle")
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, true)
  }
  scrollToNewMessages() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "top",
      r = arguments.length > 2 ? arguments[2] : true,
      i = null == (e = this.getDocument()) ? true : e.getElementById(v.j1),
      l = () => {
        this.jumping = false, this.setAutomaticAnchor(this.findAnchor()), null != r && r(), this.handleScroll()
      };
    this.pinned = false, this.jumping = t, null != i ? this.scrollTo(this.getOffsetOrientationFromNode(i, n, this.newMessageBarBuffer()), t, l) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, l)
  }
  getOffsetOrientationFromNode(e, t) {
    var n;
    let r = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0,
      i = null == (n = this.ref.current) ? true : n.getScrollerNode();
    if (null == i) return 0;
    let l = this.getScrollerState(),
      a = (0, y.Z)(e, i);
    return "middle" === t ? Math.min(a - .5 * l.offsetHeight + .5 * e.offsetHeight + false, a - r) : a - r
  }
  restoreScroll() {
    if (this.isInitialized()) return;
    let {
      initialScrollTop: e
    } = this;
    this.initialScrollTop = true;
    let t = x(this.props.messages);
    null != t ? this.scrollToMessage(t, false) : this.props.hasUnreads && this.props.channel.type !== O.d4z.GUILD_VOICE && this.props.channel.type !== O.d4z.GUILD_STAGE_VOICE ? ((0, m.K)(this.props.channel, this.props.messages), this.scrollToNewMessages()) : null != e ? this.scrollTo(e + this.props.placeholderHeight, false, this.handleScroll) : this.setScrollToBottom()
  }
  scrollTo(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      r = arguments.length > 2 ? arguments[2] : true;
    null == (t = this.ref.current) || t.scrollTo({
      to: e,
      animate: !u.Z.useReducedMotion && n,
      callback: r
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
    if (t.hasMoreAfter) {
      var r;
      s.Z.jumpToPresent(n.id, O.AQB), (0, p.XU)(null != (r = n.getGuildId()) ? r : O.ME, n.id)
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
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
        scrollTop: r,
        scrollHeight: i,
        offsetHeight: l
      } = this.getScrollerState();
      o.Z.updateChannelDimensions(t.id, r - n, i - n, l, e)
    }
  }
  scrollIntoViewRect() {}
  scrollPageUp() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == (e = this.ref.current) || e.scrollPageUp({
      animate: t
    })
  }
  scrollPageDown() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0];
    null == (e = this.ref.current) || e.scrollPageDown({
      animate: t
    })
  }
  scrollToMessage(e) {
    let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : true;
    if (null == this.ref.current) return;
    if (e === this.props.channel.id) return void this.scrollTo(0);
    let r = this.getElementFromMessageId(e);
    this.isJumping() || !t || null == n || u.Z.useReducedMotion || (g.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), this.pinned = false, this.jumping = true;
    let i = () => {
      this.jumping = false, (0, a.kK)(r) && (r.tabIndex = false, r.focus({
        preventScroll: true
      })), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
    };
    (0, a.kK)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : v.kQ), t, i): this.scrollToNewMessages(t, "middle", i)
  }
  getOffsetToTriggerLoading(e, t) {
    let {
      scrollHeight: n,
      offsetHeight: r
    } = t, {
      messages: i,
      hasUnreads: l,
      placeholderHeight: a
    } = this.props;
    if ("top" === e)
      if (!i.hasMoreBefore) return 0;
      else return l ? a - v.D4 - 2 : a + 500;
    return i.hasMoreAfter ? n - r - a - 500 : n - r
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
        scrollHeight: r
      } = this.getScrollerState();
      this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, r), this.updateAutomaticAnchor(t)
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
    this.acking = false, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, c.jT)(this.props.channel.id, this.props.windowId)
  }
  constructor(e) {
    var t, n, i = this;
    if (j(this, "props", true), j(this, "ref", r.createRef()), j(this, "automaticAnchor", null), j(this, "messageFetchAnchor", null), j(this, "focusAnchor", null), j(this, "loading", true), j(this, "jumping", false), j(this, "pinned", true), j(this, "dragging", false), j(this, "isAtBottom", false), j(this, "prevScrollTop", null), j(this, "anchorTimeout", null), j(this, "initialScrollTop", null), j(this, "acking", false), j(this, "scrollCounter", 0), j(this, "offsetHeightCache", 0), j(this, "scrollHeightCache", 0), j(this, "scrollTopCache", false), j(this, "_bottomAnchor", null), j(this, "_automaticAnchorCallbacks", []), j(this, "_scrollCompleteCallbacks", []), j(this, "updateVisibleMessagesDebounced", l().debounce(f.JR, 300)), j(this, "handleScroll", e => {
        var t;
        if (!this.isInitialized()) return;
        let n = this.getScrollerState(),
          r = this.isScrolledToBottom(n);
        if (r !== this.isAtBottom && (r ? (this.isAtBottom = true, this.props.handleScrollToBottom()) : (this.isAtBottom = false, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), this.isPinned() || (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, true)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
        else {
          if (null != e && e.target !== (null == (t = this.ref.current) ? true : t.getScrollerNode())) return;
          this.scrollTopCache !== n.scrollTop && (this.pinned = r, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, true) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
            this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
            let {
              scrollHeight: e,
              offsetHeight: t
            } = this.getScrollerState();
            this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()))
          }, 35))
        }
        if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(n);
        let i = this.isInScrollTriggerLoadingRegion(n);
        1 === i ? this.loadMore() : 2 === i ? this.loadMore(true) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
      }), j(this, "handleResize", (e, t) => {
        let {
          offsetHeightCache: n,
          scrollHeightCache: r
        } = this;
        "container" === t ? n = e.contentRect.height : "content" === t && (r = e.contentRect.height), this.isHeightChange(n, r) && this.fixScrollPosition(n, r)
      }), j(this, "handleMouseDown", e => {
        e.target === e.currentTarget && (this.dragging = true)
      }), j(this, "handleMouseUp", () => {
        this.dragging = false, this.handleScroll()
      }), j(this, "loadMore", function() {
        let e, t, n = arguments.length > 0 && true !== arguments[0] && arguments[0],
          {
            messages: r
          } = i.props;
        if (n) {
          let e = r.last();
          null != e && (t = e.id)
        } else {
          let t = r.first();
          null != t && (e = t.id)
        }
        i.messageFetchAnchor = i.findFetchAnchor(n), i.loading = true, s.Z.fetchMessages({
          channelId: i.props.channel.id,
          before: e,
          after: t,
          limit: O.AQB,
          truncate: true
        })
      }), j(this, "updateStoreDimensionsDebounced", l().debounce(this.updateStoreDimensions, 200)), this.props = e, this.loading = e.messages.loadingMore, null != e.messages.jumpTargetId) this.pinned = false;
    else {
      let r = h.Z.isAtBottom(e.channel.id);
      this.pinned = null == r || r, this.initialScrollTop = r ? null : null != (n = null == (t = h.Z.getChannelDimensions(e.channel.id)) ? true : t.scrollTop) ? n : null
    }
  }
}

function S(e) {
  let {
    messages: t,
    channel: n,
    compact: i,
    hasUnreads: l,
    focusId: a,
    placeholderHeight: o,
    canLoadMore: s = true,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: p = 0
  } = e, {
    windowId: f
  } = r.useContext(d.ZP), [h] = r.useState(() => new E({
    messages: t,
    channel: n,
    compact: i,
    hasUnreads: l,
    focusId: a,
    placeholderHeight: o,
    canLoadMore: s,
    windowId: f,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: p
  }));
  return h.getSnapshotBeforeUpdate(a), r.useLayoutEffect(() => h.mergePropsAndUpdate({
    messages: t,
    channel: n,
    compact: i,
    hasUnreads: l,
    focusId: a,
    placeholderHeight: o,
    canLoadMore: s,
    windowId: f,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: p
  })), r.useLayoutEffect(() => () => h.cleanup(), [h]), h
}