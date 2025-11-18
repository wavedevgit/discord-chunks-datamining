/** Chunk was on 71264 **/
/** chunk id: 955384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk911969 = require("./911969.js"),
  Chunk925975 = require("./925975.js"),
  Chunk957730 = require("./957730.js"),
  Chunk981631 = require("./981631.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk287921 = require("./287921.js");

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
class f extends Chunk473749.PureComponent {
  render() {
    let {
      className: e,
      textValue: t,
      richValue: n,
      message: r,
      channel: l,
      onCancel: a,
      children: o
    } = this.props, s = (0, Chunk54381.jsx)("div", {
      className: Chunk287921.operations,
      children: Chunk388032.intl.format(Chunk388032.t.wDsPXs, {
        onCancel: () => Chunk925975(Chunk911969.id),
        onSave: this.onClickSave
      })
    });
    return (0, Chunk54381.jsxs)("div", {
      className: module,
      ref: this.node,
      onContextMenu: h,
      children: [Chunk957730({
        textValue: exports,
        richValue: require,
        message: Chunk473749,
        channel: Chunk911969,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onKeyDown: this.onKeyDown,
        renderLeftAccessories: () => Chunk981631
      }), Chunk981631]
    })
  }
  constructor(...e) {
    super(...e), p(this, "node", r.createRef()), p(this, "onClickSave", () => {
      let {
        textValue: e
      } = this.props;
      this.onSubmit(e)
    }), p(this, "onSubmit", e => {
      let {
        message: t,
        channel: n,
        onConfirmDelete: i,
        onCancel: r,
        saveMessage: c,
        validateEdit: u
      } = this.props;
      return 0 === e.length ? (i(n, t), r(n.id), Promise.resolve({
        shouldClear: false,
        shouldRefocus: false
      })) : u({
        value: e,
        channel: n
      }).then(i => {
        let {
          valid: u
        } = i;
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
            let i = n[0];
            e !== i.content && c(this.props.channel.id, this.props.message.id, t)
          }
        } else {
          let t = o.ZP.parse(this.props.channel, e);
          t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t)
        }
        return r(n.id), Promise.resolve({
          shouldClear: true,
          shouldRefocus: true
        })
      })
    }), p(this, "onChange", (e, t, n) => {
      let {
        channel: i,
        onChange: r
      } = this.props;
      r(i.id, t, n)
    }), p(this, "onKeyDown", e => {
      if (e.key === c.vn.ESCAPE && !e.shiftKey) {
        let {
          channel: t,
          onCancel: n
        } = this.props;
        e.preventDefault(), e.stopPropagation(), n(t.id)
      }
    })
  }
}