/** Chunk was on 99120 **/
n.d(t, {
  Z: () => y
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(481060),
  s = n(710845),
  c = n(310752),
  u = n(531643),
  d = n(388032),
  p = n(421957),
  f = n(591775);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let g = new s.Z("UploadArea");

function m() {
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)("div", {
      className: l()(f.sparkleWhite, p.sparkleOne)
    }), (0, r.jsx)("div", {
      className: l()(f.sparkleWhite, p.sparkleTwo)
    }), (0, r.jsx)("div", {
      className: l()(f.lightWhite, p.lightOne)
    }), (0, r.jsx)("div", {
      className: l()(f.lightWhite, p.lightTwo)
    }), (0, r.jsx)("div", {
      className: l()(f.crossWhite, p.crossOne)
    }), (0, r.jsx)("div", {
      className: l()(f.crossWhite, p.crossTwo)
    }), (0, r.jsx)("div", {
      className: l()(f.popWhite, p.popOne)
    })]
  })
}
class b extends i.Component {
  componentDidMount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1), e.addEventListener("dragover", this.handleDragOverZone, !1), e.addEventListener("dragleave", this.handleDragLeaveZone, !1), e.addEventListener("drop", this.handleDrop, !1))
  }
  componentWillUnmount() {
    let e = this.elementDOMRef.current;
    null != e && (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1), e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1), e.removeEventListener("dragover", this.handleDragOverZone, !1), e.removeEventListener("dragleave", this.handleDragLeaveZone, !1), e.removeEventListener("drop", this.handleDrop, !1)), clearTimeout(this.dragOverTimeout)
  }
  render() {
    let {
      title: e,
      description: t,
      icons: n,
      style: i,
      className: o
    } = this.props;
    return (0, r.jsx)("div", {
      ref: this.elementDOMRef,
      className: l()(o, p.uploadArea, {
        [p.droppable]: this.state.isDragging,
        [p.uploadModalIn]: this.state.isOverZone
      }),
      style: i,
      children: (0, r.jsxs)("div", {
        className: p.uploadDropModal,
        children: [this.state.isDragging && (0, r.jsx)(m, {}), (0, r.jsx)("div", {
          className: p.bgScale
        }), (0, r.jsxs)("div", {
          className: p.inner,
          children: [(0, r.jsx)(c.Z, {
            icons: n
          }), (0, r.jsx)("div", {
            className: p.title,
            children: e
          }), (0, r.jsx)("div", {
            className: p.instructions,
            children: (0, r.jsx)("pre", {
              children: t
            })
          })]
        })]
      })
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, v(this, "state", {
      isDragging: !1,
      isOverZone: !1
    }), v(this, "dragOverTimeout", null), v(this, "elementDOMRef", i.createRef()), v(this, "isAllDropFiles", e => {
      for (let n = 0; n < e.length; n++) try {
        var t;
        let r = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
        if (null == r) return g.warn("Dropped item is null or undefined"), !1;
        if (!r.isFile) return !1
      } catch (e) {}
      return !0
    }), v(this, "preventUnwantedDrop", function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = e.dataTransfer;
      if (null == r) return !0;
      let i = Array.isArray(r.types) && -1 !== r.types.indexOf("text/uri-list") && -1 === r.types.indexOf("application/json"),
        o = null != r.items && !t.isAllDropFiles(r.items);
      return !i && !o || (e.stopPropagation(), e.preventDefault(), r.effectAllowed = "none", r.dropEffect = "none", n && (t.setState({
        isDragging: !1
      }), (0, u.openUploadError)({
        title: d.NW.string(d.t.azO1PT),
        help: d.NW.string(d.t.Koklr6),
        icons: t.props.icons
      })), !1)
    }), v(this, "handleDragOver", e => {
      var t, n, r;
      if (!this.preventUnwantedDrop(e)) return !1;
      let i = e.dataTransfer;
      if (null != i) {
        if ("move" === i.effectAllowed ? i.dropEffect = "move" : i.dropEffect = "copy", (0, a.nfh)(u.A) && (0, a.Mr3)(u.A), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging) {
          let e = null === (r = this.elementDOMRef.current) || void 0 === r ? void 0 : r.ownerDocument.defaultView;
          (null != e && i.types instanceof e.DOMStringList && i.types.contains("application/x-moz-file") || -1 !== i.types.indexOf("Files")) && this.setState(e => e.isDragging ? {} : {
            isDragging: !0
          })
        }
        clearTimeout(this.dragOverTimeout), this.dragOverTimeout = setTimeout(() => {
          var e, t;
          this.setState({
            isDragging: !1
          }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
        }, 1e3)
      }
    }), v(this, "handleDragOverZone", () => {
      this.setState({
        isOverZone: !0
      })
    }), v(this, "handleDragLeaveZone", () => {
      this.setState({
        isOverZone: !1
      })
    }), v(this, "handleDragLeave", e => {
      this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging())
    }), v(this, "clearDragging", () => {
      var e, t;
      this.setState({
        isDragging: !1,
        isOverZone: !1
      }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t)
    }), v(this, "handleDrop", e => {
      if (!this.preventUnwantedDrop(e, !0)) return !1;
      let t = e.dataTransfer;
      if (null == t) return !0;
      this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging())
    })
  }
}
let y = b