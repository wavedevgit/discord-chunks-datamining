/** Chunk was on web.js **/
/** chunk id: 351248, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./539854.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk416038 = require("./416038.js"),
  Chunk794287 = require("./794287.js"),
  Chunk584783 = require("./584783.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let y = 8,
  O = {
    STEPS: 23,
    FRAME_DURATION: 17,
    FRAME_SIZE: 26
  },
  v = {
    SCALE_MIN: .7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: Chunk748780.Z.Easing.inOut(Chunk748780.Z.Easing.back()),
    EASING_OUT: Chunk748780.Z.Easing.quad
  },
  I = 200,
  T = 125;
class S extends Chunk73800.PureComponent {
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
    t.setValue(0), n.setValue(0), s.Z.parallel([s.Z.timing(t, {
      toValue: 1,
      duration: v.DURATION_IN,
      easing: v.EASING_IN
    }), s.Z.timing(n, {
      toValue: 1,
      duration: I
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
    let o = [];
    for (let e = 0; e < O.STEPS; e++) o.push(s.Z.timing(n, {
      toValue: -O.FRAME_SIZE * e,
      duration: O.FRAME_DURATION
    }));
    s.Z.sequence([s.Z.timing(t, {
      toValue: 0,
      duration: v.DURATION_OUT,
      easing: v.EASING_OUT
    }), s.Z.sequence(o), s.Z.timing(i, {
      toValue: 0,
      duration: T
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
          outputRange: [v.SCALE_MIN, v.SCALE_MAX]
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
    } = this.props, i = (0, Chunk780384.wj)(module), o = a()(Chunk416038.sprite, {
      [Chunk584783.crossWhite]: Chunk73800,
      [Chunk584783.crossGrey]: !Chunk73800
    });
    return (0, Chunk255367.jsxs)(Chunk748780.Z.div, {
      className: a()(Chunk416038.transition, require),
      style: this.getWidthStyle(),
      children: [(0, Chunk255367.jsx)("div", {
        className: a()(Chunk416038.spriteWrapper, Chunk794287.horizontal, Chunk794287.justifyCenter, Chunk794287.alignCenter),
        children: (0, Chunk255367.jsx)(Chunk748780.Z.div, {
          className: Chunk120356,
          style: this.getSpriteStyle()
        })
      }), (0, Chunk255367.jsx)(Chunk748780.Z.div, {
        style: this.getScaleStyle(),
        children: exports
      })]
    })
  }
  constructor(...e) {
    super(...e), b(this, "scaleAnimation", new s.Z.Value(0)), b(this, "spriteAnimation", new s.Z.Value(0)), b(this, "spriteOpacity", new s.Z.Value(0)), b(this, "widthAnimation", new s.Z.Value(0))
  }
}

function A(e, t) {
  return ((0, d.pxk)(d.EFr.SIZE_80) + 2 * y) * t > e ? d.EFr.SIZE_40 : d.EFr.SIZE_80
}

function N(e) {
  let {
    participants: t,
    onContextMenu: n,
    className: i,
    onClick: o,
    width: s,
    guildId: u
  } = e, g = (0, f.ZP)(), E = A(s, t.length), b = (0, l.e7)([_.Z], () => _.Z.isFocused()), y = t.map(e => {
    var t, i;
    if (e.type !== h.fO.USER) return null;
    let {
      user: a,
      voiceState: s,
      speaking: l,
      ringing: c
    } = e;
    return (0, r.jsx)(S, {
      className: m.participant,
      width: (0, d.pxk)(E),
      theme: g,
      children: (0, r.jsx)(p.Z, {
        userId: a.id,
        src: a.getAvatarURL(u, (0, d.pxk)(E), l && b),
        size: E,
        muted: null != (t = null == s ? true : s.isVoiceMuted()) && t,
        deafen: null != (i = null == s ? true : s.isVoiceDeafened()) && i,
        speaking: l,
        ringing: c,
        onClick: t => null == o ? true : o(e, t),
        onContextMenu: t => null == n ? true : n(e, t)
      }, e.id)
    }, a.id)
  });
  return (0, r.jsx)(c.W, {
    component: "div",
    className: a()(m.root, i),
    children: y
  })
}