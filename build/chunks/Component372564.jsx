/** Chunk was on 85496 **/
/** chunk id: 372564, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk454585 = require("./454585.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk413140 = require("./413140.js"),
  Chunk430864 = require("./430864.js");

function g(e, t, n) {
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
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function v(e) {
  return e.matches("a") || "highlight" === e.className || e.className.includes("mention")
}
class j extends Chunk647438.Component {
  render() {
    let {
      channel: e
    } = this.props;
    if (module.isMultiUserDM()) return null;
    let t = null != module.topic && module.topic.length > 0;
    return null != module.linkedLobby || exports ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk984370.Z.Divider, {}), (0, Chunk951288.jsxs)("div", {
        className: a()(Chunk413140.topic, Chunk413140.expandable, Chunk430864.markup),
        onMouseDown: this.onMouseDown,
        onMouseMove: this.onMouseMove,
        onMouseUp: this.onMouseUp,
        onContextMenu: this.handleContextMenu,
        onClick: this.handleClick,
        children: [(0, Chunk951288.jsx)(Chunk481060.P3F, {
          onClick: this.handleClick,
          "aria-label": Chunk388032.intl.string(Chunk388032.t.mKwsSp),
          className: Chunk413140.topicClickTarget
        }), null == module.linkedLobby || exports ? Chunk454585.Z.parseTopic(module.topic, true, {
          channelId: module.id
        }) : Chunk388032.intl.string(Chunk388032.t["XJVlf/"])]
      })]
    }) : null
  }
  constructor(...e) {
    super(...e), g(this, "_mouseDown", false), g(this, "_mouseUp", false), g(this, "handleOpenTopic", e => {
      let t = e.target;
      if ((0, s.kK)(t)) {
        if (v(t)) return;
        let e = t.parentNode;
        if ((0, s.kK)(e) && v(e)) return
      }(0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("65631").then(n.bind(n, 10722));
        return t => (0, l.jsx)(e, b({}, t, this.props))
      })
    }), g(this, "onMouseDown", () => {
      this._mouseDown = true
    }), g(this, "onMouseMove", () => {
      this._mouseDown && (this._mouseDown = false)
    }), g(this, "onMouseUp", e => {
      this._mouseDown && e.button !== p.AeJ.SECONDARY && this.handleOpenTopic(e), this._mouseUp = true, this._mouseDown = false
    }), g(this, "handleContextMenu", e => {
      let {
        channel: t,
        guild: i
      } = this.props;
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([n.e("57804"), n.e("49049"), n.e("89250"), n.e("62856"), n.e("66201"), n.e("91315"), n.e("30474"), n.e("91053"), n.e("24783"), n.e("27040")]).then(n.bind(n, 439635));
        return n => (0, l.jsx)(e, function(e, t) {
          return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
          }), e
        }(b({}, n), {
          channel: t,
          guild: i,
          includeTopic: true
        }))
      })
    }), g(this, "handleClick", e => {
      if (this._mouseUp) {
        this._mouseUp = false;
        return
      }
      this.handleOpenTopic(e)
    })
  }
}
let O = j