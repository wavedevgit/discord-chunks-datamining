/** Chunk was on web.js **/
/** chunk id: 955384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk911969 = require("./911969.js"),
  Chunk925975 = require("./925975.js"),
  Chunk957730 = require("./957730.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk224079 = require("./224079.js");

function d(e, t, n) {
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
class _ extends Chunk73800.PureComponent {
  render() {
    let {
      className: e,
      textValue: t,
      richValue: n,
      message: i,
      channel: o,
      onCancel: a,
      children: s
    } = this.props, l = (0, Chunk255367.jsx)("div", {
      className: Chunk224079.operations,
      children: Chunk388032.intl.format(Chunk388032.t.wDsPXl, {
        onCancel: () => Chunk925975(Chunk911969.id),
        onSave: this.onClickSave
      })
    });
    return (0, Chunk255367.jsxs)("div", {
      className: module,
      ref: this.node,
      onContextMenu: f,
      children: [Chunk957730({
        textValue: exports,
        richValue: require,
        message: Chunk73800,
        channel: Chunk911969,
        onChange: this.onChange,
        onSubmit: this.onSubmit,
        onKeyDown: this.onKeyDown,
        renderLeftAccessories: () => Chunk981631
      }), Chunk981631]
    })
  }
  constructor(...e) {
    super(...e), d(this, "node", i.createRef()), d(this, "onClickSave", () => {
      let {
        textValue: e
      } = this.props;
      this.onSubmit(e)
    }), d(this, "onSubmit", e => {
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
        if ((null == d ? true : d.content) != null && (e = d.content), t.hasFlag(l.iLy.IS_COMPONENTS_V2) && this.props.channel.type === l.d4z.GUILD_ANNOUNCEMENT) {
          let t = s.ZP.parse(this.props.channel, e),
            n = this.props.message.components.filter(e => e.type === o.re.TEXT_DISPLAY);
          if (1 === n.length) {
            let r = n[0];
            e !== r.content && c(this.props.channel.id, this.props.message.id, t)
          }
        } else {
          let t = s.ZP.parse(this.props.channel, e);
          t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t)
        }
        return i(n.id), Promise.resolve({
          shouldClear: true,
          shouldRefocus: true
        })
      })
    }), d(this, "onChange", (e, t, n) => {
      let {
        channel: r,
        onChange: i
      } = this.props;
      i(r.id, t, n)
    }), d(this, "onKeyDown", e => {
      if (e.keyCode === l.yXg.ESCAPE && !e.shiftKey) {
        let {
          channel: t,
          onCancel: n
        } = this.props;
        e.preventDefault(), e.stopPropagation(), n(t.id)
      }
    })
  }
}