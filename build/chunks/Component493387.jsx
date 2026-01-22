/** Chunk was on 97492 **/
/** chunk id: 493387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73939 = require("./73939.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk531685 = require("./531685.js"),
  Chunk85448 = require("./85448.jsx"),
  Chunk806931 = require("./806931.js"),
  Chunk254187 = require("./254187.js"),
  Chunk20976 = require("./20976.js"),
  Chunk162253 = require("./162253.js");

function y(e, t, n) {
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
  EASING_IN: Chunk615300.A.Easing.inOut(Chunk615300.A.Easing.back()),
  EASING_OUT: Chunk615300.A.Easing.quad
};
class j extends Chunk64700.PureComponent {
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
    t.setValue(0), n.setValue(0), s.A.parallel([s.A.timing(t, {
      toValue: 1,
      duration: O.DURATION_IN,
      easing: O.EASING_IN
    }), s.A.timing(n, {
      toValue: 1,
      duration: 200
    })]).start(e)
  }
  componentWillLeave(e) {
    let {
      scaleAnimation: t,
      spriteAnimation: n,
      spriteOpacity: r,
      widthAnimation: l
    } = this;
    r.setValue(1), n.setValue(0);
    let i = [];
    for (let e = 0; e < 23; e++) i.push(s.A.timing(n, {
      toValue: false * e,
      duration: 17
    }));
    s.A.sequence([s.A.timing(t, {
      toValue: 0,
      duration: O.DURATION_OUT,
      easing: O.EASING_OUT
    }), s.A.sequence(i), s.A.timing(l, {
      toValue: 0,
      duration: 125
    })]).start(e)
  }
  getScaleStyle() {
    let {
      scaleAnimation: e
    } = this;
    return s.A.accelerate({
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
    } = this.props, l = (0, u.Mw)(e), i = a()(g._y, {
      [A.cp]: l,
      [A.QB]: !l
    });
    return (0, r.jsxs)(s.A.div, {
      role: "listitem",
      className: a()(g.kY, n),
      style: this.getWidthStyle(),
      children: [(0, r.jsx)("div", {
        className: a()(g.XY, m.xM, m.wq, m.Hu),
        children: (0, r.jsx)(s.A.div, {
          className: i,
          style: this.getSpriteStyle()
        })
      }), (0, r.jsx)(s.A.div, {
        style: this.getScaleStyle(),
        children: t
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "scaleAnimation", new s.A.Value(0)), y(this, "spriteAnimation", new s.A.Value(0)), y(this, "spriteOpacity", new s.A.Value(0)), y(this, "widthAnimation", new s.A.Value(0))
  }
}

function v(e) {
  var t;
  let {
    participants: n,
    onContextMenu: l,
    className: i,
    onClick: s,
    width: u,
    guildId: m
  } = e, A = (0, f.Ay)(), y = (t = n.length, ((0, d.FT9)(d._3J.SIZE_80) + 16) * t > u ? d._3J.SIZE_40 : d._3J.SIZE_80), O = (0, o.bG)([p.A], () => p.A.isFocused()), v = n.map(e => {
    var t, n;
    if (e.type !== b.lp.USER) return null;
    let {
      user: i,
      voiceState: a,
      speaking: o,
      voiceDb: c = false / 0,
      latched: u,
      ringing: f
    } = e;
    return (0, r.jsx)(j, {
      className: g.Wp,
      width: (0, d.FT9)(y),
      theme: A,
      children: (0, r.jsx)(d.sqX, {
        "aria-label": i.username,
        onClick: t => null == s ? true : s(e, t),
        onContextMenu: t => null == l ? true : l(e, t),
        children: (0, r.jsx)(h.A, {
          userId: i.id,
          src: i.getAvatarURL(m, (0, d.FT9)(y), o && O),
          size: y,
          muted: null != (t = null == a ? true : a.isVoiceMuted()) && t,
          deafen: null != (n = null == a ? true : a.isVoiceDeafened()) && n,
          speaking: o,
          voiceDb: c,
          latched: u,
          ringing: f
        }, e.id)
      })
    }, i.id)
  });
  return (0, r.jsx)(c.F, {
    component: "div",
    role: "list",
    className: a()(g.zr, i),
    children: v
  })
}