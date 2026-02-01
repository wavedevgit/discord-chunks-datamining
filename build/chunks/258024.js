/** Chunk was on 61344 **/
/** chunk id: 258024, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => x
}), require("./896048.js"), require("./638769.js"), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk621466 = require("./621466.js"),
  Chunk951001 = require("./951001.js"),
  Chunk843472 = require("./843472.js"),
  Chunk334738 = require("./334738.js"),
  Chunk775602 = require("./775602.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk863922 = require("./863922.js"),
  Chunk72314 = require("./72314.js"),
  Chunk661191 = require("./661191.js"),
  Chunk61939 = require("./61939.js"),
  Chunk371741 = require("./371741.jsx"),
  Chunk420819 = require("./420819.js"),
  Chunk381941 = require("./381941.js"),
  Chunk652215 = require("./652215.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  var t, n;
  if (null == e.jumpTargetId || !e.ready) return null;
  let {
    jumpTargetId: l,
    jumpTargetOffset: r
  } = e;
  if (e.has(l) || !e.hasMoreBefore && l === m.default.castChannelIdAsMessageId(e.channelId)) {
    if (0 === r) return l;
    let t = e.getByIndex(e.indexOf(l) + r);
    return null != (n = null == t ? true : t.id) ? n : l
  }
  let i = [l, ...e.map(e => {
      let {
        id: t
      } = e;
      return t
    })].sort(m.default.compare),
    a = i.indexOf(l),
    s = null != (t = i[a + (Math.abs(r) > 0 ? r : 1)]) ? t : i[a - 1];
  return null != s ? s : null
}
let O = {
  scrollTop: 0,
  scrollHeight: 0,
  offsetHeight: 0
};
class C {
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
    return null == t ? null : (0, A.Av)(t, n, e)
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
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          v(e, t, n[t])
        })
      }
      return e
    }({}, e);
    let {
      offsetHeight: l,
      scrollHeight: r
    } = this.getScrollerState(), i = this.isHeightChange(l, r);
    if (this.offsetHeightCache = l, this.scrollHeightCache = r, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
      if (!this.isInitialized()) return void this.restoreScroll()
    } else {
      null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
      return
    }
    if (null != e.messages.jumpTargetId) {
      if (this.isLoading()) return;
      let n = E(e.messages);
      if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
        if (this.isJumping()) return void(null != n ? this.scrollToMessage(n, true) : this.jumping = false)
      } else {
        let l, r = t.first();
        null != r && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (l = m.default.extractTimestamp(r.id)), this.scrollToMessage(n, true, l);
        return
      }
    }
    if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
      this.jumping = true, this.scrollTo(0), this.setScrollToBottom(true);
      return
    }
    let a = e.messages.last(),
      s = t.last();
    if (null != a && a.state === y.cmJ.SENDING && (null == s ? true : s.id) !== a.id) return void this.setScrollToBottom();
    let {
      focusId: o
    } = this.props;
    if (null != o && n !== o) {
      let e = this.getElementFromMessageId(o);
      if (null != e) {
        var c;
        null == (c = this.ref.current) || c.scrollIntoViewNode({
          node: e,
          padding: _.mZ + this.props.additionalMessagePadding,
          callback: this.handleScroll
        });
        return
      }
    }
    i && this.fixScrollPosition(l, r)
  }
  getAnchorData(e, t, n) {
    var l;
    let r = this.getElementFromMessageId(e),
      i = null == (l = this.ref.current) ? true : l.getScrollerNode();
    if (!(0, a.vq)(r) || null == i) return null;
    let {
      offsetHeight: s
    } = r, o = (0, b.A)(r, i), c = o - t;
    return null != n && (c = Math.max(-s, Math.min(n, c))), {
      id: e,
      offsetFromTop: c,
      offsetTop: o,
      offsetHeight: s,
      clamped: null != c
    }
  }
  cleanAutomaticAnchor() {
    this.setAutomaticAnchor(null)
  }
  newMessageBarBuffer() {
    return this.props.channel.isForumPost() ? _.Gt : _.k8
  }
  findAnchor() {
    let {
      messages: e,
      hasUnreads: t,
      channel: n
    } = this.props, l = this.getScrollerState(), {
      scrollTop: r
    } = l, i = t && r >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, a = null, s = t => {
      var l;
      return false === t ? m.default.castChannelIdAsMessageId(n.id) : null == (l = e._array[t]) ? true : l.id
    }, o = false, c = false;
    for (;;) {
      let t = s(o);
      if (null == t) break;
      let n = this.getAnchorData(t, r);
      if (this._bottomAnchor = n, c && null != n && n.offsetTop > r + i + l.offsetHeight) break;
      if (c) {
        o++;
        continue
      }
      null != n && (n.offsetTop >= r + i || o === e.length - 1) && (a = n, c = true), o++
    }
    return a
  }
  findFetchAnchor(e) {
    let {
      messages: t
    } = this.props, {
      scrollTop: n
    } = this.getScrollerState(), l = e ? false : 1, r = null, i = t._array.length - 1;
    for (let a = e ? i : 0; null != t._array[a]; a += l) {
      let e = t._array[a],
        l = this.getAnchorData(e.id, n);
      if (null != l) {
        r = l;
        break
      }
    }
    return r
  }
  getAnchorFixData() {
    for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
      if (null == e) continue;
      let t = this.getElementFromMessageId(e.id);
      if (!(0, a.vq)(t)) continue;
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
      var l;
      this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, false, this.handleScroll) : this.mergeTo(n, this.handleScroll), null == (l = this.ref.current) || l.scrollIntoViewNode({
        node: t,
        padding: _.mZ + this.props.additionalMessagePadding,
        callback: this.handleScroll
      })
    } else this.mergeTo(n, this.handleScroll);
    this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), this.isLoading() || (this.messageFetchAnchor = null)
  }
  hasAnchor() {
    return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
  }
  updateFocusAnchor(e, t, n) {
    let l = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
    null != l && (l.offsetFromTop >= n || t > l.offsetTop + l.offsetHeight) && (this.focusAnchor = null)
  }
  handleFocusAnchorScroll(e, t) {
    var n;
    this.updateFocusAnchor(null == (n = this.focusAnchor) ? true : n.id, e, t)
  }
  updateFetchAnchor(e, t, n) {
    var l;
    let r = null == (l = this.ref.current) ? true : l.getScrollerNode();
    null != this.messageFetchAnchor && null != r && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
      scrollTop: e,
      offsetHeight: t,
      scrollHeight: n
    }) > 0 ? t : true))
  }
  updateAutomaticAnchor(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      l = null == (t = this.ref.current) ? true : t.getScrollerNode();
    if (null == this.automaticAnchor || null == l) return;
    let r = this.getAnchorData(this.automaticAnchor.id, e);
    n && null != r && null != this.automaticAnchor && (r.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(r)
  }
  setAutomaticAnchor(e) {
    var t, n;
    this.automaticAnchor = e, null == (t = this._automaticAnchorCallbacks) || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? true : e.id, null == (n = this._bottomAnchor) ? true : n.id)
  }
  getScrollerState() {
    var e, t;
    return null != (e = null == (t = this.ref.current) ? true : t.getScrollerState()) ? e : O
  }
  isHeightChange(e, t) {
    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
  }
  isInPlaceholderRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: l
    } = e, {
      messages: r,
      placeholderHeight: i
    } = this.props;
    return r.hasMoreBefore && t < i && l > n ? 1 : r.hasMoreAfter && t >= l - n - i ? 2 : 0
  }
  isInScrollTriggerLoadingRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: l
    } = e, {
      messages: r
    } = this.props;
    return r.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && l > n ? 1 : r.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
  }
  handleScrollSpeed(e) {
    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: l
    } = e, {
      prevScrollTop: r,
      props: {
        placeholderHeight: i
      }
    } = this;
    if (this.prevScrollTop = t, null == r) return;
    let a = this.isInPlaceholderRegion(e),
      s = t - r;
    0 !== a && 0 !== s && (1 === a && t + s <= 0 ? (this.mergeTo(i - n), this.prevScrollTop = i - n) : 2 === a && t + s >= l - n && (this.mergeTo(l - i), this.prevScrollTop = l - i))
  }
  enableAutomaticAck() {
    this.isInitialized() && !this.acking && (this.acking = true, this.updateStoreDimensions(() => {
      (0, c._9)(this.props.channel.id, this.props.windowId)
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
      let n = E(e);
      if (null == n) return;
      let l = this.getElementFromMessageId(n);
      (0, a.vq)(l) ? this.scrollTo(this.getOffsetOrientationFromNode(l, "middle", t ? this.newMessageBarBuffer() : _.mZ), true): this.scrollToNewMessages(true, "middle")
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, true)
  }
  scrollToNewMessages() {
    var e;
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : "top",
      l = arguments.length > 2 ? arguments[2] : true,
      r = null == (e = this.getDocument()) ? true : e.getElementById(_.q4),
      i = () => {
        this.jumping = false, this.setAutomaticAnchor(this.findAnchor()), null != l && l(), this.handleScroll()
      };
    this.pinned = false, this.jumping = t, null != r ? this.scrollTo(this.getOffsetOrientationFromNode(r, n, this.newMessageBarBuffer()), t, i) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, i)
  }
  getOffsetOrientationFromNode(e, t) {
    var n;
    let l = arguments.length > 2 && true !== arguments[2] ? arguments[2] : 0,
      r = null == (n = this.ref.current) ? true : n.getScrollerNode();
    if (null == r) return 0;
    let i = this.getScrollerState(),
      a = (0, b.A)(e, r);
    return "middle" === t ? Math.min(a - .5 * i.offsetHeight + .5 * e.offsetHeight + false, a - l) : a - l
  }
  restoreScroll() {
    if (this.isInitialized()) return;
    let {
      initialScrollTop: e
    } = this;
    this.initialScrollTop = true;
    let t = E(this.props.messages);
    null != t ? this.scrollToMessage(t, false) : this.props.hasUnreads && this.props.channel.type !== y.rbe.GUILD_VOICE && this.props.channel.type !== y.rbe.GUILD_STAGE_VOICE ? ((0, g.x)(this.props.channel, this.props.messages), this.scrollToNewMessages()) : null != e ? this.scrollTo(e + this.props.placeholderHeight, false, this.handleScroll) : this.setScrollToBottom()
  }
  scrollTo(e) {
    var t;
    let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
      l = arguments.length > 2 ? arguments[2] : true;
    null == (t = this.ref.current) || t.scrollTo({
      to: e,
      animate: !u.A.useReducedMotion && n,
      callback: l
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
      var l;
      o.A.jumpToPresent(n.id, y.EMb), (0, h.uh)(null != (l = n.getGuildId()) ? l : y.ME, n.id)
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
      this.jumping = false, this.handleScroll()
    })
  }
  updateStoreDimensions(e) {
    if (this.isJumping() || !this.isInitialized()) return;
    let {
      channel: t
    } = this.props;
    if (this.isPinned()) s.A.updateChannelDimensions(t.id, 1, 1, 0, e);
    else {
      let {
        placeholderHeight: n
      } = this.props, {
        scrollTop: l,
        scrollHeight: r,
        offsetHeight: i
      } = this.getScrollerState();
      s.A.updateChannelDimensions(t.id, l - n, r - n, i, e)
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
    let l = this.getElementFromMessageId(e);
    this.isJumping() || !t || null == n || u.A.useReducedMotion || (m.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), this.pinned = false, this.jumping = true;
    let r = () => {
      this.jumping = false, (0, a.vq)(l) && (l.tabIndex = false, l.focus({
        preventScroll: true
      })), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
    };
    (0, a.vq)(l) ? this.scrollTo(this.getOffsetOrientationFromNode(l, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : _.mZ), t, r): this.scrollToNewMessages(t, "middle", r)
  }
  getOffsetToTriggerLoading(e, t) {
    let {
      scrollHeight: n,
      offsetHeight: l
    } = t, {
      messages: r,
      hasUnreads: i,
      placeholderHeight: a
    } = this.props;
    if ("top" === e)
      if (!r.hasMoreBefore) return 0;
      else return i ? a - _.N0 - 2 : a + 500;
    return r.hasMoreAfter ? n - l - a - 500 : n - l
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
        scrollHeight: l
      } = this.getScrollerState();
      this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, l), this.updateAutomaticAnchor(t)
    }
  }
  addAutomaticAnchorCallback(e) {
    let t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
    this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = i().uniq(this._automaticAnchorCallbacks), true === t && this.setAutomaticAnchor(this.findAnchor())
  }
  removeAutomaticAnchorCallback(e) {
    this._automaticAnchorCallbacks = i().without(this._automaticAnchorCallbacks, e)
  }
  addScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = i().uniq(this._scrollCompleteCallbacks)
  }
  removeScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks = i().without(this._scrollCompleteCallbacks, e)
  }
  cleanup() {
    this.acking = false, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, c.Z5)(this.props.channel.id, this.props.windowId)
  }
  constructor(e) {
    var t, n, r = this;
    if (v(this, "props", true), v(this, "ref", l.createRef()), v(this, "automaticAnchor", null), v(this, "messageFetchAnchor", null), v(this, "focusAnchor", null), v(this, "loading", true), v(this, "jumping", false), v(this, "pinned", true), v(this, "dragging", false), v(this, "isAtBottom", false), v(this, "prevScrollTop", null), v(this, "anchorTimeout", null), v(this, "initialScrollTop", null), v(this, "acking", false), v(this, "scrollCounter", 0), v(this, "offsetHeightCache", 0), v(this, "scrollHeightCache", 0), v(this, "scrollTopCache", false), v(this, "_bottomAnchor", null), v(this, "_automaticAnchorCallbacks", []), v(this, "_scrollCompleteCallbacks", []), v(this, "updateVisibleMessagesDebounced", i().debounce(p.s_, 300)), v(this, "handleScroll", e => {
        var t;
        if (!this.isInitialized()) return;
        let n = this.getScrollerState(),
          l = this.isScrolledToBottom(n);
        if (l !== this.isAtBottom && (l ? (this.isAtBottom = true, this.props.handleScrollToBottom()) : (this.isAtBottom = false, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), this.isPinned() || (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, true)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
        else {
          if (null != e && e.target !== (null == (t = this.ref.current) ? true : t.getScrollerNode())) return;
          this.scrollTopCache !== n.scrollTop && (this.pinned = l, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, true) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
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
          scrollHeightCache: l
        } = this;
        "container" === t ? n = e.contentRect.height : "content" === t && (l = e.contentRect.height), this.isHeightChange(n, l) && this.fixScrollPosition(n, l)
      }), v(this, "handleMouseDown", e => {
        e.target === e.currentTarget && (this.dragging = true)
      }), v(this, "handleMouseUp", () => {
        this.dragging = false, this.handleScroll()
      }), v(this, "loadMore", function() {
        let e, t, n = arguments.length > 0 && true !== arguments[0] && arguments[0],
          {
            messages: l
          } = r.props;
        if (n) {
          let e = l.last();
          null != e && (t = e.id)
        } else {
          let t = l.first();
          null != t && (e = t.id)
        }
        r.messageFetchAnchor = r.findFetchAnchor(n), r.loading = true, o.A.fetchMessages({
          channelId: r.props.channel.id,
          before: e,
          after: t,
          limit: y.EMb,
          truncate: true
        })
      }), v(this, "updateStoreDimensionsDebounced", i().debounce(this.updateStoreDimensions, 200)), this.props = e, this.loading = e.messages.loadingMore, null != e.messages.jumpTargetId) this.pinned = false;
    else {
      const l = f.A.isAtBottom(e.channel.id);
      this.pinned = null == l || l, this.initialScrollTop = l ? null : null != (t = null == (n = f.A.getChannelDimensions(e.channel.id)) ? true : n.scrollTop) ? t : null
    }
  }
}

function x(e) {
  let {
    messages: t,
    channel: n,
    compact: r,
    hasUnreads: i,
    focusId: a,
    placeholderHeight: s,
    canLoadMore: o = true,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: h = 0
  } = e, {
    windowId: p
  } = l.useContext(d.Ay), [f] = l.useState(() => new C({
    messages: t,
    channel: n,
    compact: r,
    hasUnreads: i,
    focusId: a,
    placeholderHeight: s,
    canLoadMore: o,
    windowId: p,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: h
  }));
  return f.getSnapshotBeforeUpdate(a), l.useLayoutEffect(() => f.mergePropsAndUpdate({
    messages: t,
    channel: n,
    compact: r,
    hasUnreads: i,
    focusId: a,
    placeholderHeight: s,
    canLoadMore: o,
    windowId: p,
    handleScrollToBottom: c,
    handleScrollFromBottom: u,
    additionalMessagePadding: h
  })), l.useLayoutEffect(() => () => f.cleanup(), [f]), f
}