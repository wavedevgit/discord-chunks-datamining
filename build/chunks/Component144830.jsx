/** Chunk was on web.js **/
/** chunk id: 144830, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./415506.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk379649 = require("./379649.js"),
  Chunk846519 = require("./846519.js"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
var p = function(e) {
    return e.ACTIVITY_FEED = "ACTIVITY_FEED", e.ACTIVITY_FEED_NEW = "ACTIVITY_FEED_NEW", e.USER_ACTIVITY = "USER_ACTIVITY", e.GAME_LIBRARY_TIME_PLAYED = "GAME_LIBRARY_TIME_PLAYED", e.GAME_LIBRARY_LAST_PLAYED = "GAME_LIBRARY_LAST_PLAYED", e
  }(p || {}),
  h = function(e) {
    return e.START = "START", e.END = "END", e.TIME = "TIME", e
  }(h || {});
let m = e => (t, n) => null == n ? "" : s.intl.format(e(), c({
    time: t
  }, n)),
  g = {
    ACTIVITY_FEED: {
      START: {
        [Chunk379649.J6.SECONDS]: () => Chunk388032.intl.string(Chunk388032.t.ahzZr6),
        [Chunk379649.J6.MINUTES]: e => s.intl.formatToPlainString(s.t["03mIHR"], {
          time: e
        }),
        [Chunk379649.J6.HOURS]: e => s.intl.formatToPlainString(s.t.eNoooa, {
          time: e
        }),
        [Chunk379649.J6.DAYS]: e => s.intl.formatToPlainString(s.t["2rUo/v"], {
          time: e
        })
      },
      END: {
        [Chunk379649.J6.SECONDS]: () => Chunk388032.intl.string(Chunk388032.t.EluAd3),
        [Chunk379649.J6.MINUTES]: e => s.intl.formatToPlainString(s.t.BZxG8f, {
          time: e
        }),
        [Chunk379649.J6.HOURS]: e => s.intl.formatToPlainString(s.t.cRMUp6, {
          time: e
        }),
        [Chunk379649.J6.DAYS]: e => s.intl.formatToPlainString(s.t["yP1T8/"], {
          time: e
        }),
        [Chunk379649.J6.WEEKS]: e => s.intl.formatToPlainString(s.t.AWkdqa, {
          time: e
        }),
        [Chunk379649.J6.MONTHS]: e => s.intl.formatToPlainString(s.t.upamAw, {
          time: e
        }),
        [Chunk379649.J6.YEARS]: e => s.intl.formatToPlainString(s.t.vfMC2t, {
          time: e
        })
      }
    },
    ACTIVITY_FEED_NEW: {
      START: {
        [Chunk379649.J6.SECONDS]: m(() => Chunk388032.t.Bf3PRU),
        [Chunk379649.J6.MINUTES]: m(() => Chunk388032.t["A9P+dX"]),
        [Chunk379649.J6.HOURS]: m(() => Chunk388032.t.KwVzfn),
        [Chunk379649.J6.DAYS]: m(() => Chunk388032.t.hbUpBA)
      },
      END: {
        [Chunk379649.J6.SECONDS]: e => s.intl.formatToPlainString(s.t.C3MTOD, {
          seconds: e
        }),
        [Chunk379649.J6.MINUTES]: e => s.intl.formatToPlainString(s.t["GqQ/Y2"], {
          minutes: e
        }),
        [Chunk379649.J6.HOURS]: e => s.intl.formatToPlainString(s.t.c5zfWV, {
          hours: e
        }),
        [Chunk379649.J6.DAYS]: e => s.intl.formatToPlainString(s.t.amjnaG, {
          days: e
        })
      }
    },
    USER_ACTIVITY: {
      START: {
        [Chunk379649.J6.SECONDS]: () => Chunk388032.intl.string(Chunk388032.t.ahzZr6),
        [Chunk379649.J6.MINUTES]: function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          return n ? s.intl.formatToPlainString(s.t["03mIHR"], {
            time: e
          }) : s.intl.formatToPlainString(s.t["vQml+P"], {
            time: e
          })
        },
        [Chunk379649.J6.HOURS]: function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          return n ? s.intl.formatToPlainString(s.t.eNoooa, {
            time: e
          }) : s.intl.formatToPlainString(s.t["4Wq+6+"], {
            time: e
          })
        },
        [Chunk379649.J6.DAYS]: function(e, t) {
          let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
          return n ? s.intl.formatToPlainString(s.t["2rUo/v"], {
            time: e
          }) : s.intl.formatToPlainString(s.t["jN3/fX"], {
            time: e
          })
        }
      }
    },
    GAME_LIBRARY_TIME_PLAYED: {
      TIME: {
        [Chunk379649.J6.NONE]: () => Chunk388032.intl.string(Chunk388032.t.LqDiCg),
        [Chunk379649.J6.SECONDS]: e => s.intl.formatToPlainString(s.t.xDIDBA, {
          time: e
        }),
        [Chunk379649.J6.MINUTES]: e => s.intl.formatToPlainString(s.t.KGqJcX, {
          time: e
        }),
        [Chunk379649.J6.HOURS]: e => s.intl.formatToPlainString(s.t.OLchUF, {
          time: e
        })
      }
    },
    GAME_LIBRARY_LAST_PLAYED: {
      END: {
        [Chunk379649.J6.NONE]: () => Chunk388032.intl.string(Chunk388032.t.EoWLrq),
        [Chunk379649.J6.SECONDS]: () => Chunk388032.intl.string(Chunk388032.t.QTHa8f),
        [Chunk379649.J6.MINUTES]: e => s.intl.formatToPlainString(s.t.SVEfcX, {
          time: e
        }),
        [Chunk379649.J6.HOURS]: e => s.intl.formatToPlainString(s.t["0Gbusb"], {
          time: e
        }),
        [Chunk379649.J6.DAYS]: e => s.intl.formatToPlainString(s.t.hnPZZ2, {
          time: e
        }),
        [Chunk379649.J6.WEEKS]: e => s.intl.formatToPlainString(s.t.L3fTpK, {
          time: e
        }),
        [Chunk379649.J6.MONTHS]: e => s.intl.formatToPlainString(s.t.xAFWQU, {
          time: e
        }),
        [Chunk379649.J6.YEARS]: e => s.intl.formatToPlainString(s.t["9Yr3NT"], {
          time: e
        })
      }
    }
  };

function E(e, t, n) {
  let r = g[n];
  if (null != r) {
    let n = r[t];
    if (null != n) return null != n[e]
  }
  returnfalse
}

function b(e) {
  var t, n;
  return n = class extends(t = i.PureComponent) {
    componentDidMount() {
      this.timer.start(1e4, this.update)
    }
    componentDidUpdate(e) {
      let {
        start: t,
        end: n,
        time: r
      } = this.props;
      (e.start !== t || e.end !== n || e.time !== r) && this.update()
    }
    componentWillUnmount() {
      this.timer.stop()
    }
    getDiff() {
      let {
        start: e,
        end: t,
        time: n
      } = this.props;
      if (null != n) return n / 1e3 / 60;
      let r = Date.now(),
        i = 0;
      return null != e ? i = r - e : null != t && (i = r - t), Math.abs(i) / 1e3 / 60
    }
    getTimeUnit(e, t, n) {
      let r = (0, o.jU)(e, e => E(e, n, t));
      if (null == r) throw Error("Could not get the time unit in PlayTime with time: ".concat(e, " for type: ").concat(n, " in location: ").concat(t));
      return r
    }
    getType() {
      let {
        start: e,
        end: t,
        time: n
      } = this.props;
      return null != e ? "START" : null != t ? "END" : null != n ? "TIME" : null
    }
    render() {
      let t = this.props,
        {
          location: n,
          messageProps: i,
          isApplicationStreaming: a
        } = t,
        s = f(t, ["location", "messageProps", "isApplicationStreaming"]),
        {
          time: l
        } = this.state,
        u = this.getType();
      if (null == u) return null;
      let _ = this.getTimeUnit(l, n, u),
        p = g[n][u];
      if (null == p) return null;
      let h = p[_],
        m = Math.floor((0, o.A3)(l, _));
      return (0, r.jsx)(e, d(c({}, s), {
        children: null == h ? true : h(m, i, a)
      }))
    }
    constructor(...e) {
      super(...e), l(this, "timer", new a.Xp), l(this, "state", {
        time: this.getDiff()
      }), l(this, "update", () => {
        this.setState({
          time: this.getDiff()
        })
      })
    }
  }, l(n, "Locations", p), l(n, "Types", h), n
}