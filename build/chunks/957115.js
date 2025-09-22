/** Chunk was on 47672 **/
/** chunk id: 957115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bi: () => f,
  Ez: () => _,
  NX: () => m,
  Uv: () => N,
  Z1: () => S,
  hP: () => p,
  w9: () => g
}), require("./539854.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk536442 = require("./536442.js"),
  Chunk695346 = require("./695346.js"),
  Chunk626135 = require("./626135.js"),
  Chunk178635 = require("./178635.js"),
  Chunk250454 = require("./250454.js"),
  Chunk531578 = require("./531578.js"),
  Chunk981631 = require("./981631.js"),
  Chunk805388 = require("./805388.js"),
  Chunk388032 = require("./388032.jsx");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = (e, t) => {
  let n = l().shuffle(e),
    a = n.findIndex(e => e.value === t);
  if (a > false) {
    let e = n[a];
    n.splice(a, 1), n.push(e)
  }
  return n
};

function N(e) {
  let {
    feedbackType: t,
    location: n
  } = e, {
    persistToBackend: a
  } = (0, u.O)({
    location: n
  }), l = d.R[t].hotspot;
  a ? (s.default.track(c.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
    feedback_type: b.nw[t],
    opted_out_until: b.uf
  }), r.A2.updateSetting(e => v(O({}, e), {
    [t]: v(O({}, e[t]), {
      optOutExpiryTime: b.uf
    })
  }))) : (0, i.Kw)(l)
}

function h(e) {
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
      var n, a, l = function(e, t) {
        if (null == e) return {};
        var n, a, l = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (l[n] = e[n]);
        return l
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
      }
      return l
    }(e, ["disabled"])
  })
}

function S() {
  return h([{
    variant: Chunk531578.$7.SELF,
    value: Chunk531578.T_.COULD_NOT_CONNECT,
    label: Chunk388032.intl.string(Chunk805388.default.gMHKDA)
  }, {
    value: Chunk531578.T_.HIGH_TTC,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk805388.default.y06Ays)
  }, {
    value: Chunk531578.T_.HIGH_LATENCY,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk805388.default.y5k8Ji)
  }, {
    value: Chunk531578.T_.ROBOT_VOICE,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk805388.default.f2914u)
  }, {
    value: Chunk531578.T_.DESYNC,
    variant: Chunk531578.$7.UNSPECIFIED,
    label: Chunk388032.intl.string(Chunk805388.default["zk+QLy"])
  }, {
    value: Chunk531578.T_.CUTTING,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk805388.default.K5vYQE)
  }])
}

function g(e) {
  let {
    isMobile: t
  } = e;
  return h([{
    value: b.b9.NO_AUDIO,
    variant: b.$7.SELF,
    label: E.intl.string(o.default.GWypHx)
  }, {
    value: b.b9.NO_AUDIO,
    variant: b.$7.OTHERS,
    label: E.intl.string(o.default.ftSvQ0)
  }, {
    value: b.b9.LOW_QUALITY_AUDIO,
    variant: b.$7.OTHERS,
    label: E.intl.string(o.default["1DnNRE"])
  }, {
    value: b.b9.ROBOT_VOICE,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.yGe0BA)
  }, {
    value: b.b9.ECHO,
    variant: b.$7.OTHERS,
    label: E.intl.string(o.default.Q5Dsa2)
  }, {
    value: b.b9.TOO_QUIET_OR_LOUD,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default["1o77Iy"])
  }, {
    value: b.b9.CUTTING,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.RK9DUl)
  }, {
    value: b.b9.DELAYED,
    variant: b.$7.UNSPECIFIED,
    label: E.intl.string(o.default.RGRgmJ)
  }, {
    value: b.b9.BACKGROUND_NOISE,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.anHk19)
  }, {
    value: b.b9.UNABLE_TO_FIND_DEVICE,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["05VSjo"])
  }, {
    value: b.b9.COMPLAINTS,
    variant: b.$7.OTHERS,
    label: E.intl.string(o.default.kbbtws)
  }, {
    value: b.b9.TROUBLE_WITH_SPEAKERPHONE,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["4qlGrK"]),
    disabled: !t
  }, {
    value: b.b9.NO_GAME_AUDIO,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["2IG95O"])
  }])
}

function m() {
  return h([{
    value: Chunk531578.ct.NO_VIDEO,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk805388.default["Bh+02d"])
  }, {
    value: Chunk531578.ct.NO_VIDEO,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk805388.default["R+wqwc"])
  }, {
    value: Chunk531578.ct.FREEZING_OR_HITCHING,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk805388.default["8I/GUF"])
  }, {
    value: Chunk531578.ct.BLURRY_OR_PIXELATED,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk805388.default.k7Ido6)
  }, {
    value: Chunk531578.ct.UNABLE_TO_ENABLE_DEVICE,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk805388.default.QbC6LS)
  }, {
    value: Chunk531578.ct.DESYNC,
    variant: Chunk531578.$7.UNSPECIFIED,
    label: Chunk388032.intl.string(Chunk805388.default.vRDE5O)
  }])
}

function _(e) {
  let {
    isStreamer: t
  } = e;
  return h([{
    value: b.MJ.COULD_NOT_LOAD,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["w+kiDA"]),
    disabled: !t
  }, {
    value: b.MJ.BLACK_SCREEN,
    variant: b.$7.SELF,
    label: E.intl.string(o.default.RRZZZW),
    disabled: !t
  }, {
    value: b.MJ.FREEZING_OR_HITCHING,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["3PKSkZ"]),
    disabled: !t
  }, {
    value: b.MJ.LAG,
    variant: b.$7.SELF,
    label: E.intl.string(o.default.iMxexM),
    disabled: !t
  }, {
    value: b.MJ.BLURRY_OR_PIXELATED,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["8ceyQ0"]),
    disabled: !t
  }, {
    value: b.MJ.NO_AUDIO,
    variant: b.$7.SELF,
    label: E.intl.string(o.default.HaZSCw),
    disabled: !t
  }, {
    value: b.MJ.BAD_AUDIO,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["zIC+8f"]),
    disabled: !t
  }, {
    value: b.MJ.STOPPED_UNEXPECTEDLY,
    variant: b.$7.SELF,
    label: E.intl.string(o.default["/nlKuL"]),
    disabled: !t
  }, {
    value: b.MJ.DESYNC,
    variant: b.$7.SELF,
    label: E.intl.string(o.default.JS6akJ),
    disabled: !t
  }, {
    value: b.MJ.NO_GAME_AUDIO,
    variant: b.$7.SELF,
    label: E.intl.string(o.default.TaIrh4),
    disabled: !t
  }, {
    value: b.MJ.COULD_NOT_LOAD,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.jU9Zs7),
    disabled: t
  }, {
    value: b.MJ.BLACK_SCREEN,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default["aml28/"]),
    disabled: t
  }, {
    value: b.MJ.FREEZING_OR_HITCHING,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.V3EeCA),
    disabled: t
  }, {
    value: b.MJ.LAG,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.hi1Y39),
    disabled: t
  }, {
    value: b.MJ.BLURRY_OR_PIXELATED,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.qdBn3N),
    disabled: t
  }, {
    value: b.MJ.NO_AUDIO,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.DOOloq),
    disabled: t
  }, {
    value: b.MJ.BAD_AUDIO,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.k7bdGB),
    disabled: t
  }, {
    value: b.MJ.STOPPED_UNEXPECTEDLY,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default["jPD99/"]),
    disabled: t
  }, {
    value: b.MJ.DESYNC,
    variant: b.$7.SOMEONE,
    label: E.intl.string(o.default.JfAvQk),
    disabled: t
  }])
}

function p() {
  return h([{
    value: Chunk531578.s_.TOXIC_OR_INAPPROPRIATE,
    variant: Chunk531578.$7.OTHERS,
    label: Chunk388032.intl.string(Chunk805388.default.PLBRzM)
  }])
}