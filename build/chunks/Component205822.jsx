/** Chunk was on 96795 **/
/** chunk id: 205822, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  E = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk531643 = require("./531643.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk297747 = require("./297747.js"),
  Chunk982681 = require("./982681.js");

function _(t, i, n) {
  return i in t ? Object.defineProperty(t, i, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t[i] = n, t
}
let N = new Chunk710845.Z("UploadArea");

function c() {
  return (0, e.jsxs)("div", {
    children: [(0, e.jsx)("div", {
      className: E()(g.sparkleWhite, P.sparkleOne)
    }), (0, e.jsx)("div", {
      className: E()(g.sparkleWhite, P.sparkleTwo)
    }), (0, e.jsx)("div", {
      className: E()(g.lightWhite, P.lightOne)
    }), (0, e.jsx)("div", {
      className: E()(g.lightWhite, P.lightTwo)
    }), (0, e.jsx)("div", {
      className: E()(g.crossWhite, P.crossOne)
    }), (0, e.jsx)("div", {
      className: E()(g.crossWhite, P.crossTwo)
    }), (0, e.jsx)("div", {
      className: E()(g.popWhite, P.popOne)
    })]
  })
}
class d extends Chunk473749.Component {
  componentDidMount() {
    let t = this.elementDOMRef.current;
    null != t && (t.ownerDocument.body.addEventListener("dragover", this.handleDragOver, false), t.ownerDocument.body.addEventListener("drop", this.handleDragLeave, false), t.addEventListener("dragover", this.handleDragOverZone, false), t.addEventListener("dragleave", this.handleDragLeaveZone, false), t.addEventListener("drop", this.handleDrop, false))
  }
  componentWillUnmount() {
    let t = this.elementDOMRef.current;
    null != t && (t.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, false), t.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, false), t.removeEventListener("dragover", this.handleDragOverZone, false), t.removeEventListener("dragleave", this.handleDragLeaveZone, false), t.removeEventListener("drop", this.handleDrop, false)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: t,
      description: i,
      icons: n,
      style: l,
      className: r
    } = this.props;
    return (0, e.jsx)("div", {
      ref: this.elementDOMRef,
      className: E()(r, P.uploadArea, {
        [P.droppable]: this.state.isDragging,
        [P.uploadModalIn]: this.state.isOverZone
      }),
      style: l,
      children: (0, e.jsxs)("div", {
        className: P.uploadDropModal,
        children: [this.state.isDragging && (0, e.jsx)(c, {}), (0, e.jsx)("div", {
          className: P.bgScale
        }), (0, e.jsxs)("div", {
          className: P.inner,
          children: [(0, e.jsx)(S.Z, {
            icons: n
          }), (0, e.jsx)("div", {
            className: P.title,
            children: t
          }), (0, e.jsx)("div", {
            className: P.instructions,
            children: (0, e.jsx)("pre", {
              children: i
            })
          })]
        })]
      })
    })
  }
  constructor(...t) {
    var i;
    super(...t), i = this, _(this, "state", {
      isDragging: false,
      isOverZone: false
    }), _(this, "dragOverTimeout", null), _(this, "elementDOMRef", l.createRef()), _(this, "isAllDropFiles", t => {
      for (let n = 0; n < t.length; n++) try {
        var i;
        let e = null != (i = t[n].webkitGetAsEntry()) ? i : t[n].getAsEntry();
        if (null == e) return N.warn("Dropped item is null or undefined"), false;
        if (!e.isFile) returnfalse
      } catch (t) {}
      returntrue
    }), _(this, "preventUnwantedDrop", function(t) {
      let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
        e = t.dataTransfer;
      if (null == e) returntrue;
      let l = Array.isArray(e.types) && false !== e.types.indexOf("text/uri-list") && false === e.types.indexOf("application/json"),
        r = null != e.items && !i.isAllDropFiles(e.items);
      return !l && !r || (t.stopPropagation(), t.preventDefault(), e.effectAllowed = "none", e.dropEffect = "none", n && (i.setState({
        isDragging: false
      }), (0, a.openUploadError)({
        title: A.intl.string(A.t.azO1Pe),
        help: A.intl.string(A.t["Koklr/"])
      })), false)
    }), _(this, "handleDragOver", t => {
      var i, n, e;
      if (!this.preventUnwantedDrop(t)) returnfalse;
      let l = t.dataTransfer;
      if (null != l) {
        if ("move" === l.effectAllowed ? l.dropEffect = "move" : l.dropEffect = "copy", (0, s.nfh)(a.A) && (0, s.Mr3)(a.A), t.stopPropagation(), t.preventDefault(), null == (i = (n = this.props).onDragOver) || i.call(n, t), !this.state.isDragging) {
          let t = null == (e = this.elementDOMRef.current) ? true : e.ownerDocument.defaultView;
          (null != t && l.types instanceof t.DOMStringList && l.types.contains("application/x-moz-file") || false !== l.types.indexOf("Files")) && this.setState(t => t.isDragging ? {} : {
            isDragging: true
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var t, i;
          this.setState({
            isDragging: false
          }), null == (t = (i = this.props).onDragClear) || t.call(i)
        }, 1e3)
      }
    }), _(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: true
      })
    }), _(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: false
      })
    }), _(this, "handleDragLeave", t => {
      this.state.isDragging && (t.stopPropagation(), t.preventDefault(), this.clearDragging())
    }), _(this, "clearDragging", () => {
      var t, i;
      this.setState({
        isDragging: false,
        isOverZone: false
      }), null == (t = (i = this.props).onDragClear) || t.call(i)
    }), _(this, "handleDrop", t => {
      if (!this.preventUnwantedDrop(t, true)) returnfalse;
      let i = t.dataTransfer;
      if (null == i) returntrue;
      this.state.isDragging && (t.preventDefault(), t.stopPropagation(), this.props.onDrop(i.files), this.clearDragging())
    })
  }
}
let p = d