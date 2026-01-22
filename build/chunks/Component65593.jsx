/** Chunk was on 67096 **/
/** chunk id: 65593, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk626584 = require("./626584.js"),
  Chunk961895 = require("./961895.jsx"),
  Chunk23658 = require("./23658.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893221 = require("./893221.js"),
  Chunk162253 = require("./162253.js");

function f(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[A] = t, e
}
let p = new Chunk626584.A("UploadArea");

function m() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: a()(g.sG, u.sparkleOne)
    }), (0, r.jsx)("div", {
      className: a()(g.sG, u.sparkleTwo)
    }), (0, r.jsx)("div", {
      className: a()(g.GK, u.lightOne)
    }), (0, r.jsx)("div", {
      className: a()(g.GK, u.lightTwo)
    }), (0, r.jsx)("div", {
      className: a()(g.cp, u.crossOne)
    }), (0, r.jsx)("div", {
      className: a()(g.cp, u.crossTwo)
    }), (0, r.jsx)("div", {
      className: a()(g.Tp, u.popOne)
    })]
  })
}
class b extends Chunk64700.Component {
  componentDidMount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, false), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, false), e.addEventListener("dragover", this.handleDragOverZone, false), e.addEventListener("dragleave", this.handleDragLeaveZone, false), e.addEventListener("drop", this.handleDrop, false))
  }
  componentWillUnmount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, false), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, false), e.removeEventListener("dragover", this.handleDragOverZone, false), e.removeEventListener("dragleave", this.handleDragLeaveZone, false), e.removeEventListener("drop", this.handleDrop, false)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: e,
      description: A,
      icons: t,
      style: n,
      className: l
    } = this.props;
    return (0, r.jsx)("div", {
      ref: this.elementDOMRef,
      className: a()(l, u.uploadArea, {
        [u.droppable]: this.state.isDragging,
        [u.uploadModalIn]: this.state.isOverZone
      }),
      style: n,
      children: (0, r.jsxs)("div", {
        className: u.uploadDropModal,
        children: [this.state.isDragging && (0, r.jsx)(m, {}), (0, r.jsx)("div", {
          className: u.bgScale
        }), (0, r.jsxs)("div", {
          className: u.inner,
          children: [(0, r.jsx)(o.A, {
            icons: t
          }), (0, r.jsx)("div", {
            className: u.title,
            children: e
          }), (0, r.jsx)("div", {
            className: u.instructions,
            children: (0, r.jsx)("pre", {
              children: A
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var A;
    super(...e), A = this, f(this, "state", {
      isDragging: false,
      isOverZone: false
    }), f(this, "dragOverTimeout", null), f(this, "elementDOMRef", n.createRef()), f(this, "isAllDropFiles", e => {
      for (let t = 0; t < e.length; t++) try {
        var A;
        let r = null != (A = e[t].webkitGetAsEntry()) ? A : e[t].getAsEntry();
        if (null == r) return p.warn("Dropped item is null or undefined"), false;
        if (!r.isFile) returnfalse
      } catch (e) {}
      returntrue
    }), f(this, "preventUnwantedDrop", function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
        r = e.dataTransfer;
      if (null == r) returntrue;
      let n = Array.isArray(r.types) && false !== r.types.indexOf("text/uri-list") && false === r.types.indexOf("application/json"),
        l = null != r.items && !A.isAllDropFiles(r.items);
      return !n && !l || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", t && (A.setState({
        isDragging: false
      }), (0, d.openUploadError)({
        title: c.intl.string(c.t.azO1Pe),
        help: c.intl.string(c.t["Koklr/"])
      })), false)
    }), f(this, "handleDragOver", e => {
      var A, t, r;
      if (!this.preventUnwantedDrop(e)) returnfalse;
      let n = e.dataTransfer;
      if (null != n) {
        if ("move" === n.effectAllowed ? n.dropEffect = "move" : n.dropEffect = "copy", (0, i.kBI)(d.D) && (0, i.OoC)(d.D), e.stopPropagation(), e.preventDefault(), null == (A = (t = this.props).onDragOver) || A.call(t, e), !this.state.isDragging) {
          let e = null == (r = this.elementDOMRef.current) ? true : r.ownerDocument.defaultView;
          (null != e && n.types instanceof e.DOMStringList && n.types.contains("application/x-moz-file") || false !== n.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
            isDragging: true
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var e, A;
          this.setState({
            isDragging: false
          }), null == (e = (A = this.props).onDragClear) || e.call(A)
        }, 1e3)
      }
    }), f(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: true
      })
    }), f(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: false
      })
    }), f(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), f(this, "clearDragging", () => {
      var e, A;
      this.setState({
        isDragging: false,
        isOverZone: false
      }), null == (e = (A = this.props).onDragClear) || e.call(A)
    }), f(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, true)) returnfalse;
      let A = e.dataTransfer;
      if (null == A) returntrue;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(A.files), this.clearDragging())
    })
  }
}
let v = b