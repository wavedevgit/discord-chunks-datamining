/** Chunk was on 77870 **/
/** chunk id: 493387, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let _ = {
  SCALE_MIN: .7,
  SCALE_MAX: 1,
  DURATION_IN: 300,
  DURATION_OUT: 170,
  EASING_IN: Chunk615300.A.Easing.inOut(Chunk615300.A.Easing.back()),
  EASING_OUT: Chunk615300.A.Easing.quad
};
class O extends Chunk64700.PureComponent {
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
    t.setValue(0), n.setValue(0), a.A.parallel([a.A.timing(t, {
      toValue: 1,
      duration: _.DURATION_IN,
      easing: _.EASING_IN
    }), a.A.timing(n, {
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
    for (let e = 0; e < 23; e++) i.push(a.A.timing(n, {
      toValue: false * e,
      duration: 17
    }));
    a.A.sequence([a.A.timing(t, {
      toValue: 0,
      duration: _.DURATION_OUT,
      easing: _.EASING_OUT
    }), a.A.sequence(i), a.A.timing(l, {
      toValue: 0,
      duration: 125
    })]).start(e)
  }
  getScaleStyle() {
    let {
      scaleAnimation: e
    } = this;
    return a.A.accelerate({
      transform: [{
        scale: e.interpolate({
          inputRange: [0, 1],
          outputRange: [_.SCALE_MIN, _.SCALE_MAX]
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
    } = this.props, l = (0, u.Mw)(e), i = s()(m._y, {
      [A.cp]: l,
      [A.QB]: !l
    });
    return (0, r.jsxs)(a.A.div, {
      role: "listitem",
      className: s()(m.kY, n),
      style: this.getWidthStyle(),
      children: [(0, r.jsx)("div", {
        className: s()(m.XY, b.xM, b.wq, b.Hu),
        children: (0, r.jsx)(a.A.div, {
          className: i,
          style: this.getSpriteStyle()
        })
      }), (0, r.jsx)(a.A.div, {
        style: this.getScaleStyle(),
        children: t
      })]
    })
  }
  constructor(...e) {
    super(...e), y(this, "scaleAnimation", new a.A.Value(0)), y(this, "spriteAnimation", new a.A.Value(0)), y(this, "spriteOpacity", new a.A.Value(0)), y(this, "widthAnimation", new a.A.Value(0))
  }
}

function j(e) {
  var t;
  let {
    participants: n,
    onContextMenu: l,
    className: i,
    onClick: a,
    width: u,
    guildId: b
  } = e, A = (0, p.Ay)(), y = (t = n.length, ((0, d.FT9)(d._3J.SIZE_80) + 16) * t > u ? d._3J.SIZE_40 : d._3J.SIZE_80), _ = (0, o.bG)([h.A], () => h.A.isFocused()), j = n.map(e => {
    var t, n;
    if (e.type !== g.lp.USER) return null;
    let {
      user: i,
      voiceState: s,
      speaking: o,
      latched: c,
      ringing: u
    } = e;
    return (0, r.jsx)(O, {
      className: m.Wp,
      width: (0, d.FT9)(y),
      theme: A,
      children: (0, r.jsx)(d.sqX, {
        "aria-label": i.username,
        onClick: t => null == a ? true : a(e, t),
        onContextMenu: t => null == l ? true : l(e, t),
        children: (0, r.jsx)(f.A, {
          userId: i.id,
          src: i.getAvatarURL(b, (0, d.FT9)(y), o && _),
          size: y,
          muted: null != (t = null == s ? true : s.isVoiceMuted()) && t,
          deafen: null != (n = null == s ? true : s.isVoiceDeafened()) && n,
          speaking: o,
          latched: c,
          ringing: u
        }, e.id)
      })
    }, i.id)
  });
  return (0, r.jsx)(c.F, {
    component: "div",
    role: "list",
    className: s()(m.zr, i),
    children: j
  })
}