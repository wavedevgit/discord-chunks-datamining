/** Chunk was on 67096 **/
/** chunk id: 65593, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function p(e, A, t) {
  return A in e ? Object.defineProperty(e, A, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[A] = t, e
}
let f = new Chunk626584.A("UploadArea");

function m() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: a()(g.sG, c.sparkleOne)
    }), (0, r.jsx)("div", {
      className: a()(g.sG, c.sparkleTwo)
    }), (0, r.jsx)("div", {
      className: a()(g.GK, c.lightOne)
    }), (0, r.jsx)("div", {
      className: a()(g.GK, c.lightTwo)
    }), (0, r.jsx)("div", {
      className: a()(g.cp, c.crossOne)
    }), (0, r.jsx)("div", {
      className: a()(g.cp, c.crossTwo)
    }), (0, r.jsx)("div", {
      className: a()(g.Tp, c.popOne)
    })]
  })
}
class v extends Chunk64700.Component {
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
      className: a()(l, c.uploadArea, {
        [c.droppable]: this.state.isDragging,
        [c.uploadModalIn]: this.state.isOverZone
      }),
      style: n,
      children: (0, r.jsxs)("div", {
        className: c.uploadDropModal,
        children: [this.state.isDragging && (0, r.jsx)(m, {}), (0, r.jsx)("div", {
          className: c.bgScale
        }), (0, r.jsxs)("div", {
          className: c.inner,
          children: [(0, r.jsx)(s.A, {
            icons: t
          }), (0, r.jsx)("div", {
            className: c.title,
            children: e
          }), (0, r.jsx)("div", {
            className: c.instructions,
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
    super(...e), A = this, p(this, "state", {
      isDragging: false,
      isOverZone: false
    }), p(this, "dragOverTimeout", null), p(this, "elementDOMRef", n.createRef()), p(this, "isAllDropFiles", e => {
      for (let t = 0; t < e.length; t++) try {
        var A;
        let r = null != (A = e[t].webkitGetAsEntry()) ? A : e[t].getAsEntry();
        if (null == r) return f.warn("Dropped item is null or undefined"), false;
        if (!r.isFile) returnfalse
      } catch (e) {}
      returntrue
    }), p(this, "preventUnwantedDrop", function(e) {
      let t = arguments.length > 1 && true !== arguments[1] && arguments[1],
        r = e.dataTransfer;
      if (null == r) returntrue;
      let n = Array.isArray(r.types) && false !== r.types.indexOf("text/uri-list") && false === r.types.indexOf("application/json"),
        l = null != r.items && !A.isAllDropFiles(r.items);
      return !n && !l || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", t && (A.setState({
        isDragging: false
      }), (0, d.openUploadError)({
        title: u.intl.string(u.t.azO1Pe),
        help: u.intl.string(u.t["Koklr/"])
      })), false)
    }), p(this, "handleDragOver", e => {
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
    }), p(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: true
      })
    }), p(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: false
      })
    }), p(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), p(this, "clearDragging", () => {
      var e, A;
      this.setState({
        isDragging: false,
        isOverZone: false
      }), null == (e = (A = this.props).onDragClear) || e.call(A)
    }), p(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, true)) returnfalse;
      let A = e.dataTransfer;
      if (null == A) returntrue;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(A.files), this.clearDragging())
    })
  }
}
let h = v