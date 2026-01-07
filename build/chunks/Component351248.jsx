/** Chunk was on 40184 **/
/** chunk id: 351248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk159310 = require("./159310.js"),
  Chunk727829 = require("./727829.js"),
  Chunk982681 = require("./982681.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let v = {
  SCALE_MIN: .7,
  SCALE_MAX: 1,
  DURATION_IN: 300,
  DURATION_OUT: 170,
  EASING_IN: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.back()),
  EASING_OUT: Chunk748780.Z.Easing.quad
};
class x extends Chunk473749.PureComponent {
  componentDidMount() {
    this.componentDidAppear()
  }
  componentDidAppear() {
    let {
      scaleAnimation: e,
      widthAnimation: t
    } = this;
    e.setValue(1), t.setValue(1)
  }
  componentWillEnter(e) {
    let {
      scaleAnimation: t,
      widthAnimation: n
    } = this;
    t.setValue(0), n.setValue(0), o.Z.parallel([o.Z.timing(t, {
      toValue: 1,
      duration: v.DURATION_IN,
      easing: v.EASING_IN
    }), o.Z.timing(n, {
      toValue: 1,
      duration: 200
    })]).start(e)
  }
  componentWillLeave(e) {
    let {
      scaleAnimation: t,
      spriteAnimation: n,
      spriteOpacity: i,
      widthAnimation: r
    } = this;
    i.setValue(1), n.setValue(0);
    let l = [];
    for (let e = 0; e < 23; e++) l.push(o.Z.timing(n, {
      toValue: false * e,
      duration: 17
    }));
    o.Z.sequence([o.Z.timing(t, {
      toValue: 0,
      duration: v.DURATION_OUT,
      easing: v.EASING_OUT
    }), o.Z.sequence(l), o.Z.timing(r, {
      toValue: 0,
      duration: 125
    })]).start(e)
  }
  getScaleStyle() {
    let {
      scaleAnimation: e
    } = this;
    return o.Z.accelerate({
      transform: [{
        scale: e.interpolate({
          inputRange: [0, 1],
          outputRange: [v.SCALE_MIN, v.SCALE_MAX]
        })
      }],
      opacity: e
    })
  }
  getSpriteStyle() {
    let {
      spriteAnimation: e,
      spriteOpacity: t
    } = this;
    return {
      backgroundPosition: e,
      opacity: t
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
    } = this.props, r = (0, u.wj)(e), l = a()(g.sprite, {
      [C.crossWhite]: r,
      [C.crossGrey]: !r
    });
    return (0, i.jsxs)(o.Z.div, {
      role: "listitem",
      className: a()(g.transition, n),
      style: this.getWidthStyle(),
      children: [(0, i.jsx)("div", {
        className: a()(g.spriteWrapper, b.horizontal, b.justifyCenter, b.alignCenter),
        children: (0, i.jsx)(o.Z.div, {
          className: l,
          style: this.getSpriteStyle()
        })
      }), (0, i.jsx)(o.Z.div, {
        style: this.getScaleStyle(),
        children: t
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "scaleAnimation", new o.Z.Value(0)), y(this, "spriteAnimation", new o.Z.Value(0)), y(this, "spriteOpacity", new o.Z.Value(0)), y(this, "widthAnimation", new o.Z.Value(0))
  }
}

function O(e) {
  var t;
  let {
    participants: n,
    onContextMenu: r,
    className: l,
    onClick: o,
    width: u,
    guildId: b
  } = e, C = (0, p.ZP)(), y = (t = n.length, ((0, d.dcp)(d.EFr.SIZE_80) + 16) * t > u ? d.EFr.SIZE_40 : d.EFr.SIZE_80), v = (0, s.e7)([f.Z], () => f.Z.isFocused()), O = n.map(e => {
    var t, n;
    if (e.type !== m.fO.USER) return null;
    let {
      user: l,
      voiceState: a,
      speaking: s,
      voiceDb: c = false / 0,
      latched: u,
      ringing: p
    } = e;
    return (0, i.jsx)(x, {
      className: g.participant,
      width: (0, d.dcp)(y),
      theme: C,
      children: (0, i.jsx)(d.kL8, {
        "aria-label": l.username,
        onClick: t => null == o ? true : o(e, t),
        onContextMenu: t => null == r ? true : r(e, t),
        children: (0, i.jsx)(h.Z, {
          userId: l.id,
          src: l.getAvatarURL(b, (0, d.dcp)(y), s && v),
          size: y,
          muted: null != (t = null == a ? true : a.isVoiceMuted()) && t,
          deafen: null != (n = null == a ? true : a.isVoiceDeafened()) && n,
          speaking: s,
          voiceDb: c,
          latched: u,
          ringing: p
        }, e.id)
      })
    }, l.id)
  });
  return (0, i.jsx)(c.W, {
    component: "div",
    role: "list",
    className: a()(g.root, l),
    children: O
  })
}