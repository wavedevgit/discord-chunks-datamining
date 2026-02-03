/** Chunk was on 44669 **/
/** chunk id: 565265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk46054 = require("./46054.js"),
  Chunk742589 = require("./742589.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk980017 = require("./980017.js"),
  Chunk206314 = require("./206314.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function A(e) {
  return e.matches("a") || "highlight" === e.className || e.className.includes("mention")
}
class y extends Chunk64700.Component {
  render() {
    let {
      channel: e
    } = this.props;
    if (e.isMultiUserDM()) return null;
    let t = null != e.topic && e.topic.length > 0;
    return null != e.linkedLobby || t ? (0, r.jsxs)(l.Fragment, {
      children: [(0, r.jsx)(d.A.Divider, {}), (0, r.jsxs)("div", {
        className: s()(g.At, g.lu, f.PT),
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onMouseMove,
        onMouseUp: this.onMouseUp,
        onContextMenu: this.handleContextMenu,
        onClick: this.handleClick,
        children: [(0, r.jsx)(o.DUT, {
          onClick: this.handleClick,
          "aria-label": h.intl.string(h.t.mKwsSp),
          className: g.h8
        }), null == e.linkedLobby || t ? u.A.parseTopic(e.topic, true, {
          channelId: e.id
        }) : h.intl.string(h.t["XJVlf/"])]
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), m(this, "_mouseDown", false), m(this, "_mouseUp", false), m(this, "handleOpenTopic", e => {
      let t = e.target;
      if ((0, a.vq)(t)) {
        if (A(t)) return;
        let e = t.parentNode;
        if ((0, a.vq)(e) && A(e)) return
      }(0, o.mMO)(async () => {
        let {
          default: e
        } = await n.e("8939").then(n.bind(n, 181094));
        return t => (0, r.jsx)(e, b({}, t, this.props))
      })
    }), m(this, "onMouseDown", () => {
      this._mouseDown = true
    }), m(this, "onMouseMove", () => {
      this._mouseDown && (this._mouseDown = false)
    }), m(this, "onMouseUp", e => {
      this._mouseDown && e.button !== p.hE4.SECONDARY && this.handleOpenTopic(e), this._mouseUp = true, this._mouseDown = false
    }), m(this, "handleContextMenu", e => {
      let {
        channel: t,
        guild: l
      } = this.props;
      (0, c.L3)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("17425"), n.e("14237")]).then(n.bind(n, 340968));
        return n => {
          var i, s;
          return (0, r.jsx)(e, (i = b({}, n), s = s = {
            channel: t,
            guild: l,
            includeTopic: true
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e))
          }), i))
        }
      })
    }), m(this, "handleClick", e => {
      if (this._mouseUp) {
        this._mouseUp = false;
        return
      }
      this.handleOpenTopic(e)
    })
  }
}
let O = y