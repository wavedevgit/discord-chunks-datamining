/** Chunk was on 93886 **/
/** chunk id: 205822, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk310752 = require("./310752.jsx"),
  Chunk531643 = require("./531643.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk995751 = require("./995751.js"),
  Chunk162130 = require("./162130.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = new Chunk710845.Z("UploadArea");

function v() {
  return (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)("div", {
      className: a()(Chunk162130.sparkleWhite, Chunk995751.sparkleOne)
    }), (0, Chunk951288.jsx)("div", {
      className: a()(Chunk162130.sparkleWhite, Chunk995751.sparkleTwo)
    }), (0, Chunk951288.jsx)("div", {
      className: a()(Chunk162130.lightWhite, Chunk995751.lightOne)
    }), (0, Chunk951288.jsx)("div", {
      className: a()(Chunk162130.lightWhite, Chunk995751.lightTwo)
    }), (0, Chunk951288.jsx)("div", {
      className: a()(Chunk162130.crossWhite, Chunk995751.crossOne)
    }), (0, Chunk951288.jsx)("div", {
      className: a()(Chunk162130.crossWhite, Chunk995751.crossTwo)
    }), (0, Chunk951288.jsx)("div", {
      className: a()(Chunk162130.popWhite, Chunk995751.popOne)
    })]
  })
}
class g extends Chunk647438.Component {
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
      style: r,
      className: l
    } = this.props;
    return (0, Chunk951288.jsx)("div", {
      ref: this.elementDOMRef,
      className: a()(Chunk120356, Chunk995751.uploadArea, {
        [Chunk995751.droppable]: this.state.isDragging,
        [Chunk995751.uploadModalIn]: this.state.isOverZone
      }),
      style: Chunk647438,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk995751.uploadDropModal,
        children: [this.state.isDragging && (0, Chunk951288.jsx)(v, {}), (0, Chunk951288.jsx)("div", {
          className: Chunk995751.bgScale
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk995751.inner,
          children: [(0, Chunk951288.jsx)(Chunk310752.Z, {
            icons: require
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk995751.title,
            children: module
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk995751.instructions,
            children: (0, Chunk951288.jsx)("pre", {
              children: exports
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, _(this, "state", {
      isDragging: false,
      isOverZone: false
    }), _(this, "dragOverTimeout", null), _(this, "elementDOMRef", r.createRef()), _(this, "isAllDropFiles", e => {
      for (let n = 0; n < e.length; n++) try {
        var t;
        let i = null != (t = e[n].webkitGetAsEntry()) ? t : e[n].getAsEntry();
        if (null == i) return h.warn("Dropped item is null or undefined"), false;
        if (!i.isFile) returnfalse
      } catch (e) {}
      returntrue
    }), _(this, "preventUnwantedDrop", function(e) {
      let n = arguments.length > 1 && true !== arguments[1] && arguments[1],
        i = e.dataTransfer;
      if (null == i) returntrue;
      let r = Array.isArray(i.types) && false !== i.types.indexOf("text/uri-list") && false === i.types.indexOf("application/json"),
        l = null != i.items && !t.isAllDropFiles(i.items);
      return !r && !l || (e.stopPropagation(), e.preventDefault(), i.effectAllowed = "none", i.dropEffect = "none", n && (t.setState({
        isDragging: false
      }), (0, c.openUploadError)({
        title: d.intl.string(d.t.azO1PT),
        help: d.intl.string(d.t.Koklr6),
        icons: t.props.icons
      })), false)
    }), _(this, "handleDragOver", e => {
      var t, n, i;
      if (!this.preventUnwantedDrop(e)) returnfalse;
      let r = e.dataTransfer;
      if (null != r) {
        if ("move" === r.effectAllowed ? r.dropEffect = "move" : r.dropEffect = "copy", (0, o.nfh)(c.A) && (0, o.Mr3)(c.A), e.stopPropagation(), e.preventDefault(), null == (t = (n = this.props).onDragOver) || t.call(n, e), !this.state.isDragging) {
          let e = null == (i = this.elementDOMRef.current) ? true : i.ownerDocument.defaultView;
          (null != e && r.types instanceof e.DOMStringList && r.types.contains("application/x-moz-file") || false !== r.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
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
    }), _(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: true
      })
    }), _(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: false
      })
    }), _(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), _(this, "clearDragging", () => {
      var e, t;
      this.setState({
        isDragging: false,
        isOverZone: false
      }), null == (e = (t = this.props).onDragClear) || e.call(t)
    }), _(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, true)) returnfalse;
      let t = e.dataTransfer;
      if (null == t) returntrue;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    })
  }
}
let b = g