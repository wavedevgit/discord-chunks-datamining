/** Chunk was on 81985 **/
/** chunk id: 955384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk911969 = require("./911969.js"),
  Chunk925975 = require("./925975.js"),
  Chunk957730 = require("./957730.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk122083 = require("./122083.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  e.stopPropagation()
}

function h() {
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
class m extends Chunk473749.PureComponent {
  render() {
    let {
      className: e,
      textValue: t,
      richValue: n,
      message: i,
      channel: l,
      onCancel: a,
      children: o
    } = this.props, s = (0, r.jsx)("div", {
      className: d.operations,
      children: u.intl.format(u.t.wDsPXs, {
        onCancel: () => a(l.id),
        onSave: this.onClickSave
      })
    });
    return (0, r.jsxs)("div", {
      className: e,
      ref: this.node,
      onContextMenu: f,
      children: [o({
        textValue: t,
        richValue: n,
        message: i,
        channel: l,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onKeyDown: this.onKeyDown,
        renderLeftAccessories: () => s
      }), s]
    })
  }
  constructor(...e) {
    super(...e), p(this, "node", i.createRef()), p(this, "onClickSave", () => {
      let {
        textValue: e
      } = this.props;
      this.onSubmit(e)
    }), p(this, "onSubmit", e => {
      let {
        message: t,
        channel: n,
        onConfirmDelete: r,
        onCancel: i,
        saveMessage: c,
        validateEdit: u
      } = this.props;
      return 0 === e.length ? (r(n, t), i(n.id), Promise.resolve({
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
        let d = (0, a.g)(e, {
          channel: n,
          isEdit: true
        });
        if ((null == d ? true : d.content) != null && (e = d.content), t.hasFlag(s.iLy.IS_COMPONENTS_V2) && this.props.channel.type === s.d4z.GUILD_ANNOUNCEMENT) {
          let t = o.ZP.parse(this.props.channel, e),
            n = this.props.message.components.filter(e => e.type === l.re.TEXT_DISPLAY);
          if (1 === n.length) {
            let r = n[0];
            e !== r.content && c(this.props.channel.id, this.props.message.id, t)
          }
        } else {
          let t = o.ZP.parse(this.props.channel, e);
          t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t)
        }
        return i(n.id), Promise.resolve({
          shouldClear: true,
          shouldRefocus: true
        })
      })
    }), p(this, "onChange", (e, t, n) => {
      let {
        channel: r,
        onChange: i
      } = this.props;
      i(r.id, t, n)
    }), p(this, "onKeyDown", e => {
      if (e.key === c.vn.ESCAPE && !e.shiftKey) {
        let {
          channel: t,
          onCancel: n
        } = this.props;
        e.preventDefault(), e.stopPropagation(), n(t.id)
      }
      if (e.key === c.vn.HOME && !e.shiftKey) {
        e.preventDefault();
        let {
          selection: t,
          rangeStartContainer: n,
          rangeStartOffset: r
        } = h();
        if (null == t || null == n || null == r) return;
        g(t, n, 0)
      }
      if (e.key === c.vn.END && !e.shiftKey) {
        e.preventDefault();
        let {
          selection: t,
          rangeStartContainer: n,
          rangeStartOffset: r
        } = h();
        if (null == t || null == n || null == r) return;
        let i = n.textContent;
        if (null == i) return;
        g(t, n, i.length)
      }
    })
  }
}