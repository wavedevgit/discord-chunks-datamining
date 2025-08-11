/** Chunk was on 60137 **/
/** chunk id: 957115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Bi: () => f,
  Ez: () => p,
  NX: () => m,
  Uv: () => h,
  Z1: () => g,
  hP: () => _,
  w9: () => S
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
  Chunk760359 = require("./760359.js"),
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

function h(e) {
  let {
    feedbackType: t,
    location: n
  } = e, {
    persistToBackend: a
  } = (0, u.O)({
    location: n
  }), l = d.R[t].hotspot;
  a ? (s.default.track(o.rMx.USER_SETTINGS_IN_APP_FEEDBACK_OPTED_OUT, {
    feedback_type: c.nw[t],
    opted_out_until: c.uf
  }), r.A2.updateSetting(e => v(O({}, e), {
    [t]: v(O({}, e[t]), {
      optOutExpiryTime: c.uf
    })
  }))) : (0, i.Kw)(l)
}

function N(e) {
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

function g() {
  return N([{
    variant: Chunk531578.$7.SELF,
    value: Chunk531578.T_.COULD_NOT_CONNECT,
    label: Chunk388032.intl.string(Chunk760359.default.gMHKDA)
  }, {
    value: Chunk531578.T_.HIGH_TTC,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk760359.default.y06Ays)
  }, {
    value: Chunk531578.T_.HIGH_LATENCY,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk760359.default.y5k8Ji)
  }, {
    value: Chunk531578.T_.ROBOT_VOICE,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk760359.default.f2914u)
  }, {
    value: Chunk531578.T_.DESYNC,
    variant: Chunk531578.$7.UNSPECIFIED,
    label: Chunk388032.intl.string(Chunk760359.default["zk+QLy"])
  }, {
    value: Chunk531578.T_.CUTTING,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk760359.default.K5vYQE)
  }])
}

function S(e) {
  let {
    isMobile: t
  } = e;
  return N([{
    value: c.b9.NO_AUDIO,
    variant: c.$7.SELF,
    label: E.intl.string(b.default.GWypHx)
  }, {
    value: c.b9.NO_AUDIO,
    variant: c.$7.OTHERS,
    label: E.intl.string(b.default.ftSvQ0)
  }, {
    value: c.b9.LOW_QUALITY_AUDIO,
    variant: c.$7.OTHERS,
    label: E.intl.string(b.default["1DnNRE"])
  }, {
    value: c.b9.ROBOT_VOICE,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.yGe0BA)
  }, {
    value: c.b9.ECHO,
    variant: c.$7.OTHERS,
    label: E.intl.string(b.default.Q5Dsa2)
  }, {
    value: c.b9.TOO_QUIET_OR_LOUD,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default["1o77Iy"])
  }, {
    value: c.b9.CUTTING,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.RK9DUl)
  }, {
    value: c.b9.DELAYED,
    variant: c.$7.UNSPECIFIED,
    label: E.intl.string(b.default.RGRgmJ)
  }, {
    value: c.b9.BACKGROUND_NOISE,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.anHk19)
  }, {
    value: c.b9.UNABLE_TO_FIND_DEVICE,
    variant: c.$7.SELF,
    label: E.intl.string(b.default["05VSjo"])
  }, {
    value: c.b9.COMPLAINTS,
    variant: c.$7.OTHERS,
    label: E.intl.string(b.default.kbbtws)
  }, {
    value: c.b9.TROUBLE_WITH_SPEAKERPHONE,
    variant: c.$7.SELF,
    label: E.intl.string(b.default["4qlGrK"]),
    disabled: !t
  }])
}

function m() {
  return N([{
    value: Chunk531578.ct.NO_VIDEO,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk760359.default["Bh+02d"])
  }, {
    value: Chunk531578.ct.NO_VIDEO,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk760359.default["R+wqwc"])
  }, {
    value: Chunk531578.ct.FREEZING_OR_HITCHING,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk760359.default["8I/GUF"])
  }, {
    value: Chunk531578.ct.BLURRY_OR_PIXELATED,
    variant: Chunk531578.$7.SOMEONE,
    label: Chunk388032.intl.string(Chunk760359.default.k7Ido6)
  }, {
    value: Chunk531578.ct.UNABLE_TO_ENABLE_DEVICE,
    variant: Chunk531578.$7.SELF,
    label: Chunk388032.intl.string(Chunk760359.default.QbC6LS)
  }, {
    value: Chunk531578.ct.DESYNC,
    variant: Chunk531578.$7.UNSPECIFIED,
    label: Chunk388032.intl.string(Chunk760359.default.vRDE5O)
  }])
}

function p(e) {
  let {
    isStreamer: t
  } = e;
  return N([{
    value: c.MJ.COULD_NOT_LOAD,
    variant: c.$7.SELF,
    label: E.intl.string(b.default["w+kiDA"]),
    disabled: !t
  }, {
    value: c.MJ.BLACK_SCREEN,
    variant: c.$7.SELF,
    label: E.intl.string(b.default.RRZZZW),
    disabled: !t
  }, {
    value: c.MJ.FREEZING_OR_HITCHING,
    variant: c.$7.SELF,
    label: E.intl.string(b.default["3PKSkZ"]),
    disabled: !t
  }, {
    value: c.MJ.LAG,
    variant: c.$7.SELF,
    label: E.intl.string(b.default.iMxexM),
    disabled: !t
  }, {
    value: c.MJ.BLURRY_OR_PIXELATED,
    variant: c.$7.SELF,
    label: E.intl.string(b.default["8ceyQ0"]),
    disabled: !t
  }, {
    value: c.MJ.NO_AUDIO,
    variant: c.$7.SELF,
    label: E.intl.string(b.default.HaZSCw),
    disabled: !t
  }, {
    value: c.MJ.BAD_AUDIO,
    variant: c.$7.SELF,
    label: E.intl.string(b.default["zIC+8f"]),
    disabled: !t
  }, {
    value: c.MJ.STOPPED_UNEXPECTEDLY,
    variant: c.$7.SELF,
    label: E.intl.string(b.default["/nlKuL"]),
    disabled: !t
  }, {
    value: c.MJ.DESYNC,
    variant: c.$7.SELF,
    label: E.intl.string(b.default.JS6akJ),
    disabled: !t
  }, {
    value: c.MJ.COULD_NOT_LOAD,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.jU9Zs7),
    disabled: t
  }, {
    value: c.MJ.BLACK_SCREEN,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default["aml28/"]),
    disabled: t
  }, {
    value: c.MJ.FREEZING_OR_HITCHING,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.V3EeCA),
    disabled: t
  }, {
    value: c.MJ.LAG,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.hi1Y39),
    disabled: t
  }, {
    value: c.MJ.BLURRY_OR_PIXELATED,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.qdBn3N),
    disabled: t
  }, {
    value: c.MJ.NO_AUDIO,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.DOOloq),
    disabled: t
  }, {
    value: c.MJ.BAD_AUDIO,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.k7bdGB),
    disabled: t
  }, {
    value: c.MJ.STOPPED_UNEXPECTEDLY,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default["jPD99/"]),
    disabled: t
  }, {
    value: c.MJ.DESYNC,
    variant: c.$7.SOMEONE,
    label: E.intl.string(b.default.JfAvQk),
    disabled: t
  }])
}

function _() {
  return N([{
    value: Chunk531578.s_.TOXIC_OR_INAPPROPRIATE,
    variant: Chunk531578.$7.OTHERS,
    label: Chunk388032.intl.string(Chunk760359.default.PLBRzM)
  }])
}