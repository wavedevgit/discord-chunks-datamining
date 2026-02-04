/** Chunk was on 17869 **/
/** chunk id: 205120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk155718 = require("./155718.js"),
  Chunk751258 = require("./751258.js"),
  Chunk451909 = require("./451909.js"),
  Chunk652215 = require("./652215.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk921522 = require("./921522.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  e.stopPropagation()
}

function f() {
  let e = window.getSelection();
  if (null == e) return {
    selection: null,
    rangeStartContainer: null,
    rangeStartOffset: null
  };
  let t = e.getRangeAt(0);
  return {
    selection: e,
    rangeStartContainer: t.startContainer,
    rangeStartOffset: t.startOffset
  }
}

function m(e, t, n) {
  let l = document.createRange();
  l.setStart(t, n), l.collapse(true), e.removeAllRanges(), e.addRange(l)
}
class g extends Chunk64700.PureComponent {
  render() {
    let {
      className: e,
      textValue: t,
      richValue: n,
      message: r,
      channel: i,
      onCancel: a,
      children: s
    } = this.props, o = (0, l.jsx)("div", {
      className: d.z,
      children: u.intl.format(u.t.wDsPXs, {
        onCancel: () => a(i.id),
        onSave: this.onClickSave
      })
    });
    return (0, l.jsxs)("div", {
      className: e,
      ref: this.node,
      onContextMenu: p,
      children: [s({
        textValue: t,
        richValue: n,
        message: r,
        channel: i,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onKeyDown: this.onKeyDown,
        renderLeftAccessories: () => o
      }), o]
    })
  }
  constructor(...e) {
    super(...e), h(this, "node", r.createRef()), h(this, "onClickSave", () => {
      let {
        textValue: e
      } = this.props;
      this.onSubmit(e)
    }), h(this, "onSubmit", e => {
      let {
        message: t,
        channel: n,
        onConfirmDelete: l,
        onCancel: r,
        saveMessage: c,
        validateEdit: u
      } = this.props;
      return 0 === e.length ? (l(n, t), r(n.id), Promise.resolve({
        shouldClear: false,
        shouldRefocus: false
      })) : u({
        value: e,
        channel: n
      }).then(l => {
        let {
          valid: u
        } = l;
        if (!u) return Promise.resolve({
          shouldClear: false,
          shouldRefocus: false
        });
        let d = (0, a.S)(e, {
          channel: n,
          isEdit: true
        });
        if ((null == d ? true : d.content) != null && (e = d.content), t.hasFlag(o.pr7.IS_COMPONENTS_V2) && this.props.channel.type === o.rbe.GUILD_ANNOUNCEMENT) {
          let t = s.Ay.parse(this.props.channel, e),
            n = this.props.message.components.filter(e => e.type === i.I5.TEXT_DISPLAY);
          if (1 === n.length) {
            let l = n[0];
            e !== l.content && c(this.props.channel.id, this.props.message.id, t)
          }
        } else {
          let t = s.Ay.parse(this.props.channel, e);
          t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t)
        }
        return r(n.id), Promise.resolve({
          shouldClear: true,
          shouldRefocus: true
        })
      })
    }), h(this, "onChange", (e, t, n) => {
      let {
        channel: l,
        onChange: r
      } = this.props;
      r(l.id, t, n)
    }), h(this, "onKeyDown", e => {
      if (e.key === c.dh.ESCAPE && !e.shiftKey) {
        let {
          channel: t,
          onCancel: n
        } = this.props;
        e.preventDefault(), e.stopPropagation(), n(t.id)
      }
      if (e.key === c.dh.HOME && !(e.shiftKey || e.ctrlKey)) {
        e.preventDefault();
        let {
          selection: t,
          rangeStartContainer: n,
          rangeStartOffset: l
        } = f();
        if (null == t || null == n || null == l) return;
        m(t, n, 0)
      }
      if (e.key === c.dh.END && !(e.shiftKey || e.ctrlKey)) {
        e.preventDefault();
        let {
          selection: t,
          rangeStartContainer: n,
          rangeStartOffset: l
        } = f();
        if (null == t || null == n || null == l) return;
        let r = n.textContent;
        if (null == r) return;
        m(t, n, r.length)
      }
    })
  }
}