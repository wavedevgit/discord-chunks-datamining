/** Chunk was on 78528 **/
/** chunk id: 205120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
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

function g(e, t, n) {
  let r = document.createRange();
  r.setStart(t, n), r.collapse(true), e.removeAllRanges(), e.addRange(r)
}
class m extends Chunk64700.PureComponent {
  render() {
    let {
      className: e,
      textValue: t,
      richValue: n,
      message: l,
      channel: i,
      onCancel: s,
      children: a
    } = this.props, o = (0, r.jsx)("div", {
      className: d.z,
      children: u.intl.format(u.t.wDsPXs, {
        onCancel: () => s(i.id),
        onSave: this.onClickSave
      })
    });
    return (0, r.jsxs)("div", {
      className: e,
      ref: this.node,
      onContextMenu: h,
      children: [a({
        textValue: t,
        richValue: n,
        message: l,
        channel: i,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onKeyDown: this.onKeyDown,
        renderLeftAccessories: () => o
      }), o]
    })
  }
  constructor(...e) {
    super(...e), p(this, "node", l.createRef()), p(this, "onClickSave", () => {
      let {
        textValue: e
      } = this.props;
      this.onSubmit(e)
    }), p(this, "onSubmit", e => {
      let {
        message: t,
        channel: n,
        onConfirmDelete: r,
        onCancel: l,
        saveMessage: c,
        validateEdit: u
      } = this.props;
      return 0 === e.length ? (r(n, t), l(n.id), Promise.resolve({
        shouldClear: false,
        shouldRefocus: false
      })) : u({
        value: e,
        channel: n
      }).then(r => {
        let {
          valid: u
        } = r;
        if (!u) return Promise.resolve({
          shouldClear: false,
          shouldRefocus: false
        });
        let d = (0, s.S)(e, {
          channel: n,
          isEdit: true
        });
        if ((null == d ? true : d.content) != null && (e = d.content), t.hasFlag(o.pr7.IS_COMPONENTS_V2) && this.props.channel.type === o.rbe.GUILD_ANNOUNCEMENT) {
          let t = a.Ay.parse(this.props.channel, e),
            n = this.props.message.components.filter(e => e.type === i.I5.TEXT_DISPLAY);
          if (1 === n.length) {
            let r = n[0];
            e !== r.content && c(this.props.channel.id, this.props.message.id, t)
          }
        } else {
          let t = a.Ay.parse(this.props.channel, e);
          t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t)
        }
        return l(n.id), Promise.resolve({
          shouldClear: true,
          shouldRefocus: true
        })
      })
    }), p(this, "onChange", (e, t, n) => {
      let {
        channel: r,
        onChange: l
      } = this.props;
      l(r.id, t, n)
    }), p(this, "onKeyDown", e => {
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
          rangeStartOffset: r
        } = f();
        if (null == t || null == n || null == r) return;
        g(t, n, 0)
      }
      if (e.key === c.dh.END && !(e.shiftKey || e.ctrlKey)) {
        e.preventDefault();
        let {
          selection: t,
          rangeStartContainer: n,
          rangeStartOffset: r
        } = f();
        if (null == t || null == n || null == r) return;
        let l = n.textContent;
        if (null == l) return;
        g(t, n, l.length)
      }
    })
  }
}