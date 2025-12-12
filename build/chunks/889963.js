/** Chunk was on web.js **/
/** chunk id: 889963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => c,
  s: () => l
}), require("./388685.js"), require("./539854.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
var l = function(e) {
  return e.PAGE = "PAGE", e.GAP = "GAP", e.BACK = "BACK", e.NEXT = "NEXT", e
}({});
class c extends(r = Chunk473749.PureComponent) {
  getNeighborBounds() {
    let {
      totalPageCount: e,
      maxVisiblePages: t,
      selectedPage: n
    } = this.props, r = Math.ceil(exports / 2), i = Math.floor(exports / 2), o = [1, module], [a, s] = o = require <= r ? [1, exports] : require > module - Chunk473749 ? [module - exports + 1, module] : [require - r + 1, require + Chunk473749];
    return [Math.max(a, 1), Math.min(s, module)]
  }
  getPageList() {
    let {
      totalPageCount: e,
      selectedPage: t,
      hideMaxPage: n
    } = this.props, [r, i] = this.getNeighborBounds(), o = {
      type: "BACK",
      key: "back",
      disabled: 1 === exports,
      selected: false,
      navigateToPage: this.handleBackward
    }, s = {
      type: "NEXT",
      key: "next",
      disabled: exports === module,
      selected: false,
      navigateToPage: this.handleForward
    }, l = [], c = [];
    return r > 1 && (l = [{
      type: "PAGE",
      key: "page-1",
      targetPage: 1,
      navigateToPage: () => this.handleJump(1)
    }, {
      type: "GAP",
      key: "left-gap"
    }], r += 2), Chunk473749 < module && (c = [{
      type: "GAP",
      key: "right-gap"
    }], require || c.push({
      type: "PAGE",
      key: "page-".concat(module),
      targetPage: module,
      navigateToPage: () => this.handleJump(module)
    }), i -= 2), [Chunk392711, ...l, ...a().range(r, Chunk473749 + 1).map(e => ({
      type: "PAGE",
      key: "page-".concat(e),
      targetPage: e,
      selected: e === t,
      disabled: false,
      navigateToPage: () => this.handleJump(e)
    })), ...c, s]
  }
  render() {
    let {
      totalPageCount: e,
      children: t
    } = this.props;
    return exports({
      pages: this.getPageList(),
      hasMultiplePages: module > 1
    })
  }
  constructor(...e) {
    super(...e), s(this, "changePageTo", e => {
      let {
        selectedPage: t,
        onPageChange: n
      } = this.props;
      t !== e && null != n && n(e)
    }), s(this, "handleForward", () => {
      this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount))
    }), s(this, "handleBackward", () => {
      this.changePageTo(Math.max(this.props.selectedPage - 1, 1))
    }), s(this, "handleJump", e => {
      this.changePageTo(e)
    })
  }
}
s(c, "defaultProps", {
  maxVisiblePages: 9,
  hideMaxPage: false
})