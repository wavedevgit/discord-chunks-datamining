/** Chunk was on 97116 **/
/** chunk id: 957115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bi: () => O,
  Ez: () => p,
  NX: () => g,
  Uv: () => f,
  Z1: () => E,
  hP: () => N,
  w9: () => h
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk531578 = require("./531578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk40207 = require("./40207.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function c(e, t) {
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
}
let O = (e, t) => {
  let n = a().shuffle(e),
    l = n.findIndex(e => e.value === t);
  if (l > false) {
    let e = n[l];
    n.splice(l, 1), n.push(e)
  }
  return n
};

function f(e) {
  let {
    feedbackType: t,
    location: n
  } = e;
  r.default.track(u.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
    feedback_type: s.nw[t],
    opted_out_until: s.uf
  }), i.A2.updateSetting(e => c(b({}, e), {
    [t]: c(b({}, e[t]), {
      optOutExpiryTime: s.uf
    })
  }))
}

function v(e) {
  return e.filter(e => {
    let {
      disabled: t
    } = e;
    return !t
  }).map(e => {
    var {
      disabled: t
    } = e;
    return function(e, t) {
      if (null == e) return {};
      var n, l, a = function(e, t) {
        if (null == e) return {};
        var n, l, a = {},
          i = Object.keys(e);
        for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
      }
      return a
    }(e, ["disabled"])
  })
}

function E() {
  return v([{
    variant: s.$7.SELF,
    value: s.T_.COULD_NOT_CONNECT,
    label: o.intl.string(d.default.gMHKDJ)
  }, {
    value: s.T_.HIGH_TTC,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.y06Ayn)
  }, {
    value: s.T_.HIGH_LATENCY,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.y5k8Jq)
  }, {
    value: s.T_.ROBOT_VOICE,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.f2914v)
  }, {
    value: s.T_.DESYNC,
    variant: s.$7.UNSPECIFIED,
    label: o.intl.string(d.default["zk+QL1"])
  }, {
    value: s.T_.CUTTING,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.K5vYQA)
  }])
}

function h(e) {
  let {
    isMobile: t
  } = e;
  return v([{
    value: s.b9.NO_AUDIO,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["GWypH+"])
  }, {
    value: s.b9.NO_AUDIO,
    variant: s.$7.OTHERS,
    label: o.intl.string(d.default.ftSvQ0)
  }, {
    value: s.b9.LOW_QUALITY_AUDIO,
    variant: s.$7.OTHERS,
    label: o.intl.string(d.default["1DnNRO"])
  }, {
    value: s.b9.ROBOT_VOICE,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.yGe0BL)
  }, {
    value: s.b9.ECHO,
    variant: s.$7.OTHERS,
    label: o.intl.string(d.default.Q5Dsaz)
  }, {
    value: s.b9.TOO_QUIET_OR_LOUD,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default["1o77I3"])
  }, {
    value: s.b9.CUTTING,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.RK9DUi)
  }, {
    value: s.b9.DELAYED,
    variant: s.$7.UNSPECIFIED,
    label: o.intl.string(d.default.RGRgmM)
  }, {
    value: s.b9.BACKGROUND_NOISE,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default["anHk1/"])
  }, {
    value: s.b9.UNABLE_TO_FIND_DEVICE,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["05VSjm"])
  }, {
    value: s.b9.COMPLAINTS,
    variant: s.$7.OTHERS,
    label: o.intl.string(d.default.kbbtwi)
  }, {
    value: s.b9.TROUBLE_WITH_SPEAKERPHONE,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["4qlGrO"]),
    disabled: !t
  }, {
    value: s.b9.NO_GAME_AUDIO,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["2IG95D"])
  }])
}

function g() {
  return v([{
    value: s.ct.NO_VIDEO,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["Bh+02d"])
  }, {
    value: s.ct.NO_VIDEO,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default["R+wqwU"])
  }, {
    value: s.ct.FREEZING_OR_HITCHING,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default["8I/GUL"])
  }, {
    value: s.ct.BLURRY_OR_PIXELATED,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.k7Idoz)
  }, {
    value: s.ct.UNABLE_TO_ENABLE_DEVICE,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.QbC6La)
  }, {
    value: s.ct.DESYNC,
    variant: s.$7.UNSPECIFIED,
    label: o.intl.string(d.default.vRDE5O)
  }])
}

function p(e) {
  let {
    isStreamer: t
  } = e;
  return v([{
    value: s.MJ.COULD_NOT_LOAD,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["w+kiDF"]),
    disabled: !t
  }, {
    value: s.MJ.BLACK_SCREEN,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.RRZZZb),
    disabled: !t
  }, {
    value: s.MJ.FREEZING_OR_HITCHING,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["3PKSkd"]),
    disabled: !t
  }, {
    value: s.MJ.LAG,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.iMxexK),
    disabled: !t
  }, {
    value: s.MJ.BLURRY_OR_PIXELATED,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["8ceyQy"]),
    disabled: !t
  }, {
    value: s.MJ.NO_AUDIO,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.HaZSC3),
    disabled: !t
  }, {
    value: s.MJ.BAD_AUDIO,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["zIC+8Y"]),
    disabled: !t
  }, {
    value: s.MJ.STOPPED_UNEXPECTEDLY,
    variant: s.$7.SELF,
    label: o.intl.string(d.default["/nlKuG"]),
    disabled: !t
  }, {
    value: s.MJ.DESYNC,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.JS6akP),
    disabled: !t
  }, {
    value: s.MJ.NO_GAME_AUDIO,
    variant: s.$7.SELF,
    label: o.intl.string(d.default.TaIrh5),
    disabled: !t
  }, {
    value: s.MJ.COULD_NOT_LOAD,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.jU9Zs8),
    disabled: t
  }, {
    value: s.MJ.BLACK_SCREEN,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.aml28x),
    disabled: t
  }, {
    value: s.MJ.FREEZING_OR_HITCHING,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.V3EeCH),
    disabled: t
  }, {
    value: s.MJ.LAG,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.hi1Y39),
    disabled: t
  }, {
    value: s.MJ.BLURRY_OR_PIXELATED,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.qdBn3L),
    disabled: t
  }, {
    value: s.MJ.NO_AUDIO,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.DOOlop),
    disabled: t
  }, {
    value: s.MJ.BAD_AUDIO,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.k7bdGE),
    disabled: t
  }, {
    value: s.MJ.STOPPED_UNEXPECTEDLY,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.jPD998),
    disabled: t
  }, {
    value: s.MJ.DESYNC,
    variant: s.$7.SOMEONE,
    label: o.intl.string(d.default.JfAvQp),
    disabled: t
  }])
}

function N() {
  return v([{
    value: s.s_.TOXIC_OR_INAPPROPRIATE,
    variant: s.$7.OTHERS,
    label: o.intl.string(d.default.PLBRzF)
  }])
}