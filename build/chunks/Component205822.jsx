/** Chunk was on 93886 **/
/** chunk id: 205822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk531643 = require("./531643.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374450 = require("./374450.js"),
  Chunk162130 = require("./162130.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let _ = new Chunk710845.Z("UploadArea");

function h() {
  return (0, Chunk54381.jsxs)("div", {
    children: [(0, Chunk54381.jsx)("div", {
      className: a()(Chunk162130.sparkleWhite, Chunk374450.sparkleOne)
    }), (0, Chunk54381.jsx)("div", {
      className: a()(Chunk162130.sparkleWhite, Chunk374450.sparkleTwo)
    }), (0, Chunk54381.jsx)("div", {
      className: a()(Chunk162130.lightWhite, Chunk374450.lightOne)
    }), (0, Chunk54381.jsx)("div", {
      className: a()(Chunk162130.lightWhite, Chunk374450.lightTwo)
    }), (0, Chunk54381.jsx)("div", {
      className: a()(Chunk162130.crossWhite, Chunk374450.crossOne)
    }), (0, Chunk54381.jsx)("div", {
      className: a()(Chunk162130.crossWhite, Chunk374450.crossTwo)
    }), (0, Chunk54381.jsx)("div", {
      className: a()(Chunk162130.popWhite, Chunk374450.popOne)
    })]
  })
}
class g extends Chunk473749.Component {
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
      style: i,
      className: l
    } = this.props;
    return (0, Chunk54381.jsx)("div", {
      ref: this.elementDOMRef,
      className: a()(Chunk120356, Chunk374450.uploadArea, {
        [Chunk374450.droppable]: this.state.isDragging,
        [Chunk374450.uploadModalIn]: this.state.isOverZone
      }),
      style: Chunk473749,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk374450.uploadDropModal,
        children: [this.state.isDragging && (0, Chunk54381.jsx)(h, {}), (0, Chunk54381.jsx)("div", {
          className: Chunk374450.bgScale
        }), (0, Chunk54381.jsxs)("div", {
          className: Chunk374450.inner,
          children: [(0, Chunk54381.jsx)(Chunk310752.Z, {
            icons: require
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk374450.title,
            children: module
          }), (0, Chunk54381.jsx)("div", {
            className: Chunk374450.instructions,
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
    super(...e), t = this, v(this, "state", {
      isDragging: false,
      isOverZone: false
    }), v(this, "dragOverTimeout", null), v(this, "elementDOMRef", i.createRef()), v(this, "isAllDropFiles", e => {
      for (let n = 0; n < e.length; n++) try {
        var t;
        let r = null != (t = e[n].webkitGetAsEntry()) ? t : e[n].getAsEntry();
        if (null == r) return _.warn("Dropped item is null or undefined"), false;
        if (!r.isFile) returnfalse
      } catch (e) {}
      returntrue
    }), v(this, "preventUnwantedDrop", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
        r = e.dataTransfer;
      if (null == r) returntrue;
      let i = Array.isArray(r.types) && false !== r.types.indexOf("text/uri-list") && false === r.types.indexOf("application/json"),
        l = null != r.items && !t.isAllDropFiles(r.items);
      return !i && !l || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", n && (t.setState({
        isDragging: false
      }), (0, d.openUploadError)({
        title: u.intl.string(u.t.azO1Pe),
        help: u.intl.string(u.t["Koklr/"])
      })), false)
    }), v(this, "handleDragOver", e => {
      var t, n, r;
      if (!this.preventUnwantedDrop(e)) returnfalse;
      let i = e.dataTransfer;
      if (null != i) {
        if ("move" === i.effectAllowed ? i.dropEffect = "move" : i.dropEffect = "copy", (0, o.nfh)(d.A) && (0, o.Mr3)(d.A), e.stopPropagation(), e.preventDefault(), null == (t = (n = this.props).onDragOver) || t.call(n, e), !this.state.isDragging) {
          let e = null == (r = this.elementDOMRef.current) ? true : r.ownerDocument.defaultView;
          (null != e && i.types instanceof e.DOMStringList && i.types.contains("application/x-moz-file") || false !== i.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
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
    }), v(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: true
      })
    }), v(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: false
      })
    }), v(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), v(this, "clearDragging", () => {
      var e, t;
      this.setState({
        isDragging: false,
        isOverZone: false
      }), null == (e = (t = this.props).onDragClear) || e.call(t)
    }), v(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, true)) returnfalse;
      let t = e.dataTransfer;
      if (null == t) returntrue;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    })
  }
}
let m = g