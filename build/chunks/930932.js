/** Chunk was on 66536 **/
/** chunk id: 930932, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A_: () => c,
  Op: () => g,
  TK: () => h,
  de: () => _,
  ed: () => v,
  n3: () => E,
  wq: () => p
}), require("./321073.js");
var Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk253932 = require("./253932.js"),
  Chunk954571 = require("./954571.js"),
  Chunk670455 = require("./670455.js"),
  Chunk652215 = require("./652215.js"),
  Chunk716829 = require("./716829.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function o(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}
let v = (e, t) => {
  let l = a().shuffle(e),
    n = l.findIndex(e => e.value === t);
  if (n > false) {
    let e = l[n];
    l.splice(n, 1), l.push(e)
  }
  return l
};

function E(e) {
  let {
    feedbackType: t,
    location: l
  } = e;
  r.default.track(s.HAw.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
    feedback_type: u.MW[t],
    opted_out_until: u.fs
  }), i.Yt.updateSetting(e => o(O({}, e), {
    [t]: o(O({}, e[t]), {
      optOutExpiryTime: u.fs
    })
  }))
}

function f(e) {
  return e.filter(e => {
    let {
      disabled: t
    } = e;
    return !t
  }).map(e => {
    let {
      disabled: t
    } = e;
    return function(e, t) {
      if (null == e) return {};
      var l, n, a, i = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (a = 0, l = Reflect.ownKeys(e); a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }
      if (i = function(e, t) {
          if (null == e) return {};
          var l, n, a = {},
            i = Object.getOwnPropertyNames(e);
          for (n = 0; n < i.length; n++) l = i[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (a[l] = e[l]);
          return a
        }(e, t), Object.getOwnPropertySymbols)
        for (a = 0, l = Object.getOwnPropertySymbols(e); a < l.length; a++) n = l[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }(e, ["disabled"])
  })
}

function c() {
  return f([{
    variant: u.UV.SELF,
    value: u.bO.COULD_NOT_CONNECT,
    label: b.intl.string(d.default.gMHKDJ)
  }, {
    value: u.bO.HIGH_TTC,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.y06Ayn)
  }, {
    value: u.bO.HIGH_LATENCY,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.y5k8Jq)
  }, {
    value: u.bO.ROBOT_VOICE,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.f2914v)
  }, {
    value: u.bO.DESYNC,
    variant: u.UV.UNSPECIFIED,
    label: b.intl.string(d.default["zk+QL1"])
  }, {
    value: u.bO.CUTTING,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.K5vYQA)
  }])
}

function g(e) {
  let {
    isMobile: t
  } = e;
  return f([{
    value: u.X.NO_AUDIO,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["GWypH+"])
  }, {
    value: u.X.NO_AUDIO,
    variant: u.UV.OTHERS,
    label: b.intl.string(d.default.ftSvQ0)
  }, {
    value: u.X.LOW_QUALITY_AUDIO,
    variant: u.UV.OTHERS,
    label: b.intl.string(d.default["1DnNRO"])
  }, {
    value: u.X.ROBOT_VOICE,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.yGe0BL)
  }, {
    value: u.X.ECHO,
    variant: u.UV.OTHERS,
    label: b.intl.string(d.default.Q5Dsaz)
  }, {
    value: u.X.TOO_QUIET_OR_LOUD,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default["1o77I3"])
  }, {
    value: u.X.CUTTING,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.RK9DUi)
  }, {
    value: u.X.DELAYED,
    variant: u.UV.UNSPECIFIED,
    label: b.intl.string(d.default.RGRgmM)
  }, {
    value: u.X.BACKGROUND_NOISE,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default["anHk1/"])
  }, {
    value: u.X.UNABLE_TO_FIND_DEVICE,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["05VSjm"])
  }, {
    value: u.X.COMPLAINTS,
    variant: u.UV.OTHERS,
    label: b.intl.string(d.default.kbbtwi)
  }, {
    value: u.X.TROUBLE_WITH_SPEAKERPHONE,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["4qlGrO"]),
    disabled: !t
  }, {
    value: u.X.NO_GAME_AUDIO,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["2IG95D"])
  }])
}

function _() {
  return f([{
    value: u.AO.NO_VIDEO,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["Bh+02d"])
  }, {
    value: u.AO.NO_VIDEO,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default["R+wqwU"])
  }, {
    value: u.AO.FREEZING_OR_HITCHING,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default["8I/GUL"])
  }, {
    value: u.AO.BLURRY_OR_PIXELATED,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.k7Idoz)
  }, {
    value: u.AO.UNABLE_TO_ENABLE_DEVICE,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.QbC6La)
  }, {
    value: u.AO.DESYNC,
    variant: u.UV.UNSPECIFIED,
    label: b.intl.string(d.default.vRDE5O)
  }])
}

function p(e) {
  let {
    isStreamer: t
  } = e;
  return f([{
    value: u.j6.COULD_NOT_LOAD,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["w+kiDF"]),
    disabled: !t
  }, {
    value: u.j6.BLACK_SCREEN,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.RRZZZb),
    disabled: !t
  }, {
    value: u.j6.FREEZING_OR_HITCHING,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["3PKSkd"]),
    disabled: !t
  }, {
    value: u.j6.LAG,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.iMxexK),
    disabled: !t
  }, {
    value: u.j6.BLURRY_OR_PIXELATED,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["8ceyQy"]),
    disabled: !t
  }, {
    value: u.j6.NO_AUDIO,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.HaZSC3),
    disabled: !t
  }, {
    value: u.j6.BAD_AUDIO,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["zIC+8Y"]),
    disabled: !t
  }, {
    value: u.j6.STOPPED_UNEXPECTEDLY,
    variant: u.UV.SELF,
    label: b.intl.string(d.default["/nlKuG"]),
    disabled: !t
  }, {
    value: u.j6.DESYNC,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.JS6akP),
    disabled: !t
  }, {
    value: u.j6.NO_GAME_AUDIO,
    variant: u.UV.SELF,
    label: b.intl.string(d.default.TaIrh5),
    disabled: !t
  }, {
    value: u.j6.COULD_NOT_LOAD,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.jU9Zs8),
    disabled: t
  }, {
    value: u.j6.BLACK_SCREEN,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.aml28x),
    disabled: t
  }, {
    value: u.j6.FREEZING_OR_HITCHING,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.V3EeCH),
    disabled: t
  }, {
    value: u.j6.LAG,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.hi1Y39),
    disabled: t
  }, {
    value: u.j6.BLURRY_OR_PIXELATED,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.qdBn3L),
    disabled: t
  }, {
    value: u.j6.NO_AUDIO,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.DOOlop),
    disabled: t
  }, {
    value: u.j6.BAD_AUDIO,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.k7bdGE),
    disabled: t
  }, {
    value: u.j6.STOPPED_UNEXPECTEDLY,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.jPD998),
    disabled: t
  }, {
    value: u.j6.DESYNC,
    variant: u.UV.SOMEONE,
    label: b.intl.string(d.default.JfAvQp),
    disabled: t
  }])
}

function h() {
  return f([{
    value: u.CW.TOXIC_OR_INAPPROPRIATE,
    variant: u.UV.OTHERS,
    label: b.intl.string(d.default.PLBRzF)
  }])
}