/** Chunk was on 73726 **/
/** chunk id: 351248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk442837 = require("./442837.js"),
  Chunk215569 = require("./215569.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk451478 = require("./451478.js"),
  Chunk584511 = require("./584511.jsx"),
  Chunk354459 = require("./354459.js"),
  Chunk907894 = require("./907894.js"),
  Chunk149715 = require("./149715.js"),
  Chunk162130 = require("./162130.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = {
  SCALE_MIN: .7,
  SCALE_MAX: 1,
  DURATION_IN: 300,
  DURATION_OUT: 170,
  EASING_IN: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.back()),
  EASING_OUT: Chunk748780.Z.Easing.quad
};
class v extends Chunk647438.PureComponent {
  componentDidMount() {
    this.componentDidAppear()
  }
  componentDidAppear() {
    let {
      scaleAnimation: e,
      widthAnimation: t
    } = this;
    module.setValue(1), exports.setValue(1)
  }
  componentWillEnter(e) {
    let {
      scaleAnimation: t,
      widthAnimation: n
    } = this;
    t.setValue(0), n.setValue(0), o.Z.parallel([o.Z.timing(t, {
      toValue: 1,
      duration: C.DURATION_IN,
      easing: C.EASING_IN
    }), o.Z.timing(n, {
      toValue: 1,
      duration: 200
    })]).start(e)
  }
  componentWillLeave(e) {
    let {
      scaleAnimation: t,
      spriteAnimation: n,
      spriteOpacity: r,
      widthAnimation: i
    } = this;
    r.setValue(1), n.setValue(0);
    let l = [];
    for (let e = 0; e < 23; e++) l.push(o.Z.timing(n, {
      toValue: false * e,
      duration: 17
    }));
    o.Z.sequence([o.Z.timing(t, {
      toValue: 0,
      duration: C.DURATION_OUT,
      easing: C.EASING_OUT
    }), o.Z.sequence(l), o.Z.timing(i, {
      toValue: 0,
      duration: 125
    })]).start(e)
  }
  getScaleStyle() {
    let {
      scaleAnimation: e
    } = this;
    return Chunk748780.Z.accelerate({
      transform: [{
        scale: module.interpolate({
          inputRange: [0, 1],
          outputRange: [C.SCALE_MIN, C.SCALE_MAX]
        })
      }],
      opacity: module
    })
  }
  getSpriteStyle() {
    let {
      spriteAnimation: e,
      spriteOpacity: t
    } = this;
    return {
      backgroundPosition: module,
      opacity: exports
    }
  }
  getWidthStyle() {
    return {
      width: this.widthAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0px", "".concat(this.props.width, "px")]
      })
    }
  }
  render() {
    let {
      theme: e,
      children: t,
      className: n
    } = this.props, i = (0, Chunk780384.wj)(module), l = a()(Chunk907894.sprite, {
      [Chunk162130.crossWhite]: Chunk647438,
      [Chunk162130.crossGrey]: !Chunk647438
    });
    return (0, Chunk951288.jsxs)(Chunk748780.Z.div, {
      role: "listitem",
      className: a()(Chunk907894.transition, require),
      style: this.getWidthStyle(),
      children: [(0, Chunk951288.jsx)("div", {
        className: a()(Chunk907894.spriteWrapper, Chunk149715.horizontal, Chunk149715.justifyCenter, Chunk149715.alignCenter),
        children: (0, Chunk951288.jsx)(Chunk748780.Z.div, {
          className: Chunk120356,
          style: this.getSpriteStyle()
        })
      }), (0, Chunk951288.jsx)(Chunk748780.Z.div, {
        style: this.getScaleStyle(),
        children: exports
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "scaleAnimation", new o.Z.Value(0)), y(this, "spriteAnimation", new o.Z.Value(0)), y(this, "spriteOpacity", new o.Z.Value(0)), y(this, "widthAnimation", new o.Z.Value(0))
  }
}

function x(e) {
  var t;
  let {
    participants: n,
    onContextMenu: i,
    className: l,
    onClick: o,
    width: u,
    guildId: b
  } = e, _ = (0, p.ZP)(), y = (t = n.length, ((0, d.pxk)(d.EFr.SIZE_80) + 16) * t > u ? d.EFr.SIZE_40 : d.EFr.SIZE_80), C = (0, s.e7)([f.Z], () => f.Z.isFocused()), x = n.map(e => {
    var t, n;
    if (e.type !== m.fO.USER) return null;
    let {
      user: l,
      voiceState: a,
      speaking: s,
      ringing: c
    } = e;
    return (0, r.jsx)(v, {
      className: g.participant,
      width: (0, d.pxk)(y),
      theme: _,
      children: (0, r.jsx)(d.kL8, {
        "aria-label": l.username,
        onClick: t => null == o ? true : o(e, t),
        onContextMenu: t => null == i ? true : i(e, t),
        children: (0, r.jsx)(h.Z, {
          userId: l.id,
          src: l.getAvatarURL(b, (0, d.pxk)(y), s && C),
          size: y,
          muted: null != (t = null == a ? true : a.isVoiceMuted()) && t,
          deafen: null != (n = null == a ? true : a.isVoiceDeafened()) && n,
          speaking: s,
          ringing: c
        }, e.id)
      })
    }, l.id)
  });
  return (0, r.jsx)(c.W, {
    component: "div",
    role: "list",
    className: a()(g.root, l),
    children: x
  })
}