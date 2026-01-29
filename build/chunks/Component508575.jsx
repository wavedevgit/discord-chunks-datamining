/** Chunk was on 87557 **/
/** chunk id: 508575, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./446912.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk412703 = require("./412703.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk927813 = require("./927813.js"),
  Chunk93587 = require("./93587.js");

function c(e) {
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

function d(e, t) {
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
let u = [{
    value: 1,
    label: "Stream Desktop"
  }, {
    value: 0,
    label: "Play Desktop"
  }, {
    value: 3,
    label: "Play Console"
  }, {
    value: 4,
    label: "Play Desktop & Console"
  }, {
    value: 2,
    label: "Watch Video"
  }, {
    value: 5,
    label: "Play Activity"
  }],
  m = function(e) {
    let {
      onSelect: t,
      taskDuration: n = 10,
      taskConfigV2: m
    } = e;
    return (0, a.jsxs)(i.BJc, {
      gap: 20,
      children: [(0, a.jsx)(r.Pw, {
        label: "Task Type(s)",
        className: o.Z,
        placeholder: "Select Task Preset",
        options: u,
        renderOptionValue: e => e.map(e => (0, a.jsx)("div", {
          children: e.label
        }, e.value)),
        renderOptionLabel: e => (0, a.jsx)("div", {
          children: e.label
        }),
        isSelected: e => {
          var t;
          let n, a, r, i, s;
          return e === (t = m.tasks, n = l.n.PLAY_ON_PLAYSTATION in t || l.n.PLAY_ON_XBOX in t, a = l.n.PLAY_ON_DESKTOP in t || l.n.PLAY_ON_DESKTOP_V2 in t, r = l.n.STREAM_ON_DESKTOP in t, i = l.n.WATCH_VIDEO in t, s = l.n.PLAY_ACTIVITY in t, n && a ? 4 : n ? 3 : a ? 0 : r ? 1 : i ? 2 : s ? 5 : true)
        },
        select: e => {
          t(d(c({}, m), {
            tasks: function(e, t) {
              let n = {};
              switch (e) {
                case 1:
                  n[l.n.STREAM_ON_DESKTOP] = {
                    type: l.n.STREAM_ON_DESKTOP,
                    target: t
                  };
                  break;
                case 0:
                  n[l.n.PLAY_ON_DESKTOP] = {
                    type: l.n.PLAY_ON_DESKTOP,
                    target: t
                  };
                  break;
                case 3:
                  n[l.n.PLAY_ON_PLAYSTATION] = {
                    type: l.n.PLAY_ON_PLAYSTATION,
                    target: t,
                    externalIds: []
                  }, n[l.n.PLAY_ON_XBOX] = {
                    type: l.n.PLAY_ON_XBOX,
                    target: t,
                    externalIds: []
                  };
                  break;
                case 4:
                  n[l.n.PLAY_ON_DESKTOP] = {
                    type: l.n.PLAY_ON_DESKTOP,
                    target: t
                  }, n[l.n.PLAY_ON_PLAYSTATION] = {
                    type: l.n.PLAY_ON_PLAYSTATION,
                    target: t,
                    externalIds: []
                  }, n[l.n.PLAY_ON_XBOX] = {
                    type: l.n.PLAY_ON_XBOX,
                    target: t,
                    externalIds: []
                  };
                  break;
                case 2:
                  n[l.n.WATCH_VIDEO] = {
                    type: l.n.WATCH_VIDEO,
                    target: t,
                    assets: {
                      video: {
                        url: ""
                      }
                    },
                    messages: {
                      videoTitle: ""
                    }
                  };
                  break;
                case 5:
                  n[l.n.PLAY_ACTIVITY] = {
                    type: l.n.PLAY_ACTIVITY,
                    target: t
                  }
              }
              return n
            }(e, n)
          }))
        },
        serialize: String,
        "data-migration-pending": true
      }), (0, a.jsx)(i.ksK, {
        label: "Task Duration",
        value: String(n / s.A.Seconds.MINUTE),
        onChange: function(e) {
          let n = Number(e);
          if (isNaN(n)) return;
          n *= s.A.Seconds.MINUTE;
          let a = Object.fromEntries(Object.entries(m.tasks).map(e => {
            let [t, a] = e;
            return [t, d(c({}, a), {
              target: n
            })]
          }));
          t(d(c({}, m), {
            tasks: a
          }))
        }
      })]
    })
  }