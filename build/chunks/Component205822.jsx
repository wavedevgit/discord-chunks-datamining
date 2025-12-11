/** Chunk was on 93886 **/
/** chunk id: 205822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk531643 = require("./531643.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk297747 = require("./297747.js"),
  Chunk982681 = require("./982681.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = new Chunk710845.Z("UploadArea");

function g() {
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)("div", {
      className: l()(Chunk982681.sparkleWhite, Chunk297747.sparkleOne)
    }), (0, Chunk54381.jsx)("div", {
      className: l()(Chunk982681.sparkleWhite, Chunk297747.sparkleTwo)
    }), (0, Chunk54381.jsx)("div", {
      className: l()(Chunk982681.lightWhite, Chunk297747.lightOne)
    }), (0, Chunk54381.jsx)("div", {
      className: l()(Chunk982681.lightWhite, Chunk297747.lightTwo)
    }), (0, Chunk54381.jsx)("div", {
      className: l()(Chunk982681.crossWhite, Chunk297747.crossOne)
    }), (0, Chunk54381.jsx)("div", {
      className: l()(Chunk982681.crossWhite, Chunk297747.crossTwo)
    }), (0, Chunk54381.jsx)("div", {
      className: l()(Chunk982681.popWhite, Chunk297747.popOne)
    })]
  })
}
class h extends Chunk473749.Component {
  componentDidMount() {
    let e = this.elementDOMRef.current;
    null != module && (module.ownerDocument.body.addEventListener("dragover", this.handleDragOver, false), module.ownerDocument.body.addEventListener("drop", this.handleDragLeave, false), module.addEventListener("dragover", this.handleDragOverZone, false), module.addEventListener("dragleave", this.handleDragLeaveZone, false), module.addEventListener("drop", this.handleDrop, false))
  }
  componentWillUnmount() {
    let e = this.elementDOMRef.current;
    null != module && (module.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, false), module.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, false), module.removeEventListener("dragover", this.handleDragOverZone, false), module.removeEventListener("dragleave", this.handleDragLeaveZone, false), module.removeEventListener("drop", this.handleDrop, false)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: e,
      description: t,
      icons: n,
      style: a,
      className: i
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      ref: this.elementDOMRef,
      className: l()(Chunk120356, Chunk297747.uploadArea, {
        [Chunk297747.droppable]: this.state.isDragging,
        [Chunk297747.uploadModalIn]: this.state.isOverZone
      }),
      style: Chunk473749,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk297747.uploadDropModal,
        children: [this.state.isDragging && (0, Chunk54381.jsx)(g, {}), (0, Chunk54381.jsx)("div", {
          className: Chunk297747.bgScale
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk297747.inner,
          children: [(0, Chunk54381.jsx)(Chunk310752.Z, {
            icons: require
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk297747.title,
            children: module
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk297747.instructions,
            children: (0, Chunk54381.jsx)("pre", {
              children: exports
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, b(this, "state", {
      isDragging: false,
      isOverZone: false
    }), b(this, "dragOverTimeout", null), b(this, "elementDOMRef", a.createRef()), b(this, "isAllDropFiles", e => {
      for (let n = 0; n < e.length; n++) try {
        var t;
        let r = null != (t = e[n].webkitGetAsEntry()) ? t : e[n].getAsEntry();
        if (null == r) return v.warn("Dropped item is null or undefined"), false;
        if (!r.isFile) returnfalse
      } catch (e) {}
      returntrue
    }), b(this, "preventUnwantedDrop", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
        r = e.dataTransfer;
      if (null == r) returntrue;
      let a = Array.isArray(r.types) && false !== r.types.indexOf("text/uri-list") && false === r.types.indexOf("application/json"),
        i = null != r.items && !t.isAllDropFiles(r.items);
      return !a && !i || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", n && (t.setState({
        isDragging: false
      }), (0, s.openUploadError)({
        title: u.intl.string(u.t.azO1Pe),
        help: u.intl.string(u.t["Koklr/"])
      })), false)
    }), b(this, "handleDragOver", e => {
      var t, n, r;
      if (!this.preventUnwantedDrop(e)) returnfalse;
      let a = e.dataTransfer;
      if (null != a) {
        if ("move" === a.effectAllowed ? a.dropEffect = "move" : a.dropEffect = "copy", (0, o.nfh)(s.A) && (0, o.Mr3)(s.A), e.stopPropagation(), e.preventDefault(), null == (t = (n = this.props).onDragOver) || t.call(n, e), !this.state.isDragging) {
          let e = null == (r = this.elementDOMRef.current) ? true : r.ownerDocument.defaultView;
          (null != e && a.types instanceof e.DOMStringList && a.types.contains("application/x-moz-file") || false !== a.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
            isDragging: true
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var e, t;
          this.setState({
            isDragging: false
          }), null == (e = (t = this.props).onDragClear) || e.call(t)
        }, 1e3)
      }
    }), b(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: true
      })
    }), b(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: false
      })
    }), b(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), b(this, "clearDragging", () => {
      var e, t;
      this.setState({
        isDragging: false,
        isOverZone: false
      }), null == (e = (t = this.props).onDragClear) || e.call(t)
    }), b(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, true)) returnfalse;
      let t = e.dataTransfer;
      if (null == t) returntrue;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    })
  }
}
let m = h