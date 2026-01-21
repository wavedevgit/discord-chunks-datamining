/** Chunk was on 82124 **/
/** chunk id: 351248, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let O = {
  SCALE_MIN: .7,
  SCALE_MAX: 1,
  DURATION_IN: 300,
  DURATION_OUT: 170,
  EASING_IN: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.back()),
  EASING_OUT: Chunk748780.Z.Easing.quad
};
class j extends Chunk473749.PureComponent {
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
      duration: O.DURATION_IN,
      easing: O.EASING_IN
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
      duration: O.DURATION_OUT,
      easing: O.EASING_OUT
    }), o.Z.sequence(l), o.Z.timing(i, {
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
          outputRange: [O.SCALE_MIN, O.SCALE_MAX]
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
    } = this.props, i = (0, u.wj)(e), l = a()(m.sprite, {
      [y.crossWhite]: i,
      [y.crossGrey]: !i
    });
    return (0, r.jsxs)(o.Z.div, {
      role: "listitem",
      className: a()(m.transition, n),
      style: this.getWidthStyle(),
      children: [(0, r.jsx)("div", {
        className: a()(m.spriteWrapper, b.horizontal, b.justifyCenter, b.alignCenter),
        children: (0, r.jsx)(o.Z.div, {
          className: l,
          style: this.getSpriteStyle()
        })
      }), (0, r.jsx)(o.Z.div, {
        style: this.getScaleStyle(),
        children: t
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "scaleAnimation", new o.Z.Value(0)), v(this, "spriteAnimation", new o.Z.Value(0)), v(this, "spriteOpacity", new o.Z.Value(0)), v(this, "widthAnimation", new o.Z.Value(0))
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
  } = e, y = (0, p.ZP)(), v = (t = n.length, ((0, d.dcp)(d.EFr.SIZE_80) + 16) * t > u ? d.EFr.SIZE_40 : d.EFr.SIZE_80), O = (0, s.e7)([f.Z], () => f.Z.isFocused()), x = n.map(e => {
    var t, n;
    if (e.type !== g.fO.USER) return null;
    let {
      user: l,
      voiceState: a,
      speaking: s,
      voiceDb: c = false / 0,
      latched: u,
      ringing: p
    } = e;
    return (0, r.jsx)(j, {
      className: m.participant,
      width: (0, d.dcp)(v),
      theme: y,
      children: (0, r.jsx)(d.kL8, {
        "aria-label": l.username,
        onClick: t => null == o ? true : o(e, t),
        onContextMenu: t => null == i ? true : i(e, t),
        children: (0, r.jsx)(h.Z, {
          userId: l.id,
          src: l.getAvatarURL(b, (0, d.dcp)(v), s && O),
          size: v,
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
  return (0, r.jsx)(c.W, {
    component: "div",
    role: "list",
    className: a()(m.root, l),
    children: x
  })
}